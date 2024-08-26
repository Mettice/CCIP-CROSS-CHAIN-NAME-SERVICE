// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@chainlink/contracts-ccip/src/v0.8/ccip/interfaces/IRouterClient.sol";
import "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";

contract MockRouter is IRouterClient {
    function ccipSend(uint64 destinationChainSelector, Client.EVM2AnyMessage memory message) external payable override returns (bytes32) {
        // Mock implementation: just return a dummy messageId
        return keccak256(abi.encodePacked(destinationChainSelector, message.receiver, message.data));
    }

    function getFee(uint64, Client.EVM2AnyMessage memory) external pure override returns (uint256) {
        // Mock implementation: return a fixed fee
        return 0.01 ether;
    }

    function isChainSupported(uint64) external pure override returns (bool) {
        // Mock implementation: always return true
        return true;
    }

    function getSupportedTokens(uint64) external pure override returns (address[] memory) {
        // Mock implementation: return an empty array
        return new address[](0);
    }
}