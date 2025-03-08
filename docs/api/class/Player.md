<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

: [查阅官方文档](https://box3.yuque.com/org-wiki-box3-ev7rl4/guide/ck84ba359f28vq5p)  
  [查阅官方文档（Arena）](https://box3.yuque.com/staff-khn556/wupvz3/ddctd6h29w3myth0)  
  [查阅社区文档（Arena）](https://www.yuque.com/box3lab/api/inriuuvzg5yb54kv)


:   [](Box3Player) / [](GamePlayer)指的是进入游戏的用户，此接口可用定义游戏中的玩家属性、操作等等。玩家属于一种特殊的实体。  
    [](Box3Player) / [](GamePlayer)无法（很难）被实例化，但可以通过[](Box3Entity).[player](property) / [](GameEntity).[player](property)获取其实例化对象

## 属性
### 基础
[name](readonly): [](string)
:   玩家的昵称，无法通过代码修改

[boxId](readonly): [](string)
:   玩家的Box ID(3-15字符)。无法通过代码修改。 游客的boxID值为空"" 。  
    在旧岛中为玩家个人主页链接`/u/`之后内容  
    在新岛中类似[userKey](readonly)，但是内容不同

[userKey](readonly): [](string)
:   玩家的唯一识别码(16字符)，可以用于存储玩家信息到数据库，无法通过代码修改。 游客的userKey值为空"" 。  
    在新岛中，若玩家的账户是由旧岛迁移过来，玩家的[userKey](readonly)不变

[userId](hiddenReadonly): [](string)
:   玩家的用户名，无法通过代码修改  
    在新岛中，为玩家个人主页的ID（链接中`/profile/`之后内容）  
    虽然为一串数字，但仍然为[](string)类型
    编者吐槽：我也不知道这东西为什么要隐藏

    !!! info "Arena 独有"
        该属性仅在Arena编辑器中使用

[url](readonly): [](string)
:   获取该玩家进入地图时所用的URL链接地址，无法通过代码修改

    !!! tip "提示"

        可以通过URL参数, 以便区别对待进来的玩家

[avatar](hiddenReadonly): [](string)
:   玩家头像URL，无法通过代码修改

    !!! info "Arena 独有"
        该属性仅在Arena编辑器中使用

[spawnPoint](property): [](Box3Vector3) / [](GameVector3)
:   玩家的出生点

[movementBounds](property): [](Box3Bounds3) / [](GameBounds3)
:   玩家的活动范围限制，如超出此范围，则传回出生点[spawnPoint](property)

[navigator](hiddenProperty): [](PlayerNavigator)
:   用户设备相关的接口

### 外观
[color](property): [](Box3RGBColor) / [](GameRGBColor)
:   玩家的颜色

    !!! warning "注意类型为[](Box3RGBColor) / [](GameRGBColor)而不是[](Box3RGBAColor) / [](GameRGBAColor)"

[invisible](property): [](boolean)
:   玩家是否隐身  
    只会影响玩家模型和穿戴配件

    ??? example "示例"

        ```javascript
        // 让玩家隐形
        world.onPlayerJoin(({ entity }) => {
            entity.player.invisible = true;
        });
        ```
        ```javascript
        // 实现玩家变形效果
        world.onPlayerJoin(({ entity }) => {
            entity.mesh = 'mesh/车.vb';
            entity.player.invisible = false; // 只显示车
        });
        ```

[skin](property): [](GameSkin)
:   此玩家的皮肤配置，用于管理当前玩家皮肤的展示。  
    当皮肤名称不存在于项目皮肤库或不符合类型定义时，无事发生，并会在控制台打印警告。

    !!! info "Arena 独有"
        该属性仅在Arena编辑器中使用

    !!! info "提示"
        通过此处修改皮肤不会影响皮肤的隐藏状态，设置前是隐藏的，设置后也还是隐藏着。

    ??? example "示例"

        ```javascript
        //...假设以某种方式得到了player对象，项目皮肤库中有 Example 和 Example2 两套皮肤

        // 设置玩家头部使用一个叫 Example 的皮肤套装
        player.skin.head = 'Example';
        // 设置玩家躯干使用一个叫 Example2 的皮肤套装
        player.skin.torso = 'Example2';
        // 不小心把head又设置了一个项目中没有的皮肤套装名 WrongSkin
        player.skin.head = 'WrongSkin'; // 这里会在控制台打印警告，且不会产生任何效果
        // 获取玩家当前皮肤
        const skin = player.skin; 
        // 此时 skin 为 { head:'Example', torso: 'Example2'}
        // 表现为一个头部为Example，躯干为Example2，剩余部位为玩家自己的皮肤。
        // 而设置错误的皮肤套装名不会生效，也不会覆盖原有的值。

        player.skin.head = undefined; // 将头部展示为玩家自己的皮肤。
        ```

[skinInvisible](property): [](Box3SkinInvisible) / [](GameSkinInvisible)
:   隐藏玩家模型部件接口

    ??? example "示例"

        ```javascript
        // 隐藏玩家的头部
        world.onPlayerJoin(({ entity }) => {
            entity.player.skinInvisible.head = true;
        });
        ```

[showName](property): [](boolean) = `#!javascript true`
:   是否显示玩家名称

[showIndicator](property): [](boolean) = `#!javascript false`
:   是否显示玩家标记

    !!! info "Arena 独有"
        该属性仅在Arena编辑器中使用

[scale](property): [](number) = `#!javascript 1`
:   玩家的缩放比例，`#!javascript 1`为正常大小

    ??? example "示例"

        ```javascript
        // 玩家进入游戏的时候缩小到0.25倍
        world.onPlayerJoin(({ entity }) => {
            entity.player.scale = 0.25;
        });
        ```

[emissive](property): [](number)
:   玩家的发光度，范围$[0, 1]$

    !!! warning "警告"
        该属性只会影响玩家本身会显示的模型（通过[invisible](property)控制是否显示的那个模型），而不是[mesh](property)那个模型

    ??? example "示例"

        ```javascript
        // 使玩家发光
        world.onPlayerJoin(({ entity }) => {
            entity.player.emissive = 1;
        });
        ```

[metalness](property): [](number)
:   玩家的金属感

    !!! warning "警告"
        该属性只会影响玩家本身会显示的模型（通过[invisible](property)控制是否显示的那个模型），而不是[mesh](property)那个模型

[shininess](property): [](number)
:   玩家的反光度

    !!! warning "警告"
        该属性只会影响玩家本身会显示的模型（通过[invisible](property)控制是否显示的那个模型），而不是[mesh](property)那个模型

### 聊天
[muted](property): [](boolean)
:   玩家是否被禁言

    !!! info "不适用于Arena编辑器"

        该属性在Arena编辑器已弃用

### 战斗相关
[dead](readonly): [](boolean) = `#!javascript false`
:   玩家是否已死亡（触发过死亡事件且还没触发过重生事件）

    !!! warning "警告"
        该属性的更改只和[](Box3DieEvent) / [](GameDieEvent)和[](Box3RespawnEvent) / [](GameRespawnEvent)的触发有关，不和玩家血量有关

### 摄像机相关
[cameraEntity](property): [](Box3Entity) / [](GameEntity)
:   玩家第一人称视角（`#!javascript 'fps'`）、第三人称跟随视角（`#!javascript 'follow'`）或相对视角（`#!javascript 'relative'`）下，玩家视角所跟随的实体

[cameraMode](property): [](Box3CameraMode) / [](GameCameraMode)
:   玩家的相机视角模式

[cameraPosition](property): [](Box3Vector3) / [](GameVector3)
:   玩家固定视角（`#!javascript 'fixed'`）或相对视角（`#!javascript 'relative'`）下，镜头的位置

[cameraTarget](property): [](Box3Vector3) / [](GameVector3)
:   玩家固定视角（`#!javascript 'fixed'`）或相对视角（`#!javascript 'relative'`）下，镜头所朝向的目标点

[cameraUp](property): [](Box3Vector3) = `#!javascript new Box3Vector3(0, 1, 0)` / [](GameVector3) = `new GameVector3(0, 1, 0)`
:   玩家固定视角（`#!javascript 'fixed'`）或相对视角（`#!javascript 'relative'`）下，镜头向上的矢量

[cameraFovY](property): [](number) = `#!javascript 0.25`
:   玩家垂直方向的视场角，在任何相机视角模式都适用

[cameraFreezedAxis](hiddenProperty): [](Box3CameraFreezedAxis) = `#!javascript ''` / [](GameCameraFreezedAxis) = `#!javascript ''`
:   玩家在相对视角（`#!javascript 'relative'`）下，冻结的摄像机轴

[cameraDistance](hiddenProperty): [](number)
:   第三人称跟随视角（`#!javascript 'follow'`）下，玩家摄像机到玩家实体的距离

[colorLUT](property): [](string)
:   玩家的画面滤镜，格式为`#!javascript lut/*.lut`

[freezedForwardDirection](hiddenProperty): [](Box3Vector3) / [](GameVector3) | [](null)
:   将玩家摄像机的方向沿y轴固定，默认为[](null)  
    若为[](null)，不固定摄像机；否则玩家的摄像机只能沿设定方向上下移动

[cameraPitch](readonly): [](number)
:   玩家视角准心绕x轴（视角的上下移动）的旋转**弧度**

    !!! info "Arena 独有"
        该属性仅在Arena编辑器中使用

[cameraYaw](readonly): [](number)
:   玩家视角准心绕y轴（视角的左右移动）的旋转**弧度**

    !!! info "Arena 独有"
        该属性仅在Arena编辑器中使用


### 输入
[enableAction0](property): [](boolean) = `#!javascript true`
:   是否启用Action0键  
    电脑端为鼠标左键，移动端为“A”按钮

[enableAction1](property): [](boolean) = `#!javascript true`
:   是否启用Action1键  
    电脑端为鼠标右键，移动端为“B”按钮

[enableJump](property): [](boolean) = `#!javascript true`
:   是否允许玩家跳跃（按下跳跃键）

[enableCrouch](hiddenProperty): [](boolean) = `#!javascript true`
:   是否允许玩家蹲下（按下蹲下键）

    !!! info "Arena 独有"
        该属性仅在Arena编辑器中使用

[enableDoubleJump](property): [](boolean) = `#!javascript true`
:   是否允许玩家二段跳跃

[action0Button](readonly): [](boolean)
:   玩家是否按下Action0键
    电脑端为鼠标左键，移动端为“A”按钮

[action1Button](readonly): [](boolean)
:   玩家是否按下Action1键
    电脑端为鼠标右键，移动端为“B”按钮

[crouchButton](readonly): [](boolean)
:   玩家是否按下蹲下键

[jumpButton](readonly): [](boolean)
:   玩家是否按下跳跃键

[disableInputDirection](property): [](Box3InputDirection) / [](GameInputDirection)
:   若玩家为移动端，禁用指定方向的摇杆输入偏移量，当横纵两个方向均被禁用时，将不显示此玩家的触屏虚拟摇杆。  
    若玩家为电脑端，禁用指定方向的方向键

[swapInputDirection](hiddenProperty): [](boolean) = `#!javascript false`
:   是否交换垂直和水平的输入方向

[reverseInputDirection](hiddenProperty): [](boolean) = `#!javascript false`
:   是否反转输入方向

[enable3DCursor](property): [](boolean) = `#!javascript false`
:   是否启动玩家的3D光标

### 运动相关
[canFly](property): [](boolean) = `#!javascript false`
:   是否允许玩家飞行

[spectator](property): [](boolean) = `#!javascript false`
:   是否启用旁观者模式  
    若为`#!javascript true`，则玩家可以穿墙和飞行 ~~（什么飞行挂）~~

[walkSpeed](property): [](number) = `#!javascript 0.22`
:   最大步行速度

[walkAcceleration](property): [](number) = `#!javascript 0.19`
:   步行加速度

[runSpeed](property): [](number) = `#!javascript 0.4`
:   最大跑步速度

[runAcceleration](property): [](number) = `#!javascript 0.35`
:   跑步加速度

[crouchSpeed](property): [](number) = `#!javascript 0.1`
:   最大潜行速度

[crouchAcceleration](property): [](number) = `#!javascript 0.09`
:   潜行加速度

[flySpeed](property): [](number) = `#!javascript 2`
:   最大飞行速度

[flyAcceleration](property): [](number) = `#!javascript 2`
:   飞行加速度

[swimSpeed](property): [](number) = `#!javascript 0.4`
:   最大游泳速度

[swimAcceleration](property): [](number) = `#!javascript 0.1`
:   游泳加速度

[jumpPower](property): [](number) = `#!javascript 0.96`
:   跳跃力度

[jumpSpeedFactor](property): [](number) = `#!javascript 0.85`
:   跳跃时的水平速度

[jumpAccelerationFactor](property): [](number) = `#!javascript 0.55`
:   跳跃加速率

[doubleJumpPower](property): [](number) = `#!javascript 0.9`
:   二段跳跃力度

[moveState](readonly): [](Box3PlayerMoveState) / [](GamePlayerMoveState)
:   只读，玩家的移动状态

[walkState](property): [](Box3PlayerWalkState) / [](GamePlayerWalkState)
:   只读，玩家的步行状态

### 声音
[action0Sound](property): [](Box3SoundEffect) / [](GameSoundEffect)
:   当玩家按下Action0（鼠标左键/移动端A键）键时，播放的声音  
    [action0Sound](property).[sample](property)默认为`#!javascript ''`

[action1Sound](property): [](Box3SoundEffect) / [](GameSoundEffect)
:   当玩家按下Action1（鼠标右键/移动端B键）键时，播放的声音
    [action1Sound](property).[sample](property)默认为`#!javascript ''`

[crouchSound](property): [](Box3SoundEffect) / [](GameSoundEffect)
:   当玩家按下蹲下键时，播放的声音
    [crouchSound](property).[sample](property)默认为`#!javascript ''`

[jumpSound](property): [](Box3SoundEffect) / [](GameSoundEffect)
:   当玩家按下跳跃键时，播放的声音
    [jumpSound](property).[sample](property)默认为`#!javascript 'audio/jump.mp3'`

[doubleJumpSound](property): [](Box3SoundEffect) / [](GameSoundEffect)
:   当玩家二段跳时，播放的声音
    [doubleJumpSound](property).[sample](property)默认为`#!javascript 'audio/double_jump.mp3'`

[landSound](property): [](Box3SoundEffect) / [](GameSoundEffect)
:   当玩家落地时，播放的声音
    [landSound](property).[sample](property)默认为`#!javascript 'audio/land.mp3'`

[enterWaterSound](property): [](Box3SoundEffect) / [](GameSoundEffect)
:   当玩家进入液体时，播放的声音
    [enterWaterSound](property).[sample](property)默认为`#!javascript 'audio/dive.mp3'`

[leaveWaterSound](property): [](Box3SoundEffect) / [](GameSoundEffect)
:   当玩家离开液体时，播放的声音
    [leaveWaterSound](property).[sample](property)默认为`#!javascript 'audio/splash.mp3'`

[swimSound](property): [](Box3SoundEffect) / [](GameSoundEffect)
:   当玩家游泳时，播放的声音；若玩家在水中停留，则不会播放声音
    [swimSound](property).[sample](property)默认为`#!javascript 'audio/swim.mp3'`

[spawnSound](property): [](Box3SoundEffect) / [](GameSoundEffect)
:   当玩家重生时，播放的声音
    [spawnSound](property).[sample](property)默认为`#!javascript 'audio/land.mp3'`

[stepSound](property): [](Box3SoundEffect) / [](GameSoundEffect)
:   当玩家行走时，播放的声音
    [stepSound](property).[sample](property)默认为`#!javascript 'audio/step.mp3'`

[startFlySound](property): [](Box3SoundEffect) / [](GameSoundEffect)
:   当玩家开始飞行时，播放的声音
    [startFlySound](property).[sample](property)默认为`#!javascript 'audio/land.mp3'`

[stopFlySound](property): [](Box3SoundEffect) / [](GameSoundEffect)
:   当玩家结束飞行时，播放的声音
    [stopFlySound](property).[sample](property)默认为`#!javascript 'audio/land.mp3'`

[music](property): [](Box3SoundEffect) / [](GameSoundEffect)
:   该玩家背景音乐，仅该玩家能听见

    !!! warning "警告"

        若同时在设置中设置了背景音乐和[music](property)的值，两种音乐会同时播放

## 方法
### 基础
[kick](hiddenMethod)() => [](void)
:   将该玩家移出地图

    !!! danger "警告"

        该方法十分危险，对编辑端和游玩端都有效，在地图运行前需要检查代码中的该方法，否则可能会造成无法进入地图的问题！

### 外观
[setSkinByName](method)([skinName](arg): [](string)): [](void)
:   将指定皮肤套装应用到此玩家上。  
    当皮肤名称不存在于项目皮肤库或不符合类型定义时，无事发生，并会在控制台打印警告。

    !!! info "Arena 独有"
        该属性仅在Arena编辑器中使用

    !!! info "提示"
        通过此处修改皮肤不会影响皮肤的隐藏状态，设置前是隐藏的，设置后也还是隐藏着。

[resetToDefaultSkin](method)(): [](void)
:   重置此玩家的皮肤配置为默认皮肤配置，效果同[setSkinByName](method)传入了默认皮肤套装名称。

[clearSkin](method)(): [](void)
:   清除地图对此玩家应用的皮肤配置，将此玩家的皮肤配置为仅展示玩家自己的皮肤。

!!! note "内容待补充"

    未来将补充[resetToDefaultSkin](method)和[clearSkin](method)的区别

[addWearable](method)([spec](arg): [](Partial)<[](Box3Wearable) / [](GameWearable)>): [](Box3Wearable) / [](GameWearable)
:   在玩家某身体部位附上穿戴配件物体

    !!! warning "警告"
        该函数返回的值才是玩家实际穿上的穿戴配件（你可以理解为你填入的[spec](arg)本身没有穿到玩家身上，穿到玩家身上的是[spec](arg)的复制品，该函数返回该复制品）  
        若想移除该穿戴配件，应该在[removeWearable](method)中填入该函数的返回值，而不是你填入的参数

    ??? example "示例"

        === "旧版编辑器"

            ```javascript
            world.onPlayerJoin(({ entity }) => {
                entity.player.addWearable({
                    bodyPart: Box3BodyPart.TORSO,
                    mesh: 'mesh/黄色书包.vb',
                    orientation: new Box3Quaternion(0, 1, 0, 0).rotateY(Math.PI/2),
                    scale: new Box3Vector3(0.5, 0.5, 0.5),
                    offset: new Box3Vector3(0, 0, -0.45),
                });
            });
            ```

        === "Arena编辑器"

            ```javascript
            world.onPlayerJoin(({ entity }) => {
                entity.player.addWearable({
                    bodyPart: GameBodyPart.TORSO,
                    mesh: 'mesh/黄色书包.vb',
                    orientation: new GameQuaternion(0, 1, 0, 0).rotateY(Math.PI/2),
                    scale: new GameVector3(0.5, 0.5, 0.5),
                    offset: new GameVector3(0, 0, -0.45),
                });
            });
            ```

[removeWearable](method)([wearable](arg): [](Box3Wearable) / [](GameWearable)): [](void)
:   在玩家某身体部位移除穿戴配件物体

    !!! warning "警告"
        [wearable](arg)参数应该填写的是[addWearable](method)或[wearables](method)方法的返回值，而不是参数！！！

    ??? example "示例"

        === "旧版编辑器"

            ```javascript
            // 在玩家进入液体时把穿戴配件'潜水镜'在玩家头上附带
            world.onFluidEnter(({ entity }) => {
                if (!entity.isPlayer) 
                    return;
                entity.player.addWearable({
                bodyPart: Box3BodyPart.HEAD,
                    mesh: 'mesh/潜水镜.vb',
                    orientation: new Box3Quaternion(0, 1, 0, 0),
                    scale: new Box3Vector3(1, 1, 1),
                    offset: new Box3Vector3(0, 0, 0.5),
                });
            });
            // 在玩家离开液体时把在玩家头上的穿戴配件删除
            world.onFluidLeave(({ entity }) => {
                if (!entity.isPlayer) 
                    return;
                const headWears = entity.player.wearables(Box3BodyPart.HEAD); 
                // 假设只有1个装备 `headWears[0]` 
                entity.player.removeWearable(headWears[0]);
            });
            ```

        === "Arena编辑器"

            ```javascript
            // 在玩家进入液体时把穿戴配件'潜水镜'在玩家头上附带
            world.onFluidEnter(({ entity }) => {
                if (!entity.isPlayer) 
                    return;
                entity.player.addWearable({
                    bodyPart: GameBodyPart.HEAD,
                    mesh: 'mesh/潜水镜.vb',
                    orientation: new GameQuaternion(0, 1, 0, 0),
                    scale: new GameVector3(1, 1, 1),
                    offset: new GameVector3(0, 0, 0.5),
                });
            });
            // 在玩家离开液体时把在玩家头上的穿戴配件删除
            world.onFluidLeave(({ entity }) => {
                if (!entity.isPlayer) 
                    return;
                const headWears = entity.player.wearables(GameBodyPart.HEAD); 
                // 假设只有1个装备 `headWears[0]` 
                entity.player.removeWearable(headWears[0]);
            });
            ```
    
    ???+ failure "错误示例"

        === "旧版编辑器"

            ```javascript
            // 尝试玩家进入地图后把穿戴配件'潜水镜'在玩家头上附带，5s后移除
            world.onPlayerJoin(async ({ entity }) => {
                let wearable = {
                    bodyPart: Box3BodyPart.HEAD,
                    mesh: 'mesh/潜水镜.vb',
                    orientation: new Box3Quaternion(0, 1, 0, 0),
                    scale: new Box3Vector3(1, 1, 1),
                    offset: new Box3Vector3(0, 0, 0.5),
                }
                entity.player.addWearable(wearable);        // 可以正常添加
                await sleep(5e3);
                entity.player.removeWearable(wearable);     // 由于填写的参数wearable是addWearable方法的参数而不是返回值，无法移除穿戴配件
            });
            ```

        === "Arena编辑器"

            ```javascript
            // 尝试玩家进入地图后把穿戴配件'潜水镜'在玩家头上附带，5s后移除
            world.onPlayerJoin(async ({ entity }) => {
                let wearable = {
                    bodyPart: GameBodyPart.HEAD,
                    mesh: 'mesh/潜水镜.vb',
                    orientation: new GameQuaternion(0, 1, 0, 0),
                    scale: new GameVector3(1, 1, 1),
                    offset: new GameVector3(0, 0, 0.5),
                }
                entity.player.addWearable(wearable);        // 可以正常添加
                await sleep(5e3);
                entity.player.removeWearable(wearable);     // 由于填写的参数wearable是addWearable方法的参数而不是返回值，无法移除穿戴配件
            });
            ```

    ???+ success "正确示例"

        === "旧版编辑器"

            ```javascript
            // 尝试玩家进入地图后把穿戴配件'潜水镜'在玩家头上附带，5s后移除
            world.onPlayerJoin(async ({ entity }) => {
                let wearable = {
                    bodyPart: Box3BodyPart.HEAD,
                    mesh: 'mesh/潜水镜.vb',
                    orientation: new Box3Quaternion(0, 1, 0, 0),
                    scale: new Box3Vector3(1, 1, 1),
                    offset: new Box3Vector3(0, 0, 0.5),
                }
                let w = entity.player.addWearable(wearable);        // 可以正常添加
                await sleep(5e3);
                entity.player.removeWearable(w);                    // 由于填写的参数w是addWearable方法的返回值，能够移除穿戴配件
            });
            ```

        === "Arena编辑器"

            ```javascript
            // 尝试玩家进入地图后把穿戴配件'潜水镜'在玩家头上附带，5s后移除
            world.onPlayerJoin(async ({ entity }) => {
                let wearable = {
                    bodyPart: GameBodyPart.HEAD,
                    mesh: 'mesh/潜水镜.vb',
                    orientation: new GameQuaternion(0, 1, 0, 0),
                    scale: new GameVector3(1, 1, 1),
                    offset: new GameVector3(0, 0, 0.5),
                }
                let w = entity.player.addWearable(wearable);        // 可以正常添加
                await sleep(5e3);
                entity.player.removeWearable(w);                    // 由于填写的参数w是addWearable方法的返回值，能够移除穿戴配件
            });
            ```

[wearables](method)([bodyPart](arg)?: [](Box3BodyPart) / [](GameBodyPart)): [](Box3Wearable)[] / [](GameWearable)[]
:   列举在玩家上所有的穿戴配件物体  
    该方法获取的穿戴部件可以用于[removeWearable](method)方法

    | 参数 | 类型 | 说明 |
    | - | - | - |
    | [bodyPart](arg)? | [](Box3BodyPart) / [](GameBodyPart) | 选填，若填写，则只列举所填部位的所有穿戴部件 |

    | 返回值 | 类型 | 说明 |
    | - | - | - |
    | | [](Box3Wearable)[] / [](GameWearable)[] | 获取的所有穿戴配件 |

    !!! warning "警告"

        虽然这个方法的命名很像一个属性，但其实这是一个方法  
        具体见下面的示例
        
    ???+ failure "错误示例"

        ```javascript
        // 玩家按下右键时，告诉玩家所有穿戴配件的数量
        world.onPress(({ entity, button }) => {
            if(button === 'action1') {
                entity.player.directMessage(`你有 ${entity.player.wearables.length} 个穿戴配件`);
            }
        });
        ```

    ???+ success "正确示例"

        ```javascript
        // 玩家按下右键时，告诉玩家所有穿戴配件的数量
        world.onPress(({ entity, button }) => {
            if(button === 'action1') {
                entity.player.directMessage(`你有 ${entity.player.wearables().length} 个穿戴配件`);
            }
        });
        ```

    ??? example "示例"

        ```javascript
        // 玩家按下右键时，告诉玩家头上穿戴配件的数量
        world.onPress(({ entity, button }) => {
            if(button === 'action1') {
                entity.player.directMessage(`你头上有 ${entity.player.wearables('head').length} 个穿戴配件`);
            }
        });
        ```

### 聊天
[directMessage](method)([message](arg): [](string)[]) => [](void)
:   向玩家私信

### 对话框
[dialog](method): [](Box3DialogCall) / [](GameDialogCall)
:   打开一个对话框

    !!! note "示例最多的一次"

        该方法的示例是全文档中最多的，共9个正确示例+1个错误示例

    !!! tip "你知道吗"

        对话框是可以单独使用代码关闭的，详见[](Box3DialogCancelOption) / [](GameDialogCancelOption)

    !!! warning "警告"

        在打开对话框（特别是选择和输入对话框）时，需要注意其调用  
        该方法返回的是一个[](Promise) & ([](Box3DialogCancelOption) / [](GameDialogCancelOption))，而不是直接的结果

    ???+ failure "错误示例"

        ```javascript
        world.onPlayerJoin(({ entity }) => {
            var result = entity.player.dialog({         // 此处无await，对话框还没关闭就会执行之后的代码；同时result是一个Promise & (Box3DialogCancelOption / GameDialogCancelOption)，而不是选择结果
                type: 'select',
                title: '系统',
                content: `${entity.player.name}，你想看看box3-docs的更新日志吗`,
                options: ['让我看看！', '下次一定']
            });
            if(result && result.index === 0) {          // 此处也没有await，result是一个Promise & (Box3DialogCancelOption / GameDialogCancelOption)，而不是选择结果
                entity.player.dialog({                  // 此处没有await，下一个对话框会在这个对话框弹出之后立刻弹出，而不是这个对话框关闭后弹出
                    type: 'text',
                    title: 'box3-docs 更新日志',
                    content: "新增Box3World / GameWorld页面\n新增Box3Entity / GameEntity页面\n新增Box3Player / GamePlayer页面\n新增db & Box3Database页面",
                    hasArrow: true
                });
                entity.player.dialog({                  // 此处没有await，之后代码会在这个对话框弹出之后立刻执行，而不是这个对话框关闭后执行
                    type: 'text',
                    title: 'box3-docs 更新日志',
                    content: "新增Box3Vector3 / GameVector3页面\n新增Box3Bounds3 / GameBounds3页面\n新增Box3RGBColor / GameRGBColor页面\n新增Box3RGBAColor / GameRGBAColor页面",
                    hasArrow: false
                });
            }
        });
        ```

    ???+ success "正确示例"

        下面是上面的错误示例的几种正确写法  
        实际使用时，可以将`await`和[](Promise)搭配使用，而不是像下面只使用一种
        === "`await`写法1"

            ```javascript
            world.onPlayerJoin(async ({ entity }) => {              // 注意此处有个async，否则后面不能用await
                var result = await entity.player.dialog({           // 此处有await，result是选择结果
                    type: 'select',
                    title: '系统',
                    content: `${entity.player.name}，你想看看box3-docs的更新日志吗`,
                    options: ['让我看看！', '下次一定']
                });
                if(result && result.index === 0) {
                    await entity.player.dialog({                    // 此处若没有await，下一个对话框会在这个对话框弹出之后立刻弹出，而不是这个对话框关闭后弹出。文本对话框是否有await应根据实际情况而定
                        type: 'text',
                        title: 'box3-docs 更新日志',
                        content: "新增Box3World / GameWorld页面\n新增Box3Entity / GameEntity页面\n新增Box3Player / GamePlayer页面\n新增db & Box3Database页面",
                        hasArrow: true
                    });
                    await entity.player.dialog({                    // 此处若没有await，之后代码会在这个对话框弹出之后立刻执行，而不是这个对话框关闭后执行。文本对话框是否有await应根据实际情况而定
                        type: 'text',
                        title: 'box3-docs 更新日志',
                        content: "新增Box3Vector3 / GameVector3页面\n新增Box3Bounds3 / GameBounds3页面\n新增Box3RGBColor / GameRGBColor页面\n新增Box3RGBAColor / GameRGBAColor页面",
                        hasArrow: false
                    });
                }
            });
            ```

        === "`await`写法2"

            ```javascript
            world.onPlayerJoin(async ({ entity }) => {              // 注意此处有个async，否则后面不能用await
                var result = entity.player.dialog({                 // 此处没有await，result是一个Promise & (Box3DialogCancelOption / GameDialogCancelOption)，而不是选择结果
                    type: 'select',
                    title: '系统',
                    content: `${entity.player.name}，你想看看box3-docs的更新日志吗`,
                    options: ['让我看看！', '下次一定']
                });
                if((await result) && (await result).index === 0) {  // 此处有await，(await result)是选择结果。注意：这会堵塞下面的代码，只有在对话框关闭之后才会继续执行下面的代码
                    await entity.player.dialog({                    // 此处若没有await，下一个对话框会在这个对话框弹出之后立刻弹出，而不是这个对话框关闭后弹出。文本对话框是否有await应根据实际情况而定
                        type: 'text',
                        title: 'box3-docs 更新日志',
                        content: "新增Box3World / GameWorld页面\n新增Box3Entity / GameEntity页面\n新增Box3Player / GamePlayer页面\n新增db & Box3Database页面",
                        hasArrow: true
                    });
                    await entity.player.dialog({                    // 此处若没有await，之后代码会在这个对话框弹出之后立刻执行，而不是这个对话框关闭后执行。文本对话框是否有await应根据实际情况而定
                        type: 'text',
                        title: 'box3-docs 更新日志',
                        content: "新增Box3Vector3 / GameVector3页面\n新增Box3Bounds3 / GameBounds3页面\n新增Box3RGBColor / GameRGBColor页面\n新增Box3RGBAColor / GameRGBAColor页面",
                        hasArrow: false
                    });
                }
            });
            ```

        === "`await`写法2（带自动关闭）-1"

            ```javascript
            world.onPlayerJoin(async ({ entity }) => {              // 注意此处有个async，否则后面不能用await
                var dialog = entity.player.dialog({                 // 此处没有await，result是一个Promise & (Box3DialogCancelOption / GameDialogCancelOption)，而不是选择结果
                    type: 'select',
                    title: '系统',
                    content: `${entity.player.name}，你想看看box3-docs的更新日志吗（5s后关闭）`,
                    options: ['让我看看！', '下次一定']
                });
                // 不能放在await dialog之后，因为await dialog会堵塞代码，也就是说，放在await dialog之后才会启动setTimeout
                setTimeout(() => {                                  // 这里也可以换成异步函数
                    dialog.cancel();
                }, 5e3);
                let result = await dialog;                          // 此处有await，result是选择结果。注意：这会堵塞下面的代码，只有在对话框关闭之后才会继续执行下面的代码
                if(result && result.index === 0) {  
                    await entity.player.dialog({                    // 此处若没有await，下一个对话框会在这个对话框弹出之后立刻弹出，而不是这个对话框关闭后弹出。文本对话框是否有await应根据实际情况而定
                        type: 'text',
                        title: 'box3-docs 更新日志',
                        content: "新增Box3World / GameWorld页面\n新增Box3Entity / GameEntity页面\n新增Box3Player / GamePlayer页面\n新增db & Box3Database页面",
                        hasArrow: true
                    });
                    await entity.player.dialog({                    // 此处若没有await，之后代码会在这个对话框弹出之后立刻执行，而不是这个对话框关闭后执行。文本对话框是否有await应根据实际情况而定
                        type: 'text',
                        title: 'box3-docs 更新日志',
                        content: "新增Box3Vector3 / GameVector3页面\n新增Box3Bounds3 / GameBounds3页面\n新增Box3RGBColor / GameRGBColor页面\n新增Box3RGBAColor / GameRGBAColor页面",
                        hasArrow: false
                    });
                }
            });
            ```

        === "`await`写法2（带自动关闭）-2"

            ```javascript
            world.onPlayerJoin(async ({ entity }) => {                  // 注意此处有个async，否则后面不能用await
                var dialog = entity.player.dialog({                     // 此处没有await，result是一个Promise & (Box3DialogCancelOption / GameDialogCancelOption)，而不是选择结果
                    type: 'select',
                    title: '系统',
                    content: `${entity.player.name}，你想看看box3-docs的更新日志吗（5s后关闭）`,
                    options: ['让我看看！', '下次一定']
                });
                (async () => {
                    if((await dialog) && (await dialog).index === 0) {  // 此处有await，(await result)是选择结果。注意：这会堵塞下面的代码，只有在对话框关闭之后才会继续执行下面的代码
                        await entity.player.dialog({                    // 此处若没有await，下一个对话框会在这个对话框弹出之后立刻弹出，而不是这个对话框关闭后弹出。文本对话框是否有await应根据实际情况而定
                            type: 'text',
                            title: 'box3-docs 更新日志',
                            content: "新增Box3World / GameWorld页面\n新增Box3Entity / GameEntity页面\n新增Box3Player / GamePlayer页面\n新增db & Box3Database页面",
                            hasArrow: true
                        });
                        await entity.player.dialog({                    // 此处若没有await，之后代码会在这个对话框弹出之后立刻执行，而不是这个对话框关闭后执行。文本对话框是否有await应根据实际情况而定
                            type: 'text',
                            title: 'box3-docs 更新日志',
                            content: "新增Box3Vector3 / GameVector3页面\n新增Box3Bounds3 / GameBounds3页面\n新增Box3RGBColor / GameRGBColor页面\n新增Box3RGBAColor / GameRGBAColor页面",
                            hasArrow: false
                        });
                    }
                })();
                // 这时就可以放到下面了
                setTimeout(() => {                                      // 这里也可以换成异步函数
                    dialog.cancel();
                }, 5e3);
            });
            ```

        === "[](Promise)写法1"

            ```javascript
            world.onPlayerJoin(({ entity }) => {        // 此处无需async
                var dialog = entity.player.dialog({     // 此处没有await，dialog是一个Promise & (Box3DialogCancelOption / GameDialogCancelOption)，而不是选择结果
                    type: 'select',
                    title: '系统',
                    content: `${entity.player.name}，你想看看box3-docs的更新日志吗`,
                    options: ['让我看看！', '下次一定']
                });
                dialog.then((result) => {               // 此处不会堵塞代码的运行，下面的代码可以继续运行
                    if(result && result.index === 0) {
                        entity.player.dialog({          // 对话框会依次打开
                            type: 'text',
                            title: 'box3-docs 更新日志',
                            content: "新增Box3World / GameWorld页面\n新增Box3Entity / GameEntity页面\n新增Box3Player / GamePlayer页面\n新增db & Box3Database页面",
                            hasArrow: true
                        }).then((resolve) => {
                            entity.player.dialog({
                                type: 'text',
                                title: 'box3-docs 更新日志',
                                content: "新增Box3Vector3 / GameVector3页面\n新增Box3Bounds3 / GameBounds3页面\n新增Box3RGBColor / GameRGBColor页面\n新增Box3RGBAColor / GameRGBAColor页面",
                                hasArrow: false
                            });
                        });
                    }
                });
            });
            ```

        === "[](Promise)写法2"

            ```javascript
            world.onPlayerJoin(({ entity }) => {        // 此处无需async
                var dialog = entity.player.dialog({     // 此处没有await，dialog是一个Promise & (Box3DialogCancelOption / GameDialogCancelOption)，而不是选择结果
                    type: 'select',
                    title: '系统',
                    content: `${entity.player.name}，你想看看box3-docs的更新日志吗`,
                    options: ['让我看看！', '下次一定']
                });
                dialog.then((result) => {               // 此处不会堵塞代码的运行，下面的代码可以继续运行
                    if (result && result.index === 0) return result;
                    else throw "";
                }).then(() => entity.player.dialog({    // 对话框会依次打开
                    type: 'text',
                    title: 'box3-docs 更新日志',
                    content: "新增Box3World / GameWorld页面\n新增Box3Entity / GameEntity页面\n新增Box3Player / GamePlayer页面\n新增db & Box3Database页面",
                    hasArrow: true
                })).then(() => entity.player.dialog({
                    type: 'text',
                    title: 'box3-docs 更新日志',
                    content: "新增Box3Vector3 / GameVector3页面\n新增Box3Bounds3 / GameBounds3页面\n新增Box3RGBColor / GameRGBColor页面\n新增Box3RGBAColor / GameRGBAColor页面",
                    hasArrow: false
                })).catch(() => {
                    console.log('关闭对话框');
                });
            });
            ```

        === "[](Promise)写法3"

            ```javascript
            world.onPlayerJoin(({ entity }) => {        // 此处无需async
                var dialog = entity.player.dialog({     // 此处没有await，dialog是一个Promise & (Box3DialogCancelOption / GameDialogCancelOption)，而不是选择结果
                    type: 'select',
                    title: '系统',
                    content: `${entity.player.name}，你想看看box3-docs的更新日志吗`,
                    options: ['让我看看！', '下次一定']
                });
                dialog.then((result) => {               // 此处不会堵塞代码的运行，下面的代码可以继续运行
                    if (result && result.index === 0) return result;
                    else throw "";
                }).then(() => {
                    entity.player.dialog({              // 对话框会一起打开
                        type: 'text',
                        title: 'box3-docs 更新日志',
                        content: "新增Box3World / GameWorld页面\n新增Box3Entity / GameEntity页面\n新增Box3Player / GamePlayer页面\n新增db & Box3Database页面",
                        hasArrow: true
                    });
                    return;
                }).then(() => {
                    entity.player.dialog({
                        type: 'text',
                        title: 'box3-docs 更新日志',
                        content: "新增Box3Vector3 / GameVector3页面\n新增Box3Bounds3 / GameBounds3页面\n新增Box3RGBColor / GameRGBColor页面\n新增Box3RGBAColor / GameRGBAColor页面",
                        hasArrow: false
                    });
                    return;
                }).catch(() => {
                    console.log('关闭对话框');
                });
            });
            ```

        === "[](Promise)写法3（带自动关闭）"

            ```javascript
            world.onPlayerJoin(({ entity }) => {        // 此处无需async
                var dialog = entity.player.dialog({     // 此处没有await，dialog是一个Promise & (Box3DialogCancelOption / GameDialogCancelOption)，而不是选择结果
                    type: 'select',
                    title: '系统',
                    content: `${entity.player.name}，你想看看box3-docs的更新日志吗（5s后关闭）`,
                    options: ['让我看看！', '下次一定']
                });
                dialog.then((result) => {               // 此处不会堵塞代码的运行，下面的代码可以继续运行
                    if (result && result.index === 0) return result;
                    else throw "";
                }).then(() => {
                    entity.player.dialog({              // 对话框会一起打开
                        type: 'text',
                        title: 'box3-docs 更新日志',
                        content: "新增Box3World / GameWorld页面\n新增Box3Entity / GameEntity页面\n新增Box3Player / GamePlayer页面\n新增db & Box3Database页面",
                        hasArrow: true
                    });
                    return;
                }).then(() => {
                    entity.player.dialog({
                        type: 'text',
                        title: 'box3-docs 更新日志',
                        content: "新增Box3Vector3 / GameVector3页面\n新增Box3Bounds3 / GameBounds3页面\n新增Box3RGBColor / GameRGBColor页面\n新增Box3RGBAColor / GameRGBAColor页面",
                        hasArrow: false
                    });
                    return;
                }).catch(() => {
                    console.log('关闭对话框');
                });
                // 放在dialog.then上面也行
                setTimeout(() => {                      // 这里也可以换成异步函数
                    dialog.cancel();
                }, 5e3);
            });
            ```

    ??? example "示例"

        ```javascript
        // 先在场景中放置一个名称为 NPC 的实体。
        const npc = world.querySelector('#npc');
        npc.enableInteract = true;
        npc.interactHint = npc.id;
        npc.interactRadius = 16;

        // 玩家与实体进行交互时触发
        npc.onInteract(async ({ entity }) => {
            const result = await entity.player.dialog({
                type: 'select',
                title: npc.id,
                lookTarget: npc,
                content: `${entity.player.name}，你想尝试挑战这个游戏吗？`,
                options: ['当然', '下次吧。']
            });
            console.log(`选择了第 index: ${result.index} 个选项: ${result.value}`)
            // 如果选了第一个选项，也就是'当然'。就会执行特定事件
            if (result.index === 0) {
                npc.say(`${result.value}？那就来吧！`);
            }
        });
        ```

[cancelDialogs](method)(): [](void)
:   关闭玩家所有打开的对话框

#### Box3DialogCall
[](Box3DialogCall) = (  
    ([params](arg): [](Box3TextDialogParams)) => [](Promise)<[](string) | [](null)> & [](Box3DialogCancelOption) |  
    ([params](arg): [](Box3SelectDialogParams)) => [](Promise)<[](Box3DialogSelectResponse) | [](null)> & [](Box3DialogCancelOption) |  
    ([params](arg): [](Box3InputDialogParams)) => [](Promise)<[](string) | [](null)> & [](Box3DialogCancelOption)  
)
:   对话框调用函数

#### GameDialogCall
[](GameDialogCall) = (  
    ([params](arg): [](GameTextDialogParams)) => [](Promise)<[](string) | [](null)> & [](GameDialogCancelOption) |  
    ([params](arg): [](GameSelectDialogParams)) => [](Promise)<[](GameDialogSelectResponse) | [](null)> & [][](GameDialogCancelOption) |  
    ([params](arg): [](GameInputDialogParams)) => [](Promise)<[](string) | [](null)> & [](GameDialogCancelOption)  
)
:   对话框调用函数

### 复活
[forceRespawn](method)(): [](void)
:   将玩家的血量回满，并将玩家传送回出生点  
    会触发[](Box3RespawnEvent) / [](GameRespawnEvent)事件

### 摄像机相关
[setCameraPitch](method)([v](arg): [](number)): [](void)
:   设置玩家视角准心绕x轴（视角的上下移动）的旋转 **弧度**

    !!! info "Arena 独有"
        该方法仅在Arena编辑器中使用

[setCameraYaw](method)([v](arg): [](number)): [](void)
:   设置玩家视角准心绕y轴（视角的左右移动）的旋转 **弧度**

    !!! info "Arena 独有"
        该方法仅在Arena编辑器中使用


### 动画
<method>animate</method> ([keyframes](arg): [](Partial)<[](Box3PlayerKeyframe) / [](GamePlayerKeyframe)>[], [playbackInfo?](arg): [](Partial)<[](Box3AnimationPlaybackConfig) / [](GameAnimationPlaybackConfig)>): [](Box3Animation) / [](GameAnimation)<[](Box3PlayerKeyframe) / [](GamePlayerKeyframe), [](Box3Player) / [](GamePlayer)>
:   创建一个关键帧动画 [](Box3Animation) / [](GameAnimation)

[getAnimations](hiddenMethod)(): [](Box3Animation) / [](GameAnimation)<[](Box3PlayerKeyframe) / [](GamePlayerKeyframe), [](Box3Player) / [](GamePlayer)>[]
:   获取该玩家的所有动画

### 网页 & Web
[link](method)([href](arg): [](string), [options](hiddenArg)?: {[isConfirm](hiddenProperty)?: [](boolean), [isNewTab](hiddenProperty)?: [](boolean)}): [](void)
:   在玩家弹出一个“传送门”窗口，可以跳转到其他地图或任意链接

    !!! warning "目前仅支持神奇代码岛、编程猫、微信文章、Bilibili视频等链接"

    | 参数 | | 类型 | 说明 |
    | - | - | - | - |
    | [href](arg) | | [](string) | 要跳转的链接 |
    | [options](hiddenArg)? | | | 传送门窗口配置选项 |
    | | [isConfirm](hiddenProperty) | [](boolean) | 是否显示确定对话框 |
    | | [isNewTab](hiddenProperty) | [](boolean) | 是否在新标签页打开 |

    !!! danger "警告"

        该方法若使用不当，可能会直接跳转到其他链接，使用时应注意

[postMessage](hiddenMethod)([event](arg): {[type](property): [](string), [value](property): [](object), [isOld](property): [](boolean)}): [](void)
:   向 iframe 父对象发布消息

[addEventListener](hiddenMethod)([type](arg): [](NavigatorEventType), [listener](arg): ([event](arg): {[data](property): [](object)}) => [](void)): [](void)
:   为 iframe 父对象的消息事件添加监听器

### 声音
[sound](method)([spec](arg): {[sample](property): [](string), [gain](property)?: [](number), [pitch](property)?: [](number)} | [](string)): [](Sound)
:   对玩家播放声音

    | 参数 | | 类型 | 说明 |
    | - | - | - | - |
    | [spec](arg) | | [](string) | 声音路径 |
    | [spec](arg) | | | 声音播放参数 |
    | | [sample](property) | [](string) | 声音路径 |
    | | [gain](property) | [](number) = `#!javascript 1` | 音量增益。正常为 1，数值越大，声音越大 |
    | | [pitch](property) | [](number) = `#!javascript 1` | 音高增益。正常为 1，大于 1，音调越高，播放速度越快 |

### 社交
[share](method)([content](arg): [](string)): [](void)
:   为该玩家显示分享弹窗  
    可以通过[content](arg)自定义分享内容，上限40字符。

    !!! info "Arena 独有"
        该方法仅在Arena编辑器中使用

    !!! note "自动标签"

        通过此 API 调用弹出的分享弹框的内容末尾，会自动新起一行添加`#神奇代码岛 #地图`标签，自动添加的内容不计入限制长度内。

    !!! warning "编辑模式下分享的地址是编辑器的地址"

[querySocial](method)([socialType](arg): [](SocialType)): [](Promise)<[](number)[]>
:   查询当前玩家的社交关系，返回玩家 ID 列表

    !!! info "Arena 独有"
        该方法仅在Arena编辑器中使用

[openUserProfileDialog](method)([userId](arg): [](number)): [](void)
:   对当前玩家，调起指定ID玩家的个人主页

    !!! info "Arena 独有"
        该方法仅在Arena编辑器中使用

    !!! tip "提示"
        虽然[userId](arg)所标类型为[](number)，但实际上[](string)也可使用

### 商业化
[openMarketplace](method)([productIds](arg): [](number)()): [](void)
:   打开游戏商店对话框，根据玩家传入的“商品ID”显示相应的产品

    !!! info "Arena 独有"
        该方法仅在Arena编辑器中使用

[getMiaoShells](method)() => [](Promise)<[](number)>
:   获取此用户在当前地图下累计打赏的喵贝壳

    !!! info "Arena 独有"
        该方法仅在Arena编辑器中使用

### 事件
#### 聊天
[onChat](listener) : [](Box3EventChannel) / [](GameEventChannel) <[](Box3ChatEvent) / [](GameChatEvent)>  
[nextChat](promiseEvent) : [](Box3EventFuture) / [](GameEventFuture) <[](Box3ChatEvent) / [](GameChatEvent)>
:   当玩家发言(或未来)触发

#### 复活
[onRespawn](listener) : [](Box3EventChannel) / [](GameEventChannel) <[](Box3RespawnEvent) / [](GameRespawnEvent)>  
[nextRespawn](promiseEvent) : [](Box3EventFuture) / [](GameEventFuture) <[](Box3RespawnEvent) / [](GameRespawnEvent)>
:   玩家复活(或未来)触发

#### 输入
[onPress](listener) : [](Box3EventChannel) / [](GameEventChannel) <[](Box3InputEvent) / [](GameInputEvent)>  
[nextPress](promiseEvent) : [](Box3EventFuture) / [](GameEventFuture) <[](Box3InputEvent) / [](GameInputEvent)>
:   当玩家按下按键(或未来)触发

[onRelease](listener) : [](Box3EventChannel) / [](GameEventChannel) <[](Box3InputEvent) / [](GameInputEvent)>  
[nextRelease](promiseEvent) : [](Box3EventFuture) / [](GameEventFuture) <[](Box3InputEvent) / [](GameInputEvent)>
:   当玩家松开按键(或未来)触发

[onKeyDown](listener) : [](GameEventChannel) <[](GameKeyBoardEvent)>  
:   当玩家按下键盘按键触发

    !!! info "Arena 独有"
        该事件仅在Arena编辑器中使用


[onKeyUp](listener) : [](GameEventChannel) <[](GameKeyBoardEvent)>  
:   当玩家松开键盘按键触发

    !!! info "Arena 独有"
        该事件仅在Arena编辑器中使用
