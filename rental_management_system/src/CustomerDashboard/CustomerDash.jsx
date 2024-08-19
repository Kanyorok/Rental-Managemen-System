import {useEffect} from "react";
import image from "../Assets/images/I-TUS.png";
import Aside from "../Header/Aside";
import './Customer.css';
import { showSeries } from "../Api/v1/Api";
import DisplayMovies from "./DisplayMovies";
import { displayMovies } from "../Redux/allMovies/allMoviesSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Layout/Loader";


const CustomerDash = () => {
    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(displayMovies());
    }, [dispatch]);
    
    const { loading, success, movies, error } = useSelector((state) => state.movies);
   
  return (
    <div className="main-content">
      <Aside/>
      <div className="display-movies">
        {loading ?(<Loader/>) : (movies.map((item)=>(
        <DisplayMovies item={item} key={item.id}/>
      )))
        
        }
      
      </div>
      
    </div>
  );
};

export default CustomerDash;
