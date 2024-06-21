import { useState } from "react"
import { useNavigate } from "react-router-dom";
import UserService from "../../services/user/UserService";
import Button from "react-bootstrap/esm/Button";

function ForgotPassword(){

    const [email,setEmail]=useState("");
    const [otp,setOtp]=useState("");
    const [password,setPassword]=useState("");
   // const [verifyOTP,setVerifyOTP]=useState("")
    const navigate=useNavigate()

    const [iSLoggedIn,setIsLoggedIn] = useState(true)
    const [iSLoggedIn1,setIsLoggedIn1] = useState(false)
    const [iSLoggedIn2,setIsLoggedIn2] = useState(false)

   const sendOtp=async()=>{
        try{
            const response=await UserService.sendOtp(email);
            console.log(response)
            if(response=="you have sent mail")
            {
                
                setIsLoggedIn1(true);
                setIsLoggedIn(false);
            }
            else{
                setIsLoggedIn(true);
                setIsLoggedIn1(false);
            }
            
        }catch(error)
        {
            console.log("error  in fetchening user details "+error)
        }
    }

  const  verifyOtp=async()=>{
        try{
            const response=await UserService.verifyOtp(otp)
           // setVerifyOTP(response)
            if(response=="otp verified")
            {
                setIsLoggedIn1(false)
                setIsLoggedIn2(true)
                alert("otp verified")
            }
            else{
                alert("Invali otp")
                setIsLoggedIn2(false)
                setIsLoggedIn1(true)
            }
           
        }catch(error)
        {
            console.log("error  in fetchening user details "+error)
        }
    }

   const setNewPassword=async()=>{
        try{
            const response=await UserService.resetPassword(password)
            navigate("/login")
        }catch(error)
        {
            console.log("error  in fetchening user details "+error)
        }
    }

    return(
        <div>
            <br/>
            {iSLoggedIn && (
                <div>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="enter your email"/> &nbsp;
                    <Button variant="outline-primary" onClick={sendOtp}>Send Otp</Button>
                </div>
            )} &nbsp;

            {iSLoggedIn1 &&(
                 <div>
                    <input type="text" value={otp} onChange={(e)=>setOtp(e.target.value)}/> &nbsp;
                    <Button variant="outline-primary" onClick={verifyOtp}>Verify Otp</Button>
                 </div> 
            )} &nbsp;
        
           {iSLoggedIn2 && (
                <div>
                    <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/> &nbsp;
                    <Button variant="outline-primary" onClick={setNewPassword}>Change Your Password</Button>
                </div>
            )}&nbsp;

        </div>
    )

}
export default ForgotPassword