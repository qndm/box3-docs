# <def>Box3Quaternion</def> / <def>GameQuaternion</def>

<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

[查阅官方文档](https://box3.yuque.com/org-wiki-box3-ev7rl4/guide/und5gi0zqxxci662)  
[查阅官方文档（Arena）](https://box3.yuque.com/staff-khn556/wupvz3/ci4biyw0qruafkf2)  
[查阅社区文档（Arena）](https://www.yuque.com/box3lab/api/fnpgxl0r4wrgl3rg)

## 构造函数
<constructor>Box3Quaternion</constructor>([w](arg): <def>number</def>, [x](arg): <def>number</def>, [y](arg): <def>number</def>, [z](arg): <def>number</def>): <def>Box3Quaternion</def>  
<constructor>GameQuaternion</constructor>([w](arg): <def>number</def>, [x](arg): <def>number</def>, [y](arg): <def>number</def>, [z](arg): <def>number</def>): <def>GameQuaternion</def>  

:   新建一个四元数
    ??? tip "对于萌新的提示"
        <def>Box3Quaternion</def> / <def>GameQuaternion</def>对于萌新来说可能会有点困难（甚至比<def>Box3Vector3</def> / <def>GameVector3</def>还要复杂）
        如果不会使用，不需要了解所有方法，使用[<staticMethod>fromEuler</staticMethod>](#fromEuler)构建<def>Box3Quaternion</def> / <def>GameQuaternion</def>

!!! note "提示"
    下列全部\[示例\]的代码后面的注释为预期的运行结果，可以不用看“<~”，这只是一个提示符

## 常用
[<staticMethod>fromEuler</staticMethod>](#fromEuler)
[<method>rotateX</method>](#rotateX)
[<method>rotateY</method>](#rotateY)
[<method>rotateZ</method>](#rotateZ)
## 属性
| 属性 | 类型 | 说明 |
| :- | :- | :- |
| [w](property) | <def>number</def> | 四元数实部 |
| [x](property) | <def>number</def> | 四元数x虚部 |
| [y](property) | <def>number</def> | 四元数y虚部 |
| [z](property) | <def>number</def> | 四元数z虚部 |

## 方法
!!! bug "内容缺失"
    API文档内容繁多，有一些内容还未完工。  
    如果你愿意为此贡献一份力量，请[加入我们](/about)

<span anchor="rotateX">
[rotateX](method) ([_rad](arg): [](number)): [](Box3Quaternion)  
[rotateX](method) ([_rad](arg): [](number)): [](GameQuaternion)
</span>
:   将这个四元数绕x轴旋转，使用弧度制，单位为$rad$

    !!! warning "是弧度，不是角度！"
    ??? quote "弧度"
        另一种表示角度的方法，单位为$rad$，$\pi rad$相当于$180°$，$2\pi rad$相当于$360°$  
        其定义为：弧长等于圆半径的弧所对应的圆心角为$1rad$。

<span anchor="rotateY">
[rotateY](method) ([_rad](arg): [](number)): [](Box3Quaternion)  
[rotateY](method) ([_rad](arg): [](number)): [](GameQuaternion)
</span>
:   将这个四元数绕y轴旋转，使用弧度制，单位为$rad$

    !!! warning "是弧度，不是角度！"
    ??? quote "弧度"
        另一种表示角度的方法，单位为$rad$，$\pi rad$相当于$180°$，$2\pi rad$相当于$360°$  
        其定义为：弧长等于圆半径的弧所对应的圆心角为$1rad$。

<span anchor="rotateZ">
[rotateZ](method) ([_rad](arg): [](number)): [](Box3Quaternion)  
[rotateZ](method) ([_rad](arg): [](number)): [](GameQuaternion)
</span>
:   将这个四元数绕z轴旋转，使用弧度制，单位为$rad$

    !!! warning "是弧度，不是角度！"
    ??? quote "弧度"
        另一种表示角度的方法，单位为$rad$，$\pi rad$相当于$180°$，$2\pi rad$相当于$360°$  
        其定义为：弧长等于圆半径的弧所对应的圆心角为$1rad$。

<span anchor="fromEuler"><staticMethod>fromEuler</staticMethod> ([x](arg): <def>number</def>, [y](arg): <def>number</def>, [z](arg): <def>number</def>): <def>Box3Quaternion</def>  
<staticMethod>fromEuler</staticMethod> ([x](arg): <def>number</def>, [y](arg): <def>number</def>, [z](arg): <def>number</def>): <def>GameQuaternion</def></span>
:   从欧拉角生成一个<def>Box3Quaternion</def> / <def>GameQuaternion</def>

    !!! tip "提示"
        使用此方法生成<def>Box3Quaternion</def> / <def>GameQuaternion</def>对萌新来说可能会更加友好  

    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            Box3Quaternion.fromEuler(0, 90, 0) //<~ { w:0.7071067811865476, x:0, y:0.7071067811865475, z:0 }
            Box3Quaternion.fromEuler(0, 0, 0) // <~ { w:1, x:0, y:0, z:0 }
            ```
        === "Arena 编辑器"
            ```javascript
            GameQuaternion.fromEuler(0, 90, 0) //<~ { w:0.7071067811865476, x:0, y:0.7071067811865475, z:0 }
            GameQuaternion.fromEuler(0, 0, 0) // <~ { w:1, x:0, y:0, z:0 }
            ```