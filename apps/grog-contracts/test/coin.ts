import { expect } from "chai";
import { ethers, network } from "hardhat";

describe("GrogToken", function () {
  it("Should set total supply to 1000", async function () {
    const GrogToken = await ethers.getContractFactory("GrogToken");
    const token = await GrogToken.deploy(1000);
    await token.deployed();

    console.log(network.config.chainId);
    expect(
      await token.totalSupply()
    ).to.equal(1000);
  });
});
