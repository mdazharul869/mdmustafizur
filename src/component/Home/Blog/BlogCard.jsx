/* eslint-disable no-unused-vars */
import { ChevronRightIcon, TimeIcon } from '@chakra-ui/icons';
import { Center, Flex, Text, VStack, WrapItem } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = () => {
  return (
    <>
    
    
                <WrapItem  w={{base:"100%", sm:"48%", lg:"30%"}} py={10} bg={"#151313"} px={6}>
                    <Center>
                        
                        <VStack  spacing={4} alignItems={"start"}>
                            <Text fontSize={'xl'} _hover={{color:"blue.500"}} fontWeight={500}>
                                 <Link className='aHover' >
                                  My Future plan
                                 </Link>    
                            </Text>

                            <Flex gap={2} alignItems={"center"}>
                                <TimeIcon w={4} h={4}/>

                                <Text _hover={{color:"blue.500"}} >
                                    <Link>
                                    November 29, 2022
                                    </Link>
                                </Text>
                            </Flex>

                            <Flex>
                                <Text color={"gray.400"}>
                                I want to be a successful digital job holder and a digital Businessman
                                </Text>
                            </Flex>


                            <Flex gap={"2px"} alignItems={"center"} justifyItems={"center"} justifyContent={"center"} pt={5}>
                                <Text color={"blue.500"} fontSize={18} fontWeight={600}>
                                    <Link>
                                    Know More
                                    </Link>
                                </Text>

                                <ChevronRightIcon w={4} color={"blue.500"} h={4} mt={"3px"}/>
                            </Flex>
                        </VStack>
                    </Center>
                </WrapItem>
         
     
    </>
  )
}

export default BlogCard
