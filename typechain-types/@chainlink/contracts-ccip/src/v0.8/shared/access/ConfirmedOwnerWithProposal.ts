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
} from "../../../../../../common";

export interface ConfirmedOwnerWithProposalInterface extends utils.Interface {
  functions: {
    "acceptOwnership()": FunctionFragment;
    "owner()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "acceptOwnership" | "owner" | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferRequested(address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferRequested"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
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

export interface ConfirmedOwnerWithProposal extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ConfirmedOwnerWithProposalInterface;

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

    owner(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  acceptOwnership(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    to: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

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
  };

  estimateGas: {
    acceptOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
