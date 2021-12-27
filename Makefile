local-network:
	npx hardhat node
	npx hardhat run scripts/deploy.ts --network localhost