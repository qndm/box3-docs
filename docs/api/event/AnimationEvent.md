<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

:   [查阅官方文档](https://box3.yuque.com/org-wiki-box3-ev7rl4/guide/mabkcp1ok692vsqb)  
    [查阅官方文档（Arena）](https://box3.yuque.com/staff-khn556/wupvz3/oeb04fye24vyeicg)  
    [查阅社区文档（Arena）](https://www.yuque.com/box3lab/api/crd9b8smvgh8s0ek#anWjP)

[](Box3AnimationEvent) / [](GameAnimationEvent)<[KeyframeType](typeArg), [TargetType](typeArg)>
:   动画事件

| 类型 | 说明 |
| - | - |
| [KeyframeType](typeArg) | 关键帧类型 |
| [TargetType](typeArg) | 目标类型 |


## 事件参数
[tick](property): [](number)
:   事件发生的时间

[target](property): [TargetType]()
:   动画对象的目标

[animation](property): [](Box3Animation) / [](GameAnimation)<[KeyframeType](typeArg), [TargetType](typeArg)>
:   动画对象

[cancelled](property): [](number)
:   动画是否被人为取消  
    若动画是正常播放完成结束，值为`#!javascript false`，否则为`#!javascript true`
