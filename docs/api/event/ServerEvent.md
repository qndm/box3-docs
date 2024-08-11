<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

!!! info "Arena 独有"
    该类仅在Arena编辑器中使用

:   服务端收到客户端发来的自定义事件

## 事件参数
<property>tick</property>: <def>number</def>
:   事件发生的时间

<property>entity</property>: <def>GamePlayerEntity</def>
:   发来消息的客户端

[args](property): [](JSONValue)
:   客户端发来的自定义消息

