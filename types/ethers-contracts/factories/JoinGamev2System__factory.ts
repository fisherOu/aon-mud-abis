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
  "0x60806040523480156200001157600080fd5b50604051620019683803806200196883398101604081905262000034916200022c565b818162000041336200010f565b6001600160a01b03811615620000585780620000bd565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000097573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bd91906200026b565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000105919062000183602090811b62000bf117901c565b5050505062000292565b600062000126620001ef60201b62000c821760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022957600080fd5b50565b600080604083850312156200024057600080fd5b82516200024d8162000213565b6020840151909250620002608162000213565b809150509250929050565b6000602082840312156200027e57600080fd5b81516200028b8162000213565b9392505050565b6116c680620002a26000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe14610051578063602acf551461007a5780638da5cb5b1461008d578063f2fde38b146100ba575b600080fd5b61006461005f366004610f70565b6100cf565b604051610071919061108e565b60405180910390f35b6100646100883660046110f1565b6100f9565b610095610b30565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100cd6100c83660046111d3565b610b75565b005b60606000828060200190518101906100e79190611235565b90506100f2816100f9565b9392505050565b60008054606091906101419073ffffffffffffffffffffffffffffffffffffffff167fd0deb8af54f5692432398f7f62bf53c9e54e6d6a9b4dbccb012b3fe04ea432d3610ca6565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160e060405180830381865afa15801561018b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101af91906112f8565b8051909150156102eb576000604051806080016040528085600001518152602001856060015181526020018560200151815260200185604001518152509050816020015173ffffffffffffffffffffffffffffffffffffffff16635fe8c13b85608001518660a001518760c00151856040518563ffffffff1660e01b815260040161023d94939291906113bf565b602060405180830381865afa15801561025a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061027e9190611443565b6102e9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f4661696c656420696e69742070726f6f6620636865636b00000000000000000060448201526064015b60405180910390fd5b505b600080543391906103329073ffffffffffffffffffffffffffffffffffffffff167f8900e57ac2ff61c328bbaa69d2071a542ae5ff48c693375a49fd2937c1ef8332610ca6565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810184905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa1580156103a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103c49190611443565b1561042b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f616c7265616479206a6f696e656400000000000000000000000000000000000060448201526064016102e0565b6000805461046f9073ffffffffffffffffffffffffffffffffffffffff167f9e0b856941fb70fc9b56c896d5f39a2079c3ed041dbc5e87efbf9c503b354b76610ca6565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160e060405180830381865afa1580156104b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104dd9190611476565b9050806080015167ffffffffffffffff1686602001511115801561051357508060a0015167ffffffffffffffff16866040015111155b610579576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f726164697573206f766572206c696d697400000000000000000000000000000060448201526064016102e0565b600080546105bd9073ffffffffffffffffffffffffffffffffffffffff167fdc602e66a6d8c84d0c8d6c4292d80341393a1e04ff02909a12718a4216d3a9f7610ca6565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b8152600401608060405180830381865afa158015610607573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061062b91906114fc565b6040517f60fe47b10000000000000000000000000000000000000000000000000000000081526004810186905290915073ffffffffffffffffffffffffffffffffffffffff8416906360fe47b190602401600060405180830381600087803b15801561069657600080fd5b505af11580156106aa573d6000803e3d6000fd5b50506000546106f2925073ffffffffffffffffffffffffffffffffffffffff1690507fd7eb4644b0f312b764e14b10dbe895c6ee4acad8c1eb37a4791309b4d942e427610ca6565b87516040517f1ab06ee500000000000000000000000000000000000000000000000000000000815260048101879052602481019190915273ffffffffffffffffffffffffffffffffffffffff9190911690631ab06ee590604401600060405180830381600087803b15801561076657600080fd5b505af115801561077a573d6000803e3d6000fd5b50506000546107c2925073ffffffffffffffffffffffffffffffffffffffff1690507fde4b6105f4f699e0bc3e5ad258d64c9f5c9421b67cdf5d64c05b2f4f81d30d04610ca6565b6040805160808101825260078183019081527f77617273686970000000000000000000000000000000000000000000000000006060830152815267ffffffffffffffff4216602082015290517f9a85366000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9290921691639a8536609161086091889190600401611579565b600060405180830381600087803b15801561087a57600080fd5b505af115801561088e573d6000803e3d6000fd5b50506000546108d6925073ffffffffffffffffffffffffffffffffffffffff1690507f6c062316985e8e531501d3a588aed06abfad54c545ae238fe2d6f51a6ab9bee8610ca6565b6040517f1ab06ee5000000000000000000000000000000000000000000000000000000008152600481018690526002602482015273ffffffffffffffffffffffffffffffffffffffff9190911690631ab06ee590604401600060405180830381600087803b15801561094757600080fd5b505af115801561095b573d6000803e3d6000fd5b50506000546109a3925073ffffffffffffffffffffffffffffffffffffffff1690507f2f3c6eb2abe480dcea02a3f0d6883cd4e62a46b8207d85e1ff6f6e5cdee24b7a610ca6565b6040517f1ab06ee5000000000000000000000000000000000000000000000000000000008152600481018690526000602482015273ffffffffffffffffffffffffffffffffffffffff9190911690631ab06ee590604401600060405180830381600087803b158015610a1457600080fd5b505af1158015610a28573d6000803e3d6000fd5b5050600054610a70925073ffffffffffffffffffffffffffffffffffffffff1690507f189eafd1a01543209399086ef2e12962fca648be4826ce2b3eb2e53ed14bf141610ca6565b60408051808201825267ffffffffffffffff4281168252845181166020830190815292517f4e6641a9000000000000000000000000000000000000000000000000000000008152600481018990529151811660248301529151909116604482015273ffffffffffffffffffffffffffffffffffffffff9190911690634e6641a990606401600060405180830381600087803b158015610b0e57600080fd5b505af1158015610b22573d6000803e3d6000fd5b505050505050505050919050565b6000610b707f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610be5576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610bee81610df2565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015610d16573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610d5c91908101906115bb565b90508051600003610dc9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f74207265676973746572656400000000000000000000000000000060448201526064016102e0565b610dea81600081518110610ddf57610ddf611661565b602002602001015190565b949350505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051610bee928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff81118282101715610ef857610ef8610ea6565b60405290565b6040805190810167ffffffffffffffff81118282101715610ef857610ef8610ea6565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610f6857610f68610ea6565b604052919050565b60006020808385031215610f8357600080fd5b823567ffffffffffffffff80821115610f9b57600080fd5b818501915085601f830112610faf57600080fd5b813581811115610fc157610fc1610ea6565b610ff1847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601610f21565b9150808252868482850101111561100757600080fd5b8084840185840137600090820190930192909252509392505050565b6000815180845260005b818110156110495760208185018101518683018201520161102d565b8181111561105b576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006100f26020830184611023565b600082601f8301126110b257600080fd5b6110ba610efe565b8060408401858111156110cc57600080fd5b845b818110156110e65780358452602093840193016110ce565b509095945050505050565b6000610180828403121561110457600080fd5b61110c610ed5565b8235815260208084013581830152604080850135818401526060850135606084015261113b86608087016110a1565b60808401528560df86011261114f57600080fd5b611157610efe565b8061014087018881111561116a57600080fd5b60c088015b8181101561118e576111818a826110a1565b845292850192840161116f565b508160a087015261119f89826110a1565b60c08701525093979650505050505050565b73ffffffffffffffffffffffffffffffffffffffff81168114610bee57600080fd5b6000602082840312156111e557600080fd5b81356100f2816111b1565b600082601f83011261120157600080fd5b611209610efe565b80604084018581111561121b57600080fd5b845b818110156110e657805184526020938401930161121d565b6000610180828403121561124857600080fd5b611250610ed5565b8251815260208084015181830152604080850151818401526060850151606084015261127f86608087016111f0565b60808401528560df86011261129357600080fd5b61129b610efe565b806101408701888111156112ae57600080fd5b60c088015b818110156112d2576112c58a826111f0565b84529285019284016112b3565b508160a087015261119f89826111f0565b805180151581146112f357600080fd5b919050565b600060e0828403121561130a57600080fd5b611312610ed5565b61131b836112e3565b8152602083015161132b816111b1565b6020820152604083015161133e816111b1565b60408201526060830151611351816111b1565b60608201526080830151611364816111b1565b608082015260a0830151611377816111b1565b60a082015260c083015161138a816111b1565b60c08201529392505050565b8060005b60028110156113b957815184526020938401939091019060010161139a565b50505050565b61018081016113ce8287611396565b60408083018660005b60028110156113fe576113eb838351611396565b91830191602091909101906001016113d7565b5050505061140f60c0830185611396565b61010082018360005b6004811015611437578151835260209283019290910190600101611418565b50505095945050505050565b60006020828403121561145557600080fd5b6100f2826112e3565b805167ffffffffffffffff811681146112f357600080fd5b600060e0828403121561148857600080fd5b611490610ed5565b6114998361145e565b81526114a76020840161145e565b60208201526114b86040840161145e565b60408201526114c96060840161145e565b60608201526114da6080840161145e565b60808201526114eb60a0840161145e565b60a082015261138a60c0840161145e565b60006080828403121561150e57600080fd5b6040516080810181811067ffffffffffffffff8211171561153157611531610ea6565b60405261153d8361145e565b815261154b6020840161145e565b602082015261155c6040840161145e565b604082015261156d6060840161145e565b60608201529392505050565b828152604060208201526000825160408084015261159a6080840182611023565b905067ffffffffffffffff6020850151166060840152809150509392505050565b600060208083850312156115ce57600080fd5b825167ffffffffffffffff808211156115e657600080fd5b818501915085601f8301126115fa57600080fd5b81518181111561160c5761160c610ea6565b8060051b915061161d848301610f21565b818152918301840191848101908884111561163757600080fd5b938501935b838510156116555784518252938501939085019061163c565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea2646970667358221220f5e789aaa35a1f6e6a4ed0efb7abe70cdeb79e71326bc35079a17f734944a09464736f6c634300080d0033";

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
