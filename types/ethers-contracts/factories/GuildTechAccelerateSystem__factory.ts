/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  GuildTechAccelerateSystem,
  GuildTechAccelerateSystemInterface,
} from "../GuildTechAccelerateSystem";

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
            name: "updateId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "guildCrestId",
            type: "uint256",
          },
        ],
        internalType: "struct Info",
        name: "info",
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
  "0x60806040523480156200001157600080fd5b5060405162002f6a38038062002f6a83398101604081905262000034916200022c565b818162000041336200010f565b6001600160a01b03811615620000585780620000bd565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000097573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bd91906200026b565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000105919062000183602090811b620008f517901c565b5050505062000292565b600062000126620001ef60201b620009861760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022957600080fd5b50565b600080604083850312156200024057600080fd5b82516200024d8162000213565b6020840151909250620002608162000213565b809150509250929050565b6000602082840312156200027e57600080fd5b81516200028b8162000213565b9392505050565b612cc880620002a26000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe146100515780638da5cb5b1461007a578063b9462cf1146100a7578063f2fde38b146100ba575b600080fd5b61006461005f36600461245b565b6100cf565b6040516100719190612555565b60405180910390f35b6100826100f9565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100646100b5366004612568565b61013e565b6100cd6100c836600461259a565b610879565b005b60606000828060200190518101906100e791906125d0565b90506100f28161013e565b9392505050565b60006101397f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b8051602082015160609190600090610155906109aa565b600080549192509061019d9073ffffffffffffffffffffffffffffffffffffffff167f2f3c6eb2abe480dcea02a3f0d6883cd4e62a46b8207d85e1ff6f6e5cdee24b7a610f5f565b90506000806000806101af86886110ab565b935093509350935083600003610226576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6e6f2074656368207570646174696e670000000000000000000000000000000060448201526064015b60405180910390fd5b600061023184611301565b90506000606461024b836060015186868660800151611592565b8360c0015163ffffffff166102609190612631565b61026a919061269d565b6040517f0ff4c916000000000000000000000000000000000000000000000000000000008152600481018a9052909150819073ffffffffffffffffffffffffffffffffffffffff891690630ff4c91690602401602060405180830381865afa1580156102da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102fe91906126b1565b1015610366576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f6e6f7420656e6f756768207265736f7572636500000000000000000000000000604482015260640161021d565b6040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810189905273ffffffffffffffffffffffffffffffffffffffff881690631ab06ee5908a9084908490630ff4c91690602401602060405180830381865afa1580156103dd573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061040191906126b1565b61040b91906126ca565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815260048101929092526024820152604401600060405180830381600087803b15801561046157600080fd5b505af1158015610475573d6000803e3d6000fd5b505050506000610486898b8861171b565b90508060000361052457600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663614bfa6e6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104fd573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061052191906126b1565b90505b6000546105679073ffffffffffffffffffffffffffffffffffffffff167fbbcf72a5f12ae7e26ca180b46e62f29286fa93c2be458013c579dd8cc80ca6d9610f5f565b73ffffffffffffffffffffffffffffffffffffffff16634cc822158b6040518263ffffffff1660e01b81526004016105a191815260200190565b600060405180830381600087803b1580156105bb57600080fd5b505af11580156105cf573d6000803e3d6000fd5b5050600054610617925073ffffffffffffffffffffffffffffffffffffffff1690507f8ea20e77228f35477b65a63714a516a0798d72c5a30798f938784c431ed2c320610f5f565b73ffffffffffffffffffffffffffffffffffffffff16634cc822158b6040518263ffffffff1660e01b815260040161065191815260200190565b600060405180830381600087803b15801561066b57600080fd5b505af115801561067f573d6000803e3d6000fd5b50506000546106c7925073ffffffffffffffffffffffffffffffffffffffff1690507f7d3ae0f354d484b474c261c5881c1dd2d1fb4691793800e04688e2d791cd888a610f5f565b6040805160608101825267ffffffffffffffff8089168252428116602083019081528284018b815293517fa1bd12b200000000000000000000000000000000000000000000000000000000815260048101879052925182166024840152511660448201529051606482015273ffffffffffffffffffffffffffffffffffffffff919091169063a1bd12b290608401600060405180830381600087803b15801561076f57600080fd5b505af1158015610783573d6000803e3d6000fd5b50506000546107cb925073ffffffffffffffffffffffffffffffffffffffff1690507f92acea35713be98645f56aa52c544d79830fb401252476df1d51f7409850d719610f5f565b6040517f1ab06ee500000000000000000000000000000000000000000000000000000000815260048101839052602481018b905273ffffffffffffffffffffffffffffffffffffffff9190911690631ab06ee590604401600060405180830381600087803b15801561083c57600080fd5b505af1158015610850573d6000803e3d6000fd5b5050505061086a838667ffffffffffffffff16838c61195f565b50505050505050505050919050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146108e9576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6108f281611c0e565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b60008054339082906109f29073ffffffffffffffffffffffffffffffffffffffff167fd9a058a8db06aec9057108bd96cfe2e7f580ccef7b81e22c7f33b2889597c1f2610f5f565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810186905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015610a60573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a8491906126f6565b8015610b1e57506040517f0ff4c91600000000000000000000000000000000000000000000000000000000815260048101859052829073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401602060405180830381865afa158015610af8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1c91906126b1565b145b610b84576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f6e6f74206f776e6572206f66206775696c642063726573740000000000000000604482015260640161021d565b60008054610bc89073ffffffffffffffffffffffffffffffffffffffff167fde95e8412e4c1b59c183267e54d1bef716ab450b30c57bb7c5c88a38771301ab610f5f565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810187905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015610c36573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c5a91906126f6565b8015610d2057506040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810186905273ffffffffffffffffffffffffffffffffffffffff821690630ff4c91690602401600060405180830381865afa158015610ccc573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610d129190810190612782565b6000015163ffffffff166004145b610d86576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f6e6f74206c6561646572206f66206775696c6400000000000000000000000000604482015260640161021d565b60008054610dca9073ffffffffffffffffffffffffffffffffffffffff167f53c6c48404020c13382f2b1b9b291c13f7e76aa44e5c76f2f9384b8aa97bfbe0610f5f565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810188905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015610e38573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e5c91906126f6565b610ec2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6e6f206775696c6420626f756e64656400000000000000000000000000000000604482015260640161021d565b6040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810187905260009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401602060405180830381865afa158015610f30573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f5491906126b1565b979650505050505050565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015610fcf573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526110159190810190612825565b90508051600003611082576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f742072656769737465726564000000000000000000000000000000604482015260640161021d565b6110a381600081518110611098576110986128cb565b602002602001015190565b949350505050565b6000805481908190819081906110f79073ffffffffffffffffffffffffffffffffffffffff167f8ea20e77228f35477b65a63714a516a0798d72c5a30798f938784c431ed2c320610f5f565b600080549192509061113f9073ffffffffffffffffffffffffffffffffffffffff167fbbcf72a5f12ae7e26ca180b46e62f29286fa93c2be458013c579dd8cc80ca6d9610f5f565b6040517ffbdfa1ea000000000000000000000000000000000000000000000000000000008152600481018a905290915060009073ffffffffffffffffffffffffffffffffffffffff84169063fbdfa1ea90602401600060405180830381865afa1580156111b0573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526111f69190810190612825565b90506000806000805b84518110156112ef5760008673ffffffffffffffffffffffffffffffffffffffff16630ff4c916878481518110611238576112386128cb565b60200260200101516040518263ffffffff1660e01b815260040161125e91815260200190565b606060405180830381865afa15801561127b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061129f91906128fa565b90508c8683815181106112b4576112b46128cb565b6020026020010151036112dc57806000015194508060200151935080604001519250506112ef565b50806112e781612941565b9150506111ff565b50999b919a5098975095505050505050565b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810191909152600080546113869073ffffffffffffffffffffffffffffffffffffffff167f0804a42a4d152c34a26fdfe2d2072ae2c072cd535f1b631926ae6b6f10156d31610f5f565b6040517ffbdfa1ea0000000000000000000000000000000000000000000000000000000081526004810185905290915060009073ffffffffffffffffffffffffffffffffffffffff83169063fbdfa1ea90602401600060405180830381865afa1580156113f7573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261143d9190810190612825565b60008054919250906114859073ffffffffffffffffffffffffffffffffffffffff167fcff18fc6e785bccaceeb5098bd1a0e1b9eb64e10612dcefc604d27072aef9b48610f5f565b905060008251116114f2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f746563682067726f757020696e76616c69640000000000000000000000000000604482015260640161021d565b8073ffffffffffffffffffffffffffffffffffffffff16630ff4c91683600081518110611521576115216128cb565b60200260200101516040518263ffffffff1660e01b815260040161154791815260200190565b61010060405180830381865afa158015611565573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115899190612979565b95945050505050565b60008061159f8386611c17565b90508367ffffffffffffffff164267ffffffffffffffff161061161e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f55706461746520616c72656164792066696e6973686564000000000000000000604482015260640161021d565b600061162a4286612a30565b90508167ffffffffffffffff168167ffffffffffffffff1611156116aa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f416363656c65726174696f6e204661696c656421212100000000000000000000604482015260640161021d565b619c406116b983612710612a59565b6116c583617530612a59565b6116cf9190612a89565b6116d99190612ab5565b90508181876116e8818b612a59565b6116f29190612a59565b6116fc9190612a59565b6117069190612ab5565b67ffffffffffffffff16979650505050505050565b6000805481906117619073ffffffffffffffffffffffffffffffffffffffff167f92acea35713be98645f56aa52c544d79830fb401252476df1d51f7409850d719610f5f565b60008054919250906117a99073ffffffffffffffffffffffffffffffffffffffff167f7d3ae0f354d484b474c261c5881c1dd2d1fb4691793800e04688e2d791cd888a610f5f565b6040517ffbdfa1ea0000000000000000000000000000000000000000000000000000000081526004810188905290915060009073ffffffffffffffffffffffffffffffffffffffff84169063fbdfa1ea90602401600060405180830381865afa15801561181a573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526118609190810190612825565b905060008060005b83518110156119515760008573ffffffffffffffffffffffffffffffffffffffff16630ff4c9168684815181106118a1576118a16128cb565b60200260200101516040518263ffffffff1660e01b81526004016118c791815260200190565b606060405180830381865afa1580156118e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119089190612adc565b90508881604001510361193e57848281518110611927576119276128cb565b602002602001015193508060400151925050611951565b508061194981612941565b915050611868565b509098975050505050505050565b600080546119a39073ffffffffffffffffffffffffffffffffffffffff167fd9a058a8db06aec9057108bd96cfe2e7f580ccef7b81e22c7f33b2889597c1f2610f5f565b60008054919250906119eb9073ffffffffffffffffffffffffffffffffffffffff167f53c6c48404020c13382f2b1b9b291c13f7e76aa44e5c76f2f9384b8aa97bfbe0610f5f565b60208701516040517ffbdfa1ea000000000000000000000000000000000000000000000000000000008152600481018690529192509060009073ffffffffffffffffffffffffffffffffffffffff84169063fbdfa1ea90602401600060405180830381865afa158015611a62573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052611aa89190810190612825565b905060005b8151811015611c03578473ffffffffffffffffffffffffffffffffffffffff1663cccf7a8e838381518110611ae457611ae46128cb565b60200260200101516040518263ffffffff1660e01b8152600401611b0a91815260200190565b602060405180830381865afa158015611b27573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b4b91906126f6565b15611bf157611bf18573ffffffffffffffffffffffffffffffffffffffff16630ff4c916848481518110611b8157611b816128cb565b60200260200101516040518263ffffffff1660e01b8152600401611ba791815260200190565b602060405180830381865afa158015611bc4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611be891906126b1565b88858c8c611c2e565b80611bfb81612941565b915050611aad565b505050505050505050565b6108f281612258565b600081611c248185612a59565b6100f29190612a59565b60008054611c729073ffffffffffffffffffffffffffffffffffffffff167f2d1944d7c92d4cf7892c9f8d3312e879c70e4e7904208d77f458b7bf7c952e19610f5f565b6000805491925090611cba9073ffffffffffffffffffffffffffffffffffffffff167f1f5722521ba251ca87967835668e1714c5eb024990bbd3f5f1dcdc98dc7cbbd0610f5f565b6040517ffbdfa1ea0000000000000000000000000000000000000000000000000000000081526004810189905290915060009073ffffffffffffffffffffffffffffffffffffffff84169063fbdfa1ea90602401600060405180830381865afa158015611d2b573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052611d719190810190612825565b905060005b8151811015612010578273ffffffffffffffffffffffffffffffffffffffff1663cccf7a8e838381518110611dad57611dad6128cb565b60200260200101516040518263ffffffff1660e01b8152600401611dd391815260200190565b602060405180830381865afa158015611df0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e1491906126f6565b15611ffe5760008373ffffffffffffffffffffffffffffffffffffffff16630ff4c916848481518110611e4957611e496128cb565b60200260200101516040518263ffffffff1660e01b8152600401611e6f91815260200190565b600060405180830381865afa158015611e8c573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052611ed29190810190612b26565b9050878160800151148015611eea5750888160600151145b15611ffc578473ffffffffffffffffffffffffffffffffffffffff16634cc82215848481518110611f1d57611f1d6128cb565b60200260200101516040518263ffffffff1660e01b8152600401611f4391815260200190565b600060405180830381600087803b158015611f5d57600080fd5b505af1158015611f71573d6000803e3d6000fd5b505050508373ffffffffffffffffffffffffffffffffffffffff16634cc82215848481518110611fa357611fa36128cb565b60200260200101516040518263ffffffff1660e01b8152600401611fc991815260200190565b600060405180830381600087803b158015611fe357600080fd5b505af1158015611ff7573d6000803e3d6000fd5b505050505b505b8061200881612941565b915050611d76565b50600154604080517f614bfa6e000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff169163614bfa6e9160048083019260209291908290030181865afa158015612081573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120a591906126b1565b90508273ffffffffffffffffffffffffffffffffffffffff16633b630ba6826040518061010001604052808a6000015181526020018963ffffffff1681526020016040518060400160405280600a81526020017f6775696c6420746563680000000000000000000000000000000000000000000081525081526020018c81526020018b8152602001600115158152602001898b604001516121469190612a59565b67ffffffffffffffff16815260006020909101526040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b168152612194929190600401612bf6565b600060405180830381600087803b1580156121ae57600080fd5b505af11580156121c2573d6000803e3d6000fd5b50506040517f1ab06ee500000000000000000000000000000000000000000000000000000000815260048101849052602481018c905273ffffffffffffffffffffffffffffffffffffffff87169250631ab06ee59150604401600060405180830381600087803b15801561223557600080fd5b505af1158015612249573d6000803e3d6000fd5b50505050505050505050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460805460405173ffffffffffffffffffffffffffffffffffffffff8481169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040805190810167ffffffffffffffff8111828210171561235657612356612304565b60405290565b60405160a0810167ffffffffffffffff8111828210171561235657612356612304565b6040516060810167ffffffffffffffff8111828210171561235657612356612304565b604051610100810167ffffffffffffffff8111828210171561235657612356612304565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561240d5761240d612304565b604052919050565b600067ffffffffffffffff82111561242f5761242f612304565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b60006020828403121561246d57600080fd5b813567ffffffffffffffff81111561248457600080fd5b8201601f8101841361249557600080fd5b80356124a86124a382612415565b6123c6565b8181528560208385010111156124bd57600080fd5b81602084016020830137600091810160200191909152949350505050565b60005b838110156124f65781810151838201526020016124de565b83811115612505576000848401525b50505050565b600081518084526125238160208601602086016124db565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006100f2602083018461250b565b60006040828403121561257a57600080fd5b612582612333565b82358152602083013560208201528091505092915050565b6000602082840312156125ac57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146100f257600080fd5b6000604082840312156125e257600080fd5b6125ea612333565b82518152602083015160208201528091505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561266957612669612602565b500290565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000826126ac576126ac61266e565b500490565b6000602082840312156126c357600080fd5b5051919050565b6000828210156126dc576126dc612602565b500390565b805180151581146126f157600080fd5b919050565b60006020828403121561270857600080fd5b6100f2826126e1565b805163ffffffff811681146126f157600080fd5b600082601f83011261273657600080fd5b81516127446124a382612415565b81815284602083860101111561275957600080fd5b6110a38260208301602087016124db565b805167ffffffffffffffff811681146126f157600080fd5b60006020828403121561279457600080fd5b815167ffffffffffffffff808211156127ac57600080fd5b9083019060a082860312156127c057600080fd5b6127c861235c565b6127d183612711565b81526020830151828111156127e557600080fd5b6127f187828601612725565b60208301525060408301516040820152606083015160608201526128176080840161276a565b608082015295945050505050565b6000602080838503121561283857600080fd5b825167ffffffffffffffff8082111561285057600080fd5b818501915085601f83011261286457600080fd5b81518181111561287657612876612304565b8060051b91506128878483016123c6565b81815291830184019184810190888411156128a157600080fd5b938501935b838510156128bf578451825293850193908501906128a6565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006060828403121561290c57600080fd5b61291461237f565b825181526129246020840161276a565b60208201526129356040840161276a565b60408201529392505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361297257612972612602565b5060010190565b600061010080838503121561298d57600080fd5b6040519081019067ffffffffffffffff821181831017156129b0576129b0612304565b8160405283518152602084015160208201526129ce6040850161276a565b60408201526129df6060850161276a565b60608201526129f06080850161276a565b6080820152612a0160a0850161276a565b60a0820152612a1260c08501612711565b60c0820152612a2360e08501612711565b60e0820152949350505050565b600067ffffffffffffffff83811690831681811015612a5157612a51612602565b039392505050565b600067ffffffffffffffff80831681851681830481118215151615612a8057612a80612602565b02949350505050565b600067ffffffffffffffff808316818516808303821115612aac57612aac612602565b01949350505050565b600067ffffffffffffffff80841680612ad057612ad061266e565b92169190910492915050565b600060608284031215612aee57600080fd5b612af661237f565b612aff8361276a565b8152612b0d6020840161276a565b6020820152604083015160408201528091505092915050565b600060208284031215612b3857600080fd5b815167ffffffffffffffff80821115612b5057600080fd5b908301906101008286031215612b6557600080fd5b612b6d6123a2565b82518152612b7d60208401612711565b6020820152604083015182811115612b9457600080fd5b612ba087828601612725565b6040830152506060830151606082015260808301516080820152612bc660a084016126e1565b60a0820152612bd760c0840161276a565b60c0820152612be860e0840161276a565b60e082015295945050505050565b828152604060208201528151604082015263ffffffff602083015116606082015260006040830151610100806080850152612c3561014085018361250b565b9150606085015160a0850152608085015160c085015260a0850151151560e085015260c0850151612c718286018267ffffffffffffffff169052565b505060e084015167ffffffffffffffff81166101208501525094935050505056fea26469706673582212202f9d018d38bfe88d657ca7d9cba9652aa238c272659945ea2b6b4889166a4d5764736f6c634300080d0033";

type GuildTechAccelerateSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GuildTechAccelerateSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GuildTechAccelerateSystem__factory extends ContractFactory {
  constructor(...args: GuildTechAccelerateSystemConstructorParams) {
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
  ): Promise<GuildTechAccelerateSystem> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<GuildTechAccelerateSystem>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): GuildTechAccelerateSystem {
    return super.attach(address) as GuildTechAccelerateSystem;
  }
  override connect(signer: Signer): GuildTechAccelerateSystem__factory {
    return super.connect(signer) as GuildTechAccelerateSystem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GuildTechAccelerateSystemInterface {
    return new utils.Interface(_abi) as GuildTechAccelerateSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GuildTechAccelerateSystem {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as GuildTechAccelerateSystem;
  }
}
