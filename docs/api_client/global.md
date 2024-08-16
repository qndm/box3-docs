<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个客户端API"

    该API仅在客户端脚本使用

## 屏幕
[](screenWidth): [](number)
:   [查阅官方文档](https://box3.yuque.com/staff-khn556/wupvz3/globals#QHWDA)  
    屏幕宽度，单位为像素

[](screenHeight): [](number)
:   [查阅官方文档](https://box3.yuque.com/staff-khn556/wupvz3/globals#MrvwP)  
    屏幕宽度，单位为像素

## 时间
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
