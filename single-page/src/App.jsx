import {  BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import About from "./pages/About"
import Service from "./pages/Service"
import Projects from "./pages/Projects"


function App() {

  return (
    <div>
      
      <Header />
        <Routes>
        <Route path="/" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route  path="/projects" element={<Projects/>} />
        </Routes>
      {/* <Main /> */}
      <Footer/>
   </div>
  
  )
}

export default App
