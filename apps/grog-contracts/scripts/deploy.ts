// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethernal, ethers } from 'hardhat';

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const GrogToken = await ethers.getContractFactory('GrogToken');
  const token = await GrogToken.deploy(1000);
  await token.deployed();

  await ethernal.push({
    name: 'GrogToken',
    address: token.address,
  });

  const printMoneyTx = await token.printMoney(
    '0x59e5219bd715fc1bb9af863fcc7329d6c2fbd9ab',
    1000
  );

  await printMoneyTx.wait();
  console.log('Token deployed to:', token.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
