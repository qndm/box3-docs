<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

!!! info "Arena独有"
    该API仅在Arena编辑器使用

:   [查阅官方文档（Arena）](https://box3.yuque.com/staff-khn556/wupvz3/ofrqlqsh7eq81xw7)  
    [查阅社区文档（Arena）](https://www.yuque.com/box3lab/api/dwqtzys3uh6ksnnt#Y6PLL)

:   [](ReturnValue)表示一个键值对的内容。它可以是一个对象或者[](undefined)  
    一般在数据不存在时才为[](undefined)

[](ReturnValue) = {[key](readonly): [](string), [value](readonly): [](JSONValue), [updateTime](readonly): [](number), [createTime](readonly): [](number), [metadata](hiddenReadonly): [](object), [version](hiddenReadonly): [](number)} | [](undefined)

## 成员
- [key](readonly): [](string) 键值对的键
- [value](readonly): [](JSONValue) 键值对的值
- [updateTime](readonly): [](number) 键值对最近更新时间
- [createTime](readonly): [](number) 键值对的值
- [metadata](hiddenReadonly): [](object) 键值对元数据
- [version](hiddenReadonly): [](number) 当前键值对版本