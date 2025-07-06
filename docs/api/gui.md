:   <docs-def>GameGUI</docs-def>是在 **服务端** 控制客户端GUI的[类](class)  
    <docs-def>GameGUI</docs-def>无法（很难）被实例化，但在全局存在一个单例对象<docs-def>gui</docs-def>

!!! bug "内容缺失"

    API文档内容繁多，有一些页面还未完工。  
    如果你愿意为此贡献一份力量，请[加入我们](/about)

## 属性
> !p @proOnly ui: InstanceType< any>[`#!javascript 'ui'`]

## 方法
> !p init#method< T#type extends string, U#type extends T#type>(entity: GamePlayerEntity, config: GUIConfig< T#type, U#type>): Promise< void>

> !p show(entity: GamePlayerEntity, name: string, allowMultiple?: boolean): Promise< void>

> !p remove(entity: GamePlayerEntity, selector: string): Promise< void>

> !p getAttribute(entity: GamePlayerEntity, selector: string, name: string): Promise< any>

> !p setAttribute(entity: GamePlayerEntity, selector: string, name: string, value: any): Promise< void>

> !p onMessage(listener: GameGUIEventListener): void
