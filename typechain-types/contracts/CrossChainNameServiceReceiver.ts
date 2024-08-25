/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export declare namespace Client {
  export type EVMTokenAmountStruct = { token: string; amount: BigNumberish };

  export type EVMTokenAmountStructOutput = [string, BigNumber] & {
    token: string;
    amount: BigNumber;
  };

  export type Any2EVMMessageStruct = {
    messageId: BytesLike;
    sourceChainSelector: BigNumberish;
    sender: BytesLike;
    data: BytesLike;
    destTokenAmounts: Client.EVMTokenAmountStruct[];
  };

  export type Any2EVMMessageStructOutput = [
    string,
    BigNumber,
    string,
    string,
    Client.EVMTokenAmountStructOutput[]
  ] & {
    messageId: string;
    sourceChainSelector: BigNumber;
    sender: string;
    data: string;
    destTokenAmounts: Client.EVMTokenAmountStructOutput[];
  };
}

export interface CrossChainNameServiceReceiverInterface
  extends utils.Interface {
  functions: {
    "ccipReceive((bytes32,uint64,bytes,bytes,(address,uint256)[]))": FunctionFragment;
    "getRouter()": FunctionFragment;
    "i_lookup()": FunctionFragment;
    "i_router()": FunctionFragment;
    "i_sourceChainSelector()": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "ccipReceive"
      | "getRouter"
      | "i_lookup"
      | "i_router"
      | "i_sourceChainSelector"
      | "supportsInterface"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "ccipReceive",
    values: [Client.Any2EVMMessageStruct]
  ): string;
  encodeFunctionData(functionFragment: "getRouter", values?: undefined): string;
  encodeFunctionData(functionFragment: "i_lookup", values?: undefined): string;
  encodeFunctionData(functionFragment: "i_router", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "i_sourceChainSelector",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "ccipReceive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getRouter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "i_lookup", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "i_router", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "i_sourceChainSelector",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {};
}

export interface CrossChainNameServiceReceiver extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CrossChainNameServiceReceiverInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    ccipReceive(
      message: Client.Any2EVMMessageStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    getRouter(overrides?: CallOverrides): Promise<[string]>;

    i_lookup(overrides?: CallOverrides): Promise<[string]>;

    i_router(overrides?: CallOverrides): Promise<[string]>;

    i_sourceChainSelector(overrides?: CallOverrides): Promise<[BigNumber]>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  ccipReceive(
    message: Client.Any2EVMMessageStruct,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  getRouter(overrides?: CallOverrides): Promise<string>;

  i_lookup(overrides?: CallOverrides): Promise<string>;

  i_router(overrides?: CallOverrides): Promise<string>;

  i_sourceChainSelector(overrides?: CallOverrides): Promise<BigNumber>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    ccipReceive(
      message: Client.Any2EVMMessageStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    getRouter(overrides?: CallOverrides): Promise<string>;

    i_lookup(overrides?: CallOverrides): Promise<string>;

    i_router(overrides?: CallOverrides): Promise<string>;

    i_sourceChainSelector(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    ccipReceive(
      message: Client.Any2EVMMessageStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    getRouter(overrides?: CallOverrides): Promise<BigNumber>;

    i_lookup(overrides?: CallOverrides): Promise<BigNumber>;

    i_router(overrides?: CallOverrides): Promise<BigNumber>;

    i_sourceChainSelector(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ccipReceive(
      message: Client.Any2EVMMessageStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    getRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    i_lookup(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    i_router(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    i_sourceChainSelector(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
