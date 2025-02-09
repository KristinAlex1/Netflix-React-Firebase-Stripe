import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Row from "../components/Row"
import requests from "./Request"




function App() {
  

  return (
    <div className="bg-black">
      <Navbar/>
      <Hero/>
      <Row 
        title="NETFLIX ORIGINALS"
        fetchUrl = {requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row/>
     
    </div>
  )
}

export default App
