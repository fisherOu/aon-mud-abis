/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  AttackFinishv2System,
  AttackFinishv2SystemInterface,
} from "../AttackFinishv2System";

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
                name: "fogSeed",
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
            internalType: "struct CoordVerifyParam[]",
            name: "path",
            type: "tuple[]",
          },
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
                name: "fogSeed",
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
            internalType: "struct CoordVerifyParam[]",
            name: "area",
            type: "tuple[]",
          },
        ],
        internalType: "struct AttackFinishInfo",
        name: "attackInfo",
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
  "0x60806040523480156200001157600080fd5b5060405162002cac38038062002cac83398101604081905262000034916200022c565b818162000041336200010f565b6001600160a01b03811615620000585780620000bd565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000097573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bd91906200026b565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000105919062000183602090811b620002bc17901c565b5050505062000292565b600062000126620001ef60201b6200034d1760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022957600080fd5b50565b600080604083850312156200024057600080fd5b82516200024d8162000213565b6020840151909250620002608162000213565b809150509250929050565b6000602082840312156200027e57600080fd5b81516200028b8162000213565b9392505050565b612a0a80620002a26000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe14610051578063563a390e1461007a5780638da5cb5b1461008d578063f2fde38b146100ba575b600080fd5b61006461005f366004611f31565b6100cf565b604051610071919061204f565b60405180910390f35b61006461008836600461220a565b6100f9565b6100956101fb565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100cd6100c83660046122bd565b610240565b005b60606000828060200190518101906100e79190612441565b90506100f2816100f9565b9392505050565b606060058260000151511115610170576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f7665722072616e67650000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b8160200151516001146101df576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f6f6e6c79206f6e652074617267657420706f736974696f6e2076616c696400006044820152606401610167565b81516101ea90610371565b336101f58382610559565b50919050565b600061023b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146102b0576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102b981610837565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b600080546103b59073ffffffffffffffffffffffffffffffffffffffff167fd7eb4644b0f312b764e14b10dbe895c6ee4acad8c1eb37a4791309b4d942e427610840565b905060005b825181101561055457600183516103d191906124f2565b8114610542576104158382815181106103ec576103ec612509565b602090810291909101015160005473ffffffffffffffffffffffffffffffffffffffff1661098e565b5060008273ffffffffffffffffffffffffffffffffffffffff1663fbdfa1ea85848151811061044657610446612509565b6020026020010151602001516040518263ffffffff1660e01b815260040161047091815260200190565b600060405180830381865afa15801561048d573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526104d39190810190612538565b90508051600014610540576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f68617320456e7469747920696e207061746800000000000000000000000000006044820152606401610167565b505b8061054c816125c9565b9150506103ba565b505050565b6000805461059d9073ffffffffffffffffffffffffffffffffffffffff167fe84ae06d0531147bba573e3e5c6876c59c1ba9645cd7e87eb5141ca18dcfd284610840565b905060006105ac42600a612601565b905060005b8451518110156106c4578451516105ca906001906124f2565b81146106b2578273ffffffffffffffffffffffffffffffffffffffff16639a8536608660000151838151811061060257610602612509565b60200260200101516020015160405180604001604052806040518060400160405280600d81526020017f61747461636b5468726f7567680000000000000000000000000000000000000081525081526020018667ffffffffffffffff168152506040518363ffffffff1660e01b815260040161067f92919061262d565b600060405180830381600087803b15801561069957600080fd5b505af11580156106ad573d6000803e3d6000fd5b505050505b806106bc816125c9565b9150506105b1565b5060005b846020015151811015610830576106ee856020015182815181106103ec576103ec612509565b5060008061071d8760200151848151811061070b5761070b612509565b60200260200101516020015187610c5b565b9092509050811561080a578473ffffffffffffffffffffffffffffffffffffffff16639a8536608860200151858151811061075a5761075a612509565b60200260200101516020015160405180604001604052806040518060400160405280600381526020017f686974000000000000000000000000000000000000000000000000000000000081525081526020018867ffffffffffffffff168152506040518363ffffffff1660e01b81526004016107d792919061262d565b600060405180830381600087803b1580156107f157600080fd5b505af1158015610805573d6000803e3d6000fd5b505050505b600061081883600184611788565b90505050508080610828906125c9565b9150506106c8565b5050505050565b6102b981611d96565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa1580156108b0573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526108f69190810190612538565b90508051600003610963576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f7420726567697374657265640000000000000000000000000000006044820152606401610167565b6109848160008151811061097957610979612509565b602002602001015190565b9150505b92915050565b6000806109bb837fd0deb8af54f5692432398f7f62bf53c9e54e6d6a9b4dbccb012b3fe04ea432d3610840565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040161014060405180830381865afa158015610a06573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a2a919061268f565b805190915015610b1d576040805160a080820183528651825260208088015190830152868301518284015260608088015190830152608080880151908301526101208401519087015160c088015160e089015194517f34baeab9000000000000000000000000000000000000000000000000000000008152939473ffffffffffffffffffffffffffffffffffffffff909316936334baeab993610ad39392918790600401612780565b602060405180830381865afa158015610af0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b149190612804565b92505050610988565b6000610b49847f9e0b856941fb70fc9b56c896d5f39a2079c3ed041dbc5e87efbf9c503b354b76610840565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160e060405180830381865afa158015610b93573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bb79190612837565b9050806080015167ffffffffffffffff16856060015111158015610bed57508060a0015167ffffffffffffffff16856080015111155b610c53576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f726164697573206f766572206c696d69740000000000000000000000000000006044820152606401610167565b505092915050565b6000805481908190610ca39073ffffffffffffffffffffffffffffffffffffffff167fd7eb4644b0f312b764e14b10dbe895c6ee4acad8c1eb37a4791309b4d942e427610840565b6000805491925090610ceb9073ffffffffffffffffffffffffffffffffffffffff167f47847aa6dad6656997b23b837b7a178fcf6ee815ad8065af73bc07856277a776610840565b6000805491925090610d339073ffffffffffffffffffffffffffffffffffffffff167f8900e57ac2ff61c328bbaa69d2071a542ae5ff48c693375a49fd2937c1ef8332610840565b6000805491925090610d7b9073ffffffffffffffffffffffffffffffffffffffff167f4c72609ffe767189426b756bdb4b34d206c9d4f7f58880d1cb7b77186b764765610840565b6000805491925090610dc39073ffffffffffffffffffffffffffffffffffffffff167fa25d1e63f0e4f319cc626350346fd351279a4087ff185698c3e632cef078c7f9610840565b6000805491925090610e0b9073ffffffffffffffffffffffffffffffffffffffff167f4cf8575af513e85e971e8168543790c67a13325a2b9e58a3f87c5e536c104555610840565b6000805491925090610e539073ffffffffffffffffffffffffffffffffffffffff167f3a491e792f21d1dfbaf5fe3e6a9453e90f9d0e1e3bab4ac6e371ac1ed485393f610840565b6000805491925090610e9b9073ffffffffffffffffffffffffffffffffffffffff167fb88588d8fec752d1ccdaad27c5bbc03a1851f8687c806717617134354a8a7cd6610840565b6040517ffbdfa1ea000000000000000000000000000000000000000000000000000000008152600481018e905290915060009073ffffffffffffffffffffffffffffffffffffffff8a169063fbdfa1ea90602401600060405180830381865afa158015610f0c573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610f529190810190612538565b905060005b81518110156112fa578773ffffffffffffffffffffffffffffffffffffffff1663cccf7a8e838381518110610f8e57610f8e612509565b60200260200101516040518263ffffffff1660e01b8152600401610fb491815260200190565b602060405180830381865afa158015610fd1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ff59190612804565b8015610fff57508b155b156110295781818151811061101657611016612509565b60200260200101519b5060009a506112e8565b8873ffffffffffffffffffffffffffffffffffffffff1663cccf7a8e83838151811061105757611057612509565b60200260200101516040518263ffffffff1660e01b815260040161107d91815260200190565b602060405180830381865afa15801561109a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110be9190612804565b156110e8578181815181106110d5576110d5612509565b60200260200101519b5060019a506112e8565b8373ffffffffffffffffffffffffffffffffffffffff1663cccf7a8e83838151811061111657611116612509565b60200260200101516040518263ffffffff1660e01b815260040161113c91815260200190565b602060405180830381865afa158015611159573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061117d9190612804565b80156111c057508b15806111c0575060008b60048111156111a0576111a06128e7565b141580156111c0575060018b60048111156111bd576111bd6128e7565b14155b156111ea578181815181106111d7576111d7612509565b60200260200101519b5060049a506112e8565b8473ffffffffffffffffffffffffffffffffffffffff1663cccf7a8e83838151811061121857611218612509565b60200260200101516040518263ffffffff1660e01b815260040161123e91815260200190565b602060405180830381865afa15801561125b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061127f9190612804565b80156112c257508b15806112c2575060008b60048111156112a2576112a26128e7565b141580156112c2575060018b60048111156112bf576112bf6128e7565b14155b156112e8578181815181106112d9576112d9612509565b60200260200101519b5060039a505b806112f2816125c9565b915050610f57565b508a15611778576040517ffbdfa1ea000000000000000000000000000000000000000000000000000000008152600481018e905260009073ffffffffffffffffffffffffffffffffffffffff88169063fbdfa1ea90602401600060405180830381865afa15801561136f573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526113b59190810190612538565b905060005b8151811015611775578673ffffffffffffffffffffffffffffffffffffffff1663cccf7a8e8383815181106113f1576113f1612509565b60200260200101516040518263ffffffff1660e01b815260040161141791815260200190565b602060405180830381865afa158015611434573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114589190612804565b156117635760008773ffffffffffffffffffffffffffffffffffffffff16630ff4c91684848151811061148d5761148d612509565b60200260200101516040518263ffffffff1660e01b81526004016114b391815260200190565b602060405180830381865afa1580156114d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114f49190612916565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810182905290915073ffffffffffffffffffffffffffffffffffffffff87169063cccf7a8e90602401602060405180830381865afa158015611562573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115869190612804565b801561161c57506040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810182905273ffffffffffffffffffffffffffffffffffffffff86169063cccf7a8e90602401602060405180830381865afa1580156115f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061161c9190612804565b15611761576040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810182905260009073ffffffffffffffffffffffffffffffffffffffff881690630ff4c91690602401606060405180830381865afa15801561168f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116b39190612943565b905042816040015167ffffffffffffffff161015801561174e57508f8673ffffffffffffffffffffffffffffffffffffffff16630ff4c916846040518263ffffffff1660e01b815260040161170a91815260200190565b602060405180830381865afa158015611727573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061174b9190612916565b14155b1561175f57509c5060029b50611775565b505b505b8061176d816125c9565b9150506113ba565b50505b5050505050505050509250929050565b6000831580611795575082155b156117a15750816100f2565b60028260048111156117b5576117b56128e7565b03611aed57600080546117fe9073ffffffffffffffffffffffffffffffffffffffff167f3a491e792f21d1dfbaf5fe3e6a9453e90f9d0e1e3bab4ac6e371ac1ed485393f610840565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810187905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa15801561186c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118909190612804565b15611ae7576040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810186905260009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401606060405180830381865afa158015611903573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119279190612943565b905042816040015167ffffffffffffffff161015801561194d5750805163ffffffff1615155b15611ae557805163ffffffff16851015611a4f578173ffffffffffffffffffffffffffffffffffffffff1663e431489c87604051806060016040528089866000015161199991906129af565b63ffffffff168152602001856020015163ffffffff168152602001856040015167ffffffffffffffff168152506040518363ffffffff1660e01b8152600401611a18929190918252805163ffffffff90811660208085019190915282015116604080840191909152015167ffffffffffffffff16606082015260800190565b600060405180830381600087803b158015611a3257600080fd5b505af1158015611a46573d6000803e3d6000fd5b50505050611ae5565b8051611a619063ffffffff16866124f2565b6040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810188905290935073ffffffffffffffffffffffffffffffffffffffff831690634cc8221590602401600060405180830381600087803b158015611acc57600080fd5b505af1158015611ae0573d6000803e3d6000fd5b505050505b505b506100f2565b60008054611b319073ffffffffffffffffffffffffffffffffffffffff167f6c062316985e8e531501d3a588aed06abfad54c545ae238fe2d6f51a6ab9bee8610840565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810187905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015611b9f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bc39190612804565b15611d8e576040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810186905260009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401602060405180830381865afa158015611c36573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c5a9190612916565b905084811115611cfe5773ffffffffffffffffffffffffffffffffffffffff8216631ab06ee587611c8b88856124f2565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815260048101929092526024820152604401600060405180830381600087803b158015611ce157600080fd5b505af1158015611cf5573d6000803e3d6000fd5b50505050611d8c565b611d0881866124f2565b6040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810188905290935073ffffffffffffffffffffffffffffffffffffffff831690634cc8221590602401600060405180830381600087803b158015611d7357600080fd5b505af1158015611d87573d6000803e3d6000fd5b505050505b505b509392505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460805460405173ffffffffffffffffffffffffffffffffffffffff8481169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610100810167ffffffffffffffff81118282101715611e9557611e95611e42565b60405290565b6040805190810167ffffffffffffffff81118282101715611e9557611e95611e42565b604051610140810167ffffffffffffffff81118282101715611e9557611e95611e42565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611f2957611f29611e42565b604052919050565b60006020808385031215611f4457600080fd5b823567ffffffffffffffff80821115611f5c57600080fd5b818501915085601f830112611f7057600080fd5b813581811115611f8257611f82611e42565b611fb2847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611ee2565b91508082528684828501011115611fc857600080fd5b8084840185840137600090820190930192909252509392505050565b6000815180845260005b8181101561200a57602081850181015186830182015201611fee565b8181111561201c576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006100f26020830184611fe4565b600067ffffffffffffffff82111561207c5761207c611e42565b5060051b60200190565b600082601f83011261209757600080fd5b61209f611e9b565b8060408401858111156120b157600080fd5b845b818110156120cb5780358452602093840193016120b3565b509095945050505050565b600082601f8301126120e757600080fd5b6120ef611e9b565b80608084018581111561210157600080fd5b845b818110156120cb576121158782612086565b8452602090930192604001612103565b600082601f83011261213657600080fd5b8135602061214b61214683612062565b611ee2565b8281526101a0928302850182019282820191908785111561216b57600080fd5b8387015b858110156121fd5781818a0312156121875760008081fd5b61218f611e71565b81358152858201358682015260408083013590820152606080830135908201526080808301359082015260a06121c78b828501612086565b9082015260e06121d98b8483016120d6565b60c08301526121ec8b6101608501612086565b90820152845292840192810161216f565b5090979650505050505050565b60006020828403121561221c57600080fd5b813567ffffffffffffffff8082111561223457600080fd5b908301906040828603121561224857600080fd5b612250611e9b565b82358281111561225f57600080fd5b61226b87828601612125565b82525060208301358281111561228057600080fd5b61228c87828601612125565b60208301525095945050505050565b73ffffffffffffffffffffffffffffffffffffffff811681146102b957600080fd5b6000602082840312156122cf57600080fd5b81356100f28161229b565b600082601f8301126122eb57600080fd5b6122f3611e9b565b80604084018581111561230557600080fd5b845b818110156120cb578051845260209384019301612307565b600082601f83011261233057600080fd5b612338611e9b565b80608084018581111561234a57600080fd5b845b818110156120cb5761235e87826122da565b845260209093019260400161234c565b600082601f83011261237f57600080fd5b8151602061238f61214683612062565b8281526101a092830285018201928282019190878511156123af57600080fd5b8387015b858110156121fd5781818a0312156123cb5760008081fd5b6123d3611e71565b81518152858201518682015260408083015190820152606080830151908201526080808301519082015260a061240b8b8285016122da565b9082015260e061241d8b84830161231f565b60c08301526124308b61016085016122da565b9082015284529284019281016123b3565b60006020828403121561245357600080fd5b815167ffffffffffffffff8082111561246b57600080fd5b908301906040828603121561247f57600080fd5b612487611e9b565b82518281111561249657600080fd5b6124a28782860161236e565b8252506020830151828111156124b757600080fd5b61228c8782860161236e565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600082821015612504576125046124c3565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000602080838503121561254b57600080fd5b825167ffffffffffffffff81111561256257600080fd5b8301601f8101851361257357600080fd5b805161258161214682612062565b81815260059190911b820183019083810190878311156125a057600080fd5b928401925b828410156125be578351825292840192908401906125a5565b979650505050505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036125fa576125fa6124c3565b5060010190565b600067ffffffffffffffff808316818516808303821115612624576126246124c3565b01949350505050565b828152604060208201526000825160408084015261264e6080840182611fe4565b905067ffffffffffffffff6020850151166060840152809150509392505050565b8051801515811461267f57600080fd5b919050565b805161267f8161229b565b600061014082840312156126a257600080fd5b6126aa611ebe565b6126b38361266f565b81526126c160208401612684565b60208201526126d260408401612684565b60408201526126e360608401612684565b60608201526126f460808401612684565b608082015261270560a08401612684565b60a082015261271660c08401612684565b60c082015261272760e08401612684565b60e082015261010061273a818501612684565b9082015261012061274c848201612684565b908201529392505050565b8060005b600281101561277a57815184526020938401939091019060010161275b565b50505050565b6101a0810161278f8287612757565b60408083018660005b60028110156127bf576127ac838351612757565b9183019160209190910190600101612798565b505050506127d060c0830185612757565b61010082018360005b60058110156127f85781518352602092830192909101906001016127d9565b50505095945050505050565b60006020828403121561281657600080fd5b6100f28261266f565b805167ffffffffffffffff8116811461267f57600080fd5b600060e0828403121561284957600080fd5b60405160e0810181811067ffffffffffffffff8211171561286c5761286c611e42565b6040526128788361281f565b81526128866020840161281f565b60208201526128976040840161281f565b60408201526128a86060840161281f565b60608201526128b96080840161281f565b60808201526128ca60a0840161281f565b60a08201526128db60c0840161281f565b60c08201529392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60006020828403121561292857600080fd5b5051919050565b805163ffffffff8116811461267f57600080fd5b60006060828403121561295557600080fd5b6040516060810181811067ffffffffffffffff8211171561297857612978611e42565b6040526129848361292f565b81526129926020840161292f565b60208201526129a36040840161281f565b60408201529392505050565b600063ffffffff838116908316818110156129cc576129cc6124c3565b03939250505056fea2646970667358221220b4049e08dfc03a85e71f6d4d45ad35d3be7f0a2cb85f5da5502e44b55583c86e64736f6c634300080d0033";

type AttackFinishv2SystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AttackFinishv2SystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AttackFinishv2System__factory extends ContractFactory {
  constructor(...args: AttackFinishv2SystemConstructorParams) {
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
  ): Promise<AttackFinishv2System> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<AttackFinishv2System>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): AttackFinishv2System {
    return super.attach(address) as AttackFinishv2System;
  }
  override connect(signer: Signer): AttackFinishv2System__factory {
    return super.connect(signer) as AttackFinishv2System__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AttackFinishv2SystemInterface {
    return new utils.Interface(_abi) as AttackFinishv2SystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AttackFinishv2System {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AttackFinishv2System;
  }
}
