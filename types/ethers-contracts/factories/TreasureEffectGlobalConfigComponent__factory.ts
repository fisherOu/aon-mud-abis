/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  TreasureEffectGlobalConfigComponent,
  TreasureEffectGlobalConfigComponentInterface,
} from "../TreasureEffectGlobalConfigComponent";

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
    inputs: [],
    name: "getValue",
    outputs: [
      {
        components: [
          {
            internalType: "uint32[]",
            name: "effectGroups",
            type: "uint32[]",
          },
          {
            internalType: "uint64[]",
            name: "effectGroupRarely",
            type: "uint64[]",
          },
          {
            internalType: "string[]",
            name: "effectGroupName",
            type: "string[]",
          },
          {
            internalType: "uint64",
            name: "minEnergy",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "maxEnergy",
            type: "uint64",
          },
        ],
        internalType: "struct TreasureEffectGlobalConfig",
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
        components: [
          {
            internalType: "uint32[]",
            name: "effectGroups",
            type: "uint32[]",
          },
          {
            internalType: "uint64[]",
            name: "effectGroupRarely",
            type: "uint64[]",
          },
          {
            internalType: "string[]",
            name: "effectGroupName",
            type: "string[]",
          },
          {
            internalType: "uint64",
            name: "minEnergy",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "maxEnergy",
            type: "uint64",
          },
        ],
        internalType: "struct TreasureEffectGlobalConfig",
        name: "mapConfig",
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
  "0x60806040523480156200001157600080fd5b5060405162001e3238038062001e32833981016040819052620000349162000200565b807fcfb6241b41527f8aac5f293ecb22ce5491bdce4aca6f96ba85ab53f5ad8ca82f62000061336200008a565b60028190556001600160a01b0382161562000081576200008182620000fe565b50505062000232565b6000620000a1620001b660201b62000d1a1760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b62000108620001da565b6001600160a01b0316336001600160a01b0316146200013a57604051632f7a8ee160e01b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117909155600254604051630f30347760e41b8152306004820152602481019190915263f303477090604401600060405180830381600087803b1580156200019a57600080fd5b505af1158015620001af573d6000803e3d6000fd5b5050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6000620001f1620001b660201b62000d1a1760201c565b546001600160a01b0316919050565b6000602082840312156200021357600080fd5b81516001600160a01b03811681146200022b57600080fd5b9392505050565b611bf080620002426000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c80638b282947116100b2578063b361be4611610081578063bf4fe57e11610066578063bf4fe57e146102b2578063cccf7a8e146102c5578063f2fde38b146102d857600080fd5b8063b361be461461027f578063b8bc073d1461029257600080fd5b80638b2829471461023a5780638da5cb5b1461024d5780639d2c76b414610255578063af640d0f1461026857600080fd5b80634cc82215116101095780636b122fe0116100ee5780636b122fe0146101ee57806375c0669c14610204578063861eb9051461021757600080fd5b80634cc82215146101c85780634fef6a38146101db57600080fd5b8063209652551461013b57806330b67baa1461015957806331b933b91461019e57806332cec204146101b3575b600080fd5b6101436102eb565b6040516101509190611116565b60405180910390f35b6000546101799073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610150565b6101a6610394565b60405161015091906111f9565b6101c66101c136600461152c565b6103c8565b005b6101c66101d6366004611603565b610412565b6101c66101e936600461161c565b61045a565b6101f6610538565b6040516101509291906116dd565b6101c661021236600461161c565b61088a565b61022a61022536600461161c565b6108bc565b6040519015158152602001610150565b6101c661024836600461178b565b610947565b610179610994565b6101c661026336600461161c565b6109d9565b61027160025481565b604051908152602001610150565b6101a661028d3660046117d2565b610394565b6102a56102a0366004611603565b610b02565b604051610150919061180f565b6101c66102c036600461161c565b610ba4565b61022a6102d3366004611603565b610c7f565b6101c66102e636600461161c565b610ca1565b6103316040518060a00160405280606081526020016060815260200160608152602001600067ffffffffffffffff168152602001600067ffffffffffffffff1681525090565b600080600080600061034461060d610b02565b806020019051810190610357919061194d565b6040805160a08101825295865260208601949094529284019190915267ffffffffffffffff90811660608401521660808201529695505050505050565b60606040517f17d5b8e800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61040f61060d826000015183602001518460400151856060015186608001516040516020016103fb959493929190611a58565b604051602081830303815290604052610947565b50565b61041b336108bc565b610451576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61040f81610d3e565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146104ca576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b60408051600580825260c08201909252606091829190816020015b606081526020019060019003908161055357505060408051600580825260c082019092529193506020820160a0803683370190505090506040518060400160405280600c81526020017f65666665637447726f7570730000000000000000000000000000000000000000815250826000815181106105d3576105d3611b1f565b6020026020010181905250601c816000815181106105f3576105f3611b1f565b6020026020010190602181111561060c5761060c6116ae565b9081602181111561061f5761061f6116ae565b815250506040518060400160405280601181526020017f65666665637447726f7570526172656c790000000000000000000000000000008152508260018151811061066c5761066c611b1f565b6020026020010181905250601d8160018151811061068c5761068c611b1f565b602002602001019060218111156106a5576106a56116ae565b908160218111156106b8576106b86116ae565b815250506040518060400160405280600f81526020017f65666665637447726f75704e616d6500000000000000000000000000000000008152508260028151811061070557610705611b1f565b602002602001018190525060218160028151811061072557610725611b1f565b6020026020010190602181111561073e5761073e6116ae565b90816021811115610751576107516116ae565b815250506040518060400160405280600981526020017f6d696e456e6572677900000000000000000000000000000000000000000000008152508260038151811061079e5761079e611b1f565b6020026020010181905250600b816003815181106107be576107be611b1f565b602002602001019060218111156107d7576107d76116ae565b908160218111156107ea576107ea6116ae565b815250506040518060400160405280600981526020017f6d6178456e6572677900000000000000000000000000000000000000000000008152508260048151811061083757610837611b1f565b6020026020010181905250600b8160048151811061085757610857611b1f565b60200260200101906021811115610870576108706116ae565b90816021811115610883576108836116ae565b9052509091565b6040517f17d5b8e800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c909602052604081205460ff16806109415750610912610994565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b92915050565b610950336108bc565b610986576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109908282610dac565b5050565b60006109d47f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610a49576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556002546040517ff3034770000000000000000000000000000000000000000000000000000000008152306004820152602481019190915263f3034770906044015b600060405180830381600087803b158015610ae757600080fd5b505af1158015610afb573d6000803e3d6000fd5b5050505050565b6000818152600160205260409020805460609190610b1f90611b4e565b80601f0160208091040260200160405190810160405280929190818152602001828054610b4b90611b4e565b8015610b985780601f10610b6d57610100808354040283529160200191610b98565b820191906000526020600020905b815481529060010190602001808311610b7b57829003601f168201915b50505050509050919050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610c14576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b60008181526001602052604081208054610c9890611b4e565b15159392505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610d11576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61040f81610e5a565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6000818152600160205260408120610d5591610f0e565b6000546040517f0de3b7b50000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff90911690630de3b7b590602401610acd565b60008281526001602090815260409091208251610dcb92840190610f48565b506000546040517fcfd3c57f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169063cfd3c57f90610e249085908590600401611ba1565b600060405180830381600087803b158015610e3e57600080fd5b505af1158015610e52573d6000803e3d6000fd5b505050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460805460405161040f928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b508054610f1a90611b4e565b6000825580601f10610f2a575050565b601f01602090049060005260206000209081019061040f9190610fcc565b828054610f5490611b4e565b90600052602060002090601f016020900481019282610f765760008555610fbc565b82601f10610f8f57805160ff1916838001178555610fbc565b82800160010185558215610fbc579182015b82811115610fbc578251825591602001919060010190610fa1565b50610fc8929150610fcc565b5090565b5b80821115610fc85760008155600101610fcd565b600081518084526020808501945080840160005b8381101561101b57815167ffffffffffffffff1687529582019590820190600101610ff5565b509495945050505050565b60005b83811015611041578181015183820152602001611029565b83811115611050576000848401525b50505050565b6000815180845261106e816020860160208601611026565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600082825180855260208086019550808260051b84010181860160005b84811015611109577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08684030189526110f7838351611056565b988401989250908301906001016110bd565b5090979650505050505050565b6020808252825160a083830152805160c0840181905260009291820190839060e08601905b8083101561116157835163ffffffff16825292840192600192909201919084019061113b565b508387015193507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe092508286820301604087015261119f8185610fe1565b935050506040850151818584030160608601526111bc83826110a0565b9250505060608401516111db608085018267ffffffffffffffff169052565b50608084015167ffffffffffffffff811660a0850152509392505050565b6020808252825182820181905260009190848201906040850190845b8181101561123157835183529284019291840191600101611215565b50909695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160a0810167ffffffffffffffff8111828210171561128f5761128f61123d565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156112dc576112dc61123d565b604052919050565b600067ffffffffffffffff8211156112fe576112fe61123d565b5060051b60200190565b63ffffffff8116811461040f57600080fd5b600082601f83011261132b57600080fd5b8135602061134061133b836112e4565b611295565b82815260059290921b8401810191818101908684111561135f57600080fd5b8286015b8481101561138357803561137681611308565b8352918301918301611363565b509695505050505050565b67ffffffffffffffff8116811461040f57600080fd5b80356113af8161138e565b919050565b600082601f8301126113c557600080fd5b813560206113d561133b836112e4565b82815260059290921b840181019181810190868411156113f457600080fd5b8286015b8481101561138357803561140b8161138e565b83529183019183016113f8565b600067ffffffffffffffff8211156114325761143261123d565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600061146c61133b84611418565b905082815283838301111561148057600080fd5b828260208301376000602084830101529392505050565b600082601f8301126114a857600080fd5b813560206114b861133b836112e4565b82815260059290921b840181019181810190868411156114d757600080fd5b8286015b8481101561138357803567ffffffffffffffff8111156114fb5760008081fd5b8701603f8101891361150d5760008081fd5b61151e89868301356040840161145e565b8452509183019183016114db565b60006020828403121561153e57600080fd5b813567ffffffffffffffff8082111561155657600080fd5b9083019060a0828603121561156a57600080fd5b61157261126c565b82358281111561158157600080fd5b61158d8782860161131a565b8252506020830135828111156115a257600080fd5b6115ae878286016113b4565b6020830152506040830135828111156115c657600080fd5b6115d287828601611497565b6040830152506115e4606084016113a4565b60608201526115f5608084016113a4565b608082015295945050505050565b60006020828403121561161557600080fd5b5035919050565b60006020828403121561162e57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461165257600080fd5b9392505050565b600081518084526020808501808196508360051b8101915082860160005b858110156116a157828403895261168f848351611056565b98850198935090840190600101611677565b5091979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6040815260006116f06040830185611659565b8281036020848101919091528451808352858201928201906000805b8281101561175d5785516022811061174b577f4e487b710000000000000000000000000000000000000000000000000000000083526021600452602483fd5b8452948401949284019260010161170c565b509198975050505050505050565b600082601f83011261177c57600080fd5b6116528383356020850161145e565b6000806040838503121561179e57600080fd5b82359150602083013567ffffffffffffffff8111156117bc57600080fd5b6117c88582860161176b565b9150509250929050565b6000602082840312156117e457600080fd5b813567ffffffffffffffff8111156117fb57600080fd5b6118078482850161176b565b949350505050565b6020815260006116526020830184611056565b80516113af8161138e565b600082601f83011261183e57600080fd5b8151602061184e61133b836112e4565b82815260059290921b8401810191818101908684111561186d57600080fd5b8286015b848110156113835780516118848161138e565b8352918301918301611871565b600082601f8301126118a257600080fd5b815160206118b261133b836112e4565b82815260059290921b840181019181810190868411156118d157600080fd5b8286015b8481101561138357805167ffffffffffffffff8111156118f55760008081fd5b8701603f810189136119075760008081fd5b84810151604061191961133b83611418565b8281528b8284860101111561192e5760008081fd5b61193d83898301848701611026565b86525050509183019183016118d5565b600080600080600060a0868803121561196557600080fd5b855167ffffffffffffffff8082111561197d57600080fd5b818801915088601f83011261199157600080fd5b815160206119a161133b836112e4565b82815260059290921b8401810191818101908c8411156119c057600080fd5b948201945b838610156119e75785516119d881611308565b825294820194908201906119c5565b918b0151919950909350505080821115611a0057600080fd5b611a0c89838a0161182d565b95506040880151915080821115611a2257600080fd5b50611a2f88828901611891565b935050611a3e60608701611822565b9150611a4c60808701611822565b90509295509295909350565b60a0808252865190820181905260009060209060c0840190828a01845b82811015611a9757815163ffffffff1684529284019290840190600101611a75565b5050508381038285015287518082528883019183019060005b81811015611ad657835167ffffffffffffffff1683529284019291840191600101611ab0565b50508481036040860152611aea8189611659565b9350505050611b05606083018567ffffffffffffffff169052565b67ffffffffffffffff831660808301529695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600181811c90821680611b6257607f821691505b602082108103611b9b577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b828152604060208201526000611807604083018461105656fea264697066735822122028c8d9d939037a9efafc77faa69373a5ab8dc87c811bb8b1a6990584e392f2ee64736f6c634300080d0033";

type TreasureEffectGlobalConfigComponentConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TreasureEffectGlobalConfigComponentConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TreasureEffectGlobalConfigComponent__factory extends ContractFactory {
  constructor(...args: TreasureEffectGlobalConfigComponentConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    world: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TreasureEffectGlobalConfigComponent> {
    return super.deploy(
      world,
      overrides || {}
    ) as Promise<TreasureEffectGlobalConfigComponent>;
  }
  override getDeployTransaction(
    world: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(world, overrides || {});
  }
  override attach(address: string): TreasureEffectGlobalConfigComponent {
    return super.attach(address) as TreasureEffectGlobalConfigComponent;
  }
  override connect(
    signer: Signer
  ): TreasureEffectGlobalConfigComponent__factory {
    return super.connect(
      signer
    ) as TreasureEffectGlobalConfigComponent__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TreasureEffectGlobalConfigComponentInterface {
    return new utils.Interface(
      _abi
    ) as TreasureEffectGlobalConfigComponentInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TreasureEffectGlobalConfigComponent {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TreasureEffectGlobalConfigComponent;
  }
}
