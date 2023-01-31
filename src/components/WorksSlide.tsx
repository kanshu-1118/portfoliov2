import worksArray from '@/pages/api/works';
import { Box, Center, Flex, Text } from '@chakra-ui/react'
import { NextComponentType } from 'next';
import Link from 'next/link';
import NextLink from 'next/link';
import { transform } from 'typescript';

interface slideprops{
    name : string;
    type : string;
    // langage : string[];
    nop : string;
    time : number;
    sch : string;
    main : string;
    img : string;
    text : string;
    imageColor : string;
    url : string;
}

const WorksSlide = ( props : slideprops ) => {
    return (
        <Flex w={"600px"} h={"400px"} borderRadius={"8px"} bg={`linear-gradient(#efefef, #FEFEFE)`} boxShadow={" 2px 2px 2px rgba(0,0,0,0.25)"} overflow={"hidden"} position={"relative"}>
            <Flex alignItems={"center"} w={"300px"} paddingLeft={"32px"}>
                <Flex flexFlow={"column"} gap={"32px"}>
                    <Text suppressHydrationWarning fontWeight={"900"} fontSize={"22px"}>{props.name}</Text>
                    <Flex flexWrap={"wrap"} gap={"8px"} >
                        <Flex gap={"8px"}>
                            <Center border={"1px solid #000"} borderRadius={"8px"} padding={"4px 16px"}><Text suppressHydrationWarning fontSize={"12px"}>{props.type}</Text></Center>
                            <Center border={"1px solid #000"} borderRadius={"8px"} padding={"4px 16px"}><Text suppressHydrationWarning fontSize={"12px"}>{props.sch}</Text></Center>
                        </Flex>
                        <Flex gap={"8px"}>
                            <Center border={"1px solid #000"} borderRadius={"8px"} padding={"4px 16px"}><Text suppressHydrationWarning fontSize={"12px"}>{props.nop}</Text></Center>
                            <Center border={"1px solid #000"} borderRadius={"8px"} padding={"4px 16px"}><Text suppressHydrationWarning fontSize={"12px"}>{props.main}</Text></Center>
                            <Center border={"1px solid #000"} borderRadius={"8px"} padding={"4px 16px"}><Text suppressHydrationWarning fontSize={"12px"}>{props.time}時間</Text></Center>
                        </Flex>
                        {/* <Flex>
                            <Text fontSize={"14px"}>【 html,css,js 】</Text>
                        </Flex> */}
                    </Flex>
                    <Text suppressHydrationWarning fontSize={"16px"}>
                        {props.text}
                    </Text>
                    <Link suppressHydrationWarning href={props.url} target={"_blank"} passHref>
                        <Center suppressHydrationWarning w={"100%"} as='button' borderRadius={"8px"} bgColor={props.imageColor} padding={"8px 0"}><Text fontWeight={"bold"} color={"#fefefe"}>作品を見る</Text></Center>
                    </Link>
                </Flex>
            </Flex>
            <Flex position="absolute" top={"0"} right={"-220px"}>
                <Box suppressHydrationWarning as='img' src={props.img} w={"462px"} h={"264px"} right={"24px"} top={"19px"} position={"absolute"}></Box>
                <Box as='img' src='./img/mac-moc.png' w={"514px"} h={"400px"} zIndex={"10"}></Box>
            </Flex>
        </Flex>
    )
}

WorksSlide.defaultProps={
    imageColor:"#efefef",
    url:"https://github.com/kanshu-1118",
}

export default WorksSlide