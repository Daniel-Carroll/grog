import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { useWeb3React } from '@web3-react/core';
import React from 'react';
import { injected } from '../../connectors/connectors';
import { Web3Provider } from '@ethersproject/providers';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Balance from './balance';
import { shortenAddress } from '../../functions/format';

function ConnectButton() {
  const context = useWeb3React<Web3Provider>();
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error,
  } = context;
  return (
    <>
      {!active && (
        <Button
          colorScheme="teal"
          onClick={() => {
            activate(injected);
          }}
        >
          Connect Wallet
        </Button>
      )}

      {active && (
        <>
          <Menu>
            <Box as="button" pl={2} borderWidth="1px" borderRadius="md">
              <Balance></Balance>
              <MenuButton
                px={4}
                py={2}
                ml={2}
                transition="all 0.2s"
                borderLeftRadius="none"
                _hover={{ bg: 'gray.400' }}
                _expanded={{ bg: 'blue.400' }}
                _focus={{ boxShadow: 'outline' }}
                as={Button}
                width="200px"
                rightIcon={<ChevronDownIcon />}
              >
                <Text>{shortenAddress(account)}</Text>
              </MenuButton>
            </Box>
            <MenuList>
              <MenuItem
                onClick={() => {
                  deactivate();
                }}
              >
                Disconnect
              </MenuItem>
            </MenuList>
          </Menu>
        </>
      )}
    </>
  );
}

export default ConnectButton;
