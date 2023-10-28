/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  BoundTreasureSystem,
  BoundTreasureSystemInterface,
} from "../BoundTreasureSystem";

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
        indexed: false,
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "Debug",
    type: "event",
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
        name: "treasureId",
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
  "0x60806040523480156200001157600080fd5b5060405162002b1e38038062002b1e83398101604081905262000034916200022c565b818162000041336200010f565b6001600160a01b03811615620000585780620000bd565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000097573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bd91906200026b565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000105919062000183602090811b620009b317901c565b5050505062000292565b600062000126620001ef60201b62000a441760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022957600080fd5b50565b600080604083850312156200024057600080fd5b82516200024d8162000213565b6020840151909250620002608162000213565b809150509250929050565b6000602082840312156200027e57600080fd5b81516200028b8162000213565b9392505050565b61287c80620002a26000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe146100515780633e991df31461007a5780638da5cb5b1461008d578063f2fde38b146100ba575b600080fd5b61006461005f366004611d31565b6100cf565b6040516100719190611e2b565b60405180910390f35b610064610088366004611e3e565b6100f9565b6100956108f2565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100cd6100c8366004611e79565b610937565b005b60606000828060200190518101906100e79190611e96565b90506100f2816100f9565b9392505050565b60603361010581610a68565b610170576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f706c61796572206465616400000000000000000000000000000000000000000060448201526064015b60405180910390fd5b600080546101b49073ffffffffffffffffffffffffffffffffffffffff167f28b9f73e6b271728535a5e2b6da73f60f1fa049519ed11d9203e38922757cf06610b2d565b60008054919250906101fc9073ffffffffffffffffffffffffffffffffffffffff167f65188156108ab445e8ddb20e749f49402ca97dc723f07951b1c4a011dd8e1166610b2d565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810187905290915073ffffffffffffffffffffffffffffffffffffffff83169063cccf7a8e90602401602060405180830381865afa15801561026a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061028e9190611eaf565b801561032857506040517f0ff4c91600000000000000000000000000000000000000000000000000000000815260048101869052839073ffffffffffffffffffffffffffffffffffffffff841690630ff4c91690602401602060405180830381865afa158015610302573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103269190611e96565b145b80156103be57506040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810186905273ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa15801561039a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103be9190611eaf565b610424576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6e6f742076616c696420747265617375726500000000000000000000000000006044820152606401610167565b6040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810186905260009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401600060405180830381865afa158015610492573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526104d89190810190611f63565b60008054919250906105209073ffffffffffffffffffffffffffffffffffffffff167f86de2523be15c705f9f8dd1d4bb281bde3a61929d7080e6cb8cc6f383a0a143c610b2d565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810189905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa15801561058e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105b29190611eaf565b158061066357506040517f0ff4c916000000000000000000000000000000000000000000000000000000008152600481018890524267ffffffffffffffff169073ffffffffffffffffffffffffffffffffffffffff831690630ff4c916906024016040805180830381865afa15801561062f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061065391906120cf565b6020015167ffffffffffffffff16105b6106c9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f616c726561647920426f756e64656400000000000000000000000000000000006044820152606401610167565b816040015160ff16600003610844576000805461071c9073ffffffffffffffffffffffffffffffffffffffff167f44d5df6fedbb1676612b3073b831a5f6f1d59057fb2b8978e7146cb8eee3ca8c610b2d565b6040517f0ff4c916000000000000000000000000000000000000000000000000000000008152600481018a905290915067ffffffffffffffff42169073ffffffffffffffffffffffffffffffffffffffff831690630ff4c916906024016040805180830381865afa158015610795573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107b991906120cf565b5167ffffffffffffffff161061082b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6e6f7420636f6f6c646f776e20796574000000000000000000000000000000006044820152606401610167565b610839836101000151610c79565b61084288611071565b505b8073ffffffffffffffffffffffffffffffffffffffff16634e6641a98860405180604001604052804267ffffffffffffffff16815260200186608001514261088c919061211a565b67ffffffffffffffff168152506040518363ffffffff1660e01b81526004016108b6929190612146565b600060405180830381600087803b1580156108d057600080fd5b505af11580156108e4573d6000803e3d6000fd5b505050505050505050919050565b60006109327f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146109a7576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109b0816119e3565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b60008054610aac9073ffffffffffffffffffffffffffffffffffffffff167f8900e57ac2ff61c328bbaa69d2071a542ae5ff48c693375a49fd2937c1ef8332610b2d565b73ffffffffffffffffffffffffffffffffffffffff1663cccf7a8e836040518263ffffffff1660e01b8152600401610ae691815260200190565b602060405180830381865afa158015610b03573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b279190611eaf565b92915050565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015610b9d573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610be39190810190612171565b90508051600003610c50576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f7420726567697374657265640000000000000000000000000000006044820152606401610167565b610c7181600081518110610c6657610c66612217565b602002602001015190565b949350505050565b60008054339190610cc09073ffffffffffffffffffffffffffffffffffffffff167f189eafd1a01543209399086ef2e12962fca648be4826ce2b3eb2e53ed14bf141610b2d565b6000805491925090610d089073ffffffffffffffffffffffffffffffffffffffff167f3c3102d48c6d31b1a70ddf8b23d300c759379d6506f2ef221cf3056d7c54dca7610b2d565b6040517f720354530000000000000000000000000000000000000000000000000000000081526004810185905290915060009073ffffffffffffffffffffffffffffffffffffffff831690637203545390602401602060405180830381865afa158015610d79573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d9d9190612246565b6000805491925090610de59073ffffffffffffffffffffffffffffffffffffffff167fdc602e66a6d8c84d0c8d6c4292d80341393a1e04ff02909a12718a4216d3a9f7610b2d565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160a060405180830381865afa158015610e2f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e539190612269565b6040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810187905290915060009073ffffffffffffffffffffffffffffffffffffffff861690630ff4c916906024016040805180830381865afa158015610ec3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ee791906120cf565b60208301518151919250600091610efe90426122f3565b610f08919061231c565b8260200151610f17919061211a565b905063ffffffff841667ffffffffffffffff82161115610f3a575063ffffffff83165b8767ffffffffffffffff168167ffffffffffffffff161015610fb8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f6c61636b206f6620616374696f6e20706f696e747300000000000000000000006044820152606401610167565b610fc288826122f3565b60408051808201825267ffffffffffffffff42811682528316602082015290517f4e6641a900000000000000000000000000000000000000000000000000000000815291925073ffffffffffffffffffffffffffffffffffffffff881691634e6641a991611035918b9190600401612146565b600060405180830381600087803b15801561104f57600080fd5b505af1158015611063573d6000803e3d6000fd5b505050505050505050505050565b600080543391906110b89073ffffffffffffffffffffffffffffffffffffffff167f65188156108ab445e8ddb20e749f49402ca97dc723f07951b1c4a011dd8e1166610b2d565b6040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810185905290915060009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401600060405180830381865afa158015611129573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261116f9190810190611f63565b60008054919250906111b79073ffffffffffffffffffffffffffffffffffffffff167f44d5df6fedbb1676612b3073b831a5f6f1d59057fb2b8978e7146cb8eee3ca8c610b2d565b60008054919250906111ff9073ffffffffffffffffffffffffffffffffffffffff167fef3393883620fd592853ef61d4a33b35dd9fd9e4dc925bc5e1463919917423ab610b2d565b6040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810188905290915060009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401606060405180830381865afa158015611270573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611294919061236a565b90506060806112a683600001516119ec565b60408051610120810182527fcb4a975020772dc4fdbf8d96cc7ce01d61f2ab80a871c7dfc0ce14b94e0ffb7081526000602082018190528183018c9052606082018d90526080820186905260a08201859052600160c08301528683015163ffffffff1660e083015261010082015290517fc420d84c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff929092169163c420d84c9161136591600401612506565b6000604051808303816000875af1158015611384573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526113ca91908101906125d8565b508560c0015163ffffffff1660010361187e57600080546114219073ffffffffffffffffffffffffffffffffffffffff167f28b9f73e6b271728535a5e2b6da73f60f1fa049519ed11d9203e38922757cf06610b2d565b6040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481018c905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa15801561148f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114b39190611eaf565b15611539576040517f4cc82215000000000000000000000000000000000000000000000000000000008152600481018b905273ffffffffffffffffffffffffffffffffffffffff821690634cc8221590602401600060405180830381600087803b15801561152057600080fd5b505af1158015611534573d6000803e3d6000fd5b505050505b6040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481018b905273ffffffffffffffffffffffffffffffffffffffff89169063cccf7a8e90602401602060405180830381865afa1580156115a4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115c89190611eaf565b1561164e576040517f4cc82215000000000000000000000000000000000000000000000000000000008152600481018b905273ffffffffffffffffffffffffffffffffffffffff891690634cc8221590602401600060405180830381600087803b15801561163557600080fd5b505af1158015611649573d6000803e3d6000fd5b505050505b6040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481018b905273ffffffffffffffffffffffffffffffffffffffff87169063cccf7a8e90602401602060405180830381865afa1580156116b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116dd9190611eaf565b15611763576040517f4cc82215000000000000000000000000000000000000000000000000000000008152600481018b905273ffffffffffffffffffffffffffffffffffffffff871690634cc8221590602401600060405180830381600087803b15801561174a57600080fd5b505af115801561175e573d6000803e3d6000fd5b505050505b6040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481018b905273ffffffffffffffffffffffffffffffffffffffff86169063cccf7a8e90602401602060405180830381865afa1580156117ce573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117f29190611eaf565b15611878576040517f4cc82215000000000000000000000000000000000000000000000000000000008152600481018b905273ffffffffffffffffffffffffffffffffffffffff861690634cc8221590602401600060405180830381600087803b15801561185f57600080fd5b505af1158015611873573d6000803e3d6000fd5b505050505b506119d8565b60018660c0015163ffffffff1611156119d85760018660c001516118a29190612621565b63ffffffff1660c08701526040517f34ff82df00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8816906334ff82df90611901908c908a9060040161263e565b600060405180830381600087803b15801561191b57600080fd5b505af115801561192f573d6000803e3d6000fd5b505050508473ffffffffffffffffffffffffffffffffffffffff16634e6641a98a60405180604001604052808a608001514261196b919061211a565b67ffffffffffffffff1681526020014267ffffffffffffffff168152506040518363ffffffff1660e01b81526004016119a5929190612146565b600060405180830381600087803b1580156119bf57600080fd5b505af11580156119d3573d6000803e3d6000fd5b505050505b505050505050505050565b6109b081611b73565b600080548190611a329073ffffffffffffffffffffffffffffffffffffffff167f1c25628829b4861cd29b8126181e286e9aa3749b43e568208fa84796fe72e381610b2d565b73ffffffffffffffffffffffffffffffffffffffff16630ff4c916846040518263ffffffff1660e01b8152600401611a6c91815260200190565b600060405180830381865afa158015611a89573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052611acf9190810190612738565b8051600154604080517f0d59332e00000000000000000000000000000000000000000000000000000000815290519394509192610c719273ffffffffffffffffffffffffffffffffffffffff90921691630d59332e9160048083019260209291908290030181865afa158015611b49573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b6d9190612829565b82610b2d565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460805460405173ffffffffffffffffffffffffffffffffffffffff8481169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610120810167ffffffffffffffff81118282101715611c7257611c72611c1f565b60405290565b604051610100810167ffffffffffffffff81118282101715611c7257611c72611c1f565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611ce357611ce3611c1f565b604052919050565b600067ffffffffffffffff821115611d0557611d05611c1f565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600060208284031215611d4357600080fd5b813567ffffffffffffffff811115611d5a57600080fd5b8201601f81018413611d6b57600080fd5b8035611d7e611d7982611ceb565b611c9c565b818152856020838501011115611d9357600080fd5b81602084016020830137600091810160200191909152949350505050565b60005b83811015611dcc578181015183820152602001611db4565b83811115611ddb576000848401525b50505050565b60008151808452611df9816020860160208601611db1565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006100f26020830184611de1565b600060208284031215611e5057600080fd5b5035919050565b73ffffffffffffffffffffffffffffffffffffffff811681146109b057600080fd5b600060208284031215611e8b57600080fd5b81356100f281611e57565b600060208284031215611ea857600080fd5b5051919050565b600060208284031215611ec157600080fd5b815180151581146100f257600080fd5b6000611edf611d7984611ceb565b9050828152838383011115611ef357600080fd5b6100f2836020830184611db1565b600082601f830112611f1257600080fd5b6100f283835160208501611ed1565b805160ff81168114611f3257600080fd5b919050565b805167ffffffffffffffff81168114611f3257600080fd5b805163ffffffff81168114611f3257600080fd5b600060208284031215611f7557600080fd5b815167ffffffffffffffff80821115611f8d57600080fd5b908301906101208286031215611fa257600080fd5b611faa611c4e565b825182811115611fb957600080fd5b611fc587828601611f01565b825250602083015182811115611fda57600080fd5b611fe687828601611f01565b602083015250611ff860408401611f21565b604082015261200960608401611f21565b606082015261201a60808401611f37565b608082015261202b60a08401611f37565b60a082015261203c60c08401611f4f565b60c082015261204d60e08401611f37565b60e08201526101009150612062828401611f37565b91810191909152949350505050565b60006040828403121561208357600080fd5b6040516040810181811067ffffffffffffffff821117156120a6576120a6611c1f565b6040529050806120b583611f37565b81526120c360208401611f37565b60208201525092915050565b6000604082840312156120e157600080fd5b6100f28383612071565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600067ffffffffffffffff80831681851680830382111561213d5761213d6120eb565b01949350505050565b828152606081016100f26020830184805167ffffffffffffffff908116835260209182015116910152565b6000602080838503121561218457600080fd5b825167ffffffffffffffff8082111561219c57600080fd5b818501915085601f8301126121b057600080fd5b8151818111156121c2576121c2611c1f565b8060051b91506121d3848301611c9c565b81815291830184019184810190888411156121ed57600080fd5b938501935b8385101561220b578451825293850193908501906121f2565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561225857600080fd5b81518060030b81146100f257600080fd5b600060a0828403121561227b57600080fd5b60405160a0810181811067ffffffffffffffff8211171561229e5761229e611c1f565b6040526122aa83611f37565b81526122b860208401611f37565b60208201526122c960408401611f37565b60408201526122da60608401611f37565b6060820152608083015160808201528091505092915050565b600067ffffffffffffffff83811690831681811015612314576123146120eb565b039392505050565b600067ffffffffffffffff8084168061235e577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b92169190910492915050565b60006060828403121561237c57600080fd5b6040516060810181811067ffffffffffffffff8211171561239f5761239f611c1f565b604052825181526123b260208401611f4f565b60208201526123c360408401611f4f565b60408201529392505050565b8060005b6002811015611ddb5781518452602093840193909101906001016123d3565b8060005b6002811015611ddb5761240a8483516123cf565b60409390930192602091909101906001016123f6565b600081518084526020808501945080840160005b838110156124fb57815180518852838101518489015260408082015190890152606080820151908901526080808201519089015260a0808201519089015260c0808201519089015260e08082015190890152610100808201519089015261012080820151908901526101408082015190890152610160808201516124ba828b01826123cf565b50506101808101516101a06124d1818b01836123f2565b919091015190506124e66102208901826123cf565b50610260969096019590820190600101612434565b509495945050505050565b602081528151602082015260006020830151612526604084018215159052565b50604083015160608301526060830151608083015260808301516101208060a0850152612557610140850183612420565b915060a08501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160c08601526125928382612420565b92505060c08501516125ac60e086018263ffffffff169052565b5060e08501516101006125c68187018363ffffffff169052565b90950151151593019290925250919050565b6000602082840312156125ea57600080fd5b815167ffffffffffffffff81111561260157600080fd5b8201601f8101841361261257600080fd5b610c7184825160208401611ed1565b600063ffffffff83811690831681811015612314576123146120eb565b8281526040602082015260008251610120806040850152612663610160850183611de1565b915060208501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc085840301606086015261269e8382611de1565b92505060408501516126b5608086018260ff169052565b50606085015160ff811660a086015250608085015167ffffffffffffffff811660c08601525060a085015167ffffffffffffffff811660e08601525060c085015161010061270a8187018363ffffffff169052565b60e087015167ffffffffffffffff908116938701939093528601519182166101408601525050949350505050565b60006020828403121561274a57600080fd5b815167ffffffffffffffff8082111561276257600080fd5b90830190610100828603121561277757600080fd5b61277f611c78565b8251815260208301518281111561279557600080fd5b6127a187828601611f01565b6020830152506040830151828111156127b957600080fd5b6127c587828601611f01565b6040830152506127d760608401611f4f565b60608201526127e860808401611f37565b60808201526127f960a08401611f21565b60a082015261280a60c08401611f21565b60c082015261281b60e08401611f37565b60e082015295945050505050565b60006020828403121561283b57600080fd5b81516100f281611e5756fea2646970667358221220b71897f3301de8ee210c132cb8f1292cf7b65c65b21e034217d80267061fa8ff64736f6c634300080d0033";

type BoundTreasureSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BoundTreasureSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BoundTreasureSystem__factory extends ContractFactory {
  constructor(...args: BoundTreasureSystemConstructorParams) {
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
  ): Promise<BoundTreasureSystem> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<BoundTreasureSystem>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): BoundTreasureSystem {
    return super.attach(address) as BoundTreasureSystem;
  }
  override connect(signer: Signer): BoundTreasureSystem__factory {
    return super.connect(signer) as BoundTreasureSystem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BoundTreasureSystemInterface {
    return new utils.Interface(_abi) as BoundTreasureSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BoundTreasureSystem {
    return new Contract(address, _abi, signerOrProvider) as BoundTreasureSystem;
  }
}
