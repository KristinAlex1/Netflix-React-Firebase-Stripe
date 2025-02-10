import React from 'react'
import Row from '../components/Row'
import requests from '../src/Request'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

const Homepage = () => {
  return (
    <>
        <div className="bg-black">
      <Navbar/>
      <Hero/>
      <Row 
        title="NETFLIX ORIGINALS"
        fetchUrl = {requests.fetchNetflixOriginals}
        isLargeRow = {true}
      />
      <Row
      title="Trending Now"
      fetchUrl = {requests.fetchTrending}

      />
      <Row
      title="Top Rated"
      fetchUrl = {requests.fetchTopRated}
      isLargeRow = {true}

      />
      <Row
      title="Action Movies"
      fetchUrl = {requests.fetchActionMovies}

      />
      <Row
      title="Comedy Movies"
      fetchUrl = {requests.fetchComedyMovies}
      isLargeRow = {true}

      />
      <Row
      title="Horror Movies"
      fetchUrl = {requests.fetchHorrorMovies}

      />
      <Row
      title="Romance Movies"
      fetchUrl = {requests.fetchRomanceMovies}
      isLargeRow = {true}

      />
      <Row
      title="Documenteries"
      fetchUrl = {requests.fetchDocumentaries}
      isLargeRow = {true}

      />  
    </div>
    </>
    
  )
}

export default Homepage