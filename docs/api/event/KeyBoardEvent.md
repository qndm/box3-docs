<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

!!! info "Arena独有"
    该API仅在Arena编辑器使用

:   [查阅官方文档（Arena）](https://box3.yuque.com/staff-khn556/wupvz3/su9rkpkv6yte84s8)  
    [查阅社区文档（Arena）](https://www.yuque.com/box3lab/api/rgssolkr068w0fy9#anWjP)


Box3 中键盘触发的事件  
由[](GameWorld).[onKeyDown](event)、[](GameWorld).[onKeyUp](event)触发

## 事件参数
[tick](property): [](number)
:   键盘事件发生的时间

[keyCode](property): [](number)
:   按下/松开键盘的按钮keyCode

## keyCode 映射表
来源：  
<https://www.toolhelper.cn/Keyboard/KeyCode>  

| 按键 | KeyCode |
| :-: | :-: |
| Esc | `#!javascript 27` |
| F1 | `#!javascript 112` |
| F2 | `#!javascript 113` |
| F3 | `#!javascript 114` |
| F4 | `#!javascript 115` |
| F5 | `#!javascript 116` |
| F6 | `#!javascript 117` |
| F7 | `#!javascript 118` |
| F8 | `#!javascript 119` |
| F9 | `#!javascript 120` |
| F10 | `#!javascript 121` |
| F11 | `#!javascript 122` |
| F12 | `#!javascript 123` |
| 主键盘区 0 | `#!javascript 48` |
| 主键盘区 1 | `#!javascript 49` |
| 主键盘区 2 | `#!javascript 50` |
| 主键盘区 3 | `#!javascript 51` |
| 主键盘区 4 | `#!javascript 52` |
| 主键盘区 5 | `#!javascript 53` |
| 主键盘区 6 | `#!javascript 54` |
| 主键盘区 7 | `#!javascript 55` |
| 主键盘区 8 | `#!javascript 56` |
| 主键盘区 9 | `#!javascript 57` |
| A | `#!javascript 65` |
| B | `#!javascript 66` |
| C | `#!javascript 67` |
| D | `#!javascript 68` |
| E | `#!javascript 69` |
| F | `#!javascript 70` |
| G | `#!javascript 71` |
| H | `#!javascript 72` |
| I | `#!javascript 73` |
| J | `#!javascript 74` |
| K | `#!javascript 75` |
| L | `#!javascript 76` |
| M | `#!javascript 77` |
| N | `#!javascript 78` |
| O | `#!javascript 79` |
| P | `#!javascript 80` |
| Q | `#!javascript 81` |
| R | `#!javascript 82` |
| S | `#!javascript 83` |
| T | `#!javascript 84` |
| U | `#!javascript 85` |
| V | `#!javascript 86` |
| W | `#!javascript 87` |
| X | `#!javascript 88` |
| Y | `#!javascript 89` |
| Z | `#!javascript 90` |
| ~<br>\` | `#!javascript 192` |
| _<br>- | `#!javascript 189` |
| +<br>= | `#!javascript 187` |
| \|<br>\\ | `#!javascript 220` |
| {<br>[ | `#!javascript 219` |
| }<br>] | `#!javascript 221` |
| :<br>; | `#!javascript 186` |
| "<br>' | `#!javascript 222` |
| <<br>, | `#!javascript 188` |
| ><br>. | `#!javascript 190` |
| ?<br>/ | `#!javascript 191` |
| Tab | `#!javascript 9` |
| 大写锁定键 Caps Lock | `#!javascript 20` |
| Shift | `#!javascript 16` |
| Ctrl / 左Control | `#!javascript 17` |
| Alt | `#!javascript 18` |
| 空格 | `#!javascript 32` |
| 回车键 Enter | `#!javascript 13` |
| Context Menu | `#!javascript 93` |
| 退格键 Backspace | `#!javascript 8` |
| 截图键 Print Screen | `#!javascript 44` |
| 滚动锁定键 Scroll Lock | `#!javascript 145` |
| Pause / Pause Break | `#!javascript 19` |
| Insert | `#!javascript 45` |
| Home | `#!javascript 36` |
| Page Up | `#!javascript 33` |
| Delete | `#!javascript 46` |
| End | `#!javascript 35` |
| Page Down | `#!javascript 34` |
| ↑ | `#!javascript 38` |
| ↓ | `#!javascript 40` |
| ← | `#!javascript 37` |
| → | `#!javascript 39` |
| Num Lock | `#!javascript 144` |
| 小键盘区 0 | `#!javascript 96` |
| 小键盘区 1 | `#!javascript 97` |
| 小键盘区 2 | `#!javascript 98` |
| 小键盘区 3 | `#!javascript 99` |
| 小键盘区 4 | `#!javascript 100` |
| 小键盘区 5 | `#!javascript 101` |
| 小键盘区 6 | `#!javascript 102` |
| 小键盘区 7 | `#!javascript 103` |
| 小键盘区 8 | `#!javascript 104` |
| 小键盘区 9 | `#!javascript 105` |
| 小键盘区 . | `#!javascript 110` |
| 小键盘区 + | `#!javascript 107` |
| 小键盘区 - | `#!javascript 109` |
| 小键盘区 * | `#!javascript 106` |
| 小键盘区 / | `#!javascript 111` |