<docs-def>Box3World</docs-def> / <docs-def>GameWorld</docs-def>无法（很难）被实例化，但在全局存在一个单例对象<docs-def>world</docs-def>  
可以通过<docs-def>world</docs-def>对象控制环境天气、物理重力、画面滤镜等全局场景属性，还可以在世界中创建、搜索实体，或监听世界中实体和玩家的碰撞、伤害、互动等事件。

## 常用
- [<method>onTick</method>](#c1)
- [<method>onPlayerJoin</method>](#c2)
- [<method>querySelector</method>/<method>querySelectorAll</method>](#c3)
- [<method>onClick</method>](#c4)
- [<method>say</method>](#c5)

---

## 属性
### 基础
> !p projectName: string

:   项目的名称，对应 项目-编辑资料-地图名称。无法在代码中修改。

> !p url: URL

:   当前运行的世界的公共 URL

> !p currentTick: number

:   当前世界的时刻

> !p @proOnly serverId: string

:   当前服务器id


### 物理
> !p gravity: number

: 重力

> !p airFriction: number

: 空气阻力

> !p @proOnly useOBB: boolean

:   是否启用OBB碰撞  
    关于OBB碰撞，可以[查看此链接](https://box3.yuque.com/staff-khn556/wupvz3/obb)获取更多信息

    ??? quote "OBB 碰撞"
        OBB(Oriented Bounding Box)译为方向包围盒，与原本的AABB(Axis Aligned Bounding Box)轴对齐包围盒相比，物理模型新增了旋转属性，碰撞效果更加的精准。

    !!! warning "该功能仍在实验中"
        实验版仅支持400个100面以下的实体在静态场景下以60+FPS展示
    !!! danger "性能警告"
        启用OBB碰撞会造成更大的性能消耗，轻则掉帧、卡顿，重则卡死、崩溃，且也会影响到客户端，不建议在复杂的场景下使用  
        需要根据地图需要和玩家设备性能来考虑是否开启

### 天气 & 光照
#### 光照
> !p lightMode: `#!javascript 'natural'` | `#!javascript 'manual'`

:   世界光照模式，`#!javascript 'natural'`为自然模式，昼夜循环按照一定的规律进行。`#!javascript 'manual'`为手动模式，需要手动设置各个方向上的光。
光照模式不同，决定光照的属性也不同，你可以通过切换下面的选项卡来查看不同光照模式下的光照属性。

    === "`#!javascript 'natural'` 自然光照"

        > !p sunPhase: number

        : 太阳运行阶段，按照`#!javascript timeOfDay = (sunPhase + sunFrequency * tick) % 1`公式计算

        > !p sunFrequency: number

        : 太阳在天空中移动的频率。 数值越高=太阳运动越快

        > !p lunarPhase: number

        : 月亮的相位。 必须在 0 和 1 之间
    === "`#!javascript 'manual'` 手动光照"

        > !p sunDirection: Vector3

        : 太阳的方向

        > !p sunLight: RGBColor

        : 太阳的光照颜色

        > !p skyLeftLight: RGBColor  
          !p skyRightLight: RGBColor  
          !p skyBottomLight: RGBColor  
          !p skyTopLight: RGBColor  
          !p skyFrontLight: RGBColor  
          !p skyBackLight: RGBColor

        : 天空光照颜色依次在 `-x` `+x` `-y` `+y` `-z` `+z` 方向上的值

#### 雾
> !p fogColor: RGBColor

:   雾颜色

    !!! bug

        若将颜色设为白色（`#!javascript new Box3RGBColor(1, 1, 1)` / `#!javascript new GameRGBColor(1, 1, 1)` / <span style="background: #ffffff;" class="coloredWord">#FFFFFF</span>），实际颜色只有<span style="background: #a6b1b9;" class="coloredWord">#A6B1B9</span>（看地面）<span style="background: #a9b5be;" class="coloredWord">#A9B5BE</span>（看天空）  
        此问题曾向官方反馈，但未得到解决

> !p fogStartDistance: number

:   雾起始距离

> !p fogHeightOffset: number

:   雾起始高度

> !p fogHeightFalloff: number

:   雾高度衰减率

> !p fogUniformDensity: number

:   均匀雾量（如果>`#!javascript 0`，就不能看到天幕）

> !p maxFog: number

:   最大雾量

#### 雪
> !p snowDensity: number

:   雪密度。密度越大，雪花越多

> !p snowSizeLo: number

:   雪最小尺寸

> !p snowSizeHi: number

:   雪最大尺寸

> !p snowFallSpeed: number

:   雪下落速度

> !p snowSpinSpeed: number

:   雪自旋速度

> !p snowColor: RGBAColor

:   雪颜色。

> !p snowTexture: string

:   雪纹理，格式为`#!javascript 'snow/*.part'`

#### 雨
> !p rainDensity: number

:   雨密度。密度越大，雨滴越多

> !p rainDirection: Vector3

:   雨方向

> !p rainSpeed: number

:   雨速度

> !p rainSizeLo: number

:   雨点最小尺寸

> !p rainSizeHi: number

:   雨点最大尺寸

> !p rainInterference: number

:   雨扰流幅度

> !p rainColor: RGBAColor

:   雨颜色

### 声音
> !p breakVoxelSound: SoundEffect

:   方块破坏声音

> !p placeVoxelSound: SoundEffect

:   方块填充声音

> !p playerJoinSound: SoundEffect

:   玩家进入世界声音

> !p playerLeaveSound: SoundEffect

:   玩家离开世界声音

> !p ambientSound: SoundEffect

:   环境声音

---

## 方法
### 实体创建 & 销毁
> !p entityQuota(): number

:   返回世界当前允许创建的实体的剩余数量

> !p createEntity(config: Partial< EntityConfig>): Entity | null

:   创建一个新的[](Box3Entity) / [](GameEntity)或复制一个现有实体
如果超过了实体配额，则返回 [](null)

### 搜索
> !p querySelector(selector: SelectorString): Entity | null

:   通过选择器来查找一个实体，如果找不到，则会返回[](null)

> !p querySelectorAll(selector: SelectorString): Entity[]

:   与`querySelector`类似，但是可以查找所有符合选择器的实体，返回一个[](Box3Entity) / [](GameEntity)组成的数组。如果没有符合条件的实体，则返回空数组。

    !!! warning "使用误区"

        有人可能会写出这样的代码：
        ```javascript
        // index.js
        console.log(world.querySelectorAll('player').length)
        ```
        这样做控制台的输出结果是`#!javascript 0`，其原因是脚本运行时的tick并没有触发玩家进入事件  
        你可以理解为，引擎告诉脚本进入玩家之前，脚本已经执行完了  
        解决方法是添加一个事件，例如：
        ```javascript
        world.onPlayerJoin(({ entity }) => {
            console.log(world.querySelectorAll('player').length);
        });
        ```
        或者使用等待：

        === "<docs-def>Box3PlayerEntityEvent</docs-def> / <docs-def>GamePlayerEntityEvent</docs-def> 事件"

            ```javascript
            (async () => {
                await world.nextPlayerJoin();
                console.log(world.querySelectorAll('player').length);
            })();
            ```

        === "<docs-icon icon="function">sleep</docs-icon> 方法"

            ```javascript
            (async () => {
                await sleep(1000);
                console.log(world.querySelectorAll('player').length);
            })();
            ```

    ??? example "示例"

        ```javascript
        world.querySelectorAll('player').forEach(entity => {
            world.say(entity.player.name)
        }) // 遍历世界中的所有玩家并且广播其玩家昵称
        ```

> !p testSelector(selector: SelectorString, entity: Entity): boolean

:   测试实体是否符合选择器，如果实体能被指定的选择器选择，则返回`#!javascript true`，否则返回`#!javascript false`

    ??? example "示例"

        ```javascript
        world.testSelector('.groupA', a_Entity_Has_Tag_groupA)
        ```

> !p raycast(origin: Vector3, direction: Vector3, options?: Partial< RaycastOptions>): RaycastResult

:   射线检测，从 <arg>origin</arg> 原点位置向 <arg>direction</arg> 方向投射一条隐形的射线，返回碰到的实体或方块
    [Box3RaycastOptions / GameRaycastOptions](type/RaycastOptions.md)  
    [Box3RaycastResult / GameRaycastResult](type/RaycastResult.md)
    ??? example "示例"

        ```javascript
        /* 按下左键，在玩家位置向脚下发射一条射线，在控制台输出检测结果 */
        world.onPress(({ button, entity }) => {
            if(button === 'action0'){
               const res = world.raycast( entity.position, new Box3Vector3(0,-1,0))
               console.log(JSON.stringify(res))
            }
        })
        ```

    !!! tip "提示"
        有可能遇到射线击中的位置和原点相同，那是因为射线刚发射就碰到其他东西。  
        举个例子，在玩家位置发射射线，射线原点和玩家重合，射线就会击中玩家。  
        所以要计算好发射的原点，避免碰到你不想它碰到的东西，或设置[options?](arg)。

> !p searchBox(bounds: Bounds3): Entity[]

:   搜索指定区域内的实体

### 聊天
> !p say(message: string): void

:   向世界中所有玩家广播

    ??? example "示例"

        ```javascript
        world.onPlayerJoin(({ entity }) => {
            world.say('天空一声巨响，' + entity.player.name + '闪亮登场');
        });
        ```

> !p @proOnly createTempChat(userIds?: string[]): Promise< string>

:   创建临时聊天频道

    | 参数 | 类型 | 说明 |
    | :- | :- | :- |
    | <docs-icon icon="arg">userIds</docs-icon>: <docs-def>string</docs-def>[] | 可选，创建临时频道时同时加入频道的玩家id数组 |

    | 返回值 | 类型 | 说明 |
    | - | :- | :- |
    | | <docs-def>Promise</docs-def><<docs-def>string</docs-def>> | 创建临时频道后的频道id |

    ??? example "示例"

        ```javascript
        world.createTempChat().then(chatId => {
            console.log(`创建临时频道成功，频道id是${chatId}`)
        });
        ```
        ```javascript
        (async () => {
            var chatId = await world.createTempChat();
            console.log(`创建临时频道成功，频道id是${chatId}`);
        })();
        ```
        ```javascript
        (async () => {
            var chatId = await world.createTempChat(["455", "13006055", "85487", "12750782", "19"]);
            console.log(`创建临时频道成功，频道id是${chatId}`);
        })();
        ```

> !p @proOnly destroyTempChat(chatIds: string[]): Promise< string[]>

:   批量销毁临时聊天频道

    | 参数 | 类型 | 说明 |
    | :- | :- | :- |
    | <docs-icon icon="arg">chatIds</docs-icon> | <docs-def>string</docs-def>[] | 必填，需要销毁的临时频道id数组 |

    | 返回值 | 类型 | 说明 |
    | - | :- | :- |
    | | <docs-def>Promise</docs-def><<docs-def>string</docs-def>[]> | 删除失败的临时频道id数组 |


    ??? example "示例"

        ```javascript
        world.destroyTempChat(['chatId1','chatId2']).then(failedChatIds => {
            if (!failedChatIds.length) {
                console.log(`聊天室销毁成功`);
            } else {
                console.log(`以下聊天室销毁失败：${failedChatIds.join(',')}`);
            }
        });
        ```
        ```javascript
        (async () => {
            var failedChatIds = await world.destroyTempChat(['chatId1','chatId2']);
            if (!failedChatIds.length) {
                console.log(`聊天室销毁成功`);
            } else {
                console.log(`以下聊天室销毁失败：${failedChatIds.join(',')}`);
            }
        })();
        ```

> !p @proOnly addTempChatPlayer(chatId: string, userIds: string[]): Promise< string[]>

:   向临时聊天频道添加玩家

    | 参数 | 类型 | 说明 |
    | :- | :- | :- |
    | [chatId](arg) | <docs-def>string</docs-def> | 必填，临时聊天频道id |
    | [userIds](arg) | <docs-def>string</docs-def>[] | 必填，加入聊天频道的玩家id数组 |

    | 返回值 | 类型 | 说明 |
    | - | :- | :- |
    | | Promise<<docs-def>string</docs-def>[]> | 添加成功的玩家id数组 |

    ??? example "示例"

        ```javascript
        world.createTempChat().then(chatId => {
            world.addTempChatPlayer(chatId, ["455", "13006055", "85487", "12750782", "19"]).then(userIds => {
                console.log(`以下玩家id添加聊天频道成功：${userIds.join(',')}`);
            });
        });
        ```
        ```javascript
        (async () => {
            var chatId = await world.createTempChat();
            var userIds = await world.addTempChatPlayer(chatId, ["455", "13006055", "85487", "12750782", "19"]);
            console.log(`以下玩家id添加聊天频道成功：${userIds.join(',')}`);
        })();
        ```

> !p @proOnly removeTempChatPlayer(chatId: string, userIds: string[]): Promise< string[]>

:   向临时聊天频道移除玩家

    | 参数 | 类型 | 说明 |
    | :- | :- | :- |
    | [chatId](arg) | <docs-def>string</docs-def> | 必填，临时聊天频道id |
    | [userIds](arg) | <docs-def>string</docs-def>[] | 必填，需要在聊天频道中移除的玩家id数组 |

    | 返回值 | 类型 | 说明 |
    | - | :- | :- |
    | | Promise<<docs-def>string</docs-def>[]> | 移除成功的玩家id数组 |

    ??? example "示例"

        ```javascript
        world.createTempChat(["455", "13006055", "85487", "12750782", "19"]).then(chatId => {
            world.removeTempChatPlayer(chatId, ["13006055", "12750782"]).then(userIds => {
                console.log(`从聊天频道移除以下玩家id成功：${userIds.join(',')}`);
            });
        });
        ```
        ```javascript
        (async () => {
            var chatId = await world.createTempChat(["455", "13006055", "85487", "12750782", "19"]);
            var userIds = await world.removeTempChatPlayer(chatId, ["13006055", "12750782"]);
            console.log(`从聊天频道移除以下玩家id成功：${userIds.join(',')}`);
        })();
        ```

> !p @proOnly getTempChats(): Promise< string[]>

:   获取当前地图存在的临时聊天频道

    | 返回值 | 类型 | 说明 |
    | - | :- | :- |
    | | Promise<<docs-def>string</docs-def>[]> | 当前地图存在的临时聊天频道id数组 |

    ??? example "示例"

        ```javascript
        world.getTempChats().then(chatIds => {
            console.log(`当前有以下临时聊天频道${chatIds.join(',')}`);
        });
        ```
        ```javascript
        (async () => {
            var chatIds = await world.getTempChats();
            console.log(`当前有以下临时聊天频道${chatIds.join(',')}`);
        })();
        ```

> !p @proOnly getTempChatUsers(chatId: string): Promise< string[]>

:   获取临时聊天频道中的玩家

    | 参数 | 类型 | 说明 |
    | :- | :- | :- |
    | [chatId](arg) | <docs-def>string</docs-def> | 必填，临时聊天频道id |

    | 返回值 | 类型 | 说明 |
    | - | :- | :- |
    | | Promise<<docs-def>string</docs-def>[]> | 在临时聊天频道中的玩家id数组 |

    ??? example "示例"

        ```javascript
        world.getTempChatUsers('chatId').then(userIds => {
            console.log(`临时聊天频道有以下玩家${userIds.join(',')}`)
        });
        ```
        ```javascript
        (async () => {
            var userIds = await world.getTempChatUsers('chatId');
            console.log(`临时聊天频道有以下玩家${userIds.join(',')}`)
        })();
        ```

### 物理
> !p addCollisionFilter(aSelector: SelectorString, bSelector: SelectorString): void

:   添加碰撞过滤器，关闭两个实体组之间的碰撞

    ??? example "示例"

        ```javascript
        world.addCollisionFilter('player','player') // 关闭玩家和玩家之间的碰撞
        ```

> !p removeCollisionFilter(aSelector: SelectorString, bSelector: SelectorString): void

:   移除碰撞过滤器，不再关闭两个实体组 <arg>aSelector</arg> 、 <arg>bSelector</arg> 之间的碰撞

> !p clearCollisionFilters(): void

:   清除所有的碰撞过滤器

> !p collisionFilters(): string[][]

:   返回当前所有的碰撞过滤器
    ??? example "示例"

        ```javascript
        world.collisionFilters().forEach(([ a, b ]) => console.log(a, b)) // 打印全部碰撞过滤器
        ```

### 区域
> !p addZone(config: Partial< ZoneConfig>): Zone

:   创建一个区域

    !!! note "待测试"

        据说一张地图的区域创建上限为129个

    !!! note "待测试"

        官方示例中使用<docs-def>number</docs-def>[]来代替<docs-def>Box3Vector3</docs-def> / <docs-def>GameVector3</docs-def>  
        需检查是否可以使用<docs-def>Box3Vector3</docs-def> / <docs-def>GameVector3</docs-def>和<docs-def>number</docs-def>[]

    ??? example "示例"

        ```javascript
        const area = world.addZone({
            selector: 'player',
            bounds: {
                lo: [48,  8, 50],
                hi: [64, 20, 72],
            },
        });
        ```

> !p removeZone(trigger: Zone): void

:   删除区域

    ??? example "示例"

        ```javascript
        const area = world.addZone({
            selector: 'player',
            bounds: {
                lo: [48,  8, 50],
                hi: [64, 20, 72],
            },
        });
        world.removeZone(area);
        ```

> !p zones(): Zone[]

:   获取该地图的所有区域

    !!! warning "警告"

        尽管其命名非常像一个属性，但这其实是一个方法

> !p @veryOldOnly addTrigger#method.hidden
  removeTrigger#method.hidden
  triggers#method.hidden

!!! warning "已弃用"

    这三个方法在所有编辑器已经弃用，请使用[addZone](method)、[removeZone](method)、[zones](method)代替

!!! bug "内容缺失"

    由于该方法过于久远，只能在非常远古的地图（旧岛ID只有五位的部分地图）中找到，并且执行也会提示警告

### 动画
> !p animate(keyframes: Partial< WorldKeyframe>[], playbackInfo?: Partial< AnimationPlaybackConfig>): Animation< WorldKeyframe, World>

:   创建一个关键帧动画 <docs-def>Box3Animation</docs-def> / <docs-def>GameAnimation</docs-def>
    ??? example "示例"
        === "旧版编辑器"

            ```javascript
            const ani = world.animate([
                { rainDensity: 0, duration: 1 },
                { rainDensity: 1, duration: 1 },
            ], {
                iterations: Infinity,// 无限循环
                direction: Box3AnimationDirection.REVERSE, // 雨量反复变大变小
                duration: 16 * 5, // 5秒1个周期(每秒16 ticks)
            });

            world.onPress(({ button }) => {
                if (button === Box3ButtonType.ACTION0) { // 左键停雨
                    ani.cancel();
                    world.rainDensity = 0;
                }
            });
            ```
        === "Arena编辑器"

            ```javascript
            const ani = world.animate([
                { rainDensity: 0, duration: 1 },
                { rainDensity: 1, duration: 1 },
            ], {
                iterations: Infinity,// 无限循环
                direction: GameAnimationDirection.REVERSE, // 雨量反复变大变小
                duration: 16 * 5, // 5秒1个周期(每秒16 ticks)
            });

            world.onPress(({ button }) => {
                if (button === GameButtonType.ACTION0) { // 左键停雨
                    ani.cancel();
                    world.rainDensity = 0;
                }
            });
            ```

> !p getAnimations(): Animation< WorldKeyframe, World>[]

:   获取所有的动画对象

> !p getEntityAnimations(): Animation< EntityKeyframe, Entity>[]

:   获取所有实体的动画对象

> !p getPlayerAnimations(): Animation< PlayerKeyframe, Entity>[]

:   获取所有玩家的动画对象

### 声音
> !p @oldOnly sound(spec: { sample: string, position?: Vector3, radius?: number, gain?: number, pitch?: number } | string): void

> !p @proOnly sound(spec: { sample: string, position?: Vector3, radius?: number, gain?: number, pitch?: number } | string): Sound

:   在指定位置播放声音

    | 参数 | | 类型 | 说明 |
    | - | - | - | - |
    | <docs-icon icon="arg">spec</docs-icon> | | <docs-def>string</docs-def> | 声音路径 |
    | <docs-icon icon="arg">spec</docs-icon> | |  | 声音播放参数 |
    | | [sample](property) | <docs-def>string</docs-def> | 声音路径 |
    | | [position](property)? | <docs-def>Box3Vector3</docs-def> / <docs-def>GameVector3</docs-def> | 声音播放的位置。可以指定在某个实体身上发出声音 |
    | | [radius](property)? | <docs-def>number</docs-def> = `#!javascript 32` | 声音范围，单位是$\frac{1}{16}$个方块 |
    | | [gain](property)? | <docs-def>number</docs-def> = `#!javascript 1` | 音量增益。正常为 1，数值越大，声音越大 |
    | | [pitch](property)? | <docs-def>number</docs-def> = `#!javascript 1` | 音高增益。正常为 1，大于 1，音调越高，播放速度越快 |

    !!! bug

        [position](property)疑似无效，无论设置成什么，实际播放位置都为`#!javascript { x:0, y:0, z:0 }`

    ??? example "示例"

        ```javascript
        // 播放一段声音，所有玩家都能听见
        world.sound('audio/drama.mp3');
        ```
        === "旧版编辑器"

            ```javascript
            // 在指定的位置播放 'airhorn' 声音
            world.sound({
                sample: 'audio/airhorn.mp3',
                position: new Box3Vector3(64, 10, 64),
                radius: 64  // 只有距离位置4格内的玩家能听见。(1个方块的距离是16)
            });
            ```

        === "Arena编辑器"

            ```javascript
            // 在指定的位置播放 'airhorn' 声音
            world.sound({
                sample: 'audio/airhorn.mp3',
                position: new GameVector3(64, 10, 64),
                radius: 64  // 只有距离位置4格内的玩家能听见。(1个方块的距离是16)
            });
            ```

### 传送
!!! warning inline end "警告"
    - 传送进入的地图为独立服务器，因此同一张目标地图，若不填写<arg>serverId</arg>参数，分批次传送不同的人，所进入的是 **不同** 服务器。
    - 只能在已发布地图中生效
    - <docs-icon icon="arg">players</docs-icon>的长度不能超过50
    - <docs-icon icon="arg">players</docs-icon>中不能存在游客（没有UserID）

> !p teleport#method: TeleportType

:   地图组内传送能力，能够令 Player 被传送到其他地图中。

    !!! info "Arena 独有"
        该方法仅在Arena编辑器中使用
    !!! info "该方法仅在扩展地图中使用"
    !!! warning "该方法需要图主有特定权限才能使用"
        此方法受权限影响，无权限用户可见，但调用后直接报错。

    <span class="hidden">编者注：我自己都没用过扩展地图</span>

    ??? example "示例"

        ```javascript
        while (true) {
            try {
                var players = world.querySelectorAll('player').slice(0, 50);
                players = players.filter(e => e.player.userId !== '' && e.player.userId !== '0' && e.player.userId !== 0);
                await world.teleport('100001157', players);
                break;
            } catch (e) {
                console.error(e.stack);
            }
            await sleep(1000);
        }
        world.say('传送成功 ');
        ```

#### TeleportType
> !p TeleportType = (mapId: string, players: GameEntity[], serverId?: string) => Promise< TeleportResult>

传送调用函数

| 参数 | 类型 | 说明 |
| :- | :- | :- |
| [mapId](arg) | <docs-def>string</docs-def> | 必填，目标地图id |
| <docs-icon icon="arg">players</docs-icon> | [](GameEntity)[] | 必填，需要传送的玩家 |
| [serverId](arg)? | <docs-def>string</docs-def>[] | 选填，服务器id。若不填，则会新建一个新的服务器 |

!!! tip "地图id vs 服务器id"

    最近官方新增了 **服务器id** 的功能，这和原来的 **地图id** 有什么区别呢？让我们来看一个图

    ```mermaid
    flowchart TD
    mainMap[地图项目]
    map1[地图1]
    map2[地图2]
    server1[服务器1]
    server2[服务器2]
    server3[服务器3]
    mainMap --> map1
    mainMap --> map2
    map1 --> server1
    map1 --> server2
    map2 --> server3
    ```

    你所填的<arg>mapId</arg>，就是图上的 **地图1** / **地图2** 的id；而<arg>serverId</arg>就是 **服务器1** / **服务器2** / **服务器3** 的 **服务器id**  
    通过<arg>serverId</arg>，可以将玩家传送到已创建的指定服务器

!!! note "上文所说的“服务器”和“地图容器”指的是一种东西，只是不同的叫法"

### 事件
#### 基本
> !p onTick: EventChannel< TickEvent>  
  nextTick: EventFuture< TickEvent>

:   Tick 事件，详情请看[](Box3TickEvent) / [](GameTickEvent)

#### 实体创建/销毁
> !p onPlayerJoin: EventChannel< PlayerEntityEvent>  
  nextPlayerJoin: EventFuture< PlayerEntityEvent>

:   当玩家进入世界(或未来)触发

    ??? example "示例"

        ```javascript
        // 玩家进入地图时，向TA发送一条私信。
        world.onPlayerJoin(({ entity }) => {
            entity.player.directMessage(`你好，${entity.player.name}`);
        });
        ```

> !p onPlayerLeave: EventChannel< PlayerEntityEvent>  
  onPlayerLeave: EventFuture< PlayerEntityEvent>

:   当玩家离开世界(或未来)触发

> !p onEntityCreate: EventChannel< EntityEvent>  
  nextEntityCreate: EventFuture< EntityEvent>

:   当实体被创建(或未来)触发

> !p onEntityDestroy: EventChannel< EntityEvent>  
  nextEntityDestroy: EventFuture< EntityEvent>

:   当实体被销毁(或未来)触发

#### 聊天
> !p onChat: EventChannel< ChatEvent>  
  nextChat: EventFuture< ChatEvent>

:   当玩家发言(或未来)触发

#### 世界交互
> !p onClick: EventChannel< ClickEvent>  
  nextClick: EventFuture< ClickEvent>

:   当玩家点击实体(或未来)触发

> !p onPress: EventChannel< InputEvent>  
  nextPress: EventFuture< InputEvent>

:   当玩家按下按键(或未来)触发

> !p onRelease: EventChannel< InputEvent>  
  nextRelease: EventFuture< InputEvent>

:   当玩家松开按键(或未来)触发

> !p onInteract: EventChannel< InteractEvent>  
  nextInteract: EventFuture< InteractEvent>

:   当玩家与实体互动(或未来)触发

#### 物理
> !p onEntityContact: EventChannel< EntityContactEvent>  
  nextEntityContact: EventFuture< EntityContactEvent>

:   当实体碰撞(或未来)触发

> !p onEntitySeparate: EventChannel< EntityContactEvent>  
  nextEntitySeparate: EventFuture< EntityContactEvent>

:   当实体分开(或未来)触发

> !p onVoxelContact: EventChannel< VoxelContactEvent>  
  nextVoxelContact: EventFuture< VoxelContactEvent>

:   当实体碰到方块(或未来)触发

> !p onVoxelSeparate: EventChannel< VoxelContactEvent>  
  nextVoxelSeparate: EventFuture< VoxelContactEvent>

:   当实体离开方块(或未来)触发

> !p onFluidEnter: EventChannel< FluidContactEvent>  
  nextFluidEnter: EventFuture< FluidContactEvent>

:   当实体进入液体(或未来)触发

> !p onFluidLeave: EventChannel< FluidContactEvent>  
  nextFluidLeave: EventFuture< FluidContactEvent>

:   当实体离开液体(或未来)触发

#### 战斗相关
> !p onTakeDamage: EventChannel< DamageEvent>  
  nextTakeDamage: EventFuture< DamageEvent>

:   当实体收到伤害(或未来)触发

> !p onDie: EventChannel< DieEvent>  
  nextDie: EventFuture< DieEvent>

:   当实体死亡(或未来)触发

> !p onRespawn: EventChannel< RespawnEvent>  
  nextRespawn: EventFuture< RespawnEvent>

:   玩家复活(或未来)触发

#### 商业化
> !p onPlayerPurchaseSuccess: EventChannel< GamePurchaseSuccessEvent>  
  nextPlayerPurchaseSuccess: EventFuture< GamePurchaseSuccessEvent>

:   当玩家成功购买物品(或未来)时触发

    !!! info "Arena 独有"
        该事件仅在Arena编辑器中使用