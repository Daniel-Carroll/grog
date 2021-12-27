import { Button } from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import React from "react";
import { injected, network } from "../connectors/connectors";
import { Web3Provider } from '@ethersproject/providers'

function ConnectButton() {
    const context = useWeb3React<Web3Provider>()
    const { connector, library, chainId, account, activate, deactivate, active, error } = context
 return (
    <>
        {!active &&
            <Button colorScheme="teal" onClick={() => {
                activate(injected)
            }}>Connect Wallet</Button>
        }

        {active && 
            <Button colorScheme="teal" onClick={() => {
                deactivate()
            }}>{account}</Button>
        }

    </>
 )
}

export default ConnectButton;