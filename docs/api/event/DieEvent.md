Box3 中当实体死亡时触发的事件

die 本意为”死亡“，在此地表示实体死亡触发的事件。
实体死亡在 Box3 中表示为物体的 <property>hp</property> 降低为 0。

触发方法由[Box3World.onDie]()和[Box3Entity.onDie]()组成

!!! warning "警告"
    若直接修改<property>hp</property>使实体死亡，事件不会触发

???+ bug

    经2024/7/26在Arena编辑器测试，若实体在创建的同一tick内被击杀（测试环境下64ms内，不包括64ms），事件不会触发  
    同时若实体为玩家，`entity.player.dead`为false  
    对于玩家和非玩家实体，此Bug都存在  
    旧编辑器未知

    ```javascript
    world.onTakeDamage(({ entity, damage }) => {                        // 能正常触发
        console.log(entity.id, '受到了', damage, '点伤害');
    });
    world.onDie(({ entity }) => {                                       // 事件不会触发，因为实体创建和击杀在同一tick内
        console.log(entity.id, '死亡');
        if(entity.isPlayer)
            console.log(entity.player.name, 'dead', entity.player.dead) // entity.player.dead为false
    });
    world.onRespawn(({ entity }) => {                                   // 能正常触发
        console.log(entity.id, '复活');
        if(entity.isPlayer)
            console.log(entity.player.name, 'dead', entity.player.dead) // entity.player.dead为false，因为玩家已经复活
    });
    world.onPlayerJoin(async ({ entity }) => {
        entity.id = entity.player.name;
        entity.enableDamage = true;
        await sleep(63);
        entity.hurt(1000);
        await sleep(1e3);
        entity.player.forceRespawn();
    });
    ```
    ```javascript
    world.onTakeDamage(({ entity, damage }) => {                        // 能正常触发
        console.log(entity.id, '受到了', damage, '点伤害');
    });
    world.onDie(({ entity }) => {                                       // 事件会触发，因为实体创建和击杀不在同一tick内
        console.log(entity.id, '死亡');
        if(entity.isPlayer)
            console.log(entity.player.name, 'dead', entity.player.dead) // entity.player.dead为true
    });
    world.onRespawn(({ entity }) => {                                   // 能正常触发
        console.log(entity.id, '复活');
        if(entity.isPlayer)
            console.log(entity.player.name, 'dead', entity.player.dead) // entity.player.dead为false，因为玩家已经复活
    });
    world.onPlayerJoin(async ({ entity }) => {
        entity.id = entity.player.name;
        entity.enableDamage = true;
        await sleep(64);                                                // 这里变成了64ms，而一个tick正好是64ms，测试的地图没有发现延迟
        entity.hurt(1000);
        await sleep(1e3);
        entity.player.forceRespawn();
    });
    ```

## 事件参数

<property>tick</property> : <def>number</def>
: 事件发生的时间

<property>entity</property> : <def>Box3Entity</def>
: 死亡的实体

<property>attacker</property> : <def>Box3Entity</def>|<def>null</def>
: 如果为 `null` 则说明没有击杀者实体，反之返回击杀者的 `Box3Entity` 对象

<property>damageType</property> : <def>string</def>
: 伤害的类型
