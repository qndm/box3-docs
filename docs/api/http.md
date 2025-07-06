!!! info "建议在Arena使用"

    该API建议在Arena编辑器使用  
    旧版编辑器上也有此API，但可用性未知

<docs-def>Box3HttpAPI</docs-def> / <docs-def>GameHttpAPI</docs-def>是实现外部网络请求的类  
<docs-def>Box3HttpAPI</docs-def> / <docs-def>GameHttpAPI</docs-def>无法（很难）被实例化，但在全局存在一个单例对象<docs-def>http</docs-def>

## 属性
> !p @oldOnly url#property.protected: string

:   服务器链接  
    2024/8/7测试 结果为`#!javascript "http://localhost"`

    !!! info "不适用于Arena"

        该属性在Arena编辑器中不存在

## 方法
> !p fetch(url: string, params?: Box3HttpFetchParams): Promise< Box3HttpFetchResponse>

> !p fetch(url: string, options?: GameHttpFetchRequestOptions): Promise< GameHttpFetchResponse>

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
> !p onRequest(handler: Box3HttpHandler): void