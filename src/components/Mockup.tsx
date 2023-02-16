import { Center,Flex,Box,Text } from '@chakra-ui/react'
import Link from 'next/link';
import React from 'react'
interface mockupProps{
    img : string;
    url : string;
}

const Mockup = (props : mockupProps) => {
    return (
        <Center gap={"40px"} marginBottom={"160px"}>
            <Flex flexFlow={"column"} gap={"16px"}>
                <Flex flexFlow={"column"}>
                    <Text fontSize={"14px"} fontWeight={"medium"}>祭りをもっとお手軽に</Text>
                    <Text fontSize={"48px"} fontWeight={"bold"}>まつりる</Text>
                </Flex>
                <Flex gap={"8px"}>
                    <Center suppressHydrationWarning w={"100%"} as='button' borderRadius={"8px"} border={"1px solid #8D0C18"} padding={"8px 0"} ><Text fontSize={"16px"} fontWeight={"bold"} color={"#8D0C18"}>デザイン</Text></Center>
                    <Center suppressHydrationWarning w={"100%"} as='button' borderRadius={"8px"} border={"1px solid #8D0C18"} padding={"8px 0"} ><Text fontSize={"16px"} fontWeight={"bold"} color={"#8D0C18"}>2年生後期</Text></Center>
                </Flex>
                <Text fontSize={"16px"} w={"400px"}>祭りを開いている自治体と出店を開きたい人をマッチングさせるサービスです。「お手軽」を大切にしました。</Text>
                {/* <Text fontSize={"32px"} fontWeight={"bold"}>うみとこころとぼく</Text> */}
                <Center suppressHydrationWarning margin={"32px 0"} w={"100%"} as='button' borderRadius={"8px"} bgColor={"#8D0C18"} padding={"8px 0"}><Text fontWeight={"bold"} color={"#fefefe"}>作品を見る</Text></Center>
                {/* <Flex gap={"16px"}>
                    <Center suppressHydrationWarning w={"100%"} as='button' borderRadius={"8px"} bgColor={"#8D0C18"} padding={"8px 0"}><Text fontWeight={"bold"} color={"#fefefe"}>github</Text></Center>
                    <Center suppressHydrationWarning w={"100%"} as='button' borderRadius={"8px"} bgColor={"#8D0C18"} padding={"8px 0"}><Text fontWeight={"bold"} color={"#fefefe"}>作品を見る</Text></Center>
                </Flex> */}
            </Flex>
            <Flex position="relative" top={"0"}>
                <Box suppressHydrationWarning as='img' src={props.img} w={"648px"} h={"auto"} right={"24px"} top={"19px"} position={"absolute"}></Box>
                <Box as='img' src='./img/mac-moc.png' w={"700px"} h={"auto"} zIndex={"10"}></Box>
            </Flex>
            <Link suppressHydrationWarning href={props.url} target={"_blank"} passHref>
            </Link>
        </Center>
    )
}

export default Mockup