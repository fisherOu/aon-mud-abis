/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  PickUpTreasurev2System,
  PickUpTreasurev2SystemInterface,
} from "../PickUpTreasurev2System";

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
            name: "treasureSeed",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "terrainPerlin",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "treasurePerlin",
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
        internalType: "struct PickUpInfo",
        name: "pickUpInfo",
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
  "0x60806040523480156200001157600080fd5b506040516200331c3803806200331c83398101604081905262000034916200022c565b818162000041336200010f565b6001600160a01b03811615620000585780620000bd565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000097573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bd91906200026b565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000105919062000183602090811b6200099217901c565b5050505062000292565b600062000126620001ef60201b62000a231760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022957600080fd5b50565b600080604083850312156200024057600080fd5b82516200024d8162000213565b6020840151909250620002608162000213565b809150509250929050565b6000602082840312156200027e57600080fd5b81516200028b8162000213565b9392505050565b61307a80620002a26000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe146100515780638c6352851461007a5780638da5cb5b1461008d578063f2fde38b146100ba575b600080fd5b61006461005f3660046121b5565b6100cf565b6040516100719190612265565b60405180910390f35b610064610088366004612355565b6100f9565b6100956108d1565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100cd6100c8366004612429565b610916565b005b60606000828060200190518101906100e791906124da565b90506100f2816100f9565b9392505050565b60008054606091906101419073ffffffffffffffffffffffffffffffffffffffff167fd0deb8af54f5692432398f7f62bf53c9e54e6d6a9b4dbccb012b3fe04ea432d3610a47565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040161014060405180830381865afa15801561018c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101b091906125a1565b8051909150156103235760006040518061012001604052808560000151815260200185602001518152602001856080015181526020018560a0015181526020018560c0015181526020018560e00151815260200185610100015181526020018560400151815260200185606001518152509050816080015173ffffffffffffffffffffffffffffffffffffffff1663c542c93b856101200151866101400151876101600151856040518563ffffffff1660e01b81526004016102759493929190612681565b602060405180830381865afa158015610292573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102b69190612705565b610321576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4661696c6564207069636b75702070726f6f6620636865636b0000000000000060448201526064015b60405180910390fd5b505b3361032d84610b95565b60a0840151600080546103769073ffffffffffffffffffffffffffffffffffffffff167f28b9f73e6b271728535a5e2b6da73f60f1fa049519ed11d9203e38922757cf06610a47565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810184905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa1580156103e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104089190612705565b1561046f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f416c7265616479207069636b65645570000000000000000000000000000000006044820152606401610318565b61048186600001518760a00151610fac565b60008061048d88611527565b6040517f1ab06ee50000000000000000000000000000000000000000000000000000000081526004810187905260248101889052919350915073ffffffffffffffffffffffffffffffffffffffff841690631ab06ee590604401600060405180830381600087803b15801561050157600080fd5b505af1158015610515573d6000803e3d6000fd5b505060005461055d925073ffffffffffffffffffffffffffffffffffffffff1690507feb00b0cb5dcd3bc57f60eaa30f062945ca406916556c063fe1f3d5dc22a4efe5610a47565b73ffffffffffffffffffffffffffffffffffffffff166360fe47b1856040518263ffffffff1660e01b815260040161059791815260200190565b600060405180830381600087803b1580156105b157600080fd5b505af11580156105c5573d6000803e3d6000fd5b505060005461060d925073ffffffffffffffffffffffffffffffffffffffff1690507fef3393883620fd592853ef61d4a33b35dd9fd9e4dc925bc5e1463919917423ab610a47565b604080517f36e334770000000000000000000000000000000000000000000000000000000081526004810187905284516024820152602085015163ffffffff908116604483015291850151909116606482015273ffffffffffffffffffffffffffffffffffffffff91909116906336e3347790608401600060405180830381600087803b15801561069d57600080fd5b505af11580156106b1573d6000803e3d6000fd5b50506000546106f9925073ffffffffffffffffffffffffffffffffffffffff1690507f65188156108ab445e8ddb20e749f49402ca97dc723f07951b1c4a011dd8e1166610a47565b604080517fa363c56f00000000000000000000000000000000000000000000000000000000815260048101879052835160ff908116602483015260208501511660448201529083015167ffffffffffffffff9081166064830152606084015181166084830152608084015163ffffffff1660a483015260a08401511660c482015273ffffffffffffffffffffffffffffffffffffffff919091169063a363c56f9060e401600060405180830381600087803b1580156107b757600080fd5b505af11580156107cb573d6000803e3d6000fd5b5050600054610813925073ffffffffffffffffffffffffffffffffffffffff1690507f44d5df6fedbb1676612b3073b831a5f6f1d59057fb2b8978e7146cb8eee3ca8c610a47565b60408051808201825260008082526020820190815291517f4e6641a900000000000000000000000000000000000000000000000000000000815260048101889052905167ffffffffffffffff90811660248301529151909116604482015273ffffffffffffffffffffffffffffffffffffffff9190911690634e6641a990606401600060405180830381600087803b1580156108ae57600080fd5b505af11580156108c2573d6000803e3d6000fd5b50505050505050505050919050565b60006109117f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610986576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61098f8161176c565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015610ab7573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610afd9190810190612744565b90508051600003610b6a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f7420726567697374657265640000000000000000000000000000006044820152606401610318565b610b8b81600081518110610b8057610b806127d5565b602002602001015190565b9150505b92915050565b60008054610bd99073ffffffffffffffffffffffffffffffffffffffff167f9e0b856941fb70fc9b56c896d5f39a2079c3ed041dbc5e87efbf9c503b354b76610a47565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160e060405180830381865afa158015610c23573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c47919061281c565b9050806080015167ffffffffffffffff16826040015111158015610c7d57508060a0015167ffffffffffffffff16826060015111155b610ce3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f726164697573206f766572206c696d69740000000000000000000000000000006044820152606401610318565b806000015167ffffffffffffffff16816020015167ffffffffffffffff1610610dab57611d4c8260e0015110158015610d4057506020810151610d279060406128fb565b610d32906010612a44565b8251610d3e9190612a89565b155b610da6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f6e6f20747265617375726520746f207069636b207570000000000000000000006044820152606401610318565b610e7b565b611d4c8260e0015110158015610de557506020810151610dcc9060406128fb565b610dd7906010612a44565b8251610de39190612a89565b155b8015610e1557508051600090610dfc9060406128fb565b610e07906010612a44565b8351610e139190612a89565b115b610e7b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f6e6f20747265617375726520746f207069636b207570000000000000000000006044820152606401610318565b6000543390610ec09073ffffffffffffffffffffffffffffffffffffffff167fd7eb4644b0f312b764e14b10dbe895c6ee4acad8c1eb37a4791309b4d942e427610a47565b73ffffffffffffffffffffffffffffffffffffffff16630ff4c916826040518263ffffffff1660e01b8152600401610efa91815260200190565b602060405180830381865afa158015610f17573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f3b9190612a9d565b836020015114610fa7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f6e6f74207374616e64696e67206f6e20747265617375726500000000000000006044820152606401610318565b505050565b60008054610ff09073ffffffffffffffffffffffffffffffffffffffff167f4b1ac4c3aa37732e927cbff52c019e9fbdad0f3e454031afaefd319a3dc66ce4610a47565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810185905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa15801561105e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110829190612705565b156112c8576040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810184905260009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401606060405180830381865afa1580156110f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111199190612aca565b90508263ffffffff16816000015163ffffffff1614801561116a575080604001518061116a5750806040015115801561116a57504267ffffffffffffffff16816020015167ffffffffffffffff1610155b6111d0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f666f67207365656420696e76616c6964000000000000000000000000000000006044820152606401610318565b8263ffffffff16816000015163ffffffff161480156111f0575080604001515b156111fb5750505050565b6040805160608101825263ffffffff8581168252600060208301908152600183850190815293517f951f165900000000000000000000000000000000000000000000000000000000815260048101899052925190911660248301525167ffffffffffffffff16604482015290511515606482015273ffffffffffffffffffffffffffffffffffffffff83169063951f165990608401600060405180830381600087803b1580156112aa57600080fd5b505af11580156112be573d6000803e3d6000fd5b5050505050505050565b6001546040517f4f27da180000000000000000000000000000000000000000000000000000000081527fd65d260f5f5c04658319eb649c1b2668791985f80e1dc9150523f9df6efd57b4600482015263ffffffff84169173ffffffffffffffffffffffffffffffffffffffff1690634f27da1890602401602060405180830381865afa15801561135c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113809190612b36565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b8152600401602060405180830381865afa1580156113ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113ee9190612b53565b63ffffffff161461145b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f666f67207365656420696e76616c6964000000000000000000000000000000006044820152606401610318565b6040805160608101825263ffffffff8481168252600060208301908152600183850190815293517f951f165900000000000000000000000000000000000000000000000000000000815260048101889052925190911660248301525167ffffffffffffffff16604482015290511515606482015273ffffffffffffffffffffffffffffffffffffffff82169063951f165990608401600060405180830381600087803b15801561150a57600080fd5b505af115801561151e573d6000803e3d6000fd5b50505050505050565b60408051606081018252600080825260208201819052918101919091526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a0810191909152600080600080600061158c886101000151611775565b9450945094509450945060006040518060600160405280868152602001600063ffffffff168152602001600063ffffffff16815250905060006040518060c00160405280866080015160ff1681526020018660a0015160ff168152602001856040015167ffffffffffffffff168152602001600067ffffffffffffffff168152602001856080015163ffffffff1681526020018867ffffffffffffffff1681525090506000611658848660a0015167ffffffffffffffff168760c0015167ffffffffffffffff16611928565b63ffffffff8116602086015260e087015161010088015192965090925061168e91869167ffffffffffffffff9081169116611928565b63ffffffff81166040860181905260208801519296509092506000916116b49190612b6e565b602085015187516116cb9163ffffffff1690612b6e565b8460a001516116da91906128fb565b6116e491906128fb565b905067ffffffffffffffff8116158061171457508260a0015167ffffffffffffffff168167ffffffffffffffff16115b8061172b5750606086015167ffffffffffffffff16155b1561173c576001606084015261175b565b606086015161174b9082612b9e565b67ffffffffffffffff1660608401525b50919a909950975050505050505050565b61098f81611986565b6040805160c081018252606080825260208201819052600092820183905281018290526080810182905260a0810182905281906040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101919091526000805481906118379073ffffffffffffffffffffffffffffffffffffffff167fcfb6241b41527f8aac5f293ecb22ce5491bdce4aca6f96ba85ab53f5ad8ca82f610a47565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b8152600401600060405180830381865afa158015611881573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526118c79190810190612d61565b905060006118f288836060015167ffffffffffffffff16846080015167ffffffffffffffff16611928565b90985096508690506000611906838a611a32565b9099509050611915818a611b2e565b9a9c919b50999850909650945050505050565b600080806119368585612e38565b111561197857836119478185612e38565b6119519087612e4f565b61195b9190612e63565b90506119678484612e38565b6119719086612a89565b915061197e565b50839050825b935093915050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460805460405173ffffffffffffffffffffffffffffffffffffffff8481169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6000806000805b856020015151811015611a8d5785602001518181518110611a5c57611a5c6127d5565b602002602001015167ffffffffffffffff1682611a799190612e63565b915080611a8581612e7b565b915050611a39565b506000611a9c85600084611928565b9094509050600080805b886020015151811015611b045788602001518181518110611ac957611ac96127d5565b602002602001015167ffffffffffffffff1682611ae69190612e63565b9150838211611b045791508180611afc81612e7b565b915050611aa6565b508751805183908110611b1957611b196127d5565b60200260200101519450505050509250929050565b6040805160c081018252606080825260208201819052600092820183905281018290526080810182905260a0810182905281906040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915260008054611bee9073ffffffffffffffffffffffffffffffffffffffff167f1c25628829b4861cd29b8126181e286e9aa3749b43e568208fa84796fe72e381610a47565b6000805491925090611c369073ffffffffffffffffffffffffffffffffffffffff167f4e85e4bd7fbc26f10fe53aa450c8a80dc5148546d6ed113502ac93556c10ece2610a47565b6000805491925090611c7e9073ffffffffffffffffffffffffffffffffffffffff167fdd93cfd8a6751ddc87ad60672ba29f973167cf054c7cf626eef9bb0620fdfb69610a47565b6040517f447e2bd200000000000000000000000000000000000000000000000000000000815263ffffffff8b16600482015290915060009073ffffffffffffffffffffffffffffffffffffffff83169063447e2bd290602401600060405180830381865afa158015611cf4573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052611d3a9190810190612744565b90506000805b8251811015611e345760008673ffffffffffffffffffffffffffffffffffffffff16630ff4c916858481518110611d7957611d796127d5565b60200260200101516040518263ffffffff1660e01b8152600401611d9f91815260200190565b600060405180830381865afa158015611dbc573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052611e029190810190612ec4565b9050806060015167ffffffffffffffff1683611e1e9190612e63565b9250508080611e2c90612e7b565b915050611d40565b506000611e438b600084611928565b909a5090506000805b84518110156120055760008873ffffffffffffffffffffffffffffffffffffffff16630ff4c916878481518110611e8557611e856127d5565b60200260200101516040518263ffffffff1660e01b8152600401611eab91815260200190565b600060405180830381865afa158015611ec8573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052611f0e9190810190612ec4565b9050806060015167ffffffffffffffff1683611f2a9190612e63565b925083831115611f3a5750612005565b858281518110611f4c57611f4c6127d5565b60200260200101519b50809a508773ffffffffffffffffffffffffffffffffffffffff16630ff4c916878481518110611f8757611f876127d5565b60200260200101516040518263ffffffff1660e01b8152600401611fad91815260200190565b61012060405180830381865afa158015611fcb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fef9190612f99565b9950508080611ffd90612e7b565b915050611e4c565b505050505050505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610180810167ffffffffffffffff8111828210171561206957612069612016565b60405290565b604051610140810167ffffffffffffffff8111828210171561206957612069612016565b60405160a0810167ffffffffffffffff8111828210171561206957612069612016565b60405160c0810167ffffffffffffffff8111828210171561206957612069612016565b604051610120810167ffffffffffffffff8111828210171561206957612069612016565b6040805190810167ffffffffffffffff8111828210171561206957612069612016565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561216757612167612016565b604052919050565b600067ffffffffffffffff82111561218957612189612016565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b6000602082840312156121c757600080fd5b813567ffffffffffffffff8111156121de57600080fd5b8201601f810184136121ef57600080fd5b80356122026121fd8261216f565b612120565b81815285602083850101111561221757600080fd5b81602084016020830137600091810160200191909152949350505050565b60005b83811015612250578181015183820152602001612238565b8381111561225f576000848401525b50505050565b6020815260008251806020840152612284816040850160208701612235565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b600082601f8301126122c757600080fd5b6122cf6120fd565b8060408401858111156122e157600080fd5b845b818110156122fb5780358452602093840193016122e3565b509095945050505050565b600082601f83011261231757600080fd5b61231f6120fd565b80608084018581111561233157600080fd5b845b818110156122fb5761234587826122b6565b8452602090930192604001612333565b6000610220828403121561236857600080fd5b612370612045565b823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a082015260c083013560c082015260e083013560e08201526101008084013581830152506101206123d5858286016122b6565b908201526101606123e885858301612306565b6101408301526123fc856101e086016122b6565b908201529392505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461098f57600080fd5b60006020828403121561243b57600080fd5b81356100f281612407565b600082601f83011261245757600080fd5b61245f6120fd565b80604084018581111561247157600080fd5b845b818110156122fb578051845260209384019301612473565b600082601f83011261249c57600080fd5b6124a46120fd565b8060808401858111156124b657600080fd5b845b818110156122fb576124ca8782612446565b84526020909301926040016124b8565b600061022082840312156124ed57600080fd5b6124f5612045565b825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e082015261010080840151818301525061012061255a85828601612446565b9082015261016061256d8585830161248b565b6101408301526123fc856101e08601612446565b8051801515811461259157600080fd5b919050565b805161259181612407565b600061014082840312156125b457600080fd5b6125bc61206f565b6125c583612581565b81526125d360208401612596565b60208201526125e460408401612596565b60408201526125f560608401612596565b606082015261260660808401612596565b608082015261261760a08401612596565b60a082015261262860c08401612596565b60c082015261263960e08401612596565b60e082015261010061264c818501612596565b908201526101206123fc848201612596565b8060005b600281101561225f578151845260209384019390910190600101612662565b6102208101612690828761265e565b60408083018660005b60028110156126c0576126ad83835161265e565b9183019160209190910190600101612699565b505050506126d160c083018561265e565b61010082018360005b60098110156126f95781518352602092830192909101906001016126da565b50505095945050505050565b60006020828403121561271757600080fd5b6100f282612581565b600067ffffffffffffffff82111561273a5761273a612016565b5060051b60200190565b6000602080838503121561275757600080fd5b825167ffffffffffffffff81111561276e57600080fd5b8301601f8101851361277f57600080fd5b805161278d6121fd82612720565b81815260059190911b820183019083810190878311156127ac57600080fd5b928401925b828410156127ca578351825292840192908401906127b1565b979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b805167ffffffffffffffff8116811461259157600080fd5b600060e0828403121561282e57600080fd5b60405160e0810181811067ffffffffffffffff8211171561285157612851612016565b60405261285d83612804565b815261286b60208401612804565b602082015261287c60408401612804565b604082015261288d60608401612804565b606082015261289e60808401612804565b60808201526128af60a08401612804565b60a08201526128c060c08401612804565b60c08201529392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600067ffffffffffffffff8381169083168181101561291c5761291c6128cc565b039392505050565b600181815b8085111561297d57817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115612963576129636128cc565b8085161561297057918102915b93841c9390800290612929565b509250929050565b60008261299457506001610b8f565b816129a157506000610b8f565b81600181146129b757600281146129c1576129dd565b6001915050610b8f565b60ff8411156129d2576129d26128cc565b50506001821b610b8f565b5060208310610133831016604e8410600b8410161715612a00575081810a610b8f565b612a0a8383612924565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115612a3c57612a3c6128cc565b029392505050565b60006100f267ffffffffffffffff841683612985565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600082612a9857612a98612a5a565b500490565b600060208284031215612aaf57600080fd5b5051919050565b805163ffffffff8116811461259157600080fd5b600060608284031215612adc57600080fd5b6040516060810181811067ffffffffffffffff82111715612aff57612aff612016565b604052612b0b83612ab6565b8152612b1960208401612804565b6020820152612b2a60408401612581565b60408201529392505050565b600060208284031215612b4857600080fd5b81516100f281612407565b600060208284031215612b6557600080fd5b6100f282612ab6565b600067ffffffffffffffff80831681851681830481118215151615612b9557612b956128cc565b02949350505050565b600067ffffffffffffffff80841680612bb957612bb9612a5a565b92169190910492915050565b600082601f830112612bd657600080fd5b81516020612be66121fd83612720565b82815260059290921b84018101918181019086841115612c0557600080fd5b8286015b84811015612c2757612c1a81612ab6565b8352918301918301612c09565b509695505050505050565b600082601f830112612c4357600080fd5b81516020612c536121fd83612720565b82815260059290921b84018101918181019086841115612c7257600080fd5b8286015b84811015612c2757612c8781612804565b8352918301918301612c76565b600082601f830112612ca557600080fd5b8151612cb36121fd8261216f565b818152846020838601011115612cc857600080fd5b612cd9826020830160208701612235565b949350505050565b600082601f830112612cf257600080fd5b81516020612d026121fd83612720565b82815260059290921b84018101918181019086841115612d2157600080fd5b8286015b84811015612c2757805167ffffffffffffffff811115612d455760008081fd5b612d538986838b0101612c94565b845250918301918301612d25565b600060208284031215612d7357600080fd5b815167ffffffffffffffff80821115612d8b57600080fd5b9083019060a08286031215612d9f57600080fd5b612da7612093565b825182811115612db657600080fd5b612dc287828601612bc5565b825250602083015182811115612dd757600080fd5b612de387828601612c32565b602083015250604083015182811115612dfb57600080fd5b612e0787828601612ce1565b604083015250612e1960608401612804565b6060820152612e2a60808401612804565b608082015295945050505050565b600082821015612e4a57612e4a6128cc565b500390565b600082612e5e57612e5e612a5a565b500690565b60008219821115612e7657612e766128cc565b500190565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612eac57612eac6128cc565b5060010190565b805160ff8116811461259157600080fd5b600060208284031215612ed657600080fd5b815167ffffffffffffffff80821115612eee57600080fd5b9083019060c08286031215612f0257600080fd5b612f0a6120b6565b825182811115612f1957600080fd5b612f2587828601612c94565b825250602083015182811115612f3a57600080fd5b612f4687828601612c94565b602083015250612f5860408401612ab6565b6040820152612f6960608401612804565b6060820152612f7a60808401612eb3565b6080820152612f8b60a08401612eb3565b60a082015295945050505050565b60006101208284031215612fac57600080fd5b612fb46120d9565b612fbd83612804565b8152612fcb60208401612804565b6020820152612fdc60408401612804565b6040820152612fed60608401612804565b6060820152612ffe60808401612ab6565b608082015261300f60a08401612804565b60a082015261302060c08401612804565b60c082015261303160e08401612804565b60e08201526101006123fc81850161280456fea264697066735822122055d37aa44130c4abec0a7a38178d3021f35f7955e7c4f640042ec35aed981a3a64736f6c634300080d0033";

type PickUpTreasurev2SystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PickUpTreasurev2SystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PickUpTreasurev2System__factory extends ContractFactory {
  constructor(...args: PickUpTreasurev2SystemConstructorParams) {
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
  ): Promise<PickUpTreasurev2System> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<PickUpTreasurev2System>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): PickUpTreasurev2System {
    return super.attach(address) as PickUpTreasurev2System;
  }
  override connect(signer: Signer): PickUpTreasurev2System__factory {
    return super.connect(signer) as PickUpTreasurev2System__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PickUpTreasurev2SystemInterface {
    return new utils.Interface(_abi) as PickUpTreasurev2SystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PickUpTreasurev2System {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PickUpTreasurev2System;
  }
}
