/* eslint-disable no-unused-vars */
import { Box, Button, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const AppreciateClint = () => {
  return (
        <>
            <Box w={"full"} >
                <Flex w={"Full"}  position={"relative"} h={{base:"100%", md:"90vh"}}>
                    <Image w={"full"} src='https://mdmustafizur.com/wp-content/themes/gutenify-fse/images/cta-banner.jpg' alt='client' />

                    <Box w={"full"} h={"full"} pos={"absolute"} top={0} left={0}  filter='auto' brightness='40%' blur={"2px"} bg={"#222222b7"}>

                    </Box>

                    <Flex position={"absolute"}  zIndex={1} w={'full'} top={{base:"20%",sm:"24%"}} >
                        <VStack spacing={{base:3 ,md:8}} w={"full"} h={"full"} justifyItems={"center"} align={"center"} margin={"auto"}>
                            <Text fontSize={{base:"2xl",sm:"4xl", md:"6xl"}} fontWeight={700}>We Appreciate Clients</Text>

                            <Text fontSize={{base:"xl",sm:"3xl"}} fontWeight={700}>
                            And Their Business
                            </Text>

                            <Button 
                             bg={"#f78550"}
                             py={6} px={8}
                             borderRadius={0}
                            >
                            Become A Client
                            </Button>
                        </VStack>
                    </Flex>
                </Flex>
            </Box>
        </>
  )
}

export default AppreciateClint
