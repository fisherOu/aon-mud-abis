/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  BuffEffectKeepResourceOnDeathExecuteSystem,
  BuffEffectKeepResourceOnDeathExecuteSystemInterface,
} from "../BuffEffectKeepResourceOnDeathExecuteSystem";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IWorld",
        name: "_world",
        type: "address",
      },
      {
        internalType: "address",
        name: "_components",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Ownable__NotOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "Ownable__NotTransitiveOwner",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "args",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "entity",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isComponent",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "buffEntity",
            type: "uint256",
          },
        ],
        internalType: "struct BuffEffectInfo",
        name: "effectInfo",
        type: "tuple",
      },
    ],
    name: "executeTyped",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161091738038061091783398101604081905261002f9161021c565b8181818161003c33610103565b6001600160a01b0381161561005157806100b3565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801561008f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100b39190610256565b600080546001600160a01b03199081166001600160a01b039384169081179092556001805490911692851692831790556100f89190610174602090811b6101cb17901c565b50505050505061027a565b60006101176101e060201b61025c1760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b038116811461021957600080fd5b50565b6000806040838503121561022f57600080fd5b825161023a81610204565b602084015190925061024b81610204565b809150509250929050565b60006020828403121561026857600080fd5b815161027381610204565b9392505050565b61068e806102896000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe146100515780634c20836f1461007a5780638da5cb5b1461008d578063f2fde38b146100ba575b600080fd5b61006461005f366004610431565b6100cf565b6040516100719190610500565b60405180910390f35b610064610088366004610581565b6100f9565b61009561010a565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100cd6100c83660046105c5565b61014f565b005b60606000828060200190518101906100e791906105fb565b90506100f2816100f9565b9392505050565b606061010482610280565b92915050565b600061014a7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146101bf576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6101c881610325565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b60408082015160015482517f614bfa6e000000000000000000000000000000000000000000000000000000008152925160609360009273ffffffffffffffffffffffffffffffffffffffff169163614bfa6e916004808201926020929091908290030181865afa1580156102f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061031c919061063f565b90505050919050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046080546040516101c8928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516060810167ffffffffffffffff8111828210171561042b5761042b6103d9565b60405290565b60006020828403121561044357600080fd5b813567ffffffffffffffff8082111561045b57600080fd5b818401915084601f83011261046f57600080fd5b813581811115610481576104816103d9565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156104c7576104c76103d9565b816040528281528760208487010111156104e057600080fd5b826020860160208301376000928101602001929092525095945050505050565b600060208083528351808285015260005b8181101561052d57858101830151858201604001528201610511565b8181111561053f576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b80151581146101c857600080fd5b60006060828403121561059357600080fd5b61059b610408565b8235815260208301356105ad81610573565b60208201526040928301359281019290925250919050565b6000602082840312156105d757600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146100f257600080fd5b60006060828403121561060d57600080fd5b610615610408565b82518152602083015161062781610573565b60208201526040928301519281019290925250919050565b60006020828403121561065157600080fd5b505191905056fea2646970667358221220f0dcaef562435c41d83316553d3ea754e4b351589d6c11f82ecd0d96486a936464736f6c634300080d0033";

type BuffEffectKeepResourceOnDeathExecuteSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BuffEffectKeepResourceOnDeathExecuteSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BuffEffectKeepResourceOnDeathExecuteSystem__factory extends ContractFactory {
  constructor(
    ...args: BuffEffectKeepResourceOnDeathExecuteSystemConstructorParams
  ) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BuffEffectKeepResourceOnDeathExecuteSystem> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<BuffEffectKeepResourceOnDeathExecuteSystem>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): BuffEffectKeepResourceOnDeathExecuteSystem {
    return super.attach(address) as BuffEffectKeepResourceOnDeathExecuteSystem;
  }
  override connect(
    signer: Signer
  ): BuffEffectKeepResourceOnDeathExecuteSystem__factory {
    return super.connect(
      signer
    ) as BuffEffectKeepResourceOnDeathExecuteSystem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BuffEffectKeepResourceOnDeathExecuteSystemInterface {
    return new utils.Interface(
      _abi
    ) as BuffEffectKeepResourceOnDeathExecuteSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BuffEffectKeepResourceOnDeathExecuteSystem {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BuffEffectKeepResourceOnDeathExecuteSystem;
  }
}
