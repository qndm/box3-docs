<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

:   [查阅官方文档](https://box3.yuque.com/org-wiki-box3-ev7rl4/guide/de7glsylr4wpuylw)  
    [查阅官方文档（Arena）](https://box3.yuque.com/staff-khn556/wupvz3/cgylgydyg35npvup)  
    [查阅社区文档（Arena）](https://www.yuque.com/box3lab/api/uclt6lp7syrd5v00#Qiiz9)

:   动画播放方向

!!! tip "实践是检验真理的唯一标准"
    实际使用时，建议多尝试以找到最佳效果

| 属性 | 值 | 说明 |
| - | - | - |
| [NORMAL](enumMember) | `#!javascript "normal"` | 普通，即关键帧从第一帧往后播放 |
| [REVERSE](enumMember) | `#!javascript "reverse"` | 倒放，即关键帧从最后一帧往前播放 |
| [WRAP](enumMember) | `#!javascript "wrap"` | 循环，动画会在结束后平滑地返回到第一帧的状态（即使只播放1次） |
| [WRAP_REVERSE](enumMember) | `#!javascript "wrap-reverse"` | 循环倒放，即关键帧从最后一帧往前播放，结束后回到最后一帧的状态 |
| [ALTERNATE](enumMember) | `#!javascript "alternate"` | 交替，即第奇数次播放遵循[NORMAL](enumMember)播放模式播放，第偶数次播放遵循[REVERSE](enumMember)模式播放<br>但要注意，奇数次播放后会直接回到第一帧的状态，偶数次播放后会直接回到最后一帧的状态 |
| [ALTERNATE_REVERSE](enumMember) | `#!javascript "alternate-reverse"` | 交替倒放，即第奇数次播放遵循[REVERSE](enumMember)播放模式播放，第偶数次播放遵循[NORMAL](enumMember)模式播放<br>但要注意，奇数次播放后会直接回到最后一帧的状态，偶数次播放后会直接回到第一帧的状态 |

