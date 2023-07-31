/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  Treasurev2Component,
  Treasurev2ComponentInterface,
} from "../Treasurev2Component";

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
            internalType: "uint8",
            name: "useMode",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "hitMode",
            type: "uint8",
          },
          {
            internalType: "uint64",
            name: "cooldownTime",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "range",
            type: "uint64",
          },
          {
            internalType: "uint32",
            name: "usageTimes",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "energy",
            type: "uint64",
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
            internalType: "uint8",
            name: "useMode",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "hitMode",
            type: "uint8",
          },
          {
            internalType: "uint64",
            name: "cooldownTime",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "range",
            type: "uint64",
          },
          {
            internalType: "uint32",
            name: "usageTimes",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "energy",
            type: "uint64",
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
  "0x60806040523480156200001157600080fd5b506040516200197a3803806200197a833981016040819052620000349162000200565b807f65188156108ab445e8ddb20e749f49402ca97dc723f07951b1c4a011dd8e116662000061336200008a565b60028190556001600160a01b0382161562000081576200008182620000fe565b50505062000232565b6000620000a1620001b660201b62000e591760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b62000108620001da565b6001600160a01b0316336001600160a01b0316146200013a57604051632f7a8ee160e01b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117909155600254604051630f30347760e41b8152306004820152602481019190915263f303477090604401600060405180830381600087803b1580156200019a57600080fd5b505af1158015620001af573d6000803e3d6000fd5b5050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6000620001f1620001b660201b62000e591760201c565b546001600160a01b0316919050565b6000602082840312156200021357600080fd5b81516001600160a01b03811681146200022b57600080fd5b9392505050565b61173880620002426000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c80638da5cb5b116100b2578063b361be4611610081578063bf4fe57e11610066578063bf4fe57e1461031a578063cccf7a8e1461032d578063f2fde38b1461034057600080fd5b8063b361be46146102e7578063b8bc073d146102fa57600080fd5b80638da5cb5b146102a25780639d2c76b4146102aa578063a363c56f146102bd578063af640d0f146102d057600080fd5b80634fef6a381161010957806375c0669c116100ee57806375c0669c14610259578063861eb9051461026c5780638b2829471461028f57600080fd5b80634fef6a38146102305780636b122fe01461024357600080fd5b80630ff4c9161461013b57806330b67baa146101c157806331b933b9146102065780634cc822151461021b575b600080fd5b61014e610149366004611120565b610353565b6040516101b89190600060c08201905060ff835116825260ff6020840151166020830152604083015167ffffffffffffffff808216604085015280606086015116606085015263ffffffff60808601511660808501528060a08601511660a0850152505092915050565b60405180910390f35b6000546101e19073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101b8565b61020e6103f8565b6040516101b89190611139565b61022e610229366004611120565b61042c565b005b61022e61023e36600461117d565b610477565b61024b610555565b6040516101b8929190611254565b61022e61026736600461117d565b610940565b61027f61027a36600461117d565b610972565b60405190151581526020016101b8565b61022e61029d366004611447565b6109fd565b6101e1610a4a565b61022e6102b836600461117d565b610a8f565b61022e6102cb3660046114c5565b610bb8565b6102d960025481565b6040519081526020016101b8565b61020e6102f5366004611590565b6103f8565b61030d610308366004611120565b610c41565b6040516101b891906115cd565b61022e61032836600461117d565b610ce3565b61027f61033b366004611120565b610dbe565b61022e61034e36600461117d565b610de0565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905290808080808061039388610c41565b8060200190518101906103a691906115e0565b6040805160c08101825260ff978816815296909516602087015267ffffffffffffffff93841694860194909452908216606085015263ffffffff1660808401521660a082015298975050505050505050565b60606040517f17d5b8e800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61043533610972565b61046b576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61047481610e7d565b50565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146104e7576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b60408051600680825260e08201909252606091829190816020015b606081526020019060019003908161057057505060408051600680825260e082019092529193506020820160c0803683370190505090506040518060400160405280600781526020017f7573654d6f646500000000000000000000000000000000000000000000000000815250826000815181106105f0576105f0611667565b602002602001018190525060088160008151811061061057610610611667565b6020026020010190602181111561062957610629611225565b9081602181111561063c5761063c611225565b815250506040518060400160405280600781526020017f6869744d6f6465000000000000000000000000000000000000000000000000008152508260018151811061068957610689611667565b60200260200101819052506008816001815181106106a9576106a9611667565b602002602001019060218111156106c2576106c2611225565b908160218111156106d5576106d5611225565b815250506040518060400160405280600c81526020017f636f6f6c646f776e54696d6500000000000000000000000000000000000000008152508260028151811061072257610722611667565b6020026020010181905250600b8160028151811061074257610742611667565b6020026020010190602181111561075b5761075b611225565b9081602181111561076e5761076e611225565b815250506040518060400160405280600581526020017f72616e6765000000000000000000000000000000000000000000000000000000815250826003815181106107bb576107bb611667565b6020026020010181905250600b816003815181106107db576107db611667565b602002602001019060218111156107f4576107f4611225565b9081602181111561080757610807611225565b815250506040518060400160405280600a81526020017f757361676554696d6573000000000000000000000000000000000000000000008152508260048151811061085457610854611667565b6020026020010181905250600a8160048151811061087457610874611667565b6020026020010190602181111561088d5761088d611225565b908160218111156108a0576108a0611225565b815250506040518060400160405280600681526020017f656e657267790000000000000000000000000000000000000000000000000000815250826005815181106108ed576108ed611667565b6020026020010181905250600b8160058151811061090d5761090d611667565b6020026020010190602181111561092657610926611225565b9081602181111561093957610939611225565b9052509091565b6040517f17d5b8e800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c909602052604081205460ff16806109f757506109c8610a4a565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b92915050565b610a0633610972565b610a3c576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a468282610eeb565b5050565b6000610a8a7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610aff576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556002546040517ff3034770000000000000000000000000000000000000000000000000000000008152306004820152602481019190915263f3034770906044015b600060405180830381600087803b158015610b9d57600080fd5b505af1158015610bb1573d6000803e3d6000fd5b5050505050565b610a4682826000015183602001518460400151856060015186608001518760a00151604051602001610c2d9695949392919060ff968716815294909516602085015267ffffffffffffffff9283166040850152908216606084015263ffffffff1660808301529190911660a082015260c00190565b6040516020818303038152906040526109fd565b6000818152600160205260409020805460609190610c5e90611696565b80601f0160208091040260200160405190810160405280929190818152602001828054610c8a90611696565b8015610cd75780601f10610cac57610100808354040283529160200191610cd7565b820191906000526020600020905b815481529060010190602001808311610cba57829003601f168201915b50505050509050919050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610d53576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b60008181526001602052604081208054610dd790611696565b15159392505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610e50576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61047481610f99565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6000818152600160205260408120610e949161104d565b6000546040517f0de3b7b50000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff90911690630de3b7b590602401610b83565b60008281526001602090815260409091208251610f0a92840190611087565b506000546040517fcfd3c57f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169063cfd3c57f90610f6390859085906004016116e9565b600060405180830381600087803b158015610f7d57600080fd5b505af1158015610f91573d6000803e3d6000fd5b505050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051610474928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b50805461105990611696565b6000825580601f10611069575050565b601f016020900490600052602060002090810190610474919061110b565b82805461109390611696565b90600052602060002090601f0160209004810192826110b557600085556110fb565b82601f106110ce57805160ff19168380011785556110fb565b828001600101855582156110fb579182015b828111156110fb5782518255916020019190600101906110e0565b5061110792915061110b565b5090565b5b80821115611107576000815560010161110c565b60006020828403121561113257600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b8181101561117157835183529284019291840191600101611155565b50909695505050505050565b60006020828403121561118f57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146111b357600080fd5b9392505050565b6000815180845260005b818110156111e0576020818501810151868301820152016111c4565b818111156111f2576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6000604082016040835280855180835260608501915060608160051b8601019250602080880160005b838110156112c9577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa08887030185526112b78683516111ba565b9550938201939082019060010161127d565b50508584038187015286518085528782019482019350915060005b8281101561133757845160228110611325577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b845293810193928101926001016112e4565b5091979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160c0810167ffffffffffffffff8111828210171561139657611396611344565b60405290565b600082601f8301126113ad57600080fd5b813567ffffffffffffffff808211156113c8576113c8611344565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561140e5761140e611344565b8160405283815286602085880101111561142757600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806040838503121561145a57600080fd5b82359150602083013567ffffffffffffffff81111561147857600080fd5b6114848582860161139c565b9150509250929050565b60ff8116811461047457600080fd5b67ffffffffffffffff8116811461047457600080fd5b63ffffffff8116811461047457600080fd5b60008082840360e08112156114d957600080fd5b8335925060c07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08201121561150d57600080fd5b50611516611373565b60208401356115248161148e565b815260408401356115348161148e565b602082015260608401356115478161149d565b6040820152608084013561155a8161149d565b606082015260a084013561156d816114b3565b608082015260c08401356115808161149d565b60a0820152919491935090915050565b6000602082840312156115a257600080fd5b813567ffffffffffffffff8111156115b957600080fd5b6115c58482850161139c565b949350505050565b6020815260006111b360208301846111ba565b60008060008060008060c087890312156115f957600080fd5b86516116048161148e565b60208801519096506116158161148e565b60408801519095506116268161149d565b60608801519094506116378161149d565b6080880151909350611648816114b3565b60a08801519092506116598161149d565b809150509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600181811c908216806116aa57607f821691505b6020821081036116e3577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b8281526040602082015260006115c560408301846111ba56fea2646970667358221220b0d82bcd0228e34db70cb42bddb1cf0ab4f4bd714b6d9c96aaa4f3fc211d8aa964736f6c634300080d0033";

type Treasurev2ComponentConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Treasurev2ComponentConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Treasurev2Component__factory extends ContractFactory {
  constructor(...args: Treasurev2ComponentConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    world: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Treasurev2Component> {
    return super.deploy(world, overrides || {}) as Promise<Treasurev2Component>;
  }
  override getDeployTransaction(
    world: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(world, overrides || {});
  }
  override attach(address: string): Treasurev2Component {
    return super.attach(address) as Treasurev2Component;
  }
  override connect(signer: Signer): Treasurev2Component__factory {
    return super.connect(signer) as Treasurev2Component__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Treasurev2ComponentInterface {
    return new utils.Interface(_abi) as Treasurev2ComponentInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Treasurev2Component {
    return new Contract(address, _abi, signerOrProvider) as Treasurev2Component;
  }
}
