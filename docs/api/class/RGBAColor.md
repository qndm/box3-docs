<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

: [查阅官方文档](https://box3.yuque.com/org-wiki-box3-ev7rl4/guide/afut1ekcahmd153n)  
  [查阅官方文档（Arena）](https://box3.yuque.com/staff-khn556/wupvz3/he0l2ds1y29p5376)  
  [查阅社区文档（Arena）](https://www.yuque.com/box3lab/api/hlidmzg26mskni2e)

: <def>Box3RGBAColor</def> / <def>GameRGBAColor</def> 是表示RGBA颜色的一个类，包含透明度

## 构造函数
<constructor>Box3RGBAColor</constructor>([r](arg): <def>number</def>, [g](arg): <def>number</def>, [b](arg): <def>number</def>, [a](arg): <def>number</def>): <def>Box3RGBAColor</def>  
<constructor>GameRGBAColor</constructor>([r](arg): <def>number</def>, [g](arg): <def>number</def>, [b](arg): <def>number</def>, [a](arg): <def>number</def>): <def>GameRGBAColor</def>  
创建一个RGBA颜色
??? example "示例"
    === "旧版编辑器"
        ```javascript
        new Box3RGBAColor(0, 0, 0, 1) // 黑色
        new Box3RGBAColor(1, 1, 1, 1) // 白色
        new Box3RGBAColor(1, 0, 0, 1) // 红色
        new Box3RGBAColor(0, 1, 0, 1) // 绿色
        new Box3RGBAColor(0, 0, 1, 1) // 蓝色
        new Box3RGBAColor(1, 1, 0, 1) // 黄色
        new Box3RGBAColor(0, 1, 1, 1) // 青色
        new Box3RGBAColor(1, 0, 1, 1) // 紫色
        new Box3RGBAColor(0, 0, 0, 0.5) // 黑色，但是半透明
        ```
    === "Arena 编辑器"
        ```javascript
        new GameRGBAColor(0, 0, 0, 1) // 黑色
        new GameRGBAColor(1, 1, 1, 1) // 白色
        new GameRGBAColor(1, 0, 0, 1) // 红色
        new GameRGBAColor(0, 1, 0, 1) // 绿色
        new GameRGBAColor(0, 0, 1, 1) // 蓝色
        new GameRGBAColor(1, 1, 0, 1) // 黄色
        new GameRGBAColor(0, 1, 1, 1) // 青色
        new GameRGBAColor(1, 0, 1, 1) // 紫色
        new GameRGBAColor(0, 0, 0, 0.5) // 黑色，但是半透明
        ```
!!! warning "取值范围"
    一般情况下，`r`、`g`、`b`、`a`的取值范围均为`0` ~ `1`  
    但在特点情况下（例如客户端代码），`r`、`g`、`b`、`a`的取值范围均为`0` ~ `255`

## 常用
[<method>set</method>](#set)
[<method>copy</method>](#copy)
[<method>clone</method>](#clone)  

## 属性

| 属性 | 类型 | 说明 |
| :- | :- | :- |
| [r](property) | <def>number</def> | 颜色的红色值 |
| [g](property) | <def>number</def> | 颜色的绿色值 |
| [b](property) | <def>number</def> | 颜色的蓝色值 |
| [a](property) | <def>number</def> | 颜色的不透明度 |

## 方法

!!! note "说明"
    下列全部\[示例\]的代码后面的注释为预期的运行结果，可以不用看“<~”，这只是一个提示符

<span anchor="set"><method>set</method> ([r](arg): <def>number</def>, [g](arg): <def>number</def>, [b](arg): <def>number</def>, [a](arg): <def>number</def>): <def>Box3RGBAColor</def>  
<method>set</method> ([r](arg): <def>number</def>, [g](arg): <def>number</def>, [b](arg): <def>number</def>, [a](arg): <def>number</def>): <def>GameRGBAColor</def></span>  
:   设置RGB颜色的值
    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3RGBAColor(0, 0, 0, 0).set(1, 1, 0, 1) // <~ { r: 1, g: 1, b: 0, a: 1 }
            new Box3RGBAColor(0.1, 0.2, 0.3, 0.4).set(0.2, 0.4, 0.6, 0.8) // <~ { r: 0.2, g: 0.4, b: 0.6, a: 0.8 }
            new Box3RGBAColor().set(0.5, 0.5, 0.5, 0.5) // <~ { r: 0.5, g: 0.5, b: 0.5, a:0.5 }
            ```
        === "Arena 编辑器"
            ```javascript
            new GameRGBAColor(0, 0, 0, 0).set(1, 1, 0, 1) // <~ { r: 1, g: 1, b: 0 }
            new GameRGBAColor(0.1, 0.2, 0.3, 0.4).set(0.2, 0.4, 0.6, 0.8) // <~ { r: 0.2, g: 0.4, b: 0.6, a:0.8 }
            new GameRGBAColor().set(0.5, 0.5, 0.5, 0.5) // <~ { r: 0.5, g: 0.5, b: 0.5, a:0.5 }
            ```

<span anchor="copy"><method>copy</method> ([c](arg): <def>Box3RGBAColor</def>): <def>Box3RGBAColor</def>  
<method>copy</method> ([c](arg): <def>GameRGBAColor</def>): <def>GameRGBAColor</def></span>  
:   将一个RGB颜色的值复制到该RGB颜色颜色中
    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3RGBAColor(0, 0, 0, 0).copy(new Box3RGBAColor(1, 1, 0)) // <~ { r: 1, g: 1, b: 0 }
            new Box3RGBAColor(0.1, 0.2, 0.3, 0).copy(new Box3RGBAColor(0.2, 0.4, 0.6)) // <~ { r: 0.2, g: 0.4, b: 0.6 }
            new Box3RGBAColor().copy(new Box3RGBAColor(0.5, 0.5, 0.5)) // <~ { r: 0.5, g: 0.5, b: 0.5 }
            ```
        === "Arena 编辑器"
            ```javascript
            new GameRGBAColor(0, 0, 0, 0).copy(new GameRGBAColor(1, 1, 0, 1)) // <~ { r: 1, g: 1, b: 0, a: 1 }
            new GameRGBAColor(0.1, 0.2, 0.3, 0).copy(new GameRGBAColor(0.2, 0.4, 0.6, 0.8)) // <~ { r: 0.2, g: 0.4, b: 0.6, a: 0.8 }
            new GameRGBAColor().copy(new GameRGBAColor(0.5, 0.5, 0.5, 0.5)) // <~ { r: 0.5, g: 0.5, b: 0.5, a: 0.5 }
            ```

<span anchor="clone"><method>clone</method> (): <def>Box3RGBAColor</def>  
<method>clone</method> (): <def>GameRGBAColor</def></span>  
:   复制该RGB颜色
    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3RGBAColor(1, 1, 1, 1).clone() // <~ { r: 1, g: 1, b: 1, a: 1 }
            ```
        === "Arena 编辑器"
            ```javascript
            new GameRGBAColor(1, 1, 1, 1).clone() // <~ { r: 1, g: 1, b: 1, a: 1 }
            ```

<method>add</method> ([rgba](arg): <def>Box3RGBAColor</def>): <def>Box3RGBAColor</def>  
<method>add</method> ([rgba](arg): <def>GameRGBAColor</def>): <def>GameRGBAColor</def>
:   将这个RGB颜色的值加上另一个RGB颜色的值，返回结果  
    !!! warning "此方法不会改变原来的RGBA颜色"
    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3RGBAColor(0.1, 0.1, 0.1, 0.1).add(new Box3RGBAColor(0.1, 0.1, 0.1, 0.1)) // <~ { r: 0.2, g: 0.2, b: 0.2, a: 0.2 }
            ```
        === "Arena 编辑器"
            ```javascript
            new GameRGBAColor(0.1, 0.1, 0.1, 0.1).add(new GameRGBAColor(0.1, 0.1, 0.1, 0.1)) // <~ { r: 0.2, g: 0.2, b: 0.2, a: 0.2 }
            ```

<method>sub</method> ([rgba](arg): <def>Box3RGBAColor</def>): <def>Box3RGBAColor</def>  
<method>sub</method> ([rgba](arg): <def>GameRGBAColor</def>): <def>GameRGBAColor</def>
:   将这个RGB颜色的值加上另一个RGB颜色的值，返回结果  
    !!! warning "此方法不会改变原来的RGBA颜色"
    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3RGBAColor(0.1, 0.1, 0.1, 0.1).sub(new Box3RGBAColor(0.1, 0.1, 0.1, 0.1)) // <~ { r: 0, g: 0, b: 0, a: 0 }
            ```
        === "Arena 编辑器"
            ```javascript
            new GameRGBAColor(0.1, 0.1, 0.1, 0.1).sub(new GameRGBAColor(0.1, 0.1, 0.1, 0.1)) // <~ { r: 0, g: 0, b: 0, a: 0 }
            ```

<method>mul</method> ([rgba](arg): <def>Box3RGBAColor</def>): <def>Box3RGBAColor</def>  
<method>mul</method> ([rgba](arg): <def>GameRGBAColor</def>): <def>GameRGBAColor</def>
:   将这个RGB颜色的值加上另一个RGB颜色的值，返回结果  
    !!! warning "此方法不会改变原来的RGBA颜色"
    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3RGBAColor(0.1, 0.1, 0.1, 0.1).mul(new Box3RGBAColor(0.1, 0.1, 0.1, 0.1)) // <~ { r: 0.01, g: 0.01, b: 0.01, a: 0.01 }
            ```
        === "Arena 编辑器"
            ```javascript
            new GameRGBAColor(0.1, 0.1, 0.1, 0.1).mul(new GameRGBAColor(0.1, 0.1, 0.1, 0.1)) // <~ { r: 0.01, g: 0.01, b: 0.01, a: 0.01 }
            ```

<method>div</method> ([rgba](arg): <def>Box3RGBAColor</def>): <def>Box3RGBAColor</def>  
<method>div</method> ([rgba](arg): <def>GameRGBAColor</def>): <def>GameRGBAColor</def>
:   将这个RGB颜色的值除以另一个RGB颜色的值，返回结果  
    !!! warning "此方法不会改变原来的RGBA颜色"
    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3RGBAColor(0.1, 0.1, 0.1, 0.1).div(new Box3RGBAColor(0.1, 0.1, 0.1, 0.1)) // <~ { r: 1, g: 1, b: 1, a: 1 }
            ```
        === "Arena 编辑器"
            ```javascript
            new GameRGBAColor(0.1, 0.1, 0.1, 0.1).div(new GameRGBAColor(0.1, 0.1, 0.1, 0.1)) // <~ { r: 1, g: 1, b: 1, a: 1 }
            ```

<hiddenMethod>addEq</hiddenMethod> ([rgba](arg): <def>Box3RGBAColor</def>): <def>Box3RGBAColor</def>  
<hiddenMethod>addEq</hiddenMethod> ([rgba](arg): <def>GameRGBAColor</def>): <def>GameRGBAColor</def>
:   将这个RGB颜色的值加上另一个RGB颜色的值，返回结果  
    !!! warning "此方法会改变原来的RGBA颜色"
    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3RGBAColor(0.1, 0.1, 0.1, 0.1).addEq(new Box3RGBAColor(0.1, 0.1, 0.1, 0.1)) // <~ { r: 0.2, g: 0.2, b: 0.2, a: 0.2 }
            ```
        === "Arena 编辑器"
            ```javascript
            new GameRGBAColor(0.1, 0.1, 0.1, 0.1).addEq(new GameRGBAColor(0.1, 0.1, 0.1, 0.1)) // <~ { r: 0.2, g: 0.2, b: 0.2, a: 0.2 }
            ```

<hiddenMethod>subEq</hiddenMethod> ([rgba](arg): <def>Box3RGBAColor</def>): <def>Box3RGBAColor</def>  
<hiddenMethod>subEq</hiddenMethod> ([rgba](arg): <def>GameRGBAColor</def>): <def>GameRGBAColor</def>
:   将这个RGB颜色的值加上另一个RGB颜色的值，返回结果  
    !!! warning "此方法会改变原来的RGBA颜色"
    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3RGBAColor(0.1, 0.1, 0.1, 0.1).subEq(new Box3RGBAColor(0.1, 0.1, 0.1, 0.1)) // <~ { r: 0, g: 0, b: 0, a: 0 }
            ```
        === "Arena 编辑器"
            ```javascript
            new GameRGBAColor(0.1, 0.1, 0.1, 0.1).subEq(new GameRGBAColor(0.1, 0.1, 0.1, 0.1)) // <~ { r: 0, g: 0, b: 0, a: 0 }
            ```

<hiddenMethod>mulEq</hiddenMethod> ([rgba](arg): <def>Box3RGBAColor</def>): <def>Box3RGBAColor</def>  
<hiddenMethod>mulEq</hiddenMethod> ([rgba](arg): <def>GameRGBAColor</def>): <def>GameRGBAColor</def>
:   将这个RGB颜色的值加上另一个RGB颜色的值，返回结果  
    !!! warning "此方法会改变原来的RGBA颜色"
    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3RGBAColor(0.1, 0.1, 0.1, 0.1).mulEq(new Box3RGBAColor(0.1, 0.1, 0.1, 0.1)) // <~ { r: 0.01, g: 0.01, b: 0.01, a: 0.01 }
            ```
        === "Arena 编辑器"
            ```javascript
            new GameRGBAColor(0.1, 0.1, 0.1, 0.1).mulEq(new GameRGBAColor(0.1, 0.1, 0.1, 0.1)) // <~ { r: 0.01, g: 0.01, b: 0.01, a: 0.01 }
            ```

<hiddenMethod>divEq</hiddenMethod> ([rgba](arg): <def>Box3RGBAColor</def>): <def>Box3RGBAColor</def>  
<hiddenMethod>divEq</hiddenMethod> ([rgba](arg): <def>GameRGBAColor</def>): <def>GameRGBAColor</def>
:   将这个RGB颜色的值除以另一个RGB颜色的值，返回结果  
    !!! warning "此方法会改变原来的RGBA颜色"
    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3RGBAColor(0.1, 0.1, 0.1, 0.1).divEq(new Box3RGBAColor(0.1, 0.1, 0.1, 0.1)) // <~ { r: 1, g: 1, b: 1, a: 1 }
            ```
        === "Arena 编辑器"
            ```javascript
            new GameRGBAColor(0.1, 0.1, 0.1, 0.1).divEq(new GameRGBAColor(0.1, 0.1, 0.1, 0.1)) // <~ { r: 1, g: 1, b: 1, a: 1 }
            ```

<method>lerp</method> ([rgba](arg): <def>Box3RGBAColor</def>, [n](arg): <def>number</def>): <def>Box3RGBAColor</def>  
<method>lerp</method> ([rgba](arg): <def>GameRGBAColor</def>, [n](arg): <def>number</def>): <def>GameRGBAColor</def>
:   插值函数，类似于取平均值  
  可以理解为，以该颜色为起点，`rgba`为终点的平滑色块，取`n`处的颜色
    === "旧版编辑器"
        | 参数 | 类型 | 说明 |
        | :- | :- | :- |
        | rgba | <def>Box3RGBAColor</def> | 终点颜色 |
        | n | <def>number</def> | 插值位置，范围`0`~`1` |
    === "Arena 编辑器"
        | 参数 | 类型 | 说明 |
        | :- | :- | :- |
        | rgba | <def>GameRGBAColor</def> | 终点颜色 |
        | n | <def>number</def> | 插值位置，范围`0`~`1` |

    !!! warning "此方法不会改变原来的RGBA颜色"
    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3RGBAColor(0, 0, 0, 1).lerp(new Box3RGBAColor(1, 1, 1, 0), 0.5) // <~ { r: 0.5, g: 0.5, b: 0.5, a: 0.5 }
            new Box3RGBAColor(0, 0, 0, 1).lerp(new Box3RGBAColor(1, 1, 1, 0), 0.25) // <~ { r: 0.25, g: 0.25, b: 0.25, a: 0.75 }
            new Box3RGBAColor(0, 0, 0, 0.5).lerp(new Box3RGBAColor(0.5, 0.5, 0.5, 0), 0.5) // <~ { r: 0.25, g: 0.25, b: 0.25, a: 0.25 }
            ```
        === "Arena 编辑器"
            ```javascript
            new GameRGBAColor(0, 0, 0, 1).lerp(new Box3RGBAColor(1, 1, 1, 0), 0.5) // <~ { r: 0.5, g: 0.5, b: 0.5, a: 0.5 }
            new GameRGBAColor(0, 0, 0, 1).lerp(new Box3RGBAColor(1, 1, 1, 0), 0.25) // <~ { r: 0.25, g: 0.25, b: 0.25, a: 0.75 }
            new GameRGBAColor(0, 0, 0, 0.5).lerp(new Box3RGBAColor(0.5, 0.5, 0.5, 0), 0.5) // <~ { r: 0.25, g: 0.25, b: 0.25, a: 0.25 }
            ```
<hiddenMethod>blendEq</hiddenMethod> ([rgb](arg): <def>Box3RGBColor</def>): <def>Box3RGBColor</def>  
<hiddenMethod>blendEq</hiddenMethod> ([rgb](arg): <def>GameRGBColor</def>): <def>GameRGBColor</def>
:   混合颜色
  可以理解为，将`rgb`RGB颜色上盖一层该RGBA颜色的颜色
    !!! warning "注意结果为<def>Box3RGBColor</def> / <def>GameRGBColor</def>"
    !!! warning "此方法不会改变原来的RGBA颜色"
    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3RGBAColor(0, 0, 0, 1).blendEq(new Box3RGBColor(1, 0, 0)) // <~ { r: 0, g: 0, b: 0 }
            new Box3RGBAColor(0, 0, 0, 0).blendEq(new Box3RGBColor(1, 0, 0)) // <~ { r: 1, g: 0, b: 0 }
            new Box3RGBAColor(0, 0, 0, 0.5).blendEq(new Box3RGBColor(1, 0, 0)) // <~ { r: 0.5, g: 0, b: 0 }
            new Box3RGBAColor(0.5, 0, 0, 0.5).blendEq(new Box3RGBColor(1, 0, 0)) // <~ { r: 0.75, g: 0, b: 0 }
            new Box3RGBAColor(1, 1, 0, 0.5).blendEq(new Box3RGBColor(1, 0, 0)) // <~ { r: 1, g: 0.5, b: 0 }
            ```
        === "Arena 编辑器"
            ```javascript
            new GameRGBAColor(0, 0, 0, 1).blendEq(new GameRGBColor(1, 0, 0)) // <~ { r: 0, g: 0, b: 0 }
            new GameRGBAColor(0, 0, 0, 0).blendEq(new GameRGBColor(1, 0, 0)) // <~ { r: 1, g: 0, b: 0 }
            new GameRGBAColor(0, 0, 0, 0.5).blendEq(new GameRGBColor(1, 0, 0)) // <~ { r: 0.5, g: 0, b: 0 }
            new GameRGBAColor(0.5, 0, 0, 0.5).blendEq(new GameRGBColor(1, 0, 0)) // <~ { r: 0.75, g: 0, b: 0 }
            new GameRGBAColor(1, 1, 0, 0.5).blendEq(new GameRGBColor(1, 0, 0)) // <~ { r: 1, g: 0.5, b: 0 }
            ```

<method>equals</method> ([rgba](arg): <def>Box3RGBAColor</def>): <def>boolean</def>
<method>equals</method> ([rgba](arg): <def>GameRGBAColor</def>): <def>boolean</def>
:   判断该RGB颜色是否和另一个颜色的值相等  
    容差为`0.000001`
    !!! failure "此处与官方API不符"
        该文档没有`tolerance`: <def>number</def>参数
    !!! failure "此处与社区API不符"
        该文档没有`tolerance`: <def>number</def>参数
    !!! success "经 2024/7/18 测试：该文档内容无问题"
        === "Arena 编辑器"
            ```javascript
            new GameRGBAColor(0.5, 0.5, 0.5, 0.5).equals(new GameRGBAColor(0.6, 0.5, 0.5, 0.5), 1) // <~ false
            new GameRGBAColor(0.5, 0.5, 0.5, 0.5).equals(new GameRGBAColor(0.5, 0.5, 0.5, 0.6), 1) // <~ false
            ```
    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3RGBAColor(0.1, 0.1, 0.1, 0.5).equals(new Box3RGBAColor(0.1, 0.1, 0.1, 0.5)) // <~ true
            new Box3RGBAColor(0.1, 0.1, 0.1, 0.5).equals(new Box3RGBAColor(0.100001, 0.1, 0.1, 0.5)) // <~ false
            new Box3RGBAColor(0.1, 0.1, 0.1, 0.5).equals(new Box3RGBAColor(0.1000001, 0.1, 0.1, 0.5)) // <~ true
            new Box3RGBAColor(0.1, 0.1, 0.1, 0.5).equals(new Box3RGBAColor(0.1000009999, 0.1, 0.1, 0.5)) // <~ true
            new Box3RGBAColor(0.1, 0.1, 0.1, 0.5).equals(new Box3RGBAColor(0.1, 0.1, 0.1, 0.500001)) // <~ false
            new Box3RGBAColor(0.1, 0.1, 0.1, 0.5).equals(new Box3RGBAColor(0.1, 0.1, 0.1, 0.5000009999)) // <~ true
            ```
        === "Arena 编辑器"
            ```javascript
            new GameRGBAColor(0.1, 0.1, 0.1, 0.5).equals(new GameRGBAColor(0.1, 0.1, 0.1, 0.5)) // <~ true
            new GameRGBAColor(0.1, 0.1, 0.1, 0.5).equals(new GameRGBAColor(0.100001, 0.1, 0.1, 0.5)) // <~ false
            new GameRGBAColor(0.1, 0.1, 0.1, 0.5).equals(new GameRGBAColor(0.1000001, 0.1, 0.1, 0.5)) // <~ true
            new GameRGBAColor(0.1, 0.1, 0.1, 0.5).equals(new GameRGBAColor(0.1000009999, 0.1, 0.1, 0.5)) // <~ true
            new GameRGBAColor(0.1, 0.1, 0.1, 0.5).equals(new GameRGBAColor(0.1, 0.1, 0.1, 0.500001)) // <~ false
            new GameRGBAColor(0.1, 0.1, 0.1, 0.5).equals(new GameRGBAColor(0.1, 0.1, 0.1, 0.5000009999)) // <~ true
            ```

<method>toString</method> (): <def>string</def>  
:   将这个RGBA颜色转换成字符串
    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            JSON.stringify(new Box3RGBAColor(1, 0, 0, 0.75).toString()) // <~ "{ r:1, g:0, b:0, a:0.75 }"
            ```
        === "Arena 编辑器"
            ```javascript
            JSON.stringify(new GameRGBAColor(1, 0, 0, 0.75).toString()) // <~ "{ r:1, g:0, b:0, a:0.75 }"
            ```

toRGB (): <def>Box3RGBAColor</def>  
toRGB (): <def>GameRGBAColor</def>  
:   将这个RGBA颜色转换成RGB颜色
    !!! failure "你被骗了！"
        这只是一个假象的方法  
        这么写的目的是提醒你，<def>Box3RGBAColor</def> / <def>GameRGBAColor</def>并没有这个方法！