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
  "0x60806040523480156200001157600080fd5b506040516200352a3803806200352a83398101604081905262000034916200022c565b818162000041336200010f565b6001600160a01b03811615620000585780620000bd565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000097573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bd91906200026b565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000105919062000183602090811b62000fa417901c565b5050505062000292565b600062000126620001ef60201b620010351760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022957600080fd5b50565b600080604083850312156200024057600080fd5b82516200024d8162000213565b6020840151909250620002608162000213565b809150509250929050565b6000602082840312156200027e57600080fd5b81516200028b8162000213565b9392505050565b61328880620002a26000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe14610051578063837ee2801461007a5780638da5cb5b1461008d578063f2fde38b146100ba575b600080fd5b61006461005f36600461207e565b6100cf565b6040516100719190612178565b60405180910390f35b610064610088366004612370565b6100f9565b610095610ee3565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100cd6100c836600461243a565b610f28565b005b60606000828060200190518101906100e79190612600565b90506100f2816100f9565b9392505050565b6060600061010f83600001518460600151611059565b60008054919250906101579073ffffffffffffffffffffffffffffffffffffffff167f28b9f73e6b271728535a5e2b6da73f60f1fa049519ed11d9203e38922757cf066118c7565b600080549192509061019f9073ffffffffffffffffffffffffffffffffffffffff167f65188156108ab445e8ddb20e749f49402ca97dc723f07951b1c4a011dd8e11666118c7565b85516040517fcccf7a8e00000000000000000000000000000000000000000000000000000000815291925073ffffffffffffffffffffffffffffffffffffffff84169163cccf7a8e916101f89160040190815260200190565b602060405180830381865afa158015610215573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061023991906126a8565b80156102db575084516040517f0ff4c916000000000000000000000000000000000000000000000000000000008152849173ffffffffffffffffffffffffffffffffffffffff851691630ff4c916916102989160040190815260200190565b602060405180830381865afa1580156102b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102d991906126ca565b145b8015610374575084516040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481019190915273ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015610350573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061037491906126a8565b6103df576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6e6f742076616c6964207472656173757265000000000000000000000000000060448201526064015b60405180910390fd5b84516040517f0ff4c91600000000000000000000000000000000000000000000000000000000815260009173ffffffffffffffffffffffffffffffffffffffff841691630ff4c916916104389160040190815260200190565b600060405180830381865afa158015610455573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261049b9190810190612775565b9050806040015160ff1660011480156104bb5750806060015160ff166001145b610521576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f6e6f7420666f72207468697320757365206d6f6465000000000000000000000060448201526064016103d6565b600080546105659073ffffffffffffffffffffffffffffffffffffffff167fef3393883620fd592853ef61d4a33b35dd9fd9e4dc925bc5e1463919917423ab6118c7565b87516040517f0ff4c916000000000000000000000000000000000000000000000000000000008152600481019190915290915060009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401606060405180830381865afa1580156105d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105fd9190612883565b60008054919250906106459073ffffffffffffffffffffffffffffffffffffffff167ff899011875ecdd0cff874cbbf66c1a2682791e10ae993d0a0ef3d2530849a7de6118c7565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b8152600401600060405180830381865afa15801561068f573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526106d591908101906128e8565b90506106e687856101000151611a13565b600154604080517f0d59332e000000000000000000000000000000000000000000000000000000008152905161087f9273ffffffffffffffffffffffffffffffffffffffff1691630d59332e9160048083019260209291908290030181865afa158015610757573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061077b9190612a41565b6000546107be9073ffffffffffffffffffffffffffffffffffffffff167f1c25628829b4861cd29b8126181e286e9aa3749b43e568208fa84796fe72e3816118c7565b84516040517f0ff4c91600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9290921691630ff4c916916108169160040190815260200190565b600060405180830381865afa158015610833573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526108799190810190612a5e565b516118c7565b73ffffffffffffffffffffffffffffffffffffffff1663d776c6396040518061010001604052807f06f67b1e0d9a54a8ea979da0d1f28082c6587d84a586c4d59a92370fb599ce6b60001c81526020016000151581526020018a81526020018c6000015181526020018c6020015181526020018c604001518152602001856020015163ffffffff1681526020016103e885610120015187604001516109249190612b7e565b61092e9190612bd9565b63ffffffff168152506040518263ffffffff1660e01b81526004016109539190612d33565b6000604051808303816000875af1158015610972573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526109b89190810190612dec565b508360c0015163ffffffff16600103610d215788516040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481019190915273ffffffffffffffffffffffffffffffffffffffff87169063cccf7a8e90602401602060405180830381865afa158015610a39573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a5d91906126a8565b15610ae65788516040517f4cc82215000000000000000000000000000000000000000000000000000000008152600481019190915273ffffffffffffffffffffffffffffffffffffffff871690634cc8221590602401600060405180830381600087803b158015610acd57600080fd5b505af1158015610ae1573d6000803e3d6000fd5b505050505b88516040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481019190915273ffffffffffffffffffffffffffffffffffffffff86169063cccf7a8e90602401602060405180830381865afa158015610b54573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b7891906126a8565b15610c015788516040517f4cc82215000000000000000000000000000000000000000000000000000000008152600481019190915273ffffffffffffffffffffffffffffffffffffffff861690634cc8221590602401600060405180830381600087803b158015610be857600080fd5b505af1158015610bfc573d6000803e3d6000fd5b505050505b88516040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481019190915273ffffffffffffffffffffffffffffffffffffffff84169063cccf7a8e90602401602060405180830381865afa158015610c6f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c9391906126a8565b15610d1c5788516040517f4cc82215000000000000000000000000000000000000000000000000000000008152600481019190915273ffffffffffffffffffffffffffffffffffffffff841690634cc8221590602401600060405180830381600087803b158015610d0357600080fd5b505af1158015610d17573d6000803e3d6000fd5b505050505b610ed7565b60018460c0015163ffffffff161115610ed75760018460c00151610d459190612e35565b63ffffffff1660c085015288516040517f34ff82df00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8716916334ff82df91610da591908890600401612e5a565b600060405180830381600087803b158015610dbf57600080fd5b505af1158015610dd3573d6000803e3d6000fd5b5050600054610e1b925073ffffffffffffffffffffffffffffffffffffffff1690507f44d5df6fedbb1676612b3073b831a5f6f1d59057fb2b8978e7146cb8eee3ca8c6118c7565b73ffffffffffffffffffffffffffffffffffffffff16634e6641a98a600001516040518060400160405280886080015142610e569190612f54565b67ffffffffffffffff16815260006020909101526040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b168152610ea4929190600401612f80565b600060405180830381600087803b158015610ebe57600080fd5b505af1158015610ed2573d6000803e3d6000fd5b505050505b50505050505050919050565b6000610f237f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610f98576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610fa181611e07565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b60008054819061109f9073ffffffffffffffffffffffffffffffffffffffff167f28b9f73e6b271728535a5e2b6da73f60f1fa049519ed11d9203e38922757cf066118c7565b6000805491925033916110e89073ffffffffffffffffffffffffffffffffffffffff167fd9a058a8db06aec9057108bd96cfe2e7f580ccef7b81e22c7f33b2889597c1f26118c7565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810187905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015611156573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061117a91906126a8565b801561121457506040517f0ff4c91600000000000000000000000000000000000000000000000000000000815260048101869052829073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401602060405180830381865afa1580156111ee573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061121291906126ca565b145b61127a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f6e6f74206f776e6572206f66206775696c64206372657374000000000000000060448201526064016103d6565b600080546112be9073ffffffffffffffffffffffffffffffffffffffff167fde95e8412e4c1b59c183267e54d1bef716ab450b30c57bb7c5c88a38771301ab6118c7565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810188905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa15801561132c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061135091906126a8565b801561141657506040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810187905273ffffffffffffffffffffffffffffffffffffffff821690630ff4c91690602401600060405180830381865afa1580156113c2573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526114089190810190612fab565b6000015163ffffffff166004145b61147c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f6e6f74206c6561646572206f66206775696c640000000000000000000000000060448201526064016103d6565b600080546114c09073ffffffffffffffffffffffffffffffffffffffff167f53c6c48404020c13382f2b1b9b291c13f7e76aa44e5c76f2f9384b8aa97bfbe06118c7565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810189905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa15801561152e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061155291906126a8565b6115b8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6e6f206775696c6420626f756e6465640000000000000000000000000000000060448201526064016103d6565b6040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810188905260009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401602060405180830381865afa158015611626573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061164a91906126ca565b60008054919250906116929073ffffffffffffffffffffffffffffffffffffffff167f65188156108ab445e8ddb20e749f49402ca97dc723f07951b1c4a011dd8e11666118c7565b6040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481018c905290915073ffffffffffffffffffffffffffffffffffffffff88169063cccf7a8e90602401602060405180830381865afa158015611700573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061172491906126a8565b80156117be57506040517f0ff4c916000000000000000000000000000000000000000000000000000000008152600481018b9052829073ffffffffffffffffffffffffffffffffffffffff891690630ff4c91690602401602060405180830381865afa158015611798573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117bc91906126ca565b145b801561185457506040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481018b905273ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015611830573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061185491906126a8565b6118ba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6e6f742076616c6964207472656173757265000000000000000000000000000060448201526064016103d6565b5098975050505050505050565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015611937573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261197d919081019061304e565b905080516000036119ea576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f74207265676973746572656400000000000000000000000000000060448201526064016103d6565b611a0b81600081518110611a0057611a006130df565b602002602001015190565b949350505050565b60008054611a579073ffffffffffffffffffffffffffffffffffffffff167f189eafd1a01543209399086ef2e12962fca648be4826ce2b3eb2e53ed14bf1416118c7565b6000805491925090611a9f9073ffffffffffffffffffffffffffffffffffffffff167f3c3102d48c6d31b1a70ddf8b23d300c759379d6506f2ef221cf3056d7c54dca76118c7565b6040517f720354530000000000000000000000000000000000000000000000000000000081526004810186905290915060009073ffffffffffffffffffffffffffffffffffffffff831690637203545390602401602060405180830381865afa158015611b10573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b34919061310e565b6000805491925090611b7c9073ffffffffffffffffffffffffffffffffffffffff167fdc602e66a6d8c84d0c8d6c4292d80341393a1e04ff02909a12718a4216d3a9f76118c7565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160a060405180830381865afa158015611bc6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bea9190613131565b6040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810188905290915060009073ffffffffffffffffffffffffffffffffffffffff861690630ff4c916906024016040805180830381865afa158015611c5a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c7e91906131bb565b60208301518151919250600091611c959042613216565b611c9f9190613237565b8260200151611cae9190612f54565b905063ffffffff841667ffffffffffffffff82161115611cd1575063ffffffff83165b8667ffffffffffffffff168167ffffffffffffffff1611611d4e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f6c61636b206f6620616374696f6e20706f696e7473000000000000000000000060448201526064016103d6565b611d588782613216565b60408051808201825267ffffffffffffffff42811682528316602082015290517f4e6641a900000000000000000000000000000000000000000000000000000000815291925073ffffffffffffffffffffffffffffffffffffffff881691634e6641a991611dcb918c9190600401612f80565b600060405180830381600087803b158015611de557600080fd5b505af1158015611df9573d6000803e3d6000fd5b505050505050505050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051610fa1928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516101c0810167ffffffffffffffff81118282101715611f0e57611f0e611ebb565b60405290565b6040516080810167ffffffffffffffff81118282101715611f0e57611f0e611ebb565b604051610120810167ffffffffffffffff81118282101715611f0e57611f0e611ebb565b604051610160810167ffffffffffffffff81118282101715611f0e57611f0e611ebb565b604051610100810167ffffffffffffffff81118282101715611f0e57611f0e611ebb565b60405160a0810167ffffffffffffffff81118282101715611f0e57611f0e611ebb565b6040805190810167ffffffffffffffff81118282101715611f0e57611f0e611ebb565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561203057612030611ebb565b604052919050565b600067ffffffffffffffff82111561205257612052611ebb565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b60006020828403121561209057600080fd5b813567ffffffffffffffff8111156120a757600080fd5b8201601f810184136120b857600080fd5b80356120cb6120c682612038565b611fe9565b8181528560208385010111156120e057600080fd5b81602084016020830137600091810160200191909152949350505050565b60005b83811015612119578181015183820152602001612101565b83811115612128576000848401525b50505050565b600081518084526121468160208601602086016120fe565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006100f2602083018461212e565b600067ffffffffffffffff8211156121a5576121a5611ebb565b5060051b60200190565b600082601f8301126121c057600080fd5b6121c8611fc6565b8060408401858111156121da57600080fd5b845b818110156121f45780358452602093840193016121dc565b509095945050505050565b600082601f83011261221057600080fd5b612218611fc6565b80608084018581111561222a57600080fd5b845b818110156121f45761223e87826121af565b845260209093019260400161222c565b600082601f83011261225f57600080fd5b8135602061226f6120c68361218b565b828152610260928302850182019282820191908785111561228f57600080fd5b8387015b858110156123635781818a0312156122ab5760008081fd5b6122b3611eea565b81358152858201358682015260408083013590820152606080830135908201526080808301359082015260a0808301359082015260c0808301359082015260e0808301359082015261010080830135908201526101208083013590820152610140808301359082015261016061232b8b8285016121af565b908201526101a061233e8b8483016121ff565b6101808301526123528b61022085016121af565b908201528452928401928101612293565b5090979650505050505050565b60006020828403121561238257600080fd5b813567ffffffffffffffff8082111561239a57600080fd5b90830190608082860312156123ae57600080fd5b6123b6611f14565b823581526020830135828111156123cc57600080fd5b6123d88782860161224e565b6020830152506040830135828111156123f057600080fd5b6123fc8782860161224e565b6040830152506060830135606082015280935050505092915050565b73ffffffffffffffffffffffffffffffffffffffff81168114610fa157600080fd5b60006020828403121561244c57600080fd5b81356100f281612418565b600082601f83011261246857600080fd5b612470611fc6565b80604084018581111561248257600080fd5b845b818110156121f4578051845260209384019301612484565b600082601f8301126124ad57600080fd5b6124b5611fc6565b8060808401858111156124c757600080fd5b845b818110156121f4576124db8782612457565b84526020909301926040016124c9565b600082601f8301126124fc57600080fd5b8151602061250c6120c68361218b565b828152610260928302850182019282820191908785111561252c57600080fd5b8387015b858110156123635781818a0312156125485760008081fd5b612550611eea565b81518152858201518682015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e080830151908201526101008083015190820152610120808301519082015261014080830151908201526101606125c88b828501612457565b908201526101a06125db8b84830161249c565b6101808301526125ef8b6102208501612457565b908201528452928401928101612530565b60006020828403121561261257600080fd5b815167ffffffffffffffff8082111561262a57600080fd5b908301906080828603121561263e57600080fd5b612646611f14565b8251815260208301518281111561265c57600080fd5b612668878286016124eb565b60208301525060408301518281111561268057600080fd5b61268c878286016124eb565b6040830152506060830151606082015280935050505092915050565b6000602082840312156126ba57600080fd5b815180151581146100f257600080fd5b6000602082840312156126dc57600080fd5b5051919050565b60006126f16120c684612038565b905082815283838301111561270557600080fd5b6100f28360208301846120fe565b600082601f83011261272457600080fd5b6100f2838351602085016126e3565b805160ff8116811461274457600080fd5b919050565b805167ffffffffffffffff8116811461274457600080fd5b805163ffffffff8116811461274457600080fd5b60006020828403121561278757600080fd5b815167ffffffffffffffff8082111561279f57600080fd5b9083019061012082860312156127b457600080fd5b6127bc611f37565b8251828111156127cb57600080fd5b6127d787828601612713565b8252506020830151828111156127ec57600080fd5b6127f887828601612713565b60208301525061280a60408401612733565b604082015261281b60608401612733565b606082015261282c60808401612749565b608082015261283d60a08401612749565b60a082015261284e60c08401612761565b60c082015261285f60e08401612749565b60e08201526101009150612874828401612749565b91810191909152949350505050565b60006060828403121561289557600080fd5b6040516060810181811067ffffffffffffffff821117156128b8576128b8611ebb565b604052825181526128cb60208401612761565b60208201526128dc60408401612761565b60408201529392505050565b6000602082840312156128fa57600080fd5b815167ffffffffffffffff8082111561291257600080fd5b90830190610160828603121561292757600080fd5b61292f611f5b565b8251815261293f60208401612761565b602082015261295060408401612761565b604082015260608301518281111561296757600080fd5b61297387828601612713565b60608301525060808301518281111561298b57600080fd5b61299787828601612713565b60808301525060a0830151828111156129af57600080fd5b6129bb87828601612713565b60a08301525060c0830151828111156129d357600080fd5b6129df87828601612713565b60c08301525060e0830151828111156129f757600080fd5b612a0387828601612713565b60e0830152506101009150612a19828401612761565b828201526101209150612a2d828401612761565b828201526101409150612874828401612749565b600060208284031215612a5357600080fd5b81516100f281612418565b600060208284031215612a7057600080fd5b815167ffffffffffffffff80821115612a8857600080fd5b908301906101008286031215612a9d57600080fd5b612aa5611f7f565b82518152602083015182811115612abb57600080fd5b612ac787828601612713565b602083015250604083015182811115612adf57600080fd5b612aeb87828601612713565b604083015250612afd60608401612761565b6060820152612b0e60808401612749565b6080820152612b1f60a08401612733565b60a0820152612b3060c08401612733565b60c0820152612b4160e08401612749565b60e082015295945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600063ffffffff80831681851681830481118215151615612ba157612ba1612b4f565b02949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600063ffffffff80841680612bf057612bf0612baa565b92169190910492915050565b8060005b6002811015612128578151845260209384019390910190600101612c00565b8060005b600281101561212857612c37848351612bfc565b6040939093019260209190910190600101612c23565b600081518084526020808501945080840160005b83811015612d2857815180518852838101518489015260408082015190890152606080820151908901526080808201519089015260a0808201519089015260c0808201519089015260e0808201519089015261010080820151908901526101208082015190890152610140808201519089015261016080820151612ce7828b0182612bfc565b50506101808101516101a0612cfe818b0183612c1f565b91909101519050612d13610220890182612bfc565b50610260969096019590820190600101612c61565b509495945050505050565b60208152815160208201526020820151151560408201526040820151606082015260608201516080820152600060808301516101008060a0850152612d7c610120850183612c4d565b915060a08501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160c0860152612db78382612c4d565b92505060c0850151612dd160e086018263ffffffff169052565b5060e085015163ffffffff8116858301525090949350505050565b600060208284031215612dfe57600080fd5b815167ffffffffffffffff811115612e1557600080fd5b8201601f81018413612e2657600080fd5b611a0b848251602084016126e3565b600063ffffffff83811690831681811015612e5257612e52612b4f565b039392505050565b8281526040602082015260008251610120806040850152612e7f61016085018361212e565b915060208501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0858403016060860152612eba838261212e565b9250506040850151612ed1608086018260ff169052565b50606085015160ff811660a086015250608085015167ffffffffffffffff811660c08601525060a085015167ffffffffffffffff811660e08601525060c0850151610100612f268187018363ffffffff169052565b60e087015167ffffffffffffffff908116938701939093528601519182166101408601525050949350505050565b600067ffffffffffffffff808316818516808303821115612f7757612f77612b4f565b01949350505050565b828152606081016100f26020830184805167ffffffffffffffff908116835260209182015116910152565b600060208284031215612fbd57600080fd5b815167ffffffffffffffff80821115612fd557600080fd5b9083019060a08286031215612fe957600080fd5b612ff1611fa3565b612ffa83612761565b815260208301518281111561300e57600080fd5b61301a87828601612713565b602083015250604083015160408201526060830151606082015261304060808401612749565b608082015295945050505050565b6000602080838503121561306157600080fd5b825167ffffffffffffffff81111561307857600080fd5b8301601f8101851361308957600080fd5b80516130976120c68261218b565b81815260059190911b820183019083810190878311156130b657600080fd5b928401925b828410156130d4578351825292840192908401906130bb565b979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561312057600080fd5b81518060030b81146100f257600080fd5b600060a0828403121561314357600080fd5b60405160a0810181811067ffffffffffffffff8211171561316657613166611ebb565b60405261317283612749565b815261318060208401612749565b602082015261319160408401612749565b60408201526131a260608401612749565b6060820152608083015160808201528091505092915050565b6000604082840312156131cd57600080fd5b6040516040810181811067ffffffffffffffff821117156131f0576131f0611ebb565b6040526131fc83612749565b815261320a60208401612749565b60208201529392505050565b600067ffffffffffffffff83811690831681811015612e5257612e52612b4f565b600067ffffffffffffffff80841680612bf057612bf0612baa56fea2646970667358221220019d45bb91340fba0d2d99eaa33e7dd8d416fc7fc55a38a72949add4c2bc46f764736f6c634300080d0033";

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
