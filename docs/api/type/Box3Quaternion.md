# <def>Box3Quaternion</def>
[查阅官方文档（非常不全）](https://docs.box3.codemao.cn/box3quaternion.html){.md-button}  

## 构造函数
new <def>Box3Quaternion</def>(w: <def>number</def>, x: <def>number</def>, y: <def>number</def>, z: <def>number</def>): <def>Box3Quaternion</def>  
新建一个四元数
??? tip "对于萌新的提示"
    <def>Box3Quaternion</def>对于萌新来说可能会有点困难（甚至比<def>Box3Vector3</def>还要复杂）
    如果不会使用，不需要了解所有方法，并且使用[<staticMethod>fromEuler</staticMethod>](#fromEuler)构建<def>Box3Quaternion</def>

---

!!! note "提示"
    下列全部\[示例\]的代码后面的注释为预期的运行结果，可以不用看“<~”，这只是一个提示符

## 常用
[<staticMethod>fromEuler</staticMethod>](#fromEuler)
## 方法
<span anchor="fromEuler"><staticMethod>fromEuler</staticMethod></span>
: 从欧拉角生成一个<def>Box3Quaternion</def>
!!! tip "提示"
    使用此方法生成<def>Box3Quaternion</def>对萌新来说可能会更加友好  

??? quote "欧拉角"
    用来确定定点转动刚体位置的3个一组独立角参量，由章动角 $θ$ 、旋进角（即进动角） $ψ$ 和自转角 $φ$ 组成，为欧拉首先提出而得名。

??? example "示例"
    ```javascript
    Box3Quaternion.fromEuler(0, 90, 0) //<~ { w:0.7071067811865476, x:0, y:0.7071067811865475, z:0 }
    Box3Quaternion.fromEuler(0, 0, 0) // <~ { w:1, x:0, y:0, z:0 }
    ```