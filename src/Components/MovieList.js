import React from 'react';
import AddNomination from './AddNomination';
const MovieList = ({movies,handleNomination,text,icon}) => {
    return (
        <>
            {movies.map((movie,i)=>{
              return( <div key={i} className="d-flex justify-content-start m-3 image-container">
                <img src={movie.Poster} alt={movie.Title}/>
                <div onClick={()=>handleNomination(movie)} className="overlay d-flex align-items-center justify-content-center">
                  <AddNomination text={text} icon={icon}/>
                </div>
               </div>
              )
            })}
         </>   
      
    )
}

export default MovieList
