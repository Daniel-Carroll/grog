import {NetworkConnector} from '@web3-react/network-connector';
import {InjectedConnector } from '@web3-react/injected-connector';

export const injected = new InjectedConnector({ supportedChainIds: [4, 31337] })

export const network = new NetworkConnector({
    urls: { 4: 'https://eth-rinkeby.alchemyapi.io/v2/SqfMOR0GCCR__IhZtYcVHA6QZoLIOofW', 31337: 'localhost:8545' },
    defaultChainId: 4
  })