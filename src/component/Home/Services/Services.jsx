/* eslint-disable no-unused-vars */
import { Box, Flex, VStack } from '@chakra-ui/react'
import React from 'react'
import ServiceCard from './ServiceCard'
import ServiceHeader from './ServiceHeader'

const Services = () => {

  const serviceCard = [
    {
      iamge:"https://mdmustafizur.com/wp-content/themes/gutenify-fse/images/gallery-1.jpg",
      name :'Professional Staff',
      viewDitals:"View Details"
    },
    {
      iamge:"https://mdmustafizur.com/wp-content/themes/gutenify-fse/images/gallery-2.jpg",
      name :'24/7 Services',
      viewDitals:"View Details"
    },
    {
      iamge:"https://mdmustafizur.com/wp-content/themes/gutenify-fse/images/gallery-3.jpg",
      name :'Save Money',
      viewDitals:"View Details"
    },

    {
      iamge:"https://mdmustafizur.com/wp-content/themes/gutenify-fse/images/gallery-4.jpg",
      name :'Free Shipping',
      viewDitals:"View Details"
    },
  ]
  return (
        <>
            <Box py={10}>
                <VStack  px={{base:"1rem",md:"5rem"}} alignItems={"start"}>
                 <ServiceHeader />

                 <Flex gap={4} flexWrap={"wrap"} mt={5}>

                  {
                    serviceCard && serviceCard.map((el, index)=>{
                      return (
                        <ServiceCard key={index} 
                        
                        image={el.iamge}
                        name={el.name}
                        viewDitals = {el.viewDitals}
                        />
                      )
                    })
                  }
                 

  
                 </Flex>
                </VStack>
               
            </Box>
        </>
  )
}

export default Services
