import { Route, Routes } from "react-router-dom"
import './App.css'
import PageLayout from "./layout/PageLayout/PageLayout"
import Home from './pages/Home/Home'

function App() {


  return (
    <>
    <PageLayout>
        <Routes>
            <Route path='/' element={<Home />} /> 
          </Routes>
    </PageLayout>

    </>
  )
}

export default App
