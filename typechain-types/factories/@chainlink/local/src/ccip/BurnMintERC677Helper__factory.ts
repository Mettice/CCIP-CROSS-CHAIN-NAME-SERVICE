/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BurnMintERC677Helper,
  BurnMintERC677HelperInterface,
} from "../../../../../@chainlink/local/src/ccip/BurnMintERC677Helper";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "supplyAfterMint",
        type: "uint256",
      },
    ],
    name: "MaxSupplyExceeded",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "SenderNotBurner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "SenderNotMinter",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "burner",
        type: "address",
      },
    ],
    name: "BurnAccessGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "burner",
        type: "address",
      },
    ],
    name: "BurnAccessRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "minter",
        type: "address",
      },
    ],
    name: "MintAccessGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "minter",
        type: "address",
      },
    ],
    name: "MintAccessRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
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
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseApproval",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "drip",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBurners",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMinters",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "burner",
        type: "address",
      },
    ],
    name: "grantBurnRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "burnAndMinter",
        type: "address",
      },
    ],
    name: "grantMintAndBurnRoles",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "minter",
        type: "address",
      },
    ],
    name: "grantMintRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseApproval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "burner",
        type: "address",
      },
    ],
    name: "isBurner",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "minter",
        type: "address",
      },
    ],
    name: "isMinter",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
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
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
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
        name: "burner",
        type: "address",
      },
    ],
    name: "revokeBurnRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "minter",
        type: "address",
      },
    ],
    name: "revokeMintRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "transferAndCall",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
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
  "0x60c06040523480156200001157600080fd5b5060405162001c4038038062001c4083398101604081905262000034916200027e565b8181601260003380828686818160036200004f838262000377565b5060046200005e828262000377565b5050506001600160a01b0384169150620000c190505760405162461bcd60e51b815260206004820152601860248201527f43616e6e6f7420736574206f776e657220746f207a65726f000000000000000060448201526064015b60405180910390fd5b600580546001600160a01b0319166001600160a01b0384811691909117909155811615620000f457620000f4816200010d565b50505060ff90911660805260a052506200044392505050565b336001600160a01b03821603620001675760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c660000000000000000006044820152606401620000b8565b600680546001600160a01b0319166001600160a01b03838116918217909255600554604051919216907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001e157600080fd5b81516001600160401b0380821115620001fe57620001fe620001b9565b604051601f8301601f19908116603f01168101908282118183101715620002295762000229620001b9565b816040528381526020925086838588010111156200024657600080fd5b600091505b838210156200026a57858201830151818301840152908201906200024b565b600093810190920192909252949350505050565b600080604083850312156200029257600080fd5b82516001600160401b0380821115620002aa57600080fd5b620002b886838701620001cf565b93506020850151915080821115620002cf57600080fd5b50620002de85828601620001cf565b9150509250929050565b600181811c90821680620002fd57607f821691505b6020821081036200031e57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200037257600081815260208120601f850160051c810160208610156200034d5750805b601f850160051c820191505b818110156200036e5782815560010162000359565b5050505b505050565b81516001600160401b03811115620003935762000393620001b9565b620003ab81620003a48454620002e8565b8462000324565b602080601f831160018114620003e35760008415620003ca5750858301515b600019600386901b1c1916600185901b1785556200036e565b600085815260208120601f198616915b828110156200041457888601518255948401946001909101908401620003f3565b5085821015620004335787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60805160a0516117c9620004776000396000818161044b01528181610733015261075d0152600061027c01526117c96000f3fe608060405234801561001057600080fd5b50600436106101fb5760003560e01c806379ba50971161011a578063aa271e1a116100ad578063d5abeb011161007c578063d5abeb0114610449578063d73dd6231461046f578063dd62ed3e14610482578063f2fde38b14610495578063f81094f3146104a857600080fd5b8063aa271e1a146103fd578063c2e3273d14610410578063c630948d14610423578063c64d0ebc1461043657600080fd5b806395d89b41116100e957806395d89b41146103bc5780639dc29fac146103c4578063a457c2d7146103d7578063a9059cbb146103ea57600080fd5b806379ba50971461037e57806379cc67901461038657806386fe8b43146103995780638da5cb5b146103a157600080fd5b806340c10f19116101925780636618846311610161578063661884631461031a57806367a5cd061461032d5780636b32810b1461034057806370a082311461035557600080fd5b806340c10f19146102cc57806342966c68146102e15780634334614a146102f45780634f5632f81461030757600080fd5b806323b872dd116101ce57806323b872dd14610262578063313ce5671461027557806339509351146102a65780634000aea0146102b957600080fd5b806301ffc9a71461020057806306fdde0314610228578063095ea7b31461023d57806318160ddd14610250575b600080fd5b61021361020e366004611406565b6104bb565b60405190151581526020015b60405180910390f35b610230610528565b60405161021f9190611476565b61021361024b3660046114a5565b6105ba565b6002545b60405190815260200161021f565b6102136102703660046114cf565b6105d2565b60405160ff7f000000000000000000000000000000000000000000000000000000000000000016815260200161021f565b6102136102b43660046114a5565b6105f6565b6102136102c7366004611521565b610618565b6102df6102da3660046114a5565b6106ee565b005b6102df6102ef3660046115ec565b6107d6565b610213610302366004611605565b61080a565b6102df610315366004611605565b610817565b6102136103283660046114a5565b610866565b6102df61033b366004611605565b610879565b61034861088b565b60405161021f9190611620565b610254610363366004611605565b6001600160a01b031660009081526020819052604090205490565b6102df61089c565b6102df6103943660046114a5565b61094a565b610348610980565b6005546040516001600160a01b03909116815260200161021f565b61023061098c565b6102df6103d23660046114a5565b61099b565b6102136103e53660046114a5565b6109a5565b6102136103f83660046114a5565b610a20565b61021361040b366004611605565b610a2e565b6102df61041e366004611605565b610a3b565b6102df610431366004611605565b610a8a565b6102df610444366004611605565b610a98565b7f0000000000000000000000000000000000000000000000000000000000000000610254565b6102df61047d3660046114a5565b610ae7565b61025461049036600461166d565b610af1565b6102df6104a3366004611605565b610b1c565b6102df6104b6366004611605565b610b2d565b60006001600160e01b031982166336372b0760e01b14806104ec57506001600160e01b03198216630200057560e51b145b8061050757506001600160e01b0319821663e6599b4d60e01b145b8061052257506001600160e01b031982166301ffc9a760e01b145b92915050565b606060038054610537906116a0565b80601f0160208091040260200160405190810160405280929190818152602001828054610563906116a0565b80156105b05780601f10610585576101008083540402835291602001916105b0565b820191906000526020600020905b81548152906001019060200180831161059357829003601f168201915b5050505050905090565b6000336105c8818585610b7c565b5060019392505050565b6000336105e0858285610ba3565b6105eb858585610c17565b506001949350505050565b6000336105c88185856106098383610af1565b61061391906116f0565b610b7c565b60006106248484610a20565b50836001600160a01b0316336001600160a01b03167fe19260aff97b920c7df27010903aeb9c8d2be5d310a2c67824cf3f15396e4c16858560405161066a929190611703565b60405180910390a36001600160a01b0384163b156105c857604051635260769b60e11b81526001600160a01b0385169063a4c0ed36906106b290339087908790600401611724565b600060405180830381600087803b1580156106cc57600080fd5b505af11580156106e0573d6000803e3d6000fd5b505050505060019392505050565b6106f733610a2e565b61071b5760405163e2c8c9d560e01b81523360048201526024015b60405180910390fd5b81306001600160a01b0382160361073157600080fd5b7f00000000000000000000000000000000000000000000000000000000000000001580159061079257507f00000000000000000000000000000000000000000000000000000000000000008261078660025490565b61079091906116f0565b115b156107c757816107a160025490565b6107ab91906116f0565b60405163cbbf111360e01b815260040161071291815260200190565b6107d18383610c38565b505050565b6107df3361080a565b6107fe5760405163c820b10b60e01b8152336004820152602401610712565b61080781610cf7565b50565b6000610522600983610d01565b61081f610d23565b61082a600982610d78565b15610807576040516001600160a01b038216907f0a675452746933cefe3d74182e78db7afe57ba60eaa4234b5d85e9aa41b0610c90600090a250565b600061087283836109a5565b9392505050565b61080781670de0b6b3a7640000610c38565b60606108976007610d8d565b905090565b6006546001600160a01b031633146108ef5760405162461bcd60e51b815260206004820152601660248201527526bab9ba10313290383937b837b9b2b21037bbb732b960511b6044820152606401610712565b600580546001600160a01b0319808216339081179093556006805490911690556040516001600160a01b03909116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6109533361080a565b6109725760405163c820b10b60e01b8152336004820152602401610712565b61097c8282610d9a565b5050565b60606108976009610d8d565b606060048054610537906116a0565b61097c828261094a565b600033816109b38286610af1565b905083811015610a135760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610712565b6105eb8286868403610b7c565b6000336105c8818585610c17565b6000610522600783610d01565b610a43610d23565b610a4e600782610daf565b15610807576040516001600160a01b038216907fe46fef8bbff1389d9010703cf8ebb363fb3daf5bf56edc27080b67bc8d9251ea90600090a250565b610a9381610a3b565b610807815b610aa0610d23565b610aab600982610daf565b15610807576040516001600160a01b038216907f92308bb7573b2a3d17ddb868b39d8ebec433f3194421abc22d084f89658c9bad90600090a250565b6107d182826105f6565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b610b24610d23565b61080781610dc4565b610b35610d23565b610b40600782610d78565b15610807576040516001600160a01b038216907fed998b960f6340d045f620c119730f7aa7995e7425c2401d3a5b64ff998a59e990600090a250565b81306001600160a01b03821603610b9257600080fd5b610b9d848484610e6e565b50505050565b6000610baf8484610af1565b90506000198114610b9d5781811015610c0a5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610712565b610b9d8484848403610b7c565b81306001600160a01b03821603610c2d57600080fd5b610b9d848484610f92565b6001600160a01b038216610c8e5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610712565b8060026000828254610ca091906116f0565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b6108073382611136565b6001600160a01b03811660009081526001830160205260408120541515610872565b6005546001600160a01b03163314610d765760405162461bcd60e51b815260206004820152601660248201527527b7363c9031b0b63630b1363290313c9037bbb732b960511b6044820152606401610712565b565b6000610872836001600160a01b038416611268565b606060006108728361135b565b610da5823383610ba3565b61097c8282611136565b6000610872836001600160a01b0384166113b7565b336001600160a01b03821603610e1c5760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c660000000000000000006044820152606401610712565b600680546001600160a01b0319166001600160a01b03838116918217909255600554604051919216907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b6001600160a01b038316610ed05760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610712565b6001600160a01b038216610f315760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610712565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038316610ff65760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610712565b6001600160a01b0382166110585760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610712565b6001600160a01b038316600090815260208190526040902054818110156110d05760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610712565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3610b9d565b6001600160a01b0382166111965760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610712565b6001600160a01b0382166000908152602081905260409020548181101561120a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610712565b6001600160a01b0383166000818152602081815260408083208686039055600280548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3505050565b6000818152600183016020526040812054801561135157600061128c600183611754565b85549091506000906112a090600190611754565b90508181146113055760008660000182815481106112c0576112c0611767565b90600052602060002001549050808760000184815481106112e3576112e3611767565b6000918252602080832090910192909255918252600188019052604090208390555b85548690806113165761131661177d565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610522565b6000915050610522565b6060816000018054806020026020016040519081016040528092919081815260200182805480156113ab57602002820191906000526020600020905b815481526020019060010190808311611397575b50505050509050919050565b60008181526001830160205260408120546113fe57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610522565b506000610522565b60006020828403121561141857600080fd5b81356001600160e01b03198116811461087257600080fd5b6000815180845260005b818110156114565760208185018101518683018201520161143a565b506000602082860101526020601f19601f83011685010191505092915050565b6020815260006108726020830184611430565b80356001600160a01b03811681146114a057600080fd5b919050565b600080604083850312156114b857600080fd5b6114c183611489565b946020939093013593505050565b6000806000606084860312156114e457600080fd5b6114ed84611489565b92506114fb60208501611489565b9150604084013590509250925092565b634e487b7160e01b600052604160045260246000fd5b60008060006060848603121561153657600080fd5b61153f84611489565b925060208401359150604084013567ffffffffffffffff8082111561156357600080fd5b818601915086601f83011261157757600080fd5b8135818111156115895761158961150b565b604051601f8201601f19908116603f011681019083821181831017156115b1576115b161150b565b816040528281528960208487010111156115ca57600080fd5b8260208601602083013760006020848301015280955050505050509250925092565b6000602082840312156115fe57600080fd5b5035919050565b60006020828403121561161757600080fd5b61087282611489565b6020808252825182820181905260009190848201906040850190845b818110156116615783516001600160a01b03168352928401929184019160010161163c565b50909695505050505050565b6000806040838503121561168057600080fd5b61168983611489565b915061169760208401611489565b90509250929050565b600181811c908216806116b457607f821691505b6020821081036116d457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b80820180821115610522576105226116da565b82815260406020820152600061171c6040830184611430565b949350505050565b60018060a01b038416815282602082015260606040820152600061174b6060830184611430565b95945050505050565b81810381811115610522576105226116da565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fdfea26469706673582212204ee14c786b08fe6acd2054464c692179787c1c0c787ca20bab30449da1b41ec364736f6c63430008130033";

type BurnMintERC677HelperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BurnMintERC677HelperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BurnMintERC677Helper__factory extends ContractFactory {
  constructor(...args: BurnMintERC677HelperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string }
  ): Promise<BurnMintERC677Helper> {
    return super.deploy(
      name,
      symbol,
      overrides || {}
    ) as Promise<BurnMintERC677Helper>;
  }
  override getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  override attach(address: string): BurnMintERC677Helper {
    return super.attach(address) as BurnMintERC677Helper;
  }
  override connect(signer: Signer): BurnMintERC677Helper__factory {
    return super.connect(signer) as BurnMintERC677Helper__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BurnMintERC677HelperInterface {
    return new utils.Interface(_abi) as BurnMintERC677HelperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BurnMintERC677Helper {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BurnMintERC677Helper;
  }
}
