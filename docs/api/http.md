<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

!!! info "建议在Arena使用"

    该API建议在Arena编辑器使用  
    旧版编辑器上也有此API，但可用性未知

:   [查阅社区文档（Arena）](https://www.yuque.com/box3lab/api/obiw5557v5m67ziw)

:   [](Box3HttpAPI) / [](GameHttpAPI)是实现外部网络请求的[类](class)  
    [](Box3HttpAPI) / [](GameHttpAPI)无法（很难）被实例化，但在全局存在一个单例对象[](http)

## 属性
[url](hiddenReadonly): [](string)
:   服务器链接  
    2024/8/7测试 结果为`#!javascript "http://localhost"`

    !!! info "不适用于Arena"

        该属性在Arena编辑器中不存在

## 方法
[仅旧版编辑器][fetch](hiddenMethod)([url](arg): [](string), [params](arg)?: [](Box3HttpFetchParams)) => [](Promise)<[](Box3HttpFetchResponse)>  
[仅Arena编辑器][fetch](hiddenMethod)([url](arg): [](string), [options](arg)?: [](GameHttpFetchRequestOptions)) => [](Promise)<[](GameHttpFetchResponse)>
:   发送HTTP请求

    !!! warning "警告"

        只有被Box3列入白名单的网站才能发送请求

    ??? example "示例"

        === "Arena 编辑器"

            ```javascript
            http.fetch('dao3.fun', {
                header: {
                    "User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36' 
                }
            }).then(() => console.log('收到数据'));
            ```

### 事件
[onRequest](method)([handler](callbackArg): [](Box3HttpHandler)) => [](void)
:   当收到HTTP请求时，触发的事件

    !!! info "不适用于Arena"

        该方法在Arena编辑器中不存在