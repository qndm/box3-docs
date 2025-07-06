<docs-def>Box3Voxels</docs-def> / <docs-def>GameVoxels</docs-def>无法（很难）被实例化，但在全局存在一个单例对象<docs-def>voxels</docs-def>  
    可以通过<docs-def>voxels</docs-def>对象控制世界的地形变化，利用循环语法批量生成/销毁方块，获取某个方块的类型、名称、旋转角度等。

!!! info "方块名称和方块id"

    方块名称和方块id都是描述某位置方块的方法  
    方块名称只包含方块的类型  
    id包含方块的旋转码，在<docs-icon icon="method">setVoxel</docs-icon>方法不填<docs-icon icon="arg">rotation</docs-icon>参数的情况下修改方块旋转码  
    方块正面面朝北方（`-z`方向）的旋转码数值上和将方块名称使用<docs-icon icon="method">id</docs-icon>方法转换后（即方块为初始旋转状态的id，也可说为不带旋转码）相同  
    方块正面面朝北方（`-z`方向）的旋转码为基准，取此时的旋转码为<docs-icon icon="variable">voxel</docs-icon>，每顺时针转$90°$，方块<docs-icon icon="variable">voxel</docs-icon>加`#!javascript 16384`（`#!javascript 0x4000`）  
    我们以泥土（方块名称为`#!javascript 'dirt'`，id为`#!javascript 125`）为例：

    - 面向北方（`-z`方向）的旋转码为`#!javascript 125 + 0` = `#!javascript 125`
    - 面向东方（`+x`方向）的旋转码为`#!javascript 125 + 16384 * 1` = `#!javascript 16509`
    - 面向南方（`+z`方向）的旋转码为`#!javascript 125 + 16384 * 2` = `#!javascript 32893`
    - 面向西方（`-x`方向）的旋转码为`#!javascript 125 + 16384 * 3` = `#!javascript 49277`

    若只是想判断方块的类型，应使用<docs-icon icon="method">name</docs-icon>将方块id转换成方块名称或者将方块id取模`#!javascript 16384`（`#!javascript 0x4000`）后再判断  
    这不只是为了规范和便于维护，因为方块的id会包含旋转码，旋转码会使直接判断方块id相等的方法无效（除非你把四个方向都考虑到）！

## 属性
> !p shape: Vector3

:   地图尺寸，决定了能放置方块区域的最大尺寸  
    这一属性在地图创建之初就以确定，无法修改<span class="hidden">实际不是</span>

    !!! tip "提示与技巧"
        在该空间之外无法放置方块，但实体不受影响  
        你可以通过使用实体代替方块的方法来创建理论无限大空间的地图  
        注意以下三点：

        1. 一是玩家的活动范围
        2. 二是<docs-def>number</docs-def>类型精度问题
        3. 实体数量上限问题

    !!! bug

        若是创建一个中等大小（`64`*`128`*`64`）的地图，在控制台输入时该属性正常，在代码文件中<docs-icon icon="property">shape</docs-icon>会变成`{ x:32, y:32, z:32 }`  
        经2024/8/19测试，超大地图（`256`*`64`*`256`）也有此问题  
        可以通过`#!javascript voxels.shape.set(...)`修复

> !p VoxelTypes: string[]

:   一个包含所有方块 **名称** 的数组。

    !!! warning "注意"
        这个属性的命名方法和其他属性不同，第一个字母大写。注意不要写成`voxelTypes`


## 方法
> !p id(name: string): number

:   将方块名称转换为方块id

    ??? example "示例"

        ```javascript
        voxels.id('air')   //<~ 0
        voxels.id('dirt')  //<~ 125
        voxels.id('stone') //<~ 129
        ```

> !p name(id: number): string

:   将方块id转换为方块名称

    ??? example "示例"

        ```javascript
        voxels.name(0)   //<~ 'air'
        voxels.name(125) //<~ 'dirt'
        voxels.name(129) //<~ 'stone'
        ```

> !p setVoxel(x: number, y: number, z: number, voxel: number | string, rotation?: number | string): number

:   使用方块名称或无旋转码的id，在指定的坐标位置放置一个方块。  
    若填写的方块无效，则放置空气（`#!javascript 'air'`: `#!javascript 0`）

    | 属性 | 类型 | 说明 |
    | - | - | - |
    | <docs-icon icon="arg">x</docs-icon> | <docs-def>number</docs-def> | 必填，放置位置的x坐标 |
    | <docs-icon icon="arg">y</docs-icon> | <docs-def>number</docs-def> | 必填，放置位置的y坐标 |
    | <docs-icon icon="arg">z</docs-icon> | <docs-def>number</docs-def> | 必填，放置位置的z坐标 |
    | <docs-icon icon="arg">voxel</docs-icon> | <docs-def>number</docs-def> \| <docs-def>string</docs-def> | 必填，方块名称或id |
    | <docs-icon icon="arg">rotation</docs-icon>? | <docs-def>number</docs-def> \| <docs-def>string</docs-def> | 选填，方块的旋转码，可以填的值为`#!javascript 0`, `#!javascript 1`, `#!javascript 2`, `#!javascript 3`、`#!javascript '0'`, `#!javascript '1'`, `#!javascript '2'`, `#!javascript '3'` |

    | 返回值 | 类型 | 说明 |
    | - | - | - |
    | | <docs-def>number</docs-def> | 新的方块id |

    !!! tip "提示"

        <docs-icon icon="arg">rotation</docs-icon>参数也可以填写字符串，但是似乎没人这么写，因为这么写除了多了个引号就没有别的用途了

    !!! warning "此方法不适用于复制/保存地形"

        <docs-icon icon="arg">voxel</docs-icon>参数中包含的方块旋转码无效，实际旋转码只和<docs-icon icon="arg">rotation</docs-icon>有关"

> !p setVoxelId(x: number, y: number, z: number, voxel: number): number

:   使用方块id，直接在指定的坐标位置放置方块。  
    执行效率比<docs-icon icon="method">setVoxel</docs-icon>更快。  
    若<docs-icon icon="arg">voxel</docs-icon>不带旋转码，则方块面向北方（`-z`方向）  
    若填写的方块无效，则放置空气（`#!javascript 'air'`: `#!javascript 0`）

    | 属性 | 类型 | 说明 |
    | - | - | - |
    | <docs-icon icon="arg">x</docs-icon> | <docs-def>number</docs-def> | 必填，放置位置的x坐标 |
    | <docs-icon icon="arg">y</docs-icon> | <docs-def>number</docs-def> | 必填，放置位置的y坐标 |
    | <docs-icon icon="arg">z</docs-icon> | <docs-def>number</docs-def> | 必填，放置位置的z坐标 |
    | <docs-icon icon="arg">voxel</docs-icon> | <docs-def>number</docs-def> | 必填，方块id |

    | 返回值 | 类型 | 说明 |
    | - | - | - |
    | | <docs-def>number</docs-def> | 新的方块id |

    !!! note "提示"
        <docs-icon icon="arg">voxel</docs-icon>参数包含的方块旋转码有效  
        通过此可以在没有<docs-icon icon="arg">rotation</docs-icon>参数的情况下修改方块旋转码

> !p getVoxel(x: number, y: number, z: number): number

:   获取指定地方的方块id  

    | 属性 | 类型 | 说明 |
    | - | - | - |
    | <docs-icon icon="arg">x</docs-icon> | <docs-def>number</docs-def> | 必填，获取的方块的x坐标 |
    | <docs-icon icon="arg">y</docs-icon> | <docs-def>number</docs-def> | 必填，获取的方块的y坐标 |
    | <docs-icon icon="arg">z</docs-icon> | <docs-def>number</docs-def> | 必填，获取的方块的z坐标 |

    | 返回值 | 类型 | 说明 |
    | - | - | - |
    | | <docs-def>number</docs-def> | 获取的方块id |

    !!! tip "提示与技巧"

        由于其不带旋转码的特性，可以直接用此方法判断方块的id来判断的种类，而不是用<docs-icon icon="method">name</docs-icon>方法转换成方块名称后再比较

    !!! warning "此方法不适用于复制/保存地形"

        用此方法获取的id不带旋转码

> !p getVoxelId(x: number, y: number, z: number): number

:   直接获取指定地方的方块id  
    用此方法获取的id带方块旋转码  
    执行效率比<docs-icon icon="method">getVoxel</docs-icon>更快。

    | 属性 | 类型 | 说明 |
    | - | - | - |
    | <docs-icon icon="arg">x</docs-icon> | <docs-def>number</docs-def> | 必填，获取的方块的x坐标 |
    | <docs-icon icon="arg">y</docs-icon> | <docs-def>number</docs-def> | 必填，获取的方块的y坐标 |
    | <docs-icon icon="arg">z</docs-icon> | <docs-def>number</docs-def> | 必填，获取的方块的z坐标 |

    | 返回值 | 类型 | 说明 |
    | - | - | - |
    | | <docs-def>number</docs-def> | 获取的方块id |

    !!! info "用此方法获取的id带旋转码"

> !p getVoxelRotation(x: number, y: number, z: number): number

:   获取某个坐标位置的方块旋转码

    | 属性 | 类型 | 说明 |
    | - | - | - |
    | <docs-icon icon="arg">x</docs-icon> | <docs-def>number</docs-def> | 必填，获取的方块的x坐标 |
    | <docs-icon icon="arg">y</docs-icon> | <docs-def>number</docs-def> | 必填，获取的方块的y坐标 |
    | <docs-icon icon="arg">z</docs-icon> | <docs-def>number</docs-def> | 必填，获取的方块的z坐标 |

    | 返回值 | 类型 | 说明 |
    | - | - | - |
    | | <docs-def>number</docs-def> | 获取的方块旋转码 |
