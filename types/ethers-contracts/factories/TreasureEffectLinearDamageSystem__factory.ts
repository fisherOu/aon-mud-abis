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
  "0x60806040523480156200001157600080fd5b506040516200368738038062003687833981016040819052620000349162000230565b81818181620000433362000113565b6001600160a01b038116156200005a5780620000bf565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000099573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bf91906200026f565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000107919062000187602090811b620001cb17901c565b50505050505062000296565b60006200012a620001f360201b6200025c1760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022d57600080fd5b50565b600080604083850312156200024457600080fd5b8251620002518162000217565b6020840151909250620002648162000217565b809150509250929050565b6000602082840312156200028257600080fd5b81516200028f8162000217565b9392505050565b6133e180620002a66000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe146100515780638da5cb5b1461007a578063c420d84c146100a7578063f2fde38b146100ba575b600080fd5b61006461005f36600461275c565b6100cf565b604051610071919061287a565b60405180910390f35b6100826100f9565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100646100b5366004612ab2565b61013e565b6100cd6100c8366004612bcd565b61014f565b005b60606000828060200190518101906100e79190612da9565b90506100f28161013e565b9392505050565b60006101397f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b606061014982610280565b92915050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146101bf576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6101c8816109e0565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b606060008260400151905061029883608001516109e9565b600080546102dc9073ffffffffffffffffffffffffffffffffffffffff167fe84ae06d0531147bba573e3e5c6876c59c1ba9645cd7e87eb5141ca18dcfd284610bad565b905060006102eb42600a612ec2565b905060005b85608001515181101561040957600186608001515161030f9190612eee565b81146103f7578273ffffffffffffffffffffffffffffffffffffffff16639a8536608760800151838151811061034757610347612f05565b60200260200101516020015160405180604001604052806040518060400160405280600d81526020017f61747461636b5468726f7567680000000000000000000000000000000000000081525081526020018667ffffffffffffffff168152506040518363ffffffff1660e01b81526004016103c4929190612f34565b600060405180830381600087803b1580156103de57600080fd5b505af11580156103f2573d6000803e3d6000fd5b505050505b8061040181612f76565b9150506102f0565b506000805461044e9073ffffffffffffffffffffffffffffffffffffffff167f6c062316985e8e531501d3a588aed06abfad54c545ae238fe2d6f51a6ab9bee8610bad565b905060005b8660a00151518110156109d6576104a28760a00151828151811061047957610479612f05565b602090810291909101015160005473ffffffffffffffffffffffffffffffffffffffff16610cf9565b506000806104d18960a0015184815181106104bf576104bf612f05565b60200260200101516020015188610ffb565b6040517fcccf7a8e00000000000000000000000000000000000000000000000000000000815260048101839052919350915073ffffffffffffffffffffffffffffffffffffffff85169063cccf7a8e90602401602060405180830381865afa158015610541573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105659190612fae565b1561066b576040517f0ff4c916000000000000000000000000000000000000000000000000000000008152600481018390527f3c5ad147104e56be34a9176a6692f7df8d2f4b29a5af06bc6b98970d329d65779073ffffffffffffffffffffffffffffffffffffffff861690630ff4c91690602401602060405180830381865afa1580156105f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061b9190612fcb565b60405161066291906040808252600a908201527f7461726765742068703a000000000000000000000000000000000000000000006060820152602081019190915260800190565b60405180910390a15b7f3c5ad147104e56be34a9176a6692f7df8d2f4b29a5af06bc6b98970d329d657781600481111561069e5761069e612fe4565b6040516106e5919060408082526013908201527f61747461636b2074617267657420747970653a000000000000000000000000006060820152602081019190915260800190565b60405180910390a17f3c5ad147104e56be34a9176a6692f7df8d2f4b29a5af06bc6b98970d329d65778960e00151604051610760919060408082526007908201527f64616d6167653a00000000000000000000000000000000000000000000000000606082015263ffffffff91909116602082015260800190565b60405180910390a18115610854578573ffffffffffffffffffffffffffffffffffffffff16639a8536608a60a0015185815181106107a0576107a0612f05565b60200260200101516020015160405180604001604052806040518060400160405280600381526020017f686974000000000000000000000000000000000000000000000000000000000081525081526020018967ffffffffffffffff168152506040518363ffffffff1660e01b815260040161081d929190612f34565b600060405180830381600087803b15801561083757600080fd5b505af115801561084b573d6000803e3d6000fd5b50505050610936565b8573ffffffffffffffffffffffffffffffffffffffff16639a8536608a60a00151858151811061088657610886612f05565b60200260200101516020015160405180604001604052806040518060400160405280600d81526020017f61747461636b5468726f7567680000000000000000000000000000000000000081525081526020018967ffffffffffffffff168152506040518363ffffffff1660e01b8152600401610903929190612f34565b600060405180830381600087803b15801561091d57600080fd5b505af1158015610931573d6000803e3d6000fd5b505050505b600061094d838b60e0015163ffffffff1684611544565b90507f3c5ad147104e56be34a9176a6692f7df8d2f4b29a5af06bc6b98970d329d6577816040516109b891906040808252600e908201527f72656d61696e2064616d6167653a0000000000000000000000000000000000006060820152602081019190915260800190565b60405180910390a150505080806109ce90612f76565b915050610453565b5050505050919050565b6101c881611fca565b60008054610a2d9073ffffffffffffffffffffffffffffffffffffffff167fd7eb4644b0f312b764e14b10dbe895c6ee4acad8c1eb37a4791309b4d942e427610bad565b905060005b8251811015610ba85760018351610a499190612eee565b8114610b9657610a6483828151811061047957610479612f05565b5060008273ffffffffffffffffffffffffffffffffffffffff1663fbdfa1ea858481518110610a9557610a95612f05565b6020026020010151602001516040518263ffffffff1660e01b8152600401610abf91815260200190565b600060405180830381865afa158015610adc573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610b229190810190613013565b90508051600014610b94576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f68617320456e7469747920696e2070617468000000000000000000000000000060448201526064015b60405180910390fd5b505b80610ba081612f76565b915050610a32565b505050565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015610c1d573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610c639190810190613013565b90508051600003610cd0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f7420726567697374657265640000000000000000000000000000006044820152606401610b8b565b610cf181600081518110610ce657610ce6612f05565b602002602001015190565b949350505050565b600080610d26837fd0deb8af54f5692432398f7f62bf53c9e54e6d6a9b4dbccb012b3fe04ea432d3610bad565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040161016060405180830381865afa158015610d71573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d9591906130af565b805190915015610ebb57600060405180610160016040528086600001518152602001866020015181526020018660400151815260200186606001518152602001866080015181526020018660a0015181526020018660c0015181526020018660e00151815260200186610100015181526020018661012001518152602001866101400151815250905081610140015173ffffffffffffffffffffffffffffffffffffffff1663b9c6ea87866101600151876101800151886101a00151856040518563ffffffff1660e01b8152600401610e7194939291906131b2565b602060405180830381865afa158015610e8e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eb29190612fae565b92505050610149565b6000610ee7847f9e0b856941fb70fc9b56c896d5f39a2079c3ed041dbc5e87efbf9c503b354b76610bad565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160e060405180830381865afa158015610f31573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f55919061324e565b9050806080015167ffffffffffffffff1685610120015111158015610f8d57508060a0015167ffffffffffffffff1685610140015111155b610ff3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f726164697573206f766572206c696d69740000000000000000000000000000006044820152606401610b8b565b505092915050565b60008061100784612076565b60008054929450909250906110529073ffffffffffffffffffffffffffffffffffffffff167f4c72609ffe767189426b756bdb4b34d206c9d4f7f58880d1cb7b77186b764765610bad565b600080549192509061109a9073ffffffffffffffffffffffffffffffffffffffff167fa25d1e63f0e4f319cc626350346fd351279a4087ff185698c3e632cef078c7f9610bad565b60008054919250906110e29073ffffffffffffffffffffffffffffffffffffffff167f3a491e792f21d1dfbaf5fe3e6a9453e90f9d0e1e3bab4ac6e371ac1ed485393f610bad565b600080549192509061112a9073ffffffffffffffffffffffffffffffffffffffff167fb88588d8fec752d1ccdaad27c5bbc03a1851f8687c806717617134354a8a7cd6610bad565b90508515611539576040517ffbdfa1ea0000000000000000000000000000000000000000000000000000000081526004810189905260009073ffffffffffffffffffffffffffffffffffffffff86169063fbdfa1ea90602401600060405180830381865afa1580156111a0573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526111e69190810190613013565b905060005b8151811015611536578473ffffffffffffffffffffffffffffffffffffffff1663cccf7a8e83838151811061122257611222612f05565b60200260200101516040518263ffffffff1660e01b815260040161124891815260200190565b602060405180830381865afa158015611265573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112899190612fae565b156115245760008573ffffffffffffffffffffffffffffffffffffffff16630ff4c9168484815181106112be576112be612f05565b60200260200101516040518263ffffffff1660e01b81526004016112e491815260200190565b602060405180830381865afa158015611301573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113259190612fcb565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810182905290915073ffffffffffffffffffffffffffffffffffffffff86169063cccf7a8e90602401602060405180830381865afa158015611393573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113b79190612fae565b801561144d57506040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810182905273ffffffffffffffffffffffffffffffffffffffff85169063cccf7a8e90602401602060405180830381865afa158015611429573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061144d9190612fae565b15611522576040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810182905260009073ffffffffffffffffffffffffffffffffffffffff871690630ff4c91690602401606060405180830381865afa1580156114c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114e491906132fe565b905042816040015167ffffffffffffffff1610158061150f5750604081015167ffffffffffffffff16155b156115205750975060029650611536565b505b505b8061152e81612f76565b9150506111eb565b50505b505050509250929050565b60008054819061158a9073ffffffffffffffffffffffffffffffffffffffff167f6c062316985e8e531501d3a588aed06abfad54c545ae238fe2d6f51a6ab9bee8610bad565b9050841580611597575083155b156115a557839150506100f2565b60028360048111156115b9576115b9612fe4565b0361190857600080546116029073ffffffffffffffffffffffffffffffffffffffff167f3a491e792f21d1dfbaf5fe3e6a9453e90f9d0e1e3bab4ac6e371ac1ed485393f610bad565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810188905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015611670573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116949190612fae565b15611902576040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810187905260009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401606060405180830381865afa158015611707573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061172b91906132fe565b905042816040015167ffffffffffffffff161015806117565750604081015167ffffffffffffffff16155b80156117685750805163ffffffff1615155b1561190057805163ffffffff1686101561186a578173ffffffffffffffffffffffffffffffffffffffff1663e431489c8860405180606001604052808a86600001516117b4919061336e565b63ffffffff168152602001856020015163ffffffff168152602001856040015167ffffffffffffffff168152506040518363ffffffff1660e01b8152600401611833929190918252805163ffffffff90811660208085019190915282015116604080840191909152015167ffffffffffffffff16606082015260800190565b600060405180830381600087803b15801561184d57600080fd5b505af1158015611861573d6000803e3d6000fd5b50505050611900565b805161187c9063ffffffff1687612eee565b6040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810189905290945073ffffffffffffffffffffffffffffffffffffffff841690634cc8221590602401600060405180830381600087803b1580156118e757600080fd5b505af11580156118fb573d6000803e3d6000fd5b505050505b505b50611fc2565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810186905273ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015611973573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119979190612fae565b15611fc2576040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810186905260009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401602060405180830381865afa158015611a0a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a2e9190612fcb565b905084811115611ad25773ffffffffffffffffffffffffffffffffffffffff8216631ab06ee587611a5f8885612eee565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815260048101929092526024820152604401600060405180830381600087803b158015611ab557600080fd5b505af1158015611ac9573d6000803e3d6000fd5b50505050611fc0565b611adc8186612eee565b6040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810188905290935073ffffffffffffffffffffffffffffffffffffffff831690634cc8221590602401600060405180830381600087803b158015611b4757600080fd5b505af1158015611b5b573d6000803e3d6000fd5b505050506000611b7e3373ffffffffffffffffffffffffffffffffffffffff1690565b90506000856004811115611b9457611b94612fe4565b03611da15760008054611bdd9073ffffffffffffffffffffffffffffffffffffffff167f20a418f433b31a065de0713b55142375d6c11084f719919f106e47ed9f281d3b610bad565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810184905290915060019073ffffffffffffffffffffffffffffffffffffffff83169063cccf7a8e90602401602060405180830381865afa158015611c4e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c729190612fae565b15611d13576040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810184905273ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401602060405180830381865afa158015611ce2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d069190612fcb565b611d109082613393565b90505b6040517f1ab06ee5000000000000000000000000000000000000000000000000000000008152600481018490526024810182905273ffffffffffffffffffffffffffffffffffffffff831690631ab06ee590604401600060405180830381600087803b158015611d8257600080fd5b505af1158015611d96573d6000803e3d6000fd5b505050505050611fbe565b6001856004811115611db557611db5612fe4565b03611fbe5760008054611dfe9073ffffffffffffffffffffffffffffffffffffffff167f8e758c8d936e18446d4b0f652e5aa8d026f5becbc336a7942884f35e098cee48610bad565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810184905290915060019073ffffffffffffffffffffffffffffffffffffffff83169063cccf7a8e90602401602060405180830381865afa158015611e6f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e939190612fae565b15611f34576040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810184905273ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401602060405180830381865afa158015611f03573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f279190612fcb565b611f319082613393565b90505b6040517f1ab06ee5000000000000000000000000000000000000000000000000000000008152600481018490526024810182905273ffffffffffffffffffffffffffffffffffffffff831690631ab06ee590604401600060405180830381600087803b158015611fa357600080fd5b505af1158015611fb7573d6000803e3d6000fd5b5050505050505b505b505b509392505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460805460405173ffffffffffffffffffffffffffffffffffffffff8481169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60008054819081906120be9073ffffffffffffffffffffffffffffffffffffffff167fd7eb4644b0f312b764e14b10dbe895c6ee4acad8c1eb37a4791309b4d942e427610bad565b60008054919250906121069073ffffffffffffffffffffffffffffffffffffffff167f47847aa6dad6656997b23b837b7a178fcf6ee815ad8065af73bc07856277a776610bad565b600080549192509061214e9073ffffffffffffffffffffffffffffffffffffffff167f8900e57ac2ff61c328bbaa69d2071a542ae5ff48c693375a49fd2937c1ef8332610bad565b60008054919250906121969073ffffffffffffffffffffffffffffffffffffffff167f84597150db3a8cb31c3f847642911238944cee9a3b5f1ab47777bca06e6660e3610bad565b60008054919250906121de9073ffffffffffffffffffffffffffffffffffffffff167f3a491e792f21d1dfbaf5fe3e6a9453e90f9d0e1e3bab4ac6e371ac1ed485393f610bad565b6040517ffbdfa1ea000000000000000000000000000000000000000000000000000000008152600481018a905290915060009073ffffffffffffffffffffffffffffffffffffffff87169063fbdfa1ea90602401600060405180830381865afa15801561224f573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526122959190810190613013565b905060005b815181101561263d578473ffffffffffffffffffffffffffffffffffffffff1663cccf7a8e8383815181106122d1576122d1612f05565b60200260200101516040518263ffffffff1660e01b81526004016122f791815260200190565b602060405180830381865afa158015612314573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123389190612fae565b8015612342575088155b1561236c5781818151811061235957612359612f05565b602002602001015198506000975061262b565b8573ffffffffffffffffffffffffffffffffffffffff1663cccf7a8e83838151811061239a5761239a612f05565b60200260200101516040518263ffffffff1660e01b81526004016123c091815260200190565b602060405180830381865afa1580156123dd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124019190612fae565b1561242b5781818151811061241857612418612f05565b602002602001015198506001975061262b565b8273ffffffffffffffffffffffffffffffffffffffff1663cccf7a8e83838151811061245957612459612f05565b60200260200101516040518263ffffffff1660e01b815260040161247f91815260200190565b602060405180830381865afa15801561249c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124c09190612fae565b80156125035750881580612503575060008860048111156124e3576124e3612fe4565b141580156125035750600188600481111561250057612500612fe4565b14155b1561252d5781818151811061251a5761251a612f05565b602002602001015198506004975061262b565b8373ffffffffffffffffffffffffffffffffffffffff1663cccf7a8e83838151811061255b5761255b612f05565b60200260200101516040518263ffffffff1660e01b815260040161258191815260200190565b602060405180830381865afa15801561259e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125c29190612fae565b80156126055750881580612605575060008860048111156125e5576125e5612fe4565b141580156126055750600188600481111561260257612602612fe4565b14155b1561262b5781818151811061261c5761261c612f05565b60200260200101519850600397505b8061263581612f76565b91505061229a565b50505050505050915091565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516101c0810167ffffffffffffffff8111828210171561269c5761269c612649565b60405290565b604051610120810167ffffffffffffffff8111828210171561269c5761269c612649565b604051610160810167ffffffffffffffff8111828210171561269c5761269c612649565b6040805190810167ffffffffffffffff8111828210171561269c5761269c612649565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561275457612754612649565b604052919050565b6000602080838503121561276f57600080fd5b823567ffffffffffffffff8082111561278757600080fd5b818501915085601f83011261279b57600080fd5b8135818111156127ad576127ad612649565b6127dd847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8401160161270d565b915080825286848285010111156127f357600080fd5b8084840185840137600090820190930192909252509392505050565b6000815180845260005b8181101561283557602081850181015186830182015201612819565b81811115612847576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006100f2602083018461280f565b80151581146101c857600080fd5b80356128a68161288d565b919050565b600067ffffffffffffffff8211156128c5576128c5612649565b5060051b60200190565b600082601f8301126128e057600080fd5b6128e86126ea565b8060408401858111156128fa57600080fd5b845b818110156129145780358452602093840193016128fc565b509095945050505050565b600082601f83011261293057600080fd5b6129386126ea565b80608084018581111561294a57600080fd5b845b818110156129145761295e87826128cf565b845260209093019260400161294c565b600082601f83011261297f57600080fd5b8135602061299461298f836128ab565b61270d565b82815261026092830285018201928282019190878511156129b457600080fd5b8387015b85811015612a885781818a0312156129d05760008081fd5b6129d8612678565b81358152858201358682015260408083013590820152606080830135908201526080808301359082015260a0808301359082015260c0808301359082015260e08083013590820152610100808301359082015261012080830135908201526101408083013590820152610160612a508b8285016128cf565b908201526101a0612a638b84830161291f565b610180830152612a778b61022085016128cf565b9082015284529284019281016129b8565b5090979650505050505050565b63ffffffff811681146101c857600080fd5b80356128a681612a95565b600060208284031215612ac457600080fd5b813567ffffffffffffffff80821115612adc57600080fd5b908301906101208286031215612af157600080fd5b612af96126a2565b82358152612b096020840161289b565b60208201526040830135604082015260608301356060820152608083013582811115612b3457600080fd5b612b408782860161296e565b60808301525060a083013582811115612b5857600080fd5b612b648782860161296e565b60a083015250612b7660c08401612aa7565b60c0820152612b8760e08401612aa7565b60e08201526101009150612b9c82840161289b565b91810191909152949350505050565b73ffffffffffffffffffffffffffffffffffffffff811681146101c857600080fd5b600060208284031215612bdf57600080fd5b81356100f281612bab565b80516128a68161288d565b600082601f830112612c0657600080fd5b612c0e6126ea565b806040840185811115612c2057600080fd5b845b81811015612914578051845260209384019301612c22565b600082601f830112612c4b57600080fd5b612c536126ea565b806080840185811115612c6557600080fd5b845b8181101561291457612c798782612bf5565b8452602090930192604001612c67565b600082601f830112612c9a57600080fd5b81516020612caa61298f836128ab565b8281526102609283028501820192828201919087851115612cca57600080fd5b8387015b85811015612a885781818a031215612ce65760008081fd5b612cee612678565b81518152858201518682015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160612d668b828501612bf5565b908201526101a0612d798b848301612c3a565b610180830152612d8d8b6102208501612bf5565b908201528452928401928101612cce565b80516128a681612a95565b600060208284031215612dbb57600080fd5b815167ffffffffffffffff80821115612dd357600080fd5b908301906101208286031215612de857600080fd5b612df06126a2565b82518152612e0060208401612bea565b60208201526040830151604082015260608301516060820152608083015182811115612e2b57600080fd5b612e3787828601612c89565b60808301525060a083015182811115612e4f57600080fd5b612e5b87828601612c89565b60a083015250612e6d60c08401612d9e565b60c0820152612e7e60e08401612d9e565b60e08201526101009150612b9c828401612bea565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600067ffffffffffffffff808316818516808303821115612ee557612ee5612e93565b01949350505050565b600082821015612f0057612f00612e93565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b8281526040602082015260008251604080840152612f55608084018261280f565b905067ffffffffffffffff6020850151166060840152809150509392505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612fa757612fa7612e93565b5060010190565b600060208284031215612fc057600080fd5b81516100f28161288d565b600060208284031215612fdd57600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6000602080838503121561302657600080fd5b825167ffffffffffffffff81111561303d57600080fd5b8301601f8101851361304e57600080fd5b805161305c61298f826128ab565b81815260059190911b8201830190838101908783111561307b57600080fd5b928401925b8284101561309957835182529284019290840190613080565b979650505050505050565b80516128a681612bab565b600061016082840312156130c257600080fd5b6130ca6126c6565b6130d383612bea565b81526130e1602084016130a4565b60208201526130f2604084016130a4565b6040820152613103606084016130a4565b6060820152613114608084016130a4565b608082015261312560a084016130a4565b60a082015261313660c084016130a4565b60c082015261314760e084016130a4565b60e082015261010061315a8185016130a4565b9082015261012061316c8482016130a4565b9082015261014061317e8482016130a4565b908201529392505050565b8060005b60028110156131ac57815184526020938401939091019060010161318d565b50505050565b61026081016131c18287613189565b60408083018660005b60028110156131f1576131de838351613189565b91830191602091909101906001016131ca565b5050505061320260c0830185613189565b61010082018360005b600b81101561322a57815183526020928301929091019060010161320b565b50505095945050505050565b805167ffffffffffffffff811681146128a657600080fd5b600060e0828403121561326057600080fd5b60405160e0810181811067ffffffffffffffff8211171561328357613283612649565b60405261328f83613236565b815261329d60208401613236565b60208201526132ae60408401613236565b60408201526132bf60608401613236565b60608201526132d060808401613236565b60808201526132e160a08401613236565b60a08201526132f260c08401613236565b60c08201529392505050565b60006060828403121561331057600080fd5b6040516060810181811067ffffffffffffffff8211171561333357613333612649565b604052825161334181612a95565b8152602083015161335181612a95565b602082015261336260408401613236565b60408201529392505050565b600063ffffffff8381169083168181101561338b5761338b612e93565b039392505050565b600082198211156133a6576133a6612e93565b50019056fea2646970667358221220c1650ed561d3a3b2c1c92674dcc85e7c167e61d7bb73dce69172cf11b299cbed64736f6c634300080d0033";

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
