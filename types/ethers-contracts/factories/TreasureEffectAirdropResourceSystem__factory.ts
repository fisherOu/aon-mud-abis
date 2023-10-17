/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  TreasureEffectAirdropResourceSystem,
  TreasureEffectAirdropResourceSystemInterface,
} from "../TreasureEffectAirdropResourceSystem";

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
  "0x60806040523480156200001157600080fd5b5060405162002dfa38038062002dfa833981016040819052620000349162000230565b81818181620000433362000113565b6001600160a01b038116156200005a5780620000bf565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000099573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bf91906200026f565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000107919062000187602090811b620001cb17901c565b50505050505062000296565b60006200012a620001f360201b6200025c1760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022d57600080fd5b50565b600080604083850312156200024457600080fd5b8251620002518162000217565b6020840151909250620002648162000217565b809150509250929050565b6000602082840312156200028257600080fd5b81516200028f8162000217565b9392505050565b612b5480620002a66000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe146100515780638da5cb5b1461007a578063c420d84c146100a7578063f2fde38b146100ba575b600080fd5b61006461005f366004611e26565b6100cf565b6040516100719190611ed9565b60405180910390f35b6100826100f9565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100646100b5366004612171565b61013e565b6100cd6100c836600461228c565b61014f565b005b60606000828060200190518101906100e79190612468565b90506100f28161013e565b9392505050565b60006101397f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b606061014982610280565b92915050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146101bf576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6101c8816108ee565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b60408082015160015482517f614bfa6e000000000000000000000000000000000000000000000000000000008152925160609360009273ffffffffffffffffffffffffffffffffffffffff169163614bfa6e916004808201926020929091908290030181865afa1580156102f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061031c9190612552565b90507f3c5ad147104e56be34a9176a6692f7df8d2f4b29a5af06bc6b98970d329d657784608001515160405161038c919060408082526005908201527f706174683a0000000000000000000000000000000000000000000000000000006060820152602081019190915260800190565b60405180910390a17f3c5ad147104e56be34a9176a6692f7df8d2f4b29a5af06bc6b98970d329d65778460a0015151604051610402919060408082526005908201527f617265613a0000000000000000000000000000000000000000000000000000006060820152602081019190915260800190565b60405180910390a183608001515160011461047e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f74617267657420636f6f726420696e76616c696400000000000000000000000060448201526064015b60405180910390fd5b6104a984608001516000815181106104985761049861256b565b6020026020010151602001516108f7565b6104f784608001516000815181106104c3576104c361256b565b602002602001015160c0015185608001516000815181106104e6576104e661256b565b602002602001015160000151610a64565b61054584608001516000815181106105115761051161256b565b60200260200101516000015185608001516000815181106105345761053461256b565b602002602001015160600151610c78565b60005b8460a0015151811015610659577f3c5ad147104e56be34a9176a6692f7df8d2f4b29a5af06bc6b98970d329d65778560a00151828151811061058c5761058c61256b565b6020026020010151602001516040516105df919060408082526009908201527f636865636b696e673a00000000000000000000000000000000000000000000006060820152602081019190915260800190565b60405180910390a160008560a0015182815181106105ff576105ff61256b565b602002602001015190506106338160008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16611035565b5061064681600001518260600151610c78565b5080610651816125c9565b915050610548565b506106a884608001516000815181106106745761067461256b565b60200260200101516000015185608001516000815181106106975761069761256b565b602002602001015160600151611337565b60005b8460a001515181101561079b577f3c5ad147104e56be34a9176a6692f7df8d2f4b29a5af06bc6b98970d329d65778560a0015182815181106106ef576106ef61256b565b602002602001015160200151604051610742919060408082526013908201527f616464696e672065666665637420617265613a000000000000000000000000006060820152602081019190915260800190565b60405180910390a160008560a0015182815181106107625761076261256b565b6020026020010151905061077e81600001518260600151611337565b610788818461144b565b5080610793816125c9565b9150506106ab565b507f3c5ad147104e56be34a9176a6692f7df8d2f4b29a5af06bc6b98970d329d65778460e0015160405161080f919060408082526017908201527f7265736f757263654275696c64696e672076616c75653a000000000000000000606082015263ffffffff91909116602082015260800190565b60405180910390a1610828828560e0015160008461163e565b7f3c5ad147104e56be34a9176a6692f7df8d2f4b29a5af06bc6b98970d329d657784608001516000815181106108605761086061256b565b6020026020010151602001516040516108b3919060408082526018908201527f616464696e67207265736f757263654275696c64696e673a00000000000000006060820152602081019190915260800190565b60405180910390a16108e784608001516000815181106108d5576108d561256b565b602002602001015160200151826119aa565b5050919050565b6101c881611b1b565b6000805461093b9073ffffffffffffffffffffffffffffffffffffffff167f4cf8575af513e85e971e8168543790c67a13325a2b9e58a3f87c5e536c104555611bc7565b6040517ffbdfa1ea0000000000000000000000000000000000000000000000000000000081526004810184905290915060009073ffffffffffffffffffffffffffffffffffffffff83169063fbdfa1ea90602401600060405180830381865afa1580156109ac573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526109f29190810190612601565b90508051600014610a5f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f68617320456e7469747920696e2074617267657420636f6f72640000000000006044820152606401610475565b505050565b60008054610aa89073ffffffffffffffffffffffffffffffffffffffff167f9e0b856941fb70fc9b56c896d5f39a2079c3ed041dbc5e87efbf9c503b354b76611bc7565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160e060405180830381865afa158015610af2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1691906126aa565b9050806000015167ffffffffffffffff16816020015167ffffffffffffffff1610610bed57611d4c8310158015610b6157508051610b5590600261287a565b610b5f9083612890565b155b8015610b875750600081602001516002610b7b919061287a565b610b859084612890565b115b610a5f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6e6f207265736f7572636520746f2064696700000000000000000000000000006044820152606401610475565b611d4c8310158015610b8757508051610c0790600261287a565b610c119083612890565b15610a5f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6e6f207265736f7572636520746f2064696700000000000000000000000000006044820152606401610475565b60008054610cbc9073ffffffffffffffffffffffffffffffffffffffff167f4b1ac4c3aa37732e927cbff52c019e9fbdad0f3e454031afaefd319a3dc66ce4611bc7565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810185905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015610d2a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d4e91906128cb565b15610ea2576040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810184905260009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401606060405180830381865afa158015610dc1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610de591906128e8565b90508263ffffffff16816000015163ffffffff16148015610e365750806040015180610e3657508060400151158015610e3657504267ffffffffffffffff16816020015167ffffffffffffffff1610155b610e9c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f666f67207365656420696e76616c6964000000000000000000000000000000006044820152606401610475565b50505050565b6001546040517f4f27da180000000000000000000000000000000000000000000000000000000081527fd65d260f5f5c04658319eb649c1b2668791985f80e1dc9150523f9df6efd57b4600482015263ffffffff84169173ffffffffffffffffffffffffffffffffffffffff1690634f27da1890602401602060405180830381865afa158015610f36573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f5a9190612963565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b8152600401602060405180830381865afa158015610fa4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fc89190612980565b63ffffffff1614610a5f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f666f67207365656420696e76616c6964000000000000000000000000000000006044820152606401610475565b600080611062837fd0deb8af54f5692432398f7f62bf53c9e54e6d6a9b4dbccb012b3fe04ea432d3611bc7565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040161016060405180830381865afa1580156110ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110d1919061299d565b8051909150156111f757600060405180610160016040528086600001518152602001866020015181526020018660400151815260200186606001518152602001866080015181526020018660a0015181526020018660c0015181526020018660e00151815260200186610100015181526020018661012001518152602001866101400151815250905081610140015173ffffffffffffffffffffffffffffffffffffffff1663b9c6ea87866101600151876101800151886101a00151856040518563ffffffff1660e01b81526004016111ad9493929190612a9a565b602060405180830381865afa1580156111ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111ee91906128cb565b92505050610149565b6000611223847f9e0b856941fb70fc9b56c896d5f39a2079c3ed041dbc5e87efbf9c503b354b76611bc7565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160e060405180830381865afa15801561126d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061129191906126aa565b9050806080015167ffffffffffffffff16856101200151111580156112c957508060a0015167ffffffffffffffff1685610140015111155b61132f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f726164697573206f766572206c696d69740000000000000000000000000000006044820152606401610475565b505092915050565b6000805461137b9073ffffffffffffffffffffffffffffffffffffffff167f4b1ac4c3aa37732e927cbff52c019e9fbdad0f3e454031afaefd319a3dc66ce4611bc7565b6040805160608101825263ffffffff8581168252600060208301908152600183850190815293517f951f165900000000000000000000000000000000000000000000000000000000815260048101899052925190911660248301525167ffffffffffffffff16604482015290511515606482015290915073ffffffffffffffffffffffffffffffffffffffff82169063951f1659906084015b600060405180830381600087803b15801561142e57600080fd5b505af1158015611442573d6000803e3d6000fd5b50505050505050565b600154604080517f614bfa6e000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff169163614bfa6e9160048083019260209291908290030181865afa1580156114bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114df9190612552565b6000549091506115259073ffffffffffffffffffffffffffffffffffffffff167fb2f4b867fdd5a4cac8059e8bc8d57112bd34bdb7a3ba070121dac5abc83cdf3b611bc7565b73ffffffffffffffffffffffffffffffffffffffff16631ab06ee58285602001516040518363ffffffff1660e01b815260040161156c929190918252602082015260400190565b600060405180830381600087803b15801561158657600080fd5b505af115801561159a573d6000803e3d6000fd5b50506000546115e2925073ffffffffffffffffffffffffffffffffffffffff1690507f56a4848d3af309f22949f76908807d066074a6d477ee656c4054ee542fd08475611bc7565b6040517f1ab06ee5000000000000000000000000000000000000000000000000000000008152600481018390526024810184905273ffffffffffffffffffffffffffffffffffffffff9190911690631ab06ee590604401611414565b6000546116819073ffffffffffffffffffffffffffffffffffffffff167f84597150db3a8cb31c3f847642911238944cee9a3b5f1ab47777bca06e6660e3611bc7565b60408051808201825263ffffffff808716825267ffffffffffffffff8087166020840190815293517f5bccf83b00000000000000000000000000000000000000000000000000000000815260048101879052925190911660248301529151909116604482015273ffffffffffffffffffffffffffffffffffffffff9190911690635bccf83b90606401600060405180830381600087803b15801561172457600080fd5b505af1158015611738573d6000803e3d6000fd5b5050600054611780925073ffffffffffffffffffffffffffffffffffffffff1690507fd9e2f71f1c0fd7743790b23350e1eeb0e1f215b8c9cca3840f01714025e512ab611bc7565b6040517f1ab06ee5000000000000000000000000000000000000000000000000000000008152600481018390526024810186905273ffffffffffffffffffffffffffffffffffffffff9190911690631ab06ee590604401600060405180830381600087803b1580156117f157600080fd5b505af1158015611805573d6000803e3d6000fd5b505060005461184d925073ffffffffffffffffffffffffffffffffffffffff1690507f6c062316985e8e531501d3a588aed06abfad54c545ae238fe2d6f51a6ab9bee8611bc7565b6040517f1ab06ee5000000000000000000000000000000000000000000000000000000008152600481018690526002602482015273ffffffffffffffffffffffffffffffffffffffff9190911690631ab06ee590604401600060405180830381600087803b1580156118be57600080fd5b505af11580156118d2573d6000803e3d6000fd5b505060005461191a925073ffffffffffffffffffffffffffffffffffffffff1690507f0f2f1f89defcb2e35e7a49b75f5a0777c977a6210b31a42137e9620ef524f0dc611bc7565b6040517fd93c413f000000000000000000000000000000000000000000000000000000008152600481018690526002602482015273ffffffffffffffffffffffffffffffffffffffff919091169063d93c413f906044015b600060405180830381600087803b15801561198c57600080fd5b505af11580156119a0573d6000803e3d6000fd5b5050505050505050565b600080546119ee9073ffffffffffffffffffffffffffffffffffffffff167f4cf8575af513e85e971e8168543790c67a13325a2b9e58a3f87c5e536c104555611bc7565b6040517f1ab06ee5000000000000000000000000000000000000000000000000000000008152600481018490526024810185905290915073ffffffffffffffffffffffffffffffffffffffff821690631ab06ee590604401600060405180830381600087803b158015611a6057600080fd5b505af1158015611a74573d6000803e3d6000fd5b505060008054909250611abe915073ffffffffffffffffffffffffffffffffffffffff167fd7eb4644b0f312b764e14b10dbe895c6ee4acad8c1eb37a4791309b4d942e427611bc7565b6040517f1ab06ee5000000000000000000000000000000000000000000000000000000008152600481018590526024810186905290915073ffffffffffffffffffffffffffffffffffffffff821690631ab06ee590604401611972565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460805460405173ffffffffffffffffffffffffffffffffffffffff8481169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015611c37573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052611c7d9190810190612601565b90508051600003611cea576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f7420726567697374657265640000000000000000000000000000006044820152606401610475565b611d0b81600081518110611d0057611d0061256b565b602002602001015190565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516101c0810167ffffffffffffffff81118282101715611d6657611d66611d13565b60405290565b604051610120810167ffffffffffffffff81118282101715611d6657611d66611d13565b604051610160810167ffffffffffffffff81118282101715611d6657611d66611d13565b6040805190810167ffffffffffffffff81118282101715611d6657611d66611d13565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611e1e57611e1e611d13565b604052919050565b60006020808385031215611e3957600080fd5b823567ffffffffffffffff80821115611e5157600080fd5b818501915085601f830112611e6557600080fd5b813581811115611e7757611e77611d13565b611ea7847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611dd7565b91508082528684828501011115611ebd57600080fd5b8084840185840137600090820190930192909252509392505050565b600060208083528351808285015260005b81811015611f0657858101830151858201604001528201611eea565b81811115611f18576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b80151581146101c857600080fd5b8035611f6581611f4c565b919050565b600067ffffffffffffffff821115611f8457611f84611d13565b5060051b60200190565b600082601f830112611f9f57600080fd5b611fa7611db4565b806040840185811115611fb957600080fd5b845b81811015611fd3578035845260209384019301611fbb565b509095945050505050565b600082601f830112611fef57600080fd5b611ff7611db4565b80608084018581111561200957600080fd5b845b81811015611fd35761201d8782611f8e565b845260209093019260400161200b565b600082601f83011261203e57600080fd5b8135602061205361204e83611f6a565b611dd7565b828152610260928302850182019282820191908785111561207357600080fd5b8387015b858110156121475781818a03121561208f5760008081fd5b612097611d42565b81358152858201358682015260408083013590820152606080830135908201526080808301359082015260a0808301359082015260c0808301359082015260e0808301359082015261010080830135908201526101208083013590820152610140808301359082015261016061210f8b828501611f8e565b908201526101a06121228b848301611fde565b6101808301526121368b6102208501611f8e565b908201528452928401928101612077565b5090979650505050505050565b63ffffffff811681146101c857600080fd5b8035611f6581612154565b60006020828403121561218357600080fd5b813567ffffffffffffffff8082111561219b57600080fd5b9083019061012082860312156121b057600080fd5b6121b8611d6c565b823581526121c860208401611f5a565b602082015260408301356040820152606083013560608201526080830135828111156121f357600080fd5b6121ff8782860161202d565b60808301525060a08301358281111561221757600080fd5b6122238782860161202d565b60a08301525061223560c08401612166565b60c082015261224660e08401612166565b60e0820152610100915061225b828401611f5a565b91810191909152949350505050565b73ffffffffffffffffffffffffffffffffffffffff811681146101c857600080fd5b60006020828403121561229e57600080fd5b81356100f28161226a565b8051611f6581611f4c565b600082601f8301126122c557600080fd5b6122cd611db4565b8060408401858111156122df57600080fd5b845b81811015611fd35780518452602093840193016122e1565b600082601f83011261230a57600080fd5b612312611db4565b80608084018581111561232457600080fd5b845b81811015611fd35761233887826122b4565b8452602090930192604001612326565b600082601f83011261235957600080fd5b8151602061236961204e83611f6a565b828152610260928302850182019282820191908785111561238957600080fd5b8387015b858110156121475781818a0312156123a55760008081fd5b6123ad611d42565b81518152858201518682015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e080830151908201526101008083015190820152610120808301519082015261014080830151908201526101606124258b8285016122b4565b908201526101a06124388b8483016122f9565b61018083015261244c8b61022085016122b4565b90820152845292840192810161238d565b8051611f6581612154565b60006020828403121561247a57600080fd5b815167ffffffffffffffff8082111561249257600080fd5b9083019061012082860312156124a757600080fd5b6124af611d6c565b825181526124bf602084016122a9565b602082015260408301516040820152606083015160608201526080830151828111156124ea57600080fd5b6124f687828601612348565b60808301525060a08301518281111561250e57600080fd5b61251a87828601612348565b60a08301525061252c60c0840161245d565b60c082015261253d60e0840161245d565b60e0820152610100915061225b8284016122a9565b60006020828403121561256457600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036125fa576125fa61259a565b5060010190565b6000602080838503121561261457600080fd5b825167ffffffffffffffff81111561262b57600080fd5b8301601f8101851361263c57600080fd5b805161264a61204e82611f6a565b81815260059190911b8201830190838101908783111561266957600080fd5b928401925b828410156126875783518252928401929084019061266e565b979650505050505050565b805167ffffffffffffffff81168114611f6557600080fd5b600060e082840312156126bc57600080fd5b60405160e0810181811067ffffffffffffffff821117156126df576126df611d13565b6040526126eb83612692565b81526126f960208401612692565b602082015261270a60408401612692565b604082015261271b60608401612692565b606082015261272c60808401612692565b608082015261273d60a08401612692565b60a082015261274e60c08401612692565b60c08201529392505050565b600181815b808511156127b357817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211156127995761279961259a565b808516156127a657918102915b93841c939080029061275f565b509250929050565b6000826127ca57506001610149565b816127d757506000610149565b81600181146127ed57600281146127f757612813565b6001915050610149565b60ff8411156128085761280861259a565b50506001821b610149565b5060208310610133831016604e8410600b8410161715612836575081810a610149565b612840838361275a565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211156128725761287261259a565b029392505050565b60006100f267ffffffffffffffff8416836127bb565b6000826128c6577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500690565b6000602082840312156128dd57600080fd5b81516100f281611f4c565b6000606082840312156128fa57600080fd5b6040516060810181811067ffffffffffffffff8211171561291d5761291d611d13565b604052825161292b81612154565b815261293960208401612692565b6020820152604083015161294c81611f4c565b60408201529392505050565b8051611f658161226a565b60006020828403121561297557600080fd5b81516100f28161226a565b60006020828403121561299257600080fd5b81516100f281612154565b600061016082840312156129b057600080fd5b6129b8611d90565b6129c1836122a9565b81526129cf60208401612958565b60208201526129e060408401612958565b60408201526129f160608401612958565b6060820152612a0260808401612958565b6080820152612a1360a08401612958565b60a0820152612a2460c08401612958565b60c0820152612a3560e08401612958565b60e0820152610100612a48818501612958565b90820152610120612a5a848201612958565b90820152610140612a6c848201612958565b908201529392505050565b8060005b6002811015610e9c578151845260209384019390910190600101612a7b565b6102608101612aa98287612a77565b60408083018660005b6002811015612ad957612ac6838351612a77565b9183019160209190910190600101612ab2565b50505050612aea60c0830185612a77565b61010082018360005b600b811015612b12578151835260209283019290910190600101612af3565b5050509594505050505056fea2646970667358221220a6185029d6e5810aa8e241a127d41c6231a20780cf676f657361596fc36da61664736f6c634300080d0033";

type TreasureEffectAirdropResourceSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TreasureEffectAirdropResourceSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TreasureEffectAirdropResourceSystem__factory extends ContractFactory {
  constructor(...args: TreasureEffectAirdropResourceSystemConstructorParams) {
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
  ): Promise<TreasureEffectAirdropResourceSystem> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<TreasureEffectAirdropResourceSystem>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): TreasureEffectAirdropResourceSystem {
    return super.attach(address) as TreasureEffectAirdropResourceSystem;
  }
  override connect(
    signer: Signer
  ): TreasureEffectAirdropResourceSystem__factory {
    return super.connect(
      signer
    ) as TreasureEffectAirdropResourceSystem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TreasureEffectAirdropResourceSystemInterface {
    return new utils.Interface(
      _abi
    ) as TreasureEffectAirdropResourceSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TreasureEffectAirdropResourceSystem {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TreasureEffectAirdropResourceSystem;
  }
}
