<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

:   方块碰撞数据

## 属性
[x](property): [](number)
:   方块x坐标

[y](property): [](number)
:   方块y坐标

[z](property): [](number)
:   方块z坐标

[voxel](property): [](number)
:   碰到的液体方块id

[axis](property): [](Box3Vector3) / [](GameVector3)
:   碰撞的分离轴，也就是碰撞后物体弹飞的 **方向**

[force](property): [](Box3Vector3) / [](GameVector3)
:   碰撞力大小
