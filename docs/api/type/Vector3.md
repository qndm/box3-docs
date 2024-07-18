# <def>Box3Vector3</def> / <def>GameVector3</def>

<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

: [查阅官方文档](https://box3.yuque.com/org-wiki-box3-ev7rl4/guide/epzg5lmsv92kbg1m)  
  [查阅官方文档（ARENA）](https://box3.yuque.com/staff-khn556/wupvz3/ci4biyw0qruafkf2)  
  [查阅社区文档（ARENA）](https://www.yuque.com/box3lab/api/sug8utrs043aep5v)

: <def>Box3Vector3</def>（三维向量）是Box3中一个非常常见的类，通常指定一个位置，或者尺寸、方向等
## 构造函数
new <def>Box3Vector3</def>(x: <def>number</def>, y: <def>number</def>, z: <def>number</def>): <def>Box3Vector3</def>  
new <def>GameVector3</def>(x: <def>number</def>, y: <def>number</def>, z: <def>number</def>): <def>GameVector3</def>  
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

---

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
| :- | :- | :- |
| `x` | <def>number</def> | 三维向量的x值 |
| `y` | <def>number</def> | 三维向量的y值 |
| `z` | <def>number</def> | 三维向量的z值 |

## 方法

!!! note "说明"
    下列全部\[示例\]的代码后面的注释为预期的运行结果，可以不用看“<~”，这只是一个提示符

<span anchor="set"><method>set</method> (x: <def>number</def>, y: <def>number</def>, z: <def>number</def>): <def>Box3Vector3</def>  
<method>set</method> (x: <def>number</def>, y: <def>number</def>, z: <def>number</def>): <def>GameVector3</def></span>

: 设置三维向量的值  
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
<span anchor="copy"><method>copy</method> (v: <def>Box3Vector3</def>): <def>Box3Vector3</def>  
<method>copy</method> (v: <def>GameVector3</def>): <def>GameVector3</def></span>

: 把另一个三维向量的值复制到这个三维向量中  
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

: 复制该向量
??? example "示例"
    === "旧版编辑器"
        ```javascript
        new Box3Vector3(5, 5, 5).clone() //<~ { x: 5, y: 5, z: 5 }
        ```
    === "Arena 编辑器"
        ```javascript
        new GameVector3(5, 5, 5).clone() //<~ { x: 5, y: 5, z: 5 }
        ```

<span anchor="add"><method>add</method> (v: <def>Box3Vector3</def>): <def>Box3Vector3</def>  
<method>add</method> (v: <def>GameVector3</def>): <def>GameVector3</def></span>

: 将这个三维向量加上另一个三维向量，返回结果  
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
<span anchor="sub"><method>sub</method> (v: <def>Box3Vector3</def>): <def>Box3Vector3</def>  
<method>sub</method> (v: <def>GameVector3</def>): <def>GameVector3</def></span>

: 将这个三维向量减去另一个三维向量，返回结果  
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
<span anchor="mul"><method>mul</method> (v: <def>Box3Vector3</def>): <def>Box3Vector3</def>  
<method>mul</method> (v: <def>GameVector3</def>): <def>GameVector3</def></span>

: 将这个三维向量乘以另一个三维向量，返回结果  
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
<span anchor="div"><method>div</method> (v: <def>Box3Vector3</def>): <def>Box3Vector3</def>  
<method>div</method> (v: <def>GameVector3</def>): <def>GameVector3</def></span>


: 将这个三维向量除以另一个三维向量，返回结果  
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
    上面四个方法要注意，填写的不是三个<def>number</def>类型的参数，而是一个<def>GameVector3</def>类型的参数  
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

<span anchor="addEq"><hiddenMethod>addEq</hiddenMethod> (v: <def>Box3Vector3</def>): <def>Box3Vector3</def>  
<hiddenMethod>addEq</hiddenMethod> (v: <def>GameVector3</def>): <def>GameVector3</def></span>


: 将这个三维向量加上另一个三维向量，返回结果  
!!! warning "此方法会改变原来的向量"

<span anchor="subEq"><hiddenMethod>subEq</hiddenMethod> (v: <def>Box3Vector3</def>): <def>Box3Vector3</def>  
<hiddenMethod>subEq</hiddenMethod> (v: <def>GameVector3</def>): <def>GameVector3</def></span>


: 将这个三维向量减去另一个三维向量，返回结果  
!!! warning "此方法会改变原来的向量"

<span anchor="mulEq"><hiddenMethod>mulEq</hiddenMethod> (v: <def>Box3Vector3</def>): <def>Box3Vector3</def>  
<hiddenMethod>mulEq</hiddenMethod> (v: <def>GameVector3</def>): <def>GameVector3</def></span>


: 将这个三维向量乘以另一个三维向量，返回结果  
!!! warning "此方法会改变原来的向量"

<span anchor="divEq"><hiddenMethod>divEq</hiddenMethod> (v: <def>Box3Vector3</def>): <def>Box3Vector3</def>  
<hiddenMethod>divEq</hiddenMethod> (v: <def>GameVector3</def>): <def>GameVector3</def></span>


: 将这个三维向量除以另一个三维向量，返回结果  
!!! warning "此方法会改变原来的向量"

<method>dot</method> (v: <def>Box3Vector3</def>): <def>number</def>
<method>dot</method> (v: <def>GameVector3</def>): <def>number</def>

: 将这个向量与另一个向量相乘，返回结果的三个方向的值的和
??? example "示例"
    === "旧版编辑器"
        ```javascript
        new Box3Vector3(1, 1, 1).dot(new Box3Vector3(5, 5, 5)) //<~ 15
        ```
    === "Arena 编辑器"
        ```javascript
        new GameVector3(1, 1, 1).dot(new GameVector3(5, 5, 5)) //<~ 15
        ```
<method>cross</method> (v: <def>Box3Vector3</def>): <def>Box3Vector3</def>  
<method>cross</method> (v: <def>GameVector3</def>): <def>GameVector3</def>
!!! bug "内容缺失"
    API文档内容繁多，有一些内容还未完工。  
    如果你愿意为此贡献一份力量，请[加入我们](/about)

??? example "示例"
    === "旧版编辑器"
        ```javascript
        new Box3Vector3(1, 1, 1).cross(new Box3Vector3(5, 5, 5)) //<~ { x: 0, y: 0, z: 0 }
        new GameVector3(1, 1, 1).cross(new GameVector3(1, 1, 1)) //<~ { x: 0, y: 0, z: 0 }
        ```
    === "Arena 编辑器"
        ```javascript
        new Box3Vector3(1, 1, 1).cross(new Box3Vector3(5, 5, 5)) //<~ { x: 0, y: 0, z: 0 }
        new GameVector3(1, 1, 1).cross(new GameVector3(1, 1, 1)) //<~ { x: 0, y: 0, z: 0 }
        ```
<span anchor="scale"><method>scale</method> (n: <def>number</def>): <def>Box3Vector3</def>  
<method>scale</method> (n: <def>number</def>): <def>GameVector3</def></span>

: 缩放一个向量
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

<method>lerp</method> (v: <def>Box3Vector3</def>, n: <def>number</def>): <def>Box3Vector3</def>  
<method>lerp</method> (v: <def>GameVector3</def>, n: <def>number</def>): <def>GameVector3</def>

: 插值函数  
  可以理解为，以该向量的坐标为起点，`v`的坐标为终点的一段线段，取线段的第`n`部分的点的位置
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

: 求这个向量的大小
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

: 求这个向量大小的平方  
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
<method>towards</method> (v: <def>Box3Vector3</def>): <def>Box3Vector3</def>  
<method>towards</method> (v: <def>GameVector3</def>): <def>GameVector3</def>

: 返回一个向量面向另一个向量的值  
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
<span anchor="distance"><method>distance</method> (v: <def>Box3Vector3</def>): <def>number</def>  
<method>distance</method> (v: <def>GameVector3</def>): <def>number</def></span>

: 返回一个向量到另一个向量的距离
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

: 归一化函数

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

<method>angle</method> (v: <def>Box3Vector3</def>): <def>number</def>  
<method>angle</method> (v: <def>GameVector3</def>): <def>number</def>

: 求这个向量与另一个向量的弧度
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
<span anchor="max"><method>max</method> (v: <def>Box3Vector3</def>): <def>Box3Vector3</def>  
<method>max</method> (v: <def>GameVector3</def>): <def>GameVector3</def></span>

: 分别对填入的向量和该向量的每个方向的坐标值取较大值

??? example "示例"
    === "旧版编辑器"
        ```javascript
        new Box3Vector3(1, 2, 1).max(new Box3Vector3(2, 1, 2)) //<~ { x:2, y:2, z:2 }
        ```
    === "Arena 编辑器"
        ```javascript
        new GameVector3(1, 2, 1).max(new GameVector3(2, 1, 2)) //<~ { x:2, y:2, z:2 }
        ```
<span anchor="min"><method>min</method> (v: <def>Box3Vector3</def>): <def>Box3Vector3</def>  
<method>min</method> (v: <def>GameVector3</def>): <def>GameVector3</def></span>

: 分别对填入的向量和该向量的每个方向的坐标值取较小值  

??? example "示例"
    === "旧版编辑器"
        ```javascript
        new Box3Vector3(1, 2, 1).min(new Box3Vector3(2, 1, 2)) //<~ { x:1, y:1, z:1 }
        ```
    === "Arena 编辑器"
        ```javascript
        new GameVector3(1, 2, 1).min(new GameVector3(2, 1, 2)) //<~ { x:1, y:1, z:1 }
        ```
<method>exactEquals</method> (v: <def>Box3Vector3</def>): <def>boolean</def>  
<method>exactEquals</method> (v: <def>GameVector3</def>): <def>boolean</def>

: 判断两个向量是否完全相等
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
<span anchor="equals"><method>equals</method> (v: <def>Box3Vector3</def>): <def>boolean</def></span>  
<span anchor="equals"><method>equals</method> (v: <def>GameVector3</def>): <def>boolean</def></span>

: 判断两个向量是否大致相等  
  容差为`0.000001`
!!! failure "此处与官方API不符"
    该文档没有`tolerance`: <def>number</def>参数
!!! failure "此处与社区API不符"
    该文档没有`tolerance`: <def>number</def>参数
!!! success "经 2024/7/18 测试：该文档内容无问题"
    === "Arena 编辑器"
        ```javascript
        new GameVector3(1, 2, 3).equals(new GameVector3(1.1, 2, 3), 1) // <~ false
        ```


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
<span anchor="toString"><method>toString</method> (): <def>String</def></span>

: 将这个三维向量转换成字符串
??? example "示例"
    === "旧版编辑器"
        ```javascript
        JSON.stringify(new Box3Vector3(114514, 1919810, 31415926535).toString()) //<~ "{ x:114514, y:1919810, z:31415926535 }"
        ```
    === "Arena 编辑器"
        ```javascript
        JSON.stringify(new GameVector3(114514, 1919810, 31415926535).toString()) //<~ "{ x:114514, y:1919810, z:31415926535 }"
        ```
<hiddenStaticMethod>fromPolar</hiddenStaticMethod> (mag: <def>number</def>, phi: <def>number</def>, theta: <def>number</def>): <def>Box3Vector3</def>  
<hiddenStaticMethod>fromPolar</hiddenStaticMethod> (mag: <def>number</def>, phi: <def>number</def>, theta: <def>number</def>): <def>GameVector3</def>
!!! bug "内容缺失"
    API文档内容繁多，有一些内容还未完工。  
    如果你愿意为此贡献一份力量，请[加入我们](/about)

??? example "示例"
    === "旧版编辑器"
        ```javascript
        Box3Vector3.fromPolar(114514, 1919810, 31415926535) //<~ { x:-89551.55210093308, y:71368.36064229338, z:729.9394121558898 }
        ```
    === "Arena 编辑器"
        ```javascript
        GameVector3.fromPolar(114514, 1919810, 31415926535) //<~ { x:-89551.55210093308, y:71368.36064229338, z:729.9394121558898 }
        ```