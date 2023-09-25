import Header from "@/components/Header"
import { Box, Center, Flex, Text } from "@chakra-ui/react"
import WorksSlide from '@/components/WorksSlide'
import worksArray from './api/works'
import { NextPage } from "next"
import Link from "next/link"

const array = worksArray.ArrayList

const WorksAbout : NextPage = () => {
    return (
        <Box>
            <Header />
                
            <Center id='TRAING' w={"100vw"} h={"80vh"} gap={"48px"} flexFlow={"column"} position="relative">
                <Text as={"h3"} fontSize={"46px"} fontWeight={"900"} >CONTACT</Text>
                <Flex gap={"32px"}>
                    <Link href={"https://zenn.dev/kanshu"} target={"_blank"} passHref>
                        <Box as='img' src='./img/zenn.svg' width={"60px"}></Box>
                    </Link>
                    <Link href={"https://github.com/kanshu-1118"} target={"_blank"} passHref>
                        <Box as='img' src='./img/github.svg' width={"60px"}></Box>
                    </Link>
                    <Link href={"https://twitter.com/meeeeeeg_75"} target={"_blank"} passHref>
                        <Box as='img' src='./img/twitter.svg' width={"60px"}></Box>
                    </Link>
                </Flex>
                <Flex gap={"24px"} fontSize={"30px"} fontWeight={"bold"}>
                    <Text>Gmail</Text>
                    <Text>kanshu.1118.shimokawa@gmail.com</Text>
                </Flex>
            </Center>
        </Box>
    )
}

export default WorksAbout