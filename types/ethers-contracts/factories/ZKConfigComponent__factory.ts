/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  ZKConfigComponent,
  ZKConfigComponentInterface,
} from "../ZKConfigComponent";

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
    inputs: [],
    name: "getValue",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "open",
            type: "bool",
          },
          {
            internalType: "address",
            name: "initVerifyAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "moveVerifyAddress",
            type: "address",
          },
        ],
        internalType: "struct ZKConfig",
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
        components: [
          {
            internalType: "bool",
            name: "open",
            type: "bool",
          },
          {
            internalType: "address",
            name: "initVerifyAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "moveVerifyAddress",
            type: "address",
          },
        ],
        internalType: "struct ZKConfig",
        name: "moveConfig",
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
  "0x60806040523480156200001157600080fd5b506040516200164938038062001649833981016040819052620000349162000200565b807fd0deb8af54f5692432398f7f62bf53c9e54e6d6a9b4dbccb012b3fe04ea432d362000061336200008a565b60028190556001600160a01b0382161562000081576200008182620000fe565b50505062000232565b6000620000a1620001b660201b62000c041760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b62000108620001da565b6001600160a01b0316336001600160a01b0316146200013a57604051632f7a8ee160e01b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117909155600254604051630f30347760e41b8152306004820152602481019190915263f303477090604401600060405180830381600087803b1580156200019a57600080fd5b505af1158015620001af573d6000803e3d6000fd5b5050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6000620001f1620001b660201b62000c041760201c565b546001600160a01b0316919050565b6000602082840312156200021357600080fd5b81516001600160a01b03811681146200022b57600080fd5b9392505050565b61140780620002426000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c80638b282947116100b2578063b361be4611610081578063bf4fe57e11610066578063bf4fe57e146102e3578063cccf7a8e146102f6578063f2fde38b1461030957600080fd5b8063b361be46146102b0578063b8bc073d146102c357600080fd5b80638b2829471461026b5780638da5cb5b1461027e5780639d2c76b414610286578063af640d0f1461029957600080fd5b80634cc82215116101095780636b122fe0116100ee5780636b122fe01461021f57806375c0669c14610235578063861eb9051461024857600080fd5b80634cc82215146101f95780634fef6a381461020c57600080fd5b806311eabb1b1461013b578063209652551461015057806330b67baa1461019f57806331b933b9146101e4575b600080fd5b61014e610149366004610f2a565b61031c565b005b610158610383565b6040805182511515815260208084015173ffffffffffffffffffffffffffffffffffffffff9081169183019190915292820151909216908201526060015b60405180910390f35b6000546101bf9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610196565b6101ec6103fa565b6040516101969190610f9c565b61014e610207366004610fe0565b61042e565b61014e61021a366004610ff9565b610476565b610227610554565b6040516101969291906110b7565b61014e610243366004610ff9565b610774565b61025b610256366004610ff9565b6107a6565b6040519015158152602001610196565b61014e610279366004611252565b610831565b6101bf61087e565b61014e610294366004610ff9565b6108c3565b6102a260025481565b604051908152602001610196565b6101ec6102be366004611299565b6103fa565b6102d66102d1366004610fe0565b6109ec565b60405161019691906112d6565b61014e6102f1366004610ff9565b610a8e565b61025b610304366004610fe0565b610b69565b61014e610317366004610ff9565b610b8b565b61038061060d82600001518360200151846040015160405160200161036c93929190921515835273ffffffffffffffffffffffffffffffffffffffff918216602084015216604082015260600190565b604051602081830303815290604052610831565b50565b604080516060810182526000808252602082018190529181018290529080806103ad61060d6109ec565b8060200190518101906103c091906112e9565b60408051606081018252931515845273ffffffffffffffffffffffffffffffffffffffff9283166020850152911690820152949350505050565b60606040517f17d5b8e800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610437336107a6565b61046d576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61038081610c28565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146104e6576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b60408051600380825260808201909252606091829190816020015b606081526020019060019003908161056f57505060408051600380825260808201909252919350602082016060803683370190505090506040518060400160405280600481526020017f6f70656e00000000000000000000000000000000000000000000000000000000815250826000815181106105ef576105ef611336565b602002602001018190525060008160008151811061060f5761060f611336565b6020026020010190602181111561062857610628611088565b9081602181111561063b5761063b611088565b815250506040518060400160405280601181526020017f696e6974566572696679416464726573730000000000000000000000000000008152508260018151811061068857610688611336565b60200260200101819052506010816001815181106106a8576106a8611336565b602002602001019060218111156106c1576106c1611088565b908160218111156106d4576106d4611088565b815250506040518060400160405280601181526020017f6d6f7665566572696679416464726573730000000000000000000000000000008152508260028151811061072157610721611336565b602002602001018190525060108160028151811061074157610741611336565b6020026020010190602181111561075a5761075a611088565b9081602181111561076d5761076d611088565b9052509091565b6040517f17d5b8e800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c909602052604081205460ff168061082b57506107fc61087e565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b92915050565b61083a336107a6565b610870576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61087a8282610c96565b5050565b60006108be7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610933576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556002546040517ff3034770000000000000000000000000000000000000000000000000000000008152306004820152602481019190915263f3034770906044015b600060405180830381600087803b1580156109d157600080fd5b505af11580156109e5573d6000803e3d6000fd5b5050505050565b6000818152600160205260409020805460609190610a0990611365565b80601f0160208091040260200160405190810160405280929190818152602001828054610a3590611365565b8015610a825780601f10610a5757610100808354040283529160200191610a82565b820191906000526020600020905b815481529060010190602001808311610a6557829003601f168201915b50505050509050919050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610afe576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b60008181526001602052604081208054610b8290611365565b15159392505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610bfb576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61038081610d44565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6000818152600160205260408120610c3f91610df8565b6000546040517f0de3b7b50000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff90911690630de3b7b5906024016109b7565b60008281526001602090815260409091208251610cb592840190610e32565b506000546040517fcfd3c57f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169063cfd3c57f90610d0e90859085906004016113b8565b600060405180830381600087803b158015610d2857600080fd5b505af1158015610d3c573d6000803e3d6000fd5b505050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051610380928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b508054610e0490611365565b6000825580601f10610e14575050565b601f0160209004906000526020600020908101906103809190610eb6565b828054610e3e90611365565b90600052602060002090601f016020900481019282610e605760008555610ea6565b82601f10610e7957805160ff1916838001178555610ea6565b82800160010185558215610ea6579182015b82811115610ea6578251825591602001919060010190610e8b565b50610eb2929150610eb6565b5090565b5b80821115610eb25760008155600101610eb7565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b801515811461038057600080fd5b73ffffffffffffffffffffffffffffffffffffffff8116811461038057600080fd5b600060608284031215610f3c57600080fd5b6040516060810181811067ffffffffffffffff82111715610f5f57610f5f610ecb565b6040528235610f6d81610efa565b81526020830135610f7d81610f08565b60208201526040830135610f9081610f08565b60408201529392505050565b6020808252825182820181905260009190848201906040850190845b81811015610fd457835183529284019291840191600101610fb8565b50909695505050505050565b600060208284031215610ff257600080fd5b5035919050565b60006020828403121561100b57600080fd5b813561101681610f08565b9392505050565b6000815180845260005b8181101561104357602081850181015186830182015201611027565b81811115611055576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6000604082016040835280855180835260608501915060608160051b8601019250602080880160005b8381101561112c577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa088870301855261111a86835161101d565b955093820193908201906001016110e0565b50508584038187015286518085528782019482019350915060005b8281101561119a57845160228110611188577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b84529381019392810192600101611147565b5091979650505050505050565b600082601f8301126111b857600080fd5b813567ffffffffffffffff808211156111d3576111d3610ecb565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561121957611219610ecb565b8160405283815286602085880101111561123257600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806040838503121561126557600080fd5b82359150602083013567ffffffffffffffff81111561128357600080fd5b61128f858286016111a7565b9150509250929050565b6000602082840312156112ab57600080fd5b813567ffffffffffffffff8111156112c257600080fd5b6112ce848285016111a7565b949350505050565b602081526000611016602083018461101d565b6000806000606084860312156112fe57600080fd5b835161130981610efa565b602085015190935061131a81610f08565b604085015190925061132b81610f08565b809150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600181811c9082168061137957607f821691505b6020821081036113b2577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b8281526040602082015260006112ce604083018461101d56fea2646970667358221220aee550398e21a099197aeb6dc755bfce8e78dc2e6686e68cabc087b488c5c26364736f6c634300080d0033";

type ZKConfigComponentConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ZKConfigComponentConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ZKConfigComponent__factory extends ContractFactory {
  constructor(...args: ZKConfigComponentConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    world: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ZKConfigComponent> {
    return super.deploy(world, overrides || {}) as Promise<ZKConfigComponent>;
  }
  override getDeployTransaction(
    world: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(world, overrides || {});
  }
  override attach(address: string): ZKConfigComponent {
    return super.attach(address) as ZKConfigComponent;
  }
  override connect(signer: Signer): ZKConfigComponent__factory {
    return super.connect(signer) as ZKConfigComponent__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZKConfigComponentInterface {
    return new utils.Interface(_abi) as ZKConfigComponentInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZKConfigComponent {
    return new Contract(address, _abi, signerOrProvider) as ZKConfigComponent;
  }
}
