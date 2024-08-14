---
hide:
  - toc
---

!!! question "这个页面是干什么的"

    鉴于API太多，目录过于混乱，故有此页面  
    这个页面根据用途分类API（以后目录也可能这么分）  
    该页面只包含[JS/TS 参考](./js/index.md)、[API 参考](./api/index.md)、[Client API 参考](./api_client/index.md)的内容

!!! info "提示"

    每张卡片代表一个大功能（模块）的内容，一张卡片里，每一行的所有图标都指向同一个链接

    - [x] 代表页面已完成
    - [ ] 代表页面未完成

## JS/TS参考
<div class="grid cards" markdown>

-   <icon name="namespace">Javascript 基本类型</icon>

    ---
    - [x] <def>string</def> & <def>String</def> <span block>字符串</span>
    - [x] <def>number</def> & <def>Number</def> <span block>数字</span>
    - [x] <def>boolean</def> & <def>Boolean</def> <span block>布尔值</span>
    - [x] <def>null</def> <span block>空值</span>
    - [x] <def>undefined</def> <span block>未定义</span>

-   <icon name="namespace">Typescript 类型</icon>

    ---
    - [x] <def>any</def> <span block>任意类型</span>
    - [x] <def>void</def> <span block>无类型</span>
    - [x] <def>never</def>
    - [x] <def>Partial</def>
</div>

## API 参考
<div class="grid cards" markdown>

-   <icon name="module">世界相关</icon>

    ---
    - [x] <def>world</def> & <def>Box3World</def> / <def>GameWorld</def> <span block>世界</span>
    - [x] <def>Box3TickEvent</def> / <def>GameTickEvent</def> <span block>时钟事件</span>
    - <icon name="namespace">实体创建/销毁</icon>
        - [x] <def>Box3EntityEvent</def> / <def>GameEntityEvent</def> <span block>实体创建销毁事件</span>
        - [x] <def>Box3PlayerEntityEvent</def> / <def>GamePlayerEntityEvent</def> <span block>玩家实体创建销毁事件</span>
    - <icon name="namespace">区域</icon>
        - [x] <def>Box3Zone</def> / <def>GameZone</def> <span block>区域</span>
        - [x] <def>Box3TriggerEvent</def> / <def>GameTriggerEvent</def> <span block>触发器事件</span>
        - [x] <def>Box3ZoneConfig</def> / <def>GameZoneConfig</def> <span block>区域配置</span>
    - <icon name="namespace">实体选择</icon>
        - [x] <def>Box3SelectorString</def> / <def>GameSelectorString</def>
    - <icon name="namespace">射线检测</icon>
        - [x] <def>Box3RaycastOptions</def> / <def>GameRaycastOptions</def> <span block>射线检测配置</span>
        - [x] <def>Box3RaycastResult</def> / <def>GameRaycastResult</def> <span block>射线检测结果</span>


-   <icon name="module">方块</icon>

    ---
    - [x] <def>voxels</def> & <def>Box3Voxels</def> / <def>GameVoxels</def> <span block>方块</span>

-   <icon name="module">实体相关</icon>

    ---
    - [x] <def>Box3Entity</def> / <def>GameEntity</def> <span block>实体</span>
    - [x] <def>Box3EntityConfig</def> / <def>GameEntityConfig</def> <span block>实体配置</span>
    - <icon name="namespace">互动相关</icon>
        - [x] <def>Box3InteractEvent</def> / <def>GameInteractEvent</def> <span block>实体互动事件</span>
    - <icon name="namespace">动作相关</icon>
        - [x] <def>GameMotionController</def> <span block>动作控制器</span>
        - [x] <def>GameMotionHandler</def> <span block>动作处理器</span>
        - [x] <def>GameMotionEvent</def> <span block>动作事件（Arena编辑器）</span>
        - [x] <def>GameMotionConfig</def> <span block>动作配置</span>
        - [x] <def>GameMotionClipConfig</def> <span block>动作序列配置</span>
    - <icon name="namespace">物理相关</icon>
        - [x] <def>Box3EntityContact</def> / <def>GameEntityContact</def> <span block>实体碰撞数据</span>
        - [x] <def>Box3VoxelContact</def> / <def>GameVoxelContact</def> <span block>方块碰撞数据</span>
        - [x] <def>Box3FluidContact</def> / <def>GameFluidContact</def> <span block>液体碰撞数据</span>
        - [x] <def>Box3EntityContactEvent</def> / <def>GameEntityContactEvent</def> <span block>实体碰撞事件</span>
        - [x] <def>Box3VoxelContactEvent</def> / <def>GameVoxelContactEvent</def> <span block>方块碰撞事件</span>
        - [x] <def>Box3FluidContactEvent</def> / <def>GameFluidContactEvent</def> <span block>液体碰撞事件</span>
    - <icon name="namespace">战斗相关</icon>
        - [x] <def>Box3HurtOptions</def> / <def>GameHurtOptions</def> <span block>实体伤害配置</span>
        - [x] <def>Box3DamageEvent</def> / <def>GameDamageEvent</def> <span block>实体伤害事件</span>
        - [x] <def>Box3DieEvent</def> / <def>GameDieEvent</def> <span block>实体死亡事件</span>


-   <icon name="module">玩家相关</icon>

    ---
    - [x] <def>Box3Player</def> / <def>GamePlayer</def> <span block>玩家</span>
    - [x] <def>Box3PlayerEntity</def> / <def>GamePlayerEntity</def> <span block>玩家实体</span>
    - [ ] <def>PlayerNavigator</def> <span block>用户设备相关</span>
    - [x] <def>SocialType</def> <span block>社交类型</span>
    - <icon name="namespace">战斗相关</icon>
        - [x] <def>Box3RespawnEvent</def> / <def>GameRespawnEvent</def> <span block>玩家重生事件</span>
    - <icon name="namespace">穿戴配件</icon>
        - [x] <def>Box3Wearable</def> / <def>GameWearable</def> <span block>穿戴配件</span>
        - [x] <def>Box3BodyPart</def> / <def>GameBodyPart</def> <span block>身体部件类型</span>
    - <icon name="namespace">输入</icon>
        - [x] <def>Box3ChatEvent</def> / <def>GameChatEvent</def> <span block>聊天事件</span>
        - [x] <def>Box3ClickEvent</def> / <def>GameClickEvent</def> <span block>点击事件</span>
        - [x] <def>Box3InputEvent</def> / <def>GameInputEvent</def> <span block>输入事件</span>
        - [x] <def>Box3ButtonType</def> / <def>GameButtonType</def> <span block>按键类型</span>
        - [x] <def>GameKeyBoardEvent</def> <span block>键盘事件</span>
    - <icon name="namespace">摄像机相关</icon>
        - [x] <def>Box3CameraMode</def> / <def>GameCameraMode</def> <span block>摄像机模式</span>
        - [x] <def>Box3InputDirection</def> / <def>GameInputDirection</def> <span block>输入方向</span>
        - [x] <def>Box3CameraFreezedAxis</def> / <def>GameCameraFreezedAxis</def>
    - <icon name="namespace">运动相关</icon>
        - [x] <def>Box3PlayerMoveState</def> / <def>GamePlayerMoveState</def> <span block>玩家移动状态</span>
        - [x] <def>Box3PlayerWalkState</def> / <def>GamePlayerWalkState</def> <span block>玩家步行状态</span>
    - <icon name="namespace">对话框相关</icon>
        - [x] <def>Box3DialogType</def> / <def>GameDialogType</def> <span block>对话框类型</span>
        - [x] <def>Box3DialogCall</def> / <def>GameDialogCall</def> <span block>对话框调用</span>
        - [x] <def>Box3DialogParams</def> / <def>GameDialogParams</def> <span block>对话框配置</span>
        - [x] <def>Box3DialogSelectResponse</def> / <def>GameDialogSelectResponse</def> <span block>选择对话框结果</span>
        - [x] <def>Box3DialogCancelOption</def> / <def>GameDialogCancelOption</def> <span block>对话框取消选项</span>
    - <icon name="namespace">皮肤相关</icon>
        - [x] <def>GameSkin</def> <span block>皮肤</span>
        - [x] <def>GameSkinValue</def> <span block>皮肤值</span>
        - [x] <def>GameSkinInvisible</def> <span block>皮肤隐藏设置</span>

-   <icon name="module">数据库（旧版编辑器）</icon>

    ---
    - [x] <def>db</def> & <def>Box3Database</def> / <def>GameDatabase</def> <span block>数据库</span>
    - [x] <def>Box3QueryResult</def> / <def>GameQueryResult</def> <span block>数据查找结果</span>

-   <icon name="module">数据储存（Arena编辑器）</icon>

    ---
    - [x] <def>storage</def> & <def>GameStorage</def> <span block>数据储存</span>
    - [x] <def>GameDataStorage</def> <span block>数据存储空间</span>
    - [x] <def>QueryList</def> <span block>数据查询列表</span>
    - [x] <def>ListPageOptions</def> <span block>列表翻页配置</span>
    - [x] <def>ReturnValue</def> <span block>数据查询返回</span>

-   <icon name="module">事件</icon>

    ---
    - [x] <def>Box3EventChannel</def> / <def>GameEventChannel</def> <span block>事件频道</span>
    - [x] <def>Box3EventFuture</def> / <def>GameEventFuture</def>
    - [x] <def>Box3EventHandlerToken</def> / <def>GameEventHandlerToken</def> <span block>事件令牌</span>

-   <icon name="module">Box3 基本数据类型</icon>

    ---
    - [x] <def>Box3Vector3</def> / <def>GameVector3</def> <span block>三维向量</span>
    - [ ] <def>Box3Quaternion</def> / <def>GameQuaternion</def> <span block>四元数</span>
    - [x] <def>Box3Bounds3</def> / <def>GameBounds3</def> <span block>三维区域空间</span>
    - [x] <def>Box3RGBColor</def> / <def>GameRGBColor</def> <span block>RGB颜色</span>
    - [x] <def>Box3RGBAColor</def> / <def>GameRGBAColor</def> <span block>RGBA颜色</span>
    - [x] <def>JSONValue</def> <span block>类JSON格式</span>

-   <icon name="module">数据通信</icon>

    ---
    - [x] <constObject>remoteChannel</constObject> & <def>ServerRemoteChannel</def>
    - [x] <def>ServerEvent</def><span block>（Arena编辑器）</span>

-   <icon name="module">动画</icon>

    ---
    - [x] <def>Box3Animation</def> / <def>GameAnimation</def>
    - [x] <def>Box3AnimationEvent</def> / <def>GameAnimationEvent</def> <span block>动画事件</span>
    - [x] <def>Box3AnimationPlaybackState</def> / <def>GameAnimationPlaybackState</def> <span block>动画播放状态</span>
    - [x] <def>Box3AnimationDirection</def> / <def>GameAnimationDirection</def> <span block>动画播放方向</span>
    - [x] <def>Box3Easing</def> / <def>GameEasing</def> <span block>动画缓动效果</span>
    - [x] <def>Box3WorldKeyframe</def> / <def>GameWorldKeyframe</def> <span block>世界关键帧</span>
    - [x] <def>Box3EntityKeyframe</def> / <def>GameEntityKeyframe</def> <span block>实体关键帧</span>
    - [x] <def>Box3PlayerKeyframe</def> / <def>GamePlayerKeyframe</def> <span block>玩家关键帧</span>
    - [x] <def>Box3AnimationPlaybackConfig</def> / <def>GameAnimationPlaybackConfig</def> <span block>动画播放配置参数</span>

-   <icon name="module">声音</icon>

    ---
    - [x] <def>Sound</def><span block>（Arena编辑器）</span>
    - [x] <def>Box3SoundEffect</def> / <def>GameSoundEffect</def> <span block>声音效果配置</span>

-   <icon name="module private">用户图形界面</icon>

    ---
    - [ ] <def>gui</def> & <def>GameGUI</def> <span block>GUI</span>
    - [ ] <def>GUIConfig</def> <span block>GUI配置</span>

-   <icon name="module private">实时语言通信</icon>

    ---
    - [x] <def>rtc</def> & <def>GameRTC</def> <span block>游戏内实时语言通信</span>
    - [x] <def>GameRTCChannel</def> <span block>RTC通道</span>

-   <icon name="module private">HTTP</icon>

    ---
    - [x] <def>http</def> & <def>Box3HttpAPI</def> / <def>GameHttpAPI</def> <span block>HTTP</span>
    - [x] <def>Box3HttpFetchResponse</def> / <def>GameHttpFetchResponse</def> <span block>请求响应</span>
    - [x] <def>Box3HttpRequest</def> / <def>GameHttpRequest</def> <span block>[无效]HTTP请求</span>
    - [x] <def>Box3HttpResponse</def> / <def>GameHttpResponse</def> <span block>[无效]HTTP响应</span>
    - [x] <def>Box3HttpFetchParams</def> <span block>HTTP请求参数</span>
    - [x] <def>GameHttpFetchRequestOptions</def> <span block>HTTP请求配置</span>
    - [x] <def>GameHttpFetchHeaders</def> <span block>HTTP请求头配置</span>
    - [x] <def>Box3HttpHandler</def> / <def>GameHttpHandler</def> <span block>HTTP事件监听器</span>

-   <icon name="module">控制台</icon>

    ---
    - [x] <def>console</def> & <def>GameConsole</def>
    - [x] <def>Box3LoggerMethod</def> / <def>GameLoggerMethod</def> <span block>控制台方法</span>

-   <icon name="module private">资源文件</icon>

    ---
    - [x] <def>resources</def> & <def>Box3ResourceSystem</def> / <def>GameResourceSystem</def>
    - [x] <def>Box3AssetListEntry</def> / <def>GameAssetListEntry</def> <span block>资源文件条目</span>
    - [x] <def>Box3AssetType</def> / <def>GameAssetType</def> <span block>资源文件类型</span>

</div>

## Client API 参考
<div class="grid cards" markdown>

-   <icon name="namespace">Client Box3 基本数据类型</icon>

    ---
    - [x] <def>Vec2</def> <span block>二维向量</span>
    - [x] <def>Vec3</def> <span block>三维向量</span>
    - [x] <def>Coord2</def> <span block>二维位置</span>

-   <icon name="namespace">Ui 节点</icon>

    ---
    - [x] <def>UiNode</def> <span block>节点</span>
    - [x] <def>UiRenderable</def> <span block>可渲染节点</span>
    - [x] <def>UiBox</def> <span block>框架节点</span>
    - [x] <def>UiImage</def> <span block>图像节点</span>
    - [x] <def>UiText</def> <span block>文本节点</span>
    - [x] <def>UiInput</def> <span block>输入框节点</span>
    - [x] <def>PointerEventBehavior</def> <span block>指针事件行为</span>

-   <icon name="namespace">数据通信</icon>

    ---
    - [x] <constObject>remoteChannel</constObject> & <def>ClientRemoteChannel</def> <span block>数据通信（客户端）</span>

-   <icon name="namespace">事件</icon>

    ---
    - [ ] <def>EventEmitter</def> <span block>事件处理器</span>
    - 监听器参数
        - [ ] <def>UiEvent</def> <span block>UI事件</span>
        - [ ] <def>UiInputEvent</def> <span block>输入节点事件</span>
    - 事件映射表
        - [ ] <def>UiNodeEvents</def> <span block>节点事件</span>
        - [ ] <def>PointerLockEvents</def> <span block>鼠标指针锁定事件</span>

</div>
