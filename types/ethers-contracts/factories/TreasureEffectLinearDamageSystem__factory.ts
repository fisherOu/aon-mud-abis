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
                name: "resourcePerlin",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "treasurePerlin",
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
            internalType: "struct CoordVerifyParamv2[]",
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
                name: "resourcePerlin",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "treasurePerlin",
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
            internalType: "struct CoordVerifyParamv2[]",
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
          {
            internalType: "bool",
            name: "fromGuild",
            type: "bool",
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
  "0x60806040523480156200001157600080fd5b5060405162002fac38038062002fac833981016040819052620000349162000230565b81818181620000433362000113565b6001600160a01b038116156200005a5780620000bf565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000099573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bf91906200026f565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000107919062000187602090811b620001cb17901c565b50505050505062000296565b60006200012a620001f360201b6200025c1760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022d57600080fd5b50565b600080604083850312156200024457600080fd5b8251620002518162000217565b6020840151909250620002648162000217565b809150509250929050565b6000602082840312156200028257600080fd5b81516200028f8162000217565b9392505050565b612d0680620002a66000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe146100515780638da5cb5b1461007a578063c420d84c146100a7578063f2fde38b146100ba575b600080fd5b61006461005f366004612099565b6100cf565b60405161007191906121b7565b60405180910390f35b6100826100f9565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100646100b53660046123ef565b61013e565b6100cd6100c836600461250a565b61014f565b005b60606000828060200190518101906100e791906126e6565b90506100f28161013e565b9392505050565b60006101397f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b606061014982610280565b92915050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146101bf576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6101c881610696565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6060600082604001519050610298836080015161069f565b600080546102dc9073ffffffffffffffffffffffffffffffffffffffff167fe84ae06d0531147bba573e3e5c6876c59c1ba9645cd7e87eb5141ca18dcfd284610863565b905060006102eb42600a6127ff565b905060005b85608001515181101561040957600186608001515161030f919061282b565b81146103f7578273ffffffffffffffffffffffffffffffffffffffff16639a8536608760800151838151811061034757610347612842565b60200260200101516020015160405180604001604052806040518060400160405280600d81526020017f61747461636b5468726f7567680000000000000000000000000000000000000081525081526020018667ffffffffffffffff168152506040518363ffffffff1660e01b81526004016103c4929190612871565b600060405180830381600087803b1580156103de57600080fd5b505af11580156103f2573d6000803e3d6000fd5b505050505b80610401816128b3565b9150506102f0565b5060005b8560a001515181101561068d5761045c8660a00151828151811061043357610433612842565b602090810291909101015160005473ffffffffffffffffffffffffffffffffffffffff166109af565b5060008061048b8860a00151848151811061047957610479612842565b60200260200101516020015187610cb1565b9092509050811561057c578473ffffffffffffffffffffffffffffffffffffffff16639a8536608960a0015185815181106104c8576104c8612842565b60200260200101516020015160405180604001604052806040518060400160405280600381526020017f686974000000000000000000000000000000000000000000000000000000000081525081526020018867ffffffffffffffff168152506040518363ffffffff1660e01b8152600401610545929190612871565b600060405180830381600087803b15801561055f57600080fd5b505af1158015610573573d6000803e3d6000fd5b5050505061065e565b8473ffffffffffffffffffffffffffffffffffffffff16639a8536608960a0015185815181106105ae576105ae612842565b60200260200101516020015160405180604001604052806040518060400160405280600d81526020017f61747461636b5468726f7567680000000000000000000000000000000000000081525081526020018867ffffffffffffffff168152506040518363ffffffff1660e01b815260040161062b929190612871565b600060405180830381600087803b15801561064557600080fd5b505af1158015610659573d6000803e3d6000fd5b505050505b6000610675838a60e0015163ffffffff1684611295565b90505050508080610685906128b3565b91505061040d565b50505050919050565b6101c881611903565b600080546106e39073ffffffffffffffffffffffffffffffffffffffff167fd7eb4644b0f312b764e14b10dbe895c6ee4acad8c1eb37a4791309b4d942e427610863565b905060005b825181101561085e57600183516106ff919061282b565b811461084c5761071a83828151811061043357610433612842565b5060008273ffffffffffffffffffffffffffffffffffffffff1663fbdfa1ea85848151811061074b5761074b612842565b6020026020010151602001516040518263ffffffff1660e01b815260040161077591815260200190565b600060405180830381865afa158015610792573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526107d891908101906128eb565b9050805160001461084a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f68617320456e7469747920696e2070617468000000000000000000000000000060448201526064015b60405180910390fd5b505b80610856816128b3565b9150506106e8565b505050565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa1580156108d3573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261091991908101906128eb565b90508051600003610986576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f7420726567697374657265640000000000000000000000000000006044820152606401610841565b6109a78160008151811061099c5761099c612842565b602002602001015190565b949350505050565b6000806109dc837fd0deb8af54f5692432398f7f62bf53c9e54e6d6a9b4dbccb012b3fe04ea432d3610863565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040161016060405180830381865afa158015610a27573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a4b9190612987565b805190915015610b7157600060405180610160016040528086600001518152602001866020015181526020018660400151815260200186606001518152602001866080015181526020018660a0015181526020018660c0015181526020018660e00151815260200186610100015181526020018661012001518152602001866101400151815250905081610140015173ffffffffffffffffffffffffffffffffffffffff1663b9c6ea87866101600151876101800151886101a00151856040518563ffffffff1660e01b8152600401610b279493929190612a8a565b602060405180830381865afa158015610b44573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b689190612b0e565b92505050610149565b6000610b9d847f9e0b856941fb70fc9b56c896d5f39a2079c3ed041dbc5e87efbf9c503b354b76610863565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160e060405180830381865afa158015610be7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c0b9190612b43565b9050806080015167ffffffffffffffff1685610120015111158015610c4357508060a0015167ffffffffffffffff1685610140015111155b610ca9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f726164697573206f766572206c696d69740000000000000000000000000000006044820152606401610841565b505092915050565b6000805481908190610cf99073ffffffffffffffffffffffffffffffffffffffff167f4c72609ffe767189426b756bdb4b34d206c9d4f7f58880d1cb7b77186b764765610863565b6000805491925090610d419073ffffffffffffffffffffffffffffffffffffffff167fa25d1e63f0e4f319cc626350346fd351279a4087ff185698c3e632cef078c7f9610863565b6000805491925090610d899073ffffffffffffffffffffffffffffffffffffffff167f3a491e792f21d1dfbaf5fe3e6a9453e90f9d0e1e3bab4ac6e371ac1ed485393f610863565b6000805491925090610dd19073ffffffffffffffffffffffffffffffffffffffff167fb88588d8fec752d1ccdaad27c5bbc03a1851f8687c806717617134354a8a7cd6610863565b9050610ddd88886119af565b9096509450851561128a576040517ffbdfa1ea0000000000000000000000000000000000000000000000000000000081526004810189905260009073ffffffffffffffffffffffffffffffffffffffff86169063fbdfa1ea90602401600060405180830381865afa158015610e56573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610e9c91908101906128eb565b905060005b8151811015611287578473ffffffffffffffffffffffffffffffffffffffff1663cccf7a8e838381518110610ed857610ed8612842565b60200260200101516040518263ffffffff1660e01b8152600401610efe91815260200190565b602060405180830381865afa158015610f1b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f3f9190612b0e565b156112755760008573ffffffffffffffffffffffffffffffffffffffff16630ff4c916848481518110610f7457610f74612842565b60200260200101516040518263ffffffff1660e01b8152600401610f9a91815260200190565b602060405180830381865afa158015610fb7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fdb9190612bf3565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810182905290915073ffffffffffffffffffffffffffffffffffffffff86169063cccf7a8e90602401602060405180830381865afa158015611049573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061106d9190612b0e565b801561110357506040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810182905273ffffffffffffffffffffffffffffffffffffffff85169063cccf7a8e90602401602060405180830381865afa1580156110df573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111039190612b0e565b15611273576040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810182905260009073ffffffffffffffffffffffffffffffffffffffff871690630ff4c91690602401606060405180830381865afa158015611176573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061119a9190612c0c565b905042816040015167ffffffffffffffff161015806111c55750604081015167ffffffffffffffff16155b801561126057506040517f0ff4c916000000000000000000000000000000000000000000000000000000008152600481018390528b9073ffffffffffffffffffffffffffffffffffffffff871690630ff4c91690602401602060405180830381865afa158015611239573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061125d9190612bf3565b14155b156112715750975060029650611287565b505b505b8061127f816128b3565b915050610ea1565b50505b505050509250929050565b60008315806112a2575082155b156112ae5750816100f2565b60028260048111156112c2576112c2612c7c565b0361165a576000805461130b9073ffffffffffffffffffffffffffffffffffffffff167f3a491e792f21d1dfbaf5fe3e6a9453e90f9d0e1e3bab4ac6e371ac1ed485393f610863565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810187905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015611379573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061139d9190612b0e565b15611654576040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810186905260009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401606060405180830381865afa158015611410573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114349190612c0c565b905042816040015167ffffffffffffffff1610158061145f5750604081015167ffffffffffffffff16155b80156114715750805163ffffffff1615155b1561165257805163ffffffff16851015611573578173ffffffffffffffffffffffffffffffffffffffff1663e431489c8760405180606001604052808986600001516114bd9190612cab565b63ffffffff168152602001856020015163ffffffff168152602001856040015167ffffffffffffffff168152506040518363ffffffff1660e01b815260040161153c929190918252805163ffffffff90811660208085019190915282015116604080840191909152015167ffffffffffffffff16606082015260800190565b600060405180830381600087803b15801561155657600080fd5b505af115801561156a573d6000803e3d6000fd5b50505050611652565b80516115859063ffffffff168661282b565b60008054919450906115cd9073ffffffffffffffffffffffffffffffffffffffff167f6c062316985e8e531501d3a588aed06abfad54c545ae238fe2d6f51a6ab9bee8610863565b6040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810189905290915073ffffffffffffffffffffffffffffffffffffffff821690634cc8221590602401600060405180830381600087803b15801561163857600080fd5b505af115801561164c573d6000803e3d6000fd5b50505050505b505b506100f2565b6000805461169e9073ffffffffffffffffffffffffffffffffffffffff167f6c062316985e8e531501d3a588aed06abfad54c545ae238fe2d6f51a6ab9bee8610863565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810187905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa15801561170c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117309190612b0e565b156118fb576040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810186905260009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401602060405180830381865afa1580156117a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117c79190612bf3565b90508481111561186b5773ffffffffffffffffffffffffffffffffffffffff8216631ab06ee5876117f8888561282b565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815260048101929092526024820152604401600060405180830381600087803b15801561184e57600080fd5b505af1158015611862573d6000803e3d6000fd5b505050506118f9565b611875818661282b565b6040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810188905290935073ffffffffffffffffffffffffffffffffffffffff831690634cc8221590602401600060405180830381600087803b1580156118e057600080fd5b505af11580156118f4573d6000803e3d6000fd5b505050505b505b509392505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460805460405173ffffffffffffffffffffffffffffffffffffffff8481169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60008054819081906119f79073ffffffffffffffffffffffffffffffffffffffff167fd7eb4644b0f312b764e14b10dbe895c6ee4acad8c1eb37a4791309b4d942e427610863565b6000805491925090611a3f9073ffffffffffffffffffffffffffffffffffffffff167f47847aa6dad6656997b23b837b7a178fcf6ee815ad8065af73bc07856277a776610863565b6000805491925090611a879073ffffffffffffffffffffffffffffffffffffffff167f8900e57ac2ff61c328bbaa69d2071a542ae5ff48c693375a49fd2937c1ef8332610863565b6000805491925090611acf9073ffffffffffffffffffffffffffffffffffffffff167f4cf8575af513e85e971e8168543790c67a13325a2b9e58a3f87c5e536c104555610863565b6000805491925090611b179073ffffffffffffffffffffffffffffffffffffffff167f3a491e792f21d1dfbaf5fe3e6a9453e90f9d0e1e3bab4ac6e371ac1ed485393f610863565b6040517ffbdfa1ea000000000000000000000000000000000000000000000000000000008152600481018b905290915060009073ffffffffffffffffffffffffffffffffffffffff87169063fbdfa1ea90602401600060405180830381865afa158015611b88573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052611bce91908101906128eb565b905060005b8151811015611f78578473ffffffffffffffffffffffffffffffffffffffff1663cccf7a8e838381518110611c0a57611c0a612842565b60200260200101516040518263ffffffff1660e01b8152600401611c3091815260200190565b602060405180830381865afa158015611c4d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c719190612b0e565b8015611c7b575088155b15611ca557818181518110611c9257611c92612842565b6020026020010151985060009750611f66565b8573ffffffffffffffffffffffffffffffffffffffff1663cccf7a8e838381518110611cd357611cd3612842565b60200260200101516040518263ffffffff1660e01b8152600401611cf991815260200190565b602060405180830381865afa158015611d16573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d3a9190612b0e565b15611d6457818181518110611d5157611d51612842565b6020026020010151985060019750611f66565b8273ffffffffffffffffffffffffffffffffffffffff1663cccf7a8e838381518110611d9257611d92612842565b60200260200101516040518263ffffffff1660e01b8152600401611db891815260200190565b602060405180830381865afa158015611dd5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611df99190612b0e565b8015611e3c5750881580611e3c57506000886004811115611e1c57611e1c612c7c565b14158015611e3c57506001886004811115611e3957611e39612c7c565b14155b15611e6657818181518110611e5357611e53612842565b6020026020010151985060049750611f66565b818181518110611e7857611e78612842565b60200260200101518473ffffffffffffffffffffffffffffffffffffffff16630ff4c9168d6040518263ffffffff1660e01b8152600401611ebb91815260200190565b602060405180830381865afa158015611ed8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611efc9190612bf3565b148015611f405750881580611f4057506000886004811115611f2057611f20612c7c565b14158015611f4057506001886004811115611f3d57611f3d612c7c565b14155b15611f6657818181518110611f5757611f57612842565b60200260200101519850600397505b80611f70816128b3565b915050611bd3565b505050505050509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516101c0810167ffffffffffffffff81118282101715611fd957611fd9611f86565b60405290565b604051610120810167ffffffffffffffff81118282101715611fd957611fd9611f86565b604051610160810167ffffffffffffffff81118282101715611fd957611fd9611f86565b6040805190810167ffffffffffffffff81118282101715611fd957611fd9611f86565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561209157612091611f86565b604052919050565b600060208083850312156120ac57600080fd5b823567ffffffffffffffff808211156120c457600080fd5b818501915085601f8301126120d857600080fd5b8135818111156120ea576120ea611f86565b61211a847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8401160161204a565b9150808252868482850101111561213057600080fd5b8084840185840137600090820190930192909252509392505050565b6000815180845260005b8181101561217257602081850181015186830182015201612156565b81811115612184576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006100f2602083018461214c565b80151581146101c857600080fd5b80356121e3816121ca565b919050565b600067ffffffffffffffff82111561220257612202611f86565b5060051b60200190565b600082601f83011261221d57600080fd5b612225612027565b80604084018581111561223757600080fd5b845b81811015612251578035845260209384019301612239565b509095945050505050565b600082601f83011261226d57600080fd5b612275612027565b80608084018581111561228757600080fd5b845b818110156122515761229b878261220c565b8452602090930192604001612289565b600082601f8301126122bc57600080fd5b813560206122d16122cc836121e8565b61204a565b82815261026092830285018201928282019190878511156122f157600080fd5b8387015b858110156123c55781818a03121561230d5760008081fd5b612315611fb5565b81358152858201358682015260408083013590820152606080830135908201526080808301359082015260a0808301359082015260c0808301359082015260e0808301359082015261010080830135908201526101208083013590820152610140808301359082015261016061238d8b82850161220c565b908201526101a06123a08b84830161225c565b6101808301526123b48b610220850161220c565b9082015284529284019281016122f5565b5090979650505050505050565b63ffffffff811681146101c857600080fd5b80356121e3816123d2565b60006020828403121561240157600080fd5b813567ffffffffffffffff8082111561241957600080fd5b90830190610120828603121561242e57600080fd5b612436611fdf565b82358152612446602084016121d8565b6020820152604083013560408201526060830135606082015260808301358281111561247157600080fd5b61247d878286016122ab565b60808301525060a08301358281111561249557600080fd5b6124a1878286016122ab565b60a0830152506124b360c084016123e4565b60c08201526124c460e084016123e4565b60e082015261010091506124d98284016121d8565b91810191909152949350505050565b73ffffffffffffffffffffffffffffffffffffffff811681146101c857600080fd5b60006020828403121561251c57600080fd5b81356100f2816124e8565b80516121e3816121ca565b600082601f83011261254357600080fd5b61254b612027565b80604084018581111561255d57600080fd5b845b8181101561225157805184526020938401930161255f565b600082601f83011261258857600080fd5b612590612027565b8060808401858111156125a257600080fd5b845b81811015612251576125b68782612532565b84526020909301926040016125a4565b600082601f8301126125d757600080fd5b815160206125e76122cc836121e8565b828152610260928302850182019282820191908785111561260757600080fd5b8387015b858110156123c55781818a0312156126235760008081fd5b61262b611fb5565b81518152858201518682015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e080830151908201526101008083015190820152610120808301519082015261014080830151908201526101606126a38b828501612532565b908201526101a06126b68b848301612577565b6101808301526126ca8b6102208501612532565b90820152845292840192810161260b565b80516121e3816123d2565b6000602082840312156126f857600080fd5b815167ffffffffffffffff8082111561271057600080fd5b90830190610120828603121561272557600080fd5b61272d611fdf565b8251815261273d60208401612527565b6020820152604083015160408201526060830151606082015260808301518281111561276857600080fd5b612774878286016125c6565b60808301525060a08301518281111561278c57600080fd5b612798878286016125c6565b60a0830152506127aa60c084016126db565b60c08201526127bb60e084016126db565b60e082015261010091506124d9828401612527565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600067ffffffffffffffff808316818516808303821115612822576128226127d0565b01949350505050565b60008282101561283d5761283d6127d0565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b8281526040602082015260008251604080840152612892608084018261214c565b905067ffffffffffffffff6020850151166060840152809150509392505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036128e4576128e46127d0565b5060010190565b600060208083850312156128fe57600080fd5b825167ffffffffffffffff81111561291557600080fd5b8301601f8101851361292657600080fd5b80516129346122cc826121e8565b81815260059190911b8201830190838101908783111561295357600080fd5b928401925b8284101561297157835182529284019290840190612958565b979650505050505050565b80516121e3816124e8565b6000610160828403121561299a57600080fd5b6129a2612003565b6129ab83612527565b81526129b96020840161297c565b60208201526129ca6040840161297c565b60408201526129db6060840161297c565b60608201526129ec6080840161297c565b60808201526129fd60a0840161297c565b60a0820152612a0e60c0840161297c565b60c0820152612a1f60e0840161297c565b60e0820152610100612a3281850161297c565b90820152610120612a4484820161297c565b90820152610140612a5684820161297c565b908201529392505050565b8060005b6002811015612a84578151845260209384019390910190600101612a65565b50505050565b6102608101612a998287612a61565b60408083018660005b6002811015612ac957612ab6838351612a61565b9183019160209190910190600101612aa2565b50505050612ada60c0830185612a61565b61010082018360005b600b811015612b02578151835260209283019290910190600101612ae3565b50505095945050505050565b600060208284031215612b2057600080fd5b81516100f2816121ca565b805167ffffffffffffffff811681146121e357600080fd5b600060e08284031215612b5557600080fd5b60405160e0810181811067ffffffffffffffff82111715612b7857612b78611f86565b604052612b8483612b2b565b8152612b9260208401612b2b565b6020820152612ba360408401612b2b565b6040820152612bb460608401612b2b565b6060820152612bc560808401612b2b565b6080820152612bd660a08401612b2b565b60a0820152612be760c08401612b2b565b60c08201529392505050565b600060208284031215612c0557600080fd5b5051919050565b600060608284031215612c1e57600080fd5b6040516060810181811067ffffffffffffffff82111715612c4157612c41611f86565b6040528251612c4f816123d2565b81526020830151612c5f816123d2565b6020820152612c7060408401612b2b565b60408201529392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600063ffffffff83811690831681811015612cc857612cc86127d0565b03939250505056fea26469706673582212202e50c0f22544193ec8baf2ca6746e5c0f47480707daa71d9c173923ed78cb4d364736f6c634300080d0033";

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
