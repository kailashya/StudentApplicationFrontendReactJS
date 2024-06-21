import { Outlet } from "react-router-dom";
import Login from "../login/Login";

const useAuth = () => {
 
    const isLoggedIn =sessionStorage.getItem('0');
  //  const user =sessionStorage.getItem('1')
    if(isLoggedIn === "login successfull")
    {
        return true;
    }
    return false ;
}



const ProtectedRoutes = () => {
    const isAuth =useAuth();

    return isAuth ? <Outlet /> :<Login/> ;
}

export default ProtectedRoutes;