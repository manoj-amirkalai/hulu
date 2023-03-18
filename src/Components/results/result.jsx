import React, { useEffect, useState } from 'react'
import Video from '../videocard/Video'
import axios from './../helpers/axios'
import './result.css'
import FlipMove from 'react-flip-move'


const Result = ({selesctedOption}) => {
  const[movies,setMovies]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            const request=await axios.get(selesctedOption)
            setMovies(request.data.results)
        }
        fetchData()
    },[selesctedOption])
  return (
    <div className='results'>
      <FlipMove>
      {
        movies.map((movie)=>(
          <Video key={movie.id} movie={movie} />
        ))
      }</FlipMove>
    </div>
  )
}

export default Result
