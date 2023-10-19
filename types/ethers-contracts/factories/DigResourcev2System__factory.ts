/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  DigResourcev2System,
  DigResourcev2SystemInterface,
} from "../DigResourcev2System";

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
            name: "width",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "height",
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
            name: "terrainPerlin",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "resourcePerlin",
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
          {
            internalType: "uint256[]",
            name: "powNonces",
            type: "uint256[]",
          },
        ],
        internalType: "struct DigInfo",
        name: "digInfo",
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
  "0x60806040523480156200001157600080fd5b506040516200416b3803806200416b83398101604081905262000034916200022c565b818162000041336200010f565b6001600160a01b03811615620000585780620000bd565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000097573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bd91906200026b565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000105919062000183602090811b620005ef17901c565b5050505062000292565b600062000126620001ef60201b620006801760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022957600080fd5b50565b600080604083850312156200024057600080fd5b82516200024d8162000213565b6020840151909250620002608162000213565b809150509250929050565b6000602082840312156200027e57600080fd5b81516200028b8162000213565b9392505050565b613ec980620002a26000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe146100515780638da5cb5b1461007a578063af356f11146100a7578063f2fde38b146100ba575b600080fd5b61006461005f366004613092565b6100cf565b6040516100719190613145565b60405180910390f35b6100826100f9565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100646100b53660046132e6565b61013e565b6100cd6100c836600461340e565b610573565b005b60606000828060200190518101906100e7919061351a565b90506100f28161013e565b9392505050565b60006101397f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b60008054606091906101869073ffffffffffffffffffffffffffffffffffffffff167fd0deb8af54f5692432398f7f62bf53c9e54e6d6a9b4dbccb012b3fe04ea432d36106a4565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040161016060405180830381865afa1580156101d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101f59190613630565b8051909150156103685760006040518061012001604052808560000151815260200185602001518152602001856080015181526020018560a0015181526020018560c0015181526020018560e001518152602001856101000151815260200185604001518152602001856060015181525090508160e0015173ffffffffffffffffffffffffffffffffffffffff1663c542c93b856101200151866101400151876101600151856040518563ffffffff1660e01b81526004016102ba949392919061372d565b602060405180830381865afa1580156102d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102fb91906137b1565b610366576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4661696c6564207265736f757263652070726f6f6620636865636b000000000060448201526064015b60405180910390fd5b505b602083015160008054339291906103b59073ffffffffffffffffffffffffffffffffffffffff167fe364070e7addf383981cab98a86215b0a227507d32346ce1205f3e07167055c86106a4565b90506000806000806000806103d4888d60e001518e61010001516107f2565b9550955095509550955095506103e98c610c3e565b60006103ff8d602001518e61018001518661114b565b90506000811161046b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e6f6e63657320696e76616c6964000000000000000000000000000000000000604482015260640161035d565b6104808d602001518e610180015188866114d2565b90508015610563578773ffffffffffffffffffffffffffffffffffffffff166384491fff8a6040518060600160405280858b6104bc91906137fb565b81526020016104cb868b613812565b815267ffffffffffffffff428116602092830152604080517fffffffff0000000000000000000000000000000000000000000000000000000060e088901b168152600481019590955283516024860152918301516044850152910151166064820152608401600060405180830381600087803b15801561054a57600080fd5b505af115801561055e573d6000803e3d6000fd5b505050505b5050505050505050505050919050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146105e3576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105ec816118eb565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015610714573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261075a919081019061382a565b905080516000036107c7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f742072656769737465726564000000000000000000000000000000604482015260640161035d565b6107e8816000815181106107dd576107dd61385f565b602002602001015190565b9150505b92915050565b600080548190819081908190819081906108429073ffffffffffffffffffffffffffffffffffffffff167fedfbc254303008e09cc3e514d4150bac7c69acbeb4ac0177f668a82648a4119e6106a4565b600080549192509061088a9073ffffffffffffffffffffffffffffffffffffffff167fe364070e7addf383981cab98a86215b0a227507d32346ce1205f3e07167055c86106a4565b6040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481018d90526000995089985088975087965086955060019450909150849073ffffffffffffffffffffffffffffffffffffffff84169063cccf7a8e90602401602060405180830381865afa15801561090e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061093291906137b1565b610a3f576109408b8b6118f4565b809850819950829a50839550849d5050505050508273ffffffffffffffffffffffffffffffffffffffff1663f9663b5b8d6040518060a001604052808d81526020018581526020018a81526020018867ffffffffffffffff168152602001898152506040518363ffffffff1660e01b8152600401610a05929190600060c08201905083825282516020830152602083015160408301526040830151606083015267ffffffffffffffff6060840151166080830152608083015160a08301529392505050565b600060405180830381600087803b158015610a1f57600080fd5b505af1158015610a33573d6000803e3d6000fd5b50505050809750610aef565b6040517f0ff4c916000000000000000000000000000000000000000000000000000000008152600481018d905260009073ffffffffffffffffffffffffffffffffffffffff851690630ff4c9169060240160a060405180830381865afa158015610aad573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ad191906138a6565b805160208201516040830151606090930151919c5091985095509150505b610afa8c8983611a44565b6040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481018d905273ffffffffffffffffffffffffffffffffffffffff83169063cccf7a8e90602401602060405180830381865afa158015610b65573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b8991906137b1565b15610c2f576040517f0ff4c916000000000000000000000000000000000000000000000000000000008152600481018d905260009073ffffffffffffffffffffffffffffffffffffffff841690630ff4c91690602401606060405180830381865afa158015610bfc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c2091906138fd565b80516020909101519099509750505b50505093975093979195509350565b33610c4881611e9b565b610cae576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f706c617965722064656164000000000000000000000000000000000000000000604482015260640161035d565b600054610cf19073ffffffffffffffffffffffffffffffffffffffff167fd7eb4644b0f312b764e14b10dbe895c6ee4acad8c1eb37a4791309b4d942e4276106a4565b73ffffffffffffffffffffffffffffffffffffffff16630ff4c916826040518263ffffffff1660e01b8152600401610d2b91815260200190565b602060405180830381865afa158015610d48573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d6c919061393d565b826020015114610dd8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f6e6f74207374616e64696e67206f6e207265736f757263650000000000000000604482015260640161035d565b60008054610e1c9073ffffffffffffffffffffffffffffffffffffffff167f9e0b856941fb70fc9b56c896d5f39a2079c3ed041dbc5e87efbf9c503b354b766106a4565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160e060405180830381865afa158015610e66573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e8a9190613956565b9050806080015167ffffffffffffffff16836040015111158015610ec057508060a0015167ffffffffffffffff16836060015111155b610f26576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f726164697573206f766572206c696d6974000000000000000000000000000000604482015260640161035d565b60008054610f6a9073ffffffffffffffffffffffffffffffffffffffff167f96b5cf7019465e93c7e5108d84c24e70f0d4aa63ab16b75f307df929278baad96106a4565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810185905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015610fd8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ffc91906137b1565b158061109d57506040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810184905273ffffffffffffffffffffffffffffffffffffffff821690630ff4c91690602401602060405180830381865afa15801561106e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110929190613a1a565b63ffffffff16600114155b15611133576040517fd923c3c4000000000000000000000000000000000000000000000000000000008152600481018490526001602482015273ffffffffffffffffffffffffffffffffffffffff82169063d923c3c490604401600060405180830381600087803b15801561111157600080fd5b505af1158015611125573d6000803e3d6000fd5b505050506111336001611f5a565b61114584600001518560a00151612363565b50505050565b815160009060328111156111bb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f706f774e6f6e636573206f766572206c696d6974000000000000000000000000604482015260640161035d565b600080546111ff9073ffffffffffffffffffffffffffffffffffffffff167f9274ed4310537239c4fa8297f7ce72f5452f785d00b8745f8408aa546020abc96106a4565b905060005b828110156114c85760008682815181106112205761122061385f565b6020026020010151905060008882604051602001611248929190918252602082015260400190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190528051602090910120905061128b876002613b55565b6112959082613b90565b156112fc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f706f772076616c756520746f6f2073696d706c79000000000000000000000000604482015260640161035d565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810182905273ffffffffffffffffffffffffffffffffffffffff85169063cccf7a8e90602401602060405180830381865afa158015611367573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061138b91906137b1565b156113f2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f706f772076616c75652072657065617465640000000000000000000000000000604482015260640161035d565b6113fd876002613b55565b6114079082613b90565b1580156114a057506040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810182905273ffffffffffffffffffffffffffffffffffffffff85169063cccf7a8e90602401602060405180830381865afa15801561147a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061149e91906137b1565b155b156114b3576114b0866001613812565b95505b505080806114c090613ba4565b915050611204565b5050509392505050565b6000805481906115189073ffffffffffffffffffffffffffffffffffffffff167f9274ed4310537239c4fa8297f7ce72f5452f785d00b8745f8408aa546020abc96106a4565b60008054919250906115609073ffffffffffffffffffffffffffffffffffffffff167fe2591e8cf2e45b3d0553c9074da12536e7a0269cf8af26d7d154b6577dc0b4486106a4565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810189905290915060009073ffffffffffffffffffffffffffffffffffffffff83169063cccf7a8e90602401602060405180830381865afa1580156115d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115f591906137b1565b156116e4576040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810189905260009073ffffffffffffffffffffffffffffffffffffffff841690630ff4c916906024016040805180830381865afa158015611667573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061168b9190613bdc565b9050611698603c42613c0e565b81511480156116aa5750858160200151105b80156116c45750868160200151876116c291906137fb565b105b156116e25760208101516116d890876137fb565b9650806020015191505b505b60005b8751811015611822578681101561182257600088828151811061170c5761170c61385f565b6020026020010151905060008a82604051602001611734929190918252602082015260400190565b604080518083037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00181529082905280516020909101207f1ab06ee500000000000000000000000000000000000000000000000000000000825260048201819052602482018d9052915073ffffffffffffffffffffffffffffffffffffffff871690631ab06ee590604401600060405180830381600087803b1580156117d957600080fd5b505af11580156117ed573d6000803e3d6000fd5b505050508360016117fe9190613812565b935061180b876001613812565b96505050808061181a90613ba4565b9150506116e7565b5080156118e0578173ffffffffffffffffffffffffffffffffffffffff16638bbf68fe896040518060400160405280603c4261185e9190613c0e565b815260209081018690526040517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b16815260048101939093528151602484015201516044820152606401600060405180830381600087803b1580156118c757600080fd5b505af11580156118db573d6000803e3d6000fd5b505050505b505050949350505050565b6105ec816128de565b600080808080806119048761298a565b9650905060006119166103e88a613c0e565b611921906001613812565b9050600a8111156119305750600a5b600061193c8284612abc565b909350905060008161194f8a600a613c22565b6119599190613812565b60008054919250906119a19073ffffffffffffffffffffffffffffffffffffffff167f426ca3776e558ba7bcca643f7ba84902b1f492ff8ead621ae8c07adcf972f4ba6106a4565b73ffffffffffffffffffffffffffffffffffffffff16630ff4c916836040518263ffffffff1660e01b81526004016119db91815260200190565b608060405180830381865afa1580156119f8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a1c9190613c5f565b6020810151815160408301516060909301519c9f919e509c50909a9950975050505050505050565b60008054611a889073ffffffffffffffffffffffffffffffffffffffff167f5d20697db225819b894dc29704d96e07c471db7a1a75a549b875392d9b5dbea96106a4565b90506000831180611b2557506040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810185905273ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015611aff573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b2391906137b1565b155b80611bbe57506040517f0ff4c91600000000000000000000000000000000000000000000000000000000815260048101859052429073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401602060405180830381865afa158015611b98573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bbc919061393d565b115b611c24576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f6e6f2072656d61696e207265736f7572636520746f2064696700000000000000604482015260640161035d565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810185905273ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015611c8f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cb391906137b1565b156111455760008054611cfc9073ffffffffffffffffffffffffffffffffffffffff167fe364070e7addf383981cab98a86215b0a227507d32346ce1205f3e07167055c86106a4565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810187905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015611d6a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d8e91906137b1565b15611e14576040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810186905273ffffffffffffffffffffffffffffffffffffffff821690634cc8221590602401600060405180830381600087803b158015611dfb57600080fd5b505af1158015611e0f573d6000803e3d6000fd5b505050505b6040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810186905273ffffffffffffffffffffffffffffffffffffffff831690634cc8221590602401600060405180830381600087803b158015611e7c57600080fd5b505af1158015611e90573d6000803e3d6000fd5b505050505050505050565b60008054611edf9073ffffffffffffffffffffffffffffffffffffffff167f8900e57ac2ff61c328bbaa69d2071a542ae5ff48c693375a49fd2937c1ef83326106a4565b73ffffffffffffffffffffffffffffffffffffffff1663cccf7a8e836040518263ffffffff1660e01b8152600401611f1991815260200190565b602060405180830381865afa158015611f36573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ec91906137b1565b60008054339190611fa19073ffffffffffffffffffffffffffffffffffffffff167f189eafd1a01543209399086ef2e12962fca648be4826ce2b3eb2e53ed14bf1416106a4565b6000805491925090611fe99073ffffffffffffffffffffffffffffffffffffffff167f3c3102d48c6d31b1a70ddf8b23d300c759379d6506f2ef221cf3056d7c54dca76106a4565b6040517f720354530000000000000000000000000000000000000000000000000000000081526004810185905290915060009073ffffffffffffffffffffffffffffffffffffffff831690637203545390602401602060405180830381865afa15801561205a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061207e9190613cc9565b60008054919250906120c69073ffffffffffffffffffffffffffffffffffffffff167fdc602e66a6d8c84d0c8d6c4292d80341393a1e04ff02909a12718a4216d3a9f76106a4565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160a060405180830381865afa158015612110573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121349190613cec565b6040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810187905290915060009073ffffffffffffffffffffffffffffffffffffffff861690630ff4c916906024016040805180830381865afa1580156121a4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121c89190613d3f565b602083015181519192506000916121df9042613d7c565b6121e99190613da5565b82602001516121f89190613dcc565b905063ffffffff841667ffffffffffffffff8216111561221b575063ffffffff83165b8767ffffffffffffffff168167ffffffffffffffff161015612299576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f6c61636b206f6620616374696f6e20706f696e74730000000000000000000000604482015260640161035d565b6122a38882613d7c565b60408051808201825267ffffffffffffffff42811682528381166020830190815292517f4e6641a9000000000000000000000000000000000000000000000000000000008152600481018c90529151811660248301529151909116604482015290915073ffffffffffffffffffffffffffffffffffffffff871690634e6641a990606401600060405180830381600087803b15801561234157600080fd5b505af1158015612355573d6000803e3d6000fd5b505050505050505050505050565b600080546123a79073ffffffffffffffffffffffffffffffffffffffff167f4b1ac4c3aa37732e927cbff52c019e9fbdad0f3e454031afaefd319a3dc66ce46106a4565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810185905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015612415573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061243991906137b1565b1561267f576040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810184905260009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401606060405180830381865afa1580156124ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124d09190613df8565b90508263ffffffff16816000015163ffffffff1614801561252157508060400151806125215750806040015115801561252157504267ffffffffffffffff16816020015167ffffffffffffffff1610155b612587576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f666f67207365656420696e76616c696400000000000000000000000000000000604482015260640161035d565b8263ffffffff16816000015163ffffffff161480156125a7575080604001515b156125b25750505050565b6040805160608101825263ffffffff8581168252600060208301908152600183850190815293517f951f165900000000000000000000000000000000000000000000000000000000815260048101899052925190911660248301525167ffffffffffffffff16604482015290511515606482015273ffffffffffffffffffffffffffffffffffffffff83169063951f165990608401600060405180830381600087803b15801561266157600080fd5b505af1158015612675573d6000803e3d6000fd5b5050505050505050565b6001546040517f4f27da180000000000000000000000000000000000000000000000000000000081527fd65d260f5f5c04658319eb649c1b2668791985f80e1dc9150523f9df6efd57b4600482015263ffffffff84169173ffffffffffffffffffffffffffffffffffffffff1690634f27da1890602401602060405180830381865afa158015612713573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127379190613e3a565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b8152600401602060405180830381865afa158015612781573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127a59190613a1a565b63ffffffff1614612812576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f666f67207365656420696e76616c696400000000000000000000000000000000604482015260640161035d565b6040805160608101825263ffffffff8481168252600060208301908152600183850190815293517f951f165900000000000000000000000000000000000000000000000000000000815260048101889052925190911660248301525167ffffffffffffffff16604482015290511515606482015273ffffffffffffffffffffffffffffffffffffffff82169063951f165990608401600060405180830381600087803b1580156128c157600080fd5b505af11580156128d5573d6000803e3d6000fd5b50505050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460805460405173ffffffffffffffffffffffffffffffffffffffff8481169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60008054819081906129d29073ffffffffffffffffffffffffffffffffffffffff167fa5a2e748898bc5c250039d431e09071a06cb8d49c0372e2523cbc7ea9e5dfa8e6106a4565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b8152600401606060405180830381865afa158015612a1c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a409190613e57565b90506000816040015182602001518360000151612a5d9190613812565b612a679190613812565b90506000612a7786600084612f08565b84519196509150811015612a8e5760009350612ab4565b82516020840151612a9f9190613812565b811015612aaf5760019350612ab4565b600293505b505050915091565b6000805481908190612b049073ffffffffffffffffffffffffffffffffffffffff167f0508867a445863eef15ebd0bb961914ceefa98023f700db2ffd5385cc1b2ab246106a4565b6000805491925090612b4c9073ffffffffffffffffffffffffffffffffffffffff167f0508867a445863eef15ebd0bb961914ceefa98023f700db2ffd5385cc1b2ab246106a4565b6000805491925090612b949073ffffffffffffffffffffffffffffffffffffffff167f0508867a445863eef15ebd0bb961914ceefa98023f700db2ffd5385cc1b2ab246106a4565b6040517ffbdfa1ea0000000000000000000000000000000000000000000000000000000081526004810189905290915060009073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015612c05573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052612c4b919081019061382a565b9050600080825167ffffffffffffffff811115612c6a57612c6a612f5d565b604051908082528060200260200182016040528015612c93578160200160208202803683370190505b5090506000835167ffffffffffffffff811115612cb257612cb2612f5d565b604051908082528060200260200182016040528015612cdb578160200160208202803683370190505b50905060005b8451811015612e7a5760008773ffffffffffffffffffffffffffffffffffffffff16630ff4c916878481518110612d1a57612d1a61385f565b60200260200101516040518263ffffffff1660e01b8152600401612d4091815260200190565b602060405180830381865afa158015612d5d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612d81919061393d565b905080838381518110612d9657612d9661385f565b60200260200101818152505060008773ffffffffffffffffffffffffffffffffffffffff16630ff4c916888581518110612dd257612dd261385f565b60200260200101516040518263ffffffff1660e01b8152600401612df891815260200190565b602060405180830381865afa158015612e15573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e39919061393d565b905080858481518110612e4e57612e4e61385f565b6020908102919091010152612e638187613812565b955050508080612e7290613ba4565b915050612ce1565b506000612e898b600086612f08565b909a5090506000805b8351811015612ef757848181518110612ead57612ead61385f565b602002602001015182612ec09190613812565b9150838181518110612ed457612ed461385f565b60200260200101519a50828211612ef75780612eef81613ba4565b915050612e92565b505050505050505050509250929050565b60008083831115612f4f5783612f1e81856137fb565b612f289087613b90565b612f329190613812565b9050612f3e84846137fb565b612f489086613c0e565b9150612f55565b50839050825b935093915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516101a0810167ffffffffffffffff81118282101715612fb057612fb0612f5d565b60405290565b604051610160810167ffffffffffffffff81118282101715612fb057612fb0612f5d565b60405160a0810167ffffffffffffffff81118282101715612fb057612fb0612f5d565b6040516060810167ffffffffffffffff81118282101715612fb057612fb0612f5d565b6040805190810167ffffffffffffffff81118282101715612fb057612fb0612f5d565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561308a5761308a612f5d565b604052919050565b600060208083850312156130a557600080fd5b823567ffffffffffffffff808211156130bd57600080fd5b818501915085601f8301126130d157600080fd5b8135818111156130e3576130e3612f5d565b613113847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601613043565b9150808252868482850101111561312957600080fd5b8084840185840137600090820190930192909252509392505050565b600060208083528351808285015260005b8181101561317257858101830151858201604001528201613156565b81811115613184576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b600082601f8301126131c957600080fd5b6131d1613020565b8060408401858111156131e357600080fd5b845b818110156131fd5780358452602093840193016131e5565b509095945050505050565b600082601f83011261321957600080fd5b613221613020565b80608084018581111561323357600080fd5b845b818110156131fd5761324787826131b8565b8452602090930192604001613235565b600067ffffffffffffffff82111561327157613271612f5d565b5060051b60200190565b600082601f83011261328c57600080fd5b813560206132a161329c83613257565b613043565b82815260059290921b840181019181810190868411156132c057600080fd5b8286015b848110156132db57803583529183019183016132c4565b509695505050505050565b6000602082840312156132f857600080fd5b813567ffffffffffffffff8082111561331057600080fd5b90830190610240828603121561332557600080fd5b61332d612f8c565b823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a082015260c083013560c082015260e083013560e0820152610100808401358183015250610120613392878286016131b8565b908201526101606133a587858301613208565b6101408301526133b9876101e086016131b8565b90820152610220830135828111156133d057600080fd5b6133dc8782860161327b565b6101808301525095945050505050565b73ffffffffffffffffffffffffffffffffffffffff811681146105ec57600080fd5b60006020828403121561342057600080fd5b81356100f2816133ec565b600082601f83011261343c57600080fd5b613444613020565b80604084018581111561345657600080fd5b845b818110156131fd578051845260209384019301613458565b600082601f83011261348157600080fd5b613489613020565b80608084018581111561349b57600080fd5b845b818110156131fd576134af878261342b565b845260209093019260400161349d565b600082601f8301126134d057600080fd5b815160206134e061329c83613257565b82815260059290921b840181019181810190868411156134ff57600080fd5b8286015b848110156132db5780518352918301918301613503565b60006020828403121561352c57600080fd5b815167ffffffffffffffff8082111561354457600080fd5b90830190610240828603121561355957600080fd5b613561612f8c565b825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101206135c68782860161342b565b908201526101606135d987858301613470565b6101408301526135ed876101e0860161342b565b908201526102208301518281111561360457600080fd5b6133dc878286016134bf565b8051801515811461362057600080fd5b919050565b8051613620816133ec565b6000610160828403121561364357600080fd5b61364b612fb6565b61365483613610565b815261366260208401613625565b602082015261367360408401613625565b604082015261368460608401613625565b606082015261369560808401613625565b60808201526136a660a08401613625565b60a08201526136b760c08401613625565b60c08201526136c860e08401613625565b60e08201526101006136db818501613625565b908201526101206136ed848201613625565b908201526101406136ff848201613625565b908201529392505050565b8060005b600281101561114557815184526020938401939091019060010161370e565b610220810161373c828761370a565b60408083018660005b600281101561376c5761375983835161370a565b9183019160209190910190600101613745565b5050505061377d60c083018561370a565b61010082018360005b60098110156137a5578151835260209283019290910190600101613786565b50505095945050505050565b6000602082840312156137c357600080fd5b6100f282613610565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008282101561380d5761380d6137cc565b500390565b60008219821115613825576138256137cc565b500190565b60006020828403121561383c57600080fd5b815167ffffffffffffffff81111561385357600080fd5b6107e8848285016134bf565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b805167ffffffffffffffff8116811461362057600080fd5b600060a082840312156138b857600080fd5b6138c0612fda565b8251815260208301516020820152604083015160408201526138e46060840161388e565b6060820152608083015160808201528091505092915050565b60006060828403121561390f57600080fd5b613917612ffd565b82518152602083015160208201526139316040840161388e565b60408201529392505050565b60006020828403121561394f57600080fd5b5051919050565b600060e0828403121561396857600080fd5b60405160e0810181811067ffffffffffffffff8211171561398b5761398b612f5d565b6040526139978361388e565b81526139a56020840161388e565b60208201526139b66040840161388e565b60408201526139c76060840161388e565b60608201526139d86080840161388e565b60808201526139e960a0840161388e565b60a08201526139fa60c0840161388e565b60c08201529392505050565b805163ffffffff8116811461362057600080fd5b600060208284031215613a2c57600080fd5b6100f282613a06565b600181815b80851115613a8e57817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115613a7457613a746137cc565b80851615613a8157918102915b93841c9390800290613a3a565b509250929050565b600082613aa5575060016107ec565b81613ab2575060006107ec565b8160018114613ac85760028114613ad257613aee565b60019150506107ec565b60ff841115613ae357613ae36137cc565b50506001821b6107ec565b5060208310610133831016604e8410600b8410161715613b11575081810a6107ec565b613b1b8383613a35565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115613b4d57613b4d6137cc565b029392505050565b60006100f28383613a96565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600082613b9f57613b9f613b61565b500690565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203613bd557613bd56137cc565b5060010190565b600060408284031215613bee57600080fd5b613bf6613020565b82518152602083015160208201528091505092915050565b600082613c1d57613c1d613b61565b500490565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615613c5a57613c5a6137cc565b500290565b600060808284031215613c7157600080fd5b6040516080810181811067ffffffffffffffff82111715613c9457613c94612f5d565b8060405250825181526020830151602082015260408301516040820152613cbd6060840161388e565b60608201529392505050565b600060208284031215613cdb57600080fd5b81518060030b81146100f257600080fd5b600060a08284031215613cfe57600080fd5b613d06612fda565b613d0f8361388e565b8152613d1d6020840161388e565b6020820152613d2e6040840161388e565b60408201526138e46060840161388e565b600060408284031215613d5157600080fd5b613d59613020565b613d628361388e565b8152613d706020840161388e565b60208201529392505050565b600067ffffffffffffffff83811690831681811015613d9d57613d9d6137cc565b039392505050565b600067ffffffffffffffff80841680613dc057613dc0613b61565b92169190910492915050565b600067ffffffffffffffff808316818516808303821115613def57613def6137cc565b01949350505050565b600060608284031215613e0a57600080fd5b613e12612ffd565b613e1b83613a06565b8152613e296020840161388e565b602082015261393160408401613610565b600060208284031215613e4c57600080fd5b81516100f2816133ec565b600060608284031215613e6957600080fd5b613e71612ffd565b825181526020830151602082015260408301516040820152809150509291505056fea264697066735822122035c6b9cfd8ae0edaa833ce0d7b40d5bcece42d83edac67f5db8e950901d1702364736f6c634300080d0033";

type DigResourcev2SystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DigResourcev2SystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DigResourcev2System__factory extends ContractFactory {
  constructor(...args: DigResourcev2SystemConstructorParams) {
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
  ): Promise<DigResourcev2System> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<DigResourcev2System>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): DigResourcev2System {
    return super.attach(address) as DigResourcev2System;
  }
  override connect(signer: Signer): DigResourcev2System__factory {
    return super.connect(signer) as DigResourcev2System__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DigResourcev2SystemInterface {
    return new utils.Interface(_abi) as DigResourcev2SystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DigResourcev2System {
    return new Contract(address, _abi, signerOrProvider) as DigResourcev2System;
  }
}
