/* eslint-disable no-unused-vars */
import { Box } from '@chakra-ui/react'
import React from 'react'
import Header from '../../component/Header/Header'
import FoooterPage from '../../component/Home/Footer/FoooterPage'

const PageLayout = ({children}) => {
  return (
    <>
        <Box>
            <Header />

        </Box>

        <Box>
            {children}
        </Box>

        <Box >
          <FoooterPage />
        </Box>
    </>
  )
}

export default PageLayout