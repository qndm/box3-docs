<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个客户端API"

    该API仅在客户端脚本使用

:   [查阅官方文档（remoteChannel）](https://box3.yuque.com/staff-khn556/wupvz3/globals#aj9Tb)  
    [查阅官方文档（ClientRemoteChannel）](https://box3.yuque.com/staff-khn556/wupvz3/te1en17qs6c5cont)
    [查阅社区文档（remoteChannel）](https://www.yuque.com/box3lab/api/bragiff364ydq0uz#RAyqb)
    [查阅社区文档（ClientRemoteChannel）](https://www.yuque.com/box3lab/api/pgkio37hua9sas0n)

!!! info "关于[remoteChannel](constObject)"
    [remoteChannel](constObject)在客户端和服务端都有，但其实是两个完全不同的类的实例化对象

:   [](ClientRemoteChannel)是客户端中用于和服务端通信的类  
    [](ClientRemoteChannel)无法（很难）实例化，但存在一个全局的实例化对象[remoteChannel](constObject)

## 属性
[events](readonly): [](EventEmitter)<[](ClientRemoteChannelEvents)>
:   监听服务端发来的消息

## 方法
[sendServerEvent](method)([event](arg): [](JSONValue)): [](void)
:   向服务端发送消息，服务端会触发[](ServerEvent)事件