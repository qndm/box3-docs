对话框关闭参数  
注意：若要使用，调用对话框的时候就不能加`await`，要使用<docs-def>Promise</docs-def>，具体见下面示例

## 方法
> !p cancel(): void

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