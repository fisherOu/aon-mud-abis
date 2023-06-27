/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Movev2System, Movev2SystemInterface } from "../Movev2System";

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
            name: "width",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "height",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "seed",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "oldHash",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "distance",
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
        internalType: "struct MoveInfo",
        name: "moveInfo",
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
  "0x60806040523480156200001157600080fd5b50604051620019d5380380620019d583398101604081905262000034916200022c565b818162000041336200010f565b6001600160a01b03811615620000585780620000bd565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000097573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bd91906200026b565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000105919062000183602090811b62000b0317901c565b5050505062000292565b600062000126620001ef60201b62000b941760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022957600080fd5b50565b600080604083850312156200024057600080fd5b82516200024d8162000213565b6020840151909250620002608162000213565b809150509250929050565b6000602082840312156200027e57600080fd5b81516200028b8162000213565b9392505050565b61173380620002a26000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe1461005157806336a1b8291461007a5780638da5cb5b1461008d578063f2fde38b146100ba575b600080fd5b61006461005f366004610e83565b6100cf565b6040516100719190610f36565b60405180910390f35b610064610088366004611048565b6100f9565b610095610a42565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100cd6100c83660046110fa565b610a87565b005b60606000828060200190518101906100e791906111ab565b90506100f2816100f9565b9392505050565b60008054606091906101419073ffffffffffffffffffffffffffffffffffffffff167fd0deb8af54f5692432398f7f62bf53c9e54e6d6a9b4dbccb012b3fe04ea432d3610bb8565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160c060405180830381865afa15801561018b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101af9190611245565b8051909150156103005760006040518060c0016040528085608001518152602001856000015181526020018560600151815260200185602001518152602001856040015181526020018560a001518152509050816040015173ffffffffffffffffffffffffffffffffffffffff1663f398789b8560c001518660e00151876101000151856040518563ffffffff1660e01b81526004016102529493929190611317565b602060405180830381865afa15801561026f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610293919061139b565b6102fe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4661696c6564207069636b75702070726f6f6620636865636b0000000000000060448201526064015b60405180910390fd5b505b600080543391906103479073ffffffffffffffffffffffffffffffffffffffff167f8900e57ac2ff61c328bbaa69d2071a542ae5ff48c693375a49fd2937c1ef8332610bb8565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810184905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa1580156103b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103d9919061139b565b61043f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6e6f74206a6f696e65640000000000000000000000000000000000000000000060448201526064016102f5565b600080546104839073ffffffffffffffffffffffffffffffffffffffff167f189eafd1a01543209399086ef2e12962fca648be4826ce2b3eb2e53ed14bf141610bb8565b60008054919250906104cb9073ffffffffffffffffffffffffffffffffffffffff167fdc602e66a6d8c84d0c8d6c4292d80341393a1e04ff02909a12718a4216d3a9f7610bb8565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b8152600401608060405180830381865afa158015610515573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061053991906113ce565b6040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810186905290915060009073ffffffffffffffffffffffffffffffffffffffff841690630ff4c916906024016040805180830381865afa1580156105a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105cd919061144b565b90506000816020015167ffffffffffffffff1611806106125750816020015167ffffffffffffffff1681600001514261060691906114d5565b67ffffffffffffffff16115b610678576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f206d6f766520706f696e747300000000000000000000000000000000000060448201526064016102f5565b816060015167ffffffffffffffff168860a0015111156106f4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6d6f766520746f6f20666172000000000000000000000000000000000000000060448201526064016102f5565b600080546107389073ffffffffffffffffffffffffffffffffffffffff167f9e0b856941fb70fc9b56c896d5f39a2079c3ed041dbc5e87efbf9c503b354b76610bb8565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160e060405180830381865afa158015610782573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a691906114fe565b9050806080015167ffffffffffffffff168960200151111580156107dc57508060a0015167ffffffffffffffff16896040015111155b610842576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f726164697573206f766572206c696d697400000000000000000000000000000060448201526064016102f5565b6000546108859073ffffffffffffffffffffffffffffffffffffffff167fd7eb4644b0f312b764e14b10dbe895c6ee4acad8c1eb37a4791309b4d942e427610bb8565b89516040517f1ab06ee500000000000000000000000000000000000000000000000000000000815260048101899052602481019190915273ffffffffffffffffffffffffffffffffffffffff9190911690631ab06ee590604401600060405180830381600087803b1580156108f957600080fd5b505af115801561090d573d6000803e3d6000fd5b50505050600a8960a001511115610a36576020830151825160009160019161093590426114d5565b61093f91906115ae565b846020015161094e91906115fc565b61095891906114d5565b9050836040015167ffffffffffffffff168167ffffffffffffffff161115610981575060408301515b60408051808201825267ffffffffffffffff42811682528381166020830190815292517f4e6641a9000000000000000000000000000000000000000000000000000000008152600481018b90529151811660248301529151909116604482015273ffffffffffffffffffffffffffffffffffffffff861690634e6641a990606401600060405180830381600087803b158015610a1c57600080fd5b505af1158015610a30573d6000803e3d6000fd5b50505050505b50505050505050919050565b6000610a827f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610af7576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b0081610d04565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015610c28573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610c6e9190810190611628565b90508051600003610cdb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f74207265676973746572656400000000000000000000000000000060448201526064016102f5565b610cfc81600081518110610cf157610cf16116ce565b602002602001015190565b949350505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051610b00928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610120810167ffffffffffffffff81118282101715610e0b57610e0b610db8565b60405290565b6040805190810167ffffffffffffffff81118282101715610e0b57610e0b610db8565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610e7b57610e7b610db8565b604052919050565b60006020808385031215610e9657600080fd5b823567ffffffffffffffff80821115610eae57600080fd5b818501915085601f830112610ec257600080fd5b813581811115610ed457610ed4610db8565b610f04847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601610e34565b91508082528684828501011115610f1a57600080fd5b8084840185840137600090820190930192909252509392505050565b600060208083528351808285015260005b81811015610f6357858101830151858201604001528201610f47565b81811115610f75576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b600082601f830112610fba57600080fd5b610fc2610e11565b806040840185811115610fd457600080fd5b845b81811015610fee578035845260209384019301610fd6565b509095945050505050565b600082601f83011261100a57600080fd5b611012610e11565b80608084018581111561102457600080fd5b845b81811015610fee576110388782610fa9565b8452602090930192604001611026565b60006101c0828403121561105b57600080fd5b611063610de7565b823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a08201526110a68460c08501610fa9565b60c08201526101006110ba85828601610ff9565b60e08301526110cd856101808601610fa9565b908201529392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114610b0057600080fd5b60006020828403121561110c57600080fd5b81356100f2816110d8565b600082601f83011261112857600080fd5b611130610e11565b80604084018581111561114257600080fd5b845b81811015610fee578051845260209384019301611144565b600082601f83011261116d57600080fd5b611175610e11565b80608084018581111561118757600080fd5b845b81811015610fee5761119b8782611117565b8452602090930192604001611189565b60006101c082840312156111be57600080fd5b6111c6610de7565b825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a08201526112098460c08501611117565b60c082015261010061121d8582860161115c565b60e08301526110cd856101808601611117565b8051801515811461124057600080fd5b919050565b600060c0828403121561125757600080fd5b60405160c0810181811067ffffffffffffffff8211171561127a5761127a610db8565b60405261128683611230565b81526020830151611296816110d8565b602082015260408301516112a9816110d8565b604082015260608301516112bc816110d8565b606082015260808301516112cf816110d8565b608082015260a08301516112e2816110d8565b60a08201529392505050565b8060005b60028110156113115781518452602093840193909101906001016112f2565b50505050565b6101c0810161132682876112ee565b60408083018660005b6002811015611356576113438383516112ee565b918301916020919091019060010161132f565b5050505061136760c08301856112ee565b61010082018360005b600681101561138f578151835260209283019290910190600101611370565b50505095945050505050565b6000602082840312156113ad57600080fd5b6100f282611230565b805167ffffffffffffffff8116811461124057600080fd5b6000608082840312156113e057600080fd5b6040516080810181811067ffffffffffffffff8211171561140357611403610db8565b60405261140f836113b6565b815261141d602084016113b6565b602082015261142e604084016113b6565b604082015261143f606084016113b6565b60608201529392505050565b60006040828403121561145d57600080fd5b6040516040810181811067ffffffffffffffff8211171561148057611480610db8565b60405261148c836113b6565b815261149a602084016113b6565b60208201529392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600067ffffffffffffffff838116908316818110156114f6576114f66114a6565b039392505050565b600060e0828403121561151057600080fd5b60405160e0810181811067ffffffffffffffff8211171561153357611533610db8565b60405261153f836113b6565b815261154d602084016113b6565b602082015261155e604084016113b6565b604082015261156f606084016113b6565b6060820152611580608084016113b6565b608082015261159160a084016113b6565b60a08201526115a260c084016113b6565b60c08201529392505050565b600067ffffffffffffffff808416806115f0577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b92169190910492915050565b600067ffffffffffffffff80831681851680830382111561161f5761161f6114a6565b01949350505050565b6000602080838503121561163b57600080fd5b825167ffffffffffffffff8082111561165357600080fd5b818501915085601f83011261166757600080fd5b81518181111561167957611679610db8565b8060051b915061168a848301610e34565b81815291830184019184810190888411156116a457600080fd5b938501935b838510156116c2578451825293850193908501906116a9565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea26469706673582212200b21aaa1790ade05c36ed665d631ab34ac67f6eb53b853c41e7e452ffef11cda64736f6c634300080d0033";

type Movev2SystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Movev2SystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Movev2System__factory extends ContractFactory {
  constructor(...args: Movev2SystemConstructorParams) {
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
  ): Promise<Movev2System> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<Movev2System>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): Movev2System {
    return super.attach(address) as Movev2System;
  }
  override connect(signer: Signer): Movev2System__factory {
    return super.connect(signer) as Movev2System__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Movev2SystemInterface {
    return new utils.Interface(_abi) as Movev2SystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Movev2System {
    return new Contract(address, _abi, signerOrProvider) as Movev2System;
  }
}
