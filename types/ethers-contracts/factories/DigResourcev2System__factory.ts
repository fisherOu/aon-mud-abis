/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  DigResourcev2System,
  DigResourcev2SystemInterface,
} from "../DigResourcev2System";

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
            name: "realHash",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "fogHash",
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
            name: "terrainSeed",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "fogSeed",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "resourceSeed",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "terrainPerlin",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "resourcePerlin",
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
          {
            internalType: "uint256[]",
            name: "powNonces",
            type: "uint256[]",
          },
        ],
        internalType: "struct DigInfo",
        name: "digInfo",
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
  "0x60806040523480156200001157600080fd5b5060405162002d8e38038062002d8e83398101604081905262000034916200022c565b818162000041336200010f565b6001600160a01b03811615620000585780620000bd565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000097573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bd91906200026b565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000105919062000183602090811b6200099117901c565b5050505062000292565b600062000126620001ef60201b62000a221760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022957600080fd5b50565b600080604083850312156200024057600080fd5b82516200024d8162000213565b6020840151909250620002608162000213565b809150509250929050565b6000602082840312156200027e57600080fd5b81516200028b8162000213565b9392505050565b612aec80620002a26000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe146100515780638da5cb5b1461007a578063af356f11146100a7578063f2fde38b146100ba575b600080fd5b61006461005f366004611d31565b6100cf565b6040516100719190611de4565b60405180910390f35b6100826100f9565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100646100b5366004611f85565b61013e565b6100cd6100c83660046120ad565b610915565b005b60606000828060200190518101906100e791906121b9565b90506100f28161013e565b9392505050565b60006101397f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b60008054606091906101869073ffffffffffffffffffffffffffffffffffffffff167fd0deb8af54f5692432398f7f62bf53c9e54e6d6a9b4dbccb012b3fe04ea432d3610a46565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040161014060405180830381865afa1580156101d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101f591906122cf565b8051909150156103685760006040518061012001604052808560000151815260200185602001518152602001856080015181526020018560a0015181526020018560c0015181526020018560e001518152602001856101000151815260200185604001518152602001856060015181525090508160e0015173ffffffffffffffffffffffffffffffffffffffff1663c542c93b856101200151866101400151876101600151856040518563ffffffff1660e01b81526004016102ba94939291906123ba565b602060405180830381865afa1580156102d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102fb919061243e565b610366576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4661696c6564207265736f757263652070726f6f6620636865636b000000000060448201526064015b60405180910390fd5b505b60005433906103ad9073ffffffffffffffffffffffffffffffffffffffff167fd7eb4644b0f312b764e14b10dbe895c6ee4acad8c1eb37a4791309b4d942e427610a46565b73ffffffffffffffffffffffffffffffffffffffff16630ff4c916826040518263ffffffff1660e01b81526004016103e791815260200190565b602060405180830381865afa158015610404573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104289190612459565b846020015114610494576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f6e6f74207374616e64696e67206f6e207265736f757263650000000000000000604482015260640161035d565b600080546104d89073ffffffffffffffffffffffffffffffffffffffff167f9e0b856941fb70fc9b56c896d5f39a2079c3ed041dbc5e87efbf9c503b354b76610a46565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160e060405180830381865afa158015610522573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610546919061248a565b9050806080015167ffffffffffffffff1685604001511115801561057c57508060a0015167ffffffffffffffff16856060015111155b6105e2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f726164697573206f766572206c696d6974000000000000000000000000000000604482015260640161035d565b806000015167ffffffffffffffff16816020015167ffffffffffffffff16106106c457611d4c8560e00151101580156106315750805161062390600261266b565b855161062f91906126b0565b155b8015610659575060008160200151600261064b919061266b565b865161065791906126b0565b115b6106bf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6e6f207265736f7572636520746f206469670000000000000000000000000000604482015260640161035d565b610756565b611d4c8560e00151101580156106f0575080516106e290600261266b565b85516106ee91906126b0565b155b610756576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6e6f207265736f7572636520746f206469670000000000000000000000000000604482015260640161035d565b61076885600001518660a00151610b94565b6020850151600080546107b19073ffffffffffffffffffffffffffffffffffffffff167fe364070e7addf383981cab98a86215b0a227507d32346ce1205f3e07167055c8610a46565b905060008060006107c7858b610100015161110f565b92509250925060006107e38b602001518c6101800151846116d7565b90508084101561084f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f72656d61696e2076616c756520746f6f206c6f77000000000000000000000000604482015260640161035d565b6108628b602001518c6101800151611a05565b8473ffffffffffffffffffffffffffffffffffffffff166384491fff876040518060600160405280858961089691906126c4565b81526020016108a586896126db565b81526020014267ffffffffffffffff168152506040518363ffffffff1660e01b81526004016108d59291906126f3565b600060405180830381600087803b1580156108ef57600080fd5b505af1158015610903573d6000803e3d6000fd5b50505050505050505050505050919050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610985576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61098e81611b6b565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015610ab6573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610afc9190810190612725565b90508051600003610b69576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f742072656769737465726564000000000000000000000000000000604482015260640161035d565b610b8a81600081518110610b7f57610b7f61275a565b602002602001015190565b9150505b92915050565b60008054610bd89073ffffffffffffffffffffffffffffffffffffffff167f4b1ac4c3aa37732e927cbff52c019e9fbdad0f3e454031afaefd319a3dc66ce4610a46565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810185905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015610c46573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c6a919061243e565b15610eb0576040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810184905260009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401606060405180830381865afa158015610cdd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d01919061279d565b90508263ffffffff16816000015163ffffffff16148015610d525750806040015180610d5257508060400151158015610d5257504267ffffffffffffffff16816020015167ffffffffffffffff1610155b610db8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f666f67207365656420696e76616c696400000000000000000000000000000000604482015260640161035d565b8263ffffffff16816000015163ffffffff16148015610dd8575080604001515b15610de35750505050565b6040805160608101825263ffffffff8581168252600060208301908152600183850190815293517f951f165900000000000000000000000000000000000000000000000000000000815260048101899052925190911660248301525167ffffffffffffffff16604482015290511515606482015273ffffffffffffffffffffffffffffffffffffffff83169063951f165990608401600060405180830381600087803b158015610e9257600080fd5b505af1158015610ea6573d6000803e3d6000fd5b5050505050505050565b6001546040517f4f27da180000000000000000000000000000000000000000000000000000000081527fd65d260f5f5c04658319eb649c1b2668791985f80e1dc9150523f9df6efd57b4600482015263ffffffff84169173ffffffffffffffffffffffffffffffffffffffff1690634f27da1890602401602060405180830381865afa158015610f44573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f689190612809565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b8152600401602060405180830381865afa158015610fb2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fd69190612826565b63ffffffff1614611043576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f666f67207365656420696e76616c696400000000000000000000000000000000604482015260640161035d565b6040805160608101825263ffffffff8481168252600060208301908152600183850190815293517f951f165900000000000000000000000000000000000000000000000000000000815260048101889052925190911660248301525167ffffffffffffffff16604482015290511515606482015273ffffffffffffffffffffffffffffffffffffffff82169063951f165990608401600060405180830381600087803b1580156110f257600080fd5b505af1158015611106573d6000803e3d6000fd5b50505050505050565b600080548190819081906111599073ffffffffffffffffffffffffffffffffffffffff167fedfbc254303008e09cc3e514d4150bac7c69acbeb4ac0177f668a82648a4119e610a46565b60008054919250906111a19073ffffffffffffffffffffffffffffffffffffffff167fe364070e7addf383981cab98a86215b0a227507d32346ce1205f3e07167055c8610a46565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810189905260009650869550859450909150839060019073ffffffffffffffffffffffffffffffffffffffff85169063cccf7a8e90602401602060405180830381865afa15801561121e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611242919061243e565b61148e576000805461128a9073ffffffffffffffffffffffffffffffffffffffff167f449046c6526dd477102b464b5eeec34aaf8161a18f2ba1757f71638ac037f72f610a46565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160e060405180830381865afa1580156112d4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112f89190612852565b602081015181519192509061130e9082906126c4565b611318908b6128d2565b61132291906126db565b606082015160408301519194509061133b9082906128e6565b6020830151835161134c91906126c4565b611356908c6126b0565b6113609190612909565b61136a919061292b565b60ff1695508060a001518160a0015182608001516113889190612950565b8260600151836040015161139c91906128e6565b60ff16836020015184600001516113b391906126c4565b6113bd908d6126b0565b6113c791906126b0565b6113d19190612979565b6113db91906129a0565b604080516060810182528581526020810189905267ffffffffffffffff83168183015290517f84491fff00000000000000000000000000000000000000000000000000000000815291935073ffffffffffffffffffffffffffffffffffffffff8716916384491fff91611453918e91906004016126f3565b600060405180830381600087803b15801561146d57600080fd5b505af1158015611481573d6000803e3d6000fd5b5050505082975050611536565b6040517f0ff4c916000000000000000000000000000000000000000000000000000000008152600481018a905260009073ffffffffffffffffffffffffffffffffffffffff861690630ff4c91690602401606060405180830381865afa1580156114fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115209190612a2f565b8051602082015160409092015191975093509150505b6040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481018a905273ffffffffffffffffffffffffffffffffffffffff84169063cccf7a8e90602401602060405180830381865afa1580156115a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115c5919061243e565b156116cc576040517f0ff4c916000000000000000000000000000000000000000000000000000000008152600481018a905260009073ffffffffffffffffffffffffffffffffffffffff851690630ff4c91690602401606060405180830381865afa158015611638573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061165c9190612a2f565b805160208201519099509750905067ffffffffffffffff8216156116ca5760008282604001514261168d9190612950565b6116979190612a4b565b67ffffffffffffffff169050836116ae828b6126db565b106116bb578398506116c8565b6116c5818a6126db565b98505b505b505b505050509250925092565b60008054819061171d9073ffffffffffffffffffffffffffffffffffffffff167f449046c6526dd477102b464b5eeec34aaf8161a18f2ba1757f71638ac037f72f610a46565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160e060405180830381865afa158015611767573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061178b9190612852565b845160c0820151919250908111156117ff576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f706f774e6f6e636573206f766572206c696d6974000000000000000000000000604482015260640161035d565b600080546118439073ffffffffffffffffffffffffffffffffffffffff167f9274ed4310537239c4fa8297f7ce72f5452f785d00b8745f8408aa546020abc9610a46565b905060005b828110156119fa5760008782815181106118645761186461275a565b602002602001015190506000898260405160200161188c929190918252602082015260400190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012090506118cf886002612a72565b6118d990826126b0565b15801561197257506040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810182905273ffffffffffffffffffffffffffffffffffffffff85169063cccf7a8e90602401602060405180830381865afa15801561194c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611970919061243e565b155b6119d8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f706f772076616c756520696e76616c6964000000000000000000000000000000604482015260640161035d565b6119e38760016126db565b9650505080806119f290612a7e565b915050611848565b505050509392505050565b60008054611a499073ffffffffffffffffffffffffffffffffffffffff167f9274ed4310537239c4fa8297f7ce72f5452f785d00b8745f8408aa546020abc9610a46565b905060005b8251811015611b65576000838281518110611a6b57611a6b61275a565b6020026020010151905060008582604051602001611a93929190918252602082015260400190565b604080518083037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00181529082905280516020909101207f1ab06ee50000000000000000000000000000000000000000000000000000000082526004820181905260248201889052915073ffffffffffffffffffffffffffffffffffffffff851690631ab06ee590604401600060405180830381600087803b158015611b3857600080fd5b505af1158015611b4c573d6000803e3d6000fd5b5050505050508080611b5d90612a7e565b915050611a4e565b50505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460805460405161098e928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516101a0810167ffffffffffffffff81118282101715611c7257611c72611c1f565b60405290565b604051610140810167ffffffffffffffff81118282101715611c7257611c72611c1f565b60405160e0810167ffffffffffffffff81118282101715611c7257611c72611c1f565b6040805190810167ffffffffffffffff81118282101715611c7257611c72611c1f565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611d2957611d29611c1f565b604052919050565b60006020808385031215611d4457600080fd5b823567ffffffffffffffff80821115611d5c57600080fd5b818501915085601f830112611d7057600080fd5b813581811115611d8257611d82611c1f565b611db2847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611ce2565b91508082528684828501011115611dc857600080fd5b8084840185840137600090820190930192909252509392505050565b600060208083528351808285015260005b81811015611e1157858101830151858201604001528201611df5565b81811115611e23576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b600082601f830112611e6857600080fd5b611e70611cbf565b806040840185811115611e8257600080fd5b845b81811015611e9c578035845260209384019301611e84565b509095945050505050565b600082601f830112611eb857600080fd5b611ec0611cbf565b806080840185811115611ed257600080fd5b845b81811015611e9c57611ee68782611e57565b8452602090930192604001611ed4565b600067ffffffffffffffff821115611f1057611f10611c1f565b5060051b60200190565b600082601f830112611f2b57600080fd5b81356020611f40611f3b83611ef6565b611ce2565b82815260059290921b84018101918181019086841115611f5f57600080fd5b8286015b84811015611f7a5780358352918301918301611f63565b509695505050505050565b600060208284031215611f9757600080fd5b813567ffffffffffffffff80821115611faf57600080fd5b908301906102408286031215611fc457600080fd5b611fcc611c4e565b823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a082015260c083013560c082015260e083013560e082015261010080840135818301525061012061203187828601611e57565b9082015261016061204487858301611ea7565b610140830152612058876101e08601611e57565b908201526102208301358281111561206f57600080fd5b61207b87828601611f1a565b6101808301525095945050505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461098e57600080fd5b6000602082840312156120bf57600080fd5b81356100f28161208b565b600082601f8301126120db57600080fd5b6120e3611cbf565b8060408401858111156120f557600080fd5b845b81811015611e9c5780518452602093840193016120f7565b600082601f83011261212057600080fd5b612128611cbf565b80608084018581111561213a57600080fd5b845b81811015611e9c5761214e87826120ca565b845260209093019260400161213c565b600082601f83011261216f57600080fd5b8151602061217f611f3b83611ef6565b82815260059290921b8401810191818101908684111561219e57600080fd5b8286015b84811015611f7a57805183529183019183016121a2565b6000602082840312156121cb57600080fd5b815167ffffffffffffffff808211156121e357600080fd5b9083019061024082860312156121f857600080fd5b612200611c4e565b825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120612265878286016120ca565b908201526101606122788785830161210f565b61014083015261228c876101e086016120ca565b90820152610220830151828111156122a357600080fd5b61207b8782860161215e565b805180151581146122bf57600080fd5b919050565b80516122bf8161208b565b600061014082840312156122e257600080fd5b6122ea611c78565b6122f3836122af565b8152612301602084016122c4565b6020820152612312604084016122c4565b6040820152612323606084016122c4565b6060820152612334608084016122c4565b608082015261234560a084016122c4565b60a082015261235660c084016122c4565b60c082015261236760e084016122c4565b60e082015261010061237a8185016122c4565b9082015261012061238c8482016122c4565b908201529392505050565b8060005b6002811015611b6557815184526020938401939091019060010161239b565b61022081016123c98287612397565b60408083018660005b60028110156123f9576123e6838351612397565b91830191602091909101906001016123d2565b5050505061240a60c0830185612397565b61010082018360005b6009811015612432578151835260209283019290910190600101612413565b50505095945050505050565b60006020828403121561245057600080fd5b6100f2826122af565b60006020828403121561246b57600080fd5b5051919050565b805167ffffffffffffffff811681146122bf57600080fd5b600060e0828403121561249c57600080fd5b6124a4611c9c565b6124ad83612472565b81526124bb60208401612472565b60208201526124cc60408401612472565b60408201526124dd60608401612472565b60608201526124ee60808401612472565b60808201526124ff60a08401612472565b60a082015261251060c08401612472565b60c08201529392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600181815b808511156125a457817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482111561258a5761258a61251c565b8085161561259757918102915b93841c9390800290612550565b509250929050565b6000826125bb57506001610b8e565b816125c857506000610b8e565b81600181146125de57600281146125e857612604565b6001915050610b8e565b60ff8411156125f9576125f961251c565b50506001821b610b8e565b5060208310610133831016604e8410600b8410161715612627575081810a610b8e565b612631838361254b565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211156126635761266361251c565b029392505050565b60006100f267ffffffffffffffff8416836125ac565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000826126bf576126bf612681565b500490565b6000828210156126d6576126d661251c565b500390565b600082198211156126ee576126ee61251c565b500190565b828152608081016100f26020830184805182526020808201519083015260409081015167ffffffffffffffff16910152565b60006020828403121561273757600080fd5b815167ffffffffffffffff81111561274e57600080fd5b610b8a8482850161215e565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b805163ffffffff811681146122bf57600080fd5b6000606082840312156127af57600080fd5b6040516060810181811067ffffffffffffffff821117156127d2576127d2611c1f565b6040526127de83612789565b81526127ec60208401612472565b60208201526127fd604084016122af565b60408201529392505050565b60006020828403121561281b57600080fd5b81516100f28161208b565b60006020828403121561283857600080fd5b6100f282612789565b805160ff811681146122bf57600080fd5b600060e0828403121561286457600080fd5b61286c611c9c565b825181526020830151602082015261288660408401612841565b604082015261289760608401612841565b60608201526128a860808401612472565b60808201526128b960a08401612472565b60a082015260c083015160c08201528091505092915050565b6000826128e1576128e1612681565b500690565b600060ff821660ff8416808210156129005761290061251c565b90039392505050565b600060ff83168061291c5761291c612681565b8060ff84160691505092915050565b600060ff821660ff84168060ff038211156129485761294861251c565b019392505050565b600067ffffffffffffffff838116908316818110156129715761297161251c565b039392505050565b600067ffffffffffffffff8084168061299457612994612681565b92169190910692915050565b600067ffffffffffffffff8083168185168083038211156129c3576129c361251c565b01949350505050565b6000606082840312156129de57600080fd5b6040516060810181811067ffffffffffffffff82111715612a0157612a01611c1f565b80604052508091508251815260208301516020820152612a2360408401612472565b60408201525092915050565b600060608284031215612a4157600080fd5b6100f283836129cc565b600067ffffffffffffffff80841680612a6657612a66612681565b92169190910492915050565b60006100f283836125ac565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612aaf57612aaf61251c565b506001019056fea2646970667358221220dc9dd4975aee616f363aabeefdb80ca91c7536e77c69b9124a3eef36e8d95d7064736f6c634300080d0033";

type DigResourcev2SystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DigResourcev2SystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DigResourcev2System__factory extends ContractFactory {
  constructor(...args: DigResourcev2SystemConstructorParams) {
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
  ): Promise<DigResourcev2System> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<DigResourcev2System>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): DigResourcev2System {
    return super.attach(address) as DigResourcev2System;
  }
  override connect(signer: Signer): DigResourcev2System__factory {
    return super.connect(signer) as DigResourcev2System__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DigResourcev2SystemInterface {
    return new utils.Interface(_abi) as DigResourcev2SystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DigResourcev2System {
    return new Contract(address, _abi, signerOrProvider) as DigResourcev2System;
  }
}
