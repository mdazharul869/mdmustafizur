/* eslint-disable no-unused-vars */
import { EmailIcon, PhoneIcon, RepeatClockIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { Link } from 'react-router-dom';

const FooterHeaderCategoris = () => {
    const Course = [
        {
            name : "Digital Marketing"
        },
        {
            name : "Video Editing"
        },
        
        {
            name : "Digital Marketing"
        },
        

    ]
    const contactList = [
        {
            icon : <CiLocationOn />,
            name: 'Bangladesh'
        },
        {
            icon : <EmailIcon   />,
            name: 'mdmustafizur62962@gmail.com'
        },
        {
            icon : <PhoneIcon />,
            name: '+88 01772 680961'
        },
    ]
  return (
    <>
              <Box  w={{base:"100%", sm:"46%", lg:"23%"}} padding={5}  >
       
             
       <VStack spacing={8} alignItems={"start"}>
               <Text fontSize={"xl"} fontWeight={600} as={"span"}>
                   About Us
               </Text>

               <Text fontSize={17} fontWeight={500} wordBreak={"break-word"}  whiteSpace={"break-spaces"} color={"gray.300"}>
               Nsectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
               </Text>

               <Button
                   bg={"orange.500"}
                   borderRadius={0}
                   px={8}
               >
               Know More
               </Button>
           </VStack>

             </Box>

             <Box  w={{base:"100%", sm:"46%", lg:"23%"}} padding={5}  >
       
             
            <VStack spacing={2} alignItems={"start"}>
                    <Text fontSize={"xl"} fontWeight={600} as={"span"}>
                        Categoris
                    </Text>

                
                        <Flex gap={2} alignItems={"center"}>
                            <RepeatClockIcon color={'gray.400'} />

                            <Text  color={'gray.400'} >
                                <Link>
                                Uncategorized
                                </Link>
                    
                            </Text>
                            <Text  color={'gray.400'}  >
                                <Link>
                                    (2)
                                </Link>
                            </Text>
                        </Flex>
                
            </VStack>

             </Box>

             
             <Box  w={{base:"100%", sm:"46%", lg:"23%"}} padding={5}  >
       
       {/* Recent News aprt */}
             
            <VStack spacing={2} alignItems={"start"}>
                    <Text fontSize={"xl"} fontWeight={600} as={"span"}>
                    Recent News
                    </Text>

                    <Text fontSize={"2xl"} fontWeight={600}>
                    My new courses :
                    </Text>

                
                    <Flex direction={"column"} color={'gray.400'} gap={2}>
                        {
                            Course && Course.map((el, index)=>{
                                return(
                                    <Link key={index} >
                                       {index}. {el.name}
                                    </Link>
                                )
                            })
                        }
                    </Flex>
                
            </VStack>

             </Box>

             <Box  w={{base:"100%", sm:"46%", lg:"23%"}} padding={5}  >
       
             
             <VStack spacing={2} alignItems={"start"}>
               <Text fontSize={"xl"} fontWeight={600} as={"span"}>
                   Quick Contact
               </Text>

           
           {
            contactList && contactList.map((el, index) =>{
                return(
                    <Flex flex={"wrap"} key={index} gap={2} alignItems={"center"}>
                        <Box color={'blue.500'} >
                        {el.icon}
                        </Box>
          

                    <Text fontSize={17} whiteSpace={"break-spaces"} wordBreak={"break-all"} fontWeight={500}  >
                         {
                            el.name
                         } 
                    </Text>

                </Flex>
        
                )
            })
           }

       </VStack>

        </Box>

    </>
  )
}

export default FooterHeaderCategoris
