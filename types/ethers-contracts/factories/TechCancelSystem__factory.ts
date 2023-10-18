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
        internalType: "struct Info",
        name: "info",
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
  "0x60806040523480156200001157600080fd5b5060405162001c0c38038062001c0c83398101604081905262000034916200022c565b818162000041336200010f565b6001600160a01b03811615620000585780620000bd565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000097573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bd91906200026b565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000105919062000183602090811b6200077117901c565b5050505062000292565b600062000126620001ef60201b620008021760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022957600080fd5b50565b600080604083850312156200024057600080fd5b82516200024d8162000213565b6020840151909250620002608162000213565b809150509250929050565b6000602082840312156200027e57600080fd5b81516200028b8162000213565b9392505050565b61196a80620002a26000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe146100515780638da5cb5b1461007a578063a85bbf29146100a7578063f2fde38b146100ba575b600080fd5b61006461005f3660046113a0565b6100cf565b6040516100719190611453565b60405180910390f35b6100826100f9565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100646100b53660046114c6565b61013e565b6100cd6100c83660046114ea565b6106f5565b005b60606000828060200190518101906100e79190611520565b90506100f28161013e565b9392505050565b60006101397f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b80516060903361014d81610826565b6101b8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f706c61796572206465616400000000000000000000000000000000000000000060448201526064015b60405180910390fd5b600080546101fc9073ffffffffffffffffffffffffffffffffffffffff167f2f3c6eb2abe480dcea02a3f0d6883cd4e62a46b8207d85e1ff6f6e5cdee24b7a6108eb565b905060008060008061020d87610a37565b93509350935093508360000361027f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6e6f2074656368207570646174696e670000000000000000000000000000000060448201526064016101af565b600061028a84610cad565b905060006102988986610f3e565b6000549091506102de9073ffffffffffffffffffffffffffffffffffffffff167fbbcf72a5f12ae7e26ca180b46e62f29286fa93c2be458013c579dd8cc80ca6d96108eb565b73ffffffffffffffffffffffffffffffffffffffff16634cc822158a6040518263ffffffff1660e01b815260040161031891815260200190565b600060405180830381600087803b15801561033257600080fd5b505af1158015610346573d6000803e3d6000fd5b505060005461038e925073ffffffffffffffffffffffffffffffffffffffff1690507f8ea20e77228f35477b65a63714a516a0798d72c5a30798f938784c431ed2c3206108eb565b73ffffffffffffffffffffffffffffffffffffffff16634cc822158a6040518263ffffffff1660e01b81526004016103c891815260200190565b600060405180830381600087803b1580156103e257600080fd5b505af11580156103f6573d6000803e3d6000fd5b5050505060018467ffffffffffffffff16111561052c576000546104509073ffffffffffffffffffffffffffffffffffffffff167f7d3ae0f354d484b474c261c5881c1dd2d1fb4691793800e04688e2d791cd888a6108eb565b73ffffffffffffffffffffffffffffffffffffffff1663a1bd12b28260405180606001604052806001896104849190611573565b67ffffffffffffffff908116825242811660208084019190915260409283018c905282517fffffffff0000000000000000000000000000000000000000000000000000000060e088901b168152600481019590955283518216602486015283015116604484015201516064820152608401600060405180830381600087803b15801561050f57600080fd5b505af1158015610523573d6000803e3d6000fd5b505050506105a1565b60018467ffffffffffffffff1610156105a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f6e6f742076616c6964206e657874206c6576656c00000000000000000000000060448201526064016101af565b600060646105b38460600151876111fa565b8460e0015163ffffffff166105c8919061159c565b6105d291906115d9565b90508773ffffffffffffffffffffffffffffffffffffffff16631ab06ee58a838b73ffffffffffffffffffffffffffffffffffffffff16630ff4c9168e6040518263ffffffff1660e01b815260040161062d91815260200190565b602060405180830381865afa15801561064a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061066e9190611614565b610678919061162d565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815260048101929092526024820152604401600060405180830381600087803b1580156106ce57600080fd5b505af11580156106e2573d6000803e3d6000fd5b5050505050505050505050505050919050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610765576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61076e81611222565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6000805461086a9073ffffffffffffffffffffffffffffffffffffffff167f8900e57ac2ff61c328bbaa69d2071a542ae5ff48c693375a49fd2937c1ef83326108eb565b73ffffffffffffffffffffffffffffffffffffffff1663cccf7a8e836040518263ffffffff1660e01b81526004016108a491815260200190565b602060405180830381865afa1580156108c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e59190611645565b92915050565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa15801561095b573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526109a19190810190611667565b90508051600003610a0e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f74207265676973746572656400000000000000000000000000000060448201526064016101af565b610a2f81600081518110610a2457610a2461170d565b602002602001015190565b949350505050565b600080808080336000805491925090610a869073ffffffffffffffffffffffffffffffffffffffff167f8ea20e77228f35477b65a63714a516a0798d72c5a30798f938784c431ed2c3206108eb565b6000805491925090610ace9073ffffffffffffffffffffffffffffffffffffffff167fbbcf72a5f12ae7e26ca180b46e62f29286fa93c2be458013c579dd8cc80ca6d96108eb565b6040517ffbdfa1ea0000000000000000000000000000000000000000000000000000000081526004810185905290915060009073ffffffffffffffffffffffffffffffffffffffff84169063fbdfa1ea90602401600060405180830381865afa158015610b3f573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610b859190810190611667565b90506000806000805b8451811015610c9a5760008673ffffffffffffffffffffffffffffffffffffffff16630ff4c916878481518110610bc757610bc761170d565b60200260200101516040518263ffffffff1660e01b8152600401610bed91815260200190565b606060405180830381865afa158015610c0a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c2e9190611759565b90508d868381518110610c4357610c4361170d565b602002602001015103610c8757858281518110610c6257610c6261170d565b60200260200101519d5080600001519450806020015193508060400151925050610c9a565b5080610c92816117a0565b915050610b8e565b509a9b919a909950975095505050505050565b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915260008054610d329073ffffffffffffffffffffffffffffffffffffffff167f0804a42a4d152c34a26fdfe2d2072ae2c072cd535f1b631926ae6b6f10156d316108eb565b6040517ffbdfa1ea0000000000000000000000000000000000000000000000000000000081526004810185905290915060009073ffffffffffffffffffffffffffffffffffffffff83169063fbdfa1ea90602401600060405180830381865afa158015610da3573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610de99190810190611667565b6000805491925090610e319073ffffffffffffffffffffffffffffffffffffffff167fcff18fc6e785bccaceeb5098bd1a0e1b9eb64e10612dcefc604d27072aef9b486108eb565b90506000825111610e9e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f746563682067726f757020696e76616c6964000000000000000000000000000060448201526064016101af565b8073ffffffffffffffffffffffffffffffffffffffff16630ff4c91683600081518110610ecd57610ecd61170d565b60200260200101516040518263ffffffff1660e01b8152600401610ef391815260200190565b61010060405180830381865afa158015610f11573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f3591906117ec565b95945050505050565b6000805433908290610f869073ffffffffffffffffffffffffffffffffffffffff167f92acea35713be98645f56aa52c544d79830fb401252476df1d51f7409850d7196108eb565b6000805491925090610fce9073ffffffffffffffffffffffffffffffffffffffff167f7d3ae0f354d484b474c261c5881c1dd2d1fb4691793800e04688e2d791cd888a6108eb565b6040517ffbdfa1ea0000000000000000000000000000000000000000000000000000000081526004810185905290915060009073ffffffffffffffffffffffffffffffffffffffff84169063fbdfa1ea90602401600060405180830381865afa15801561103f573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526110859190810190611667565b905060008060005b83518110156111ec5760008573ffffffffffffffffffffffffffffffffffffffff16630ff4c9168684815181106110c6576110c661170d565b60200260200101516040518263ffffffff1660e01b81526004016110ec91815260200190565b606060405180830381865afa158015611109573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061112d91906118a3565b9050898160400151036111635784828151811061114c5761114c61170d565b6020026020010151935080604001519250506111ec565b6001855161117191906118ed565b82036111d9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4572726f7220696e2067657474696e672054656368496421000000000000000060448201526064016101af565b50806111e4816117a0565b91505061108d565b509098975050505050505050565b6000816112078185611904565b6112119190611904565b67ffffffffffffffff169392505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460805460405161076e928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516020810167ffffffffffffffff81118282101715611328576113286112d6565b60405290565b6040516060810167ffffffffffffffff81118282101715611328576113286112d6565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611398576113986112d6565b604052919050565b600060208083850312156113b357600080fd5b823567ffffffffffffffff808211156113cb57600080fd5b818501915085601f8301126113df57600080fd5b8135818111156113f1576113f16112d6565b611421847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611351565b9150808252868482850101111561143757600080fd5b8084840185840137600090820190930192909252509392505050565b600060208083528351808285015260005b8181101561148057858101830151858201604001528201611464565b81811115611492576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b6000602082840312156114d857600080fd5b6114e0611305565b9135825250919050565b6000602082840312156114fc57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146100f257600080fd5b60006020828403121561153257600080fd5b61153a611305565b9151825250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600067ffffffffffffffff8381169083168181101561159457611594611544565b039392505050565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156115d4576115d4611544565b500290565b60008261160f577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b60006020828403121561162657600080fd5b5051919050565b6000821982111561164057611640611544565b500190565b60006020828403121561165757600080fd5b815180151581146100f257600080fd5b6000602080838503121561167a57600080fd5b825167ffffffffffffffff8082111561169257600080fd5b818501915085601f8301126116a657600080fd5b8151818111156116b8576116b86112d6565b8060051b91506116c9848301611351565b81815291830184019184810190888411156116e357600080fd5b938501935b83851015611701578451825293850193908501906116e8565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b805167ffffffffffffffff8116811461175457600080fd5b919050565b60006060828403121561176b57600080fd5b61177361132e565b825181526117836020840161173c565b60208201526117946040840161173c565b60408201529392505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036117d1576117d1611544565b5060010190565b805163ffffffff8116811461175457600080fd5b600061010080838503121561180057600080fd5b6040519081019067ffffffffffffffff82118183101715611823576118236112d6565b8160405283518152602084015160208201526118416040850161173c565b60408201526118526060850161173c565b60608201526118636080850161173c565b608082015261187460a0850161173c565b60a082015261188560c085016117d8565b60c082015261189660e085016117d8565b60e0820152949350505050565b6000606082840312156118b557600080fd5b6118bd61132e565b6118c68361173c565b81526118d46020840161173c565b6020820152604083015160408201528091505092915050565b6000828210156118ff576118ff611544565b500390565b600067ffffffffffffffff8083168185168183048111821515161561192b5761192b611544565b0294935050505056fea26469706673582212201f2a6321028dc30e280babef24b259e2ac503142262bbd05c20889602eeb3cea64736f6c634300080d0033";

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
