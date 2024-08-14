<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

!!! info "Arena独有"
    该API仅在Arena编辑器使用

:   [查阅官方文档（Arena）](https://box3.yuque.com/staff-khn556/wupvz3/dikrnsd8s0c3zuoc)  
    [查阅社区文档（Arena）](https://www.yuque.com/box3lab/api/mddbf91xi6753mxg)

[](GameMotionController)<[TargetType](typeArg)>
:   [](GameMotionController)动作控制器，可对[](GameEntity)实体带有的动作进行操作，包括加载特定动作，暂停动作，重播动作和设置默认动作等  
    [](GameMotionController)只允许实体一次播放一个动作，若在播放动作时播放另一个动作，原动作会被停止并覆盖  
    动作[](GameMotionController)和动画[](Box3Animation) / [](GameAnimation)有以下不同：

    - 具体动画是写在代码里的，而具体动作是包含在模型文件（`.vb`文件）里的，代码只能调用
    - 动画可以实现实体位置、旋转、颜色（包含透明度）、缩放等的变换，而动作只能实现位置、旋转、缩放、透明度的变换
    - 动画可以用于世界、实体、玩家，而动作只能用于实体
    - ……

| 类型 | 说明 |
| - | - |
| [TargetType](typeArg) | 目标类型，即播放动作的对象的类型 |

## 方法
[loadByName](method)([config](arg): [](string) | [](GameMotionConfig)[] | [](GameMotionClipConfig)): [](GameMotionHandler)<[TargetType](typeArg)>
:   加载实体当前[mesh](property)的动作

    !!! info "提示"

        若在加载动作后更改了实体的[mesh](property)，那么这个动作会无效，需要重新加载

[pause](method)(): [](void)
:   暂停该实体的动作

[resume](method)(): [](void)
:   恢复该实体的动作

[setDefaultMotionByName](method)([motionName](arg)?: [](string)): [](void)
:   设置该实体的默认动作

    !!! note "默认动作"

        默认动作，即在实体没有播放任何动作时，播放的动作；若没有默认动作，该实体将在无动作时保持静态

    | 参数 | 类型 | 说明 |
    | - | - | - |
    | [motionName](arg)? | [](string) | 选填，实体的默认动作；若不填，该实体无默认动作 |
