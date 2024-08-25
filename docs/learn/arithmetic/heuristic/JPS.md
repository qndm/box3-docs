<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

## 概念
JPS（Jump Point Search）搜索算法是[A*](./aStar.md)算法的改进版本  
相对于A*算法评估所有节点，JPS只会评估跳点，大幅减少了需要评估的节点

!!! bug "内容缺失"

    由于算法内容过于抽象，暂时没有更详细的讲解  
    可以先看看这个视频<https://www.bilibili.com/video/BV18z421i7s8>

## 具体使用
下面为在Box3环境中，实体使用JPS算法实现自动寻路的代码  
不考虑其他实体体积和碰撞，位置皆按照整格来计算  

!!! bug "内容缺失"

    由于编者还没研究出来，所以先不写了