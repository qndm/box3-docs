<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

:   [查阅官方文档](https://box3.yuque.com/org-wiki-box3-ev7rl4/guide/vvcmhushslg1k9ig#eTtoL)~~藏得真深~~  
    [查阅官方文档（Arena）](https://box3.yuque.com/staff-khn556/wupvz3/wkgxqor9a2i34oet)

[](Box3EventChannel) / [](GameEventChannel)是使用事件频道监听事件的方式

[](Box3EventChannel) / [](GameEventChannel)<[EventType](type)> = ([handler](callbackArg): ([event](arg): [EventType](type)) => [](void)) => [](Box3EventHandlerToken) / [](GameEventHandlerToken)
:   使用事件频道，在事件触发时调用回调函数

    | 参数 | 类型 | 说明 |
    | :- | :- | :- |
    | [handler](callbackArg) | ([event](arg): [EventType](type)) => [](void) | 事件发生时调用的回调函数 |

    | 返回值 | 类型 | 说明 |
    | :- | :- | :- |
    | | [](Box3EventHandlerToken) / [](GameEventHandlerToken) | 事件令牌 |