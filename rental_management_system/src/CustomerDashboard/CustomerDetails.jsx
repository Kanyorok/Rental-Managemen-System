import {useState, useEffect} from 'react'
import './Customer.css';
import { useLocation, useParams } from 'react-router-dom';
import { displaySingleProduct } from '../Redux/singleProduct/singleProductSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Layout/Loader';

const CustomerDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(displaySingleProduct(id));
    },[dispatch, id]);

    const { loading, success, product, error } = useSelector((state) => state.singleProduct);
    
    
  return (
    <div className="container container-fluid">
        <h2 className="mt-5 ml-5">Product Details</h2>
        <div className="row justify-content-around mt-5 user-info">
        {loading ?(<Loader/>) :( <>
            <div className="col-12 col-md-3">
                <figure className='avatar avatar-profile'>
                    <img className="rounded-circle img-fluid" src={product.image} alt='Movie image' />
                </figure>
                <a href="#" id="edit_profile" className="btn btn-primary btn-block my-5">
                    Product Info
                </a>
            </div>
     
            <div className="col-12 col-md-5">
                 <h4>Name</h4>
                 <p>{product.title}</p>
     
                 <h4>Description</h4>
                 <p>{product.description}</p>

                 
            </div></>) }
        </div>
    </div>
  )
}

export default CustomerDetails