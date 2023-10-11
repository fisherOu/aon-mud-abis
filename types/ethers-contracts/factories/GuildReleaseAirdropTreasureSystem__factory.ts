/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  GuildReleaseAirdropTreasureSystem,
  GuildReleaseAirdropTreasureSystemInterface,
} from "../GuildReleaseAirdropTreasureSystem";

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
            name: "treasureId",
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
            internalType: "uint256",
            name: "guildCrestId",
            type: "uint256",
          },
        ],
        internalType: "struct ReleaseTreasureInfo",
        name: "releaseTreasureInfo",
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
  "0x60806040523480156200001157600080fd5b50604051620035683803806200356883398101604081905262000034916200022c565b818162000041336200010f565b6001600160a01b03811615620000585780620000bd565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000097573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bd91906200026b565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000105919062000183602090811b62000fc817901c565b5050505062000292565b600062000126620001ef60201b620010591760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022957600080fd5b50565b600080604083850312156200024057600080fd5b82516200024d8162000213565b6020840151909250620002608162000213565b809150509250929050565b6000602082840312156200027e57600080fd5b81516200028b8162000213565b9392505050565b6132c680620002a26000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe14610051578063837ee2801461007a5780638da5cb5b1461008d578063f2fde38b146100ba575b600080fd5b61006461005f3660046120a3565b6100cf565b604051610071919061219d565b60405180910390f35b610064610088366004612395565b6100f9565b610095610f07565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100cd6100c836600461245f565b610f4c565b005b60606000828060200190518101906100e79190612625565b90506100f2816100f9565b9392505050565b6060600061010f8360000151846060015161107d565b60008054919250906101579073ffffffffffffffffffffffffffffffffffffffff167f28b9f73e6b271728535a5e2b6da73f60f1fa049519ed11d9203e38922757cf066118eb565b600080549192509061019f9073ffffffffffffffffffffffffffffffffffffffff167f65188156108ab445e8ddb20e749f49402ca97dc723f07951b1c4a011dd8e11666118eb565b85516040517fcccf7a8e00000000000000000000000000000000000000000000000000000000815291925073ffffffffffffffffffffffffffffffffffffffff84169163cccf7a8e916101f89160040190815260200190565b602060405180830381865afa158015610215573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061023991906126cd565b80156102db575084516040517f0ff4c916000000000000000000000000000000000000000000000000000000008152849173ffffffffffffffffffffffffffffffffffffffff851691630ff4c916916102989160040190815260200190565b602060405180830381865afa1580156102b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102d991906126ef565b145b8015610374575084516040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481019190915273ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015610350573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061037491906126cd565b6103df576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6e6f742076616c6964207472656173757265000000000000000000000000000060448201526064015b60405180910390fd5b84516040517f0ff4c91600000000000000000000000000000000000000000000000000000000815260009173ffffffffffffffffffffffffffffffffffffffff841691630ff4c916916104389160040190815260200190565b600060405180830381865afa158015610455573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261049b919081019061279a565b9050806040015160ff1660011480156104bb5750806060015160ff166001145b610521576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f6e6f7420666f72207468697320757365206d6f6465000000000000000000000060448201526064016103d6565b600080546105659073ffffffffffffffffffffffffffffffffffffffff167fef3393883620fd592853ef61d4a33b35dd9fd9e4dc925bc5e1463919917423ab6118eb565b87516040517f0ff4c916000000000000000000000000000000000000000000000000000000008152600481019190915290915060009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401606060405180830381865afa1580156105d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105fd91906128a8565b60008054919250906106459073ffffffffffffffffffffffffffffffffffffffff167ff899011875ecdd0cff874cbbf66c1a2682791e10ae993d0a0ef3d2530849a7de6118eb565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b8152600401600060405180830381865afa15801561068f573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526106d5919081019061290d565b90506106e687856101000151611a37565b600154604080517f0d59332e000000000000000000000000000000000000000000000000000000008152905161087f9273ffffffffffffffffffffffffffffffffffffffff1691630d59332e9160048083019260209291908290030181865afa158015610757573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061077b9190612a66565b6000546107be9073ffffffffffffffffffffffffffffffffffffffff167f1c25628829b4861cd29b8126181e286e9aa3749b43e568208fa84796fe72e3816118eb565b84516040517f0ff4c91600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9290921691630ff4c916916108169160040190815260200190565b600060405180830381865afa158015610833573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526108799190810190612a83565b516118eb565b73ffffffffffffffffffffffffffffffffffffffff1663c420d84c6040518061012001604052807f06f67b1e0d9a54a8ea979da0d1f28082c6587d84a586c4d59a92370fb599ce6b60001c81526020016000151581526020018a81526020018c6000015181526020018c6020015181526020018c604001518152602001856020015163ffffffff1681526020016103e885610120015187604001516109249190612ba3565b61092e9190612bfe565b63ffffffff16815260016020909101526040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b1681526109779190600401612d58565b6000604051808303816000875af1158015610996573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526109dc9190810190612e2a565b508360c0015163ffffffff16600103610d455788516040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481019190915273ffffffffffffffffffffffffffffffffffffffff87169063cccf7a8e90602401602060405180830381865afa158015610a5d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a8191906126cd565b15610b0a5788516040517f4cc82215000000000000000000000000000000000000000000000000000000008152600481019190915273ffffffffffffffffffffffffffffffffffffffff871690634cc8221590602401600060405180830381600087803b158015610af157600080fd5b505af1158015610b05573d6000803e3d6000fd5b505050505b88516040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481019190915273ffffffffffffffffffffffffffffffffffffffff86169063cccf7a8e90602401602060405180830381865afa158015610b78573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b9c91906126cd565b15610c255788516040517f4cc82215000000000000000000000000000000000000000000000000000000008152600481019190915273ffffffffffffffffffffffffffffffffffffffff861690634cc8221590602401600060405180830381600087803b158015610c0c57600080fd5b505af1158015610c20573d6000803e3d6000fd5b505050505b88516040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481019190915273ffffffffffffffffffffffffffffffffffffffff84169063cccf7a8e90602401602060405180830381865afa158015610c93573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cb791906126cd565b15610d405788516040517f4cc82215000000000000000000000000000000000000000000000000000000008152600481019190915273ffffffffffffffffffffffffffffffffffffffff841690634cc8221590602401600060405180830381600087803b158015610d2757600080fd5b505af1158015610d3b573d6000803e3d6000fd5b505050505b610efb565b60018460c0015163ffffffff161115610efb5760018460c00151610d699190612e73565b63ffffffff1660c085015288516040517f34ff82df00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8716916334ff82df91610dc991908890600401612e98565b600060405180830381600087803b158015610de357600080fd5b505af1158015610df7573d6000803e3d6000fd5b5050600054610e3f925073ffffffffffffffffffffffffffffffffffffffff1690507f44d5df6fedbb1676612b3073b831a5f6f1d59057fb2b8978e7146cb8eee3ca8c6118eb565b73ffffffffffffffffffffffffffffffffffffffff16634e6641a98a600001516040518060400160405280886080015142610e7a9190612f92565b67ffffffffffffffff16815260006020909101526040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b168152610ec8929190600401612fbe565b600060405180830381600087803b158015610ee257600080fd5b505af1158015610ef6573d6000803e3d6000fd5b505050505b50505050505050919050565b6000610f477f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610fbc576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610fc581611e2c565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6000805481906110c39073ffffffffffffffffffffffffffffffffffffffff167f28b9f73e6b271728535a5e2b6da73f60f1fa049519ed11d9203e38922757cf066118eb565b60008054919250339161110c9073ffffffffffffffffffffffffffffffffffffffff167fd9a058a8db06aec9057108bd96cfe2e7f580ccef7b81e22c7f33b2889597c1f26118eb565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810187905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa15801561117a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061119e91906126cd565b801561123857506040517f0ff4c91600000000000000000000000000000000000000000000000000000000815260048101869052829073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401602060405180830381865afa158015611212573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061123691906126ef565b145b61129e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f6e6f74206f776e6572206f66206775696c64206372657374000000000000000060448201526064016103d6565b600080546112e29073ffffffffffffffffffffffffffffffffffffffff167fde95e8412e4c1b59c183267e54d1bef716ab450b30c57bb7c5c88a38771301ab6118eb565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810188905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015611350573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061137491906126cd565b801561143a57506040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810187905273ffffffffffffffffffffffffffffffffffffffff821690630ff4c91690602401600060405180830381865afa1580156113e6573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261142c9190810190612fe9565b6000015163ffffffff166004145b6114a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f6e6f74206c6561646572206f66206775696c640000000000000000000000000060448201526064016103d6565b600080546114e49073ffffffffffffffffffffffffffffffffffffffff167f53c6c48404020c13382f2b1b9b291c13f7e76aa44e5c76f2f9384b8aa97bfbe06118eb565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810189905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015611552573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061157691906126cd565b6115dc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6e6f206775696c6420626f756e6465640000000000000000000000000000000060448201526064016103d6565b6040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810188905260009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401602060405180830381865afa15801561164a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061166e91906126ef565b60008054919250906116b69073ffffffffffffffffffffffffffffffffffffffff167f65188156108ab445e8ddb20e749f49402ca97dc723f07951b1c4a011dd8e11666118eb565b6040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481018c905290915073ffffffffffffffffffffffffffffffffffffffff88169063cccf7a8e90602401602060405180830381865afa158015611724573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061174891906126cd565b80156117e257506040517f0ff4c916000000000000000000000000000000000000000000000000000000008152600481018b9052829073ffffffffffffffffffffffffffffffffffffffff891690630ff4c91690602401602060405180830381865afa1580156117bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117e091906126ef565b145b801561187857506040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481018b905273ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015611854573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061187891906126cd565b6118de576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6e6f742076616c6964207472656173757265000000000000000000000000000060448201526064016103d6565b5098975050505050505050565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa15801561195b573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526119a1919081019061308c565b90508051600003611a0e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f74207265676973746572656400000000000000000000000000000060448201526064016103d6565b611a2f81600081518110611a2457611a2461311d565b602002602001015190565b949350505050565b60008054611a7b9073ffffffffffffffffffffffffffffffffffffffff167f189eafd1a01543209399086ef2e12962fca648be4826ce2b3eb2e53ed14bf1416118eb565b6000805491925090611ac39073ffffffffffffffffffffffffffffffffffffffff167f3c3102d48c6d31b1a70ddf8b23d300c759379d6506f2ef221cf3056d7c54dca76118eb565b6040517f720354530000000000000000000000000000000000000000000000000000000081526004810186905290915060009073ffffffffffffffffffffffffffffffffffffffff831690637203545390602401602060405180830381865afa158015611b34573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b58919061314c565b6000805491925090611ba09073ffffffffffffffffffffffffffffffffffffffff167fdc602e66a6d8c84d0c8d6c4292d80341393a1e04ff02909a12718a4216d3a9f76118eb565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160a060405180830381865afa158015611bea573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c0e919061316f565b6040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810188905290915060009073ffffffffffffffffffffffffffffffffffffffff861690630ff4c916906024016040805180830381865afa158015611c7e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ca291906131f9565b60208301518151919250600091611cb99042613254565b611cc39190613275565b8260200151611cd29190612f92565b905063ffffffff841667ffffffffffffffff82161115611cf5575063ffffffff83165b8667ffffffffffffffff168167ffffffffffffffff161015611d73576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f6c61636b206f6620616374696f6e20706f696e7473000000000000000000000060448201526064016103d6565b611d7d8782613254565b60408051808201825267ffffffffffffffff42811682528316602082015290517f4e6641a900000000000000000000000000000000000000000000000000000000815291925073ffffffffffffffffffffffffffffffffffffffff881691634e6641a991611df0918c9190600401612fbe565b600060405180830381600087803b158015611e0a57600080fd5b505af1158015611e1e573d6000803e3d6000fd5b505050505050505050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051610fc5928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516101c0810167ffffffffffffffff81118282101715611f3357611f33611ee0565b60405290565b6040516080810167ffffffffffffffff81118282101715611f3357611f33611ee0565b604051610120810167ffffffffffffffff81118282101715611f3357611f33611ee0565b604051610160810167ffffffffffffffff81118282101715611f3357611f33611ee0565b604051610100810167ffffffffffffffff81118282101715611f3357611f33611ee0565b60405160a0810167ffffffffffffffff81118282101715611f3357611f33611ee0565b6040805190810167ffffffffffffffff81118282101715611f3357611f33611ee0565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561205557612055611ee0565b604052919050565b600067ffffffffffffffff82111561207757612077611ee0565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b6000602082840312156120b557600080fd5b813567ffffffffffffffff8111156120cc57600080fd5b8201601f810184136120dd57600080fd5b80356120f06120eb8261205d565b61200e565b81815285602083850101111561210557600080fd5b81602084016020830137600091810160200191909152949350505050565b60005b8381101561213e578181015183820152602001612126565b8381111561214d576000848401525b50505050565b6000815180845261216b816020860160208601612123565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006100f26020830184612153565b600067ffffffffffffffff8211156121ca576121ca611ee0565b5060051b60200190565b600082601f8301126121e557600080fd5b6121ed611feb565b8060408401858111156121ff57600080fd5b845b81811015612219578035845260209384019301612201565b509095945050505050565b600082601f83011261223557600080fd5b61223d611feb565b80608084018581111561224f57600080fd5b845b818110156122195761226387826121d4565b8452602090930192604001612251565b600082601f83011261228457600080fd5b813560206122946120eb836121b0565b82815261026092830285018201928282019190878511156122b457600080fd5b8387015b858110156123885781818a0312156122d05760008081fd5b6122d8611f0f565b81358152858201358682015260408083013590820152606080830135908201526080808301359082015260a0808301359082015260c0808301359082015260e080830135908201526101008083013590820152610120808301359082015261014080830135908201526101606123508b8285016121d4565b908201526101a06123638b848301612224565b6101808301526123778b61022085016121d4565b9082015284529284019281016122b8565b5090979650505050505050565b6000602082840312156123a757600080fd5b813567ffffffffffffffff808211156123bf57600080fd5b90830190608082860312156123d357600080fd5b6123db611f39565b823581526020830135828111156123f157600080fd5b6123fd87828601612273565b60208301525060408301358281111561241557600080fd5b61242187828601612273565b6040830152506060830135606082015280935050505092915050565b73ffffffffffffffffffffffffffffffffffffffff81168114610fc557600080fd5b60006020828403121561247157600080fd5b81356100f28161243d565b600082601f83011261248d57600080fd5b612495611feb565b8060408401858111156124a757600080fd5b845b818110156122195780518452602093840193016124a9565b600082601f8301126124d257600080fd5b6124da611feb565b8060808401858111156124ec57600080fd5b845b8181101561221957612500878261247c565b84526020909301926040016124ee565b600082601f83011261252157600080fd5b815160206125316120eb836121b0565b828152610260928302850182019282820191908785111561255157600080fd5b8387015b858110156123885781818a03121561256d5760008081fd5b612575611f0f565b81518152858201518682015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e080830151908201526101008083015190820152610120808301519082015261014080830151908201526101606125ed8b82850161247c565b908201526101a06126008b8483016124c1565b6101808301526126148b610220850161247c565b908201528452928401928101612555565b60006020828403121561263757600080fd5b815167ffffffffffffffff8082111561264f57600080fd5b908301906080828603121561266357600080fd5b61266b611f39565b8251815260208301518281111561268157600080fd5b61268d87828601612510565b6020830152506040830151828111156126a557600080fd5b6126b187828601612510565b6040830152506060830151606082015280935050505092915050565b6000602082840312156126df57600080fd5b815180151581146100f257600080fd5b60006020828403121561270157600080fd5b5051919050565b60006127166120eb8461205d565b905082815283838301111561272a57600080fd5b6100f2836020830184612123565b600082601f83011261274957600080fd5b6100f283835160208501612708565b805160ff8116811461276957600080fd5b919050565b805167ffffffffffffffff8116811461276957600080fd5b805163ffffffff8116811461276957600080fd5b6000602082840312156127ac57600080fd5b815167ffffffffffffffff808211156127c457600080fd5b9083019061012082860312156127d957600080fd5b6127e1611f5c565b8251828111156127f057600080fd5b6127fc87828601612738565b82525060208301518281111561281157600080fd5b61281d87828601612738565b60208301525061282f60408401612758565b604082015261284060608401612758565b60608201526128516080840161276e565b608082015261286260a0840161276e565b60a082015261287360c08401612786565b60c082015261288460e0840161276e565b60e0820152610100915061289982840161276e565b91810191909152949350505050565b6000606082840312156128ba57600080fd5b6040516060810181811067ffffffffffffffff821117156128dd576128dd611ee0565b604052825181526128f060208401612786565b602082015261290160408401612786565b60408201529392505050565b60006020828403121561291f57600080fd5b815167ffffffffffffffff8082111561293757600080fd5b90830190610160828603121561294c57600080fd5b612954611f80565b8251815261296460208401612786565b602082015261297560408401612786565b604082015260608301518281111561298c57600080fd5b61299887828601612738565b6060830152506080830151828111156129b057600080fd5b6129bc87828601612738565b60808301525060a0830151828111156129d457600080fd5b6129e087828601612738565b60a08301525060c0830151828111156129f857600080fd5b612a0487828601612738565b60c08301525060e083015182811115612a1c57600080fd5b612a2887828601612738565b60e0830152506101009150612a3e828401612786565b828201526101209150612a52828401612786565b82820152610140915061289982840161276e565b600060208284031215612a7857600080fd5b81516100f28161243d565b600060208284031215612a9557600080fd5b815167ffffffffffffffff80821115612aad57600080fd5b908301906101008286031215612ac257600080fd5b612aca611fa4565b82518152602083015182811115612ae057600080fd5b612aec87828601612738565b602083015250604083015182811115612b0457600080fd5b612b1087828601612738565b604083015250612b2260608401612786565b6060820152612b336080840161276e565b6080820152612b4460a08401612758565b60a0820152612b5560c08401612758565b60c0820152612b6660e0840161276e565b60e082015295945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600063ffffffff80831681851681830481118215151615612bc657612bc6612b74565b02949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600063ffffffff80841680612c1557612c15612bcf565b92169190910492915050565b8060005b600281101561214d578151845260209384019390910190600101612c25565b8060005b600281101561214d57612c5c848351612c21565b6040939093019260209190910190600101612c48565b600081518084526020808501945080840160005b83811015612d4d57815180518852838101518489015260408082015190890152606080820151908901526080808201519089015260a0808201519089015260c0808201519089015260e0808201519089015261010080820151908901526101208082015190890152610140808201519089015261016080820151612d0c828b0182612c21565b50506101808101516101a0612d23818b0183612c44565b91909101519050612d38610220890182612c21565b50610260969096019590820190600101612c86565b509495945050505050565b602081528151602082015260006020830151612d78604084018215159052565b50604083015160608301526060830151608083015260808301516101208060a0850152612da9610140850183612c72565b915060a08501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160c0860152612de48382612c72565b92505060c0850151612dfe60e086018263ffffffff169052565b5060e0850151610100612e188187018363ffffffff169052565b90950151151593019290925250919050565b600060208284031215612e3c57600080fd5b815167ffffffffffffffff811115612e5357600080fd5b8201601f81018413612e6457600080fd5b611a2f84825160208401612708565b600063ffffffff83811690831681811015612e9057612e90612b74565b039392505050565b8281526040602082015260008251610120806040850152612ebd610160850183612153565b915060208501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0858403016060860152612ef88382612153565b9250506040850151612f0f608086018260ff169052565b50606085015160ff811660a086015250608085015167ffffffffffffffff811660c08601525060a085015167ffffffffffffffff811660e08601525060c0850151610100612f648187018363ffffffff169052565b60e087015167ffffffffffffffff908116938701939093528601519182166101408601525050949350505050565b600067ffffffffffffffff808316818516808303821115612fb557612fb5612b74565b01949350505050565b828152606081016100f26020830184805167ffffffffffffffff908116835260209182015116910152565b600060208284031215612ffb57600080fd5b815167ffffffffffffffff8082111561301357600080fd5b9083019060a0828603121561302757600080fd5b61302f611fc8565b61303883612786565b815260208301518281111561304c57600080fd5b61305887828601612738565b602083015250604083015160408201526060830151606082015261307e6080840161276e565b608082015295945050505050565b6000602080838503121561309f57600080fd5b825167ffffffffffffffff8111156130b657600080fd5b8301601f810185136130c757600080fd5b80516130d56120eb826121b0565b81815260059190911b820183019083810190878311156130f457600080fd5b928401925b82841015613112578351825292840192908401906130f9565b979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561315e57600080fd5b81518060030b81146100f257600080fd5b600060a0828403121561318157600080fd5b60405160a0810181811067ffffffffffffffff821117156131a4576131a4611ee0565b6040526131b08361276e565b81526131be6020840161276e565b60208201526131cf6040840161276e565b60408201526131e06060840161276e565b6060820152608083015160808201528091505092915050565b60006040828403121561320b57600080fd5b6040516040810181811067ffffffffffffffff8211171561322e5761322e611ee0565b60405261323a8361276e565b81526132486020840161276e565b60208201529392505050565b600067ffffffffffffffff83811690831681811015612e9057612e90612b74565b600067ffffffffffffffff80841680612c1557612c15612bcf56fea26469706673582212206ec5ebb339c42c85690c0e30d5b4c88c53d80b3182a521a5415e67052e65401b64736f6c634300080d0033";

type GuildReleaseAirdropTreasureSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GuildReleaseAirdropTreasureSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GuildReleaseAirdropTreasureSystem__factory extends ContractFactory {
  constructor(...args: GuildReleaseAirdropTreasureSystemConstructorParams) {
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
  ): Promise<GuildReleaseAirdropTreasureSystem> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<GuildReleaseAirdropTreasureSystem>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): GuildReleaseAirdropTreasureSystem {
    return super.attach(address) as GuildReleaseAirdropTreasureSystem;
  }
  override connect(signer: Signer): GuildReleaseAirdropTreasureSystem__factory {
    return super.connect(signer) as GuildReleaseAirdropTreasureSystem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GuildReleaseAirdropTreasureSystemInterface {
    return new utils.Interface(
      _abi
    ) as GuildReleaseAirdropTreasureSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GuildReleaseAirdropTreasureSystem {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as GuildReleaseAirdropTreasureSystem;
  }
}
