Box3 中的 Tick 事件

Tick 本意为钟表的滴答声，在这里被当作一种时间周期或时间单位，同时还可以表示一种事件。
因为 Box3 是基于网络和事件的联机平台，因此需要有一个特定的周期来同步数据，这个周期就是 tick。
每个 tick 中，代码运行所产生的数据变更会被同步到客户端，客户端就可以看到相应的更改。
但是这个时间并不是固定的，由于网络延迟、服务器负载或代码卡顿，tick 时刻都在变化，一般来说正常情况下这个数值在 30-100ms
（地图启动时延迟会更大，属于正常现象）
开发过程中，应尽量优化代码，使 tick 间隔时间尽可能短且稳定，这样玩家就会感觉地图比较流畅。

## 事件参数

<property>elapsedTimeMS</property> : <def>number</def>
: 两次`tick`中间经过的时间

<property>prevTick</property> : <def>number</def>
: 上一个正常处理的`tick`

<property>skip</property> : <def>boolean</def>
: 如果为<bool>true</bool>则说明因为卡顿而跳过了`tick`

<property>tick</property> : <def>number</def>
: 当前`tick`的编号
