<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

: [查阅官方文档](https://box3.yuque.com/org-wiki-box3-ev7rl4/guide/ypas9d47cn7fgc42)  
  [查阅官方文档（Arena）](https://box3.yuque.com/staff-khn556/wupvz3/ucndfavnw4hpxiu2)  
  [查阅社区文档（Arena）](https://www.yuque.com/box3lab/api/gm9rzlrl95wryhs8#Oby5f)

声音效果配置

## 属性

!!! warning inline end "警告"
    在指定声音文件路径时，必须确保文件已经上传在文件管理器中
- [sample](property): [](string) 声音文件路径，格式为`#!javascript 'audio/*.mp3'`
- [radius](property): [](number) 声音可被听见的范围。默认为32。距离实体越近，声音听的越清晰。
- [gain](property): [](number) 音量增益。正常为1，数值越大，声音越响。
- [gainRange](property): [](number) 音量增益方差。计算公式为：`#!javascript effect.gain + (Math.random() - 0.5) * effect.gainRange`
- [pitch](property): [](number) 音高增益。正常为1。大于1，声音音调越高。小于1，声音音调越低。
- [pitchRange](property): [](number) 音高增益方差。计算公式为：`#!javascript effect.pitch + (Math.random() - 0.5) * effect.pitchRange`