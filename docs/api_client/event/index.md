# <icon name='event'>事件</icon>

<icon name='event'>事件</icon>是客户端监听的方式  
<icon name='event'>事件</icon>由以下组成：

- <icon name="function">事件处理器</icon>，为[](EventEmitter)，用于监听客户端的变化，在需要时运行事件监听器
- <icon name="callable">事件监听器</icon>，一种回调函数，通过<icon name="function">事件处理器</icon>触发，表示事件触发该干什么
- <icon name="class">监听器参数</icon>，通过<icon name="function">事件处理器</icon>传递给<icon name="callable">事件监听器</icon>，表示事件发生的具体细节
- <icon name="type">事件映射表</icon>，一种<icon name="object">对象</icon>，其键为事件名称，值为<icon name="class">监听器参数</icon>