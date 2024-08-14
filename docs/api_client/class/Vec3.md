<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个客户端API"

    该API仅在客户端脚本使用

:   [查阅官方文档](https://box3.yuque.com/staff-khn556/wupvz3/mxz9symgxwpylkuz)  
    [查阅社区文档](https://www.yuque.com/box3lab/api/leixabkuu89lhklr)

:   三维向量<span class="hidden">严重阉割版</span>

## 构造函数
[Vec3](hiddenConstructor)([v](hiddenArg)[^2]: [](number)[]): [](Vec3)[^1]
:   创建一个三维向量

    | 参数 | 类型 | 说明 |
    | - | - | - |
    | [v](hiddenArg) | [](number)[] | 一个长度为`#!javascript 3`的数组，数组的成员分别是[x](accessor) / [r](accessor)、[y](accessor) / [g](accessor)、[z](accessor) / [b](accessor)的值 |

    ??? example "示例"

        ```javascript
        new Vec3([1, 2, 3]);
        new Vec3([255, 255, 255]);
        new Vec3([255, 0, 255]);
        ```

## 属性
[x](accessor): [](number)
:   三维向量x值

[y](accessor): [](number)
:   三维向量y值

[z](accessor): [](number)
:   三维向量z值

[r](accessor): [](number)
:   [x](accessor)的别名，在设置颜色时使用

[g](accessor): [](number)
:   [y](accessor)的别名，在设置颜色时使用

[b](accessor): [](number)
:   [z](accessor)的别名，在设置颜色时使用

## 方法
<span class="hidden">反人类，不给set方法</span>

[copy](method)([val](arg): [](Vec3)): [](void)
:   把[val](arg)的值复制到这个三维向量中

    ??? example "示例"

        官方示例，仅限Javascript使用

        === "Javascript"

            ```javascript
            let vec1 = Vec2.create({x: 1, y: 2});
            let vec2 = Vec2.create();
            vec2.copy(vec1); // vec2的x和y现在都被设置为vec1的x和y
            ```

        改进后的示例，可在Typescript使用

        === "Javascript"

            ```javascript
            let vec1 = Vec2.create();
            vec1.x = 1;
            vec1.y = 2;
            let vec2 = Vec2.create();
            vec2.copy(vec1); // vec2的x和y现在都被设置为vec1的x和y
            ```

        === "Typescript"

            ```typescript
            let vec1: Vec2 = Vec2.create();
            vec1.x = 1;
            vec1.y = 2;
            let vec2: Vec2 = Vec2.create();
            vec2.copy(vec1); // vec2的x和y现在都被设置为vec1的x和y
            ```

[create](staticMethod)([val](arg)?: [](Vec3)): [](Vec3)
:   创建一个三维向量

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
??? note "[S-C-Link_client](https://github.com/qndm/EasyBox3Lib)中重写的[Vector3](class)"

    使用和[](Box3Vector3) / [](GameVector3)类似

    ```javascript
    /**
    * 三维向量
    */
    class Vector3 {
        x = 0;
        y = 0;
        z = 0;
        /**
        * 定义一个三维向量
        * @param {number} x 三维向量`x`的值（左右方向）
        * @param {number} y 三维向量`y`的值（竖直方向）
        * @param {number} z 三维向量`z`的值（前后方向）
        */
        constructor(x, y, z) {
            this.x = x;
            this.y = y;
            this.z = z;
        }
        set(x, y, z) {
            this.x = x;
            this.y = y;
            this.z = z;
            return this;
        }
        clone() {
            return new Vector3(this.x, this.y, this.z);
        }
        copy(v) {
            this.x = v.x;
            this.y = v.y;
            this.z = v.z;
            return this;
        }
        add(v) {
            return new Vector3(this.x + v.x, this.y + v.y, this.z + v.z);
        }
        sub(v) {
            return new Vector3(this.x - v.x, this.y - v.y, this.z - v.z);
        }
        mul(v) {
            return new Vector3(this.x * v.x, this.y * v.y, this.z * v.z);
        }
        div(v) {
            return new Vector3(this.x / v.x, this.y / v.y, this.z / v.z);
        }
        addEq(v) {
            this.x += v.x;
            this.y += v.y;
            this.z += v.z;
            return this;
        }
        subEq(v) {
            this.x -= v.x;
            this.y -= v.y;
            this.z -= v.z;
            return this;
        }
        mulEq(v) {
            this.x *= v.x;
            this.y *= v.y;
            this.z *= v.z;
            return this;
        }
        divEq(v) {
            this.x /= v.x;
            this.y /= v.y;
            this.z /= v.z;
            return this;
        }
        pow(n) {
            return new Vector3(Math.pow(this.x, n), Math.pow(this.y, n), Math.pow(this.z, n));
        }
        distance(v) {
            return Math.sqrt(Math.pow(v.x - this.x, 2) + Math.pow(v.y - this.y, 2) + Math.pow(v.z - this.z, 2));
        }
        mag() {
            return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
        }
        min(v) {
            return new Vector2(Math.min(this.x, v.x), Math.min(this.y, v.y), Math.min(this.z, v.z));
        }
        max(v) {
            return new Vector2(Math.max(this.x, v.x), Math.max(this.y, v.y), Math.max(this.z, v.z));
        }
        /**
        * 归一化函数
        * @returns {Vector2}
        */
        normalize() {
            let max = Math.max(this.x, this.y, this.z);
            return new Vector3(this.x / max, this.y / max, this.z / max);
        }
        scale(n) {
            return new Vector3(this.x * n, this.y * n, this.z * n);
        }
        toString() {
            return JSON.stringify(this);
        }
        towards(v) {
            return new Vector3(v.x - this.x, v.y - this.y, v.z - this.z);
        }
        equals(v, tolerance = 0.0001) {
            return Math.abs(v.x - this.x) <= tolerance && Math.abs(v.y - this.y) <= tolerance && Math.abs(v.z - this.z) <= tolerance;
        }
        lerp(v) {
            return this.add(v).scale(0.5);
        }
        setVec3(vec3) {
            vec3.x = this.x;
            vec3.y = this.y;
            vec3.z = this.z;
        }
        static fromVec3(v) {
            return new Vector3(v.x, v.y, v.z);
        }
    }
    ```

??? note "[S-C-Link_client](https://github.com/qndm/EasyBox3Lib)中重写的[RGBColor](class)"

    使用和[](Box3RGBColor) / [](GameRGBColor)类似

    ```javascript
    /**
     * RGB颜色
     */
    class RGBColor {
        r = 0;
        g = 0;
        b = 0;
        constructor(r, g, b) {
            this.r = r;
            this.g = g;
            this.b = b;
        }
        set(r, g, b) {
            this.r = r;
            this.g = g;
            this.b = b;
        }
        copy(c) {
            this.r = c.r;
            this.g = c.g;
            this.b = c.b;
        }
        clone() {
            return new RGBColor(this.r, this.g, this.b);
        }
        add(c) {
            return new RGBColor(this.r + c.r, this.g + c.g, this.b + c.b);
        }
        sub(c) {
            return new RGBColor(this.r - c.r, this.g - c.g, this.b - c.b);
        }
        mul(c) {
            return new RGBColor(this.r * c.r, this.g * c.g, this.b * c.b);
        }
        div(c) {
            return new RGBColor(this.r / c.r, this.g / c.g, this.b / c.b);
        }
        addEq(c) {
            this.r += c.r;
            this.g += c.g;
            this.b += c.b;
            return this;
        }
        subEq(c) {
            this.r -= c.r;
            this.g -= c.g;
            this.b -= c.b;
            return this;
        }
        mulEq(c) {
            this.r *= c.r;
            this.g *= c.g;
            this.b *= c.b;
            return this;
        }
        divEq(c) {
            this.r /= c.r;
            this.g /= c.g;
            this.b /= c.b;
            return this;
        }
        scale(n) {
            return new RGBColor(this.r * n, this.g * n, this.b * n);
        }
        toRGB255() {
            return this.scale(255);
        }
        /**
         * 归一化函数
         * @returns {Vector2}
         */
        normalize() {
            let max = Math.max(this.r, this.g, this.b);
            return new RGBColor(this.r / max, this.g / max, this.b / max);
        }
        setVec3(vec3) {
            vec3.x = this.r;
            vec3.y = this.g;
            vec3.z = this.b;
        }
        equals(c, tolerance = 0.0001) {
            return Math.abs(c.r - this.r) <= tolerance && Math.abs(c.g - this.g) <= tolerance && Math.abs(c.b - this.b) <= tolerance;
        }
        lerp(c) {
            return this.add(c).scale(0.5);
        }
        toString() {
            return JSON.stringify(this);
        }
        toRGBA() {
            return new RGBAColor(this.r, this.g, this.b, 1);
        }
        static fromRGB255(r, g, b) {
            return new RGBColor(r / 255, g / 255, b / 255);
        }
        /**
         * 从十六进制转换颜色  
         * 要求有6位（不包括`#`），例子：`123456`、`AABBCC`、`#FEDCBA`
         * @param {string} hex 十六进制颜色
         */
        static fromHEX(hex) {
            var s;
            if (hex.length < 6)
                throwError(`无效的HEX：${hex}`);
            if (hex.startsWith('#'))
                s = hex.slice(1);
            else
                s = hex;
            return new RGBColor(parseInt(s.slice(0, 2), 16), parseInt(s.slice(2, 4), 16), parseInt(s.slice(4, 6), 16));
        }
        static fromRGB(c) {
            return new RGBColor(c.r, c.g, c.b);
        }
    }
    ```

??? note "[S-C-Link_client](https://github.com/qndm/EasyBox3Lib)中重写的[RGBAColor](class)"

    使用和[](Box3RGBAColor) / [](GameRGBAColor)类似

    ```javascript
    /**
     * RGBA颜色
     */
    class RGBAColor {
        r = 0;
        g = 0;
        b = 0;
        a = 1;
        constructor(r, g, b, a) {
            this.r = r;
            this.g = g;
            this.b = b;
            this.a = a;
        }
        set(r, g, b, a) {
            this.r = r;
            this.g = g;
            this.b = b;
            this.a = a;
        }
        copy(c) {
            this.r = c.r;
            this.g = c.g;
            this.b = c.b;
            this.a = c.a;
        }
        clone() {
            return new RGBAColor(this.r, this.g, this.b, this.a);
        }
        add(c) {
            return new RGBAColor(this.r + c.r, this.g + c.g, this.b + c.b, this.a + c.a);
        }
        sub(c) {
            return new RGBAColor(this.r - c.r, this.g - c.g, this.b - c.b, this.a - c.a);
        }
        mul(c) {
            return new RGBAColor(this.r * c.r, this.g * c.g, this.b * c.b, this.a * c.a);
        }
        div(c) {
            return new RGBAColor(this.r / c.r, this.g / c.g, this.b / c.b, this.a / c.a);
        }
        addEq(c) {
            this.r += c.r;
            this.g += c.g;
            this.b += c.b;
            this.a += c.a;
            return this;
        }
        subEq(c) {
            this.r -= c.r;
            this.g -= c.g;
            this.b -= c.b;
            this.a -= c.a;
            return this;
        }
        mulEq(c) {
            this.r *= c.r;
            this.g *= c.g;
            this.b *= c.b;
            this.a *= c.a;
            return this;
        }
        divEq(c) {
            this.r /= c.r;
            this.g /= c.g;
            this.b /= c.b;
            this.a /= c.a;
            return this;
        }
        scale(n) {
            return new RGBAColor(this.r * n, this.g * n, this.b * n, this.a * n);
        }
        toRGBA255() {
            return this.scale(255);
        }
        /**
         * 归一化函数
         * @returns {Vector2}
         */
        normalize() {
            let max = Math.max(this.r, this.g, this.b, this.a);
            return new RGBAColor(this.r / max, this.g / max, this.b / max, this.a / max);
        }
        setVec3(vec3) {
            vec3.x = this.r;
            vec3.y = this.g;
            vec3.z = this.b;
        }
        equals(c, tolerance = 0.0001) {
            return Math.abs(c.r - this.r) <= tolerance && Math.abs(c.g - this.g) <= tolerance && Math.abs(c.b - this.b) <= tolerance && Math.abs(c.a - this.a) <= tolerance;
        }
        lerp(c) {
            return this.add(c).scale(0.5);
        }
        toString() {
            return JSON.stringify(this);
        }
        toRGB() {
            return new RGBColor(this.r, this.g, this.a);
        }
        static fromRGBA255(r, g, b, a) {
            return new RGBAColor(r / 255, g / 255, b / 255, a / 255);
        }
        /**
         * 从十六进制转换颜色  
         * 要求有8位（不包括`#`），例子：`12345678`、`AABBCCFF`、`#FEDCBA98`
         * @param {string} hex 十六进制颜色
         */
        static fromHEX(hex) {
            var s;
            if (hex.length < 8)
                throwError(`无效的HEX：${hex}`);
            if (hex.startsWith('#'))
                s = hex.slice(1);
            else
                s = hex;
            return new RGBAColor(parseInt(s.slice(0, 2), 16), parseInt(s.slice(2, 4), 16), parseInt(s.slice(4, 6), 16), parseInt(s.slice(6, 8), 16));
        }
        static fromRGBA(c) {
            return new RGBAColor(c.r, c.g, c.b, c.a);
        }
    }
    ```

??? note "继承于[](Vec3)的[Vector3](class)（只修改构造函数 新增[set](method)）"

    === "Javascript"

        ```javascript
        class Vector3 extends Vec3{
            constructor(x, y, z){
                super([x, y, z]);
                this.x = x;
                this.y = y;
                this.z = z;
            }
            set(x, y, z){
                this.x = x;
                this.y = y;
                this.z = z;
                return this;
            }
        }
        ```

??? note "继承于[](Vec3)的[RGBColor](class)（只修改构造函数 新增[set](method)）"

    === "Javascript"

        ```javascript
        class RGBColor extends Vec3{
            constructor(r, g, b){
                super([r, g, b]);
                this.r = r;
                this.g = g;
                this.b = b;
            }
            set(r, g, b){
                this.x = r;
                this.y = g;
                this.z = b;
                return this;
            }
            get x() {
                return this.r;
            }
            get y() {
                return this.g;
            }
            get z() {
                return this.b;
            }
            set x(value) {
                this.r = value;
            }
            set y(value) {
                this.g = value;
            }
            set z(value) {
                this.b = value;
            }
        }
        ```

[^1]: 根据实际测试推出，以下是推出过程：  
    我们尝试使用构造函数创建一个[](Vec3)，但不填写任何参数

    ```javascript
    new Vec3()
    ```
    会得到以下报错：
    ```
    TypeError: Cannot set properties of undefined (setting '0')
    ```
    那么就可以判断，[](Vec3)的构造函数需要填写一个数组  
    再经过以下代码测试，即可证明构造函数参数是一个长度为`#!javascript 3`的数组，数组的成员分别是[x](accessor) / [r](accessor)、[y](accessor) / [g](accessor)、[z](accessor) / [b](accessor)的值

    ```javascript
    let node = UiBox.create();
    node.backgroundColor.copy(new Vec3([255, 255, 0]));
    node.parent = ui;
    ```

[^2]: 暂时无法获取其实际参数名，暂时以[v](hiddenArg)代替