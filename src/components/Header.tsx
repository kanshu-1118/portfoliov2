import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
    return (
        <Flex w="100vw" h={"66px"} justifyContent="end" boxShadow={"0px 0px 4px 0px rgba(0,0,0,0.25)"}>
            <Flex gap={"48px"} paddingRight={"64px"}>
                <Box as='p'><Text as={"a"} h={"100%"} lineHeight={"66px"} fontSize={"20px"}>TOP</Text></Box>
                <Box as='p'><Text as={"a"} lineHeight={"66px"} fontSize={"20px"}>WORKS</Text></Box>
                <Box as='p'><Text as={"a"} lineHeight={"66px"} fontSize={"20px"}>PROFILE</Text></Box>
                <Box as='p'><Text as={"a"} lineHeight={"66px"} fontSize={"20px"}>CONTACT</Text></Box>
            </Flex>
        </Flex>
    )
}

export default Header