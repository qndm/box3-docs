# API 参考

!!! info "这是服务端API"
    这些API仅在服务端脚本使用  
    不过下面的几个提示都是通用的

此处是关于代码中各种内容的详细说明，需要一定的基础知识。查阅前建议先掌握 [Javascript 基础教程](../learn/js/index.md)，并学习[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference)等更高级的Javascript教程

!!! warning "API 参考文档并不完整"

    API文档内容极其复杂繁多，完成这些整理工作需要很长时间，因此你可能会遇到 404（找不到页面） 错误。  
    目前建议以[官方文档](https://box3.yuque.com/org-wiki-box3-ev7rl4/guide/fmtni9cqqhhgcl5r)或[官方文档（Arena）](https://box3.yuque.com/staff-khn556/wupvz3)为主，或者[加入我们](../about.md)！

!!! warning "关于隐藏 API"

    本文档中收集了未知或隐藏 API，尚未被官方公布，具体含义可能与本文档可能存在偏差，以<hiddenProperty></hiddenProperty><hiddenArg></hiddenArg><hiddenMethod></hiddenMethod><hiddenStaticMethod></hiddenStaticMethod><hiddenEnum></hiddenEnum><hiddenEnumMember></hiddenEnumMember>等灰色标识

!!! info "关于只读"

    本文档中只读属性会使用右下角带锁的图标表示，如<readonly></readonly>  
    同时只读属性/常量的颜色是<span style="background-color: #448aff" class="coloredWord">#448AFF</span>，一般属性/变量的颜色是<span style="background-color: #00b0ff" class="coloredWord">#00B0FF</span>  
    部分只读属性是隐藏API，会使用和隐藏属性一样的图标<hiddenReadonly></hiddenReadonly>，要根据字体颜色判断

???+ tip "快捷复制"

    文档内部分内容可以右键（或者触屏长按）快速复制其内容，例如<icon name='signature'>这个</icon>和<a href="javascript:alert$.next('左键点这个是没用哒，要右键')"><icon name='signature'>这个</icon></a>，其图标和字体颜色不用管  
    你可以拿左边的目录试试，不过注意不要左键，左键会跳转页面

???+ tip "图标链接"

    文档内部分图标是链接，表现为鼠标移到上面会显示一条蓝色下划线，<a href="javascript:alert$.next('我是一个链接')"><icon name='signature'>就像这个</icon></a>  
    你可以点击跳转到对应页面  
    如果是文档内页面，则会直接在当前标签页打开；如果是外部链接，则会在新标签页打开

??? question "如何读定义声明（1）"

    在这篇文档里，所有的参数和返回值的表达全部使用`typescript`代码，对不认识`typescript`的人来说难以理解  
    不过，这篇文档的`typescript`代码还是非常容易理解的  
    我们以[<method>set</method>](#set)函数为例：  
    : set(x: <def>number</def>, y: <def>number</def>, z: <def>number</def>): <def>Box3Vector3</def>

    其中，括号前面的是函数名，括号里面的内容是参数（英文逗号分隔），括号后面的是返回类型  
    例如，“set”是函数名，“x: number”是参数，Box3Vector3是返回类型  
    在参数中，“:”前面是参数名，后面是类型  
    例如：  
    : x: <def>number</def>

    其中“x”是参数，“number”是类型  
    回到开始，`set`函数的参数和返回值就是：  
    输入：

    | 参数名 | 类型 |
    | :- | :- |
    | x | <def>number</def> |
    | y | <def>number</def> |
    | z | <def>number</def> |

    输出：
    <def>Box3Vector3</def>类型

??? question "如何读定义声明（2）"

    这是关于该文档中方法定义出现默认值的情况，以[](Box3Entity).[interactRadius](property) / [](GameEntity).[interactRadius](property)为例：  
    [interactRadius](property): [](number) = `#!javascript 16`  
    其中，[interactRadius](property)的类型为[](number)，默认值为`#!javascript 16`

    ---

    很多地方并没有标默认值，有时候是因为此处默认值无意义（地图运行会立刻修改/不同环境默认值不一样/无默认值），有时候是因为文档编写工作繁忙，不过无需在意，一般不需理会这些默认值

??? question "如何读定义声明（3）"

    这是关于该文档中旧版API和新版API在一起声明的情况  
    分为两种，一种是类似于[](Box3Vector3) / [](GameVector3)页面的，另一种是类似于[](world)页面的  

    - 第一种  
    [Box3Vector3](constructor) ([x](arg): <def>number</def>, [y](arg): <def>number</def>, [z](arg): <def>number</def>): <def>Box3Vector3</def>  
    [GameVector3](constructor) ([x](arg): <def>number</def>, [y](arg): <def>number</def>, [z](arg): <def>number</def>): <def>GameVector3</def>  
    两种编辑器分两行分开定义，第一行为旧版编辑器，第二行为Arena 编辑器  
    有时只有一行，那是因为两种编辑器定义完全一样，故合并成一行  
    一般这种在Box3 通用属性中出现
    - 第二种
    [fogColor](property) : [](Box3RGBColor) / [](GameRGBColor)  
    两种编辑器的不同定义用“`/`”分开，“`/`”之前是旧版编辑器定义，之后是新版编辑器定义  
    “`/`”两边应看作一个整体

??? question "选填参数"

    要是参数/属性后面带了个问号`?`，代表该参数/属性选填

??? question "如何看参数表格（1）"

    下面以([](Box3World) / [](GameWorld)).[teleport](method)为例
    
    | 参数 | 类型 | 说明 |
    | :- | :- | :- |
    | [mapId](arg) | [](string) | 必填，目标频道id |
    | [players](arg) | [](GameEntity)[] | 必填，需要传送的玩家 |

    该方法有[mapId](arg)和[players](arg)两个参数，[mapId](arg)的类型为[](string)，[players](arg)的类型为[](GameEntity)[]

??? question "如何看参数表格（2）"

    下面以([](Box3Player) / [](GamePlayer)).[sound](method)为例
    
    | 参数 | | 类型 | 说明 |
    | - | - | - | - |
    | [spec](arg) | | [](string) | 声音路径 |
    | [spec](arg) | | | 声音播放参数 |
    | | [sample](property) | [](string) | 声音路径 |
    | | [gain](property) | [](number) = `#!javascript 1` | 音量增益。正常为 1，数值越大，声音越大 |
    | | [pitch](property) | [](number) = `#!javascript 1` | 音高增益。正常为 1，大于 1，音调越高 |

    该方法有[spec](arg) **一** 个参数，类型可以是[](string)，也可以是一个[](object)（此处类似于接口，但没有明确定义，一般表格里不写）  
    若填入的类型为[](string)，则表示声音路径  
    若填入的类型为[](object)，则其中的[sample](property)参数表示声音路径；[gain](property)参数表示音量增益，默认值为`#!javascript 1`；[pitch](property)参数表示音高增益，默认值为`#!javascript 1`；
