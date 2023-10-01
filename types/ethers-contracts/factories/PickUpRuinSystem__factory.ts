/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  PickUpRuinSystem,
  PickUpRuinSystemInterface,
} from "../PickUpRuinSystem";

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
  "0x60806040523480156200001157600080fd5b5060405162003c8438038062003c8483398101604081905262000034916200022c565b818162000041336200010f565b6001600160a01b03811615620000585780620000bd565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000097573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bd91906200026b565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000105919062000183602090811b62000af317901c565b5050505062000292565b600062000126620001ef60201b62000b841760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022957600080fd5b50565b600080604083850312156200024057600080fd5b82516200024d8162000213565b6020840151909250620002608162000213565b809150509250929050565b6000602082840312156200027e57600080fd5b81516200028b8162000213565b9392505050565b6139e280620002a26000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe146100515780638c6352851461007a5780638da5cb5b1461008d578063f2fde38b146100ba575b600080fd5b61006461005f36600461288a565b6100cf565b6040516100719190612984565b60405180910390f35b610064610088366004612a36565b6100f9565b610095610a32565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100cd6100c8366004612b0a565b610a77565b005b60606000828060200190518101906100e79190612bbb565b90506100f2816100f9565b9392505050565b60008054606091906101419073ffffffffffffffffffffffffffffffffffffffff167fd0deb8af54f5692432398f7f62bf53c9e54e6d6a9b4dbccb012b3fe04ea432d3610ba8565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040161016060405180830381865afa15801561018c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101b09190612c82565b8051909150156103235760006040518061012001604052808560000151815260200185602001518152602001856080015181526020018560a0015181526020018560c0015181526020018560e001518152602001856101000151815260200185604001518152602001856060015181525090508160a0015173ffffffffffffffffffffffffffffffffffffffff1663c542c93b856101200151866101400151876101600151856040518563ffffffff1660e01b81526004016102759493929190612d74565b602060405180830381865afa158015610292573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102b69190612df8565b610321576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4661696c6564207069636b75702070726f6f6620636865636b0000000000000060448201526064015b60405180910390fd5b505b3361032d84610cf6565b6020840151600080546103769073ffffffffffffffffffffffffffffffffffffffff167f28b9f73e6b271728535a5e2b6da73f60f1fa049519ed11d9203e38922757cf06610ba8565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810184905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa1580156103e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104089190612df8565b1561046f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f416c7265616479207069636b65645570000000000000000000000000000000006044820152606401610318565b600080546104b39073ffffffffffffffffffffffffffffffffffffffff167f96b5cf7019465e93c7e5108d84c24e70f0d4aa63ab16b75f307df929278baad9610ba8565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810186905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015610521573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105459190612df8565b15806105e357506040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810185905273ffffffffffffffffffffffffffffffffffffffff821690630ff4c91690602401602060405180830381865afa1580156105b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105db9190612e27565b63ffffffff16155b610649576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f73746174757320696e76616c69640000000000000000000000000000000000006044820152606401610318565b61065360016110ec565b61066587600001518860a001516114e3565b60008061067189611a5e565b6040517f1ab06ee50000000000000000000000000000000000000000000000000000000081526004810188905260248101899052919350915073ffffffffffffffffffffffffffffffffffffffff851690631ab06ee590604401600060405180830381600087803b1580156106e557600080fd5b505af11580156106f9573d6000803e3d6000fd5b5050600054610741925073ffffffffffffffffffffffffffffffffffffffff1690507feb00b0cb5dcd3bc57f60eaa30f062945ca406916556c063fe1f3d5dc22a4efe5610ba8565b73ffffffffffffffffffffffffffffffffffffffff166360fe47b1866040518263ffffffff1660e01b815260040161077b91815260200190565b600060405180830381600087803b15801561079557600080fd5b505af11580156107a9573d6000803e3d6000fd5b50506000546107f1925073ffffffffffffffffffffffffffffffffffffffff1690507fef3393883620fd592853ef61d4a33b35dd9fd9e4dc925bc5e1463919917423ab610ba8565b604080517f36e334770000000000000000000000000000000000000000000000000000000081526004810188905284516024820152602085015163ffffffff908116604483015291850151909116606482015273ffffffffffffffffffffffffffffffffffffffff91909116906336e3347790608401600060405180830381600087803b15801561088157600080fd5b505af1158015610895573d6000803e3d6000fd5b50506000546108dd925073ffffffffffffffffffffffffffffffffffffffff1690507f65188156108ab445e8ddb20e749f49402ca97dc723f07951b1c4a011dd8e1166610ba8565b73ffffffffffffffffffffffffffffffffffffffff166334ff82df86836040518363ffffffff1660e01b8152600401610917929190612e42565b600060405180830381600087803b15801561093157600080fd5b505af1158015610945573d6000803e3d6000fd5b505060005461098d925073ffffffffffffffffffffffffffffffffffffffff1690507f44d5df6fedbb1676612b3073b831a5f6f1d59057fb2b8978e7146cb8eee3ca8c610ba8565b6040805180820182526000808252602082015290517f4e6641a900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9290921691634e6641a9916109f491899190600401612f3c565b600060405180830381600087803b158015610a0e57600080fd5b505af1158015610a22573d6000803e3d6000fd5b5050505050505050505050919050565b6000610a727f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610ae7576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610af081611e19565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015610c18573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610c5e9190810190612f8b565b90508051600003610ccb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f7420726567697374657265640000000000000000000000000000006044820152606401610318565b610cec81600081518110610ce157610ce161301c565b602002602001015190565b9150505b92915050565b60008054610d3a9073ffffffffffffffffffffffffffffffffffffffff167f9e0b856941fb70fc9b56c896d5f39a2079c3ed041dbc5e87efbf9c503b354b76610ba8565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160e060405180830381865afa158015610d84573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610da89190613063565b9050806080015167ffffffffffffffff16826040015111158015610dde57508060a0015167ffffffffffffffff16826060015111155b610e44576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f726164697573206f766572206c696d69740000000000000000000000000000006044820152606401610318565b806000015167ffffffffffffffff16816020015167ffffffffffffffff1610610f0157611d4c8260e0015110158015610e9657506020810151610e88906002613262565b8251610e9491906132a7565b155b610efc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f6e6f20747265617375726520746f207069636b207570000000000000000000006044820152606401610318565b610fbb565b611d4c8260e0015110158015610f3057506020810151610f22906002613262565b8251610f2e91906132a7565b155b8015610f5557508051600090610f47906002613262565b8351610f5391906132a7565b115b610fbb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f6e6f20747265617375726520746f207069636b207570000000000000000000006044820152606401610318565b60005433906110009073ffffffffffffffffffffffffffffffffffffffff167fd7eb4644b0f312b764e14b10dbe895c6ee4acad8c1eb37a4791309b4d942e427610ba8565b73ffffffffffffffffffffffffffffffffffffffff16630ff4c916826040518263ffffffff1660e01b815260040161103a91815260200190565b602060405180830381865afa158015611057573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061107b91906132bb565b8360200151146110e7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f6e6f74207374616e64696e67206f6e20747265617375726500000000000000006044820152606401610318565b505050565b600080543391906111339073ffffffffffffffffffffffffffffffffffffffff167f189eafd1a01543209399086ef2e12962fca648be4826ce2b3eb2e53ed14bf141610ba8565b600080549192509061117b9073ffffffffffffffffffffffffffffffffffffffff167f3c3102d48c6d31b1a70ddf8b23d300c759379d6506f2ef221cf3056d7c54dca7610ba8565b6040517f720354530000000000000000000000000000000000000000000000000000000081526004810185905290915060009073ffffffffffffffffffffffffffffffffffffffff831690637203545390602401602060405180830381865afa1580156111ec573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061121091906132d4565b60008054919250906112589073ffffffffffffffffffffffffffffffffffffffff167fdc602e66a6d8c84d0c8d6c4292d80341393a1e04ff02909a12718a4216d3a9f7610ba8565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160a060405180830381865afa1580156112a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112c691906132f7565b6040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810187905290915060009073ffffffffffffffffffffffffffffffffffffffff861690630ff4c916906024016040805180830381865afa158015611336573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061135a9190613381565b6020830151815191925060009161137190426133dc565b61137b9190613405565b826020015161138a919061342c565b905063ffffffff841667ffffffffffffffff821611156113ad575063ffffffff83165b8767ffffffffffffffff168167ffffffffffffffff161161142a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f6c61636b206f6620616374696f6e20706f696e747300000000000000000000006044820152606401610318565b61143488826133dc565b60408051808201825267ffffffffffffffff42811682528316602082015290517f4e6641a900000000000000000000000000000000000000000000000000000000815291925073ffffffffffffffffffffffffffffffffffffffff881691634e6641a9916114a7918b9190600401612f3c565b600060405180830381600087803b1580156114c157600080fd5b505af11580156114d5573d6000803e3d6000fd5b505050505050505050505050565b600080546115279073ffffffffffffffffffffffffffffffffffffffff167f4b1ac4c3aa37732e927cbff52c019e9fbdad0f3e454031afaefd319a3dc66ce4610ba8565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810185905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015611595573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115b99190612df8565b156117ff576040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810184905260009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401606060405180830381865afa15801561162c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116509190613458565b90508263ffffffff16816000015163ffffffff161480156116a157508060400151806116a1575080604001511580156116a157504267ffffffffffffffff16816020015167ffffffffffffffff1610155b611707576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f666f67207365656420696e76616c6964000000000000000000000000000000006044820152606401610318565b8263ffffffff16816000015163ffffffff16148015611727575080604001515b156117325750505050565b6040805160608101825263ffffffff8581168252600060208301908152600183850190815293517f951f165900000000000000000000000000000000000000000000000000000000815260048101899052925190911660248301525167ffffffffffffffff16604482015290511515606482015273ffffffffffffffffffffffffffffffffffffffff83169063951f165990608401600060405180830381600087803b1580156117e157600080fd5b505af11580156117f5573d6000803e3d6000fd5b5050505050505050565b6001546040517f4f27da180000000000000000000000000000000000000000000000000000000081527fd65d260f5f5c04658319eb649c1b2668791985f80e1dc9150523f9df6efd57b4600482015263ffffffff84169173ffffffffffffffffffffffffffffffffffffffff1690634f27da1890602401602060405180830381865afa158015611893573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118b791906134c4565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b8152600401602060405180830381865afa158015611901573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119259190612e27565b63ffffffff1614611992576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f666f67207365656420696e76616c6964000000000000000000000000000000006044820152606401610318565b6040805160608101825263ffffffff8481168252600060208301908152600183850190815293517f951f165900000000000000000000000000000000000000000000000000000000815260048101889052925190911660248301525167ffffffffffffffff16604482015290511515606482015273ffffffffffffffffffffffffffffffffffffffff82169063951f165990608401600060405180830381600087803b158015611a4157600080fd5b505af1158015611a55573d6000803e3d6000fd5b50505050505050565b60408051606081018252600080825260208201819052918101919091526040805161012081018252606080825260208201819052600092820183905281018290526080810182905260a0810182905260c0810182905260e081018290526101008101919091526000836101000151604051602001611ade91815260200190565b6040516020818303038152906040528051906020012060001c90506000806000806000611b0a86611e22565b9450945094509450945060006040518060600160405280868152602001600063ffffffff168152602001600063ffffffff168152509050600060405180610120016040528086602001518152602001866040015181526020018660a0015160ff1681526020018660c0015160ff168152602001856040015167ffffffffffffffff168152602001600067ffffffffffffffff168152602001856080015163ffffffff1681526020018867ffffffffffffffff1681526020018660e0015167ffffffffffffffff1681525090506000611bff848660a0015167ffffffffffffffff168760c0015167ffffffffffffffff16611ff6565b9094509050611c126380000000826132a7565b63ffffffff1660208401819052610100860151865167ffffffffffffffff90911691611c3d916134e1565b67ffffffffffffffff168360e0015167ffffffffffffffff161115611ce2576000846020015163ffffffff168760000151611c7891906134e1565b8460e00151611c8791906133dc565b90506000876020015167ffffffffffffffff16118015611cbf575081876020015182611cb39190613405565b67ffffffffffffffff16105b15611ce0576020870151611cd39082613405565b67ffffffffffffffff1691505b505b611cfb858760e0015167ffffffffffffffff1683611ff6565b9095509150611d0e6380000000836132a7565b63ffffffff166040850152606086015167ffffffffffffffff1615801590611d875750836040015163ffffffff168660200151611d4b91906134e1565b60208501518751611d629163ffffffff16906134e1565b611d6c919061342c565b67ffffffffffffffff168360e0015167ffffffffffffffff16115b15611dff576000846040015163ffffffff168760200151611da891906134e1565b60208601518851611dbf9163ffffffff16906134e1565b8560e00151611dce91906133dc565b611dd891906133dc565b9050866060015181611dea9190613405565b67ffffffffffffffff1660a085015250611e07565b600160a08401525b50919b909a5098505050505050505050565b610af08161204b565b604080516101008101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e0810182905281906040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810191909152600080548190611ef49073ffffffffffffffffffffffffffffffffffffffff167fcfb6241b41527f8aac5f293ecb22ce5491bdce4aca6f96ba85ab53f5ad8ca82f610ba8565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b8152600401600060405180830381865afa158015611f3e573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052611f8491908101906136ad565b90506000611faf88836060015167ffffffffffffffff16846080015167ffffffffffffffff16611ff6565b9098509050611fc6678000000000000000826132a7565b96506000611fd4838a6120f7565b9099509050611fe3818a6121f3565b9a9c919b50999850909650945050505050565b6000808383111561203d578361200c8185613784565b61201690876132a7565b612020919061379b565b905061202c8484613784565b61203690866137b3565b9150612043565b50839050825b935093915050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460805460405173ffffffffffffffffffffffffffffffffffffffff8481169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6000806000805b85602001515181101561215257856020015181815181106121215761212161301c565b602002602001015167ffffffffffffffff168261213e919061379b565b91508061214a816137c7565b9150506120fe565b50600061216185600084611ff6565b9094509050600080805b8860200151518110156121c9578860200151818151811061218e5761218e61301c565b602002602001015167ffffffffffffffff16826121ab919061379b565b91508092508382116121c957806121c1816137c7565b91505061216b565b5087518051839081106121de576121de61301c565b60200260200101519450505050509250929050565b604080516101008101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e0810182905281906040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810191909152600080546122c39073ffffffffffffffffffffffffffffffffffffffff167f1c25628829b4861cd29b8126181e286e9aa3749b43e568208fa84796fe72e381610ba8565b600080549192509061230b9073ffffffffffffffffffffffffffffffffffffffff167f4e85e4bd7fbc26f10fe53aa450c8a80dc5148546d6ed113502ac93556c10ece2610ba8565b60008054919250906123539073ffffffffffffffffffffffffffffffffffffffff167fdd93cfd8a6751ddc87ad60672ba29f973167cf054c7cf626eef9bb0620fdfb69610ba8565b6040517f447e2bd200000000000000000000000000000000000000000000000000000000815263ffffffff8b16600482015290915060009073ffffffffffffffffffffffffffffffffffffffff83169063447e2bd290602401600060405180830381865afa1580156123c9573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261240f9190810190612f8b565b90506000805b82518110156125095760008673ffffffffffffffffffffffffffffffffffffffff16630ff4c91685848151811061244e5761244e61301c565b60200260200101516040518263ffffffff1660e01b815260040161247491815260200190565b600060405180830381865afa158015612491573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526124d79190810190613810565b9050806080015167ffffffffffffffff16836124f3919061379b565b9250508080612501906137c7565b915050612415565b5060006125188b600084611ff6565b909a5090506000805b84518110156126d95760008873ffffffffffffffffffffffffffffffffffffffff16630ff4c91687848151811061255a5761255a61301c565b60200260200101516040518263ffffffff1660e01b815260040161258091815260200190565b600060405180830381865afa15801561259d573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526125e39190810190613810565b9050806080015167ffffffffffffffff16836125ff919061379b565b92508582815181106126135761261361301c565b60200260200101519b50809a508773ffffffffffffffffffffffffffffffffffffffff16630ff4c91687848151811061264e5761264e61301c565b60200260200101516040518263ffffffff1660e01b815260040161267491815260200190565b61012060405180830381865afa158015612692573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126b69190613901565b9950838311156126c657506126d9565b50806126d1816137c7565b915050612521565b505050505050505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610180810167ffffffffffffffff8111828210171561273d5761273d6126ea565b60405290565b604051610160810167ffffffffffffffff8111828210171561273d5761273d6126ea565b60405160a0810167ffffffffffffffff8111828210171561273d5761273d6126ea565b604051610100810167ffffffffffffffff8111828210171561273d5761273d6126ea565b604051610120810167ffffffffffffffff8111828210171561273d5761273d6126ea565b6040805190810167ffffffffffffffff8111828210171561273d5761273d6126ea565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561283c5761283c6126ea565b604052919050565b600067ffffffffffffffff82111561285e5761285e6126ea565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b60006020828403121561289c57600080fd5b813567ffffffffffffffff8111156128b357600080fd5b8201601f810184136128c457600080fd5b80356128d76128d282612844565b6127f5565b8181528560208385010111156128ec57600080fd5b81602084016020830137600091810160200191909152949350505050565b60005b8381101561292557818101518382015260200161290d565b83811115612934576000848401525b50505050565b6000815180845261295281602086016020860161290a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006100f2602083018461293a565b600082601f8301126129a857600080fd5b6129b06127d2565b8060408401858111156129c257600080fd5b845b818110156129dc5780358452602093840193016129c4565b509095945050505050565b600082601f8301126129f857600080fd5b612a006127d2565b806080840185811115612a1257600080fd5b845b818110156129dc57612a268782612997565b8452602090930192604001612a14565b60006102208284031215612a4957600080fd5b612a51612719565b823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a082015260c083013560c082015260e083013560e0820152610100808401358183015250610120612ab685828601612997565b90820152610160612ac9858583016129e7565b610140830152612add856101e08601612997565b908201529392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114610af057600080fd5b600060208284031215612b1c57600080fd5b81356100f281612ae8565b600082601f830112612b3857600080fd5b612b406127d2565b806040840185811115612b5257600080fd5b845b818110156129dc578051845260209384019301612b54565b600082601f830112612b7d57600080fd5b612b856127d2565b806080840185811115612b9757600080fd5b845b818110156129dc57612bab8782612b27565b8452602090930192604001612b99565b60006102208284031215612bce57600080fd5b612bd6612719565b825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120612c3b85828601612b27565b90820152610160612c4e85858301612b6c565b610140830152612add856101e08601612b27565b80518015158114612c7257600080fd5b919050565b8051612c7281612ae8565b60006101608284031215612c9557600080fd5b612c9d612743565b612ca683612c62565b8152612cb460208401612c77565b6020820152612cc560408401612c77565b6040820152612cd660608401612c77565b6060820152612ce760808401612c77565b6080820152612cf860a08401612c77565b60a0820152612d0960c08401612c77565b60c0820152612d1a60e08401612c77565b60e0820152610100612d2d818501612c77565b90820152610120612d3f848201612c77565b90820152610140612add848201612c77565b8060005b6002811015612934578151845260209384019390910190600101612d55565b6102208101612d838287612d51565b60408083018660005b6002811015612db357612da0838351612d51565b9183019160209190910190600101612d8c565b50505050612dc460c0830185612d51565b61010082018360005b6009811015612dec578151835260209283019290910190600101612dcd565b50505095945050505050565b600060208284031215612e0a57600080fd5b6100f282612c62565b805163ffffffff81168114612c7257600080fd5b600060208284031215612e3957600080fd5b6100f282612e13565b8281526040602082015260008251610120806040850152612e6761016085018361293a565b915060208501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0858403016060860152612ea2838261293a565b9250506040850151612eb9608086018260ff169052565b50606085015160ff811660a086015250608085015167ffffffffffffffff811660c08601525060a085015167ffffffffffffffff811660e08601525060c0850151610100612f0e8187018363ffffffff169052565b60e087015167ffffffffffffffff908116938701939093528601519182166101408601525050949350505050565b828152606081016100f26020830184805167ffffffffffffffff908116835260209182015116910152565b600067ffffffffffffffff821115612f8157612f816126ea565b5060051b60200190565b60006020808385031215612f9e57600080fd5b825167ffffffffffffffff811115612fb557600080fd5b8301601f81018513612fc657600080fd5b8051612fd46128d282612f67565b81815260059190911b82018301908381019087831115612ff357600080fd5b928401925b8284101561301157835182529284019290840190612ff8565b979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b805167ffffffffffffffff81168114612c7257600080fd5b600060e0828403121561307557600080fd5b60405160e0810181811067ffffffffffffffff82111715613098576130986126ea565b6040526130a48361304b565b81526130b26020840161304b565b60208201526130c36040840161304b565b60408201526130d46060840161304b565b60608201526130e56080840161304b565b60808201526130f660a0840161304b565b60a082015261310760c0840161304b565b60c08201529392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600181815b8085111561319b57817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482111561318157613181613113565b8085161561318e57918102915b93841c9390800290613147565b509250929050565b6000826131b257506001610cf0565b816131bf57506000610cf0565b81600181146131d557600281146131df576131fb565b6001915050610cf0565b60ff8411156131f0576131f0613113565b50506001821b610cf0565b5060208310610133831016604e8410600b841016171561321e575081810a610cf0565b6132288383613142565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482111561325a5761325a613113565b029392505050565b60006100f267ffffffffffffffff8416836131a3565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000826132b6576132b6613278565b500690565b6000602082840312156132cd57600080fd5b5051919050565b6000602082840312156132e657600080fd5b81518060030b81146100f257600080fd5b600060a0828403121561330957600080fd5b60405160a0810181811067ffffffffffffffff8211171561332c5761332c6126ea565b6040526133388361304b565b81526133466020840161304b565b60208201526133576040840161304b565b60408201526133686060840161304b565b6060820152608083015160808201528091505092915050565b60006040828403121561339357600080fd5b6040516040810181811067ffffffffffffffff821117156133b6576133b66126ea565b6040526133c28361304b565b81526133d06020840161304b565b60208201529392505050565b600067ffffffffffffffff838116908316818110156133fd576133fd613113565b039392505050565b600067ffffffffffffffff8084168061342057613420613278565b92169190910492915050565b600067ffffffffffffffff80831681851680830382111561344f5761344f613113565b01949350505050565b60006060828403121561346a57600080fd5b6040516060810181811067ffffffffffffffff8211171561348d5761348d6126ea565b60405261349983612e13565b81526134a76020840161304b565b60208201526134b860408401612c62565b60408201529392505050565b6000602082840312156134d657600080fd5b81516100f281612ae8565b600067ffffffffffffffff8083168185168183048111821515161561350857613508613113565b02949350505050565b600082601f83011261352257600080fd5b815160206135326128d283612f67565b82815260059290921b8401810191818101908684111561355157600080fd5b8286015b848110156135735761356681612e13565b8352918301918301613555565b509695505050505050565b600082601f83011261358f57600080fd5b8151602061359f6128d283612f67565b82815260059290921b840181019181810190868411156135be57600080fd5b8286015b84811015613573576135d38161304b565b83529183019183016135c2565b600082601f8301126135f157600080fd5b81516135ff6128d282612844565b81815284602083860101111561361457600080fd5b61362582602083016020870161290a565b949350505050565b600082601f83011261363e57600080fd5b8151602061364e6128d283612f67565b82815260059290921b8401810191818101908684111561366d57600080fd5b8286015b8481101561357357805167ffffffffffffffff8111156136915760008081fd5b61369f8986838b01016135e0565b845250918301918301613671565b6000602082840312156136bf57600080fd5b815167ffffffffffffffff808211156136d757600080fd5b9083019060a082860312156136eb57600080fd5b6136f3612767565b82518281111561370257600080fd5b61370e87828601613511565b82525060208301518281111561372357600080fd5b61372f8782860161357e565b60208301525060408301518281111561374757600080fd5b6137538782860161362d565b6040830152506137656060840161304b565b60608201526137766080840161304b565b608082015295945050505050565b60008282101561379657613796613113565b500390565b600082198211156137ae576137ae613113565b500190565b6000826137c2576137c2613278565b500490565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036137f8576137f8613113565b5060010190565b805160ff81168114612c7257600080fd5b60006020828403121561382257600080fd5b815167ffffffffffffffff8082111561383a57600080fd5b90830190610100828603121561384f57600080fd5b61385761278a565b8251815260208301518281111561386d57600080fd5b613879878286016135e0565b60208301525060408301518281111561389157600080fd5b61389d878286016135e0565b6040830152506138af60608401612e13565b60608201526138c06080840161304b565b60808201526138d160a084016137ff565b60a08201526138e260c084016137ff565b60c08201526138f360e0840161304b565b60e082015295945050505050565b6000610120828403121561391457600080fd5b61391c6127ae565b6139258361304b565b81526139336020840161304b565b60208201526139446040840161304b565b60408201526139556060840161304b565b606082015261396660808401612e13565b608082015261397760a0840161304b565b60a082015261398860c0840161304b565b60c082015261399960e0840161304b565b60e0820152610100612add81850161304b56fea26469706673582212201f3f0d96a8232076cba90e0f481bf306f7fa60df6c05ab6d1d2e2c858668e0c564736f6c634300080d0033";

type PickUpRuinSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PickUpRuinSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PickUpRuinSystem__factory extends ContractFactory {
  constructor(...args: PickUpRuinSystemConstructorParams) {
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
  ): Promise<PickUpRuinSystem> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<PickUpRuinSystem>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): PickUpRuinSystem {
    return super.attach(address) as PickUpRuinSystem;
  }
  override connect(signer: Signer): PickUpRuinSystem__factory {
    return super.connect(signer) as PickUpRuinSystem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PickUpRuinSystemInterface {
    return new utils.Interface(_abi) as PickUpRuinSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PickUpRuinSystem {
    return new Contract(address, _abi, signerOrProvider) as PickUpRuinSystem;
  }
}
