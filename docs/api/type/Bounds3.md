# <def>Box3Bounds3</def> / <def>GameBounds3</def>

<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

: [查阅官方文档](https://box3.yuque.com/org-wiki-box3-ev7rl4/guide/iqvnydgzu0zg3nab)  
  [查阅官方文档（ARENA）](https://box3.yuque.com/staff-khn556/wupvz3/zpmrz60ybosiiabb)  
  [查阅社区文档（ARENA）](https://www.yuque.com/box3lab/api/qcs07pc87u5iyfn7)

<def>Box3Bounds3</def> / <def>GameBounds3</def> 是用于指定世界中一个立方体空间区域的一个类

## 构造函数
new <def>Box3Bounds3</def>(lo: <def>Box3Vector3</def>, hi: <def>Box3Vector3</def>): <def>Box3Bounds3</def>  
new <def>GameBounds3</def>(lo: <def>GameVector3</def>, hi: <def>GameVector3</def>): <def>GameBounds3</def>  
新建一个区域

=== "旧版编辑器"
    | 属性 | 类型 | 说明 |
    | :- | :- | :- |
    | `lo` | <def>Box3Vector3</def> | 区域的低处顶点 |
    | `hi` | <def>Box3Vector3</def> | 区域的高处顶点 |
=== "Arena 编辑器"
    | 属性 | 类型 | 说明 |
    | :- | :- | :- |
    | `lo` | <def>GameVector3</def> | 区域的低处顶点 |
    | `hi` | <def>GameVector3</def> | 区域的高处顶点 |

!!! warning "关于`lo`与`hi`参数的说明"
    在编写代码的时候，要保证`lo`的每个值是比`hi`小的（``lo.x < hi.x && lo.y < hi.y && lo.z < hi.z``），否则会发生 ~~匪夷所思的~~ 问题  
    如果不能保证，可以使用<def>Box3Vector3</def>的[<method>min</method>](./Vector3.md#min)和[<method>max</method>](./Vector3.md#max)方法

!!! warning "警告"

    <def>Box3Bounds3</def> / <def>GameBounds3</def>不能像<def>Box3Vector3</def> / <def>GameVector3</def>一样，定义时必须有两个参数，不然你会收到一条：``TypeError: Cannot read property 'toString' of undefined``

---

## 常用
[<method>set</method>](#set)
[<method>copy</method>](#copy)  
[<method>intersect</method>](#intersect)
[<method>intersects</method>](#intersects)  
[<method>contains</method>](#contains)
[<method>containsBounds</method>](#containsBounds)  

## 属性
=== "旧版编辑器"
    | 属性 | 类型 | 说明 |
    | :- | :- | :- |
    | `lo` | <def>Box3Vector3</def> | 区域的低处顶点 |
    | `hi` | <def>Box3Vector3</def> | 区域的高处顶点 |
=== "Arena 编辑器"
    | 属性 | 类型 | 说明 |
    | :- | :- | :- |
    | `lo` | <def>GameVector3</def> | 区域的低处顶点 |
    | `hi` | <def>GameVector3</def> | 区域的高处顶点 |

## 方法

!!! note "提示"
    下列全部\[示例\]的代码后面的注释为预期的运行结果，可以不用看“<~”，这只是一个提示符

<span anchor="intersect"><method>intersect</method> (b: <def>Box3Bounds3</def>): <def>Box3Bounds3</def>  
<method>intersect</method> (b: <def>GameBounds3</def>): <def>GameBounds3</def></span>
: 计算与此包围盒相交的部分
??? example "示例"
    === "旧版编辑器"
        ```javascript
        new Box3Bounds3(new Box3Vector3(0, 0, 0), new Box3Vector3(5, 5, 5)).intersect(new Box3Bounds3(new Box3Vector3(2, 2, 2), new Box3Vector3(7, 7, 7))) //<~ { lo:{ x:2, y:2, z:2 }, hi:{ x:5, y:5, z:5 } }
        ```
    === "Arena 编辑器"
        ```javascript
        new GameBounds3(new GameVector3(0, 0, 0), new GameVector3(5, 5, 5)).intersect(new GameBounds3(new GameVector3(2, 2, 2), new GameVector3(7, 7, 7))) //<~ { lo:{ x:2, y:2, z:2 }, hi:{ x:5, y:5, z:5 } }
        ```

<span anchor="contains"><method>contains</method> (b: <def>Box3Vector3</def>): <def>boolean</def>  
<method>contains</method> (b: <def>GameVector3</def>): <def>boolean</def></span>
: 判断一个三维向量是否在这个空间区域里,包括边界
??? example "示例"
    === "旧版编辑器"
        ```javascript
        new Box3Bounds3(new Box3Vector3(0, 0, 0), new Box3Vector3(5, 5, 5)).contains(new Box3Vector3(2, 2, 2)) //<~ true
        new Box3Bounds3(new Box3Vector3(0, 0, 0), new Box3Vector3(5, 5, 5)).contains(new Box3Vector3(-2, -2, -2)) //<~ false
        ```
    === "Arena 编辑器"
        ```javascript
        new GameBounds3(new GameVector3(0, 0, 0), new GameVector3(5, 5, 5)).contains(new GameVector3(2, 2, 2)) //<~ true
        new GameBounds3(new GameVector3(0, 0, 0), new GameVector3(5, 5, 5)).contains(new GameVector3(-2, -2, -2)) //<~ false
        ```

<span anchor="containsBounds"><method>containsBounds</method> (b: <def>Box3Vector3</def>): <def>boolean</def></span>  
<span anchor="containsBounds"><method>containsBounds</method> (b: <def>GameVector3</def>): <def>boolean</def></span>
: 检测一个空间区域是否完全在空间区域里（边界也算）
??? example "示例"
    === "旧版编辑器"
        ```javascript
        new Box3Bounds3(new Box3Vector3(0, 0, 0), new Box3Vector3(5, 5, 5)).containsBounds(new Box3Bounds3(new Box3Vector3(2, 2, 2), new Box3Vector3(7, 7, 7))) //<~ false
        new Box3Bounds3(new Box3Vector3(2, 2, 2), new Box3Vector3(7, 7, 7)).containsBounds(new Box3Bounds3(new Box3Vector3(0, 0, 0), new Box3Vector3(5, 5, 5))) //<~ false
        new Box3Bounds3(new Box3Vector3(0, 0, 0), new Box3Vector3(7, 7, 7)).containsBounds(new Box3Bounds3(new Box3Vector3(2, 2, 2), new Box3Vector3(5, 5, 5))) // <~ true
        new Box3Bounds3(new Box3Vector3(0, 0, 0), new Box3Vector3(7, 7, 7)).containsBounds(new Box3Bounds3(new Box3Vector3(2, 2, 0), new Box3Vector3(5, 7, 5))) // <~ true
        ```
    === "Arena 编辑器"
        ```javascript
        new GameBounds3(new GameVector3(0, 0, 0), new GameVector3(5, 5, 5)).containsBounds(new GameBounds3(new GameVector3(2, 2, 2), new GameVector3(7, 7, 7))) //<~ false
        new GameBounds3(new GameVector3(2, 2, 2), new GameVector3(7, 7, 7)).containsBounds(new GameBounds3(new GameVector3(0, 0, 0), new GameVector3(5, 5, 5))) //<~ false
        new GameBounds3(new GameVector3(0, 0, 0), new GameVector3(7, 7, 7)).containsBounds(new GameBounds3(new GameVector3(2, 2, 2), new GameVector3(5, 5, 5))) // <~ true
        new GameBounds3(new GameVector3(0, 0, 0), new GameVector3(7, 7, 7)).containsBounds(new GameBounds3(new GameVector3(2, 2, 0), new GameVector3(5, 7, 5))) // <~ true
        ```

<span anchor="intersects"><method>intersects</method> (b: <def>Box3Bounds3</def>): <def>boolean</def></span>  
<span anchor="intersects"><method>intersects</method> (b: <def>GameBounds3</def>): <def>boolean</def></span>

: 判断一个空间区域是否与这个空间区域相交（挨着不算）
??? example "示例"
    === "旧版编辑器"
        ```javascript
        new Box3Bounds3(new Box3Vector3(0, 0, 0), new Box3Vector3(5, 5, 5)).intersects(new Box3Bounds3(new Box3Vector3(2, 2, 2), new Box3Vector3(7, 7, 7))) //<~ true
        new Box3Bounds3(new Box3Vector3(0, 0, 0), new Box3Vector3(5, 5, 5)).intersects(new Box3Bounds3(new Box3Vector3(5, 5, 5), new Box3Vector3(7, 7, 7))) //<~ false
        new Box3Bounds3(new Box3Vector3(0, 0, 0), new Box3Vector3(5, 5, 5)).intersects(new Box3Bounds3(new Box3Vector3(4.99999, 4.99999, 4.99999), new Box3Vector3(7, 7, 7))) //<~ true
        ```
    === "Arena 编辑器"
        ```javascript
        new GameBounds3(new GameVector3(0, 0, 0), new GameVector3(5, 5, 5)).intersects(new GameBounds3(new GameVector3(2, 2, 2), new GameVector3(7, 7, 7))) //<~ true
        new GameBounds3(new GameVector3(0, 0, 0), new GameVector3(5, 5, 5)).intersects(new GameBounds3(new GameVector3(5, 5, 5), new GameVector3(7, 7, 7))) //<~ false
        new GameBounds3(new GameVector3(0, 0, 0), new GameVector3(5, 5, 5)).intersects(new GameBounds3(new GameVector3(4.99999, 4.99999, 4.99999), new GameVector3(7, 7, 7))) //<~ true
        ```

<span anchor="set"><method>set</method> (lox: <def>number</def>, loy: <def>number</def>, loz: <def>number</def>, hix: <def>number</def>, hiy: <def>number</def>, hiz: <def>number</def>): <def>Box3Bounds3</def>  
<method>set</method> (lox: <def>number</def>, loy: <def>number</def>, loz: <def>number</def>, hix: <def>number</def>, hiy: <def>number</def>, hiz: <def>number</def>): <def>GameBounds3</def></span>

: 设置这个空间区域
??? example "示例"
    === "旧版编辑器"
        ```javascript
        new Box3Bounds3(new Box3Vector3(0, 0, 0), new Box3Vector3(0, 0, 0)).set(1, 1, 4, 5, 1, 4) //<~ { lo:{ x:1, y:1, z:4 }, hi:{ x:5, y:1, z:4 } }
        ```
    === "Arena 编辑器"
        ```javascript
        new GameBounds3(new GameVector3(0, 0, 0), new GameVector3(0, 0, 0)).set(1, 1, 4, 5, 1, 4) //<~ { lo:{ x:1, y:1, z:4 }, hi:{ x:5, y:1, z:4 } }
        ```

<span anchor="copy"><method>copy</method> (b: <def>Box3Bounds3</def>): <def>Box3Bounds3</def>  
<method>copy</method> (b: <def>GameBounds3</def>): <def>GameBounds3</def></span>

: 把一个空间区域的值复制到这个空间区域上

<method>toString</method> (): <def>string</def>
: 将这个空间区域转换成字符串

<staticMethod>fromPoints</staticMethod> (...<def>Box3Vector3</def>): <def>Box3Bounds3</def>
<staticMethod>fromPoints</staticMethod> (...<def>GameVector3</def>): <def>GameBounds3</def>
: 根据坐标点生成一个空间区域，使每个点都在这个空间区域内  
??? example "示例"
    === "旧版编辑器"
        ```javascript
        new Box3Bounds3(new Box3Vector3(0, 0, 0), new Box3Vector3(5, 5, 5)).intersect(new Box3Bounds3(new Box3Vector3(2, 2, 2), new Box3Vector3(7, 7, 7))) //<~ { lo:{ x:2, y:2, z:2 }, hi:{ x:5, y:5, z:5 } }
        ```
    === "Arena 编辑器"
        ```javascript
        new GameBounds3(new GameVector3(0, 0, 0), new GameVector3(5, 5, 5)).intersect(new GameBounds3(new GameVector3(2, 2, 2), new GameVector3(7, 7, 7))) //<~ { lo:{ x:2, y:2, z:2 }, hi:{ x:5, y:5, z:5 } }
        ```