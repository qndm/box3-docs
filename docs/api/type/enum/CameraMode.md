<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

: [查阅官方文档](https://box3.yuque.com/org-wiki-box3-ev7rl4/guide/nn1x7rpnnxtxgk8f)  
  [查阅官方文档（Arena）](https://box3.yuque.com/staff-khn556/wupvz3/kg0ggd71y96dlu0w)  
  [查阅社区文档（Arena）](https://www.yuque.com/box3lab/api/zombb5wu40fet60k#TzBdh)

:   玩家的相机视角模式

| 属性 | 值 | 说明 |
| - | - | - |
| [FPS](enumMember) | `#!javascript "fps"` | 第三人称视角 |
| [FOLLOW](enumMember) | `#!javascript "follow"` | 第一人称视角 |
| [FIXED](enumMember) | `#!javascript "fixed"` | 固定视角。摄像机被固定在世界一个位置和方向 |
| [RELATIVE](hiddenEnumMember) | `#!javascript "relative"` | 相对视角。摄像机被固定在相对[cameraEntity](property)一个位置，<br>会随着[cameraEntity](property)移动，但不会改变方向 |
