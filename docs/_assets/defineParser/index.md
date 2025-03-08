---
hide:
  - navigation
---

# 定义解释器使用说明

从 20xx/xx/xx 后开始，Box3 Docs使用新的代码解释器，代替原来基于链接的图标解释器  
一方面是为了使文档编写更加简便，另一方面是解决原基于链接的图标解释器引发的错误链接控制台刷屏问题  
原基于HTML元素的图标解释器保留

## 图标表

> 定义于`icons.json`

### 格式
```json
{
    "[iconName]": ["[icon-class]", "[color]", "[protected-color]", "[hidden-color]", "[hidden-protected-color]"]
}
```
创建一种图标

- `[iconName]`: 图标名称。若想直接创建图标元素，可以使用`#!html <iconName></iconName>`[^2]
- `[icon-class]`: 该图标的类名，决定了渲染的图标种类，例如`#!json "property parent-class"`。若为空，则没有图标，只有字体颜色
- `[color]`: 该图标的字体颜色。若空着，则不会设置
- `[protected-color]`: 该图标为只读时的字体颜色。若为空[^1]，继承`[color]`的值
- `[hidden-color]`: 该图标为隐藏API的字体颜色。若为空[^1]，将`[color]`的值黑白化（`r = g = b = (r + g + b) / 3`）后应用
- `[hidden-readonly-color]`: 该图标为只读隐藏API的字体颜色。若为空[^1]，将`[readonly-color]`的值黑白化（`r = g = b = (r + g + b) / 3`）后应用

---
```json
{
    "[iconNameA]": "[iconNameB]"
}
```
创建图表别名

- `[iconNameA]`: 图标名称。若想直接创建图标元素，可以使用`#!html <iconName></iconName>`[^2]
- `[iconNameB]`: 要继承的图标名称。该图标会继承`[iconNameB]`的图标和颜色

---
```json
{
    "[iconName].[type]": "[icon-name]"
}
```
为图标`[iconNameA]`创建`[type]`变种的图标`[icon-name]`

- `[iconName]`: 要创建变种的图标名称
- `[type]`: 变种名称
- `[icon-name]`: 该变种类名

对于以下变种图标，无需单独定义图标，只需在定义时声明类型就行

- `protected`
- `private`
- `private`
- `generic`
- `inherited`

注意：你自己定义的变种会和自动加变种冲突，你自己加的变种优先

此外还有`hidden`变种，没有自己的图标，但是有自己独特的颜色  
大部分情况下这些变种可以与其他变种同时使用（顺序没有影响），可以自己翻阅[图标参考](../icons.md)

---
```json
{
    "[iconNameB]>[iconNameA]": "[icon-class]",
    "[iconNameC]>[iconNameB]": "[icon-class]"
}
```
局部继承图标，只继承字体颜色不继承类  
这样可以定义图标`[iconNameA]`，其字体颜色继承于`[iconNameB]`，而图标使用`[icon-class]`  
允许套娃  
不允许和`.`语法同时使用（实现过于复杂）

### 使用
| 示例 | 说明 |
| - | - |
| `variable` | 一般的变量类型，使用`variable`图标 |
| `variable.protected` | 只读变量类型，使用`variable`图标的`protected`变种 |
| `class.generic` | 泛型类，使用`class`图标的`generic`变种 |
| `class.hidden` | 隐藏类，使用`class`图标的`hidden`变种 |
| `class.generic.hidden` / `class.hidden.generic` | 隐藏泛型类，使用`class`图标的`hidden`和`generic`变种 |

## 定义表

> 定义于`defines.json`

### 关键字

定义于`keywords`
```json
{
    "keywords": {
        "[keyword]": ["[url]", "[description]"]
    }
}
```
JS/TS保留关键字，自动读取`keyword`图标

- `[url]`: 可选[^1]。若填写，则会在点击时跳转`[url]`中的链接
- `[description]`: 可选[^1]。若填写，将鼠标移至上面时则会显示提示信息


### 定义
```json
{
    "defines": {
        "[type]": {
            "[API]": ["[iconName]", "[url]", "[description]"]
        }
    }
}
```
- `[type]`: API类别
- `[API]`: API名称
- `[iconName]`: 图标名称，应为定义于`icons.json`的名称，可以使用变种语法
- `[url]`: 可选[^1]。若填写，则会在点击时跳转`[url]`中的链接
- `[description]`: 可选[^1]。若填写，将鼠标移至上面时则会显示提示信息

### 映射
 
定义于`nameMap`，用于处理一些不同平台一些功能相同但名称不同的API  
若存在一些不存在的API，空着即可
```json
{
    "nameMap": {
        "[API_A]": ["[api1]", "[api2]"],
        "[API_B]": ["[api3]", "[api4]", "[api5]"],
        "[API_C]": ["[api6]", null, "[api7]"]
    }
}
```
其中，`[api1]`、`[api2]`、`[api3]`等都为定义的命名空间  
其中，`[API_A]`、`[API_B]`、`[API_C]`都为平台名称  
在解析图标的时候，会自动创建若干份不同的`#!html <blockquote>`

### 配置

定义于`config`，用于配置此定义表

- `platformList`: 储存所有平台种类的列表，决定了解释器将要在哪里寻找定义，其顺序与`nameMap`的值一一对应
- `platform`: 用于配置不同的平台
- - `[API]`: 平台名称
- - - `class`: 要给该平台的`#!html <blockquote>`添加的类
- - - `disabled`: 是否禁用该平台。也可通过`@`强制使用该平台
- - - `allowAPIs`: 该平台下，可以使用哪些API，应填写对应命名空间

## 使用

基于`#!html <blockquote>`元素进行识别  
在`markdown`中，就是`#!markdowm > xxx`语法  
若该元素包含`parse-code`类，则对该元素的`dataset.code`进行解析  
为防止解析失败，该元素默认应包含包含代码内容的文字节点，解析成功后删除

解析优先级 `nameMap` > `api`

---
以下内容为一些测试


<span class="old-only">图标A测试</span>+<span class="old-only">图标A-1测试</span>

<span class="old-only">图标A-2测试</span>

<span class="pro-only">图标B测试</span>

<blockquote class="old-only"><span class="old-only">图标A-3测试</span> 123456</blockquote>
<blockquote class="pro-only"><span class="pro-only">图标B-1测试</span></blockquote>
<blockquote class="pro-only new"><span class="pro-only">图标B-2测试</span></blockquote>


<docs-icon icon="variable" content="variable">缺省文本</docs-icon>  
<docs-icon icon="method" content="method">缺省文本</docs-icon>
<docs-icon icon="function" content="function">缺省文本</docs-icon>

<docs-icon icon="enum" content="enum">缺省文本</docs-icon>

> <docs-icon icon="method" content="destroy">destroy</docs-icon>(): <docs-icon icon="type" content="void">void</docs-icon>

> <docs-icon icon="method" content="destroy" no-icon>destroy</docs-icon>(): <docs-icon icon="type" content="void" no-icon>void</docs-icon>

<docs-icon icon="variable" variant="protected" content="protected variable">缺省文本</docs-icon>  
<docs-icon icon="variable" variant="hidden" content="hidden variable">缺省文本</docs-icon>  
<docs-icon content="no icon">缺省文本</docs-icon>  
<docs-icon icon="variable" content="no icon variable" no-icon>缺省文本</docs-icon>

<docs-icon icon="object" variant="protected">world</docs-icon>  
<docs-icon icon="object.protected">world</docs-icon>  
<docs-icon icon="class.protected generic">test</docs-icon>

<blockquote class="parse">resources: ResourceSystem</blockquote>

> !parse say: (message: string, options?: {
        duration?: number;
        hideFloat?: boolean;
    }) => void;

<div id="test"></div>


[^1]: 由于JSON不允许`#!javascript undefined`，所以只要是个空字符串就行
[^2]: 也许可以实现，其实现原理是元素替换