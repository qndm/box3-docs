<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

!!! info "Arena独有"
    该API仅在Arena编辑器使用

:   [查阅官方文档（Arena）](https://box3.yuque.com/staff-khn556/wupvz3/dw93mzb6q0d5d181)  
    [查阅社区文档（Arena）](https://www.yuque.com/box3lab/api/dwqtzys3uh6ksnnt#hfKS5)

## 属性
[isLastPage](readonly): [](boolean)
:   是否为最后一页

    !!! info "如果反过头了，也为`#!javascript true`"

## 方法
[getCurrentPage](method)() => [](ReturnValue)[]
:   获取当前页数据

    !!! warning "警告"

        其返回值 **不是**[](Promise)

[nextPage](method)() => [](Promise)<[](void)>
:   翻到下一页

    !!! warning "警告"

        这是一个[](Promise)
