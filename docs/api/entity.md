# [](Box3Entity) / [](GameEntity)

<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

: [查阅官方文档](https://box3.yuque.com/org-wiki-box3-ev7rl4/guide/aqkg27coplqk183f)  
  [查阅官方文档（Arena）](https://box3.yuque.com/staff-khn556/wupvz3/kgrabhf749axn65y)  
  [查阅社区文档（Arena）](https://www.yuque.com/box3lab/api/crnsxu2gtymwx013)


:   [](Box3Entity) / [](GameEntity)实体是Box3中的游戏对象，用于对物体、玩家等的控制。  
    [](Box3Entity) / [](GameEntity)无法（很难）被实例化，但可以通过其他方法获取其实例化对象

## 常用
[<property>id</property>](#id)  
[<property>mesh</property>](#mesh)  
[<property>position</property>](#position)  
[<property>collides</property>](#collides)
[<property>fixed</property>](#fixed)
[<property>gravity</property>](#gravity)  
[<property>friction</property>](#friction)

[<property></property>](#)
[<property></property>](#)
[<property></property>](#)
[<property></property>](#)
[<property></property>](#)

## 属性
### 基础
<span anchor="id">[id](property): [](string)</span>
:   实体名称，可重复

[destroyed](readonly): [](boolean)
:   实体是否已被销毁

    !!! note "说明"
        [destroyed](readonly)属性在此处表明只读，是因为该属性一般只读取不写入，销毁实体应使用[destroy](method)方法，尝试写入可能会发生意外结果[^1]

        [^1]: 未测试

<span anchor="position">[position](property): [](Box3Vector3) / [](GameVector3)</span>
:   实体的位置

### 外观
<span anchor="mesh">[mesh](property): [](string)</span>
:   实体的外形。格式为`#!javascript 'mesh/*.vb'`

    !!! info "玩家的该属性的值为`#!javascript ''`"
    !!! tip "提示"
        通过对玩家修改该属性，可以实现变形和骑乘效果  
        不过玩家本体仍会显示，可以修改玩家的[player](property).[invisible](property)为`#!javascript false`来解决玩家本体显示问题

    ??? example "示例"

        ```javascript
            // 实现玩家变形效果
            world.onPlayerJoin(({ entity }) => {
                entity.mesh = 'mesh/车.vb';
                entity.player.invisible = false; // 只显示车
            });
        ```

[meshOrientation](property): [](Box3Quaternion) / [](GameQuaternion)
:   实体的旋转角度

[meshScale](property): [](Box3Vector3) / [](GameVector3)
:   实体的缩放比例。其[x](property)、[y](property)、[z](property)为`#!javascript 1`时，一个像素点为一个方块大

[meshOffset](property): [](Box3Vector3) / [](GameVector3)
:   实体的位移

[meshColor](property): [](Box3RGBAColor) / [](GameRGBAColor)
:   实体的颜色，[r](property)、[g](property)、[b](property)、[a](property)的范围都是`#!javascript 0`~`#!javascript 1`

    !!! warning "注意是RGBA颜色"

[meshMetalness](property): [](number)
:   实体的金属感

[meshEmissive](property): [](number)
:   实体的发光度

[meshShininess](property): [](number)
:   实体的反光度

### 物理
<span anchor="collides">[collides](property): [](boolean) = `#!javascript true`</span>
:   实体是否可碰撞

!!! warning "该属性的默认值为`#!javascript true`，使用代码创建实体时应注意"

<span anchor="fixed">[fixed](property): [](boolean) = `#!javascript false`</span>
:   实体的位置是否固定不动

    !!! warning "该属性的默认值为`#!javascript false`，使用代码创建实体时应注意"
    ???+ info "一个很有意思的特性"
        众所周知，若该属性为`#!javascript false`，实体和方块重叠时实体会被弹开  
        但如果在有方块的地方创建一个[collides](property)为`#!javascript true`，[fixed](property)为`#!javascript false`，[gravity](property)为`#!javascript false`的实体（实体没有完全被方块包裹，一部分在空气中），且实体的速度为0，实体和方块可以在一个地方共存，除非受到外力或实体具有速度才会被弹开  
        若先创建实体，在放置方块之后修改实体速度为0有同样效果

    ???+ info "另一个很有意思的特性"
        众所周知，若该属性为`#!javascript false`，[collides](property)为`#!javascript true`，[gravity](property)为`#!javascript false`，实体速度为0，实体和方块重叠时会形成一种不稳定的共存状态  
        但如果实体完全被埋在方块里面（其中一个表面和方块表面重合），这时你从这个实体与方块外接触的表面推动这个实体，这个实体和方块有概率可以共存，实体有概率弹出来  
        若使用代码更改速度，可以使实体稳定的在方块内移动，除非移动到方块边界  
        若实体没有表面和方块外面接触，使用代码更改速度，也可以使实体稳定的在方块内移动，除非移动到方块边界

<span anchor="gravity">[gravity](property): [](boolean) = `#!javascript true`</span>
:   如果[fixed](property)为`#!javascript false`，则控制实体是否会因重力下落

    !!! warning "警告"
        该属性的默认值为`#!javascript true`，同时[fixed](property)的默认值为`#!javascript false`，使用代码创建实体时应注意，避免应未修改属性导致实体被方块和其他实体推动

[mass](property): [](number)
:   实体的质量（不是好坏那个质量）。数值越大，实体越重

<span anchor="friction">[friction](property): [](number) = `#!javascript 0`</span>
:   实体的摩擦系数，数值越大，摩擦力越大

    !!! warning "警告"
        该属性的默认值为`#!javascript 0`  
        也就是说，默认实体和方块/其他实体没有任何摩擦，实体不会因方块摩擦而减速，也不会被传送带推动，使用代码创建实体时应注意

[restitution](property): [](number) = `#!javascript 0`
:   实体的弹性，数值越大，弹性越大

[bounds](readonly): [](Box3Vector3) / [](GameVector3)
:   实体边界框的大小  
    无论OBB碰撞（仅Arena）是否开启，此处都是AABB碰撞箱计算结果

    !!! note "说明"
        [bounds](readonly)属性在此处表明只读，是因为该属性每帧都会重新计算，尝试写入可能什么也不会发生[^1]
    !!! info "提示"
        2024/7/20 经实际测试，需要将计算结果数乘`#!javascript 2`才是实际碰撞箱大小  
        举个例子，在地面上放一个长、宽、高都为4格的实体，其bounds的值为`#!javascript { x:2, y:2, z:2 }`

[velocity](property): [](Box3Vector3) / [](GameVector3)
:   实体的速度

[contactForce](property): [](Box3Vector3) / [](GameVector3)
:   实体受到的碰撞力（合力）

[entityContacts](property): [](Box3EntityContact)[] / [](GameEntityContact)[]
:   正在和玩家/实体发生碰撞的全部实体列表

[voxelContacts](property): [](Box3VoxelContact)[] / [](GameVoxelContact)[]
:   正在和玩家/实体发生碰撞的全部方块列表

[fluidContacts](property): [](Box3FluidContact)[] / [](GameFluidContact)[]
:   正在被玩家/实体触碰的全部液体方块列表

### 互动
[enableInteract](property): [](boolean) = `#!javascript false`
:   实体是否可互动

[interactRadius](property): [](number) = `#!javascript 16`
:   实体的可互动范围，默认值为16

[interactHint](property): [](string) = `#!javascript ""`
:   实体的互动提示

[interactColor](property): [](Box3RGBColor) / [](GameRGBColor)
:   实体的互动提示文字颜色

    !!! warning "注意是RGB颜色"

### 战斗相关
[enableDamage](property): [](boolean) = `#!javascript false`
:   实体是否可受到伤害  
    若为`#!javascript false`，实体不会显示血量条，也不会因[hurt](method)方法血量发生变化，触发[Box3DamageEvent](event) / [GameDamageEvent](event)和[Box3DieEvent](event) / [GameDieEvent]事件

    !!! warning "警告"
        该属性的默认值为`#!javascript false`，无论使用代码创建还是手动创建，玩家也是这样，创建实体时应注意

[hp](property): [](number) = `#!javascript 100`
:   实体的当前生命值

    !!! info "提示"
        这个属性可以大于[maxHp](property)，也可以小于0，但是显示上会溢出
    !!! info "提示"
        这个属性一旦与[maxHp](property)的值不同，血条就会显示，无论大于还是小于
    !!! warning "警告"
        直接修改属性不会触发受伤/死亡/复活（如果实体为玩家）事件

[maxHp](property): [](number) = `#!javascript 100`
:   实体的最大生命值

    !!! info "提示"
        这个属性并不会更改实体的血条显示长度

[showHealthBar](property): [](boolean) = `#!javascript true`
:   实体是否显示血量条

    !!! bug "疑似无效"
        2024/7/21测试，血条的是否显示和该属性无关，该属性无效

### 粒子效果
[particleRate](property): [](number) = `#!javascript 0`
:   实体平均每秒产生粒子的数量

    !!! tip "如果希望实体停止释放粒子，可以将该属性改为`#!javascript 0`"

[particleRateSpread](property): [](number) = `#!javascript 0`
:   增加实体每秒产生粒子数量的随机性  
    如果设定了该属性的值，实体每一秒产生粒子的数量将不再是个固定值，而是从区间$[$[particleRate](property), [particleRate](property) $+$ [particleRateSpread](property)$)$里随机选取的一个整数。  
    例如，假设 [particleRate](property)为`#!javascript 0`，[particleRateSpread](property)为`#!javascript 3`，每秒产生的粒子数量是$[0, 0+3)$ ，即$[0, 3)$区间里的一个随机 **整数**，也就是可能为$0$、$1$，或$2$

    ???+ question "$[,]$、$(,)$、$[,)$、$(,]$"
        这是数学中用来表示范围的一种方法，中括号表示包括，小括号表示不包括  
        举几个例子，$[0, 10]$ 表示$0\le...\le10$这个区间  
        $[0, 10)$ 表示$0\le...<10$这个区间  
        $(0, 10]$ 表示$0<...\le10$这个区间  
        $(0, 10)$ 表示$0<...<10$这个区间

[particleLimit](property): [](number) = `#!javascript 100`
:   实体可产生的粒子总数的上限

[particleLifetime](property): [](number) = `#!javascript 10`
:   粒子的存活时间，以 **秒** 为单位

[particleLifetimeSpread](property): [](number) = `#!javascript 0`
:   增加实体所产生粒子存活时间的随机性
    如果设定了该属性的值，粒子的存活时间将不再是固定值，而是区间 $[$[particleLifetime](property), [particleLifetime](property) $+$ [particleLifetimeSpread](property)$)$ 里的一个随机数，**可能为小数**  
    例如，假设 [particleLifetime](property)为`#!javascript 10`，[particleLifetimeSpread](property)为`#!javascript 5`，粒子的存活时间是$[10, 10+5)$ ，即$[10, 15)$区间里的一个随机数，也就是可能为$10$、$11$、$12$、$13$，或$14$

[particleSize](property): [](number)[] = `#!javascript [1, 1, 1, 1, 1]`
:   粒子的大小  
    该属性的值是一个长度为0 **至** 5的数组，分别对应粒子从产生到消失的五个阶段，第一个阶段为产生时的大小，第五个阶段为消失时的大小  
    若数组的长度小于5，则数组剩余部分对应的阶段粒子会显示为最小大小（可见，不是0）  
    若数组中填入了转换[](number)类型为[](NaN)的值，对应阶段粒子也会会显示为最小大小  
    数组多余部分无效

[particleSizeSpread](property): [](number)
:   增加实体所产生粒子大小的随机性  
    如果设定了该属性，但没设定 [particleSize](property) 的值，每产生一个粒子，会从区间$[0,$ [particleSizeSpread](property)$)$里选取的一个随机数作为它的大小  
    如果同时设定了 [particleSize](property) 和 [particleSizeSpread](property) 两个属性，每产生一个粒子，从区间$[0,$ [particleSizeSpread](property)$)$里选取一个随机数[x](variable)，这个粒子第[i](variable)个阶段的大小将为[particleSize](property)[[i](variable)]$+$[x](variable)

[particleColor](property): [](Box3RGBColor)[] / [](GameRGBColor)[] = `#!javascript [ new Box3RGBColor(1, 1, 1), new Box3RGBColor(1, 1, 1), new Box3RGBColor(1, 1, 1), new Box3RGBColor(1, 1, 1), new Box3RGBColor(1, 1, 1) ]` / `#!javascript [ new GameRGBColor(1, 1, 1), new GameRGBColor(1, 1, 1), new GameRGBColor(1, 1, 1), new GameRGBColor(1, 1, 1), new GameRGBColor(1, 1, 1) ]`
:   粒子颜色  
    该属性的值是一个长度为0 **至** 5的数组，分别对应粒子从产生到消失的五个阶段，第一个阶段为产生时的颜色，第五个阶段为消失时的颜色。粒子在阶段之间颜色会平滑地过渡  
    若数组的长度小于5，则数组剩余部分对应的阶段粒子会显示为白色  
    若数组中填入了非[](Box3RGBColor) / [](GameRGBColor)类型的值，对应阶段粒子也会会显示为白色，同时控制台会报错刷屏  
    数组多余部分无效

    !!! bug

        若将颜色设为白色（`#!javascript new Box3RGBColor(1, 1, 1)` / `#!javascript new GameRGBColor(1, 1, 1)`），实际颜色只有<span style="background: #d7d7d7;">#D7D7D7</span>

[particleVelocity](property): [](Box3Vector3) / [](GameVector3)
:   该实体产生的所有粒子的初始速度

[particleVelocitySpread](property): [](Box3Vector3) / [](GameVector3)
:   增加该实体产生的所有粒子初始速度的不确定性
    ??? example "示例"
        === "旧版编辑器"

            ```javascript
            // 蓄力发射
            world.onPlayerJoin(({ entity }) => {
                Object.assign(entity, {
                    particleRate: 100,
                    particleSize: [2, 2, 2, 2, 10],
                    particleLifetime: 2,
                    particleVelocity: new Box3Vector3(0, 0, 50),
                    particleVelocitySpread: new Box3Vector3(30, 2, 2),
                });
            });
            ```
            ```javascript
            // 玩家向上播撒粒子
            world.onPlayerJoin(({ entity }) => {
                entity.particleRate = 100;
                entity.particleLifetime = 30;
                entity.particleSize = [1, 2, 3, 4, 5]
                entity.particleVelocity.set(0, 1, 0);
                entity.particleVelocitySpread.set(5, 0, 5);
            });
            ```

        === "Arena 编辑器"

            ```javascript
            // 从玩家的位置扇形发射粒子
            world.onPlayerJoin(({ entity }) => {
                Object.assign(entity, {
                    particleRate: 100,
                    particleSize: [2, 2, 2, 2, 10],
                    particleLifetime: 2,
                    particleVelocity: new GameVector3(0, 0, 50),
                    particleVelocitySpread: new GameVector3(30, 2, 2),
                });
            });
            ```
            ```javascript
            // 玩家向上播撒粒子
            world.onPlayerJoin(({ entity }) => {
                entity.particleRate = 100;
                entity.particleLifetime = 30;
                entity.particleSize = [1, 2, 3, 4, 5]
                entity.particleVelocity.set(0, 1, 0);
                entity.particleVelocitySpread.set(5, 0, 5);
            });
            ```

[particleDamping](property): [](number)
:   - 如果该属性的值为正数，会短暂减少该实体所产生粒子的初始速度，数值越大，减少初始速度的效果持续得越久
    - 如果为负值，会短暂增加粒子的初始速度，数值越小，增加初始速度的效果越明显

    ??? example "示例"
        === "旧版编辑器"
            ```javascript
            // 蓄力发射
            world.onPlayerJoin(({ entity }) => {
                Object.assign(entity, {
                    particleRate: 100,
                    particleSize: [2, 2, 2, 2, 10],
                    particleLifetime: 2,
                    particleVelocity: new Box3Vector3(0, 0, 50),
                    particleVelocitySpread: new Box3Vector3(30, 2, 2),
                    particleDamping: 3,
                });
            });
            ```

        === "Arena 编辑器"
            ```javascript
            // 蓄力发射
            world.onPlayerJoin(({ entity }) => {
                Object.assign(entity, {
                    particleRate: 100,
                    particleSize: [2, 2, 2, 2, 10],
                    particleLifetime: 2,
                    particleVelocity: new GameVector3(0, 0, 50),
                    particleVelocitySpread: new GameVector3(30, 2, 2),
                    particleDamping: 3,
                });
            });
            ```

[particleAcceleration](property): [](Box3Vector3) / [](GameVector3)
:   粒子的加速度

    ??? quote "加速度"
        加速度是用于描述物体速度变化快慢的物理量  
        一般用字母$a$表示，公式为$v=v_0+at$，其中$v_0$是初始速度，$v$是瞬时速度，$t$为时间

    ??? example "示例"

    ```javascript
    // 玩家牌喷泉
    world.onPlayerJoin(({ entity }) => {
        entity.particleRate = 300;
        entity.particleLimit = 1000;
        entity.particleLifetime = 1.8;
        entity.particleDamping = -1;
        entity.particleSize = [1, 2, 4, 4, 4];
        entity.particleColor[0].set(1, 1, 1);
        entity.particleColor[1].set(0.5, 0.5, 1);
        entity.particleColor[2].set(0.1, 0.1, 1);
        entity.particleColor[3].set(0, 0, 1);
        entity.particleColor[4].set(0, 0, 1);
        entity.particleVelocity.set(0, 9, 0);
        entity.particleVelocitySpread.set(5, 1, 5);
        entity.particleAcceleration.set(0, -10, 0);
    });
    ```

[particleNoise](property): [](number)
:   粒子扰动幅度，数值越大，各个粒子的运动相对原有方向的偏离越明显

[particleNoiseFrequency](property): [](number)
:   粒子扰动频率，数值越大，各个粒子的运动方向越没有规律

### 声音
[chatSound](property): [](Box3SoundEffect) / [](GameSoundEffect)
:   实体说话时，播放的音效  
    [chatSound](property).[sample](property)默认为`#!javascript 'audio/chat.mp3'`

[hurtSound](property): [](Box3SoundEffect) / [](GameSoundEffect)
:   实体触发受伤事件时，播放的音效  
    [hurtSound](property).[sample](property)默认为`#!javascript 'audio/hurt.mp3'`

[dieSound](property): [](Box3SoundEffect) / [](GameSoundEffect)
:   实体触发死亡事件时，播放的音效  
    [dieSound](property).[sample](property)默认为`#!javascript 'audio/die.mp3'`

[interactSound](property): [](Box3SoundEffect) / [](GameSoundEffect)
:   实体进行互动时，播放的音效  
    [interactSound](property).[sample](property)默认为`#!javascript ''`

## 方法
!!! bug "内容缺失"
    API文档内容繁多，有一些内容还未完工。  
    如果你愿意为此贡献一份力量，请[加入我们](/about)
    
### 基础
[destroy](method)(): [](string)[]
:   销毁该实体

[tags](method)(): [](string)[]
:   获取实体的所有标签

[addTag](method)([tag](arg): [](string)): [](void)
:   给实体添加标签

[hasTag](method)([tag](arg): [](string)): [](boolean)
:   检查实体是否有某个标签

[removeTag](method)([tag](arg): [](string)): [](void)
:   给实体移除某个标签

### 外观
[lookAt](method)([targetPosition](arg): [](GameVector3), [meshFacing](arg)?: `#!javascript "X"` | `#!javascript "Y"` | `#!javascript "Z"`, [up](arg)?: [](GameVector3))
:   将实体旋转至面向指定位置的方向

    !!! info "该方法仅在Arena 编辑器中使用"
    !!! info "提示"
        通过此方法进行的旋转会瞬时发生，仅影响实体的朝向，不会影响实体的运动状态。

    | 参数 | 类型 | 说明 |
    | :- | :- | :- |
    | [targetPosition](arg) | [](GameVector3) | 世界坐标，希望让实体朝向的位置 |
    | [meshFacing](arg) | `#!javascript "X"` \| `#!javascript "Y"` \| `#!javascript "Z"` | 定义模型在未旋转状态下的正方向<br>处理模型设计时未朝向Z轴时的情况：<br>当取X、Z时，定义模型的正方向分别为X、Z轴正方向，上方向为 Y 轴正方向<br>当取Y时，定义模型的正方向为Y轴正方向，上方向为Z轴正方向<br>默认值为Z，即模型设计时朝向Z轴正方向 |
    | [up](arg) | [](GameVector3) | 上向量，默认取 Y 轴正方向 |

## 事件
!!! bug "内容缺失"
    API文档内容繁多，有一些内容还未完工。  
    如果你愿意为此贡献一份力量，请[加入我们](/about)