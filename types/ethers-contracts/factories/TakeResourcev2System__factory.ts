/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  TakeResourcev2System,
  TakeResourcev2SystemInterface,
} from "../TakeResourcev2System";

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
            name: "realHash",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "fogHash",
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
            name: "terrainSeed",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "fogSeed",
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
  "0x60806040523480156200001157600080fd5b50604051620025e4380380620025e483398101604081905262000034916200022c565b818162000041336200010f565b6001600160a01b03811615620000585780620000bd565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000097573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bd91906200026b565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000105919062000183602090811b62000ad517901c565b5050505062000292565b600062000126620001ef60201b62000b661760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022957600080fd5b50565b600080604083850312156200024057600080fd5b82516200024d8162000213565b6020840151909250620002608162000213565b809150509250929050565b6000602082840312156200027e57600080fd5b81516200028b8162000213565b9392505050565b61234280620002a26000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe1461005157806326ded98b1461007a5780638da5cb5b1461008d578063f2fde38b146100ba575b600080fd5b61006461005f3660046116ce565b6100cf565b6040516100719190611781565b60405180910390f35b610064610088366004611893565b6100f9565b610095610a14565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100cd6100c836600461197f565b610a59565b005b60606000828060200190518101906100e79190611a30565b90506100f2816100f9565b9392505050565b60008054606091906101419073ffffffffffffffffffffffffffffffffffffffff167fd0deb8af54f5692432398f7f62bf53c9e54e6d6a9b4dbccb012b3fe04ea432d3610b8a565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040161012060405180830381865afa15801561018c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101b09190611b1a565b8051909150156103235760006040518061012001604052808560000151815260200185602001518152602001856080015181526020018560a0015181526020018560c0015181526020018560e001518152602001856101000151815260200185604001518152602001856060015181525090508160c0015173ffffffffffffffffffffffffffffffffffffffff1663c542c93b856101200151866101400151876101600151856040518563ffffffff1660e01b81526004016102759493929190611bf3565b602060405180830381865afa158015610292573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102b69190611c77565b610321576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4661696c6564207265736f757263652070726f6f6620636865636b000000000060448201526064015b60405180910390fd5b505b60005433906103689073ffffffffffffffffffffffffffffffffffffffff167fd7eb4644b0f312b764e14b10dbe895c6ee4acad8c1eb37a4791309b4d942e427610b8a565b73ffffffffffffffffffffffffffffffffffffffff16630ff4c916826040518263ffffffff1660e01b81526004016103a291815260200190565b602060405180830381865afa1580156103bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103e39190611c92565b84602001511461044f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f6e6f74207374616e64696e67206f6e207265736f7572636500000000000000006044820152606401610318565b600080546104939073ffffffffffffffffffffffffffffffffffffffff167f9e0b856941fb70fc9b56c896d5f39a2079c3ed041dbc5e87efbf9c503b354b76610b8a565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160e060405180830381865afa1580156104dd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105019190611cc3565b9050806080015167ffffffffffffffff1685604001511115801561053757508060a0015167ffffffffffffffff16856060015111155b61059d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f726164697573206f766572206c696d69740000000000000000000000000000006044820152606401610318565b611d4c8560e00151101580156105d4575080516105bb906040611da2565b6105c6906010611eeb565b85516105d29190611f30565b155b801561060757506000816020015160406105ee9190611da2565b6105f9906010611eeb565b86516106059190611f30565b115b61066d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6e6f207265736f7572636520746f2064696700000000000000000000000000006044820152606401610318565b61067f85600001518660a00151610cd8565b6020850151600080546106c89073ffffffffffffffffffffffffffffffffffffffff167fe364070e7addf383981cab98a86215b0a227507d32346ce1205f3e07167055c8610b8a565b905060008060006106de858b6101000151610f63565b925092509250896101800151831480156106fc5750896101a0015182145b610762576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f72656d61696e2076616c756520696e76616c69640000000000000000000000006044820152606401610318565b600080546107a69073ffffffffffffffffffffffffffffffffffffffff167f2f3c6eb2abe480dcea02a3f0d6883cd4e62a46b8207d85e1ff6f6e5cdee24b7a610b8a565b6040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481018a905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015610814573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108389190611c77565b156108d9576040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810189905273ffffffffffffffffffffffffffffffffffffffff821690630ff4c91690602401602060405180830381865afa1580156108a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108cc9190611c92565b6108d69084611f44565b92505b604080516060810182528581526000602082015267ffffffffffffffff42168183015290517f84491fff00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8716916384491fff9161094d918a91600401611f5c565b600060405180830381600087803b15801561096757600080fd5b505af115801561097b573d6000803e3d6000fd5b50506040517f1ab06ee5000000000000000000000000000000000000000000000000000000008152600481018b90526024810186905273ffffffffffffffffffffffffffffffffffffffff84169250631ab06ee59150604401600060405180830381600087803b1580156109ee57600080fd5b505af1158015610a02573d6000803e3d6000fd5b50505050505050505050505050919050565b6000610a547f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610ac9576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ad28161152b565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015610bfa573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610c409190810190611f8e565b90508051600003610cad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f7420726567697374657265640000000000000000000000000000006044820152606401610318565b610cce81600081518110610cc357610cc3612034565b602002602001015190565b9150505b92915050565b60008054610d1c9073ffffffffffffffffffffffffffffffffffffffff167f4b1ac4c3aa37732e927cbff52c019e9fbdad0f3e454031afaefd319a3dc66ce4610b8a565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810185905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015610d8a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dae9190611c77565b610e14576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f636f6f7264206e6f74206d61726b6564000000000000000000000000000000006044820152606401610318565b6040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810184905260009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401606060405180830381865afa158015610e82573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ea69190612063565b90508263ffffffff16816000015163ffffffff16148015610ef75750806040015180610ef757508060400151158015610ef757504267ffffffffffffffff16816020015167ffffffffffffffff1610155b610f5d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f666f67207365656420696e76616c6964000000000000000000000000000000006044820152606401610318565b50505050565b60008054819081908190610fad9073ffffffffffffffffffffffffffffffffffffffff167fedfbc254303008e09cc3e514d4150bac7c69acbeb4ac0177f668a82648a4119e610b8a565b6000805491925090610ff59073ffffffffffffffffffffffffffffffffffffffff167fe364070e7addf383981cab98a86215b0a227507d32346ce1205f3e07167055c8610b8a565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810189905260009650869550859450909150839060019073ffffffffffffffffffffffffffffffffffffffff85169063cccf7a8e90602401602060405180830381865afa158015611072573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110969190611c77565b6112e257600080546110de9073ffffffffffffffffffffffffffffffffffffffff167f449046c6526dd477102b464b5eeec34aaf8161a18f2ba1757f71638ac037f72f610b8a565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160c060405180830381865afa158015611128573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061114c91906120eb565b602081015181519192509061116290829061217e565b61116c908b612195565b6111769190611f44565b606082015160408301519194509061118f9082906121a9565b602083015183516111a0919061217e565b6111aa908c611f30565b6111b491906121cc565b6111be91906121ee565b60ff1695508060a001518160a0015182608001516111dc9190611da2565b826060015183604001516111f091906121a9565b60ff1683602001518460000151611207919061217e565b611211908d611f30565b61121b9190611f30565b6112259190612213565b61122f919061223a565b604080516060810182528581526020810189905267ffffffffffffffff83168183015290517f84491fff00000000000000000000000000000000000000000000000000000000815291935073ffffffffffffffffffffffffffffffffffffffff8716916384491fff916112a7918e9190600401611f5c565b600060405180830381600087803b1580156112c157600080fd5b505af11580156112d5573d6000803e3d6000fd5b505050508297505061138a565b6040517f0ff4c916000000000000000000000000000000000000000000000000000000008152600481018a905260009073ffffffffffffffffffffffffffffffffffffffff861690630ff4c91690602401606060405180830381865afa158015611350573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061137491906122c9565b8051602082015160409092015191975093509150505b6040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481018a905273ffffffffffffffffffffffffffffffffffffffff84169063cccf7a8e90602401602060405180830381865afa1580156113f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114199190611c77565b15611520576040517f0ff4c916000000000000000000000000000000000000000000000000000000008152600481018a905260009073ffffffffffffffffffffffffffffffffffffffff851690630ff4c91690602401606060405180830381865afa15801561148c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114b091906122c9565b805160208201519099509750905067ffffffffffffffff82161561151e576000828260400151426114e19190611da2565b6114eb91906122e5565b67ffffffffffffffff16905083611502828b611f44565b1061150f5783985061151c565b611519818a611f44565b98505b505b505b505050509250925092565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051610ad2928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516101c0810167ffffffffffffffff81118282101715611632576116326115df565b60405290565b604051610120810167ffffffffffffffff81118282101715611632576116326115df565b6040805190810167ffffffffffffffff81118282101715611632576116326115df565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156116c6576116c66115df565b604052919050565b600060208083850312156116e157600080fd5b823567ffffffffffffffff808211156116f957600080fd5b818501915085601f83011261170d57600080fd5b81358181111561171f5761171f6115df565b61174f847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8401160161167f565b9150808252868482850101111561176557600080fd5b8084840185840137600090820190930192909252509392505050565b600060208083528351808285015260005b818110156117ae57858101830151858201604001528201611792565b818111156117c0576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b600082601f83011261180557600080fd5b61180d61165c565b80604084018581111561181f57600080fd5b845b81811015611839578035845260209384019301611821565b509095945050505050565b600082601f83011261185557600080fd5b61185d61165c565b80608084018581111561186f57600080fd5b845b818110156118395761188387826117f4565b8452602090930192604001611871565b600061026082840312156118a657600080fd5b6118ae61160e565b823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a082015260c083013560c082015260e083013560e0820152610100808401358183015250610120611913858286016117f4565b9082015261016061192685858301611844565b61014083015261193a856101e086016117f4565b90820152610220830135610180820152610240909201356101a083015250919050565b73ffffffffffffffffffffffffffffffffffffffff81168114610ad257600080fd5b60006020828403121561199157600080fd5b81356100f28161195d565b600082601f8301126119ad57600080fd5b6119b561165c565b8060408401858111156119c757600080fd5b845b818110156118395780518452602093840193016119c9565b600082601f8301126119f257600080fd5b6119fa61165c565b806080840185811115611a0c57600080fd5b845b8181101561183957611a20878261199c565b8452602090930192604001611a0e565b60006102608284031215611a4357600080fd5b611a4b61160e565b825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120611ab08582860161199c565b90820152610160611ac3858583016119e1565b610140830152611ad7856101e0860161199c565b90820152610220830151610180820152610240909201516101a083015250919050565b80518015158114611b0a57600080fd5b919050565b8051611b0a8161195d565b60006101208284031215611b2d57600080fd5b611b35611638565b611b3e83611afa565b8152611b4c60208401611b0f565b6020820152611b5d60408401611b0f565b6040820152611b6e60608401611b0f565b6060820152611b7f60808401611b0f565b6080820152611b9060a08401611b0f565b60a0820152611ba160c08401611b0f565b60c0820152611bb260e08401611b0f565b60e0820152610100611bc5818501611b0f565b908201529392505050565b8060005b6002811015610f5d578151845260209384019390910190600101611bd4565b6102208101611c028287611bd0565b60408083018660005b6002811015611c3257611c1f838351611bd0565b9183019160209190910190600101611c0b565b50505050611c4360c0830185611bd0565b61010082018360005b6009811015611c6b578151835260209283019290910190600101611c4c565b50505095945050505050565b600060208284031215611c8957600080fd5b6100f282611afa565b600060208284031215611ca457600080fd5b5051919050565b805167ffffffffffffffff81168114611b0a57600080fd5b600060e08284031215611cd557600080fd5b60405160e0810181811067ffffffffffffffff82111715611cf857611cf86115df565b604052611d0483611cab565b8152611d1260208401611cab565b6020820152611d2360408401611cab565b6040820152611d3460608401611cab565b6060820152611d4560808401611cab565b6080820152611d5660a08401611cab565b60a0820152611d6760c08401611cab565b60c08201529392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600067ffffffffffffffff83811690831681811015611dc357611dc3611d73565b039392505050565b600181815b80851115611e2457817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115611e0a57611e0a611d73565b80851615611e1757918102915b93841c9390800290611dd0565b509250929050565b600082611e3b57506001610cd2565b81611e4857506000610cd2565b8160018114611e5e5760028114611e6857611e84565b6001915050610cd2565b60ff841115611e7957611e79611d73565b50506001821b610cd2565b5060208310610133831016604e8410600b8410161715611ea7575081810a610cd2565b611eb18383611dcb565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115611ee357611ee3611d73565b029392505050565b60006100f267ffffffffffffffff841683611e2c565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600082611f3f57611f3f611f01565b500490565b60008219821115611f5757611f57611d73565b500190565b828152608081016100f26020830184805182526020808201519083015260409081015167ffffffffffffffff16910152565b60006020808385031215611fa157600080fd5b825167ffffffffffffffff80821115611fb957600080fd5b818501915085601f830112611fcd57600080fd5b815181811115611fdf57611fdf6115df565b8060051b9150611ff084830161167f565b818152918301840191848101908884111561200a57600080fd5b938501935b838510156120285784518252938501939085019061200f565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006060828403121561207557600080fd5b6040516060810181811067ffffffffffffffff82111715612098576120986115df565b604052825163ffffffff811681146120af57600080fd5b81526120bd60208401611cab565b60208201526120ce60408401611afa565b60408201529392505050565b805160ff81168114611b0a57600080fd5b600060c082840312156120fd57600080fd5b60405160c0810181811067ffffffffffffffff82111715612120576121206115df565b8060405250825181526020830151602082015261213f604084016120da565b6040820152612150606084016120da565b606082015261216160808401611cab565b608082015261217260a08401611cab565b60a08201529392505050565b60008282101561219057612190611d73565b500390565b6000826121a4576121a4611f01565b500690565b600060ff821660ff8416808210156121c3576121c3611d73565b90039392505050565b600060ff8316806121df576121df611f01565b8060ff84160691505092915050565b600060ff821660ff84168060ff0382111561220b5761220b611d73565b019392505050565b600067ffffffffffffffff8084168061222e5761222e611f01565b92169190910692915050565b600067ffffffffffffffff80831681851680830382111561225d5761225d611d73565b01949350505050565b60006060828403121561227857600080fd5b6040516060810181811067ffffffffffffffff8211171561229b5761229b6115df565b806040525080915082518152602083015160208201526122bd60408401611cab565b60408201525092915050565b6000606082840312156122db57600080fd5b6100f28383612266565b600067ffffffffffffffff8084168061230057612300611f01565b9216919091049291505056fea2646970667358221220f36cb615ab9a71ffe3d6ac974926ad56f5775d8d51e242a0e907be1089e7e9d064736f6c634300080d0033";

type TakeResourcev2SystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TakeResourcev2SystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TakeResourcev2System__factory extends ContractFactory {
  constructor(...args: TakeResourcev2SystemConstructorParams) {
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
  ): Promise<TakeResourcev2System> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<TakeResourcev2System>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): TakeResourcev2System {
    return super.attach(address) as TakeResourcev2System;
  }
  override connect(signer: Signer): TakeResourcev2System__factory {
    return super.connect(signer) as TakeResourcev2System__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TakeResourcev2SystemInterface {
    return new utils.Interface(_abi) as TakeResourcev2SystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TakeResourcev2System {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TakeResourcev2System;
  }
}
