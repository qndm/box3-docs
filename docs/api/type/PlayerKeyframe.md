<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

:   [查阅官方文档](https://box3.yuque.com/org-wiki-box3-ev7rl4/guide/cnmbmhh1sglxhrlk)  
    [查阅官方文档（Arena）](https://box3.yuque.com/staff-khn556/wupvz3/hgcguag2m8l09v1g)  
    [查阅社区文档（Arena）](https://www.yuque.com/box3lab/api/eh4fbowybvrsh8di#jneYE)

:   玩家动画关键帧
## 属性
- [duration](property): [](number) 该帧的持续时长，这不是一个绝对的值，实际值还要计算其他帧的持续时间  
该值越大，能在整个动画中占据的时间就越大
- [easeIn](property): [](Box3Easing) / [](GameEasing) 该帧缓入效果
- [easeOut](property): [](Box3Easing) / [](GameEasing) 该帧缓出效果
- [scale](property): [](number) 玩家缩放尺寸
- [color](property): [](Box3RGBColor) / [](GameRGBColor) 玩家颜色
- [metalness](property): [](number) 玩家的金属感
- [emissive](property): [](number) 玩家的发光度
- [shininess](property): [](number) 玩家的反光度
- [invisible](property): [](boolean) 玩家模型是否隐藏
- [showName](property): [](boolean) 是否显示玩家名称
- [showIndicator](hiddenProperty): [](boolean) 是否显示玩家标记
- [colorLUT](property): [](string) 玩家的画面滤镜，格式为`#!javascript lut/*.lut`
- [cameraMode](property): [](Box3CameraMode) / [](GameCameraMode) 玩家摄像机模式
- [cameraEntity](property): [](Box3Entity) / [](GameEntity) | [](null) 玩家第一人称视角（`#!javascript 'fps'`）、第三人称跟随视角（`#!javascript 'follow'`）或相对视角（`#!javascript 'relative'`）下，玩家视角所跟随的实体
- [cameraTarget](property): [](Box3Vector3) / [](GameVector3) 玩家固定视角（`#!javascript 'fixed'`）或相对视角（`#!javascript 'relative'`）下，镜头所朝向的目标点
- [cameraUp](property): [](Box3Vector3) / [](GameVector3) 玩家固定视角（`#!javascript 'fixed'`）或相对视角（`#!javascript 'relative'`）下，镜头镜头向上的矢量
- [cameraPosition](property): [](Box3Vector3) / [](GameVector3) 玩家固定视角（`#!javascript 'fixed'`）或相对视角（`#!javascript 'relative'`）下，镜头的位置
- [cameraFreezedAxis](hiddenProperty): [](Box3CameraFreezedAxis) / [](GameCameraFreezedAxis) 玩家在相对视角（`#!javascript 'relative'`）下，冻结的摄像机轴
- [cameraFovY](hiddenProperty): [](number) 玩家垂直方向的视场角，在任何相机视角模式都适用
- [cameraDistance](hiddenProperty): [](number) 第三人称跟随视角（`#!javascript 'follow'`）下，玩家摄像机到玩家实体的距离
