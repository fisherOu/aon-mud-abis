/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  AttackTimerComponent,
  AttackTimerComponentInterface,
} from "../AttackTimerComponent";

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
            internalType: "uint64",
            name: "cooldownTimeout",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "chargingTimeout",
            type: "uint64",
          },
        ],
        internalType: "struct AttackTimer",
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
            internalType: "uint64",
            name: "cooldownTimeout",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "chargingTimeout",
            type: "uint64",
          },
        ],
        internalType: "struct AttackTimer",
        name: "attackTimer",
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
  "0x60806040523480156200001157600080fd5b506040516200157e3803806200157e833981016040819052620000349162000200565b807ff40b0a0f45abda3aa3c692e8980f39cdff332ccb76fb73bb91536eebf77739c262000061336200008a565b60028190556001600160a01b0382161562000081576200008182620000fe565b50505062000232565b6000620000a1620001b660201b62000b221760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b62000108620001da565b6001600160a01b0316336001600160a01b0316146200013a57604051632f7a8ee160e01b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117909155600254604051630f30347760e41b8152306004820152602481019190915263f303477090604401600060405180830381600087803b1580156200019a57600080fd5b505af1158015620001af573d6000803e3d6000fd5b5050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6000620001f1620001b660201b62000b221760201c565b546001600160a01b0316919050565b6000602082840312156200021357600080fd5b81516001600160a01b03811681146200022b57600080fd5b9392505050565b61133c80620002426000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c80638b282947116100b2578063b361be4611610081578063bf4fe57e11610066578063bf4fe57e146102d4578063cccf7a8e146102e7578063f2fde38b146102fa57600080fd5b8063b361be46146102a1578063b8bc073d146102b457600080fd5b80638b2829471461025c5780638da5cb5b1461026f5780639d2c76b414610277578063af640d0f1461028a57600080fd5b80634e6641a9116101095780636b122fe0116100ee5780636b122fe01461021057806375c0669c14610226578063861eb9051461023957600080fd5b80634e6641a9146101ea5780634fef6a38146101fd57600080fd5b80630ff4c9161461013b57806330b67baa1461017b57806331b933b9146101c05780634cc82215146101d5575b600080fd5b61014e610149366004610de9565b61030d565b60408051825167ffffffffffffffff90811682526020938401511692810192909252015b60405180910390f35b60005461019b9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610172565b6101c8610367565b6040516101729190610e02565b6101e86101e3366004610de9565b61039b565b005b6101e86101f8366004610e8b565b6103e6565b6101e861020b366004610f28565b610433565b610218610511565b604051610172929190610fff565b6101e8610234366004610f28565b610696565b61024c610247366004610f28565b6106c8565b6040519015158152602001610172565b6101e861026a36600461119a565b610753565b61019b61079c565b6101e8610285366004610f28565b6107e1565b61029360025481565b604051908152602001610172565b6101c86102af3660046111e1565b610367565b6102c76102c2366004610de9565b61090a565b604051610172919061121e565b6101e86102e2366004610f28565b6109ac565b61024c6102f5366004610de9565b610a87565b6101e8610308366004610f28565b610aa9565b604080518082019091526000808252602082015260008061032d8461090a565b8060200190518101906103409190611231565b6040805180820190915267ffffffffffffffff928316815291166020820152949350505050565b60606040517f17d5b8e800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103a4336106c8565b6103da576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103e381610b46565b50565b61042f828260000151836020015160405160200161041b92919067ffffffffffffffff92831681529116602082015260400190565b604051602081830303815290604052610753565b5050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146104a3576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b6040805160028082526060828101909352829190816020015b606081526020019060019003908161052a57505060408051600280825260608201835292945091906020830190803683370190505090506040518060400160405280600f81526020017f636f6f6c646f776e54696d656f75740000000000000000000000000000000000815250826000815181106105aa576105aa61126b565b6020026020010181905250600b816000815181106105ca576105ca61126b565b602002602001019060218111156105e3576105e3610fd0565b908160218111156105f6576105f6610fd0565b815250506040518060400160405280600f81526020017f6368617267696e6754696d656f75740000000000000000000000000000000000815250826001815181106106435761064361126b565b6020026020010181905250600b816001815181106106635761066361126b565b6020026020010190602181111561067c5761067c610fd0565b9081602181111561068f5761068f610fd0565b9052509091565b6040517f17d5b8e800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c909602052604081205460ff168061074d575061071e61079c565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b92915050565b61075c336106c8565b610792576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61042f8282610bb4565b60006107dc7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610851576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556002546040517ff3034770000000000000000000000000000000000000000000000000000000008152306004820152602481019190915263f3034770906044015b600060405180830381600087803b1580156108ef57600080fd5b505af1158015610903573d6000803e3d6000fd5b5050505050565b60008181526001602052604090208054606091906109279061129a565b80601f01602080910402602001604051908101604052809291908181526020018280546109539061129a565b80156109a05780601f10610975576101008083540402835291602001916109a0565b820191906000526020600020905b81548152906001019060200180831161098357829003601f168201915b50505050509050919050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610a1c576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b60008181526001602052604081208054610aa09061129a565b15159392505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610b19576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103e381610c62565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6000818152600160205260408120610b5d91610d16565b6000546040517f0de3b7b50000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff90911690630de3b7b5906024016108d5565b60008281526001602090815260409091208251610bd392840190610d50565b506000546040517fcfd3c57f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169063cfd3c57f90610c2c90859085906004016112ed565b600060405180830381600087803b158015610c4657600080fd5b505af1158015610c5a573d6000803e3d6000fd5b505050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046080546040516103e3928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b508054610d229061129a565b6000825580601f10610d32575050565b601f0160209004906000526020600020908101906103e39190610dd4565b828054610d5c9061129a565b90600052602060002090601f016020900481019282610d7e5760008555610dc4565b82601f10610d9757805160ff1916838001178555610dc4565b82800160010185558215610dc4579182015b82811115610dc4578251825591602001919060010190610da9565b50610dd0929150610dd4565b5090565b5b80821115610dd05760008155600101610dd5565b600060208284031215610dfb57600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b81811015610e3a57835183529284019291840191600101610e1e565b50909695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b67ffffffffffffffff811681146103e357600080fd5b6000808284036060811215610e9f57600080fd5b8335925060407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe082011215610ed357600080fd5b506040516040810181811067ffffffffffffffff82111715610ef757610ef7610e46565b6040526020840135610f0881610e75565b81526040840135610f1881610e75565b6020820152919491935090915050565b600060208284031215610f3a57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610f5e57600080fd5b9392505050565b6000815180845260005b81811015610f8b57602081850181015186830182015201610f6f565b81811115610f9d576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6000604082016040835280855180835260608501915060608160051b8601019250602080880160005b83811015611074577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa0888703018552611062868351610f65565b95509382019390820190600101611028565b50508584038187015286518085528782019482019350915060005b828110156110e2578451602281106110d0577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8452938101939281019260010161108f565b5091979650505050505050565b600082601f83011261110057600080fd5b813567ffffffffffffffff8082111561111b5761111b610e46565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561116157611161610e46565b8160405283815286602085880101111561117a57600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080604083850312156111ad57600080fd5b82359150602083013567ffffffffffffffff8111156111cb57600080fd5b6111d7858286016110ef565b9150509250929050565b6000602082840312156111f357600080fd5b813567ffffffffffffffff81111561120a57600080fd5b611216848285016110ef565b949350505050565b602081526000610f5e6020830184610f65565b6000806040838503121561124457600080fd5b825161124f81610e75565b602084015190925061126081610e75565b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600181811c908216806112ae57607f821691505b6020821081036112e7577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b8281526040602082015260006112166040830184610f6556fea264697066735822122011b4730b6261a882874485d321ab00bc4ba058c05236c256fc5da079cfba760564736f6c634300080d0033";

type AttackTimerComponentConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AttackTimerComponentConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AttackTimerComponent__factory extends ContractFactory {
  constructor(...args: AttackTimerComponentConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    world: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AttackTimerComponent> {
    return super.deploy(
      world,
      overrides || {}
    ) as Promise<AttackTimerComponent>;
  }
  override getDeployTransaction(
    world: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(world, overrides || {});
  }
  override attach(address: string): AttackTimerComponent {
    return super.attach(address) as AttackTimerComponent;
  }
  override connect(signer: Signer): AttackTimerComponent__factory {
    return super.connect(signer) as AttackTimerComponent__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AttackTimerComponentInterface {
    return new utils.Interface(_abi) as AttackTimerComponentInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AttackTimerComponent {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AttackTimerComponent;
  }
}
