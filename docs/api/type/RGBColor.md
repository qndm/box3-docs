<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

: [查阅官方文档](https://box3.yuque.com/org-wiki-box3-ev7rl4/guide/bekwo15deddl63gw)  
  [查阅官方文档（Arena）](https://box3.yuque.com/staff-khn556/wupvz3/kxqf3awgo7oc95eg)  
  [查阅社区文档（Arena）](https://www.yuque.com/box3lab/api/hahez5lgb10y38cz)


: <def>Box3RGBColor</def> / <def>GameRGBColor</def> 是表示RGB颜色的一个类，不包含透明度
## 构造函数
<constructor>Box3RGBColor</constructor>([r](arg): <def>number</def>, [g](arg): <def>number</def>, [b](arg): <def>number</def>): <def>Box3RGBColor</def>  
<constructor>GameRGBColor</constructor>([r](arg): <def>number</def>, [g](arg): <def>number</def>, [b](arg): <def>number</def>): <def>GameRGBColor</def>  
创建一个RGB颜色
!!! warning "取值范围"
    一般情况下，`r`、`g`、`b`的取值范围均为`0` ~ `1`  
    但在特点情况下（例如客户端代码），`r`、`g`、`b`的取值范围均为`0` ~ `255`

??? example "示例"
    === "旧版编辑器"
        ```javascript
        new Box3RGBColor(0, 0, 0) // 黑色
        new Box3RGBColor(1, 1, 1) // 白色
        new Box3RGBColor(1, 0, 0) // 红色
        new Box3RGBColor(0, 1, 0) // 绿色
        new Box3RGBColor(0, 0, 1) // 蓝色
        new Box3RGBColor(1, 1, 0) // 黄色
        new Box3RGBColor(0, 1, 1) // 青色
        new Box3RGBColor(1, 0, 1) // 紫色
        ```
    === "Arena 编辑器"
        ```javascript
        new GameRGBColor(0, 0, 0) // 黑色
        new GameRGBColor(1, 1, 1) // 白色
        new GameRGBColor(1, 0, 0) // 红色
        new GameRGBColor(0, 1, 0) // 绿色
        new GameRGBColor(0, 0, 1) // 蓝色
        new GameRGBColor(1, 1, 0) // 黄色
        new GameRGBColor(0, 1, 1) // 青色
        new GameRGBColor(1, 0, 1) // 紫色
        ```

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

## 方法

!!! note "说明"
    下列全部\[示例\]的代码后面的注释为预期的运行结果，可以不用看“<~”，这只是一个提示符

<span anchor="set"><method>set</method> ([r](arg): <def>number</def>, [g](arg): <def>number</def>, [b](arg): <def>number</def>): <def>Box3RGBColor</def>  
<method>set</method> ([r](arg): <def>number</def>, [g](arg): <def>number</def>, [b](arg): <def>number</def>): <def>GameRGBColor</def></span>  
:   设置RGB颜色的值

    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3RGBColor(0, 0, 0).set(1, 1, 0) // <~ { r: 1, g: 1, b: 0 }
            new Box3RGBColor(0.1, 0.2, 0.3).set(0.2, 0.4, 0.6) // <~ { r: 0.2, g: 0.4, b: 0.6 }
            new Box3RGBColor().set(0.5, 0.5, 0.5) // <~ { r: 0.5, g: 0.5, b: 0.5 }
            ```
        === "Arena 编辑器"
            ```javascript
            new GameRGBColor(0, 0, 0).set(1, 1, 0) // <~ { r: 1, g: 1, b: 0 }
            new GameRGBColor(0.1, 0.2, 0.3).set(0.2, 0.4, 0.6) // <~ { r: 0.2, g: 0.4, b: 0.6 }
            new GameRGBColor().set(0.5, 0.5, 0.5) // <~ { r: 0.5, g: 0.5, b: 0.5 }
            ```

<span anchor="copy"><method>copy</method> ([c](arg): <def>Box3RGBColor</def>): <def>Box3RGBColor</def>  
<method>copy</method> ([c](arg): <def>GameRGBColor</def>): <def>GameRGBColor</def></span>  
:   将一个RGB颜色的值复制到该RGB颜色颜色中

    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3RGBColor(0, 0, 0).copy(new Box3RGBColor(1, 1, 0)) // <~ { r: 1, g: 1, b: 0 }
            new Box3RGBColor(1, 2, 3).copy(new Box3RGBColor(0.2, 0.4, 0.6)) // <~ { r: 0.2, g: 0.4, b: 0.6 }
            new Box3RGBColor().copy(new Box3RGBColor(0.5, 0.5, 0.5)) // <~ { r: 0.5, g: 0.5, b: 0.5 }
            ```
        === "Arena 编辑器"
            ```javascript
            new GameRGBColor(0, 0, 0).copy(new GameRGBColor(1, 1, 0)) // <~ { r: 1, g: 1, b: 0 }
            new GameRGBColor(1, 2, 3).copy(new GameRGBColor(0.2, 0.4, 0.6)) // <~ { r: 0.2, g: 0.4, b: 0.6 }
            new GameRGBColor().copy(new GameRGBColor(0.5, 0.5, 0.5)) // <~ { r: 0.5, g: 0.5, b: 0.5 }
            ```

<span anchor="clone"><method>clone</method> (): <def>Box3RGBColor</def>  
<method>clone</method> (): <def>GameRGBColor</def></span>  
:   复制该RGB颜色

    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3RGBColor(1, 1, 1).clone() //<~ { r: 1, g: 1, b: 1 }
            ```
        === "Arena 编辑器"
            ```javascript
            new GameRGBColor(1, 1, 1).clone() //<~ { r: 1, g: 1, b: 1 }
            ```

<method>add</method> ([rgb](arg): <def>Box3RGBColor</def>): <def>Box3RGBColor</def>  
<method>add</method> ([rgb](arg): <def>GameRGBColor</def>): <def>GameRGBColor</def>

:   将这个RGB颜色的值加上另一个RGB颜色的值，返回结果  

    !!! warning "此方法不会改变原来的RGB颜色"
    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3RGBColor(0.1, 0.1, 0.1).add(new Box3RGBColor(0.1, 0.1, 0.1)) // <~ { r: 0.2, g: 0.2, b: 0.2 }
            ```
        === "Arena 编辑器"
            ```javascript
            new GameRGBColor(0.1, 0.1, 0.1).add(new GameRGBColor(0.1, 0.1, 0.1)) // <~ { r: 0.2, g: 0.2, b: 0.2 }
            ```

<method>sub</method> ([rgb](arg): <def>Box3RGBColor</def>): <def>Box3RGBColor</def>  
<method>sub</method> ([rgb](arg): <def>GameRGBColor</def>): <def>GameRGBColor</def>

:   将这个RGB颜色的值加上另一个RGB颜色的值，返回结果  

    !!! warning "此方法不会改变原来的RGB颜色"
    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3RGBColor(0.1, 0.1, 0.1).sub(new Box3RGBColor(0.1, 0.1, 0.1)) // <~ { r: 0, g: 0, b: 0 }
            ```
        === "Arena 编辑器"
            ```javascript
            new GameRGBColor(0.1, 0.1, 0.1).sub(new GameRGBColor(0.1, 0.1, 0.1)) // <~ { r: 0, g: 0, b: 0 }
            ```

<method>mul</method> ([rgb](arg): <def>Box3RGBColor</def>): <def>Box3RGBColor</def>  
<method>mul</method> ([rgb](arg): <def>GameRGBColor</def>): <def>GameRGBColor</def>

:   将这个RGB颜色的值加上另一个RGB颜色的值，返回结果  

    !!! warning "此方法不会改变原来的RGB颜色"
    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3RGBColor(0.1, 0.1, 0.1).mul(new Box3RGBColor(0.1, 0.1, 0.1)) // <~ { r: 0.01, g: 0.01, b: 0.01 }
            ```
        === "Arena 编辑器"
            ```javascript
            new GameRGBColor(0.1, 0.1, 0.1).mul(new GameRGBColor(0.1, 0.1, 0.1)) // <~ { r: 0.01, g: 0.01, b: 0.01 }
            ```

<method>div</method> ([rgb](arg): <def>Box3RGBColor</def>): <def>Box3RGBColor</def>  
<method>div</method> ([rgb](arg): <def>GameRGBColor</def>): <def>GameRGBColor</def>

:   将这个RGB颜色的值除以另一个RGB颜色的值，返回结果  

    !!! warning "此方法不会改变原来的RGB颜色"
    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3RGBColor(0.1, 0.1, 0.1).div(new Box3RGBColor(0.1, 0.1, 0.1)) // <~ { r: 1, g: 1, b: 1 }
            ```
        === "Arena 编辑器"
            ```javascript
            new GameRGBColor(0.1, 0.1, 0.1).div(new GameRGBColor(0.1, 0.1, 0.1)) // <~ { r: 1, g: 1, b: 1 }
            ```

<hiddenMethod>addEq</hiddenMethod> ([rgb](arg): <def>Box3RGBColor</def>): <def>Box3RGBColor</def>  
<hiddenMethod>addEq</hiddenMethod> ([rgb](arg): <def>GameRGBColor</def>): <def>GameRGBColor</def>

:   将这个RGB颜色的值加上另一个RGB颜色的值，返回结果  

    !!! warning "此方法会改变原来的RGB颜色"
    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3RGBColor(0.1, 0.1, 0.1).addEq(new Box3RGBColor(0.1, 0.1, 0.1)) // <~ { r: 0.2, g: 0.2, b: 0.2 }
            ```
        === "Arena 编辑器"
            ```javascript
            new GameRGBColor(0.1, 0.1, 0.1).addEq(new GameRGBColor(0.1, 0.1, 0.1)) // <~ { r: 0.2, g: 0.2, b: 0.2 }
            ```

<hiddenMethod>subEq</hiddenMethod> ([rgb](arg): <def>Box3RGBColor</def>): <def>Box3RGBColor</def>  
<hiddenMethod>subEq</hiddenMethod> ([rgb](arg): <def>GameRGBColor</def>): <def>GameRGBColor</def>

:   将这个RGB颜色的值加上另一个RGB颜色的值，返回结果  

    !!! warning "此方法会改变原来的RGB颜色"
    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3RGBColor(0.1, 0.1, 0.1).subEq(new Box3RGBColor(0.1, 0.1, 0.1)) // <~ { r: 0, g: 0, b: 0 }
            ```
        === "Arena 编辑器"
            ```javascript
            new GameRGBColor(0.1, 0.1, 0.1).subEq(new GameRGBColor(0.1, 0.1, 0.1)) // <~ { r: 0, g: 0, b: 0 }
            ```

<hiddenMethod>mulEq</hiddenMethod> ([rgb](arg): <def>Box3RGBColor</def>): <def>Box3RGBColor</def>  
<hiddenMethod>mulEq</hiddenMethod> ([rgb](arg): <def>GameRGBColor</def>): <def>GameRGBColor</def>

:   将这个RGB颜色的值加上另一个RGB颜色的值，返回结果  

    !!! warning "此方法会改变原来的RGB颜色"
    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3RGBColor(0.1, 0.1, 0.1).mulEq(new Box3RGBColor(0.1, 0.1, 0.1)) // <~ { r: 0.01, g: 0.01, b: 0.01 }
            ```
        === "Arena 编辑器"
            ```javascript
            new GameRGBColor(0.1, 0.1, 0.1).mulEq(new GameRGBColor(0.1, 0.1, 0.1)) // <~ { r: 0.01, g: 0.01, b: 0.01 }
            ```

<hiddenMethod>divEq</hiddenMethod> ([rgb](arg): <def>Box3RGBColor</def>): <def>Box3RGBColor</def>  
<hiddenMethod>divEq</hiddenMethod> ([rgb](arg): <def>GameRGBColor</def>): <def>GameRGBColor</def>

:   将这个RGB颜色的值除以另一个RGB颜色的值，返回结果  

    !!! warning "此方法会改变原来的RGB颜色"
    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3RGBColor(0.1, 0.1, 0.1).divEq(new Box3RGBColor(0.1, 0.1, 0.1)) // <~ { r: 1, g: 1, b: 1 }
            ```
        === "Arena 编辑器"
            ```javascript
            new GameRGBColor(0.1, 0.1, 0.1).divEq(new GameRGBColor(0.1, 0.1, 0.1)) // <~ { r: 1, g: 1, b: 1 }
            ```

<method>lerp</method> ([rgb](arg): <def>Box3RGBColor</def>, [n](arg): <def>number</def>): <def>Box3RGBColor</def>  
<method>lerp</method> ([rgb](arg): <def>GameRGBColor</def>, [n](arg): <def>number</def>): <def>GameRGBColor</def>

:   插值函数，类似于取平均值  
    可以理解为，以该颜色为起点，`rgb`为终点的平滑色块，取`n`处的颜色
    === "旧版编辑器"
        | 参数 | 类型 | 说明 |
        | :- | :- | :- |
        | rgb | <def>Box3RGBColor</def> | 终点颜色 |
        | n | <def>number</def> | 插值位置，范围`0`~`1` |

    === "Arena 编辑器"
        | 参数 | 类型 | 说明 |
        | :- | :- | :- |
        | rgb | <def>GameRGBColor</def> | 终点颜色 |
        | n | <def>number</def> | 插值位置，范围`0`~`1` |

    !!! warning "此方法不会改变原来的RGB颜色"
    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3RGBColor(0, 0, 0).lerp(new Box3RGBColor(1, 1, 1), 0.5) // <~ { r: 0.5, g: 0.5, b: 0.5 }
            new Box3RGBColor(0, 0, 0).lerp(new Box3RGBColor(1, 1, 1), 0.25) // <~ { r: 0.25, g: 0.25, b: 0.25 }
            new Box3RGBColor(0, 0, 0).lerp(new Box3RGBColor(0.5, 0.5, 0.5), 0.5) // <~ { r: 0.25, g: 0.25, b: 0.25 }
            ```
        === "Arena 编辑器"
            ```javascript
            new GameRGBColor(0, 0, 0).lerp(new GameRGBColor(1, 1, 1), 0.5) // <~ { r: 0.5, g: 0.5, b: 0.5 }
            new GameRGBColor(0, 0, 0).lerp(new GameRGBColor(1, 1, 1), 0.25) // <~ { r: 0.25, g: 0.25, b: 0.25 }
            new GameRGBColor(0, 0, 0).lerp(new GameRGBColor(0.5, 0.5, 0.5), 0.5) // <~ { r: 0.25, g: 0.25, b: 0.25 }
            ```

<method>equals</method> ([rgb](arg): <def>Box3RGBColor</def>): <def>boolean</def>
<method>equals</method> ([rgb](arg): <def>GameRGBColor</def>): <def>boolean</def>
:   判断该RGB颜色是否和另一个颜色的值相等  
    容差为`0.000001`

    !!! failure "此处与官方API不符"
        该文档没有`tolerance`: <def>number</def>参数
    !!! failure "此处与社区API不符"
        该文档没有`tolerance`: <def>number</def>参数
    !!! success "经 2024/7/18 测试：该文档内容无问题"
        === "Arena 编辑器"
            ```javascript
            new GameRGBColor(0.5, 0.5, 0.5).equals(new GameRGBColor(0.6, 0.5, 0.5), 1) // <~ false
            ```
    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3RGBColor(0.1, 0.1, 0.1).equals(new Box3RGBColor(0.1, 0.1, 0.1)) // <~ true
            new Box3RGBColor(0.1, 0.1, 0.1).equals(new Box3RGBColor(0.100001, 0.1, 0.1)) // <~ false
            new Box3RGBColor(0.1, 0.1, 0.1).equals(new Box3RGBColor(0.1000001, 0.1, 0.1)) // <~ true
            new Box3RGBColor(0.1, 0.1, 0.1).equals(new Box3RGBColor(0.1000009999, 0.1, 0.1)) // <~ true
            ```
        === "Arena 编辑器"
            ```javascript
            new GameRGBColor(0.1, 0.1, 0.1).equals(new GameRGBColor(0.1, 0.1, 0.1)) // <~ true
            new GameRGBColor(0.1, 0.1, 0.1).equals(new GameRGBColor(0.100001, 0.1, 0.1)) // <~ false
            new GameRGBColor(0.1, 0.1, 0.1).equals(new GameRGBColor(0.1000001, 0.1, 0.1)) // <~ true
            new GameRGBColor(0.1, 0.1, 0.1).equals(new GameRGBColor(0.1000009999, 0.1, 0.1)) // <~ true
            ```

<method>toString</method> (): <def>string</def>
:   将这个RGB颜色转换成字符串

    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            JSON.stringify(new Box3RGBColor(1, 0, 0).toString()) // <~ "{ r:1, g:0, b:0 }"
            ```
        === "Arena 编辑器"
            ```javascript
            JSON.stringify(new GameRGBColor(1, 0, 0).toString()) // <~ "{ r:1, g:0, b:0 }"
            ```

<method>toRGBA</method> (): <def>Box3RGBAColor</def>
<method>toRGBA</method> (): <def>GameRGBAColor</def>
:   将这个RGB颜色转换成RGBA颜色

    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            new Box3RGBColor(1, 0, 0).toRGBA() // <~ { r:1, g:0, b:0, a:1 }
            ```
        === "Arena 编辑器"
            ```javascript
            new GameRGBColor(1, 0, 0).toRGBA() // <~ { r:1, g:0, b:0, a:1 }
            ```

<staticMethod>random</staticMethod> (): <def>Box3RGBColor</def>
<staticMethod>random</staticMethod> (): <def>GameRGBColor</def>
:   随机生成一个颜色