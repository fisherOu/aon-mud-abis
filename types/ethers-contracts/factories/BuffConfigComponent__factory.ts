/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  BuffConfigComponent,
  BuffConfigComponentInterface,
} from "../BuffConfigComponent";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "world",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "BareComponent__NotImplemented",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnableWritable__NotWriter",
    type: "error",
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
        internalType: "address",
        name: "writer",
        type: "address",
      },
    ],
    name: "authorizeWriter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getEntities",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "getEntitiesWithValue",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
    ],
    name: "getRawValue",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSchema",
    outputs: [
      {
        internalType: "string[]",
        name: "keys",
        type: "string[]",
      },
      {
        internalType: "enum LibTypes.SchemaValue[]",
        name: "values",
        type: "uint8[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
    ],
    name: "getValue",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "buffEffectID",
            type: "string",
          },
          {
            internalType: "string",
            name: "asset",
            type: "string",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint64",
            name: "buffType",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "continueTime",
            type: "uint64",
          },
        ],
        internalType: "struct BuffConfig",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
    ],
    name: "has",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "id",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
        name: "",
        type: "address",
      },
    ],
    name: "registerIndexer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_world",
        type: "address",
      },
    ],
    name: "registerWorld",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
    ],
    name: "remove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "string",
            name: "buffEffectID",
            type: "string",
          },
          {
            internalType: "string",
            name: "asset",
            type: "string",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint64",
            name: "buffType",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "continueTime",
            type: "uint64",
          },
        ],
        internalType: "struct BuffConfig",
        name: "buffConfig",
        type: "tuple",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "value",
        type: "bytes",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "writer",
        type: "address",
      },
    ],
    name: "unauthorizeWriter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "world",
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
        name: "operator",
        type: "address",
      },
    ],
    name: "writeAccess",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001a0f38038062001a0f833981016040819052620000349162000200565b807f21c1937f04901765bfc157ba91209fb8ee5dcaf468a48f2a4023c94938009c5462000061336200008a565b60028190556001600160a01b0382161562000081576200008182620000fe565b50505062000232565b6000620000a1620001b660201b62000d221760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b62000108620001da565b6001600160a01b0316336001600160a01b0316146200013a57604051632f7a8ee160e01b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117909155600254604051630f30347760e41b8152306004820152602481019190915263f303477090604401600060405180830381600087803b1580156200019a57600080fd5b505af1158015620001af573d6000803e3d6000fd5b5050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6000620001f1620001b660201b62000d221760201c565b546001600160a01b0316919050565b6000602082840312156200021357600080fd5b81516001600160a01b03811681146200022b57600080fd5b9392505050565b6117cd80620002426000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c80638b282947116100b2578063b361be4611610081578063bf4fe57e11610066578063bf4fe57e146102bd578063cccf7a8e146102d0578063f2fde38b146102e357600080fd5b8063b361be461461028a578063b8bc073d1461029d57600080fd5b80638b282947146102455780638da5cb5b146102585780639d2c76b414610260578063af640d0f1461027357600080fd5b80634cc82215116101095780636b122fe0116100ee5780636b122fe0146101f957806375c0669c1461020f578063861eb9051461022257600080fd5b80634cc82215146101d35780634fef6a38146101e657600080fd5b80630ff4c9161461013b57806325349b6f1461016457806330b67baa1461017957806331b933b9146101be575b600080fd5b61014e610149366004610fe9565b6102f6565b60405161015b919061107c565b60405180910390f35b61017761017236600461128c565b61039e565b005b6000546101999073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161015b565b6101c66103e7565b60405161015b919061136f565b6101776101e1366004610fe9565b61041b565b6101776101f43660046113b3565b610466565b610201610544565b60405161015b92919061141f565b61017761021d3660046113b3565b610896565b6102356102303660046113b3565b6108c8565b604051901515815260200161015b565b61017761025336600461150f565b610953565b61019961099c565b61017761026e3660046113b3565b6109e1565b61027c60025481565b60405190815260200161015b565b6101c6610298366004611556565b6103e7565b6102b06102ab366004610fe9565b610b0a565b60405161015b9190611593565b6101776102cb3660046113b3565b610bac565b6102356102de366004610fe9565b610c87565b6101776102f13660046113b3565b610ca9565b61033c6040518060a00160405280606081526020016060815260200160608152602001600067ffffffffffffffff168152602001600067ffffffffffffffff1681525090565b600080600080600061034d87610b0a565b80602001905181019061036091906115eb565b6040805160a08101825295865260208601949094529284019190915267ffffffffffffffff9081166060840152166080820152979650505050505050565b6103e382826000015183602001518460400151856060015186608001516040516020016103cf95949392919061169c565b604051602081830303815290604052610953565b5050565b60606040517f17d5b8e800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610424336108c8565b61045a576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61046381610d46565b50565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146104d6576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b60408051600580825260c08201909252606091829190816020015b606081526020019060019003908161055f57505060408051600580825260c082019092529193506020820160a0803683370190505090506040518060400160405280600c81526020017f6275666645666665637449440000000000000000000000000000000000000000815250826000815181106105df576105df6116fc565b6020026020010181905250600f816000815181106105ff576105ff6116fc565b60200260200101906021811115610618576106186113f0565b9081602181111561062b5761062b6113f0565b815250506040518060400160405280600581526020017f617373657400000000000000000000000000000000000000000000000000000081525082600181518110610678576106786116fc565b6020026020010181905250600f81600181518110610698576106986116fc565b602002602001019060218111156106b1576106b16113f0565b908160218111156106c4576106c46113f0565b815250506040518060400160405280600481526020017f6e616d650000000000000000000000000000000000000000000000000000000081525082600281518110610711576107116116fc565b6020026020010181905250600f81600281518110610731576107316116fc565b6020026020010190602181111561074a5761074a6113f0565b9081602181111561075d5761075d6113f0565b815250506040518060400160405280600881526020017f6275666654797065000000000000000000000000000000000000000000000000815250826003815181106107aa576107aa6116fc565b6020026020010181905250600b816003815181106107ca576107ca6116fc565b602002602001019060218111156107e3576107e36113f0565b908160218111156107f6576107f66113f0565b815250506040518060400160405280600c81526020017f636f6e74696e756554696d65000000000000000000000000000000000000000081525082600481518110610843576108436116fc565b6020026020010181905250600b81600481518110610863576108636116fc565b6020026020010190602181111561087c5761087c6113f0565b9081602181111561088f5761088f6113f0565b9052509091565b6040517f17d5b8e800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c909602052604081205460ff168061094d575061091e61099c565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b92915050565b61095c336108c8565b610992576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103e38282610db4565b60006109dc7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610a51576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556002546040517ff3034770000000000000000000000000000000000000000000000000000000008152306004820152602481019190915263f3034770906044015b600060405180830381600087803b158015610aef57600080fd5b505af1158015610b03573d6000803e3d6000fd5b5050505050565b6000818152600160205260409020805460609190610b279061172b565b80601f0160208091040260200160405190810160405280929190818152602001828054610b539061172b565b8015610ba05780601f10610b7557610100808354040283529160200191610ba0565b820191906000526020600020905b815481529060010190602001808311610b8357829003601f168201915b50505050509050919050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610c1c576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b60008181526001602052604081208054610ca09061172b565b15159392505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610d19576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61046381610e62565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6000818152600160205260408120610d5d91610f16565b6000546040517f0de3b7b50000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff90911690630de3b7b590602401610ad5565b60008281526001602090815260409091208251610dd392840190610f50565b506000546040517fcfd3c57f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169063cfd3c57f90610e2c908590859060040161177e565b600060405180830381600087803b158015610e4657600080fd5b505af1158015610e5a573d6000803e3d6000fd5b505050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051610463928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b508054610f229061172b565b6000825580601f10610f32575050565b601f0160209004906000526020600020908101906104639190610fd4565b828054610f5c9061172b565b90600052602060002090601f016020900481019282610f7e5760008555610fc4565b82601f10610f9757805160ff1916838001178555610fc4565b82800160010185558215610fc4579182015b82811115610fc4578251825591602001919060010190610fa9565b50610fd0929150610fd4565b5090565b5b80821115610fd05760008155600101610fd5565b600060208284031215610ffb57600080fd5b5035919050565b60005b8381101561101d578181015183820152602001611005565b8381111561102c576000848401525b50505050565b6000815180845261104a816020860160208601611002565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000825160a0602084015261109860c0840182611032565b905060208401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0808584030160408601526110d48383611032565b92506040860151915080858403016060860152506110f28282611032565b915050606084015167ffffffffffffffff80821660808601528060808701511660a086015250508091505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160a0810167ffffffffffffffff8111828210171561117557611175611123565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156111c2576111c2611123565b604052919050565b600067ffffffffffffffff8211156111e4576111e4611123565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261122157600080fd5b813561123461122f826111ca565b61117b565b81815284602083860101111561124957600080fd5b816020850160208301376000918101602001919091529392505050565b67ffffffffffffffff8116811461046357600080fd5b803561128781611266565b919050565b6000806040838503121561129f57600080fd5b82359150602083013567ffffffffffffffff808211156112be57600080fd5b9084019060a082870312156112d257600080fd5b6112da611152565b8235828111156112e957600080fd5b6112f588828601611210565b82525060208301358281111561130a57600080fd5b61131688828601611210565b60208301525060408301358281111561132e57600080fd5b61133a88828601611210565b60408301525061134c6060840161127c565b606082015261135d6080840161127c565b60808201528093505050509250929050565b6020808252825182820181905260009190848201906040850190845b818110156113a75783518352928401929184019160010161138b565b50909695505050505050565b6000602082840312156113c557600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146113e957600080fd5b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6000604082016040835280855180835260608501915060608160051b8601019250602080880160005b83811015611494577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa0888703018552611482868351611032565b95509382019390820190600101611448565b50508584038187015286518085528782019482019350915060005b82811015611502578451602281106114f0577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b845293810193928101926001016114af565b5091979650505050505050565b6000806040838503121561152257600080fd5b82359150602083013567ffffffffffffffff81111561154057600080fd5b61154c85828601611210565b9150509250929050565b60006020828403121561156857600080fd5b813567ffffffffffffffff81111561157f57600080fd5b61158b84828501611210565b949350505050565b6020815260006113e96020830184611032565b600082601f8301126115b757600080fd5b81516115c561122f826111ca565b8181528460208386010111156115da57600080fd5b61158b826020830160208701611002565b600080600080600060a0868803121561160357600080fd5b855167ffffffffffffffff8082111561161b57600080fd5b61162789838a016115a6565b9650602088015191508082111561163d57600080fd5b61164989838a016115a6565b9550604088015191508082111561165f57600080fd5b5061166c888289016115a6565b935050606086015161167d81611266565b608087015190925061168e81611266565b809150509295509295909350565b60a0815260006116af60a0830188611032565b82810360208401526116c18188611032565b905082810360408401526116d58187611032565b91505067ffffffffffffffff80851660608401528084166080840152509695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600181811c9082168061173f57607f821691505b602082108103611778577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b82815260406020820152600061158b604083018461103256fea264697066735822122048922ca07b8c96f53c7a4e970f744d153ec8da6718183abc539249ccb03e05d664736f6c634300080d0033";

type BuffConfigComponentConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BuffConfigComponentConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BuffConfigComponent__factory extends ContractFactory {
  constructor(...args: BuffConfigComponentConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    world: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BuffConfigComponent> {
    return super.deploy(world, overrides || {}) as Promise<BuffConfigComponent>;
  }
  override getDeployTransaction(
    world: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(world, overrides || {});
  }
  override attach(address: string): BuffConfigComponent {
    return super.attach(address) as BuffConfigComponent;
  }
  override connect(signer: Signer): BuffConfigComponent__factory {
    return super.connect(signer) as BuffConfigComponent__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BuffConfigComponentInterface {
    return new utils.Interface(_abi) as BuffConfigComponentInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BuffConfigComponent {
    return new Contract(address, _abi, signerOrProvider) as BuffConfigComponent;
  }
}
