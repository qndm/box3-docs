<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个客户端API"

    该API仅在客户端脚本使用

:   [查阅官方文档](https://box3.yuque.com/staff-khn556/wupvz3/ksy9e996672upyqp)  
    [查阅社区文档](https://www.yuque.com/box3lab/api/yzgcv4sfm223f9we#cgPTQ)

:   指针事件行为

| 属性 | 值 | 二进制值 | 说明 |
| - | - | :-: | - |
| [DISABLE_AND_BLOCK_PASS_THROUGH](enumMember) | `#!javascript 0` | `00` | 不响应，且不允许位于元素后方的其他元素响应 |
| [DISABLE](enumMember) | `#!javascript 1` | `01` | 不响应，但允许位于元素后方的其他元素响应 |
| [BLOCK_PASS_THROUGH](enumMember) | `#!javascript 2` | `10` | 响应，但不允许位于元素后方的其他元素响应 |
| [ENABLE](enumMember) | `#!javascript 3` | `11` | 响应，且允许位于元素后方的其他元素响应 |