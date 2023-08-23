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
  "0x60806040523480156200001157600080fd5b506040516200264b3803806200264b83398101604081905262000034916200022c565b818162000041336200010f565b6001600160a01b03811615620000585780620000bd565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000097573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bd91906200026b565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000105919062000183602090811b620008db17901c565b5050505062000292565b600062000126620001ef60201b6200096c1760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022957600080fd5b50565b600080604083850312156200024057600080fd5b82516200024d8162000213565b6020840151909250620002608162000213565b809150509250929050565b6000602082840312156200027e57600080fd5b81516200028b8162000213565b9392505050565b6123a980620002a26000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe146100515780638da5cb5b1461007a578063ad739d4a146100a7578063f2fde38b146100ba575b600080fd5b61006461005f366004611a81565b6100cf565b6040516100719190611b9f565b60405180910390f35b6100826100f9565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100646100b5366004611c44565b61013e565b6100cd6100c8366004611d26565b61085f565b005b60606000828060200190518101906100e79190611dc1565b90506100f28161013e565b9392505050565b60006101397f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b60008054606091906101869073ffffffffffffffffffffffffffffffffffffffff167fd0deb8af54f5692432398f7f62bf53c9e54e6d6a9b4dbccb012b3fe04ea432d3610990565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040161014060405180830381865afa1580156101d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101f59190611e90565b8051909150156103175761010081015160208401516040808601516060870151875192517fa63bed3700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9095169463a63bed379461026b9490939291600401611f81565b602060405180830381865afa158015610288573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ac9190612005565b610317576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4661696c65642061747461636b2070726f6f6620636865636b0000000000000060448201526064015b60405180910390fd5b6000805433919061035e9073ffffffffffffffffffffffffffffffffffffffff167f3bd234c3ac242ccb68ea679d53643377673bad40b047c3f5a3313563fef9c068610990565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810184905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa1580156103cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103f09190612005565b801561048a57506040517f0ff4c91600000000000000000000000000000000000000000000000000000000815260048101839052829073ffffffffffffffffffffffffffffffffffffffff831690630ff4c916906024016040805180830381865afa158015610463573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104879190612038565b51145b801561052457506040517f0ff4c91600000000000000000000000000000000000000000000000000000000815260048101839052429073ffffffffffffffffffffffffffffffffffffffff831690630ff4c916906024016040805180830381865afa1580156104fd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105219190612038565b51105b61058a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6e6f74204368617267696e670000000000000000000000000000000000000000604482015260640161030e565b600080546105ce9073ffffffffffffffffffffffffffffffffffffffff167ff40b0a0f45abda3aa3c692e8980f39cdff332ccb76fb73bb91536eebf77739c2610990565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810185905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa15801561063c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106609190612005565b6106c6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6e6f74206368617267696e670000000000000000000000000000000000000000604482015260640161030e565b6040517f0ff4c91600000000000000000000000000000000000000000000000000000000815260048101849052429073ffffffffffffffffffffffffffffffffffffffff831690630ff4c916906024016040805180830381865afa158015610732573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610756919061206e565b6020015167ffffffffffffffff1611156107cc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f6368617267696e67206e6f742066696e69736865640000000000000000000000604482015260640161030e565b6107d68684610adc565b6040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810184905273ffffffffffffffffffffffffffffffffffffffff831690634cc8221590602401600060405180830381600087803b15801561083e57600080fd5b505af1158015610852573d6000803e3d6000fd5b5050505050505050919050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146108cf576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6108d8816118bb565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015610a00573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610a46919081019061209f565b90508051600003610ab3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f742072656769737465726564000000000000000000000000000000604482015260640161030e565b610ad481600081518110610ac957610ac9612145565b602002602001015190565b949350505050565b60008054610b209073ffffffffffffffffffffffffffffffffffffffff167f9e0b856941fb70fc9b56c896d5f39a2079c3ed041dbc5e87efbf9c503b354b76610990565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160e060405180830381865afa158015610b6a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b8e9190612174565b6000805491925090610bd69073ffffffffffffffffffffffffffffffffffffffff167f822902217469fa371c1a2cf8aec15ebcd1298447a4b5b1241e2882dd67e203da610990565b6000805491925090610c1e9073ffffffffffffffffffffffffffffffffffffffff167fd7eb4644b0f312b764e14b10dbe895c6ee4acad8c1eb37a4791309b4d942e427610990565b6000805491925090610c669073ffffffffffffffffffffffffffffffffffffffff167f6c062316985e8e531501d3a588aed06abfad54c545ae238fe2d6f51a6ab9bee8610990565b6000805491925090610cae9073ffffffffffffffffffffffffffffffffffffffff167fe84ae06d0531147bba573e3e5c6876c59c1ba9645cd7e87eb5141ca18dcfd284610990565b90506000610cbd42600a612253565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810189905290915073ffffffffffffffffffffffffffffffffffffffff86169063cccf7a8e90602401602060405180830381865afa158015610d2b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d4f9190612005565b8015610dea57508751516040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810189905273ffffffffffffffffffffffffffffffffffffffff871690630ff4c916906024016040805180830381865afa158015610dc3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610de7919061227f565b51145b610e50576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f61747461636b206e6f742066726f6d20626567696e696e670000000000000000604482015260640161030e565b60005b600a811015611830576080870151895167ffffffffffffffff90911690610e7b83601e6122b1565b60328110610e8b57610e8b612145565b602002015111158015610ed0575060a0870151895167ffffffffffffffff90911690610eb88360286122b1565b60328110610ec857610ec8612145565b602002015111155b1561181e57600081118015610efd575088516000908260328110610ef657610ef6612145565b6020020151115b1561181e5760008573ffffffffffffffffffffffffffffffffffffffff1663fbdfa1ea8b600001518460328110610f3657610f36612145565b60200201516040518263ffffffff1660e01b8152600401610f5991815260200190565b600060405180830381865afa158015610f76573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610fbc919081019061209f565b905080516000036110a7578373ffffffffffffffffffffffffffffffffffffffff16639a8536608b600001518460328110610ff957610ff9612145565b602002015160405180604001604052806040518060400160405280600d81526020017f61747461636b5468726f7567680000000000000000000000000000000000000081525081526020018767ffffffffffffffff168152506040518363ffffffff1660e01b815260040161106f9291906122c9565b600060405180830381600087803b15801561108957600080fd5b505af115801561109d573d6000803e3d6000fd5b505050505061181e565b6000816000815181106110bc576110bc612145565b6020026020010151905060008673ffffffffffffffffffffffffffffffffffffffff16630ff4c916836040518263ffffffff1660e01b815260040161110391815260200190565b602060405180830381865afa158015611120573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611144919061230b565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810184905290915073ffffffffffffffffffffffffffffffffffffffff88169063cccf7a8e90602401602060405180830381865afa1580156111b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111d69190612005565b80156111e25750600081115b1561181a5773ffffffffffffffffffffffffffffffffffffffff8716631ab06ee58361120f600185612324565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815260048101929092526024820152604401600060405180830381600087803b15801561126557600080fd5b505af1158015611279573d6000803e3d6000fd5b5050505060018161128a9190612324565b600003611737576040517f1ab06ee5000000000000000000000000000000000000000000000000000000008152600481018390526000602482015273ffffffffffffffffffffffffffffffffffffffff891690631ab06ee590604401600060405180830381600087803b15801561130057600080fd5b505af1158015611314573d6000803e3d6000fd5b50506040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810185905273ffffffffffffffffffffffffffffffffffffffff8a169250634cc822159150602401600060405180830381600087803b15801561138057600080fd5b505af1158015611394573d6000803e3d6000fd5b50506000546113dc925073ffffffffffffffffffffffffffffffffffffffff1690507f2f3c6eb2abe480dcea02a3f0d6883cd4e62a46b8207d85e1ff6f6e5cdee24b7a610990565b73ffffffffffffffffffffffffffffffffffffffff16634cc82215836040518263ffffffff1660e01b815260040161141691815260200190565b600060405180830381600087803b15801561143057600080fd5b505af1158015611444573d6000803e3d6000fd5b505060005461148c925073ffffffffffffffffffffffffffffffffffffffff1690507fde4b6105f4f699e0bc3e5ad258d64c9f5c9421b67cdf5d64c05b2f4f81d30d04610990565b73ffffffffffffffffffffffffffffffffffffffff16634cc82215836040518263ffffffff1660e01b81526004016114c691815260200190565b600060405180830381600087803b1580156114e057600080fd5b505af11580156114f4573d6000803e3d6000fd5b505060005461153c925073ffffffffffffffffffffffffffffffffffffffff1690507f8900e57ac2ff61c328bbaa69d2071a542ae5ff48c693375a49fd2937c1ef8332610990565b73ffffffffffffffffffffffffffffffffffffffff16634cc82215836040518263ffffffff1660e01b815260040161157691815260200190565b600060405180830381600087803b15801561159057600080fd5b505af11580156115a4573d6000803e3d6000fd5b50506000546115ec925073ffffffffffffffffffffffffffffffffffffffff1690507f189eafd1a01543209399086ef2e12962fca648be4826ce2b3eb2e53ed14bf141610990565b73ffffffffffffffffffffffffffffffffffffffff16634cc82215836040518263ffffffff1660e01b815260040161162691815260200190565b600060405180830381600087803b15801561164057600080fd5b505af1158015611654573d6000803e3d6000fd5b505050508573ffffffffffffffffffffffffffffffffffffffff16639a8536608d60000151866032811061168a5761168a612145565b602002015160405180604001604052806040518060400160405280600481526020017f646561640000000000000000000000000000000000000000000000000000000081525081526020018967ffffffffffffffff168152506040518363ffffffff1660e01b81526004016117009291906122c9565b600060405180830381600087803b15801561171a57600080fd5b505af115801561172e573d6000803e3d6000fd5b50505050611812565b8573ffffffffffffffffffffffffffffffffffffffff16639a8536608d60000151866032811061176957611769612145565b602002015160405180604001604052806040518060400160405280600381526020017f686974000000000000000000000000000000000000000000000000000000000081525081526020018967ffffffffffffffff168152506040518363ffffffff1660e01b81526004016117df9291906122c9565b600060405180830381600087803b1580156117f957600080fd5b505af115801561180d573d6000803e3d6000fd5b505050505b505050611830565b5050505b806118288161233b565b915050610e53565b506040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810188905273ffffffffffffffffffffffffffffffffffffffff861690634cc8221590602401600060405180830381600087803b15801561189957600080fd5b505af11580156118ad573d6000803e3d6000fd5b505050505050505050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046080546040516108d8928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516080810167ffffffffffffffff811182821017156119c1576119c161196f565b60405290565b604051610140810167ffffffffffffffff811182821017156119c1576119c161196f565b6040805190810167ffffffffffffffff811182821017156119c1576119c161196f565b604051610640810167ffffffffffffffff811182821017156119c1576119c161196f565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611a7957611a7961196f565b604052919050565b60006020808385031215611a9457600080fd5b823567ffffffffffffffff80821115611aac57600080fd5b818501915085601f830112611ac057600080fd5b813581811115611ad257611ad261196f565b611b02847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611a32565b91508082528684828501011115611b1857600080fd5b8084840185840137600090820190930192909252509392505050565b6000815180845260005b81811015611b5a57602081850181015186830182015201611b3e565b81811115611b6c576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006100f26020830184611b34565b6000611bbc611a0e565b905080610640830184811115611bd157600080fd5b835b81811015611beb578035835260209283019201611bd3565b50505092915050565b600082601f830112611c0557600080fd5b611c0d6119eb565b806040840185811115611c1f57600080fd5b845b81811015611c39578035845260209384019301611c21565b509095945050505050565b60006107408284031215611c5757600080fd5b611c5f61199e565b83601f840112611c6e57600080fd5b611c788484611bb2565b8152611c88846106408501611bf4565b602081818401528561069f860112611c9f57600080fd5b611ca76119eb565b915081610700860187811115611cbc57600080fd5b61068087015b81811015611ce257611cd48982611bf4565b855293830193604001611cc2565b50816040860152611cf38882611bf4565b606086015250929695505050505050565b73ffffffffffffffffffffffffffffffffffffffff811681146108d857600080fd5b600060208284031215611d3857600080fd5b81356100f281611d04565b6000611d4d611a0e565b905080610640830184811115611d6257600080fd5b835b81811015611beb578051835260209283019201611d64565b600082601f830112611d8d57600080fd5b611d956119eb565b806040840185811115611da757600080fd5b845b81811015611c39578051845260209384019301611da9565b60006107408284031215611dd457600080fd5b611ddc61199e565b83601f840112611deb57600080fd5b611df58484611d43565b8152611e05846106408501611d7c565b602081818401528561069f860112611e1c57600080fd5b611e246119eb565b915081610700860187811115611e3957600080fd5b61068087015b81811015611e5f57611e518982611d7c565b855293830193604001611e3f565b50816040860152611cf38882611d7c565b80518015158114611e8057600080fd5b919050565b8051611e8081611d04565b60006101408284031215611ea357600080fd5b611eab6119c7565b611eb483611e70565b8152611ec260208401611e85565b6020820152611ed360408401611e85565b6040820152611ee460608401611e85565b6060820152611ef560808401611e85565b6080820152611f0660a08401611e85565b60a0820152611f1760c08401611e85565b60c0820152611f2860e08401611e85565b60e0820152610100611f3b818501611e85565b90820152610120611f4d848201611e85565b908201529392505050565b8060005b6002811015611f7b578151845260209384019390910190600101611f5c565b50505050565b6107408101611f908287611f58565b60408083018660005b6002811015611fc057611fad838351611f58565b9183019160209190910190600101611f99565b50505050611fd160c0830185611f58565b61010082018360005b6032811015611ff9578151835260209283019290910190600101611fda565b50505095945050505050565b60006020828403121561201757600080fd5b6100f282611e70565b805167ffffffffffffffff81168114611e8057600080fd5b60006040828403121561204a57600080fd5b6120526119eb565b8251815261206260208401612020565b60208201529392505050565b60006040828403121561208057600080fd5b6120886119eb565b61209183612020565b815261206260208401612020565b600060208083850312156120b257600080fd5b825167ffffffffffffffff808211156120ca57600080fd5b818501915085601f8301126120de57600080fd5b8151818111156120f0576120f061196f565b8060051b9150612101848301611a32565b818152918301840191848101908884111561211b57600080fd5b938501935b8385101561213957845182529385019390850190612120565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060e0828403121561218657600080fd5b60405160e0810181811067ffffffffffffffff821117156121a9576121a961196f565b6040526121b583612020565b81526121c360208401612020565b60208201526121d460408401612020565b60408201526121e560608401612020565b60608201526121f660808401612020565b608082015261220760a08401612020565b60a082015261221860c08401612020565b60c08201529392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600067ffffffffffffffff80831681851680830382111561227657612276612224565b01949350505050565b60006040828403121561229157600080fd5b6122996119eb565b82518152602083015160208201528091505092915050565b600082198211156122c4576122c4612224565b500190565b82815260406020820152600082516040808401526122ea6080840182611b34565b905067ffffffffffffffff6020850151166060840152809150509392505050565b60006020828403121561231d57600080fd5b5051919050565b60008282101561233657612336612224565b500390565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361236c5761236c612224565b506001019056fea264697066735822122026384dcfe712c6f6ceacc5f224272a67e26fce51c9bca6bcab98e423867e9f3664736f6c634300080d0033";

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
