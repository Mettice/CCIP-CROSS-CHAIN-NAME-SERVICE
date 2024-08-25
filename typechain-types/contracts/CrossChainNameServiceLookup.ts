/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface CrossChainNameServiceLookupInterface extends utils.Interface {
  functions: {
    "acceptOwnership()": FunctionFragment;
    "lookup(string)": FunctionFragment;
    "owner()": FunctionFragment;
    "register(string,address)": FunctionFragment;
    "setCrossChainNameServiceAddress(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "acceptOwnership"
      | "lookup"
      | "owner"
      | "register"
      | "setCrossChainNameServiceAddress"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "lookup", values: [string]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "register",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setCrossChainNameServiceAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lookup", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setCrossChainNameServiceAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferRequested(address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Registered(string,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferRequested"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Registered"): EventFragment;
}

export interface OwnershipTransferRequestedEventObject {
  from: string;
  to: string;
}
export type OwnershipTransferRequestedEvent = TypedEvent<
  [string, string],
  OwnershipTransferRequestedEventObject
>;

export type OwnershipTransferRequestedEventFilter =
  TypedEventFilter<OwnershipTransferRequestedEvent>;

export interface OwnershipTransferredEventObject {
  from: string;
  to: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface RegisteredEventObject {
  _name: string;
  _address: string;
}
export type RegisteredEvent = TypedEvent<
  [string, string],
  RegisteredEventObject
>;

export type RegisteredEventFilter = TypedEventFilter<RegisteredEvent>;

export interface CrossChainNameServiceLookup extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CrossChainNameServiceLookupInterface;

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
    acceptOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    lookup(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    register(
      _name: string,
      _address: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setCrossChainNameServiceAddress(
      crossChainNameService: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    transferOwnership(
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  acceptOwnership(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  lookup(arg0: string, overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  register(
    _name: string,
    _address: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setCrossChainNameServiceAddress(
    crossChainNameService: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  transferOwnership(
    to: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    lookup(arg0: string, overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    register(
      _name: string,
      _address: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setCrossChainNameServiceAddress(
      crossChainNameService: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(to: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "OwnershipTransferRequested(address,address)"(
      from?: string | null,
      to?: string | null
    ): OwnershipTransferRequestedEventFilter;
    OwnershipTransferRequested(
      from?: string | null,
      to?: string | null
    ): OwnershipTransferRequestedEventFilter;

    "OwnershipTransferred(address,address)"(
      from?: string | null,
      to?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      from?: string | null,
      to?: string | null
    ): OwnershipTransferredEventFilter;

    "Registered(string,address)"(
      _name?: string | null,
      _address?: string | null
    ): RegisteredEventFilter;
    Registered(
      _name?: string | null,
      _address?: string | null
    ): RegisteredEventFilter;
  };

  estimateGas: {
    acceptOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    lookup(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    register(
      _name: string,
      _address: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setCrossChainNameServiceAddress(
      crossChainNameService: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    transferOwnership(
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    lookup(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    register(
      _name: string,
      _address: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setCrossChainNameServiceAddress(
      crossChainNameService: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
