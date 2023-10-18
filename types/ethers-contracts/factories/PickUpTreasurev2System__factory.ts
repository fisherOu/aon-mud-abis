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
  "0x60806040523480156200001157600080fd5b5060405162003db638038062003db683398101604081905262000034916200022c565b818162000041336200010f565b6001600160a01b03811615620000585780620000bd565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000097573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bd91906200026b565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000105919062000183602090811b62000b6517901c565b5050505062000292565b600062000126620001ef60201b62000bf61760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022957600080fd5b50565b600080604083850312156200024057600080fd5b82516200024d8162000213565b6020840151909250620002608162000213565b809150509250929050565b6000602082840312156200027e57600080fd5b81516200028b8162000213565b9392505050565b613b1480620002a26000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe146100515780638c6352851461007a5780638da5cb5b1461008d578063f2fde38b146100ba575b600080fd5b61006461005f3660046129bc565b6100cf565b6040516100719190612ab6565b60405180910390f35b610064610088366004612b68565b6100f9565b610095610aa4565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100cd6100c8366004612c3c565b610ae9565b005b60606000828060200190518101906100e79190612ced565b90506100f2816100f9565b9392505050565b60008054606091906101419073ffffffffffffffffffffffffffffffffffffffff167fd0deb8af54f5692432398f7f62bf53c9e54e6d6a9b4dbccb012b3fe04ea432d3610c1a565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040161016060405180830381865afa15801561018c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101b09190612db4565b8051909150156103235760006040518061012001604052808560000151815260200185602001518152602001856080015181526020018560a0015181526020018560c0015181526020018560e001518152602001856101000151815260200185604001518152602001856060015181525090508160a0015173ffffffffffffffffffffffffffffffffffffffff1663c542c93b856101200151866101400151876101600151856040518563ffffffff1660e01b81526004016102759493929190612ea6565b602060405180830381865afa158015610292573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102b69190612f2a565b610321576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4661696c6564207069636b75702070726f6f6620636865636b0000000000000060448201526064015b60405180910390fd5b505b3361032d81610d68565b610393576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f706c6179657220646561640000000000000000000000000000000000000000006044820152606401610318565b61039c84610e27565b6020840151600080546103e59073ffffffffffffffffffffffffffffffffffffffff167f28b9f73e6b271728535a5e2b6da73f60f1fa049519ed11d9203e38922757cf06610c1a565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810184905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015610453573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104779190612f2a565b156104de576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f416c7265616479207069636b65645570000000000000000000000000000000006044820152606401610318565b600080546105229073ffffffffffffffffffffffffffffffffffffffff167f96b5cf7019465e93c7e5108d84c24e70f0d4aa63ab16b75f307df929278baad9610c1a565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810186905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015610590573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105b49190612f2a565b158061065557506040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810185905273ffffffffffffffffffffffffffffffffffffffff821690630ff4c91690602401602060405180830381865afa158015610626573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061064a9190612f59565b63ffffffff16600114155b6106bb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f73746174757320696e76616c69640000000000000000000000000000000000006044820152606401610318565b6106c5600161121d565b6106d787600001518860a00151611615565b6000806106e389611b90565b6040517f1ab06ee50000000000000000000000000000000000000000000000000000000081526004810188905260248101899052919350915073ffffffffffffffffffffffffffffffffffffffff851690631ab06ee590604401600060405180830381600087803b15801561075757600080fd5b505af115801561076b573d6000803e3d6000fd5b50506000546107b3925073ffffffffffffffffffffffffffffffffffffffff1690507feb00b0cb5dcd3bc57f60eaa30f062945ca406916556c063fe1f3d5dc22a4efe5610c1a565b73ffffffffffffffffffffffffffffffffffffffff166360fe47b1866040518263ffffffff1660e01b81526004016107ed91815260200190565b600060405180830381600087803b15801561080757600080fd5b505af115801561081b573d6000803e3d6000fd5b5050600054610863925073ffffffffffffffffffffffffffffffffffffffff1690507fef3393883620fd592853ef61d4a33b35dd9fd9e4dc925bc5e1463919917423ab610c1a565b604080517f36e334770000000000000000000000000000000000000000000000000000000081526004810188905284516024820152602085015163ffffffff908116604483015291850151909116606482015273ffffffffffffffffffffffffffffffffffffffff91909116906336e3347790608401600060405180830381600087803b1580156108f357600080fd5b505af1158015610907573d6000803e3d6000fd5b505060005461094f925073ffffffffffffffffffffffffffffffffffffffff1690507f65188156108ab445e8ddb20e749f49402ca97dc723f07951b1c4a011dd8e1166610c1a565b73ffffffffffffffffffffffffffffffffffffffff166334ff82df86836040518363ffffffff1660e01b8152600401610989929190612f74565b600060405180830381600087803b1580156109a357600080fd5b505af11580156109b7573d6000803e3d6000fd5b50506000546109ff925073ffffffffffffffffffffffffffffffffffffffff1690507f44d5df6fedbb1676612b3073b831a5f6f1d59057fb2b8978e7146cb8eee3ca8c610c1a565b6040805180820182526000808252602082015290517f4e6641a900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9290921691634e6641a991610a669189919060040161306e565b600060405180830381600087803b158015610a8057600080fd5b505af1158015610a94573d6000803e3d6000fd5b5050505050505050505050919050565b6000610ae47f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610b59576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b6281611f4b565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015610c8a573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610cd091908101906130bd565b90508051600003610d3d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f7420726567697374657265640000000000000000000000000000006044820152606401610318565b610d5e81600081518110610d5357610d5361314e565b602002602001015190565b9150505b92915050565b60008054610dac9073ffffffffffffffffffffffffffffffffffffffff167f8900e57ac2ff61c328bbaa69d2071a542ae5ff48c693375a49fd2937c1ef8332610c1a565b73ffffffffffffffffffffffffffffffffffffffff1663cccf7a8e836040518263ffffffff1660e01b8152600401610de691815260200190565b602060405180830381865afa158015610e03573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d629190612f2a565b60008054610e6b9073ffffffffffffffffffffffffffffffffffffffff167f9e0b856941fb70fc9b56c896d5f39a2079c3ed041dbc5e87efbf9c503b354b76610c1a565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160e060405180830381865afa158015610eb5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ed99190613195565b9050806080015167ffffffffffffffff16826040015111158015610f0f57508060a0015167ffffffffffffffff16826060015111155b610f75576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f726164697573206f766572206c696d69740000000000000000000000000000006044820152606401610318565b806000015167ffffffffffffffff16816020015167ffffffffffffffff161061103257611d4c8260e0015110158015610fc757506020810151610fb9906002613394565b8251610fc591906133d9565b155b61102d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f6e6f20747265617375726520746f207069636b207570000000000000000000006044820152606401610318565b6110ec565b611d4c8260e001511015801561106157506020810151611053906002613394565b825161105f91906133d9565b155b801561108657508051600090611078906002613394565b835161108491906133d9565b115b6110ec576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f6e6f20747265617375726520746f207069636b207570000000000000000000006044820152606401610318565b60005433906111319073ffffffffffffffffffffffffffffffffffffffff167fd7eb4644b0f312b764e14b10dbe895c6ee4acad8c1eb37a4791309b4d942e427610c1a565b73ffffffffffffffffffffffffffffffffffffffff16630ff4c916826040518263ffffffff1660e01b815260040161116b91815260200190565b602060405180830381865afa158015611188573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111ac91906133ed565b836020015114611218576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f6e6f74207374616e64696e67206f6e20747265617375726500000000000000006044820152606401610318565b505050565b600080543391906112649073ffffffffffffffffffffffffffffffffffffffff167f189eafd1a01543209399086ef2e12962fca648be4826ce2b3eb2e53ed14bf141610c1a565b60008054919250906112ac9073ffffffffffffffffffffffffffffffffffffffff167f3c3102d48c6d31b1a70ddf8b23d300c759379d6506f2ef221cf3056d7c54dca7610c1a565b6040517f720354530000000000000000000000000000000000000000000000000000000081526004810185905290915060009073ffffffffffffffffffffffffffffffffffffffff831690637203545390602401602060405180830381865afa15801561131d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113419190613406565b60008054919250906113899073ffffffffffffffffffffffffffffffffffffffff167fdc602e66a6d8c84d0c8d6c4292d80341393a1e04ff02909a12718a4216d3a9f7610c1a565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160a060405180830381865afa1580156113d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113f79190613429565b6040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810187905290915060009073ffffffffffffffffffffffffffffffffffffffff861690630ff4c916906024016040805180830381865afa158015611467573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061148b91906134b3565b602083015181519192506000916114a2904261350e565b6114ac9190613537565b82602001516114bb919061355e565b905063ffffffff841667ffffffffffffffff821611156114de575063ffffffff83165b8767ffffffffffffffff168167ffffffffffffffff16101561155c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f6c61636b206f6620616374696f6e20706f696e747300000000000000000000006044820152606401610318565b611566888261350e565b60408051808201825267ffffffffffffffff42811682528316602082015290517f4e6641a900000000000000000000000000000000000000000000000000000000815291925073ffffffffffffffffffffffffffffffffffffffff881691634e6641a9916115d9918b919060040161306e565b600060405180830381600087803b1580156115f357600080fd5b505af1158015611607573d6000803e3d6000fd5b505050505050505050505050565b600080546116599073ffffffffffffffffffffffffffffffffffffffff167f4b1ac4c3aa37732e927cbff52c019e9fbdad0f3e454031afaefd319a3dc66ce4610c1a565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810185905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa1580156116c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116eb9190612f2a565b15611931576040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810184905260009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401606060405180830381865afa15801561175e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611782919061358a565b90508263ffffffff16816000015163ffffffff161480156117d357508060400151806117d3575080604001511580156117d357504267ffffffffffffffff16816020015167ffffffffffffffff1610155b611839576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f666f67207365656420696e76616c6964000000000000000000000000000000006044820152606401610318565b8263ffffffff16816000015163ffffffff16148015611859575080604001515b156118645750505050565b6040805160608101825263ffffffff8581168252600060208301908152600183850190815293517f951f165900000000000000000000000000000000000000000000000000000000815260048101899052925190911660248301525167ffffffffffffffff16604482015290511515606482015273ffffffffffffffffffffffffffffffffffffffff83169063951f165990608401600060405180830381600087803b15801561191357600080fd5b505af1158015611927573d6000803e3d6000fd5b5050505050505050565b6001546040517f4f27da180000000000000000000000000000000000000000000000000000000081527fd65d260f5f5c04658319eb649c1b2668791985f80e1dc9150523f9df6efd57b4600482015263ffffffff84169173ffffffffffffffffffffffffffffffffffffffff1690634f27da1890602401602060405180830381865afa1580156119c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119e991906135f6565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b8152600401602060405180830381865afa158015611a33573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a579190612f59565b63ffffffff1614611ac4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f666f67207365656420696e76616c6964000000000000000000000000000000006044820152606401610318565b6040805160608101825263ffffffff8481168252600060208301908152600183850190815293517f951f165900000000000000000000000000000000000000000000000000000000815260048101889052925190911660248301525167ffffffffffffffff16604482015290511515606482015273ffffffffffffffffffffffffffffffffffffffff82169063951f165990608401600060405180830381600087803b158015611b7357600080fd5b505af1158015611b87573d6000803e3d6000fd5b50505050505050565b60408051606081018252600080825260208201819052918101919091526040805161012081018252606080825260208201819052600092820183905281018290526080810182905260a0810182905260c0810182905260e081018290526101008101919091526000836101000151604051602001611c1091815260200190565b6040516020818303038152906040528051906020012060001c90506000806000806000611c3c86611f54565b9450945094509450945060006040518060600160405280868152602001600063ffffffff168152602001600063ffffffff168152509050600060405180610120016040528086602001518152602001866040015181526020018660a0015160ff1681526020018660c0015160ff168152602001856040015167ffffffffffffffff168152602001600067ffffffffffffffff168152602001856080015163ffffffff1681526020018867ffffffffffffffff1681526020018660e0015167ffffffffffffffff1681525090506000611d31848660a0015167ffffffffffffffff168760c0015167ffffffffffffffff16612128565b9094509050611d446380000000826133d9565b63ffffffff1660208401819052610100860151865167ffffffffffffffff90911691611d6f91613613565b67ffffffffffffffff168360e0015167ffffffffffffffff161115611e14576000846020015163ffffffff168760000151611daa9190613613565b8460e00151611db9919061350e565b90506000876020015167ffffffffffffffff16118015611df1575081876020015182611de59190613537565b67ffffffffffffffff16105b15611e12576020870151611e059082613537565b67ffffffffffffffff1691505b505b611e2d858760e0015167ffffffffffffffff1683612128565b9095509150611e406380000000836133d9565b63ffffffff166040850152606086015167ffffffffffffffff1615801590611eb95750836040015163ffffffff168660200151611e7d9190613613565b60208501518751611e949163ffffffff1690613613565b611e9e919061355e565b67ffffffffffffffff168360e0015167ffffffffffffffff16115b15611f31576000846040015163ffffffff168760200151611eda9190613613565b60208601518851611ef19163ffffffff1690613613565b8560e00151611f00919061350e565b611f0a919061350e565b9050866060015181611f1c9190613537565b67ffffffffffffffff1660a085015250611f39565b600160a08401525b50919b909a5098505050505050505050565b610b628161217d565b604080516101008101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e0810182905281906040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101919091526000805481906120269073ffffffffffffffffffffffffffffffffffffffff167fcfb6241b41527f8aac5f293ecb22ce5491bdce4aca6f96ba85ab53f5ad8ca82f610c1a565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b8152600401600060405180830381865afa158015612070573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526120b691908101906137df565b905060006120e188836060015167ffffffffffffffff16846080015167ffffffffffffffff16612128565b90985090506120f8678000000000000000826133d9565b96506000612106838a612229565b9099509050612115818a612325565b9a9c919b50999850909650945050505050565b6000808383111561216f578361213e81856138b6565b61214890876133d9565b61215291906138cd565b905061215e84846138b6565b61216890866138e5565b9150612175565b50839050825b935093915050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460805460405173ffffffffffffffffffffffffffffffffffffffff8481169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6000806000805b85602001515181101561228457856020015181815181106122535761225361314e565b602002602001015167ffffffffffffffff168261227091906138cd565b91508061227c816138f9565b915050612230565b50600061229385600084612128565b9094509050600080805b8860200151518110156122fb57886020015181815181106122c0576122c061314e565b602002602001015167ffffffffffffffff16826122dd91906138cd565b91508092508382116122fb57806122f3816138f9565b91505061229d565b5087518051839081106123105761231061314e565b60200260200101519450505050509250929050565b604080516101008101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e0810182905281906040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810191909152600080546123f59073ffffffffffffffffffffffffffffffffffffffff167f1c25628829b4861cd29b8126181e286e9aa3749b43e568208fa84796fe72e381610c1a565b600080549192509061243d9073ffffffffffffffffffffffffffffffffffffffff167f4e85e4bd7fbc26f10fe53aa450c8a80dc5148546d6ed113502ac93556c10ece2610c1a565b60008054919250906124859073ffffffffffffffffffffffffffffffffffffffff167fdd93cfd8a6751ddc87ad60672ba29f973167cf054c7cf626eef9bb0620fdfb69610c1a565b6040517f447e2bd200000000000000000000000000000000000000000000000000000000815263ffffffff8b16600482015290915060009073ffffffffffffffffffffffffffffffffffffffff83169063447e2bd290602401600060405180830381865afa1580156124fb573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261254191908101906130bd565b90506000805b825181101561263b5760008673ffffffffffffffffffffffffffffffffffffffff16630ff4c9168584815181106125805761258061314e565b60200260200101516040518263ffffffff1660e01b81526004016125a691815260200190565b600060405180830381865afa1580156125c3573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526126099190810190613942565b9050806080015167ffffffffffffffff168361262591906138cd565b9250508080612633906138f9565b915050612547565b50600061264a8b600084612128565b909a5090506000805b845181101561280b5760008873ffffffffffffffffffffffffffffffffffffffff16630ff4c91687848151811061268c5761268c61314e565b60200260200101516040518263ffffffff1660e01b81526004016126b291815260200190565b600060405180830381865afa1580156126cf573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526127159190810190613942565b9050806080015167ffffffffffffffff168361273191906138cd565b92508582815181106127455761274561314e565b60200260200101519b50809a508773ffffffffffffffffffffffffffffffffffffffff16630ff4c9168784815181106127805761278061314e565b60200260200101516040518263ffffffff1660e01b81526004016127a691815260200190565b61012060405180830381865afa1580156127c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127e89190613a33565b9950838311156127f8575061280b565b5080612803816138f9565b915050612653565b505050505050505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610180810167ffffffffffffffff8111828210171561286f5761286f61281c565b60405290565b604051610160810167ffffffffffffffff8111828210171561286f5761286f61281c565b60405160a0810167ffffffffffffffff8111828210171561286f5761286f61281c565b604051610100810167ffffffffffffffff8111828210171561286f5761286f61281c565b604051610120810167ffffffffffffffff8111828210171561286f5761286f61281c565b6040805190810167ffffffffffffffff8111828210171561286f5761286f61281c565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561296e5761296e61281c565b604052919050565b600067ffffffffffffffff8211156129905761299061281c565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b6000602082840312156129ce57600080fd5b813567ffffffffffffffff8111156129e557600080fd5b8201601f810184136129f657600080fd5b8035612a09612a0482612976565b612927565b818152856020838501011115612a1e57600080fd5b81602084016020830137600091810160200191909152949350505050565b60005b83811015612a57578181015183820152602001612a3f565b83811115612a66576000848401525b50505050565b60008151808452612a84816020860160208601612a3c565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006100f26020830184612a6c565b600082601f830112612ada57600080fd5b612ae2612904565b806040840185811115612af457600080fd5b845b81811015612b0e578035845260209384019301612af6565b509095945050505050565b600082601f830112612b2a57600080fd5b612b32612904565b806080840185811115612b4457600080fd5b845b81811015612b0e57612b588782612ac9565b8452602090930192604001612b46565b60006102208284031215612b7b57600080fd5b612b8361284b565b823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a082015260c083013560c082015260e083013560e0820152610100808401358183015250610120612be885828601612ac9565b90820152610160612bfb85858301612b19565b610140830152612c0f856101e08601612ac9565b908201529392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114610b6257600080fd5b600060208284031215612c4e57600080fd5b81356100f281612c1a565b600082601f830112612c6a57600080fd5b612c72612904565b806040840185811115612c8457600080fd5b845b81811015612b0e578051845260209384019301612c86565b600082601f830112612caf57600080fd5b612cb7612904565b806080840185811115612cc957600080fd5b845b81811015612b0e57612cdd8782612c59565b8452602090930192604001612ccb565b60006102208284031215612d0057600080fd5b612d0861284b565b825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120612d6d85828601612c59565b90820152610160612d8085858301612c9e565b610140830152612c0f856101e08601612c59565b80518015158114612da457600080fd5b919050565b8051612da481612c1a565b60006101608284031215612dc757600080fd5b612dcf612875565b612dd883612d94565b8152612de660208401612da9565b6020820152612df760408401612da9565b6040820152612e0860608401612da9565b6060820152612e1960808401612da9565b6080820152612e2a60a08401612da9565b60a0820152612e3b60c08401612da9565b60c0820152612e4c60e08401612da9565b60e0820152610100612e5f818501612da9565b90820152610120612e71848201612da9565b90820152610140612c0f848201612da9565b8060005b6002811015612a66578151845260209384019390910190600101612e87565b6102208101612eb58287612e83565b60408083018660005b6002811015612ee557612ed2838351612e83565b9183019160209190910190600101612ebe565b50505050612ef660c0830185612e83565b61010082018360005b6009811015612f1e578151835260209283019290910190600101612eff565b50505095945050505050565b600060208284031215612f3c57600080fd5b6100f282612d94565b805163ffffffff81168114612da457600080fd5b600060208284031215612f6b57600080fd5b6100f282612f45565b8281526040602082015260008251610120806040850152612f99610160850183612a6c565b915060208501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0858403016060860152612fd48382612a6c565b9250506040850151612feb608086018260ff169052565b50606085015160ff811660a086015250608085015167ffffffffffffffff811660c08601525060a085015167ffffffffffffffff811660e08601525060c08501516101006130408187018363ffffffff169052565b60e087015167ffffffffffffffff908116938701939093528601519182166101408601525050949350505050565b828152606081016100f26020830184805167ffffffffffffffff908116835260209182015116910152565b600067ffffffffffffffff8211156130b3576130b361281c565b5060051b60200190565b600060208083850312156130d057600080fd5b825167ffffffffffffffff8111156130e757600080fd5b8301601f810185136130f857600080fd5b8051613106612a0482613099565b81815260059190911b8201830190838101908783111561312557600080fd5b928401925b828410156131435783518252928401929084019061312a565b979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b805167ffffffffffffffff81168114612da457600080fd5b600060e082840312156131a757600080fd5b60405160e0810181811067ffffffffffffffff821117156131ca576131ca61281c565b6040526131d68361317d565b81526131e46020840161317d565b60208201526131f56040840161317d565b60408201526132066060840161317d565b60608201526132176080840161317d565b608082015261322860a0840161317d565b60a082015261323960c0840161317d565b60c08201529392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600181815b808511156132cd57817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211156132b3576132b3613245565b808516156132c057918102915b93841c9390800290613279565b509250929050565b6000826132e457506001610d62565b816132f157506000610d62565b816001811461330757600281146133115761332d565b6001915050610d62565b60ff84111561332257613322613245565b50506001821b610d62565b5060208310610133831016604e8410600b8410161715613350575081810a610d62565b61335a8383613274565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482111561338c5761338c613245565b029392505050565b60006100f267ffffffffffffffff8416836132d5565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000826133e8576133e86133aa565b500690565b6000602082840312156133ff57600080fd5b5051919050565b60006020828403121561341857600080fd5b81518060030b81146100f257600080fd5b600060a0828403121561343b57600080fd5b60405160a0810181811067ffffffffffffffff8211171561345e5761345e61281c565b60405261346a8361317d565b81526134786020840161317d565b60208201526134896040840161317d565b604082015261349a6060840161317d565b6060820152608083015160808201528091505092915050565b6000604082840312156134c557600080fd5b6040516040810181811067ffffffffffffffff821117156134e8576134e861281c565b6040526134f48361317d565b81526135026020840161317d565b60208201529392505050565b600067ffffffffffffffff8381169083168181101561352f5761352f613245565b039392505050565b600067ffffffffffffffff80841680613552576135526133aa565b92169190910492915050565b600067ffffffffffffffff80831681851680830382111561358157613581613245565b01949350505050565b60006060828403121561359c57600080fd5b6040516060810181811067ffffffffffffffff821117156135bf576135bf61281c565b6040526135cb83612f45565b81526135d96020840161317d565b60208201526135ea60408401612d94565b60408201529392505050565b60006020828403121561360857600080fd5b81516100f281612c1a565b600067ffffffffffffffff8083168185168183048111821515161561363a5761363a613245565b02949350505050565b600082601f83011261365457600080fd5b81516020613664612a0483613099565b82815260059290921b8401810191818101908684111561368357600080fd5b8286015b848110156136a55761369881612f45565b8352918301918301613687565b509695505050505050565b600082601f8301126136c157600080fd5b815160206136d1612a0483613099565b82815260059290921b840181019181810190868411156136f057600080fd5b8286015b848110156136a5576137058161317d565b83529183019183016136f4565b600082601f83011261372357600080fd5b8151613731612a0482612976565b81815284602083860101111561374657600080fd5b613757826020830160208701612a3c565b949350505050565b600082601f83011261377057600080fd5b81516020613780612a0483613099565b82815260059290921b8401810191818101908684111561379f57600080fd5b8286015b848110156136a557805167ffffffffffffffff8111156137c35760008081fd5b6137d18986838b0101613712565b8452509183019183016137a3565b6000602082840312156137f157600080fd5b815167ffffffffffffffff8082111561380957600080fd5b9083019060a0828603121561381d57600080fd5b613825612899565b82518281111561383457600080fd5b61384087828601613643565b82525060208301518281111561385557600080fd5b613861878286016136b0565b60208301525060408301518281111561387957600080fd5b6138858782860161375f565b6040830152506138976060840161317d565b60608201526138a86080840161317d565b608082015295945050505050565b6000828210156138c8576138c8613245565b500390565b600082198211156138e0576138e0613245565b500190565b6000826138f4576138f46133aa565b500490565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361392a5761392a613245565b5060010190565b805160ff81168114612da457600080fd5b60006020828403121561395457600080fd5b815167ffffffffffffffff8082111561396c57600080fd5b90830190610100828603121561398157600080fd5b6139896128bc565b8251815260208301518281111561399f57600080fd5b6139ab87828601613712565b6020830152506040830151828111156139c357600080fd5b6139cf87828601613712565b6040830152506139e160608401612f45565b60608201526139f26080840161317d565b6080820152613a0360a08401613931565b60a0820152613a1460c08401613931565b60c0820152613a2560e0840161317d565b60e082015295945050505050565b60006101208284031215613a4657600080fd5b613a4e6128e0565b613a578361317d565b8152613a656020840161317d565b6020820152613a766040840161317d565b6040820152613a876060840161317d565b6060820152613a9860808401612f45565b6080820152613aa960a0840161317d565b60a0820152613aba60c0840161317d565b60c0820152613acb60e0840161317d565b60e0820152610100612c0f81850161317d56fea2646970667358221220bca404ad3e370510ea6159f689d563f56c4d976ba31b229c9ea5659e6f697ad364736f6c634300080d0033";

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
