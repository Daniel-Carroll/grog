import { expect } from 'chai';
import { ethers, network } from 'hardhat';

describe('GrogToken', function () {
  it('Should set total supply to 1000', async function () {
    const GrogToken = await ethers.getContractFactory('GrogToken');
    const token = await GrogToken.deploy(1000);
    await token.deployed();

    expect(await token.totalSupply()).to.equal(1000);
  });
});
