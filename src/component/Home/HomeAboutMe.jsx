/* eslint-disable no-unused-vars */
import { Box, Button, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const HomeAboutMe = () => {
  return (
    <>
        <Box bg={"#000"}  py={6} maxW={4000} px={{base:"1rem",md:"5rem"}} minH={"100vh"}>
            <Flex gap={8} direction={{base:"column", md:"row"}} alignItems={{base:"start", md:"center"}}>
                <Box w={{md:"45%"}}>
                    <Flex flex={1} borderRadius={5} overflow={"hidden"}>
                        <Image w={"full"} h={"full"} src='https://mdmustafizur.com/wp-content/uploads/2022/11/IMG_20221128_113313-768x1024.jpg' alt='mostafizorabout' />
                    </Flex>
                </Box>

                <Flex flex={2}>
                    <VStack spacing={4} alignItems={"start"}>
                        <Flex>
                            <Text fontSize={18} letterSpacing={2} fontWeight={600} color={"blue.500"}>About me</Text>
                        </Flex>

                        <Flex>
                            <Text fontSize={{base:"3xl", sm:"4xl", lg:"5xl"}} fontWeight={600}>
                            Building Experience & Give your Success
                            </Text>
                        </Flex>

                        <Flex>
                            <Button
                                bg={"#f78550"}
                                py={6} px={8}
                                borderRadius={0}
                            >Know My Services</Button>
                        </Flex>
                    </VStack>
                </Flex>
            </Flex>
        </Box>
    </>
  )
}

export default HomeAboutMe
