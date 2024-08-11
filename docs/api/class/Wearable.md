<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

:   玩家穿戴部件

## 属性
[player](hiddenProperty): [](Box3Entity) / [](GameEntity)
:   穿戴该穿戴配件的玩家

[bodyPart](property): [](Box3BodyPart) / [](GameBodyPart)
:   该穿戴配件的身体部位

[mesh](property): [](string)
:   该穿戴配件的模型文件

[color](property): [](Box3RGBColor) / [](GameRGBColor)
:   该穿戴配件的颜色

    !!! warning "注意是RGB颜色"

[emissive](property): [](number)
:   该穿戴配件的发光度

[metalness](property): [](number)
:   该穿戴配件的金属感

[shininess](property): [](number)
:   该穿戴配件的反光度

[orientation](property): [](Box3Quaternion) / [](GameQuaternion)
:   该穿戴配件的方向

[scale](property): [](Box3Vector3) / [](GameVector3)
:   该穿戴配件的缩放比例

## 方法
[remove](method)() => [](void)
:   移除该穿戴部件