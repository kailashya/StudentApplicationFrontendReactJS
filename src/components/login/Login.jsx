

//using log in  form validation


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
//import Button from '@material-ui/core/Button';  
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import './login.css';
import UserService from "../../services/user/UserService";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    try {
      const res=await UserService.getUserByEmail(data.email)
      const response = await UserService.loginUser(data);
      console.log(response);
      if (response == 'login successfull') {
        alert("Login successful");
        navigate("/home");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.log("Error logging in ", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container" >
     
      <Form  onSubmit={handleSubmit(onSubmit)} className="login-form">
      <h1>Login</h1>
        <Form.Group controlId="email">
          {/* <Form.Label>Email</Form.Label> */}
          <FloatingLabel  controlId="floatingInput"
        label="Email"
        className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter email"
            {...register("email", { required: true })}
          />
          </FloatingLabel>
          {errors.email && <Form.Text className="text-danger">Email is required</Form.Text>}
        </Form.Group>

        <Form.Group controlId="password">
            {/* <Form.Label>Password</Form.Label> */}
            <FloatingLabel controlId="floatingPassword" className="password-input-wrapper"  label="Password">
           
              
              <Form.Control
                type={showPassword ? "text" : "password"} // Toggle password visibility
                placeholder="Password"
                {...register("password", { required: true })}
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="password-toggle-icon"
                onClick={togglePasswordVisibility}
              />
            
            </FloatingLabel>
            {errors.password && <Form.Text className="text-danger">Password is required</Form.Text>}
          </Form.Group>
        
        
         <br/>
        <Button variant="outline-primary" type="submit">
          Log In
        </Button> &nbsp;  
        <Button variant="outline-info">
         <Link className="link" to='/resetPassword'>Forgot Password</Link>
        </Button>   
      </Form>
      
    </div>
  );
}

export default Login;
