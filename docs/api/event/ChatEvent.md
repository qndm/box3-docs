---
tags:
  - 事件
  - 聊天
  - 输入
  - 玩家
  - 服务端
  - 旧版编辑器
  - Arena编辑器
---

Box3 中聊天触发的事件

Chat 本意为”聊天“，在此地表示实体聊天所触发的事件。
实体聊天 Box3 中表示为物体在地图聊天区域主动/被动发送文字

触发方法由[](Box3World).[onChat](event) / [](GameWorld).[onChat](event)和[](Box3Entity).[onChat](event) / [](GameEntity)[onChat](event)组成

## 事件参数

<property>tick</property> : <def>number</def>
: 聊天事件发生的时间

<property>entity</property> : <def>Box3Entity</def> / [](GameEntity)
: 发起聊天的实体

<property>message</property> : <def>string</def>
: 聊天发送的内容
