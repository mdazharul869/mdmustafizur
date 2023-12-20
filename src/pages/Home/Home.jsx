/* eslint-disable no-unused-vars */
import { Box } from '@chakra-ui/react'
import React from 'react'
import AppreciateClint from '../../component/Home/AppreciateClint'
import BlogPost from '../../component/Home/Blog/BlogPost'
import HomeAboutMe from '../../component/Home/HomeAboutMe'
import HomeBannerImage from '../../component/Home/HomeBannerImage'
import HomeSection2 from '../../component/Home/HomeSection2'
import Services from '../../component/Home/Services/Services'


const Home = () => {
  return (
    <>
    <Box w={"full"}>
        <HomeBannerImage />

      
    </Box>
    <Box w={"full"}>
      <HomeSection2 />
    </Box>

    <Box w={"full"}>
      <HomeAboutMe />
    </Box>

    <Box w={"full"}>
      <AppreciateClint />
    </Box>

    <Box w={"full"}>
      <Services />
    </Box>

    <Box w={"full"}>
      <BlogPost />
    </Box>


     </>
  )

}

export default Home
