import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Row from "../components/Row"
import Homepage from "../pages/Homepage"
import LoginPage from "../pages/LoginPage"
import requests from "./Request"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"




function App() {
  const user = null;
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={user ? <Homepage/> :  <LoginPage/>} />
      
    )
  )
  

  return <RouterProvider router={router} />;
}

export default App
