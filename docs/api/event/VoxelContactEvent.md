---
tags:
  - 事件
  - 碰撞事件
  - 物理
  - 世界
  - 玩家
  - 方块
  - 服务端
  - 旧版编辑器
  - Arena编辑器
---

<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

:   [查阅官方文档](https://box3.yuque.com/org-wiki-box3-ev7rl4/guide/fi9tw0yyivtzwbaz)  
    [查阅官方文档（Arena）](https://box3.yuque.com/staff-khn556/wupvz3/yq8us26l3irc2m0w)  
    [查阅社区文档（Arena）](https://www.yuque.com/box3lab/api/hyvt8m1n88rdxbix#tHzE5)

:   方块碰撞事件  
    当实体碰到固体方块时触发

## 事件参数
[tick](property): [](number)
:   事件发生的时间

[entity](property): [](Box3Entity) / [](GameEntity)
:   触发事件的实体

[x](property): [](number)
:   方块的x坐标

[y](property): [](number)
:   方块的y坐标

[z](property): [](number)
:   方块的z坐标

[voxel](property): [](number)
:   碰到的方块id

[axis](property): [](Box3Vector3) / [](GameVector3)
:   碰撞的分离轴，也就是碰撞后物体弹飞的 **方向**

[force](property): [](Box3Vector3) / [](GameVector3)
:   碰撞力大小
