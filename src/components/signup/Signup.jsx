import UserService from "../../services/user/UserService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Alert from 'react-bootstrap/Alert';


function Signup()
{
  const { register, handleSubmit, formState: { errors } } = useForm();
 const navigate= useNavigate()
  //   const [id,setId]=useState()
  //   const [name,setName]=useState("")
  //   const [email,setEmail]=useState("")
  // const [password,setPassword]=useState("")
  // const [role,setRole]=useState("")


  const onSubmit = async (data) => {
    try{
        const response=await UserService.registerUser(data);
        console.log(response)
        alert("sign up successful")
        navigate("/login")
      }
      //const userData={id,email,password,role}
      catch(error)
    {
      console.log("error  in sign up "+error)
    }
  };


    return (
      <div>
          <h1>Sign Up</h1>
          {/* Id:<input type="number" value={id} onChange={(e)=>setId(e.target.value)}/><br/>
          Name:<input type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
          Email:<input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
          Password:<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
          Role:<input type="text" value={role} onChange={(e)=>setRole(e.target.value)}/><br/>
          <Button variant="outline-primary" onClick={handleSignUp}>Sign Up</Button> */}


      <Form onSubmit={handleSubmit(onSubmit)}>

      <Form.Group controlId="id">
          <FloatingLabel  controlId="floatingInput"
        label="Id"
        className="mb-3">
          <Form.Control
            type="number" 
            //value={id} onChange={(e)=>setId(e.target.value)}
            placeholder="Enter id"
            {...register("id", { required: true })}
          />
          </FloatingLabel>
          {errors.Id && <Form.Text className="text-danger">Id is required</Form.Text>}
        </Form.Group>

        <Form.Group controlId="name">
         <FloatingLabel  controlId="floatingInput"
        label="Name"
        className="mb-3">
          <Form.Control
            type="text" 
            //value={name} onChange={(e)=>setName(e.target.value)}
            placeholder="Enter Name"
            {...register("name", { required: true })}
          />
          </FloatingLabel>
          {errors.name && <Form.Text className="text-danger">name is required</Form.Text>}
        </Form.Group>



        <Form.Group controlId="email">
          <FloatingLabel  controlId="floatingInput"
        label="Email"
        className="mb-3">
          <Form.Control
            type="text" 
            //value={email} onChange={(e)=>setEmail(e.target.value)}
            placeholder="Enter email"
            {...register("email", { required: true })}
          />
          </FloatingLabel>
          {errors.email && <Form.Text className="text-danger">Email is required</Form.Text>}
        </Form.Group>

        <Form.Group controlId="password">
          <FloatingLabel  controlId="floatingInput"
        label="Password"
        className="mb-3">
          <Form.Control
            type="password" 
            //value={password} onChange={(e)=>setPassword(e.target.value)}
            placeholder="Password"
            {...register("password", { required: true })}
          />
          </FloatingLabel>
          {errors.password && <Form.Text className="text-danger">Password is required</Form.Text>}
        </Form.Group>


        <Form.Group controlId="role">
         <FloatingLabel  controlId="floatingInput"
        label="Role"
        className="mb-3">
          <Form.Control
            type="text" 
            //value={role} onChange={(e)=>setRole(e.target.value)}
            placeholder="Enter role"
            {...register("role", { required: true })}
          />
          </FloatingLabel>
          {errors.email && <Form.Text className="text-danger">Email is required</Form.Text>} &nbsp;
        </Form.Group>



        <Button variant="outline-primary" type="submit">
          Sign Up
        </Button>     
      </Form>
    </div>    
    );
};

export default Signup;