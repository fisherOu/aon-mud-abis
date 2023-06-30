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
  "0x60806040523480156200001157600080fd5b5060405162001dfa38038062001dfa83398101604081905262000034916200022c565b818162000041336200010f565b6001600160a01b03811615620000585780620000bd565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000097573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bd91906200026b565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000105919062000183602090811b62000bc117901c565b5050505062000292565b600062000126620001ef60201b62000c521760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022957600080fd5b50565b600080604083850312156200024057600080fd5b82516200024d8162000213565b6020840151909250620002608162000213565b809150509250929050565b6000602082840312156200027e57600080fd5b81516200028b8162000213565b9392505050565b611b5880620002a26000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe146100515780631d87aa901461007a5780638da5cb5b1461008d578063f2fde38b146100ba575b600080fd5b61006461005f36600461102f565b6100cf565b60405161007191906110f2565b60405180910390f35b6100646100883660046111ea565b6100f9565b610095610b00565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100cd6100c8366004611310565b610b45565b005b60606000828060200190518101906100e79190611411565b90506100f2816100f9565b9392505050565b60008054606091906101419073ffffffffffffffffffffffffffffffffffffffff167fd0deb8af54f5692432398f7f62bf53c9e54e6d6a9b4dbccb012b3fe04ea432d3610c76565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160e060405180830381865afa15801561018b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101af9190611525565b8051909150156103005760006040518060c001604052808560000151815260200185606001518152602001856080015181526020018560a0015181526020018560200151815260200185604001518152509050816080015173ffffffffffffffffffffffffffffffffffffffff1663f398789b8560c001518660e00151876101000151856040518563ffffffff1660e01b815260040161025294939291906115e6565b602060405180830381865afa15801561026f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610293919061166a565b6102fe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4661696c6564207069636b75702070726f6f6620636865636b0000000000000060448201526064015b60405180910390fd5b505b600080543391906103479073ffffffffffffffffffffffffffffffffffffffff167f9e0b856941fb70fc9b56c896d5f39a2079c3ed041dbc5e87efbf9c503b354b76610c76565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160e060405180830381865afa158015610391573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103b59190611685565b9050806080015167ffffffffffffffff168560200151111580156103eb57508060a0015167ffffffffffffffff16856040015111155b610451576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f726164697573206f766572206c696d697400000000000000000000000000000060448201526064016102f5565b806020015167ffffffffffffffff1685600001511115801561048f5750806000015167ffffffffffffffff16816020015167ffffffffffffffff1611155b806104c45750806020015167ffffffffffffffff168560000151111580156104c457508051855167ffffffffffffffff909116105b61052a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f6e6f20747265617375726520746f207069636b2075700000000000000000000060448201526064016102f5565b6000805461056e9073ffffffffffffffffffffffffffffffffffffffff167f227a211c6d125a9d774669e52dc0800efe47a0b26c3f94606cc2fbbf12eb16db610c76565b86516040517ffbdfa1ea000000000000000000000000000000000000000000000000000000008152600481019190915290915060009073ffffffffffffffffffffffffffffffffffffffff83169063fbdfa1ea90602401600060405180830381865afa1580156105e2573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610628919081019061173d565b9050600080825111156106535781600081518110610648576106486117ce565b602002602001015190505b806000036106ef57600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663614bfa6e6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156106c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ec91906117fd565b90505b600080546107339073ffffffffffffffffffffffffffffffffffffffff167f28b9f73e6b271728535a5e2b6da73f60f1fa049519ed11d9203e38922757cf06610c76565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810184905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa1580156107a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107c5919061166a565b1561082c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f416c7265616479207069636b656455700000000000000000000000000000000060448201526064016102f5565b600080546108709073ffffffffffffffffffffffffffffffffffffffff167faba0920628f0b3ae57d55af83900bf96b519a336c752234d24c5e3c456989958610c76565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b8152600401600060405180830381865afa1580156108ba573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610900919081019061195f565b9050806020015163ffffffff168a6101600151101580156109305750806000015163ffffffff168a610160015111155b610996576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f656e65726779206f766572206c696d697400000000000000000000000000000060448201526064016102f5565b89516040517f1ab06ee500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff871691631ab06ee5916109f3918791600401918252602082015260400190565b600060405180830381600087803b158015610a0d57600080fd5b505af1158015610a21573d6000803e3d6000fd5b5050600054610a69925073ffffffffffffffffffffffffffffffffffffffff1690507f60c75de7a5b0398849a1e84398f8f1f8d3aedeb9bd52b420fb7a970fa1f7c006610c76565b73ffffffffffffffffffffffffffffffffffffffff1663408531778860405180604001604052808e610160015181526020018e61012001518152506040518363ffffffff1660e01b8152600401610ac1929190611aed565b600060405180830381600087803b158015610adb57600080fd5b505af1158015610aef573d6000803e3d6000fd5b505050505050505050505050919050565b6000610b407f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610bb5576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610bbe81610dc2565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015610ce6573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610d2c919081019061173d565b90508051600003610d99576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f74207265676973746572656400000000000000000000000000000060448201526064016102f5565b610dba81600081518110610daf57610daf6117ce565b602002602001015190565b949350505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051610bbe928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610180810167ffffffffffffffff81118282101715610ec957610ec9610e76565b60405290565b60405160e0810167ffffffffffffffff81118282101715610ec957610ec9610e76565b604051610160810167ffffffffffffffff81118282101715610ec957610ec9610e76565b6040516080810167ffffffffffffffff81118282101715610ec957610ec9610e76565b6040805190810167ffffffffffffffff81118282101715610ec957610ec9610e76565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610fa357610fa3610e76565b604052919050565b600067ffffffffffffffff821115610fc557610fc5610e76565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b6000611004610fff84610fab565b610f5c565b905082815283838301111561101857600080fd5b828260208301376000602084830101529392505050565b60006020828403121561104157600080fd5b813567ffffffffffffffff81111561105857600080fd5b8201601f8101841361106957600080fd5b610dba84823560208401610ff1565b60005b8381101561109357818101518382015260200161107b565b838111156110a2576000848401525b50505050565b600081518084526110c0816020860160208601611078565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006100f260208301846110a8565b600082601f83011261111657600080fd5b61111e610f39565b80604084018581111561113057600080fd5b845b8181101561114a578035845260209384019301611132565b509095945050505050565b600082601f83011261116657600080fd5b61116e610f39565b80608084018581111561118057600080fd5b845b8181101561114a576111948782611105565b8452602090930192604001611182565b600082601f8301126111b557600080fd5b6100f283833560208501610ff1565b67ffffffffffffffff81168114610bbe57600080fd5b80356111e5816111c4565b919050565b6000602082840312156111fc57600080fd5b813567ffffffffffffffff8082111561121457600080fd5b90830190610220828603121561122957600080fd5b611231610ea5565b823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a08201526112748660c08501611105565b60c082015261010061128887828601611155565b60e083015261129b876101808601611105565b908201526101c0830135828111156112b257600080fd5b6112be878286016111a4565b610120830152506112d26101e084016111da565b6101408201526102009290920135610160830152509392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114610bbe57600080fd5b60006020828403121561132257600080fd5b81356100f2816112ee565b600082601f83011261133e57600080fd5b611346610f39565b80604084018581111561135857600080fd5b845b8181101561114a57805184526020938401930161135a565b600082601f83011261138357600080fd5b61138b610f39565b80608084018581111561139d57600080fd5b845b8181101561114a576113b1878261132d565b845260209093019260400161139f565b600082601f8301126113d257600080fd5b81516113e0610fff82610fab565b8181528460208386010111156113f557600080fd5b610dba826020830160208701611078565b80516111e5816111c4565b60006020828403121561142357600080fd5b815167ffffffffffffffff8082111561143b57600080fd5b90830190610220828603121561145057600080fd5b611458610ea5565b825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015261149b8660c0850161132d565b60c08201526101006114af87828601611372565b60e08301526114c287610180860161132d565b908201526101c0830151828111156114d957600080fd5b6114e5878286016113c1565b610120830152506114f96101e08401611406565b6101408201526102009290920151610160830152509392505050565b805180151581146111e557600080fd5b600060e0828403121561153757600080fd5b61153f610ecf565b61154883611515565b81526020830151611558816112ee565b6020820152604083015161156b816112ee565b6040820152606083015161157e816112ee565b60608201526080830151611591816112ee565b608082015260a08301516115a4816112ee565b60a082015260c08301516115b7816112ee565b60c08201529392505050565b8060005b60028110156110a25781518452602093840193909101906001016115c7565b6101c081016115f582876115c3565b60408083018660005b6002811015611625576116128383516115c3565b91830191602091909101906001016115fe565b5050505061163660c08301856115c3565b61010082018360005b600681101561165e57815183526020928301929091019060010161163f565b50505095945050505050565b60006020828403121561167c57600080fd5b6100f282611515565b600060e0828403121561169757600080fd5b61169f610ecf565b82516116aa816111c4565b815260208301516116ba816111c4565b602082015260408301516116cd816111c4565b604082015260608301516116e0816111c4565b606082015260808301516116f3816111c4565b608082015260a0830151611706816111c4565b60a082015260c08301516115b7816111c4565b600067ffffffffffffffff82111561173357611733610e76565b5060051b60200190565b6000602080838503121561175057600080fd5b825167ffffffffffffffff81111561176757600080fd5b8301601f8101851361177857600080fd5b8051611786610fff82611719565b81815260059190911b820183019083810190878311156117a557600080fd5b928401925b828410156117c3578351825292840192908401906117aa565b979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561180f57600080fd5b5051919050565b805163ffffffff811681146111e557600080fd5b600082601f83011261183b57600080fd5b8151602061184b610fff83611719565b828152610160928302850182019282820191908785111561186b57600080fd5b8387015b858110156119525781818a0312156118875760008081fd5b61188f610ef2565b61189882611816565b81526118a5868301611816565b8682015260406118b6818401611816565b9082015260606118c7838201611816565b9082015260806118d8838201611816565b9082015260a06118e9838201611816565b9082015260c06118fa838201611816565b9082015260e061190b838201611816565b9082015261010061191d838201611816565b9082015261012061192f838201611816565b90820152610140611941838201611816565b90820152845292840192810161186f565b5090979650505050505050565b6000602080838503121561197257600080fd5b825167ffffffffffffffff8082111561198a57600080fd5b818501915060808083880312156119a057600080fd5b6119a8610f16565b6119b184611816565b81526119be858501611816565b85820152604080850151848111156119d557600080fd5b8501601f81018a136119e657600080fd5b80516119f4610fff82611719565b81815260e0918202830189019189820191908d841115611a1357600080fd5b938a01935b83851015611ab25780858f031215611a305760008081fd5b611a38610ecf565b611a4186611816565b8152611a4e8c8701611816565b8c820152611a5d878701611816565b878201526060611a6e818801611816565b90820152611a7d868a01611816565b8982015260a0611a8e818801611816565b9082015260c0611a9f878201611816565b90820152835293840193918a0191611a18565b50808587015250505050506060840151945082851115611ad157600080fd5b611add8886860161182a565b6060820152979650505050505050565b82815260406020820152815160408201526000602083015160406060840152611b1960808401826110a8565b9594505050505056fea26469706673582212206662493357285f41b5b123769021144baa6d56ff29223e4d73b73a90444ba70664736f6c634300080d0033";

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
