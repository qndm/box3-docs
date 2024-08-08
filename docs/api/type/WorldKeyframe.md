<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

:   [查阅官方文档](https://box3.yuque.com/org-wiki-box3-ev7rl4/guide/rk8goyvpigef7epp)  
    [查阅官方文档（Arena）](https://box3.yuque.com/staff-khn556/wupvz3/gz8i9v7feiuz8cm6)  
    [查阅社区文档（Arena）](https://www.yuque.com/box3lab/api/uclt6lp7syrd5v00#jneYE)

:   世界动画关键帧

## 属性
- [duration](property): [](number) 该帧的持续时长，这不是一个绝对的值，实际值还要计算其他帧的持续时间  
该值越大，能在整个动画中占据的时间就越大
- [easeIn](property): [](Box3Easing) / [](GameEasing) 该帧缓入效果
- [easeOut](property): [](Box3Easing) / [](GameEasing) 该帧缓出效果
- [fogColor](property): [](Box3RGBColor) / [](GameRGBColor) 雾颜色
- [fogStartDistance](property): [](number) 雾起始距离
- [fogHeightOffset](property): [](number) 雾起始高度
- [fogHeightFalloff](property): [](number) 雾高度衰减率
- [fogUniformDensity](property): [](number) 均匀雾量，范围$[0, 1]$（如果>`#!javascript 0`，就不能看到天幕）
- [maxFog](property): [](number) 最大雾量，范围$[0, 1]$
- [lightMode](property): `#!javascript 'natural'` | `#!javascript 'manual'` 世界光照模式，`#!javascript 'natural'`为自然模式，昼夜循环按照一定的规律进行。`#!javascript 'manual'`为手动模式，需要手动设置各个方向上的光。
=== "`#!javascript 'natural'` 自然光照"

    - [sunPhase](property): [](number) 太阳运行阶段，按照`#!javascript timeOfDay = (sunPhase + sunFrequency * tick) % 1`公式计算
    - [sunFrequency](property): [](number) 太阳在天空中移动的频率，数值越高，太阳运动越快
    - [lunarPhase](property): [](number) 月亮的相位，范围$[0, 1]$

=== "`#!javascript 'manual'` 手动光照"

    - [sunDirection](property): [](Box3Vector3) / [](GameVector3) 太阳的方向
    - [sunLight](property): [](Box3RGBColor) / [](GameRGBColor) 太阳的光照颜色
    - [skyLeftLight](property): [](Box3RGBColor) / [](GameRGBColor) 太阳在`-x`方向的光照颜色
    - [skyRightLight](property): [](Box3RGBColor) / [](GameRGBColor) 太阳在`+x`方向的光照颜色
    - [skyBottomLight](property): [](Box3RGBColor) / [](GameRGBColor) 太阳在`-y`方向的光照颜色
    - [skyTopLight](property): [](Box3RGBColor) / [](GameRGBColor) 太阳在`+y`方向的光照颜色
    - [skyFrontLight](property): [](Box3RGBColor) / [](GameRGBColor) 太阳在`-z`方向的光照颜色
    - [skyBackLight](property): [](Box3RGBColor) / [](GameRGBColor) 太阳在`+z`方向的光照颜色

- [rainDensity](property): [](number) 雨密度。密度越大，雨滴越多
- [rainDirection](property): [](Box3Vector3) / [](GameVector3) 雨点方向
- [rainSpeed](property): [](number) 雨速度
- [rainSizeLo](property): [](number) 雨点最小尺寸
- [rainSizeHi](property): [](number) 雨点最大尺寸
- [rainInterference](property): [](number) 雨扰流幅度
- [rainColor](property): [](Box3RGBAColor) / [](GameRGBAColor) 雨点颜色
- [snowDensity](property): [](number) 雪密度。密度越大，雪花越多
- [snowSizeLo](property): [](number) 雪最小尺寸
- [snowSizeHi](property): [](number) 雪最大尺寸
- [snowFallSpeed](property): [](number) 雪下落速度
- [snowSpinSpeed](property): [](number) 雪自旋速度
- [snowColor](property): [](Box3RGBAColor) / [](GameRGBAColor) 雪颜色
- [snowTexture](property): [](string) 雪纹理，格式为`#!javascript 'snow/*.part'`
- [gravity](property): [](number) 重力大小
- [airFriction](property): [](number) 空气阻尼大小，范围$[0, \infty]$
