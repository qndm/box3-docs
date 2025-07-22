批量获取键值对的配置项

## 属性
- <docs-icon icon="property">cursor</docs-icon>: <docs-def>number</docs-def> 必填，分页指针，用于指定本次获取的分页起点页码
- <docs-icon icon="property">pageSize</docs-icon> = `#!javascript 100`: <docs-def>number</docs-def> 分页大小，一页内的数据量，取值范围$[0, 100]$
- <docs-icon icon="property">constraintTarget</docs-icon>?: <docs-def>string</docs-def> 约束目标值的路径，当值是JSON格式时，指定用作排序的值的路径，可以级联最多5级，例：`#!javascript a.b.c.d.e`，超出视作非法参数  
当路径不存在或传入非法参数时，以值本身作为约束目标，并打印一条警告
- <docs-icon icon="property">ascending</docs-icon>?: <docs-def>boolean</docs-def> 是否升序，设置为`#!javascript true`时为升序，`#!javascript false`为降序，不传或传入<docs-def>undefined</docs-def>时不排序
- <docs-icon icon="property">max</docs-icon>?: <docs-def>number</docs-def> 列举的数据的最大值，若填写，约束目标的值大于该值则会被筛出，同时非<docs-def>number</docs-def>类型的数据也会被筛出
- <docs-icon icon="property">min</docs-icon>?: <docs-def>number</docs-def> 列举的数据的最小值，若填写，约束目标的值小于该值则会被筛出，同时非<docs-def>number</docs-def>类型的数据也会被筛出
