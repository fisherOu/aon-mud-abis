/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export type CoordVerifyParamStruct = {
  realHash: PromiseOrValue<BigNumberish>;
  fogHash: PromiseOrValue<BigNumberish>;
  fogSeed: PromiseOrValue<BigNumberish>;
  width: PromiseOrValue<BigNumberish>;
  height: PromiseOrValue<BigNumberish>;
  a: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>];
  b: [
    [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
    [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ];
  c: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>];
};

export type CoordVerifyParamStructOutput = [
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  [BigNumber, BigNumber],
  [[BigNumber, BigNumber], [BigNumber, BigNumber]],
  [BigNumber, BigNumber]
] & {
  realHash: BigNumber;
  fogHash: BigNumber;
  fogSeed: BigNumber;
  width: BigNumber;
  height: BigNumber;
  a: [BigNumber, BigNumber];
  b: [[BigNumber, BigNumber], [BigNumber, BigNumber]];
  c: [BigNumber, BigNumber];
};

export type TreasureEffectInfoStruct = {
  sourceID: PromiseOrValue<BigNumberish>;
  isComponent: PromiseOrValue<boolean>;
  entity: PromiseOrValue<BigNumberish>;
  treasureID: PromiseOrValue<BigNumberish>;
  path: CoordVerifyParamStruct[];
  area: CoordVerifyParamStruct[];
  areaAmount: PromiseOrValue<BigNumberish>;
  value: PromiseOrValue<BigNumberish>;
};

export type TreasureEffectInfoStructOutput = [
  BigNumber,
  boolean,
  BigNumber,
  BigNumber,
  CoordVerifyParamStructOutput[],
  CoordVerifyParamStructOutput[],
  number,
  number
] & {
  sourceID: BigNumber;
  isComponent: boolean;
  entity: BigNumber;
  treasureID: BigNumber;
  path: CoordVerifyParamStructOutput[];
  area: CoordVerifyParamStructOutput[];
  areaAmount: number;
  value: number;
};

export interface TreasureEffectLinearDamageSystemInterface
  extends utils.Interface {
  functions: {
    "execute(bytes)": FunctionFragment;
    "executeTyped((uint256,bool,uint256,uint256,(uint256,uint256,uint256,uint256,uint256,uint256[2],uint256[2][2],uint256[2])[],(uint256,uint256,uint256,uint256,uint256,uint256[2],uint256[2][2],uint256[2])[],uint32,uint32))": FunctionFragment;
    "owner()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "execute"
      | "executeTyped"
      | "owner"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "execute",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "executeTyped",
    values: [TreasureEffectInfoStruct]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeTyped",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "Debug(string,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Debug"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface DebugEventObject {
  prex: string;
  value: BigNumber;
}
export type DebugEvent = TypedEvent<[string, BigNumber], DebugEventObject>;

export type DebugEventFilter = TypedEventFilter<DebugEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface TreasureEffectLinearDamageSystem extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TreasureEffectLinearDamageSystemInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    execute(
      args: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeTyped(
      effectInfo: TreasureEffectInfoStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  execute(
    args: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeTyped(
    effectInfo: TreasureEffectInfoStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    execute(
      args: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    executeTyped(
      effectInfo: TreasureEffectInfoStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Debug(string,uint256)"(prex?: null, value?: null): DebugEventFilter;
    Debug(prex?: null, value?: null): DebugEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    execute(
      args: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeTyped(
      effectInfo: TreasureEffectInfoStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    execute(
      args: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeTyped(
      effectInfo: TreasureEffectInfoStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
