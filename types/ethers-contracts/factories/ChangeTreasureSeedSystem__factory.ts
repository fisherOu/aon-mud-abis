/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  ChangeTreasureSeedSystem,
  ChangeTreasureSeedSystemInterface,
} from "../ChangeTreasureSeedSystem";

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
        name: "salt",
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
  "0x608060405234801561001057600080fd5b506040516109f33803806109f383398101604081905261002f91610218565b818161003a336100ff565b6001600160a01b0381161561004f57806100b1565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801561008d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100b19190610252565b600080546001600160a01b03199081166001600160a01b039384169081179092556001805490911692851692831790556100f69190610170602090811b6103d017901c565b50505050610276565b60006101136101dc60201b6104611760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b038116811461021557600080fd5b50565b6000806040838503121561022b57600080fd5b825161023681610200565b602084015190925061024781610200565b809150509250929050565b60006020828403121561026457600080fd5b815161026f81610200565b9392505050565b61076e806102856000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe146100515780633e991df31461007a5780638da5cb5b1461008d578063f2fde38b146100ba575b600080fd5b61006461005f366004610568565b6100cf565b6040516100719190610637565b60405180910390f35b6100646100883660046106aa565b6100f9565b61009561030f565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100cd6100c83660046106e5565b610354565b005b60606000828060200190518101906100e79190610702565b90506100f2816100f9565b9392505050565b60606000336001546040517f4f27da180000000000000000000000000000000000000000000000000000000081527f6ff1af157fa1e1b9d39dd94ba1bb33ea6a1a0d2f214bb2c71eb60cc093c06fc3600482015291925060009173ffffffffffffffffffffffffffffffffffffffff90911690634f27da1890602401602060405180830381865afa158015610192573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101b6919061071b565b90508073ffffffffffffffffffffffffffffffffffffffff166360fe47b1438487448673ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b8152600401602060405180830381865afa158015610223573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102479190610702565b6040805160208101969096528501939093526060840191909152608083015260a082015260c001604080518083037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe001815290829052805160209091012060e083901b7fffffffff000000000000000000000000000000000000000000000000000000001682526004820152602401600060405180830381600087803b1580156102f057600080fd5b505af1158015610304573d6000803e3d6000fd5b505050505050919050565b600061034f7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146103c4576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103cd81610485565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046080546040516103cd928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60006020828403121561057a57600080fd5b813567ffffffffffffffff8082111561059257600080fd5b818401915084601f8301126105a657600080fd5b8135818111156105b8576105b8610539565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156105fe576105fe610539565b8160405282815287602084870101111561061757600080fd5b826020860160208301376000928101602001929092525095945050505050565b600060208083528351808285015260005b8181101561066457858101830151858201604001528201610648565b81811115610676576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b6000602082840312156106bc57600080fd5b5035919050565b73ffffffffffffffffffffffffffffffffffffffff811681146103cd57600080fd5b6000602082840312156106f757600080fd5b81356100f2816106c3565b60006020828403121561071457600080fd5b5051919050565b60006020828403121561072d57600080fd5b81516100f2816106c356fea2646970667358221220dcbcbc7fa60a0ebdce3f4b2bfa1cb47e2281f69df13fd1f424b31aa99df6743c64736f6c634300080d0033";

type ChangeTreasureSeedSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ChangeTreasureSeedSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ChangeTreasureSeedSystem__factory extends ContractFactory {
  constructor(...args: ChangeTreasureSeedSystemConstructorParams) {
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
  ): Promise<ChangeTreasureSeedSystem> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<ChangeTreasureSeedSystem>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): ChangeTreasureSeedSystem {
    return super.attach(address) as ChangeTreasureSeedSystem;
  }
  override connect(signer: Signer): ChangeTreasureSeedSystem__factory {
    return super.connect(signer) as ChangeTreasureSeedSystem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ChangeTreasureSeedSystemInterface {
    return new utils.Interface(_abi) as ChangeTreasureSeedSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ChangeTreasureSeedSystem {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ChangeTreasureSeedSystem;
  }
}
