<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个客户端API"

    该API仅在客户端脚本使用

:   [查阅官方文档](https://box3.yuque.com/staff-khn556/wupvz3/dz2ldfic5dce5lqr)  
    [查阅社区文档](https://www.yuque.com/box3lab/api/zek5l1m2s2bxoea4)

:   所有UI元素节点的基类

## 属性
[name](property): [](string)
:   节点的名称  
    在客户端中，你可以不指定节点的名称（然后你就不能（很难）通过其他方法获取到这个节点了）  
    节点的名称可以相同

[children](readonly): [](ReadonlyArray)<[](UiNode)>
:   只读，该节点的所有子节点

[parent](property): [](UiNode) | [](undefined)
:   该节点的父节点  
    若为[](undefined)，节点不会被渲染，同时若没有任何变量引用该节点，该节点会被浏览器回收；否则，节点会被渲染到页面上

[uiScale](property): [](UiScale) | [](undefined)
:   该节点的缩放系数

## 方法
[clone](method)(): [](void)
:   克隆该节点