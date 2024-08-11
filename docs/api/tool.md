<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

:   部分常用但细碎的API的说明

## 常量
### 目录
[__dirname](const): [](string) = `#!javascript ""`
:   当前脚本的目录路径，`#!javascript ""`代表根目录

    !!! info "此API并非Box3独有"

[__filename](const): [](string)
:   当前脚本文件名

    !!! info "此API并非Box3独有"

### 模块
[require](const): {([module](arg): [](string)) => [](any), [resolve](method)([path](arg): [](string)) => [](string)}
:   调用其他脚本模块

:   [resolve](method)([path](arg): [](string)) => [](string)
    :   解析脚本文件，返回路径

        ??? example "示例"

            ```javascript
            JSON.stringify(require.resolve('EasyBox3Lib.js')) //<~ "node_modules/EasyBox3Lib.js"
            JSON.stringify(require.resolve('我不是模块')) //<~ "node_modules/我不是模块"
            ```

[module](const): {[exports](property): [](any)}
:   模块要导出的内容

    ??? example "示例"

        === "`index.js`"

            ```javascript
            console.log(JSON.stringify(require('test.js')));
            ```

        === "`test.js`"

            ```javascript
            module.exports = {message: "这里什么也没有"};
            ```

[exports](const): [](any)

:   !!! quote ""

        [exports](const) 变量在模块的文件级作用域内可用，并在评估模块之前被分配 [module](const).[exports](property) 的值

        ——引用自<https://nodejs.cn/api/modules.html#exports-%E5%BF%AB%E6%8D%B7%E6%96%B9%E5%BC%8F>

### 资源文件
## 函数
### 时间
[sleep](function)([ms](arg): [](number)): [](Promise)<[](void)>
:   使脚本暂停运行一段时间

    | 参数 | 类型 | 说明 |
    | - | - | - |
    | [ms](arg) | [](number) | 要等待的时间，单位为毫秒 |

    ??? example "示例"

        === "`#!javascript await`写法"

            ```javascript
            (async () => {
                console.log('倒计时');
                await sleep(1000);
                console.log('5');
                await sleep(1000);
                console.log('4');
                await sleep(1000);
                console.log('3');
                await sleep(1000);
                console.log('2');
                await sleep(1000);
                console.log('1');
                await sleep(1000);
                console.log('计时结束');
            })();
            ```

        === "`#!javascript await`+`#!javascript for`写法"

            ```javascript
            (async () => {
                console.log('倒计时');
                for(let i = 5; i >= 1; i--){
                    await sleep(1000);
                    console.log(String(i));
                }
                await sleep(1000);
                console.log('计时结束');
            })();
            ```

        === "[](Promise)写法"

            ```javascript
            console.log('倒计时');
            sleep(1000).then(() => {
                console.log('5');
                return sleep(1000);
            }).then(() => {
                console.log('4');
                return sleep(1000);
            }).then(() => {
                console.log('3');
                return sleep(1000);
            }).then(() => {
                console.log('2');
                return sleep(1000);
            }).then(() => {
                console.log('1');
                return sleep(1000);
            }).then(() => {
                console.log('计时结束');
            });
            ```

        === "[](Promise)+`#!javascript for`写法"

            ```javascript
            console.log('倒计时');
            let p = sleep(1000);
            for(let i = 5; i >= 1; i--)
                p = p.then(() => {
                    console.log(String(i));
                    return sleep(1000);
                });
            p.then(() => {
                console.log('计时结束');
            });
            ```
