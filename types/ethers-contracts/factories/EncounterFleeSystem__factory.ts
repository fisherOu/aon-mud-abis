/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  EncounterFleeSystem,
  EncounterFleeSystemInterface,
} from "../EncounterFleeSystem";

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
        name: "encounterId",
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
  "0x608060405234801561001057600080fd5b50604051610bdb380380610bdb83398101604081905261002f91610218565b818161003a336100ff565b6001600160a01b0381161561004f57806100b1565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801561008d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100b19190610252565b600080546001600160a01b03199081166001600160a01b039384169081179092556001805490911692851692831790556100f69190610170602090811b61038a17901c565b50505050610276565b60006101136101dc60201b61041b1760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b038116811461021557600080fd5b50565b6000806040838503121561022b57600080fd5b825161023681610200565b602084015190925061024781610200565b809150509250929050565b60006020828403121561026457600080fd5b815161026f81610200565b9392505050565b610956806102856000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe146100515780633e991df31461007a5780638da5cb5b1461008d578063f2fde38b146100ba575b600080fd5b61006461005f3660046106bd565b6100cf565b6040516100719190610770565b60405180910390f35b6100646100883660046107e3565b6100f9565b6100956102c9565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100cd6100c83660046107fc565b61030e565b005b60606000828060200190518101906100e79190610832565b90506100f2816100f9565b9392505050565b6000805460609133916101429073ffffffffffffffffffffffffffffffffffffffff167fce3cf5e60d6c466c18a0c94c2578092629e99bd45d1ae7462b45c6a485bc115061043f565b6040517f0ff4c91600000000000000000000000000000000000000000000000000000000815260048101849052909150849073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401602060405180830381865afa1580156101b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d69190610832565b14610242576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f6e6f7420696e207468697320656e636f756e746572000000000000000000000060448201526064015b60405180910390fd5b6040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff821690634cc8221590602401600060405180830381600087803b1580156102aa57600080fd5b505af11580156102be573d6000803e3d6000fd5b505050505050919050565b60006103097f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff16331461037e576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103878161058b565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa1580156104af573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526104f5919081019061084b565b90508051600003610562576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f7420726567697374657265640000000000000000000000000000006044820152606401610239565b61058381600081518110610578576105786108f1565b602002602001015190565b949350505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051610387928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156106b5576106b561063f565b604052919050565b600060208083850312156106d057600080fd5b823567ffffffffffffffff808211156106e857600080fd5b818501915085601f8301126106fc57600080fd5b81358181111561070e5761070e61063f565b61073e847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8401160161066e565b9150808252868482850101111561075457600080fd5b8084840185840137600090820190930192909252509392505050565b600060208083528351808285015260005b8181101561079d57858101830151858201604001528201610781565b818111156107af576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b6000602082840312156107f557600080fd5b5035919050565b60006020828403121561080e57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146100f257600080fd5b60006020828403121561084457600080fd5b5051919050565b6000602080838503121561085e57600080fd5b825167ffffffffffffffff8082111561087657600080fd5b818501915085601f83011261088a57600080fd5b81518181111561089c5761089c61063f565b8060051b91506108ad84830161066e565b81815291830184019184810190888411156108c757600080fd5b938501935b838510156108e5578451825293850193908501906108cc565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea26469706673582212205408ef14438c41e935faf25f3612124f5b85b6c422ecfacf9e3fcf3aed52d25d64736f6c634300080d0033";

type EncounterFleeSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EncounterFleeSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EncounterFleeSystem__factory extends ContractFactory {
  constructor(...args: EncounterFleeSystemConstructorParams) {
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
  ): Promise<EncounterFleeSystem> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<EncounterFleeSystem>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): EncounterFleeSystem {
    return super.attach(address) as EncounterFleeSystem;
  }
  override connect(signer: Signer): EncounterFleeSystem__factory {
    return super.connect(signer) as EncounterFleeSystem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EncounterFleeSystemInterface {
    return new utils.Interface(_abi) as EncounterFleeSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EncounterFleeSystem {
    return new Contract(address, _abi, signerOrProvider) as EncounterFleeSystem;
  }
}
