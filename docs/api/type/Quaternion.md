# <def>Box3Quaternion</def> / <def>GameQuaternion</def>

<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

[查阅官方文档](https://box3.yuque.com/org-wiki-box3-ev7rl4/guide/und5gi0zqxxci662)  
[查阅官方文档（ARENA）](https://box3.yuque.com/staff-khn556/wupvz3/ci4biyw0qruafkf2)  
[查阅社区文档（ARENA）](https://www.yuque.com/box3lab/api/fnpgxl0r4wrgl3rg)

## 构造函数
new <def>Box3Quaternion</def>(w: <def>number</def>, x: <def>number</def>, y: <def>number</def>, z: <def>number</def>): <def>Box3Quaternion</def>  
new <def>GameQuaternion</def>(w: <def>number</def>, x: <def>number</def>, y: <def>number</def>, z: <def>number</def>): <def>GameQuaternion</def>  

新建一个四元数
??? tip "对于萌新的提示"
    <def>Box3Quaternion</def> / <def>GameQuaternion</def>对于萌新来说可能会有点困难（甚至比<def>Box3Vector3</def> / <def>GameVector3</def>还要复杂）
    如果不会使用，不需要了解所有方法，使用[<staticMethod>fromEuler</staticMethod>](#fromEuler)构建<def>Box3Quaternion</def> / <def>GameQuaternion</def>

---

!!! note "提示"
    下列全部\[示例\]的代码后面的注释为预期的运行结果，可以不用看“<~”，这只是一个提示符

## 常用
[<staticMethod>fromEuler</staticMethod>](#fromEuler)
## 属性
| 属性 | 类型 | 说明 |
| :- | :- | :- |
| `w` | <def>number</def> | 四元数实部 |
| `x` | <def>number</def> | 四元数x虚部 |
| `y` | <def>number</def> | 四元数y虚部 |
| `z` | <def>number</def> | 四元数z虚部 |

## 方法
!!! bug "内容缺失"
    API文档内容繁多，有一些内容还未完工。  
    如果你愿意为此贡献一份力量，请[加入我们](/about)

<span anchor="fromEuler"><staticMethod>fromEuler</staticMethod> (x: <def>number</def>, y: <def>number</def>, z: <def>number</def>): <def>Box3Quaternion</def>  
<staticMethod>fromEuler</staticMethod> (x: <def>number</def>, y: <def>number</def>, z: <def>number</def>): <def>GameQuaternion</def></span>
: 从欧拉角生成一个<def>Box3Quaternion</def> / <def>GameQuaternion</def>
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