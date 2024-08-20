<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

## 概念
[DFS（Depth First Search）](https://en.wikipedia.org/wiki/Depth-first_search)，深度优先算法，深度优先就是搜索到一个节点之后继续搜索下一个节点，直到无法继续搜索  
和BFS不同，DFS第一次搜索到的结果不一定是距离最短的；若要找到最短路线，需要在一个节点搜索多次，具体见下面的C++实现
下面是一个示例，`*`代表障碍物
=== "0"

    ```
    0 ? ? ? ?
    * ? * * ?
    * ? * * ?
    ? ? ? * ?
    ? * ? * ?
    ```


=== "1"

    ```
    0 1 ? ? ?
    * ? * * ?
    * ? * * ?
    ? ? ? * ?
    ? * ? * ?
    ```

=== "1-1"

    ```
    0 1 2 ? ?
    * ? * * ?
    * ? * * ?
    ? ? ? * ?
    ? * ? * ?
    ```

=== "1-2"

    ```
    0 1 2 3 ?
    * ? * * ?
    * ? * * ?
    ? ? ? * ?
    ? * ? * ?
    ```

=== "1-3"

    ```
    0 1 2 3 4
    * ? * * ?
    * ? * * ?
    ? ? ? * ?
    ? * ? * ?
    ```

=== "1-4"

    ```
    0 1 2 3 4
    * ? * * 5
    * ? * * ?
    ? ? ? * ?
    ? * ? * ?
    ```

=== "1-5"

    ```
    0 1 2 3 4
    * ? * * 5
    * ? * * 6
    ? ? ? * ?
    ? * ? * ?
    ```

=== "1-6"

    ```
    0 1 2 3 4
    * ? * * 5
    * ? * * 6
    ? ? ? * 7
    ? * ? * ?
    ```

=== "1-7"

    ```
    0 1 2 3 4
    * ? * * 5
    * ? * * 6
    ? ? ? * 7
    ? * ? * 8
    ```

=== "2-1"

    ```
    0 1 2 3 4
    * 2 * * 5
    * ? * * 6
    ? ? ? * 7
    ? * ? * 8
    ```

=== "2-2"

    ```
    0 1 2 3 4
    * 2 * * 5
    * 3 * * 6
    ? ? ? * 7
    ? * ? * 8
    ```

=== "2-3"

    ```
    0 1 2 3 4
    * 2 * * 5
    * 3 * * 6
    ? 4 ? * 7
    ? * ? * 8
    ```

=== "2-1-1"

    ```
    0 1 2 3 4
    * 2 * * 5
    * 3 * * 6
    5 4 ? * 7
    ? * ? * 8
    ```

=== "2-1-2"

    ```
    0 1 2 3 4
    * 2 * * 5
    * 3 * * 6
    5 4 ? * 7
    6 * ? * 8
    ```

=== "2-2-1"

    ```
    0 1 2 3 4
    * 2 * * 5
    * 3 * * 6
    5 4 5 * 7
    6 * ? * 8
    ```

=== "2-2-2"

    ```
    0 1 2 3 4
    * 2 * * 5
    * 3 * * 6
    5 4 5 * 7
    6 * 6 * 8
    ```

## 实现
DFS的实现有很多，可以基于递归和栈

### 二维DFS
#### 递归实现
=== "C++"

    ```cpp
    #include <stdio.h>
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
    void DFS(Vector2 u)
    {
        vis[u.x][u.y]++;
        for (int i = 0; i < 4; i++)
        {
            Vector2 v = u + SIDES[i];
            if (v.x < 0 || v.x >= n || v.y < 0 || v.y >= m)
                continue;
            if (vis[v.x][v.y] != 0/* && vis[v.x][v.y] < vis[u.x][u.y] + 1*/) // 把注释去掉会变成自动寻找最短路线
                continue;
            // 在这里添加if(...) continue; 实现避开障碍物的效果
            vis[v.x][v.y] = vis[u.x][u.y];
            DFS(v);
        }
    }
    int main()
    {
        scanf("%d%d%d%d", &n, &m, &now.x, &now.y);
        DFS(now);
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

    def DFS(u: Vector2):
        vis[u.x][u.y] += 1
        for i in range(0, 4):
            v: Vector2 = u.add(SIDES[i])
            if v.x < 0 or v.x >= n or v.y < 0 or v.y >= m:
                continue
            if vis[v.x][v.y] != -1:
                continue
            vis[v.x][v.y] = vis[u.x][u.y]
            DFS(v)

    n = int(input())
    m = int(input())
    for i in range(0, n):
        l = []
        for j in range(0, m):
            l.append(-1)
        vis.append(l)

    sx = int(input())
    sy = int(input())
    DFS(Vector2(sx, sy))
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
    let n = 10, m = 10;
    let vis = [];
    for(let i = 0; i < n; i++)
        vis.push(new Array(m).fill(-1));

    /**
     * DFS算法示例
     * @param {Vector2} u 起始点坐标
     */
    function DFS(u) {
        vis[u.x][u.y]++;
        for(let d of SIDES){
            let v = u.add(d);
            if(v.x < 0 || v.x >= n || v.y < 0 || v.y >= m)
                continue;
            if(vis[v.x][v.y] !== -1)
                continue;
            // 在这里添加if(...) continue; 实现避开障碍物的效果
            vis[v.x][v.y] = vis[u.x][u.y];
            DFS(v);
        }
    }

    DFS(new Vector2(5, 5));
    for(let line in vis)
        console.log(vis[line].join(' '));
    ```

#### 栈实现
基于栈实现的DFS和BFS十分相似，只是把队列换成了栈

=== "C++"

    ```cpp
    #include <stdio.h>
    #include <stack>
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
    void DFS(Vector2 s)
    {
        stack<Vector2> sta;
        vis[s.x][s.y] = 1;
        sta.push(s);
        while (!sta.empty())
        {
            Vector2 u = sta.top();
            sta.pop();
            for (int i = 0; i < 4; i++)
            {
                Vector2 v = u + SIDES[i];
                if (v.x < 0 || v.x >= n || v.y < 0 || v.y >= m)
                    continue;
                if (vis[v.x][v.y] != 0)
                    continue;
                // 在这里添加if(...) continue; 实现避开障碍物的效果
                vis[v.x][v.y] = vis[u.x][u.y] + 1;
                sta.push(v);
            }
        }
    }
    int main()
    {
        scanf("%d%d%d%d", &n, &m, &now.x, &now.y);
        DFS(now);
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

    def DFS(s: Vector2):
        sta = []
        vis[s.x][s.y] = 0
        sta.append(s)
        while len(sta) > 0:
            u: Vector2 = sta.pop()
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
                sta.append(v)

    n = int(input())
    m = int(input())

    for i in range(0, n):
        l = []
        for j in range(0, m):
            l.append(-1)
        vis.append(l)

    sx = int(input())
    sy = int(input())
    DFS(Vector2(sx, sy))
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
    let n = 10, m = 10;
    let vis = [];
    for(let i = 0; i < n; i++)
        vis.push(new Array(m).fill(-1));

    /**
     * DFS算法示例
     * @param {Vector2} s 起始点坐标
     */
    function DFS(s) {
        let sta = [];
        sta.push(s.clone());
        vis[s.x][s.y] = 0;
        while (sta.length > 0) {
            let u = sta.pop();
            for (const d of SIDES) {
                let v = u.add(d);
                if(v.x < 0 || v.x >= n || v.y < 0 || v.y >= m)
                    continue;
                if(vis[v.x][v.y] !== -1)
                    continue;
                // 在这里添加if(...) continue; 实现避开障碍物的效果
                vis[v.x][v.y] = vis[u.x][u.y] + 1;
                sta.push(v);
            }
        }
    }

    DFS(new Vector2(5, 5));
    for(let line in vis)
        console.log(vis[line].join(' '));
    ```

## 具体使用
下面为在Box3环境中，实体使用基于栈的DFS算法实现自动寻路的代码  
不考虑其他实体体积和碰撞，位置皆按照整格来计算  

```javascript
console.clear();

const Vector3 = GameVector3;

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
async function DFS(s, e) {
    /**@type {number[][][]}*/
    let vis = [],
        /**@type {Vector3[]}*/
        sta = [], found = false, cnt = 1;
    // 手动修正Box3的bug
    // 测试地图为256地图 不同地图需要手动修改数值
    voxels.shape.set(255, 63, 255);
    console.log('地图尺寸', voxels.shape.x, voxels.shape.y, voxels.shape.z);
    for (let i = 0; i < voxels.shape.x; i++) {
        vis.push([]);
        for (let j = 0; j < voxels.shape.y; j++)
            vis[vis.length - 1].push(new Array(voxels.shape.z));
    }
    sta.push(s.clone());
    vis[s.x][s.y][s.z] = 0;
    while (sta.length > 0 && !found) {
        let u = sta.pop();
        for (const d of SIDES) {
            let v = u.add(d);
            if (v.x < 0 || v.x >= voxels.shape.x || v.y < 0 || v.y >= voxels.shape.y || v.z < 0 || v.z >= voxels.shape.z)
                continue;
            if (vis[v.x][v.y][v.z] !== undefined/* && vis[v.x][v.y][v.z] < vis[u.x][u.y][u.z] + 1*/)
                continue;
            if (voxels.getVoxel(v.x, v.y, v.z) !== 0 || (voxels.getVoxel(v.x, v.y - 1, v.z) === 0)) // 禁止穿墙和空中寻路
                continue;
            vis[v.x][v.y][v.z] = vis[u.x][u.y][u.z] + 1;
            sta.push(v);
            if (v.equals(e)) {
                found = true;
                console.log('找到终点', v.x, v.y, v.z, vis[v.x][v.y][v.z]);
                break;
            }
            cnt++;
            if(cnt % 128 === 0)
                await sleep(1);
        }
    }
    console.log('搜索完成，共搜索', cnt, '个位置');
    return vis;
}
function findPath(map, s, e) {
    if(map[endPosition.x][endPosition.y][endPosition.z] === undefined)
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
    const MAP = await DFS(startPosition, endPosition);
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