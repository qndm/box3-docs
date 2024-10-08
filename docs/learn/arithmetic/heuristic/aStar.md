<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

## 概念
A*（A-Star）搜索算法是[BFS](../BFS.md)算法的改进版本  
A*算法通过计算出每个节点的代价来选出最优路线

下面用一个例子来描述A*算法的过程，其中`*`为障碍物，`+`代表起点，`-`代表终点，只允许竖直和水平方向上移动
```
A . . . . . .
+ B . . * . -
C . . . * . .
```
在第一次搜索的时候，会搜索`A`、`B`、`C`三个节点，这起点到这三个点所需走的距离，我们分别记作$g_A$、$g_B$、$g_C$，这三个点走到终点 **大概** 需要走多远分别记作$h_A$、$h_B$、$h_C$  
我们没办法在不搜索的情况下确切的知道这三个点到终点具体要走多远，但我们可以大概估计  
用什么来估计呢？我们可以用距离来估计，因为距离可以根据坐标来直接计算  
一般我们用两种距离计算方法，一种是欧几里得距离（就是常说的直线距离，三维计算公式为$\sqrt{(x_1-x_2)^2+(y_1-y_2)^2+(z_1-z_2)^2}$），另一种是曼哈顿距离（就是两点坐标各个方向差值的和，三维计算公式为$|x_1-x_2|+|y_1-y_2|+|z_1-z_2|$）  
在这里，我们使用曼哈顿距离（一是不用开方，更快；二是这个例子不能写着走）  
那我们就能计算出若走`X`节点，估计距离$f_X=g_X+h_X$  
我们来带入例子实际试一下  
由于都是从起点出发，$g_A=g_B=g_C=1$  
$h_A=6+1=7$  
$h_B=5+0=5$  
$h_C=6+1=7$  
我们就可以推出：  
$f_A=g_A+h_A=8$  
$f_B=g_B+h_B=6$  
$f_C=g_C+h_C=8$  
非常明显，`B`节点的$f$最小，即`B`节点的估计距离最小  
算法会依次搜索队列中$f$最小的节点  
一般情况下，当搜索到终点时，就不会再搜索了<span class="hidden">不然就会失去其相对于BFS的速度优势</span>

!!! info "提示"

    和BFS/DFS不同，A*算法可能会重复搜索非起点/终点节点

!!! warning "警告"
    在这里$g_A=g_B=g_C=1$，但不代表$g_A=g_B=g_C$恒成立  
    要是直接$f_X=h_X$，那么就会变成<span class="hidden">一条路走到头的地毯式搜索</span><span class="hidden">（别问我是怎么知道的）</span>

!!! note "提示"

    你可能想过，可以通过制造一条距离很短但路程很长的道路来迷惑算法，但这事实上这是不可能的  
    因为$f_X=g_X+h_X$，算法开始确实会搜索那条道路，但当走到了一定程度时，$g_X$就会过大导致$f_X$会比其他节点都大<span class="hidden">原形毕露了</span>，算法就暂时不会继续搜索这条道路了  
    若是通过别的道路搜索找到了终点，那么搜索就会停止，那条道路也就不会继续搜索了

## 具体使用
下面为在Box3环境中，实体使用A*算法实现自动寻路的代码  
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

const e = world.createEntity({
    mesh: 'mesh/test.vb',   // 假设文件里有一个叫test.vb的实体
    position: startPosition.add(entityPositionFix),
    meshScale: new Vector3(0.0625, 0.0625, 0.0625),
    collides: false,
    fixed: true,
    gravity: false
});
/**
 * 获取`a`到`b`的曼哈顿距离
 * @param {Vector3} a
 * @param {Vector3} b
 */
function getDistance(a, b){
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y) + Math.abs(a.z - b.z)
}
function AStar(s, e) {
    /**@type {number[][][]}*/
    let vis = [],
        /**@type {Vector3[]}*/
        que = [], cnt = 1;
    // 手动修正Box3的bug
    // 测试地图为256地图 不同地图需要手动修改数值
    voxels.shape.set(255, 63, 255);
    console.log('地图尺寸', voxels.shape.x, voxels.shape.y, voxels.shape.z);
    for (let i = 0; i < voxels.shape.x; i++) {
        vis.push([]);
        for (let j = 0; j < voxels.shape.y; j++)
            vis[vis.length - 1].push(new Array(voxels.shape.z));
    }
    que.push(s.clone());
    vis[s.x][s.y][s.z] = 0;
    while (que.length > 0) {
        let minF = Infinity, minIndex = 0;
        for(let index in que){
            let f = getDistance(que[index], e) + vis[que[index].x][que[index].y][que[index].z];
            if(f < minF){
                minF = f;
                minIndex = index;
            }
        }
        let u = que[minIndex];
        que.splice(minIndex, 1);
        for (const d of SIDES) {
            let v = u.add(d);
            if (v.x < 0 || v.x >= voxels.shape.x || v.y < 0 || v.y >= voxels.shape.y || v.z < 0 || v.z >= voxels.shape.z)
                continue;
            if (vis[v.x][v.y][v.z] !== undefined && vis[v.x][v.y][v.z] <= vis[u.x][u.y][u.z] + 1)
                continue;
            if (voxels.getVoxel(v.x, v.y, v.z) !== 0 || (voxels.getVoxel(v.x, v.y - 1, v.z) === 0)) // 禁止穿墙和空中寻路
                continue;
            vis[v.x][v.y][v.z] = vis[u.x][u.y][u.z] + 1;
            que.push(v);
            if (v.equals(e)) {
                console.log('找到终点', v.x, v.y, v.z, vis[v.x][v.y][v.z], '共搜索', cnt, '个位置');
                return vis;
            }
            cnt++;
        }
    }
    console.warn('搜索完成，未找到终点', '共搜索', cnt, '个位置');
    return vis;
}
function findPath(map, s, e) {
    if (map[endPosition.x][endPosition.y][endPosition.z] === undefined)
        throw "无效数据";
    let result = [], now = new Vector3(Math.round(e.x), Math.round(e.y), Math.round(e.z));
    result.push(now.clone());
    do {
        let v;
        for (const d of SIDES) {
            v = now.add(d);
            if (v.x < 0 || v.x >= map.length || v.y < 0 || v.y >= map[now.x].length || v.z < 0 || v.z >= map[now.x][now.y].length)
                continue;
            if (map[now.x][now.y][now.z] - 1 === map[v.x][v.y][v.z]) {
                result.push(v);
                now.copy(v);
                break;
            }
        }
        if (v === undefined)
            throw "找不到路径";
    } while (!result[result.length - 1].equals(s));
    return result.reverse();
}

world.onPlayerJoin(async ({ entity }) => {
    entity.player.spectator = true;
    entity.player.invisible = true;
    entity.player.cameraEntity = e;
    console.log('开始搜索');
    let startTime = Date.now()
    const MAP = AStar(startPosition, endPosition);
    console.log('寻路完成 长度', MAP[endPosition.x][endPosition.y][endPosition.z], '用时', Date.now() - startTime, 'ms');
    console.log('开始寻路');
    const PATH = findPath(MAP, startPosition, endPosition);
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
由于暴力枚举造成了大量的性能浪费，导致一些情况下在搜索更少方块的情况下用时反而更长  
下面是优化过的代码，使用配对堆代替[que](variable)数组，避免了寻找最小值时的暴力枚举<span>10%写代码，90%修bug</span>  
由于
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
        //console.log('移除最小节点')
        let value = this.value;
        let newHeap = HeapNode.merges(this.child);
        if (newHeap === undefined) { // 变成空节点
            this.value = undefined;
            this.f = NaN;
            this.child = undefined;
            //console.log('节点为空');
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
        if(HeapNode.compare(a, b)){
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
    static compare(a, b){
        if(a.f === b.f)
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
function AStar(s, e) {
    const getF = (v) => Math.floor(getDistance(v, e) + vis[v.x][v.y][v.z]);
    /**@type {number[][][]}*/
    let vis = [],
        /**@type {Vector3[]}*/
        cnt = 1,
        initHeapNode;
    // 手动修正Box3的bug
    // 测试地图为256地图 不同地图需要手动修改数值
    voxels.shape.set(255, 63, 255);
    console.log('地图尺寸', voxels.shape.x, voxels.shape.y, voxels.shape.z);
    for (let i = 0; i < voxels.shape.x; i++) {
        vis.push([]);
        for (let j = 0; j < voxels.shape.y; j++)
            vis[vis.length - 1].push(new Array(voxels.shape.z));
    }
    vis[s.x][s.y][s.z] = 0;
    initHeapNode = new HeapNode(s.clone(), getF(s));
    while (initHeapNode.value !== undefined) {
        let u = initHeapNode.removeMin();
        for (const d of SIDES) {
            let v = u.add(d);
            if (v.x < 0 || v.x >= voxels.shape.x || v.y < 0 || v.y >= voxels.shape.y || v.z < 0 || v.z >= voxels.shape.z)
                continue;
            if (vis[v.x][v.y][v.z] !== undefined && vis[v.x][v.y][v.z] <= vis[u.x][u.y][u.z] + 1)
                continue;
            if (voxels.getVoxel(v.x, v.y, v.z) !== 0 || (voxels.getVoxel(v.x, v.y - 1, v.z) === 0)) // 禁止穿墙和空中寻路
                continue;
            vis[v.x][v.y][v.z] = vis[u.x][u.y][u.z] + 1;
            initHeapNode.appendChild(new HeapNode(v, getF(v)));
            if (v.equals(e)) {
                console.log('找到终点', v.x, v.y, v.z, vis[v.x][v.y][v.z], '共搜索', cnt, '个位置');
                return vis;
            }
            cnt++;
        }
    }
    console.warn('搜索完成，未找到终点', '共搜索', cnt, '个位置');
    return vis;
}
function findPath(map, s, e) {
    if (map[endPosition.x][endPosition.y][endPosition.z] === undefined)
        throw "无效数据";
    let result = [], now = new Vector3(Math.round(e.x), Math.round(e.y), Math.round(e.z));
    result.push(now.clone());
    do {
        let v;
        for (const d of SIDES) {
            v = now.add(d);
            if (v.x < 0 || v.x >= map.length || v.y < 0 || v.y >= map[now.x].length || v.z < 0 || v.z >= map[now.x][now.y].length)
                continue;
            if (map[now.x][now.y][now.z] - 1 === map[v.x][v.y][v.z]) {
                result.push(v);
                now.copy(v);
                break;
            }
        }
        if (v === undefined)
            throw "找不到路径";
    } while (!result[result.length - 1].equals(s));
    return result.reverse();
}

world.onPlayerJoin(async ({ entity }) => {
    entity.player.spectator = true;
    entity.player.invisible = true;
    entity.player.cameraEntity = e;
    console.log('开始搜索');
    let startTime = Date.now()
    const MAP = AStar(startPosition, endPosition);
    console.log('寻路完成 长度', MAP[endPosition.x][endPosition.y][endPosition.z], '用时', Date.now() - startTime, 'ms');
    console.log('开始寻路');
    const PATH = findPath(MAP, startPosition, endPosition);
    console.log('路径长度', PATH.length);
    for (let p of PATH) {
        await sleep(100);//entity.player.nextPress();
        e.position.copy(p.add(entityPositionFix));
        console.log(p.toString());
    }
    console.log('完成');
});
```

### v3
支持区域内寻路<span class="hidden">不用手动修正bug了</span>  

!!! info "警告"

    这一版代码相对于前一版的代码，简化了调用方法

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
const BOUND = new Bounds3(new Vector3(128, 9, 0), new Vector3(256, 20, 129));

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
        cnt = 1,
        initHeapNode;
    /**@type {Vector3}*/
    let size = bound.hi.sub(bound.lo);
    if (size.x <= 0 || size.y <= 0 || size.z <= 0) {
        console.warn('无效搜索区域', bound.toString());
        return;
    }
    console.log('搜索尺寸', size.x, size.y, size.z);
    if(s.x < bound.lo.x || s.x >= bound.hi.x || s.y < bound.lo.y || s.y >= bound.hi.y || s.z < bound.lo.z || s.z >= bound.hi.z)
        throw "起点在区域外";
    if(e.x < bound.lo.x || e.x >= bound.hi.x || e.y < bound.lo.y || e.y >= bound.hi.y || e.z < bound.lo.z || e.z >= bound.hi.z)
        throw "终点在区域外";
    let _s = s.sub(bound.lo), _e = e.sub(bound.lo);
    const getF = (v) => Math.floor(getDistance(v, _e) + vis[v.x][v.y][v.z]);
    for (let i = 0; i < size.x; i++) {
        vis.push([]);
        for (let j = 0; j < size.y; j++)
            vis[vis.length - 1].push(new Array(size.z));
    }
    vis[_s.x][_s.y][_s.z] = 0;
    initHeapNode = new HeapNode(_s.clone(), getF(_s));
    while (initHeapNode.value !== undefined) {
        let u = initHeapNode.removeMin();
        for (const d of SIDES) {
            let v = u.add(d);
            if (v.x < 0 || v.x >= size.x || v.y < 0 || v.y >= size.y || v.z < 0 || v.z >= size.z)
                continue;
            if (vis[v.x][v.y][v.z] !== undefined && vis[v.x][v.y][v.z] <= vis[u.x][u.y][u.z] + 1)
                continue;
            if (voxels.getVoxel(v.x + bound.lo.x, v.y + bound.lo.y, v.z + bound.lo.z) !== 0 || (voxels.getVoxel(v.x + bound.lo.x, v.y + bound.lo.y - 1, v.z + bound.lo.z) === 0)) // 禁止穿墙和空中寻路
                continue;
            vis[v.x][v.y][v.z] = vis[u.x][u.y][u.z] + 1;
            initHeapNode.appendChild(new HeapNode(v, getF(v)));
            if (v.equals(_e)) {
                console.log('找到终点', v.x + bound.lo.x, v.y + bound.lo.y, v.z + bound.lo.z, vis[v.x][v.y][v.z], '共搜索', ++cnt, '个位置');
                return vis;
            }
            cnt++;
        }
    }
    console.warn('搜索完成，未找到终点', '共搜索', cnt, '个位置');
    return null;
}
function findPath(s, e, bound) {
    console.log('开始搜索');
    let startTime = Date.now()
    let vis = AStar(s, e, bound);
    console.log('寻路完成', '用时', Date.now() - startTime, 'ms');
    if (vis === null)
        throw "找不到路径";
    let result = [], now = new Vector3(Math.round(e.x - bound.lo.x), Math.round(e.y - bound.lo.y), Math.round(e.z - bound.lo.z));
    result.push(now.add(bound.lo));
    do {
        let v;
        for (const d of SIDES) {
            v = now.add(d);
            if (v.x < 0 || v.x >= vis.length || v.y < 0 || v.y >= vis[now.x].length || v.z < 0 || v.z >= vis[now.x][now.y].length)
                continue;
            if (vis[now.x][now.y][now.z] - 1 === vis[v.x][v.y][v.z]) {
                result.push(v.add(bound.lo));
                now.copy(v);
                break;
            }
        }
        if (v === undefined)
            throw "找不到路径";
    } while (!result[result.length - 1].equals(s));
    return result.reverse();
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