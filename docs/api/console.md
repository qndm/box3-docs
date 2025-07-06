!!! info "<docs-def>console</docs-def>并非Box3独有"

[查阅MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/console)

<docs-def>GameConsole</docs-def>是Arena编辑器中向控制台输出信息的类，且无法（很难）实例化
<docs-def>console</docs-def>只是一个单纯的对象，没有对应的类

:   以下内容针对<docs-def>console</docs-def>编写

## 方法
> !p clear: LoggerMethod

:   清空控制台

> !p log: LoggerMethod

:   向控制台中输出日志信息  
    在关闭代码编辑器时显示为<span class="coloredWord" style="background-color: #00fff2">青色</span>，打开代码编辑器时显示为<span class="coloredWord" style="background-color: #ffffff">白色</span>

> !p warn: LoggerMethod

:   向控制台中输出警告信息  
    显示为<span class="coloredWord" style="background-color: #fc8308">橙色</span>

> !p error: LoggerMethod

:   向控制台中输出错误信息  
    显示为<span class="coloredWord" style="background-color: #f44336">红色</span>

> !p debug: LoggerMethod

:   向控制台中输出调试信息  
    在关闭代码编辑器时显示为<span class="coloredWord" style="background-color: #00fff2">青色</span>，打开代码编辑器时显示为<span class="coloredWord" style="background-color: #ffffff">白色</span>

> !p assert(assertion: any, ...args: any[]): void

:   断言  
    若<docs-icon icon="arg">assertion</docs-icon>为`#!javascript false`，则向控制台输出错误信息
