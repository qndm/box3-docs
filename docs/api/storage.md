---
tags:
  - 数据储存空间
  - 服务端
  - Arena编辑器
---

<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

!!! info "Arena独有"
    该API仅在Arena编辑器使用

:   [查阅官方文档（Arena）](https://box3.yuque.com/staff-khn556/wupvz3/game_storage)  
    [查阅社区文档（Arena）](https://www.yuque.com/box3lab/api/gevnagz96l3gpuiu)

:   [](GameStorage)是在Arena地图进行数据库操作的类
    [](GameStorage)无法（很难）被实例化，但在全局存在一个单例对象[](storage)


## 方法
[getDataStorage](method)([key](arg): [](string)): [](GameDataStorage)
:   获取指定数据储存空间。若空间不存在，创建该空间

    | 参数 | 类型 | 说明 |
    | - | - | - |
    | [key](arg) | [](string) | 数据储存空间名称，长度不超过50字符 |

    !!! warning "警告"

        其返回值 **不是**[](Promise)

    !!! info "提示"

        若在扩展地图内使用，此方法获取的数据储存空间只在所在地图可用，其他地图不可用，数据不可联通

    !!! note "建议"

        建议数据储存空间名称仅包含英文字母、数字、`_`、`$`，避免出现因乱码而无法获取数据储存空间的问题

[getGroupStorage](method)([key](arg): [](string) | [](undefined)): [](GameDataStorage)
:   获取地图组内指定数据储存空间。若空间不存在，创建该空间  
    此方法获取的数据储存空间在地图组内都可用，数据联通

    | 参数 | 类型 | 说明 |
    | - | - | - |
    | [key](arg) | [](string) | 数据储存空间名称，长度不超过50字符 |


    !!! info "该方法仅在扩展地图中使用"
        
        若在非扩展地图内使用，返回[](undefined)

    !!! warning "警告"

        其返回值 **不是**[](Promise)

    !!! note "建议"

        建议数据储存空间名称仅包含英文字母、数字、`_`、`$`，避免出现因乱码而无法获取数据储存空间的问题