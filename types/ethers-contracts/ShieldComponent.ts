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

export type ShieldStruct = {
  shieldValue: PromiseOrValue<BigNumberish>;
  shieldTimeout: PromiseOrValue<BigNumberish>;
};

export type ShieldStructOutput = [number, BigNumber] & {
  shieldValue: number;
  shieldTimeout: BigNumber;
};

export interface ShieldComponentInterface extends utils.Interface {
  functions: {
    "authorizeWriter(address)": FunctionFragment;
    "getEntities()": FunctionFragment;
    "getEntitiesWithValue(bytes)": FunctionFragment;
    "getRawValue(uint256)": FunctionFragment;
    "getSchema()": FunctionFragment;
    "getValue(uint256)": FunctionFragment;
    "has(uint256)": FunctionFragment;
    "id()": FunctionFragment;
    "owner()": FunctionFragment;
    "registerIndexer(address)": FunctionFragment;
    "registerWorld(address)": FunctionFragment;
    "remove(uint256)": FunctionFragment;
    "set(uint256,(uint32,uint64))": FunctionFragment;
    "set(uint256,bytes)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unauthorizeWriter(address)": FunctionFragment;
    "world()": FunctionFragment;
    "writeAccess(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "authorizeWriter"
      | "getEntities"
      | "getEntitiesWithValue"
      | "getRawValue"
      | "getSchema"
      | "getValue"
      | "has"
      | "id"
      | "owner"
      | "registerIndexer"
      | "registerWorld"
      | "remove"
      | "set(uint256,(uint32,uint64))"
      | "set(uint256,bytes)"
      | "transferOwnership"
      | "unauthorizeWriter"
      | "world"
      | "writeAccess"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "authorizeWriter",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getEntities",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getEntitiesWithValue",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getRawValue",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "getSchema", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getValue",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "has",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "id", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "registerIndexer",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "registerWorld",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "remove",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "set(uint256,(uint32,uint64))",
    values: [PromiseOrValue<BigNumberish>, ShieldStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "set(uint256,bytes)",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "unauthorizeWriter",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "world", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "writeAccess",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "authorizeWriter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEntities",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEntitiesWithValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRawValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getSchema", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getValue", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "has", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "id", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registerIndexer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerWorld",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "remove", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "set(uint256,(uint32,uint64))",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "set(uint256,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unauthorizeWriter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "world", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "writeAccess",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

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

export interface ShieldComponent extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ShieldComponentInterface;

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
    authorizeWriter(
      writer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getEntities(overrides?: CallOverrides): Promise<[BigNumber[]]>;

    getEntitiesWithValue(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getRawValue(
      entity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getSchema(
      overrides?: CallOverrides
    ): Promise<[string[], number[]] & { keys: string[]; values: number[] }>;

    getValue(
      entity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[ShieldStructOutput]>;

    has(
      entity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    id(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    registerIndexer(
      arg0: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    registerWorld(
      _world: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    remove(
      entity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "set(uint256,(uint32,uint64))"(
      entity: PromiseOrValue<BigNumberish>,
      shield: ShieldStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "set(uint256,bytes)"(
      entity: PromiseOrValue<BigNumberish>,
      value: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unauthorizeWriter(
      writer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    world(overrides?: CallOverrides): Promise<[string]>;

    writeAccess(
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  authorizeWriter(
    writer: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getEntities(overrides?: CallOverrides): Promise<BigNumber[]>;

  getEntitiesWithValue(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getRawValue(
    entity: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getSchema(
    overrides?: CallOverrides
  ): Promise<[string[], number[]] & { keys: string[]; values: number[] }>;

  getValue(
    entity: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<ShieldStructOutput>;

  has(
    entity: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  id(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  registerIndexer(
    arg0: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  registerWorld(
    _world: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  remove(
    entity: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "set(uint256,(uint32,uint64))"(
    entity: PromiseOrValue<BigNumberish>,
    shield: ShieldStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "set(uint256,bytes)"(
    entity: PromiseOrValue<BigNumberish>,
    value: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unauthorizeWriter(
    writer: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  world(overrides?: CallOverrides): Promise<string>;

  writeAccess(
    operator: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    authorizeWriter(
      writer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    getEntities(overrides?: CallOverrides): Promise<BigNumber[]>;

    getEntitiesWithValue(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getRawValue(
      entity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getSchema(
      overrides?: CallOverrides
    ): Promise<[string[], number[]] & { keys: string[]; values: number[] }>;

    getValue(
      entity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<ShieldStructOutput>;

    has(
      entity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    id(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    registerIndexer(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    registerWorld(
      _world: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    remove(
      entity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "set(uint256,(uint32,uint64))"(
      entity: PromiseOrValue<BigNumberish>,
      shield: ShieldStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    "set(uint256,bytes)"(
      entity: PromiseOrValue<BigNumberish>,
      value: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    unauthorizeWriter(
      writer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    world(overrides?: CallOverrides): Promise<string>;

    writeAccess(
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
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
    authorizeWriter(
      writer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getEntities(overrides?: CallOverrides): Promise<BigNumber>;

    getEntitiesWithValue(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRawValue(
      entity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSchema(overrides?: CallOverrides): Promise<BigNumber>;

    getValue(
      entity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    has(
      entity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    id(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    registerIndexer(
      arg0: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    registerWorld(
      _world: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    remove(
      entity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "set(uint256,(uint32,uint64))"(
      entity: PromiseOrValue<BigNumberish>,
      shield: ShieldStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "set(uint256,bytes)"(
      entity: PromiseOrValue<BigNumberish>,
      value: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unauthorizeWriter(
      writer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    world(overrides?: CallOverrides): Promise<BigNumber>;

    writeAccess(
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    authorizeWriter(
      writer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getEntities(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getEntitiesWithValue(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRawValue(
      entity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSchema(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getValue(
      entity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    has(
      entity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    id(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registerIndexer(
      arg0: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    registerWorld(
      _world: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    remove(
      entity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "set(uint256,(uint32,uint64))"(
      entity: PromiseOrValue<BigNumberish>,
      shield: ShieldStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "set(uint256,bytes)"(
      entity: PromiseOrValue<BigNumberish>,
      value: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unauthorizeWriter(
      writer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    world(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    writeAccess(
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
