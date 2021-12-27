# Grog

This project was generated using [Nx](https://nx.dev).

## UI Local Development

In order to test the react front end all you need to do is run the `npm run start` command. This will call `nx server` and spin up a local web development server at http://localhost:4200.

### Ethereum Network Setup

There are a few options you have when it comes to testing Ethereum functionality locally. All instructions assume you have a test wallet set up in Metamask.

#### Rinkeby

The easiest approach is to connect to the Rinkeby network and the contracts deployed there on testnet. Simply open Metamask and select the Rinkeby Network under the **Network** dropdown.

#### Local Ethereum Network

This project leverages Hardhat for contract testing and debugging contracts locally. Hardhat provides us with the [Hardhat Network](https://hardhat.org/hardhat-network/)out of the box, which allows us to run an Ethereum network locally in order to test contract changes. This also allows us to test client interactions locally.

Just run command `npx hardhat node` to spin up your own Ethereum network on **localhost:8545**.
