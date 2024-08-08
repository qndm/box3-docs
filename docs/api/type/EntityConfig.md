<a href="https://github.com/qndm"><img src="https://img.shields.io/badge/%E6%8E%92%E7%89%88%E4%BC%98%E5%8C%96%26%E4%BF%AE%E6%AD%A3-qndm-blue"></img></a>

!!! info "这是一个服务端API"
    该API仅在服务端脚本使用

: [查阅官方文档](https://box3.yuque.com/org-wiki-box3-ev7rl4/guide/mgyn38wvv7ynaoh6)  
  [查阅官方文档（Arena）](https://box3.yuque.com/staff-khn556/wupvz3/vim7evgezkmnvhxk)  
  [查阅社区文档（Arena）](https://www.yuque.com/box3lab/api/wza4aee94r9xamg3#FctKw)

创建实体时使用的参数，包含[](Box3Entity) / [](GameEntity)的一部分属性。

## 属性
- [id](hiddenProperty): [](string) 实体id
- [tags](hiddenProperty): [](string) | () => [](string) 实体标签
- <property>position</property>: [](Box3Vector3) / [](GameVector3) 实体的位置
- <property>velocity</property>: [](Box3Vector3) / [](GameVector3) 实体的速度
- [bounds](hiddenProperty): [](Box3Vector3) / [](GameVector3) 实体碰撞箱大小
- <property>collides</property>: [](boolean) 实体是否可碰撞
- <property>mesh</property>: [](string) 实体的外形。格式为`#!javascript 'mesh/*.vb'`
- <property>meshColor</property>: [](Box3RGBAColor) / [](GameRGBAColor) 实体的颜色，[r](property)、[g](property)、[b](property)、[a](property)的范围都是`#!javascript 0`~`#!javascript 1`
- <property>meshScale</property>: [](Box3Vector3) / [](GameVector3) 实体的缩放比例。其[x](property)、[y](property)、[z](property)为`#!javascript 1`时，一个像素点为一个方块大
- <property>meshOrientation</property>: [](Box3Quaternion) / [](GameQuaternion) 实体的旋转角度
- <property>meshOffset</property>: [](Box3Vector3) / [](GameVector3) 实体的位移
- <property>meshMetalness</property>: [](number) 实体的金属感
- <property>meshEmissive</property>: [](number) 实体的发光度
- <property>meshShininess</property>: [](number) 实体的反光度
- <property>gravity</property>: [](boolean) 实体是否会因重力下落
- <property>fixed</property>: [](boolean) 实体的位置是否固定不动
- <property>mass</property>: [](number) 实体质量
- <property>friction</property>: [](number) 实体的摩擦系数，数值越大，摩擦力越大
- <property>restitution</property>: [](number) 实体的弹性，数值越大，弹性越大
- <property>enableInteract</property>: [](boolean) 是否允许实体进行互动
- <property>interactRadius</property>: [](number) 进入实体互动的范围。范围越小，需更靠近。
- <property>interactHint</property>: [](string) 进入实体互动范围时，实体身上出现的提示文本
- <property>interactColor</property>[](Box3RGBColor) / [](GameRGBColor) 进入实体互动范围时，提示文本的字体颜色，[r](property)、[g](property)、[b](property)的范围都是`#!javascript 0`~`#!javascript 1`
- <property>particleRate</property>: [](number) 实体每秒产生粒子的数量
- <property>particleRateSpread</property>: [](number) 增加实体每秒产生粒子数量的随机性
- <property>particleLimit</property>: [](number) 实体可产生粒子总数的上限
- <property>particleLifetime</property>: [](number) number 实体所产生粒子能存活的秒数
- <property>particleLifetimeSpread</property>: [](number) 增加实体所产生粒子存活时间的随机性
- <property>particleSize</property>: [](number)[] 实体所产生粒子的大小变化，数组中有1~5个元素
- <property>particleSizeSpread</property>: [](number) 增加实体所产生粒子大小的随机性
- <property>particleColor</property>[](Box3RGBColor)[] / [](GameRGBColor)[] 实体所产生粒子的颜色变化，数组中有1~5个元素，[r](property)、[g](property)、[b](property)的范围都是`#!javascript 0`~`#!javascript 1`
- <property>particleVelocity</property>[](Box3Vector3) / [](GameVector3) 实体所产生粒子的初始速度
- <property>particleVelocitySpread</property>[](Box3Vector3) / [](GameVector3) 增加实体所产生粒子初始速度的随机性
- <property>particleDamping</property>: [](number) 实体所产生粒子的阻尼系数
- <property>particleAcceleration</property>[](Box3Vector3) / [](GameVector3) 实体所产生粒子的加速度
- <property>particleNoise</property>: [](number) 实体所产生粒子摆动的最大幅度
- <property>particleNoiseFrequency</property>: [](number) 实体所产生粒子摆动的频率
- <property>chatSound</property>: [](Box3SoundEffect) / [](GameSoundEffect) 实体触发说话事件时播放的音效
- <property>interactSound</property>: [](Box3SoundEffect) / [](GameSoundEffect) 实体触发互动事件时播放的音效
- <property>hurtSound</property>: [](Box3SoundEffect) / [](GameSoundEffect) 实体触发受伤事件时播放的音效
- <property>dieSound</property>: [](Box3SoundEffect) / [](GameSoundEffect) 实体触发死亡事件时播放的音效
- [particleTarget](hiddenProperty): [](Box3Entity) / [](GameEntity) | [](null) 粒子目标实体
- [particleTargetWeight](hiddenProperty): [](number) 粒子目标权重
