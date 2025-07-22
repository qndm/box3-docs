用于HTTP请求的请求头配置

> !p GameHttpFetchHeaders = {
    [name: string]: string | string[]
}

??? example "示例"

    ```javascript
    http.fetch('dao3.fun', {
        header: {
            "User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36' 
        }
    }).then(() => console.log('收到数据'));
    ```