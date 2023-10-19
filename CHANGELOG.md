# v0.0.26_settings_adjust

1. 添加组件：
    ResourceAreaConfigComponent: 配置每个资源带的 terrainPerlin 上下限, 根据 terrainPerlin值 锁定对应的 ResourceAreaId
    ResourceTypeConfigComponent: 配置每种资源的 稀有度, 根据 resourcePerlin值 确定对应的 resourceType

    ResourceConfigAreaComponent: 根据 ResourceAreaId 获取 该资源带可以有哪些等级的资源点, 多对多映射id-AreaLevelsId
    ResourceConfigLevelComponent: 根据 AreaLevelsId 获取 对应的等级 level
    ResourceConfigRarelyComponent: 根据 AreaLevelsId 获取 对应的稀有度 rarely
    通过 rarely 计算出该资源点的 level

    ResourceConfigv3Component: 根据 resourceType * 10 + level 得到 ResourceConfigId, 获取ResourceConfig, 得到 难度、总量、每分钟最多赋予多少个、挖空后多久恢复

    ResourceRecuitComponent: 资源点挖空后会 set 一个恢复时间, 恢复时间走完后可以重新挖矿
    ResourceMinuteLimitComponent: 用来按分钟为单位聚合, 限制玩家每分钟的挖矿上限
2. 修改组件:
    Resourcev2Component: 添加 uint256 minuteLimit
3. DigResourcev2System, DigResourceBuildingSystem:
    修正资源点生成逻辑
    添加 资源点是否在恢复期（挖空后的冷却期）
    添加 每分钟挖矿的上限限制
4. TakeResourcev2System, TakeResourceBuildingSystem:
    当资源用尽后，设置ResourceRecuitComponent的超时时间
5. 科技加速：固定消耗20金币
6. 神器铸造：固定消耗20金币
7. 科技升级：固定消耗银矿
8. 神器强化：
    TreasureUpgradeSystem / GuildTreasureUpgradeSystem
    设定 range/value/area 中每一项各强化几次, 能量消耗数量=50*2^当前选项强化次数, 银币消耗数量=300*2^当前选项强化次数

world address: 0x1610A04b97AaE3b6eDa9E34e8251253D9410c673
initialBlockNumber: 28047193
abi tag: v0.0.26_settings_adjust

客户端引申工作：
    1. 适配新的资源生成逻辑：
        a. 使用 TerrainPerlin 通过 ResourceAreaConfigComponent 计算 资源带ResourceArea
        b. 使用 ResourcePerlin 通过 ResourceTypeConfigComponent 计算 资源类型ResourceType, 同时获得perlin利用后剩余的值rand
        c. 使用 ResourceArea 和 rand 通过 ResourceConfigAreaComponent/ResourceConfigLevelComponent/ResourceConfigRarelyComponent 计算出该点的等级 level
        d. 使用 resourceType * 10 + level 得到 ResourceConfigId
        e. 通过 ResourceConfigv3Component 得到 ResourceConfig, 里面包含有 难度、总量、每分钟最多赋予多少个、挖空后多久恢复
    2. 资源挖空且提取走后，会进入恢复期(ResourceRecuitComponent), 需要有效果展示
    3. 合约添加了每分钟挖取上限, 酌情适配(优先级低)
    4. 科技加速：固定消耗20金币
    5. 神器铸造：固定消耗20金币
    6. 科技升级：固定消耗银矿
    7. 神器强化
