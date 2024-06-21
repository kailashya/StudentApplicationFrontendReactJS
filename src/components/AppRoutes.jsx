import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../components/login/Login';
import ForgotPassword from '../components/login/ForgotPassword';
import Home from '../components/home/Home';
import Signup from '../components/signup/Signup';
import Student from '../components/student/Student';
import Department from '../components/department/Department';
import Header from '../components/header/Header';
import AddDepartment from '../components/department/AddDepartment';
import StudentReport from '../components/student/StudentReport';
import ProtectedRoutes from '../components/auth_guard/ProtectedRoutes';
 import RoleBasedAuth from '../components/auth_guard/RoleBasedAuth';

function AppRoutes()
{
    return(
        <BrowserRouter >
        <br/>
        < Header/>

        <br/>
        <br /> 
        <Routes >
            <Route path = "/" element = { < Login /> }/> 
            
            <Route path = 'resetPassword' element = { < ForgotPassword /> }/>
            
            <Route path = "login" element = { < Login /> }/>
 
            <Route path = "signup" element = { < Signup /> }/>  
            
            <Route element = { < ProtectedRoutes /> } >

                <Route path = "home" element = { < Home /> }/>

                <Route path = "student" element = { < Student /> }/> 
                
                <Route path = "studentReport" element = { < StudentReport /> }/> 
                
                <Route path = "department" element = { < Department /> }/> 

            </Route> 

            < Route element = { < RoleBasedAuth /> } >
                <Route path = 'addDepartment'element = { < AddDepartment /> }/> 
            </Route>

        </Routes >
    </BrowserRouter>

    )
    

}

export default AppRoutes;