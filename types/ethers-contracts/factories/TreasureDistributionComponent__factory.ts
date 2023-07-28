/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  TreasureDistributionComponent,
  TreasureDistributionComponentInterface,
} from "../TreasureDistributionComponent";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "world",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "BareComponent__NotImplemented",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnableWritable__NotWriter",
    type: "error",
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
        internalType: "address",
        name: "writer",
        type: "address",
      },
    ],
    name: "authorizeWriter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getEntities",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "value",
        type: "uint32",
      },
    ],
    name: "getEntitiesWithValue",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "value",
        type: "bytes",
      },
    ],
    name: "getEntitiesWithValue",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
    ],
    name: "getRawValue",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSchema",
    outputs: [
      {
        internalType: "string[]",
        name: "keys",
        type: "string[]",
      },
      {
        internalType: "enum LibTypes.SchemaValue[]",
        name: "values",
        type: "uint8[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
    ],
    name: "getValue",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getValue",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
    ],
    name: "has",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "id",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
        name: "indexer",
        type: "address",
      },
    ],
    name: "registerIndexer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_world",
        type: "address",
      },
    ],
    name: "registerWorld",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
    ],
    name: "remove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "value",
        type: "uint32",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "value",
        type: "bytes",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "value",
        type: "uint32",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "writer",
        type: "address",
      },
    ],
    name: "unauthorizeWriter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "world",
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
        name: "operator",
        type: "address",
      },
    ],
    name: "writeAccess",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200304d3803806200304d8339810160408190526200003491620002b9565b807f6ff1af157fa1e1b9d39dd94ba1bb33ea6a1a0d2f214bb2c71eb60cc093c06fc38181620000633362000127565b60028190556001600160a01b03821615620000835762000083826200019b565b505060405162000093906200029d565b604051809103906000f080158015620000b0573d6000803e3d6000fd5b50600380546001600160a01b0319166001600160a01b0392909216919091179055604051620000df90620002ab565b604051809103906000f080158015620000fc573d6000803e3d6000fd5b50600480546001600160a01b0319166001600160a01b039290921691909117905550620002eb915050565b60006200013e6200025360201b62000d391760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b620001a562000277565b6001600160a01b0316336001600160a01b031614620001d757604051632f7a8ee160e01b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117909155600254604051630f30347760e41b8152306004820152602481019190915263f303477090604401600060405180830381600087803b1580156200023757600080fd5b505af11580156200024c573d6000803e3d6000fd5b5050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b60006200028e6200025360201b62000d391760201c565b546001600160a01b0316919050565b61084a8062001f7183390190565b61089280620027bb83390190565b600060208284031215620002cc57600080fd5b81516001600160a01b0381168114620002e457600080fd5b9392505050565b611c7680620002fb6000396000f3fe608060405234801561001057600080fd5b50600436106101775760003560e01c8063861eb905116100d8578063b361be461161008c578063cccf7a8e11610066578063cccf7a8e14610330578063d923c3c414610343578063f2fde38b1461035657600080fd5b8063b361be46146102ea578063b8bc073d146102fd578063bf4fe57e1461031d57600080fd5b80638da5cb5b116100bd5780638da5cb5b146102b85780639d2c76b4146102c0578063af640d0f146102d357600080fd5b8063861eb905146102825780638b282947146102a557600080fd5b80634cc822151161012f57806358e3ca1c1161011457806358e3ca1c146102465780636b122fe01461025957806375c0669c1461026f57600080fd5b80634cc822151461021e5780634fef6a381461023357600080fd5b806330b67baa1161016057806330b67baa146101b157806331b933b9146101f6578063447e2bd21461020b57600080fd5b80630ff4c9161461017c57806320965255146101a9575b600080fd5b61018f61018a366004611557565b610369565b60405163ffffffff90911681526020015b60405180910390f35b61018f61038f565b6000546101d19073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101a0565b6101fe6103b6565b6040516101a09190611570565b6101fe6102193660046115c6565b610471565b61023161022c366004611557565b61049d565b005b6102316102413660046115e3565b6104e8565b6102316102543660046115c6565b6105c6565b6102616105f4565b6040516101a09291906116b3565b61023161027d3660046115e3565b6106e0565b6102956102903660046115e3565b610796565b60405190151581526020016101a0565b6102316102b33660046118af565b610820565b6101d161086d565b6102316102ce3660046115e3565b6108ad565b6102dc60025481565b6040519081526020016101a0565b6101fe6102f83660046118f6565b6109d6565b61031061030b366004611557565b610a93565b6040516101a09190611933565b61023161032b3660046115e3565b610b35565b61029561033e366004611557565b610c10565b610231610351366004611946565b610ca4565b6102316103643660046115e3565b610cc0565b60008061037583610a93565b8060200190518101906103889190611976565b9392505050565b60008061039d61060d610a93565b8060200190518101906103b09190611976565b92915050565b600354604080517f410d59cc000000000000000000000000000000000000000000000000000000008152905160609273ffffffffffffffffffffffffffffffffffffffff169163410d59cc9160048083019260009291908290030181865afa158015610426573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261046c9190810190611993565b905090565b6040805163ffffffff831660208201526060916103b091016040516020818303038152906040526109d6565b6104a633610796565b6104dc576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104e581610d5d565b50565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610558576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b6040805163ffffffff831660208201526104e59161060d91015b604051602081830303815290604052610820565b604080516001808252818301909252606091829190816020015b606081526020019060019003908161060e575050604080516001808252818301909252919350602080830190803683370190505090506040518060400160405280600581526020017f76616c75650000000000000000000000000000000000000000000000000000008152508260008151811061068d5761068d611a39565b6020026020010181905250600a816000815181106106ad576106ad611a39565b602002602001019060218111156106c6576106c6611684565b908160218111156106d9576106d9611684565b9052509091565b6106e933610796565b61071f576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600580546001810182556000919091527f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db00180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b73ffffffffffffffffffffffffffffffffffffffff811660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c909602052604081205460ff16806103b057506107ec61086d565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161492915050565b61082933610796565b61085f576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610869828261101c565b5050565b600061046c7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff16331461091d576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556002546040517ff3034770000000000000000000000000000000000000000000000000000000008152306004820152602481019190915263f3034770906044015b600060405180830381600087803b1580156109bb57600080fd5b505af11580156109cf573d6000803e3d6000fd5b5050505050565b60048054825160208401206040517f796c5e940000000000000000000000000000000000000000000000000000000081529283015260609173ffffffffffffffffffffffffffffffffffffffff9091169063796c5e9490602401600060405180830381865afa158015610a4d573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526103b09190810190611993565b6000818152600160205260409020805460609190610ab090611a68565b80601f0160208091040260200160405190810160405280929190818152602001828054610adc90611a68565b8015610b295780601f10610afe57610100808354040283529160200191610b29565b820191906000526020600020905b815481529060010190602001808311610b0c57829003601f168201915b50505050509050919050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610ba5576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b6003546040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810183905260009173ffffffffffffffffffffffffffffffffffffffff169063cccf7a8e90602401602060405180830381865afa158015610c80573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103b09190611abb565b6040805163ffffffff83166020820152610869918491016105e0565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610d30576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104e5816112b3565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b60045460008281526001602052604090819020905173ffffffffffffffffffffffffffffffffffffffff909216916385edea1391610d9a91611add565b60405190819003812060e083901b7fffffffff000000000000000000000000000000000000000000000000000000001682526004820152602401602060405180830381865afa158015610df1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e159190611baf565b600003610e1f5750565b60045460008281526001602052604090819020905173ffffffffffffffffffffffffffffffffffffffff90921691636526db7a91610e5c91611add565b60405190819003812060e083901b7fffffffff00000000000000000000000000000000000000000000000000000000168252600482015260248101849052604401600060405180830381600087803b158015610eb757600080fd5b505af1158015610ecb573d6000803e3d6000fd5b50506003546040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810185905273ffffffffffffffffffffffffffffffffffffffff9091169250634cc822159150602401600060405180830381600087803b158015610f3b57600080fd5b505af1158015610f4f573d6000803e3d6000fd5b50505050610f5c816112bc565b60005b6005548110156108695760058181548110610f7c57610f7c611a39565b6000918252602090912001546040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810184905273ffffffffffffffffffffffffffffffffffffffff90911690634cc8221590602401600060405180830381600087803b158015610ff157600080fd5b505af1158015611005573d6000803e3d6000fd5b50505050808061101490611bc8565b915050610f5f565b6003546040517f1003e2d20000000000000000000000000000000000000000000000000000000081526004810184905273ffffffffffffffffffffffffffffffffffffffff90911690631003e2d290602401600060405180830381600087803b15801561108857600080fd5b505af115801561109c573d6000803e3d6000fd5b505060045460008581526001602052604090819020905173ffffffffffffffffffffffffffffffffffffffff9092169350636526db7a92506110dd91611add565b60405190819003812060e083901b7fffffffff00000000000000000000000000000000000000000000000000000000168252600482015260248101859052604401600060405180830381600087803b15801561113857600080fd5b505af115801561114c573d6000803e3d6000fd5b505060048054845160208601206040517f771602f7000000000000000000000000000000000000000000000000000000008152928301526024820186905273ffffffffffffffffffffffffffffffffffffffff16925063771602f79150604401600060405180830381600087803b1580156111c657600080fd5b505af11580156111da573d6000803e3d6000fd5b505050506111e8828261132a565b60005b6005548110156112ae576005818154811061120857611208611a39565b6000918252602090912001546040517f0216b83800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff90911690630216b838906112699086908690600401611c27565b600060405180830381600087803b15801561128357600080fd5b505af1158015611297573d6000803e3d6000fd5b5050505080806112a690611bc8565b9150506111eb565b505050565b6104e5816113d8565b60008181526001602052604081206112d391611484565b6000546040517f0de3b7b50000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff90911690630de3b7b5906024016109a1565b60008281526001602090815260409091208251611349928401906114be565b506000546040517fcfd3c57f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169063cfd3c57f906113a29085908590600401611c27565b600060405180830381600087803b1580156113bc57600080fd5b505af11580156113d0573d6000803e3d6000fd5b505050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460805460405173ffffffffffffffffffffffffffffffffffffffff8481169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b50805461149090611a68565b6000825580601f106114a0575050565b601f0160209004906000526020600020908101906104e59190611542565b8280546114ca90611a68565b90600052602060002090601f0160209004810192826114ec5760008555611532565b82601f1061150557805160ff1916838001178555611532565b82800160010185558215611532579182015b82811115611532578251825591602001919060010190611517565b5061153e929150611542565b5090565b5b8082111561153e5760008155600101611543565b60006020828403121561156957600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b818110156115a85783518352928401929184019160010161158c565b50909695505050505050565b63ffffffff811681146104e557600080fd5b6000602082840312156115d857600080fd5b8135610388816115b4565b6000602082840312156115f557600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461038857600080fd5b6000815180845260005b8181101561163f57602081850181015186830182015201611623565b81811115611651576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6000604082016040835280855180835260608501915060608160051b8601019250602080880160005b83811015611728577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa0888703018552611716868351611619565b955093820193908201906001016116dc565b50508584038187015286518085528782019482019350915060005b8281101561179657845160228110611784577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b84529381019392810192600101611743565b5091979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611819576118196117a3565b604052919050565b600082601f83011261183257600080fd5b813567ffffffffffffffff81111561184c5761184c6117a3565b61187d60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116016117d2565b81815284602083860101111561189257600080fd5b816020850160208301376000918101602001919091529392505050565b600080604083850312156118c257600080fd5b82359150602083013567ffffffffffffffff8111156118e057600080fd5b6118ec85828601611821565b9150509250929050565b60006020828403121561190857600080fd5b813567ffffffffffffffff81111561191f57600080fd5b61192b84828501611821565b949350505050565b6020815260006103886020830184611619565b6000806040838503121561195957600080fd5b82359150602083013561196b816115b4565b809150509250929050565b60006020828403121561198857600080fd5b8151610388816115b4565b600060208083850312156119a657600080fd5b825167ffffffffffffffff808211156119be57600080fd5b818501915085601f8301126119d257600080fd5b8151818111156119e4576119e46117a3565b8060051b91506119f58483016117d2565b8181529183018401918481019088841115611a0f57600080fd5b938501935b83851015611a2d57845182529385019390850190611a14565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600181811c90821680611a7c57607f821691505b602082108103611ab5577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b600060208284031215611acd57600080fd5b8151801515811461038857600080fd5b600080835481600182811c915080831680611af957607f831692505b60208084108203611b31577f4e487b710000000000000000000000000000000000000000000000000000000086526022600452602486fd5b818015611b455760018114611b7457611ba1565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00861689528489019650611ba1565b60008a81526020902060005b86811015611b995781548b820152908501908301611b80565b505084890196505b509498975050505050505050565b600060208284031215611bc157600080fd5b5051919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611c20577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b82815260406020820152600061192b604083018461161956fea2646970667358221220ed7642a80636258dd2f45a87d789e5d118a87d5281f3b93c1943299e87d0b7dc64736f6c634300080d0033608060405234801561001057600080fd5b5061001a3361001f565b6100b4565b600061003361009060201b6105431760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b610787806100c36000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638e7cb6e11161005b5780638e7cb6e114610100578063949d225d1461012a578063cccf7a8e1461013b578063f2fde38b1461015e57600080fd5b80631003e2d21461008d578063410d59cc146100a25780634cc82215146100c05780638da5cb5b146100d3575b600080fd5b6100a061009b36600461061b565b610171565b005b6100aa610233565b6040516100b79190610634565b60405180910390f35b6100a06100ce36600461061b565b61028b565b6100db6103ef565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100b7565b61011361010e36600461061b565b610434565b6040805192151583526020830191909152016100b7565b6000546040519081526020016100b7565b61014e61014936600461061b565b610467565b60405190151581526020016100b7565b6100a061016c366004610678565b6104ca565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146101e1576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6101ea81610467565b61023057600080548282526001602081905260408320829055810182559080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563018190555b50565b6060600080548060200260200160405190810160405280929190818152602001828054801561028157602002820191906000526020600020905b81548152602001906001019080831161026d575b5050505050905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146102fb576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61030481610467565b156102305760008054610319906001906106b5565b81548110610329576103296106f3565b9060005260206000200154600060016000848152602001908152602001600020548154811061035a5761035a6106f3565b60009182526020808320909101929092558281526001918290526040812054815490929190819084908110610391576103916106f3565b9060005260206000200154815260200190815260200160002081905550600160008281526020019081526020016000206000905560008054806103d6576103d6610722565b6001900381819060005260206000200160009055905550565b600061042f7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b60008061044083610467565b61044f57506000928392509050565b50506000908152600160208190526040909120549091565b60008054810361047957506000919050565b60008281526001602052604081205490036104b55781600080815481106104a2576104a26106f3565b9060005260206000200154149050919050565b50600090815260016020526040902054151590565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff16331461053a576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61023081610567565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051610230928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60006020828403121561062d57600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b8181101561066c57835183529284019291840191600101610650565b50909695505050505050565b60006020828403121561068a57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146106ae57600080fd5b9392505050565b6000828210156106ee577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea26469706673582212208dbee2f0691d56b4dcad6be5af65002218036d1a2effde83ccb695d63e4f370264736f6c634300080d0033608060405234801561001057600080fd5b5061001a3361001f565b6100b4565b600061003361009060201b6105691760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6107cf806100c36000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806385edea131161005b57806385edea13146100d35780638da5cb5b14610101578063a0265ff81461012e578063f2fde38b1461015157600080fd5b80636526db7a14610082578063771602f714610097578063796c5e94146100aa575b600080fd5b610095610090366004610641565b610164565b005b6100956100a5366004610641565b610301565b6100bd6100b8366004610663565b6103b5565b6040516100ca919061067c565b60405180910390f35b6100f36100e1366004610663565b60009081526020819052604090205490565b6040519081526020016100ca565b610109610415565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100ca565b61014161013c366004610641565b61045a565b60405190151581526020016100ca565b61009561015f3660046106c0565b6104ed565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146101d4576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6101de828261045a565b156102fd57600082815260208190526040902080546101ff906001906106fd565b8154811061020f5761020f61073b565b600091825260208083209091015484835282825260408084206001845281852086865290935290922054815481106102495761024961073b565b6000918252602080832090910192909255838152600182526040808220848352808452818320548684528385529183208584529381905283549193909291849081106102975761029761073b565b600091825260208083209091015483528281019390935260409182018120939093558483526001825280832084845282528083208390558483529082905290208054806102e6576102e661076a565b600190038181906000526020600020016000905590555b5050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610371576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61037b828261045a565b6102fd5760009182526020828152604080842080546001808552838720868852855292862081905585845291820181558452922090910155565b6000818152602081815260409182902080548351818402810184019094528084526060939283018282801561040957602002820191906000526020600020905b8154815260200190600101908083116103f5575b50505050509050919050565b60006104557f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b6000828152602081905260408120548103610477575060006104e7565b600083815260016020908152604080832085845290915281205490036104c957600083815260208190526040812080548492906104b6576104b661073b565b90600052602060002001541490506104e7565b50600082815260016020908152604080832084845290915290205415155b92915050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff16331461055d576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105668161058d565b50565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051610566928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6000806040838503121561065457600080fd5b50508035926020909101359150565b60006020828403121561067557600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b818110156106b457835183529284019291840191600101610698565b50909695505050505050565b6000602082840312156106d257600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146106f657600080fd5b9392505050565b600082821015610736577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea2646970667358221220e80c3f63a406f1176b953ca07e6bf4155cde48ff70d1776c306c2e1c04741bc064736f6c634300080d0033";

type TreasureDistributionComponentConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TreasureDistributionComponentConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TreasureDistributionComponent__factory extends ContractFactory {
  constructor(...args: TreasureDistributionComponentConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    world: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TreasureDistributionComponent> {
    return super.deploy(
      world,
      overrides || {}
    ) as Promise<TreasureDistributionComponent>;
  }
  override getDeployTransaction(
    world: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(world, overrides || {});
  }
  override attach(address: string): TreasureDistributionComponent {
    return super.attach(address) as TreasureDistributionComponent;
  }
  override connect(signer: Signer): TreasureDistributionComponent__factory {
    return super.connect(signer) as TreasureDistributionComponent__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TreasureDistributionComponentInterface {
    return new utils.Interface(_abi) as TreasureDistributionComponentInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TreasureDistributionComponent {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TreasureDistributionComponent;
  }
}
