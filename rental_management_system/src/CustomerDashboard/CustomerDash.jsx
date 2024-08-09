import {useState, useEffect} from "react";
import image from "../Assets/images/I-TUS.png";
import Aside from "../Header/Aside";
import './Customer.css';
import { showSeries } from "../Api/v1/Api";


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
        <section className="main-card" key={item.id}>
        <div className="main-dynamic-object">
          <div className="main-dynamic-top-section">
            <img src={item.image.medium} alt="rental image" />
          </div>
          <div className="main-dynamic-bottom-section">
            <h2>{item.name}</h2>
            <p>It is a good movie</p>
            <div className="main-dynamic-info">
              <div>
                <p>300+ Units</p>
                <p>Ksh. 10000</p>
              </div>
              <div>
                <p>6 beds $5 bath</p>
                <p>Applicants: 4</p>
              </div>
            </div>
            <button>View Property</button>
          </div>
        </div>{" "}
      </section>
      ))}
      </div>
      
    </div>
  );
};

export default CustomerDash;
