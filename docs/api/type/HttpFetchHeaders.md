<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

!!! info "Arena独有"
    该API仅在Arena编辑器使用

:   [查阅社区文档（Arena）](https://www.yuque.com/box3lab/api/obiw5557v5m67ziw#fCF4m)

:   用于HTTP请求的请求头配置

[](GameHttpFetchHeaders) = {[[name](indexArg): [](string)]: [](string) | [](string)[]}

??? example "示例"

    ```javascript
    http.fetch('dao3.fun', {
        header: {
            "User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36' 
        }
    }).then(() => console.log('收到数据'));
    ```