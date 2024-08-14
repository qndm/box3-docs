<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个客户端API"

    该API仅在客户端脚本使用

:   UI缩放系数，继承于[](UiComponent)

## 属性
[scale](property): [](number)
:   缩放倍数，范围$[0, \infty]$

    !!! info "当传入非法值时，不会生效并会在控制台打印一条警告"

## 方法
[create](staticMethod)(): [](UiScale)
:   创建一个新的[](UiScale)