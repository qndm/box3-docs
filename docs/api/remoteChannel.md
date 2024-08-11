<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

!!! info "Arena 独有"
    该类仅在Arena编辑器中使用

!!! info "关于[remoteChannel](constObject)"
    [remoteChannel](constObject)在客户端和服务端都有，但其实是两个完全不同的类的实例化对象

## 方法
[sendClientEvent](method): [](SendClientEventType)
:   向指定客户端发送消息

[broadcastClientEvent](method)([clientEvent](arg): [](JSONValue)) => [](void)
:   向所有客户端发送消息

### 事件
[onServerEvent](event): [](GameEventChannel)<[](ServerEvent)>
:   服务器收到客户端消息时触发

## SendClientEventType
[](SendClientEventType) = ([entities](arg): [](GamePlayerEntity) | [](GamePlayerEntity)[], [clientEvent](arg): [](JSONValue)) => [](void)
:   <span class="hidden">又是只用一遍的类型</span>