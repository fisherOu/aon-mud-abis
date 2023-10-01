/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  TakeResourceBuildingSystem,
  TakeResourceBuildingSystemInterface,
} from "../TakeResourceBuildingSystem";

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
            internalType: "uint256",
            name: "resourceBuildingId",
            type: "uint256",
          },
        ],
        internalType: "struct TakeInfo",
        name: "takeInfo",
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
  "0x60806040523480156200001157600080fd5b5060405162002fe338038062002fe383398101604081905262000034916200022c565b818162000041336200010f565b6001600160a01b03811615620000585780620000bd565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000097573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bd91906200026b565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000105919062000183602090811b62000d2617901c565b5050505062000292565b600062000126620001ef60201b62000db71760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022957600080fd5b50565b600080604083850312156200024057600080fd5b82516200024d8162000213565b6020840151909250620002608162000213565b809150509250929050565b6000602082840312156200027e57600080fd5b81516200028b8162000213565b9392505050565b612d4180620002a26000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe1461005157806376b8eaed1461007a5780638da5cb5b1461008d578063f2fde38b146100ba575b600080fd5b61006461005f366004612141565b6100cf565b60405161007191906121f4565b60405180910390f35b610064610088366004612306565b6100f9565b610095610c65565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100cd6100c83660046123e7565b610caa565b005b60606000828060200190518101906100e79190612498565b90506100f2816100f9565b9392505050565b60008054606091906101419073ffffffffffffffffffffffffffffffffffffffff167fd0deb8af54f5692432398f7f62bf53c9e54e6d6a9b4dbccb012b3fe04ea432d3610ddb565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040161016060405180830381865afa15801561018c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101b09190612577565b8051909150156103235760006040518061012001604052808560000151815260200185602001518152602001856080015181526020018560a0015181526020018560c0015181526020018560e001518152602001856101000151815260200185604001518152602001856060015181525090508160e0015173ffffffffffffffffffffffffffffffffffffffff1663c542c93b856101200151866101400151876101600151856040518563ffffffff1660e01b81526004016102759493929190612674565b602060405180830381865afa158015610292573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102b691906126f8565b610321576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4661696c6564207265736f757263652070726f6f6620636865636b000000000060448201526064015b60405180910390fd5b505b60005433906103689073ffffffffffffffffffffffffffffffffffffffff167fd7eb4644b0f312b764e14b10dbe895c6ee4acad8c1eb37a4791309b4d942e427610ddb565b73ffffffffffffffffffffffffffffffffffffffff16630ff4c916826040518263ffffffff1660e01b81526004016103a291815260200190565b602060405180830381865afa1580156103bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103e39190612713565b84602001511461044f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f6e6f74207374616e64696e67206f6e207265736f7572636500000000000000006044820152606401610318565b600080546104939073ffffffffffffffffffffffffffffffffffffffff167f9e0b856941fb70fc9b56c896d5f39a2079c3ed041dbc5e87efbf9c503b354b76610ddb565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160e060405180830381865afa1580156104dd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105019190612744565b9050806080015167ffffffffffffffff1685604001511115801561053757508060a0015167ffffffffffffffff16856060015111155b61059d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f726164697573206f766572206c696d69740000000000000000000000000000006044820152606401610318565b6105af85600001518660a00151610f27565b610180850151600080546105f99073ffffffffffffffffffffffffffffffffffffffff167fe364070e7addf383981cab98a86215b0a227507d32346ce1205f3e07167055c8610ddb565b9050600061061088610180015189602001516111b2565b90506000806000806106588c61018001518d610100015160405160200161063991815260200190565b6040516020818303038152906040528051906020012060001c876114fe565b9296509094509250905083600003610937576106746001611b50565b600080546106b89073ffffffffffffffffffffffffffffffffffffffff167f2f3c6eb2abe480dcea02a3f0d6883cd4e62a46b8207d85e1ff6f6e5cdee24b7a610ddb565b6040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481018c905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015610726573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061074a91906126f8565b156107eb576040517f0ff4c916000000000000000000000000000000000000000000000000000000008152600481018b905273ffffffffffffffffffffffffffffffffffffffff821690630ff4c91690602401602060405180830381865afa1580156107ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107de9190612713565b6107e89084612805565b92505b6040805160608101825285815260006020820190815267ffffffffffffffff42811683850190815293517f84491fff000000000000000000000000000000000000000000000000000000008152600481018d905292516024840152905160448301529151909116606482015273ffffffffffffffffffffffffffffffffffffffff8816906384491fff90608401600060405180830381600087803b15801561089257600080fd5b505af11580156108a6573d6000803e3d6000fd5b50506040517f1ab06ee5000000000000000000000000000000000000000000000000000000008152600481018d90526024810186905273ffffffffffffffffffffffffffffffffffffffff84169250631ab06ee59150604401600060405180830381600087803b15801561091957600080fd5b505af115801561092d573d6000803e3d6000fd5b5050505050610c56565b8360010361098d576109496001611b50565b600080546106b89073ffffffffffffffffffffffffffffffffffffffff167fb58ee6825aedec1d358adc24e0bfee53cd2d268bda2eed874befd69d96060781610ddb565b6109976001611b50565b600080546109db9073ffffffffffffffffffffffffffffffffffffffff167fac076b5f5d1516d2521ec3f10d723c130b0a9f32384857e1697264ee87292ce0610ddb565b6040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481018c905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015610a49573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a6d91906126f8565b15610b0e576040517f0ff4c916000000000000000000000000000000000000000000000000000000008152600481018b905273ffffffffffffffffffffffffffffffffffffffff821690630ff4c91690602401602060405180830381865afa158015610add573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b019190612713565b610b0b9084612805565b92505b6040805160608101825285815260006020820190815267ffffffffffffffff42811683850190815293517f84491fff000000000000000000000000000000000000000000000000000000008152600481018d905292516024840152905160448301529151909116606482015273ffffffffffffffffffffffffffffffffffffffff8816906384491fff90608401600060405180830381600087803b158015610bb557600080fd5b505af1158015610bc9573d6000803e3d6000fd5b50506040517f1ab06ee5000000000000000000000000000000000000000000000000000000008152600481018d90526024810186905273ffffffffffffffffffffffffffffffffffffffff84169250631ab06ee59150604401600060405180830381600087803b158015610c3c57600080fd5b505af1158015610c50573d6000803e3d6000fd5b50505050505b50505050505050505050919050565b6000610ca57f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610d1a576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d2381611f58565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015610e4b573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610e91919081019061281d565b90508051600003610efe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f7420726567697374657265640000000000000000000000000000006044820152606401610318565b610f1f81600081518110610f1457610f146128c3565b602002602001015190565b949350505050565b60008054610f6b9073ffffffffffffffffffffffffffffffffffffffff167f4b1ac4c3aa37732e927cbff52c019e9fbdad0f3e454031afaefd319a3dc66ce4610ddb565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810185905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015610fd9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ffd91906126f8565b611063576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f636f6f7264206e6f74206d61726b6564000000000000000000000000000000006044820152606401610318565b6040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810184905260009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401606060405180830381865afa1580156110d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110f59190612906565b90508263ffffffff16816000015163ffffffff1614801561114657508060400151806111465750806040015115801561114657504267ffffffffffffffff16816020015167ffffffffffffffff1610155b6111ac576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f666f67207365656420696e76616c6964000000000000000000000000000000006044820152606401610318565b50505050565b6000805481906111f89073ffffffffffffffffffffffffffffffffffffffff167f4cf8575af513e85e971e8168543790c67a13325a2b9e58a3f87c5e536c104555610ddb565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810186905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015611266573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061128a91906126f8565b801561132457506040517f0ff4c91600000000000000000000000000000000000000000000000000000000815260048101859052839073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401602060405180830381865afa1580156112fe573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113229190612713565b145b61138a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f696e76616c6964207065726c696e20706f736974696f6e0000000000000000006044820152606401610318565b600080546113ce9073ffffffffffffffffffffffffffffffffffffffff167f84597150db3a8cb31c3f847642911238944cee9a3b5f1ab47777bca06e6660e3610ddb565b6040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810187905290915060009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c916906024016040805180830381865afa15801561143e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114629190612954565b9050806020015167ffffffffffffffff166000148061148e575042816020015167ffffffffffffffff16115b6114f4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f7265736f757263654275696c64696e672074696d656f757400000000000000006044820152606401610318565b5195945050505050565b60008054819081908190819061154a9073ffffffffffffffffffffffffffffffffffffffff167fe364070e7addf383981cab98a86215b0a227507d32346ce1205f3e07167055c8610ddb565b60008054919250906115929073ffffffffffffffffffffffffffffffffffffffff167fedfbc254303008e09cc3e514d4150bac7c69acbeb4ac0177f668a82648a4119e610ddb565b6040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481018b905260009750879650869550859450909150839060019073ffffffffffffffffffffffffffffffffffffffff84169063cccf7a8e90602401602060405180830381865afa158015611612573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061163691906126f8565b6118fb576000805461167e9073ffffffffffffffffffffffffffffffffffffffff167f449046c6526dd477102b464b5eeec34aaf8161a18f2ba1757f71638ac037f72f610ddb565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160e060405180830381865afa1580156116c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116ec91906129a2565b90506116f960038c612a51565b985061170660038c612a51565b985061171360038c612a51565b60208201518251919a5090611729908290612a65565b611733908d612a51565b61173d9190612805565b6060820151604083015191945090611756908290612a7c565b602083015183516117679190612a65565b611771908e612a9f565b61177b9190612ab3565b6117859190612ad5565b60ff1695508060a001518160a0015182608001516117a39190612afa565b826060015183604001516117b79190612a7c565b60ff16836020015184600001516117ce9190612a65565b6117d8908f612a9f565b6117e29190612a9f565b6117ec9190612b23565b6117f69190612b4a565b91508963ffffffff1686111561181a5761181360ff8b1687612a65565b955061181f565b600195505b8373ffffffffffffffffffffffffffffffffffffffff166378881ee28d60405180608001604052808d81526020018781526020018a81526020018667ffffffffffffffff168152506040518363ffffffff1660e01b81526004016118c0929190600060a08201905083825282516020830152602083015160408301526040830151606083015267ffffffffffffffff60608401511660808301529392505050565b600060405180830381600087803b1580156118da57600080fd5b505af11580156118ee573d6000803e3d6000fd5b50505050829750506119ad565b6040517f0ff4c916000000000000000000000000000000000000000000000000000000008152600481018c905260009073ffffffffffffffffffffffffffffffffffffffff851690630ff4c91690602401608060405180830381865afa158015611969573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061198d9190612b76565b905080600001519850806020015192508060400151955080606001519150505b6040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481018c905273ffffffffffffffffffffffffffffffffffffffff85169063cccf7a8e90602401602060405180830381865afa158015611a18573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a3c91906126f8565b15611b43576040517f0ff4c916000000000000000000000000000000000000000000000000000000008152600481018c905260009073ffffffffffffffffffffffffffffffffffffffff861690630ff4c91690602401606060405180830381865afa158015611aaf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ad39190612be0565b805160208201519099509750905067ffffffffffffffff821615611b4157600082826040015142611b049190612afa565b611b0e9190612c14565b67ffffffffffffffff16905083611b25828b612805565b10611b3257839850611b3f565b611b3c818a612805565b98505b505b505b5050505093509350935093565b60008054339190611b979073ffffffffffffffffffffffffffffffffffffffff167f189eafd1a01543209399086ef2e12962fca648be4826ce2b3eb2e53ed14bf141610ddb565b6000805491925090611bdf9073ffffffffffffffffffffffffffffffffffffffff167f3c3102d48c6d31b1a70ddf8b23d300c759379d6506f2ef221cf3056d7c54dca7610ddb565b6040517f720354530000000000000000000000000000000000000000000000000000000081526004810185905290915060009073ffffffffffffffffffffffffffffffffffffffff831690637203545390602401602060405180830381865afa158015611c50573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c749190612c3b565b6000805491925090611cbc9073ffffffffffffffffffffffffffffffffffffffff167fdc602e66a6d8c84d0c8d6c4292d80341393a1e04ff02909a12718a4216d3a9f7610ddb565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160a060405180830381865afa158015611d06573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d2a9190612c5e565b6040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810187905290915060009073ffffffffffffffffffffffffffffffffffffffff861690630ff4c916906024016040805180830381865afa158015611d9a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611dbe9190612ce8565b60208301518151919250600091611dd59042612afa565b611ddf9190612c14565b8260200151611dee9190612b4a565b905063ffffffff841667ffffffffffffffff82161115611e11575063ffffffff83165b8767ffffffffffffffff168167ffffffffffffffff1611611e8e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f6c61636b206f6620616374696f6e20706f696e747300000000000000000000006044820152606401610318565b611e988882612afa565b60408051808201825267ffffffffffffffff42811682528381166020830190815292517f4e6641a9000000000000000000000000000000000000000000000000000000008152600481018c90529151811660248301529151909116604482015290915073ffffffffffffffffffffffffffffffffffffffff871690634e6641a990606401600060405180830381600087803b158015611f3657600080fd5b505af1158015611f4a573d6000803e3d6000fd5b505050505050505050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051610d23928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516101a0810167ffffffffffffffff8111828210171561205f5761205f61200c565b60405290565b604051610160810167ffffffffffffffff8111828210171561205f5761205f61200c565b60405160e0810167ffffffffffffffff8111828210171561205f5761205f61200c565b6040516060810167ffffffffffffffff8111828210171561205f5761205f61200c565b6040805190810167ffffffffffffffff8111828210171561205f5761205f61200c565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156121395761213961200c565b604052919050565b6000602080838503121561215457600080fd5b823567ffffffffffffffff8082111561216c57600080fd5b818501915085601f83011261218057600080fd5b8135818111156121925761219261200c565b6121c2847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116016120f2565b915080825286848285010111156121d857600080fd5b8084840185840137600090820190930192909252509392505050565b600060208083528351808285015260005b8181101561222157858101830151858201604001528201612205565b81811115612233576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b600082601f83011261227857600080fd5b6122806120cf565b80604084018581111561229257600080fd5b845b818110156122ac578035845260209384019301612294565b509095945050505050565b600082601f8301126122c857600080fd5b6122d06120cf565b8060808401858111156122e257600080fd5b845b818110156122ac576122f68782612267565b84526020909301926040016122e4565b6000610240828403121561231957600080fd5b61232161203b565b823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a082015260c083013560c082015260e083013560e082015261010080840135818301525061012061238685828601612267565b90820152610160612399858583016122b7565b6101408301526123ad856101e08601612267565b90820152610220929092013561018083015250919050565b73ffffffffffffffffffffffffffffffffffffffff81168114610d2357600080fd5b6000602082840312156123f957600080fd5b81356100f2816123c5565b600082601f83011261241557600080fd5b61241d6120cf565b80604084018581111561242f57600080fd5b845b818110156122ac578051845260209384019301612431565b600082601f83011261245a57600080fd5b6124626120cf565b80608084018581111561247457600080fd5b845b818110156122ac576124888782612404565b8452602090930192604001612476565b600061024082840312156124ab57600080fd5b6124b361203b565b825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e082015261010080840151818301525061012061251885828601612404565b9082015261016061252b85858301612449565b61014083015261253f856101e08601612404565b90820152610220929092015161018083015250919050565b8051801515811461256757600080fd5b919050565b8051612567816123c5565b6000610160828403121561258a57600080fd5b612592612065565b61259b83612557565b81526125a96020840161256c565b60208201526125ba6040840161256c565b60408201526125cb6060840161256c565b60608201526125dc6080840161256c565b60808201526125ed60a0840161256c565b60a08201526125fe60c0840161256c565b60c082015261260f60e0840161256c565b60e082015261010061262281850161256c565b9082015261012061263484820161256c565b9082015261014061264684820161256c565b908201529392505050565b8060005b60028110156111ac578151845260209384019390910190600101612655565b61022081016126838287612651565b60408083018660005b60028110156126b3576126a0838351612651565b918301916020919091019060010161268c565b505050506126c460c0830185612651565b61010082018360005b60098110156126ec5781518352602092830192909101906001016126cd565b50505095945050505050565b60006020828403121561270a57600080fd5b6100f282612557565b60006020828403121561272557600080fd5b5051919050565b805167ffffffffffffffff8116811461256757600080fd5b600060e0828403121561275657600080fd5b61275e612089565b6127678361272c565b81526127756020840161272c565b60208201526127866040840161272c565b60408201526127976060840161272c565b60608201526127a86080840161272c565b60808201526127b960a0840161272c565b60a08201526127ca60c0840161272c565b60c08201529392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008219821115612818576128186127d6565b500190565b6000602080838503121561283057600080fd5b825167ffffffffffffffff8082111561284857600080fd5b818501915085601f83011261285c57600080fd5b81518181111561286e5761286e61200c565b8060051b915061287f8483016120f2565b818152918301840191848101908884111561289957600080fd5b938501935b838510156128b75784518252938501939085019061289e565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b805163ffffffff8116811461256757600080fd5b60006060828403121561291857600080fd5b6129206120ac565b612929836128f2565b81526129376020840161272c565b602082015261294860408401612557565b60408201529392505050565b60006040828403121561296657600080fd5b61296e6120cf565b612977836128f2565b81526129856020840161272c565b60208201529392505050565b805160ff8116811461256757600080fd5b600060e082840312156129b457600080fd5b6129bc612089565b82518152602083015160208201526129d660408401612991565b60408201526129e760608401612991565b60608201526129f86080840161272c565b6080820152612a0960a0840161272c565b60a082015260c083015160c08201528091505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600082612a6057612a60612a22565b500690565b600082821015612a7757612a776127d6565b500390565b600060ff821660ff841680821015612a9657612a966127d6565b90039392505050565b600082612aae57612aae612a22565b500490565b600060ff831680612ac657612ac6612a22565b8060ff84160691505092915050565b600060ff821660ff84168060ff03821115612af257612af26127d6565b019392505050565b600067ffffffffffffffff83811690831681811015612b1b57612b1b6127d6565b039392505050565b600067ffffffffffffffff80841680612b3e57612b3e612a22565b92169190910692915050565b600067ffffffffffffffff808316818516808303821115612b6d57612b6d6127d6565b01949350505050565b600060808284031215612b8857600080fd5b6040516080810181811067ffffffffffffffff82111715612bab57612bab61200c565b8060405250825181526020830151602082015260408301516040820152612bd46060840161272c565b60608201529392505050565b600060608284031215612bf257600080fd5b612bfa6120ac565b82518152602083015160208201526129486040840161272c565b600067ffffffffffffffff80841680612c2f57612c2f612a22565b92169190910492915050565b600060208284031215612c4d57600080fd5b81518060030b81146100f257600080fd5b600060a08284031215612c7057600080fd5b60405160a0810181811067ffffffffffffffff82111715612c9357612c9361200c565b604052612c9f8361272c565b8152612cad6020840161272c565b6020820152612cbe6040840161272c565b6040820152612ccf6060840161272c565b6060820152608083015160808201528091505092915050565b600060408284031215612cfa57600080fd5b612d026120cf565b6129778361272c56fea264697066735822122016c07c85bc9db9ea1fb853f2f0122791541d335c03902e7c3bf9b2d2128f63dc64736f6c634300080d0033";

type TakeResourceBuildingSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TakeResourceBuildingSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TakeResourceBuildingSystem__factory extends ContractFactory {
  constructor(...args: TakeResourceBuildingSystemConstructorParams) {
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
  ): Promise<TakeResourceBuildingSystem> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<TakeResourceBuildingSystem>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): TakeResourceBuildingSystem {
    return super.attach(address) as TakeResourceBuildingSystem;
  }
  override connect(signer: Signer): TakeResourceBuildingSystem__factory {
    return super.connect(signer) as TakeResourceBuildingSystem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TakeResourceBuildingSystemInterface {
    return new utils.Interface(_abi) as TakeResourceBuildingSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TakeResourceBuildingSystem {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TakeResourceBuildingSystem;
  }
}
