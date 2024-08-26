import { expect } from "chai";
import { ethers } from "hardhat";
import { Contract, Signer } from "ethers";

describe("CrossChainNameService", function () {
  let lookup: Contract;
  let register: Contract;
  let receiver: Contract;
  let mockRouter: Contract;
  let owner: Signer;
  let alice: Signer;

  const sourceChainSelector = "16015286601757825753"; // Sepolia
  const destinationChainSelector = "14767482510784806043"; // Fuji

  before(async function () {
    [owner, alice] = await ethers.getSigners();

    console.log("Deploying MockRouter...");
    const MockRouter = await ethers.getContractFactory("MockRouter");
    mockRouter = await MockRouter.deploy();
    const mockRouterAddress = await mockRouter.getAddress();
    console.log("MockRouter deployed at:", mockRouterAddress);

    console.log("Deploying CrossChainNameServiceLookup...");
    const CrossChainNameServiceLookup = await ethers.getContractFactory("CrossChainNameServiceLookup");
    lookup = await CrossChainNameServiceLookup.deploy();
    const lookupAddress = await lookup.getAddress();
    console.log("CrossChainNameServiceLookup deployed at:", lookupAddress);

    console.log("Deploying CrossChainNameServiceRegister...");
    const CrossChainNameServiceRegister = await ethers.getContractFactory("contracts/CrossChainNameServiceRegister.sol:CrossChainNameServiceRegister");
    register = await CrossChainNameServiceRegister.deploy(mockRouterAddress, lookupAddress);
    const registerAddress = await register.getAddress();
    console.log("CrossChainNameServiceRegister deployed at:", registerAddress);

    console.log("Deploying CrossChainNameServiceReceiver...");
    const CrossChainNameServiceReceiver = await ethers.getContractFactory("contracts/CrossChainNameServiceReceiver.sol:CrossChainNameServiceRegister");
    receiver = await CrossChainNameServiceReceiver.deploy(mockRouterAddress, lookupAddress);
    const receiverAddress = await receiver.getAddress();
    console.log("CrossChainNameServiceReceiver deployed at:", receiverAddress);

    console.log("Enabling chains...");
    await register.enableChain(destinationChainSelector, receiverAddress, 200000);
    await receiver.enableChain(sourceChainSelector, registerAddress, 200000);

    console.log("Setting CrossChainNameService addresses...");
    await lookup.setCrossChainNameServiceAddress(registerAddress);

    // Fund the register contract with some ETH
    await owner.sendTransaction({
      to: registerAddress,
      value: ethers.parseEther("1.0")
    });
  });

  it("should register a name and lookup the address", async function () {
    const name = "alice.ccns";

    console.log("Registering name:", name);
    try {
      const tx = await register.connect(alice).register(name);
      await tx.wait();
      console.log("Registration transaction hash:", tx.hash);
    } catch (error) {
      console.error("Error during registration:", error);
      throw error;
    }

    console.log("Looking up address for name:", name);
    const lookedUpAddress = await lookup.lookup(name);
    console.log("Looked up address:", lookedUpAddress);

    const aliceAddress = await alice.getAddress();
    console.log("Alice's address:", aliceAddress);

    expect(lookedUpAddress).to.equal(aliceAddress);
  });
});