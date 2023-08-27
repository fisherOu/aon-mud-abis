/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  Treasurev2Component,
  Treasurev2ComponentInterface,
} from "../Treasurev2Component";

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
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "asset",
            type: "string",
          },
          {
            internalType: "uint8",
            name: "useMode",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "hitMode",
            type: "uint8",
          },
          {
            internalType: "uint64",
            name: "cooldownTime",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "range",
            type: "uint64",
          },
          {
            internalType: "uint32",
            name: "usageTimes",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "energy",
            type: "uint64",
          },
        ],
        internalType: "struct Treasure",
        name: "",
        type: "tuple",
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
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "asset",
            type: "string",
          },
          {
            internalType: "uint8",
            name: "useMode",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "hitMode",
            type: "uint8",
          },
          {
            internalType: "uint64",
            name: "cooldownTime",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "range",
            type: "uint64",
          },
          {
            internalType: "uint32",
            name: "usageTimes",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "energy",
            type: "uint64",
          },
        ],
        internalType: "struct Treasure",
        name: "treasure",
        type: "tuple",
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
  "0x60806040523480156200001157600080fd5b5060405162001cde38038062001cde833981016040819052620000349162000200565b807f65188156108ab445e8ddb20e749f49402ca97dc723f07951b1c4a011dd8e116662000061336200008a565b60028190556001600160a01b0382161562000081576200008182620000fe565b50505062000232565b6000620000a1620001b660201b62000f211760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b62000108620001da565b6001600160a01b0316336001600160a01b0316146200013a57604051632f7a8ee160e01b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117909155600254604051630f30347760e41b8152306004820152602481019190915263f303477090604401600060405180830381600087803b1580156200019a57600080fd5b505af1158015620001af573d6000803e3d6000fd5b5050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6000620001f1620001b660201b62000f211760201c565b546001600160a01b0316919050565b6000602082840312156200021357600080fd5b81516001600160a01b03811681146200022b57600080fd5b9392505050565b611a9c80620002426000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c80638da5cb5b116100b2578063b8bc073d11610081578063cccf7a8e11610066578063cccf7a8e146102bd578063dee86d4f146102d0578063f2fde38b146102e357600080fd5b8063b8bc073d1461028a578063bf4fe57e146102aa57600080fd5b80638da5cb5b146102455780639d2c76b41461024d578063af640d0f14610260578063b361be461461027757600080fd5b80634fef6a381161010957806375c0669c116100ee57806375c0669c146101fc578063861eb9051461020f5780638b2829471461023257600080fd5b80634fef6a38146101d35780636b122fe0146101e657600080fd5b80630ff4c9161461013b57806330b67baa1461016457806331b933b9146101a95780634cc82215146101be575b600080fd5b61014e6101493660046111e8565b6102f6565b60405161015b919061127b565b60405180910390f35b6000546101849073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161015b565b6101b16103bd565b60405161015b9190611356565b6101d16101cc3660046111e8565b6103f1565b005b6101d16101e136600461139a565b61043c565b6101ee61051a565b60405161015b929190611406565b6101d161020a36600461139a565b610a3a565b61022261021d36600461139a565b610a6c565b604051901515815260200161015b565b6101d161024036600461163a565b610af7565b610184610b44565b6101d161025b36600461139a565b610b89565b61026960025481565b60405190815260200161015b565b6101b1610285366004611681565b6103bd565b61029d6102983660046111e8565b610cb2565b60405161015b91906116be565b6101d16102b836600461139a565b610d54565b6102226102cb3660046111e8565b610e2f565b6101d16102de36600461172e565b610e51565b6101d16102f136600461139a565b610ea8565b6040805161010081018252606080825260208201819052600092820183905281018290526080810182905260a0810182905260c0810182905260e0810182905290808080808080806103478a610cb2565b80602001905181019061035a9190611882565b6040805161010081018252988952602089019790975260ff9586169688019690965292909316606086015267ffffffffffffffff908116608086015291821660a085015263ffffffff1660c08401521660e08201529a9950505050505050505050565b60606040517f17d5b8e800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103fa33610a6c565b610430576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61043981610f45565b50565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146104ac576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b6040805160088082526101208201909252606091829190816020015b6060815260200190600190039081610536575050604080516008808252610120820190925291935060208201610100803683370190505090506040518060400160405280600481526020017f6e616d6500000000000000000000000000000000000000000000000000000000815250826000815181106105b8576105b8611958565b6020026020010181905250600f816000815181106105d8576105d8611958565b602002602001019060218111156105f1576105f16113d7565b90816021811115610604576106046113d7565b815250506040518060400160405280600581526020017f61737365740000000000000000000000000000000000000000000000000000008152508260018151811061065157610651611958565b6020026020010181905250600f8160018151811061067157610671611958565b6020026020010190602181111561068a5761068a6113d7565b9081602181111561069d5761069d6113d7565b815250506040518060400160405280600781526020017f7573654d6f646500000000000000000000000000000000000000000000000000815250826002815181106106ea576106ea611958565b602002602001018190525060088160028151811061070a5761070a611958565b60200260200101906021811115610723576107236113d7565b90816021811115610736576107366113d7565b815250506040518060400160405280600781526020017f6869744d6f6465000000000000000000000000000000000000000000000000008152508260038151811061078357610783611958565b60200260200101819052506008816003815181106107a3576107a3611958565b602002602001019060218111156107bc576107bc6113d7565b908160218111156107cf576107cf6113d7565b815250506040518060400160405280600c81526020017f636f6f6c646f776e54696d6500000000000000000000000000000000000000008152508260048151811061081c5761081c611958565b6020026020010181905250600b8160048151811061083c5761083c611958565b60200260200101906021811115610855576108556113d7565b90816021811115610868576108686113d7565b815250506040518060400160405280600581526020017f72616e6765000000000000000000000000000000000000000000000000000000815250826005815181106108b5576108b5611958565b6020026020010181905250600b816005815181106108d5576108d5611958565b602002602001019060218111156108ee576108ee6113d7565b90816021811115610901576109016113d7565b815250506040518060400160405280600a81526020017f757361676554696d6573000000000000000000000000000000000000000000008152508260068151811061094e5761094e611958565b6020026020010181905250600a8160068151811061096e5761096e611958565b60200260200101906021811115610987576109876113d7565b9081602181111561099a5761099a6113d7565b815250506040518060400160405280600681526020017f656e657267790000000000000000000000000000000000000000000000000000815250826007815181106109e7576109e7611958565b6020026020010181905250600b81600781518110610a0757610a07611958565b60200260200101906021811115610a2057610a206113d7565b90816021811115610a3357610a336113d7565b9052509091565b6040517f17d5b8e800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c909602052604081205460ff1680610af15750610ac2610b44565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b92915050565b610b0033610a6c565b610b36576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b408282610fb3565b5050565b6000610b847f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610bf9576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556002546040517ff3034770000000000000000000000000000000000000000000000000000000008152306004820152602481019190915263f3034770906044015b600060405180830381600087803b158015610c9757600080fd5b505af1158015610cab573d6000803e3d6000fd5b5050505050565b6000818152600160205260409020805460609190610ccf90611987565b80601f0160208091040260200160405190810160405280929190818152602001828054610cfb90611987565b8015610d485780601f10610d1d57610100808354040283529160200191610d48565b820191906000526020600020905b815481529060010190602001808311610d2b57829003601f168201915b50505050509050919050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610dc4576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b60008181526001602052604081208054610e4890611987565b15159392505050565b610b4082826000015183602001518460400151856060015186608001518760a001518860c001518960e00151604051602001610e949897969594939291906119da565b604051602081830303815290604052610af7565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610f18576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61043981611061565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6000818152600160205260408120610f5c91611115565b6000546040517f0de3b7b50000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff90911690630de3b7b590602401610c7d565b60008281526001602090815260409091208251610fd29284019061114f565b506000546040517fcfd3c57f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169063cfd3c57f9061102b9085908590600401611a4d565b600060405180830381600087803b15801561104557600080fd5b505af1158015611059573d6000803e3d6000fd5b505050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051610439928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b50805461112190611987565b6000825580601f10611131575050565b601f01602090049060005260206000209081019061043991906111d3565b82805461115b90611987565b90600052602060002090601f01602090048101928261117d57600085556111c3565b82601f1061119657805160ff19168380011785556111c3565b828001600101855582156111c3579182015b828111156111c35782518255916020019190600101906111a8565b506111cf9291506111d3565b5090565b5b808211156111cf57600081556001016111d4565b6000602082840312156111fa57600080fd5b5035919050565b60005b8381101561121c578181015183820152602001611204565b8381111561122b576000848401525b50505050565b60008151808452611249816020860160208601611201565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000825161010080602085015261129a610120850183611231565b915060208501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160408601526112d58382611231565b92505060ff604086015116606085015260608501516112f9608086018260ff169052565b50608085015167ffffffffffffffff811660a08601525060a085015167ffffffffffffffff811660c08601525060c085015163ffffffff811660e08601525060e085015167ffffffffffffffff8116858301525090949350505050565b6020808252825182820181905260009190848201906040850190845b8181101561138e57835183529284019291840191600101611372565b50909695505050505050565b6000602082840312156113ac57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146113d057600080fd5b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6000604082016040835280855180835260608501915060608160051b8601019250602080880160005b8381101561147b577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa0888703018552611469868351611231565b9550938201939082019060010161142f565b50508584038187015286518085528782019482019350915060005b828110156114e9578451602281106114d7577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b84529381019392810192600101611496565b5091979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610100810167ffffffffffffffff81118282101715611549576115496114f6565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611596576115966114f6565b604052919050565b600067ffffffffffffffff8211156115b8576115b86114f6565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f8301126115f557600080fd5b81356116086116038261159e565b61154f565b81815284602083860101111561161d57600080fd5b816020850160208301376000918101602001919091529392505050565b6000806040838503121561164d57600080fd5b82359150602083013567ffffffffffffffff81111561166b57600080fd5b611677858286016115e4565b9150509250929050565b60006020828403121561169357600080fd5b813567ffffffffffffffff8111156116aa57600080fd5b6116b6848285016115e4565b949350505050565b6020815260006113d06020830184611231565b60ff8116811461043957600080fd5b80356116eb816116d1565b919050565b67ffffffffffffffff8116811461043957600080fd5b80356116eb816116f0565b63ffffffff8116811461043957600080fd5b80356116eb81611711565b6000806040838503121561174157600080fd5b82359150602083013567ffffffffffffffff8082111561176057600080fd5b90840190610100828703121561177557600080fd5b61177d611525565b82358281111561178c57600080fd5b611798888286016115e4565b8252506020830135828111156117ad57600080fd5b6117b9888286016115e4565b6020830152506117cb604084016116e0565b60408201526117dc606084016116e0565b60608201526117ed60808401611706565b60808201526117fe60a08401611706565b60a082015261180f60c08401611723565b60c082015261182060e08401611706565b60e08201528093505050509250929050565b600082601f83011261184357600080fd5b81516118516116038261159e565b81815284602083860101111561186657600080fd5b6116b6826020830160208701611201565b80516116eb816116f0565b600080600080600080600080610100898b03121561189f57600080fd5b885167ffffffffffffffff808211156118b757600080fd5b6118c38c838d01611832565b995060208b01519150808211156118d957600080fd5b506118e68b828c01611832565b97505060408901516118f7816116d1565b60608a0151909650611908816116d1565b60808a0151909550611919816116f0565b60a08a015190945061192a816116f0565b60c08a015190935061193b81611711565b915061194960e08a01611877565b90509295985092959890939650565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600181811c9082168061199b57607f821691505b6020821081036119d4577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60006101008083526119ee8184018c611231565b90508281036020840152611a02818b611231565b60ff998a1660408501529790981660608301525067ffffffffffffffff948516608082015292841660a084015263ffffffff9190911660c083015290911660e0909101529392505050565b8281526040602082015260006116b6604083018461123156fea26469706673582212204402c1168a97379e0a3585bd4325c2ad0f8fe466ed91f39e1fce3055fd2c190364736f6c634300080d0033";

type Treasurev2ComponentConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Treasurev2ComponentConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Treasurev2Component__factory extends ContractFactory {
  constructor(...args: Treasurev2ComponentConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    world: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Treasurev2Component> {
    return super.deploy(world, overrides || {}) as Promise<Treasurev2Component>;
  }
  override getDeployTransaction(
    world: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(world, overrides || {});
  }
  override attach(address: string): Treasurev2Component {
    return super.attach(address) as Treasurev2Component;
  }
  override connect(signer: Signer): Treasurev2Component__factory {
    return super.connect(signer) as Treasurev2Component__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Treasurev2ComponentInterface {
    return new utils.Interface(_abi) as Treasurev2ComponentInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Treasurev2Component {
    return new Contract(address, _abi, signerOrProvider) as Treasurev2Component;
  }
}
