import { Box, Flex, Text } from '@chakra-ui/react'
import { NextComponentType } from 'next';
import NextLink from 'next/link';

const Header : NextComponentType = () => {
    return (
        <Flex position={"fixed"} zIndex={"100"} bgColor="whiteAlpha.500" w="100vw" h={"66px"} justifyContent="end" boxShadow={"0px 0px 4px 0px rgba(0,0,0,0.25)"}>
            <Flex gap={"48px"} paddingRight={"64px"}>
                <NextLink href={`/`} passHref>
                    <Text as={"p"} h={"100%"} lineHeight={"66px"} fontSize={"20px"}>TOP</Text>
                </NextLink>
                <NextLink href={`/Works`} passHref>
                    <Text as={"p"} h={"100%"} lineHeight={"66px"} fontSize={"20px"}>WORKS</Text>
                </NextLink>
                <NextLink href={`/Profile`} passHref>
                    <Text as={"p"} h={"100%"} lineHeight={"66px"} fontSize={"20px"}>PROFILE</Text>
                </NextLink>
                {/* <NextLink href={`/Contact`} passHref>
                    <Text as={"p"} h={"100%"} lineHeight={"66px"} fontSize={"20px"}>CONTACT</Text>
                </NextLink> */}
            </Flex>
        </Flex>
    )
}

export default Header