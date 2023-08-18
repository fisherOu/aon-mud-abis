/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  TreasureEffectAirdropDefenseSystem,
  TreasureEffectAirdropDefenseSystemInterface,
} from "../TreasureEffectAirdropDefenseSystem";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IWorld",
        name: "_world",
        type: "address",
      },
      {
        internalType: "address",
        name: "_components",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
        internalType: "bytes",
        name: "args",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "sourceID",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isComponent",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "entity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "treasureID",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "realHash",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "fogHash",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "fogSeed",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "width",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "height",
                type: "uint256",
              },
              {
                internalType: "uint256[2]",
                name: "a",
                type: "uint256[2]",
              },
              {
                internalType: "uint256[2][2]",
                name: "b",
                type: "uint256[2][2]",
              },
              {
                internalType: "uint256[2]",
                name: "c",
                type: "uint256[2]",
              },
            ],
            internalType: "struct CoordVerifyParam[]",
            name: "path",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "realHash",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "fogHash",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "fogSeed",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "width",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "height",
                type: "uint256",
              },
              {
                internalType: "uint256[2]",
                name: "a",
                type: "uint256[2]",
              },
              {
                internalType: "uint256[2][2]",
                name: "b",
                type: "uint256[2][2]",
              },
              {
                internalType: "uint256[2]",
                name: "c",
                type: "uint256[2]",
              },
            ],
            internalType: "struct CoordVerifyParam[]",
            name: "area",
            type: "tuple[]",
          },
          {
            internalType: "uint32",
            name: "value",
            type: "uint32",
          },
        ],
        internalType: "struct TreasureEffectInfo",
        name: "effectInfo",
        type: "tuple",
      },
    ],
    name: "executeTyped",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
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
        name: "account",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000e0c38038062000e0c833981016040819052620000349162000230565b81818181620000433362000113565b6001600160a01b038116156200005a5780620000bf565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000099573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bf91906200026f565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000107919062000187602090811b620001cb17901c565b50505050505062000296565b60006200012a620001f360201b6200025c1760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022d57600080fd5b50565b600080604083850312156200024457600080fd5b8251620002518162000217565b6020840151909250620002648162000217565b809150509250929050565b6000602082840312156200028257600080fd5b81516200028f8162000217565b9392505050565b610b6680620002a66000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe146100515780637e62c17a1461007a5780638da5cb5b1461008d578063f2fde38b146100ba575b600080fd5b61006461005f3660046104c7565b6100cf565b604051610071919061057a565b60405180910390f35b6100646100883660046107d0565b6100f9565b61009561010a565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100cd6100c83660046108a1565b61014f565b005b60606000828060200190518101906100e79190610a54565b90506100f2816100f9565b9392505050565b606061010482610280565b92915050565b600061014a7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146101bf576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6101c881610325565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b60408082015160015482517f614bfa6e000000000000000000000000000000000000000000000000000000008152925160609360009273ffffffffffffffffffffffffffffffffffffffff169163614bfa6e916004808201926020929091908290030181865afa1580156102f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061031c9190610b17565b90505050919050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046080546040516101c8928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610100810167ffffffffffffffff8111828210171561042c5761042c6103d9565b60405290565b60405160e0810167ffffffffffffffff8111828210171561042c5761042c6103d9565b6040805190810167ffffffffffffffff8111828210171561042c5761042c6103d9565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156104bf576104bf6103d9565b604052919050565b600060208083850312156104da57600080fd5b823567ffffffffffffffff808211156104f257600080fd5b818501915085601f83011261050657600080fd5b813581811115610518576105186103d9565b610548847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601610478565b9150808252868482850101111561055e57600080fd5b8084840185840137600090820190930192909252509392505050565b600060208083528351808285015260005b818110156105a75785810183015185820160400152820161058b565b818111156105b9576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b80151581146101c857600080fd5b8035610606816105ed565b919050565b600067ffffffffffffffff821115610625576106256103d9565b5060051b60200190565b600082601f83011261064057600080fd5b610648610455565b80604084018581111561065a57600080fd5b845b8181101561067457803584526020938401930161065c565b509095945050505050565b600082601f83011261069057600080fd5b610698610455565b8060808401858111156106aa57600080fd5b845b81811015610674576106be878261062f565b84526020909301926040016106ac565b600082601f8301126106df57600080fd5b813560206106f46106ef8361060b565b610478565b8281526101a0928302850182019282820191908785111561071457600080fd5b8387015b858110156107a65781818a0312156107305760008081fd5b610738610408565b81358152858201358682015260408083013590820152606080830135908201526080808301359082015260a06107708b82850161062f565b9082015260e06107828b84830161067f565b60c08301526107958b610160850161062f565b908201528452928401928101610718565b5090979650505050505050565b63ffffffff811681146101c857600080fd5b8035610606816107b3565b6000602082840312156107e257600080fd5b813567ffffffffffffffff808211156107fa57600080fd5b9083019060e0828603121561080e57600080fd5b610816610432565b82358152610826602084016105fb565b6020820152604083013560408201526060830135606082015260808301358281111561085157600080fd5b61085d878286016106ce565b60808301525060a08301358281111561087557600080fd5b610881878286016106ce565b60a08301525061089360c084016107c5565b60c082015295945050505050565b6000602082840312156108b357600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146100f257600080fd5b8051610606816105ed565b600082601f8301126108f357600080fd5b6108fb610455565b80604084018581111561090d57600080fd5b845b8181101561067457805184526020938401930161090f565b600082601f83011261093857600080fd5b610940610455565b80608084018581111561095257600080fd5b845b818110156106745761096687826108e2565b8452602090930192604001610954565b600082601f83011261098757600080fd5b815160206109976106ef8361060b565b8281526101a092830285018201928282019190878511156109b757600080fd5b8387015b858110156107a65781818a0312156109d35760008081fd5b6109db610408565b81518152858201518682015260408083015190820152606080830151908201526080808301519082015260a0610a138b8285016108e2565b9082015260e0610a258b848301610927565b60c0830152610a388b61016085016108e2565b9082015284529284019281016109bb565b8051610606816107b3565b600060208284031215610a6657600080fd5b815167ffffffffffffffff80821115610a7e57600080fd5b9083019060e08286031215610a9257600080fd5b610a9a610432565b82518152610aaa602084016108d7565b60208201526040830151604082015260608301516060820152608083015182811115610ad557600080fd5b610ae187828601610976565b60808301525060a083015182811115610af957600080fd5b610b0587828601610976565b60a08301525061089360c08401610a49565b600060208284031215610b2957600080fd5b505191905056fea2646970667358221220a2900ee30b428ac9fae897cccdb0126214906ca68ecbdc695c560e6eeaf9639c64736f6c634300080d0033";

type TreasureEffectAirdropDefenseSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TreasureEffectAirdropDefenseSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TreasureEffectAirdropDefenseSystem__factory extends ContractFactory {
  constructor(...args: TreasureEffectAirdropDefenseSystemConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TreasureEffectAirdropDefenseSystem> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<TreasureEffectAirdropDefenseSystem>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): TreasureEffectAirdropDefenseSystem {
    return super.attach(address) as TreasureEffectAirdropDefenseSystem;
  }
  override connect(
    signer: Signer
  ): TreasureEffectAirdropDefenseSystem__factory {
    return super.connect(signer) as TreasureEffectAirdropDefenseSystem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TreasureEffectAirdropDefenseSystemInterface {
    return new utils.Interface(
      _abi
    ) as TreasureEffectAirdropDefenseSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TreasureEffectAirdropDefenseSystem {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TreasureEffectAirdropDefenseSystem;
  }
}
