/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  TreasureEffectConfigComponent,
  TreasureEffectConfigComponentInterface,
} from "../TreasureEffectConfigComponent";

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
            name: "effectID",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "effectName",
            type: "string",
          },
          {
            internalType: "uint32",
            name: "effectGroup",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "effectRarely",
            type: "uint64",
          },
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
        ],
        internalType: "struct TreasureEffectConfig",
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
            name: "effectID",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "effectName",
            type: "string",
          },
          {
            internalType: "uint32",
            name: "effectGroup",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "effectRarely",
            type: "uint64",
          },
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
        ],
        internalType: "struct TreasureEffectConfig",
        name: "treasureEffect",
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
  "0x60806040523480156200001157600080fd5b5060405162001a8938038062001a89833981016040819052620000349162000200565b807f1c25628829b4861cd29b8126181e286e9aa3749b43e568208fa84796fe72e38162000061336200008a565b60028190556001600160a01b0382161562000081576200008182620000fe565b50505062000232565b6000620000a1620001b660201b62000dbc1760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b62000108620001da565b6001600160a01b0316336001600160a01b0316146200013a57604051632f7a8ee160e01b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117909155600254604051630f30347760e41b8152306004820152602481019190915263f303477090604401600060405180830381600087803b1580156200019a57600080fd5b505af1158015620001af573d6000803e3d6000fd5b5050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6000620001f1620001b660201b62000dbc1760201c565b546001600160a01b0316919050565b6000602082840312156200021357600080fd5b81516001600160a01b03811681146200022b57600080fd5b9392505050565b61184780620002426000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c80638b282947116100b2578063b361be4611610081578063bf4fe57e11610066578063bf4fe57e146102bd578063cccf7a8e146102d0578063f2fde38b146102e357600080fd5b8063b361be461461028a578063b8bc073d1461029d57600080fd5b80638b282947146102455780638da5cb5b146102585780639d2c76b414610260578063af640d0f1461027357600080fd5b80634fef6a381161010957806370daf426116100ee57806370daf426146101fc57806375c0669c1461020f578063861eb9051461022257600080fd5b80634fef6a38146101d35780636b122fe0146101e657600080fd5b80630ff4c9161461013b57806330b67baa1461016457806331b933b9146101a95780634cc82215146101be575b600080fd5b61014e610149366004611083565b6102f6565b60405161015b9190611116565b60405180910390f35b6000546101849073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161015b565b6101b1610399565b60405161015b9190611186565b6101d16101cc366004611083565b6103cd565b005b6101d16101e13660046111ca565b610418565b6101ee6104f6565b60405161015b929190611236565b6101d161020a3660046114ae565b6108e1565b6101d161021d3660046111ca565b610930565b6102356102303660046111ca565b610962565b604051901515815260200161015b565b6101d16102533660046115aa565b6109ed565b610184610a36565b6101d161026e3660046111ca565b610a7b565b61027c60025481565b60405190815260200161015b565b6101b16102983660046115f1565b610399565b6102b06102ab366004611083565b610ba4565b60405161015b919061162e565b6101d16102cb3660046111ca565b610c46565b6102356102de366004611083565b610d21565b6101d16102f13660046111ca565b610d43565b6040805160c08101825260008082526060602083018190529282018190529181018290526080810182905260a0810182905290808080808061033788610ba4565b80602001905181019061034a9190611662565b6040805160c081018252968752602087019590955263ffffffff9093169385019390935267ffffffffffffffff16606084015260ff91821660808401521660a082015298975050505050505050565b60606040517f17d5b8e800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103d633610962565b61040c576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61041581610de0565b50565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610488576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b60408051600680825260e08201909252606091829190816020015b606081526020019060019003908161051157505060408051600680825260e082019092529193506020820160c0803683370190505090506040518060400160405280600881526020017f65666665637449440000000000000000000000000000000000000000000000008152508260008151811061059157610591611725565b6020026020010181905250600d816000815181106105b1576105b1611725565b602002602001019060218111156105ca576105ca611207565b908160218111156105dd576105dd611207565b815250506040518060400160405280600a81526020017f6566666563744e616d65000000000000000000000000000000000000000000008152508260018151811061062a5761062a611725565b6020026020010181905250600f8160018151811061064a5761064a611725565b6020026020010190602181111561066357610663611207565b9081602181111561067657610676611207565b815250506040518060400160405280600b81526020017f65666665637447726f7570000000000000000000000000000000000000000000815250826002815181106106c3576106c3611725565b6020026020010181905250600a816002815181106106e3576106e3611725565b602002602001019060218111156106fc576106fc611207565b9081602181111561070f5761070f611207565b815250506040518060400160405280600c81526020017f656666656374526172656c7900000000000000000000000000000000000000008152508260038151811061075c5761075c611725565b6020026020010181905250600b8160038151811061077c5761077c611725565b6020026020010190602181111561079557610795611207565b908160218111156107a8576107a8611207565b815250506040518060400160405280600781526020017f7573654d6f646500000000000000000000000000000000000000000000000000815250826004815181106107f5576107f5611725565b602002602001018190525060088160048151811061081557610815611725565b6020026020010190602181111561082e5761082e611207565b9081602181111561084157610841611207565b815250506040518060400160405280600781526020017f6869744d6f6465000000000000000000000000000000000000000000000000008152508260058151811061088e5761088e611725565b60200260200101819052506008816005815181106108ae576108ae611725565b602002602001019060218111156108c7576108c7611207565b908160218111156108da576108da611207565b9052509091565b61092c82826000015183602001518460400151856060015186608001518760a0015160405160200161091896959493929190611754565b6040516020818303038152906040526109ed565b5050565b6040517f17d5b8e800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c909602052604081205460ff16806109e757506109b8610a36565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b92915050565b6109f633610962565b610a2c576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61092c8282610e4e565b6000610a767f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610aeb576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556002546040517ff3034770000000000000000000000000000000000000000000000000000000008152306004820152602481019190915263f3034770906044015b600060405180830381600087803b158015610b8957600080fd5b505af1158015610b9d573d6000803e3d6000fd5b5050505050565b6000818152600160205260409020805460609190610bc1906117a5565b80601f0160208091040260200160405190810160405280929190818152602001828054610bed906117a5565b8015610c3a5780601f10610c0f57610100808354040283529160200191610c3a565b820191906000526020600020905b815481529060010190602001808311610c1d57829003601f168201915b50505050509050919050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610cb6576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b60008181526001602052604081208054610d3a906117a5565b15159392505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610db3576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61041581610efc565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6000818152600160205260408120610df791610fb0565b6000546040517f0de3b7b50000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff90911690630de3b7b590602401610b6f565b60008281526001602090815260409091208251610e6d92840190610fea565b506000546040517fcfd3c57f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169063cfd3c57f90610ec690859085906004016117f8565b600060405180830381600087803b158015610ee057600080fd5b505af1158015610ef4573d6000803e3d6000fd5b505050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051610415928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b508054610fbc906117a5565b6000825580601f10610fcc575050565b601f016020900490600052602060002090810190610415919061106e565b828054610ff6906117a5565b90600052602060002090601f016020900481019282611018576000855561105e565b82601f1061103157805160ff191683800117855561105e565b8280016001018555821561105e579182015b8281111561105e578251825591602001919060010190611043565b5061106a92915061106e565b5090565b5b8082111561106a576000815560010161106f565b60006020828403121561109557600080fd5b5035919050565b60005b838110156110b757818101518382015260200161109f565b838111156110c6576000848401525b50505050565b600081518084526110e481602086016020860161109c565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201526000602083015160c0604084015261113c60e08401826110cc565b905063ffffffff604085015116606084015267ffffffffffffffff606085015116608084015260ff60808501511660a084015260ff60a08501511660c08401528091505092915050565b6020808252825182820181905260009190848201906040850190845b818110156111be578351835292840192918401916001016111a2565b50909695505050505050565b6000602082840312156111dc57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461120057600080fd5b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6000604082016040835280855180835260608501915060608160051b8601019250602080880160005b838110156112ab577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa08887030185526112998683516110cc565b9550938201939082019060010161125f565b50508584038187015286518085528782019482019350915060005b8281101561131957845160228110611307577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b845293810193928101926001016112c6565b5091979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160c0810167ffffffffffffffff8111828210171561137857611378611326565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156113c5576113c5611326565b604052919050565b600067ffffffffffffffff8211156113e7576113e7611326565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b6000611426611421846113cd565b61137e565b905082815283838301111561143a57600080fd5b828260208301376000602084830101529392505050565b63ffffffff8116811461041557600080fd5b803561146e81611451565b919050565b67ffffffffffffffff8116811461041557600080fd5b803561146e81611473565b60ff8116811461041557600080fd5b803561146e81611494565b600080604083850312156114c157600080fd5b82359150602083013567ffffffffffffffff808211156114e057600080fd5b9084019060c082870312156114f457600080fd5b6114fc611355565b8235815260208301358281111561151257600080fd5b83019150601f8201871361152557600080fd5b61153487833560208501611413565b602082015261154560408401611463565b604082015261155660608401611489565b6060820152611567608084016114a3565b608082015261157860a084016114a3565b60a08201528093505050509250929050565b600082601f83011261159b57600080fd5b61120083833560208501611413565b600080604083850312156115bd57600080fd5b82359150602083013567ffffffffffffffff8111156115db57600080fd5b6115e78582860161158a565b9150509250929050565b60006020828403121561160357600080fd5b813567ffffffffffffffff81111561161a57600080fd5b6116268482850161158a565b949350505050565b60208152600061120060208301846110cc565b805161146e81611451565b805161146e81611473565b805161146e81611494565b60008060008060008060c0878903121561167b57600080fd5b86519550602087015167ffffffffffffffff81111561169957600080fd5b8701601f810189136116aa57600080fd5b80516116b8611421826113cd565b8181528a60208385010111156116cd57600080fd5b6116de82602083016020860161109c565b96506116ef91505060408801611641565b93506116fd6060880161164c565b925061170b60808801611657565b915061171960a08801611657565b90509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b86815260c06020820152600061176d60c08301886110cc565b63ffffffff9690961660408301525067ffffffffffffffff93909316606084015260ff91821660808401521660a09091015292915050565b600181811c908216806117b957607f821691505b6020821081036117f2577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b82815260406020820152600061162660408301846110cc56fea2646970667358221220bbf8ea888b3614438845e0289a35bfe46a33348e3e34be1c6629ab3f33d8666b64736f6c634300080d0033";

type TreasureEffectConfigComponentConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TreasureEffectConfigComponentConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TreasureEffectConfigComponent__factory extends ContractFactory {
  constructor(...args: TreasureEffectConfigComponentConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    world: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TreasureEffectConfigComponent> {
    return super.deploy(
      world,
      overrides || {}
    ) as Promise<TreasureEffectConfigComponent>;
  }
  override getDeployTransaction(
    world: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(world, overrides || {});
  }
  override attach(address: string): TreasureEffectConfigComponent {
    return super.attach(address) as TreasureEffectConfigComponent;
  }
  override connect(signer: Signer): TreasureEffectConfigComponent__factory {
    return super.connect(signer) as TreasureEffectConfigComponent__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TreasureEffectConfigComponentInterface {
    return new utils.Interface(_abi) as TreasureEffectConfigComponentInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TreasureEffectConfigComponent {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TreasureEffectConfigComponent;
  }
}
