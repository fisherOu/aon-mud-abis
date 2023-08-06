/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  AttackFinishSystem,
  AttackFinishSystemInterface,
} from "../AttackFinishSystem";

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
            internalType: "uint256[50]",
            name: "input",
            type: "uint256[50]",
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
        ],
        internalType: "struct AttackFinishInfo",
        name: "attackInfo",
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
  "0x60806040523480156200001157600080fd5b50604051620023303803806200233083398101604081905262000034916200022c565b818162000041336200010f565b6001600160a01b03811615620000585780620000bd565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000097573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bd91906200026b565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000105919062000183602090811b620005ea17901c565b5050505062000292565b600062000126620001ef60201b6200067b1760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022957600080fd5b50565b600080604083850312156200024057600080fd5b82516200024d8162000213565b6020840151909250620002608162000213565b809150509250929050565b6000602082840312156200027e57600080fd5b81516200028b8162000213565b9392505050565b61208e80620002a26000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe146100515780638da5cb5b1461007a578063ad739d4a146100a7578063f2fde38b146100ba575b600080fd5b61006461005f366004611790565b6100cf565b60405161007191906118ae565b60405180910390f35b6100826100f9565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100646100b5366004611953565b61013e565b6100cd6100c8366004611a35565b61056e565b005b60606000828060200190518101906100e79190611ad0565b90506100f28161013e565b9392505050565b60006101397f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b60008054606091906101869073ffffffffffffffffffffffffffffffffffffffff167fd0deb8af54f5692432398f7f62bf53c9e54e6d6a9b4dbccb012b3fe04ea432d361069f565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040161014060405180830381865afa1580156101d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101f59190611b9f565b8051909150156103175761010081015160208401516040808601516060870151875192517fa63bed3700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9095169463a63bed379461026b9490939291600401611c90565b602060405180830381865afa158015610288573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ac9190611d14565b610317576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4661696c65642061747461636b2070726f6f6620636865636b0000000000000060448201526064015b60405180910390fd5b6000805433919061035e9073ffffffffffffffffffffffffffffffffffffffff167ff40b0a0f45abda3aa3c692e8980f39cdff332ccb76fb73bb91536eebf77739c261069f565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810184905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa1580156103cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103f09190611d14565b610456576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6e6f74206368617267696e670000000000000000000000000000000000000000604482015260640161030e565b6040517f0ff4c91600000000000000000000000000000000000000000000000000000000815260048101839052429073ffffffffffffffffffffffffffffffffffffffff831690630ff4c916906024016040805180830381865afa1580156104c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104e69190611d47565b6020015167ffffffffffffffff16111561055c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f6368617267696e67206e6f742066696e69736865640000000000000000000000604482015260640161030e565b61056685836107eb565b505050919050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146105de576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105e7816115ca565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa15801561070f573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526107559190810190611d84565b905080516000036107c2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f742072656769737465726564000000000000000000000000000000604482015260640161030e565b6107e3816000815181106107d8576107d8611e2a565b602002602001015190565b949350505050565b6000805461082f9073ffffffffffffffffffffffffffffffffffffffff167f9e0b856941fb70fc9b56c896d5f39a2079c3ed041dbc5e87efbf9c503b354b7661069f565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160e060405180830381865afa158015610879573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061089d9190611e59565b60008054919250906108e59073ffffffffffffffffffffffffffffffffffffffff167f822902217469fa371c1a2cf8aec15ebcd1298447a4b5b1241e2882dd67e203da61069f565b600080549192509061092d9073ffffffffffffffffffffffffffffffffffffffff167fd7eb4644b0f312b764e14b10dbe895c6ee4acad8c1eb37a4791309b4d942e42761069f565b60008054919250906109759073ffffffffffffffffffffffffffffffffffffffff167f6c062316985e8e531501d3a588aed06abfad54c545ae238fe2d6f51a6ab9bee861069f565b60008054919250906109bd9073ffffffffffffffffffffffffffffffffffffffff167fe84ae06d0531147bba573e3e5c6876c59c1ba9645cd7e87eb5141ca18dcfd28461069f565b905060006109cc42600a611f38565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810189905290915073ffffffffffffffffffffffffffffffffffffffff86169063cccf7a8e90602401602060405180830381865afa158015610a3a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a5e9190611d14565b8015610af957508751516040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810189905273ffffffffffffffffffffffffffffffffffffffff871690630ff4c916906024016040805180830381865afa158015610ad2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af69190611f64565b51145b610b5f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f61747461636b206e6f742066726f6d20626567696e696e670000000000000000604482015260640161030e565b60005b600a81101561153f576080870151895167ffffffffffffffff90911690610b8a83601e611f96565b60328110610b9a57610b9a611e2a565b602002015111158015610bdf575060a0870151895167ffffffffffffffff90911690610bc7836028611f96565b60328110610bd757610bd7611e2a565b602002015111155b1561152d57600081118015610c0c575088516000908260328110610c0557610c05611e2a565b6020020151115b1561152d5760008573ffffffffffffffffffffffffffffffffffffffff1663fbdfa1ea8b600001518460328110610c4557610c45611e2a565b60200201516040518263ffffffff1660e01b8152600401610c6891815260200190565b600060405180830381865afa158015610c85573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610ccb9190810190611d84565b90508051600003610db6578373ffffffffffffffffffffffffffffffffffffffff16639a8536608b600001518460328110610d0857610d08611e2a565b602002015160405180604001604052806040518060400160405280600d81526020017f61747461636b5468726f7567680000000000000000000000000000000000000081525081526020018767ffffffffffffffff168152506040518363ffffffff1660e01b8152600401610d7e929190611fae565b600060405180830381600087803b158015610d9857600080fd5b505af1158015610dac573d6000803e3d6000fd5b505050505061152d565b600081600081518110610dcb57610dcb611e2a565b6020026020010151905060008673ffffffffffffffffffffffffffffffffffffffff16630ff4c916836040518263ffffffff1660e01b8152600401610e1291815260200190565b602060405180830381865afa158015610e2f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e539190611ff0565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810184905290915073ffffffffffffffffffffffffffffffffffffffff88169063cccf7a8e90602401602060405180830381865afa158015610ec1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ee59190611d14565b8015610ef15750600081115b156115295773ffffffffffffffffffffffffffffffffffffffff8716631ab06ee583610f1e600185612009565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815260048101929092526024820152604401600060405180830381600087803b158015610f7457600080fd5b505af1158015610f88573d6000803e3d6000fd5b50505050600181610f999190612009565b600003611446576040517f1ab06ee5000000000000000000000000000000000000000000000000000000008152600481018390526000602482015273ffffffffffffffffffffffffffffffffffffffff891690631ab06ee590604401600060405180830381600087803b15801561100f57600080fd5b505af1158015611023573d6000803e3d6000fd5b50506040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810185905273ffffffffffffffffffffffffffffffffffffffff8a169250634cc822159150602401600060405180830381600087803b15801561108f57600080fd5b505af11580156110a3573d6000803e3d6000fd5b50506000546110eb925073ffffffffffffffffffffffffffffffffffffffff1690507f2f3c6eb2abe480dcea02a3f0d6883cd4e62a46b8207d85e1ff6f6e5cdee24b7a61069f565b73ffffffffffffffffffffffffffffffffffffffff16634cc82215836040518263ffffffff1660e01b815260040161112591815260200190565b600060405180830381600087803b15801561113f57600080fd5b505af1158015611153573d6000803e3d6000fd5b505060005461119b925073ffffffffffffffffffffffffffffffffffffffff1690507fde4b6105f4f699e0bc3e5ad258d64c9f5c9421b67cdf5d64c05b2f4f81d30d0461069f565b73ffffffffffffffffffffffffffffffffffffffff16634cc82215836040518263ffffffff1660e01b81526004016111d591815260200190565b600060405180830381600087803b1580156111ef57600080fd5b505af1158015611203573d6000803e3d6000fd5b505060005461124b925073ffffffffffffffffffffffffffffffffffffffff1690507f8900e57ac2ff61c328bbaa69d2071a542ae5ff48c693375a49fd2937c1ef833261069f565b73ffffffffffffffffffffffffffffffffffffffff16634cc82215836040518263ffffffff1660e01b815260040161128591815260200190565b600060405180830381600087803b15801561129f57600080fd5b505af11580156112b3573d6000803e3d6000fd5b50506000546112fb925073ffffffffffffffffffffffffffffffffffffffff1690507f189eafd1a01543209399086ef2e12962fca648be4826ce2b3eb2e53ed14bf14161069f565b73ffffffffffffffffffffffffffffffffffffffff16634cc82215836040518263ffffffff1660e01b815260040161133591815260200190565b600060405180830381600087803b15801561134f57600080fd5b505af1158015611363573d6000803e3d6000fd5b505050508573ffffffffffffffffffffffffffffffffffffffff16639a8536608d60000151866032811061139957611399611e2a565b602002015160405180604001604052806040518060400160405280600481526020017f646561640000000000000000000000000000000000000000000000000000000081525081526020018967ffffffffffffffff168152506040518363ffffffff1660e01b815260040161140f929190611fae565b600060405180830381600087803b15801561142957600080fd5b505af115801561143d573d6000803e3d6000fd5b50505050611521565b8573ffffffffffffffffffffffffffffffffffffffff16639a8536608d60000151866032811061147857611478611e2a565b602002015160405180604001604052806040518060400160405280600381526020017f686974000000000000000000000000000000000000000000000000000000000081525081526020018967ffffffffffffffff168152506040518363ffffffff1660e01b81526004016114ee929190611fae565b600060405180830381600087803b15801561150857600080fd5b505af115801561151c573d6000803e3d6000fd5b505050505b50505061153f565b5050505b8061153781612020565b915050610b62565b506040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810188905273ffffffffffffffffffffffffffffffffffffffff861690634cc8221590602401600060405180830381600087803b1580156115a857600080fd5b505af11580156115bc573d6000803e3d6000fd5b505050505050505050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046080546040516105e7928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516080810167ffffffffffffffff811182821017156116d0576116d061167e565b60405290565b604051610140810167ffffffffffffffff811182821017156116d0576116d061167e565b6040805190810167ffffffffffffffff811182821017156116d0576116d061167e565b604051610640810167ffffffffffffffff811182821017156116d0576116d061167e565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156117885761178861167e565b604052919050565b600060208083850312156117a357600080fd5b823567ffffffffffffffff808211156117bb57600080fd5b818501915085601f8301126117cf57600080fd5b8135818111156117e1576117e161167e565b611811847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611741565b9150808252868482850101111561182757600080fd5b8084840185840137600090820190930192909252509392505050565b6000815180845260005b818110156118695760208185018101518683018201520161184d565b8181111561187b576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006100f26020830184611843565b60006118cb61171d565b9050806106408301848111156118e057600080fd5b835b818110156118fa5780358352602092830192016118e2565b50505092915050565b600082601f83011261191457600080fd5b61191c6116fa565b80604084018581111561192e57600080fd5b845b81811015611948578035845260209384019301611930565b509095945050505050565b6000610740828403121561196657600080fd5b61196e6116ad565b83601f84011261197d57600080fd5b61198784846118c1565b8152611997846106408501611903565b602081818401528561069f8601126119ae57600080fd5b6119b66116fa565b9150816107008601878111156119cb57600080fd5b61068087015b818110156119f1576119e38982611903565b8552938301936040016119d1565b50816040860152611a028882611903565b606086015250929695505050505050565b73ffffffffffffffffffffffffffffffffffffffff811681146105e757600080fd5b600060208284031215611a4757600080fd5b81356100f281611a13565b6000611a5c61171d565b905080610640830184811115611a7157600080fd5b835b818110156118fa578051835260209283019201611a73565b600082601f830112611a9c57600080fd5b611aa46116fa565b806040840185811115611ab657600080fd5b845b81811015611948578051845260209384019301611ab8565b60006107408284031215611ae357600080fd5b611aeb6116ad565b83601f840112611afa57600080fd5b611b048484611a52565b8152611b14846106408501611a8b565b602081818401528561069f860112611b2b57600080fd5b611b336116fa565b915081610700860187811115611b4857600080fd5b61068087015b81811015611b6e57611b608982611a8b565b855293830193604001611b4e565b50816040860152611a028882611a8b565b80518015158114611b8f57600080fd5b919050565b8051611b8f81611a13565b60006101408284031215611bb257600080fd5b611bba6116d6565b611bc383611b7f565b8152611bd160208401611b94565b6020820152611be260408401611b94565b6040820152611bf360608401611b94565b6060820152611c0460808401611b94565b6080820152611c1560a08401611b94565b60a0820152611c2660c08401611b94565b60c0820152611c3760e08401611b94565b60e0820152610100611c4a818501611b94565b90820152610120611c5c848201611b94565b908201529392505050565b8060005b6002811015611c8a578151845260209384019390910190600101611c6b565b50505050565b6107408101611c9f8287611c67565b60408083018660005b6002811015611ccf57611cbc838351611c67565b9183019160209190910190600101611ca8565b50505050611ce060c0830185611c67565b61010082018360005b6032811015611d08578151835260209283019290910190600101611ce9565b50505095945050505050565b600060208284031215611d2657600080fd5b6100f282611b7f565b805167ffffffffffffffff81168114611b8f57600080fd5b600060408284031215611d5957600080fd5b611d616116fa565b611d6a83611d2f565b8152611d7860208401611d2f565b60208201529392505050565b60006020808385031215611d9757600080fd5b825167ffffffffffffffff80821115611daf57600080fd5b818501915085601f830112611dc357600080fd5b815181811115611dd557611dd561167e565b8060051b9150611de6848301611741565b8181529183018401918481019088841115611e0057600080fd5b938501935b83851015611e1e57845182529385019390850190611e05565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060e08284031215611e6b57600080fd5b60405160e0810181811067ffffffffffffffff82111715611e8e57611e8e61167e565b604052611e9a83611d2f565b8152611ea860208401611d2f565b6020820152611eb960408401611d2f565b6040820152611eca60608401611d2f565b6060820152611edb60808401611d2f565b6080820152611eec60a08401611d2f565b60a0820152611efd60c08401611d2f565b60c08201529392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600067ffffffffffffffff808316818516808303821115611f5b57611f5b611f09565b01949350505050565b600060408284031215611f7657600080fd5b611f7e6116fa565b82518152602083015160208201528091505092915050565b60008219821115611fa957611fa9611f09565b500190565b8281526040602082015260008251604080840152611fcf6080840182611843565b905067ffffffffffffffff6020850151166060840152809150509392505050565b60006020828403121561200257600080fd5b5051919050565b60008282101561201b5761201b611f09565b500390565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361205157612051611f09565b506001019056fea26469706673582212209ab14b51c3f22d33c1a8399bf89d2eaa2fa916d1b97861d05fe647db8f8d3fea64736f6c634300080d0033";

type AttackFinishSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AttackFinishSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AttackFinishSystem__factory extends ContractFactory {
  constructor(...args: AttackFinishSystemConstructorParams) {
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
  ): Promise<AttackFinishSystem> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<AttackFinishSystem>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): AttackFinishSystem {
    return super.attach(address) as AttackFinishSystem;
  }
  override connect(signer: Signer): AttackFinishSystem__factory {
    return super.connect(signer) as AttackFinishSystem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AttackFinishSystemInterface {
    return new utils.Interface(_abi) as AttackFinishSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AttackFinishSystem {
    return new Contract(address, _abi, signerOrProvider) as AttackFinishSystem;
  }
}
