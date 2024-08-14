<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个客户端API"

    该API仅在客户端脚本使用

:   [查阅官方文档](https://box3.yuque.com/staff-khn556/wupvz3/rf3tysnafai37hyg)  
    [查阅社区文档](https://www.yuque.com/box3lab/api/fa0dxkfxscs74k44)

:   二维位置  
    实际计算结果为[scale](readonly)计算结果和[offset](readonly)之和  
    你可以理解为，先通过[scale](readonly)计算出[v](variable)，再将[v](variable)和[offset](readonly)相加得到最终结果

## 构造函数
[Coord2](hiddenConstructor)([c](hiddenArg)[^2]: {[offset](property): [](number)[], [???](property)[^3]: [](Vec2)}): [](Coord2)[^1]
:   创建一个二维位置

    | 参数 | | 类型 | 说明 |
    | - | - | - | - |
    | [v](hiddenArg) | | | 一个[](object)该二维位置的值 |
    | | [offset](property) | [](number)[] | 该二维位置[offset](readonly)的值，为一个长度为`#!javascript 2`的数组 |
    | | [???](property) | [](number)[] | 该二维位置[scale](readonly)的值，为一个长度为`#!javascript 2`的数组 |

    ??? example "示例"

        ```javascript
        new Vec2([1, 2]);
        new Vec2([255, 255]);
        new Vec2([255, 0]);
        ```

## 属性
!!! tip "提示"

    虽然下面[offset](readonly)\[scale](readonly)属性标记为只读，但只是你不能直接给这个属性赋值，你仍然可以使用属性自带的方法赋值或者直接给属性的属性赋值  
    同时你也不能像服务端那样`#!javascript x = ...;`的写法了

[offset](readonly): [](Vec2)
:   相对于父节点的绝对偏移值，单位为px

[scale](readonly): [](Vec2)
:   相对于父节点尺寸的缩放量，[x](accessor)和[y](accessor)的范围皆为$[0, 1]$  
    举个例子，若[x](accessor) = `#!javascript 0.5`，[y](accessor) = `#!javascript 0.5`，那么该节点的位置就在父节点的中心（实际显示还和锚点有关）；  
    若[x](accessor) = `#!javascript 0`，[y](accessor) = `#!javascript 0`，那么该节点的位置就在父节点的左上角  
    若[x](accessor) = `#!javascript 1`，[y](accessor) = `#!javascript 1`，那么该节点的位置就在父节点的右下角

## 方法
[create](staticMethod)([val](arg)?: [](Coord2)): [](Coord2)
:   创建一个二维位置

    ??? example "示例"

        官方写法，仅限Javascript使用
        === "Javascript"

            ```javascript
            Vec2.create({x: 1, y: 2})
            ```

        改进后的写法，可在Typescript中使用
        === "Javascript"

            ```javascript
            let vec = Vec2.create();
            vec.x = 1;
            vec.y = 2;
            ```

        === "Typescript"

            ```javascript
            let vec: Vec2 = Vec2.create();
            vec.x = 1;
            vec.y = 2;
            ```

## 第三方重写
??? note "[S-C-Link_client](https://github.com/qndm/EasyBox3Lib)中重写的[Coord2](class)"

    需搭配[S-C-Link_client](https://github.com/qndm/EasyBox3Lib)中重写的[Vector2](class)使用，具体见[Vec2 #第三方重写](./Vec2.md#_3)
    ```javascript
    /**
     * 图像映射中区域的坐标  
     * 值为`offset`（绝对坐标）和`scale`（占父元素空间的百分比）之和
     */
    class Coord2 {
        offset = new Vector2(0, 0);
        scale = new Vector2(0, 0);
        constructor(offset, scale = new Vector2(0, 0)) {
            this.offset = offset;
            this.scale = scale;
        }
        /**
         * 设置`offset.x`的值
         * @param {number} value
         */
        set x(value) {
            this.offset.x = value;
        }
        /**
         * 设置`offset.y`的值
         * @param {number} value
         */
        set y(value) {
            this.offset.y = value;
        }
        set(offset, scale) {
            this.offset = offset;
            this.scale = scale;
        }
        copy(c) {
            this.offset = c.offset.clone();
            this.scale = c.scale.clone();
        }
        clone() {
            return new Coord2(this.offset.clone(), this.scale.clone());
        }
        setCoord2(c) {
            this.offset.setVec2(c.offset);
            this.scale.setVec2(c.scale);
        }
        static fromCoord2(c) {
            return new Coord2(Vector2.fromVec2(c.offset), Vector2.fromVec2(c.scale));
        }
    }
    ```

[^1]: 根据实际测试推出，以下是推出过程：  
    我们尝试使用构造函数创建一个[](Coord2)，但不填写任何参数

    ```javascript
    new Cooed2()
    ```
    会得到以下报错：
    ```
    TypeError: Cannot read properties of undefined (reading 'offset')
    ```
    那么就可以判断，[](Coord2)的构造函数需要填写一个具有[offset](property)属性的对象  
    而[offset](readonly)又是[](Coord2)的属性，即可以推测[scale](property)属性也应该包含在参数中  
    但事实上并不是，填写[scale](property)会得到以下报错：
    ```
    TypeError: Cannot read properties of undefined (reading '0')
    ```
    根据报错，虽然不能推出另一个属性的名称，但也可以推出，[offset](property)和这个参数填写的并不是[](Vec2)，而是一个[](number)[]

[^2]: 暂时无法获取其实际参数名，暂时以[c](hiddenArg)代替
[^3]: 属性名未知