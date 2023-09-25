import React from 'react'
import { useRouter } from 'next/router'
import { Flex } from '@chakra-ui/react';

const workAbout = () => {
    const router = useRouter();
    console.log(router.query);
    
    return (
        <Flex>

        </Flex>
    )
}

export default workAbout