/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  TakeResourcev2System,
  TakeResourcev2SystemInterface,
} from "../TakeResourcev2System";

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
  "0x60806040523480156200001157600080fd5b5060405162002e7a38038062002e7a83398101604081905262000034916200022c565b818162000041336200010f565b6001600160a01b03811615620000585780620000bd565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000097573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bd91906200026b565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000105919062000183602090811b62000e5017901c565b5050505062000292565b600062000126620001ef60201b62000ee11760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022957600080fd5b50565b600080604083850312156200024057600080fd5b82516200024d8162000213565b6020840151909250620002608162000213565b809150509250929050565b6000602082840312156200027e57600080fd5b81516200028b8162000213565b9392505050565b612bd880620002a26000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe146100515780638c6352851461007a5780638da5cb5b1461008d578063f2fde38b146100ba575b600080fd5b61006461005f366004611ee0565b6100cf565b6040516100719190611f93565b60405180910390f35b6100646100883660046120a5565b6100f9565b610095610d8f565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100cd6100c8366004612179565b610dd4565b005b60606000828060200190518101906100e7919061222a565b90506100f2816100f9565b9392505050565b60008054606091906101419073ffffffffffffffffffffffffffffffffffffffff167fd0deb8af54f5692432398f7f62bf53c9e54e6d6a9b4dbccb012b3fe04ea432d3610f05565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040161016060405180830381865afa15801561018c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101b091906122f1565b8051909150156103235760006040518061012001604052808560000151815260200185602001518152602001856080015181526020018560a0015181526020018560c0015181526020018560e001518152602001856101000151815260200185604001518152602001856060015181525090508160e0015173ffffffffffffffffffffffffffffffffffffffff1663c542c93b856101200151866101400151876101600151856040518563ffffffff1660e01b815260040161027594939291906123e3565b602060405180830381865afa158015610292573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102b69190612467565b610321576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4661696c6564207265736f757263652070726f6f6620636865636b000000000060448201526064015b60405180910390fd5b505b60005433906103689073ffffffffffffffffffffffffffffffffffffffff167fd7eb4644b0f312b764e14b10dbe895c6ee4acad8c1eb37a4791309b4d942e427610f05565b73ffffffffffffffffffffffffffffffffffffffff16630ff4c916826040518263ffffffff1660e01b81526004016103a291815260200190565b602060405180830381865afa1580156103bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103e39190612482565b84602001511461044f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f6e6f74207374616e64696e67206f6e207265736f7572636500000000000000006044820152606401610318565b600080546104939073ffffffffffffffffffffffffffffffffffffffff167f9e0b856941fb70fc9b56c896d5f39a2079c3ed041dbc5e87efbf9c503b354b76610f05565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160e060405180830381865afa1580156104dd573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061050191906124b3565b9050806080015167ffffffffffffffff1685604001511115801561053757508060a0015167ffffffffffffffff16856060015111155b61059d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f726164697573206f766572206c696d69740000000000000000000000000000006044820152606401610318565b806000015167ffffffffffffffff16816020015167ffffffffffffffff161061067f57611d4c8560e00151101580156105ec575080516105de906002612694565b85516105ea91906126d9565b155b801561061457506000816020015160026106069190612694565b865161061291906126d9565b115b61067a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f6e6f207265736f7572636520746f2074616b65000000000000000000000000006044820152606401610318565b610711565b611d4c8560e00151101580156106ab5750805161069d906002612694565b85516106a991906126d9565b155b610711576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f6e6f207265736f7572636520746f2074616b65000000000000000000000000006044820152606401610318565b61072385600001518660a00151611053565b60208501516000805461076c9073ffffffffffffffffffffffffffffffffffffffff167fe364070e7addf383981cab98a86215b0a227507d32346ce1205f3e07167055c8610f05565b9050600080600080610783868c61010001516112de565b9296509094509250905083600003610a625761079f60016118ef565b600080546107e39073ffffffffffffffffffffffffffffffffffffffff167f2f3c6eb2abe480dcea02a3f0d6883cd4e62a46b8207d85e1ff6f6e5cdee24b7a610f05565b6040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481018b905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015610851573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108759190612467565b15610916576040517f0ff4c916000000000000000000000000000000000000000000000000000000008152600481018a905273ffffffffffffffffffffffffffffffffffffffff821690630ff4c91690602401602060405180830381865afa1580156108e5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109099190612482565b61091390846126ed565b92505b6040805160608101825285815260006020820190815267ffffffffffffffff42811683850190815293517f84491fff000000000000000000000000000000000000000000000000000000008152600481018c905292516024840152905160448301529151909116606482015273ffffffffffffffffffffffffffffffffffffffff8716906384491fff90608401600060405180830381600087803b1580156109bd57600080fd5b505af11580156109d1573d6000803e3d6000fd5b50506040517f1ab06ee5000000000000000000000000000000000000000000000000000000008152600481018c90526024810186905273ffffffffffffffffffffffffffffffffffffffff84169250631ab06ee59150604401600060405180830381600087803b158015610a4457600080fd5b505af1158015610a58573d6000803e3d6000fd5b5050505050610d81565b83600103610ab857610a7460016118ef565b600080546107e39073ffffffffffffffffffffffffffffffffffffffff167fb58ee6825aedec1d358adc24e0bfee53cd2d268bda2eed874befd69d96060781610f05565b610ac260016118ef565b60008054610b069073ffffffffffffffffffffffffffffffffffffffff167fac076b5f5d1516d2521ec3f10d723c130b0a9f32384857e1697264ee87292ce0610f05565b6040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481018b905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015610b74573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b989190612467565b15610c39576040517f0ff4c916000000000000000000000000000000000000000000000000000000008152600481018a905273ffffffffffffffffffffffffffffffffffffffff821690630ff4c91690602401602060405180830381865afa158015610c08573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c2c9190612482565b610c3690846126ed565b92505b6040805160608101825285815260006020820190815267ffffffffffffffff42811683850190815293517f84491fff000000000000000000000000000000000000000000000000000000008152600481018c905292516024840152905160448301529151909116606482015273ffffffffffffffffffffffffffffffffffffffff8716906384491fff90608401600060405180830381600087803b158015610ce057600080fd5b505af1158015610cf4573d6000803e3d6000fd5b50506040517f1ab06ee5000000000000000000000000000000000000000000000000000000008152600481018c90526024810186905273ffffffffffffffffffffffffffffffffffffffff84169250631ab06ee59150604401600060405180830381600087803b158015610d6757600080fd5b505af1158015610d7b573d6000803e3d6000fd5b50505050505b505050505050505050919050565b6000610dcf7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610e44576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e4d81611cf7565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015610f75573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610fbb9190810190612705565b90508051600003611028576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f7420726567697374657265640000000000000000000000000000006044820152606401610318565b6110498160008151811061103e5761103e6127ab565b602002602001015190565b9150505b92915050565b600080546110979073ffffffffffffffffffffffffffffffffffffffff167f4b1ac4c3aa37732e927cbff52c019e9fbdad0f3e454031afaefd319a3dc66ce4610f05565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810185905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015611105573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111299190612467565b61118f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f636f6f7264206e6f74206d61726b6564000000000000000000000000000000006044820152606401610318565b6040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810184905260009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401606060405180830381865afa1580156111fd573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061122191906127da565b90508263ffffffff16816000015163ffffffff1614801561127257508060400151806112725750806040015115801561127257504267ffffffffffffffff16816020015167ffffffffffffffff1610155b6112d8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f666f67207365656420696e76616c6964000000000000000000000000000000006044820152606401610318565b50505050565b60008054819081908190819061132a9073ffffffffffffffffffffffffffffffffffffffff167fedfbc254303008e09cc3e514d4150bac7c69acbeb4ac0177f668a82648a4119e610f05565b60008054919250906113729073ffffffffffffffffffffffffffffffffffffffff167fe364070e7addf383981cab98a86215b0a227507d32346ce1205f3e07167055c8610f05565b6040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481018a905260009750879650869550859450909150839060019073ffffffffffffffffffffffffffffffffffffffff85169063cccf7a8e90602401602060405180830381865afa1580156113f2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114169190612467565b61169a576000805461145e9073ffffffffffffffffffffffffffffffffffffffff167f449046c6526dd477102b464b5eeec34aaf8161a18f2ba1757f71638ac037f72f610f05565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160e060405180830381865afa1580156114a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114cc9190612844565b90506114d960038b6126d9565b60208201518251919a50906114ef9082906128c4565b6114f9908c6126d9565b61150391906126ed565b606082015160408301519194509061151c9082906128db565b6020830151835161152d91906128c4565b611537908d6128fe565b6115419190612912565b61154b9190612934565b60ff1695508060a001518160a0015182608001516115699190612959565b8260600151836040015161157d91906128db565b60ff168360200151846000015161159491906128c4565b61159e908e6128fe565b6115a891906128fe565b6115b29190612982565b6115bc91906129a9565b91508473ffffffffffffffffffffffffffffffffffffffff166378881ee28c60405180608001604052808d81526020018781526020018a81526020018667ffffffffffffffff168152506040518363ffffffff1660e01b815260040161165f929190600060a08201905083825282516020830152602083015160408301526040830151606083015267ffffffffffffffff60608401511660808301529392505050565b600060405180830381600087803b15801561167957600080fd5b505af115801561168d573d6000803e3d6000fd5b505050508297505061174c565b6040517f0ff4c916000000000000000000000000000000000000000000000000000000008152600481018b905260009073ffffffffffffffffffffffffffffffffffffffff861690630ff4c91690602401608060405180830381865afa158015611708573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061172c91906129d5565b905080600001519850806020015192508060400151955080606001519150505b6040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481018b905273ffffffffffffffffffffffffffffffffffffffff84169063cccf7a8e90602401602060405180830381865afa1580156117b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117db9190612467565b156118e2576040517f0ff4c916000000000000000000000000000000000000000000000000000000008152600481018b905260009073ffffffffffffffffffffffffffffffffffffffff851690630ff4c91690602401606060405180830381865afa15801561184e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118729190612a3f565b805160208201519099509750905067ffffffffffffffff8216156118e0576000828260400151426118a39190612959565b6118ad9190612a73565b67ffffffffffffffff169050836118c4828b6126ed565b106118d1578398506118de565b6118db818a6126ed565b98505b505b505b5050505092959194509250565b600080543391906119369073ffffffffffffffffffffffffffffffffffffffff167f189eafd1a01543209399086ef2e12962fca648be4826ce2b3eb2e53ed14bf141610f05565b600080549192509061197e9073ffffffffffffffffffffffffffffffffffffffff167f3c3102d48c6d31b1a70ddf8b23d300c759379d6506f2ef221cf3056d7c54dca7610f05565b6040517f720354530000000000000000000000000000000000000000000000000000000081526004810185905290915060009073ffffffffffffffffffffffffffffffffffffffff831690637203545390602401602060405180830381865afa1580156119ef573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a139190612a9a565b6000805491925090611a5b9073ffffffffffffffffffffffffffffffffffffffff167fdc602e66a6d8c84d0c8d6c4292d80341393a1e04ff02909a12718a4216d3a9f7610f05565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160a060405180830381865afa158015611aa5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ac99190612abd565b6040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810187905290915060009073ffffffffffffffffffffffffffffffffffffffff861690630ff4c916906024016040805180830381865afa158015611b39573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b5d9190612b47565b60208301518151919250600091611b749042612959565b611b7e9190612a73565b8260200151611b8d91906129a9565b905063ffffffff841667ffffffffffffffff82161115611bb0575063ffffffff83165b8767ffffffffffffffff168167ffffffffffffffff1611611c2d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f6c61636b206f6620616374696f6e20706f696e747300000000000000000000006044820152606401610318565b611c378882612959565b60408051808201825267ffffffffffffffff42811682528381166020830190815292517f4e6641a9000000000000000000000000000000000000000000000000000000008152600481018c90529151811660248301529151909116604482015290915073ffffffffffffffffffffffffffffffffffffffff871690634e6641a990606401600060405180830381600087803b158015611cd557600080fd5b505af1158015611ce9573d6000803e3d6000fd5b505050505050505050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051610e4d928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610180810167ffffffffffffffff81118282101715611dfe57611dfe611dab565b60405290565b604051610160810167ffffffffffffffff81118282101715611dfe57611dfe611dab565b60405160e0810167ffffffffffffffff81118282101715611dfe57611dfe611dab565b6040516060810167ffffffffffffffff81118282101715611dfe57611dfe611dab565b6040805190810167ffffffffffffffff81118282101715611dfe57611dfe611dab565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611ed857611ed8611dab565b604052919050565b60006020808385031215611ef357600080fd5b823567ffffffffffffffff80821115611f0b57600080fd5b818501915085601f830112611f1f57600080fd5b813581811115611f3157611f31611dab565b611f61847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611e91565b91508082528684828501011115611f7757600080fd5b8084840185840137600090820190930192909252509392505050565b600060208083528351808285015260005b81811015611fc057858101830151858201604001528201611fa4565b81811115611fd2576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b600082601f83011261201757600080fd5b61201f611e6e565b80604084018581111561203157600080fd5b845b8181101561204b578035845260209384019301612033565b509095945050505050565b600082601f83011261206757600080fd5b61206f611e6e565b80608084018581111561208157600080fd5b845b8181101561204b576120958782612006565b8452602090930192604001612083565b600061022082840312156120b857600080fd5b6120c0611dda565b823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a082015260c083013560c082015260e083013560e082015261010080840135818301525061012061212585828601612006565b9082015261016061213885858301612056565b61014083015261214c856101e08601612006565b908201529392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114610e4d57600080fd5b60006020828403121561218b57600080fd5b81356100f281612157565b600082601f8301126121a757600080fd5b6121af611e6e565b8060408401858111156121c157600080fd5b845b8181101561204b5780518452602093840193016121c3565b600082601f8301126121ec57600080fd5b6121f4611e6e565b80608084018581111561220657600080fd5b845b8181101561204b5761221a8782612196565b8452602090930192604001612208565b6000610220828403121561223d57600080fd5b612245611dda565b825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101206122aa85828601612196565b908201526101606122bd858583016121db565b61014083015261214c856101e08601612196565b805180151581146122e157600080fd5b919050565b80516122e181612157565b6000610160828403121561230457600080fd5b61230c611e04565b612315836122d1565b8152612323602084016122e6565b6020820152612334604084016122e6565b6040820152612345606084016122e6565b6060820152612356608084016122e6565b608082015261236760a084016122e6565b60a082015261237860c084016122e6565b60c082015261238960e084016122e6565b60e082015261010061239c8185016122e6565b908201526101206123ae8482016122e6565b9082015261014061214c8482016122e6565b8060005b60028110156112d85781518452602093840193909101906001016123c4565b61022081016123f282876123c0565b60408083018660005b60028110156124225761240f8383516123c0565b91830191602091909101906001016123fb565b5050505061243360c08301856123c0565b61010082018360005b600981101561245b57815183526020928301929091019060010161243c565b50505095945050505050565b60006020828403121561247957600080fd5b6100f2826122d1565b60006020828403121561249457600080fd5b5051919050565b805167ffffffffffffffff811681146122e157600080fd5b600060e082840312156124c557600080fd5b6124cd611e28565b6124d68361249b565b81526124e46020840161249b565b60208201526124f56040840161249b565b60408201526125066060840161249b565b60608201526125176080840161249b565b608082015261252860a0840161249b565b60a082015261253960c0840161249b565b60c08201529392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600181815b808511156125cd57817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211156125b3576125b3612545565b808516156125c057918102915b93841c9390800290612579565b509250929050565b6000826125e45750600161104d565b816125f15750600061104d565b816001811461260757600281146126115761262d565b600191505061104d565b60ff84111561262257612622612545565b50506001821b61104d565b5060208310610133831016604e8410600b8410161715612650575081810a61104d565b61265a8383612574565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482111561268c5761268c612545565b029392505050565b60006100f267ffffffffffffffff8416836125d5565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000826126e8576126e86126aa565b500690565b6000821982111561270057612700612545565b500190565b6000602080838503121561271857600080fd5b825167ffffffffffffffff8082111561273057600080fd5b818501915085601f83011261274457600080fd5b81518181111561275657612756611dab565b8060051b9150612767848301611e91565b818152918301840191848101908884111561278157600080fd5b938501935b8385101561279f57845182529385019390850190612786565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000606082840312156127ec57600080fd5b6127f4611e4b565b825163ffffffff8116811461280857600080fd5b81526128166020840161249b565b6020820152612827604084016122d1565b60408201529392505050565b805160ff811681146122e157600080fd5b600060e0828403121561285657600080fd5b61285e611e28565b825181526020830151602082015261287860408401612833565b604082015261288960608401612833565b606082015261289a6080840161249b565b60808201526128ab60a0840161249b565b60a082015260c083015160c08201528091505092915050565b6000828210156128d6576128d6612545565b500390565b600060ff821660ff8416808210156128f5576128f5612545565b90039392505050565b60008261290d5761290d6126aa565b500490565b600060ff831680612925576129256126aa565b8060ff84160691505092915050565b600060ff821660ff84168060ff0382111561295157612951612545565b019392505050565b600067ffffffffffffffff8381169083168181101561297a5761297a612545565b039392505050565b600067ffffffffffffffff8084168061299d5761299d6126aa565b92169190910692915050565b600067ffffffffffffffff8083168185168083038211156129cc576129cc612545565b01949350505050565b6000608082840312156129e757600080fd5b6040516080810181811067ffffffffffffffff82111715612a0a57612a0a611dab565b8060405250825181526020830151602082015260408301516040820152612a336060840161249b565b60608201529392505050565b600060608284031215612a5157600080fd5b612a59611e4b565b82518152602083015160208201526128276040840161249b565b600067ffffffffffffffff80841680612a8e57612a8e6126aa565b92169190910492915050565b600060208284031215612aac57600080fd5b81518060030b81146100f257600080fd5b600060a08284031215612acf57600080fd5b60405160a0810181811067ffffffffffffffff82111715612af257612af2611dab565b604052612afe8361249b565b8152612b0c6020840161249b565b6020820152612b1d6040840161249b565b6040820152612b2e6060840161249b565b6060820152608083015160808201528091505092915050565b600060408284031215612b5957600080fd5b6040516040810181811067ffffffffffffffff82111715612b7c57612b7c611dab565b604052612b888361249b565b8152612b966020840161249b565b6020820152939250505056fea264697066735822122099282dff1b5ba8e226b3bfe07b63158ec8f7851c14b26ce3cafb9e54037a510264736f6c634300080d0033";

type TakeResourcev2SystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TakeResourcev2SystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TakeResourcev2System__factory extends ContractFactory {
  constructor(...args: TakeResourcev2SystemConstructorParams) {
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
  ): Promise<TakeResourcev2System> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<TakeResourcev2System>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): TakeResourcev2System {
    return super.attach(address) as TakeResourcev2System;
  }
  override connect(signer: Signer): TakeResourcev2System__factory {
    return super.connect(signer) as TakeResourcev2System__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TakeResourcev2SystemInterface {
    return new utils.Interface(_abi) as TakeResourcev2SystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TakeResourcev2System {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TakeResourcev2System;
  }
}
