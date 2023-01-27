import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import worksArray from './api/works'
import Header from '@/components/Header'

const app : NextPage = () => {


    const array = worksArray.ArrayList
    {worksArray.ArrayList.map((e) => {
        console.log(e);
    })}

    return (
        <>
            <Flex w="100vw" h="100vh" alignItems={"center"} flexFlow={"column"}>
                <Header />
                {/* <Text>あの人ずっとおんねや</Text> */}
                <Flex flexFlow={"column"}>
                    {array.map((ev, i : number) => {
                        
                        // const nameKey : Function = ev.name 

                        return (

                        <Flex key={i}>
                            <Text as={"h2"}>{ev.name}</Text>
                            <Text as={"p"} >{ev.langage[1]}</Text>
                            <Text as={"p"} >{ev.text}</Text>
                        </Flex>

                        )
                        }
                    )}
                </Flex>
            </Flex>
        </>
    )
}

export default app