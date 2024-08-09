import {useState, useEffect} from "react";
import image from "../Assets/images/I-TUS.png";
import Aside from "../Header/Aside";
import './Customer.css';
import { showSeries } from "../Api/v1/Api";
import DisplayMovies from "./DisplayMovies";


const CustomerDash = () => {
    const [series, setSeries] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await showSeries(setSeries);
            
        };

        fetchData();
    }, []);

  return (
    <div className="main-content">
      <Aside/>
      <div className="display-movies">
      {series.map((item)=>(
        <DisplayMovies item={item} key={item.id}/>
      ))}
      </div>
      
    </div>
  );
};

export default CustomerDash;
