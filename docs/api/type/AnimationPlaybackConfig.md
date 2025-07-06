动画播放配置参数

## 属性
- <docs-icon icon="property">startTick</docs-icon>: [](number) 动画开始的tick
- <docs-icon icon="property">delay</docs-icon>: [](number) 动画播放延迟，单位为$ms$
- <docs-icon icon="property">endDelay</docs-icon>: [](number) 动画结束延迟，单位为$ms$。若设定，动画在播放结束后等待<docs-icon icon="property">endDelay</docs-icon>$ms$才会结束动画（即使没有关键帧）
- <docs-icon icon="property">duration</docs-icon>: [](number) 动画播放时长，单位为tick
- <docs-icon icon="property">direction</docs-icon>: <docs-def>Box3AnimationDirection</docs-def> / <docs-def>GameAnimationDirection</docs-def> 动画播放方向
- <docs-icon icon="property">iterations</docs-icon>: [](number) 播放次数
- <docs-icon icon="property">iterationStart</docs-icon>: [](number) 动画移除的时间段占总体时间的比率，范围$[0, 1]$。若设定，动画会移除前<docs-icon icon="property">iterationStart</docs-icon>的内容后播放  
若动画关键帧所在时间段的动画被移除，关键帧不会生效  
举个例子，有一个$1s$的动画（一个`*`代表$0.1s$），$0.2s$一帧（一个`+`代表一帧），若不设定此值，动画会从`|`处播放[^1]
```
|* * * * * * * * * *
   +   +   +   +   +
```
当设定为`#!javascript 0.5`时，会变成这样，`|`之前的内容会被直接切掉，此时动画播放时长只有$0.5s$，只会播放后3帧[^2]
```
 * * * * *|* * * * *
   +   +  |+   +   +
```
若该动画有$2s$，而<docs-icon icon="property">iterationStart</docs-icon> = `#!javascript 0.5`，那么会变成这样：
```
 * * * * * * * * * *|* * * * * * * * * *
   +   +   +   +   +|  +   +   +   +   +
```
若设定的值大于$1$，动画不会播放

[^1]: 仅供参考，不代表实际动画关键帧情况，之后同理
[^2]: 实际测试，若在第3帧改变实体颜色，<docs-icon icon="property">iterationStart</docs-icon>在$[0, 0.6875)$范围内会第3帧生效（变色），$[0.6875, 0.74)$范围内实体会改变颜色但瞬间变回来，$[0.74, 1]$范围内完全不会变色。测试代码：

    ```javascript
    // 仅Arena编辑器
    world.onPlayerJoin(async ({ entity }) => {
        entity.enableDamage = true;
        entity.mesh = 'mesh/MC圆石.vb';
        entity.animate([
            { position: new GameVector3(0, 0, 0) },
            { position: new GameVector3(0, 32, 0) },
            { position: new GameVector3(0, 64, 0), meshColor: [1, 0, 0, 1] },
            { position: new GameVector3(0, 96, 0) },
            { position: new GameVector3(0, 128, 0) }
        ], {
            duration: 16,
            direction: GameAnimationDirection.NORMAL,
            iterations: 1,
            iterationStart: 0.74
        });
    });
    ```