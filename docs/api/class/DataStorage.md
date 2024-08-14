<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

!!! info "Arena独有"
    该API仅在Arena编辑器使用

:   [查阅官方文档（Arena）](https://box3.yuque.com/staff-khn556/wupvz3/yifnc28uw0e9d8hl)  
    [查阅社区文档（Arena）](https://www.yuque.com/box3lab/api/dwqtzys3uh6ksnnt)

:   代表数据存储空间的类  
    其操作类似于[](Map)，使用键值对储存数据，一个键只能对应一个值，同一数据储存空间不允许存在两个相同的键

???+ warning "操作频率限制"

    对于每一张地图，数据储存空间的操作存在频率限制
    根据2024/8/7的官方API文档，  
    :   $每分钟写入频率限制 = 60 + (玩家数 \times 10)$  
        $每分钟读取频率限制 = 120 + (玩家数 \times 20)$

    当前版本下，$玩家数$固定取$70$，也就是说，
    :   $每分钟写入频率限制 = 60 + (70 \times 10) = 760$[^1]  
        $每分钟读取频率限制 = 120 + (70 \times 20) = 1520$[^2]

    同时，对于每一个键值对，也有频率限制
    根据2024/8/7的官方API文档，  
    :   $每分钟每键值对写入数据量频率限制 = 4MiB/min$[^3]  
        $每分钟每键值对读取数据量频率限制 = 25MiB/min$[^4]

    若在编辑端，重启地图并不会重置限制（也就是说你超限了重新运行地图是不行的）

    ~~要是真是这样，一般使用一般不会超过限制吧~~

    测试代码如下：

    ```javascript
    // 测试同一键值对可写入数据量频率
    var s = storage.getDataStorage('test');

    (async () => {
        for(let i = 0; i < 757; i++){
            s.set('a', 'a'.repeat(5526)).catch((reason) => {
                console.error(reason);
            });
            console.log("写入", i);
        }
        console.log('写入完成');
    })();
    ```
    ```javascript
    // 测试读取频率，测试时不考虑同一键值对可读取数据量频率
    // 测试数据量为3601条数据
    var s = storage.getDataStorage('test');

    (async () => {
        let cnt = 0;
        for(let i = 1; i <= 600; i++){
            s.get('a').catch((reason) => {
                console.error(++cnt, reason);
            });
        }
        console.log("读取", 600);
        await sleep(2e3);
        for(let i = 1; i <= 3001; i++){
            s.get('a').catch((reason) => {
                console.error(++cnt, reason);
            });
            if(i % 100 === 0) {
                console.log("读取", i);
                await sleep(500);
            }
        }
        console.log('读取完成', cnt);
    })();
    ```

    [^1]: 根据2024/8/7实际测试，编辑端每分钟只能写入$759$条数据
    [^2]: 根据2024/8/7实际测试，编辑端每分钟只能读取$3600$条数据
    [^3]: 根据实际测试，键的大小也被包含在内。也就是说，键的长度也会影响能存入的数据量。但数据储存空间的名称不会影响。
    [^4]: 根据实际测试，键的大小也被包含在内

## 属性
[key](readonly): [](string)
:   只读，当前数据储存空间名称

## 方法
[set](method)([key](arg): [](string), [value](arg): [](JSONValue)): [](Promise)<[](void)>
:   设置该数据储存空间中指定键的值

[update](method)([key](arg): [](string), [handler](callbackArg): ([prevValue](arg): [](ReturnValue)) => [](JSONValue)): [](Promise)<[](void)>
:   使用回调函数，设置该数据储存空间中指定键的值

[get](method)([key](arg): [](string)): [](Promise)<[](ReturnValue)>
:   获取该数据储存空间中指定键的值

[list](method)([options](arg): [](ListPageOptions)): [](Promise)<[](QueryList)>
:   批量列出该数据储存空间的值

[remove](method)([key](arg): [](string)): [](Promise)<[](ReturnValue)>
:   移除该数据储存空间中指定键的值

[destroy](hiddenMethod)(): [](Promise)<[](void)>
:   销毁该数据储存空间


## 错误码
!!! info "当数据库发生错误时，返回JSON格式的错误信息"

    返回的错误信息：
    :   [status](property): [](string) 
        :   对应下表的状态
    :   [code](property): [](number) 
        :   对应下表的错误码
    :   [msg](property): [](string) 
        :   对应下表的信息

| 错误码 | 状态 | 信息 | 说明 |
| :-: | - | - | :-: |
| `#!javascript 400` | `#!javascript DB_NAME_INVALID` | `Invalid data storage name.` | 数据储存空间名称无效 |
| `#!javascript 400` | `#!javascript KEY_INVALID` | `Invalid data key.` | 数据键无效 |
| `#!javascript 400` | `#!javascript VALUE_INVALID` | `Invalid data value.` | 数据值无效 |
| `#!javascript 400` | `#!javascript PARAMS_INVALID` | `Invalid parameters.` | 参数无效 |
| `#!javascript 429` | `#!javascript REQUEST_THROTTLED` | `Too Many Requests` | 操作频率超过限制 |
| `#!javascript 500` | `#!javascript SERVER_FETCH_ERROR` | `Server network error.` | 服务器网络错误 |
| `#!javascript 500` | `#!javascript SERVER_FETCH_ERROR` | `写频率过高，触发限流` | 键值对写入频率过高 |
| `#!javascript 500` | `#!javascript SERVER_FETCH_ERROR` | `读数据量超限，触发限流` | 读取频率过高 |
| `#!javascript 500` | `#!javascript UNKNOWN` | `Unknown server error.` | 未知错误 |
| 未知，待补充 | `#!javascript CONSTRAINT_TARGET_INVALID` | 未知，待补充 | 约束目标无效 |
| 未知，待补充 | `#!javascript DB_NAME_INVALID` | 未知，待补充 | 数据库名称无效 |