对话框参数  
<docs-def>Box3TextDialogParams</docs-def> / <docs-def>GameTextDialogParams</docs-def>、<docs-def>Box3SelectDialogParams</docs-def> / <docs-def>GameSelectDialogParams</docs-def>、<docs-def>Box3InputDialogParams</docs-def> / <docs-def>GameInputDialogParams</docs-def>和<docs-def>Box3DialogParams</docs-def> / <docs-def>GameDialogParams</docs-def>相差不远，故在同一页面展示

## 共有

> !p type: DialogType

:   必填，对话框内容

> !p title?: string

:   对话框标题，不能换行  
    若不填，对话框不会显示标题和标题背景

> !p content: string

:   必填，对话框内容，可以使用`#!javascript '\n'`换行

> !p titleBackgroundColor: RGBAColor

:   对话框标题背景颜色

> !p titleTextColor: RGBAColor

:   对话框标题文字颜色

> !p contentBackgroundColor: RGBAColor

:   对话框内容背景颜色

> !p contentTextColor: RGBAColor

:   对话框内容文字颜色

> !p lookTarget?: Vector3 | Entity

:   打开对话框时，玩家摄像机注视的实体/位置  
    会暂时覆盖玩家的<docs-icon icon="property">cameraEntity</docs-icon>属性

> !p lookTargetOffset: Vector3

:   打开对话框时，玩家摄像机注视的实体/位置的偏移  
    其优先级非常高，会暂时覆盖玩家的<docs-icon icon="property">cameraEntity</docs-icon>属性

> !p lookUp: Vector3

:   打开对话框时，玩家摄像机镜头向上的矢量  
    其优先级非常高，会暂时覆盖玩家的<docs-icon icon="property">cameraUp</docs-icon>属性

> !p lookEye?: Vector3 | Entity

:   打开对话框时，玩家摄像机位置  
    其优先级非常高，会暂时覆盖玩家的<docs-icon icon="property">cameraPosition</docs-icon>属性

> !p lookEyeOffset: Vector3

:   打开对话框时，玩家摄像机位置偏移  
    其优先级非常高，会暂时覆盖玩家的<docs-icon icon="property">cameraPosition</docs-icon>属性

## 仅<docs-def>Box3TextDialogParams</docs-def> / <docs-def>GameTextDialogParams</docs-def>

> !p hasArrow: boolean

:   是否显示对话框箭头


## 仅<docs-def>Box3SelectDialogParams</docs-def> / <docs-def>GameSelectDialogParams</docs-def>

> !p options?: string[]

:   选择对话框选项


## 仅<docs-def>Box3InputDialogParams</docs-def> / <docs-def>GameInputDialogParams</docs-def>

> !p placeholder?: string = `#!javascript "请输入"`

:   输入对话框未输入内容时，显示的提示文字

> !p confirmText?: string = `#!javascript "确认"`

:   输入对话框确认按钮显示文字
