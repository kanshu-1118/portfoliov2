import React, { NewLifecycle } from 'react'
import { Box, Center, Flex, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import worksArray from './api/works'
import Header from '@/components/Header'
import Link from 'next/link'
import WorksSlide from '@/components/WorksSlide'

const App : NextPage = () => {


    const array = worksArray.ArrayList

    return (
        <>
            <Header />
            <Flex id='firstview' w="100vw" h="100vh" alignItems={"center"} justifyContent={"center"} flexFlow={"column"}>
                <Text as={"h1"}>しもかわかんしゅうのポートフォリオ</Text>
            </Flex>
            <Center id='concept' w={"100vw"} h={"80vh"} gap={"56px"} flexFlow={"column"} border="1px solid #000"  position="relative">
                <Text fontSize={"30px"} fontWeight="900" textAlign={"center"}>人が行き交う<br/>「大都市」みたいな人に</Text>
                <Text fontSize={"16px"} textAlign={"center"}>
                    僕はすごく人に恵まれて生きているなと感じ生きてきました<br />
                    時にはそれが劣等感に感じることもありましたが<br />
                    今はそれを自分の強みと目標に<br />
                    色んな人と人を繋げれるような人になるために頑張っています。
                </Text>
                <Box position={"absolute"} top={"0"} left={"-1px"} as='img' src='./img/concept-img.svg' h={"80vh"}/>
                <Box position={"absolute"} top={"0"} right={"-1px"} transform={"rotate(180deg)"} as='img' src='./img/concept-img.svg' h={"80vh"}/>
            </Center>
            <Center id='profile' w={"100vw"} h={"80vh"} flexFlow={"column"} position="relative">
                <Flex w={"762px"} h={"322px"} gap={"32px"} alignItems={"center"} justifyContent={"center"} flexFlow={"column"} boxShadow={"2px 2px 2px 0px rgba(0,0,0,0.25)"}>
                    <Flex gap={"80px"}>
                        <Flex flexFlow={"column"} alignItems={"center"} gap={"8px"}>
                            <Text as={"h2"} fontSize={"30px"} fontWeight={"900"}>下河寛宗</Text>
                            <Box as='img' src='./img/kanshu.svg'></Box>
                        </Flex>
                        <Flex flexFlow={"column"} gap={"8px"}>
                            <Text>
                                ECCコンピュータ専門学校<br />
                                マルチメディア研究学科WEBデザインコース
                            </Text>
                            <Text>2024年卒業予定</Text>
                            <Text>
                                フロントエンドやデザインを主に学んでいます。<br />
                                将来ディレクターになりたい想いから<br />
                                積極的にチームのリーダーに徹しています。
                            </Text>
                            <Text>2022年開催若年者ものづくり大会 銅賞受賞</Text>
                        </Flex>
                    </Flex>
                    <Link href={`/Profile`} passHref >
                        <Center w={"240px"} h={"48px"} bgColor={"#000"}><Text color={"#fefefe"} fontWeight={"900"}>プロフィールをもっと見る</Text></Center>
                    </Link>
                </Flex>
            </Center>
            <Center id='works' w={"100vw"} h={"80vh"} gap={"48px"} flexFlow={"column"} position="relative">
                <Text as={"h3"} fontSize={"46px"} fontWeight={"900"} >WORKS</Text>
                <Flex>
                    <WorksSlide />
                </Flex>
                <Link href={`/Works`} passHref >
                    <Center w={"240px"} h={"48px"} bgColor={"#000"}><Text color={"#fefefe"} fontWeight={"900"}>作品をもっとみる</Text></Center>
                </Link>
            </Center>
        </>
    )
}

export default App