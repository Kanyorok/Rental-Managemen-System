import { useState, useEffect } from "react";
import "../CustomerDashboard/Customer.css";
import { useLocation, useParams } from "react-router-dom";
import { registerUser } from "../Redux/Auth/registerUser";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Layout/Loader";

const Register = () => {
  const dispatch = useDispatch();
  const { loading, success, error} = useSelector((state)=> state.registereduser);
  const [values, setValues] = useState({
    name: "",
    email: "",
    photo: "",
    bio:"",
    password: ""
  });

  const handleInputChange = (event) => {
 
    event.preventDefault();

    const { name, value } = event.target;
    setValues((values) => ({
      ...values,
      [name]: value
    }));
  };

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.name && values.email && values.bio && values.photo && values.password) {
      setValid(true);
    }
    const userData = {
      email: values.email,
      name: values.name,
      photo: values.photo,
      Bio: values.bio,
      Password: values.password
    }
    try {
      dispatch(registerUser(userData));
      setSubmitted(true);
    } catch (err) {
      console.log(err);
    }
    
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {loading ? <Loader/> : ( success ? submitted && valid && (
          <div className="success-message">
            <h3>
              {" "}
              Welcome {values.name}{" "}
            </h3>
            <div> Your registration was successful! </div>
          </div>
        ): (<>Not Succesful</>))}
        {!valid && (
          <input
            className="form-field"
            type="email"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        )}

        {!valid && (
          <input
            className="form-field"
            type="text"
            placeholder="Full Names"
            name="name"
            value={values.name}
            onChange={handleInputChange}
          />
        )}

        {!valid && (
          <input
            className="form-field"
            type="text"
            placeholder="Photo Link"
            name="photo"
            value={values.photo}
            onChange={handleInputChange}
          />
        )}

        {!valid && (
          <textarea
            className="form-field"
            rows={4}
            cols={20}
            placeholder="Enter Bio"
            name="bio"
            value={values.bio}
            onChange={handleInputChange}
          />
        )}

        {!valid && (
          <input
            className="form-field"
            type="password"
            placeholder="Enter Password"
            name="password"
            value={values.password}
            onChange={handleInputChange}
          />
        )}
        

        {submitted && !values.email && (
          <span id="email-error">Please enter an email address</span>
        )}
        {!valid && (
          <button className="form-field" type="submit">
            Register
          </button>
        )}
      </form>
    </div>
  );
};

export default Register;
