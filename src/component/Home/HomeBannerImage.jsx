/* eslint-disable no-unused-vars */
import { Box, Button, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const HomeBannerImage = () => {
  return (
    <>
        <Box mt={5}>
            <Box overflow={"hidden"} pos={"relative"} w={"full"} className='' minH={{base:"50vh", sm:'100vh'}} maxH={"100%"} >
                <Box zIndex={-1} w={"full"} h={"full"} pos={"absolute"} top={0} left={0} className='ImageBanner-header-my-xl' backgroundRepeat={"no-repeat"} backgroundSize={"cover"} backgroundPosition={"center"}>
                    <Image w={"full"} h={"full"} src='https://mdmustafizur.com/wp-content/uploads/2022/11/IMG20211017095507-1-1536x1325.jpg' />
                </Box>

                <Box h={"100%"} w={"100%"} position={"absolute"} top={"0%"} left={"0%"} bgGradient="linear(to-l, #5cbae644, #92797949)"  zIndex={-1}>

                </Box>

                <Box position={'absolute'}left={"15%"} top={"10%"} >
                    <VStack  w={{base:"100%",sm:"60%", md:"55%"}} alignItems={"start"} zIndex={9}>
                        <Text fontSize={20}  fontWeight={600} as={"span"} textDecorationThickness={"auto"} textShadow={"2px solid black"}>
                            Digital world</Text>

                        <Text as={"span"} fontWeight={600} fontSize={{base : "3xl", md:"6xl"}}>Self Motivation Is One And Only Way To Your Success</Text>

                 
                      <Button bg={"orange.600"}>My Courses for you</Button>
                    

                    </VStack>
                </Box>

          
            </Box>

          
        </Box>
        
   </>
  )
}

export default HomeBannerImage
