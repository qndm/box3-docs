<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

:   [查阅官方文档](https://box3.yuque.com/org-wiki-box3-ev7rl4/guide/mayzr5rpokb4zhgt)  
    [查阅官方文档（Arena）](https://box3.yuque.com/staff-khn556/wupvz3/zi57zw8to9oze8u3)  
    [查阅社区文档（Arena）](https://www.yuque.com/box3lab/api/ur5fw9xs38ztuvck#Oby5f)

射线检测配置。

## 属性
[maxDistance](property): [](number)
:   若填写，射线有最大穿越距离

[ignoreFluid](property): [](boolean)
:   若为`#!javascript true`，射线将忽略所有液体方块

[ignoreVoxel](property): [](boolean)
:   若为`#!javascript true`，射线将忽略所有方块

[ignoreEntities](property): [](boolean)
:   若为`#!javascript true`，射线将忽略所有实体

[ignoreSelector](hiddenProperty): [](Box3SelectorString) / [](GameSelectorString)
:   若填写，射线将忽略满足该实体选择器的实体
