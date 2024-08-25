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
} from "../../../../../../common";

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

export interface IRouterInterface extends utils.Interface {
  functions: {
    "getOnRamp(uint64)": FunctionFragment;
    "isOffRamp(uint64,address)": FunctionFragment;
    "routeMessage((bytes32,uint64,bytes,bytes,(address,uint256)[]),uint16,uint256,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "getOnRamp" | "isOffRamp" | "routeMessage"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getOnRamp",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isOffRamp",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "routeMessage",
    values: [Client.Any2EVMMessageStruct, BigNumberish, BigNumberish, string]
  ): string;

  decodeFunctionResult(functionFragment: "getOnRamp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isOffRamp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "routeMessage",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IRouter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IRouterInterface;

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
    getOnRamp(
      destChainSelector: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { onRampAddress: string }>;

    isOffRamp(
      sourceChainSelector: BigNumberish,
      offRamp: string,
      overrides?: CallOverrides
    ): Promise<[boolean] & { isOffRamp: boolean }>;

    routeMessage(
      message: Client.Any2EVMMessageStruct,
      gasForCallExactCheck: BigNumberish,
      gasLimit: BigNumberish,
      receiver: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  getOnRamp(
    destChainSelector: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  isOffRamp(
    sourceChainSelector: BigNumberish,
    offRamp: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  routeMessage(
    message: Client.Any2EVMMessageStruct,
    gasForCallExactCheck: BigNumberish,
    gasLimit: BigNumberish,
    receiver: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    getOnRamp(
      destChainSelector: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    isOffRamp(
      sourceChainSelector: BigNumberish,
      offRamp: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    routeMessage(
      message: Client.Any2EVMMessageStruct,
      gasForCallExactCheck: BigNumberish,
      gasLimit: BigNumberish,
      receiver: string,
      overrides?: CallOverrides
    ): Promise<
      [boolean, string, BigNumber] & {
        success: boolean;
        retBytes: string;
        gasUsed: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    getOnRamp(
      destChainSelector: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isOffRamp(
      sourceChainSelector: BigNumberish,
      offRamp: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    routeMessage(
      message: Client.Any2EVMMessageStruct,
      gasForCallExactCheck: BigNumberish,
      gasLimit: BigNumberish,
      receiver: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getOnRamp(
      destChainSelector: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isOffRamp(
      sourceChainSelector: BigNumberish,
      offRamp: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    routeMessage(
      message: Client.Any2EVMMessageStruct,
      gasForCallExactCheck: BigNumberish,
      gasLimit: BigNumberish,
      receiver: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
