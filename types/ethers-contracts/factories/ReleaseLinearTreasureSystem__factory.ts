/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  ReleaseLinearTreasureSystem,
  ReleaseLinearTreasureSystemInterface,
} from "../ReleaseLinearTreasureSystem";

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
  "0x60806040523480156200001157600080fd5b5060405162002b1e38038062002b1e83398101604081905262000034916200022c565b818162000041336200010f565b6001600160a01b03811615620000585780620000bd565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000097573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bd91906200026b565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000105919062000183602090811b6200108517901c565b5050505062000292565b600062000126620001ef60201b620011161760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022957600080fd5b50565b600080604083850312156200024057600080fd5b82516200024d8162000213565b6020840151909250620002608162000213565b809150509250929050565b6000602082840312156200027e57600080fd5b81516200028b8162000213565b9392505050565b61287c80620002a26000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe146100515780638da5cb5b1461007a578063b1aed357146100a7578063f2fde38b146100ba575b600080fd5b61006461005f3660046118ae565b6100cf565b60405161007191906119a8565b60405180910390f35b6100826100f9565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100646100b5366004611ba0565b61013e565b6100cd6100c8366004611c5d565b611009565b005b60606000828060200190518101906100e79190611e23565b90506100f28161013e565b9392505050565b60006101397f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b6000805460609133916101879073ffffffffffffffffffffffffffffffffffffffff167f28b9f73e6b271728535a5e2b6da73f60f1fa049519ed11d9203e38922757cf0661113a565b60008054919250906101cf9073ffffffffffffffffffffffffffffffffffffffff167f65188156108ab445e8ddb20e749f49402ca97dc723f07951b1c4a011dd8e116661113a565b85516040517fcccf7a8e00000000000000000000000000000000000000000000000000000000815291925073ffffffffffffffffffffffffffffffffffffffff84169163cccf7a8e916102289160040190815260200190565b602060405180830381865afa158015610245573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102699190611eaf565b801561030b575084516040517f0ff4c916000000000000000000000000000000000000000000000000000000008152849173ffffffffffffffffffffffffffffffffffffffff851691630ff4c916916102c89160040190815260200190565b602060405180830381865afa1580156102e5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103099190611ed1565b145b80156103a4575084516040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481019190915273ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015610380573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103a49190611eaf565b61040f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6e6f742076616c6964207472656173757265000000000000000000000000000060448201526064015b60405180910390fd5b84516040517f0ff4c91600000000000000000000000000000000000000000000000000000000815260009173ffffffffffffffffffffffffffffffffffffffff841691630ff4c916916104689160040190815260200190565b600060405180830381865afa158015610485573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526104cb9190810190611f7c565b9050806040015160ff1660011480156104e95750606081015160ff16155b61054f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f6e6f7420666f72207468697320757365206d6f646500000000000000000000006044820152606401610406565b600080546105939073ffffffffffffffffffffffffffffffffffffffff167f96b5cf7019465e93c7e5108d84c24e70f0d4aa63ab16b75f307df929278baad961113a565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810187905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015610601573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106259190611eaf565b15806106c657506040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810186905273ffffffffffffffffffffffffffffffffffffffff821690630ff4c91690602401602060405180830381865afa158015610697573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106bb919061208a565b63ffffffff16600114155b61072c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f73746174757320696e76616c69640000000000000000000000000000000000006044820152606401610406565b600080546107709073ffffffffffffffffffffffffffffffffffffffff167fef3393883620fd592853ef61d4a33b35dd9fd9e4dc925bc5e1463919917423ab61113a565b88516040517f0ff4c916000000000000000000000000000000000000000000000000000000008152600481019190915290915060009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401606060405180830381865afa1580156107e4573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061080891906120a5565b9050610818846101000151611286565b600154604080517f0d59332e00000000000000000000000000000000000000000000000000000000815290516109b19273ffffffffffffffffffffffffffffffffffffffff1691630d59332e9160048083019260209291908290030181865afa158015610889573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108ad919061210a565b6000546108f09073ffffffffffffffffffffffffffffffffffffffff167f1c25628829b4861cd29b8126181e286e9aa3749b43e568208fa84796fe72e38161113a565b83516040517f0ff4c91600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9290921691630ff4c916916109489160040190815260200190565b600060405180830381865afa158015610965573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526109ab9190810190612127565b5161113a565b60408051610120810182527f09a35426a75b1906dfdc8773646443045a37ca29da26e856b2460c19aa5195c78152600060208083018290528284018c90528d5160608401528d81015160808401528d84015160a084015285015163ffffffff90811660c0840152858401511660e083015261010082015290517fc420d84c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff929092169163c420d84c91610a799160040161234f565b6000604051808303816000875af1158015610a98573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610ade9190810190612421565b508360c0015163ffffffff16600103610e475788516040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481019190915273ffffffffffffffffffffffffffffffffffffffff87169063cccf7a8e90602401602060405180830381865afa158015610b5f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b839190611eaf565b15610c0c5788516040517f4cc82215000000000000000000000000000000000000000000000000000000008152600481019190915273ffffffffffffffffffffffffffffffffffffffff871690634cc8221590602401600060405180830381600087803b158015610bf357600080fd5b505af1158015610c07573d6000803e3d6000fd5b505050505b88516040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481019190915273ffffffffffffffffffffffffffffffffffffffff86169063cccf7a8e90602401602060405180830381865afa158015610c7a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c9e9190611eaf565b15610d275788516040517f4cc82215000000000000000000000000000000000000000000000000000000008152600481019190915273ffffffffffffffffffffffffffffffffffffffff861690634cc8221590602401600060405180830381600087803b158015610d0e57600080fd5b505af1158015610d22573d6000803e3d6000fd5b505050505b88516040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481019190915273ffffffffffffffffffffffffffffffffffffffff83169063cccf7a8e90602401602060405180830381865afa158015610d95573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610db99190611eaf565b15610e425788516040517f4cc82215000000000000000000000000000000000000000000000000000000008152600481019190915273ffffffffffffffffffffffffffffffffffffffff831690634cc8221590602401600060405180830381600087803b158015610e2957600080fd5b505af1158015610e3d573d6000803e3d6000fd5b505050505b610ffd565b60018460c0015163ffffffff161115610ffd5760018460c00151610e6b9190612499565b63ffffffff1660c085015288516040517f34ff82df00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8716916334ff82df91610ecb919088906004016124be565b600060405180830381600087803b158015610ee557600080fd5b505af1158015610ef9573d6000803e3d6000fd5b5050600054610f41925073ffffffffffffffffffffffffffffffffffffffff1690507f44d5df6fedbb1676612b3073b831a5f6f1d59057fb2b8978e7146cb8eee3ca8c61113a565b73ffffffffffffffffffffffffffffffffffffffff16634e6641a98a600001516040518060400160405280886080015142610f7c91906125b8565b67ffffffffffffffff16815260006020909101526040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b168152610fca9291906004016125e4565b600060405180830381600087803b158015610fe457600080fd5b505af1158015610ff8573d6000803e3d6000fd5b505050505b50505050505050919050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314611079576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110828161167e565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa1580156111aa573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526111f0919081019061260f565b9050805160000361125d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f7420726567697374657265640000000000000000000000000000006044820152606401610406565b61127e81600081518110611273576112736126a0565b602002602001015190565b949350505050565b600080543391906112cd9073ffffffffffffffffffffffffffffffffffffffff167f189eafd1a01543209399086ef2e12962fca648be4826ce2b3eb2e53ed14bf14161113a565b60008054919250906113159073ffffffffffffffffffffffffffffffffffffffff167f3c3102d48c6d31b1a70ddf8b23d300c759379d6506f2ef221cf3056d7c54dca761113a565b6040517f720354530000000000000000000000000000000000000000000000000000000081526004810185905290915060009073ffffffffffffffffffffffffffffffffffffffff831690637203545390602401602060405180830381865afa158015611386573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113aa91906126cf565b60008054919250906113f29073ffffffffffffffffffffffffffffffffffffffff167fdc602e66a6d8c84d0c8d6c4292d80341393a1e04ff02909a12718a4216d3a9f761113a565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160a060405180830381865afa15801561143c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061146091906126f2565b6040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810187905290915060009073ffffffffffffffffffffffffffffffffffffffff861690630ff4c916906024016040805180830381865afa1580156114d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114f4919061277c565b6020830151815191925060009161150b90426127d7565b61151591906127f8565b826020015161152491906125b8565b905063ffffffff841667ffffffffffffffff82161115611547575063ffffffff83165b8767ffffffffffffffff168167ffffffffffffffff1610156115c5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f6c61636b206f6620616374696f6e20706f696e747300000000000000000000006044820152606401610406565b6115cf88826127d7565b60408051808201825267ffffffffffffffff42811682528316602082015290517f4e6641a900000000000000000000000000000000000000000000000000000000815291925073ffffffffffffffffffffffffffffffffffffffff881691634e6641a991611642918b91906004016125e4565b600060405180830381600087803b15801561165c57600080fd5b505af1158015611670573d6000803e3d6000fd5b505050505050505050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051611082928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516101c0810167ffffffffffffffff8111828210171561178557611785611732565b60405290565b6040516060810167ffffffffffffffff8111828210171561178557611785611732565b604051610120810167ffffffffffffffff8111828210171561178557611785611732565b604051610100810167ffffffffffffffff8111828210171561178557611785611732565b6040805190810167ffffffffffffffff8111828210171561178557611785611732565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561186057611860611732565b604052919050565b600067ffffffffffffffff82111561188257611882611732565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b6000602082840312156118c057600080fd5b813567ffffffffffffffff8111156118d757600080fd5b8201601f810184136118e857600080fd5b80356118fb6118f682611868565b611819565b81815285602083850101111561191057600080fd5b81602084016020830137600091810160200191909152949350505050565b60005b83811015611949578181015183820152602001611931565b83811115611958576000848401525b50505050565b6000815180845261197681602086016020860161192e565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006100f2602083018461195e565b600067ffffffffffffffff8211156119d5576119d5611732565b5060051b60200190565b600082601f8301126119f057600080fd5b6119f86117f6565b806040840185811115611a0a57600080fd5b845b81811015611a24578035845260209384019301611a0c565b509095945050505050565b600082601f830112611a4057600080fd5b611a486117f6565b806080840185811115611a5a57600080fd5b845b81811015611a2457611a6e87826119df565b8452602090930192604001611a5c565b600082601f830112611a8f57600080fd5b81356020611a9f6118f6836119bb565b8281526102609283028501820192828201919087851115611abf57600080fd5b8387015b85811015611b935781818a031215611adb5760008081fd5b611ae3611761565b81358152858201358682015260408083013590820152606080830135908201526080808301359082015260a0808301359082015260c0808301359082015260e08083013590820152610100808301359082015261012080830135908201526101408083013590820152610160611b5b8b8285016119df565b908201526101a0611b6e8b848301611a2f565b610180830152611b828b61022085016119df565b908201528452928401928101611ac3565b5090979650505050505050565b600060208284031215611bb257600080fd5b813567ffffffffffffffff80821115611bca57600080fd5b9083019060608286031215611bde57600080fd5b611be661178b565b82358152602083013582811115611bfc57600080fd5b611c0887828601611a7e565b602083015250604083013582811115611c2057600080fd5b611c2c87828601611a7e565b60408301525095945050505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461108257600080fd5b600060208284031215611c6f57600080fd5b81356100f281611c3b565b600082601f830112611c8b57600080fd5b611c936117f6565b806040840185811115611ca557600080fd5b845b81811015611a24578051845260209384019301611ca7565b600082601f830112611cd057600080fd5b611cd86117f6565b806080840185811115611cea57600080fd5b845b81811015611a2457611cfe8782611c7a565b8452602090930192604001611cec565b600082601f830112611d1f57600080fd5b81516020611d2f6118f6836119bb565b8281526102609283028501820192828201919087851115611d4f57600080fd5b8387015b85811015611b935781818a031215611d6b5760008081fd5b611d73611761565b81518152858201518682015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160611deb8b828501611c7a565b908201526101a0611dfe8b848301611cbf565b610180830152611e128b6102208501611c7a565b908201528452928401928101611d53565b600060208284031215611e3557600080fd5b815167ffffffffffffffff80821115611e4d57600080fd5b9083019060608286031215611e6157600080fd5b611e6961178b565b82518152602083015182811115611e7f57600080fd5b611e8b87828601611d0e565b602083015250604083015182811115611ea357600080fd5b611c2c87828601611d0e565b600060208284031215611ec157600080fd5b815180151581146100f257600080fd5b600060208284031215611ee357600080fd5b5051919050565b6000611ef86118f684611868565b9050828152838383011115611f0c57600080fd5b6100f283602083018461192e565b600082601f830112611f2b57600080fd5b6100f283835160208501611eea565b805160ff81168114611f4b57600080fd5b919050565b805167ffffffffffffffff81168114611f4b57600080fd5b805163ffffffff81168114611f4b57600080fd5b600060208284031215611f8e57600080fd5b815167ffffffffffffffff80821115611fa657600080fd5b908301906101208286031215611fbb57600080fd5b611fc36117ae565b825182811115611fd257600080fd5b611fde87828601611f1a565b825250602083015182811115611ff357600080fd5b611fff87828601611f1a565b60208301525061201160408401611f3a565b604082015261202260608401611f3a565b606082015261203360808401611f50565b608082015261204460a08401611f50565b60a082015261205560c08401611f68565b60c082015261206660e08401611f50565b60e0820152610100915061207b828401611f50565b91810191909152949350505050565b60006020828403121561209c57600080fd5b6100f282611f68565b6000606082840312156120b757600080fd5b6040516060810181811067ffffffffffffffff821117156120da576120da611732565b604052825181526120ed60208401611f68565b60208201526120fe60408401611f68565b60408201529392505050565b60006020828403121561211c57600080fd5b81516100f281611c3b565b60006020828403121561213957600080fd5b815167ffffffffffffffff8082111561215157600080fd5b90830190610100828603121561216657600080fd5b61216e6117d2565b8251815260208301518281111561218457600080fd5b61219087828601611f1a565b6020830152506040830151828111156121a857600080fd5b6121b487828601611f1a565b6040830152506121c660608401611f68565b60608201526121d760808401611f50565b60808201526121e860a08401611f3a565b60a08201526121f960c08401611f3a565b60c082015261220a60e08401611f50565b60e082015295945050505050565b8060005b600281101561195857815184526020938401939091019060010161221c565b8060005b600281101561195857612253848351612218565b604093909301926020919091019060010161223f565b600081518084526020808501945080840160005b8381101561234457815180518852838101518489015260408082015190890152606080820151908901526080808201519089015260a0808201519089015260c0808201519089015260e0808201519089015261010080820151908901526101208082015190890152610140808201519089015261016080820151612303828b0182612218565b50506101808101516101a061231a818b018361223b565b9190910151905061232f610220890182612218565b5061026096909601959082019060010161227d565b509495945050505050565b60208152815160208201526000602083015161236f604084018215159052565b50604083015160608301526060830151608083015260808301516101208060a08501526123a0610140850183612269565b915060a08501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160c08601526123db8382612269565b92505060c08501516123f560e086018263ffffffff169052565b5060e085015161010061240f8187018363ffffffff169052565b90950151151593019290925250919050565b60006020828403121561243357600080fd5b815167ffffffffffffffff81111561244a57600080fd5b8201601f8101841361245b57600080fd5b61127e84825160208401611eea565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600063ffffffff838116908316818110156124b6576124b661246a565b039392505050565b82815260406020820152600082516101208060408501526124e361016085018361195e565b915060208501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc085840301606086015261251e838261195e565b9250506040850151612535608086018260ff169052565b50606085015160ff811660a086015250608085015167ffffffffffffffff811660c08601525060a085015167ffffffffffffffff811660e08601525060c085015161010061258a8187018363ffffffff169052565b60e087015167ffffffffffffffff908116938701939093528601519182166101408601525050949350505050565b600067ffffffffffffffff8083168185168083038211156125db576125db61246a565b01949350505050565b828152606081016100f26020830184805167ffffffffffffffff908116835260209182015116910152565b6000602080838503121561262257600080fd5b825167ffffffffffffffff81111561263957600080fd5b8301601f8101851361264a57600080fd5b80516126586118f6826119bb565b81815260059190911b8201830190838101908783111561267757600080fd5b928401925b828410156126955783518252928401929084019061267c565b979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000602082840312156126e157600080fd5b81518060030b81146100f257600080fd5b600060a0828403121561270457600080fd5b60405160a0810181811067ffffffffffffffff8211171561272757612727611732565b60405261273383611f50565b815261274160208401611f50565b602082015261275260408401611f50565b604082015261276360608401611f50565b6060820152608083015160808201528091505092915050565b60006040828403121561278e57600080fd5b6040516040810181811067ffffffffffffffff821117156127b1576127b1611732565b6040526127bd83611f50565b81526127cb60208401611f50565b60208201529392505050565b600067ffffffffffffffff838116908316818110156124b6576124b661246a565b600067ffffffffffffffff8084168061283a577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b9216919091049291505056fea26469706673582212201976acb0a32e948dfa4d8e8fdb27c3f30a1063eb3101467a02d6fa5fb5ef9a9864736f6c634300080d0033";

type ReleaseLinearTreasureSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReleaseLinearTreasureSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ReleaseLinearTreasureSystem__factory extends ContractFactory {
  constructor(...args: ReleaseLinearTreasureSystemConstructorParams) {
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
  ): Promise<ReleaseLinearTreasureSystem> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<ReleaseLinearTreasureSystem>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): ReleaseLinearTreasureSystem {
    return super.attach(address) as ReleaseLinearTreasureSystem;
  }
  override connect(signer: Signer): ReleaseLinearTreasureSystem__factory {
    return super.connect(signer) as ReleaseLinearTreasureSystem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReleaseLinearTreasureSystemInterface {
    return new utils.Interface(_abi) as ReleaseLinearTreasureSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReleaseLinearTreasureSystem {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ReleaseLinearTreasureSystem;
  }
}
