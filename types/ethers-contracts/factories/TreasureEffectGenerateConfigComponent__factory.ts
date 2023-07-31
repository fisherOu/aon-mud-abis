/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  TreasureEffectGenerateConfigComponent,
  TreasureEffectGenerateConfigComponentInterface,
} from "../TreasureEffectGenerateConfigComponent";

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
            internalType: "uint64",
            name: "energyPerArea",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "energyPerValue",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "basicCooldownTime",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "energyPerRange",
            type: "uint64",
          },
          {
            internalType: "uint32",
            name: "basicUsageTimes",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "minArea",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "maxArea",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "minValue",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "maxValue",
            type: "uint64",
          },
        ],
        internalType: "struct TreasureEffectGenerateConfig",
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
            internalType: "uint64",
            name: "energyPerArea",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "energyPerValue",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "basicCooldownTime",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "energyPerRange",
            type: "uint64",
          },
          {
            internalType: "uint32",
            name: "basicUsageTimes",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "minArea",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "maxArea",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "minValue",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "maxValue",
            type: "uint64",
          },
        ],
        internalType: "struct TreasureEffectGenerateConfig",
        name: "treasureEffect",
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
  "0x60806040523480156200001157600080fd5b5060405162001c8138038062001c81833981016040819052620000349162000200565b807f4e85e4bd7fbc26f10fe53aa450c8a80dc5148546d6ed113502ac93556c10ece262000061336200008a565b60028190556001600160a01b0382161562000081576200008182620000fe565b50505062000232565b6000620000a1620001b660201b620010291760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b62000108620001da565b6001600160a01b0316336001600160a01b0316146200013a57604051632f7a8ee160e01b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117909155600254604051630f30347760e41b8152306004820152602481019190915263f303477090604401600060405180830381600087803b1580156200019a57600080fd5b505af1158015620001af573d6000803e3d6000fd5b5050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6000620001f1620001b660201b620010291760201c565b546001600160a01b0316919050565b6000602082840312156200021357600080fd5b81516001600160a01b03811681146200022b57600080fd5b9392505050565b611a3f80620002426000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c80638da5cb5b116100b2578063b8bc073d11610081578063cccf7a8e11610066578063cccf7a8e146102bd578063f2fde38b146102d0578063fddf8d06146102e357600080fd5b8063b8bc073d1461028a578063bf4fe57e146102aa57600080fd5b80638da5cb5b146102455780639d2c76b41461024d578063af640d0f14610260578063b361be461461027757600080fd5b80634fef6a381161010957806375c0669c116100ee57806375c0669c146101fc578063861eb9051461020f5780638b2829471461023257600080fd5b80634fef6a38146101d35780636b122fe0146101e657600080fd5b80630ff4c9161461013b57806330b67baa1461016457806331b933b9146101a95780634cc82215146101be575b600080fd5b61014e6101493660046112f0565b6102f6565b60405161015b9190611309565b60405180910390f35b6000546101849073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161015b565b6101b16103d1565b60405161015b91906113ca565b6101d16101cc3660046112f0565b610405565b005b6101d16101e136600461140e565b610450565b6101ee61052e565b60405161015b9291906114e5565b6101d161020a36600461140e565b610ae7565b61022261021d36600461140e565b610b19565b604051901515815260200161015b565b6101d16102403660046116d9565b610ba4565b610184610bf1565b6101d161025b36600461140e565b610c36565b61026960025481565b60405190815260200161015b565b6101b1610285366004611720565b6103d1565b61029d6102983660046112f0565b610d5f565b60405161015b919061175d565b6101d16102b836600461140e565b610e01565b6102226102cb3660046112f0565b610edc565b6101d16102de36600461140e565b610efe565b6101d16102f13660046117b3565b610f77565b6040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290529080808080808080806103508b610d5f565b80602001905181019061036391906118aa565b604080516101208101825267ffffffffffffffff9a8b168152988a1660208a015296891696880196909652938716606087015263ffffffff9092166080860152851660a0850152841660c0840152831660e0830152919091166101008201529b9a5050505050505050505050565b60606040517f17d5b8e800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61040e33610b19565b610444576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61044d8161104d565b50565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146104c0576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b6040805160098082526101408201909252606091829190816020015b606081526020019060019003908161054a575050604080516009808252610140820190925291935060208201610120803683370190505090506040518060400160405280600d81526020017f656e657267795065724172656100000000000000000000000000000000000000815250826000815181106105cc576105cc61196e565b6020026020010181905250600b816000815181106105ec576105ec61196e565b60200260200101906021811115610605576106056114b6565b90816021811115610618576106186114b6565b815250506040518060400160405280600e81526020017f656e6572677950657256616c7565000000000000000000000000000000000000815250826001815181106106655761066561196e565b6020026020010181905250600b816001815181106106855761068561196e565b6020026020010190602181111561069e5761069e6114b6565b908160218111156106b1576106b16114b6565b815250506040518060400160405280601181526020017f6261736963436f6f6c646f776e54696d65000000000000000000000000000000815250826002815181106106fe576106fe61196e565b6020026020010181905250600b8160028151811061071e5761071e61196e565b60200260200101906021811115610737576107376114b6565b9081602181111561074a5761074a6114b6565b815250506040518060400160405280600e81526020017f656e6572677950657252616e6765000000000000000000000000000000000000815250826003815181106107975761079761196e565b6020026020010181905250600b816003815181106107b7576107b761196e565b602002602001019060218111156107d0576107d06114b6565b908160218111156107e3576107e36114b6565b815250506040518060400160405280600f81526020017f6261736963557361676554696d65730000000000000000000000000000000000815250826004815181106108305761083061196e565b6020026020010181905250600a816004815181106108505761085061196e565b60200260200101906021811115610869576108696114b6565b9081602181111561087c5761087c6114b6565b815250506040518060400160405280600781526020017f6d696e4172656100000000000000000000000000000000000000000000000000815250826005815181106108c9576108c961196e565b6020026020010181905250600b816005815181106108e9576108e961196e565b60200260200101906021811115610902576109026114b6565b90816021811115610915576109156114b6565b815250506040518060400160405280600781526020017f6d61784172656100000000000000000000000000000000000000000000000000815250826006815181106109625761096261196e565b6020026020010181905250600b816006815181106109825761098261196e565b6020026020010190602181111561099b5761099b6114b6565b908160218111156109ae576109ae6114b6565b815250506040518060400160405280600881526020017f6d696e56616c7565000000000000000000000000000000000000000000000000815250826007815181106109fb576109fb61196e565b6020026020010181905250600b81600781518110610a1b57610a1b61196e565b60200260200101906021811115610a3457610a346114b6565b90816021811115610a4757610a476114b6565b815250506040518060400160405280600881526020017f6d617856616c756500000000000000000000000000000000000000000000000081525082600881518110610a9457610a9461196e565b6020026020010181905250600b81600881518110610ab457610ab461196e565b60200260200101906021811115610acd57610acd6114b6565b90816021811115610ae057610ae06114b6565b9052509091565b6040517f17d5b8e800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c909602052604081205460ff1680610b9e5750610b6f610bf1565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b92915050565b610bad33610b19565b610be3576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610bed82826110bb565b5050565b6000610c317f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610ca6576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556002546040517ff3034770000000000000000000000000000000000000000000000000000000008152306004820152602481019190915263f3034770906044015b600060405180830381600087803b158015610d4457600080fd5b505af1158015610d58573d6000803e3d6000fd5b5050505050565b6000818152600160205260409020805460609190610d7c9061199d565b80601f0160208091040260200160405190810160405280929190818152602001828054610da89061199d565b8015610df55780601f10610dca57610100808354040283529160200191610df5565b820191906000526020600020905b815481529060010190602001808311610dd857829003601f168201915b50505050509050919050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610e71576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b60008181526001602052604081208054610ef59061199d565b15159392505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610f6e576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61044d81611169565b610bed82826000015183602001518460400151856060015186608001518760a001518860c001518960e001518a61010001516040516020016110159998979695949392919067ffffffffffffffff998a16815297891660208901529588166040880152938716606087015263ffffffff929092166080860152851660a0850152841660c0840152831660e08301529091166101008201526101200190565b604051602081830303815290604052610ba4565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b60008181526001602052604081206110649161121d565b6000546040517f0de3b7b50000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff90911690630de3b7b590602401610d2a565b600082815260016020908152604090912082516110da92840190611257565b506000546040517fcfd3c57f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169063cfd3c57f9061113390859085906004016119f0565b600060405180830381600087803b15801561114d57600080fd5b505af1158015611161573d6000803e3d6000fd5b505050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460805460405161044d928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b5080546112299061199d565b6000825580601f10611239575050565b601f01602090049060005260206000209081019061044d91906112db565b8280546112639061199d565b90600052602060002090601f01602090048101928261128557600085556112cb565b82601f1061129e57805160ff19168380011785556112cb565b828001600101855582156112cb579182015b828111156112cb5782518255916020019190600101906112b0565b506112d79291506112db565b5090565b5b808211156112d757600081556001016112dc565b60006020828403121561130257600080fd5b5035919050565b815167ffffffffffffffff90811682526020808401518216908301526040808401518216908301526060808401519182169083015261012082019050608083015161135c608084018263ffffffff169052565b5060a083015161137860a084018267ffffffffffffffff169052565b5060c083015161139460c084018267ffffffffffffffff169052565b5060e08301516113b060e084018267ffffffffffffffff169052565b506101009283015167ffffffffffffffff16919092015290565b6020808252825182820181905260009190848201906040850190845b81811015611402578351835292840192918401916001016113e6565b50909695505050505050565b60006020828403121561142057600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461144457600080fd5b9392505050565b6000815180845260005b8181101561147157602081850181015186830182015201611455565b81811115611483576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6000604082016040835280855180835260608501915060608160051b8601019250602080880160005b8381101561155a577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa088870301855261154886835161144b565b9550938201939082019060010161150e565b50508584038187015286518085528782019482019350915060005b828110156115c8578451602281106115b6577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b84529381019392810192600101611575565b5091979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610120810167ffffffffffffffff81118282101715611628576116286115d5565b60405290565b600082601f83011261163f57600080fd5b813567ffffffffffffffff8082111561165a5761165a6115d5565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156116a0576116a06115d5565b816040528381528660208588010111156116b957600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080604083850312156116ec57600080fd5b82359150602083013567ffffffffffffffff81111561170a57600080fd5b6117168582860161162e565b9150509250929050565b60006020828403121561173257600080fd5b813567ffffffffffffffff81111561174957600080fd5b6117558482850161162e565b949350505050565b602081526000611444602083018461144b565b67ffffffffffffffff8116811461044d57600080fd5b803561179181611770565b919050565b63ffffffff8116811461044d57600080fd5b803561179181611796565b6000808284036101408112156117c857600080fd5b83359250610120807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0830112156117fe57600080fd5b611806611604565b915061181460208601611786565b825261182260408601611786565b602083015261183360608601611786565b604083015261184460808601611786565b606083015261185560a086016117a8565b608083015261186660c08601611786565b60a083015261187760e08601611786565b60c083015261010061188a818701611786565b60e084015261189a828701611786565b9083015250919491935090915050565b60008060008060008060008060006101208a8c0312156118c957600080fd5b89516118d481611770565b60208b01519099506118e581611770565b60408b01519098506118f681611770565b60608b015190975061190781611770565b60808b015190965061191881611796565b60a08b015190955061192981611770565b60c08b015190945061193a81611770565b60e08b015190935061194b81611770565b6101008b015190925061195d81611770565b809150509295985092959850929598565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600181811c908216806119b157607f821691505b6020821081036119ea577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b828152604060208201526000611755604083018461144b56fea26469706673582212205b37c0f6cecec794911f69bed08c93ac9ec5205a0e21cbff2eb18c05df59dbaf64736f6c634300080d0033";

type TreasureEffectGenerateConfigComponentConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TreasureEffectGenerateConfigComponentConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TreasureEffectGenerateConfigComponent__factory extends ContractFactory {
  constructor(...args: TreasureEffectGenerateConfigComponentConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    world: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TreasureEffectGenerateConfigComponent> {
    return super.deploy(
      world,
      overrides || {}
    ) as Promise<TreasureEffectGenerateConfigComponent>;
  }
  override getDeployTransaction(
    world: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(world, overrides || {});
  }
  override attach(address: string): TreasureEffectGenerateConfigComponent {
    return super.attach(address) as TreasureEffectGenerateConfigComponent;
  }
  override connect(
    signer: Signer
  ): TreasureEffectGenerateConfigComponent__factory {
    return super.connect(
      signer
    ) as TreasureEffectGenerateConfigComponent__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TreasureEffectGenerateConfigComponentInterface {
    return new utils.Interface(
      _abi
    ) as TreasureEffectGenerateConfigComponentInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TreasureEffectGenerateConfigComponent {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TreasureEffectGenerateConfigComponent;
  }
}
