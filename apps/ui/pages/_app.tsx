import type { AppProps } from 'next/app'
import { useWeb3React, Web3ReactProvider } from '@web3-react/core';
import {ethers} from 'ethers';
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import Layout from '../components/layout'
import './styles.css';
import { network } from '../connectors/connectors';
import { Web3Provider } from '@ethersproject/providers'

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}

const theme = extendTheme({ colors })

function getLibrary(provider) {
  console.log(provider)
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}

function App({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </Web3ReactProvider>
  );
}

export default App;
