import './App.css'

import { Routes, Route  } from "react-router-dom"
import SharedLayout from "./component/SharedLayout"
import About from "./pages/About"
import Cart from "./pages/Cart"
import { ErrorPage } from "./pages/ErrorPage"
import Features from "./pages/Features"
import Home from "./pages/Home"
import OurMeal from "./pages/OurMeal"
import Testimonial from "./pages/Testimonial"


function App() {
  return(
    <Routes>
       <Route index element={<Home />}/>
      <Route path="/" element={<SharedLayout />}>
      <Route path="/ourmeal" element={<OurMeal />}/>
      <Route path="/features" element={<Features />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/testimonials" element={<Testimonial />}/>
      </Route>
      <Route path="/cart" element={<Cart />}/>
      <Route path="*" element={<ErrorPage />}/>
    </Routes>
  )
}

export default App
