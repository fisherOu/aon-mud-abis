/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  TechFinishSystem,
  TechFinishSystemInterface,
} from "../TechFinishSystem";

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
        internalType: "uint256",
        name: "updateId",
        type: "uint256",
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
  "0x60806040523480156200001157600080fd5b506040516200157e3803806200157e83398101604081905262000034916200022c565b818162000041336200010f565b6001600160a01b03811615620000585780620000bd565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000097573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bd91906200026b565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000105919062000183602090811b620006a517901c565b5050505062000292565b600062000126620001ef60201b620007361760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022957600080fd5b50565b600080604083850312156200024057600080fd5b82516200024d8162000213565b6020840151909250620002608162000213565b809150509250929050565b6000602082840312156200027e57600080fd5b81516200028b8162000213565b9392505050565b6112dc80620002a26000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe146100515780633e991df31461007a5780638da5cb5b1461008d578063f2fde38b146100ba575b600080fd5b61006461005f366004610f17565b6100cf565b6040516100719190610fca565b60405180910390f35b61006461008836600461103d565b6100f9565b6100956105e4565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100cd6100c8366004611056565b610629565b005b60606000828060200190518101906100e7919061108c565b90506100f2816100f9565b9392505050565b606033600080808061010a8761075a565b935093509350935083600003610181576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6e6f2074656368207570646174696e670000000000000000000000000000000060448201526064015b60405180910390fd5b4267ffffffffffffffff168167ffffffffffffffff1611156101ff576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f557064617465206e6f742046696e6973686564000000000000000000000000006044820152606401610178565b600061020b88856109b4565b9050806000036102a957600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663614bfa6e6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610282573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102a6919061108c565b90505b6000546102ec9073ffffffffffffffffffffffffffffffffffffffff167fbbcf72a5f12ae7e26ca180b46e62f29286fa93c2be458013c579dd8cc80ca6d9610c70565b73ffffffffffffffffffffffffffffffffffffffff16634cc82215896040518263ffffffff1660e01b815260040161032691815260200190565b600060405180830381600087803b15801561034057600080fd5b505af1158015610354573d6000803e3d6000fd5b505060005461039c925073ffffffffffffffffffffffffffffffffffffffff1690507f8ea20e77228f35477b65a63714a516a0798d72c5a30798f938784c431ed2c320610c70565b73ffffffffffffffffffffffffffffffffffffffff16634cc82215896040518263ffffffff1660e01b81526004016103d691815260200190565b600060405180830381600087803b1580156103f057600080fd5b505af1158015610404573d6000803e3d6000fd5b505060005461044c925073ffffffffffffffffffffffffffffffffffffffff1690507f7d3ae0f354d484b474c261c5881c1dd2d1fb4691793800e04688e2d791cd888a610c70565b6040805160608101825267ffffffffffffffff80871682524281166020830190815282840189815293517fa1bd12b200000000000000000000000000000000000000000000000000000000815260048101879052925182166024840152511660448201529051606482015273ffffffffffffffffffffffffffffffffffffffff919091169063a1bd12b290608401600060405180830381600087803b1580156104f457600080fd5b505af1158015610508573d6000803e3d6000fd5b5050600054610550925073ffffffffffffffffffffffffffffffffffffffff1690507f92acea35713be98645f56aa52c544d79830fb401252476df1d51f7409850d719610c70565b6040517f1ab06ee5000000000000000000000000000000000000000000000000000000008152600481018390526024810188905273ffffffffffffffffffffffffffffffffffffffff9190911690631ab06ee590604401600060405180830381600087803b1580156105c157600080fd5b505af11580156105d5573d6000803e3d6000fd5b50505050505050505050919050565b60006106247f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610699576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106a281610dbc565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6000808080803360008054919250906107a99073ffffffffffffffffffffffffffffffffffffffff167f8ea20e77228f35477b65a63714a516a0798d72c5a30798f938784c431ed2c320610c70565b60008054919250906107f19073ffffffffffffffffffffffffffffffffffffffff167fbbcf72a5f12ae7e26ca180b46e62f29286fa93c2be458013c579dd8cc80ca6d9610c70565b6040517ffbdfa1ea0000000000000000000000000000000000000000000000000000000081526004810185905290915060009073ffffffffffffffffffffffffffffffffffffffff84169063fbdfa1ea90602401600060405180830381865afa158015610862573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526108a891908101906110a5565b90506000806000805b84518110156109a15760008673ffffffffffffffffffffffffffffffffffffffff16630ff4c9168784815181106108ea576108ea61114b565b60200260200101516040518263ffffffff1660e01b815260040161091091815260200190565b606060405180830381865afa15801561092d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109519190611197565b90508d8683815181106109665761096661114b565b60200260200101510361098e57806000015194508060200151935080604001519250506109a1565b50806109998161120d565b9150506108b1565b509a9b919a909950975095505050505050565b60008054339082906109fc9073ffffffffffffffffffffffffffffffffffffffff167f92acea35713be98645f56aa52c544d79830fb401252476df1d51f7409850d719610c70565b6000805491925090610a449073ffffffffffffffffffffffffffffffffffffffff167f7d3ae0f354d484b474c261c5881c1dd2d1fb4691793800e04688e2d791cd888a610c70565b6040517ffbdfa1ea0000000000000000000000000000000000000000000000000000000081526004810185905290915060009073ffffffffffffffffffffffffffffffffffffffff84169063fbdfa1ea90602401600060405180830381865afa158015610ab5573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610afb91908101906110a5565b905060008060005b8351811015610c625760008573ffffffffffffffffffffffffffffffffffffffff16630ff4c916868481518110610b3c57610b3c61114b565b60200260200101516040518263ffffffff1660e01b8152600401610b6291815260200190565b606060405180830381865afa158015610b7f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba39190611245565b905089816040015103610bd957848281518110610bc257610bc261114b565b602002602001015193508060400151925050610c62565b60018551610be7919061128f565b8203610c4f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4572726f7220696e2067657474696e67205465636849642100000000000000006044820152606401610178565b5080610c5a8161120d565b915050610b03565b509098975050505050505050565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015610ce0573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610d2691908101906110a5565b90508051600003610d93576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f7420726567697374657265640000000000000000000000000000006044820152606401610178565b610db481600081518110610da957610da961114b565b602002602001015190565b949350505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046080546040516106a2928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715610ec257610ec2610e70565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610f0f57610f0f610e70565b604052919050565b60006020808385031215610f2a57600080fd5b823567ffffffffffffffff80821115610f4257600080fd5b818501915085601f830112610f5657600080fd5b813581811115610f6857610f68610e70565b610f98847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601610ec8565b91508082528684828501011115610fae57600080fd5b8084840185840137600090820190930192909252509392505050565b600060208083528351808285015260005b81811015610ff757858101830151858201604001528201610fdb565b81811115611009576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b60006020828403121561104f57600080fd5b5035919050565b60006020828403121561106857600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146100f257600080fd5b60006020828403121561109e57600080fd5b5051919050565b600060208083850312156110b857600080fd5b825167ffffffffffffffff808211156110d057600080fd5b818501915085601f8301126110e457600080fd5b8151818111156110f6576110f6610e70565b8060051b9150611107848301610ec8565b818152918301840191848101908884111561112157600080fd5b938501935b8385101561113f57845182529385019390850190611126565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b805167ffffffffffffffff8116811461119257600080fd5b919050565b6000606082840312156111a957600080fd5b6111b1610e9f565b825181526111c16020840161117a565b60208201526111d26040840161117a565b60408201529392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361123e5761123e6111de565b5060010190565b60006060828403121561125757600080fd5b61125f610e9f565b6112688361117a565b81526112766020840161117a565b6020820152604083015160408201528091505092915050565b6000828210156112a1576112a16111de565b50039056fea2646970667358221220c60b6761eadab1bd74f36c59c5e01f43314410d9dc74603a57a9421df81dd57a64736f6c634300080d0033";

type TechFinishSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TechFinishSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TechFinishSystem__factory extends ContractFactory {
  constructor(...args: TechFinishSystemConstructorParams) {
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
  ): Promise<TechFinishSystem> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<TechFinishSystem>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): TechFinishSystem {
    return super.attach(address) as TechFinishSystem;
  }
  override connect(signer: Signer): TechFinishSystem__factory {
    return super.connect(signer) as TechFinishSystem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TechFinishSystemInterface {
    return new utils.Interface(_abi) as TechFinishSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TechFinishSystem {
    return new Contract(address, _abi, signerOrProvider) as TechFinishSystem;
  }
}
