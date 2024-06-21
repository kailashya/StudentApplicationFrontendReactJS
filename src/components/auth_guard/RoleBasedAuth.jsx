
import { Outlet } from "react-router-dom";
import Home from "../home/Home";

const useAdminAuth = () => {
 
    const isLoggedIn =sessionStorage.getItem('1');
  //  const user =sessionStorage.getItem('1')
    if(isLoggedIn === "ADMIN")
    {
        return true;
    }
    return false ;
}

const RoleBasedAuth = () => {
    const isAuth =useAdminAuth();

    return isAuth ? <Outlet /> :<Home/> ;
}

export default RoleBasedAuth;