<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个客户端API"

    该API仅在客户端脚本使用

:   [查阅官方文档](https://box3.yuque.com/staff-khn556/wupvz3/ig4mghlvlmk8hh2y)  
    [查阅社区文档](https://www.yuque.com/box3lab/api/cc32oflzsctmk2n8)

:   输入框节点，继承于[](UiText)

## 属性
!!! tip "提示"

    虽然下面部分类型为[](Vec2)、[](Vec3)、[](Coord2)的属性标记为只读，但只是你不能直接给这个属性赋值，你仍然可以使用属性自带的方法赋值或者直接给属性的属性赋值  
    同时你也不能像服务端那样`#!javascript x = ...;`的写法了

[name](inherited): [](string)
:   该节点的名称  
    在客户端中，你可以不指定节点的名称（然后你就不能（很难）通过其他方法获取到这个节点了）  
    节点的名称可以相同

[children](readonlyInherited): [](ReadonlyArray)<[](UiNode)>
:   只读，该节点的所有子节点

[parent](inherited): [](UiNode) | [](undefined)
:   该节点的父节点  
    若为[](undefined)，节点不会被渲染，同时若没有任何变量引用该节点，该节点会被浏览器回收；否则，节点会被渲染到页面上

[uiScale](inherited): [](UiScale) | [](undefined)
:   该节点的缩放系数

[anchor](readonlyInherited): [](Vec2)
:   该节点的锚点，决定了该如何定位该节点  
    其[x](accessor)和[y](accessor)的范围皆为$[0, 1]$

[position](readonlyInherited): [](Coord2)
:   该节点的位置

    !!! tip "如何实现右侧对齐"

        [position](readonlyInherited).[scale](readonlyInherited).[x](accessor)设为`#!javascript 1`，再将[anchor](readonlyInherited).[x](accessor)设为`#!javascript 1`，根据需要设定y值即可  
        若希望节点不挨着屏幕右边界，修改[position](readonlyInherited).[offset](readonlyInherited).[x](accessor)为一个负数。数值越小，节点越远离屏幕右边界  
        实现其他方向对齐大概也是这个思路

[backgroundColor](readonlyInherited): [](Vec3) = `#!javascript new Vec3([255, 255, 255])`
:   该节点的背景颜色  
    其[r](accessor)、[g](accessor)、[b](accessor)的范围皆为$[0, 255]$
    <span class="hidden">为啥不和服务端一样$[0, 1]$</span>

[backgroundOpacity](inherited): [](number) = `#!javascript 1`
:   该节点的背景 **不透明度**，范围$[0, 1]$

[size](readonlyInherited): [](Coord2)
:   该节点的大小

[zIndex](inherited): [](number)
:   该节点的渲染层级，数值越大，节点越靠近上层  
    若两个节点的[zIndex](property)相同，那么后创建的节点越靠近上层

[autoResize](inherited): `#!javascript 'NONE'` | `#!javascript 'X'` | `#!javascript 'Y'` | `#!javascript 'XY'`
:   该节点自动调整大小的方式  
    若自动调整大小的结果小于手动设定的大小，将应用手动设定的大小；否则应用自动设定的大小
    <span class="hidden">为啥不写个枚举</span>

    | 值 | 说明 |
    | - | - |
    | `#!javascript 'NONE'` | 不自动调整大小 |
    | `#!javascript 'X'` | 在水平方向上自动调整大小 |
    | `#!javascript 'Y'` | 在竖直方向上自动调整大小 |
    | `#!javascript 'XY'` | 在水平和竖直方向上自动调整大小 |

[visible](inherited): [](boolean) = `#!javascript true`
:   该节点是否可见

[pointerEventBehavior](inherited): [](PointerEventBehavior) = [](PointerEventBehavior).[ENABLE](enumMember)
:   该节点对鼠标指针事件的响应方式

[textContent](inherited): [](string)
:   输入框节点的文本内容，支持使用`#!javascript "\n"`换行

[textFontSize](inherited): [](number) = `#!javascript 12`
:   输入框节点的字体大小

[textColor](inherited): [](Vec3) = `#!javascript new Vec3([0, 0, 0])`
:   输入框节点的文本颜色

[textXAlignment](inherited): `#!javascript "Center"` | `#!javascript "Left"` | `#!javascript "Right"` = `#!javascript "Center"`
:   输入框节点的文本水平对齐方向

    | 值 | 说明 |
    | - | - |
    | `#!javascript "Center"` | 居中 |
    | `#!javascript "Left"` | 左侧对齐 |
    | `#!javascript "Right"` | 右侧对齐 |

[textYAlignment](inherited): `#!javascript "Center"` | `#!javascript "Top"` | `#!javascript "Bottom"` = `#!javascript "Center"`
:   输入框节点的文本竖直对齐方向

    | 值 | 说明 |
    | - | - |
    | `#!javascript "Center"` | 居中 |
    | `#!javascript "Top"` | 上侧对齐 |
    | `#!javascript "Bottom"` | 下侧对齐 |

[autoWordWrap](hiddenInherited): [](boolean) = `#!javascript false`
:   是否启用自动换行

[textLineHeight](hiddenInherited): [](number) = `#!javascript 1.2`
:   实际行高和字体高度之间的比值  
    $实际行高=字体高度\times$ [textLineHeight](property)

[placeholder](property): [](boolean) = `#!javascript "Type something here"`
:   输入框节点未输入任何东西时，显示的占位符

[placeholderColor](readonly): [](Vec3) = `#!javascript new Vec3([171, 171, 162])`
:   实际行高和字体高度之间的比值  
    $实际行高=字体高度\times$ [textLineHeight](property)

[placeholderOpacity](property): [](number) = `#!javascript 1`
:   占位符字体不透明度

    !!! note
        经2024/8/13测试，该属性疑似无效  
        属性可以正常更改，但不会有效果  
        使用编辑器修改的占位符字体不透明度可以正常生效

[isFocus](readonly): [](boolean)
:   该输入框节点是否聚集

## 方法
[clone](inheritedMethod)(): [](void)
:   克隆该节点

[focus](readonlyMethod)(): [](void)
:   使该输入框聚焦

[blur](readonlyMethod)(): [](string)
:   使该输入框失去聚焦

    | 返回值 | 类型 | 说明 |
    | - | - | - |
    | | [](string) | 输入框输入的内容 |

[create](staticMethod)(): [](UiInput)
:   创建一个输入框节点
