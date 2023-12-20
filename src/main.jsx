import { ChakraBaseProvider, extendTheme } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools"
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'


const styles = {
	global: (props) => ({
		body: {
			bg: mode("gray.100", "#111")(props),
			color: mode("gray.800", "whiteAlpha.900")(props),
			fontFamily: mode(`"Poppins", sans-serif`)
		},
	}),
};

const config = {
	initialColorMode: "dark",
	useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({ config, styles });


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
     <BrowserRouter>
        <ChakraBaseProvider theme ={theme}>
              <App />
        </ChakraBaseProvider>
      </BrowserRouter>
  </React.StrictMode>

)
