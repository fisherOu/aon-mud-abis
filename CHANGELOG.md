# v0.0.24_v0.3_details

1. 修复DeathTriggerSystem:
    a. 添加玩家/公会死亡掉落(DeathPackagePositionComponent, DeathPackageBelongingComponent) 没有绑定到HiddenPosition
    b. 移除对应buff
    c. 添加死亡状态(玩家移除PlayerComponent, 公会添加GuildFrozenComponent)
2. 同步死亡校验:
    a. PlayerComponent(无需客户端适配):
        AttackFinishv2System,BoundTreasureSystem,BuildTreasureSystem,BuyResourceBuildingSystem,ChangeGuildDisplaySystem,
        DigResourcev2System,PickUpRuinSystem,PickUpTreasurev2System,SettleResourceBuildingSystem,TakeResourceBuildingSystem,
        TakeResourcev2System,TechAccelerateSystem,TechCancelSystem,TechFinishSystem,TechUpdateSystem,UnboundTreasureSystem
    b. GuildFrozenComponent(无需客户端适配):
        AllocateResourceSystem,AllocateTreasureSystem,GuildBoundTreasureSystem,GuildBuildTreasureSystem,GuildMoveSystem,
        GuildReleaseAirdropTreasureSystem,GuildReleaseLinearTreasureSystem,GuildTechAccelerateSystem,GuildTechCancelSystem,
        GuildTechFinishSystem,GuildTechUpdateSystem,GuildUnboundTreasureSystem,TransferGuildLeaderSystem
    c. 玩家可以通过 JoinGamev2System 可以回到游戏
    d. 公会需要通过 GuildUnfrozenSystem 付出token(玩家先donate的token) 回到游戏
    e. 新增 PickUpRuinSystem: 捡拾玩家当前位置的所有DeathPackage
3. 组件新增: DeathPackagePositionComponent, DeathPackageBelongingComponent, GuildFrozenComponent

world address: 0xB4b5ee7bd72057FaE6e277b80Cca80c430D0f5F9
initialBlockNumber: 27940939
abi tag: v0.0.24_v0.3_details
