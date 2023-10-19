/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  GuildBuildTreasureSystem,
  GuildBuildTreasureSystemInterface,
} from "../GuildBuildTreasureSystem";

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
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "salt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "guildCrestId",
            type: "uint256",
          },
        ],
        internalType: "struct BuildInfo",
        name: "buildInfo",
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
  "0x60806040523480156200001157600080fd5b506040516200345c3803806200345c83398101604081905262000034916200022c565b818162000041336200010f565b6001600160a01b03811615620000585780620000bd565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000097573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000bd91906200026b565b600080546001600160a01b03199081166001600160a01b0393841690811790925560018054909116928516928317905562000105919062000183602090811b620006b317901c565b5050505062000292565b600062000126620001ef60201b620007441760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a8780546001600160a01b039384166001600160a01b0319918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6001600160a01b03811681146200022957600080fd5b50565b600080604083850312156200024057600080fd5b82516200024d8162000213565b6020840151909250620002608162000213565b809150509250929050565b6000602082840312156200027e57600080fd5b81516200028b8162000213565b9392505050565b6131ba80620002a26000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309c5eabe14610051578063282e8c8d1461007a5780638da5cb5b1461008d578063f2fde38b146100ba575b600080fd5b61006461005f3660046125aa565b6100cf565b60405161007191906126a4565b60405180910390f35b6100646100883660046126b7565b6100f9565b6100956105f2565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610071565b6100cd6100c8366004612715565b610637565b005b60606000828060200190518101906100e79190612732565b90506100f2816100f9565b9392505050565b6060600061010a8360400151610768565b905061011581610d1d565b15610181576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6775696c642066726f7a656e000000000000000000000000000000000000000060448201526064015b60405180910390fd5b600154604080517f614bfa6e000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff169163614bfa6e9160048083019260209291908290030181865afa1580156101f1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610215919061276e565b600080549192509061025d9073ffffffffffffffffffffffffffffffffffffffff167f28b9f73e6b271728535a5e2b6da73f60f1fa049519ed11d9203e38922757cf06610de2565b85519091506014146102cb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f616d6f756e74206c6f636b656420746f203230000000000000000000000000006044820152606401610178565b6102d6836001610f2e565b6000806102e38588611323565b6040517f1ab06ee50000000000000000000000000000000000000000000000000000000081526004810187905260248101889052919350915073ffffffffffffffffffffffffffffffffffffffff841690631ab06ee590604401600060405180830381600087803b15801561035757600080fd5b505af115801561036b573d6000803e3d6000fd5b50506000546103b3925073ffffffffffffffffffffffffffffffffffffffff1690507fef3393883620fd592853ef61d4a33b35dd9fd9e4dc925bc5e1463919917423ab610de2565b604080517f36e334770000000000000000000000000000000000000000000000000000000081526004810187905284516024820152602085015163ffffffff908116604483015291850151909116606482015273ffffffffffffffffffffffffffffffffffffffff91909116906336e3347790608401600060405180830381600087803b15801561044357600080fd5b505af1158015610457573d6000803e3d6000fd5b505060005461049f925073ffffffffffffffffffffffffffffffffffffffff1690507f65188156108ab445e8ddb20e749f49402ca97dc723f07951b1c4a011dd8e1166610de2565b73ffffffffffffffffffffffffffffffffffffffff166334ff82df85836040518363ffffffff1660e01b81526004016104d9929190612787565b600060405180830381600087803b1580156104f357600080fd5b505af1158015610507573d6000803e3d6000fd5b505060005461054f925073ffffffffffffffffffffffffffffffffffffffff1690507f44d5df6fedbb1676612b3073b831a5f6f1d59057fb2b8978e7146cb8eee3ca8c610de2565b6040805180820182526000808252602082015290517f4e6641a900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9290921691634e6641a9916105b691889190600401612881565b600060405180830381600087803b1580156105d057600080fd5b505af11580156105e4573d6000803e3d6000fd5b505050505050505050919050565b60006106327f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146106a7576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106b08161182f565b50565b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a87805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091557ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a868054929093169116179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b60008054339082906107b09073ffffffffffffffffffffffffffffffffffffffff167fd9a058a8db06aec9057108bd96cfe2e7f580ccef7b81e22c7f33b2889597c1f2610de2565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810186905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa15801561081e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061084291906128ac565b80156108dc57506040517f0ff4c91600000000000000000000000000000000000000000000000000000000815260048101859052829073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401602060405180830381865afa1580156108b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108da919061276e565b145b610942576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f6e6f74206f776e6572206f66206775696c6420637265737400000000000000006044820152606401610178565b600080546109869073ffffffffffffffffffffffffffffffffffffffff167fde95e8412e4c1b59c183267e54d1bef716ab450b30c57bb7c5c88a38771301ab610de2565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810187905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa1580156109f4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a1891906128ac565b8015610ade57506040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810186905273ffffffffffffffffffffffffffffffffffffffff821690630ff4c91690602401600060405180830381865afa158015610a8a573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610ad09190810190612944565b6000015163ffffffff166004145b610b44576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f6e6f74206c6561646572206f66206775696c64000000000000000000000000006044820152606401610178565b60008054610b889073ffffffffffffffffffffffffffffffffffffffff167f53c6c48404020c13382f2b1b9b291c13f7e76aa44e5c76f2f9384b8aa97bfbe0610de2565b6040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810188905290915073ffffffffffffffffffffffffffffffffffffffff82169063cccf7a8e90602401602060405180830381865afa158015610bf6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c1a91906128ac565b610c80576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6e6f206775696c6420626f756e646564000000000000000000000000000000006044820152606401610178565b6040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810187905260009073ffffffffffffffffffffffffffffffffffffffff831690630ff4c91690602401602060405180830381865afa158015610cee573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d12919061276e565b979650505050505050565b60008054610d619073ffffffffffffffffffffffffffffffffffffffff167fe4af7d078f0416d6a9c8ce349a9162a49906513a833c27b4042ca87d9640cd68610de2565b73ffffffffffffffffffffffffffffffffffffffff1663cccf7a8e836040518263ffffffff1660e01b8152600401610d9b91815260200190565b602060405180830381865afa158015610db8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ddc91906128ac565b92915050565b6040517ffbdfa1ea00000000000000000000000000000000000000000000000000000000815260048101829052600090819073ffffffffffffffffffffffffffffffffffffffff85169063fbdfa1ea90602401600060405180830381865afa158015610e52573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610e989190810190612a0b565b90508051600003610f05576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6964206e6f7420726567697374657265640000000000000000000000000000006044820152606401610178565b610f2681600081518110610f1b57610f1b612a91565b602002602001015190565b949350505050565b60008054610f729073ffffffffffffffffffffffffffffffffffffffff167f189eafd1a01543209399086ef2e12962fca648be4826ce2b3eb2e53ed14bf141610de2565b6000805491925090610fba9073ffffffffffffffffffffffffffffffffffffffff167f3c3102d48c6d31b1a70ddf8b23d300c759379d6506f2ef221cf3056d7c54dca7610de2565b6040517f720354530000000000000000000000000000000000000000000000000000000081526004810186905290915060009073ffffffffffffffffffffffffffffffffffffffff831690637203545390602401602060405180830381865afa15801561102b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061104f9190612ac0565b60008054919250906110979073ffffffffffffffffffffffffffffffffffffffff167fdc602e66a6d8c84d0c8d6c4292d80341393a1e04ff02909a12718a4216d3a9f7610de2565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b815260040160a060405180830381865afa1580156110e1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111059190612ae3565b6040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810188905290915060009073ffffffffffffffffffffffffffffffffffffffff861690630ff4c916906024016040805180830381865afa158015611175573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111999190612b6d565b602083015181519192506000916111b09042612bf7565b6111ba9190612c4f565b82602001516111c99190612c76565b905063ffffffff841667ffffffffffffffff821611156111ec575063ffffffff83165b8667ffffffffffffffff168167ffffffffffffffff16101561126a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f6c61636b206f6620616374696f6e20706f696e747300000000000000000000006044820152606401610178565b6112748782612bf7565b60408051808201825267ffffffffffffffff42811682528316602082015290517f4e6641a900000000000000000000000000000000000000000000000000000000815291925073ffffffffffffffffffffffffffffffffffffffff881691634e6641a9916112e7918c9190600401612881565b600060405180830381600087803b15801561130157600080fd5b505af1158015611315573d6000803e3d6000fd5b505050505050505050505050565b60408051606081018252600080825260208201819052918101919091526040805161012081018252606080825260208201819052600092820183905281018290526080810182905260a0810182905260c0810182905260e081018290526101008101919091526001546040517f4f27da180000000000000000000000000000000000000000000000000000000081527f6ff1af157fa1e1b9d39dd94ba1bb33ea6a1a0d2f214bb2c71eb60cc093c06fc3600482015260009173ffffffffffffffffffffffffffffffffffffffff1690634f27da1890602401602060405180830381865afa158015611418573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061143c9190612ca2565b9050600061144e868660000151611838565b9050600043878760200151448673ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b8152600401602060405180830381865afa1580156114a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114c99190612cbf565b6040805160208101969096528501939093526060840191909152608083015263ffffffff1660a082015260c0016040516020818303038152906040528051906020012060001c905060008060008061152085611bcf565b935093509350935060006040518060600160405280868152602001600063ffffffff168152602001600063ffffffff168152509050600060405180610120016040528086602001518152602001866040015181526020018660a0015160ff1681526020018660c0015160ff168152602001856040015167ffffffffffffffff168152602001600067ffffffffffffffff168152602001856080015163ffffffff1681526020018967ffffffffffffffff1681526020018660e0015167ffffffffffffffff1681525090506000611613848660a0015167ffffffffffffffff168760c0015167ffffffffffffffff16611d5e565b9094509050611626638000000082612cda565b63ffffffff1660208401819052610100860151865167ffffffffffffffff9091169161165191612cee565b67ffffffffffffffff168360e0015167ffffffffffffffff1611156116f6576000846020015163ffffffff16876000015161168c9190612cee565b8460e0015161169b9190612bf7565b90506000876020015167ffffffffffffffff161180156116d35750818760200151826116c79190612c4f565b67ffffffffffffffff16105b156116f45760208701516116e79082612c4f565b67ffffffffffffffff1691505b505b61170f858760e0015167ffffffffffffffff1683611d5e565b9095509150611722638000000083612cda565b63ffffffff166040850152606086015167ffffffffffffffff161580159061179b5750836040015163ffffffff16866020015161175f9190612cee565b602085015187516117769163ffffffff1690612cee565b6117809190612c76565b67ffffffffffffffff168360e0015167ffffffffffffffff16115b15611813576000846040015163ffffffff1687602001516117bc9190612cee565b602086015188516117d39163ffffffff1690612cee565b8560e001516117e29190612bf7565b6117ec9190612bf7565b90508660600151816117fe9190612c4f565b67ffffffffffffffff1660a08501525061181b565b600160a08401525b50919d909c509a5050505050505050505050565b6106b081611db3565b60008054819061187e9073ffffffffffffffffffffffffffffffffffffffff167fb58ee6825aedec1d358adc24e0bfee53cd2d268bda2eed874befd69d96060781610de2565b60008054919250906118c69073ffffffffffffffffffffffffffffffffffffffff167fce1ed865af9f72b2adeac4b2bf9c5fa76868a1b9693d456996cae8dafb991fcf610de2565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b8152600401602060405180830381865afa158015611910573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119349190612d1e565b90506119408185612cee565b925060008367ffffffffffffffff16116119b6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f676f6c64207573656420697320696e73756666696369656e742e0000000000006044820152606401610178565b60006119c28285612cee565b67ffffffffffffffff169050808373ffffffffffffffffffffffffffffffffffffffff16630ff4c916886040518263ffffffff1660e01b8152600401611a0a91815260200190565b602060405180830381865afa158015611a27573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a4b919061276e565b1015611ab3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6c61636b206f6620676f6c6400000000000000000000000000000000000000006044820152606401610178565b6040517f0ff4c9160000000000000000000000000000000000000000000000000000000081526004810187905273ffffffffffffffffffffffffffffffffffffffff841690631ab06ee590889084908490630ff4c91690602401602060405180830381865afa158015611b2a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b4e919061276e565b611b589190612d39565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815260048101929092526024820152604401600060405180830381600087803b158015611bae57600080fd5b505af1158015611bc2573d6000803e3d6000fd5b5050505050505092915050565b604080516101008101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e081018290526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810191909152600080548190611c9f9073ffffffffffffffffffffffffffffffffffffffff167fcfb6241b41527f8aac5f293ecb22ce5491bdce4aca6f96ba85ab53f5ad8ca82f610de2565b73ffffffffffffffffffffffffffffffffffffffff1663209652556040518163ffffffff1660e01b8152600401600060405180830381865afa158015611ce9573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052611d2f9190810190612e9f565b90506000611d3d8288611e5f565b9097509050611d4c8188611f5b565b91985096509450925050509193509193565b60008083831115611da55783611d748185612d39565b611d7e9087612cda565b611d889190612f68565b9050611d948484612d39565b611d9e9086612f80565b9150611dab565b50839050825b935093915050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460805460405173ffffffffffffffffffffffffffffffffffffffff8481169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6000806000805b856020015151811015611eba5785602001518181518110611e8957611e89612a91565b602002602001015167ffffffffffffffff1682611ea69190612f68565b915080611eb281612f94565b915050611e66565b506000611ec985600084611d5e565b9094509050600080805b886020015151811015611f315788602001518181518110611ef657611ef6612a91565b602002602001015167ffffffffffffffff1682611f139190612f68565b9150809250838211611f315780611f2981612f94565b915050611ed3565b508751805183908110611f4657611f46612a91565b60200260200101519450505050509250929050565b604080516101008101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e0810182905281906040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101919091526000805461202b9073ffffffffffffffffffffffffffffffffffffffff167f1c25628829b4861cd29b8126181e286e9aa3749b43e568208fa84796fe72e381610de2565b60008054919250906120739073ffffffffffffffffffffffffffffffffffffffff167f4e85e4bd7fbc26f10fe53aa450c8a80dc5148546d6ed113502ac93556c10ece2610de2565b60008054919250906120bb9073ffffffffffffffffffffffffffffffffffffffff167fdd93cfd8a6751ddc87ad60672ba29f973167cf054c7cf626eef9bb0620fdfb69610de2565b6040517f447e2bd200000000000000000000000000000000000000000000000000000000815263ffffffff8b16600482015290915060009073ffffffffffffffffffffffffffffffffffffffff83169063447e2bd290602401600060405180830381865afa158015612131573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526121779190810190612a0b565b90506000805b82518110156122715760008673ffffffffffffffffffffffffffffffffffffffff16630ff4c9168584815181106121b6576121b6612a91565b60200260200101516040518263ffffffff1660e01b81526004016121dc91815260200190565b600060405180830381865afa1580156121f9573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261223f9190810190612fdd565b9050806080015167ffffffffffffffff168361225b9190612f68565b925050808061226990612f94565b91505061217d565b5060006122808b600084611d5e565b909a5090506000805b84518110156124415760008873ffffffffffffffffffffffffffffffffffffffff16630ff4c9168784815181106122c2576122c2612a91565b60200260200101516040518263ffffffff1660e01b81526004016122e891815260200190565b600060405180830381865afa158015612305573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261234b9190810190612fdd565b9050806080015167ffffffffffffffff16836123679190612f68565b925085828151811061237b5761237b612a91565b60200260200101519b50809a508773ffffffffffffffffffffffffffffffffffffffff16630ff4c9168784815181106123b6576123b6612a91565b60200260200101516040518263ffffffff1660e01b81526004016123dc91815260200190565b61012060405180830381865afa1580156123fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061241e91906130ce565b99508383111561242e5750612441565b508061243981612f94565b915050612289565b505050505050505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516060810167ffffffffffffffff811182821017156124a4576124a4612452565b60405290565b60405160a0810167ffffffffffffffff811182821017156124a4576124a4612452565b604051610100810167ffffffffffffffff811182821017156124a4576124a4612452565b604051610120810167ffffffffffffffff811182821017156124a4576124a4612452565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561255c5761255c612452565b604052919050565b600067ffffffffffffffff82111561257e5761257e612452565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b6000602082840312156125bc57600080fd5b813567ffffffffffffffff8111156125d357600080fd5b8201601f810184136125e457600080fd5b80356125f76125f282612564565b612515565b81815285602083850101111561260c57600080fd5b81602084016020830137600091810160200191909152949350505050565b60005b8381101561264557818101518382015260200161262d565b83811115612654576000848401525b50505050565b6000815180845261267281602086016020860161262a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006100f2602083018461265a565b6000606082840312156126c957600080fd5b6126d1612481565b8235815260208301356020820152604083013560408201528091505092915050565b73ffffffffffffffffffffffffffffffffffffffff811681146106b057600080fd5b60006020828403121561272757600080fd5b81356100f2816126f3565b60006060828403121561274457600080fd5b61274c612481565b8251815260208301516020820152604083015160408201528091505092915050565b60006020828403121561278057600080fd5b5051919050565b82815260406020820152600082516101208060408501526127ac61016085018361265a565b915060208501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08584030160608601526127e7838261265a565b92505060408501516127fe608086018260ff169052565b50606085015160ff811660a086015250608085015167ffffffffffffffff811660c08601525060a085015167ffffffffffffffff811660e08601525060c08501516101006128538187018363ffffffff169052565b60e087015167ffffffffffffffff908116938701939093528601519182166101408601525050949350505050565b828152606081016100f26020830184805167ffffffffffffffff908116835260209182015116910152565b6000602082840312156128be57600080fd5b815180151581146100f257600080fd5b805163ffffffff811681146128e257600080fd5b919050565b600082601f8301126128f857600080fd5b81516129066125f282612564565b81815284602083860101111561291b57600080fd5b610f2682602083016020870161262a565b805167ffffffffffffffff811681146128e257600080fd5b60006020828403121561295657600080fd5b815167ffffffffffffffff8082111561296e57600080fd5b9083019060a0828603121561298257600080fd5b61298a6124aa565b612993836128ce565b81526020830151828111156129a757600080fd5b6129b3878286016128e7565b60208301525060408301516040820152606083015160608201526129d96080840161292c565b608082015295945050505050565b600067ffffffffffffffff821115612a0157612a01612452565b5060051b60200190565b60006020808385031215612a1e57600080fd5b825167ffffffffffffffff811115612a3557600080fd5b8301601f81018513612a4657600080fd5b8051612a546125f2826129e7565b81815260059190911b82018301908381019087831115612a7357600080fd5b928401925b82841015610d1257835182529284019290840190612a78565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060208284031215612ad257600080fd5b81518060030b81146100f257600080fd5b600060a08284031215612af557600080fd5b60405160a0810181811067ffffffffffffffff82111715612b1857612b18612452565b604052612b248361292c565b8152612b326020840161292c565b6020820152612b436040840161292c565b6040820152612b546060840161292c565b6060820152608083015160808201528091505092915050565b600060408284031215612b7f57600080fd5b6040516040810181811067ffffffffffffffff82111715612ba257612ba2612452565b604052612bae8361292c565b8152612bbc6020840161292c565b60208201529392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600067ffffffffffffffff83811690831681811015612c1857612c18612bc8565b039392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600067ffffffffffffffff80841680612c6a57612c6a612c20565b92169190910492915050565b600067ffffffffffffffff808316818516808303821115612c9957612c99612bc8565b01949350505050565b600060208284031215612cb457600080fd5b81516100f2816126f3565b600060208284031215612cd157600080fd5b6100f2826128ce565b600082612ce957612ce9612c20565b500690565b600067ffffffffffffffff80831681851681830481118215151615612d1557612d15612bc8565b02949350505050565b600060208284031215612d3057600080fd5b6100f28261292c565b600082821015612d4b57612d4b612bc8565b500390565b600082601f830112612d6157600080fd5b81516020612d716125f2836129e7565b82815260059290921b84018101918181019086841115612d9057600080fd5b8286015b84811015612db257612da5816128ce565b8352918301918301612d94565b509695505050505050565b600082601f830112612dce57600080fd5b81516020612dde6125f2836129e7565b82815260059290921b84018101918181019086841115612dfd57600080fd5b8286015b84811015612db257612e128161292c565b8352918301918301612e01565b600082601f830112612e3057600080fd5b81516020612e406125f2836129e7565b82815260059290921b84018101918181019086841115612e5f57600080fd5b8286015b84811015612db257805167ffffffffffffffff811115612e835760008081fd5b612e918986838b01016128e7565b845250918301918301612e63565b600060208284031215612eb157600080fd5b815167ffffffffffffffff80821115612ec957600080fd5b9083019060a08286031215612edd57600080fd5b612ee56124aa565b825182811115612ef457600080fd5b612f0087828601612d50565b825250602083015182811115612f1557600080fd5b612f2187828601612dbd565b602083015250604083015182811115612f3957600080fd5b612f4587828601612e1f565b604083015250612f576060840161292c565b60608201526129d96080840161292c565b60008219821115612f7b57612f7b612bc8565b500190565b600082612f8f57612f8f612c20565b500490565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612fc557612fc5612bc8565b5060010190565b805160ff811681146128e257600080fd5b600060208284031215612fef57600080fd5b815167ffffffffffffffff8082111561300757600080fd5b90830190610100828603121561301c57600080fd5b6130246124cd565b8251815260208301518281111561303a57600080fd5b613046878286016128e7565b60208301525060408301518281111561305e57600080fd5b61306a878286016128e7565b60408301525061307c606084016128ce565b606082015261308d6080840161292c565b608082015261309e60a08401612fcc565b60a08201526130af60c08401612fcc565b60c08201526130c060e0840161292c565b60e082015295945050505050565b600061012082840312156130e157600080fd5b6130e96124f1565b6130f28361292c565b81526131006020840161292c565b60208201526131116040840161292c565b60408201526131226060840161292c565b6060820152613133608084016128ce565b608082015261314460a0840161292c565b60a082015261315560c0840161292c565b60c082015261316660e0840161292c565b60e082015261010061317981850161292c565b90820152939250505056fea2646970667358221220ba279945263312100f4906fc5759b382e760419fd25cd05e8c0606061584d4a464736f6c634300080d0033";

type GuildBuildTreasureSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GuildBuildTreasureSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GuildBuildTreasureSystem__factory extends ContractFactory {
  constructor(...args: GuildBuildTreasureSystemConstructorParams) {
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
  ): Promise<GuildBuildTreasureSystem> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<GuildBuildTreasureSystem>;
  }
  override getDeployTransaction(
    _world: PromiseOrValue<string>,
    _components: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  override attach(address: string): GuildBuildTreasureSystem {
    return super.attach(address) as GuildBuildTreasureSystem;
  }
  override connect(signer: Signer): GuildBuildTreasureSystem__factory {
    return super.connect(signer) as GuildBuildTreasureSystem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GuildBuildTreasureSystemInterface {
    return new utils.Interface(_abi) as GuildBuildTreasureSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GuildBuildTreasureSystem {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as GuildBuildTreasureSystem;
  }
}
