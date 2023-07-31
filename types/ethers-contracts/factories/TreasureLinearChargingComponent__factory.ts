/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  TreasureLinearChargingComponent,
  TreasureLinearChargingComponentInterface,
} from "../TreasureLinearChargingComponent";

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
            name: "coordHash",
            type: "uint256",
          },
          {
            internalType: "uint32",
            name: "direction",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "distance",
            type: "uint64",
          },
        ],
        internalType: "struct TreasureLinearCharging",
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
            internalType: "uint256",
            name: "coordHash",
            type: "uint256",
          },
          {
            internalType: "uint32",
            name: "direction",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "distance",
            type: "uint64",
          },
        ],
        internalType: "struct TreasureLinearCharging",
        name: "treasureLinearCharging",
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
  "0x60806040523480156200001157600080fd5b506040516200166b3803806200166b833981016040819052620000349162000200565b807fdc70892ae22810336b1b3e3970e52ce30e6bd067541740d764e72825b722b06c62000061336200008a565b60028190556001600160a01b0382161562000081576200008182620000fe565b50505062000232565b6000620000a1620001b660201b62000bea1760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b62000108620001da565b6001600160a01b0316336001600160a01b0316146200013a57604051632f7a8ee160e01b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117909155600254604051630f30347760e41b8152306004820152602481019190915263f303477090604401600060405180830381600087803b1580156200019a57600080fd5b505af1158015620001af573d6000803e3d6000fd5b5050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6000620001f1620001b660201b62000bea1760201c565b546001600160a01b0316919050565b6000602082840312156200021357600080fd5b81516001600160a01b03811681146200022b57600080fd5b9392505050565b61142980620002426000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c80638b282947116100b2578063b361be4611610081578063bf4fe57e11610066578063bf4fe57e146102de578063cccf7a8e146102f1578063f2fde38b1461030457600080fd5b8063b361be46146102ab578063b8bc073d146102be57600080fd5b80638b282947146102665780638da5cb5b146102795780639d2c76b414610281578063af640d0f1461029457600080fd5b80634d7b3448116101095780636b122fe0116100ee5780636b122fe01461021a57806375c0669c14610230578063861eb9051461024357600080fd5b80634d7b3448146101f45780634fef6a381461020757600080fd5b80630ff4c9161461013b57806330b67baa1461018557806331b933b9146101ca5780634cc82215146101df575b600080fd5b61014e610149366004610eb1565b610317565b604080518251815260208084015163ffffffff16908201529181015167ffffffffffffffff16908201526060015b60405180910390f35b6000546101a59073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161017c565b6101d2610383565b60405161017c9190610eca565b6101f26101ed366004610eb1565b6103b7565b005b6101f2610202366004610f65565b610402565b6101f261021536600461100c565b610460565b61022261053e565b60405161017c9291906110e3565b6101f261023e36600461100c565b61075e565b61025661025136600461100c565b610790565b604051901515815260200161017c565b6101f261027436600461127e565b61081b565b6101a5610864565b6101f261028f36600461100c565b6108a9565b61029d60025481565b60405190815260200161017c565b6101d26102b93660046112c5565b610383565b6102d16102cc366004610eb1565b6109d2565b60405161017c9190611302565b6101f26102ec36600461100c565b610a74565b6102566102ff366004610eb1565b610b4f565b6101f261031236600461100c565b610b71565b6040805160608101825260008082526020820181905291810182905290808061033f856109d2565b8060200190518101906103529190611315565b6040805160608101825293845263ffffffff909216602084015267ffffffffffffffff169082015295945050505050565b60606040517f17d5b8e800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103c033610790565b6103f6576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103ff81610c0e565b50565b61045c828260000151836020015184604001516040516020016104489392919092835263ffffffff91909116602083015267ffffffffffffffff16604082015260600190565b60405160208183030381529060405261081b565b5050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146104d0576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b60408051600380825260808201909252606091829190816020015b606081526020019060019003908161055957505060408051600380825260808201909252919350602082016060803683370190505090506040518060400160405280600981526020017f636f6f7264486173680000000000000000000000000000000000000000000000815250826000815181106105d9576105d9611358565b6020026020010181905250600d816000815181106105f9576105f9611358565b60200260200101906021811115610612576106126110b4565b90816021811115610625576106256110b4565b815250506040518060400160405280600981526020017f646972656374696f6e00000000000000000000000000000000000000000000008152508260018151811061067257610672611358565b6020026020010181905250600a8160018151811061069257610692611358565b602002602001019060218111156106ab576106ab6110b4565b908160218111156106be576106be6110b4565b815250506040518060400160405280600881526020017f64697374616e63650000000000000000000000000000000000000000000000008152508260028151811061070b5761070b611358565b6020026020010181905250600b8160028151811061072b5761072b611358565b60200260200101906021811115610744576107446110b4565b90816021811115610757576107576110b4565b9052509091565b6040517f17d5b8e800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c909602052604081205460ff168061081557506107e6610864565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b92915050565b61082433610790565b61085a576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61045c8282610c7c565b60006108a47f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610919576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556002546040517ff3034770000000000000000000000000000000000000000000000000000000008152306004820152602481019190915263f3034770906044015b600060405180830381600087803b1580156109b757600080fd5b505af11580156109cb573d6000803e3d6000fd5b5050505050565b60008181526001602052604090208054606091906109ef90611387565b80601f0160208091040260200160405190810160405280929190818152602001828054610a1b90611387565b8015610a685780601f10610a3d57610100808354040283529160200191610a68565b820191906000526020600020905b815481529060010190602001808311610a4b57829003601f168201915b50505050509050919050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610ae4576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b60008181526001602052604081208054610b6890611387565b15159392505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610be1576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103ff81610d2a565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6000818152600160205260408120610c2591610dde565b6000546040517f0de3b7b50000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff90911690630de3b7b59060240161099d565b60008281526001602090815260409091208251610c9b92840190610e18565b506000546040517fcfd3c57f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169063cfd3c57f90610cf490859085906004016113da565b600060405180830381600087803b158015610d0e57600080fd5b505af1158015610d22573d6000803e3d6000fd5b505050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046080546040516103ff928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b508054610dea90611387565b6000825580601f10610dfa575050565b601f0160209004906000526020600020908101906103ff9190610e9c565b828054610e2490611387565b90600052602060002090601f016020900481019282610e465760008555610e8c565b82601f10610e5f57805160ff1916838001178555610e8c565b82800160010185558215610e8c579182015b82811115610e8c578251825591602001919060010190610e71565b50610e98929150610e9c565b5090565b5b80821115610e985760008155600101610e9d565b600060208284031215610ec357600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b81811015610f0257835183529284019291840191600101610ee6565b50909695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b63ffffffff811681146103ff57600080fd5b67ffffffffffffffff811681146103ff57600080fd5b6000808284036080811215610f7957600080fd5b8335925060607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe082011215610fad57600080fd5b506040516060810181811067ffffffffffffffff82111715610fd157610fd1610f0e565b604090815260208501358252840135610fe981610f3d565b60208201526060840135610ffc81610f4f565b6040820152919491935090915050565b60006020828403121561101e57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461104257600080fd5b9392505050565b6000815180845260005b8181101561106f57602081850181015186830182015201611053565b81811115611081576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6000604082016040835280855180835260608501915060608160051b8601019250602080880160005b83811015611158577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa0888703018552611146868351611049565b9550938201939082019060010161110c565b50508584038187015286518085528782019482019350915060005b828110156111c6578451602281106111b4577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b84529381019392810192600101611173565b5091979650505050505050565b600082601f8301126111e457600080fd5b813567ffffffffffffffff808211156111ff576111ff610f0e565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561124557611245610f0e565b8160405283815286602085880101111561125e57600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806040838503121561129157600080fd5b82359150602083013567ffffffffffffffff8111156112af57600080fd5b6112bb858286016111d3565b9150509250929050565b6000602082840312156112d757600080fd5b813567ffffffffffffffff8111156112ee57600080fd5b6112fa848285016111d3565b949350505050565b6020815260006110426020830184611049565b60008060006060848603121561132a57600080fd5b83519250602084015161133c81610f3d565b604085015190925061134d81610f4f565b809150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600181811c9082168061139b57607f821691505b6020821081036113d4577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b8281526040602082015260006112fa604083018461104956fea264697066735822122080bba3ef0e41fbe325b4e8aaf0458b09e4db003641742d2144b73974c2f9e7aa64736f6c634300080d0033";

type TreasureLinearChargingComponentConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TreasureLinearChargingComponentConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TreasureLinearChargingComponent__factory extends ContractFactory {
  constructor(...args: TreasureLinearChargingComponentConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    world: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TreasureLinearChargingComponent> {
    return super.deploy(
      world,
      overrides || {}
    ) as Promise<TreasureLinearChargingComponent>;
  }
  override getDeployTransaction(
    world: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(world, overrides || {});
  }
  override attach(address: string): TreasureLinearChargingComponent {
    return super.attach(address) as TreasureLinearChargingComponent;
  }
  override connect(signer: Signer): TreasureLinearChargingComponent__factory {
    return super.connect(signer) as TreasureLinearChargingComponent__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TreasureLinearChargingComponentInterface {
    return new utils.Interface(
      _abi
    ) as TreasureLinearChargingComponentInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TreasureLinearChargingComponent {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TreasureLinearChargingComponent;
  }
}
