/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  ResourceDevSystem,
  ResourceDevSystemInterface,
} from "../ResourceDevSystem";

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
            name: "entityId",
            type: "uint256",
          },
          {
            internalType: "uint32",
            name: "resourceType",
            type: "uint32",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct ResourceDevInfo",
        name: "resourceDevInfo",
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
  "0x60806040523480156200001157600080fd5b50604051620014063803806200140683398101604081905262000034916200022c565b818162000041336200010f565b6001600160a01b03811615620000585780620000bd565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000097573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bd91906200026b565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000105919062000183602090811b6200051217901c565b5050505062000292565b600062000126620001ef60201b620005a31760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022957600080fd5b50565b600080604083850312156200024057600080fd5b82516200024d8162000213565b6020840151909250620002608162000213565b809150509250929050565b6000602082840312156200027e57600080fd5b81516200028b8162000213565b9392505050565b61116480620002a26000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe146100515780637acb01e51461007a5780638da5cb5b1461008d578063f2fde38b146100ba575b600080fd5b61006461005f366004610bf5565b6100cf565b6040516100719190610ca8565b60405180910390f35b610064610088366004610d2d565b6100f9565b610095610451565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100cd6100c8366004610d93565b610496565b005b60606000828060200190518101906100e79190610db0565b90506100f2816100f9565b9392505050565b6001546040517f4f27da180000000000000000000000000000000000000000000000000000000081527f04cdab6fd9d9bc2fa036f31a2cdf8d756e6e674d18202703a6e084cd0766bd4d600482015260609160009173ffffffffffffffffffffffffffffffffffffffff90911690634f27da1890602401602060405180830381865afa15801561018d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101b19190610df4565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061021f9190610e11565b805190915061028f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f6e6f7420696e20646576206d6f6465000000000000000000000000000000000060448201526064015b60405180910390fd5b826020015163ffffffff1660000361037b57600080546102e59073ffffffffffffffffffffffffffffffffffffffff167f2f3c6eb2abe480dcea02a3f0d6883cd4e62a46b8207d85e1ff6f6e5cdee24b7a6105c7565b845160408087015190517f1ab06ee50000000000000000000000000000000000000000000000000000000081526004810192909252602482015290915073ffffffffffffffffffffffffffffffffffffffff821690631ab06ee590604401600060405180830381600087803b15801561035d57600080fd5b505af1158015610371573d6000803e3d6000fd5b505050505061044b565b826020015163ffffffff166001036103d157600080546102e59073ffffffffffffffffffffffffffffffffffffffff167fb58ee6825aedec1d358adc24e0bfee53cd2d268bda2eed874befd69d960607816105c7565b826020015163ffffffff1660020361042757600080546102e59073ffffffffffffffffffffffffffffffffffffffff167fac076b5f5d1516d2521ec3f10d723c130b0a9f32384857e1697264ee87292ce06105c7565b826020015163ffffffff1660030361044b5761044b83600001518460400151610713565b50919050565b60006104917f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610506576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61050f81610a9a565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015610637573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261067d9190810190610e62565b905080516000036106ea576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f7420726567697374657265640000000000000000000000000000006044820152606401610286565b61070b8160008151811061070057610700610f08565b602002602001015190565b949350505050565b600080546107579073ffffffffffffffffffffffffffffffffffffffff167f189eafd1a01543209399086ef2e12962fca648be4826ce2b3eb2e53ed14bf1416105c7565b600080549192509061079f9073ffffffffffffffffffffffffffffffffffffffff167f3c3102d48c6d31b1a70ddf8b23d300c759379d6506f2ef221cf3056d7c54dca76105c7565b6040517f720354530000000000000000000000000000000000000000000000000000000081526004810186905290915060009073ffffffffffffffffffffffffffffffffffffffff831690637203545390602401602060405180830381865afa158015610810573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108349190610f37565b600080549192509061087c9073ffffffffffffffffffffffffffffffffffffffff167fdc602e66a6d8c84d0c8d6c4292d80341393a1e04ff02909a12718a4216d3a9f76105c7565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160a060405180830381865afa1580156108c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108ea9190610f77565b6040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810188905290915060009073ffffffffffffffffffffffffffffffffffffffff861690630ff4c916906024016040805180830381865afa15801561095a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097e9190611001565b60208301518151919250600091610995904261108b565b61099f91906110b4565b82602001516109ae9190611102565b90506109ba8782611102565b905063ffffffff841667ffffffffffffffff821611156109dd575063ffffffff83165b60408051808201825267ffffffffffffffff42811682528381166020830190815292517f4e6641a9000000000000000000000000000000000000000000000000000000008152600481018c90529151811660248301529151909116604482015273ffffffffffffffffffffffffffffffffffffffff871690634e6641a990606401600060405180830381600087803b158015610a7857600080fd5b505af1158015610a8c573d6000803e3d6000fd5b505050505050505050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460805460405161050f928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715610ba057610ba0610b4e565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610bed57610bed610b4e565b604052919050565b60006020808385031215610c0857600080fd5b823567ffffffffffffffff80821115610c2057600080fd5b818501915085601f830112610c3457600080fd5b813581811115610c4657610c46610b4e565b610c76847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601610ba6565b91508082528684828501011115610c8c57600080fd5b8084840185840137600090820190930192909252509392505050565b600060208083528351808285015260005b81811015610cd557858101830151858201604001528201610cb9565b81811115610ce7576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b63ffffffff8116811461050f57600080fd5b600060608284031215610d3f57600080fd5b610d47610b7d565b823581526020830135610d5981610d1b565b60208201526040928301359281019290925250919050565b73ffffffffffffffffffffffffffffffffffffffff8116811461050f57600080fd5b600060208284031215610da557600080fd5b81356100f281610d71565b600060608284031215610dc257600080fd5b610dca610b7d565b825181526020830151610ddc81610d1b565b60208201526040928301519281019290925250919050565b600060208284031215610e0657600080fd5b81516100f281610d71565b600060208284031215610e2357600080fd5b6040516020810181811067ffffffffffffffff82111715610e4657610e46610b4e565b60405282518015158114610e5957600080fd5b81529392505050565b60006020808385031215610e7557600080fd5b825167ffffffffffffffff80821115610e8d57600080fd5b818501915085601f830112610ea157600080fd5b815181811115610eb357610eb3610b4e565b8060051b9150610ec4848301610ba6565b8181529183018401918481019088841115610ede57600080fd5b938501935b83851015610efc57845182529385019390850190610ee3565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060208284031215610f4957600080fd5b81518060030b81146100f257600080fd5b805167ffffffffffffffff81168114610f7257600080fd5b919050565b600060a08284031215610f8957600080fd5b60405160a0810181811067ffffffffffffffff82111715610fac57610fac610b4e565b604052610fb883610f5a565b8152610fc660208401610f5a565b6020820152610fd760408401610f5a565b6040820152610fe860608401610f5a565b6060820152608083015160808201528091505092915050565b60006040828403121561101357600080fd5b6040516040810181811067ffffffffffffffff8211171561103657611036610b4e565b60405261104283610f5a565b815261105060208401610f5a565b60208201529392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600067ffffffffffffffff838116908316818110156110ac576110ac61105c565b039392505050565b600067ffffffffffffffff808416806110f6577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b92169190910492915050565b600067ffffffffffffffff8083168185168083038211156111255761112561105c565b0194935050505056fea26469706673582212201390edac7f116ba4654fe1cedc2c359218e906c5d2aec74aca3c539751e019f764736f6c634300080d0033";

type ResourceDevSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ResourceDevSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ResourceDevSystem__factory extends ContractFactory {
  constructor(...args: ResourceDevSystemConstructorParams) {
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
  ): Promise<ResourceDevSystem> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<ResourceDevSystem>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): ResourceDevSystem {
    return super.attach(address) as ResourceDevSystem;
  }
  override connect(signer: Signer): ResourceDevSystem__factory {
    return super.connect(signer) as ResourceDevSystem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ResourceDevSystemInterface {
    return new utils.Interface(_abi) as ResourceDevSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ResourceDevSystem {
    return new Contract(address, _abi, signerOrProvider) as ResourceDevSystem;
  }
}
