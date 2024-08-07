<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

:   [查阅官方文档](https://box3.yuque.com/org-wiki-box3-ev7rl4/guide/lxo5m69q64osfklv)  
    [查阅官方文档（Arena）](https://box3.yuque.com/staff-khn556/wupvz3/twfeqqs5gfb8b6k9)  
    [查阅社区文档（Arena）](https://www.yuque.com/box3lab/api/ur5fw9xs38ztuvck#wOD86)

[](Box3SelectorString) / [](GameSelectorString) = [](string);
:   实体选择器，用于搜索实体  
    一个[](Box3SelectorString) / [](GameSelectorString)可以包含多个实体选择器，之间用空格分隔

    | 格式 | 说明 |
    | - | - |
    | `#!javascript "*"` | 所有实体 |
    | `#!javascript "player"` | 所有玩家 |
    | `#!javascript "#id"` | 所有[id](property)为`#!javascript "id"`的实体 |
    | `#!javascript ".tag"` | 所有包含`#!javascript "tag"`标签的实体 |

    ??? example "示例"

        ```javascript
        const entities = world.querySelector('*'); // 世界中的全部实体
        const theChair = world.querySelector('#chair'); // 实体名称为“chair”的首个实体
        const players = world.querySelectorAll('player'); // 游戏中的全部玩家
        const boxes = world.querySelectorAll('.box'); // 标签带有“box”的全部实体
        const redBox = world.querySelector('.box .red');// 标签同时带有“box”和“red”的首个实体
        ```