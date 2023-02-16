import React, { NewLifecycle, useState,useEffect } from 'react'
import { Box, Center, Flex, Text,keyframes, usePrefersReducedMotion } from '@chakra-ui/react'
import { NextPage } from 'next'
import worksArray from './api/works'
import Header from '@/components/Header'
import Link from 'next/link'
import WorksSlide from '@/components/WorksSlide'
import Mockup from '@/components/Mockup'



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

    const prefersReducedMotion = usePrefersReducedMotion()

    const damy = () => {
        console.log("damy");
    }
    const [slide,setSlide] = useState(340 + 680 * (randamArray.length - 4))
    const [slidecircle,setSlidecircle] = useState(1)
    const [transform,setTransform] = useState("")
    const [opacity,setOpacity] = useState("0")

    


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

        window.scrollY >= 400 && window.scrollY < 1300 
        ? setConcepttrans("-1px")
        : setConcepttrans("-1000px")
    }



    let count = 0
    let opaCount = 0

    const wheelHandler = (e : any) => { 
        console.log(count); 
        
        if (e.deltaY > 70 && !(count == 5)) {
        window.removeEventListener("wheel", wheelHandler);
        if (opaCount == 0) {
            setOpacity("1")
        
        setTimeout(() => {
            if(opaCount == 0){
                setOpacity("0")
                console.log("opa");
            }
            opaCount = 1
            setTimeout(() => {
                opaCount = 0
            },1000)
        },1000);
        count++
        setTransform(`translateY(${0-count*100}vh)`)
        }
        
        if (count == 0) {
            setTimeout(() => {
                window.addEventListener("wheel", wheelHandler);
        },700);   
        }else{
        setTimeout(() => {
            window.addEventListener("wheel", wheelHandler);
        },700);
        }
        } else if (e.deltaY < -100 && !(count == 0)) {
        window.removeEventListener("wheel", wheelHandler);
        if (opaCount == 0) {
            setOpacity("1")
        
        setTimeout(() => {
            if(opaCount == 0){
                setOpacity("0")
                console.log("opa");
            }
            opaCount = 1
            setTimeout(() => {
                opaCount = 0
            },1000)
        },1000);
        count--
        setTransform(`translateY(${0-count*100}vh)`)
        }
        setTimeout(() => {
            window.addEventListener("wheel", wheelHandler);
        },700);
        }
    }
    
    useEffect(()=> {
        window.addEventListener('scroll', ifscroll )
        window.addEventListener("wheel", wheelHandler);
        return () => window.removeEventListener('scroll', ifscroll)
    },[])
    


    // console.log(scrollY);
    
    const move1 = keyframes`
    from { transform: translateX(100%); }
    to { transform: translateX(-100%); }
    `
    const move2 = keyframes`
    from { transform: translateX(0); }
    to { transform: translateX(-200%); }
    `
        
    

    const animation1 = prefersReducedMotion
        ? undefined
        : `${move1} 30s -15s infinite linear`
    const animation2 = prefersReducedMotion
        ? undefined
        : `${move2} 30s  infinite linear`
    const animation3 = prefersReducedMotion
        ? undefined
        : `${move1} 45s -20s infinite linear`
    const animation4 = prefersReducedMotion
        ? undefined
        : `${move2} 45s  infinite linear`
    const animation5 = prefersReducedMotion
        ? undefined
        : `${move1} 60s -30s infinite linear`
    const animation6 = prefersReducedMotion
        ? undefined
        : `${move2} 60s  infinite linear`


    return (
        <Box overflow={"hidden"} transform={transform} transition="0.01s 0.75s ease">
            <Box >
                <Box id='fog' bgColor={`White`} zIndex={"100"} transition={"1s ease"} position="absolute" top={"0"} opacity={opacity} w={"100vw"} h={`100%`} ></Box>
                <Header />
                <Flex id='firstview' w="100vw" h="100vh" bg={"linear-gradient(#0025A8,#0018EF,#8F00FF)"} alignItems={"center"} justifyContent={"center"} flexFlow={"column"} position={"relative"}>
                    <Text as={"h1"} fontWeight="bold" color={"whiteAlpha.800"} fontSize={"40px"} zIndex={"99"}>KANSHU SHIMOKAWA</Text>
                    <Flex bottom={"-1px"} w={"100vw"} height="100vh" overflow="hidden" position={"absolute"} alignItems="end" zIndex={"10"} >
                        <Box animation={animation1} as='img' transition={"1s ease"} src='./img/fvimg1.svg' />
                        <Box animation={animation2} as='img' transition={"1s ease"} src='./img/fvimg1.svg' />
                    </Flex>
                    <Flex  w={"100vw"} height="100vh" overflow="hidden" position={"absolute"} alignItems="end" zIndex={"9"} >
                        <Box animation={animation3} as='img' transition={"1s ease"} src='./img/fvimg2.svg' />
                        <Box animation={animation4} as='img' transition={"1s ease"} src='./img/fvimg2.svg' />
                    </Flex>
                    <Flex  w={"100vw"} height="100vh" overflow="hidden" position={"absolute"} alignItems="end" zIndex={"8"} >
                        <Box animation={animation5} as='img' transition={"1s ease"} src='./img/fvimg3.svg' />
                        <Box animation={animation6} as='img' transition={"1s ease"} src='./img/fvimg3.svg' />
                    </Flex>
                </Flex>
                <Center id='concept' w={"100vw"} h={"100vh"} gap={"56px"} flexFlow={"column"} position="relative">
                    <Text fontSize={"30px"} fontWeight="900" textAlign={"center"}>人が行き交う<br/>「大都市」みたいな人に</Text>
                    <Text fontSize={"16px"} textAlign={"center"} lineHeight={"40px"}>
                        僕はすごく人に恵まれて生きているなと感じ生きてきました<br />
                        時にはそれが劣等感に感じることもありましたが<br />
                        今はそれを自分の強みと目標に<br />
                        色んな人と人を繋げれるような人になるために頑張っています。
                    </Text>
                    <Box position={"absolute"} top={"0"} left={concepttrans} as='img' src='./img/concept-img.svg' h={"100vh"} transition={"0.5s"}/>
                    <Box position={"absolute"} top={"0"} right={concepttrans} transform={"rotate(180deg)"} as='img' src='./img/concept-img.svg' h={"100vh"} transition={"0.5s"}/>
                </Center>
                <Center id='profile' w={"100vw"} h={"100vh"} flexFlow={"column"} position="relative">
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
                <Center id="pickup" h={"100vh"} flexFlow={"column"} gap={"48px"}>
                    <Text as={"h3"} fontSize={"46px"} fontWeight={"900"} >\ PICK UP /</Text>
                    <Mockup img={"./img/maturi.jpg"} url={"https://www.figma.com/proto/P4SxOKWuwMavdYKvjd7J1k/Untitled?node-id=2%3A8&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A8&show-proto-sidebar=1"}  />
                </Center>
                <Center id='works' w={"100vw"} h={"100vh"} gap={"48px"} flexFlow={"column"} position="relative">
                    <Text as={"h3"} fontSize={"46px"} fontWeight={"900"} >OTHER WORKS</Text>
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
                <Center id='contact' w={"100vw"} h={"100vh"} gap={"48px"} flexFlow={"column"} position="relative">
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
        </Box>
    )
}

export default App