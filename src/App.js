import React ,{useEffect, useState}from 'react'
import MovieList from './Components/MovieList';
import  MovieHeading from './Components/MovieHeading';
import SearchBar from './Components/SearchBar';
import {AiFillHeart} from 'react-icons/ai'
import {FaHeartBroken} from 'react-icons/fa'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
const App = () => {
    const [movie,setMovie]=useState([]);
    const [search,setSearch]=useState('');
    const [nomate,setNominate]=useState([]);
    const getAllMovies=async(search)=>{
       const url =`http://www.omdbapi.com/?s=${search?search:'avengers'}&apikey=36afa293`;
       const {data}= await axios.get(url);
       console.log(data.Search);
       if(data.Search){
        setMovie(data.Search);
       }
       
    }
    useEffect(()=>{
        getAllMovies(search);
    },[search]);
      
    useEffect(()=>{
        const nominatedMovies = JSON.parse(localStorage.getItem('Nominated'))
        setNominate(nominatedMovies)
    },[])
    const saveToLoacalStorage=(items)=>{
       localStorage.setItem('Nominated',JSON.stringify(items))
    }

    const addToNomination =(Movie)=>{
        if(nomate.length<5){
            const newNomination=[...nomate,Movie];
            setNominate(newNomination);
            saveToLoacalStorage(newNomination);
        }
        else{
            window.alert('you have only five nomination')
        }
        
    }

    const removeFromNomination=(Movie)=>{
      const newNominate=nomate.filter((nominate)=>nominate.imdbID!==Movie.imdbID)
      setNominate(newNominate)
      saveToLoacalStorage(newNominate);
    }

    return (
        <div className="container-fluid movie-app">
            <div className="row  scroll py-4 d-flex align-item-center ">
               <MovieHeading text="Movies"/>
               <SearchBar search={search} setSearch={setSearch}/>
            </div>
            <div className="row">
            <MovieList movies={movie} handleNomination={addToNomination} text="nominate" icon={<AiFillHeart style={{color:'red'}}/>}/>
            </div>
            <MovieHeading text="Nominated"/>
            <div className="row nominated py-4 d-flex align-item-center justify-content-start ">
               <MovieList movies={nomate} handleNomination={removeFromNomination} text="remove" icon={<FaHeartBroken style={{color:'red'}}/>}/>

            </div>
        </div>
    )
}

export default App
