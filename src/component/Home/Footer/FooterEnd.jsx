/* eslint-disable no-unused-vars */
import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const FooterEnd = () => {



  return (
    <>

        <Flex w={"full"} justifyContent={"center"} alignItems={"center"} pt={4}>
            <Text color={"gray.300"} >
            &copy; 2023 <Link className='footercopy' >Md Mustafizur.</Link>All right reserved 
            </Text>
        </Flex>
      
    
    </>
  )
}

export default FooterEnd
