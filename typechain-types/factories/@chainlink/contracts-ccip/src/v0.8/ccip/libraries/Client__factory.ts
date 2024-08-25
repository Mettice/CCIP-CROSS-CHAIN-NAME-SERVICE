/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Client,
  ClientInterface,
} from "../../../../../../../@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client";

const _abi = [
  {
    inputs: [],
    name: "EVM_EXTRA_ARGS_V1_TAG",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6098610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c80633ab8c0d0146038575b600080fd5b60456397a657c960e01b81565b6040516001600160e01b0319909116815260200160405180910390f3fea2646970667358221220be0ed52c340dfdb08bfc9a24be601f331fcba041341acbf67a08d49476a4558a64736f6c63430008130033";

type ClientConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ClientConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Client__factory extends ContractFactory {
  constructor(...args: ClientConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(overrides?: Overrides & { from?: string }): Promise<Client> {
    return super.deploy(overrides || {}) as Promise<Client>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Client {
    return super.attach(address) as Client;
  }
  override connect(signer: Signer): Client__factory {
    return super.connect(signer) as Client__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ClientInterface {
    return new utils.Interface(_abi) as ClientInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Client {
    return new Contract(address, _abi, signerOrProvider) as Client;
  }
}
