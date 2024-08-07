<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

!!! info "建议在Arena使用"

    该API建议在Arena编辑器使用  
    旧版编辑器上也有此API，但可用性未知

:   [查阅社区文档（Arena）](https://www.yuque.com/box3lab/api/qte7ch2h5i62voue)

:   请求的响应结果

## 属性
[status](readonly): [](number)
:   请求状态码

[statusText](readonly): [](string)
:   请求状态文本信息

[headers](readonly): [](GameHttpFetchHeaders)
:   响应头内容

    !!! info "Arena独有"
        此属性仅在Arena编辑器中使用

## 方法
[json](method): [](Promise)<[](any)>
:   获取该请求JSON化的内容

[text](method): [](Promise)<[](string)>
:   获取该请求文本化的内容

[arrayBuffer](method): [](Promise)<[](ArrayBuffer)>
:   获取该请求的二进制内容

[close](method): [](Promise)<[](void)>
:   关闭该请求

[ok](getter)() => [](boolean)
:   该请求是否成功

