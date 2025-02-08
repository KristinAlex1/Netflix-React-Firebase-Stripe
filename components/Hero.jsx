import axios from '../src/axios';
import React, { useEffect, useState } from 'react'
import requests from '../src/Request';

const Hero = () => {
    const[movie,setMovie] = useState([]);

    const truncate = (string) => {
        return string?.length > 150 ? string.substr(0,150) + ' ...': string;

    }

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * (request.data.results.length - 1))
                ]
            );
            return request;
            
        }
        fetchData();

    },[])

    console.log(movie)


  return (
    <>
        <header className='h-[55vh] 'style={{ 
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path})` }}>
                <div className='flex flex-col w-[30vw] text-white pl-[8rem] pt-[15rem] mb-[3rem] '>
                    <h1 className='text-5xl font-bold'>{movie?.name}</h1>
                    <div className='flex mt-[1rem]'>
                     <button className='h-[3vh] w-[4vw] font-bold text-xl rounded-sm bg-gray-900 mr-[1rem] hover:bg-white hover:text-black duration-300'>Play</button>
                     <button className='h-[3vh] w-[4vw] font-bold text-xl rounded-sm bg-gray-900 mr-[1rem] hover:bg-white hover:text-black duration-300'> My List</button>

                    </div>
                    <h1 className='mt-[1rem] text-xl font-bold break-words'>
                        {truncate(movie?.overview)}
                    </h1>
                    
                    
                </div>
                <div className='h-[40%] bg-gradient-to-t from-white/15 via-black/15 to-transparent transition-all duration-700'></div>
            </header>
    </>
  )
}

export default Hero