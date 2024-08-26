/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
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
  "0x60c06040523480156200001157600080fd5b5060405162001b6638038062001b6683398181016040528101906200003791906200033f565b338060008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620000ac576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000a390620003e7565b60405180910390fd5b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161462000133576200013281620001a660201b60201c565b5b5050508173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff168152505050506200047b565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160362000217576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200020e9062000459565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127860405160405180910390a350565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200030782620002da565b9050919050565b6200031981620002fa565b81146200032557600080fd5b50565b60008151905062000339816200030e565b92915050565b60008060408385031215620003595762000358620002d5565b5b6000620003698582860162000328565b92505060206200037c8582860162000328565b9150509250929050565b600082825260208201905092915050565b7f43616e6e6f7420736574206f776e657220746f207a65726f0000000000000000600082015250565b6000620003cf60188362000386565b9150620003dc8262000397565b602082019050919050565b600060208201905081810360008301526200040281620003c0565b9050919050565b7f43616e6e6f74207472616e7366657220746f2073656c66000000000000000000600082015250565b60006200044160178362000386565b91506200044e8262000409565b602082019050919050565b60006020820190508181036000830152620004748162000432565b9050919050565b60805160a0516116b0620004b66000396000818161061601526109570152600081816102d101528181610806015261084201526116b06000f3fe60806040526004361061008a5760003560e01c80638da5cb5b116100595780638da5cb5b14610140578063b67235621461016b578063e0b30b1f14610194578063f2c298be146101bf578063f2fde38b146101e857610091565b806351cff8d914610096578063581bdd16146100bf5780635b54137d146100ea57806379ba50971461012957610091565b3661009157005b600080fd5b3480156100a257600080fd5b506100bd60048036038101906100b89190610cd7565b610211565b005b3480156100cb57600080fd5b506100d46102cf565b6040516100e19190610d63565b60405180910390f35b3480156100f657600080fd5b50610111600480360381019061010c9190610db4565b6102f3565b60405161012093929190610e22565b60405180910390f35b34801561013557600080fd5b5061013e610361565b005b34801561014c57600080fd5b506101556104f6565b6040516101629190610e59565b60405180910390f35b34801561017757600080fd5b50610192600480360381019061018d9190610ea0565b61051f565b005b3480156101a057600080fd5b506101a9610614565b6040516101b69190610f14565b60405180910390f35b3480156101cb57600080fd5b506101e660048036038101906101e19190611075565b610638565b005b3480156101f457600080fd5b5061020f600480360381019061020a9190610cd7565b6109e6565b005b6102196109fa565b600047905060008273ffffffffffffffffffffffffffffffffffffffff1682604051610244906110ef565b60006040518083038185875af1925050503d8060008114610281576040519150601f19603f3d011682016040523d82523d6000602084013e610286565b606091505b50509050806102ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102c190611161565b60405180910390fd5b505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6002818154811061030357600080fd5b90600052602060002090600202016000915090508060000160009054906101000a900467ffffffffffffffff16908060000160089054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154905083565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103e8906111cd565b60405180910390fd5b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a350565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6105276109fa565b600260405180606001604052808567ffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff16815260200183815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060208201518160000160086101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604082015181600101555050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000600280549050905060005b8181101561095457600060028281548110610663576106626111ed565b5b90600052602060002090600202016040518060600160405290816000820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020016000820160089054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015481525050905060006040518060a0016040528083602001516040516020016107329190610e59565b6040516020818303038152906040528152602001863360405160200161075992919061128a565b6040516020818303038152906040528152602001600067ffffffffffffffff81111561078857610787610f4a565b5b6040519080825280602002602001820160405280156107c157816020015b6107ae610c35565b8152602001906001900390816107a65790505b508152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016107ff60405180602001604052808660400151815250610a8a565b81525090507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166396f4e9f97f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166320487ded8560000151856040518363ffffffff1660e01b815260040161089f929190611496565b602060405180830381865afa1580156108bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e091906114db565b8460000151846040518463ffffffff1660e01b8152600401610903929190611496565b60206040518083038185885af1158015610921573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610946919061153e565b508260010192505050610645565b507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16631e59c52983336040518363ffffffff1660e01b81526004016109b092919061128a565b600060405180830381600087803b1580156109ca57600080fd5b505af11580156109de573d6000803e3d6000fd5b505050505050565b6109ee6109fa565b6109f781610b09565b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a88576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a7f906115b7565b60405180910390fd5b565b60606397a657c960e01b82604051602401610aa591906115f3565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050509050919050565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610b77576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b6e9061165a565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127860405160405180910390a350565b6040518060400160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610ca482610c79565b9050919050565b610cb481610c99565b8114610cbf57600080fd5b50565b600081359050610cd181610cab565b92915050565b600060208284031215610ced57610cec610c6f565b5b6000610cfb84828501610cc2565b91505092915050565b6000819050919050565b6000610d29610d24610d1f84610c79565b610d04565b610c79565b9050919050565b6000610d3b82610d0e565b9050919050565b6000610d4d82610d30565b9050919050565b610d5d81610d42565b82525050565b6000602082019050610d786000830184610d54565b92915050565b6000819050919050565b610d9181610d7e565b8114610d9c57600080fd5b50565b600081359050610dae81610d88565b92915050565b600060208284031215610dca57610dc9610c6f565b5b6000610dd884828501610d9f565b91505092915050565b600067ffffffffffffffff82169050919050565b610dfe81610de1565b82525050565b610e0d81610c99565b82525050565b610e1c81610d7e565b82525050565b6000606082019050610e376000830186610df5565b610e446020830185610e04565b610e516040830184610e13565b949350505050565b6000602082019050610e6e6000830184610e04565b92915050565b610e7d81610de1565b8114610e8857600080fd5b50565b600081359050610e9a81610e74565b92915050565b600080600060608486031215610eb957610eb8610c6f565b5b6000610ec786828701610e8b565b9350506020610ed886828701610cc2565b9250506040610ee986828701610d9f565b9150509250925092565b6000610efe82610d30565b9050919050565b610f0e81610ef3565b82525050565b6000602082019050610f296000830184610f05565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610f8282610f39565b810181811067ffffffffffffffff82111715610fa157610fa0610f4a565b5b80604052505050565b6000610fb4610c65565b9050610fc08282610f79565b919050565b600067ffffffffffffffff821115610fe057610fdf610f4a565b5b610fe982610f39565b9050602081019050919050565b82818337600083830152505050565b600061101861101384610fc5565b610faa565b90508281526020810184848401111561103457611033610f34565b5b61103f848285610ff6565b509392505050565b600082601f83011261105c5761105b610f2f565b5b813561106c848260208601611005565b91505092915050565b60006020828403121561108b5761108a610c6f565b5b600082013567ffffffffffffffff8111156110a9576110a8610c74565b5b6110b584828501611047565b91505092915050565b600081905092915050565b50565b60006110d96000836110be565b91506110e4826110c9565b600082019050919050565b60006110fa826110cc565b9150819050919050565b600082825260208201905092915050565b7f4661696c656420746f2077697468647261770000000000000000000000000000600082015250565b600061114b601283611104565b915061115682611115565b602082019050919050565b6000602082019050818103600083015261117a8161113e565b9050919050565b7f4d7573742062652070726f706f736564206f776e657200000000000000000000600082015250565b60006111b7601683611104565b91506111c282611181565b602082019050919050565b600060208201905081810360008301526111e6816111aa565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081519050919050565b60005b8381101561124557808201518184015260208101905061122a565b60008484015250505050565b600061125c8261121c565b6112668185611104565b9350611276818560208601611227565b61127f81610f39565b840191505092915050565b600060408201905081810360008301526112a48185611251565b90506112b36020830184610e04565b9392505050565b600081519050919050565b600082825260208201905092915050565b60006112e1826112ba565b6112eb81856112c5565b93506112fb818560208601611227565b61130481610f39565b840191505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61134481610c99565b82525050565b61135381610d7e565b82525050565b60408201600082015161136f600085018261133b565b506020820151611382602085018261134a565b50505050565b60006113948383611359565b60408301905092915050565b6000602082019050919050565b60006113b88261130f565b6113c2818561131a565b93506113cd8361132b565b8060005b838110156113fe5781516113e58882611388565b97506113f0836113a0565b9250506001810190506113d1565b5085935050505092915050565b600060a083016000830151848203600086015261142882826112d6565b9150506020830151848203602086015261144282826112d6565b9150506040830151848203604086015261145c82826113ad565b9150506060830151611471606086018261133b565b506080830151848203608086015261148982826112d6565b9150508091505092915050565b60006040820190506114ab6000830185610df5565b81810360208301526114bd818461140b565b90509392505050565b6000815190506114d581610d88565b92915050565b6000602082840312156114f1576114f0610c6f565b5b60006114ff848285016114c6565b91505092915050565b6000819050919050565b61151b81611508565b811461152657600080fd5b50565b60008151905061153881611512565b92915050565b60006020828403121561155457611553610c6f565b5b600061156284828501611529565b91505092915050565b7f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000600082015250565b60006115a1601683611104565b91506115ac8261156b565b602082019050919050565b600060208201905081810360008301526115d081611594565b9050919050565b6020820160008201516115ed600085018261134a565b50505050565b600060208201905061160860008301846115d7565b92915050565b7f43616e6e6f74207472616e7366657220746f2073656c66000000000000000000600082015250565b6000611644601783611104565b915061164f8261160e565b602082019050919050565b6000602082019050818103600083015261167381611637565b905091905056fea26469706673582212204ce6087f7259692d800e5a1651def6036ae2ffd85ddf2ed226bd3f3d815d1b9464736f6c63430008130033";

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

  override getDeployTransaction(
    router: AddressLike,
    lookup: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(router, lookup, overrides || {});
  }
  override deploy(
    router: AddressLike,
    lookup: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(router, lookup, overrides || {}) as Promise<
      CrossChainNameServiceRegister & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): CrossChainNameServiceRegister__factory {
    return super.connect(runner) as CrossChainNameServiceRegister__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CrossChainNameServiceRegisterInterface {
    return new Interface(_abi) as CrossChainNameServiceRegisterInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): CrossChainNameServiceRegister {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as CrossChainNameServiceRegister;
  }
}
