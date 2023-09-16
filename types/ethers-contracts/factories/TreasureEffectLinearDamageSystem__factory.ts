/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  TreasureEffectLinearDamageSystem,
  TreasureEffectLinearDamageSystemInterface,
} from "../TreasureEffectLinearDamageSystem";

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
        name: "prex",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
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
        components: [
          {
            internalType: "uint256",
            name: "sourceID",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isComponent",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "entity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "treasureID",
            type: "uint256",
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
          {
            internalType: "uint32",
            name: "areaAmount",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "value",
            type: "uint32",
          },
        ],
        internalType: "struct TreasureEffectInfo",
        name: "effectInfo",
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
  "0x60806040523480156200001157600080fd5b5060405162002cbe38038062002cbe833981016040819052620000349162000230565b81818181620000433362000113565b6001600160a01b038116156200005a5780620000bf565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000099573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bf91906200026f565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000107919062000187602090811b620001cb17901c565b50505050505062000296565b60006200012a620001f360201b6200025c1760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022d57600080fd5b50565b600080604083850312156200024457600080fd5b8251620002518162000217565b6020840151909250620002648162000217565b809150509250929050565b6000602082840312156200028257600080fd5b81516200028f8162000217565b9392505050565b612a1880620002a66000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe146100515780638da5cb5b1461007a578063e57eaec7146100a7578063f2fde38b146100ba575b600080fd5b61006461005f366004611e6c565b6100cf565b6040516100719190611f8a565b60405180910390f35b6100826100f9565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100646100b5366004612180565b61013e565b6100cd6100c8366004612285565b61014f565b005b60606000828060200190518101906100e7919061241f565b90506100f28161013e565b9392505050565b60006101397f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b606061014982610280565b92915050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146101bf576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6101c8816105b0565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b606060008260400151905061029883608001516105b9565b600080546102dc9073ffffffffffffffffffffffffffffffffffffffff167fe84ae06d0531147bba573e3e5c6876c59c1ba9645cd7e87eb5141ca18dcfd28461077d565b905060006102eb42600a612523565b905060005b85608001515181101561040957600186608001515161030f919061254f565b81146103f7578273ffffffffffffffffffffffffffffffffffffffff16639a8536608760800151838151811061034757610347612566565b60200260200101516020015160405180604001604052806040518060400160405280600d81526020017f61747461636b5468726f7567680000000000000000000000000000000000000081525081526020018667ffffffffffffffff168152506040518363ffffffff1660e01b81526004016103c4929190612595565b600060405180830381600087803b1580156103de57600080fd5b505af11580156103f2573d6000803e3d6000fd5b505050505b80610401816125d7565b9150506102f0565b5060005b8560a00151518110156105a75761045c8660a00151828151811061043357610433612566565b602090810291909101015160005473ffffffffffffffffffffffffffffffffffffffff166108c9565b5060008061048b8860a00151848151811061047957610479612566565b60200260200101516020015187610b96565b90925090508115610578578473ffffffffffffffffffffffffffffffffffffffff16639a8536608960a0015185815181106104c8576104c8612566565b60200260200101516020015160405180604001604052806040518060400160405280600381526020017f686974000000000000000000000000000000000000000000000000000000000081525081526020018867ffffffffffffffff168152506040518363ffffffff1660e01b8152600401610545929190612595565b600060405180830381600087803b15801561055f57600080fd5b505af1158015610573573d6000803e3d6000fd5b505050505b600061058f838a60e0015163ffffffff16846116c3565b9050505050808061059f906125d7565b91505061040d565b50505050919050565b6101c881611cd1565b600080546105fd9073ffffffffffffffffffffffffffffffffffffffff167fd7eb4644b0f312b764e14b10dbe895c6ee4acad8c1eb37a4791309b4d942e42761077d565b905060005b82518110156107785760018351610619919061254f565b81146107665761063483828151811061043357610433612566565b5060008273ffffffffffffffffffffffffffffffffffffffff1663fbdfa1ea85848151811061066557610665612566565b6020026020010151602001516040518263ffffffff1660e01b815260040161068f91815260200190565b600060405180830381865afa1580156106ac573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526106f2919081019061260f565b90508051600014610764576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f68617320456e7469747920696e2070617468000000000000000000000000000060448201526064015b60405180910390fd5b505b80610770816125d7565b915050610602565b505050565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa1580156107ed573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610833919081019061260f565b905080516000036108a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f742072656769737465726564000000000000000000000000000000604482015260640161075b565b6108c1816000815181106108b6576108b6612566565b602002602001015190565b949350505050565b6000806108f6837fd0deb8af54f5692432398f7f62bf53c9e54e6d6a9b4dbccb012b3fe04ea432d361077d565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040161014060405180830381865afa158015610941573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061096591906126ab565b805190915015610a58576040805160a080820183528651825260208088015190830152868301518284015260608088015190830152608080880151908301526101208401519087015160c088015160e089015194517f34baeab9000000000000000000000000000000000000000000000000000000008152939473ffffffffffffffffffffffffffffffffffffffff909316936334baeab993610a0e939291879060040161279c565b602060405180830381865afa158015610a2b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a4f9190612820565b92505050610149565b6000610a84847f9e0b856941fb70fc9b56c896d5f39a2079c3ed041dbc5e87efbf9c503b354b7661077d565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160e060405180830381865afa158015610ace573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af29190612855565b9050806080015167ffffffffffffffff16856060015111158015610b2857508060a0015167ffffffffffffffff16856080015111155b610b8e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f726164697573206f766572206c696d6974000000000000000000000000000000604482015260640161075b565b505092915050565b6000805481908190610bde9073ffffffffffffffffffffffffffffffffffffffff167fd7eb4644b0f312b764e14b10dbe895c6ee4acad8c1eb37a4791309b4d942e42761077d565b6000805491925090610c269073ffffffffffffffffffffffffffffffffffffffff167f47847aa6dad6656997b23b837b7a178fcf6ee815ad8065af73bc07856277a77661077d565b6000805491925090610c6e9073ffffffffffffffffffffffffffffffffffffffff167f8900e57ac2ff61c328bbaa69d2071a542ae5ff48c693375a49fd2937c1ef833261077d565b6000805491925090610cb69073ffffffffffffffffffffffffffffffffffffffff167f4c72609ffe767189426b756bdb4b34d206c9d4f7f58880d1cb7b77186b76476561077d565b6000805491925090610cfe9073ffffffffffffffffffffffffffffffffffffffff167fa25d1e63f0e4f319cc626350346fd351279a4087ff185698c3e632cef078c7f961077d565b6000805491925090610d469073ffffffffffffffffffffffffffffffffffffffff167f4cf8575af513e85e971e8168543790c67a13325a2b9e58a3f87c5e536c10455561077d565b6000805491925090610d8e9073ffffffffffffffffffffffffffffffffffffffff167f3a491e792f21d1dfbaf5fe3e6a9453e90f9d0e1e3bab4ac6e371ac1ed485393f61077d565b6000805491925090610dd69073ffffffffffffffffffffffffffffffffffffffff167fb88588d8fec752d1ccdaad27c5bbc03a1851f8687c806717617134354a8a7cd661077d565b6040517ffbdfa1ea000000000000000000000000000000000000000000000000000000008152600481018e905290915060009073ffffffffffffffffffffffffffffffffffffffff8a169063fbdfa1ea90602401600060405180830381865afa158015610e47573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610e8d919081019061260f565b905060005b8151811015611235578773ffffffffffffffffffffffffffffffffffffffff1663cccf7a8e838381518110610ec957610ec9612566565b60200260200101516040518263ffffffff1660e01b8152600401610eef91815260200190565b602060405180830381865afa158015610f0c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f309190612820565b8015610f3a57508b155b15610f6457818181518110610f5157610f51612566565b60200260200101519b5060009a50611223565b8873ffffffffffffffffffffffffffffffffffffffff1663cccf7a8e838381518110610f9257610f92612566565b60200260200101516040518263ffffffff1660e01b8152600401610fb891815260200190565b602060405180830381865afa158015610fd5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ff99190612820565b156110235781818151811061101057611010612566565b60200260200101519b5060019a50611223565b8373ffffffffffffffffffffffffffffffffffffffff1663cccf7a8e83838151811061105157611051612566565b60200260200101516040518263ffffffff1660e01b815260040161107791815260200190565b602060405180830381865afa158015611094573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110b89190612820565b80156110fb57508b15806110fb575060008b60048111156110db576110db612905565b141580156110fb575060018b60048111156110f8576110f8612905565b14155b156111255781818151811061111257611112612566565b60200260200101519b5060049a50611223565b8473ffffffffffffffffffffffffffffffffffffffff1663cccf7a8e83838151811061115357611153612566565b60200260200101516040518263ffffffff1660e01b815260040161117991815260200190565b602060405180830381865afa158015611196573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111ba9190612820565b80156111fd57508b15806111fd575060008b60048111156111dd576111dd612905565b141580156111fd575060018b60048111156111fa576111fa612905565b14155b156112235781818151811061121457611214612566565b60200260200101519b5060039a505b8061122d816125d7565b915050610e92565b508a156116b3576040517ffbdfa1ea000000000000000000000000000000000000000000000000000000008152600481018e905260009073ffffffffffffffffffffffffffffffffffffffff88169063fbdfa1ea90602401600060405180830381865afa1580156112aa573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526112f0919081019061260f565b905060005b81518110156116b0578673ffffffffffffffffffffffffffffffffffffffff1663cccf7a8e83838151811061132c5761132c612566565b60200260200101516040518263ffffffff1660e01b815260040161135291815260200190565b602060405180830381865afa15801561136f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113939190612820565b1561169e5760008773ffffffffffffffffffffffffffffffffffffffff16630ff4c9168484815181106113c8576113c8612566565b60200260200101516040518263ffffffff1660e01b81526004016113ee91815260200190565b602060405180830381865afa15801561140b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061142f9190612934565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810182905290915073ffffffffffffffffffffffffffffffffffffffff87169063cccf7a8e90602401602060405180830381865afa15801561149d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114c19190612820565b801561155757506040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810182905273ffffffffffffffffffffffffffffffffffffffff86169063cccf7a8e90602401602060405180830381865afa158015611533573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115579190612820565b1561169c576040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810182905260009073ffffffffffffffffffffffffffffffffffffffff881690630ff4c91690602401606060405180830381865afa1580156115ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115ee919061294d565b905042816040015167ffffffffffffffff161015801561168957508f8673ffffffffffffffffffffffffffffffffffffffff16630ff4c916846040518263ffffffff1660e01b815260040161164591815260200190565b602060405180830381865afa158015611662573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116869190612934565b14155b1561169a57509c5060029b506116b0565b505b505b806116a8816125d7565b9150506112f5565b50505b5050505050505050509250929050565b60008315806116d0575082155b156116dc5750816100f2565b60028260048111156116f0576116f0612905565b03611a2857600080546117399073ffffffffffffffffffffffffffffffffffffffff167f3a491e792f21d1dfbaf5fe3e6a9453e90f9d0e1e3bab4ac6e371ac1ed485393f61077d565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810187905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa1580156117a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117cb9190612820565b15611a22576040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810186905260009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401606060405180830381865afa15801561183e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611862919061294d565b905042816040015167ffffffffffffffff16101580156118885750805163ffffffff1615155b15611a2057805163ffffffff1685101561198a578173ffffffffffffffffffffffffffffffffffffffff1663e431489c8760405180606001604052808986600001516118d491906129bd565b63ffffffff168152602001856020015163ffffffff168152602001856040015167ffffffffffffffff168152506040518363ffffffff1660e01b8152600401611953929190918252805163ffffffff90811660208085019190915282015116604080840191909152015167ffffffffffffffff16606082015260800190565b600060405180830381600087803b15801561196d57600080fd5b505af1158015611981573d6000803e3d6000fd5b50505050611a20565b805161199c9063ffffffff168661254f565b6040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810188905290935073ffffffffffffffffffffffffffffffffffffffff831690634cc8221590602401600060405180830381600087803b158015611a0757600080fd5b505af1158015611a1b573d6000803e3d6000fd5b505050505b505b506100f2565b60008054611a6c9073ffffffffffffffffffffffffffffffffffffffff167f6c062316985e8e531501d3a588aed06abfad54c545ae238fe2d6f51a6ab9bee861077d565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810187905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015611ada573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611afe9190612820565b15611cc9576040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810186905260009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401602060405180830381865afa158015611b71573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b959190612934565b905084811115611c395773ffffffffffffffffffffffffffffffffffffffff8216631ab06ee587611bc6888561254f565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815260048101929092526024820152604401600060405180830381600087803b158015611c1c57600080fd5b505af1158015611c30573d6000803e3d6000fd5b50505050611cc7565b611c43818661254f565b6040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810188905290935073ffffffffffffffffffffffffffffffffffffffff831690634cc8221590602401600060405180830381600087803b158015611cae57600080fd5b505af1158015611cc2573d6000803e3d6000fd5b505050505b505b509392505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460805460405173ffffffffffffffffffffffffffffffffffffffff8481169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610100810167ffffffffffffffff81118282101715611dd057611dd0611d7d565b60405290565b604051610140810167ffffffffffffffff81118282101715611dd057611dd0611d7d565b6040805190810167ffffffffffffffff81118282101715611dd057611dd0611d7d565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611e6457611e64611d7d565b604052919050565b60006020808385031215611e7f57600080fd5b823567ffffffffffffffff80821115611e9757600080fd5b818501915085601f830112611eab57600080fd5b813581811115611ebd57611ebd611d7d565b611eed847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611e1d565b91508082528684828501011115611f0357600080fd5b8084840185840137600090820190930192909252509392505050565b6000815180845260005b81811015611f4557602081850181015186830182015201611f29565b81811115611f57576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006100f26020830184611f1f565b80151581146101c857600080fd5b8035611fb681611f9d565b919050565b600067ffffffffffffffff821115611fd557611fd5611d7d565b5060051b60200190565b600082601f830112611ff057600080fd5b611ff8611dfa565b80604084018581111561200a57600080fd5b845b8181101561202457803584526020938401930161200c565b509095945050505050565b600082601f83011261204057600080fd5b612048611dfa565b80608084018581111561205a57600080fd5b845b818110156120245761206e8782611fdf565b845260209093019260400161205c565b600082601f83011261208f57600080fd5b813560206120a461209f83611fbb565b611e1d565b8281526101a092830285018201928282019190878511156120c457600080fd5b8387015b858110156121565781818a0312156120e05760008081fd5b6120e8611dac565b81358152858201358682015260408083013590820152606080830135908201526080808301359082015260a06121208b828501611fdf565b9082015260e06121328b84830161202f565b60c08301526121458b6101608501611fdf565b9082015284529284019281016120c8565b5090979650505050505050565b63ffffffff811681146101c857600080fd5b8035611fb681612163565b60006020828403121561219257600080fd5b813567ffffffffffffffff808211156121aa57600080fd5b9083019061010082860312156121bf57600080fd5b6121c7611dac565b823581526121d760208401611fab565b6020820152604083013560408201526060830135606082015260808301358281111561220257600080fd5b61220e8782860161207e565b60808301525060a08301358281111561222657600080fd5b6122328782860161207e565b60a08301525061224460c08401612175565b60c082015261225560e08401612175565b60e082015295945050505050565b73ffffffffffffffffffffffffffffffffffffffff811681146101c857600080fd5b60006020828403121561229757600080fd5b81356100f281612263565b8051611fb681611f9d565b600082601f8301126122be57600080fd5b6122c6611dfa565b8060408401858111156122d857600080fd5b845b818110156120245780518452602093840193016122da565b600082601f83011261230357600080fd5b61230b611dfa565b80608084018581111561231d57600080fd5b845b818110156120245761233187826122ad565b845260209093019260400161231f565b600082601f83011261235257600080fd5b8151602061236261209f83611fbb565b8281526101a0928302850182019282820191908785111561238257600080fd5b8387015b858110156121565781818a03121561239e5760008081fd5b6123a6611dac565b81518152858201518682015260408083015190820152606080830151908201526080808301519082015260a06123de8b8285016122ad565b9082015260e06123f08b8483016122f2565b60c08301526124038b61016085016122ad565b908201528452928401928101612386565b8051611fb681612163565b60006020828403121561243157600080fd5b815167ffffffffffffffff8082111561244957600080fd5b90830190610100828603121561245e57600080fd5b612466611dac565b82518152612476602084016122a2565b602082015260408301516040820152606083015160608201526080830151828111156124a157600080fd5b6124ad87828601612341565b60808301525060a0830151828111156124c557600080fd5b6124d187828601612341565b60a0830152506124e360c08401612414565b60c082015261225560e08401612414565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600067ffffffffffffffff808316818516808303821115612546576125466124f4565b01949350505050565b600082821015612561576125616124f4565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b82815260406020820152600082516040808401526125b66080840182611f1f565b905067ffffffffffffffff6020850151166060840152809150509392505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612608576126086124f4565b5060010190565b6000602080838503121561262257600080fd5b825167ffffffffffffffff81111561263957600080fd5b8301601f8101851361264a57600080fd5b805161265861209f82611fbb565b81815260059190911b8201830190838101908783111561267757600080fd5b928401925b828410156126955783518252928401929084019061267c565b979650505050505050565b8051611fb681612263565b600061014082840312156126be57600080fd5b6126c6611dd6565b6126cf836122a2565b81526126dd602084016126a0565b60208201526126ee604084016126a0565b60408201526126ff606084016126a0565b6060820152612710608084016126a0565b608082015261272160a084016126a0565b60a082015261273260c084016126a0565b60c082015261274360e084016126a0565b60e08201526101006127568185016126a0565b908201526101206127688482016126a0565b908201529392505050565b8060005b6002811015612796578151845260209384019390910190600101612777565b50505050565b6101a081016127ab8287612773565b60408083018660005b60028110156127db576127c8838351612773565b91830191602091909101906001016127b4565b505050506127ec60c0830185612773565b61010082018360005b60058110156128145781518352602092830192909101906001016127f5565b50505095945050505050565b60006020828403121561283257600080fd5b81516100f281611f9d565b805167ffffffffffffffff81168114611fb657600080fd5b600060e0828403121561286757600080fd5b60405160e0810181811067ffffffffffffffff8211171561288a5761288a611d7d565b6040526128968361283d565b81526128a46020840161283d565b60208201526128b56040840161283d565b60408201526128c66060840161283d565b60608201526128d76080840161283d565b60808201526128e860a0840161283d565b60a08201526128f960c0840161283d565b60c08201529392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60006020828403121561294657600080fd5b5051919050565b60006060828403121561295f57600080fd5b6040516060810181811067ffffffffffffffff8211171561298257612982611d7d565b604052825161299081612163565b815260208301516129a081612163565b60208201526129b16040840161283d565b60408201529392505050565b600063ffffffff838116908316818110156129da576129da6124f4565b03939250505056fea2646970667358221220a7b81fcadb02e47b5c013179e9e43247d6dc1f83f66500bf98e9aec7df3133e864736f6c634300080d0033";

type TreasureEffectLinearDamageSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TreasureEffectLinearDamageSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TreasureEffectLinearDamageSystem__factory extends ContractFactory {
  constructor(...args: TreasureEffectLinearDamageSystemConstructorParams) {
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
  ): Promise<TreasureEffectLinearDamageSystem> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<TreasureEffectLinearDamageSystem>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): TreasureEffectLinearDamageSystem {
    return super.attach(address) as TreasureEffectLinearDamageSystem;
  }
  override connect(signer: Signer): TreasureEffectLinearDamageSystem__factory {
    return super.connect(signer) as TreasureEffectLinearDamageSystem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TreasureEffectLinearDamageSystemInterface {
    return new utils.Interface(
      _abi
    ) as TreasureEffectLinearDamageSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TreasureEffectLinearDamageSystem {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TreasureEffectLinearDamageSystem;
  }
}
