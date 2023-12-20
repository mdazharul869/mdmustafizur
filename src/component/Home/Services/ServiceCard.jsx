/* eslint-disable no-unused-vars */
import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const ServiceCard = ({image, viewDitals, name}) => {
  return (
    <>
   
            <VStack w={{base:"100%", sm:"45%",  lg:"23%"}}  bg={"#222"} borderRadius={5} overflow={"hidden"} >
                <Box cursor={"pointer"} overflow={"hidden"} >
                    <Image _hover={{transform:"scale(1.08)"} } transition={"0.5s"} src={image}  alt='card 1'/>
                </Box>

            <Flex pb={10} mt={8} flexDirection={"column"} w={"80%"} justifyContent={"center"} alignItems={"center"} gap={2}>
                <Box>
                    <Text _hover={{color:"blue.500"}} fontSize={"2xl"} fontWeight={600}>
                        <Link className='aHover'>
                       {
                        name
                       }
                        </Link>
                    </Text>
                </Box>

                <Text>
                    Maecenas tempus, tellus eget condi men tum.
                    </Text>

                    <Box fontSize={"lg"} fontWeight={600} color={"blue.500"}>
                                <Link className='aHover' textDecoration={"underline"} >
                                {
                                    viewDitals
                                }
                                </Link>
                            </Box>
              </Flex>
            </VStack>
     
    </>
  )
}

export default ServiceCard