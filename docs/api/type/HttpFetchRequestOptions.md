<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

!!! info "Arena独有"
    该API仅在Arena编辑器使用

:   [查阅社区文档（Arena）](https://www.yuque.com/box3lab/api/obiw5557v5m67ziw#jneYE)

:   用于HTTP发送外部请求时提供的参数

## 属性
- [timeout](property)?: [](number) 选填，超时时间；若请求所需时间超过此值，请求会被终止（类似于你访问一些网站时显示 xxx 的响应时间过长。）
- [method](property)?: `#!javascript 'OPTIONS'` | `#!javascript 'GET'` | `#!javascript 'HEAD'` | `#!javascript 'PUT'` | `#!javascript 'POST'` | `#!javascript 'DELETE'` | `#!javascript 'PATCH'` 请求方式
- [headers](property)?: [](GameHttpFetchHeaders) 请求头
- [body](property)?: [](string) | [](ArrayBuffer) 请求内容