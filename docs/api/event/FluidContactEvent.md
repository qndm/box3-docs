<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

:   [查阅官方文档](https://box3.yuque.com/org-wiki-box3-ev7rl4/guide/sufe7iwx33p9cs0k)  
    [查阅官方文档（Arena）](https://box3.yuque.com/staff-khn556/wupvz3/yqghak2c6vyayb10)  
    [查阅社区文档（Arena）](https://www.yuque.com/box3lab/api/hyvt8m1n88rdxbix#Tyy40)

:   液体碰撞事件  
    当实体浸入/离开液体时触发

## 事件参数
[tick](property): [](number)
:   事件发生的时间

[entity](property): [](Box3Entity) / [](GameEntity)
:   和液体碰撞的玩家

[voxel](property): [](number)
:   液体方块id