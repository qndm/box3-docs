!!! info "Arena独有"

    该API仅在Arena编辑器使用

!!! danger inline end "实验性警告"

    该API仍处于实验性阶段，可能会造成很多不确定因素，轻则卡顿、崩溃，重则地图无法进入、数据损坏  
    目前建议在独立的新地图中测试

    若地图无法进入，可以先尝试等待容器重启（3~5min）；若仍无效，则需寻求官方帮助

    编者注：为了测试RTC损失一张空白地图，等了一天都没用

: [查阅社区文档](https://www.yuque.com/box3lab/api/hwzgw2br9ri4r023)

:   <docs-def>GameRTC</defs-def>是实现游戏内创建实时语音通信的[类](class)  
    <docs-def>GameRTC</defs-def>无法（很难）被实例化，但在全局存在一个单例对象[](rtc)

### 方法
[createChannel](hiddenMethod)([channelId](arg)?: [](string)): [](Promise)<[](GameRTCChannel)>

:   创建一个RTC通道

    | 参数 | 类型 | 说明 |
    | - | - | - |
    | [channelId](arg)? | [](string) | 选填，RTC通道id |

    !!! failure "此处与社区API不符"

        [channelId](arg)在社区文档的描述中属于必填项

    !!! note "经2024/7/29测试，[channelId](arg)不填并不会报错"