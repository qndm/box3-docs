<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

## 概念
[BFS（Breadth First Search）](https://en.wikipedia.org/wiki/Breadth-first_search)，宽度优先算法（又名广度优先算法），宽度优先就是每次都尝试访问同一层的节点。 如果同一层都访问完了，再访问下一层  
下面是一个例子，`*`代表起始点，不同位置的数字代表第几层（同时等于最短路径长度），在此示例中，只能水平和竖直方向上搜索  
使用BFS算法，可以快速地找到路径最短路程

=== "0"

    ```
    * ? ? ? ?
    ? ? ? ? ?
    ? ? ? ? ?
    ? ? ? ? ?
    ? ? ? ? ?
    ```

=== "1"

    ```
    * 1 ? ? ?
    1 ? ? ? ?
    ? ? ? ? ?
    ? ? ? ? ?
    ? ? ? ? ?
    ```
=== "2"

    ```
    * 1 2 ? ?
    1 2 ? ? ?
    2 ? ? ? ?
    ? ? ? ? ?
    ? ? ? ? ?
    ```
=== "3"

    ```
    * 1 2 3 ?
    1 2 3 ? ?
    2 3 ? ? ?
    3 ? ? ? ?
    ? ? ? ? ?
    ```

=== "4"

    ```
    * 1 2 3 4
    1 2 3 4 ?
    2 3 4 ? ?
    3 4 ? ? ?
    4 ? ? ? ?
    ```

=== "5"

    ```
    * 1 2 3 4
    1 2 3 4 5
    2 3 4 5 ?
    3 4 5 ? ?
    4 5 ? ? ?
    ```

=== "6"

    ```
    * 1 2 3 4
    1 2 3 4 5
    2 3 4 5 6
    3 4 5 6 ?
    4 5 6 ? ?
    ```

=== "7"

    ```
    * 1 2 3 4
    1 2 3 4 5
    2 3 4 5 6
    3 4 5 6 7
    4 5 6 7 ?
    ```

=== "8"

    ```
    * 1 2 3 4
    1 2 3 4 5
    2 3 4 5 6
    3 4 5 6 7
    4 5 6 7 8
    ```

## 实现
一般的BFS算法使用队列Queue处理，C++中可以使用STL中的queue，Python可以使用Queue库，Javascript没有专门的队列，但可以使用数组实现  
本文档中仅提供二维BFS的代码  

!!! warning "警告"

    请不要将n、m的值设置的太大，在C++中，若n、m的值大于`10000`，会导致数组下标越界导致程序出错  
    并且过大的值也会造成大量的内存占用，若n、m的值都为`10000`，即使使用C++，光是储存[vis](variable)都会占用约$381.4697MiB$（$400MB$）内存；Python和Javascript只会占用比其更大的内存  
    若是设置为`32768`（实际上会数组下标越界），理论上会占用$4GiB$（约$4.2950GB$）内存

### 二维BFS
=== "C++"

    ```cpp
    #include <stdio.h>
    #include <queue>
    using namespace std;
    struct Vector2
    {
        int x = 0, y = 0;

        Vector2 operator+(Vector2 v)
        {
            return {x + v.x, y + v.y};
        }
    };
    // vis: 储存所有搜索过的格子  n、m: 地图尺寸
    int vis[10000][10000], n, m;

    const Vector2 SIDES[] = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};

    // 搜索点坐标
    Vector2 now, u, v;
    void BFS()
    {
        queue<Vector2> que;
        que.push(now);
        vis[now.x][now.y] = 1;
        while (!que.empty())
        {
            u = que.front();
            que.pop();
            for (int i = 0; i < 4; i++)
            {
                Vector2 v = u + SIDES[i];
                if (v.x < 0 || v.x >= n || v.y < 0 || v.y >= m)
                    continue;
                if (vis[v.x][v.y] != 0)
                    continue;
                // 在这里添加if(...) continue; 实现避开障碍物的效果
                vis[v.x][v.y] = vis[u.x][u.y] + 1;
                que.push(v);
            }
        }
    }
    int main()
    {
        scanf("%d%d%d%d", &n, &m, &now.x, &now.y);
        BFS();
        for (int x = 0; x < n; x++)
        {
            for (int y = 0; y < m; y++)
            {
                printf("%d ", vis[x][y] - 1);
            }
            putchar('\n');
        }
        return 0;
    }
    ```

=== "Python"

    ```python
    from queue import Queue
    class Vector2:
        x = 0
        y = 0
        def __init__(self, x, y):
            self.x = x
            self.y = y
        def add(self, v):
            return Vector2(self.x + v.x, self.y + v.y)

    SIDES = (Vector2(-1, 0), Vector2(1, 0), Vector2(0, -1), Vector2(0, 1))
    vis = []
    n = 10
    m = 10

    def BFS(s: Vector2):
        que = Queue()
        vis[s.x][s.y] = 0
        que.put(s)
        while not que.empty():
            u: Vector2 = que.get()
            for d in SIDES:
                v = u.add(d)
                if v.x < 0 or v.x >= n or v.y < 0 or v.y >= m:
                    continue
                if vis[v.x][v.y] != -1:
                    continue
                # 在这里添加
                # if ...:
                #     continue
                # 实现避开障碍物的效果
                vis[v.x][v.y] = vis[u.x][u.y] + 1
                que.put(v)

    n = int(input())
    m = int(input())
    for i in range(0, n):
        l = []
        for j in range(0, m):
            l.append(-1)
        vis.append(l)

    sx = int(input())
    sy = int(input())
    BFS(Vector2(sx, sy))
    for i in range(0, n):
        for j in range(0, m):
            print(vis[i][j], end=' ')
        print('')
    ```

=== "Javascript"

    ```javascript
    class Vector2 {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        /**
         * @param {Vector2} v 
         * @returns {Vector2}
         */
        add(v) {
            return new Vector2(this.x + v.x, this.y + v.y);
        }
        clone() {
            return new Vector2(this.x, this.y);
        }
    }

    const SIDES = [new Vector2(-1, 0), new Vector2(1, 0), new Vector2(0, -1), new Vector2(0, 1)];

    /**
     * BFS算法示例
     * @param {Vector2} s 起始点坐标
     * @param {number} n x尺寸
     * @param {number} m y尺寸
     * @returns {number[][]}
     */
    function BFS(s, n, m) {
        let vis = [], que = [];
        for(let i = 0; i < n; i++)
            vis.push(new Array(m).fill(-1));
        que.push(s.clone());
        vis[s.x][s.y] = 0;
        while (que.length > 0) {
            let u = que[0];
            que.splice(0, 1);
            for (const d of SIDES) {
                let v = u.add(d);
                if(v.x < 0 || v.x >= n || v.y < 0 || v.y >= m)
                    continue;
                if(vis[v.x][v.y] !== -1)
                    continue;
                // 在这里添加if(...) continue; 实现避开障碍物的效果
                vis[v.x][v.y] = vis[u.x][u.y] + 1;
                que.push(v);
            }
        }
        return vis;
    }

    let result = BFS(new Vector2(5, 5), 10, 10);
    for(let line in result)
        console.log(result[line].join(' '));
    ```

    你也许注意到了，这里初始化[vis](variable)是使用了[for](keyword)+[fill](method)组合的方式，为什么不直接`#!javascript let vis = Array(n).fill(Array(m).fill(-1))`呢？  
    因为[fill](method)方法的大致实现是这样的：

    ```javascript
    // this为该数组本身
    fill: (value, start = 0, end = this.length) => {
        for(let i = start; i < end; i++) {
            this[i] = value;
        }
    }
    ```
    一眼看上去没问题是吧？实际上，Javascript存在 **值类型** 和 **引用数据类型** 两类数据类型  
    在所有数据类型中，只有[](string)、[](number)、[](boolean)、[](null)、[](undefined)、[](Symbol)为 **值类型** ，值类型在赋值的时候会直接把 **数据本身** 赋值给变量/属性  
    举个例子：
    ```javascript
    let a = 1;
    let b = a;
    a = 2;
    console.log(b); // 1
    ```

    而引用类型包含[](object)（包含[](Array)、[](Function)、[](RegExp)、[](Date)等）类型，引用类型在赋值的时候会将该类型的引用赋值给变量/属性  
    简单来说，要是有一个[](object)类型的变量[a](variable)，将a的值赋值给b，则b就是a的引用，b变成了a的别名，除非将b赋予了其他值
    用代码表示即：
    ```javascript
    let a = [1];
    let b = a;
    a[0] = 2;
    console.log(b[0]); // 2
    b = [-1];
    a[0] = 3;
    console.log(b[0]); // -1
    ```

    [vis](variable)的值属于引用类型，若使用[fill](method)方法，那么[vis](variable)的所有成员都是填入的那个数组的引用，修改其中任意一个成员的成员的值，其他成员的成员的值也会发生变化

## 具体使用
下面为在Box3环境中，实体使用BFS算法实现自动寻路的代码  
不考虑其他实体体积和碰撞，位置皆按照整格来计算  
=== "旧版编辑器"

    ```javascript
    const Vector3 = Box3Vector3;
    ```

=== "Arena编辑器"

    ```javascript
    const Vector3 = GameVector3;
    ```

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
function BFS(s, e) {
    /**@type {number[][][]}*/
    let vis = [],
        /**@type {Vector3[]}*/
        que = [], found = false, cnt = 1;
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
    while (que.length > 0 && !found) {
        let u = que[0];
        que.splice(0, 1);
        for (const d of SIDES) {
            let v = u.add(d);
            if (v.x < 0 || v.x >= voxels.shape.x || v.y < 0 || v.y >= voxels.shape.y || v.z < 0 || v.z >= voxels.shape.z)
                continue;
            if (vis[v.x][v.y][v.z] !== undefined)
                continue;
            if (voxels.getVoxel(v.x, v.y, v.z) !== 0 || voxels.getVoxel(v.x, v.y - 1, v.z) === 0) // 禁止穿墙和空中寻路
                continue;
            vis[v.x][v.y][v.z] = vis[u.x][u.y][u.z] + 1;
            que.push(v);
            if (v.equals(e)) {
                found = true;
                console.log('找到终点', v.x, v.y, v.z, vis[v.x][v.y][v.z]);
                break;
            }
            cnt++;
        }
    }
    console.log('搜索完成，共搜索', cnt, '个位置');
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
    const MAP = BFS(startPosition, endPosition);
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