/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  TakeResourceSystem,
  TakeResourceSystemInterface,
} from "../TakeResourceSystem";

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
            name: "perlin",
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
        ],
        internalType: "struct TakeInfo",
        name: "takeInfo",
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
  "0x60806040523480156200001157600080fd5b50604051620021093803806200210983398101604081905262000034916200022c565b818162000041336200010f565b6001600160a01b03811615620000585780620000bd565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000097573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bd91906200026b565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000105919062000183602090811b62000cc017901c565b5050505062000292565b600062000126620001ef60201b62000d511760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022957600080fd5b50565b600080604083850312156200024057600080fd5b82516200024d8162000213565b6020840151909250620002608162000213565b809150509250929050565b6000602082840312156200027e57600080fd5b81516200028b8162000213565b9392505050565b611e6780620002a26000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe1461005157806374dc44561461007a5780638da5cb5b1461008d578063f2fde38b146100ba575b600080fd5b61006461005f366004611518565b6100cf565b60405161007191906115cb565b60405180910390f35b6100646100883660046116dd565b6100f9565b610095610bff565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100cd6100c83660046117a7565b610c44565b005b60606000828060200190518101906100e79190611858565b90506100f2816100f9565b9392505050565b60008054606091906101419073ffffffffffffffffffffffffffffffffffffffff167fd0deb8af54f5692432398f7f62bf53c9e54e6d6a9b4dbccb012b3fe04ea432d3610d75565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160e060405180830381865afa15801561018b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101af9190611915565b8051909150156103005760006040518060c001604052808560000151815260200185606001518152602001856080015181526020018560a00151815260200185602001518152602001856040015181525090508160a0015173ffffffffffffffffffffffffffffffffffffffff1663f398789b8560c001518660e00151876101000151856040518563ffffffff1660e01b815260040161025294939291906119dc565b602060405180830381865afa15801561026f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102939190611a60565b6102fe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4661696c6564207265736f757263652070726f6f6620636865636b000000000060448201526064015b60405180910390fd5b505b60005433906103459073ffffffffffffffffffffffffffffffffffffffff167fd7eb4644b0f312b764e14b10dbe895c6ee4acad8c1eb37a4791309b4d942e427610d75565b73ffffffffffffffffffffffffffffffffffffffff16630ff4c916826040518263ffffffff1660e01b815260040161037f91815260200190565b602060405180830381865afa15801561039c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103c09190611a7b565b845114610429576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f6e6f74207374616e64696e67206f6e207265736f75726365000000000000000060448201526064016102f5565b6000805461046d9073ffffffffffffffffffffffffffffffffffffffff167f9e0b856941fb70fc9b56c896d5f39a2079c3ed041dbc5e87efbf9c503b354b76610d75565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160e060405180830381865afa1580156104b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104db9190611aac565b9050806080015167ffffffffffffffff1685602001511115801561051157508060a0015167ffffffffffffffff16856040015111155b610577576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f726164697573206f766572206c696d697400000000000000000000000000000060448201526064016102f5565b8051855167ffffffffffffffff90911610801590610593575060015b806105c457508051855167ffffffffffffffff909116108015906105c457508051855167ffffffffffffffff909116105b61062a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f6e6f207265736f7572636520746f2074616b650000000000000000000000000060448201526064016102f5565b6000805461066e9073ffffffffffffffffffffffffffffffffffffffff167f227a211c6d125a9d774669e52dc0800efe47a0b26c3f94606cc2fbbf12eb16db610d75565b86516040517ffbdfa1ea000000000000000000000000000000000000000000000000000000008152600481019190915290915060009073ffffffffffffffffffffffffffffffffffffffff83169063fbdfa1ea90602401600060405180830381865afa1580156106e2573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526107289190810190611b32565b905060008082511115610753578160008151811061074857610748611bd8565b602002602001015190505b806000036107ef57600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663614bfa6e6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156107c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ec9190611a7b565b90505b600080546108339073ffffffffffffffffffffffffffffffffffffffff167fd5747a44473606564dfdf7f7fb1c2cfb3f1b11f42a6343d7a6a8b0a0eee12351610d75565b90506000806000610848858d60a00151610ec1565b9250925092508b61012001518314801561086657508b610140015182145b6108cc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f72656d61696e2076616c756520696e76616c696400000000000000000000000060448201526064016102f5565b8b516040517f1ab06ee500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff891691631ab06ee591610929918991600401918252602082015260400190565b600060405180830381600087803b15801561094357600080fd5b505af1158015610957573d6000803e3d6000fd5b505050506000805461099f9073ffffffffffffffffffffffffffffffffffffffff167f2f3c6eb2abe480dcea02a3f0d6883cd4e62a46b8207d85e1ff6f6e5cdee24b7a610d75565b6040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481018c905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015610a0d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a319190611a60565b15610ad2576040517f0ff4c916000000000000000000000000000000000000000000000000000000008152600481018b905273ffffffffffffffffffffffffffffffffffffffff821690630ff4c91690602401602060405180830381865afa158015610aa1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ac59190611a7b565b610acf9084611c36565b92505b6040805180820182528581526000602082015290517f8bbf68fe00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff871691638bbf68fe91610b36918a91600401611c4e565b600060405180830381600087803b158015610b5057600080fd5b505af1158015610b64573d6000803e3d6000fd5b50506040517f1ab06ee5000000000000000000000000000000000000000000000000000000008152600481018d90526024810186905273ffffffffffffffffffffffffffffffffffffffff84169250631ab06ee59150604401600060405180830381600087803b158015610bd757600080fd5b505af1158015610beb573d6000803e3d6000fd5b505050505050505050505050505050919050565b6000610c3f7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610cb4576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610cbd81611376565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015610de5573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610e2b9190810190611b32565b90508051600003610e98576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f74207265676973746572656400000000000000000000000000000060448201526064016102f5565b610eb981600081518110610eae57610eae611bd8565b602002602001015190565b949350505050565b60008054819081908190610f0b9073ffffffffffffffffffffffffffffffffffffffff167f5f99c30e91f967737534562e14fbc925fd8565e02ccb90ed67c11d9ea9cb5179610d75565b6000805491925090610f539073ffffffffffffffffffffffffffffffffffffffff167fd5747a44473606564dfdf7f7fb1c2cfb3f1b11f42a6343d7a6a8b0a0eee12351610d75565b6040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481018990526000965086955085945090915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015610fcb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fef9190611a60565b15611129576040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810188905273ffffffffffffffffffffffffffffffffffffffff831690630ff4c916906024016040805180830381865afa15801561105e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110829190611cbb565b602001516040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810189905290935060009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c916906024016040805180830381865afa1580156110f6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061111a9190611cbb565b80516020909101519096509450505b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810188905273ffffffffffffffffffffffffffffffffffffffff83169063cccf7a8e90602401602060405180830381865afa158015611194573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111b89190611a60565b61136d57600080546112009073ffffffffffffffffffffffffffffffffffffffff167f402867350f0e10225e2ad4b364babe589a48a8ef1f4be504cbf331b3cd949c44610d75565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b8152600401608060405180830381865afa15801561124a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061126e9190611ce8565b60208101518151919250600091611286908290611d59565b611290908a611d9f565b61129a9190611c36565b60608301516040840151919250906112b3908290611db3565b602084015184516112c49190611d59565b6112ce908b611dd6565b6112d89190611dea565b6112e29190611e0c565b60ff1694508373ffffffffffffffffffffffffffffffffffffffff16638bbf68fe8a6040518060400160405280858152602001898152506040518363ffffffff1660e01b8152600401611336929190611c4e565b600060405180830381600087803b15801561135057600080fd5b505af1158015611364573d6000803e3d6000fd5b50929850505050505b50509250925092565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051610cbd928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610160810167ffffffffffffffff8111828210171561147d5761147d61142a565b60405290565b60405160e0810167ffffffffffffffff8111828210171561147d5761147d61142a565b6040805190810167ffffffffffffffff8111828210171561147d5761147d61142a565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156115105761151061142a565b604052919050565b6000602080838503121561152b57600080fd5b823567ffffffffffffffff8082111561154357600080fd5b818501915085601f83011261155757600080fd5b8135818111156115695761156961142a565b611599847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116016114c9565b915080825286848285010111156115af57600080fd5b8084840185840137600090820190930192909252509392505050565b600060208083528351808285015260005b818110156115f8578581018301518582016040015282016115dc565b8181111561160a576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b600082601f83011261164f57600080fd5b6116576114a6565b80604084018581111561166957600080fd5b845b8181101561168357803584526020938401930161166b565b509095945050505050565b600082601f83011261169f57600080fd5b6116a76114a6565b8060808401858111156116b957600080fd5b845b81811015611683576116cd878261163e565b84526020909301926040016116bb565b600061020082840312156116f057600080fd5b6116f8611459565b823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a082015261173b8460c0850161163e565b60c082015261010061174f8582860161168e565b60e083015261176285610180860161163e565b908201526101c08301356101208201526101e09092013561014083015250919050565b73ffffffffffffffffffffffffffffffffffffffff81168114610cbd57600080fd5b6000602082840312156117b957600080fd5b81356100f281611785565b600082601f8301126117d557600080fd5b6117dd6114a6565b8060408401858111156117ef57600080fd5b845b818110156116835780518452602093840193016117f1565b600082601f83011261181a57600080fd5b6118226114a6565b80608084018581111561183457600080fd5b845b818110156116835761184887826117c4565b8452602090930192604001611836565b6000610200828403121561186b57600080fd5b611873611459565b825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a08201526118b68460c085016117c4565b60c08201526101006118ca85828601611809565b60e08301526118dd8561018086016117c4565b908201526101c08301516101208201526101e09092015161014083015250919050565b8051801515811461191057600080fd5b919050565b600060e0828403121561192757600080fd5b61192f611483565b61193883611900565b8152602083015161194881611785565b6020820152604083015161195b81611785565b6040820152606083015161196e81611785565b6060820152608083015161198181611785565b608082015260a083015161199481611785565b60a082015260c08301516119a781611785565b60c08201529392505050565b8060005b60028110156119d65781518452602093840193909101906001016119b7565b50505050565b6101c081016119eb82876119b3565b60408083018660005b6002811015611a1b57611a088383516119b3565b91830191602091909101906001016119f4565b50505050611a2c60c08301856119b3565b61010082018360005b6006811015611a54578151835260209283019290910190600101611a35565b50505095945050505050565b600060208284031215611a7257600080fd5b6100f282611900565b600060208284031215611a8d57600080fd5b5051919050565b805167ffffffffffffffff8116811461191057600080fd5b600060e08284031215611abe57600080fd5b611ac6611483565b611acf83611a94565b8152611add60208401611a94565b6020820152611aee60408401611a94565b6040820152611aff60608401611a94565b6060820152611b1060808401611a94565b6080820152611b2160a08401611a94565b60a08201526119a760c08401611a94565b60006020808385031215611b4557600080fd5b825167ffffffffffffffff80821115611b5d57600080fd5b818501915085601f830112611b7157600080fd5b815181811115611b8357611b8361142a565b8060051b9150611b948483016114c9565b8181529183018401918481019088841115611bae57600080fd5b938501935b83851015611bcc57845182529385019390850190611bb3565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008219821115611c4957611c49611c07565b500190565b828152606081016100f2602083018480518252602090810151910152565b600060408284031215611c7e57600080fd5b6040516040810181811067ffffffffffffffff82111715611ca157611ca161142a565b604052825181526020928301519281019290925250919050565b600060408284031215611ccd57600080fd5b6100f28383611c6c565b805160ff8116811461191057600080fd5b600060808284031215611cfa57600080fd5b6040516080810181811067ffffffffffffffff82111715611d1d57611d1d61142a565b80604052508251815260208301516020820152611d3c60408401611cd7565b6040820152611d4d60608401611cd7565b60608201529392505050565b600082821015611d6b57611d6b611c07565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600082611dae57611dae611d70565b500690565b600060ff821660ff841680821015611dcd57611dcd611c07565b90039392505050565b600082611de557611de5611d70565b500490565b600060ff831680611dfd57611dfd611d70565b8060ff84160691505092915050565b600060ff821660ff84168060ff03821115611e2957611e29611c07565b01939250505056fea2646970667358221220ef5cd21c0742b166cf56cbee72079d8179771a4d16dd01b95b1630a2e3afec9264736f6c634300080d0033";

type TakeResourceSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TakeResourceSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TakeResourceSystem__factory extends ContractFactory {
  constructor(...args: TakeResourceSystemConstructorParams) {
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
  ): Promise<TakeResourceSystem> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<TakeResourceSystem>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): TakeResourceSystem {
    return super.attach(address) as TakeResourceSystem;
  }
  override connect(signer: Signer): TakeResourceSystem__factory {
    return super.connect(signer) as TakeResourceSystem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TakeResourceSystemInterface {
    return new utils.Interface(_abi) as TakeResourceSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TakeResourceSystem {
    return new Contract(address, _abi, signerOrProvider) as TakeResourceSystem;
  }
}
