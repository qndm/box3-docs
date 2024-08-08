<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

!!! info "[](console)并非Box3独有"

:   [查阅MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/console)

:   [](GameConsole)是Arena编辑器中向控制台输出信息的[类](class)  
    [](GameConsole)无法（很难）实例化，但有一个实例化的全局对象[](console)  
    在旧版编辑器中，[](console)只是一个单纯的对象，没有对应的类

## 方法
[clear](method)() => [](void)
:   清空控制台

[log](method): [](Box3LoggerMethod) / [](GameLoggerMethod)
:   向控制台中输出日志信息  
    在关闭代码编辑器时显示为<span class="coloredWord" style="background-color: #00fff2">青色</span>，打开代码编辑器时显示为<span class="coloredWord" style="background-color: #ffffff">白色</span>

[warn](method): [](Box3LoggerMethod) / [](GameLoggerMethod)
:   向控制台中输出警告信息  
    显示为<span class="coloredWord" style="background-color: #fc8308">橙色</span>

[error](method): [](Box3LoggerMethod) / [](GameLoggerMethod)
:   向控制台中输出错误信息  
    显示为<span class="coloredWord" style="background-color: #f44336">红色</span>

[debug](method)() => [](void)
:   向控制台中输出调试信息  
    在关闭代码编辑器时显示为<span class="coloredWord" style="background-color: #00fff2">青色</span>，打开代码编辑器时显示为<span class="coloredWord" style="background-color: #ffffff">白色</span>

[assert](method)([assertion](arg): [](boolean), ...[args](arg)) => [](void)
:   断言  
    若[assertion](arg)为`#!javascript false`，则向控制台输出错误信息

[dir](method)() => [](void)  
[dirxml](method)() => [](void)  
[group](method)() => [](void)  
[groupCollapsed](method)() => [](void)  
[groupEnd](method)() => [](void)  
[table](method)() => [](void)  
[time](method)() => [](void)  
[timeEnd](method)() => [](void)  
[timeLog](method)() => [](void)  
[timeStamp](method)() => [](void)  
[trace](method)() => [](void)

:   !!! info "Arena独有"
        这些方法仅在Arena编辑器中使用

    !!! failure "无效方法"
        这些方法调用并不会发生任何事情

