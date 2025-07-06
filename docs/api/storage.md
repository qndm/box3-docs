<docs-def>GameStorage</docs-def>是在Arena地图进行数据库操作的类
<docs-def>GameStorage</docs-def>无法（很难）被实例化，但在全局存在一个单例对象<docs-def>storage</docs-def>


## 方法
> !p getDataStorage(key: string): GameDataStorage

:   获取指定数据储存空间。若空间不存在，创建该空间

    | 参数 | 类型 | 说明 |
    | - | - | - |
    | <docs-icon icon="arg">key</defs-icon> | <docs-def>string</docs-def> | 数据储存空间名称，长度不超过50字符 |

    !!! warning "警告"

        其返回值 **不是**<docs-def>Promise</docs-def>

    !!! info "提示"

        若在扩展地图内使用，此方法获取的数据储存空间只在所在地图可用，其他地图不可用，数据不可联通

    !!! note "建议"

        建议数据储存空间名称仅包含英文字母、数字、`_`、`$`，避免出现因乱码而无法获取数据储存空间的问题

> !p getDataStoragetGroupStoragege(key: string): GameDataStorage | undefined

:   获取地图组内指定数据储存空间。若空间不存在，创建该空间  
    此方法获取的数据储存空间在地图组内都可用，数据联通

    | 参数 | 类型 | 说明 |
    | - | - | - |
    | <docs-icon icon="arg">key</defs-icon> | <docs-def>string</docs-def> | 数据储存空间名称，长度不超过50字符 |


    !!! info "该方法仅在扩展地图中使用"
        
        若在非扩展地图内使用，返回<docs-def>undefined</docs-def>

    !!! warning "警告"

        其返回值 **不是**<docs-def>Promise</docs-def>

    !!! note "建议"

        建议数据储存空间名称仅包含英文字母、数字、`_`、`$`，避免出现因乱码而无法获取数据储存空间的问题