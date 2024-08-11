与<def>Box3EntityEvent</def> / <def>GameEntityEvent</def>类似，但是确保其中的<property>entity</property>一定是玩家实体。

[](Box3PlayerEntityEvent) / [](GamePlayerEntityEvent) = [](Box3EntityEvent) / [](GameEntityEvent) & {[entity](property): [](Box3PlayerEntity) / [](GamePlayerEntity)}


## 事件参数

<property>tick</property> : <def>number</def>
: 事件发生的时间

<property>entity</property> : <def>Box3PlayerEntity</def> / <def>GamePlayerEntity</def>
: 创建/销毁的实体

## 示例
```javascript
world.onPlayerJoin((entityEvent) => {
  // entityEvent.entity
  // entityEvent.tick
});
```