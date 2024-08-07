<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

:   [查阅官方文档](https://box3.yuque.com/org-wiki-box3-ev7rl4/guide/ogusmt37bz9yr8fw#Wc7bX)  
    [查阅官方文档（Arena）](https://box3.yuque.com/staff-khn556/wupvz3/extmobyyfsaec26x#Wc7bX)  
    [查阅社区文档（Arena）](https://www.yuque.com/box3lab/api/vyz9axw1n5g8smti#Oby5f)

:   对话框参数  
    [](Box3TextDialogParams) / [](GameTextDialogParams)、[](Box3SelectDialogParams) / [](GameSelectDialogParams)、[](Box3InputDialogParams) / [](GameInputDialogParams)和[](Box3DialogParams) / [](GameDialogParams)相差不远，故在同一页面展示

[type](property): [](Box3DialogType) / [](GameDialogType)
:   必填，对话框内容

[title](property)?: [](string)
:   对话框标题，不能换行  
    若不填，对话框不会显示标题和标题背景

[content](property): [](string)
:   必填，对话框内容，可以使用`#!javascript '\n'`换行

[titleBackgroundColor](property)?: [](Box3RGBAColor) / [](GameRGBAColor)
:   对话框标题背景颜色

[titleTextColor](property)?: [](Box3RGBAColor) / [](GameRGBAColor)
:   对话框标题文字颜色

[contentBackgroundColor](property)?: [](Box3RGBAColor) / [](GameRGBAColor)
:   对话框内容背景颜色

[contentTextColor](property)?: [](Box3RGBAColor) / [](GameRGBAColor)
:   对话框内容文字颜色

[lookTarget](property)?: [](Box3Entity) / [](GameEntity) | [](Box3Vector3) / [](GameVector3)
:   打开对话框时，玩家摄像机注视的实体/位置  
    其优先级非常高，会暂时覆盖玩家的[cameraEntity](property)属性

[lookTargetOffset](property)?: [](Box3Vector3) / [](GameVector3)
:   打开对话框时，玩家摄像机注视的实体/位置的偏移  
    其优先级非常高，会暂时覆盖玩家的[cameraEntity](property)属性

[lookUp](property)?: [](Box3Entity) / [](GameEntity) | [](Box3Vector3) / [](GameVector3)
:   打开对话框时，玩家摄像机镜头向上的矢量  
    其优先级非常高，会暂时覆盖玩家的[cameraUp](property)属性

[lookEye](property)?: [](Box3Entity) / [](GameEntity) | [](Box3Vector3) / [](GameVector3)
:   打开对话框时，玩家摄像机位置  
    其优先级非常高，会暂时覆盖玩家的[cameraPosition](property)属性

[lookEyeOffset](property)?: [](Box3Vector3) / [](GameVector3)
:   打开对话框时，玩家摄像机位置偏移  
    其优先级非常高，会暂时覆盖玩家的[cameraPosition](property)属性

[hasArrow](property)?: [](boolean)
:   是否显示对话框箭头

    !!! info "仅限文本对话框使用"

[options](property)?: [](string)[]
:   选择对话框选项

    !!! info "仅限选择对话框使用"

[placeholder](property)?: [](string) = `#!javascript "请输入"`
:   输入对话框未输入内容时，显示的提示文字

    !!! info "仅限输入对话框使用"

[confirmText](property)?: [](string) = `#!javascript "确认"`
:   输入对话框确认按钮显示文字

    !!! info "仅限输入对话框使用"