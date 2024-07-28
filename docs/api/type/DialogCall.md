<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

: [查阅官方文档](https://box3.yuque.com/org-wiki-box3-ev7rl4/guide/fhg88pn0tr2yo54n)  
  [查阅官方文档（Arena）](https://box3.yuque.com/staff-khn556/wupvz3/extmobyyfsaec26x)  
  [查阅社区文档（Arena）](https://www.yuque.com/box3lab/api/vyz9axw1n5g8smti#Oby5f)

[](Box3Player).[dialog](method) / [](GamePlayer).[dialog](method)的类型  
似乎只是因为定义太复杂而单独列了出来（？）

=== "旧版编辑器"
    [](Box3DialogCall) = (  
        ([params](arg): [](Box3TextDialogParams)) => [](Promise)<[](string) | [](null)> & [](Box3DialogCancelOption) |  
        ([params](arg): [](Box3SelectDialogParams)) => [](Promise)<[](Box3DialogSelectResponse) | [](null)> & [](Box3DialogCancelOption) |  
        ([params](arg): [](Box3InputDialogParams)) => [](Promise)<[](string) | [](null)> & [](Box3DialogCancelOption)  
    )  

=== "Arena编辑器"
    [](GameDialogCall) = (  
        ([params](arg): [](GameTextDialogParams)) => [](Promise)<[](string) | [](null)> & [](GameDialogCancelOption) |  
        ([params](arg): [](GameSelectDialogParams)) => [](Promise)<[](GameDialogSelectResponse) | [](null)> & [][](GameDialogCancelOption) |  
        ([params](arg): [](GameInputDialogParams)) => [](Promise)<[](string) | [](null)> & [](GameDialogCancelOption)  
    )

!!! note "提示"

    看得头晕？没事，因为编者写的时候更头晕（定义过于复杂）

!!! bug "内容缺失"

    API文档内容繁多，有一些页面还未完工。

    如果你愿意为此贡献一份力量，请[加入我们](/about)

    [查阅官方文档](https://box3.yuque.com/org-wiki-box3-ev7rl4/guide/fhg88pn0tr2yo54n){.md-button}
    [查阅官方文档（Arena）](https://box3.yuque.com/staff-khn556/wupvz3/extmobyyfsaec26x){.md-button}
    [查阅社区文档（Arena）](https://www.yuque.com/box3lab/api/vyz9axw1n5g8smti#Oby5f){.md-button}
    [返回](javascript:history.back()){.md-button}

    （其实按理来说这个页面已经写完了）
