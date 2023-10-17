/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  HPLimitComponent,
  HPLimitComponentInterface,
} from "../HPLimitComponent";

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
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
    ],
    name: "getBuffValue",
    outputs: [
      {
        internalType: "int32",
        name: "",
        type: "int32",
      },
    ],
    stateMutability: "view",
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
        internalType: "bytes",
        name: "",
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
        internalType: "int32",
        name: "",
        type: "int32",
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
        name: "",
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
        internalType: "int32",
        name: "value",
        type: "int32",
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
  "0x60806040523480156200001157600080fd5b5060405162001dd438038062001dd4833981016040819052620000349162000343565b807f0f2f1f89defcb2e35e7a49b75f5a0777c977a6210b31a42137e9620ef524f0dc81816200006333620001b4565b60028190556001600160a01b038216156200008357620000838262000228565b5050600580546001600160a01b0319166001600160a01b03841690811790915560408051632e98bef960e21b8152905163ba62fbe4916004808201926020929091908290030181865afa158015620000df573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000105919062000343565b600380546001600160a01b0319166001600160a01b03928316179055600554604080516306ac999760e11b815290519190921691630d59332e9160048083019260209291908290030181865afa15801562000164573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200018a919062000343565b600480546001600160a01b0319166001600160a01b0392909216919091179055506200036a915050565b6000620001cb620002e060201b62000a791760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b6200023262000304565b6001600160a01b0316336001600160a01b0316146200026457604051632f7a8ee160e01b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117909155600254604051630f30347760e41b8152306004820152602481019190915263f303477090604401600060405180830381600087803b158015620002c457600080fd5b505af1158015620002d9573d6000803e3d6000fd5b5050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b60006200031b620002e060201b62000a791760201c565b546001600160a01b0316919050565b6001600160a01b03811681146200034057600080fd5b50565b6000602082840312156200035657600080fd5b815162000363816200032a565b9392505050565b611a5a806200037a6000396000f3fe608060405234801561001057600080fd5b50600436106101515760003560e01c80638b282947116100cd578063b8bc073d11610081578063cccf7a8e11610066578063cccf7a8e146102ed578063d93c413f14610300578063f2fde38b1461031357600080fd5b8063b8bc073d146102ba578063bf4fe57e146102da57600080fd5b80639d2c76b4116100b25780639d2c76b41461027d578063af640d0f14610290578063b361be46146102a757600080fd5b80638b282947146102625780638da5cb5b1461027557600080fd5b80634fef6a38116101245780637203545311610109578063720354531461021957806375c0669c1461022c578063861eb9051461023f57600080fd5b80634fef6a38146101f05780636b122fe01461020357600080fd5b80630ff4c9161461015657806330b67baa1461018157806331b933b9146101c65780634cc82215146101db575b600080fd5b6101696101643660046111e7565b610326565b60405160039190910b81526020015b60405180910390f35b6000546101a19073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610178565b6101ce61034c565b6040516101789190611200565b6101ee6101e93660046111e7565b610380565b005b6101ee6101fe366004611244565b6103cb565b61020b6104a9565b604051610178929190611323565b6101696102273660046111e7565b610595565b6101ee61023a366004611244565b6105c0565b61025261024d366004611244565b6105f2565b6040519015158152602001610178565b6101ee610270366004611557565b61067d565b6101a16106ca565b6101ee61028b366004611244565b61070f565b61029960025481565b604051908152602001610178565b6101ce6102b536600461159e565b61034c565b6102cd6102c83660046111e7565b610838565b60405161017891906115d3565b6101ee6102e8366004611244565b6108da565b6102526102fb3660046111e7565b6109b5565b6101ee61030e3660046115f5565b6109d7565b6101ee610321366004611244565b610a00565b60008061033283610838565b8060200190518101906103459190611625565b9392505050565b60606040517f17d5b8e800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610389336105f2565b6103bf576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103c881610a9d565b50565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff16331461043b576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b604080516001808252818301909252606091829190816020015b60608152602001906001900390816104c3575050604080516001808252818301909252919350602080830190803683370190505090506040518060400160405280600581526020017f76616c75650000000000000000000000000000000000000000000000000000008152508260008151811061054257610542611642565b602002602001018190525060038160008151811061056257610562611642565b6020026020010190602181111561057b5761057b6112f4565b9081602181111561058e5761058e6112f4565b9052509091565b6000806105a183610838565b8060200190518101906105b49190611625565b90506103458382610b0b565b6040517f17d5b8e800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c909602052604081205460ff168061067757506106486106ca565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b92915050565b610686336105f2565b6106bc576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106c68282610d7e565b5050565b600061070a7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff16331461077f576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556002546040517ff3034770000000000000000000000000000000000000000000000000000000008152306004820152602481019190915263f3034770906044015b600060405180830381600087803b15801561081d57600080fd5b505af1158015610831573d6000803e3d6000fd5b5050505050565b600081815260016020526040902080546060919061085590611671565b80601f016020809104026020016040519081016040528092919081815260200182805461088190611671565b80156108ce5780601f106108a3576101008083540402835291602001916108ce565b820191906000526020600020905b8154815290600101906020018083116108b157829003601f168201915b50505050509050919050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff16331461094a576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b600081815260016020526040812080546109ce90611671565b15159392505050565b60408051600383900b60208201526106c69184910160405160208183030381529060405261067d565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610a70576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103c881610e2c565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6000818152600160205260408120610ab491611114565b6000546040517f0de3b7b50000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff90911690630de3b7b590602401610803565b6003546000908190610b539073ffffffffffffffffffffffffffffffffffffffff167f1f5722521ba251ca87967835668e1714c5eb024990bbd3f5f1dcdc98dc7cbbd0610e35565b90506000610b6085610f85565b905083925060005b8151811015610d75578273ffffffffffffffffffffffffffffffffffffffff1663cccf7a8e838381518110610b9f57610b9f611642565b60200260200101516040518263ffffffff1660e01b8152600401610bc591815260200190565b602060405180830381865afa158015610be2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c0691906116d9565b15610d635760008373ffffffffffffffffffffffffffffffffffffffff16630ff4c916848481518110610c3b57610c3b611642565b60200260200101516040518263ffffffff1660e01b8152600401610c6191815260200190565b600060405180830381865afa158015610c7e573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610cc49190810190611765565b90508060e0015167ffffffffffffffff1660001480610cfb57504267ffffffffffffffff168160e0015167ffffffffffffffff1610155b8015610d2a575060808101517f0f2f1f89defcb2e35e7a49b75f5a0777c977a6210b31a42137e9620ef524f0dc145b15610d61578060a0015115610d4f5760c0810151610d489086611864565b9450610d61565b60c0810151610d5e90866118c8565b94505b505b80610d6d8161192d565b915050610b68565b50505092915050565b60008281526001602090815260409091208251610d9d9284019061114e565b506000546040517fcfd3c57f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169063cfd3c57f90610df69085908590600401611965565b600060405180830381600087803b158015610e1057600080fd5b505af1158015610e24573d6000803e3d6000fd5b505050505050565b6103c881611068565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015610ea5573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610eeb919081019061197e565b90508051600003610f5c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f742072656769737465726564000000000000000000000000000000604482015260640160405180910390fd5b610f7d81600081518110610f7257610f72611642565b602002602001015190565b949350505050565b600354606090610fcb9073ffffffffffffffffffffffffffffffffffffffff167f2d1944d7c92d4cf7892c9f8d3312e879c70e4e7904208d77f458b7bf7c952e19610e35565b73ffffffffffffffffffffffffffffffffffffffff1663fbdfa1ea836040518263ffffffff1660e01b815260040161100591815260200190565b600060405180830381865afa158015611022573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610677919081019061197e565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460805460405173ffffffffffffffffffffffffffffffffffffffff8481169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b50805461112090611671565b6000825580601f10611130575050565b601f0160209004906000526020600020908101906103c891906111d2565b82805461115a90611671565b90600052602060002090601f01602090048101928261117c57600085556111c2565b82601f1061119557805160ff19168380011785556111c2565b828001600101855582156111c2579182015b828111156111c25782518255916020019190600101906111a7565b506111ce9291506111d2565b5090565b5b808211156111ce57600081556001016111d3565b6000602082840312156111f957600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b818110156112385783518352928401929184019160010161121c565b50909695505050505050565b60006020828403121561125657600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461034557600080fd5b60005b8381101561129557818101518382015260200161127d565b838111156112a4576000848401525b50505050565b600081518084526112c281602086016020860161127a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6000604082016040835280855180835260608501915060608160051b8601019250602080880160005b83811015611398577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa08887030185526113868683516112aa565b9550938201939082019060010161134c565b50508584038187015286518085528782019482019350915060005b82811015611406578451602281106113f4577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b845293810193928101926001016113b3565b5091979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610100810167ffffffffffffffff8111828210171561146657611466611413565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156114b3576114b3611413565b604052919050565b600067ffffffffffffffff8211156114d5576114d5611413565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261151257600080fd5b8135611525611520826114bb565b61146c565b81815284602083860101111561153a57600080fd5b816020850160208301376000918101602001919091529392505050565b6000806040838503121561156a57600080fd5b82359150602083013567ffffffffffffffff81111561158857600080fd5b61159485828601611501565b9150509250929050565b6000602082840312156115b057600080fd5b813567ffffffffffffffff8111156115c757600080fd5b610f7d84828501611501565b60208152600061034560208301846112aa565b8060030b81146103c857600080fd5b6000806040838503121561160857600080fd5b82359150602083013561161a816115e6565b809150509250929050565b60006020828403121561163757600080fd5b8151610345816115e6565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600181811c9082168061168557607f821691505b6020821081036116be577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b805180151581146116d457600080fd5b919050565b6000602082840312156116eb57600080fd5b610345826116c4565b805163ffffffff811681146116d457600080fd5b600082601f83011261171957600080fd5b8151611727611520826114bb565b81815284602083860101111561173c57600080fd5b610f7d82602083016020870161127a565b805167ffffffffffffffff811681146116d457600080fd5b60006020828403121561177757600080fd5b815167ffffffffffffffff8082111561178f57600080fd5b9083019061010082860312156117a457600080fd5b6117ac611442565b825181526117bc602084016116f4565b60208201526040830151828111156117d357600080fd5b6117df87828601611708565b604083015250606083015160608201526080830151608082015261180560a084016116c4565b60a082015261181660c0840161174d565b60c082015261182760e0840161174d565b60e082015295945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160030b8360030b6000821282637fffffff0382138115161561188b5761188b611835565b827fffffffffffffffffffffffffffffffffffffffffffffffffffffffff800000000382128116156118bf576118bf611835565b50019392505050565b60008160030b8360030b60008112817fffffffffffffffffffffffffffffffffffffffffffffffffffffffff800000000183128115161561190b5761190b611835565b81637fffffff01831381161561192357611923611835565b5090039392505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361195e5761195e611835565b5060010190565b828152604060208201526000610f7d60408301846112aa565b6000602080838503121561199157600080fd5b825167ffffffffffffffff808211156119a957600080fd5b818501915085601f8301126119bd57600080fd5b8151818111156119cf576119cf611413565b8060051b91506119e084830161146c565b81815291830184019184810190888411156119fa57600080fd5b938501935b83851015611a18578451825293850193908501906119ff565b9897505050505050505056fea264697066735822122086308ca28cf707250a816241c397621a9237fe8a8952c0c52f858ba0870c321764736f6c634300080d0033";

type HPLimitComponentConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HPLimitComponentConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HPLimitComponent__factory extends ContractFactory {
  constructor(...args: HPLimitComponentConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    world: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<HPLimitComponent> {
    return super.deploy(world, overrides || {}) as Promise<HPLimitComponent>;
  }
  override getDeployTransaction(
    world: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(world, overrides || {});
  }
  override attach(address: string): HPLimitComponent {
    return super.attach(address) as HPLimitComponent;
  }
  override connect(signer: Signer): HPLimitComponent__factory {
    return super.connect(signer) as HPLimitComponent__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HPLimitComponentInterface {
    return new utils.Interface(_abi) as HPLimitComponentInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HPLimitComponent {
    return new Contract(address, _abi, signerOrProvider) as HPLimitComponent;
  }
}
