import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UserService from "../../services/user/UserService";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header()
{
    const navigate =useNavigate()

    const isLoggedIn = !!sessionStorage.getItem('0')
    const isLoggedIn1 = sessionStorage.getItem('1')

    const logout=async()=>{
        try{
            const confirmLogout = window.confirm('Are you sure you want to logout?');
            if (confirmLogout) {
                const response=UserService.logout();
                alert("log out successful")
                navigate("/login")
            }
        }catch(error)
        {
            console.log("error  in sign up "+error)
        }
    }


    return(  
    <div>

        {/* {!isLoggedIn && (
            <Button variant="outline-info"><Link className="link" to="/login">Login</Link></Button>
        )} &nbsp;

        {!isLoggedIn && (
            <Button variant="outline-info"><Link className="link" to="/signup">Sign UP</Link></Button> 
        )} &nbsp;

        

        {(isLoggedIn1=='USER' || isLoggedIn1=='ADMIN') && (
             <Button variant="outline-info"> <Link className="link" to="/department">Department</Link></Button>
        )} &nbsp;
       
       {(isLoggedIn1=='USER' || isLoggedIn1=='ADMIN') && (
        <Button variant="outline-info"><Link className="link" to="/student">Student</Link> </Button> 
        )} &nbsp;
        
        {(isLoggedIn1=='ADMIN') && (
             <Button variant="outline-info"><Link className="link" to="/addDepartment">Add Department</Link> </Button> 
        )} &nbsp;

        {isLoggedIn && (
            <Button variant="outline-primary" onClick={logout}>Log out</Button> 
        )} &nbsp; */}


        <Navbar fixed="top" bg="primary">
            <Container>
               <Nav >
                    {(isLoggedIn1=='USER' || isLoggedIn1=='ADMIN') && (
                         <Nav.Item>
                            <Nav.Link  href="/department">Department</Nav.Link>
                        </Nav.Item>
                   )}

                    {(isLoggedIn1=='USER' || isLoggedIn1=='ADMIN') && (
                        <Nav.Item>
                            <Nav.Link href="/student">Student</Nav.Link>
                       </Nav.Item>
                    )}
                                
                    {( isLoggedIn1=='ADMIN') && (
                        <Nav.Item>
                            <Nav.Link href="/addDepartment">Add Department</Nav.Link>
                        </Nav.Item>
                    )}
                </Nav> 

                 <Nav >
                    {!isLoggedIn && (
                        <Nav.Item>
                            <Button variant="outline-light">  <Nav.Link  href="/login">Login</Nav.Link> </Button>
                        </Nav.Item>
                        
                    )} &nbsp;

                    {!isLoggedIn && (
                        
                        <Nav.Item>
                            <Button variant="outline-light">  <Nav.Link href="/signup">Sign Up</Nav.Link> </Button>
                        </Nav.Item>
                    )}

                   {isLoggedIn && (
                            <Nav.Item >
                                <Nav.Link onClick={logout}>Log out</Nav.Link>
                            </Nav.Item>
                    
                    )} 

                </Nav>   
            </Container>
      </Navbar>
    </div>
  );
};

export default Header;