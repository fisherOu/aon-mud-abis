/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  BuildTreasureSystem,
  BuildTreasureSystemInterface,
} from "../BuildTreasureSystem";

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
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "salt",
            type: "uint256",
          },
        ],
        internalType: "struct BuildInfo",
        name: "buildInfo",
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
  "0x60806040523480156200001157600080fd5b50604051620024cf380380620024cf83398101604081905262000034916200022c565b818162000041336200010f565b6001600160a01b03811615620000585780620000bd565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000097573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bd91906200026b565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000105919062000183602090811b6200063d17901c565b5050505062000292565b600062000126620001ef60201b620006ce1760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022957600080fd5b50565b600080604083850312156200024057600080fd5b82516200024d8162000213565b6020840151909250620002608162000213565b809150509250929050565b6000602082840312156200027e57600080fd5b81516200028b8162000213565b9392505050565b61222d80620002a26000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe146100515780638da5cb5b1461007a578063b9462cf1146100a7578063f2fde38b146100ba575b600080fd5b61006461005f366004611978565b6100cf565b6040516100719190611a28565b60405180910390f35b6100826100f9565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100646100b5366004611a79565b61013e565b6100cd6100c8366004611acd565b6105c1565b005b60606000828060200190518101906100e79190611aea565b90506100f28161013e565b9392505050565b60006101397f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b606060003390506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663614bfa6e6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d89190611b1c565b60008054919250906102209073ffffffffffffffffffffffffffffffffffffffff167f28b9f73e6b271728535a5e2b6da73f60f1fa049519ed11d9203e38922757cf066106f2565b905060008061022e87610843565b6040517f1ab06ee50000000000000000000000000000000000000000000000000000000081526004810187905260248101889052919350915073ffffffffffffffffffffffffffffffffffffffff841690631ab06ee590604401600060405180830381600087803b1580156102a257600080fd5b505af11580156102b6573d6000803e3d6000fd5b50506000546102fe925073ffffffffffffffffffffffffffffffffffffffff1690507fef3393883620fd592853ef61d4a33b35dd9fd9e4dc925bc5e1463919917423ab6106f2565b604080517f36e334770000000000000000000000000000000000000000000000000000000081526004810187905284516024820152602085015163ffffffff908116604483015291850151909116606482015273ffffffffffffffffffffffffffffffffffffffff91909116906336e3347790608401600060405180830381600087803b15801561038e57600080fd5b505af11580156103a2573d6000803e3d6000fd5b50506000546103ea925073ffffffffffffffffffffffffffffffffffffffff1690507f65188156108ab445e8ddb20e749f49402ca97dc723f07951b1c4a011dd8e11666106f2565b604080517fa363c56f00000000000000000000000000000000000000000000000000000000815260048101879052835160ff908116602483015260208501511660448201529083015167ffffffffffffffff9081166064830152606084015181166084830152608084015163ffffffff1660a483015260a08401511660c482015273ffffffffffffffffffffffffffffffffffffffff919091169063a363c56f9060e401600060405180830381600087803b1580156104a857600080fd5b505af11580156104bc573d6000803e3d6000fd5b5050600054610504925073ffffffffffffffffffffffffffffffffffffffff1690507f44d5df6fedbb1676612b3073b831a5f6f1d59057fb2b8978e7146cb8eee3ca8c6106f2565b60408051808201825260008082526020820190815291517f4e6641a900000000000000000000000000000000000000000000000000000000815260048101889052905167ffffffffffffffff90811660248301529151909116604482015273ffffffffffffffffffffffffffffffffffffffff9190911690634e6641a990606401600060405180830381600087803b15801561059f57600080fd5b505af11580156105b3573d6000803e3d6000fd5b505050505050505050919050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610631576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61063a81610c11565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015610762573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526107a89190810190611b59565b9050805160000361081a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f74207265676973746572656400000000000000000000000000000060448201526064015b60405180910390fd5b61083b8160008151811061083057610830611bea565b602002602001015190565b949350505050565b60408051606081018252600080825260208201819052918101919091526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091526000336001546040517f4f27da180000000000000000000000000000000000000000000000000000000081527f6ff1af157fa1e1b9d39dd94ba1bb33ea6a1a0d2f214bb2c71eb60cc093c06fc3600482015291925060009173ffffffffffffffffffffffffffffffffffffffff90911690634f27da1890602401602060405180830381865afa158015610929573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061094d9190611c19565b9050600061095e8660000151610c1a565b9050600043848860200151448673ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b8152600401602060405180830381865afa1580156109b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109d99190611c4f565b6040805160208101969096528501939093526060840191909152608083015263ffffffff1660a082015260c0016040516020818303038152906040528051906020012060001c9050600080600080610a3085610fb3565b935093509350935060006040518060600160405280868152602001600063ffffffff168152602001600063ffffffff16815250905060006040518060c00160405280866080015160ff1681526020018660a0015160ff168152602001856040015167ffffffffffffffff168152602001600067ffffffffffffffff168152602001856080015163ffffffff1681526020018967ffffffffffffffff1681525090506000610afa848660a0015167ffffffffffffffff168760c0015167ffffffffffffffff16611133565b63ffffffff8116602086015260e0870151610100880151929650909250610b3091869167ffffffffffffffff9081169116611133565b63ffffffff8116604086018190526020880151929650909250600091610b569190611c99565b60208501518751610b6d9163ffffffff1690611c99565b8460a00151610b7c9190611cc9565b610b869190611cc9565b905067ffffffffffffffff81161580610bb657508260a0015167ffffffffffffffff168167ffffffffffffffff16115b80610bcd5750606086015167ffffffffffffffff16155b15610bde5760016060840152610bfd565b6060860151610bed9082611d21565b67ffffffffffffffff1660608401525b50919d909c509a5050505050505050505050565b61063a81611191565b6000805433908290610c629073ffffffffffffffffffffffffffffffffffffffff167f2f3c6eb2abe480dcea02a3f0d6883cd4e62a46b8207d85e1ff6f6e5cdee24b7a6106f2565b6000805491925090610caa9073ffffffffffffffffffffffffffffffffffffffff167fce1ed865af9f72b2adeac4b2bf9c5fa76868a1b9693d456996cae8dafb991fcf6106f2565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b8152600401602060405180830381865afa158015610cf4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d189190611d60565b9050610d248186611d21565b935060008467ffffffffffffffff1611610d9a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f676f6c64207573656420697320696e73756666696369656e742e0000000000006044820152606401610811565b6000610da68286611c99565b67ffffffffffffffff169050808373ffffffffffffffffffffffffffffffffffffffff16630ff4c916866040518263ffffffff1660e01b8152600401610dee91815260200190565b602060405180830381865afa158015610e0b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e2f9190611b1c565b1015610e97576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6c61636b206f6620676f6c6400000000000000000000000000000000000000006044820152606401610811565b6040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810185905273ffffffffffffffffffffffffffffffffffffffff841690631ab06ee590869084908490630ff4c91690602401602060405180830381865afa158015610f0e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f329190611b1c565b610f3c9190611d7b565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815260048101929092526024820152604401600060405180830381600087803b158015610f9257600080fd5b505af1158015610fa6573d6000803e3d6000fd5b5050505050505050919050565b6040805160c08101825260008082526060602083018190529282018190529181018290526080810182905260a081018290526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101919091526000805481906110749073ffffffffffffffffffffffffffffffffffffffff167fcfb6241b41527f8aac5f293ecb22ce5491bdce4aca6f96ba85ab53f5ad8ca82f6106f2565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b8152600401600060405180830381865afa1580156110be573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526111049190810190611f26565b90506000611112828861123d565b90975090506111218188611339565b91985096509450925050509193509193565b600080806111418585611d7b565b111561118357836111528185611d7b565b61115c9087611ffd565b6111669190612011565b90506111728484611d7b565b61117c9086612029565b9150611189565b50839050825b935093915050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460805460405173ffffffffffffffffffffffffffffffffffffffff8481169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6000806000805b856020015151811015611298578560200151818151811061126757611267611bea565b602002602001015167ffffffffffffffff16826112849190612011565b9150806112908161203d565b915050611244565b5060006112a785600084611133565b9094509050600080805b88602001515181101561130f57886020015181815181106112d4576112d4611bea565b602002602001015167ffffffffffffffff16826112f19190612011565b915083821161130f57915081806113078161203d565b9150506112b1565b50875180518390811061132457611324611bea565b60200260200101519450505050509250929050565b6040805160c08101825260008082526060602083018190529282018190529181018290526080810182905260a0810182905281906040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810191909152600080546113fa9073ffffffffffffffffffffffffffffffffffffffff167f1c25628829b4861cd29b8126181e286e9aa3749b43e568208fa84796fe72e3816106f2565b60008054919250906114429073ffffffffffffffffffffffffffffffffffffffff167f4e85e4bd7fbc26f10fe53aa450c8a80dc5148546d6ed113502ac93556c10ece26106f2565b600080549192509061148a9073ffffffffffffffffffffffffffffffffffffffff167fdd93cfd8a6751ddc87ad60672ba29f973167cf054c7cf626eef9bb0620fdfb696106f2565b6040517f447e2bd200000000000000000000000000000000000000000000000000000000815263ffffffff8b16600482015290915060009073ffffffffffffffffffffffffffffffffffffffff83169063447e2bd290602401600060405180830381865afa158015611500573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526115469190810190611b59565b90506000805b82518110156116405760008673ffffffffffffffffffffffffffffffffffffffff16630ff4c91685848151811061158557611585611bea565b60200260200101516040518263ffffffff1660e01b81526004016115ab91815260200190565b600060405180830381865afa1580156115c8573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261160e9190810190612086565b9050806060015167ffffffffffffffff168361162a9190612011565b92505080806116389061203d565b91505061154c565b50600061164f8b600084611133565b909a5090506000805b84518110156118105760008873ffffffffffffffffffffffffffffffffffffffff16630ff4c91687848151811061169157611691611bea565b60200260200101516040518263ffffffff1660e01b81526004016116b791815260200190565b600060405180830381865afa1580156116d4573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261171a9190810190612086565b9050806060015167ffffffffffffffff16836117369190612011565b925085828151811061174a5761174a611bea565b60200260200101519b50809a508773ffffffffffffffffffffffffffffffffffffffff16630ff4c91687848151811061178557611785611bea565b60200260200101516040518263ffffffff1660e01b81526004016117ab91815260200190565b61012060405180830381865afa1580156117c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117ed9190612141565b9950838311156117fd5750611810565b50806118088161203d565b915050611658565b505050505050505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040805190810167ffffffffffffffff8111828210171561187357611873611821565b60405290565b60405160a0810167ffffffffffffffff8111828210171561187357611873611821565b60405160c0810167ffffffffffffffff8111828210171561187357611873611821565b604051610120810167ffffffffffffffff8111828210171561187357611873611821565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561192a5761192a611821565b604052919050565b600067ffffffffffffffff82111561194c5761194c611821565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b60006020828403121561198a57600080fd5b813567ffffffffffffffff8111156119a157600080fd5b8201601f810184136119b257600080fd5b80356119c56119c082611932565b6118e3565b8181528560208385010111156119da57600080fd5b81602084016020830137600091810160200191909152949350505050565b60005b83811015611a135781810151838201526020016119fb565b83811115611a22576000848401525b50505050565b6020815260008251806020840152611a478160408501602087016119f8565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b600060408284031215611a8b57600080fd5b611a93611850565b82358152602083013560208201528091505092915050565b73ffffffffffffffffffffffffffffffffffffffff8116811461063a57600080fd5b600060208284031215611adf57600080fd5b81356100f281611aab565b600060408284031215611afc57600080fd5b611b04611850565b82518152602083015160208201528091505092915050565b600060208284031215611b2e57600080fd5b5051919050565b600067ffffffffffffffff821115611b4f57611b4f611821565b5060051b60200190565b60006020808385031215611b6c57600080fd5b825167ffffffffffffffff811115611b8357600080fd5b8301601f81018513611b9457600080fd5b8051611ba26119c082611b35565b81815260059190911b82018301908381019087831115611bc157600080fd5b928401925b82841015611bdf57835182529284019290840190611bc6565b979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060208284031215611c2b57600080fd5b81516100f281611aab565b805163ffffffff81168114611c4a57600080fd5b919050565b600060208284031215611c6157600080fd5b6100f282611c36565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600067ffffffffffffffff80831681851681830481118215151615611cc057611cc0611c6a565b02949350505050565b600067ffffffffffffffff83811690831681811015611cea57611cea611c6a565b039392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600067ffffffffffffffff80841680611d3c57611d3c611cf2565b92169190910492915050565b805167ffffffffffffffff81168114611c4a57600080fd5b600060208284031215611d7257600080fd5b6100f282611d48565b600082821015611d8d57611d8d611c6a565b500390565b600082601f830112611da357600080fd5b81516020611db36119c083611b35565b82815260059290921b84018101918181019086841115611dd257600080fd5b8286015b84811015611df457611de781611c36565b8352918301918301611dd6565b509695505050505050565b600082601f830112611e1057600080fd5b81516020611e206119c083611b35565b82815260059290921b84018101918181019086841115611e3f57600080fd5b8286015b84811015611df457611e5481611d48565b8352918301918301611e43565b600082601f830112611e7257600080fd5b8151611e806119c082611932565b818152846020838601011115611e9557600080fd5b61083b8260208301602087016119f8565b600082601f830112611eb757600080fd5b81516020611ec76119c083611b35565b82815260059290921b84018101918181019086841115611ee657600080fd5b8286015b84811015611df457805167ffffffffffffffff811115611f0a5760008081fd5b611f188986838b0101611e61565b845250918301918301611eea565b600060208284031215611f3857600080fd5b815167ffffffffffffffff80821115611f5057600080fd5b9083019060a08286031215611f6457600080fd5b611f6c611879565b825182811115611f7b57600080fd5b611f8787828601611d92565b825250602083015182811115611f9c57600080fd5b611fa887828601611dff565b602083015250604083015182811115611fc057600080fd5b611fcc87828601611ea6565b604083015250611fde60608401611d48565b6060820152611fef60808401611d48565b608082015295945050505050565b60008261200c5761200c611cf2565b500690565b6000821982111561202457612024611c6a565b500190565b60008261203857612038611cf2565b500490565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361206e5761206e611c6a565b5060010190565b805160ff81168114611c4a57600080fd5b60006020828403121561209857600080fd5b815167ffffffffffffffff808211156120b057600080fd5b9083019060c082860312156120c457600080fd5b6120cc61189c565b825181526020830151828111156120e257600080fd5b6120ee87828601611e61565b60208301525061210060408401611c36565b604082015261211160608401611d48565b606082015261212260808401612075565b608082015261213360a08401612075565b60a082015295945050505050565b6000610120828403121561215457600080fd5b61215c6118bf565b61216583611d48565b815261217360208401611d48565b602082015261218460408401611d48565b604082015261219560608401611d48565b60608201526121a660808401611c36565b60808201526121b760a08401611d48565b60a08201526121c860c08401611d48565b60c08201526121d960e08401611d48565b60e08201526101006121ec818501611d48565b90820152939250505056fea2646970667358221220f143efaff69b1728b53de2d75f0ee91d7ede8f8f273f0b6b51598a21d306821764736f6c634300080d0033";

type BuildTreasureSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BuildTreasureSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BuildTreasureSystem__factory extends ContractFactory {
  constructor(...args: BuildTreasureSystemConstructorParams) {
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
  ): Promise<BuildTreasureSystem> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<BuildTreasureSystem>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): BuildTreasureSystem {
    return super.attach(address) as BuildTreasureSystem;
  }
  override connect(signer: Signer): BuildTreasureSystem__factory {
    return super.connect(signer) as BuildTreasureSystem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BuildTreasureSystemInterface {
    return new utils.Interface(_abi) as BuildTreasureSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BuildTreasureSystem {
    return new Contract(address, _abi, signerOrProvider) as BuildTreasureSystem;
  }
}
