<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

!!! info "Arena独有"
    该API仅在Arena编辑器使用

:   [查阅官方文档（Arena）](https://box3.yuque.com/staff-khn556/wupvz3/ugyg698kg8940k4d)  
    [查阅社区文档（Arena）](https://www.yuque.com/box3lab/api/dwqtzys3uh6ksnnt#wFvkb)

## 属性
- [cursor](property): [](number) 必填，分页指针，用于指定本次获取的分页起点页码
- [pageSize](property) = `#!javascript 100`: [](number) 分页大小，一页内的数据量，取值范围$[0, 100]$
- [constraintTarget](property)?: [](string) 约束目标值的路径，当值是JSON格式时，指定用作排序的值的路径，可以级联最多5级，例：`#!javascript a.b.c.d.e`，超出视作非法参数  
当路径不存在或传入非法参数时，以值本身作为约束目标，并打印一条警告
- [ascending](property)?: [](boolean) 是否升序，设置为`#!javascript true`时为升序，`#!javascript false`为降序，不传或传入[](undefined)时不排序
- [max](property)?: [](number) 列举的数据的最大值，若填写，约束目标的值大于该值则会被筛出，同时非[](number)类型的数据也会被筛出
- [min](property)?: [](number) 列举的数据的最小值，若填写，约束目标的值小于该值则会被筛出，同时非[](number)类型的数据也会被筛出
