import React, { NewLifecycle } from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import worksArray from './api/works'
import Header from '@/components/Header'

const App : NextPage = () => {


    const array = worksArray.ArrayList

    return (
        <>
            <Flex w="100vw" h="100vh" alignItems={"center"} flexFlow={"column"}>
                <Header />
                <Flex flexFlow={"column"}>
                    {array.map((ev : any, i : number) => {
                        
                        return (
                        <Flex key={i}>
                            <Text as={"h2"}>{ev.name}</Text>
                            <Text as={"p"} >{ev.langage[1]}</Text>
                            <Text as={"p"} >{ev.text}</Text>
                        </Flex>
                        )}
                    )}
                </Flex>
            </Flex>
        </>
    )
}

export default App