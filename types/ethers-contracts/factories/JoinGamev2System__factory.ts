/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  JoinGamev2System,
  JoinGamev2SystemInterface,
} from "../JoinGamev2System";

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
            name: "coordHash",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "radius",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "seed",
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
        internalType: "struct JoinInfo",
        name: "joinInfo",
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
  "0x60806040523480156200001157600080fd5b50604051620017bd380380620017bd83398101604081905262000034916200022c565b818162000041336200010f565b6001600160a01b03811615620000585780620000bd565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000097573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bd91906200026b565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000105919062000183602090811b62000a5e17901c565b5050505062000292565b600062000126620001ef60201b62000aef1760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022957600080fd5b50565b600080604083850312156200024057600080fd5b82516200024d8162000213565b6020840151909250620002608162000213565b809150509250929050565b6000602082840312156200027e57600080fd5b81516200028b8162000213565b9392505050565b61151b80620002a26000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe1461005157806377bde9531461007a5780638da5cb5b1461008d578063f2fde38b146100ba575b600080fd5b61006461005f366004610ddd565b6100cf565b6040516100719190610efb565b60405180910390f35b610064610088366004610f5e565b6100f9565b61009561099d565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100cd6100c8366004611036565b6109e2565b005b60606000828060200190518101906100e79190611098565b90506100f2816100f9565b9392505050565b60008054606091906101419073ffffffffffffffffffffffffffffffffffffffff167fd0deb8af54f5692432398f7f62bf53c9e54e6d6a9b4dbccb012b3fe04ea432d3610b13565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b8152600401606060405180830381865afa15801561018b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101af9190611151565b8051909150156102f25760408051606080820183528551825285830151602080840191909152808701518385015284015190860151608087015160a088015194517f11479fea000000000000000000000000000000000000000000000000000000008152939473ffffffffffffffffffffffffffffffffffffffff909316936311479fea9361024493929187906004016111ea565b602060405180830381865afa158015610261573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610285919061126e565b6102f0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f4661696c656420696e69742070726f6f6620636865636b00000000000000000060448201526064015b60405180910390fd5b505b600080543391906103399073ffffffffffffffffffffffffffffffffffffffff167f8900e57ac2ff61c328bbaa69d2071a542ae5ff48c693375a49fd2937c1ef8332610b13565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810184905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa1580156103a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103cb919061126e565b15610432576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f616c7265616479206a6f696e656400000000000000000000000000000000000060448201526064016102e7565b600080546104769073ffffffffffffffffffffffffffffffffffffffff167f9e0b856941fb70fc9b56c896d5f39a2079c3ed041dbc5e87efbf9c503b354b76610b13565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160e060405180830381865afa1580156104c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104e491906112a1565b9050806080015167ffffffffffffffff1686602001511115801561051a57508060a0015167ffffffffffffffff16866020015111155b610580576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f726164697573206f766572206c696d697400000000000000000000000000000060448201526064016102e7565b600080546105c49073ffffffffffffffffffffffffffffffffffffffff167fdc602e66a6d8c84d0c8d6c4292d80341393a1e04ff02909a12718a4216d3a9f7610b13565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b8152600401608060405180830381865afa15801561060e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106329190611351565b6040517f60fe47b10000000000000000000000000000000000000000000000000000000081526004810186905290915073ffffffffffffffffffffffffffffffffffffffff8416906360fe47b190602401600060405180830381600087803b15801561069d57600080fd5b505af11580156106b1573d6000803e3d6000fd5b50506000546106f9925073ffffffffffffffffffffffffffffffffffffffff1690507fd7eb4644b0f312b764e14b10dbe895c6ee4acad8c1eb37a4791309b4d942e427610b13565b87516040517f1ab06ee500000000000000000000000000000000000000000000000000000000815260048101879052602481019190915273ffffffffffffffffffffffffffffffffffffffff9190911690631ab06ee590604401600060405180830381600087803b15801561076d57600080fd5b505af1158015610781573d6000803e3d6000fd5b50506000546107c9925073ffffffffffffffffffffffffffffffffffffffff1690507fde4b6105f4f699e0bc3e5ad258d64c9f5c9421b67cdf5d64c05b2f4f81d30d04610b13565b6040805160808101825260078183019081527f77617273686970000000000000000000000000000000000000000000000000006060830152815267ffffffffffffffff4216602082015290517f9a85366000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9290921691639a85366091610867918891906004016113ce565b600060405180830381600087803b15801561088157600080fd5b505af1158015610895573d6000803e3d6000fd5b50506000546108dd925073ffffffffffffffffffffffffffffffffffffffff1690507f189eafd1a01543209399086ef2e12962fca648be4826ce2b3eb2e53ed14bf141610b13565b60408051808201825267ffffffffffffffff4281168252845181166020830190815292517f4e6641a9000000000000000000000000000000000000000000000000000000008152600481018990529151811660248301529151909116604482015273ffffffffffffffffffffffffffffffffffffffff9190911690634e6641a990606401600060405180830381600087803b15801561097b57600080fd5b505af115801561098f573d6000803e3d6000fd5b505050505050505050919050565b60006109dd7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610a52576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a5b81610c5f565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015610b83573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610bc99190810190611410565b90508051600003610c36576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f74207265676973746572656400000000000000000000000000000060448201526064016102e7565b610c5781600081518110610c4c57610c4c6114b6565b602002602001015190565b949350505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051610a5b928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160c0810167ffffffffffffffff81118282101715610d6557610d65610d13565b60405290565b6040805190810167ffffffffffffffff81118282101715610d6557610d65610d13565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610dd557610dd5610d13565b604052919050565b60006020808385031215610df057600080fd5b823567ffffffffffffffff80821115610e0857600080fd5b818501915085601f830112610e1c57600080fd5b813581811115610e2e57610e2e610d13565b610e5e847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601610d8e565b91508082528684828501011115610e7457600080fd5b8084840185840137600090820190930192909252509392505050565b6000815180845260005b81811015610eb657602081850181015186830182015201610e9a565b81811115610ec8576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006100f26020830184610e90565b600082601f830112610f1f57600080fd5b610f27610d6b565b806040840185811115610f3957600080fd5b845b81811015610f53578035845260209384019301610f3b565b509095945050505050565b60006101608284031215610f7157600080fd5b610f79610d42565b823581526020808401358183015260408085013581840152610f9e8660608701610f0e565b60608401528560bf860112610fb257600080fd5b610fba610d6b565b80610120870188811115610fcd57600080fd5b60a088015b81811015610ff157610fe48a82610f0e565b8452928501928401610fd2565b508160808701526110028982610f0e565b60a08701525093979650505050505050565b73ffffffffffffffffffffffffffffffffffffffff81168114610a5b57600080fd5b60006020828403121561104857600080fd5b81356100f281611014565b600082601f83011261106457600080fd5b61106c610d6b565b80604084018581111561107e57600080fd5b845b81811015610f53578051845260209384019301611080565b600061016082840312156110ab57600080fd5b6110b3610d42565b8251815260208084015181830152604080850151818401526110d88660608701611053565b60608401528560bf8601126110ec57600080fd5b6110f4610d6b565b8061012087018881111561110757600080fd5b60a088015b8181101561112b5761111e8a82611053565b845292850192840161110c565b508160808701526110028982611053565b8051801515811461114c57600080fd5b919050565b60006060828403121561116357600080fd5b6040516060810181811067ffffffffffffffff8211171561118657611186610d13565b6040526111928361113c565b815260208301516111a281611014565b602082015260408301516111b581611014565b60408201529392505050565b8060005b60028110156111e45781518452602093840193909101906001016111c5565b50505050565b61016081016111f982876111c1565b60408083018660005b6002811015611229576112168383516111c1565b9183019160209190910190600101611202565b5050505061123a60c08301856111c1565b61010082018360005b6003811015611262578151835260209283019290910190600101611243565b50505095945050505050565b60006020828403121561128057600080fd5b6100f28261113c565b805167ffffffffffffffff8116811461114c57600080fd5b600060e082840312156112b357600080fd5b60405160e0810181811067ffffffffffffffff821117156112d6576112d6610d13565b6040526112e283611289565b81526112f060208401611289565b602082015261130160408401611289565b604082015261131260608401611289565b606082015261132360808401611289565b608082015261133460a08401611289565b60a082015261134560c08401611289565b60c08201529392505050565b60006080828403121561136357600080fd5b6040516080810181811067ffffffffffffffff8211171561138657611386610d13565b60405261139283611289565b81526113a060208401611289565b60208201526113b160408401611289565b60408201526113c260608401611289565b60608201529392505050565b82815260406020820152600082516040808401526113ef6080840182610e90565b905067ffffffffffffffff6020850151166060840152809150509392505050565b6000602080838503121561142357600080fd5b825167ffffffffffffffff8082111561143b57600080fd5b818501915085601f83011261144f57600080fd5b81518181111561146157611461610d13565b8060051b9150611472848301610d8e565b818152918301840191848101908884111561148c57600080fd5b938501935b838510156114aa57845182529385019390850190611491565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea26469706673582212203371638ec76d808c9ef77da4fecd31964091550d8fb2c376257b8ca14dc5f45d64736f6c634300080d0033";

type JoinGamev2SystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: JoinGamev2SystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class JoinGamev2System__factory extends ContractFactory {
  constructor(...args: JoinGamev2SystemConstructorParams) {
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
  ): Promise<JoinGamev2System> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<JoinGamev2System>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): JoinGamev2System {
    return super.attach(address) as JoinGamev2System;
  }
  override connect(signer: Signer): JoinGamev2System__factory {
    return super.connect(signer) as JoinGamev2System__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): JoinGamev2SystemInterface {
    return new utils.Interface(_abi) as JoinGamev2SystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): JoinGamev2System {
    return new Contract(address, _abi, signerOrProvider) as JoinGamev2System;
  }
}
