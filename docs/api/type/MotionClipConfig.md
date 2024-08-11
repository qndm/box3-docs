<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

!!! info "Arena独有"
    该API仅在Arena编辑器使用

:   [查阅官方文档（Arena）](https://box3.yuque.com/staff-khn556/wupvz3/grhrvh4gh1s1t7ni)  
    [查阅社区文档（Arena）](https://www.yuque.com/box3lab/api/mddbf91xi6753mxg#YkYO6)

## 属性
[motions](property): [](GameMotionConfig)[]
:   该动作序列包含的动作

[iterations](property): [](number) = `#!javascript 1`
:   动作播放次数  
    若值为`#!javascript Infinity`，动作就会无限播放，直到被覆盖或者被取消播放