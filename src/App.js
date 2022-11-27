import './App.css';
import axios from 'axios';
// React Slick CSS
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
//Routing
import {Routes, Route} from 'react-router-dom';
//Pages
import HomePage from './Pages/HomePage';
import MoviePage from './Pages/MoviePage';
import PlayPage from './Pages/PlayPage';

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <Routes>
      <Route path = '/' element = {<HomePage/>}/>
      <Route path = '/movie/:id' element = {<MoviePage/>}/>
      <Route path = '/plays' element = {<PlayPage/>}/>
    </Routes>
  );
}

export default App;
