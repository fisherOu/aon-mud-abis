/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  DeathTriggerSystem,
  DeathTriggerSystemInterface,
} from "../DeathTriggerSystem";

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
            name: "component",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "entity",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "lastValue",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "newValue",
            type: "bytes",
          },
          {
            internalType: "bool",
            name: "isSet",
            type: "bool",
          },
        ],
        internalType: "struct TriggerInfo",
        name: "triggerInfo",
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
        components: [
          {
            internalType: "uint256",
            name: "component",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "entity",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "lastValue",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "newValue",
            type: "bytes",
          },
          {
            internalType: "bool",
            name: "isSet",
            type: "bool",
          },
        ],
        internalType: "struct TriggerInfo",
        name: "triggerInfo",
        type: "tuple",
      },
    ],
    name: "solveLogic",
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
  "0x60806040523480156200001157600080fd5b506040516200181c3803806200181c833981016040819052620000349162000230565b81818181620000433362000113565b6001600160a01b038116156200005a5780620000bf565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000099573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bf91906200026f565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000107919062000187602090811b6200040617901c565b50505050505062000296565b60006200012a620001f360201b620004971760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022d57600080fd5b50565b600080604083850312156200024457600080fd5b8251620002518162000217565b6020840151909250620002648162000217565b809150509250929050565b6000602082840312156200028257600080fd5b81516200028f8162000217565b9392505050565b61157680620002a66000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c80638da5cb5b116100505780638da5cb5b146100a8578063f2fde38b146100d5578063ffc56da8146100ea57600080fd5b806309c5eabe1461006c57806382781c5114610095575b600080fd5b61007f61007a3660046110b1565b6100fd565b60405161008c919061115c565b60405180910390f35b61007f6100a336600461117d565b610127565b6100b0610138565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161008c565b6100e86100e3366004611239565b61017d565b005b61007f6100f836600461117d565b6101f9565b606060008280602001905181019061011591906112b4565b905061012081610127565b9392505050565b6060610132826101f9565b92915050565b60006101787f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146101ed576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6101f6816104bb565b50565b60208101518151606091907f6c062316985e8e531501d3a588aed06abfad54c545ae238fe2d6f51a6ab9bee814610291576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f696e76616c696420736f7572636500000000000000000000000000000000000060448201526064015b60405180910390fd5b61029a816104c4565b6102a38161079a565b600080546102e79073ffffffffffffffffffffffffffffffffffffffff167f0f2f1f89defcb2e35e7a49b75f5a0777c977a6210b31a42137e9620ef524f0dc610d76565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810184905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015610355573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103799190611360565b156103ff576040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff821690634cc8221590602401600060405180830381600087803b1580156103e657600080fd5b505af11580156103fa573d6000803e3d6000fd5b505050505b5050919050565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6101f681610ec2565b600080546105089073ffffffffffffffffffffffffffffffffffffffff167fd7eb4644b0f312b764e14b10dbe895c6ee4acad8c1eb37a4791309b4d942e427610d76565b6040517ffbdfa1ea0000000000000000000000000000000000000000000000000000000081526004810184905290915060009073ffffffffffffffffffffffffffffffffffffffff83169063fbdfa1ea90602401600060405180830381865afa158015610579573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526105bf919081019061137d565b60008054919250906106079073ffffffffffffffffffffffffffffffffffffffff167fe84ae06d0531147bba573e3e5c6876c59c1ba9645cd7e87eb5141ca18dcfd284610d76565b905060005b8251811015610793578373ffffffffffffffffffffffffffffffffffffffff16634cc8221584838151811061064357610643611423565b60200260200101516040518263ffffffff1660e01b815260040161066991815260200190565b600060405180830381600087803b15801561068357600080fd5b505af1158015610697573d6000803e3d6000fd5b505050508173ffffffffffffffffffffffffffffffffffffffff16639a8536608483815181106106c9576106c9611423565b602002602001015160405180604001604052806040518060400160405280600481526020017f6465616400000000000000000000000000000000000000000000000000000000815250815260200142600a6107249190611481565b67ffffffffffffffff168152506040518363ffffffff1660e01b815260040161074e9291906114ad565b600060405180830381600087803b15801561076857600080fd5b505af115801561077c573d6000803e3d6000fd5b50505050808061078b906114ef565b91505061060c565b5050505050565b600080546107de9073ffffffffffffffffffffffffffffffffffffffff167f2f3c6eb2abe480dcea02a3f0d6883cd4e62a46b8207d85e1ff6f6e5cdee24b7a610d76565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810184905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa15801561084c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108709190611360565b1561098c576040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810183905260009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401602060405180830381865afa1580156108e3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109079190611527565b6040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810185905290915073ffffffffffffffffffffffffffffffffffffffff831690634cc8221590602401600060405180830381600087803b15801561097257600080fd5b505af1158015610986573d6000803e3d6000fd5b50505050505b600080546109d09073ffffffffffffffffffffffffffffffffffffffff167fb58ee6825aedec1d358adc24e0bfee53cd2d268bda2eed874befd69d96060781610d76565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810185905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015610a3e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a629190611360565b15610b7e576040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810184905260009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401602060405180830381865afa158015610ad5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af99190611527565b6040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810186905290915073ffffffffffffffffffffffffffffffffffffffff831690634cc8221590602401600060405180830381600087803b158015610b6457600080fd5b505af1158015610b78573d6000803e3d6000fd5b50505050505b60008054610bc29073ffffffffffffffffffffffffffffffffffffffff167fac076b5f5d1516d2521ec3f10d723c130b0a9f32384857e1697264ee87292ce0610d76565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810186905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015610c30573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c549190611360565b15610d70576040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810185905260009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401602060405180830381865afa158015610cc7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ceb9190611527565b6040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810187905290915073ffffffffffffffffffffffffffffffffffffffff831690634cc8221590602401600060405180830381600087803b158015610d5657600080fd5b505af1158015610d6a573d6000803e3d6000fd5b50505050505b50505050565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015610de6573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610e2c919081019061137d565b90508051600003610e99576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f7420726567697374657265640000000000000000000000000000006044820152606401610288565b610eba81600081518110610eaf57610eaf611423565b602002602001015190565b949350505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460805460405173ffffffffffffffffffffffffffffffffffffffff8481169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160a0810167ffffffffffffffff81118282101715610fc057610fc0610f6e565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561100d5761100d610f6e565b604052919050565b600067ffffffffffffffff82111561102f5761102f610f6e565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261106c57600080fd5b813561107f61107a82611015565b610fc6565b81815284602083860101111561109457600080fd5b816020850160208301376000918101602001919091529392505050565b6000602082840312156110c357600080fd5b813567ffffffffffffffff8111156110da57600080fd5b610eba8482850161105b565b60005b838110156111015781810151838201526020016110e9565b83811115610d705750506000910152565b6000815180845261112a8160208601602086016110e6565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006101206020830184611112565b80151581146101f657600080fd5b60006020828403121561118f57600080fd5b813567ffffffffffffffff808211156111a757600080fd5b9083019060a082860312156111bb57600080fd5b6111c3610f9d565b82358152602083013560208201526040830135828111156111e357600080fd5b6111ef8782860161105b565b60408301525060608301358281111561120757600080fd5b6112138782860161105b565b606083015250608083013592506112298361116f565b6080810192909252509392505050565b60006020828403121561124b57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461012057600080fd5b600082601f83011261128057600080fd5b815161128e61107a82611015565b8181528460208386010111156112a357600080fd5b610eba8260208301602087016110e6565b6000602082840312156112c657600080fd5b815167ffffffffffffffff808211156112de57600080fd5b9083019060a082860312156112f257600080fd5b6112fa610f9d565b825181526020830151602082015260408301518281111561131a57600080fd5b6113268782860161126f565b60408301525060608301518281111561133e57600080fd5b61134a8782860161126f565b606083015250608083015192506112298361116f565b60006020828403121561137257600080fd5b81516101208161116f565b6000602080838503121561139057600080fd5b825167ffffffffffffffff808211156113a857600080fd5b818501915085601f8301126113bc57600080fd5b8151818111156113ce576113ce610f6e565b8060051b91506113df848301610fc6565b81815291830184019184810190888411156113f957600080fd5b938501935b83851015611417578451825293850193908501906113fe565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600067ffffffffffffffff8083168185168083038211156114a4576114a4611452565b01949350505050565b82815260406020820152600082516040808401526114ce6080840182611112565b905067ffffffffffffffff6020850151166060840152809150509392505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361152057611520611452565b5060010190565b60006020828403121561153957600080fd5b505191905056fea2646970667358221220790d266362427af345154e65d74c7d3cc5c48bb846b31a700bdd328097f8effa64736f6c634300080d0033";

type DeathTriggerSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DeathTriggerSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DeathTriggerSystem__factory extends ContractFactory {
  constructor(...args: DeathTriggerSystemConstructorParams) {
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
  ): Promise<DeathTriggerSystem> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<DeathTriggerSystem>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): DeathTriggerSystem {
    return super.attach(address) as DeathTriggerSystem;
  }
  override connect(signer: Signer): DeathTriggerSystem__factory {
    return super.connect(signer) as DeathTriggerSystem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DeathTriggerSystemInterface {
    return new utils.Interface(_abi) as DeathTriggerSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DeathTriggerSystem {
    return new Contract(address, _abi, signerOrProvider) as DeathTriggerSystem;
  }
}
