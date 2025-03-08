---
tags:
  - 资源文件
  - 服务端
  - 旧版编辑器
  - Arena编辑器
---

<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

:   <docs-def>Box3ResourceSystem</docs-def> / <docs-def>GameResourceSystem</docs-def>是查找地图资源文件的入口点  
    <docs-def>Box3ResourceSystem</docs-def> / <docs-def>GameResourceSystem</docs-def>无法（很难）实例化，并且也没有其实例化对象，但有一个包含其相同方法的对象[](resources)

## 方法
> !p ls(path?: string): AssetListEntry[]

:   获取指定目录下的所有文件名

    | 参数 | 类型 | 说明 |
    | - | - | - |
    | [path](arg)? | [](string) | 选填，要获取的目录的路径 |

