/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  UnboundTreasureSystem,
  UnboundTreasureSystemInterface,
} from "../UnboundTreasureSystem";

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
        name: "treasureId",
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
  "0x60806040523480156200001157600080fd5b50604051620015a6380380620015a683398101604081905262000034916200022c565b818162000041336200010f565b6001600160a01b03811615620000585780620000bd565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000097573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bd91906200026b565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000105919062000183602090811b6200065d17901c565b5050505062000292565b600062000126620001ef60201b620006ee1760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022957600080fd5b50565b600080604083850312156200024057600080fd5b82516200024d8162000213565b6020840151909250620002608162000213565b809150509250929050565b6000602082840312156200027e57600080fd5b81516200028b8162000213565b9392505050565b61130480620002a26000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe146100515780633e991df31461007a5780638da5cb5b1461008d578063f2fde38b146100ba575b600080fd5b61006461005f366004610dba565b6100cf565b6040516100719190610e6a565b60405180910390f35b610064610088366004610ebb565b6100f9565b61009561059c565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100cd6100c8366004610ed4565b6105e1565b005b60606000828060200190518101906100e79190610f0a565b90506100f2816100f9565b9392505050565b6000805460609133916101429073ffffffffffffffffffffffffffffffffffffffff167f28b9f73e6b271728535a5e2b6da73f60f1fa049519ed11d9203e38922757cf06610712565b600080549192509061018a9073ffffffffffffffffffffffffffffffffffffffff167f86de2523be15c705f9f8dd1d4bb281bde3a61929d7080e6cb8cc6f383a0a143c610712565b60008054919250906101d29073ffffffffffffffffffffffffffffffffffffffff167f65188156108ab445e8ddb20e749f49402ca97dc723f07951b1c4a011dd8e1166610712565b73ffffffffffffffffffffffffffffffffffffffff16630ff4c916876040518263ffffffff1660e01b815260040161020c91815260200190565b600060405180830381865afa158015610229573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261026f9190810190610faa565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810188905290915073ffffffffffffffffffffffffffffffffffffffff84169063cccf7a8e90602401602060405180830381865afa1580156102dd573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061030191906110b2565b801561039b57506040517f0ff4c91600000000000000000000000000000000000000000000000000000000815260048101879052849073ffffffffffffffffffffffffffffffffffffffff851690630ff4c91690602401602060405180830381865afa158015610375573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103999190610f0a565b145b610406576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6e6f742076616c6964207472656173757265000000000000000000000000000060448201526064015b60405180910390fd5b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810187905273ffffffffffffffffffffffffffffffffffffffff83169063cccf7a8e90602401602060405180830381865afa158015610471573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061049591906110b2565b6104fb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f6e6f7420626f756e64656420796574000000000000000000000000000000000060448201526064016103fd565b806040015160ff16600003610513576105138661085e565b6040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810187905273ffffffffffffffffffffffffffffffffffffffff831690634cc8221590602401600060405180830381600087803b15801561057b57600080fd5b505af115801561058f573d6000803e3d6000fd5b5050505050505050919050565b60006105dc7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610651576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61065a81610c18565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015610782573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526107c891908101906110cd565b90508051600003610835576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f74207265676973746572656400000000000000000000000000000060448201526064016103fd565b6108568160008151811061084b5761084b611173565b602002602001015190565b949350505050565b600080543391906108a59073ffffffffffffffffffffffffffffffffffffffff167f2d1944d7c92d4cf7892c9f8d3312e879c70e4e7904208d77f458b7bf7c952e19610712565b60008054919250906108ed9073ffffffffffffffffffffffffffffffffffffffff167f1f5722521ba251ca87967835668e1714c5eb024990bbd3f5f1dcdc98dc7cbbd0610712565b6040517ffbdfa1ea0000000000000000000000000000000000000000000000000000000081526004810185905290915060009073ffffffffffffffffffffffffffffffffffffffff84169063fbdfa1ea90602401600060405180830381865afa15801561095e573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526109a491908101906110cd565b905060005b8151811015610c105760008373ffffffffffffffffffffffffffffffffffffffff16630ff4c9168484815181106109e2576109e2611173565b60200260200101516040518263ffffffff1660e01b8152600401610a0891815260200190565b600060405180830381865afa158015610a25573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610a6b91908101906111a2565b6040517f74726561737572650000000000000000000000000000000000000000000000006020820152909150602801604051602081830303815290604052805190602001208160400151604051602001610ac59190611253565b60405160208183030381529060405280519060200120148015610aeb5750868160600151145b15610bfd578473ffffffffffffffffffffffffffffffffffffffff16634cc82215848481518110610b1e57610b1e611173565b60200260200101516040518263ffffffff1660e01b8152600401610b4491815260200190565b600060405180830381600087803b158015610b5e57600080fd5b505af1158015610b72573d6000803e3d6000fd5b505050508373ffffffffffffffffffffffffffffffffffffffff16634cc82215848481518110610ba457610ba4611173565b60200260200101516040518263ffffffff1660e01b8152600401610bca91815260200190565b600060405180830381600087803b158015610be457600080fd5b505af1158015610bf8573d6000803e3d6000fd5b505050505b5080610c088161126f565b9150506109a9565b505050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460805460405161065a928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610100810167ffffffffffffffff81118282101715610d1f57610d1f610ccc565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610d6c57610d6c610ccc565b604052919050565b600067ffffffffffffffff821115610d8e57610d8e610ccc565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600060208284031215610dcc57600080fd5b813567ffffffffffffffff811115610de357600080fd5b8201601f81018413610df457600080fd5b8035610e07610e0282610d74565b610d25565b818152856020838501011115610e1c57600080fd5b81602084016020830137600091810160200191909152949350505050565b60005b83811015610e55578181015183820152602001610e3d565b83811115610e64576000848401525b50505050565b6020815260008251806020840152610e89816040850160208701610e3a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b600060208284031215610ecd57600080fd5b5035919050565b600060208284031215610ee657600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146100f257600080fd5b600060208284031215610f1c57600080fd5b5051919050565b600082601f830112610f3457600080fd5b8151610f42610e0282610d74565b818152846020838601011115610f5757600080fd5b610856826020830160208701610e3a565b805160ff81168114610f7957600080fd5b919050565b805167ffffffffffffffff81168114610f7957600080fd5b805163ffffffff81168114610f7957600080fd5b600060208284031215610fbc57600080fd5b815167ffffffffffffffff80821115610fd457600080fd5b908301906101008286031215610fe957600080fd5b610ff1610cfb565b82518281111561100057600080fd5b61100c87828601610f23565b82525060208301518281111561102157600080fd5b61102d87828601610f23565b60208301525061103f60408401610f68565b604082015261105060608401610f68565b606082015261106160808401610f7e565b608082015261107260a08401610f7e565b60a082015261108360c08401610f96565b60c082015261109460e08401610f7e565b60e082015295945050505050565b80518015158114610f7957600080fd5b6000602082840312156110c457600080fd5b6100f2826110a2565b600060208083850312156110e057600080fd5b825167ffffffffffffffff808211156110f857600080fd5b818501915085601f83011261110c57600080fd5b81518181111561111e5761111e610ccc565b8060051b915061112f848301610d25565b818152918301840191848101908884111561114957600080fd5b938501935b838510156111675784518252938501939085019061114e565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000602082840312156111b457600080fd5b815167ffffffffffffffff808211156111cc57600080fd5b9083019061010082860312156111e157600080fd5b6111e9610cfb565b825181526111f960208401610f96565b602082015260408301518281111561121057600080fd5b61121c87828601610f23565b604083015250606083015160608201526080830151608082015261124260a084016110a2565b60a082015261108360c08401610f7e565b60008251611265818460208701610e3a565b9190910192915050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036112c7577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b506001019056fea26469706673582212201e53c713e68c9b1007c8ecbcc4091302de306b0b9473122a7ef5132c2951a95d64736f6c634300080d0033";

type UnboundTreasureSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UnboundTreasureSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UnboundTreasureSystem__factory extends ContractFactory {
  constructor(...args: UnboundTreasureSystemConstructorParams) {
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
  ): Promise<UnboundTreasureSystem> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<UnboundTreasureSystem>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): UnboundTreasureSystem {
    return super.attach(address) as UnboundTreasureSystem;
  }
  override connect(signer: Signer): UnboundTreasureSystem__factory {
    return super.connect(signer) as UnboundTreasureSystem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UnboundTreasureSystemInterface {
    return new utils.Interface(_abi) as UnboundTreasureSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UnboundTreasureSystem {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as UnboundTreasureSystem;
  }
}
