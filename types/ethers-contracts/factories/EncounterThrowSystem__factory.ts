/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  EncounterThrowSystem,
  EncounterThrowSystemInterface,
} from "../EncounterThrowSystem";

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
      {
        internalType: "uint256",
        name: "monsterId",
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
  "0x60806040523480156200001157600080fd5b50604051620012ab380380620012ab83398101604081905262000034916200022c565b818162000041336200010f565b6001600160a01b03811615620000585780620000bd565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000097573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bd91906200026b565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000105919062000183602090811b6200095517901c565b5050505062000292565b600062000126620001ef60201b620009e61760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022957600080fd5b50565b600080604083850312156200024057600080fd5b82516200024d8162000213565b6020840151909250620002608162000213565b809150509250929050565b6000602082840312156200027e57600080fd5b81516200028b8162000213565b9392505050565b61100980620002a26000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe146100515780638da5cb5b1461007a578063915657fb146100a7578063f2fde38b146100ba575b600080fd5b61006461005f366004610c80565b6100cf565b6040516100719190610d33565b60405180910390f35b6100826100fe565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100646100b5366004610da6565b610143565b6100cd6100c8366004610dc8565b6108d9565b005b6060600080838060200190518101906100e89190610e05565b915091506100f68282610143565b949350505050565b600061013e7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b60008054606091339161018c9073ffffffffffffffffffffffffffffffffffffffff167fce3cf5e60d6c466c18a0c94c2578092629e99bd45d1ae7462b45c6a485bc1150610a0a565b6040517f0ff4c91600000000000000000000000000000000000000000000000000000000815260048101849052909150859073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401602060405180830381865afa1580156101fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102209190610e29565b1461028c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f6e6f7420696e207468697320656e636f756e746572000000000000000000000060448201526064015b60405180910390fd5b6040517f0ff4c91600000000000000000000000000000000000000000000000000000000815260048101859052859073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401602060405180830381865afa1580156102f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061031d9190610e29565b14610384576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f6d6f6e73746572206e6f7420696e207468697320656e636f756e7465720000006044820152606401610283565b600080546103c89073ffffffffffffffffffffffffffffffffffffffff167fa4f0c65f7e06d34f8ffe24c1d7bdcdb9e73b1d07702f650b38c22b90f1781065610a0a565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810188905290915060009073ffffffffffffffffffffffffffffffffffffffff83169063cccf7a8e90602401602060405180830381865afa158015610439573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061045d9190610e42565b6104685760006104f7565b6040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810188905273ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401602060405180830381865afa1580156104d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104f79190610e29565b905073ffffffffffffffffffffffffffffffffffffffff8216631ab06ee58861051f84610e64565b9350836040518363ffffffff1660e01b8152600401610548929190918252602082015260400190565b600060405180830381600087803b15801561056257600080fd5b505af1158015610576573d6000803e3d6000fd5b505060408051602081018b905290810187905260608101899052608081018490524460a08201526000925060c0019050604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012090506105e9600282610ec3565b6000036107c457600080546106349073ffffffffffffffffffffffffffffffffffffffff167faf90be6cd7aa92d6569a9ae629178b74e1b0fbdd1097c27ec1dfffd2dc4c7540610a0a565b6040517f1ab06ee5000000000000000000000000000000000000000000000000000000008152600481018a90526024810188905290915073ffffffffffffffffffffffffffffffffffffffff821690631ab06ee590604401600060405180830381600087803b1580156106a657600080fd5b505af11580156106ba573d6000803e3d6000fd5b50506040517f4cc82215000000000000000000000000000000000000000000000000000000008152600481018b905273ffffffffffffffffffffffffffffffffffffffff88169250634cc822159150602401600060405180830381600087803b15801561072657600080fd5b505af115801561073a573d6000803e3d6000fd5b50506040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810189905273ffffffffffffffffffffffffffffffffffffffff88169250634cc822159150602401600060405180830381600087803b1580156107a657600080fd5b505af11580156107ba573d6000803e3d6000fd5b50505050506108ce565b60028211156108ce576040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810188905273ffffffffffffffffffffffffffffffffffffffff851690634cc8221590602401600060405180830381600087803b15801561083557600080fd5b505af1158015610849573d6000803e3d6000fd5b50506040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810188905273ffffffffffffffffffffffffffffffffffffffff87169250634cc822159150602401600060405180830381600087803b1580156108b557600080fd5b505af11580156108c9573d6000803e3d6000fd5b505050505b505050505092915050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610949576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61095281610b4e565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015610a7a573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610ac09190810190610efe565b90508051600003610b2d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f7420726567697374657265640000000000000000000000000000006044820152606401610283565b6100f681600081518110610b4357610b43610fa4565b602002602001015190565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051610952928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610c7857610c78610c02565b604052919050565b60006020808385031215610c9357600080fd5b823567ffffffffffffffff80821115610cab57600080fd5b818501915085601f830112610cbf57600080fd5b813581811115610cd157610cd1610c02565b610d01847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601610c31565b91508082528684828501011115610d1757600080fd5b8084840185840137600090820190930192909252509392505050565b600060208083528351808285015260005b81811015610d6057858101830151858201604001528201610d44565b81811115610d72576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b60008060408385031215610db957600080fd5b50508035926020909101359150565b600060208284031215610dda57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610dfe57600080fd5b9392505050565b60008060408385031215610e1857600080fd5b505080516020909101519092909150565b600060208284031215610e3b57600080fd5b5051919050565b600060208284031215610e5457600080fd5b81518015158114610dfe57600080fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610ebc577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b600082610ef9577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500690565b60006020808385031215610f1157600080fd5b825167ffffffffffffffff80821115610f2957600080fd5b818501915085601f830112610f3d57600080fd5b815181811115610f4f57610f4f610c02565b8060051b9150610f60848301610c31565b8181529183018401918481019088841115610f7a57600080fd5b938501935b83851015610f9857845182529385019390850190610f7f565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea26469706673582212208d2e545b72b69eac56161c0710800f800455dcee3635ba3b91f754c8a28f0ead64736f6c634300080d0033";

type EncounterThrowSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EncounterThrowSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EncounterThrowSystem__factory extends ContractFactory {
  constructor(...args: EncounterThrowSystemConstructorParams) {
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
  ): Promise<EncounterThrowSystem> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<EncounterThrowSystem>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): EncounterThrowSystem {
    return super.attach(address) as EncounterThrowSystem;
  }
  override connect(signer: Signer): EncounterThrowSystem__factory {
    return super.connect(signer) as EncounterThrowSystem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EncounterThrowSystemInterface {
    return new utils.Interface(_abi) as EncounterThrowSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EncounterThrowSystem {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as EncounterThrowSystem;
  }
}
