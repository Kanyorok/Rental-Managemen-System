import { useState, useEffect } from "react";
import "../CustomerDashboard/Customer.css";
import { loginUser } from "../Redux/Auth/loginUser";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Layout/Loader";

const Login = () => {
  const dispatch = useDispatch();
  const { loading, success, error} = useSelector((state)=> state.loginUser);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.email && values.password) {
      setValid(true);
    }
    const userData = {
      email: values.email,
      password: values.password
    }
    try {
      dispatch(loginUser(userData));
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    }
    
  };

  return (
    <div className="form-container">
      <h1>Sign-In User</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        {loading ? <Loader/> : ( success ? submitted && valid && (
          <div className="success-message">
            <h3>
              {" "}
              Welcome {values.name}{" "}
            </h3>
            <div> Your login was successful! </div>
          </div>
        ): (<>Invalid Password/Email</>))}
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
            Login
          </button>
        )}
      </form>
    </div>
  );
};

export default Login;
