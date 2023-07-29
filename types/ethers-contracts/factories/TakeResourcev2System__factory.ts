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
  "0x60806040523480156200001157600080fd5b50604051620025133803806200251383398101604081905262000034916200022c565b818162000041336200010f565b6001600160a01b03811615620000585780620000bd565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000097573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bd91906200026b565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000105919062000183602090811b62000a5817901c565b5050505062000292565b600062000126620001ef60201b62000ae91760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022957600080fd5b50565b600080604083850312156200024057600080fd5b82516200024d8162000213565b6020840151909250620002608162000213565b809150509250929050565b6000602082840312156200027e57600080fd5b81516200028b8162000213565b9392505050565b61227180620002a26000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe146100515780638c6352851461007a5780638da5cb5b1461008d578063f2fde38b146100ba575b600080fd5b61006461005f366004611674565b6100cf565b6040516100719190611727565b60405180910390f35b610064610088366004611839565b6100f9565b610095610997565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100cd6100c836600461190d565b6109dc565b005b60606000828060200190518101906100e791906119be565b90506100f2816100f9565b9392505050565b60008054606091906101419073ffffffffffffffffffffffffffffffffffffffff167fd0deb8af54f5692432398f7f62bf53c9e54e6d6a9b4dbccb012b3fe04ea432d3610b0d565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040161012060405180830381865afa15801561018c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101b09190611a85565b8051909150156103235760006040518061012001604052808560000151815260200185602001518152602001856080015181526020018560a0015181526020018560c0015181526020018560e001518152602001856101000151815260200185604001518152602001856060015181525090508160c0015173ffffffffffffffffffffffffffffffffffffffff1663c542c93b856101200151866101400151876101600151856040518563ffffffff1660e01b81526004016102759493929190611b53565b602060405180830381865afa158015610292573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102b69190611bd7565b610321576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4661696c6564207265736f757263652070726f6f6620636865636b000000000060448201526064015b60405180910390fd5b505b60005433906103689073ffffffffffffffffffffffffffffffffffffffff167fd7eb4644b0f312b764e14b10dbe895c6ee4acad8c1eb37a4791309b4d942e427610b0d565b73ffffffffffffffffffffffffffffffffffffffff16630ff4c916826040518263ffffffff1660e01b81526004016103a291815260200190565b602060405180830381865afa1580156103bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103e39190611bf2565b84602001511461044f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f6e6f74207374616e64696e67206f6e207265736f7572636500000000000000006044820152606401610318565b600080546104939073ffffffffffffffffffffffffffffffffffffffff167f9e0b856941fb70fc9b56c896d5f39a2079c3ed041dbc5e87efbf9c503b354b76610b0d565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160e060405180830381865afa1580156104dd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105019190611c23565b9050806080015167ffffffffffffffff1685604001511115801561053757508060a0015167ffffffffffffffff16856060015111155b61059d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f726164697573206f766572206c696d69740000000000000000000000000000006044820152606401610318565b611d4c8560e00151101580156105d4575080516105bb906040611ce4565b6105c6906010611e2d565b85516105d29190611e72565b155b801561060757506000816020015160406105ee9190611ce4565b6105f9906010611e2d565b86516106059190611e72565b115b61066d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6e6f207265736f7572636520746f2064696700000000000000000000000000006044820152606401610318565b61067f85600001518660a00151610c5b565b6020850151600080546106c89073ffffffffffffffffffffffffffffffffffffffff167fe364070e7addf383981cab98a86215b0a227507d32346ce1205f3e07167055c8610b0d565b905060008060006106de858b6101000151610ee6565b91945092509050600080546107299073ffffffffffffffffffffffffffffffffffffffff167f2f3c6eb2abe480dcea02a3f0d6883cd4e62a46b8207d85e1ff6f6e5cdee24b7a610b0d565b6040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481018a905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015610797573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107bb9190611bd7565b1561085c576040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810189905273ffffffffffffffffffffffffffffffffffffffff821690630ff4c91690602401602060405180830381865afa15801561082b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061084f9190611bf2565b6108599084611e86565b92505b604080516060810182528581526000602082015267ffffffffffffffff42168183015290517f84491fff00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8716916384491fff916108d0918a91600401611e9e565b600060405180830381600087803b1580156108ea57600080fd5b505af11580156108fe573d6000803e3d6000fd5b50506040517f1ab06ee5000000000000000000000000000000000000000000000000000000008152600481018b90526024810186905273ffffffffffffffffffffffffffffffffffffffff84169250631ab06ee59150604401600060405180830381600087803b15801561097157600080fd5b505af1158015610985573d6000803e3d6000fd5b50505050505050505050505050919050565b60006109d77f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610a4c576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a55816114ae565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015610b7d573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610bc39190810190611ed0565b90508051600003610c30576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f7420726567697374657265640000000000000000000000000000006044820152606401610318565b610c5181600081518110610c4657610c46611f76565b602002602001015190565b9150505b92915050565b60008054610c9f9073ffffffffffffffffffffffffffffffffffffffff167f4b1ac4c3aa37732e927cbff52c019e9fbdad0f3e454031afaefd319a3dc66ce4610b0d565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810185905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015610d0d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d319190611bd7565b610d97576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f636f6f7264206e6f74206d61726b6564000000000000000000000000000000006044820152606401610318565b6040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810184905260009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401606060405180830381865afa158015610e05573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e299190611fa5565b90508263ffffffff16816000015163ffffffff16148015610e7a5750806040015180610e7a57508060400151158015610e7a57504267ffffffffffffffff16816020015167ffffffffffffffff1610155b610ee0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f666f67207365656420696e76616c6964000000000000000000000000000000006044820152606401610318565b50505050565b60008054819081908190610f309073ffffffffffffffffffffffffffffffffffffffff167fedfbc254303008e09cc3e514d4150bac7c69acbeb4ac0177f668a82648a4119e610b0d565b6000805491925090610f789073ffffffffffffffffffffffffffffffffffffffff167fe364070e7addf383981cab98a86215b0a227507d32346ce1205f3e07167055c8610b0d565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810189905260009650869550859450909150839060019073ffffffffffffffffffffffffffffffffffffffff85169063cccf7a8e90602401602060405180830381865afa158015610ff5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110199190611bd7565b61126557600080546110619073ffffffffffffffffffffffffffffffffffffffff167f449046c6526dd477102b464b5eeec34aaf8161a18f2ba1757f71638ac037f72f610b0d565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160e060405180830381865afa1580156110ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110cf919061202d565b60208101518151919250906110e59082906120ad565b6110ef908b6120c4565b6110f99190611e86565b60608201516040830151919450906111129082906120d8565b6020830151835161112391906120ad565b61112d908c611e72565b61113791906120fb565b611141919061211d565b60ff1695508060a001518160a00151826080015161115f9190611ce4565b8260600151836040015161117391906120d8565b60ff168360200151846000015161118a91906120ad565b611194908d611e72565b61119e9190611e72565b6111a89190612142565b6111b29190612169565b604080516060810182528581526020810189905267ffffffffffffffff83168183015290517f84491fff00000000000000000000000000000000000000000000000000000000815291935073ffffffffffffffffffffffffffffffffffffffff8716916384491fff9161122a918e9190600401611e9e565b600060405180830381600087803b15801561124457600080fd5b505af1158015611258573d6000803e3d6000fd5b505050508297505061130d565b6040517f0ff4c916000000000000000000000000000000000000000000000000000000008152600481018a905260009073ffffffffffffffffffffffffffffffffffffffff861690630ff4c91690602401606060405180830381865afa1580156112d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112f791906121f8565b8051602082015160409092015191975093509150505b6040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481018a905273ffffffffffffffffffffffffffffffffffffffff84169063cccf7a8e90602401602060405180830381865afa158015611378573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061139c9190611bd7565b156114a3576040517f0ff4c916000000000000000000000000000000000000000000000000000000008152600481018a905260009073ffffffffffffffffffffffffffffffffffffffff851690630ff4c91690602401606060405180830381865afa15801561140f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061143391906121f8565b805160208201519099509750905067ffffffffffffffff8216156114a1576000828260400151426114649190611ce4565b61146e9190612214565b67ffffffffffffffff16905083611485828b611e86565b106114925783985061149f565b61149c818a611e86565b98505b505b505b505050509250925092565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051610a55928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610180810167ffffffffffffffff811182821017156115b5576115b5611562565b60405290565b604051610120810167ffffffffffffffff811182821017156115b5576115b5611562565b60405160e0810167ffffffffffffffff811182821017156115b5576115b5611562565b6040805190810167ffffffffffffffff811182821017156115b5576115b5611562565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561166c5761166c611562565b604052919050565b6000602080838503121561168757600080fd5b823567ffffffffffffffff8082111561169f57600080fd5b818501915085601f8301126116b357600080fd5b8135818111156116c5576116c5611562565b6116f5847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611625565b9150808252868482850101111561170b57600080fd5b8084840185840137600090820190930192909252509392505050565b600060208083528351808285015260005b8181101561175457858101830151858201604001528201611738565b81811115611766576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b600082601f8301126117ab57600080fd5b6117b3611602565b8060408401858111156117c557600080fd5b845b818110156117df5780358452602093840193016117c7565b509095945050505050565b600082601f8301126117fb57600080fd5b611803611602565b80608084018581111561181557600080fd5b845b818110156117df57611829878261179a565b8452602090930192604001611817565b6000610220828403121561184c57600080fd5b611854611591565b823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a082015260c083013560c082015260e083013560e08201526101008084013581830152506101206118b98582860161179a565b908201526101606118cc858583016117ea565b6101408301526118e0856101e0860161179a565b908201529392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114610a5557600080fd5b60006020828403121561191f57600080fd5b81356100f2816118eb565b600082601f83011261193b57600080fd5b611943611602565b80604084018581111561195557600080fd5b845b818110156117df578051845260209384019301611957565b600082601f83011261198057600080fd5b611988611602565b80608084018581111561199a57600080fd5b845b818110156117df576119ae878261192a565b845260209093019260400161199c565b600061022082840312156119d157600080fd5b6119d9611591565b825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120611a3e8582860161192a565b90820152610160611a518585830161196f565b6101408301526118e0856101e0860161192a565b80518015158114611a7557600080fd5b919050565b8051611a75816118eb565b60006101208284031215611a9857600080fd5b611aa06115bb565b611aa983611a65565b8152611ab760208401611a7a565b6020820152611ac860408401611a7a565b6040820152611ad960608401611a7a565b6060820152611aea60808401611a7a565b6080820152611afb60a08401611a7a565b60a0820152611b0c60c08401611a7a565b60c0820152611b1d60e08401611a7a565b60e08201526101006118e0818501611a7a565b8060005b6002811015610ee0578151845260209384019390910190600101611b34565b6102208101611b628287611b30565b60408083018660005b6002811015611b9257611b7f838351611b30565b9183019160209190910190600101611b6b565b50505050611ba360c0830185611b30565b61010082018360005b6009811015611bcb578151835260209283019290910190600101611bac565b50505095945050505050565b600060208284031215611be957600080fd5b6100f282611a65565b600060208284031215611c0457600080fd5b5051919050565b805167ffffffffffffffff81168114611a7557600080fd5b600060e08284031215611c3557600080fd5b611c3d6115df565b611c4683611c0b565b8152611c5460208401611c0b565b6020820152611c6560408401611c0b565b6040820152611c7660608401611c0b565b6060820152611c8760808401611c0b565b6080820152611c9860a08401611c0b565b60a0820152611ca960c08401611c0b565b60c08201529392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600067ffffffffffffffff83811690831681811015611d0557611d05611cb5565b039392505050565b600181815b80851115611d6657817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115611d4c57611d4c611cb5565b80851615611d5957918102915b93841c9390800290611d12565b509250929050565b600082611d7d57506001610c55565b81611d8a57506000610c55565b8160018114611da05760028114611daa57611dc6565b6001915050610c55565b60ff841115611dbb57611dbb611cb5565b50506001821b610c55565b5060208310610133831016604e8410600b8410161715611de9575081810a610c55565b611df38383611d0d565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115611e2557611e25611cb5565b029392505050565b60006100f267ffffffffffffffff841683611d6e565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600082611e8157611e81611e43565b500490565b60008219821115611e9957611e99611cb5565b500190565b828152608081016100f26020830184805182526020808201519083015260409081015167ffffffffffffffff16910152565b60006020808385031215611ee357600080fd5b825167ffffffffffffffff80821115611efb57600080fd5b818501915085601f830112611f0f57600080fd5b815181811115611f2157611f21611562565b8060051b9150611f32848301611625565b8181529183018401918481019088841115611f4c57600080fd5b938501935b83851015611f6a57845182529385019390850190611f51565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060608284031215611fb757600080fd5b6040516060810181811067ffffffffffffffff82111715611fda57611fda611562565b604052825163ffffffff81168114611ff157600080fd5b8152611fff60208401611c0b565b602082015261201060408401611a65565b60408201529392505050565b805160ff81168114611a7557600080fd5b600060e0828403121561203f57600080fd5b6120476115df565b82518152602083015160208201526120616040840161201c565b60408201526120726060840161201c565b606082015261208360808401611c0b565b608082015261209460a08401611c0b565b60a082015260c083015160c08201528091505092915050565b6000828210156120bf576120bf611cb5565b500390565b6000826120d3576120d3611e43565b500690565b600060ff821660ff8416808210156120f2576120f2611cb5565b90039392505050565b600060ff83168061210e5761210e611e43565b8060ff84160691505092915050565b600060ff821660ff84168060ff0382111561213a5761213a611cb5565b019392505050565b600067ffffffffffffffff8084168061215d5761215d611e43565b92169190910692915050565b600067ffffffffffffffff80831681851680830382111561218c5761218c611cb5565b01949350505050565b6000606082840312156121a757600080fd5b6040516060810181811067ffffffffffffffff821117156121ca576121ca611562565b806040525080915082518152602083015160208201526121ec60408401611c0b565b60408201525092915050565b60006060828403121561220a57600080fd5b6100f28383612195565b600067ffffffffffffffff8084168061222f5761222f611e43565b9216919091049291505056fea264697066735822122071aea64194838933d0fa95a539396921fa953cc9c9b3ed5768ed7ddc76ee889b64736f6c634300080d0033";

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
