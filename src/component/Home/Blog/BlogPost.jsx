/* eslint-disable no-unused-vars */
import { Box, VStack, Wrap } from '@chakra-ui/react'
import React from 'react'
import BlogCard from './BlogCard'
import { BlogPostHeader } from './BlogPostHeader'

const BlogPost = () => {
  return (
    <>
                    <Box bg={"#000"} minH={"100vh"} py={10}>
                        <VStack  px={{base:"1rem",md:"5rem"}} alignItems={"start"}>
                        
                           <Box w={"full"}>
                           <BlogPostHeader /> 
                           </Box>

                           <Wrap spacing={5}>
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                           </Wrap>
                        
                        </VStack>

                 </Box>
    </>
  )
}

export default BlogPost