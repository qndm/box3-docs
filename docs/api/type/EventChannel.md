<docs-def>Box3EventChannel</docs-def> / <docs-def>GameEventChannel</docs-def>是使用事件频道监听事件的方式

> !p EventChannel< EventType#type> = (handler#callbackArg: (event: EventType#type) => void) => EventHandlerToken

:   使用事件频道，在事件触发时调用回调函数

    | 参数 | 类型 | 说明 |
    | :- | :- | :- |
    | <docs-icon icon="callbackArg">handler</docs-icon> | (<docs-icon icon="arg">event</docs-icon>: <docs-icon icon="type">EventType</docs-icon>) => <docs-def>void</docs-def> | 事件发生时调用的回调函数 |

    | 返回值 | 类型 | 说明 |
    | :- | :- | :- |
    | | <docs-def>Box3EventHandlerToken</docs-def> / <docs-def>GameEventHandlerToken</docs-def> | 事件令牌 |