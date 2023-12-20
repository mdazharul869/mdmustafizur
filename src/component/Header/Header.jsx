/* eslint-disable no-unused-vars */
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { Box, Container, Flex, Image, Text, VStack } from '@chakra-ui/react';

import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
      <>
      <VStack>
        <Box w={'full'} bg={"black"} overflow={"hidden"}>
          <Container  maxW='container.xl'>
              <VStack alignItems={"start"} direction={"column"}>
                  <Flex py={3} w={"full"} justifyItems={{base:"center", md:"start"}} gap={3} direction={{base:"column", sm:"row"}}>
                      <Flex gap={1} justifyContent={"center"} alignItems={"center"}>
                            <Box className='react-xl-icons'>
                              <IoLocationOutline fontSize={"xl"}/>
                            </Box>
                            <Text as={"span"} fontSize={18}   fontWeight={600}>Bangladesh</Text>
                          
                      </Flex>

                      <Flex gap={1} justifyItems={"center"} alignItems={"center"}>
                            <Box className='react-xl-icons'>
                              <EmailIcon color={"blue.500"} fontSize={"xl"}/>
                            </Box>
                            <Text as={"span"} fontSize={18}   fontWeight={600}>mdmustafizur62962@gmail.com</Text>
                          
                      </Flex>

                  </Flex>
              </VStack>
          </Container>
        
        </Box>

        <Box w={"full"}>
            <Container maxW={'container.xl'}>
              <Flex w={"full"} gap={4} justifyContent={"space-between"} flexWrap={"wrap"} alignItems={"center"}>
                  <Flex  gap={2} alignItems={"center"}>
                    <Box>
                      <Image  src='https://mdmustafizur.com/wp-content/uploads/2022/11/IMG_20221016_173947-1-163x300.jpg' w={"full"} h={"100px"}/>
                    </Box>

                    <Text fontSize={{base:"2xl", sm:"3xl"}} fontWeight={500} ><Link className='aHover'>Md Mustafizur Rahman</Link></Text>
                  </Flex>

                  <Box>
                    <Text as={"span"} fontSize={"16px"} color={"gray.400"} cursor={"pointer"} fontWeight={600}>Simple Page</Text>
                  </Box>
                  <Box>
                      <Flex margin={'auto'} w={"full"}  flexWrap={"wrap"} gap={4} justifyItems={"center"} alignItems={"center"}>
                        <PhoneIcon w={6} h={6} />
                        <Text fontSize={"xl"} fontWeight={"bold"} as={"span"}>Contact</Text>

                        <Text fontSize={"xl"} fontWeight={"bold"} as={"span"} color={"blue.500"}>+8801772680961</Text>
                      </Flex>
                  </Box>
              </Flex>
            </Container>
        </Box>
      </VStack>
      </>
  )
}

export default Header
