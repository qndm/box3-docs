<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

!!! info "Arena独有"
    该API仅在Arena编辑器中使用

## 方法
[resume](hiddenMethod)([currentTime](arg)?: [](number)): [](void)
:   重新播放音频

    | 参数 | 类型 | 说明 |
    | - | - | - |
    | [currentTime](arg)? | [](number) | 选填，音频开始播放的时间点。若填写，音频会在指定时间点开始播放 |

[setCurrentTime](hiddenMethod)([currentTime](arg): [](number)): [](void)
:   设置当前播放时间

    | 参数 | 类型 | 说明 |
    | - | - | - |
    | [currentTime](arg) | [](number) | 音频开始播放的时间点，使音频会在指定时间点开始播放 |

[pause](hiddenMethod)(): [](void)
:   暂停播放音频

[stop](hiddenMethod)(): [](void)
:   停止播放音频
