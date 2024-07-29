<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

!!! info "Arena独有"

    该API仅在Arena编辑器使用

!!! danger inline end "实验性警告"

    该API仍处于实验性阶段，可能会造成很多不确定因素，轻则卡顿、崩溃，重则地图无法进入、数据损坏  
    目前建议在独立的新地图中测试

    若地图无法进入，可以先尝试等待容器重启（3~5min）；若仍无效，则需寻求官方帮助

    编者注：为了测试RTC损失一张空白地图

: [查阅社区文档](https://www.yuque.com/box3lab/api/ogh9sncntyg18gd5)

:   [](GameRTCChannel)是Box3中的RTC（实时语言通信）通道。  
    [](GameRTCChannel)无法（很难）被实例化，但可以通过[](rtc).[createChannel](hiddenMethod)获取其实例化对象

[add](hiddenMethod)([entity](arg): [](GamePlayerEntity)) => [](Promise)<[](void)>
:   向该RTC通道中添加玩家

    !!! failure "此处与社区API不符"

        社区文档中，[entity](arg)是[](GamePlayer)类型  
        其他方法同理

    !!! success "经2024/7/29测试，该文档内容无问题"

        ```javascript
        world.onPlayerJoin(async ({ entity }) => {
            var channel = await rtc.createChannel();

            await channel.add(entity);
            await channel.getMicrophonePermission(entity);
            await channel.publishMicrophone(entity);
        });
        ```

    ??? example "示例"

        ```javascript
        world.onPlayerJoin(async ({ entity }) => {
            var channel = await rtc.createChannel();
            await channel.add(entity);
        });
        ```

[remove](hiddenMethod)([entity](arg): [](GamePlayerEntity)) => [](Promise)<[](void)>
:   向该RTC通道移除玩家

    ??? example "示例"

        ```javascript
        world.onPlayerJoin(async ({ entity }) => {
            var channel = await rtc.createChannel();
            await channel.add(entity);
            entity.player.directMessage('你已被加入rtc频道，按鼠标右键/B键退出');
            await entity.player.nextPress(({button}) => button === GameButtonType.ACTION1);
            await channel.remove(entity);
        });
        ```

[destroy](hiddenMethod)() => [](Promise)<[](void)>
:   销毁该RTC通道

[getMicrophonePermission](hiddenMethod)([entity](arg): [](GamePlayerEntity)) => [](Promise)<[](boolean)>
:   申请玩家的麦克风权限

    !!! info "提示"

        未加入RTC通道的玩家，也可以使用该方法申请权限，但不会被[publishMicrophone](hiddenMethod)打开麦克风

    | 参数 | 类型 | 说明 |
    | - | - | - |
    | [entity](arg) | [](GamePlayerEntity) | 要申请麦克风权限的玩家 |

    | 返回值 | 类型 | 说明 |
    | - | - | - |
    | | [](Promise)<[](boolean)> | 是否成功申请到玩家的麦克风权限 |

    ??? example "示例"

        ```javascript
        world.onPlayerJoin(async ({ entity }) => {
            var channel = await rtc.createChannel();

            await channel.add(entity);
            var permission = await channel.getMicrophonePermission(entity);
            console.log(entity.player.userId, permission);
        });
        ```

[publishMicrophone](hiddenMethod)([entity](arg): [](GamePlayerEntity)) => [](Promise)<[](void)>
:   开启该RTC通道玩家的麦克风

    !!! bug

        若开启麦克风之后，没有通过[unpublish](hiddenMethod)关闭麦克风，地图停止运行后麦克风是不会关闭的（并且除非取消权限，否则永远也关不掉了）

[unpublish](hiddenMethod)([entity](arg): [](GamePlayerEntity)) => [](Promise)<[](void)>
:   关闭该RTC通道玩家的麦克风

[getPlayers](hiddenMethod)([entity](arg): [](GamePlayerEntity)) => [](Promise)<[](GamePlayerEntity)[]>
:   获取该RTC通道的所有玩家

[getVolume](hiddenMethod)([entity](arg): [](GamePlayerEntity)) => [](Promise)<[](number)>
:   获取该RTC通道的音量，范围$[0, 100]$

[setVolume](hiddenMethod)([entity](arg): [](GamePlayerEntity), [volume](arg): [](number)) => [](Promise)<[](void)>
:   设置该RTC通道的音量，范围$[0, 100]$

    ??? example "示例"

        ```javascript
        world.onPlayerJoin(async ({ entity }) => {
            var channel = await rtc.createChannel();

            await channel.add(entity);
            await channel.getMicrophonePermission(entity);
            await channel.publishMicrophone(entity);
            await channel.setVolume(entity, 50);
        });
        ```

