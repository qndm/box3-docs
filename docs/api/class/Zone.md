<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

:   [查阅官方文档](https://box3.yuque.com/org-wiki-box3-ev7rl4/guide/uvxcoaf8ywsh3t78)  
    [查阅官方文档（Arena）](https://box3.yuque.com/staff-khn556/wupvz3/puh5iyu2e8s1lar8)  
    [查阅社区文档（Arena）](https://www.yuque.com/box3lab/api/zqv1iks07wvzbs0m)

:   [](Box3Zone) / [](GameZone)用于检测实体进入或离开某个区域。 也可以用来设置环境参数，如雾、雨、天、雪、风、重力等定义区域内的环境参数

!!! note "未证实"

    似乎现在的区域就是原来的触发器改名而来，但未得到证实  
    原因是[](Box3Zone) / [](GameZone)的注释为：
    ```
    Triggers can be used to detect when an object enters some zone or leaves.
    ```

### 属性
[bounds](property): [](Box3Bounds3) / [](GameBounds3)
:   该区域的立方体空间区域

[selector](property): [](Box3SelectorString) / [](GameSelectorString)
:   区域使用的选择器，该区域的效果/事件只能作用在满足该选择器的实体上

[massScale](property): [](number)
:   实体在该区域内质量[mass](property)的缩放

[force](property): [](Box3Vector3) / [](GameVector3):
:   实体在该区域内每tick都会受到的作用力

[fogEnabled](property): [](boolean)
:   是否在该区域内启用单独的雾

[fogColor](property): [](Box3RGBColor) / [](GameRGBColor)
:   该区域内雾的颜色

[fogStartDistance](property): [](number)
:   该区域内雾的起始距离

[fogHeightOffset](property): [](number)
:   该区域内雾高度

[fogHeightFalloff](property): [](number)
:   该区域内的雾衰减速率

[fogDensity](property): [](number)
:   该区域内的均匀雾量

[fogMax](property): [](number)
:   该区域内的最大雾量

[snowEnabled](property): [](boolean)
:   是否在该区域内启用单独的雪

[snowDensity](property): [](number):  
:   该区域的雪密度

[snowSizeLo](property): [](number)
:   该区域雪花最小尺寸

[snowSizeHi](property): [](number)
:   该区域雪花最大尺寸

[snowFallSpeed](property): [](number)
:   该区域雪花下落速率

[snowSpinSpeed](property): [](number)
:   该区域雪花自旋速度

[snowColor](property): [](Box3RGBAColor) / [](GameRGBAColor)
:   该区域雪花颜色
[snowTexture](property): [](string)
:   该区域雪花纹理，格式为`#!javascript 'snow/*.part'`

[rainEnabled](property): [](boolean)
:   是否在该区域内启用单独的雨

[rainDensity](property): [](number)
:   该区域的雨密度

[rainDirection](property): [](Box3Vector3) / [](GameVector3)
:   该区域雨的方向

[rainSpeed](property): [](number)
:   该区域雨点下落速率

[rainSizeLo](property): [](number)
:   该区域雨点最小尺寸

[rainSizeHi](property): [](number)
:   该区域雨点最大尺寸

[rainInterference](property): [](number)
:   该区域雨扰流幅度

[rainColor](property): [](Box3RGBAColor) / [](GameRGBAColor)
:   该区域雨点颜色

[skyEnabled](property): [](boolean)
:   是否在该区域内启用单独的天空光照

[skyMode](property): `#!javascript 'natural'` | `#!javascript 'manual'`
:   该区域内光照模式

    === "`#!javascript 'natural'` 自然光照"

        [skySunPhase](property): [](number)
        :   该区域内太阳运行阶段，按照`#!javascript timeOfDay = (sunPhase + sunFrequency * tick) % 1`公式计算

        [skySunFrequency](property): [](number)
        ：  该区域内太阳在天空中移动的频率。 数值越高，太阳运动越快  

        [skyLunarPhase](property): [](number) 该区域内月亮的相位，范围$[0, 1]$

    === "`#!javascript 'manual'` 手动光照"

        [skySunDirection](property): [](Box3Vector3) / [](GameVector3)
        :   该区域内太阳的方向

        [skySunLight](property): [](Box3RGBColor) / [](GameRGBColor)
        :   该区域内太阳的光照颜色

        [skyLeftLight](property): [](Box3RGBColor) / [](GameRGBColor)  
        [skyRightLight](property): [](Box3RGBColor) / [](GameRGBColor)  
        [skyBottomLight](property): [](Box3RGBColor) / [](GameRGBColor)  
        [skyTopLight](property): [](Box3RGBColor) / [](GameRGBColor)  
        [skyFrontLight](property): [](Box3RGBColor) / [](GameRGBColor)  
        [skyBackLight](property): [](Box3RGBColor) / [](GameRGBColor)
        :   该区域内太阳分别在`-x`、`+x`、`-y`、`+y`、`-z`、`+z`方向的光照颜色  

### 方法
[entities](method)(): [](Box3Entity)[] / [](GameEntity)[]
:   获取该区域内所有的实体

[remove](method)(): [](void)
:   移除该区域

#### 事件
[onEnter](method): [](Box3EventChannel) / [](GameEventChannel)<[](Box3TriggerEvent) / [](GameTriggerEvent)>  
[nextEnter](method): [](Box3EventFuture) / [](GameEventFuture)<[](Box3TriggerEvent) / [](GameTriggerEvent)>
:   当实体进入（或未来）触发的事件

[onLeave](method): [](Box3EventChannel) / [](GameEventChannel)<[](Box3TriggerEvent) / [](GameTriggerEvent)>  
[nextLeave](method): [](Box3EventFuture) / [](GameEventFuture)<[](Box3TriggerEvent) / [](GameTriggerEvent)>
:   当实体离开（或未来）触发的事件