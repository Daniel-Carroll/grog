import { Button, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import React from "react";
import { injected } from "../../connectors/connectors";
import { Web3Provider } from '@ethersproject/providers';
import { ChevronDownIcon } from '@chakra-ui/icons'
import Balance from "./balance";

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
                <>  
                    <Balance></Balance>
                    <Menu>
                        <MenuButton as={Button} width="200px" rightIcon={<ChevronDownIcon />}>
                            <Text isTruncated>{account}</Text>
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={() => {
                                deactivate()
                            }}>Disconnect</MenuItem>
                        </MenuList>
                    </Menu>
                </>
            }

        </>
    )
}

export default ConnectButton;