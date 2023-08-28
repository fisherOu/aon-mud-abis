/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  TechCancelSystem,
  TechCancelSystemInterface,
} from "../TechCancelSystem";

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
            name: "updateId",
            type: "uint256",
          },
        ],
        internalType: "struct TechCancelInfo",
        name: "techCancelInfo",
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
  "0x60806040523480156200001157600080fd5b5060405162001a3138038062001a3183398101604081905262000034916200022c565b818162000041336200010f565b6001600160a01b03811615620000585780620000bd565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000097573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bd91906200026b565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000105919062000183602090811b6200090417901c565b5050505062000292565b600062000126620001ef60201b620009951760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022957600080fd5b50565b600080604083850312156200024057600080fd5b82516200024d8162000213565b6020840151909250620002608162000213565b809150509250929050565b6000602082840312156200027e57600080fd5b81516200028b8162000213565b9392505050565b61178f80620002a26000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe146100515780638da5cb5b1461007a578063a85bbf29146100a7578063f2fde38b146100ba575b600080fd5b61006461005f3660046111e4565b6100cf565b6040516100719190611297565b60405180910390f35b6100826100f9565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100646100b536600461130a565b61013e565b6100cd6100c836600461132e565b610888565b005b60606000828060200190518101906100e79190611364565b90506100f28161013e565b9392505050565b60006101397f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b6000805460609133916101879073ffffffffffffffffffffffffffffffffffffffff167f2f3c6eb2abe480dcea02a3f0d6883cd4e62a46b8207d85e1ff6f6e5cdee24b7a6109b9565b905060008060008061019888610b05565b93509350935093508360000361020f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6e6f2074656368207570646174696e670000000000000000000000000000000060448201526064015b60405180910390fd5b600080546102539073ffffffffffffffffffffffffffffffffffffffff167fcff18fc6e785bccaceeb5098bd1a0e1b9eb64e10612dcefc604d27072aef9b486109b9565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810186905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa1580156102c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102e59190611388565b61034b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f746563682067726f757020696e76616c696400000000000000000000000000006044820152606401610206565b600061035b8a6000015186610d82565b6000549091506103a19073ffffffffffffffffffffffffffffffffffffffff167fbbcf72a5f12ae7e26ca180b46e62f29286fa93c2be458013c579dd8cc80ca6d96109b9565b8a516040517f4cc8221500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9290921691634cc82215916103f99160040190815260200190565b600060405180830381600087803b15801561041357600080fd5b505af1158015610427573d6000803e3d6000fd5b505060005461046f925073ffffffffffffffffffffffffffffffffffffffff1690507f8ea20e77228f35477b65a63714a516a0798d72c5a30798f938784c431ed2c3206109b9565b8a516040517f4cc8221500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9290921691634cc82215916104c79160040190815260200190565b600060405180830381600087803b1580156104e157600080fd5b505af11580156104f5573d6000803e3d6000fd5b5050505060018467ffffffffffffffff16111561062b5760005461054f9073ffffffffffffffffffffffffffffffffffffffff167f7d3ae0f354d484b474c261c5881c1dd2d1fb4691793800e04688e2d791cd888a6109b9565b73ffffffffffffffffffffffffffffffffffffffff1663a1bd12b282604051806060016040528060018961058391906113d9565b67ffffffffffffffff908116825242811660208084019190915260409283018c905282517fffffffff0000000000000000000000000000000000000000000000000000000060e088901b168152600481019590955283518216602486015283015116604484015201516064820152608401600060405180830381600087803b15801561060e57600080fd5b505af1158015610622573d6000803e3d6000fd5b505050506106a0565b60018467ffffffffffffffff1610156106a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f6e6f742076616c6964206e657874206c6576656c0000000000000000000000006044820152606401610206565b6040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810186905260009073ffffffffffffffffffffffffffffffffffffffff841690630ff4c9169060240160c060405180830381865afa15801561070e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107329190611433565b90506000606461074683602001518861103e565b8360a0015163ffffffff1661075b91906114cb565b6107659190611508565b90508873ffffffffffffffffffffffffffffffffffffffff16631ab06ee58b838c73ffffffffffffffffffffffffffffffffffffffff16630ff4c9168f6040518263ffffffff1660e01b81526004016107c091815260200190565b602060405180830381865afa1580156107dd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108019190611543565b61080b919061155c565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815260048101929092526024820152604401600060405180830381600087803b15801561086157600080fd5b505af1158015610875573d6000803e3d6000fd5b5050505050505050505050505050919050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146108f8576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61090181611066565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015610a29573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610a6f9190810190611574565b90508051600003610adc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f7420726567697374657265640000000000000000000000000000006044820152606401610206565b610afd81600081518110610af257610af261161a565b602002602001015190565b949350505050565b600080808080336000805491925090610b549073ffffffffffffffffffffffffffffffffffffffff167f8ea20e77228f35477b65a63714a516a0798d72c5a30798f938784c431ed2c3206109b9565b6000805491925090610b9c9073ffffffffffffffffffffffffffffffffffffffff167fbbcf72a5f12ae7e26ca180b46e62f29286fa93c2be458013c579dd8cc80ca6d96109b9565b6040517ffbdfa1ea0000000000000000000000000000000000000000000000000000000081526004810185905290915060009073ffffffffffffffffffffffffffffffffffffffff84169063fbdfa1ea90602401600060405180830381865afa158015610c0d573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610c539190810190611574565b905060008060008060005b8551811015610d6e5760008773ffffffffffffffffffffffffffffffffffffffff16630ff4c916888481518110610c9757610c9761161a565b60200260200101516040518263ffffffff1660e01b8152600401610cbd91815260200190565b606060405180830381865afa158015610cda573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cfe9190611649565b90508e60000151878381518110610d1757610d1761161a565b602002602001015103610d5b57868281518110610d3657610d3661161a565b6020026020010151955080600001519450806020015193508060400151925050610d6e565b5080610d6681611690565b915050610c5e565b50929c919b50995090975095505050505050565b6000805433908290610dca9073ffffffffffffffffffffffffffffffffffffffff167f92acea35713be98645f56aa52c544d79830fb401252476df1d51f7409850d7196109b9565b6000805491925090610e129073ffffffffffffffffffffffffffffffffffffffff167f7d3ae0f354d484b474c261c5881c1dd2d1fb4691793800e04688e2d791cd888a6109b9565b6040517ffbdfa1ea0000000000000000000000000000000000000000000000000000000081526004810185905290915060009073ffffffffffffffffffffffffffffffffffffffff84169063fbdfa1ea90602401600060405180830381865afa158015610e83573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610ec99190810190611574565b905060008060005b83518110156110305760008573ffffffffffffffffffffffffffffffffffffffff16630ff4c916868481518110610f0a57610f0a61161a565b60200260200101516040518263ffffffff1660e01b8152600401610f3091815260200190565b606060405180830381865afa158015610f4d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f7191906116c8565b905089816040015103610fa757848281518110610f9057610f9061161a565b602002602001015193508060400151925050611030565b60018551610fb59190611712565b820361101d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4572726f7220696e2067657474696e67205465636849642100000000000000006044820152606401610206565b508061102881611690565b915050610ed1565b509098975050505050505050565b60008161104b8185611729565b6110559190611729565b67ffffffffffffffff169392505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051610901928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516020810167ffffffffffffffff8111828210171561116c5761116c61111a565b60405290565b6040516060810167ffffffffffffffff8111828210171561116c5761116c61111a565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156111dc576111dc61111a565b604052919050565b600060208083850312156111f757600080fd5b823567ffffffffffffffff8082111561120f57600080fd5b818501915085601f83011261122357600080fd5b8135818111156112355761123561111a565b611265847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611195565b9150808252868482850101111561127b57600080fd5b8084840185840137600090820190930192909252509392505050565b600060208083528351808285015260005b818110156112c4578581018301518582016040015282016112a8565b818111156112d6576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b60006020828403121561131c57600080fd5b611324611149565b9135825250919050565b60006020828403121561134057600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146100f257600080fd5b60006020828403121561137657600080fd5b61137e611149565b9151825250919050565b60006020828403121561139a57600080fd5b815180151581146100f257600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600067ffffffffffffffff838116908316818110156113fa576113fa6113aa565b039392505050565b805167ffffffffffffffff8116811461141a57600080fd5b919050565b805163ffffffff8116811461141a57600080fd5b600060c0828403121561144557600080fd5b60405160c0810181811067ffffffffffffffff821117156114685761146861111a565b6040528251815261147b60208401611402565b602082015261148c60408401611402565b604082015261149d60608401611402565b60608201526114ae6080840161141f565b60808201526114bf60a0840161141f565b60a08201529392505050565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611503576115036113aa565b500290565b60008261153e577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b60006020828403121561155557600080fd5b5051919050565b6000821982111561156f5761156f6113aa565b500190565b6000602080838503121561158757600080fd5b825167ffffffffffffffff8082111561159f57600080fd5b818501915085601f8301126115b357600080fd5b8151818111156115c5576115c561111a565b8060051b91506115d6848301611195565b81815291830184019184810190888411156115f057600080fd5b938501935b8385101561160e578451825293850193908501906115f5565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006060828403121561165b57600080fd5b611663611172565b8251815261167360208401611402565b602082015261168460408401611402565b60408201529392505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036116c1576116c16113aa565b5060010190565b6000606082840312156116da57600080fd5b6116e2611172565b6116eb83611402565b81526116f960208401611402565b6020820152604083015160408201528091505092915050565b600082821015611724576117246113aa565b500390565b600067ffffffffffffffff80831681851681830481118215151615611750576117506113aa565b0294935050505056fea264697066735822122010fbbd15a7e34bad179e1e1c76d960eabdb9e50d648d6db67ae978db727029b764736f6c634300080d0033";

type TechCancelSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TechCancelSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TechCancelSystem__factory extends ContractFactory {
  constructor(...args: TechCancelSystemConstructorParams) {
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
  ): Promise<TechCancelSystem> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<TechCancelSystem>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): TechCancelSystem {
    return super.attach(address) as TechCancelSystem;
  }
  override connect(signer: Signer): TechCancelSystem__factory {
    return super.connect(signer) as TechCancelSystem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TechCancelSystemInterface {
    return new utils.Interface(_abi) as TechCancelSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TechCancelSystem {
    return new Contract(address, _abi, signerOrProvider) as TechCancelSystem;
  }
}
