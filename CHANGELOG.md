# v0.0.22_v0.3_details

1. 更改移动逻辑:
    a. 将ZK:move文件夹下的 distance 从ZK输出移动到ZK输入, 定义distance取值为本次移动要走几步
    b. 修正 Movev2System: 行动点消耗从固定的1, 改为消耗 distance点行动点
2. 同步DigResourcev2System和DigResourceBuildingSystem: 统一将perlin值进行一次hash化再进行属性值计算 / TakeResourcev2System同样处理
3. ResourceBuilding同步绑定到HiddenPositionComponent, 同时在Movev2System中检查HiddenPosition时无视ResourceBuilding
4. 击中护盾超时验证和击中ResourceBuilding判定 有问题，已修复
5. 半修复DeathTriggerSystem: 修复 从地图上移除实例、移除另两种资源
    未完成修复: 添加死亡状态、将资产转移到deathPackage、移除buff、死亡状态校验 等

world address: 0x3ef860a807Af8c0Ec1BDdED88F44fc0404C6C199
initialBlockNumber: 27870842
abi tag: v0.0.22_v0.3_details
