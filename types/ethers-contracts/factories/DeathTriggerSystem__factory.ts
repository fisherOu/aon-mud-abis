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
  "0x60806040523480156200001157600080fd5b506040516200130038038062001300833981016040819052620000349162000230565b81818181620000433362000113565b6001600160a01b038116156200005a5780620000bf565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000099573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bf91906200026f565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000107919062000187602090811b6200040617901c565b50505050505062000296565b60006200012a620001f360201b620004971760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022d57600080fd5b50565b600080604083850312156200024457600080fd5b8251620002518162000217565b6020840151909250620002648162000217565b809150509250929050565b6000602082840312156200028257600080fd5b81516200028f8162000217565b9392505050565b61105a80620002a66000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c80638da5cb5b116100505780638da5cb5b146100a8578063f2fde38b146100d5578063ffc56da8146100ea57600080fd5b806309c5eabe1461006c57806382781c5114610095575b600080fd5b61007f61007a366004610bd1565b6100fd565b60405161008c9190610c80565b60405180910390f35b61007f6100a3366004610ca1565b610127565b6100b0610138565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161008c565b6100e86100e3366004610d5d565b61017d565b005b61007f6100f8366004610ca1565b6101f9565b60606000828060200190518101906101159190610dd8565b905061012081610127565b9392505050565b6060610132826101f9565b92915050565b60006101787f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146101ed576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6101f6816104bb565b50565b60208101518151606091907f6c062316985e8e531501d3a588aed06abfad54c545ae238fe2d6f51a6ab9bee814610291576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f696e76616c696420736f7572636500000000000000000000000000000000000060448201526064015b60405180910390fd5b61029a816104c4565b6102a381610735565b600080546102e79073ffffffffffffffffffffffffffffffffffffffff167f0f2f1f89defcb2e35e7a49b75f5a0777c977a6210b31a42137e9620ef524f0dc610896565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810184905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015610355573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103799190610e84565b156103ff576040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff821690634cc8221590602401600060405180830381600087803b1580156103e657600080fd5b505af11580156103fa573d6000803e3d6000fd5b505050505b5050919050565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6101f6816109e2565b600080546105089073ffffffffffffffffffffffffffffffffffffffff167fd7eb4644b0f312b764e14b10dbe895c6ee4acad8c1eb37a4791309b4d942e427610896565b6040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810184905290915060009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401602060405180830381865afa158015610579573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061059d9190610ea1565b6040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810185905290915073ffffffffffffffffffffffffffffffffffffffff831690634cc8221590602401600060405180830381600087803b15801561060857600080fd5b505af115801561061c573d6000803e3d6000fd5b505060008054909250610666915073ffffffffffffffffffffffffffffffffffffffff167fe84ae06d0531147bba573e3e5c6876c59c1ba9645cd7e87eb5141ca18dcfd284610896565b6040805160808101825260049181019182527f6465616400000000000000000000000000000000000000000000000000000000606082015290815290915073ffffffffffffffffffffffffffffffffffffffff821690639a853660908490602081016106d342600a610eba565b67ffffffffffffffff168152506040518363ffffffff1660e01b81526004016106fd929190610f0d565b600060405180830381600087803b15801561071757600080fd5b505af115801561072b573d6000803e3d6000fd5b5050505050505050565b600080546107799073ffffffffffffffffffffffffffffffffffffffff167f2f3c6eb2abe480dcea02a3f0d6883cd4e62a46b8207d85e1ff6f6e5cdee24b7a610896565b6040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810184905290915060009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401602060405180830381865afa1580156107ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061080e9190610ea1565b6040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810185905290915073ffffffffffffffffffffffffffffffffffffffff831690634cc8221590602401600060405180830381600087803b15801561087957600080fd5b505af115801561088d573d6000803e3d6000fd5b50505050505050565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015610906573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261094c9190810190610f4f565b905080516000036109b9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f7420726567697374657265640000000000000000000000000000006044820152606401610288565b6109da816000815181106109cf576109cf610ff5565b602002602001015190565b949350505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460805460405173ffffffffffffffffffffffffffffffffffffffff8481169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160a0810167ffffffffffffffff81118282101715610ae057610ae0610a8e565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610b2d57610b2d610a8e565b604052919050565b600067ffffffffffffffff821115610b4f57610b4f610a8e565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f830112610b8c57600080fd5b8135610b9f610b9a82610b35565b610ae6565b818152846020838601011115610bb457600080fd5b816020850160208301376000918101602001919091529392505050565b600060208284031215610be357600080fd5b813567ffffffffffffffff811115610bfa57600080fd5b6109da84828501610b7b565b60005b83811015610c21578181015183820152602001610c09565b83811115610c30576000848401525b50505050565b60008151808452610c4e816020860160208601610c06565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006101206020830184610c36565b80151581146101f657600080fd5b600060208284031215610cb357600080fd5b813567ffffffffffffffff80821115610ccb57600080fd5b9083019060a08286031215610cdf57600080fd5b610ce7610abd565b8235815260208301356020820152604083013582811115610d0757600080fd5b610d1387828601610b7b565b604083015250606083013582811115610d2b57600080fd5b610d3787828601610b7b565b60608301525060808301359250610d4d83610c93565b6080810192909252509392505050565b600060208284031215610d6f57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461012057600080fd5b600082601f830112610da457600080fd5b8151610db2610b9a82610b35565b818152846020838601011115610dc757600080fd5b6109da826020830160208701610c06565b600060208284031215610dea57600080fd5b815167ffffffffffffffff80821115610e0257600080fd5b9083019060a08286031215610e1657600080fd5b610e1e610abd565b8251815260208301516020820152604083015182811115610e3e57600080fd5b610e4a87828601610d93565b604083015250606083015182811115610e6257600080fd5b610e6e87828601610d93565b60608301525060808301519250610d4d83610c93565b600060208284031215610e9657600080fd5b815161012081610c93565b600060208284031215610eb357600080fd5b5051919050565b600067ffffffffffffffff808316818516808303821115610f04577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b01949350505050565b8281526040602082015260008251604080840152610f2e6080840182610c36565b905067ffffffffffffffff6020850151166060840152809150509392505050565b60006020808385031215610f6257600080fd5b825167ffffffffffffffff80821115610f7a57600080fd5b818501915085601f830112610f8e57600080fd5b815181811115610fa057610fa0610a8e565b8060051b9150610fb1848301610ae6565b8181529183018401918481019088841115610fcb57600080fd5b938501935b83851015610fe957845182529385019390850190610fd0565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea264697066735822122003925568b146f931eda8660ea5987fa4e5687b5fe6fee8298086eb0339314aba64736f6c634300080d0033";

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
