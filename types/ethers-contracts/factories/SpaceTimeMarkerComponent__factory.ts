/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  SpaceTimeMarkerComponent,
  SpaceTimeMarkerComponentInterface,
} from "../SpaceTimeMarkerComponent";

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
            internalType: "uint256",
            name: "seed",
            type: "uint256",
          },
          {
            internalType: "uint64",
            name: "timeout",
            type: "uint64",
          },
        ],
        internalType: "struct SpaceTimeMarker",
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
            internalType: "uint256",
            name: "seed",
            type: "uint256",
          },
          {
            internalType: "uint64",
            name: "timeout",
            type: "uint64",
          },
        ],
        internalType: "struct SpaceTimeMarker",
        name: "spaceTimeMarker",
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
  "0x60806040523480156200001157600080fd5b506040516200156238038062001562833981016040819052620000349162000200565b807f4b1ac4c3aa37732e927cbff52c019e9fbdad0f3e454031afaefd319a3dc66ce462000061336200008a565b60028190556001600160a01b0382161562000081576200008182620000fe565b50505062000232565b6000620000a1620001b660201b62000b191760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b62000108620001da565b6001600160a01b0316336001600160a01b0316146200013a57604051632f7a8ee160e01b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117909155600254604051630f30347760e41b8152306004820152602481019190915263f303477090604401600060405180830381600087803b1580156200019a57600080fd5b505af1158015620001af573d6000803e3d6000fd5b5050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6000620001f1620001b660201b62000b191760201c565b546001600160a01b0316919050565b6000602082840312156200021357600080fd5b81516001600160a01b03811681146200022b57600080fd5b9392505050565b61132080620002426000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c80638da5cb5b116100b2578063b8bc073d11610081578063cccf7a8e11610066578063cccf7a8e146102d1578063df49b421146102e4578063f2fde38b146102f757600080fd5b8063b8bc073d1461029e578063bf4fe57e146102be57600080fd5b80638da5cb5b146102595780639d2c76b414610261578063af640d0f14610274578063b361be461461028b57600080fd5b80634fef6a381161010957806375c0669c116100ee57806375c0669c14610210578063861eb905146102235780638b2829471461024657600080fd5b80634fef6a38146101e75780636b122fe0146101fa57600080fd5b80630ff4c9161461013b57806330b67baa1461017857806331b933b9146101bd5780634cc82215146101d2575b600080fd5b61014e610149366004610de0565b61030a565b604080518251815260209283015167ffffffffffffffff1692810192909252015b60405180910390f35b6000546101989073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161016f565b6101c5610361565b60405161016f9190610df9565b6101e56101e0366004610de0565b610395565b005b6101e56101f5366004610e3d565b6103e0565b6102026104be565b60405161016f929190610f14565b6101e561021e366004610e3d565b610643565b610236610231366004610e3d565b610675565b604051901515815260200161016f565b6101e56102543660046110de565b610700565b61019861074d565b6101e561026f366004610e3d565b610792565b61027d60025481565b60405190815260200161016f565b6101c5610299366004611125565b610361565b6102b16102ac366004610de0565b6108bb565b60405161016f9190611162565b6101e56102cc366004610e3d565b61095d565b6102366102df366004610de0565b610a38565b6101e56102f236600461118b565b610a5a565b6101e5610305366004610e3d565b610aa0565b604080518082019091526000808252602082015260008061032a846108bb565b80602001905181019061033d919061121f565b6040805180820190915291825267ffffffffffffffff166020820152949350505050565b60606040517f17d5b8e800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61039e33610675565b6103d4576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103dd81610b3d565b50565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610450576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b6040805160028082526060828101909352829190816020015b60608152602001906001900390816104d757505060408051600280825260608201835292945091906020830190803683370190505090506040518060400160405280600481526020017f7365656400000000000000000000000000000000000000000000000000000000815250826000815181106105575761055761124f565b6020026020010181905250600d816000815181106105775761057761124f565b6020026020010190602181111561059057610590610ee5565b908160218111156105a3576105a3610ee5565b815250506040518060400160405280600781526020017f74696d656f757400000000000000000000000000000000000000000000000000815250826001815181106105f0576105f061124f565b6020026020010181905250600b816001815181106106105761061061124f565b6020026020010190602181111561062957610629610ee5565b9081602181111561063c5761063c610ee5565b9052509091565b6040517f17d5b8e800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c909602052604081205460ff16806106fa57506106cb61074d565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b92915050565b61070933610675565b61073f576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107498282610bab565b5050565b600061078d7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610802576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556002546040517ff3034770000000000000000000000000000000000000000000000000000000008152306004820152602481019190915263f3034770906044015b600060405180830381600087803b1580156108a057600080fd5b505af11580156108b4573d6000803e3d6000fd5b5050505050565b60008181526001602052604090208054606091906108d89061127e565b80601f01602080910402602001604051908101604052809291908181526020018280546109049061127e565b80156109515780601f1061092657610100808354040283529160200191610951565b820191906000526020600020905b81548152906001019060200180831161093457829003601f168201915b50505050509050919050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146109cd576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b60008181526001602052604081208054610a519061127e565b15159392505050565b6107498282600001518360200151604051602001610a8c92919091825267ffffffffffffffff16602082015260400190565b604051602081830303815290604052610700565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610b10576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103dd81610c59565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6000818152600160205260408120610b5491610d0d565b6000546040517f0de3b7b50000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff90911690630de3b7b590602401610886565b60008281526001602090815260409091208251610bca92840190610d47565b506000546040517fcfd3c57f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169063cfd3c57f90610c2390859085906004016112d1565b600060405180830381600087803b158015610c3d57600080fd5b505af1158015610c51573d6000803e3d6000fd5b505050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046080546040516103dd928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b508054610d199061127e565b6000825580601f10610d29575050565b601f0160209004906000526020600020908101906103dd9190610dcb565b828054610d539061127e565b90600052602060002090601f016020900481019282610d755760008555610dbb565b82601f10610d8e57805160ff1916838001178555610dbb565b82800160010185558215610dbb579182015b82811115610dbb578251825591602001919060010190610da0565b50610dc7929150610dcb565b5090565b5b80821115610dc75760008155600101610dcc565b600060208284031215610df257600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b81811015610e3157835183529284019291840191600101610e15565b50909695505050505050565b600060208284031215610e4f57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610e7357600080fd5b9392505050565b6000815180845260005b81811015610ea057602081850181015186830182015201610e84565b81811115610eb2576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6000604082016040835280855180835260608501915060608160051b8601019250602080880160005b83811015610f89577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa0888703018552610f77868351610e7a565b95509382019390820190600101610f3d565b50508584038187015286518085528782019482019350915060005b82811015610ff757845160228110610fe5577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b84529381019392810192600101610fa4565b5091979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f83011261104457600080fd5b813567ffffffffffffffff8082111561105f5761105f611004565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156110a5576110a5611004565b816040528381528660208588010111156110be57600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080604083850312156110f157600080fd5b82359150602083013567ffffffffffffffff81111561110f57600080fd5b61111b85828601611033565b9150509250929050565b60006020828403121561113757600080fd5b813567ffffffffffffffff81111561114e57600080fd5b61115a84828501611033565b949350505050565b602081526000610e736020830184610e7a565b67ffffffffffffffff811681146103dd57600080fd5b600080828403606081121561119f57600080fd5b8335925060407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0820112156111d357600080fd5b506040516040810181811067ffffffffffffffff821117156111f7576111f7611004565b60409081526020850135825284013561120f81611175565b6020820152919491935090915050565b6000806040838503121561123257600080fd5b82519150602083015161124481611175565b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600181811c9082168061129257607f821691505b6020821081036112cb577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b82815260406020820152600061115a6040830184610e7a56fea2646970667358221220b40884e212e88f67074e3be869be1da4ff5eaeaef71c4a387eb9fc8e5d910f5564736f6c634300080d0033";

type SpaceTimeMarkerComponentConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SpaceTimeMarkerComponentConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SpaceTimeMarkerComponent__factory extends ContractFactory {
  constructor(...args: SpaceTimeMarkerComponentConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    world: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SpaceTimeMarkerComponent> {
    return super.deploy(
      world,
      overrides || {}
    ) as Promise<SpaceTimeMarkerComponent>;
  }
  override getDeployTransaction(
    world: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(world, overrides || {});
  }
  override attach(address: string): SpaceTimeMarkerComponent {
    return super.attach(address) as SpaceTimeMarkerComponent;
  }
  override connect(signer: Signer): SpaceTimeMarkerComponent__factory {
    return super.connect(signer) as SpaceTimeMarkerComponent__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SpaceTimeMarkerComponentInterface {
    return new utils.Interface(_abi) as SpaceTimeMarkerComponentInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SpaceTimeMarkerComponent {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SpaceTimeMarkerComponent;
  }
}
