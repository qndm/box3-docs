<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个客户端API"

    该API仅在客户端脚本使用

[](EventEmitter)<[EventMap](type) [extends](keyword) [](Record)<[](string), [](any)>>
:   客户端的事件处理器

| 类型 | 说明 |
| - | - |
| [EventMap](type) | 事件映射表，键值对的值为其键对应的事件的监听器参数 |


!!! info "提示"

    客户端事件和服务端的[](Box3EventChannel) / [](GameEventChannel)有较大区别，但也有相似之处  
    可以先看看[服务端事件](../../api/event/index.md)

## 方法
[on](genericMethod) / [add](genericMethod)<[K](index) [extends](keyword) [keyof](keyword) [EventMap](type)>([type](arg): [K](index), [listener](callbackArg): ([event](arg): [EventMap](type)[[K](index)]) => [](void)): [](void)
:   监听指定的事件

    | 参数 | | 类型 | 说明 |
    | - | - | - | - |
    | [type](arg) | | [K](index) | 要监听的事件。[K](index)为[EventMap](type)的键 |
    | [listener](callbackArg) | | | 事件监听器 |
    | | [event](arg) | [EventMap](type)[[K](index)] | 监听器参数 |

[once](genericMethod)<[K](index) [extends](keyword) [keyof](keyword) [EventMap](type)>([type](arg): [K](index), [listener](callbackArg): ([event](arg): [EventMap](type)[[K](index)]) => [](void)): [](void)
:   和[on](genericMethod) / [add](genericMethod)类似，但是只监听一次

    | 参数 | | 类型 | 说明 |
    | - | - | - | - |
    | [type](arg) | | [K](index) | 要监听的事件。[K](index)为[EventMap](type)的键 |
    | [listener](callbackArg) | | | 事件监听器 |
    | | [event](arg) | [EventMap](type)[[K](index)] | 监听器参数 |

[remove](genericMethod) / [off](genericMethod)<[K](index) [extends](keyword) [keyof](keyword) [EventMap](type)>([type](arg): [K](index), [listener](callbackArg): ([event](arg): [EventMap](type)[[K](index)]) => [](void)): [](void)
:   移除指定事件监听器

    | 参数 | | 类型 | 说明 |
    | - | - | - | - |
    | [type](arg) | | [K](index) | 要移除事件监听器的事件。[K](index)为[EventMap](type)的键 |
    | [listener](callbackArg) | | | 要移除的事件监听器，要求和创建时的[listener](callbackArg)为同一个函数 |

[removeAll](genericMethod)<[K](index) [extends](keyword) [keyof](keyword) [EventMap](type)>([type](arg): [K](index), [listener](callbackArg): ([event](arg): [EventMap](type)[[K](index)]) => [](void)): [](void)
:   移除所有满足条件的事件监听器

    | 参数 | | 类型 | 说明 |
    | - | - | - | - |
    | [type](arg) | | [K](index) | 要移除事件监听器的事件。[K](index)为[EventMap](type)的键 |
    | [listener](callbackArg) | | | 要移除的事件监听器，要求和创建时的[listener](callbackArg)为同一个函数 |

    !!! bug

        根据2024/7/13测试，该函数的所有参数无效  
        修复状态暂时未知

[emit](genericMethod)<[K](index) [extends](keyword) [keyof](keyword) [EventMap](type)>([type](arg): [K](index), [event](arg): [EventMap](type)[[K](index)]): [](void)
:   强制触发事件

    | 参数 | 类型 | 说明 |
    | - | - | - |
    | [type](arg) | [K](index) | 要强制触发的事件。[K](index)为[EventMap](type)的键 |
    | [event](callbackArg) | [EventMap](type)[[K](index)] | 事件监听器参数 |
