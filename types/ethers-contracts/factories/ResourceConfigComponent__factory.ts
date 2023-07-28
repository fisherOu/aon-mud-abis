/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  ResourceConfigComponent,
  ResourceConfigComponentInterface,
} from "../ResourceConfigComponent";

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
            internalType: "uint256",
            name: "valueMax",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "valueMin",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "difficultMax",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "difficultMin",
            type: "uint8",
          },
        ],
        internalType: "struct ResourceConfig",
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
        components: [
          {
            internalType: "uint256",
            name: "valueMax",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "valueMin",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "difficultMax",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "difficultMin",
            type: "uint8",
          },
        ],
        internalType: "struct ResourceConfig",
        name: "resourceConfig",
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
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620016d2380380620016d2833981016040819052620000349162000200565b807f402867350f0e10225e2ad4b364babe589a48a8ef1f4be504cbf331b3cd949c4462000061336200008a565b60028190556001600160a01b0382161562000081576200008182620000fe565b50505062000232565b6000620000a1620001b660201b62000c941760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b62000108620001da565b6001600160a01b0316336001600160a01b0316146200013a57604051632f7a8ee160e01b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117909155600254604051630f30347760e41b8152306004820152602481019190915263f303477090604401600060405180830381600087803b1580156200019a57600080fd5b505af1158015620001af573d6000803e3d6000fd5b5050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6000620001f1620001b660201b62000c941760201c565b546001600160a01b0316919050565b6000602082840312156200021357600080fd5b81516001600160a01b03811681146200022b57600080fd5b9392505050565b61149080620002426000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c80638da5cb5b116100b2578063b8bc073d11610081578063bf4fe57e11610066578063bf4fe57e146102e3578063cccf7a8e146102f6578063f2fde38b1461030957600080fd5b8063b8bc073d146102b0578063b952e7b9146102d057600080fd5b80638da5cb5b1461026b5780639d2c76b414610273578063af640d0f14610286578063b361be461461029d57600080fd5b80634fef6a381161010957806375c0669c116100ee57806375c0669c14610222578063861eb905146102355780638b2829471461025857600080fd5b80634fef6a38146101f95780636b122fe01461020c57600080fd5b8063209652551461013b57806330b67baa1461018a57806331b933b9146101cf5780634cc82215146101e4575b600080fd5b61014361031c565b60405161018191906000608082019050825182526020830151602083015260ff604084015116604083015260ff606084015116606083015292915050565b60405180910390f35b6000546101aa9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610181565b6101d7610391565b6040516101819190610f5b565b6101f76101f2366004610f9f565b6103c5565b005b6101f7610207366004610fb8565b610410565b6102146104ee565b60405161018192919061108f565b6101f7610230366004610fb8565b6107a7565b610248610243366004610fb8565b6107d9565b6040519015158152602001610181565b6101f7610266366004611259565b610864565b6101aa6108b1565b6101f7610281366004610fb8565b6108f6565b61028f60025481565b604051908152602001610181565b6101d76102ab3660046112a0565b610391565b6102c36102be366004610f9f565b610a1f565b60405161018191906112dd565b6101f76102de3660046112ff565b610ac1565b6101f76102f1366004610fb8565b610b1e565b610248610304366004610f9f565b610bf9565b6101f7610317366004610fb8565b610c1b565b60408051608081018252600080825260208201819052918101829052606081018290529080808061034e61060d610a1f565b8060200190518101906103619190611374565b60408051608081018252948552602085019390935260ff9182169284019290925216606082015295945050505050565b60606040517f17d5b8e800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103ce336107d9565b610404576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61040d81610cb8565b50565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610480576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b60408051600480825260a08201909252606091829190816020015b606081526020019060019003908161050957505060408051600480825260a08201909252919350602082016080803683370190505090506040518060400160405280600881526020017f76616c75654d617800000000000000000000000000000000000000000000000081525082600081518110610589576105896113bf565b6020026020010181905250600d816000815181106105a9576105a96113bf565b602002602001019060218111156105c2576105c2611060565b908160218111156105d5576105d5611060565b815250506040518060400160405280600881526020017f76616c75654d696e00000000000000000000000000000000000000000000000081525082600181518110610622576106226113bf565b6020026020010181905250600d81600181518110610642576106426113bf565b6020026020010190602181111561065b5761065b611060565b9081602181111561066e5761066e611060565b815250506040518060400160405280600c81526020017f646966666963756c744d61780000000000000000000000000000000000000000815250826002815181106106bb576106bb6113bf565b60200260200101819052506008816002815181106106db576106db6113bf565b602002602001019060218111156106f4576106f4611060565b9081602181111561070757610707611060565b815250506040518060400160405280600c81526020017f646966666963756c744d696e000000000000000000000000000000000000000081525082600381518110610754576107546113bf565b6020026020010181905250600881600381518110610774576107746113bf565b6020026020010190602181111561078d5761078d611060565b908160218111156107a0576107a0611060565b9052509091565b6040517f17d5b8e800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c909602052604081205460ff168061085e575061082f6108b1565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b92915050565b61086d336107d9565b6108a3576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6108ad8282610d26565b5050565b60006108f17f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610966576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556002546040517ff3034770000000000000000000000000000000000000000000000000000000008152306004820152602481019190915263f3034770906044015b600060405180830381600087803b158015610a0457600080fd5b505af1158015610a18573d6000803e3d6000fd5b5050505050565b6000818152600160205260409020805460609190610a3c906113ee565b80601f0160208091040260200160405190810160405280929190818152602001828054610a68906113ee565b8015610ab55780601f10610a8a57610100808354040283529160200191610ab5565b820191906000526020600020905b815481529060010190602001808311610a9857829003601f168201915b50505050509050919050565b61040d61060d8260000151836020015184604001518560600151604051602001610b0a9493929190938452602084019290925260ff908116604084015216606082015260800190565b604051602081830303815290604052610864565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610b8e576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b60008181526001602052604081208054610c12906113ee565b15159392505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610c8b576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61040d81610dd4565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6000818152600160205260408120610ccf91610e88565b6000546040517f0de3b7b50000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff90911690630de3b7b5906024016109ea565b60008281526001602090815260409091208251610d4592840190610ec2565b506000546040517fcfd3c57f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169063cfd3c57f90610d9e9085908590600401611441565b600060405180830381600087803b158015610db857600080fd5b505af1158015610dcc573d6000803e3d6000fd5b505050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460805460405161040d928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b508054610e94906113ee565b6000825580601f10610ea4575050565b601f01602090049060005260206000209081019061040d9190610f46565b828054610ece906113ee565b90600052602060002090601f016020900481019282610ef05760008555610f36565b82601f10610f0957805160ff1916838001178555610f36565b82800160010185558215610f36579182015b82811115610f36578251825591602001919060010190610f1b565b50610f42929150610f46565b5090565b5b80821115610f425760008155600101610f47565b6020808252825182820181905260009190848201906040850190845b81811015610f9357835183529284019291840191600101610f77565b50909695505050505050565b600060208284031215610fb157600080fd5b5035919050565b600060208284031215610fca57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610fee57600080fd5b9392505050565b6000815180845260005b8181101561101b57602081850181015186830182015201610fff565b8181111561102d576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6000604082016040835280855180835260608501915060608160051b8601019250602080880160005b83811015611104577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa08887030185526110f2868351610ff5565b955093820193908201906001016110b8565b50508584038187015286518085528782019482019350915060005b8281101561117257845160228110611160577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8452938101939281019260010161111f565b5091979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f8301126111bf57600080fd5b813567ffffffffffffffff808211156111da576111da61117f565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156112205761122061117f565b8160405283815286602085880101111561123957600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806040838503121561126c57600080fd5b82359150602083013567ffffffffffffffff81111561128a57600080fd5b611296858286016111ae565b9150509250929050565b6000602082840312156112b257600080fd5b813567ffffffffffffffff8111156112c957600080fd5b6112d5848285016111ae565b949350505050565b602081526000610fee6020830184610ff5565b60ff8116811461040d57600080fd5b60006080828403121561131157600080fd5b6040516080810181811067ffffffffffffffff821117156113345761133461117f565b806040525082358152602083013560208201526040830135611355816112f0565b60408201526060830135611368816112f0565b60608201529392505050565b6000806000806080858703121561138a57600080fd5b845193506020850151925060408501516113a3816112f0565b60608601519092506113b4816112f0565b939692955090935050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600181811c9082168061140257607f821691505b60208210810361143b577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b8281526040602082015260006112d56040830184610ff556fea2646970667358221220eb53f60d11cfb28141d023807172bf4ecbb5c259c0a29e8f43e4331a8970415364736f6c634300080d0033";

type ResourceConfigComponentConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ResourceConfigComponentConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ResourceConfigComponent__factory extends ContractFactory {
  constructor(...args: ResourceConfigComponentConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    world: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ResourceConfigComponent> {
    return super.deploy(
      world,
      overrides || {}
    ) as Promise<ResourceConfigComponent>;
  }
  override getDeployTransaction(
    world: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(world, overrides || {});
  }
  override attach(address: string): ResourceConfigComponent {
    return super.attach(address) as ResourceConfigComponent;
  }
  override connect(signer: Signer): ResourceConfigComponent__factory {
    return super.connect(signer) as ResourceConfigComponent__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ResourceConfigComponentInterface {
    return new utils.Interface(_abi) as ResourceConfigComponentInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ResourceConfigComponent {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ResourceConfigComponent;
  }
}
