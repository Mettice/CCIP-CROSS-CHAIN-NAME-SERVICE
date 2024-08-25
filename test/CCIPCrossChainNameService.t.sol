// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import {CCIPLocalSimulator} from "@chainlink/local/src/ccip/CCIPLocalSimulator.sol";
import {CrossChainNameServiceRegister} from "../contracts/CrossChainNameServiceRegister.sol";
import {CrossChainNameServiceReceiver} from "../contracts/CrossChainNameServiceReceiver.sol";
import {CrossChainNameServiceLookup} from "../contracts/CrossChainNameServiceLookup.sol";

contract CCIPCrossChainNameServiceTest is Test {
    CCIPLocalSimulator simulator;
    CrossChainNameServiceRegister register;
    CrossChainNameServiceReceiver receiver;
    CrossChainNameServiceLookup lookup;

    function setUp() public {
        // Create an instance of CCIPLocalSimulator.sol
        simulator = new CCIPLocalSimulator();

        // Call the configuration() function to get Router contract address
        (, address router,,,) = simulator.configuration();

        // Create instances of CrossChainNameServiceRegister.sol, CrossChainNameServiceReceiver.sol, and CrossChainNameServiceLookup.sol
        register = new CrossChainNameServiceRegister(router);
        receiver = new CrossChainNameServiceReceiver(router);
        lookup = new CrossChainNameServiceLookup();

        // Enable chain where needed
        register.enableChain();
        receiver.enableChain();

        // Set cross-chain name service addresses
        lookup.setCrossChainNameServiceAddress("source", address(register));
        lookup.setCrossChainNameServiceAddress("receiver", address(receiver));
    }

    function testRegisterAndLookup() public {
        // Register Alice's name
        string memory name = "alice.ccns";
        address alice = address(0x123);

        register.register(name, alice);

        // Lookup Alice's name
        address result = lookup.lookup(name);

        // Assert that the lookup returns Alice's address
        assertEq(result, alice);
    }
}
