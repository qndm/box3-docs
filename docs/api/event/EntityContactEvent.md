<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

:   [查阅官方文档](https://box3.yuque.com/org-wiki-box3-ev7rl4/guide/iw69r12kywz8uxwf)  
    [查阅官方文档（Arena）](https://box3.yuque.com/staff-khn556/wupvz3/cx43ln010fi1npng)  
    [查阅社区文档（Arena）](https://www.yuque.com/box3lab/api/hyvt8m1n88rdxbix#jneYE)

:   实体碰撞事件  
    当实体之间发生碰撞时触发

!!! info "力的作用是相互的"

    当一个实体碰撞事件触发，必定有一个[tick](property)相同，[axis](property)和[force](property)的向相反但大小相同，[entity](property)和[other](property)互换的实体碰撞事件触发

## 事件参数
[tick](property): [](number)
:   事件发生的时间

[entity](property): [](Box3Entity) / [](GameEntity)
:   [other](property)碰到的实体

[other](property): [](Box3Entity) / [](GameEntity)
:   [entity](property)碰到的实体

[axis](property): [](Box3Vector3) / [](GameVector3)
:   碰撞的分离轴，也就是碰撞后物体弹飞的 **方向**

[force](property): [](Box3Vector3) / [](GameVector3)
:   碰撞力大小
