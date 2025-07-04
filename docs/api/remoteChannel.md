!!! info "关于<docs-def allow-apis="proOnly">remoteChannel</docs-def>"
    <docs-def allow-apis="proOnly">remoteChannel</docs-def>在客户端和服务端都有，但其实是两个完全不同的类的实例化对象

:   [查阅官方文档](https://box3.yuque.com/staff-khn556/wupvz3/ntp9mv3gu87p20i5)  
    [查阅社区文档](https://www.yuque.com/box3lab/api/giv6b6wzthf3t2uk)

:   <docs-def allow-apis="proOnly">ServerRemoteChannel</docs-def>是服务端中用于和客户端通信的类  
    <docs-def allow-apis="proOnly">ServerRemoteChannel</docs-def>无法（很难）实例化，但存在一个全局的实例化对象<docs-def allow-apis="proOnly">remoteChannel</docs-def>

!!! note "说明"

    在[官方文档](https://box3.yuque.com/staff-khn556/wupvz3/ntp9mv3gu87p20i5)和[社区文档](https://www.yuque.com/box3lab/api/giv6b6wzthf3t2uk)中，表述为“发送事件”，而本文档中表述为“发送消息”，这只是同一种东西的不同表述

## 方法
> !p sendClientEvent#method: SendClientEventType

:   向指定客户端发送消息，客户端会触发<docs-def allow-apis="clientOnly">ClientRemoteChannelEvents</docs-def>事件

### SendClientEventType

> !p SendClientEventType = (entities: GamePlayerEntity | GamePlayerEntity[], clientEvent: JSONValue) => void

:   <span class="hidden">又是一次性类型</span>

> !p broadcastClientEvent(clientEvent: JSONValue): void

:   向所有客户端发送消息，客户端会触发<docs-def allow-apis="clientOnly">ClientRemoteChannelEvents</docs-def>事件

### 事件
> !p onServerEvent#method: GameEventChannel< ServerEvent>

:   服务器收到客户端消息时触发
