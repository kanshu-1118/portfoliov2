import Header from "@/components/Header"
import { Box, Flex , Text ,Center} from "@chakra-ui/react"
import Link from "next/link"

const Profile = () => {
    return (
        <Box>
            <Header />
            <Flex paddingTop={106} flexFlow={"column"} w={"100vw"} alignItems="center" gap={"40px"}>
                <Flex gap={"16px"} alignItems="center">
                    <Flex>
                        <Box borderRadius={"16px"} bgImage={"./img/profile.jpg"} w={"300px"} h={"300px"} bgSize={"cover"} bgPos={"right"}></Box>
                    </Flex>
                    <Flex flexFlow={"column"} gap={"8px"}>
                        <Text fontSize={"40px"} fontWeight={"bold"}>下河寛宗</Text>
                        <Text fontWeight={"bold"} fontSize="16px">
                            ECCコンピュータ専門学校<br />
                            マルチメディア研究学科WEBデザインコース
                        </Text>
                        <Text fontSize={"14px"}>2024年卒業予定</Text>
                        <Text fontWeight={"semibold"}>デザインエンジニア志望</Text>
                        <Flex gap={"8px"}>
                            <Text fontWeight={"bold"}>使用言語</Text>
                            <Text>【 JavaScript,TypeScript,React.js,Next.js 】</Text>
                        </Flex>
                        <Flex gap={"8px"}>
                            <Text fontWeight={"bold"}>使用ツール</Text>
                            <Text>【 Illustlater,Photoshop,Premierepro,AfterEffect,Xd,Figma, 】</Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Center boxShadow={"2px 2px 2px 0px rgba(0,0,0,0.25)"} borderRadius={"8px"} padding={"120px 240px"}>
                    <Text lineHeight={"40px"} fontWeight={"bold"}>
                        フロントエンドやデザインを主に学んでいます。<br />
                        将来ディレクターになりたい想いから<br />
                        積極的にチームのリーダーに徹しています。
                    </Text>
                </Center>
                <Text fontSize={"32px"} fontWeight={"bold"}>表彰歴</Text>
                <Flex gap={"8px"} padding={"24px 56px"} boxShadow={"2px 2px 2px 0px rgba(0,0,0,0.25)"}>
                    <Text fontWeight={"bold"}>2022年開催若年者ものづくり大会 銅賞受賞</Text>
                </Flex>
            </Flex>
            <Center id='CONTACT' w={"100vw"} h={"80vh"} gap={"48px"} flexFlow={"column"} position="relative">
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

export default Profile