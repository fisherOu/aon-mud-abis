/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  MoveConfigComponent,
  MoveConfigComponentInterface,
} from "../MoveConfigComponent";

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
            internalType: "uint64",
            name: "initPoints",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "increaseCooldown",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "maxPoints",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "maxDistance",
            type: "uint64",
          },
          {
            internalType: "uint256",
            name: "guildCost",
            type: "uint256",
          },
        ],
        internalType: "struct MoveConfig",
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
            internalType: "uint64",
            name: "initPoints",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "increaseCooldown",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "maxPoints",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "maxDistance",
            type: "uint64",
          },
          {
            internalType: "uint256",
            name: "guildCost",
            type: "uint256",
          },
        ],
        internalType: "struct MoveConfig",
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
  "0x60806040523480156200001157600080fd5b50604051620017f9380380620017f9833981016040819052620000349162000200565b807fdc602e66a6d8c84d0c8d6c4292d80341393a1e04ff02909a12718a4216d3a9f762000061336200008a565b60028190556001600160a01b0382161562000081576200008182620000fe565b50505062000232565b6000620000a1620001b660201b62000d781760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b62000108620001da565b6001600160a01b0316336001600160a01b0316146200013a57604051632f7a8ee160e01b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117909155600254604051630f30347760e41b8152306004820152602481019190915263f303477090604401600060405180830381600087803b1580156200019a57600080fd5b505af1158015620001af573d6000803e3d6000fd5b5050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6000620001f1620001b660201b62000d781760201c565b546001600160a01b0316919050565b6000602082840312156200021357600080fd5b81516001600160a01b03811681146200022b57600080fd5b9392505050565b6115b780620002426000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c80638b282947116100b2578063b361be4611610081578063bf4fe57e11610066578063bf4fe57e146102f9578063cccf7a8e1461030c578063f2fde38b1461031f57600080fd5b8063b361be46146102c6578063b8bc073d146102d957600080fd5b80638b282947146102815780638da5cb5b146102945780639d2c76b41461029c578063af640d0f146102af57600080fd5b80634cc82215116101095780636b122fe0116100ee5780636b122fe01461023557806375c0669c1461024b578063861eb9051461025e57600080fd5b80634cc822151461020f5780634fef6a381461022257600080fd5b8063209652551461013b57806328c83610146101a057806330b67baa146101b557806331b933b9146101fa575b600080fd5b610143610332565b6040516101979190600060a08201905067ffffffffffffffff808451168352806020850151166020840152806040850151166040840152806060850151166060840152506080830151608083015292915050565b60405180910390f35b6101b36101ae366004611084565b6103c3565b005b6000546101d59073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610197565b61020261043c565b6040516101979190611115565b6101b361021d366004611159565b610470565b6101b3610230366004611172565b6104b8565b61023d610596565b604051610197929190611249565b6101b3610259366004611172565b6108e8565b61027161026c366004611172565b61091a565b6040519015158152602001610197565b6101b361028f3660046113e4565b6109a5565b6101d56109f2565b6101b36102aa366004611172565b610a37565b6102b860025481565b604051908152602001610197565b6102026102d436600461142b565b61043c565b6102ec6102e7366004611159565b610b60565b6040516101979190611468565b6101b3610307366004611172565b610c02565b61027161031a366004611159565b610cdd565b6101b361032d366004611172565b610cff565b6040805160a0810182526000808252602082018190529181018290526060810182905260808101829052908080808061036c61060d610b60565b80602001905181019061037f919061147b565b6040805160a08101825267ffffffffffffffff9687168152948616602086015292851692840192909252909216606082015260808101919091529695505050505050565b61043961060d8260000151836020015184604001518560600151866080015160405160200161042595949392919067ffffffffffffffff9586168152938516602085015291841660408401529092166060820152608081019190915260a00190565b6040516020818303038152906040526109a5565b50565b60606040517f17d5b8e800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104793361091a565b6104af576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61043981610d9c565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610528576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b60408051600580825260c08201909252606091829190816020015b60608152602001906001900390816105b157505060408051600580825260c082019092529193506020820160a0803683370190505090506040518060400160405280600a81526020017f696e6974506f696e74730000000000000000000000000000000000000000000081525082600081518110610631576106316114e6565b6020026020010181905250600b81600081518110610651576106516114e6565b6020026020010190602181111561066a5761066a61121a565b9081602181111561067d5761067d61121a565b815250506040518060400160405280601081526020017f696e637265617365436f6f6c646f776e00000000000000000000000000000000815250826001815181106106ca576106ca6114e6565b6020026020010181905250600b816001815181106106ea576106ea6114e6565b602002602001019060218111156107035761070361121a565b908160218111156107165761071661121a565b815250506040518060400160405280600981526020017f6d6178506f696e7473000000000000000000000000000000000000000000000081525082600281518110610763576107636114e6565b6020026020010181905250600b81600281518110610783576107836114e6565b6020026020010190602181111561079c5761079c61121a565b908160218111156107af576107af61121a565b815250506040518060400160405280600b81526020017f6d617844697374616e6365000000000000000000000000000000000000000000815250826003815181106107fc576107fc6114e6565b6020026020010181905250600b8160038151811061081c5761081c6114e6565b602002602001019060218111156108355761083561121a565b908160218111156108485761084861121a565b815250506040518060400160405280600981526020017f6775696c64436f7374000000000000000000000000000000000000000000000081525082600481518110610895576108956114e6565b6020026020010181905250600d816004815181106108b5576108b56114e6565b602002602001019060218111156108ce576108ce61121a565b908160218111156108e1576108e161121a565b9052509091565b6040517f17d5b8e800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c909602052604081205460ff168061099f57506109706109f2565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b92915050565b6109ae3361091a565b6109e4576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109ee8282610e0a565b5050565b6000610a327f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610aa7576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556002546040517ff3034770000000000000000000000000000000000000000000000000000000008152306004820152602481019190915263f3034770906044015b600060405180830381600087803b158015610b4557600080fd5b505af1158015610b59573d6000803e3d6000fd5b5050505050565b6000818152600160205260409020805460609190610b7d90611515565b80601f0160208091040260200160405190810160405280929190818152602001828054610ba990611515565b8015610bf65780601f10610bcb57610100808354040283529160200191610bf6565b820191906000526020600020905b815481529060010190602001808311610bd957829003601f168201915b50505050509050919050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610c72576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b60008181526001602052604081208054610cf690611515565b15159392505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610d6f576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61043981610eb8565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6000818152600160205260408120610db391610f6c565b6000546040517f0de3b7b50000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff90911690630de3b7b590602401610b2b565b60008281526001602090815260409091208251610e2992840190610fa6565b506000546040517fcfd3c57f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169063cfd3c57f90610e829085908590600401611568565b600060405180830381600087803b158015610e9c57600080fd5b505af1158015610eb0573d6000803e3d6000fd5b505050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051610439928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b508054610f7890611515565b6000825580601f10610f88575050565b601f016020900490600052602060002090810190610439919061102a565b828054610fb290611515565b90600052602060002090601f016020900481019282610fd4576000855561101a565b82601f10610fed57805160ff191683800117855561101a565b8280016001018555821561101a579182015b8281111561101a578251825591602001919060010190610fff565b5061102692915061102a565b5090565b5b80821115611026576000815560010161102b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b67ffffffffffffffff8116811461043957600080fd5b600060a0828403121561109657600080fd5b60405160a0810181811067ffffffffffffffff821117156110b9576110b961103f565b60405282356110c78161106e565b815260208301356110d78161106e565b602082015260408301356110ea8161106e565b604082015260608301356110fd8161106e565b60608201526080928301359281019290925250919050565b6020808252825182820181905260009190848201906040850190845b8181101561114d57835183529284019291840191600101611131565b50909695505050505050565b60006020828403121561116b57600080fd5b5035919050565b60006020828403121561118457600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146111a857600080fd5b9392505050565b6000815180845260005b818110156111d5576020818501810151868301820152016111b9565b818111156111e7576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6000604082016040835280855180835260608501915060608160051b8601019250602080880160005b838110156112be577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa08887030185526112ac8683516111af565b95509382019390820190600101611272565b50508584038187015286518085528782019482019350915060005b8281101561132c5784516022811061131a577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b845293810193928101926001016112d9565b5091979650505050505050565b600082601f83011261134a57600080fd5b813567ffffffffffffffff808211156113655761136561103f565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156113ab576113ab61103f565b816040528381528660208588010111156113c457600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080604083850312156113f757600080fd5b82359150602083013567ffffffffffffffff81111561141557600080fd5b61142185828601611339565b9150509250929050565b60006020828403121561143d57600080fd5b813567ffffffffffffffff81111561145457600080fd5b61146084828501611339565b949350505050565b6020815260006111a860208301846111af565b600080600080600060a0868803121561149357600080fd5b855161149e8161106e565b60208701519095506114af8161106e565b60408701519094506114c08161106e565b60608701519093506114d18161106e565b80925050608086015190509295509295909350565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600181811c9082168061152957607f821691505b602082108103611562577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b82815260406020820152600061146060408301846111af56fea2646970667358221220f229788b9c931d13e1d5c671456f0702c7fa23b5d4c26cce0a3ce40d37ec136264736f6c634300080d0033";

type MoveConfigComponentConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MoveConfigComponentConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MoveConfigComponent__factory extends ContractFactory {
  constructor(...args: MoveConfigComponentConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    world: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MoveConfigComponent> {
    return super.deploy(world, overrides || {}) as Promise<MoveConfigComponent>;
  }
  override getDeployTransaction(
    world: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(world, overrides || {});
  }
  override attach(address: string): MoveConfigComponent {
    return super.attach(address) as MoveConfigComponent;
  }
  override connect(signer: Signer): MoveConfigComponent__factory {
    return super.connect(signer) as MoveConfigComponent__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MoveConfigComponentInterface {
    return new utils.Interface(_abi) as MoveConfigComponentInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MoveConfigComponent {
    return new Contract(address, _abi, signerOrProvider) as MoveConfigComponent;
  }
}
