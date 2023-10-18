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
  "0x60806040523480156200001157600080fd5b50604051620031173803806200311783398101604081905262000034916200022c565b818162000041336200010f565b6001600160a01b03811615620000585780620000bd565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000097573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bd91906200026b565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000105919062000183602090811b62000d9417901c565b5050505062000292565b600062000126620001ef60201b62000e251760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022957600080fd5b50565b600080604083850312156200024057600080fd5b82516200024d8162000213565b6020840151909250620002608162000213565b809150509250929050565b6000602082840312156200027e57600080fd5b81516200028b8162000213565b9392505050565b612e7580620002a26000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe1461005157806376b8eaed1461007a5780638da5cb5b1461008d578063f2fde38b146100ba575b600080fd5b61006461005f366004612275565b6100cf565b6040516100719190612328565b60405180910390f35b61006461008836600461243a565b6100f9565b610095610cd3565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100cd6100c836600461251b565b610d18565b005b60606000828060200190518101906100e791906125cc565b90506100f2816100f9565b9392505050565b60008054606091906101419073ffffffffffffffffffffffffffffffffffffffff167fd0deb8af54f5692432398f7f62bf53c9e54e6d6a9b4dbccb012b3fe04ea432d3610e49565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040161016060405180830381865afa15801561018c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101b091906126ab565b8051909150156103235760006040518061012001604052808560000151815260200185602001518152602001856080015181526020018560a0015181526020018560c0015181526020018560e001518152602001856101000151815260200185604001518152602001856060015181525090508160e0015173ffffffffffffffffffffffffffffffffffffffff1663c542c93b856101200151866101400151876101600151856040518563ffffffff1660e01b815260040161027594939291906127a8565b602060405180830381865afa158015610292573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102b6919061282c565b610321576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4661696c6564207265736f757263652070726f6f6620636865636b000000000060448201526064015b60405180910390fd5b505b3361032d81610f95565b610393576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f706c6179657220646561640000000000000000000000000000000000000000006044820152606401610318565b6000546103d69073ffffffffffffffffffffffffffffffffffffffff167fd7eb4644b0f312b764e14b10dbe895c6ee4acad8c1eb37a4791309b4d942e427610e49565b73ffffffffffffffffffffffffffffffffffffffff16630ff4c916826040518263ffffffff1660e01b815260040161041091815260200190565b602060405180830381865afa15801561042d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104519190612847565b8460200151146104bd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f6e6f74207374616e64696e67206f6e207265736f7572636500000000000000006044820152606401610318565b600080546105019073ffffffffffffffffffffffffffffffffffffffff167f9e0b856941fb70fc9b56c896d5f39a2079c3ed041dbc5e87efbf9c503b354b76610e49565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160e060405180830381865afa15801561054b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061056f9190612878565b9050806080015167ffffffffffffffff168560400151111580156105a557508060a0015167ffffffffffffffff16856060015111155b61060b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f726164697573206f766572206c696d69740000000000000000000000000000006044820152606401610318565b61061d85600001518660a0015161105a565b610180850151600080546106679073ffffffffffffffffffffffffffffffffffffffff167fe364070e7addf383981cab98a86215b0a227507d32346ce1205f3e07167055c8610e49565b9050600061067e88610180015189602001516112e5565b90506000806000806106c68c61018001518d61010001516040516020016106a791815260200190565b6040516020818303038152906040528051906020012060001c87611631565b92965090945092509050836000036109a5576106e26001611c83565b600080546107269073ffffffffffffffffffffffffffffffffffffffff167f2f3c6eb2abe480dcea02a3f0d6883cd4e62a46b8207d85e1ff6f6e5cdee24b7a610e49565b6040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481018c905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015610794573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107b8919061282c565b15610859576040517f0ff4c916000000000000000000000000000000000000000000000000000000008152600481018b905273ffffffffffffffffffffffffffffffffffffffff821690630ff4c91690602401602060405180830381865afa158015610828573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061084c9190612847565b6108569084612939565b92505b6040805160608101825285815260006020820190815267ffffffffffffffff42811683850190815293517f84491fff000000000000000000000000000000000000000000000000000000008152600481018d905292516024840152905160448301529151909116606482015273ffffffffffffffffffffffffffffffffffffffff8816906384491fff90608401600060405180830381600087803b15801561090057600080fd5b505af1158015610914573d6000803e3d6000fd5b50506040517f1ab06ee5000000000000000000000000000000000000000000000000000000008152600481018d90526024810186905273ffffffffffffffffffffffffffffffffffffffff84169250631ab06ee59150604401600060405180830381600087803b15801561098757600080fd5b505af115801561099b573d6000803e3d6000fd5b5050505050610cc4565b836001036109fb576109b76001611c83565b600080546107269073ffffffffffffffffffffffffffffffffffffffff167fb58ee6825aedec1d358adc24e0bfee53cd2d268bda2eed874befd69d96060781610e49565b610a056001611c83565b60008054610a499073ffffffffffffffffffffffffffffffffffffffff167fac076b5f5d1516d2521ec3f10d723c130b0a9f32384857e1697264ee87292ce0610e49565b6040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481018c905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015610ab7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610adb919061282c565b15610b7c576040517f0ff4c916000000000000000000000000000000000000000000000000000000008152600481018b905273ffffffffffffffffffffffffffffffffffffffff821690630ff4c91690602401602060405180830381865afa158015610b4b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b6f9190612847565b610b799084612939565b92505b6040805160608101825285815260006020820190815267ffffffffffffffff42811683850190815293517f84491fff000000000000000000000000000000000000000000000000000000008152600481018d905292516024840152905160448301529151909116606482015273ffffffffffffffffffffffffffffffffffffffff8816906384491fff90608401600060405180830381600087803b158015610c2357600080fd5b505af1158015610c37573d6000803e3d6000fd5b50506040517f1ab06ee5000000000000000000000000000000000000000000000000000000008152600481018d90526024810186905273ffffffffffffffffffffffffffffffffffffffff84169250631ab06ee59150604401600060405180830381600087803b158015610caa57600080fd5b505af1158015610cbe573d6000803e3d6000fd5b50505050505b50505050505050505050919050565b6000610d137f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610d88576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d918161208c565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015610eb9573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610eff9190810190612951565b90508051600003610f6c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f7420726567697374657265640000000000000000000000000000006044820152606401610318565b610f8d81600081518110610f8257610f826129f7565b602002602001015190565b949350505050565b60008054610fd99073ffffffffffffffffffffffffffffffffffffffff167f8900e57ac2ff61c328bbaa69d2071a542ae5ff48c693375a49fd2937c1ef8332610e49565b73ffffffffffffffffffffffffffffffffffffffff1663cccf7a8e836040518263ffffffff1660e01b815260040161101391815260200190565b602060405180830381865afa158015611030573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611054919061282c565b92915050565b6000805461109e9073ffffffffffffffffffffffffffffffffffffffff167f4b1ac4c3aa37732e927cbff52c019e9fbdad0f3e454031afaefd319a3dc66ce4610e49565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810185905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa15801561110c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611130919061282c565b611196576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f636f6f7264206e6f74206d61726b6564000000000000000000000000000000006044820152606401610318565b6040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810184905260009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401606060405180830381865afa158015611204573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112289190612a3a565b90508263ffffffff16816000015163ffffffff1614801561127957508060400151806112795750806040015115801561127957504267ffffffffffffffff16816020015167ffffffffffffffff1610155b6112df576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f666f67207365656420696e76616c6964000000000000000000000000000000006044820152606401610318565b50505050565b60008054819061132b9073ffffffffffffffffffffffffffffffffffffffff167f4cf8575af513e85e971e8168543790c67a13325a2b9e58a3f87c5e536c104555610e49565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810186905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015611399573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113bd919061282c565b801561145757506040517f0ff4c91600000000000000000000000000000000000000000000000000000000815260048101859052839073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401602060405180830381865afa158015611431573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114559190612847565b145b6114bd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f696e76616c6964207065726c696e20706f736974696f6e0000000000000000006044820152606401610318565b600080546115019073ffffffffffffffffffffffffffffffffffffffff167f84597150db3a8cb31c3f847642911238944cee9a3b5f1ab47777bca06e6660e3610e49565b6040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810187905290915060009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c916906024016040805180830381865afa158015611571573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115959190612a88565b9050806020015167ffffffffffffffff16600014806115c1575042816020015167ffffffffffffffff16115b611627576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f7265736f757263654275696c64696e672074696d656f757400000000000000006044820152606401610318565b5195945050505050565b60008054819081908190819061167d9073ffffffffffffffffffffffffffffffffffffffff167fe364070e7addf383981cab98a86215b0a227507d32346ce1205f3e07167055c8610e49565b60008054919250906116c59073ffffffffffffffffffffffffffffffffffffffff167fedfbc254303008e09cc3e514d4150bac7c69acbeb4ac0177f668a82648a4119e610e49565b6040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481018b905260009750879650869550859450909150839060019073ffffffffffffffffffffffffffffffffffffffff84169063cccf7a8e90602401602060405180830381865afa158015611745573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611769919061282c565b611a2e57600080546117b19073ffffffffffffffffffffffffffffffffffffffff167f449046c6526dd477102b464b5eeec34aaf8161a18f2ba1757f71638ac037f72f610e49565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160e060405180830381865afa1580156117fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061181f9190612ad6565b905061182c60038c612b85565b985061183960038c612b85565b985061184660038c612b85565b60208201518251919a509061185c908290612b99565b611866908d612b85565b6118709190612939565b6060820151604083015191945090611889908290612bb0565b6020830151835161189a9190612b99565b6118a4908e612bd3565b6118ae9190612be7565b6118b89190612c09565b60ff1695508060a001518160a0015182608001516118d69190612c2e565b826060015183604001516118ea9190612bb0565b60ff16836020015184600001516119019190612b99565b61190b908f612bd3565b6119159190612bd3565b61191f9190612c57565b6119299190612c7e565b91508963ffffffff1686111561194d5761194660ff8b1687612b99565b9550611952565b600195505b8373ffffffffffffffffffffffffffffffffffffffff166378881ee28d60405180608001604052808d81526020018781526020018a81526020018667ffffffffffffffff168152506040518363ffffffff1660e01b81526004016119f3929190600060a08201905083825282516020830152602083015160408301526040830151606083015267ffffffffffffffff60608401511660808301529392505050565b600060405180830381600087803b158015611a0d57600080fd5b505af1158015611a21573d6000803e3d6000fd5b5050505082975050611ae0565b6040517f0ff4c916000000000000000000000000000000000000000000000000000000008152600481018c905260009073ffffffffffffffffffffffffffffffffffffffff851690630ff4c91690602401608060405180830381865afa158015611a9c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ac09190612caa565b905080600001519850806020015192508060400151955080606001519150505b6040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481018c905273ffffffffffffffffffffffffffffffffffffffff85169063cccf7a8e90602401602060405180830381865afa158015611b4b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b6f919061282c565b15611c76576040517f0ff4c916000000000000000000000000000000000000000000000000000000008152600481018c905260009073ffffffffffffffffffffffffffffffffffffffff861690630ff4c91690602401606060405180830381865afa158015611be2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c069190612d14565b805160208201519099509750905067ffffffffffffffff821615611c7457600082826040015142611c379190612c2e565b611c419190612d48565b67ffffffffffffffff16905083611c58828b612939565b10611c6557839850611c72565b611c6f818a612939565b98505b505b505b5050505093509350935093565b60008054339190611cca9073ffffffffffffffffffffffffffffffffffffffff167f189eafd1a01543209399086ef2e12962fca648be4826ce2b3eb2e53ed14bf141610e49565b6000805491925090611d129073ffffffffffffffffffffffffffffffffffffffff167f3c3102d48c6d31b1a70ddf8b23d300c759379d6506f2ef221cf3056d7c54dca7610e49565b6040517f720354530000000000000000000000000000000000000000000000000000000081526004810185905290915060009073ffffffffffffffffffffffffffffffffffffffff831690637203545390602401602060405180830381865afa158015611d83573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611da79190612d6f565b6000805491925090611def9073ffffffffffffffffffffffffffffffffffffffff167fdc602e66a6d8c84d0c8d6c4292d80341393a1e04ff02909a12718a4216d3a9f7610e49565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160a060405180830381865afa158015611e39573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e5d9190612d92565b6040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810187905290915060009073ffffffffffffffffffffffffffffffffffffffff861690630ff4c916906024016040805180830381865afa158015611ecd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ef19190612e1c565b60208301518151919250600091611f089042612c2e565b611f129190612d48565b8260200151611f219190612c7e565b905063ffffffff841667ffffffffffffffff82161115611f44575063ffffffff83165b8767ffffffffffffffff168167ffffffffffffffff161015611fc2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f6c61636b206f6620616374696f6e20706f696e747300000000000000000000006044820152606401610318565b611fcc8882612c2e565b60408051808201825267ffffffffffffffff42811682528381166020830190815292517f4e6641a9000000000000000000000000000000000000000000000000000000008152600481018c90529151811660248301529151909116604482015290915073ffffffffffffffffffffffffffffffffffffffff871690634e6641a990606401600060405180830381600087803b15801561206a57600080fd5b505af115801561207e573d6000803e3d6000fd5b505050505050505050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051610d91928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516101a0810167ffffffffffffffff8111828210171561219357612193612140565b60405290565b604051610160810167ffffffffffffffff8111828210171561219357612193612140565b60405160e0810167ffffffffffffffff8111828210171561219357612193612140565b6040516060810167ffffffffffffffff8111828210171561219357612193612140565b6040805190810167ffffffffffffffff8111828210171561219357612193612140565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561226d5761226d612140565b604052919050565b6000602080838503121561228857600080fd5b823567ffffffffffffffff808211156122a057600080fd5b818501915085601f8301126122b457600080fd5b8135818111156122c6576122c6612140565b6122f6847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601612226565b9150808252868482850101111561230c57600080fd5b8084840185840137600090820190930192909252509392505050565b600060208083528351808285015260005b8181101561235557858101830151858201604001528201612339565b81811115612367576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b600082601f8301126123ac57600080fd5b6123b4612203565b8060408401858111156123c657600080fd5b845b818110156123e05780358452602093840193016123c8565b509095945050505050565b600082601f8301126123fc57600080fd5b612404612203565b80608084018581111561241657600080fd5b845b818110156123e05761242a878261239b565b8452602090930192604001612418565b6000610240828403121561244d57600080fd5b61245561216f565b823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a082015260c083013560c082015260e083013560e08201526101008084013581830152506101206124ba8582860161239b565b908201526101606124cd858583016123eb565b6101408301526124e1856101e0860161239b565b90820152610220929092013561018083015250919050565b73ffffffffffffffffffffffffffffffffffffffff81168114610d9157600080fd5b60006020828403121561252d57600080fd5b81356100f2816124f9565b600082601f83011261254957600080fd5b612551612203565b80604084018581111561256357600080fd5b845b818110156123e0578051845260209384019301612565565b600082601f83011261258e57600080fd5b612596612203565b8060808401858111156125a857600080fd5b845b818110156123e0576125bc8782612538565b84526020909301926040016125aa565b600061024082840312156125df57600080fd5b6125e761216f565b825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e082015261010080840151818301525061012061264c85828601612538565b9082015261016061265f8585830161257d565b610140830152612673856101e08601612538565b90820152610220929092015161018083015250919050565b8051801515811461269b57600080fd5b919050565b805161269b816124f9565b600061016082840312156126be57600080fd5b6126c6612199565b6126cf8361268b565b81526126dd602084016126a0565b60208201526126ee604084016126a0565b60408201526126ff606084016126a0565b6060820152612710608084016126a0565b608082015261272160a084016126a0565b60a082015261273260c084016126a0565b60c082015261274360e084016126a0565b60e08201526101006127568185016126a0565b908201526101206127688482016126a0565b9082015261014061277a8482016126a0565b908201529392505050565b8060005b60028110156112df578151845260209384019390910190600101612789565b61022081016127b78287612785565b60408083018660005b60028110156127e7576127d4838351612785565b91830191602091909101906001016127c0565b505050506127f860c0830185612785565b61010082018360005b6009811015612820578151835260209283019290910190600101612801565b50505095945050505050565b60006020828403121561283e57600080fd5b6100f28261268b565b60006020828403121561285957600080fd5b5051919050565b805167ffffffffffffffff8116811461269b57600080fd5b600060e0828403121561288a57600080fd5b6128926121bd565b61289b83612860565b81526128a960208401612860565b60208201526128ba60408401612860565b60408201526128cb60608401612860565b60608201526128dc60808401612860565b60808201526128ed60a08401612860565b60a08201526128fe60c08401612860565b60c08201529392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000821982111561294c5761294c61290a565b500190565b6000602080838503121561296457600080fd5b825167ffffffffffffffff8082111561297c57600080fd5b818501915085601f83011261299057600080fd5b8151818111156129a2576129a2612140565b8060051b91506129b3848301612226565b81815291830184019184810190888411156129cd57600080fd5b938501935b838510156129eb578451825293850193908501906129d2565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b805163ffffffff8116811461269b57600080fd5b600060608284031215612a4c57600080fd5b612a546121e0565b612a5d83612a26565b8152612a6b60208401612860565b6020820152612a7c6040840161268b565b60408201529392505050565b600060408284031215612a9a57600080fd5b612aa2612203565b612aab83612a26565b8152612ab960208401612860565b60208201529392505050565b805160ff8116811461269b57600080fd5b600060e08284031215612ae857600080fd5b612af06121bd565b8251815260208301516020820152612b0a60408401612ac5565b6040820152612b1b60608401612ac5565b6060820152612b2c60808401612860565b6080820152612b3d60a08401612860565b60a082015260c083015160c08201528091505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600082612b9457612b94612b56565b500690565b600082821015612bab57612bab61290a565b500390565b600060ff821660ff841680821015612bca57612bca61290a565b90039392505050565b600082612be257612be2612b56565b500490565b600060ff831680612bfa57612bfa612b56565b8060ff84160691505092915050565b600060ff821660ff84168060ff03821115612c2657612c2661290a565b019392505050565b600067ffffffffffffffff83811690831681811015612c4f57612c4f61290a565b039392505050565b600067ffffffffffffffff80841680612c7257612c72612b56565b92169190910692915050565b600067ffffffffffffffff808316818516808303821115612ca157612ca161290a565b01949350505050565b600060808284031215612cbc57600080fd5b6040516080810181811067ffffffffffffffff82111715612cdf57612cdf612140565b8060405250825181526020830151602082015260408301516040820152612d0860608401612860565b60608201529392505050565b600060608284031215612d2657600080fd5b612d2e6121e0565b8251815260208301516020820152612a7c60408401612860565b600067ffffffffffffffff80841680612d6357612d63612b56565b92169190910492915050565b600060208284031215612d8157600080fd5b81518060030b81146100f257600080fd5b600060a08284031215612da457600080fd5b60405160a0810181811067ffffffffffffffff82111715612dc757612dc7612140565b604052612dd383612860565b8152612de160208401612860565b6020820152612df260408401612860565b6040820152612e0360608401612860565b6060820152608083015160808201528091505092915050565b600060408284031215612e2e57600080fd5b612e36612203565b612aab8361286056fea2646970667358221220b1980ad79fd17ac2d66255d6e3e87afab72d89b2f3337e2bad31bbc7810a183864736f6c634300080d0033";

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
