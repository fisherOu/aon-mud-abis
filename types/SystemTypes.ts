// Autogenerated using mud system-types
import { AdjustGuildMemberSystem } from "./ethers-contracts/AdjustGuildMemberSystem";
import { AllocateResourceSystem } from "./ethers-contracts/AllocateResourceSystem";
import { AllocateTreasureSystem } from "./ethers-contracts/AllocateTreasureSystem";
import { ApproveGuildSystem } from "./ethers-contracts/ApproveGuildSystem";
import { AttackChargeSystem } from "./ethers-contracts/AttackChargeSystem";
import { AttackFinishSystem } from "./ethers-contracts/AttackFinishSystem";
import { AttackFinishv2System } from "./ethers-contracts/AttackFinishv2System";
import { BoundTreasureSystem } from "./ethers-contracts/BoundTreasureSystem";
import { BuffEffectAddHPCalculateSystem } from "./ethers-contracts/BuffEffectAddHPCalculateSystem";
import { BuffEffectKeepResourceOnDeathExecuteSystem } from "./ethers-contracts/BuffEffectKeepResourceOnDeathExecuteSystem";
import { BuildTreasureSystem } from "./ethers-contracts/BuildTreasureSystem";
import { BulkSetStateSystem } from "./ethers-contracts/BulkSetStateSystem";
import { BuyResourceBuildingSystem } from "./ethers-contracts/BuyResourceBuildingSystem";
import { ChangeFogSeedSystem } from "./ethers-contracts/ChangeFogSeedSystem";
import { ChangeGuildDisplaySystem } from "./ethers-contracts/ChangeGuildDisplaySystem";
import { ChangeResourceSeedSystem } from "./ethers-contracts/ChangeResourceSeedSystem";
import { ChangeSeedSystem } from "./ethers-contracts/ChangeSeedSystem";
import { ChangeTreasureSeedSystem } from "./ethers-contracts/ChangeTreasureSeedSystem";
import { ChargeAirdropTreasureSystem } from "./ethers-contracts/ChargeAirdropTreasureSystem";
import { ChargeLinearTreasureSystem } from "./ethers-contracts/ChargeLinearTreasureSystem";
import { CloseDevSystem } from "./ethers-contracts/CloseDevSystem";
import { ComponentDevSystem } from "./ethers-contracts/ComponentDevSystem";
import { CreateGuildSystem } from "./ethers-contracts/CreateGuildSystem";
import { DeathTriggerSystem } from "./ethers-contracts/DeathTriggerSystem";
import { DigResourceBuildingSystem } from "./ethers-contracts/DigResourceBuildingSystem";
import { DigResourceSystem } from "./ethers-contracts/DigResourceSystem";
import { DigResourcev2System } from "./ethers-contracts/DigResourcev2System";
import { DonateResourceSystem } from "./ethers-contracts/DonateResourceSystem";
import { DonateTreasureSystem } from "./ethers-contracts/DonateTreasureSystem";
import { EditGuildSystem } from "./ethers-contracts/EditGuildSystem";
import { EncounterFleeSystem } from "./ethers-contracts/EncounterFleeSystem";
import { EncounterThrowSystem } from "./ethers-contracts/EncounterThrowSystem";
import { GuildBoundTreasureSystem } from "./ethers-contracts/GuildBoundTreasureSystem";
import { GuildBuildTreasureSystem } from "./ethers-contracts/GuildBuildTreasureSystem";
import { GuildChargeAirdropTreasureSystem } from "./ethers-contracts/GuildChargeAirdropTreasureSystem";
import { GuildChargeLinearTreasureSystem } from "./ethers-contracts/GuildChargeLinearTreasureSystem";
import { GuildMoveSystem } from "./ethers-contracts/GuildMoveSystem";
import { GuildReleaseAirdropTreasureSystem } from "./ethers-contracts/GuildReleaseAirdropTreasureSystem";
import { GuildReleaseLinearTreasureSystem } from "./ethers-contracts/GuildReleaseLinearTreasureSystem";
import { GuildTechAccelerateSystem } from "./ethers-contracts/GuildTechAccelerateSystem";
import { GuildTechCancelSystem } from "./ethers-contracts/GuildTechCancelSystem";
import { GuildTechFinishSystem } from "./ethers-contracts/GuildTechFinishSystem";
import { GuildTechUpdateSystem } from "./ethers-contracts/GuildTechUpdateSystem";
import { GuildUnboundTreasureSystem } from "./ethers-contracts/GuildUnboundTreasureSystem";
import { JoinGameSystem } from "./ethers-contracts/JoinGameSystem";
import { JoinGamev2System } from "./ethers-contracts/JoinGamev2System";
import { JoinGuildSystem } from "./ethers-contracts/JoinGuildSystem";
import { KickGuildMemberSystem } from "./ethers-contracts/KickGuildMemberSystem";
import { MarkSystem } from "./ethers-contracts/MarkSystem";
import { MoveSystem } from "./ethers-contracts/MoveSystem";
import { Movev2System } from "./ethers-contracts/Movev2System";
import { PickUpRuinSystem } from "./ethers-contracts/PickUpRuinSystem";
import { PickUpTreasureSystem } from "./ethers-contracts/PickUpTreasureSystem";
import { PickUpTreasurev2System } from "./ethers-contracts/PickUpTreasurev2System";
import { RejectGuildSystem } from "./ethers-contracts/RejectGuildSystem";
import { ReleaseAirdropTreasureSystem } from "./ethers-contracts/ReleaseAirdropTreasureSystem";
import { ReleaseLinearTreasureSystem } from "./ethers-contracts/ReleaseLinearTreasureSystem";
import { ResourceDevSystem } from "./ethers-contracts/ResourceDevSystem";
import { SetResourceConfigSystem } from "./ethers-contracts/SetResourceConfigSystem";
import { SetStatusSystem } from "./ethers-contracts/SetStatusSystem";
import { SettleResourceBuildingSystem } from "./ethers-contracts/SettleResourceBuildingSystem";
import { TakeResourceBuildingSystem } from "./ethers-contracts/TakeResourceBuildingSystem";
import { TakeResourceSystem } from "./ethers-contracts/TakeResourceSystem";
import { TakeResourcev2System } from "./ethers-contracts/TakeResourcev2System";
import { TechAccelerateSystem } from "./ethers-contracts/TechAccelerateSystem";
import { TechCancelSystem } from "./ethers-contracts/TechCancelSystem";
import { TechEffectAddHPSystem } from "./ethers-contracts/TechEffectAddHPSystem";
import { TechEffectExtraResourceSystem } from "./ethers-contracts/TechEffectExtraResourceSystem";
import { TechFinishSystem } from "./ethers-contracts/TechFinishSystem";
import { TechUpdateSystem } from "./ethers-contracts/TechUpdateSystem";
import { TransferGuildLeaderSystem } from "./ethers-contracts/TransferGuildLeaderSystem";
import { TreasureEffectAirdropDefenseSystem } from "./ethers-contracts/TreasureEffectAirdropDefenseSystem";
import { TreasureEffectAirdropResourceSystem } from "./ethers-contracts/TreasureEffectAirdropResourceSystem";
import { TreasureEffectDeathKeepResourceSystem } from "./ethers-contracts/TreasureEffectDeathKeepResourceSystem";
import { TreasureEffectLinearDamageSystem } from "./ethers-contracts/TreasureEffectLinearDamageSystem";
import { TreasureEffectNegativeAddHPSystem } from "./ethers-contracts/TreasureEffectNegativeAddHPSystem";
import { UnboundTreasureSystem } from "./ethers-contracts/UnboundTreasureSystem";
 
export type SystemTypes = {
  "system.AdjustGuildMember": AdjustGuildMemberSystem;
  "system.AllocateResource": AllocateResourceSystem;
  "system.AllocateTreasure": AllocateTreasureSystem;
  "system.ApproveGuild": ApproveGuildSystem;
  "system.AttackCharge": AttackChargeSystem;
  "system.AttackFinish": AttackFinishSystem;
  "system.AttackFinishv2": AttackFinishv2System;
  "system.BoundTreasure": BoundTreasureSystem;
  "system.BuffEffectAddHPCalculate": BuffEffectAddHPCalculateSystem;
  "system.BuffEffectKeepResourceOnDeathExecute": BuffEffectKeepResourceOnDeathExecuteSystem;
  "system.BuildTreasure": BuildTreasureSystem;
  "system.BulkSetState": BulkSetStateSystem;
  "system.BuyResourceBuilding": BuyResourceBuildingSystem;
  "system.ChangeFogSeed": ChangeFogSeedSystem;
  "system.ChangeGuildDisplay": ChangeGuildDisplaySystem;
  "system.ChangeResourceSeed": ChangeResourceSeedSystem;
  "system.ChangeSeed": ChangeSeedSystem;
  "system.ChangeTreasureSeed": ChangeTreasureSeedSystem;
  "system.ChargeAirdropTreasure": ChargeAirdropTreasureSystem;
  "system.ChargeLinearTreasure": ChargeLinearTreasureSystem;
  "system.CloseDev": CloseDevSystem;
  "system.ComponentDev": ComponentDevSystem;
  "system.CreateGuild": CreateGuildSystem;
  "system.DeathTrigger": DeathTriggerSystem;
  "system.DigResourceBuilding": DigResourceBuildingSystem;
  "system.DigResource": DigResourceSystem;
  "system.DigResourcev2": DigResourcev2System;
  "system.DonateResource": DonateResourceSystem;
  "system.DonateTreasure": DonateTreasureSystem;
  "system.EditGuild": EditGuildSystem;
  "system.EncounterFlee": EncounterFleeSystem;
  "system.EncounterThrow": EncounterThrowSystem;
  "system.GuildBoundTreasure": GuildBoundTreasureSystem;
  "system.GuildBuildTreasure": GuildBuildTreasureSystem;
  "system.GuildChargeAirdropTreasure": GuildChargeAirdropTreasureSystem;
  "system.GuildChargeLinearTreasure": GuildChargeLinearTreasureSystem;
  "system.GuildMove": GuildMoveSystem;
  "system.GuildReleaseAirdropTreasure": GuildReleaseAirdropTreasureSystem;
  "system.GuildReleaseLinearTreasure": GuildReleaseLinearTreasureSystem;
  "system.GuildTechAccelerate": GuildTechAccelerateSystem;
  "system.GuildTechCancel": GuildTechCancelSystem;
  "system.GuildTechFinish": GuildTechFinishSystem;
  "system.GuildTechUpdate": GuildTechUpdateSystem;
  "system.GuildUnboundTreasure": GuildUnboundTreasureSystem;
  "system.JoinGame": JoinGameSystem;
  "system.JoinGamev2": JoinGamev2System;
  "system.JoinGuild": JoinGuildSystem;
  "system.KickGuildMember": KickGuildMemberSystem;
  "system.Mark": MarkSystem;
  "system.Move": MoveSystem;
  "system.Movev2": Movev2System;
  "system.PickUpRuin": PickUpRuinSystem;
  "system.PickUpTreasure": PickUpTreasureSystem;
  "system.PickUpTreasurev2": PickUpTreasurev2System;
  "system.RejectGuild": RejectGuildSystem;
  "system.ReleaseAirdropTreasure": ReleaseAirdropTreasureSystem;
  "system.ReleaseLinearTreasure": ReleaseLinearTreasureSystem;
  "system.ResourceDev": ResourceDevSystem;
  "system.SetResourceConfig": SetResourceConfigSystem;
  "system.SetStatus": SetStatusSystem;
  "system.SettleResourceBuilding": SettleResourceBuildingSystem;
  "system.TakeResourceBuilding": TakeResourceBuildingSystem;
  "system.TakeResource": TakeResourceSystem;
  "system.TakeResourcev2": TakeResourcev2System;
  "system.TechAccelerate": TechAccelerateSystem;
  "system.TechCancel": TechCancelSystem;
  "system.TechEffectAddHP": TechEffectAddHPSystem;
  "system.TechEffectExtraResource": TechEffectExtraResourceSystem;
  "system.TechFinish": TechFinishSystem;
  "system.TechUpdate": TechUpdateSystem;
  "system.TransferGuildLeader": TransferGuildLeaderSystem;
  "system.TreasureEffectAirdropDefense": TreasureEffectAirdropDefenseSystem;
  "system.TreasureEffectAirdropResource": TreasureEffectAirdropResourceSystem;
  "system.TreasureEffectDeathKeepResource": TreasureEffectDeathKeepResourceSystem;
  "system.TreasureEffectLinearDamage": TreasureEffectLinearDamageSystem;
  "system.TreasureEffectNegativeAddHP": TreasureEffectNegativeAddHPSystem;
  "system.UnboundTreasure": UnboundTreasureSystem;
};
