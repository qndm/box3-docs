<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

!!! info "Arena独有"
    该API仅在Arena编辑器使用

:   [](GameGUI)是在 **服务端** 控制客户端GUI的[类](class)  
    [](GameGUI)无法（很难）被实例化，但在全局存在一个单例对象[](gui)

!!! bug "内容缺失"

    API文档内容繁多，有一些页面还未完工。  
    如果你愿意为此贡献一份力量，请[加入我们](/about)

    [似乎官方没有文档](){.md-button}
    [似乎社区没有文档](){.md-button}


## 属性
> !p @proOnly ui: InstanceType< any>[`#!javascript 'ui'`]

## 方法
> !p init#method< T#type extends string, U#type extends T#type>(entity: GamePlayerEntity, config: GUIConfig< T#type, U#type>): Promise< void>

> !p show(entity: GamePlayerEntity, name: string, allowMultiple?: boolean): Promise< void>

> !p remove(entity: GamePlayerEntity, selector: string): Promise< void>

> !p getAttribute(entity: GamePlayerEntity, selector: string, name: string): Promise< any>

> !p setAttribute(entity: GamePlayerEntity, selector: string, name: string, value: any): Promise< void>

> !p onMessage(listener: GameGUIEventListener): void
