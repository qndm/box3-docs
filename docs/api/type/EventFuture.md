<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

:   [查阅官方文档](https://box3.yuque.com/org-wiki-box3-ev7rl4/guide/vvcmhushslg1k9ig#Yx6zE)~~藏得真深~~  
    [查阅官方文档（Arena）](https://box3.yuque.com/staff-khn556/wupvz3/azxgcc43ibscl5z1)

[](Box3EventFuture) / [](GameEventFuture)是使用[](Promise)监听事件的方式  
[](Box3EventFuture) / [](GameEventFuture)用于监听单次事件，当监听到事件时，会将[EventType](eventArg)返回

!!! warning "警告"

    异步代码生成的错误不会显示堆栈跟踪，这可能会加大调试的难度

    （人话：只有报错但没有给出代码位置）

!!! tip "提示"

    在使用此API前，建议先了解[](Promise)

[](Box3EventFuture) / [](GameEventFuture)<[EventType](eventArg)> = ([filter](callbackArg)?: ([event](arg): [EventType](eventArg)) => [](boolean)) => [](Promise)<[EventType](eventArg)>
:   使用[](Promise)，等待事件触发

    | 参数 | 类型 | 说明 |
    | :- | :- | :- |
    | [filter](callbackArg)? | ([event](arg): [EventType](eventArg)) => [](boolean) | 选填，用于检查事件是否满足条件<br>若该回调函数返回`#!javascript true`，[](Promise)就会兑现；否则继续等待下一次事件触发<br>若不填，则只要事件触发就会兑现[](Promise) |

    | 返回值 | 类型 | 说明 |
    | :- | :- | :- |
    | | [](Promise)<[EventType](eventArg)> | 一个[](Promise)。当符合[filter](callbackArg)的事件被触发，这个[](Promise)就会兑现 |

    ??? example "示例"

        ```javascript
        // 等待2个玩家进入世界，宣布“游戏开始”
        async function waitForPlayers (count) {
            while (world.querySelectorAll('player').length < 2) {
                const { entity } = await world.nextPlayerJoin();        // 注意不是onPlayerJoin
                world.say(entity.player.name + ' 加入游戏');
            }
        }
        waitForPlayers().then(() => world.say('游戏开始'));
        ```
        === "`#!javascript await`写法"

            ```javascript
            // 等待进入的玩家按下Action1键
            world.onPlayerJoin(async ({ entity }) => {
                await entity.player.nextPress(({ button }) => button === 'action1');    // 注意不是onPress
                console.log(entity.player.name, '按下Action1键');
            });
            ```
        === "[](Promise)写法"

            ```javascript
            // 等待进入的玩家按下Action1键
            world.onPlayerJoin(({ entity }) => {
                entity.player.nextPress(({ button }) => button === 'action1')           // 注意不是onPress
                .then(() => console.log(entity.player.name, '按下Action1键'));
            });
            ```