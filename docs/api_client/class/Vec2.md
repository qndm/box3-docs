<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个客户端API"

    该API仅在客户端脚本使用

:   [查阅官方文档](https://box3.yuque.com/staff-khn556/wupvz3/vv1zxhkweqnlofme)  
    [查阅社区文档](https://www.yuque.com/box3lab/api/skm8ig6f8yx0g0zm)

:   二维向量<span class="hidden">严重阉割版</span>

## 构造函数
[Vec2](hiddenConstructor)([v](hiddenArg)[^2]: [](number)[]): [](Vec2)[^1]
:   创建一个二维向量

    | 参数 | 类型 | 说明 |
    | - | - | - |
    | [v](hiddenArg) | [](number)[] | 一个长度为`#!javascript 2`的数组，数组的成员分别是[x](accessor)、[y](accessor)的值 |

    ??? example "示例"

        ```javascript
        new Vec2([1, 2]);
        new Vec2([255, 255]);
        new Vec2([255, 0]);
        ```

## 属性
[x](accessor): [](number)
:   二维向量x值

[y](accessor): [](number)
:   二维向量y值

## 方法
<span class="hidden">反人类，不给set方法</span>

[copy](method)([val](arg): [](Vec2)): [](void)
:   把[val](arg)的值复制到这个二维向量中

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

[create](staticMethod)([val](arg)?: [](Vec2)): [](Vec2)
:   创建一个二维向量

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
??? note "[S-C-Link_client](https://github.com/qndm/EasyBox3Lib)中重写的[Vector2](class)"

    使用和[](Box3Vector3) / [](GameVector3)类似

    ```javascript
    /**
     * 二维向量
     */
    class Vector2 {
        x = 0;
        y = 0;
        /**
         * 定义一个二维向量
         * @param {number} x 二维向量`x`的值（水平方向）
         * @param {number} y 二维向量`y`的值（竖直方向）
         */
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        set(x, y) {
            this.x = x;
            this.y = y;
            return this;
        }
        clone() {
            return new Vector2(this.x, this.y);
        }
        copy(v) {
            this.x = v.x;
            this.y = v.y;
            return this;
        }
        add(v) {
            return new Vector2(this.x + v.x, this.y / v.y);
        }
        sub(v) {
            return new Vector2(this.x - v.x, this.y - v.y);
        }
        mul(v) {
            return new Vector2(this.x * v.x, this.y * v.y);
        }
        div(v) {
            return new Vector2(this.x / v.x, this.y / v.y);
        }
        addEq(v) {
            this.x += v.x;
            this.y += v.y;
            return this;
        }
        subEq(v) {
            this.x -= v.x;
            this.y -= v.y;
            return this;
        }
        mulEq(v) {
            this.x *= v.x;
            this.y *= v.y;
            return this;
        }
        divEq(v) {
            this.x /= v.x;
            this.y /= v.y;
            return this;
        }
        pow(n) {
            return new Vector2(Math.pow(this.x, n), Math.pow(this.y, n));
        }
        distance(v) {
            return Math.sqrt(Math.pow(v.x - this.x, 2) + Math.pow(v.y - this.y, 2));
        }
        mag() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
        min(v) {
            return new Vector2(Math.min(this.x, v.x), Math.min(this.y, v.y));
        }
        max(v) {
            return new Vector2(Math.max(this.x, v.x), Math.max(this.y, v.y));
        }
        /**
         * 归一化函数
         * @returns {Vector2}
         */
        normalize() {
            let max = Math.max(this.x, this.y);
            return new Vector2(this.x / max, this.y / max);
        }
        scale(n) {
            return new Vector2(this.x * n, this.y * n);
        }
        toString() {
            return JSON.stringify(this);
        }
        towards(v) {
            return new Vector2(v.x - this.x, v.y - this.y);
        }
        equals(v, tolerance = 0.0001) {
            return Math.abs(v.x - this.x) <= tolerance && Math.abs(v.y - this.y) <= tolerance;
        }
        lerp(v) {
            return this.add(v).scale(0.5);
        }
        static fromVec2(v) {
            return new Vector2(v.x, v.y);
        }
        setVec2(vec2) {
            vec2.x = this.x;
            vec2.y = this.y;
        }
    }
    ```

??? note "继承于[](Vec2)的[Vector2](class)（只修改构造函数 新增[set](method)）"

    === "Javascript"

        ```javascript
        class Vector2 extends Vec2{
            constructor(x, y){
                super([x, y]);
                this.x = x;
                this.y = y;
            }
            set(x, y){
                this.x = x;
                this.y = y;
                return this;
            }
        }
        ```

[^1]: 根据实际测试推出，以下是推出过程：  
    我们尝试使用构造函数创建一个[](Vec2)，但不填写任何参数

    ```javascript
    new Vec2()
    ```
    会得到以下报错：
    ```
    TypeError: Cannot set properties of undefined (setting '0')
    ```
    那么就可以判断，[](Vec2)的构造函数需要填写一个数组  
    再经过以下代码测试，即可证明构造函数参数是一个长度为`#!javascript 2`的数组，数组的成员分别是[x](accessor)、[y](accessor)的值

    ```javascript
    let node = UiBox.create();
    node.size.offset.copy(new Vec2([255, 10]));
    node.parent = ui;
    ```

[^2]: 暂时无法获取其实际参数名，暂时以[v](hiddenArg)代替