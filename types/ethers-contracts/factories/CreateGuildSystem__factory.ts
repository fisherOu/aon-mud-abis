/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  CreateGuildSystem,
  CreateGuildSystemInterface,
} from "../CreateGuildSystem";

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
            name: "coordHash",
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
            name: "seed",
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
            internalType: "string",
            name: "flag",
            type: "string",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "uint32",
            name: "regime",
            type: "uint32",
          },
        ],
        internalType: "struct CreateInfo",
        name: "createInfo",
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
  "0x60806040523480156200001157600080fd5b50604051620025b9380380620025b983398101604081905262000034916200022c565b818162000041336200010f565b6001600160a01b03811615620000585780620000bd565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000097573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bd91906200026b565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000105919062000183602090811b62000bbb17901c565b5050505062000292565b600062000126620001ef60201b62000c4c1760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022957600080fd5b50565b600080604083850312156200024057600080fd5b82516200024d8162000213565b6020840151909250620002608162000213565b809150509250929050565b6000602082840312156200027e57600080fd5b81516200028b8162000213565b9392505050565b61231780620002a26000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe146100515780638da5cb5b1461007a578063b22738b8146100a7578063f2fde38b146100ba575b600080fd5b61006461005f3660046117e3565b6100cf565b60405161007191906118a6565b60405180910390f35b6100826100f9565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100646100b536600461199a565b61013e565b6100cd6100c8366004611ae8565b610b3f565b005b60606000828060200190518101906100e79190611be9565b90506100f28161013e565b9392505050565b60006101397f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b60008054606091906101869073ffffffffffffffffffffffffffffffffffffffff167fd0deb8af54f5692432398f7f62bf53c9e54e6d6a9b4dbccb012b3fe04ea432d3610c70565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040161014060405180830381865afa1580156101d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101f59190611d23565b805190915015610331576000604051806080016040528085600001518152602001856060015181526020018560200151815260200185604001518152509050816020015173ffffffffffffffffffffffffffffffffffffffff16635fe8c13b85608001518660a001518760c00151856040518563ffffffff1660e01b81526004016102839493929190611e0e565b602060405180830381865afa1580156102a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c49190611e92565b61032f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f4661696c6564206775696c6420636f6f72642070726f6f6620636865636b000060448201526064015b60405180910390fd5b505b3361033a610dbc565b6000805461037e9073ffffffffffffffffffffffffffffffffffffffff167ff899011875ecdd0cff874cbbf66c1a2682791e10ae993d0a0ef3d2530849a7de610c70565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b8152600401600060405180830381865afa1580156103c8573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261040e9190810190611ead565b905061041d8160000151610f23565b600154604080517f614bfa6e000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff169163614bfa6e9160048083019260209291908290030181865afa15801561048d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b19190611fd7565b90506104bc8161117e565b6000546104ff9073ffffffffffffffffffffffffffffffffffffffff167f47847aa6dad6656997b23b837b7a178fcf6ee815ad8065af73bc07856277a776610c70565b73ffffffffffffffffffffffffffffffffffffffff1663dc7e8010826040518061010001604052808781526020018a60e0015181526020018a610100015181526020018a610120015181526020014267ffffffffffffffff1681526020018a610140015163ffffffff168152602001866020015163ffffffff16815260200160008152506040518363ffffffff1660e01b81526004016105a0929190611ff0565b600060405180830381600087803b1580156105ba57600080fd5b505af11580156105ce573d6000803e3d6000fd5b505050506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663614bfa6e6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610641573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106659190611fd7565b6000549091506106ab9073ffffffffffffffffffffffffffffffffffffffff167fde95e8412e4c1b59c183267e54d1bef716ab450b30c57bb7c5c88a38771301ab610c70565b6040805160a081018252600480825260e087015160208301528651828401526000606083015267ffffffffffffffff4216608083015291517fa829044000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff939093169263a8290440926107349286929091016120d2565b600060405180830381600087803b15801561074e57600080fd5b505af1158015610762573d6000803e3d6000fd5b50506000546107aa925073ffffffffffffffffffffffffffffffffffffffff1690507fd7eb4644b0f312b764e14b10dbe895c6ee4acad8c1eb37a4791309b4d942e427610c70565b87516040517f1ab06ee500000000000000000000000000000000000000000000000000000000815260048101859052602481019190915273ffffffffffffffffffffffffffffffffffffffff9190911690631ab06ee590604401600060405180830381600087803b15801561081e57600080fd5b505af1158015610832573d6000803e3d6000fd5b505060005461087a925073ffffffffffffffffffffffffffffffffffffffff1690507fd9a058a8db06aec9057108bd96cfe2e7f580ccef7b81e22c7f33b2889597c1f2610c70565b6040517f1ab06ee5000000000000000000000000000000000000000000000000000000008152600481018390526024810186905273ffffffffffffffffffffffffffffffffffffffff9190911690631ab06ee590604401600060405180830381600087803b1580156108eb57600080fd5b505af11580156108ff573d6000803e3d6000fd5b5050600054610947925073ffffffffffffffffffffffffffffffffffffffff1690507f53c6c48404020c13382f2b1b9b291c13f7e76aa44e5c76f2f9384b8aa97bfbe0610c70565b6040517f1ab06ee5000000000000000000000000000000000000000000000000000000008152600481018390526024810184905273ffffffffffffffffffffffffffffffffffffffff9190911690631ab06ee590604401600060405180830381600087803b1580156109b857600080fd5b505af11580156109cc573d6000803e3d6000fd5b505060008054909250610a16915073ffffffffffffffffffffffffffffffffffffffff167f540f4a4851e5d34b3358a3dee845da1e4701d9bee45567aba7c95c4239185cbd610c70565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810187905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015610a84573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aa89190611e92565b610b34576040517f1ab06ee5000000000000000000000000000000000000000000000000000000008152600481018690526024810183905273ffffffffffffffffffffffffffffffffffffffff821690631ab06ee590604401600060405180830381600087803b158015610b1b57600080fd5b505af1158015610b2f573d6000803e3d6000fd5b505050505b505050505050919050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610baf576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610bb881611598565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015610ce0573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610d269190810190612139565b90508051600003610d93576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f7420726567697374657265640000000000000000000000000000006044820152606401610326565b610db481600081518110610da957610da96121df565b602002602001015190565b949350505050565b60008054339190610e039073ffffffffffffffffffffffffffffffffffffffff167fd9a058a8db06aec9057108bd96cfe2e7f580ccef7b81e22c7f33b2889597c1f2610c70565b6040517ffbdfa1ea0000000000000000000000000000000000000000000000000000000081526004810184905290915073ffffffffffffffffffffffffffffffffffffffff82169063fbdfa1ea90602401600060405180830381865afa158015610e71573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610eb79190810190612139565b5115610f1f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f6c65616465722063616e6e6f7420696e2061206775696c6400000000000000006044820152606401610326565b5050565b60008054339190610f6a9073ffffffffffffffffffffffffffffffffffffffff167f2f3c6eb2abe480dcea02a3f0d6883cd4e62a46b8207d85e1ff6f6e5cdee24b7a610c70565b6040517f0ff4c91600000000000000000000000000000000000000000000000000000000815260048101849052909150839073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401602060405180830381865afa158015610fda573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ffe9190611fd7565b1015611066576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6c61636b206f66207265736f75726365730000000000000000000000000000006044820152606401610326565b6040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff821690631ab06ee590849086908490630ff4c91690602401602060405180830381865afa1580156110dd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111019190611fd7565b61110b919061220e565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815260048101929092526024820152604401600060405180830381600087803b15801561116157600080fd5b505af1158015611175573d6000803e3d6000fd5b50505050505050565b6000546111c19073ffffffffffffffffffffffffffffffffffffffff167f2f3c6eb2abe480dcea02a3f0d6883cd4e62a46b8207d85e1ff6f6e5cdee24b7a610c70565b6040517f1ab06ee5000000000000000000000000000000000000000000000000000000008152600481018390526000602482015273ffffffffffffffffffffffffffffffffffffffff9190911690631ab06ee590604401600060405180830381600087803b15801561123257600080fd5b505af1158015611246573d6000803e3d6000fd5b505060005461128e925073ffffffffffffffffffffffffffffffffffffffff1690507f6c062316985e8e531501d3a588aed06abfad54c545ae238fe2d6f51a6ab9bee8610c70565b6040517f1ab06ee5000000000000000000000000000000000000000000000000000000008152600481018390526002602482015273ffffffffffffffffffffffffffffffffffffffff9190911690631ab06ee590604401600060405180830381600087803b1580156112ff57600080fd5b505af1158015611313573d6000803e3d6000fd5b505060005461135b925073ffffffffffffffffffffffffffffffffffffffff1690507f0f2f1f89defcb2e35e7a49b75f5a0777c977a6210b31a42137e9620ef524f0dc610c70565b6040517fd93c413f000000000000000000000000000000000000000000000000000000008152600481018390526002602482015273ffffffffffffffffffffffffffffffffffffffff919091169063d93c413f90604401600060405180830381600087803b1580156113cc57600080fd5b505af11580156113e0573d6000803e3d6000fd5b50506000805490925061142a915073ffffffffffffffffffffffffffffffffffffffff167fdc602e66a6d8c84d0c8d6c4292d80341393a1e04ff02909a12718a4216d3a9f7610c70565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b8152600401608060405180830381865afa158015611474573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114989190612264565b6000549091506114de9073ffffffffffffffffffffffffffffffffffffffff167f189eafd1a01543209399086ef2e12962fca648be4826ce2b3eb2e53ed14bf141610c70565b60408051808201825267ffffffffffffffff4281168252845181166020830190815292517f4e6641a9000000000000000000000000000000000000000000000000000000008152600481018790529151811660248301529151909116604482015273ffffffffffffffffffffffffffffffffffffffff9190911690634e6641a990606401600060405180830381600087803b15801561157c57600080fd5b505af1158015611590573d6000803e3d6000fd5b505050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051610bb8928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610160810167ffffffffffffffff8111828210171561169f5761169f61164c565b60405290565b604051610140810167ffffffffffffffff8111828210171561169f5761169f61164c565b604051610100810167ffffffffffffffff8111828210171561169f5761169f61164c565b6040805190810167ffffffffffffffff8111828210171561169f5761169f61164c565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156117575761175761164c565b604052919050565b600067ffffffffffffffff8211156117795761177961164c565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b60006117b86117b38461175f565b611710565b90508281528383830111156117cc57600080fd5b828260208301376000602084830101529392505050565b6000602082840312156117f557600080fd5b813567ffffffffffffffff81111561180c57600080fd5b8201601f8101841361181d57600080fd5b610db4848235602084016117a5565b60005b8381101561184757818101518382015260200161182f565b83811115611856576000848401525b50505050565b6000815180845261187481602086016020860161182c565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006100f2602083018461185c565b600082601f8301126118ca57600080fd5b6118d26116ed565b8060408401858111156118e457600080fd5b845b818110156118fe5780358452602093840193016118e6565b509095945050505050565b600082601f83011261191a57600080fd5b6119226116ed565b80608084018581111561193457600080fd5b845b818110156118fe5761194887826118b9565b8452602090930192604001611936565b600082601f83011261196957600080fd5b6100f2838335602085016117a5565b63ffffffff81168114610bb857600080fd5b803561199581611978565b919050565b6000602082840312156119ac57600080fd5b813567ffffffffffffffff808211156119c457600080fd5b9083019061020082860312156119d957600080fd5b6119e161167b565b82358152602083013560208201526040830135604082015260608301356060820152611a1086608085016118b9565b6080820152611a228660c08501611909565b60a0820152610140611a36878286016118b9565b60c083015261018084013583811115611a4e57600080fd5b611a5a88828701611958565b60e0840152506101a084013583811115611a7357600080fd5b611a7f88828701611958565b610100840152506101c084013583811115611a9957600080fd5b611aa588828701611958565b61012084015250611ab96101e0850161198a565b9082015295945050505050565b73ffffffffffffffffffffffffffffffffffffffff81168114610bb857600080fd5b600060208284031215611afa57600080fd5b81356100f281611ac6565b600082601f830112611b1657600080fd5b611b1e6116ed565b806040840185811115611b3057600080fd5b845b818110156118fe578051845260209384019301611b32565b600082601f830112611b5b57600080fd5b611b636116ed565b806080840185811115611b7557600080fd5b845b818110156118fe57611b898782611b05565b8452602090930192604001611b77565b600082601f830112611baa57600080fd5b8151611bb86117b38261175f565b818152846020838601011115611bcd57600080fd5b610db482602083016020870161182c565b805161199581611978565b600060208284031215611bfb57600080fd5b815167ffffffffffffffff80821115611c1357600080fd5b908301906102008286031215611c2857600080fd5b611c3061167b565b82518152602083015160208201526040830151604082015260608301516060820152611c5f8660808501611b05565b6080820152611c718660c08501611b4a565b60a0820152610140611c8587828601611b05565b60c083015261018084015183811115611c9d57600080fd5b611ca988828701611b99565b60e0840152506101a084015183811115611cc257600080fd5b611cce88828701611b99565b610100840152506101c084015183811115611ce857600080fd5b611cf488828701611b99565b61012084015250611ab96101e08501611bde565b8051801515811461199557600080fd5b805161199581611ac6565b60006101408284031215611d3657600080fd5b611d3e6116a5565b611d4783611d08565b8152611d5560208401611d18565b6020820152611d6660408401611d18565b6040820152611d7760608401611d18565b6060820152611d8860808401611d18565b6080820152611d9960a08401611d18565b60a0820152611daa60c08401611d18565b60c0820152611dbb60e08401611d18565b60e0820152610100611dce818501611d18565b90820152610120611de0848201611d18565b908201529392505050565b8060005b6002811015611856578151845260209384019390910190600101611def565b6101808101611e1d8287611deb565b60408083018660005b6002811015611e4d57611e3a838351611deb565b9183019160209190910190600101611e26565b50505050611e5e60c0830185611deb565b61010082018360005b6004811015611e86578151835260209283019290910190600101611e67565b50505095945050505050565b600060208284031215611ea457600080fd5b6100f282611d08565b600060208284031215611ebf57600080fd5b815167ffffffffffffffff80821115611ed757600080fd5b908301906101008286031215611eec57600080fd5b611ef46116c9565b82518152611f0460208401611bde565b6020820152611f1560408401611bde565b6040820152606083015182811115611f2c57600080fd5b611f3887828601611b99565b606083015250608083015182811115611f5057600080fd5b611f5c87828601611b99565b60808301525060a083015182811115611f7457600080fd5b611f8087828601611b99565b60a08301525060c083015182811115611f9857600080fd5b611fa487828601611b99565b60c08301525060e083015182811115611fbc57600080fd5b611fc887828601611b99565b60e08301525095945050505050565b600060208284031215611fe957600080fd5b5051919050565b82815260406020820152815160408201526000602083015161010080606085015261201f61014085018361185c565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08086850301608087015261205b848361185c565b935060608701519150808685030160a087015250612079838261185c565b925050608085015161209760c086018267ffffffffffffffff169052565b5060a085015163ffffffff811660e08601525060c085015163ffffffff811685830152505060e0840151610120840152809150509392505050565b8281526040602082015263ffffffff82511660408201526000602083015160a0606084015261210460e084018261185c565b905060408401516080840152606084015160a084015267ffffffffffffffff60808501511660c0840152809150509392505050565b6000602080838503121561214c57600080fd5b825167ffffffffffffffff8082111561216457600080fd5b818501915085601f83011261217857600080fd5b81518181111561218a5761218a61164c565b8060051b915061219b848301611710565b81815291830184019184810190888411156121b557600080fd5b938501935b838510156121d3578451825293850193908501906121ba565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082821015612247577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500390565b805167ffffffffffffffff8116811461199557600080fd5b60006080828403121561227657600080fd5b6040516080810181811067ffffffffffffffff821117156122995761229961164c565b6040526122a58361224c565b81526122b36020840161224c565b60208201526122c46040840161224c565b60408201526122d56060840161224c565b6060820152939250505056fea2646970667358221220c75e939173928c26dffa2695d8c1c17812acf6e1a67412fecd7264f7bc892aab64736f6c634300080d0033";

type CreateGuildSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CreateGuildSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CreateGuildSystem__factory extends ContractFactory {
  constructor(...args: CreateGuildSystemConstructorParams) {
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
  ): Promise<CreateGuildSystem> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<CreateGuildSystem>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): CreateGuildSystem {
    return super.attach(address) as CreateGuildSystem;
  }
  override connect(signer: Signer): CreateGuildSystem__factory {
    return super.connect(signer) as CreateGuildSystem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CreateGuildSystemInterface {
    return new utils.Interface(_abi) as CreateGuildSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CreateGuildSystem {
    return new Contract(address, _abi, signerOrProvider) as CreateGuildSystem;
  }
}
