<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

[查阅MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)

:   未定义类型，和[](null)类似，代表属性没有定义  
    在对象中，若尝试访问没有定义的属性，返回[](undefined)  
    在Javascript中，返回值为[](void)类型（`#!javascript return;`）的函数，实际上返回的是[](undefined)

!!! question "[](null)和[](undefined)"

    [](null)常用于变量中，例：

    ```javascript
    let a = null;
    ```
    而[](undefined)常用于对象属性中，例：

    ```javascript
    let obj = {};
    console.log(obj.a); // undefined
    ```