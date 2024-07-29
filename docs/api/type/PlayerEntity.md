<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

: [似乎官方没有文档]()  
  [似乎社区没有文档]()


[](Box3PlayerEntity) = [](Box3Entity) & {[player](property): [](Box3Player), [isPlayer](property): `#!javascript true`}  
[](GamePlayerEntity) = [](GameEntity) & {[player](property): [](GamePlayer), [isPlayer](property): `#!javascript true`}
:   [](Box3PlayerEntity) / [](GamePlayerEntity)是一类特殊的[](Box3Entity) / [](GameEntity)，代表为玩家的实体