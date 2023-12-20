/* eslint-disable no-unused-vars */
import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const ServiceHeader = () => {
  return (
      <>
        <Box w={"full"}>
          <Flex gap={6} flexWrap={"wrap"} w={"full"}>
            <Flex w={{sm:"100%", md:"45%"} }>
                <VStack alignItems={"start"}>
                  <Text letterSpacing={4} fontSize={"lg"} fontWeight={500} color={"blue.500"}>Services</Text>
                  <Text as={"span"} fontSize={"3xl"} fontWeight={700} letterSpacing={2}>Why Choose Us</Text>
                </VStack>
            </Flex>

            <Flex w={{sm:"100%", md:"45%"}}>
                <Text color={"gray.400"}>
                Change the workflow for your WordPress site, control everything from Site editor without using any extra plugins. Improved speed.
                </Text>
            </Flex>
          </Flex>
        </Box>
      </>
  )
}

export default ServiceHeader
