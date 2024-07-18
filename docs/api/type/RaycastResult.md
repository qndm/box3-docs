# <def>Box3RaycastResult</def> / <def>GameRaycastResult</def>
射线检测(raycast)的结果，包含射线和所击中目标的信息。

## 成员
<property>direction</property> : <def>Box3Vector3</def> / <def>GameVector3</def>
: 射线的方向

<property>distance</property> : <def>number</def>
: 射线穿越的距离

<property>hit</property> : <def>boolean</def>
: 如果为真，则射线击中目标

<property>hitEntity</property> : <def>Box3Entity</def> / <def>GameEntity</def> | <def>null</def>
: 射线所击中的实体

<property>hitPosition</property> : <def>Box3Vector3</def> / <def>GameVector3</def>
: 射线击中的位置

<property>hitVoxel</property> : <def>number</def>
: 射线所击中的方块 id (如未击中方块，则为 0)

<property>normal</property> : <def>Box3Vector3</def> / <def>GameVector3</def>
: 射线所击中平面的法向量

<property>origin</property> : <def>Box3Vector3</def> / <def>GameVector3</def>
: 射线的起点

<property>voxelIndex</property> : <def>Box3Vector3</def> / <def>GameVector3</def>
: 如果射线击中的是方块，则返回所击中方块的网格坐标。
