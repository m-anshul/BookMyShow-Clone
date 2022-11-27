import React from 'react'
import MovieNavBar from '../Components/Navbar/MovieNavBar';

const MovieLayoutHoc = (Component) => ({...props}) => {
  return (
    <div>
        <MovieNavBar/>
        <Component {...props}/>
        <div>Footer</div>
    </div>
  )
}

export default MovieLayoutHoc;