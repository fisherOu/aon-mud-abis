/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  WarshipComponent,
  WarshipComponentInterface,
} from "../WarshipComponent";

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
            name: "model",
            type: "string",
          },
          {
            internalType: "uint64",
            name: "createTime",
            type: "uint64",
          },
        ],
        internalType: "struct Warship",
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
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "string",
            name: "model",
            type: "string",
          },
          {
            internalType: "uint64",
            name: "createTime",
            type: "uint64",
          },
        ],
        internalType: "struct Warship",
        name: "warship",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200167f3803806200167f833981016040819052620000349162000200565b807fde4b6105f4f699e0bc3e5ad258d64c9f5c9421b67cdf5d64c05b2f4f81d30d0462000061336200008a565b60028190556001600160a01b0382161562000081576200008182620000fe565b50505062000232565b6000620000a1620001b660201b62000af31760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b62000108620001da565b6001600160a01b0316336001600160a01b0316146200013a57604051632f7a8ee160e01b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117909155600254604051630f30347760e41b8152306004820152602481019190915263f303477090604401600060405180830381600087803b1580156200019a57600080fd5b505af1158015620001af573d6000803e3d6000fd5b5050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6000620001f1620001b660201b62000af31760201c565b546001600160a01b0316919050565b6000602082840312156200021357600080fd5b81516001600160a01b03811681146200022b57600080fd5b9392505050565b61143d80620002426000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c80638da5cb5b116100b2578063b361be4611610081578063bf4fe57e11610066578063bf4fe57e146102bd578063cccf7a8e146102d0578063f2fde38b146102e357600080fd5b8063b361be461461028a578063b8bc073d1461029d57600080fd5b80638da5cb5b146102455780639a8536601461024d5780639d2c76b414610260578063af640d0f1461027357600080fd5b80634fef6a381161010957806375c0669c116100ee57806375c0669c146101fc578063861eb9051461020f5780638b2829471461023257600080fd5b80634fef6a38146101d35780636b122fe0146101e657600080fd5b80630ff4c9161461013b57806330b67baa1461016457806331b933b9146101a95780634cc82215146101be575b600080fd5b61014e610149366004610dba565b6102f6565b60405161015b9190610e4d565b60405180910390f35b6000546101849073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161015b565b6101b161034e565b60405161015b9190610e89565b6101d16101cc366004610dba565b610382565b005b6101d16101e1366004610ecd565b6103cd565b6101ee6104ab565b60405161015b929190610f39565b6101d161020a366004610ecd565b610630565b61022261021d366004610ecd565b610662565b604051901515815260200161015b565b6101d161024036600461114b565b6106ed565b61018461073a565b6101d161025b3660046111a8565b61077f565b6101d161026e366004610ecd565b6107b2565b61027c60025481565b60405190815260200161015b565b6101b1610298366004611262565b61034e565b6102b06102ab366004610dba565b6108db565b60405161015b919061129f565b6101d16102cb366004610ecd565b61097d565b6102226102de366004610dba565b610a58565b6101d16102f1366004610ecd565b610a7a565b604080518082019091526060815260006020820152600080610317846108db565b80602001905181019061032a91906112b2565b6040805180820190915291825267ffffffffffffffff166020820152949350505050565b60606040517f17d5b8e800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61038b33610662565b6103c1576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103ca81610b17565b50565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff16331461043d576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b6040805160028082526060828101909352829190816020015b60608152602001906001900390816104c457505060408051600280825260608201835292945091906020830190803683370190505090506040518060400160405280600581526020017f6d6f64656c0000000000000000000000000000000000000000000000000000008152508260008151811061054457610544611340565b6020026020010181905250600f8160008151811061056457610564611340565b6020026020010190602181111561057d5761057d610f0a565b9081602181111561059057610590610f0a565b815250506040518060400160405280600a81526020017f63726561746554696d6500000000000000000000000000000000000000000000815250826001815181106105dd576105dd611340565b6020026020010181905250600b816001815181106105fd576105fd611340565b6020026020010190602181111561061657610616610f0a565b9081602181111561062957610629610f0a565b9052509091565b6040517f17d5b8e800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c909602052604081205460ff16806106e757506106b861073a565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b92915050565b6106f633610662565b61072c576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107368282610b85565b5050565b600061077a7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b610736828260000151836020015160405160200161079e92919061136f565b6040516020818303038152906040526106ed565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610822576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556002546040517ff3034770000000000000000000000000000000000000000000000000000000008152306004820152602481019190915263f3034770906044015b600060405180830381600087803b1580156108c057600080fd5b505af11580156108d4573d6000803e3d6000fd5b5050505050565b60008181526001602052604090208054606091906108f89061139b565b80601f01602080910402602001604051908101604052809291908181526020018280546109249061139b565b80156109715780601f1061094657610100808354040283529160200191610971565b820191906000526020600020905b81548152906001019060200180831161095457829003601f168201915b50505050509050919050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146109ed576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b60008181526001602052604081208054610a719061139b565b15159392505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610aea576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103ca81610c33565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6000818152600160205260408120610b2e91610ce7565b6000546040517f0de3b7b50000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff90911690630de3b7b5906024016108a6565b60008281526001602090815260409091208251610ba492840190610d21565b506000546040517fcfd3c57f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169063cfd3c57f90610bfd90859085906004016113ee565b600060405180830381600087803b158015610c1757600080fd5b505af1158015610c2b573d6000803e3d6000fd5b505050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046080546040516103ca928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b508054610cf39061139b565b6000825580601f10610d03575050565b601f0160209004906000526020600020908101906103ca9190610da5565b828054610d2d9061139b565b90600052602060002090601f016020900481019282610d4f5760008555610d95565b82601f10610d6857805160ff1916838001178555610d95565b82800160010185558215610d95579182015b82811115610d95578251825591602001919060010190610d7a565b50610da1929150610da5565b5090565b5b80821115610da15760008155600101610da6565b600060208284031215610dcc57600080fd5b5035919050565b60005b83811015610dee578181015183820152602001610dd6565b83811115610dfd576000848401525b50505050565b60008151808452610e1b816020860160208601610dd3565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000825160406020840152610e696060840182610e03565b905067ffffffffffffffff60208501511660408401528091505092915050565b6020808252825182820181905260009190848201906040850190845b81811015610ec157835183529284019291840191600101610ea5565b50909695505050505050565b600060208284031215610edf57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610f0357600080fd5b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6000604082016040835280855180835260608501915060608160051b8601019250602080880160005b83811015610fae577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa0888703018552610f9c868351610e03565b95509382019390820190600101610f62565b50508584038187015286518085528782019482019350915060005b8281101561101c5784516022811061100a577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b84529381019392810192600101610fc9565b5091979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561109f5761109f611029565b604052919050565b600067ffffffffffffffff8211156110c1576110c1611029565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b60006111006110fb846110a7565b611058565b905082815283838301111561111457600080fd5b828260208301376000602084830101529392505050565b600082601f83011261113c57600080fd5b610f03838335602085016110ed565b6000806040838503121561115e57600080fd5b82359150602083013567ffffffffffffffff81111561117c57600080fd5b6111888582860161112b565b9150509250929050565b67ffffffffffffffff811681146103ca57600080fd5b600080604083850312156111bb57600080fd5b82359150602083013567ffffffffffffffff808211156111da57600080fd5b90840190604082870312156111ee57600080fd5b60405160408101818110838211171561120957611209611029565b60405282358281111561121b57600080fd5b83019150601f8201871361122e57600080fd5b61123d878335602085016110ed565b81526020830135925061124f83611192565b8260208201528093505050509250929050565b60006020828403121561127457600080fd5b813567ffffffffffffffff81111561128b57600080fd5b6112978482850161112b565b949350505050565b602081526000610f036020830184610e03565b600080604083850312156112c557600080fd5b825167ffffffffffffffff8111156112dc57600080fd5b8301601f810185136112ed57600080fd5b80516112fb6110fb826110a7565b81815286602083850101111561131057600080fd5b611321826020830160208601610dd3565b809450505050602083015161133581611192565b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6040815260006113826040830185610e03565b905067ffffffffffffffff831660208301529392505050565b600181811c908216806113af57607f821691505b6020821081036113e8577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b8281526040602082015260006112976040830184610e0356fea2646970667358221220b8ba56c04b5d44ab7870fcec0698e265ec8b5c47b732c9563bca4035e405a81964736f6c634300080d0033";

type WarshipComponentConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WarshipComponentConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WarshipComponent__factory extends ContractFactory {
  constructor(...args: WarshipComponentConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    world: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<WarshipComponent> {
    return super.deploy(world, overrides || {}) as Promise<WarshipComponent>;
  }
  override getDeployTransaction(
    world: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(world, overrides || {});
  }
  override attach(address: string): WarshipComponent {
    return super.attach(address) as WarshipComponent;
  }
  override connect(signer: Signer): WarshipComponent__factory {
    return super.connect(signer) as WarshipComponent__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WarshipComponentInterface {
    return new utils.Interface(_abi) as WarshipComponentInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WarshipComponent {
    return new Contract(address, _abi, signerOrProvider) as WarshipComponent;
  }
}
