import React, { useEffect, useState } from 'react'
import axios from '../src/axios';

const Row = ({title, fetchUrl, isLargeRow=false}) => {
    const [movies, setMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original/"

    useEffect(() => {
        const fetchData = async () => {
            const fetch = await axios.get(fetchUrl);
            setMovies(fetch.data.results);
            return requestAnimationFrame;
        }
            
        fetchData();
    },[fetchUrl]);

    

  return (
    <div className='bg-black'>
        <h1 className='text-white text-2xl m-[1rem]'>{title}</h1>
        <div className='flex justify-center items-center m-[1rem]'>
        {movies.map((movie) => (
            <img className='h-[20rem] w-[16rem] m-[1rem]' key={movie.id} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
        ))}

        </div>
        
    </div>
  )
}

export default Row