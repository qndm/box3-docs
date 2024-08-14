<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

!!! info "Arena独有"
    该API仅在Arena编辑器使用

:   [查阅官方文档（Arena）](https://box3.yuque.com/staff-khn556/wupvz3/czupdql58ligote4)  
    [查阅社区文档（Arena）](https://www.yuque.com/box3lab/api/omfmpkmr5vh7ckaw)

[](GameMotionHandler)<[TargetType](typeArg)>
:   [](GameMotionHandler)动作处理器，可对加载的动作进行操作，包括暂停动作和重播动作

| 类型 | 说明 |
| - | - |
| [TargetType](typeArg) | 目标类型，即播放动作的对象的类型 |

## 属性
[target](readonly): [TargetType](typeArg)
:   动作的目标，即播放动作的对象

## 方法
[play](method)(): [](void)
:   播放该动作，会覆盖目标正在播放的动作

[cancel](method)(): [](void)
:   停止播放该动作

### 事件
[onFinish](method): [](GameEventChannel)<[](GameMotionEvent)<[TargetType](typeArg)>>  
[nextFinish](method): [](GameEventFuture)<[](GameMotionEvent)<[TargetType](typeArg)>>
:   动作播放完成（或未来）触发