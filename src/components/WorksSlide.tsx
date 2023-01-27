import worksArray from '@/pages/api/works';
import { Box, Center, Flex, Text } from '@chakra-ui/react'
import { NextComponentType } from 'next';
import NextLink from 'next/link';

const WorksSlide : NextComponentType = () => {
    return (
        <Flex w={"600px"} h={"400px"} borderRadius={"8px"} bg={"linear-gradient(#EFEFEF, #FEFEFE)"} boxShadow={" 2px 2px 2px rgba(0,0,0,0.25)"} overflow={"hidden"} position={"relative"}>
            <Flex alignItems={"center"} w={"300px"} paddingLeft={"32px"}>
                <Flex flexFlow={"column"} gap={"32px"}>
                    <Text fontWeight={"900"} fontSize={"22px"}>うみとこころとぼく</Text>
                    <Flex>
                        <Center border={"1px solid #000"} borderRadius={"8px"} padding={"4px 16px"}><Text fontSize={"12px"}>1年後期</Text></Center>
                    </Flex>
                    <Text fontSize={"16px"}>
                        Webを学んで初めて企画から実装まで1人で行った制作物です。
                        宇宙をコンセプトにしたカフェのWebサイトです。
                    </Text>
                </Flex>
            </Flex>
            <Flex position="absolute" top={"0"} right={"-220px"}>
                <Box as='img' src='./img/umito.jpg' w={"462px"} h={"264px"} right={"24px"} top={"19px"} position={"absolute"}></Box>
                <Box as='img' src='./img/mac-moc.png' w={"514px"} h={"400px"} zIndex={"10"}></Box>
            </Flex>
        </Flex>
    )
}

export default WorksSlide