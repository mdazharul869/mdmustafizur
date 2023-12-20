/* eslint-disable no-unused-vars */
import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const BlogPostHeader = () => {
  return (
   <>
    <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Flex >
            <VStack alignItems={"start"}>
                <Text fontSize={18} letterSpacing={3} fontWeight={500} textTransform={"uppercase"} color={"blue.500"}>
                    News
                </Text>

                <Text fontSize={"4xl"} fontWeight={600}>
                 From Our Blog Posts
                </Text>
            </VStack>
        </Flex>

      
                <Box fontSize={"lg"} fontWeight={600} color={"blue.500"}>
                                <Link className='aHover' textDecoration={"underline"} >
                                View All
                                </Link>
                </Box>
       
    </Flex>
   </>
  )
}
