/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  MonsterTypeComponent,
  MonsterTypeComponentInterface,
} from "../MonsterTypeComponent";

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
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
    ],
    name: "getValueTyped",
    outputs: [
      {
        internalType: "enum MonsterType",
        name: "",
        type: "uint8",
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
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
      {
        internalType: "enum MonsterType",
        name: "value",
        type: "uint8",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200309f3803806200309f8339810160408190526200003491620002bd565b807f7fb82f1e56a904d7470251c6c92a4c9051fc76b75c115a6b20bdeaba7333417a8181818162000065336200012b565b60028190556001600160a01b03821615620000855762000085826200019f565b50506040516200009590620002a1565b604051809103906000f080158015620000b2573d6000803e3d6000fd5b50600380546001600160a01b0319166001600160a01b0392909216919091179055604051620000e190620002af565b604051809103906000f080158015620000fe573d6000803e3d6000fd5b50600480546001600160a01b0319166001600160a01b039290921691909117905550620002ef9350505050565b6000620001426200025760201b62000d451760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b620001a96200027b565b6001600160a01b0316336001600160a01b031614620001db57604051632f7a8ee160e01b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117909155600254604051630f30347760e41b8152306004820152602481019190915263f303477090604401600060405180830381600087803b1580156200023b57600080fd5b505af115801562000250573d6000803e3d6000fd5b5050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6000620002926200025760201b62000d451760201c565b546001600160a01b0316919050565b61084a8062001fc383390190565b610892806200280d83390190565b600060208284031215620002d057600080fd5b81516001600160a01b0381168114620002e857600080fd5b9392505050565b611cc480620002ff6000396000f3fe608060405234801561001057600080fd5b50600436106101775760003560e01c80638d53a172116100d8578063b8bc073d1161008c578063d923c3c411610066578063d923c3c414610348578063f2fde38b1461035b578063f419df721461036e57600080fd5b8063b8bc073d14610302578063bf4fe57e14610322578063cccf7a8e1461033557600080fd5b80639d2c76b4116100bd5780639d2c76b4146102c5578063af640d0f146102d8578063b361be46146102ef57600080fd5b80638d53a1721461029d5780638da5cb5b146102bd57600080fd5b80634fef6a381161012f57806375c0669c1161011457806375c0669c14610254578063861eb905146102675780638b2829471461028a57600080fd5b80634fef6a381461022b5780636b122fe01461023e57600080fd5b806331b933b91161016057806331b933b9146101ee578063447e2bd2146102035780634cc822151461021657600080fd5b80630ff4c9161461017c57806330b67baa146101a9575b600080fd5b61018f61018a366004611563565b610381565b60405163ffffffff90911681526020015b60405180910390f35b6000546101c99073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101a0565b6101f66103a7565b6040516101a0919061157c565b6101f66102113660046115d2565b610462565b610229610224366004611563565b610494565b005b6102296102393660046115ef565b6104df565b6102466105bd565b6040516101a09291906116bf565b6102296102623660046115ef565b6106a9565b61027a6102753660046115ef565b61075f565b60405190151581526020016101a0565b610229610298366004611894565b6107e9565b6102b06102ab366004611563565b610836565b6040516101a091906118db565b6101c9610854565b6102296102d33660046115ef565b610894565b6102e160025481565b6040519081526020016101a0565b6101f66102fd3660046118f5565b6109bd565b610315610310366004611563565b610a7a565b6040516101a09190611932565b6102296103303660046115ef565b610b1c565b61027a610343366004611563565b610bf7565b610229610356366004611945565b610c8b565b6102296103693660046115ef565b610cb7565b61022961037c366004611982565b610d30565b60008061038d83610a7a565b8060200190518101906103a091906119a7565b9392505050565b600354604080517f410d59cc000000000000000000000000000000000000000000000000000000008152905160609273ffffffffffffffffffffffffffffffffffffffff169163410d59cc9160048083019260009291908290030181865afa158015610417573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261045d91908101906119c4565b905090565b6040805163ffffffff8316602082015260609161048e91016040516020818303038152906040526109bd565b92915050565b61049d3361075f565b6104d3576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104dc81610d69565b50565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff16331461054f576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b604080516001808252818301909252606091829190816020015b60608152602001906001900390816105d7575050604080516001808252818301909252919350602080830190803683370190505090506040518060400160405280600581526020017f76616c75650000000000000000000000000000000000000000000000000000008152508260008151811061065657610656611a6a565b6020026020010181905250600a8160008151811061067657610676611a6a565b6020026020010190602181111561068f5761068f611690565b908160218111156106a2576106a2611690565b9052509091565b6106b23361075f565b6106e8576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600580546001810182556000919091527f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db00180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b73ffffffffffffffffffffffffffffffffffffffff811660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c909602052604081205460ff168061048e57506107b5610854565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161492915050565b6107f23361075f565b610828576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6108328282611028565b5050565b600061084182610a7a565b80602001905181019061048e9190611a99565b600061045d7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610904576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556002546040517ff3034770000000000000000000000000000000000000000000000000000000008152306004820152602481019190915263f3034770906044015b600060405180830381600087803b1580156109a257600080fd5b505af11580156109b6573d6000803e3d6000fd5b5050505050565b60048054825160208401206040517f796c5e940000000000000000000000000000000000000000000000000000000081529283015260609173ffffffffffffffffffffffffffffffffffffffff9091169063796c5e9490602401600060405180830381865afa158015610a34573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261048e91908101906119c4565b6000818152600160205260409020805460609190610a9790611ab6565b80601f0160208091040260200160405190810160405280929190818152602001828054610ac390611ab6565b8015610b105780601f10610ae557610100808354040283529160200191610b10565b820191906000526020600020905b815481529060010190602001808311610af357829003601f168201915b50505050509050919050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610b8c576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b6003546040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810183905260009173ffffffffffffffffffffffffffffffffffffffff169063cccf7a8e90602401602060405180830381865afa158015610c67573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061048e9190611b09565b6040805163ffffffff83166020820152610832918491015b6040516020818303038152906040526107e9565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610d27576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104dc816112bf565b6108328282604051602001610ca391906118db565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b60045460008281526001602052604090819020905173ffffffffffffffffffffffffffffffffffffffff909216916385edea1391610da691611b2b565b60405190819003812060e083901b7fffffffff000000000000000000000000000000000000000000000000000000001682526004820152602401602060405180830381865afa158015610dfd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e219190611bfd565b600003610e2b5750565b60045460008281526001602052604090819020905173ffffffffffffffffffffffffffffffffffffffff90921691636526db7a91610e6891611b2b565b60405190819003812060e083901b7fffffffff00000000000000000000000000000000000000000000000000000000168252600482015260248101849052604401600060405180830381600087803b158015610ec357600080fd5b505af1158015610ed7573d6000803e3d6000fd5b50506003546040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810185905273ffffffffffffffffffffffffffffffffffffffff9091169250634cc822159150602401600060405180830381600087803b158015610f4757600080fd5b505af1158015610f5b573d6000803e3d6000fd5b50505050610f68816112c8565b60005b6005548110156108325760058181548110610f8857610f88611a6a565b6000918252602090912001546040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810184905273ffffffffffffffffffffffffffffffffffffffff90911690634cc8221590602401600060405180830381600087803b158015610ffd57600080fd5b505af1158015611011573d6000803e3d6000fd5b50505050808061102090611c16565b915050610f6b565b6003546040517f1003e2d20000000000000000000000000000000000000000000000000000000081526004810184905273ffffffffffffffffffffffffffffffffffffffff90911690631003e2d290602401600060405180830381600087803b15801561109457600080fd5b505af11580156110a8573d6000803e3d6000fd5b505060045460008581526001602052604090819020905173ffffffffffffffffffffffffffffffffffffffff9092169350636526db7a92506110e991611b2b565b60405190819003812060e083901b7fffffffff00000000000000000000000000000000000000000000000000000000168252600482015260248101859052604401600060405180830381600087803b15801561114457600080fd5b505af1158015611158573d6000803e3d6000fd5b505060048054845160208601206040517f771602f7000000000000000000000000000000000000000000000000000000008152928301526024820186905273ffffffffffffffffffffffffffffffffffffffff16925063771602f79150604401600060405180830381600087803b1580156111d257600080fd5b505af11580156111e6573d6000803e3d6000fd5b505050506111f48282611336565b60005b6005548110156112ba576005818154811061121457611214611a6a565b6000918252602090912001546040517f0216b83800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff90911690630216b838906112759086908690600401611c75565b600060405180830381600087803b15801561128f57600080fd5b505af11580156112a3573d6000803e3d6000fd5b5050505080806112b290611c16565b9150506111f7565b505050565b6104dc816113e4565b60008181526001602052604081206112df91611490565b6000546040517f0de3b7b50000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff90911690630de3b7b590602401610988565b60008281526001602090815260409091208251611355928401906114ca565b506000546040517fcfd3c57f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169063cfd3c57f906113ae9085908590600401611c75565b600060405180830381600087803b1580156113c857600080fd5b505af11580156113dc573d6000803e3d6000fd5b505050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460805460405173ffffffffffffffffffffffffffffffffffffffff8481169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b50805461149c90611ab6565b6000825580601f106114ac575050565b601f0160209004906000526020600020908101906104dc919061154e565b8280546114d690611ab6565b90600052602060002090601f0160209004810192826114f8576000855561153e565b82601f1061151157805160ff191683800117855561153e565b8280016001018555821561153e579182015b8281111561153e578251825591602001919060010190611523565b5061154a92915061154e565b5090565b5b8082111561154a576000815560010161154f565b60006020828403121561157557600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b818110156115b457835183529284019291840191600101611598565b50909695505050505050565b63ffffffff811681146104dc57600080fd5b6000602082840312156115e457600080fd5b81356103a0816115c0565b60006020828403121561160157600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146103a057600080fd5b6000815180845260005b8181101561164b5760208185018101518683018201520161162f565b8181111561165d576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6000604082016040835280855180835260608501915060608160051b8601019250602080880160005b83811015611734577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa0888703018552611722868351611625565b955093820193908201906001016116e8565b50508584038187015286518085528782019482019350915060005b8281101561177b5784516022811061176957611769611690565b8452938101939281019260010161174f565b5091979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156117fe576117fe611788565b604052919050565b600082601f83011261181757600080fd5b813567ffffffffffffffff81111561183157611831611788565b61186260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116016117b7565b81815284602083860101111561187757600080fd5b816020850160208301376000918101602001919091529392505050565b600080604083850312156118a757600080fd5b82359150602083013567ffffffffffffffff8111156118c557600080fd5b6118d185828601611806565b9150509250929050565b60208101600483106118ef576118ef611690565b91905290565b60006020828403121561190757600080fd5b813567ffffffffffffffff81111561191e57600080fd5b61192a84828501611806565b949350505050565b6020815260006103a06020830184611625565b6000806040838503121561195857600080fd5b82359150602083013561196a816115c0565b809150509250929050565b600481106104dc57600080fd5b6000806040838503121561199557600080fd5b82359150602083013561196a81611975565b6000602082840312156119b957600080fd5b81516103a0816115c0565b600060208083850312156119d757600080fd5b825167ffffffffffffffff808211156119ef57600080fd5b818501915085601f830112611a0357600080fd5b815181811115611a1557611a15611788565b8060051b9150611a268483016117b7565b8181529183018401918481019088841115611a4057600080fd5b938501935b83851015611a5e57845182529385019390850190611a45565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060208284031215611aab57600080fd5b81516103a081611975565b600181811c90821680611aca57607f821691505b602082108103611b03577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b600060208284031215611b1b57600080fd5b815180151581146103a057600080fd5b600080835481600182811c915080831680611b4757607f831692505b60208084108203611b7f577f4e487b710000000000000000000000000000000000000000000000000000000086526022600452602486fd5b818015611b935760018114611bc257611bef565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00861689528489019650611bef565b60008a81526020902060005b86811015611be75781548b820152908501908301611bce565b505084890196505b509498975050505050505050565b600060208284031215611c0f57600080fd5b5051919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611c6e577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b82815260406020820152600061192a604083018461162556fea2646970667358221220301360760b68b6d65fcd5a735fa2d7789474cf3f1ae58ad3ccf143737cb8298364736f6c634300080d0033608060405234801561001057600080fd5b5061001a3361001f565b6100b4565b600061003361009060201b6105431760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b610787806100c36000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638e7cb6e11161005b5780638e7cb6e114610100578063949d225d1461012a578063cccf7a8e1461013b578063f2fde38b1461015e57600080fd5b80631003e2d21461008d578063410d59cc146100a25780634cc82215146100c05780638da5cb5b146100d3575b600080fd5b6100a061009b36600461061b565b610171565b005b6100aa610233565b6040516100b79190610634565b60405180910390f35b6100a06100ce36600461061b565b61028b565b6100db6103ef565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100b7565b61011361010e36600461061b565b610434565b6040805192151583526020830191909152016100b7565b6000546040519081526020016100b7565b61014e61014936600461061b565b610467565b60405190151581526020016100b7565b6100a061016c366004610678565b6104ca565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146101e1576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6101ea81610467565b61023057600080548282526001602081905260408320829055810182559080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563018190555b50565b6060600080548060200260200160405190810160405280929190818152602001828054801561028157602002820191906000526020600020905b81548152602001906001019080831161026d575b5050505050905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146102fb576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61030481610467565b156102305760008054610319906001906106b5565b81548110610329576103296106f3565b9060005260206000200154600060016000848152602001908152602001600020548154811061035a5761035a6106f3565b60009182526020808320909101929092558281526001918290526040812054815490929190819084908110610391576103916106f3565b9060005260206000200154815260200190815260200160002081905550600160008281526020019081526020016000206000905560008054806103d6576103d6610722565b6001900381819060005260206000200160009055905550565b600061042f7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b60008061044083610467565b61044f57506000928392509050565b50506000908152600160208190526040909120549091565b60008054810361047957506000919050565b60008281526001602052604081205490036104b55781600080815481106104a2576104a26106f3565b9060005260206000200154149050919050565b50600090815260016020526040902054151590565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff16331461053a576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61023081610567565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051610230928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60006020828403121561062d57600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b8181101561066c57835183529284019291840191600101610650565b50909695505050505050565b60006020828403121561068a57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146106ae57600080fd5b9392505050565b6000828210156106ee577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea2646970667358221220455e53745a45feea7dae971a2e61bdf3056132ddab3b40bb0e6f256b7af6173064736f6c634300080d0033608060405234801561001057600080fd5b5061001a3361001f565b6100b4565b600061003361009060201b6105691760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6107cf806100c36000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806385edea131161005b57806385edea13146100d35780638da5cb5b14610101578063a0265ff81461012e578063f2fde38b1461015157600080fd5b80636526db7a14610082578063771602f714610097578063796c5e94146100aa575b600080fd5b610095610090366004610641565b610164565b005b6100956100a5366004610641565b610301565b6100bd6100b8366004610663565b6103b5565b6040516100ca919061067c565b60405180910390f35b6100f36100e1366004610663565b60009081526020819052604090205490565b6040519081526020016100ca565b610109610415565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100ca565b61014161013c366004610641565b61045a565b60405190151581526020016100ca565b61009561015f3660046106c0565b6104ed565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146101d4576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6101de828261045a565b156102fd57600082815260208190526040902080546101ff906001906106fd565b8154811061020f5761020f61073b565b600091825260208083209091015484835282825260408084206001845281852086865290935290922054815481106102495761024961073b565b6000918252602080832090910192909255838152600182526040808220848352808452818320548684528385529183208584529381905283549193909291849081106102975761029761073b565b600091825260208083209091015483528281019390935260409182018120939093558483526001825280832084845282528083208390558483529082905290208054806102e6576102e661076a565b600190038181906000526020600020016000905590555b5050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610371576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61037b828261045a565b6102fd5760009182526020828152604080842080546001808552838720868852855292862081905585845291820181558452922090910155565b6000818152602081815260409182902080548351818402810184019094528084526060939283018282801561040957602002820191906000526020600020905b8154815260200190600101908083116103f5575b50505050509050919050565b60006104557f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b6000828152602081905260408120548103610477575060006104e7565b600083815260016020908152604080832085845290915281205490036104c957600083815260208190526040812080548492906104b6576104b661073b565b90600052602060002001541490506104e7565b50600082815260016020908152604080832084845290915290205415155b92915050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff16331461055d576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105668161058d565b50565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051610566928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6000806040838503121561065457600080fd5b50508035926020909101359150565b60006020828403121561067557600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b818110156106b457835183529284019291840191600101610698565b50909695505050505050565b6000602082840312156106d257600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146106f657600080fd5b9392505050565b600082821015610736577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea264697066735822122043b59568c19fc80221ef7b86418eccb9afb65b763bc0bbd03bda1b1b5d957ec364736f6c634300080d0033";

type MonsterTypeComponentConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MonsterTypeComponentConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MonsterTypeComponent__factory extends ContractFactory {
  constructor(...args: MonsterTypeComponentConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    world: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MonsterTypeComponent> {
    return super.deploy(
      world,
      overrides || {}
    ) as Promise<MonsterTypeComponent>;
  }
  override getDeployTransaction(
    world: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(world, overrides || {});
  }
  override attach(address: string): MonsterTypeComponent {
    return super.attach(address) as MonsterTypeComponent;
  }
  override connect(signer: Signer): MonsterTypeComponent__factory {
    return super.connect(signer) as MonsterTypeComponent__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MonsterTypeComponentInterface {
    return new utils.Interface(_abi) as MonsterTypeComponentInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MonsterTypeComponent {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MonsterTypeComponent;
  }
}
