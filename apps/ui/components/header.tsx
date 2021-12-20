import React from "react"
import { Box, Button, Flex, Heading, IconButton, LinkOverlay, Spacer, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"
import NextLink from "next/link"

function Header() {
    const { toggleColorMode: toggleMode } = useColorMode()
    const text = useColorModeValue("dark", "light")
    const SwitchIcon = useColorModeValue(FaMoon, FaSun)

    return (
        <Flex p="4">
            <Box p="2">
                <NextLink href="/">
                    <Heading size="md">grog.finance</Heading>
                </NextLink>
            </Box>

            <Spacer />
            <Box>
                <NextLink href="/app" passHref>
                    <Button colorScheme="teal" variant="ghost">App</Button>
                </NextLink>

                <NextLink href="/user/profile" passHref>
                    <Button colorScheme="teal" variant="ghost">Profile</Button>
                </NextLink>

                <NextLink href="/community" passHref>
                    <Button colorScheme="teal" variant="ghost">Community</Button>
                </NextLink>
            </Box>

            <Box mr="4">
                <IconButton
                    size="md"
                    fontSize="lg"
                    aria-label={`Switch to ${text} mode`}
                    variant="ghost"
                    color="current"
                    ml={{ base: "0", md: "3" }}
                    mr="4"
                    onClick={toggleMode}
                    icon={<SwitchIcon />}
                />
                <Button colorScheme="teal">Connect Wallet</Button>
            </Box>
        </Flex>
    )
}

export default Header