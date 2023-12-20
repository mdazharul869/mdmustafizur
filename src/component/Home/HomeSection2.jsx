/* eslint-disable no-unused-vars */
import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import CardHomeTeam from './CardHomeTeam'

const HomeSection2 = () => {

  const servicehometeam = [
    {
      iamge:"https://mdmustafizur.com/wp-content/themes/gutenify-fse/images/service-1.png",
      name :'Diverse Approach',
      viewDitals:"View Details",
      infotext :"Lorem is simply dummy text of the printing and typesetting."
    },
    {
      iamge:"https://mdmustafizur.com/wp-content/themes/gutenify-fse/images/service-2.png",
      name :'Expert Advice',
      viewDitals:"View Details",
      infotext :"Lorem is simply dummy text of the printing and typesetting."
    },
    {
      iamge:"https://mdmustafizur.com/wp-content/themes/gutenify-fse/images/service-4.png",
      name :'Professional Team',
      viewDitals:"View Details",
      infotext :"Lorem is simply dummy text of the printing and typesetting."
    },

    {
      iamge:"https://mdmustafizur.com/wp-content/themes/gutenify-fse/images/service-1.png",
      name :'Free Shipping',
      viewDitals:"View Details",
      infotext :"Lorem is simply dummy text of the printing and typesetting."
    },
  ]
    
  return (
    <>
        <Box h={"100%"}   maxW={4000} px={{base:"1rem",md:"5rem"}} my={10}>
            <Flex w={"full"} flexWrap={"wrap"} gap={4} >

                {
                  servicehometeam && servicehometeam.map((el,index)=>{
                    return (
                      <CardHomeTeam key={index}
                        image={el.iamge}
                        infotext={el.infotext}
                        name={el.name}
                        viewDitals={el.viewDitals}
                      />
                    )
                  })
                }
             
         

            </Flex>
        </Box>
    </>
  )
}

export default HomeSection2