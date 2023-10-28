/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  CreateGuildSystem,
  CreateGuildSystemInterface,
} from "../CreateGuildSystem";

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
          {
            internalType: "string",
            name: "flag",
            type: "string",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "uint32",
            name: "regime",
            type: "uint32",
          },
        ],
        internalType: "struct CreateInfo",
        name: "createInfo",
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
  "0x60806040523480156200001157600080fd5b50604051620029283803806200292883398101604081905262000034916200022c565b818162000041336200010f565b6001600160a01b03811615620000585780620000bd565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000097573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bd91906200026b565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000105919062000183602090811b62000c2917901c565b5050505062000292565b600062000126620001ef60201b62000cba1760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022957600080fd5b50565b600080604083850312156200024057600080fd5b82516200024d8162000213565b6020840151909250620002608162000213565b809150509250929050565b6000602082840312156200027e57600080fd5b81516200028b8162000213565b9392505050565b61268680620002a26000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe146100515780638da5cb5b1461007a578063b22738b8146100a7578063f2fde38b146100ba575b600080fd5b61006461005f366004611af5565b6100cf565b6040516100719190611bb8565b60405180910390f35b6100826100f9565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100646100b5366004611cac565b61013e565b6100cd6100c8366004611dfa565b610bad565b005b60606000828060200190518101906100e79190611efb565b90506100f28161013e565b9392505050565b60006101397f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b60008054606091906101869073ffffffffffffffffffffffffffffffffffffffff167fd0deb8af54f5692432398f7f62bf53c9e54e6d6a9b4dbccb012b3fe04ea432d3610cde565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040161016060405180830381865afa1580156101d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101f59190612035565b805190915015610331576000604051806080016040528085600001518152602001856060015181526020018560200151815260200185604001518152509050816020015173ffffffffffffffffffffffffffffffffffffffff16635fe8c13b85608001518660a001518760c00151856040518563ffffffff1660e01b81526004016102839493929190612132565b602060405180830381865afa1580156102a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c491906121b6565b61032f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f4661696c6564206775696c6420636f6f72642070726f6f6620636865636b000060448201526064015b60405180910390fd5b505b3361033b81610e2a565b6103a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f706c6179657220646561640000000000000000000000000000000000000000006044820152606401610326565b6103a9610eef565b600080546103ed9073ffffffffffffffffffffffffffffffffffffffff167ff899011875ecdd0cff874cbbf66c1a2682791e10ae993d0a0ef3d2530849a7de610cde565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b8152600401600060405180830381865afa158015610437573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261047d91908101906121e9565b905061048c8160000151611056565b600154604080517f614bfa6e000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff169163614bfa6e9160048083019260209291908290030181865afa1580156104fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105209190612351565b905061052b816112b2565b60005461056e9073ffffffffffffffffffffffffffffffffffffffff167f47847aa6dad6656997b23b837b7a178fcf6ee815ad8065af73bc07856277a776610cde565b73ffffffffffffffffffffffffffffffffffffffff1663dc7e8010826040518061010001604052808781526020018a60e0015181526020018a610100015181526020018a610120015181526020014267ffffffffffffffff1681526020018a610140015163ffffffff168152602001866020015163ffffffff16815260200160008152506040518363ffffffff1660e01b815260040161060f92919061236a565b600060405180830381600087803b15801561062957600080fd5b505af115801561063d573d6000803e3d6000fd5b505050506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663614bfa6e6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156106b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106d49190612351565b60005490915061071a9073ffffffffffffffffffffffffffffffffffffffff167fde95e8412e4c1b59c183267e54d1bef716ab450b30c57bb7c5c88a38771301ab610cde565b6040805160a081018252600480825260e087015160208301528651828401526000606083015267ffffffffffffffff4216608083015291517fa829044000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff939093169263a8290440926107a392869290910161244c565b600060405180830381600087803b1580156107bd57600080fd5b505af11580156107d1573d6000803e3d6000fd5b5050600054610819925073ffffffffffffffffffffffffffffffffffffffff1690507fd9a058a8db06aec9057108bd96cfe2e7f580ccef7b81e22c7f33b2889597c1f2610cde565b6040517f1ab06ee5000000000000000000000000000000000000000000000000000000008152600481018390526024810186905273ffffffffffffffffffffffffffffffffffffffff9190911690631ab06ee590604401600060405180830381600087803b15801561088a57600080fd5b505af115801561089e573d6000803e3d6000fd5b50506000546108e6925073ffffffffffffffffffffffffffffffffffffffff1690507f53c6c48404020c13382f2b1b9b291c13f7e76aa44e5c76f2f9384b8aa97bfbe0610cde565b6040517f1ab06ee5000000000000000000000000000000000000000000000000000000008152600481018390526024810184905273ffffffffffffffffffffffffffffffffffffffff9190911690631ab06ee590604401600060405180830381600087803b15801561095757600080fd5b505af115801561096b573d6000803e3d6000fd5b5050600080549092506109b5915073ffffffffffffffffffffffffffffffffffffffff167f540f4a4851e5d34b3358a3dee845da1e4701d9bee45567aba7c95c4239185cbd610cde565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810187905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015610a23573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a4791906121b6565b610ad3576040517f1ab06ee5000000000000000000000000000000000000000000000000000000008152600481018690526024810183905273ffffffffffffffffffffffffffffffffffffffff821690631ab06ee590604401600060405180830381600087803b158015610aba57600080fd5b505af1158015610ace573d6000803e3d6000fd5b505050505b600054610b169073ffffffffffffffffffffffffffffffffffffffff167fd7eb4644b0f312b764e14b10dbe895c6ee4acad8c1eb37a4791309b4d942e427610cde565b88516040517f1ab06ee500000000000000000000000000000000000000000000000000000000815260048101869052602481019190915273ffffffffffffffffffffffffffffffffffffffff9190911690631ab06ee590604401600060405180830381600087803b158015610b8a57600080fd5b505af1158015610b9e573d6000803e3d6000fd5b50505050505050505050919050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610c1d576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c26816118f2565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015610d4e573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610d9491908101906124b3565b90508051600003610e01576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f7420726567697374657265640000000000000000000000000000006044820152606401610326565b610e2281600081518110610e1757610e17612559565b602002602001015190565b949350505050565b60008054610e6e9073ffffffffffffffffffffffffffffffffffffffff167f8900e57ac2ff61c328bbaa69d2071a542ae5ff48c693375a49fd2937c1ef8332610cde565b73ffffffffffffffffffffffffffffffffffffffff1663cccf7a8e836040518263ffffffff1660e01b8152600401610ea891815260200190565b602060405180830381865afa158015610ec5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ee991906121b6565b92915050565b60008054339190610f369073ffffffffffffffffffffffffffffffffffffffff167fd9a058a8db06aec9057108bd96cfe2e7f580ccef7b81e22c7f33b2889597c1f2610cde565b6040517ffbdfa1ea0000000000000000000000000000000000000000000000000000000081526004810184905290915073ffffffffffffffffffffffffffffffffffffffff82169063fbdfa1ea90602401600060405180830381865afa158015610fa4573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610fea91908101906124b3565b5115611052576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f6c65616465722063616e6e6f7420696e2061206775696c6400000000000000006044820152606401610326565b5050565b6000805433919061109d9073ffffffffffffffffffffffffffffffffffffffff167f2f3c6eb2abe480dcea02a3f0d6883cd4e62a46b8207d85e1ff6f6e5cdee24b7a610cde565b6040517f0ff4c91600000000000000000000000000000000000000000000000000000000815260048101849052909150839073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401602060405180830381865afa15801561110d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111319190612351565b1015611199576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6c61636b206f66207265736f75726365730000000000000000000000000000006044820152606401610326565b6040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff821690631ab06ee590849086908490630ff4c91690602401602060405180830381865afa158015611210573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112349190612351565b61123e9190612588565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b168152600481019290925260248201526044015b600060405180830381600087803b15801561129557600080fd5b505af11580156112a9573d6000803e3d6000fd5b50505050505050565b60005433906112f79073ffffffffffffffffffffffffffffffffffffffff167f2f3c6eb2abe480dcea02a3f0d6883cd4e62a46b8207d85e1ff6f6e5cdee24b7a610cde565b6040517f1ab06ee5000000000000000000000000000000000000000000000000000000008152600481018490526000602482015273ffffffffffffffffffffffffffffffffffffffff9190911690631ab06ee590604401600060405180830381600087803b15801561136857600080fd5b505af115801561137c573d6000803e3d6000fd5b50506000546113c4925073ffffffffffffffffffffffffffffffffffffffff1690507fb58ee6825aedec1d358adc24e0bfee53cd2d268bda2eed874befd69d96060781610cde565b6040517f1ab06ee5000000000000000000000000000000000000000000000000000000008152600481018490526000602482015273ffffffffffffffffffffffffffffffffffffffff9190911690631ab06ee590604401600060405180830381600087803b15801561143557600080fd5b505af1158015611449573d6000803e3d6000fd5b5050600054611491925073ffffffffffffffffffffffffffffffffffffffff1690507fac076b5f5d1516d2521ec3f10d723c130b0a9f32384857e1697264ee87292ce0610cde565b6040517f1ab06ee5000000000000000000000000000000000000000000000000000000008152600481018490526000602482015273ffffffffffffffffffffffffffffffffffffffff9190911690631ab06ee590604401600060405180830381600087803b15801561150257600080fd5b505af1158015611516573d6000803e3d6000fd5b505060005461155e925073ffffffffffffffffffffffffffffffffffffffff1690507f6c062316985e8e531501d3a588aed06abfad54c545ae238fe2d6f51a6ab9bee8610cde565b6040517f1ab06ee5000000000000000000000000000000000000000000000000000000008152600481018490526002602482015273ffffffffffffffffffffffffffffffffffffffff9190911690631ab06ee590604401600060405180830381600087803b1580156115cf57600080fd5b505af11580156115e3573d6000803e3d6000fd5b505060005461162b925073ffffffffffffffffffffffffffffffffffffffff1690507f0f2f1f89defcb2e35e7a49b75f5a0777c977a6210b31a42137e9620ef524f0dc610cde565b6040517fd93c413f000000000000000000000000000000000000000000000000000000008152600481018490526002602482015273ffffffffffffffffffffffffffffffffffffffff919091169063d93c413f90604401600060405180830381600087803b15801561169c57600080fd5b505af11580156116b0573d6000803e3d6000fd5b5050600080549092506116fa915073ffffffffffffffffffffffffffffffffffffffff167fdc602e66a6d8c84d0c8d6c4292d80341393a1e04ff02909a12718a4216d3a9f7610cde565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160a060405180830381865afa158015611744573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061176891906125c6565b6000549091506117ae9073ffffffffffffffffffffffffffffffffffffffff167f189eafd1a01543209399086ef2e12962fca648be4826ce2b3eb2e53ed14bf141610cde565b60408051808201825267ffffffffffffffff4281168252845181166020830190815292517f4e6641a9000000000000000000000000000000000000000000000000000000008152600481018890529151811660248301529151909116604482015273ffffffffffffffffffffffffffffffffffffffff9190911690634e6641a990606401600060405180830381600087803b15801561184c57600080fd5b505af1158015611860573d6000803e3d6000fd5b50506000546118a8925073ffffffffffffffffffffffffffffffffffffffff1690507f3c3102d48c6d31b1a70ddf8b23d300c759379d6506f2ef221cf3056d7c54dca7610cde565b73ffffffffffffffffffffffffffffffffffffffff1663d93c413f8483604001516040518363ffffffff1660e01b815260040161127b92919091825260030b602082015260400190565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051610c26928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610160810167ffffffffffffffff811182821017156119f9576119f96119a6565b60405290565b6040805190810167ffffffffffffffff811182821017156119f9576119f96119a6565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611a6957611a696119a6565b604052919050565b600067ffffffffffffffff821115611a8b57611a8b6119a6565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b6000611aca611ac584611a71565b611a22565b9050828152838383011115611ade57600080fd5b828260208301376000602084830101529392505050565b600060208284031215611b0757600080fd5b813567ffffffffffffffff811115611b1e57600080fd5b8201601f81018413611b2f57600080fd5b610e2284823560208401611ab7565b60005b83811015611b59578181015183820152602001611b41565b83811115611b68576000848401525b50505050565b60008151808452611b86816020860160208601611b3e565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006100f26020830184611b6e565b600082601f830112611bdc57600080fd5b611be46119ff565b806040840185811115611bf657600080fd5b845b81811015611c10578035845260209384019301611bf8565b509095945050505050565b600082601f830112611c2c57600080fd5b611c346119ff565b806080840185811115611c4657600080fd5b845b81811015611c1057611c5a8782611bcb565b8452602090930192604001611c48565b600082601f830112611c7b57600080fd5b6100f283833560208501611ab7565b63ffffffff81168114610c2657600080fd5b8035611ca781611c8a565b919050565b600060208284031215611cbe57600080fd5b813567ffffffffffffffff80821115611cd657600080fd5b908301906102008286031215611ceb57600080fd5b611cf36119d5565b82358152602083013560208201526040830135604082015260608301356060820152611d228660808501611bcb565b6080820152611d348660c08501611c1b565b60a0820152610140611d4887828601611bcb565b60c083015261018084013583811115611d6057600080fd5b611d6c88828701611c6a565b60e0840152506101a084013583811115611d8557600080fd5b611d9188828701611c6a565b610100840152506101c084013583811115611dab57600080fd5b611db788828701611c6a565b61012084015250611dcb6101e08501611c9c565b9082015295945050505050565b73ffffffffffffffffffffffffffffffffffffffff81168114610c2657600080fd5b600060208284031215611e0c57600080fd5b81356100f281611dd8565b600082601f830112611e2857600080fd5b611e306119ff565b806040840185811115611e4257600080fd5b845b81811015611c10578051845260209384019301611e44565b600082601f830112611e6d57600080fd5b611e756119ff565b806080840185811115611e8757600080fd5b845b81811015611c1057611e9b8782611e17565b8452602090930192604001611e89565b600082601f830112611ebc57600080fd5b8151611eca611ac582611a71565b818152846020838601011115611edf57600080fd5b610e22826020830160208701611b3e565b8051611ca781611c8a565b600060208284031215611f0d57600080fd5b815167ffffffffffffffff80821115611f2557600080fd5b908301906102008286031215611f3a57600080fd5b611f426119d5565b82518152602083015160208201526040830151604082015260608301516060820152611f718660808501611e17565b6080820152611f838660c08501611e5c565b60a0820152610140611f9787828601611e17565b60c083015261018084015183811115611faf57600080fd5b611fbb88828701611eab565b60e0840152506101a084015183811115611fd457600080fd5b611fe088828701611eab565b610100840152506101c084015183811115611ffa57600080fd5b61200688828701611eab565b61012084015250611dcb6101e08501611ef0565b80518015158114611ca757600080fd5b8051611ca781611dd8565b6000610160828403121561204857600080fd5b6120506119d5565b6120598361201a565b81526120676020840161202a565b60208201526120786040840161202a565b60408201526120896060840161202a565b606082015261209a6080840161202a565b60808201526120ab60a0840161202a565b60a08201526120bc60c0840161202a565b60c08201526120cd60e0840161202a565b60e08201526101006120e081850161202a565b908201526101206120f284820161202a565b9082015261014061210484820161202a565b908201529392505050565b8060005b6002811015611b68578151845260209384019390910190600101612113565b6101808101612141828761210f565b60408083018660005b60028110156121715761215e83835161210f565b918301916020919091019060010161214a565b5050505061218260c083018561210f565b61010082018360005b60048110156121aa57815183526020928301929091019060010161218b565b50505095945050505050565b6000602082840312156121c857600080fd5b6100f28261201a565b805167ffffffffffffffff81168114611ca757600080fd5b6000602082840312156121fb57600080fd5b815167ffffffffffffffff8082111561221357600080fd5b90830190610160828603121561222857600080fd5b6122306119d5565b8251815261224060208401611ef0565b602082015261225160408401611ef0565b604082015260608301518281111561226857600080fd5b61227487828601611eab565b60608301525060808301518281111561228c57600080fd5b61229887828601611eab565b60808301525060a0830151828111156122b057600080fd5b6122bc87828601611eab565b60a08301525060c0830151828111156122d457600080fd5b6122e087828601611eab565b60c08301525060e0830151828111156122f857600080fd5b61230487828601611eab565b60e083015250610100915061231a828401611ef0565b82820152610120915061232e828401611ef0565b8282015261014091506123428284016121d1565b91810191909152949350505050565b60006020828403121561236357600080fd5b5051919050565b828152604060208201528151604082015260006020830151610100806060850152612399610140850183611b6e565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0808685030160808701526123d58483611b6e565b935060608701519150808685030160a0870152506123f38382611b6e565b925050608085015161241160c086018267ffffffffffffffff169052565b5060a085015163ffffffff811660e08601525060c085015163ffffffff811685830152505060e0840151610120840152809150509392505050565b8281526040602082015263ffffffff82511660408201526000602083015160a0606084015261247e60e0840182611b6e565b905060408401516080840152606084015160a084015267ffffffffffffffff60808501511660c0840152809150509392505050565b600060208083850312156124c657600080fd5b825167ffffffffffffffff808211156124de57600080fd5b818501915085601f8301126124f257600080fd5b815181811115612504576125046119a6565b8060051b9150612515848301611a22565b818152918301840191848101908884111561252f57600080fd5b938501935b8385101561254d57845182529385019390850190612534565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000828210156125c1577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500390565b600060a082840312156125d857600080fd5b60405160a0810181811067ffffffffffffffff821117156125fb576125fb6119a6565b604052612607836121d1565b8152612615602084016121d1565b6020820152612626604084016121d1565b6040820152612637606084016121d1565b606082015260808301516080820152809150509291505056fea2646970667358221220091de05381d34dd3c3220030a001a0752241f7536369582074cd9aa0d0a6b84264736f6c634300080d0033";

type CreateGuildSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CreateGuildSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CreateGuildSystem__factory extends ContractFactory {
  constructor(...args: CreateGuildSystemConstructorParams) {
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
  ): Promise<CreateGuildSystem> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<CreateGuildSystem>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): CreateGuildSystem {
    return super.attach(address) as CreateGuildSystem;
  }
  override connect(signer: Signer): CreateGuildSystem__factory {
    return super.connect(signer) as CreateGuildSystem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CreateGuildSystemInterface {
    return new utils.Interface(_abi) as CreateGuildSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CreateGuildSystem {
    return new Contract(address, _abi, signerOrProvider) as CreateGuildSystem;
  }
}
