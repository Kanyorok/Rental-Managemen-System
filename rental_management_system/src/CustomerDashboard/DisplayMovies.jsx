import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const DisplayMovies = ({item}) => {
    const navigate = useNavigate();

    const handleSingleProduct =() => {
        navigate(`/customer-dash/${item.id}`, {
            state: {
                item: item
            }
        })
    }
  return (
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
            <button onClick={handleSingleProduct}>View Movie</button>
          </div>
        </div>{" "}
      </section>
  )
}

export default DisplayMovies