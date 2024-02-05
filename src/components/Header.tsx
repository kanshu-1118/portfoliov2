import { Box, Flex, Text } from '@chakra-ui/react'
import { NextComponentType } from 'next';
import NextLink from 'next/link';
import { off } from 'process';
import { useState , useEffect, useCallback } from 'react';



const Header : NextComponentType = () => {
    const [headerTop,setHeaderTop] = useState("0")
    // const [headerposition,setHeaderposition] = useState(0)
    
    let headerposition = 0
    const headerHead = 66

    const ifscroll = useCallback (() => {
        // const offset = window.scrollY;
        // if (window.scrollY >= 500) {
        //     console.log("発火");
        //     setConcepttrans("-1px");
        // }else if(window.scrollY =< 1000){
        //     setConcepttrans("-1000px")
        // }
        // console.log("検知");

        headerposition > window.scrollY
        ? setHeaderTop("0")
        : setHeaderTop("-66px");
        
        headerposition = window.scrollY
        // headerposition > window.scrollY
        // ? setHeaderTop("0")
        // : setHeaderTop("-66px");
        
        // setHeaderposition(window.scrollY)
        
        // window.scrollY > 100
        // ? setHeaderTop("-66px")
        // : setHeaderTop("0");
    },[])
    
    
    useEffect(()=> {
        window.addEventListener('scroll', ifscroll )
        return () => window.removeEventListener('scroll', ifscroll)
    },[])
    

    return (
        <Flex position={"fixed"} transition={"0.25s"} top={headerTop} zIndex={"100"} bgColor="whiteAlpha.500" w="100vw" h={"66px"} justifyContent="end" boxShadow={"0px 0px 4px 0px rgba(0,0,0,0.25)"}>
            <Flex gap={"48px"} paddingRight={"64px"}>
                <NextLink href={`/ecc/creator/sakuhin/2022/portfolio/wd2a17`} passHref>
                    <Text as={"p"} h={"100%"} lineHeight={"66px"} fontSize={"20px"}>TOP</Text>
                </NextLink>
                <NextLink href={`/ecc/creator/sakuhin/2022/portfolio/wd2a17/Works`} passHref>
                    <Text as={"p"} h={"100%"} lineHeight={"66px"} fontSize={"20px"}>WORKS</Text>
                </NextLink>
                <NextLink href={`/ecc/creator/sakuhin/2022/portfolio/wd2a17/profile`} passHref>
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