<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

:   [查阅官方文档](https://box3.yuque.com/org-wiki-box3-ev7rl4/guide/plxfgii5o9n1tpxz)  
    [查阅官方文档（Arena）](https://box3.yuque.com/staff-khn556/wupvz3/ritpgy64d053qg64)  
    [查阅社区文档（Arena）](https://www.yuque.com/box3lab/api/crd9b8smvgh8s0ek)

:   [](Box3Animation) / [](GameAnimation)是对世界、实体和玩家添加动画的类  
    动画将在本地运行，获得更好的性能，播放更流畅、平滑

[](Box3Animation) / [](GameAnimation)<[KeyframeType](typeArg), [TargetType](typeArg)>

| 类型 | 说明 |
| - | - |
| [KeyframeType](typeArg) | 关键帧类型 |
| [TargetType](typeArg) | 目标类型 |

## 属性
[target](readonly): [TargetType](typeArg)
:   播放动画的目标

[currentTime](property): [](number)
:   当前动画播放的帧数  
    即当前动画正在播放第几帧

[startTime](property): [](number)
:   动画开始的tick

[playState](readonly): [](Box3AnimationPlaybackState) / [](GameAnimationPlaybackState)
:   动画播放状态

[playbackRate](property): [](number) = `#!javascript 1`
:   动画播放速率

## 方法
[keyframes](hiddenMethod)() => [](Partial)<[KeyframeType](typeArg)>[]
:   获取该动画对象的所有关键帧

[play](method)([playback](arg)?: [](Partial)<[](Box3AnimationPlaybackConfig) / [](GameAnimationPlaybackConfig)>) => [](void)
:   重新播放该动画  
    若动画已经在播放中，则停止原来的动画并重新播放

    !!! warning "警告"

        [playback](arg)参数并不会套用原动画的[playback](arg)

[cancel](method)() => [](void)
:   取消播放该动画

[then](method)<[T](typeArg)>([resolve](callbackArg): ([event](arg): [](Box3AnimationEvent) / [](GameAnimationEvent)<[KeyframeType](typeArg), [TargetType](typeArg)>) => [T](typeArg), [reject](callbackArg)?: ([error](arg): [](any)) => [T](typeArg)) => [](Promise)<[T](typeArg)>
:   类似于[](Promise).[then](method)方法，使用[](Promise)来处理动画播放完的操作

    !!! tip "提示和技巧"

        你可以使用`#!javascript await`，示例如下

        ```javascript
        (async () => {
            await world.animate([
                { fogHeightOffset: 0, duration: 1 },
                { fogHeightOffset: 13, duration: 1 }
            ], {
                duration: 16,
                direction: "normal",
                iterations: 1
            });
            console.log('完成')
        })();
        ```

### 事件
[onReady](method): ([](Box3EventChannel) / [](GameEventChannel))<([](Box3AnimationEvent) / [](GameAnimationEvent))<[KeyframeType](typeArg), [TargetType](typeArg)>>
[nextReady](method): ([](Box3EventFuture) / [](GameEventFuture))<([](Box3AnimationEvent) / [](GameAnimationEvent))<[KeyframeType](typeArg), [TargetType](typeArg)>>
:   当动画开始播放（或未来），触发的事件

[onFinish](method): ([](Box3EventChannel) / [](GameEventChannel))<([](Box3AnimationEvent) / [](GameAnimationEvent))<[KeyframeType](typeArg), [TargetType](typeArg)>>
[nextFinish](method): ([](Box3EventFuture) / [](GameEventFuture))<([](Box3AnimationEvent) / [](GameAnimationEvent))<[KeyframeType](typeArg), [TargetType](typeArg)>>
:   当动画结束播放（或未来），触发的事件