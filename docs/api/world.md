<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E9%87%8D%E6%96%B0%E6%8E%92%E7%89%88&%E8%A1%A5%E5%85%85%E5%86%85%E5%AE%B9-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

: [查阅官方文档](https://box3.yuque.com/org-wiki-box3-ev7rl4/guide/qrdwsy18xppep8bv)  
  [查阅官方文档（Arena）](https://box3.yuque.com/staff-khn556/wupvz3/gqdnaany8xlb0q0s)  
  [查阅社区文档（Arena）](https://www.yuque.com/box3lab/api/obl2sb5x68v08he8)

<def>Box3World</def> / <def>GameWorld</def>无法（很难）被实例化，但在全局存在一个单例对象<def>world</def>  
可以通过<def>world</def>对象控制环境天气、物理重力、画面滤镜等全局场景属性，还可以在世界中创建、搜索实体，或监听世界中实体和玩家的碰撞、伤害、互动等事件。

## 常用
- [<method>onTick</method>](#c1)
- [<method>onPlayerJoin</method>](#c2)
- [<method>querySelector</method>/<method>querySelectorAll</method>](#c3)
- [<method>onClick</method>](#c4)
- [<method>say</method>](#c5)

---

## 属性
### 基础
<readonly>projectName</readonly> : <def>string</def>
: 项目的名称，对应 项目-编辑资料-地图名称。无法在代码中修改。

<property>url</property> : <def> URL</def>
: 当前运行的世界的公共 URL

<property>currentTick</property> : <def>number</def>
: 当前世界的时刻

### 物理
<property>gravity</property> : <def>number</def>
: 重力

<property>airFriction</property> : <def>number</def>
: 空气阻力

<property>useOBB</property> : <def>boolean</def>
:   是否启用OBB碰撞  
    关于OBB碰撞，可以[查看此链接](https://box3.yuque.com/staff-khn556/wupvz3/obb)获取更多信息

    ??? quote "OBB 碰撞"
        OBB(Oriented Bounding Box)译为方向包围盒，与原本的AABB(Axis Aligned Bounding Box)轴对齐包围盒相比，物理模型新增了旋转属性，碰撞效果更加的精准。

    !!! info "Arena 独有"
        该属性仅在Arena编辑器中使用
    !!! warning "该功能仍在实验中"
        实验版仅支持400个100面以下的实体在静态场景下以60+FPS展示
    !!! danger "性能警告"
        启用OBB碰撞会造成更大的性能消耗，轻则掉帧、卡顿，重则卡死、崩溃，且也会影响到客户端，不建议在复杂的场景下使用  
        需要根据地图需要和玩家设备性能来考虑是否开启

### 天气 & 光照
#### 光照
<property>lightMode</property> : `#!javascript 'natural'` | `#!javascript 'manual'`

:   世界光照模式，`#!javascript 'natural'`为自然模式，昼夜循环按照一定的规律进行。`#!javascript 'manual'`为手动模式，需要手动设置各个方向上的光。
光照模式不同，决定光照的属性也不同，你可以通过切换下面的选项卡来查看不同光照模式下的光照属性。

    === "`#!javascript 'natural'` 自然光照"
        <property>sunPhase</property> : <def>number</def>
        : 太阳运行阶段，按照`#!javascript timeOfDay = (sunPhase + sunFrequency * tick) % 1`公式计算

        <property>sunFrequency</property> : <def>number</def>
        : 太阳在天空中移动的频率。 数值越高=太阳运动越快

        <property>lunarPhase</property> : <def>number</def>
        : 月亮的相位。 必须在 0 和 1 之间
    === "`#!javascript 'manual'` 手动光照"
        <property>sunDirection</property> : <def>Box3Vector3</def> / [](GameVector3)
        : 太阳的方向

        <property>sunLight</property> : <def>Box3RGBColor</def> / [](GameRGBColor)
        : 太阳的光照颜色

        <property>skyLeftLight</property> : <def>Box3RGBColor</def> / [](GameRGBColor)
        <property>skyRightLight</property> : <def>Box3RGBColor</def> / [](GameRGBColor)
        <property>skyBottomLight</property> : <def>Box3RGBColor</def> / [](GameRGBColor)
        <property>skyTopLight</property> : <def>Box3RGBColor</def> / [](GameRGBColor)
        <property>skyFrontLight</property> : <def>Box3RGBColor</def> / [](GameRGBColor)
        <property>skyBackLight</property> : <def>Box3RGBColor</def> / [](GameRGBColor)
        : 天空光照颜色依次在 `-x` `+x` `-y` `+y` `-z` `+z` 方向上的值

#### 雾
<property>fogColor</property> : <def>Box3RGBColor</def> / [](GameRGBColor)
:   雾颜色

    !!! bug

        若将颜色设为白色（`#!javascript new Box3RGBColor(1, 1, 1)` / `#!javascript new GameRGBColor(1, 1, 1)` / <span style="background: #ffffff;" class="coloredWord">#FFFFFF</span>），实际颜色只有<span style="background: #a6b1b9;" class="coloredWord">#A6B1B9</span>（看地面）<span style="background: #a9b5be;" class="coloredWord">#A9B5BE</span>（看天空）  
        此问题曾向官方反馈，但未得到解决


<property>fogStartDistance</property> : <def>number</def>
:   雾起始距离

<property>fogHeightOffset</property> : <def>number</def>
:   雾起始高度

<property>fogHeightFalloff</property> : <def>number</def>
:   雾高度衰减率

<property>fogUniformDensity</property> : <def>number</def>
:   均匀雾的数量（如果>`#!javascript 0`，就不能看到天幕）

<property>maxFog</property> : <def>number</def>
:   最大雾量

#### 雪
<property>snowDensity</property> : <def>number</def>
:   雪密度。密度越大，雪花越多

<property>snowSizeLo</property> : <def>number</def>
:   雪最小尺寸

<property>snowSizeHi</property> : <def>number</def>
:   雪最大尺寸

<property>snowFallSpeed</property> : <def>number</def>
:   雪下落速度

<property>snowSpinSpeed</property> : <def>number</def>
:   雪旋转速度

<property>snowColor</property> : <def>Box3RGBAColor</def> / [](GameRGBAColor)
:   雪颜色。

<property>snowTexture</property> : <def>string</def>
:   雪纹理，格式为`#!javascript 'snow/*.part'`

#### 雨
<property>rainDensity</property> : <def>number</def>
:   雨密度。密度越大，雨滴越多

<property>rainDirection</property> : <def>Box3Vector3</def> / [](GameVector3)
:   雨方向

<property>rainSpeed</property> : <def>number</def>
:   雨速度

<property>rainSizeLo</property> : <def>number</def>
:   雨最小尺寸

<property>rainSizeHi</property> : <def>number</def>
:   雨最大尺寸

<property>rainInterference</property> : <def>number</def>
:   雨扰流幅度

<property>rainColor</property> : <def>Box3RGBAColor</def> / [](GameRGBAColor)
:   雨颜色

### 声音
<property>breakVoxelSound</property> : <def>Box3SoundEffect</def> / [](GameSoundEffect)
:   方块破坏声音

<property>placeVoxelSound</property> : <def>Box3SoundEffect</def> / [](GameSoundEffect)
:   方块填充声音

<property>playerJoinSound</property> : <def>Box3SoundEffect</def> / [](GameSoundEffect)
:   玩家进入世界声音

<property>playerLeaveSound</property> : <def>Box3SoundEffect</def> / [](GameSoundEffect)
:   玩家离开世界声音

<property>ambientSound</property> : <def>Box3SoundEffect</def> / [](GameSoundEffect)
:   环境声音

---

## 方法
### 实体创建 & 销毁
<method>entityQuota</method> () => <def>number</def>
:   返回世界当前允许创建的实体的剩余数量

<method>createEntity</method> ([config](arg): <def> Partial</def><[](Box3EntityConfig) / [](GameEntityConfig)>) => [](Box3Entity) / [](GameEntity) | [](null)
:   创建一个新的[](Box3Entity) / [](GameEntity)或复制一个现有实体
如果超过了实体配额，则返回 [](null)

### 搜索
<span anchor="c3"><method> querySelector</method> ([selector](arg): [](Box3SelectorString) / [](GameSelectorString)) => <def> Box3Entity</def> / [](GameEntity) | [](null)</span>
:   通过选择器来查找一个实体，如果找不到，则会返回[](null)

<method>querySelectorAll</method> ([selector](arg): [](Box3SelectorString) / [](GameSelectorString)) => [](Box3Entity)[] / [](GameEntity)[]
:   与`querySelector`类似，但是可以查找所有符合选择器的实体，返回一个[](Box3Entity) / [](GameEntity)组成的数组。如果没有符合条件的实体，则返回空数组。

    ??? example "示例"

        ```javascript
        world.querySelectorAll('player').
          forEach(entity => {
            world.say(entity.player.name)
          }) // 遍历世界中的所有玩家并且广播其玩家昵称
        ```

<method>testSelector</method> ([selector](arg): [](Box3SelectorString) / [](GameSelectorString), [entity](arg): [](Box3Entity)) => <def>boolean</def>
:   测试实体是否符合选择器，如果实体能被指定的选择器选择，则返回`#!javascript true`，否则返回`#!javascript false`

    ??? example "示例"

        ```javascript
        world.testSelector('.groupA', a_Entity_Has_Tag_groupA)
        ```

<method>raycast</method> ([origin](arg): [](Box3Vector3) / [](GameVector3), [direction](arg): [](Box3Vector3) / [](GameVector3), [options?](arg): <def>Partial</def><[](Box3RaycastOptions)> / [](GameRaycastOptions)>) => <def>string</def>[][]
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
        所以要计算好发射的原点，避免碰到你不想它碰到的东西。

<method>searchBox</method> ([bounds](arg): [](Box3Bounds3) / [](GameBounds3)) => [](Box3Entity)[] / [](GameEntity)[]
:   搜索指定区域内的实体

### 聊天
<span anchor="c5"><method>say</method> ([message](arg): <def>string</def>) => [](void)</span>
:   向世界中所有玩家广播

    ??? example "示例"

        ```javascript
        world.onPlayerJoin(({ entity }) => {
            world.say('天空一声巨响，' + entity.player.name + '闪亮登场');
        });
        ```

[createTempChat](method) ([userIds](arg)?: [](string)[]) => [](Promise)<[](string)>
:   创建临时聊天频道

    !!! info "Arena 独有"
        该方法仅在Arena编辑器中使用

    | 参数 | 类型 | 说明 |
    | :- | :- | :- |
    | [userIds](arg) | [](string)[] | 可选，创建临时频道时同时加入频道的玩家id数组 |

    | 返回值 | 类型 | 说明 |
    | - | :- | :- |
    | | Promise<[](string)> | 创建临时频道后的频道id |

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

[destroyTempChat](method) ([chatIds](arg): [](string)[]) => [](Promise)<[](string)[]>
:   批量销毁临时聊天频道

    !!! info "Arena 独有"
        该方法仅在Arena编辑器中使用

    | 参数 | 类型 | 说明 |
    | :- | :- | :- |
    | [chatIds](arg) | [](string)[] | 必填，需要销毁的临时频道id数组 |

    | 返回值 | 类型 | 说明 |
    | - | :- | :- |
    | | Promise<[](string[])> | 删除失败的临时频道id数组 |


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

[addTempChatPlayer](method) ([chatId](arg): [](string), [userIds](arg): [](string)[]) => [](Promise)<[](string)[]>
:   向临时聊天频道添加玩家

    !!! info "Arena 独有"
        该方法仅在Arena编辑器中使用

    | 参数 | 类型 | 说明 |
    | :- | :- | :- |
    | [chatId](arg) | [](string) | 必填，临时聊天频道id |
    | [userIds](arg) | [](string)[] | 必填，加入聊天频道的玩家id数组 |

    | 返回值 | 类型 | 说明 |
    | - | :- | :- |
    | | Promise<[](string)[]> | 添加成功的玩家id数组 |

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

[removeTempChatPlayer](method) ([chatId](arg): [](string), [userIds](arg): [](string)[]) => [](Promise)<[](string)[]>
:   向临时聊天频道移除玩家

    !!! info "Arena 独有"
        该方法仅在Arena编辑器中使用

    | 参数 | 类型 | 说明 |
    | :- | :- | :- |
    | [chatId](arg) | [](string) | 必填，临时聊天频道id |
    | [userIds](arg) | [](string)[] | 必填，需要在聊天频道中移除的玩家id数组 |

    | 返回值 | 类型 | 说明 |
    | - | :- | :- |
    | | Promise<[](string)[]> | 移除成功的玩家id数组 |

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

[getTempChats](method) () => [](Promise)<[](string)[]>
:   获取当前地图存在的临时聊天频道

    !!! info "Arena 独有"
        该方法仅在Arena编辑器中使用

    | 返回值 | 类型 | 说明 |
    | - | :- | :- |
    | | Promise<[](string)[]> | 当前地图存在的临时聊天频道id数组 |

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

[getTempChatUsers](method) ([chatId](arg): [](string)) => [](Promise)<[](string)[]>
:   获取临时聊天频道中的玩家

    !!! info "Arena 独有"
        该方法仅在Arena编辑器中使用

    | 参数 | 类型 | 说明 |
    | :- | :- | :- |
    | [chatId](arg) | [](string) | 必填，临时聊天频道id |

    | 返回值 | 类型 | 说明 |
    | - | :- | :- |
    | | Promise<[](string)[]> | 在临时聊天频道中的玩家id数组 |

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
<method>addCollisionFilter</method> ([aSelector](arg): [](Box3SelectorString) / [](GameSelectorString), [bSelector](arg): [](Box3SelectorString) / [](GameSelectorString)) => [](void)
:   添加碰撞过滤器，关闭两个实体组之间的碰撞

    ??? example "示例"

        ```javascript
        world.addCollisionFilter('player','player') // 关闭玩家和玩家之间的碰撞
        ```

<method>removeCollisionFilter</method> ([aSelector](arg): <def>Box3SelectorString</def> / [](GameSelectorString), [bSelector](arg): <def>Box3SelectorString</def> / [](GameSelectorString)) : [](void)
:   移除碰撞过滤器，不再关闭两个实体组 <arg>aSelector</arg> 、 <arg>bSelector</arg> 之间的碰撞

<method>clearCollisionFilters</method> () => [](void)
:   清除所有的碰撞过滤器

<method>collisionFilters</method> () => <def>string</def>[][]
:   返回当前所有的碰撞过滤器
    ??? example "示例"

        ```javascript
        world.collisionFilters().forEach(([ a, b ]) => console.log(a, b)) // 打印全部碰撞过滤器
        ```

### 区域
[addZone](method) ([config](arg): [](Partial)<[](Box3ZoneConfig) / [](GameZoneConfig)>) => [](Box3Zone) / [](GameZone)
:   创建一个区域

    !!! note "待测试"

        据说一张地图的区域创建上限为129个

    !!! note "待测试"

        官方示例中使用[](number)[]来代替[](Box3Vector3) / [](GameVector3)  
        需检查是否可以使用[](Box3Vector3) / [](GameVector3)和[](number)[]

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

[removeZone](method) ([trigger](arg): [](Box3Zone) / [](GameZone)) => [](void)
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

[zones](method)() => [](Box3Zone)[] / [](GameZone)[]
:   获取该地图的所有区域

    !!! warning "警告"

        尽管其命名非常像一个属性，但这其实是一个方法

[addTrigger](hiddenMethod)
[removeTrigger](hiddenMethod)
[triggers](hiddenMethod)

!!! warning "已弃用"

    这三个方法在所有编辑器已经弃用，请使用[addZone](method)、[removeZone](method)、[zones](method)代替

!!! bug "内容缺失"

    由于该方法过于久远，只能在非常远古的地图（旧岛ID只有五位的部分地图）中找到，并且执行也会提示警告

### 动画
<method>animate</method> ([keyframes](arg): [](Partial)<[](Box3WorldKeyframe) / [](GameWorldKeyframe)>[], [playbackInfo?](arg): [](Partial)<[](Box3AnimationPlaybackConfig) / [](GameAnimationPlaybackConfig)>) => [](Box3Animation) / [](GameAnimation)<[](Box3WorldKeyframe) / [](GameWorldKeyframe), [](Box3World) / [](GameWorld)>
:   创建一个关键帧动画 [](Box3Animation) / [](GameAnimation)
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

<hiddenMethod>getAnimations</hiddenMethod> () => [](Box3Animation) / [](GameAnimation)<<def>Box3WorldKeyframe</def> / <def>GameWorldKeyframe</def>, [](Box3World) / [](GameWorld)>[]
:   获取所有的动画对象

<hiddenMethod>getEntityAnimations</hiddenMethod> () => [](Box3Animation) / [](GameAnimation)<<def>Box3EntityKeyframe</def> / <def>GameEntityKeyframe</def>, [](Box3Entity) / [](GameEntity)>[]
:   获取所有实体的动画对象

<hiddenMethod>getPlayerAnimations</hiddenMethod> () => [](Box3Animation) / [](GameAnimation)<<def>Box3PlayerKeyframe</def> / <def>GamePlayerKeyframe</def>, [](Box3Player) / [](GameEntity)>[]
:   获取所有玩家的动画对象

### 声音
<method>sound</method> ([spec](arg): {[sample](interface): [](string), [position](interface)?: [](Box3Vector3) / [](GameVector3), [radius](interface)?: [](number), [gain](interface)?: [](number), [pitch](interface)?: [](number)} | <def>string</def>) => [](void)
:   在指定位置播放声音

    | 参数 | | 类型 | 说明 |
    | - | - | - | - |
    | [spec](arg) | | [](string) | 声音路径 |
    | [spec](arg) | |  | 声音播放参数 |
    | | [sample](property) | [](string) | 声音路径 |
    | | [position](property)? | [](Box3Vector3) / [](GameVector3) | 声音播放的位置。可以指定在某个实体身上发出声音 |
    | | [radius](property)? | [](number) = `#!javascript 32` | 声音范围，单位是$\frac{1}{16}$个方块 |
    | | [gain](property)? | [](number) = `#!javascript 1` | 音量增益。正常为 1，数值越大，声音越大 |
    | | [pitch](property)? | [](number) = `#!javascript 1` | 音高增益。正常为 1，大于 1，音调越高，播放速度越快 |

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
    - 传送进入的地图为独立服务器，因此同一张目标地图，分批次传送不同的人，所进入的是 **不同** 服务器。
    - 只能在已发布地图中生效
    - [players](arg)的长度不能超过50
    - [players](arg)中不能存在游客（没有UserID）

[teleport](method) ([mapId](arg): [](string), [players](arg): [](GameEntity)[]) => [](Promise)<[](void)>
:   地图组内传送能力，能够令 Player 被传送到其他地图中。

    !!! info "Arena 独有"
        该方法仅在Arena编辑器中使用
    !!! info "该方法仅在扩展地图中使用"
    !!! warning "该方法需要图主有特定权限才能使用"
        此方法受权限影响，无权限用户可见，但调用后直接报错。

    | 参数 | 类型 | 说明 |
    | :- | :- | :- |
    | [mapId](arg) | [](string) | 必填，目标频道id |
    | [players](arg) | [](GameEntity)[] | 必填，需要传送的玩家 |

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

### 事件
#### 基本
<span anchor="c1">
[onTick](method) : [](Box3EventChannel) / [](GameEventChannel) <[](Box3TickEvent) / [](GameTickEvent)>  
[nextTick](method) : [](Box3EventFuture) / [](GameEventFuture) <[](Box3TickEvent) / [](GameTickEvent)>
</span>
:   Tick 事件，详情请看[](Box3TickEvent) / [](GameTickEvent)

#### 实体创建/销毁
<span anchor="c2">
[onPlayerJoin](method) : [](Box3EventChannel) / [](GameEventChannel) <[](Box3PlayerEntityEvent) / [](GamePlayerEntityEvent)>  
[nextPlayerJoin](method) : [](Box3EventFuture) / [](GameEventFuture) <[](Box3PlayerEntityEvent) / [](GamePlayerEntityEvent)>
</span>
:   当玩家进入世界(或未来)触发

    ??? example "示例"

        ```javascript
        // 玩家进入地图时，向TA发送一条私信。
        world.onPlayerJoin(({ entity }) => {
            entity.player.directMessage(`你好，${entity.player.name}`);
        });
        ```

[onPlayerLeave](method) : [](Box3EventChannel) / [](GameEventChannel) <[](Box3PlayerEntityEvent) / [](GamePlayerEntityEvent)>  
[nextPlayerLeave](method) : [](Box3EventFuture) / [](GameEventFuture) <[](Box3PlayerEntityEvent) / [](GamePlayerEntityEvent)>
:   当玩家离开世界(或未来)触发

[onEntityCreate](method) : [](Box3EventChannel) / [](GameEventChannel) <[](Box3EntityEvent) / [](GameEntityEvent)>  
[nextEntityCreate](method) : [](Box3EventFuture) / [](GameEventFuture) <[](Box3EntityEvent) / [](GameEntityEvent)>
:   当实体被创建(或未来)触发

[onEntityDestroy](method) : [](Box3EventChannel) / [](GameEventChannel) <[](Box3EntityEvent) / [](GameEntityEvent)>  
[nextEntityDestroy](method) : [](Box3EventFuture) / [](GameEventFuture) <[](Box3EntityEvent) / [](GameEntityEvent)>
:   当实体被销毁(或未来)触发

#### 聊天
[onChat](method) : [](Box3EventChannel) / [](GameEventChannel) <[](Box3ChatEvent) / [](GameChatEvent)>  
[nextChat](method) : [](Box3EventFuture) / [](GameEventFuture) <[](Box3ChatEvent) / [](GameChatEvent)>
:   当玩家发言(或未来)触发

#### 世界交互
<span anchor="c4">
[onClick](method) : [](Box3EventChannel) / [](GameEventChannel) <[](Box3ClickEvent) / [](GameClickEvent)>  
[nextClick](method) : [](Box3EventFuture) / [](GameEventFuture) <[](Box3ClickEvent) / [](GameClickEvent)>
</span>
:   当玩家点击实体(或未来)触发

[onPress](method) : [](Box3EventChannel) / [](GameEventChannel) <[](Box3InputEvent) / [](GameInputEvent)>  
[nextPress](method) : [](Box3EventFuture) / [](GameEventFuture) <[](Box3InputEvent) / [](GameInputEvent)>
:   当玩家按下按键(或未来)触发

[onRelease](method) : [](Box3EventChannel) / [](GameEventChannel) <[](Box3InputEvent) / [](GameInputEvent)>  
[nextRelease](method) : [](Box3EventFuture) / [](GameEventFuture) <[](Box3InputEvent) / [](GameInputEvent)>
:   当玩家松开按键(或未来)触发

[onInteract](method) : [](Box3EventChannel) / [](GameEventChannel) <[](Box3InteractEvent) / [](GameInteractEvent)>  
[nextInteract](method) : [](Box3EventFuture) / [](GameEventFuture) <[](Box3InteractEvent) / [](GameInteractEvent)>
:   当玩家与实体互动(或未来)触发

#### 物理
[onEntityContact](method) : [](Box3EventChannel) / [](GameEventChannel) <[](Box3EntityContactEvent) / [](GameEntityContactEvent)>  
[nextEntityContact](method) : [](Box3EventFuture) / [](GameEventFuture) <[](Box3EntityContactEvent) / [](GameEntityContactEvent)>
:   当实体碰撞(或未来)触发

[onEntitySeparate](method) : [](Box3EventChannel) / [](GameEventChannel) <[](Box3EntityContactEvent) / [](GameEntityContactEvent)>  
[nextEntitySeparate](method) : [](Box3EventFuture) / [](GameEventFuture) <[](Box3EntityContactEvent) / [](GameEntityContactEvent)>
:   当实体分开(或未来)触发

[onVoxelContact](method) : [](Box3EventChannel) / [](GameEventChannel) <[](Box3VoxelContactEvent) / [](GameVoxelContactEvent)>  
[nextVoxelContact](method) : [](Box3EventFuture) / [](GameEventFuture) <[](Box3VoxelContactEvent) / [](GameVoxelContactEvent)>
:   当实体碰到方块(或未来)触发

[onVoxelSeparate](method) : [](Box3EventChannel) / [](GameEventChannel) <[](Box3VoxelContactEvent) / [](GameVoxelContactEvent)>  
[nextVoxelSeparate](method) : [](Box3EventFuture) / [](GameEventFuture) <[](Box3VoxelContactEvent) / [](GameVoxelContactEvent)>
:   当实体离开方块(或未来)触发

[onFluidEnter](method) : [](Box3EventChannel) / [](GameEventChannel) <[](Box3FluidContactEvent) / [](GameFluidContactEvent)>  
[nextFluidEnter](method) : [](Box3EventFuture) / [](GameEventFuture) <[](Box3FluidContactEvent) / [](GameFluidContactEvent)>
:   当实体进入液体(或未来)触发

[onFluidLeave](method) : [](Box3EventChannel) / [](GameEventChannel) <[](Box3FluidContactEvent) / [](GameFluidContactEvent)>  
[nextFluidLeave](method) : [](Box3EventFuture) / [](GameEventFuture) <[](Box3FluidContactEvent) / [](GameFluidContactEvent)>
:   当实体离开液体(或未来)触发

#### 战斗相关
[onTakeDamage](method) : [](Box3EventChannel) / [](GameEventChannel) <[](Box3DamageEvent) / [](GameDamageEvent)>  
[nextTakeDamage](method) : [](Box3EventFuture) / [](GameEventFuture) <[](Box3DamageEvent) / [](GameDamageEvent)>
:   当实体收到伤害(或未来)触发

[onDie](method) : [](Box3EventChannel) / [](GameEventChannel) <[](Box3DieEvent) / [](GameDieEvent)>  
[nextDie](method) : [](Box3EventFuture) / [](GameEventFuture) <[](Box3DieEvent) / [](GameDieEvent)>
:   当实体死亡(或未来)触发

[onRespawn](method) : [](Box3EventChannel) / [](GameEventChannel) <[](Box3RespawnEvent) / [](GameRespawnEvent)>  
[nextRespawn](method) : [](Box3EventFuture) / [](GameEventFuture) <[](Box3RespawnEvent) / [](GameRespawnEvent)>
:   玩家复活(或未来)触发

#### 商业化
[onPlayerPurchaseSuccess](method) : [](Box3EventChannel) / [](GameEventChannel) <[](GamePurchaseSuccessEvent)>  
[nextPlayerPurchaseSuccess](method) : [](Box3EventFuture) / [](GameEventFuture) <[](GamePurchaseSuccessEvent)>
:   当玩家成功购买物品(或未来)时触发

    !!! info "Arena 独有"
        该事件仅在Arena编辑器中使用