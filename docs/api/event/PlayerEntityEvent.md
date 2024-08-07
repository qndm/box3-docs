与<def>Box3EntityEvent</def> / <def>GameEntityEvent</def>类似，但是确保其中的<property>entity</property>一定是玩家实体。

[](Box3PlayerEntityEvent) / [](GamePlayerEntityEvent) = [](Box3EntityEvent) / [](GameEntityEvent) & {[entity](property): [](Box3PlayerEntity) / [](GamePlayerEntity)}


```javascript
world.onPlayerJoin((entityEvent) => {
  // entityEvent.entity
  // entityEvent.tick
});
```