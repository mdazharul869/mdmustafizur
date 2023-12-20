/* eslint-disable no-unused-vars */
import { Box, Flex, VStack } from '@chakra-ui/react'
import React from 'react'
import FooterEnd from './FooterEnd'
import FooterHeaderCategoris from './FooterHeaderCategoris'

const FoooterPage = () => {


  return (
    <>
       <Box   py={10}>
                        <VStack  px={{base:"1rem",md:"5rem"}} alignItems={"start"}>
                        
                           <Box w={"full"}>
                           <Flex w={"full"} gap={4} flexWrap={"wrap"}>          
                            <FooterHeaderCategoris
                                  />           
                         
                           </Flex>
                           </Box>
                          

                    </VStack>
                    <Box px={{base:"1rem",md:"5rem"}}  w={"100%"} borderTop={"1px solid"} borderColor={"gray.600"}>
                        <FooterEnd />
                        </Box>
                </Box>
    </>
  )
}

export default FoooterPage