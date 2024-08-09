import {useState, useEffect} from 'react'
import './Customer.css';
import { useLocation } from 'react-router-dom';

const CustomerDetails = () => {
    const location = useLocation();
    const[movieDetail, setMovieDetail] = useState({});
    const [prevLocation, setPrevLocation] = useState("")

    useEffect(()=>{
        setMovieDetail(location.state.prod);
        setPrevLocation(location.pathname);
    },[location]);

    console.log(location);
    console.log(movieDetail.name);
    
  return (
    <div className="container container-fluid">
        <h2 className="mt-5 ml-5">My Profile</h2>
        <div className="row justify-content-around mt-5 user-info">
            <div className="col-12 col-md-3">
                <figure className='avatar avatar-profile'>
                    <img className="rounded-circle img-fluid" src={movieDetail.image.medium} alt='' />
                </figure>
                <a href="#" id="edit_profile" className="btn btn-primary btn-block my-5">
                    Edit Profile
                </a>
            </div>
     
            <div className="col-12 col-md-5">
                 <h4>Full Name</h4>
                 <p>{movieDetail.name}</p>
     
                 <h4>Email Address</h4>
                 <p>ghulamabbas258@gmail.com</p>

                 <a href="#" className="btn btn-danger btn-block mt-5">
                    My Orders
                </a>

                <a href="#" className="btn btn-primary btn-block mt-3">
                    Change Password
                </a>
            </div>
        </div>
    </div>
  )
}

export default CustomerDetails