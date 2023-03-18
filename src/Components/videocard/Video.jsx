import React, { forwardRef } from 'react'
import "./videocard.css";
import TextTruncate from "react-text-truncate";


const base_url = "https://image.tmdb.org/t/p/original/";
const Video = forwardRef(({ movie }, ref) => {
  console.log(movie);
    return (
      <div ref={ref} className="videoCard">
      <img className='img'
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt="movie poster"
      />   <TextTruncate
      line={1}
      element="p"
      truncateText="..."
      text={movie.overview}
    />
    <h2>{movie.name ||  movie.original_title ||movie.original_name}</h2>
    <p className="videoCard__stats">
      {movie.media_type && `${movie.media_type} •`}
      {movie.release_date || movie.first_air_date} •
      
      {"  "} {movie.vote_count}
    </p>
      
    </div>
  )
})

export default Video
 