<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个客户端API"

    该API仅在客户端脚本使用

:   [查阅官方文档（input）](https://box3.yuque.com/staff-khn556/wupvz3/globals#IYM43)  
    [查阅官方文档（InputSystem）](https://box3.yuque.com/staff-khn556/wupvz3/bq0g8w9tgv6esen6)
    [查阅社区文档](https://www.yuque.com/box3lab/api/dvugdcd9dt4uovdu)

:   [](InputSystem)是输入系统的入口，用于全局监听玩家的输入  
    [](InputSystem)无法实例化，但存在一个实例化对象[](input)

## 属性
[uiEvents](readonly): [](EventEmitter)<[](UiNodeEvents)>
:   全局监听玩家指针与UI元素交互时的产生的事件

[pointerLockEvents](readonly): [](EventEmitter)<[](PointerLockEvents)>
:   全局监听当玩家指针锁定状态变化或出错时产生的事件。

## 方法
[unlockPointer](method)(): [](void)
:   解锁鼠标指针

[lockPointer](method)(): [](void)
:   锁定鼠标指针  

    ???+ quote "参考链接"
        [requestPointerLock - MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/requestPointerLock)  
        [requestPointerLock - W3C](https://w3c.github.io/pointerlock/#dom-element-requestpointerlock)

    !!! warning "警告"

        由于浏览器限制，此操作可能会失败。