/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  TreasureComponent,
  TreasureComponentInterface,
} from "../TreasureComponent";

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
            name: "energy",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "baseType",
            type: "string",
          },
        ],
        internalType: "struct Treasure",
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
            name: "energy",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "baseType",
            type: "string",
          },
        ],
        internalType: "struct Treasure",
        name: "treasure",
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
  "0x60806040523480156200001157600080fd5b506040516200160738038062001607833981016040819052620000349162000200565b807f60c75de7a5b0398849a1e84398f8f1f8d3aedeb9bd52b420fb7a970fa1f7c00662000061336200008a565b60028190556001600160a01b0382161562000081576200008182620000fe565b50505062000232565b6000620000a1620001b660201b62000ae91760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b62000108620001da565b6001600160a01b0316336001600160a01b0316146200013a57604051632f7a8ee160e01b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117909155600254604051630f30347760e41b8152306004820152602481019190915263f303477090604401600060405180830381600087803b1580156200019a57600080fd5b505af1158015620001af573d6000803e3d6000fd5b5050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6000620001f1620001b660201b62000ae91760201c565b546001600160a01b0316919050565b6000602082840312156200021357600080fd5b81516001600160a01b03811681146200022b57600080fd5b9392505050565b6113c580620002426000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c80638b282947116100b2578063b361be4611610081578063bf4fe57e11610066578063bf4fe57e146102bd578063cccf7a8e146102d0578063f2fde38b146102e357600080fd5b8063b361be461461028a578063b8bc073d1461029d57600080fd5b80638b282947146102455780638da5cb5b146102585780639d2c76b414610260578063af640d0f1461027357600080fd5b80634cc82215116101095780636b122fe0116100ee5780636b122fe0146101f957806375c0669c1461020f578063861eb9051461022257600080fd5b80634cc82215146101d35780634fef6a38146101e657600080fd5b80630ff4c9161461013b57806330b67baa1461016457806331b933b9146101a957806340853177146101be575b600080fd5b61014e610149366004610db0565b6102f6565b60405161015b9190610e43565b60405180910390f35b6000546101849073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161015b565b6101b1610344565b60405161015b9190610e70565b6101d16101cc366004610fb6565b610378565b005b6101d16101e1366004610db0565b6103af565b6101d16101f4366004611066565b6103fa565b6102016104d8565b60405161015b9291906110d2565b6101d161021d366004611066565b61065d565b610235610230366004611066565b61068f565b604051901515815260200161015b565b6101d16102533660046111e2565b61071a565b610184610763565b6101d161026e366004611066565b6107a8565b61027c60025481565b60405190815260200161015b565b6101b1610298366004611229565b610344565b6102b06102ab366004610db0565b6108d1565b60405161015b919061125e565b6101d16102cb366004611066565b610973565b6102356102de366004610db0565b610a4e565b6101d16102f1366004611066565b610a70565b604080518082019091526000815260606020820152600080610317846108d1565b80602001905181019061032a9190611271565b604080518082019091529182526020820152949350505050565b60606040517f17d5b8e800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103ab82826000015183602001516040516020016103979291906112f4565b60405160208183030381529060405261071a565b5050565b6103b83361068f565b6103ee576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103f781610b0d565b50565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff16331461046a576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b6040805160028082526060828101909352829190816020015b60608152602001906001900390816104f157505060408051600280825260608201835292945091906020830190803683370190505090506040518060400160405280600681526020017f656e657267790000000000000000000000000000000000000000000000000000815250826000815181106105715761057161130d565b6020026020010181905250600d816000815181106105915761059161130d565b602002602001019060218111156105aa576105aa6110a3565b908160218111156105bd576105bd6110a3565b815250506040518060400160405280600881526020017f62617365547970650000000000000000000000000000000000000000000000008152508260018151811061060a5761060a61130d565b6020026020010181905250600f8160018151811061062a5761062a61130d565b60200260200101906021811115610643576106436110a3565b90816021811115610656576106566110a3565b9052509091565b6040517f17d5b8e800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c909602052604081205460ff168061071457506106e5610763565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b92915050565b6107233361068f565b610759576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103ab8282610b7b565b60006107a37f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610818576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556002546040517ff3034770000000000000000000000000000000000000000000000000000000008152306004820152602481019190915263f3034770906044015b600060405180830381600087803b1580156108b657600080fd5b505af11580156108ca573d6000803e3d6000fd5b5050505050565b60008181526001602052604090208054606091906108ee9061133c565b80601f016020809104026020016040519081016040528092919081815260200182805461091a9061133c565b80156109675780601f1061093c57610100808354040283529160200191610967565b820191906000526020600020905b81548152906001019060200180831161094a57829003601f168201915b50505050509050919050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146109e3576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b60008181526001602052604081208054610a679061133c565b15159392505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610ae0576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103f781610c29565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6000818152600160205260408120610b2491610cdd565b6000546040517f0de3b7b50000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff90911690630de3b7b59060240161089c565b60008281526001602090815260409091208251610b9a92840190610d17565b506000546040517fcfd3c57f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169063cfd3c57f90610bf390859085906004016112f4565b600060405180830381600087803b158015610c0d57600080fd5b505af1158015610c21573d6000803e3d6000fd5b505050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046080546040516103f7928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b508054610ce99061133c565b6000825580601f10610cf9575050565b601f0160209004906000526020600020908101906103f79190610d9b565b828054610d239061133c565b90600052602060002090601f016020900481019282610d455760008555610d8b565b82601f10610d5e57805160ff1916838001178555610d8b565b82800160010185558215610d8b579182015b82811115610d8b578251825591602001919060010190610d70565b50610d97929150610d9b565b5090565b5b80821115610d975760008155600101610d9c565b600060208284031215610dc257600080fd5b5035919050565b60005b83811015610de4578181015183820152602001610dcc565b83811115610df3576000848401525b50505050565b60008151808452610e11816020860160208601610dc9565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081528151602082015260006020830151604080840152610e686060840182610df9565b949350505050565b6020808252825182820181905260009190848201906040850190845b81811015610ea857835183529284019291840191600101610e8c565b50909695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610f2a57610f2a610eb4565b604052919050565b600067ffffffffffffffff821115610f4c57610f4c610eb4565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b6000610f8b610f8684610f32565b610ee3565b9050828152838383011115610f9f57600080fd5b828260208301376000602084830101529392505050565b60008060408385031215610fc957600080fd5b82359150602083013567ffffffffffffffff80821115610fe857600080fd5b9084019060408287031215610ffc57600080fd5b60405160408101818110838211171561101757611017610eb4565b6040528235815260208301358281111561103057600080fd5b80840193505086601f84011261104557600080fd5b61105487843560208601610f78565b60208201528093505050509250929050565b60006020828403121561107857600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461109c57600080fd5b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6000604082016040835280855180835260608501915060608160051b8601019250602080880160005b83811015611147577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa0888703018552611135868351610df9565b955093820193908201906001016110fb565b50508584038187015286518085528782019482019350915060005b828110156111b5578451602281106111a3577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b84529381019392810192600101611162565b5091979650505050505050565b600082601f8301126111d357600080fd5b61109c83833560208501610f78565b600080604083850312156111f557600080fd5b82359150602083013567ffffffffffffffff81111561121357600080fd5b61121f858286016111c2565b9150509250929050565b60006020828403121561123b57600080fd5b813567ffffffffffffffff81111561125257600080fd5b610e68848285016111c2565b60208152600061109c6020830184610df9565b6000806040838503121561128457600080fd5b82519150602083015167ffffffffffffffff8111156112a257600080fd5b8301601f810185136112b357600080fd5b80516112c1610f8682610f32565b8181528660208385010111156112d657600080fd5b6112e7826020830160208601610dc9565b8093505050509250929050565b828152604060208201526000610e686040830184610df9565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600181811c9082168061135057607f821691505b602082108103611389577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b5091905056fea2646970667358221220f8628cd38027dba71bdfe27cd4c93134b9ff3feb18e2a793f9143ec7c4c5e79e64736f6c634300080d0033";

type TreasureComponentConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TreasureComponentConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TreasureComponent__factory extends ContractFactory {
  constructor(...args: TreasureComponentConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    world: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TreasureComponent> {
    return super.deploy(world, overrides || {}) as Promise<TreasureComponent>;
  }
  override getDeployTransaction(
    world: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(world, overrides || {});
  }
  override attach(address: string): TreasureComponent {
    return super.attach(address) as TreasureComponent;
  }
  override connect(signer: Signer): TreasureComponent__factory {
    return super.connect(signer) as TreasureComponent__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TreasureComponentInterface {
    return new utils.Interface(_abi) as TreasureComponentInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TreasureComponent {
    return new Contract(address, _abi, signerOrProvider) as TreasureComponent;
  }
}
