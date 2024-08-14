<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

!!! info "不适用于Arena编辑器"
    该API仅限旧版编辑器  
    若在Arena编辑器使用，只会得到一条错误信息：`Error: sql error: Error: storage disabled`

: [查阅官方文档](https://box3.yuque.com/org-wiki-box3-ev7rl4/guide/sgq16q6t6e3pzz2c)

[](Box3QueryResult)是使用 [](db).[sql](method) 执行SQL语句查找数据库返回的结果。


## 方法
[then](method)([resolve](callbackArg): ([rows](arg): [](any)[]) => [](any), [reject](callbackArg): (err: [](any)) => [](any)): [](void)

:   获取查找结果  
    类似于[](Promise)的[then](method)方法，需要填入两个回调函数[resolve](callbackArg)和[reject](callbackArg)  
    若成功找到数据，调用[resolve](callbackArg)；若发生错误，调用[reject](callbackArg)

    ??? example "示例"

        
        ```javascript
        // 获取数据表 users 中所有内容
        // playerName是类型为string的字符串，为玩家名称
        var query = db.sql`SELECT * FROM users WHERE name=${playerName}`;
        query.then((data) => {
            console.log(JSON.stringify(data));
        }, (err) => {
            console.error(err);
        });
        ```

[Symbol.asyncIterator](method)(): [this](keyword)
:   返回查找结果对象本身。这使查找结果对象也可以异步迭代。

    ??? example "示例"

        ```javascript
        // 获取数据表 users 中name为playerName的内容
        // playerName是类型为string的字符串，为玩家名称
        (async () => {
            var data = await db.sql`SELECT * FROM users WHERE name=${playerName}`;
            console.log(JSON.stringify(data));
        })();
        ```

[next](method)(): [](Promise)<{[done](property): [](boolean), [value](property): [](any)}>

[return](method)(): [](Promise)<{[done](property): [](boolean), [value](property): [](any)}>

[throw](method)([err](arg): [](any)): [](Promise)<{[done](property): [](boolean), [value](property): [](any)}>
