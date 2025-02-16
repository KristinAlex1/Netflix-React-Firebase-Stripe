import React, { useEffect, useState, useRef } from "react";
import axios from "../src/axios";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const rowRef = useRef(null); // Ref for the scrollable container

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchData = async () => {
      const fetch = await axios.get(fetchUrl);
      setMovies(fetch.data.results);
    };

    fetchData();
  }, [fetchUrl]);

  const handleScroll = (direction) => {
    const scrollAmount = direction === "left" ? -350 : 350;
    rowRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="bg-black relative">
      {/* Title */}
      <h1 className="text-white font-bold text-3xl m-[1rem]">{title}</h1>

      {/* Scrollable Container */}
      <div
        ref={rowRef} // Attach the ref to the scrollable container
        className="flex overflow-x-scroll overflow-y-hidden no-scrollbar whitespace-nowrap p-[1rem] gap-4 scroll-smooth"
      >
        {/* Movie Posters */}
        {movies.map((movie) => (
          (isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path) ? (
            <img
              className={`${
                isLargeRow
                  ? "h-[20rem] w-[16rem] m-[0.5rem] transform transition-transform duration-300 hover:scale-110"
                  : "h-[14rem] w-[26rem] m-[0.5rem] transform transition-transform duration-300 hover:scale-110"
              }`}
              key={movie.id}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name || "Movie"}
            />
          ) : null
        ))}
      </div>

      {/* Left Scroll Button */}
      <button
        className="absolute left-0 h-[7vh] w-[3vw] top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2"
        onClick={() => handleScroll("left")}
      >
        &#8249;
      </button>

      {/* Right Scroll Button */}
      <button
        className="absolute right-0 h-[7vh] w-[3vw] top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2"
        onClick={() => handleScroll("right")}
      >
        &#8250;
      </button>
    </div>
  );
};

export default Row;
