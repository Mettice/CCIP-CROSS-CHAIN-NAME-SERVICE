const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CCIP Cross Chain Name Service", function () {
    let simulator, register, receiver, lookup;
    let sourceChainSelector = "16015286601757825753"; // Ethereum Sepolia
    let destChainSelector = "3478487238524512106"; // Arbitrum Sepolia

    before(async function () {
        const CCIPLocalSimulator = await ethers.getContractFactory("CCIPLocalSimulator");
        simulator = await CCIPLocalSimulator.deploy();
        await simulator.deployed();

        const [chainSelector, router] = await simulator.configuration();

        const CrossChainNameServiceLookup = await ethers.getContractFactory("CrossChainNameServiceLookup");
        lookup = await CrossChainNameServiceLookup.deploy();
        await lookup.deployed();

        const CrossChainNameServiceRegister = await ethers.getContractFactory("CrossChainNameServiceRegister");
        register = await CrossChainNameServiceRegister.deploy(router, lookup.address);
        await register.deployed();

        const CrossChainNameServiceReceiver = await ethers.getContractFactory("CrossChainNameServiceReceiver");
        receiver = await CrossChainNameServiceReceiver.deploy(router, lookup.address, sourceChainSelector);
        await receiver.deployed();

        await register.enableChain(destChainSelector, receiver.address, 100000);
        await lookup.setCrossChainNameServiceAddress(register.address);
        await lookup.setCrossChainNameServiceAddress(receiver.address);
    });

    it("should register and lookup a name", async function () {
        const name = "alice.ccns";
        const [alice] = await ethers.getSigners();

        await register.register(name);

        const result = await lookup.lookup(name);
        expect(result).to.equal(alice.address);
    });
});
