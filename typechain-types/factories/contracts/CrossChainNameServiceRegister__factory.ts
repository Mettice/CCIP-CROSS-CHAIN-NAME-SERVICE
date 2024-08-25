/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CrossChainNameServiceRegister,
  CrossChainNameServiceRegisterInterface,
} from "../../contracts/CrossChainNameServiceRegister";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        internalType: "address",
        name: "lookup",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
    ],
    name: "InvalidRouter",
    type: "error",
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
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "chainSelector",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "ccnsReceiverAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "gasLimit",
        type: "uint256",
      },
    ],
    name: "enableChain",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "i_lookup",
    outputs: [
      {
        internalType: "contract ICrossChainNameServiceLookup",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "i_router",
    outputs: [
      {
        internalType: "contract IRouterClient",
        name: "",
        type: "address",
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
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "register",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "s_chains",
    outputs: [
      {
        internalType: "uint64",
        name: "chainSelector",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "ccnsReceiverAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "gasLimit",
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
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60c060405234801561001057600080fd5b50604051610da6380380610da683398101604081905261002f91610194565b33806000816100855760405162461bcd60e51b815260206004820152601860248201527f43616e6e6f7420736574206f776e657220746f207a65726f000000000000000060448201526064015b60405180910390fd5b600080546001600160a01b0319166001600160a01b03848116919091179091558116156100b5576100b5816100cf565b5050506001600160a01b039182166080521660a0526101c7565b336001600160a01b038216036101275760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c66000000000000000000604482015260640161007c565b600180546001600160a01b0319166001600160a01b0383811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b80516001600160a01b038116811461018f57600080fd5b919050565b600080604083850312156101a757600080fd5b6101b083610178565b91506101be60208401610178565b90509250929050565b60805160a051610bad6101f9600039600081816101bc015261071601526000818160ca015261060a0152610bad6000f3fe60806040526004361061008a5760003560e01c80638da5cb5b116100595780638da5cb5b1461016c578063b67235621461018a578063e0b30b1f146101aa578063f2c298be146101de578063f2fde38b146101fe57600080fd5b806351cff8d914610096578063581bdd16146100b85780635b54137d1461010957806379ba50971461015757600080fd5b3661009157005b600080fd5b3480156100a257600080fd5b506100b66100b13660046108b1565b61021e565b005b3480156100c457600080fd5b506100ec7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561011557600080fd5b506101296101243660046108d3565b6102c8565b6040805167ffffffffffffffff90941684526001600160a01b03909216602084015290820152606001610100565b34801561016357600080fd5b506100b6610312565b34801561017857600080fd5b506000546001600160a01b03166100ec565b34801561019657600080fd5b506100b66101a53660046108ec565b6103bc565b3480156101b657600080fd5b506100ec7f000000000000000000000000000000000000000000000000000000000000000081565b3480156101ea57600080fd5b506100b66101f936600461094d565b610474565b34801561020a57600080fd5b506100b66102193660046108b1565b610783565b610226610797565b60405147906000906001600160a01b0384169083908381818185875af1925050503d8060008114610273576040519150601f19603f3d011682016040523d82523d6000602084013e610278565b606091505b50509050806102c35760405162461bcd60e51b81526020600482015260126024820152714661696c656420746f20776974686472617760701b60448201526064015b60405180910390fd5b505050565b600281815481106102d857600080fd5b60009182526020909120600290910201805460019091015467ffffffffffffffff82169250600160401b9091046001600160a01b03169083565b6001546001600160a01b031633146103655760405162461bcd60e51b815260206004820152601660248201527526bab9ba10313290383937b837b9b2b21037bbb732b960511b60448201526064016102ba565b60008054336001600160a01b0319808316821784556001805490911690556040516001600160a01b0390921692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a350565b6103c4610797565b6040805160608101825267ffffffffffffffff94851681526001600160a01b0393841660208201908152918101928352600280546001810182556000829052915191027f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace810180549351909516600160401b026001600160e01b0319909316919095161717909155517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf90910155565b60025460005b818110156106fe57600060028281548110610497576104976109fe565b6000918252602080832060408051606081018252600294909402909101805467ffffffffffffffff81168552600160401b90046001600160a01b0390811693850193845260019091015484830152815160a08101909252915190911660c08201529092508060e0810160405160208183030381529060405281526020018633604051602001610527929190610a5a565b60408051601f198184030181529190528152602001600060405190808252806020026020018201604052801561058357816020015b604080518082019091526000808252602082015281526020019060019003908161055c5790505b50815260200160006001600160a01b031681526020016105ec6040518060200160405280866040015181525060408051915160248084019190915281518084039091018152604490920190526020810180516001600160e01b03166397a657c960e01b17905290565b905282516040516320487ded60e01b81529192506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016916396f4e9f99183916320487ded91610647918790600401610a84565b602060405180830381865afa158015610664573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106889190610b5e565b84516040516001600160e01b031960e085901b1681526106ad91908690600401610a84565b60206040518083038185885af11580156106cb573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906106f09190610b5e565b50826001019250505061047a565b50604051631e59c52960e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690631e59c5299061074d9085903390600401610a5a565b600060405180830381600087803b15801561076757600080fd5b505af115801561077b573d6000803e3d6000fd5b505050505050565b61078b610797565b610794816107ec565b50565b6000546001600160a01b031633146107ea5760405162461bcd60e51b815260206004820152601660248201527527b7363c9031b0b63630b1363290313c9037bbb732b960511b60448201526064016102ba565b565b336001600160a01b038216036108445760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c6600000000000000000060448201526064016102ba565b600180546001600160a01b0319166001600160a01b0383811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b80356001600160a01b03811681146108ac57600080fd5b919050565b6000602082840312156108c357600080fd5b6108cc82610895565b9392505050565b6000602082840312156108e557600080fd5b5035919050565b60008060006060848603121561090157600080fd5b833567ffffffffffffffff8116811461091957600080fd5b925061092760208501610895565b9150604084013590509250925092565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561095f57600080fd5b813567ffffffffffffffff8082111561097757600080fd5b818401915084601f83011261098b57600080fd5b81358181111561099d5761099d610937565b604051601f8201601f19908116603f011681019083821181831017156109c5576109c5610937565b816040528281528760208487010111156109de57600080fd5b826020860160208301376000928101602001929092525095945050505050565b634e487b7160e01b600052603260045260246000fd5b6000815180845260005b81811015610a3a57602081850181015186830182015201610a1e565b506000602082860101526020601f19601f83011685010191505092915050565b604081526000610a6d6040830185610a14565b905060018060a01b03831660208301529392505050565b6000604067ffffffffffffffff8516835260208181850152845160a083860152610ab160e0860182610a14565b905081860151603f1980878403016060880152610ace8383610a14565b88860151888203830160808a01528051808352908601945060009350908501905b80841015610b2157845180516001600160a01b0316835286015186830152938501936001939093019290860190610aef565b5060608901516001600160a01b031660a08901526080890151888203830160c08a01529550610b508187610a14565b9a9950505050505050505050565b600060208284031215610b7057600080fd5b505191905056fea2646970667358221220c127d729989fe22220620f578a7d7d709c258a60b0b3469e1494d9b789a3d75864736f6c63430008130033";

type CrossChainNameServiceRegisterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CrossChainNameServiceRegisterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CrossChainNameServiceRegister__factory extends ContractFactory {
  constructor(...args: CrossChainNameServiceRegisterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    router: string,
    lookup: string,
    overrides?: Overrides & { from?: string }
  ): Promise<CrossChainNameServiceRegister> {
    return super.deploy(
      router,
      lookup,
      overrides || {}
    ) as Promise<CrossChainNameServiceRegister>;
  }
  override getDeployTransaction(
    router: string,
    lookup: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(router, lookup, overrides || {});
  }
  override attach(address: string): CrossChainNameServiceRegister {
    return super.attach(address) as CrossChainNameServiceRegister;
  }
  override connect(signer: Signer): CrossChainNameServiceRegister__factory {
    return super.connect(signer) as CrossChainNameServiceRegister__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CrossChainNameServiceRegisterInterface {
    return new utils.Interface(_abi) as CrossChainNameServiceRegisterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CrossChainNameServiceRegister {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CrossChainNameServiceRegister;
  }
}
