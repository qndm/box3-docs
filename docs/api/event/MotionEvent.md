---
tags:
  - 事件
  - 动作事件
  - 动作
  - 服务端
  - Arena编辑器
---

<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

!!! info "Arena独有"
    该API仅在Arena编辑器使用

:   [查阅官方文档（Arena）](https://box3.yuque.com/staff-khn556/wupvz3/eplk4m6wyt4gymk6)  
    [查阅社区文档（Arena）](https://www.yuque.com/box3lab/api/omfmpkmr5vh7ckaw#anWjP)

[](GameMotionEvent)<[TargetType](typeArg)>
:   动作播放完成时，触发的事件

| 类型 | 说明 |
| - | - |
| [TargetType](typeArg) | 目标类型，即播放动作的对象的类型 |

## 事件参数
[tick](hiddenProperty): [](number)
:   事件发生的时间

[target](hiddenReadonly): [TargetType](typeArg)
:   动作目标对象<span class="hidden">为什么只有这里标只读，别的地方不标</span>

[motionHandler](hiddenProperty): [](GameMotionHandler)<[TargetType](typeArg)>
:   动作处理器

[cancelled](property): [](boolean)
:   动作是否被人为取消  
    若动作是正常播放完成结束，值为`#!javascript false`，否则为`#!javascript true`