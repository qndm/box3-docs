---
hide:
  - toc
---

!!! note "关于翻译"

    方块速查表中的`翻译/描述`栏使用[Crowdin](https://zh.crowdin.com/project/box3-voxels-table)进行翻译  
    若想提交翻译或对现有翻译进行投票，请在Crowdin中提交/投票

    <span class="hidden">由于还没调试好，现在只能手动更新翻译文件</span>

!!! info "提示"

    <span class="light">发光</span>表示该种方块可以发光（暂时不能体现光源颜色）  
    <span class="fluidText">蓝色下划线</span>表示该种方块为液体方块（暂时不能体现液体颜色）  
    <span class="animationText">左右边框</span>表示该种方块为动态方块  
    若单元格左侧有绿色边框，代表该种方块为新增方块[^1]  
    名称和id鼠标右键/触屏长按可复制其内容

!!! tip "提示"

    要是棋盘方块的描述看不懂，可以把描述里的制表符叠加起来看

<button title="要是方块速查表没有加载，请点击此按钮" class="md-button" id="refresh">强制加载</button>

<div id="voxelTable"></div>

[^1]: 其判定方法为，用户上次查看文档时文档未收录的方块

<script src="../../_assets/voxelTable/main.mjs" type="module"></script>
