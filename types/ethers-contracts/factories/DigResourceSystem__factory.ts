/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  DigResourceSystem,
  DigResourceSystemInterface,
} from "../DigResourceSystem";

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
            internalType: "uint256",
            name: "remain",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cache",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "powNonce",
            type: "uint256",
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
  "0x60806040523480156200001157600080fd5b50604051620021a6380380620021a683398101604081905262000034916200022c565b818162000041336200010f565b6001600160a01b03811615620000585780620000bd565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000097573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bd91906200026b565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000105919062000183602090811b62000b6217901c565b5050505062000292565b600062000126620001ef60201b62000bf31760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022957600080fd5b50565b600080604083850312156200024057600080fd5b82516200024d8162000213565b6020840151909250620002608162000213565b809150509250929050565b6000602082840312156200027e57600080fd5b81516200028b8162000213565b9392505050565b611f0480620002a26000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe146100515780635184adb61461007a5780638da5cb5b1461008d578063f2fde38b146100ba575b600080fd5b61006461005f3660046113bd565b6100cf565b6040516100719190611470565b60405180910390f35b610064610088366004611582565b6100f9565b610095610aa1565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100cd6100c8366004611663565b610ae6565b005b60606000828060200190518101906100e79190611714565b90506100f2816100f9565b9392505050565b60008054606091906101419073ffffffffffffffffffffffffffffffffffffffff167fd0deb8af54f5692432398f7f62bf53c9e54e6d6a9b4dbccb012b3fe04ea432d3610c17565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040161014060405180830381865afa15801561018c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101b091906117f3565b80519091501561030c5760006040518060e001604052808560000151815260200185606001518152602001856080015181526020018560a0015181526020018560c00151815260200185602001518152602001856040015181525090508160c0015173ffffffffffffffffffffffffffffffffffffffff1663c894e7578560e00151866101000151876101200151856040518563ffffffff1660e01b815260040161025e94939291906118e4565b602060405180830381865afa15801561027b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061029f9190611968565b61030a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4661696c6564207265736f757263652070726f6f6620636865636b000000000060448201526064015b60405180910390fd5b505b60005433906103519073ffffffffffffffffffffffffffffffffffffffff167fd7eb4644b0f312b764e14b10dbe895c6ee4acad8c1eb37a4791309b4d942e427610c17565b73ffffffffffffffffffffffffffffffffffffffff16630ff4c916826040518263ffffffff1660e01b815260040161038b91815260200190565b602060405180830381865afa1580156103a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103cc9190611983565b845114610435576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f6e6f74207374616e64696e67206f6e207265736f7572636500000000000000006044820152606401610301565b600080546104799073ffffffffffffffffffffffffffffffffffffffff167f9e0b856941fb70fc9b56c896d5f39a2079c3ed041dbc5e87efbf9c503b354b76610c17565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160e060405180830381865afa1580156104c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104e791906119b4565b9050806080015167ffffffffffffffff1685602001511115801561051d57508060a0015167ffffffffffffffff16856040015111155b610583576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f726164697573206f766572206c696d69740000000000000000000000000000006044820152606401610301565b611d4c8560a00151101580156105ba575080516105a1906040611a93565b6105ac906010611bdc565b85516105b89190611c21565b155b80156105ed57506000816020015160406105d49190611a93565b6105df906010611bdc565b86516105eb9190611c21565b115b610653576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6e6f207265736f7572636520746f2064696700000000000000000000000000006044820152606401610301565b8451600080546106999073ffffffffffffffffffffffffffffffffffffffff167fd5747a44473606564dfdf7f7fb1c2cfb3f1b11f42a6343d7a6a8b0a0eee12351610c17565b905060008060006106ae858b60c00151610d65565b925092509250896101400151831480156106cc575089610160015182145b610732576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f72656d61696e2076616c756520696e76616c69640000000000000000000000006044820152606401610301565b89516101408b01516101808c015160408051602081019490945283019190915260608201526000906080016040516020818303038152906040528051906020012060001c90508160406107859190611c35565b610790906010611c4c565b61079a9082611c21565b15610801576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f706f772076616c756520696e76616c69640000000000000000000000000000006044820152606401610301565b8473ffffffffffffffffffffffffffffffffffffffff16638bbf68fe8760405180604001604052806001896108369190611c35565b8152602001878152506040518363ffffffff1660e01b815260040161085c929190611c58565b600060405180830381600087803b15801561087657600080fd5b505af115801561088a573d6000803e3d6000fd5b5050600080549092506108d4915073ffffffffffffffffffffffffffffffffffffffff167f2f3c6eb2abe480dcea02a3f0d6883cd4e62a46b8207d85e1ff6f6e5cdee24b7a610c17565b6040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481018b905290915060019073ffffffffffffffffffffffffffffffffffffffff83169063cccf7a8e90602401602060405180830381865afa158015610945573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109699190611968565b15610a0a576040517f0ff4c916000000000000000000000000000000000000000000000000000000008152600481018b905273ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401602060405180830381865afa1580156109d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109fd9190611983565b610a079082611c76565b90505b6040517f1ab06ee5000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905273ffffffffffffffffffffffffffffffffffffffff831690631ab06ee590604401600060405180830381600087803b158015610a7957600080fd5b505af1158015610a8d573d6000803e3d6000fd5b505050505050505050505050505050919050565b6000610ae17f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610b56576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b5f8161121a565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015610c87573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610ccd9190810190611c8e565b90508051600003610d3a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f7420726567697374657265640000000000000000000000000000006044820152606401610301565b610d5b81600081518110610d5057610d50611d34565b602002602001015190565b9150505b92915050565b60008054819081908190610daf9073ffffffffffffffffffffffffffffffffffffffff167f5f99c30e91f967737534562e14fbc925fd8565e02ccb90ed67c11d9ea9cb5179610c17565b6000805491925090610df79073ffffffffffffffffffffffffffffffffffffffff167fd5747a44473606564dfdf7f7fb1c2cfb3f1b11f42a6343d7a6a8b0a0eee12351610c17565b6040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481018990526000965086955085945090915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015610e6f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e939190611968565b15610fcd576040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810188905273ffffffffffffffffffffffffffffffffffffffff831690630ff4c916906024016040805180830381865afa158015610f02573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f269190611db2565b602001516040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810189905290935060009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c916906024016040805180830381865afa158015610f9a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fbe9190611db2565b80516020909101519096509450505b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810188905273ffffffffffffffffffffffffffffffffffffffff83169063cccf7a8e90602401602060405180830381865afa158015611038573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061105c9190611968565b61121157600080546110a49073ffffffffffffffffffffffffffffffffffffffff167f402867350f0e10225e2ad4b364babe589a48a8ef1f4be504cbf331b3cd949c44610c17565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b8152600401608060405180830381865afa1580156110ee573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111129190611ddf565b6020810151815191925060009161112a908290611c35565b611134908a611e50565b61113e9190611c76565b6060830151604084015191925090611157908290611e64565b602084015184516111689190611c35565b611172908b611c21565b61117c9190611e87565b6111869190611ea9565b60ff1694508373ffffffffffffffffffffffffffffffffffffffff16638bbf68fe8a6040518060400160405280858152602001898152506040518363ffffffff1660e01b81526004016111da929190611c58565b600060405180830381600087803b1580156111f457600080fd5b505af1158015611208573d6000803e3d6000fd5b50929850505050505b50509250925092565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051610b5f928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516101a0810167ffffffffffffffff81118282101715611321576113216112ce565b60405290565b604051610140810167ffffffffffffffff81118282101715611321576113216112ce565b6040805190810167ffffffffffffffff81118282101715611321576113216112ce565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156113b5576113b56112ce565b604052919050565b600060208083850312156113d057600080fd5b823567ffffffffffffffff808211156113e857600080fd5b818501915085601f8301126113fc57600080fd5b81358181111561140e5761140e6112ce565b61143e847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8401160161136e565b9150808252868482850101111561145457600080fd5b8084840185840137600090820190930192909252509392505050565b600060208083528351808285015260005b8181101561149d57858101830151858201604001528201611481565b818111156114af576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b600082601f8301126114f457600080fd5b6114fc61134b565b80604084018581111561150e57600080fd5b845b81811015611528578035845260209384019301611510565b509095945050505050565b600082601f83011261154457600080fd5b61154c61134b565b80608084018581111561155e57600080fd5b845b818110156115285761157287826114e3565b8452602090930192604001611560565b6000610240828403121561159557600080fd5b61159d6112fd565b823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a082015260c083013560c08201526115ea8460e085016114e3565b60e08201526101206115fe85828601611533565b610100830152611612856101a086016114e3565b908201526101e08301356101408201526102008301356101608201526102209092013561018083015250919050565b73ffffffffffffffffffffffffffffffffffffffff81168114610b5f57600080fd5b60006020828403121561167557600080fd5b81356100f281611641565b600082601f83011261169157600080fd5b61169961134b565b8060408401858111156116ab57600080fd5b845b818110156115285780518452602093840193016116ad565b600082601f8301126116d657600080fd5b6116de61134b565b8060808401858111156116f057600080fd5b845b81811015611528576117048782611680565b84526020909301926040016116f2565b6000610240828403121561172757600080fd5b61172f6112fd565b825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015261177c8460e08501611680565b60e0820152610120611790858286016116c5565b6101008301526117a4856101a08601611680565b908201526101e08301516101408201526102008301516101608201526102209092015161018083015250919050565b805180151581146117e357600080fd5b919050565b80516117e381611641565b6000610140828403121561180657600080fd5b61180e611327565b611817836117d3565b8152611825602084016117e8565b6020820152611836604084016117e8565b6040820152611847606084016117e8565b6060820152611858608084016117e8565b608082015261186960a084016117e8565b60a082015261187a60c084016117e8565b60c082015261188b60e084016117e8565b60e082015261010061189e8185016117e8565b908201526101206118b08482016117e8565b908201529392505050565b8060005b60028110156118de5781518452602093840193909101906001016118bf565b50505050565b6101e081016118f382876118bb565b60408083018660005b6002811015611923576119108383516118bb565b91830191602091909101906001016118fc565b5050505061193460c08301856118bb565b61010082018360005b600781101561195c57815183526020928301929091019060010161193d565b50505095945050505050565b60006020828403121561197a57600080fd5b6100f2826117d3565b60006020828403121561199557600080fd5b5051919050565b805167ffffffffffffffff811681146117e357600080fd5b600060e082840312156119c657600080fd5b60405160e0810181811067ffffffffffffffff821117156119e9576119e96112ce565b6040526119f58361199c565b8152611a036020840161199c565b6020820152611a146040840161199c565b6040820152611a256060840161199c565b6060820152611a366080840161199c565b6080820152611a4760a0840161199c565b60a0820152611a5860c0840161199c565b60c08201529392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600067ffffffffffffffff83811690831681811015611ab457611ab4611a64565b039392505050565b600181815b80851115611b1557817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115611afb57611afb611a64565b80851615611b0857918102915b93841c9390800290611ac1565b509250929050565b600082611b2c57506001610d5f565b81611b3957506000610d5f565b8160018114611b4f5760028114611b5957611b75565b6001915050610d5f565b60ff841115611b6a57611b6a611a64565b50506001821b610d5f565b5060208310610133831016604e8410600b8410161715611b98575081810a610d5f565b611ba28383611abc565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115611bd457611bd4611a64565b029392505050565b60006100f267ffffffffffffffff841683611b1d565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600082611c3057611c30611bf2565b500490565b600082821015611c4757611c47611a64565b500390565b60006100f28383611b1d565b828152606081016100f2602083018480518252602090810151910152565b60008219821115611c8957611c89611a64565b500190565b60006020808385031215611ca157600080fd5b825167ffffffffffffffff80821115611cb957600080fd5b818501915085601f830112611ccd57600080fd5b815181811115611cdf57611cdf6112ce565b8060051b9150611cf084830161136e565b8181529183018401918481019088841115611d0a57600080fd5b938501935b83851015611d2857845182529385019390850190611d0f565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060408284031215611d7557600080fd5b6040516040810181811067ffffffffffffffff82111715611d9857611d986112ce565b604052825181526020928301519281019290925250919050565b600060408284031215611dc457600080fd5b6100f28383611d63565b805160ff811681146117e357600080fd5b600060808284031215611df157600080fd5b6040516080810181811067ffffffffffffffff82111715611e1457611e146112ce565b80604052508251815260208301516020820152611e3360408401611dce565b6040820152611e4460608401611dce565b60608201529392505050565b600082611e5f57611e5f611bf2565b500690565b600060ff821660ff841680821015611e7e57611e7e611a64565b90039392505050565b600060ff831680611e9a57611e9a611bf2565b8060ff84160691505092915050565b600060ff821660ff84168060ff03821115611ec657611ec6611a64565b01939250505056fea26469706673582212205a52026d63fb161ad8c63bcd6bc482f965fd2924cd91e0850a5c954ae47f769d64736f6c634300080d0033";

type DigResourceSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DigResourceSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DigResourceSystem__factory extends ContractFactory {
  constructor(...args: DigResourceSystemConstructorParams) {
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
  ): Promise<DigResourceSystem> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<DigResourceSystem>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): DigResourceSystem {
    return super.attach(address) as DigResourceSystem;
  }
  override connect(signer: Signer): DigResourceSystem__factory {
    return super.connect(signer) as DigResourceSystem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DigResourceSystemInterface {
    return new utils.Interface(_abi) as DigResourceSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DigResourceSystem {
    return new Contract(address, _abi, signerOrProvider) as DigResourceSystem;
  }
}
