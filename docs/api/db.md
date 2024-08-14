<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

!!! info "不适用于Arena编辑器"
    该API仅限旧版编辑器  
    若在Arena编辑器使用，只会得到一条错误信息：`Error: sql error: Error: storage disabled`

!!! note "说明"
    该页面不介绍SQL，SQL教程可以看：

    - [一文带你真正了解-SQL](../learn/community-articles/Nomen-sql.md)
    - [SQLite - 菜鸟教程](https://www.runoob.com/sqlite/sqlite-tutorial.html)
    - [PostgreSQL - 菜鸟教程](https://www.runoob.com/postgresql/postgresql-tutorial.html)

: [查阅官方文档](https://box3.yuque.com/org-wiki-box3-ev7rl4/guide/hc069ctabo29naig)  

[](Box3Database) / [](GameDatabase)无法（很难）被实例化，但在全局存在一个单例对象[](db)  
[](db)对象是整个Box3 Database API的入口。在使用数据库之前，需要先掌握一些关于操作数据库的基础知识。

## 方法
[sql](method)([sql](arg): [](string)[], ...[params](arg): ([](number) | [](string) | [](Uint8Array) | [](boolean) | `#!javascript null`)[]): [](Box3QueryResult)
:   对数据库执行SQL语句  
    有两种调用方法，一种是将语句包含在反引号 `\`\`` 里面，另一种是常规的方法调用  
    [sql][method]使用[字符串模板](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Template_literals)，因此使用引号包裹使用上最方便  
    若有需要使用常规的方法调用，则需要注意，填写的第一个参数为字符串数组，这里提供一个最简单的例子
    ```javascript
    db.sql(["[这里填入SQL代码]"]);
    ```

    ??? danger "Bug"

        在旧版编辑器中，由于该方法的 Bug ~~（特性）~~，若常规的方法调用时填入的参数不正确，会直接导致容器重启（几乎瞬间）！  
        不过这也被一些地图作为重启地图的最快且最简方法（一般死循环崩服需要12s左右，内存溢出崩服也是瞬间但是代码较长）  
        2024/7/24测试，这个Bug在旧版编辑器仍然存在，但由于新版编辑器禁用了此方法，因此此Bug在新版编辑器不存在

    ??? example "示例"

        === "`#!javascript await` 写法"

            注意：以下的`#!javascript await` 写法都没有错误处理，只是最简单的示例，需要自行写`try...catch`

            ```javascript
            // 获取数据表 users 中所有内容
            (async () => {
                var data = await db.sql`SELECT * FROM users`;
                console.log(JSON.stringify(data));
            })();
            ```
            ```javascript
            // 获取数据表 users 中name为playerName的内容
            // playerName是类型为string的字符串，为玩家名称
            (async () => {
                var data = await db.sql`SELECT * FROM users WHERE name=${playerName}`;
                console.log(JSON.stringify(data));
            })();
            ```

        === "`#!javascript Box3QueryResult` 写法"

            注意：`#!javascript Box3QueryResult` 写法无需再写`try...catch`，因为错误一般会被捕捉（除了你自己写的代码中的错误），其数据库的错误（包括SQL语法错误）已经被捕捉，`try...catch`无法捕获  
            详见[](Box3QueryResult)

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

