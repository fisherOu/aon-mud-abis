/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  TreasureEffectDeathKeepResourceSystem,
  TreasureEffectDeathKeepResourceSystemInterface,
} from "../TreasureEffectDeathKeepResourceSystem";

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
            name: "entity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "treasureID",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "realHash",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "fogHash",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "fogSeed",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "width",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "height",
                type: "uint256",
              },
              {
                internalType: "uint256[2]",
                name: "a",
                type: "uint256[2]",
              },
              {
                internalType: "uint256[2][2]",
                name: "b",
                type: "uint256[2][2]",
              },
              {
                internalType: "uint256[2]",
                name: "c",
                type: "uint256[2]",
              },
            ],
            internalType: "struct CoordVerifyParam[]",
            name: "path",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "realHash",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "fogHash",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "fogSeed",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "width",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "height",
                type: "uint256",
              },
              {
                internalType: "uint256[2]",
                name: "a",
                type: "uint256[2]",
              },
              {
                internalType: "uint256[2][2]",
                name: "b",
                type: "uint256[2][2]",
              },
              {
                internalType: "uint256[2]",
                name: "c",
                type: "uint256[2]",
              },
            ],
            internalType: "struct CoordVerifyParam[]",
            name: "area",
            type: "tuple[]",
          },
          {
            internalType: "uint32",
            name: "value",
            type: "uint32",
          },
        ],
        internalType: "struct TreasureEffectInfo",
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
  "0x60806040523480156200001157600080fd5b506040516200131638038062001316833981016040819052620000349162000230565b81818181620000433362000113565b6001600160a01b038116156200005a5780620000bf565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000099573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bf91906200026f565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000107919062000187602090811b620001cb17901c565b50505050505062000296565b60006200012a620001f360201b6200025c1760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022d57600080fd5b50565b600080604083850312156200024457600080fd5b8251620002518162000217565b6020840151909250620002648162000217565b809150509250929050565b6000602082840312156200028257600080fd5b81516200028f8162000217565b9392505050565b61107080620002a66000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe146100515780637e62c17a1461007a5780638da5cb5b1461008d578063f2fde38b146100ba575b600080fd5b61006461005f36600461084f565b6100cf565b604051610071919061096d565b60405180910390f35b610064610088366004610b63565b6100f9565b61009561010a565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100cd6100c8366004610c34565b61014f565b005b60606000828060200190518101906100e79190610de7565b90506100f2816100f9565b9392505050565b606061010482610280565b92915050565b600061014a7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146101bf576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6101c88161055c565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b60408082015160015482517f614bfa6e000000000000000000000000000000000000000000000000000000008152925160609360009273ffffffffffffffffffffffffffffffffffffffff169163614bfa6e916004808201926020929091908290030181865afa1580156102f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061031c9190610eaa565b6000549091506103629073ffffffffffffffffffffffffffffffffffffffff167f1f5722521ba251ca87967835668e1714c5eb024990bbd3f5f1dcdc98dc7cbbd0610565565b73ffffffffffffffffffffffffffffffffffffffff166332043bea826040518060c001604052807f4c0c9a822119addaef41f1f3057bd5511746990c4aee6e0804af3b096feebdc060001c8152602001600163ffffffff1681526020016040518060400160405280600881526020017f74726561737572650000000000000000000000000000000000000000000000008152508152602001886060015181526020018860c0015163ffffffff1667ffffffffffffffff1681526020014261a8c061042c9190610ec3565b67ffffffffffffffff168152506040518363ffffffff1660e01b8152600401610456929190610f02565b600060405180830381600087803b15801561047057600080fd5b505af1158015610484573d6000803e3d6000fd5b50506000546104cc925073ffffffffffffffffffffffffffffffffffffffff1690507f2d1944d7c92d4cf7892c9f8d3312e879c70e4e7904208d77f458b7bf7c952e19610565565b6040517f1ab06ee5000000000000000000000000000000000000000000000000000000008152600481018390526024810184905273ffffffffffffffffffffffffffffffffffffffff9190911690631ab06ee590604401600060405180830381600087803b15801561053d57600080fd5b505af1158015610551573d6000803e3d6000fd5b505050505050919050565b6101c8816106b5565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa1580156105d5573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261061b9190810190610f7a565b9050805160000361068c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f742072656769737465726564000000000000000000000000000000604482015260640160405180910390fd5b6106ad816000815181106106a2576106a261100b565b602002602001015190565b949350505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460805460405173ffffffffffffffffffffffffffffffffffffffff8481169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610100810167ffffffffffffffff811182821017156107b4576107b4610761565b60405290565b60405160e0810167ffffffffffffffff811182821017156107b4576107b4610761565b6040805190810167ffffffffffffffff811182821017156107b4576107b4610761565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561084757610847610761565b604052919050565b6000602080838503121561086257600080fd5b823567ffffffffffffffff8082111561087a57600080fd5b818501915085601f83011261088e57600080fd5b8135818111156108a0576108a0610761565b6108d0847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601610800565b915080825286848285010111156108e657600080fd5b8084840185840137600090820190930192909252509392505050565b6000815180845260005b818110156109285760208185018101518683018201520161090c565b8181111561093a576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006100f26020830184610902565b80151581146101c857600080fd5b803561099981610980565b919050565b600067ffffffffffffffff8211156109b8576109b8610761565b5060051b60200190565b600082601f8301126109d357600080fd5b6109db6107dd565b8060408401858111156109ed57600080fd5b845b81811015610a075780358452602093840193016109ef565b509095945050505050565b600082601f830112610a2357600080fd5b610a2b6107dd565b806080840185811115610a3d57600080fd5b845b81811015610a0757610a5187826109c2565b8452602090930192604001610a3f565b600082601f830112610a7257600080fd5b81356020610a87610a828361099e565b610800565b8281526101a09283028501820192828201919087851115610aa757600080fd5b8387015b85811015610b395781818a031215610ac35760008081fd5b610acb610790565b81358152858201358682015260408083013590820152606080830135908201526080808301359082015260a0610b038b8285016109c2565b9082015260e0610b158b848301610a12565b60c0830152610b288b61016085016109c2565b908201528452928401928101610aab565b5090979650505050505050565b63ffffffff811681146101c857600080fd5b803561099981610b46565b600060208284031215610b7557600080fd5b813567ffffffffffffffff80821115610b8d57600080fd5b9083019060e08286031215610ba157600080fd5b610ba96107ba565b82358152610bb96020840161098e565b60208201526040830135604082015260608301356060820152608083013582811115610be457600080fd5b610bf087828601610a61565b60808301525060a083013582811115610c0857600080fd5b610c1487828601610a61565b60a083015250610c2660c08401610b58565b60c082015295945050505050565b600060208284031215610c4657600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146100f257600080fd5b805161099981610980565b600082601f830112610c8657600080fd5b610c8e6107dd565b806040840185811115610ca057600080fd5b845b81811015610a07578051845260209384019301610ca2565b600082601f830112610ccb57600080fd5b610cd36107dd565b806080840185811115610ce557600080fd5b845b81811015610a0757610cf98782610c75565b8452602090930192604001610ce7565b600082601f830112610d1a57600080fd5b81516020610d2a610a828361099e565b8281526101a09283028501820192828201919087851115610d4a57600080fd5b8387015b85811015610b395781818a031215610d665760008081fd5b610d6e610790565b81518152858201518682015260408083015190820152606080830151908201526080808301519082015260a0610da68b828501610c75565b9082015260e0610db88b848301610cba565b60c0830152610dcb8b6101608501610c75565b908201528452928401928101610d4e565b805161099981610b46565b600060208284031215610df957600080fd5b815167ffffffffffffffff80821115610e1157600080fd5b9083019060e08286031215610e2557600080fd5b610e2d6107ba565b82518152610e3d60208401610c6a565b60208201526040830151604082015260608301516060820152608083015182811115610e6857600080fd5b610e7487828601610d09565b60808301525060a083015182811115610e8c57600080fd5b610e9887828601610d09565b60a083015250610c2660c08401610ddc565b600060208284031215610ebc57600080fd5b5051919050565b60008219821115610efd577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500190565b828152604060208201528151604082015263ffffffff60208301511660608201526000604083015160c06080840152610f3f610100840182610902565b9050606084015160a0840152608084015167ffffffffffffffff80821660c08601528060a08701511660e08601525050809150509392505050565b60006020808385031215610f8d57600080fd5b825167ffffffffffffffff811115610fa457600080fd5b8301601f81018513610fb557600080fd5b8051610fc3610a828261099e565b81815260059190911b82018301908381019087831115610fe257600080fd5b928401925b8284101561100057835182529284019290840190610fe7565b979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea264697066735822122068c7cca5c8623c93f1011bfaf91b0a8a70fc32989b666de234fc234ae96264b664736f6c634300080d0033";

type TreasureEffectDeathKeepResourceSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TreasureEffectDeathKeepResourceSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TreasureEffectDeathKeepResourceSystem__factory extends ContractFactory {
  constructor(...args: TreasureEffectDeathKeepResourceSystemConstructorParams) {
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
  ): Promise<TreasureEffectDeathKeepResourceSystem> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<TreasureEffectDeathKeepResourceSystem>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): TreasureEffectDeathKeepResourceSystem {
    return super.attach(address) as TreasureEffectDeathKeepResourceSystem;
  }
  override connect(
    signer: Signer
  ): TreasureEffectDeathKeepResourceSystem__factory {
    return super.connect(
      signer
    ) as TreasureEffectDeathKeepResourceSystem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TreasureEffectDeathKeepResourceSystemInterface {
    return new utils.Interface(
      _abi
    ) as TreasureEffectDeathKeepResourceSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TreasureEffectDeathKeepResourceSystem {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TreasureEffectDeathKeepResourceSystem;
  }
}
