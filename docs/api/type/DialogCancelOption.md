<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

: [查阅官方文档](https://box3.yuque.com/org-wiki-box3-ev7rl4/guide/ogusmt37bz9yr8fw#Wy4Sc)  
  [查阅官方文档（Arena）](https://box3.yuque.com/staff-khn556/wupvz3/extmobyyfsaec26x#Wy4Sc)  
  [查阅社区文档（Arena）](javascript:alert$.next('似乎社区没有文档'))

:   对话框关闭参数  
    注意：若要使用，调用对话框的时候就不能加`await`，要使用[](Promise)，具体见下面示例

## 方法
[cancel](method)() => [](void)
:   关闭该对话框

    ??? example "示例"

        ```javascript
        world.onPlayerJoin(async ({ entity }) => {
            // 玩家进入游戏时，弹出一个欢迎对话框
            const dialog = entity.player.dialog({
                type: 'text',
                title: "吉吉喵",
                content: `你好，${entity.player.name}，很高兴认识你。`,
            });
            // 等待任何一个 [玩家点击或关闭对话框， 3秒后自动把对话框关闭]
            Promise.race([
                dialog,
                (async () => {
                    await sleep(3000);  
                    dialog.cancel();
                })()
            ]).then((result) => {
                if(result === 'success') 
                    console.log('正常关闭对话框');
                else
                    console.log('超时自动关闭对话框');
            }); 
        });
        ```
        ```javascript
        world.onPlayerJoin(async ({ entity }) => {
            // 玩家进入游戏时，弹出一个欢迎对话框
            const dialog = entity.player.dialog({
                type: 'text',
                title: "吉吉喵",
                content: `你好，${entity.player.name}，很高兴认识你。`,
            });
            // 3秒后自动关闭
            setTimeout(()=>{
                dialog.cancel();
            }, 3000);
        });
        ```