<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

!!! info "Arena 独有"
    该类仅在Arena编辑器中使用

!!! info "关于[remoteChannel](constObject)"
    [remoteChannel](constObject)在客户端和服务端都有，但其实是两个完全不同的类的实例化对象

:   [查阅官方文档](https://box3.yuque.com/staff-khn556/wupvz3/ntp9mv3gu87p20i5)  
    [查阅社区文档](https://www.yuque.com/box3lab/api/giv6b6wzthf3t2uk)

:   [](ServerRemoteChannel)是服务端中用于和客户端通信的类  
    [](ServerRemoteChannel)无法（很难）实例化，但存在一个全局的实例化对象[remoteChannel](constObject)

!!! note "说明"

    在[官方文档](https://box3.yuque.com/staff-khn556/wupvz3/ntp9mv3gu87p20i5)和[社区文档](https://www.yuque.com/box3lab/api/giv6b6wzthf3t2uk)中，表述为“发送事件”，而本文档中表述为“发送消息”，这只是同一种东西的不同表述

## 方法
[sendClientEvent](method): [](SendClientEventType)
:   向指定客户端发送消息，客户端会触发[](ClientRemoteChannelEvents)事件

[broadcastClientEvent](method)([clientEvent](arg): [](JSONValue)): [](void)
:   向所有客户端发送消息，客户端会触发[](ClientRemoteChannelEvents)事件

### 事件
[onServerEvent](event): [](GameEventChannel)<[](ServerEvent)>
:   服务器收到客户端消息时触发

## SendClientEventType
[](SendClientEventType) = ([entities](arg): [](GamePlayerEntity) | [](GamePlayerEntity)[], [clientEvent](arg): [](JSONValue)) => [](void)
:   <span class="hidden">又是只用一遍的类型</span>