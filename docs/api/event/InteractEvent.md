<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

:   [查阅官方文档](https://box3.yuque.com/org-wiki-box3-ev7rl4/guide/wdtyqakpfmdilymn)  
    [查阅官方文档（Arena）](https://box3.yuque.com/staff-khn556/wupvz3/go3it5p7im5tonnk)  
    [查阅社区文档（Arena）](https://www.yuque.com/box3lab/api/qkt62q3lzcc0klcb#jneYE)

:   玩家和实体互动时，触发的事件

## 事件参数
[tick](property): [](number)
:   事件发生的时间

[entity](property): [](Box3PlayerEntity) / [](GamePlayerEntity)
:   和实体互动的玩家

[targetEntity](property): [](Box3Entity) / [](GameEntity)
:   和玩家互动的实体