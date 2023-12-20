/* eslint-disable no-unused-vars */
import { Box, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const CardHomeTeam = ({name, image, viewDitals, infotext}) => {
  return (
   <>
                   <Box w={{base:"100%",sm:"48%", md:"48%",lg:"30%"} } py={14} px={10} borderRadius={5} bg={"#000"}>
                    <VStack spacing={4} alignItems={"start"} >
                        <Image w={50} h={50} className='filterImageColor'  name='phone' src={image} />

                        <Box>
                            <Box   fontSize={"3xl"} transition={2} fontWeight={600} _hover={{color:"blue.500"}}>
                                <Link _hover={{textDecoration:"none"}} className='aHover'>
                                  {
                                    name
                                  }
                                </Link>

                                <Box w={"100px"} mt={2} borderRadius={5} h={"2px"} bg={"blue.500"}>

                                </Box>
                            </Box>
                        </Box>

                        <Box>
                            <Box fontSize={"medium"} fontWeight={"midium"} color={"gray.300"}>
                                  {
                                    infotext
                                  }
                            </Box>
                        </Box>

                        <Box>
                            <Box fontSize={"lg"} fontWeight={600} color={"blue.500"}>
                                <Link className='aHover' textDecoration={"underline"} >
                           {
                            viewDitals
                           }
                                </Link>
                            </Box>
                        </Box>
                    </VStack>
                </Box>
   </>
  )
}

export default CardHomeTeam