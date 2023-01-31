import React, { NewLifecycle, useState,useEffect } from 'react'
import { Box, Center, Flex, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import worksArray from './api/works'
import Header from '@/components/Header'
import Link from 'next/link'
import WorksSlide from '@/components/WorksSlide'

const array = worksArray.ArrayList
const arrayLength = worksArray.ArrayList.length
// ランダム処理
const randumarraybefore = []
const randumarrayafter = []
for (let ind = 0; ind < arrayLength; ind++) {
    randumarraybefore.push(ind)
}
for (let index = 0; index < 4; index++) {
    // var num = Math.floor( Math.random() * arrayLength )
    randumarrayafter[index] = randumarraybefore.splice(Math.floor( Math.random() * randumarraybefore.length ),1)[0];
}
// 今回見せる作品4個
// console.log(randumarrayafter);
const randamArray : any = []
randumarrayafter.map((ev,iv) => {
    randamArray[iv] = array[ev]
})

console.log(randamArray);

const App : NextPage = () => {


    const [slide,setSlide] = useState(340 + 680 * (randamArray.length - 4))
    const [slidecircle,setSlidecircle] = useState(1)
    // const [slider,setSlider] = useState(3)

    const left = () => {
        if (slidecircle == 0) {
            console.log(slide);
            // console.log(slidecircle);
            
            setSlide(-1020)
            setSlidecircle(3)
        }else {
            setSlide(slide + 680)
            setSlidecircle(slidecircle-1)
        }
    }
    const right = () => {
        if (slidecircle == 3) {
            setSlide(1020)
            setSlidecircle(0)
        }else{
            setSlide(slide - 680)
            setSlidecircle(slidecircle+1)
        }
    }

    // const [scrollY,setScrollY] = useState(0)
    const [concepttrans,setConcepttrans] = useState("-1000px")

    // const scrollAction = () => {
    //     setScrollY(window.scrollY)
    // }

    const ifscroll = () => {
        
        // if (window.scrollY >= 500) {
        //     console.log("発火");
        //     setConcepttrans("-1px");
        // }else if(window.scrollY =< 1000){
        //     setConcepttrans("-1000px")
        // }

        window.scrollY >= 400 && window.scrollY < 1300 
        ? setConcepttrans("-1px")
        : setConcepttrans("-1000px")
    }


    useEffect(()=> {
        window.addEventListener('scroll', ifscroll )
        return () => window.removeEventListener('scroll', ifscroll)
    },[])
    


    // console.log(scrollY);
    

    return (
        <Box overflow={"hidden"}>
            <Header />
            <Flex id='firstview' w="100vw" h="100vh" alignItems={"center"} justifyContent={"center"} flexFlow={"column"}>
                <Text as={"h1"} fontWeight="bold" fontSize={"40px"}>KANSHU SHIMOKAWA</Text>
            </Flex>
            <Center id='concept' w={"100vw"} h={"80vh"} gap={"56px"} flexFlow={"column"} position="relative">
                <Text fontSize={"30px"} fontWeight="900" textAlign={"center"}>人が行き交う<br/>「大都市」みたいな人に</Text>
                <Text fontSize={"16px"} textAlign={"center"} lineHeight={"40px"}>
                    僕はすごく人に恵まれて生きているなと感じ生きてきました<br />
                    時にはそれが劣等感に感じることもありましたが<br />
                    今はそれを自分の強みと目標に<br />
                    色んな人と人を繋げれるような人になるために頑張っています。
                </Text>
                <Box position={"absolute"} top={"0"} left={concepttrans} as='img' src='./img/concept-img.svg' h={"80vh"} transition={"0.5s"}/>
                <Box position={"absolute"} top={"0"} right={concepttrans} transform={"rotate(180deg)"} as='img' src='./img/concept-img.svg' h={"80vh"} transition={"0.5s"}/>
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
                    <Link href={`/profile`} passHref >
                        <Center w={"240px"} h={"48px"} bgColor={"#000"}><Text color={"#fefefe"} fontWeight={"900"}>プロフィールをもっと見る</Text></Center>
                    </Link>
                </Flex>
            </Center>
            <Center id='works' w={"100vw"} h={"80vh"} gap={"48px"} flexFlow={"column"} position="relative">
                <Text as={"h3"} fontSize={"46px"} fontWeight={"900"} >WORKS</Text>
                <Box position={"relative"} transform={"trans"}>
                    <Flex gap={"80px"} transform={`translateX(${slide}px)`} transition={"0.75s ease"}>
                    {randamArray.map((e : any,i : any) => {
                        return(
                            <WorksSlide key={i} name={e.name} type={e.type} sch={e.sch} nop={e.nop} main={e.main} time={e.time} text={e.text} imageColor={e.imageColor} img={e.img} url={e.url} />
                            )
                        })}
                    </Flex>
                    <Center id='leftbtn' width={"40px"} height={"40px"} bgColor={"#9393937e"} borderRadius={"999px"} position={"absolute"} top={`${200-20}px`} left={`${620+340}px`} zIndex={"10"} onClick={left}><Box as='img' src='./img/Arrow.svg' /></Center>
                    <Center id='rightbtn' width={"40px"} height={"40px"} bgColor={"#9393937e"} borderRadius={"999px"} position={"absolute"} top={`${200-20}px`} left={`${620 + 680 +340}px`} zIndex={"10"} onClick={right}><Box as='img' src='./img/Arrow.svg' transform={"rotateY(180deg)"} /></Center>
                </Box>
                <Flex gap={"8px"}>
                    {randamArray.map((evn:any,inde:number) => {
                        if(inde == slidecircle){
                            return(
                                <Box key={inde} w={"8px"} h={"8px"} borderRadius={"99px"} bgColor={"#0A0A0A"}></Box>
                            )
                        }else return(
                            <Box key={inde} w={"8px"} h={"8px"} borderRadius={"99px"} bgColor={"#D9D9D9"}></Box>
                        )
                    })}
                </Flex>
                <Link href={`/Works`} passHref >
                    <Center w={"240px"} h={"48px"} bgColor={"#000"}><Text color={"#fefefe"} fontWeight={"900"}>作品をもっとみる</Text></Center>
                </Link>
            </Center>
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

export default App