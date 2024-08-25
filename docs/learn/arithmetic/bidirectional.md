<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

## 概念
双向同时搜索，即同时在起点和终点运行[BFS](./BFS.md)或[DFS](./DFS.md)，若搜索的两端相遇，即为找到路径  
在一些情况下，其速度会比单向搜索更快

## 具体使用
下面为在Box3环境中，实体使用双向A*算法[^1]实现自动寻路的代码  
不考虑其他实体体积和碰撞，位置皆按照整格来计算

=== "旧版编辑器"

    ```javascript
    const Vector3 = Box3Vector3;
    const Bounds3 = Box3Bounds3;
    ```

=== "Arena编辑器"

    ```javascript
    const Vector3 = GameVector3;
    const Bounds3 = GameBounds3;
    ```

### v1
```javascript
const SIDES = [
    new Vector3(-1, 0, 0),
    new Vector3(1, 0, 0),
    new Vector3(0, 0, -1),
    new Vector3(0, 0, 1),
    new Vector3(-1, -1, 0),
    new Vector3(1, -1, 0),
    new Vector3(0, -1, -1),
    new Vector3(0, -1, 1),
    new Vector3(-1, 1, 0),
    new Vector3(1, 1, 0),
    new Vector3(0, 1, -1),
    new Vector3(0, 1, 1),
];
const entityPositionFix = new Vector3(0.5, 0.5, 0.5); // 修复实体位置
const startPosition = new Vector3(128, 9, 128);
const endPosition = new Vector3(243, 19, 11);
const BOUND = new Bounds3(new Vector3(0, 0, 0), new Vector3(256, 64, 256));

const e = world.createEntity({
    mesh: 'mesh/test.vb',   // 假设文件里有一个叫test.vb的实体
    position: startPosition.add(entityPositionFix),
    meshScale: new Vector3(0.0625, 0.0625, 0.0625),
    collides: false,
    fixed: true,
    gravity: false
});
class HeapNode {
    /**@type {Vector3} */
    value = new Vector3();
    /**@type {HeapNode | undefined} */
    child = undefined;
    /**@type {HeapNode | undefined} */
    next = undefined;
    f = 0;
    /**被插入的时间*/
    i = 0;
    /**
     * @param {Vector3} value
     * @param {number} f
     * @param {number} i
     */
    constructor(value, f, i) {
        //console.log(JSON.stringify(value), f)
        this.value = value;
        this.f = f;
        this.i = i;
        this.child = undefined;
        this.next = undefined;
    }
    /**
     * 插入子节点  
     * 若`node.f`小于`this.f`，则`this`成为`node`的子节点
     * @param {HeapNode} node
     * @returns {HeapNode}
     */
    appendChild(node) {
        if (this.value === undefined) { // 如果这是个空节点
            this.value = node.value;
            this.f = node.f;
            this.child = node.child;
            this.next = undefined;
            return this;
        }
        if (HeapNode.compare(this, node)) { // 交换节点数据
            let value = this.value, f = this.f;
            this.value = node.value;
            this.f = node.f;
            node.value = value;
            node.f = f;
        }
        node.next = this.child;
        this.child = node;
        return this;
    }
    /**
     * 移除最小的节点，并返回节点的值
     */
    removeMin() {
        let value = this.value;
        let newHeap = HeapNode.merges(this.child);
        if (newHeap === undefined) { // 变成空节点
            this.value = undefined;
            this.f = NaN;
            this.child = undefined;
        } else {
            this.child = newHeap.child;
            this.value = newHeap.value;
            this.f = newHeap.f;
        }
        return value;
    }
    /**
     * @param {HeapNode} x
     * @returns {HeapNode}
     */
    static merges(x) {
        if (x === undefined || x.next === undefined)
            return x;
        let y = x.next;
        let c = y.next;
        x.next = undefined;
        y.next = undefined;
        return HeapNode.meld(HeapNode.merges(c), HeapNode.meld(x, y));
    }
    /**
     * @param {HeapNode | undefined} a
     * @param {HeapNode | undefined} b
     */
    static meld(a, b) {
        if (a === undefined || a.value === undefined)
            return b;
        if (b === undefined || b.value === undefined)
            return a;
        let _0x01, _0x02;
        if (HeapNode.compare(a, b)) {
            _0x01 = b, _0x02 = a;
        } else {
            _0x01 = a, _0x02 = b;
        }
        _0x02.next = _0x01.child;
        _0x01.child = _0x02;
        return _0x01;
    }
    /**
     * 比较两个节点的`f`；若`f`相同，比较插入顺序  
     * 若a较大，返回`true`
     */
    static compare(a, b) {
        if (a.f === b.f)
            return a.i > b.i;
        else
            return a.f > b.f;
    }
}
/**
 * 获取`a`到`b`的曼哈顿距离
 * @param {Vector3} a
 * @param {Vector3} b
 */
function getDistance(a, b) {
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y) + Math.abs(a.z - b.z)
}
function AStar(s, e, bound) {
    /**@type {number[][][]}*/
    let vis = [],
        /**@type {Vector3[]}*/
        cnt = 2,
        startHeapNode, endHeapNode;
    /**@type {Vector3}*/
    let size = bound.hi.sub(bound.lo);
    if (size.x <= 0 || size.y <= 0 || size.z <= 0) {
        console.warn('无效搜索区域', bound.toString());
        return;
    }
    console.log('搜索尺寸', size.x, size.y, size.z);
    let _s = s.sub(bound.lo), _e = e.sub(bound.lo);
    const getF_start = (v) => Math.floor(getDistance(v, _e) + vis[v.x][v.y][v.z]);
    const getF_end = (v) => Math.floor(getDistance(v, _s) - vis[v.x][v.y][v.z]);
    const checkPosition = (v) => v.x >= 0 && v.x < size.x && v.y >= 0 && v.y < size.y && v.z >= 0 && v.z < size.z;
    const checkVoxel = (v) => voxels.getVoxel(v.x + bound.lo.x, v.y + bound.lo.y, v.z + bound.lo.z) === 0 && (voxels.getVoxel(v.x + bound.lo.x, v.y + bound.lo.y - 1, v.z + bound.lo.z) !== 0);// 禁止穿墙和空中寻路
    const checkVisited = (u, v) => vis[v.x][v.y][v.z] === undefined || vis[v.x][v.y][v.z] > vis[u.x][u.y][u.z] + 1;
    if (!checkPosition(_s))
        throw "起点在区域外";
    if (!checkPosition(_e))
        throw "终点在区域外";
    for (let i = 0; i < size.x; i++) {
        vis.push([]);
        for (let j = 0; j < size.y; j++)
            vis[vis.length - 1].push(new Array(size.z));
    }
    vis[_s.x][_s.y][_s.z] = vis[_e.x][_e.y][_e.z] = 0;
    startHeapNode = new HeapNode(_s.clone(), getF_start(_s));
    endHeapNode = new HeapNode(_e.clone(), getF_end(_e));
    while (startHeapNode.value !== undefined && endHeapNode.value !== undefined) {
        let uStart = startHeapNode.removeMin(),
            uEnd = endHeapNode.removeMin();
        for (const d of SIDES) {
            let vStart = uStart.add(d),
                vEnd = uEnd.sub(d);
            if (checkPosition(vStart) && checkVoxel(vStart)) {
                if (vis[vStart.x][vStart.y][vStart.z] !== undefined && vis[vStart.x][vStart.y][vStart.z] < 0) {
                    cnt++;
                    console.log('找到终点 中点', vStart.x + bound.lo.x, vStart.y + bound.lo.y, vStart.z + bound.lo.z, vis[vStart.x][vStart.y][vStart.z], '共搜索', cnt, '个位置');
                    return [vis, uStart, vStart];
                }
                if (checkVisited(uStart, vStart)) {
                    vis[vStart.x][vStart.y][vStart.z] = vis[uStart.x][uStart.y][uStart.z] + 1;
                    startHeapNode.appendChild(new HeapNode(vStart, getF_start(vStart)));
                    cnt++;
                }
            }
            if (checkPosition(vEnd) && checkVoxel(vEnd)) {
                if (vis[vEnd.x][vEnd.y][vEnd.z] !== undefined && vis[vEnd.x][vEnd.y][vEnd.z] > 0) {
                    cnt++;
                    console.log('找到终点 中点', vEnd.x + bound.lo.x, vEnd.y + bound.lo.y, vEnd.z + bound.lo.z, vis[vEnd.x][vEnd.y][vEnd.z], '共搜索', cnt, '个位置');
                    return [vis, vEnd, uEnd];
                }
                if (checkVisited(vEnd, vEnd)) {
                    vis[vEnd.x][vEnd.y][vEnd.z] = vis[uEnd.x][uEnd.y][uEnd.z] - 1;
                    endHeapNode.appendChild(new HeapNode(vEnd, getF_end(vEnd)));
                    cnt++;
                }
            }
        }
    }
    console.warn('搜索完成，未找到终点', '共搜索', cnt, '个位置');
    return null;
}
function findPath(s, e, bound) {
    if(SIDES.length > 255)
        throw "太多方向";
    console.log('开始搜索');
    let startTime = Date.now();
    let searchResult = AStar(s, e, bound);
    console.log('搜索完成', '用时', Date.now() - startTime, 'ms');
    let vis = searchResult[0];
    if (vis === null)
        throw "找不到路径";
    let resultStart = [], resultEnd = [], 
        nowStart = new Vector3(Math.round(searchResult[1].x - bound.lo.x), Math.round(searchResult[1].y - bound.lo.y), Math.round(searchResult[1].z - bound.lo.z));
        nowEnd = new Vector3(Math.round(searchResult[2].x - bound.lo.x), Math.round(searchResult[2].y - bound.lo.y), Math.round(searchResult[2].z - bound.lo.z));
    resultStart.push(nowStart.add(bound.lo));
    resultEnd.push(nowEnd.add(bound.lo));
    const check = (v) => v.x >= 0 && v.x < vis.length && v.y >= 0 && v.y < vis[v.x].length && v.z >= 0 && v.z < vis[v.x][v.y].length;
    let notFoundStart = true, notFoundEnd = true;
    do {
        let vStart, vEnd;
        for (const d of SIDES) {
            vStart = nowStart.add(d);
            vEnd = nowEnd.sub(d);
            if (notFoundStart && check(vStart)){
                if (vis[nowStart.x][nowStart.y][nowStart.z] - 1 === vis[vStart.x][vStart.y][vStart.z]) {
                    let _v = vStart.add(bound.lo);
                    resultStart.push(_v);
                    if(_v.equals(s))
                        notFoundStart = false;
                    nowStart.copy(vStart);
                }
            }
            if (notFoundEnd && check(vEnd)){
                if (vis[nowEnd.x][nowEnd.y][nowEnd.z] + 1 === vis[vEnd.x][vEnd.y][vEnd.z]) {
                    let _v = vEnd.add(bound.lo);
                    resultEnd.push(_v);
                    if(_v.equals(e))
                        notFoundEnd = false;
                    nowEnd.copy(vEnd);
                }
            }
        }
        if (vStart === undefined || vEnd === undefined)
            throw "找不到路径";
    } while (notFoundStart || notFoundEnd);
    return resultStart.reverse().concat(resultEnd);
}

world.onPlayerJoin(async ({ entity }) => {
    entity.player.spectator = true;
    entity.player.invisible = true;
    entity.player.cameraEntity = e;
    console.log('开始寻路');
    const PATH = findPath(startPosition, endPosition, BOUND);
    console.log('路径长度', PATH.length);
    for (let p of PATH) {
        await sleep(100);//entity.player.nextPress();
        e.position.copy(p.add(entityPositionFix));
        console.log(p.toString());
    }
    console.log('完成');
});
```

### v2
直接返回路径结果，不再通过[vis](variable)反推<span class="hidden">这个持续了6版代码的屎山终于改了</span>[^2]

!!! warning "警告"

    这一版代码相对于前一版的代码，输出和调用方法有较大变动

```javascrpt
// 有点bug 有时间写
```

[^1]: 基于A* v3算法改
[^2]: 包含BFS、DFS、AStar v1、AStar v2、AStar v3、AStar 双向 v1
