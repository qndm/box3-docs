---
tags:
  - 事件
  - 玩家
  - 商业化
  - 服务端
  - Arena编辑器
---

<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>


!!! info "Arena独有"
    该API仅在Arena编辑器使用

当玩家成功购买物品时触发的事件

## 事件参数
[tick](property): [](number)
:   购买成功事件发生的时间

[userId](property): [](number)
:   触发购买事件的玩家userId

[productId](property): [](number)
:   购买商品的ID

[orderId](property): [](number)
:   购买成功的订单号