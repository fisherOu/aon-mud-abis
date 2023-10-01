thPackage_437da8e

1. 添加 DeathPackageBelongingComponent/DeathPackageComponent/GuildFrozenComponent
2. 修正 DeathTriggerSystem
3. 添加 JoinGuildSystem/
4. 添加 TechEffectComponent/TechEffectConfigComponent/TechEffectConfigRegisterComponent
5. 添加 StatusComponent/SetStatusSystem
    影响System:
        挖矿验证: DigResourcev2System
        释放宝物验证: ReleaseAirdropTreasureSystem/ReleaseLinearTreasureSystem
        移动验证: Movev2System/PickUpTreasurev2System
6. ZKConfigComponent: 添加 coordv2VerifyAddress
    影响System：
        有交互系统: AttackFinishv2Syste/GuildReleaseAirdropTreasureSystem/GuildReleaseLinearTreasureSystem/SettleResourceBuildingSystem/ReleaseAirdropTreasureSystem/ReleaseLinearTreasureSystem
        无交互系统: TreasureEffectAirdropDefenseSystem/TreasureEffectAirdropResourceSystem/TreasureEffectLinearDamageSystem/TreasureEffectNegativeAddHPSystem
        废弃系统: ChargeAirdropTreasureSystem/ChargeLinearTreasureSystem/GuildChargeAirdropTreasureSystem/GuildChargeLinearTreasureSystem/TreasureEffectDeathKeepResourceSystem
7. 添加 APLimitComponent
    影响System: 
        创建：JoinGamev2System/CreateGuildSystem
        行动点验证: SetStatusSystem(status==1)/TakeResourceBuildingSystem/TakeResourcev2System/PickUpTreasurev2System/BuildTreasureSystem/
            GuildReleaseAirdropTreasureSystem/GuildReleaseLinearTreasureSystem/ReleaseAirdropTreasureSystem/ReleaseLinearTreasureSystem/
            TechUpdateSystem/
8. 添加 SilverAmountComponent/EnergyAmountComponent
9. Resourcev2Component: 添加 resourceType
    影响System:
        创建：DigResourcev2System/DigResourceBuildingSystem
        调用：TakeResourcev2System/TakeResourceBuildingSystem
10. Treasurev2Component: 添加 APCost, TreasureEffectConfigComponent: 添加 APCost
11. TechConfigComponent: 添加 buffTargetId, basicValue
12. 添加 GuildTechAccelerateSystem/GuildTechCancelSystem/GuildTechFinishSystem/GuildTechUpdateSystem

world address: 0x8eDdCb91e3D4fbb7fe02517a53D102c865772095
initialBlockNumber: 26479355
abi tag: v0.0.17_deathPackage_437da8e
