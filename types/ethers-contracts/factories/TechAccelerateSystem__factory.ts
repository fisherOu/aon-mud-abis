/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  TechAccelerateSystem,
  TechAccelerateSystemInterface,
} from "../TechAccelerateSystem";

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
  "0x60806040523480156200001157600080fd5b50604051620026b6380380620026b683398101604081905262000034916200022c565b818162000041336200010f565b6001600160a01b03811615620000585780620000bd565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000097573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bd91906200026b565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000105919062000183602090811b6200094d17901c565b5050505062000292565b600062000126620001ef60201b620009de1760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022957600080fd5b50565b600080604083850312156200024057600080fd5b82516200024d8162000213565b6020840151909250620002608162000213565b809150509250929050565b6000602082840312156200027e57600080fd5b81516200028b8162000213565b9392505050565b61241480620002a26000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe146100515780638da5cb5b1461007a578063a85bbf29146100a7578063f2fde38b146100ba575b600080fd5b61006461005f366004611c66565b6100cf565b6040516100719190611d60565b60405180910390f35b6100826100f9565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100646100b5366004611d73565b61013e565b6100cd6100c8366004611d97565b6108d1565b005b60606000828060200190518101906100e79190611dcd565b90506100f28161013e565b9392505050565b60006101397f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b80516060903361014d81610a02565b6101b8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f706c61796572206465616400000000000000000000000000000000000000000060448201526064015b60405180910390fd5b600080546101fc9073ffffffffffffffffffffffffffffffffffffffff167f2f3c6eb2abe480dcea02a3f0d6883cd4e62a46b8207d85e1ff6f6e5cdee24b7a610ac7565b905060008060008061020d87610c13565b93509350935093508360000361027f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6e6f2074656368207570646174696e670000000000000000000000000000000060448201526064016101af565b600061028a84610e6d565b9050600060646102a48360600151868686608001516110fe565b8360c0015163ffffffff166102b99190611e20565b6102c39190611e8c565b6040517f0ff4c916000000000000000000000000000000000000000000000000000000008152600481018a9052909150819073ffffffffffffffffffffffffffffffffffffffff891690630ff4c91690602401602060405180830381865afa158015610333573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103579190611ea0565b10156103bf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f6e6f7420656e6f756768207265736f757263650000000000000000000000000060448201526064016101af565b6040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810189905273ffffffffffffffffffffffffffffffffffffffff881690631ab06ee5908a9084908490630ff4c91690602401602060405180830381865afa158015610436573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061045a9190611ea0565b6104649190611eb9565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815260048101929092526024820152604401600060405180830381600087803b1580156104ba57600080fd5b505af11580156104ce573d6000803e3d6000fd5b5050505060006104de8a87611287565b90508060000361057c57600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663614bfa6e6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610555573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105799190611ea0565b90505b6000546105bf9073ffffffffffffffffffffffffffffffffffffffff167fbbcf72a5f12ae7e26ca180b46e62f29286fa93c2be458013c579dd8cc80ca6d9610ac7565b73ffffffffffffffffffffffffffffffffffffffff16634cc822158b6040518263ffffffff1660e01b81526004016105f991815260200190565b600060405180830381600087803b15801561061357600080fd5b505af1158015610627573d6000803e3d6000fd5b505060005461066f925073ffffffffffffffffffffffffffffffffffffffff1690507f8ea20e77228f35477b65a63714a516a0798d72c5a30798f938784c431ed2c320610ac7565b73ffffffffffffffffffffffffffffffffffffffff16634cc822158b6040518263ffffffff1660e01b81526004016106a991815260200190565b600060405180830381600087803b1580156106c357600080fd5b505af11580156106d7573d6000803e3d6000fd5b505060005461071f925073ffffffffffffffffffffffffffffffffffffffff1690507f7d3ae0f354d484b474c261c5881c1dd2d1fb4691793800e04688e2d791cd888a610ac7565b6040805160608101825267ffffffffffffffff8089168252428116602083019081528284018b815293517fa1bd12b200000000000000000000000000000000000000000000000000000000815260048101879052925182166024840152511660448201529051606482015273ffffffffffffffffffffffffffffffffffffffff919091169063a1bd12b290608401600060405180830381600087803b1580156107c757600080fd5b505af11580156107db573d6000803e3d6000fd5b5050600054610823925073ffffffffffffffffffffffffffffffffffffffff1690507f92acea35713be98645f56aa52c544d79830fb401252476df1d51f7409850d719610ac7565b6040517f1ab06ee500000000000000000000000000000000000000000000000000000000815260048101839052602481018b905273ffffffffffffffffffffffffffffffffffffffff9190911690631ab06ee590604401600060405180830381600087803b15801561089457600080fd5b505af11580156108a8573d6000803e3d6000fd5b505050506108c2838667ffffffffffffffff16838c6114cd565b50505050505050505050919050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610941576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61094a81611a66565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b60008054610a469073ffffffffffffffffffffffffffffffffffffffff167f8900e57ac2ff61c328bbaa69d2071a542ae5ff48c693375a49fd2937c1ef8332610ac7565b73ffffffffffffffffffffffffffffffffffffffff1663cccf7a8e836040518263ffffffff1660e01b8152600401610a8091815260200190565b602060405180830381865afa158015610a9d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ac19190611ee5565b92915050565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015610b37573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610b7d9190810190611f00565b90508051600003610bea576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f74207265676973746572656400000000000000000000000000000060448201526064016101af565b610c0b81600081518110610c0057610c00611fa6565b602002602001015190565b949350505050565b600080808080336000805491925090610c629073ffffffffffffffffffffffffffffffffffffffff167f8ea20e77228f35477b65a63714a516a0798d72c5a30798f938784c431ed2c320610ac7565b6000805491925090610caa9073ffffffffffffffffffffffffffffffffffffffff167fbbcf72a5f12ae7e26ca180b46e62f29286fa93c2be458013c579dd8cc80ca6d9610ac7565b6040517ffbdfa1ea0000000000000000000000000000000000000000000000000000000081526004810185905290915060009073ffffffffffffffffffffffffffffffffffffffff84169063fbdfa1ea90602401600060405180830381865afa158015610d1b573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610d619190810190611f00565b90506000806000805b8451811015610e5a5760008673ffffffffffffffffffffffffffffffffffffffff16630ff4c916878481518110610da357610da3611fa6565b60200260200101516040518263ffffffff1660e01b8152600401610dc991815260200190565b606060405180830381865afa158015610de6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e0a9190611fed565b90508d868381518110610e1f57610e1f611fa6565b602002602001015103610e475780600001519450806020015193508060400151925050610e5a565b5080610e5281612034565b915050610d6a565b509a9b919a909950975095505050505050565b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915260008054610ef29073ffffffffffffffffffffffffffffffffffffffff167f0804a42a4d152c34a26fdfe2d2072ae2c072cd535f1b631926ae6b6f10156d31610ac7565b6040517ffbdfa1ea0000000000000000000000000000000000000000000000000000000081526004810185905290915060009073ffffffffffffffffffffffffffffffffffffffff83169063fbdfa1ea90602401600060405180830381865afa158015610f63573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610fa99190810190611f00565b6000805491925090610ff19073ffffffffffffffffffffffffffffffffffffffff167fcff18fc6e785bccaceeb5098bd1a0e1b9eb64e10612dcefc604d27072aef9b48610ac7565b9050600082511161105e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f746563682067726f757020696e76616c6964000000000000000000000000000060448201526064016101af565b8073ffffffffffffffffffffffffffffffffffffffff16630ff4c9168360008151811061108d5761108d611fa6565b60200260200101516040518263ffffffff1660e01b81526004016110b391815260200190565b61010060405180830381865afa1580156110d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110f59190612080565b95945050505050565b60008061110b8386611a6f565b90508367ffffffffffffffff164267ffffffffffffffff161061118a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f55706461746520616c72656164792066696e697368656400000000000000000060448201526064016101af565b60006111964286612137565b90508167ffffffffffffffff168167ffffffffffffffff161115611216576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f416363656c65726174696f6e204661696c65642121210000000000000000000060448201526064016101af565b619c4061122583612710612160565b61123183617530612160565b61123b9190612190565b61124591906121bc565b9050818187611254818b612160565b61125e9190612160565b6112689190612160565b61127291906121bc565b67ffffffffffffffff16979650505050505050565b60008054339082906112cf9073ffffffffffffffffffffffffffffffffffffffff167f92acea35713be98645f56aa52c544d79830fb401252476df1d51f7409850d719610ac7565b60008054919250906113179073ffffffffffffffffffffffffffffffffffffffff167f7d3ae0f354d484b474c261c5881c1dd2d1fb4691793800e04688e2d791cd888a610ac7565b6040517ffbdfa1ea0000000000000000000000000000000000000000000000000000000081526004810185905290915060009073ffffffffffffffffffffffffffffffffffffffff84169063fbdfa1ea90602401600060405180830381865afa158015611388573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526113ce9190810190611f00565b905060008060005b83518110156114bf5760008573ffffffffffffffffffffffffffffffffffffffff16630ff4c91686848151811061140f5761140f611fa6565b60200260200101516040518263ffffffff1660e01b815260040161143591815260200190565b606060405180830381865afa158015611452573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061147691906121e3565b9050898160400151036114ac5784828151811061149557611495611fa6565b6020026020010151935080604001519250506114bf565b50806114b781612034565b9150506113d6565b509098975050505050505050565b600080546115119073ffffffffffffffffffffffffffffffffffffffff167f2d1944d7c92d4cf7892c9f8d3312e879c70e4e7904208d77f458b7bf7c952e19610ac7565b6040517ffbdfa1ea0000000000000000000000000000000000000000000000000000000081526004810184905290915060009073ffffffffffffffffffffffffffffffffffffffff83169063fbdfa1ea90602401600060405180830381865afa158015611582573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526115c89190810190611f00565b60008054919250906116109073ffffffffffffffffffffffffffffffffffffffff167f1f5722521ba251ca87967835668e1714c5eb024990bbd3f5f1dcdc98dc7cbbd0610ac7565b602088015190915060005b83518110156118b5578273ffffffffffffffffffffffffffffffffffffffff1663cccf7a8e85838151811061165257611652611fa6565b60200260200101516040518263ffffffff1660e01b815260040161167891815260200190565b602060405180830381865afa158015611695573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116b99190611ee5565b156118a35760008373ffffffffffffffffffffffffffffffffffffffff16630ff4c9168684815181106116ee576116ee611fa6565b60200260200101516040518263ffffffff1660e01b815260040161171491815260200190565b600060405180830381865afa158015611731573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526117779190810190612272565b905082816080015114801561178f5750878160600151145b156118a1578573ffffffffffffffffffffffffffffffffffffffff16634cc822158684815181106117c2576117c2611fa6565b60200260200101516040518263ffffffff1660e01b81526004016117e891815260200190565b600060405180830381600087803b15801561180257600080fd5b505af1158015611816573d6000803e3d6000fd5b505050508373ffffffffffffffffffffffffffffffffffffffff16634cc8221586848151811061184857611848611fa6565b60200260200101516040518263ffffffff1660e01b815260040161186e91815260200190565b600060405180830381600087803b15801561188857600080fd5b505af115801561189c573d6000803e3d6000fd5b505050505b505b806118ad81612034565b91505061161b565b508173ffffffffffffffffffffffffffffffffffffffff16633b630ba6876040518061010001604052808c6000015181526020018b63ffffffff1681526020016040518060400160405280600481526020017f746563680000000000000000000000000000000000000000000000000000000081525081526020018a81526020018581526020016001151581526020018b8d604001516119559190612160565b67ffffffffffffffff16815260006020909101526040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b1681526119a3929190600401612342565b600060405180830381600087803b1580156119bd57600080fd5b505af11580156119d1573d6000803e3d6000fd5b50506040517f1ab06ee5000000000000000000000000000000000000000000000000000000008152600481018990526024810188905273ffffffffffffffffffffffffffffffffffffffff87169250631ab06ee59150604401600060405180830381600087803b158015611a4457600080fd5b505af1158015611a58573d6000803e3d6000fd5b505050505050505050505050565b61094a81611a86565b600081611a7c8185612160565b6100f29190612160565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460805460405173ffffffffffffffffffffffffffffffffffffffff8481169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516020810167ffffffffffffffff81118282101715611b8457611b84611b32565b60405290565b6040516060810167ffffffffffffffff81118282101715611b8457611b84611b32565b604051610100810167ffffffffffffffff81118282101715611b8457611b84611b32565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611c1857611c18611b32565b604052919050565b600067ffffffffffffffff821115611c3a57611c3a611b32565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600060208284031215611c7857600080fd5b813567ffffffffffffffff811115611c8f57600080fd5b8201601f81018413611ca057600080fd5b8035611cb3611cae82611c20565b611bd1565b818152856020838501011115611cc857600080fd5b81602084016020830137600091810160200191909152949350505050565b60005b83811015611d01578181015183820152602001611ce9565b83811115611d10576000848401525b50505050565b60008151808452611d2e816020860160208601611ce6565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006100f26020830184611d16565b600060208284031215611d8557600080fd5b611d8d611b61565b9135825250919050565b600060208284031215611da957600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146100f257600080fd5b600060208284031215611ddf57600080fd5b611de7611b61565b9151825250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611e5857611e58611df1565b500290565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600082611e9b57611e9b611e5d565b500490565b600060208284031215611eb257600080fd5b5051919050565b600082821015611ecb57611ecb611df1565b500390565b80518015158114611ee057600080fd5b919050565b600060208284031215611ef757600080fd5b6100f282611ed0565b60006020808385031215611f1357600080fd5b825167ffffffffffffffff80821115611f2b57600080fd5b818501915085601f830112611f3f57600080fd5b815181811115611f5157611f51611b32565b8060051b9150611f62848301611bd1565b8181529183018401918481019088841115611f7c57600080fd5b938501935b83851015611f9a57845182529385019390850190611f81565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b805167ffffffffffffffff81168114611ee057600080fd5b600060608284031215611fff57600080fd5b612007611b8a565b8251815261201760208401611fd5565b602082015261202860408401611fd5565b60408201529392505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361206557612065611df1565b5060010190565b805163ffffffff81168114611ee057600080fd5b600061010080838503121561209457600080fd5b6040519081019067ffffffffffffffff821181831017156120b7576120b7611b32565b8160405283518152602084015160208201526120d560408501611fd5565b60408201526120e660608501611fd5565b60608201526120f760808501611fd5565b608082015261210860a08501611fd5565b60a082015261211960c0850161206c565b60c082015261212a60e0850161206c565b60e0820152949350505050565b600067ffffffffffffffff8381169083168181101561215857612158611df1565b039392505050565b600067ffffffffffffffff8083168185168183048111821515161561218757612187611df1565b02949350505050565b600067ffffffffffffffff8083168185168083038211156121b3576121b3611df1565b01949350505050565b600067ffffffffffffffff808416806121d7576121d7611e5d565b92169190910492915050565b6000606082840312156121f557600080fd5b6121fd611b8a565b61220683611fd5565b815261221460208401611fd5565b6020820152604083015160408201528091505092915050565b600082601f83011261223e57600080fd5b815161224c611cae82611c20565b81815284602083860101111561226157600080fd5b610c0b826020830160208701611ce6565b60006020828403121561228457600080fd5b815167ffffffffffffffff8082111561229c57600080fd5b9083019061010082860312156122b157600080fd5b6122b9611bad565b825181526122c96020840161206c565b60208201526040830151828111156122e057600080fd5b6122ec8782860161222d565b604083015250606083015160608201526080830151608082015261231260a08401611ed0565b60a082015261232360c08401611fd5565b60c082015261233460e08401611fd5565b60e082015295945050505050565b828152604060208201528151604082015263ffffffff602083015116606082015260006040830151610100806080850152612381610140850183611d16565b9150606085015160a0850152608085015160c085015260a0850151151560e085015260c08501516123bd8286018267ffffffffffffffff169052565b505060e084015167ffffffffffffffff81166101208501525094935050505056fea264697066735822122061013b65547ee914a1141e5d6f19e17b713c95efda3e6e3e6e150cd88430fd0664736f6c634300080d0033";

type TechAccelerateSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TechAccelerateSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TechAccelerateSystem__factory extends ContractFactory {
  constructor(...args: TechAccelerateSystemConstructorParams) {
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
  ): Promise<TechAccelerateSystem> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<TechAccelerateSystem>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): TechAccelerateSystem {
    return super.attach(address) as TechAccelerateSystem;
  }
  override connect(signer: Signer): TechAccelerateSystem__factory {
    return super.connect(signer) as TechAccelerateSystem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TechAccelerateSystemInterface {
    return new utils.Interface(_abi) as TechAccelerateSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TechAccelerateSystem {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TechAccelerateSystem;
  }
}
