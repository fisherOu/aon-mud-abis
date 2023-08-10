/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  BuffEffectSystem,
  BuffEffectSystemInterface,
} from "../BuffEffectSystem";

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
            name: "sourceID",
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
  "0x608060405234801561001057600080fd5b5060405161083f38038061083f83398101604081905261002f91610218565b818161003a336100ff565b6001600160a01b0381161561004f57806100b1565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801561008d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100b19190610252565b600080546001600160a01b03199081166001600160a01b039384169081179092556001805490911692851692831790556100f69190610170602090811b6101b517901c565b50505050610276565b60006101136101dc60201b6102461760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b038116811461021557600080fd5b50565b6000806040838503121561022b57600080fd5b825161023681610200565b602084015190925061024781610200565b809150509250929050565b60006020828403121561026457600080fd5b815161026f81610200565b9392505050565b6105ba806102856000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe146100515780634c20836f1461007a5780638da5cb5b1461008e578063f2fde38b146100bb575b600080fd5b61006461005f366004610376565b6100d0565b6040516100719190610445565b60405180910390f35b6100646100883660046104c6565b50606090565b6100966100f4565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100ce6100c936600461050a565b610139565b005b60606000828060200190518101906100e89190610540565b905060605b9392505050565b60006101347f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146101a9576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6101b28161026a565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046080546040516101b2928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516060810167ffffffffffffffff811182821017156103705761037061031e565b60405290565b60006020828403121561038857600080fd5b813567ffffffffffffffff808211156103a057600080fd5b818401915084601f8301126103b457600080fd5b8135818111156103c6576103c661031e565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171561040c5761040c61031e565b8160405282815287602084870101111561042557600080fd5b826020860160208301376000928101602001929092525095945050505050565b600060208083528351808285015260005b8181101561047257858101830151858201604001528201610456565b81811115610484576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b80151581146101b257600080fd5b6000606082840312156104d857600080fd5b6104e061034d565b8235815260208301356104f2816104b8565b60208201526040928301359281019290925250919050565b60006020828403121561051c57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146100ed57600080fd5b60006060828403121561055257600080fd5b61055a61034d565b82518152602083015161056c816104b8565b6020820152604092830151928101929092525091905056fea264697066735822122004f899b49b3dc064473110d12dcdc5d198431436c3fa63b582f6f0f23707a61964736f6c634300080d0033";

type BuffEffectSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BuffEffectSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BuffEffectSystem__factory extends ContractFactory {
  constructor(...args: BuffEffectSystemConstructorParams) {
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
  ): Promise<BuffEffectSystem> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<BuffEffectSystem>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): BuffEffectSystem {
    return super.attach(address) as BuffEffectSystem;
  }
  override connect(signer: Signer): BuffEffectSystem__factory {
    return super.connect(signer) as BuffEffectSystem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BuffEffectSystemInterface {
    return new utils.Interface(_abi) as BuffEffectSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BuffEffectSystem {
    return new Contract(address, _abi, signerOrProvider) as BuffEffectSystem;
  }
}
