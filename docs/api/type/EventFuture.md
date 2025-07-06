<docs-def>Box3EventFuture</docs-def> / <docs-def>GameEventFuture</docs-def>是使用<docs-def>Promise</docs-def>监听事件的方式  
<docs-def>Box3EventFuture</docs-def> / <docs-def>GameEventFuture</docs-def>用于监听单次事件，当监听到事件时，会将<docs-icon icon="type">EventType</docs-icon>返回

!!! warning "警告"

    异步代码生成的错误不会显示堆栈跟踪，这可能会加大调试的难度

    （人话：只有报错但没有给出代码位置）

!!! tip "提示"

    在使用此API前，建议先了解<docs-def>Promise</docs-def>

> !p EventFuture< EventType#type> = (filter#callbackArg?: (event: EventType#type) => boolean) => Promise< EventType#type>

:   使用<docs-def>Promise</docs-def>，等待事件触发

    | 参数 | 类型 | 说明 |
    | :- | :- | :- |
    | <docs-icon icon="callbackArg">filter</docs-icon>? | (<docs-icon icon="arg">event</docs-icon>: <docs-icon icon="type">EventType</docs-icon>) => <docs-def>boolean</docs-def> | 选填，用于检查事件是否满足条件<br>若该回调函数返回`#!javascript true`，<docs-def>Promise</docs-def>就会兑现；否则继续等待下一次事件触发<br>若不填，则只要事件触发就会兑现<docs-def>Promise</docs-def> |

    | 返回值 | 类型 | 说明 |
    | :- | :- | :- |
    | | <docs-def>Promise</docs-def><<docs-icon icon="type">EventType</docs-icon>> | 一个<docs-def>Promise</docs-def>。当符合<docs-icon icon="callbackArg">filter</docs-icon>的事件被触发，这个<docs-def>Promise</docs-def>就会兑现 |

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
        === "<docs-def>Promise</docs-def>写法"

            ```javascript
            // 等待进入的玩家按下Action1键
            world.onPlayerJoin(({ entity }) => {
                entity.player.nextPress(({ button }) => button === 'action1')           // 注意不是onPress
                .then(() => console.log(entity.player.name, '按下Action1键'));
            });
            ```