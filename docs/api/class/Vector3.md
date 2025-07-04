: [查阅官方文档](https://box3.yuque.com/org-wiki-box3-ev7rl4/guide/epzg5lmsv92kbg1m)  
  [查阅官方文档（Arena）](https://box3.yuque.com/staff-khn556/wupvz3/ci4biyw0qruafkf2)  
  [查阅社区文档（Arena）](https://docs.box3lab.com/api/GameVector3)

: <def>Box3Vector3</def>（三维向量）是Box3中一个非常常见的类，通常指定一个位置，或者尺寸、方向等
## 构造函数
[Box3Vector3](constructor) ([x](arg): <def>number</def>, [y](arg): <def>number</def>, [z](arg): <def>number</def>): <def>Box3Vector3</def>  
[GameVector3](constructor) ([x](arg): <def>number</def>, [y](arg): <def>number</def>, [z](arg): <def>number</def>): <def>GameVector3</def>  
新建一个三维向量
??? example "示例"
    === "旧版编辑器"
        ```javascript
        new Box3Vector3(0, 0, 0)
        new Box3Vector3(64, 64, 64)
        new Box3Vector3(127.5, 64, 127.5)
        new Box3Vector3(11, 45, 14)
        new Box3Vector3(19, 19, 810)
        ```
    === "Arena 编辑器"
        ```javascript
        new GameVector3(0, 0, 0)
        new GameVector3(64, 64, 64)
        new GameVector3(127.5, 64, 127.5)
        new GameVector3(11, 45, 14)
        new GameVector3(19, 19, 810)
        ```

## 常用
[<method>set</method>](#set)
[<method>copy</method>](#copy)
[<method>clone</method>](#clone)  
[<method>scale</method>](#scale)  
[<method>add</method>](#add)
[<method>sub</method>](#sub)
[<method>mul</method>](#mul)
[<method>div</method>](#div)  
[<hiddenMethod>addEq</hiddenMethod>](#addEq)
[<hiddenMethod>subEq</hiddenMethod>](#subEq)
[<hiddenMethod>mulEq</hiddenMethod>](#mulEq)
[<hiddenMethod>divEq</hiddenMethod>](#divEq)  
[<method>equals</method>](#equals)  
[<method>distance</method>](#distance)  
[<method>min</method>](#min)
[<method>max</method>](#max)

## 属性
| 属性 | 类型 | 说明 |
| :- | :- | :-: |
| [x](property) | <def>number</def> | 三维向量的x值 |
| [y](property) | <def>number</def> | 三维向量的y值 |
| [z](property) | <def>number</def> | 三维向量的z值 |

## 方法

!!! note "说明"
    下列全部\[示例\]的代码后面的注释为预期的运行结果，可以不用看“<~”，这只是一个提示符

<span anchor="set">[set](method) ([x](arg): <def>number</def>, [y](arg): <def>number</def>, [z](arg): <def>number</def>): <def>Box3Vector3</def>  
<method>set</method> ([x](arg): <def>number</def>, [y](arg): <def>number</def>, [z](arg): <def>number</def>): <def>GameVector3</def></span>
:   设置三维向量的值  
    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3Vector3(0, 0, 0).set(5, 5, 0) //<~ { x: 5, y: 5, z: 0 }
            new Box3Vector3(1, 2, 3).set(4, 5, 6) //<~ { x: 4, y: 5, z: 6 }
            new Box3Vector3().set(5, 5, 5) //<~ { x: 5, y: 5, z: 5 }
            ```
        === "Arena 编辑器"
            ```javascript
            new GameVector3(0, 0, 0).set(5, 5, 0) //<~ { x: 5, y: 5, z: 0 }
            new GameVector3(1, 2, 3).set(4, 5, 6) //<~ { x: 4, y: 5, z: 6 }
            new GameVector3().set(5, 5, 5) //<~ { x: 5, y: 5, z: 5 }
            ```

<span anchor="copy"><method>copy</method> ([v](arg): <def>Box3Vector3</def>): <def>Box3Vector3</def>  
<method>copy</method> ([v](arg): <def>GameVector3</def>): <def>GameVector3</def></span>
:   把[v](arg)的值复制到这个三维向量中  
    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3Vector3(0, 0, 0).copy(new Box3Vector3(5, 0, 0)) //<~ { x: 5, y: 0, z: 0 }
            new Box3Vector3().copy(new Box3Vector3(1, 0, 0)) //<~ { x: 1, y: 0, z: 0 }
            ```
        === "Arena 编辑器"
            ```javascript
            new GameVector3(0, 0, 0).copy(new GameVector3(5, 0, 0)) //<~ { x: 5, y: 0, z: 0 }
            new GameVector3().copy(new GameVector3(1, 0, 0)) //<~ { x: 1, y: 0, z: 0 }
            ```

<span anchor="clone"><method>clone</method> (): <def>Box3Vector3</def>  
<method>clone</method> (): <def>GameVector3</def></span>
:   复制该向量
    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3Vector3(5, 5, 5).clone() //<~ { x: 5, y: 5, z: 5 }
            ```
        === "Arena 编辑器"
            ```javascript
            new GameVector3(5, 5, 5).clone() //<~ { x: 5, y: 5, z: 5 }
            ```

<span anchor="add"><method>add</method> ([v](arg): <def>Box3Vector3</def>): <def>Box3Vector3</def>  
<method>add</method> ([v](arg): <def>GameVector3</def>): <def>GameVector3</def></span>
:   将这个三维向量加上[v](arg)，返回结果

    !!! warning "此方法不会改变原来的向量"

    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3Vector3(1, 1, 1).add(new Box3Vector3(5, 5, 5)) //<~ { x: 6, y: 6, z: 6 }
            ```
        === "Arena 编辑器"
            ```javascript
            new GameVector3(1, 1, 1).add(new GameVector3(5, 5, 5)) //<~ { x: 6, y: 6, z: 6 }
            ```

<span anchor="sub"><method>sub</method> ([v](arg): <def>Box3Vector3</def>): <def>Box3Vector3</def>  
<method>sub</method> ([v](arg): <def>GameVector3</def>): <def>GameVector3</def></span>
:   将这个三维向量减去[v](arg)，返回结果

    !!! warning "此方法不会改变原来的向量"

    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3Vector3(6, 6, 6).sub(new Box3Vector3(1, 1, 1)) //<~ { x: 5, y: 5, z: 5 }
            ```
        === "Arena 编辑器"
            ```javascript
            new GameVector3(6, 6, 6).sub(new GameVector3(1, 1, 1)) //<~ { x: 5, y: 5, z: 5 }
            ```

<span anchor="mul"><method>mul</method> ([v](arg): <def>Box3Vector3</def>): <def>Box3Vector3</def>  
<method>mul</method> ([v](arg): <def>GameVector3</def>): <def>GameVector3</def></span>
:   将这个向量与[v](arg)点乘，返回结果  
    也可理解为，将这个向量的[x](property)、[y](property)、[z](property)分别乘[v](arg).[x](property)、[v](arg).[y](property)、[v](arg).[z](property)
    !!! warning "此方法不会改变原来的向量"

    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3Vector3(5, 5, 5).mul(new Box3Vector3(5, 5, 5)) //<~ { x: 25, y: 25, z: 25 }
            ```
        === "Arena 编辑器"
            ```javascript
            new GameVector3(5, 5, 5).mul(new GameVector3(5, 5, 5)) //<~ { x: 25, y: 25, z: 25 }
            ```

<span anchor="div"><method>div</method> ([v](arg): <def>Box3Vector3</def>): <def>Box3Vector3</def>  
<method>div</method> ([v](arg): <def>GameVector3</def>): <def>GameVector3</def></span>
:   将这个三维向量除以[v](arg)，返回结果  
    也可理解为，将这个向量的[x](property)、[y](property)、[z](property)分别除以[v](arg).[x](property)、[v](arg).[y](property)、[v](arg).[z](property)

    !!! warning "此方法不会改变原来的向量"

    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3Vector3(25, 25, 25).mul(new Box3Vector3(5, 5, 5)) //<~ { x: 5, y: 5, z: 5 }
            ```
        === "Arena 编辑器"
            ```javascript
            new GameVector3(25, 25, 25).mul(new GameVector3(5, 5, 5)) //<~ { x: 5, y: 5, z: 5 }
            ```
!!! tip "提示"  
    上面四个方法要注意，填写的不是三个<def>number</def>类型的参数，而是一个<def>Box3Vector3</def> / <def>GameVector3</def>类型的参数  
    例如，应该这样写：
    === "旧版编辑器"
        ```javascript
        new Box3Vector3(6, 6, 6).add(new Box3Vector3(1, 1, 1))
        ``` 
    === "Arena 编辑器"
        ```javascript
        new GameVector3(6, 6, 6).add(new GameVector3(1, 1, 1))
        ```  
    而不是这样：
    === "旧版编辑器"
        ```javascript
        new Box3Vector3(6, 6, 6).add(1, 1, 1)
        ```
    === "Arena 编辑器"
        ```javascript
        new GameVector3(6, 6, 6).add(1, 1, 1)
        ```
    下面四个方法同理

<span anchor="addEq"><hiddenMethod>addEq</hiddenMethod> ([v](arg): <def>Box3Vector3</def>): <def>Box3Vector3</def>  
<hiddenMethod>addEq</hiddenMethod> ([v](arg): <def>GameVector3</def>): <def>GameVector3</def></span>
:   将这个三维向量加上[v](arg)，返回结果

    !!! warning "此方法会改变原来的向量"

<span anchor="subEq"><hiddenMethod>subEq</hiddenMethod> ([v](arg): <def>Box3Vector3</def>): <def>Box3Vector3</def>  
<hiddenMethod>subEq</hiddenMethod> ([v](arg): <def>GameVector3</def>): <def>GameVector3</def></span>
:   将这个三维向量减去[v](arg)，返回结果

    !!! warning "此方法会改变原来的向量"

<span anchor="mulEq"><hiddenMethod>mulEq</hiddenMethod> ([v](arg): <def>Box3Vector3</def>): <def>Box3Vector3</def>  
<hiddenMethod>mulEq</hiddenMethod> ([v](arg): <def>GameVector3</def>): <def>GameVector3</def></span>
:   将这个向量与[v](arg)点乘，返回结果  
    也可理解为，将这个向量的[x](property)、[y](property)、[z](property)分别乘[v](arg).[x](property)、[v](arg).[y](property)、[v](arg).[z](property)

    !!! warning "此方法会改变原来的向量"

<span anchor="divEq"><hiddenMethod>divEq</hiddenMethod> ([v](arg): <def>Box3Vector3</def>): <def>Box3Vector3</def>  
<hiddenMethod>divEq</hiddenMethod> ([v](arg): <def>GameVector3</def>): <def>GameVector3</def></span>
:   将这个三维向量除以[v](arg)，返回结果  
    也可理解为，将这个向量的[x](property)、[y](property)、[z](property)分别除以[v](arg).[x](property)、[v](arg).[y](property)、[v](arg).[z](property)

    !!! warning "此方法会改变原来的向量"

<method>dot</method> ([v](arg): <def>Box3Vector3</def>): <def>number</def>
<method>dot</method> ([v](arg): <def>GameVector3</def>): <def>number</def>
:   向量点积  
    也可理解为，将这个向量与[v](arg)相乘，返回结果的三个方向的值的和
    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3Vector3(1, 1, 1).dot(new Box3Vector3(5, 5, 5)) //<~ 15
            ```
        === "Arena 编辑器"
            ```javascript
            new GameVector3(1, 1, 1).dot(new GameVector3(5, 5, 5)) //<~ 15
            ```

<method>cross</method> ([v](arg): <def>Box3Vector3</def>): <def>Box3Vector3</def>  
<method>cross</method> ([v](arg): <def>GameVector3</def>): <def>GameVector3</def>
:   将这个向量与[v](arg)叉乘，返回结果  
    也可以理解为，返回与这个向量和[v](arg)所在的平面垂直的向量

    !!! tip "提示"
        无法理解？把下面的示例画个图就好了
    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3Vector3(1, 1, 1).cross(new Box3Vector3(5, 5, 5)) //<~ { x: 0, y: 0, z: 0 }
            new Box3Vector3(1, 1, 1).cross(new Box3Vector3(1, 1, 1)) //<~ { x: 0, y: 0, z: 0 }
            new Box3Vector3(1, 1, 1).cross(new Box3Vector3(1, -1, 1)) //<~ { x:2, y:0, z:-2 }
            new Box3Vector3(1, 1, -1).cross(new Box3Vector3(1, -1, 1)) //<~ { x:0, y:-2, z:-2 }
            ```
        === "Arena 编辑器"
            ```javascript
            new GameVector3(1, 1, 1).cross(new GameVector3(5, 5, 5)) //<~ { x: 0, y: 0, z: 0 }
            new GameVector3(1, 1, 1).cross(new GameVector3(1, 1, 1)) //<~ { x: 0, y: 0, z: 0 }
            new GameVector3(1, 1, 1).cross(new GameVector3(1, -1, 1)) //<~ { x:2, y:0, z:-2 }
            new GameVector3(1, 1, -1).cross(new GameVector3(1, -1, 1)) //<~ { x:0, y:-2, z:-2 }
            ```

<span anchor="scale"><method>scale</method> ([n](arg): <def>number</def>): <def>Box3Vector3</def>  
<method>scale</method> ([n](arg): <def>number</def>): <def>GameVector3</def></span>
:   将这个向量与[n](arg)数乘，返回结果  
    也可理解为，将这个向量缩放至原来的[n](arg)倍

    !!! warning "此方法不会改变原来的向量"
    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3Vector3(1, 1, 1).scale(5) //<~ {x: 5, y: 5, z: 5 }
            ```
        === "Arena 编辑器"
            ```javascript
            new GameVector3(1, 1, 1).scale(5) //<~ {x: 5, y: 5, z: 5 }
            ```

<method>lerp</method> ([v](arg): <def>Box3Vector3</def>, [n](arg): <def>number</def>): <def>Box3Vector3</def>  
<method>lerp</method> ([v](arg): <def>GameVector3</def>, [n](arg): <def>number</def>): <def>GameVector3</def>

:   插值函数  
    可以理解为，以该向量的坐标为起点，[v](arg)的坐标为终点的一段线段，取线段的第[n](arg)部分的点的位置

    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3Vector3(0, 0, 0).lerp(new Box3Vector3(1, 1, 1), 0.5) // <~ { x: 0.5, y: 0.5, z: 0.5 }
            new Box3Vector3(0, 0, 0).lerp(new Box3Vector3(1, 1, 1), 0.25) // <~ { x: 0.25, y: 0.25, z: 0.25 }
            new Box3Vector3(0, 0, 0).lerp(new Box3Vector3(0.5, 0.5, 0.5), 0.5) // <~ { x: 0.25, y: 0.25, z: 0.25 }
            ```
        === "Arena 编辑器"
            ```javascript
            new GameVector3(0, 0, 0).lerp(new GameVector3(1, 1, 1), 0.5) // <~ { x: 0.5, y: 0.5, z: 0.5 }
            new GameVector3(0, 0, 0).lerp(new GameVector3(1, 1, 1), 0.25) // <~ { x: 0.25, y: 0.25, z: 0.25 }
            new GameVector3(0, 0, 0).lerp(new GameVector3(0.5, 0.5, 0.5), 0.5) // <~ { x: 0.25, y: 0.25, z: 0.25 }
            ```

<method>mag</method> (): <def>number</def>
:   求这个向量的大小（也称模）

    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3Vector3(1, 0, 0).mag() //<~ 1
            new Box3Vector3(3, 4, 5).mag() //<~ 7.0710678118654755
            new Box3Vector3(11, 45, 14).mag() //<~ 48.394214530251446
            ```
        === "Arena 编辑器"
            ```javascript
            new GameVector3(1, 0, 0).mag() //<~ 1
            new GameVector3(3, 4, 5).mag() //<~ 7.0710678118654755
            new GameVector3(11, 45, 14).mag() //<~ 48.394214530251446
            ```

<method>sqrMag</method> (): <def>number</def>
:   求这个向量的大小（也称模）的平方  
    比你用mag再用<method>pow</method>函数快

    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3Vector3(1, 0, 0).sqrMag() //<~ 1
            new Box3Vector3(3, 4, 5).sqrMag() //<~ 50
            new Box3Vector3(11, 45, 14).sqrMag() //<~ 2342
            ```
        === "Arena 编辑器"
            ```javascript
            new GameVector3(1, 0, 0).sqrMag() //<~ 1
            new GameVector3(3, 4, 5).sqrMag() //<~ 50
            new GameVector3(11, 45, 14).sqrMag() //<~ 2342
            ```

<method>towards</method> ([v](arg): <def>Box3Vector3</def>): <def>Box3Vector3</def>  
<method>towards</method> ([v](arg): <def>GameVector3</def>): <def>GameVector3</def>
:   返回这个向量面向[v](arg)的值  
    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3Vector3(6, 6, 6).sub(new Box3Vector3(1, 1, 1)) //<~ { x: 5, y: 5, z: 5 }
            new Box3Vector3(-6, 6, 6).sub(new Box3Vector3(1, 1, 1)) //<~ { x: -7, y: 5, z: 5 }
            ```
        === "Arena 编辑器"
            ```javascript
            new GameVector3(6, 6, 6).sub(new GameVector3(1, 1, 1)) //<~ { x: 5, y: 5, z: 5 }
            new GameVector3(-6, 6, 6).sub(new GameVector3(1, 1, 1)) //<~ { x: -7, y: 5, z: 5 }
            ```

<span anchor="distance"><method>distance</method> ([v](arg): <def>Box3Vector3</def>): <def>number</def>  
<method>distance</method> ([v](arg): <def>GameVector3</def>): <def>number</def></span>
:   返回这个向量到[v](arg)的距离
    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3Vector3(6, 0, 0).distance(new Box3Vector3(1, 0, 0)) //<~ 5
            new Box3Vector3(6, 6, 6).distance(new Box3Vector3(1, 1, 1)) //<~ 8.660254037844387
            ```
        === "Arena 编辑器"
            ```javascript
            new GameVector3(6, 0, 0).distance(new GameVector3(1, 0, 0)) //<~ 5
            new GameVector3(6, 6, 6).distance(new GameVector3(1, 1, 1)) //<~ 8.660254037844387
            ```

<method>normalize</method> (): Box3Vector3  
<method>normalize</method> (): GameVector3
:   归一化函数
    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3Vector3(6, 0, 0).normalize() //<~ { x: 1, y: 0, z: 0 }
            new Box3Vector3(11, 45, 14).normalize() //<~ { x:0.17032272243312657, y:0.6967747735900632, z:0.6967747735900632 }
            ```
        === "Arena 编辑器"
            ```javascript
            new GameVector3(6, 0, 0).normalize() //<~ { x: 1, y: 0, z: 0 }
            new GameVector3(11, 45, 14).normalize() //<~ { x:0.17032272243312657, y:0.6967747735900632, z:0.6967747735900632 }
            ```

<method>angle</method> ([v](arg): <def>Box3Vector3</def>): <def>number</def>  
<method>angle</method> ([v](arg): <def>GameVector3</def>): <def>number</def>
:   求这个向量与[v](arg)的弧度

    !!! warning "是弧度，不是角度！"
    ??? quote "弧度"
        另一种表示角度的方法，单位为$rad$，$\pi rad$相当于$180°$，$2\pi rad$相当于$360°$  
        其定义为：弧长等于圆半径的弧所对应的圆心角为$1rad$。

    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3Vector3(6, 0, 0).angle(new Box3Vector3(-6, 0, 0)) //<~ 3.141592653589793
            new Box3Vector3(1, 1, 0).angle(new Box3Vector3(1, 0, 0)) //<~ 0.7853981633974484 //约为0.25 * Math.PI
            ```
        === "Arena 编辑器"
            ```javascript
            new GameVector3(6, 0, 0).angle(new GameVector3(-6, 0, 0)) //<~ 3.141592653589793
            new GameVector3(1, 1, 0).angle(new GameVector3(1, 0, 0)) //<~ 0.7853981633974484 //约为0.25 * Math.PI
            ```

<span anchor="max"><method>max</method> ([v](arg): <def>Box3Vector3</def>): <def>Box3Vector3</def>  
<method>max</method> ([v](arg): <def>GameVector3</def>): <def>GameVector3</def></span>
:   分别对[v](arg)和该向量的每个方向的坐标值取较大值

    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3Vector3(1, 2, 1).max(new Box3Vector3(2, 1, 2)) //<~ { x:2, y:2, z:2 }
            ```
        === "Arena 编辑器"
            ```javascript
            new GameVector3(1, 2, 1).max(new GameVector3(2, 1, 2)) //<~ { x:2, y:2, z:2 }
            ```

<span anchor="min"><method>min</method> ([v](arg): <def>Box3Vector3</def>): <def>Box3Vector3</def>  
<method>min</method> ([v](arg): <def>GameVector3</def>): <def>GameVector3</def></span>
:   分别对[v](arg)和该向量的每个方向的坐标值取较小值

    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3Vector3(1, 2, 1).min(new Box3Vector3(2, 1, 2)) //<~ { x:1, y:1, z:1 }
            ```
        === "Arena 编辑器"
            ```javascript
            new GameVector3(1, 2, 1).min(new GameVector3(2, 1, 2)) //<~ { x:1, y:1, z:1 }
            ```

> !p exactEquals(v: Vector3): boolean

:   判断两个向量是否完全相等

    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3Vector3(1, 2, 3).exactEquals(new Box3Vector3(1, 2, 3)) //<~ true
            new Box3Vector3(1, 2, 3).exactEquals(new Box3Vector3(4, 5, 6)) //<~ false
            new Box3Vector3(1, 2, 3).exactEquals(new Box3Vector3(1.000001, 2, 3)) //<~ false
            new Box3Vector3(1, 2, 3).exactEquals(new Box3Vector3(1.000000000000001, 2, 3)) //<~ false
            ```
        === "Arena 编辑器"
            ```javascript
            new GameVector3(1, 2, 3).exactEquals(new GameVector3(1, 2, 3)) //<~ true
            new GameVector3(1, 2, 3).exactEquals(new GameVector3(4, 5, 6)) //<~ false
            new GameVector3(1, 2, 3).exactEquals(new GameVector3(1.000001, 2, 3)) //<~ false
            new GameVector3(1, 2, 3).exactEquals(new GameVector3(1.000000000000001, 2, 3)) //<~ false
            ```

    !!! warning "不建议使用此方法"

        因为计算机储存和计算浮点数的误差，如：
        ```javascript
        (0.1 + 0.2 == 0.3) // <~ false
        ```
        在非整数情况下，使用此方法可能会存在问题，尽管此方法理论上更快

> !p equals(v: Vector3): boolean

:   判断两个向量是否在容差允许范围内相等  
    容差为`0.000001`
    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3Vector3(1, 2, 3).equals(new Box3Vector3(1, 2, 3)) //<~ true
            new Box3Vector3(1, 2, 3).equals(new Box3Vector3(4, 5, 6)) //<~ false
            new Box3Vector3(1, 2, 3).equals(new Box3Vector3(1.000001, 2, 3)) //<~ true
            new Box3Vector3(1, 2, 3).equals(new Box3Vector3(1.000000000000001, 2, 3)) //<~ true
            ```
        === "Arena 编辑器"
            ```javascript
            new GameVector3(1, 2, 3).equals(new GameVector3(1, 2, 3)) //<~ true
            new GameVector3(1, 2, 3).equals(new GameVector3(4, 5, 6)) //<~ false
            new GameVector3(1, 2, 3).equals(new GameVector3(1.000001, 2, 3)) //<~ true
            new GameVector3(1, 2, 3).equals(new GameVector3(1.000000000000001, 2, 3)) //<~ true
            ```

<span anchor="toString"><method>toString</method> (): <def>string</def></span>
:   将这个三维向量转换成字符串

    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            JSON.stringify(new Box3Vector3(114514, 1919810, 31415926535).toString()) //<~ "{ x:114514, y:1919810, z:31415926535 }"
            ```
        === "Arena 编辑器"
            ```javascript
            JSON.stringify(new GameVector3(114514, 1919810, 31415926535).toString()) //<~ "{ x:114514, y:1919810, z:31415926535 }"
            ```

<hiddenStaticMethod>fromPolar</hiddenStaticMethod> ([mag](arg): <def>number</def>, [phi](arg): <def>number</def>, [theta](arg): <def>number</def>): <def>Box3Vector3</def>  
<hiddenStaticMethod>fromPolar</hiddenStaticMethod> ([mag](arg): <def>number</def>, [phi](arg): <def>number</def>, [theta](arg): <def>number</def>): <def>GameVector3</def>

:   使用大小和方向创建向量

    !!! bug "内容缺失"
        由于编者的能力有限，无法编写该内容  
        如果你愿意为此贡献一份力量，请[加入我们](/about)

    | 参数 | 类型 | 说明 |
    | :- | :- | :- |
    | [mag](arg) | [](number) | 向量大小 |
    | [phi](arg) | [](number) | $\phi$~~，磁通量，单位是韦伯`Wb`~~ |
    | [theta](arg) | [](number) | $\theta$ |

    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            Box3Vector3.fromPolar(114514, 1919810, 31415926535) //<~ { x:-89551.55210093308, y:71368.36064229338, z:729.9394121558898 }
            Box3Vector3.fromPolar(1, 0, 0) //<~ { x:0, y:1, z:0 }
            Box3Vector3.fromPolar(1, 0, Math.PI) //<~ { x:0, y:-1, z:1.2246467991473532e-16 }
            Box3Vector3.fromPolar(1, 0, Math.PI / 2) //<~ { x:0, y:6.123233995736766e-17, z:1 }
            Box3Vector3.fromPolar(1, Math.PI / 2, 0) //<~ { x:0, y:1, z:0 }
            Box3Vector3.fromPolar(2, Math.PI, 0) //<~ { x:0, y:2, z:0 }
            Box3Vector3.fromPolar(2, -Math.PI, 0) //<~ { x:0, y:2, z:0 }
            Box3Vector3.fromPolar(1, 0, -Math.PI) //<~ { x:0, y:-1, z:-1.2246467991473532e-16 }
            Box3Vector3.fromPolar(2, Math.PI / 4, Math.PI / 4) //<~ { x:0.9999999999999998, y:1.4142135623730951, z:1 }
            Box3Vector3.fromPolar(2, Math.PI / 8 * 7, Math.PI / 8) //<~ { x:0.2928932188134526, y:1.8477590650225735, z:-0.7071067811865476 }
            Box3Vector3.fromPolar(2, Math.PI / -4, Math.PI / 4) //<~ { x:-0.9999999999999998, y:1.4142135623730951, z:1 }
            Box3Vector3.fromPolar(2, Math.PI / -4, Math.PI / -4) //<~ { x:0.9999999999999998, y:1.4142135623730951, z:-1 }
            Box3Vector3.fromPolar(2, Math.PI / 4, Math.PI / -4) //<~ { x:-0.9999999999999998, y:1.4142135623730951, z:-1 }
            Box3Vector3.fromPolar(100, -Math.PI, Math.PI) //<~ { x:-1.4997597826618577e-30, y:-100, z:-1.2246467991473532e-14 }
            Box3Vector3.fromPolar(100, -Math.PI, Math.PI / 2) //<~ { x:-1.2246467991473532e-14, y:6.123233995736766e-15, z:-100 }
            ```
        === "Arena 编辑器"
            ```javascript
            GameVector3.fromPolar(114514, 1919810, 31415926535) //<~ { x:-89551.55210093308, y:71368.36064229338, z:729.9394121558898 }
            GameVector3.fromPolar(1, 0, 0) //<~ { x:0, y:1, z:0 }
            GameVector3.fromPolar(1, 0, Math.PI) //<~ { x:0, y:-1, z:1.2246467991473532e-16 }
            GameVector3.fromPolar(1, 0, Math.PI / 2) //<~ { x:0, y:6.123233995736766e-17, z:1 }
            GameVector3.fromPolar(1, Math.PI / 2, 0) //<~ { x:0, y:1, z:0 }
            GameVector3.fromPolar(2, Math.PI, 0) //<~ { x:0, y:2, z:0 }
            GameVector3.fromPolar(2, -Math.PI, 0) //<~ { x:0, y:2, z:0 }
            GameVector3.fromPolar(1, 0, -Math.PI) //<~ { x:0, y:-1, z:-1.2246467991473532e-16 }
            GameVector3.fromPolar(2, Math.PI / 4, Math.PI / 4) //<~ { x:0.9999999999999998, y:1.4142135623730951, z:1 }
            GameVector3.fromPolar(2, Math.PI / 8 * 7, Math.PI / 8) //<~ { x:0.2928932188134526, y:1.8477590650225735, z:-0.7071067811865476 }
            GameVector3.fromPolar(2, Math.PI / -4, Math.PI / 4) //<~ { x:-0.9999999999999998, y:1.4142135623730951, z:1 }
            GameVector3.fromPolar(2, Math.PI / -4, Math.PI / -4) //<~ { x:0.9999999999999998, y:1.4142135623730951, z:-1 }
            GameVector3.fromPolar(2, Math.PI / 4, Math.PI / -4) //<~ { x:-0.9999999999999998, y:1.4142135623730951, z:-1 }
            GameVector3.fromPolar(100, -Math.PI, Math.PI) //<~ { x:-1.4997597826618577e-30, y:-100, z:-1.2246467991473532e-14 }
            GameVector3.fromPolar(100, -Math.PI, Math.PI / 2) //<~ { x:-1.2246467991473532e-14, y:6.123233995736766e-15, z:-100 }
            ```