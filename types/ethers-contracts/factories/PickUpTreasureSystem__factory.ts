/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  PickUpTreasureSystem,
  PickUpTreasureSystemInterface,
} from "../PickUpTreasureSystem";

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
            name: "treasureSeed",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "terrainPerlin",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "treasurePerlin",
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
            name: "treasureType",
            type: "string",
          },
          {
            internalType: "uint64",
            name: "typeId",
            type: "uint64",
          },
          {
            internalType: "uint256",
            name: "energy",
            type: "uint256",
          },
        ],
        internalType: "struct PickUpInfo",
        name: "pickUpInfo",
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
  "0x60806040523480156200001157600080fd5b5060405162001d4738038062001d4783398101604081905262000034916200022c565b818162000041336200010f565b6001600160a01b03811615620000585780620000bd565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000097573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bd91906200026b565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000105919062000183602090811b6200093e17901c565b5050505062000292565b600062000126620001ef60201b620009cf1760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022957600080fd5b50565b600080604083850312156200024057600080fd5b82516200024d8162000213565b6020840151909250620002608162000213565b809150509250929050565b6000602082840312156200027e57600080fd5b81516200028b8162000213565b9392505050565b611aa580620002a26000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe146100515780638da5cb5b1461007a578063a19c332c146100a7578063f2fde38b146100ba575b600080fd5b61006461005f366004610dae565b6100cf565b6040516100719190610e71565b60405180910390f35b6100826100f9565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100646100b5366004610f69565b61013e565b6100cd6100c836600461109a565b6108c2565b005b60606000828060200190518101906100e791906111a3565b90506100f28161013e565b9392505050565b60006101397f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b60008054606091906101869073ffffffffffffffffffffffffffffffffffffffff167fd0deb8af54f5692432398f7f62bf53c9e54e6d6a9b4dbccb012b3fe04ea432d36109f3565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160e060405180830381865afa1580156101d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101f491906112c2565b8051909150156103505760006040518060e001604052808560000151815260200185606001518152602001856080015181526020018560a0015181526020018560c0015181526020018560200151815260200185604001518152509050816080015173ffffffffffffffffffffffffffffffffffffffff1663c894e7578560e00151866101000151876101200151856040518563ffffffff1660e01b81526004016102a29493929190611383565b602060405180830381865afa1580156102bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102e39190611407565b61034e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4661696c6564207069636b75702070726f6f6620636865636b0000000000000060448201526064015b60405180910390fd5b505b600080543391906103979073ffffffffffffffffffffffffffffffffffffffff167f9e0b856941fb70fc9b56c896d5f39a2079c3ed041dbc5e87efbf9c503b354b766109f3565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160e060405180830381865afa1580156103e1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104059190611422565b9050806080015167ffffffffffffffff1685602001511115801561043b57508060a0015167ffffffffffffffff16856040015111155b6104a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f726164697573206f766572206c696d69740000000000000000000000000000006044820152606401610345565b611d4c8560a00151101580156104db575060208101516104c29060406114e5565b6104cd90601061162e565b85516104d99190611644565b155b610541576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f6e6f20747265617375726520746f207069636b207570000000000000000000006044820152606401610345565b8451600080546105879073ffffffffffffffffffffffffffffffffffffffff167f28b9f73e6b271728535a5e2b6da73f60f1fa049519ed11d9203e38922757cf066109f3565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810184905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa1580156105f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106199190611407565b15610680576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f416c7265616479207069636b65645570000000000000000000000000000000006044820152606401610345565b600080546106c49073ffffffffffffffffffffffffffffffffffffffff167faba0920628f0b3ae57d55af83900bf96b519a336c752234d24c5e3c4569899586109f3565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b8152600401600060405180830381865afa15801561070e573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261075491908101906117ec565b9050806020015163ffffffff16886101800151101580156107845750806000015163ffffffff1688610180015111155b6107ea576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f656e65726779206f766572206c696d69740000000000000000000000000000006044820152606401610345565b60005461082d9073ffffffffffffffffffffffffffffffffffffffff167f60c75de7a5b0398849a1e84398f8f1f8d3aedeb9bd52b420fb7a970fa1f7c0066109f3565b73ffffffffffffffffffffffffffffffffffffffff1663408531778660405180604001604052808c610180015181526020018c61014001518152506040518363ffffffff1660e01b815260040161088592919061197a565b600060405180830381600087803b15801561089f57600080fd5b505af11580156108b3573d6000803e3d6000fd5b50505050505050505050919050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610932576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61093b81610b41565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015610a63573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610aa991908101906119af565b90508051600003610b16576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f7420726567697374657265640000000000000000000000000000006044820152606401610345565b610b3781600081518110610b2c57610b2c611a40565b602002602001015190565b9150505b92915050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460805460405161093b928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516101a0810167ffffffffffffffff81118282101715610c4857610c48610bf5565b60405290565b60405160e0810167ffffffffffffffff81118282101715610c4857610c48610bf5565b604051610160810167ffffffffffffffff81118282101715610c4857610c48610bf5565b6040516080810167ffffffffffffffff81118282101715610c4857610c48610bf5565b6040805190810167ffffffffffffffff81118282101715610c4857610c48610bf5565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610d2257610d22610bf5565b604052919050565b600067ffffffffffffffff821115610d4457610d44610bf5565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b6000610d83610d7e84610d2a565b610cdb565b9050828152838383011115610d9757600080fd5b828260208301376000602084830101529392505050565b600060208284031215610dc057600080fd5b813567ffffffffffffffff811115610dd757600080fd5b8201601f81018413610de857600080fd5b610b3784823560208401610d70565b60005b83811015610e12578181015183820152602001610dfa565b83811115610e21576000848401525b50505050565b60008151808452610e3f816020860160208601610df7565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006100f26020830184610e27565b600082601f830112610e9557600080fd5b610e9d610cb8565b806040840185811115610eaf57600080fd5b845b81811015610ec9578035845260209384019301610eb1565b509095945050505050565b600082601f830112610ee557600080fd5b610eed610cb8565b806080840185811115610eff57600080fd5b845b81811015610ec957610f138782610e84565b8452602090930192604001610f01565b600082601f830112610f3457600080fd5b6100f283833560208501610d70565b67ffffffffffffffff8116811461093b57600080fd5b8035610f6481610f43565b919050565b600060208284031215610f7b57600080fd5b813567ffffffffffffffff80821115610f9357600080fd5b908301906102408286031215610fa857600080fd5b610fb0610c24565b823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a082015260c083013560c0820152610ffd8660e08501610e84565b60e082015261012061101187828601610ed4565b610100830152611025876101a08601610e84565b908201526101e08301358281111561103c57600080fd5b61104887828601610f23565b6101408301525061105c6102008401610f59565b6101608201526102209290920135610180830152509392505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461093b57600080fd5b6000602082840312156110ac57600080fd5b81356100f281611078565b600082601f8301126110c857600080fd5b6110d0610cb8565b8060408401858111156110e257600080fd5b845b81811015610ec95780518452602093840193016110e4565b600082601f83011261110d57600080fd5b611115610cb8565b80608084018581111561112757600080fd5b845b81811015610ec95761113b87826110b7565b8452602090930192604001611129565b600082601f83011261115c57600080fd5b815161116a610d7e82610d2a565b81815284602083860101111561117f57600080fd5b611190826020830160208701610df7565b949350505050565b8051610f6481610f43565b6000602082840312156111b557600080fd5b815167ffffffffffffffff808211156111cd57600080fd5b9083019061024082860312156111e257600080fd5b6111ea610c24565b825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201526112378660e085016110b7565b60e082015261012061124b878286016110fc565b61010083015261125f876101a086016110b7565b908201526101e08301518281111561127657600080fd5b6112828782860161114b565b610140830152506112966102008401611198565b6101608201526102209290920151610180830152509392505050565b80518015158114610f6457600080fd5b600060e082840312156112d457600080fd5b6112dc610c4e565b6112e5836112b2565b815260208301516112f581611078565b6020820152604083015161130881611078565b6040820152606083015161131b81611078565b6060820152608083015161132e81611078565b608082015260a083015161134181611078565b60a082015260c083015161135481611078565b60c08201529392505050565b8060005b6002811015610e21578151845260209384019390910190600101611364565b6101e081016113928287611360565b60408083018660005b60028110156113c2576113af838351611360565b918301916020919091019060010161139b565b505050506113d360c0830185611360565b61010082018360005b60078110156113fb5781518352602092830192909101906001016113dc565b50505095945050505050565b60006020828403121561141957600080fd5b6100f2826112b2565b600060e0828403121561143457600080fd5b61143c610c4e565b825161144781610f43565b8152602083015161145781610f43565b6020820152604083015161146a81610f43565b6040820152606083015161147d81610f43565b6060820152608083015161149081610f43565b608082015260a08301516114a381610f43565b60a082015260c083015161135481610f43565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600067ffffffffffffffff83811690831681811015611506576115066114b6565b039392505050565b600181815b8085111561156757817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482111561154d5761154d6114b6565b8085161561155a57918102915b93841c9390800290611513565b509250929050565b60008261157e57506001610b3b565b8161158b57506000610b3b565b81600181146115a157600281146115ab576115c7565b6001915050610b3b565b60ff8411156115bc576115bc6114b6565b50506001821b610b3b565b5060208310610133831016604e8410600b84101617156115ea575081810a610b3b565b6115f4838361150e565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115611626576116266114b6565b029392505050565b60006100f267ffffffffffffffff84168361156f565b60008261167a577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b805163ffffffff81168114610f6457600080fd5b600067ffffffffffffffff8211156116ad576116ad610bf5565b5060051b60200190565b600082601f8301126116c857600080fd5b815160206116d8610d7e83611693565b82815261016092830285018201928282019190878511156116f857600080fd5b8387015b858110156117df5781818a0312156117145760008081fd5b61171c610c71565b6117258261167f565b815261173286830161167f565b86820152604061174381840161167f565b90820152606061175483820161167f565b90820152608061176583820161167f565b9082015260a061177683820161167f565b9082015260c061178783820161167f565b9082015260e061179883820161167f565b908201526101006117aa83820161167f565b908201526101206117bc83820161167f565b908201526101406117ce83820161167f565b9082015284529284019281016116fc565b5090979650505050505050565b600060208083850312156117ff57600080fd5b825167ffffffffffffffff8082111561181757600080fd5b8185019150608080838803121561182d57600080fd5b611835610c95565b61183e8461167f565b815261184b85850161167f565b858201526040808501518481111561186257600080fd5b8501601f81018a1361187357600080fd5b8051611881610d7e82611693565b81815260e0918202830189019189820191908d8411156118a057600080fd5b938a01935b8385101561193f5780858f0312156118bd5760008081fd5b6118c5610c4e565b6118ce8661167f565b81526118db8c870161167f565b8c8201526118ea87870161167f565b8782015260606118fb81880161167f565b9082015261190a868a0161167f565b8982015260a061191b81880161167f565b9082015260c061192c87820161167f565b90820152835293840193918a01916118a5565b5080858701525050505050606084015194508285111561195e57600080fd5b61196a888686016116b7565b6060820152979650505050505050565b828152604060208201528151604082015260006020830151604060608401526119a66080840182610e27565b95945050505050565b600060208083850312156119c257600080fd5b825167ffffffffffffffff8111156119d957600080fd5b8301601f810185136119ea57600080fd5b80516119f8610d7e82611693565b81815260059190911b82018301908381019087831115611a1757600080fd5b928401925b82841015611a3557835182529284019290840190611a1c565b979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea2646970667358221220b76479535477a053f8b4efe8f5578f086d8943120d771e98a2ed0f29b988689e64736f6c634300080d0033";

type PickUpTreasureSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PickUpTreasureSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PickUpTreasureSystem__factory extends ContractFactory {
  constructor(...args: PickUpTreasureSystemConstructorParams) {
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
  ): Promise<PickUpTreasureSystem> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<PickUpTreasureSystem>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): PickUpTreasureSystem {
    return super.attach(address) as PickUpTreasureSystem;
  }
  override connect(signer: Signer): PickUpTreasureSystem__factory {
    return super.connect(signer) as PickUpTreasureSystem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PickUpTreasureSystemInterface {
    return new utils.Interface(_abi) as PickUpTreasureSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PickUpTreasureSystem {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PickUpTreasureSystem;
  }
}
