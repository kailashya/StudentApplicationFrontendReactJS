import axios from 'axios'


const UserService={

    loginUser:async(userData)=>{
        try{
            const response=await axios.post(`http://localhost:8080/user-service/login`,userData,{headers:{"Content-Type":'application/json'}})
           sessionStorage.setItem(0,response.data)
            return response.data
        }catch(error)
        {
            console.log("error login in "+error)
        }
    },

    registerUser:async(userData)=>{
        try{
            const response=await axios.post(`http://localhost:8083/register`,userData,{headers:{"Content-Type":'application/json'}})
            return response.data
        }catch(error)
        {
            console.log("error  in sign up "+error)
        }
    },

    getUserByEmail:async(email)=>{
        try{
            const response=await axios.get(`http://localhost:8083/user/${email}`)
            sessionStorage.setItem(1,response.data.role)
            return response.data
        }catch(error)
        {
            console.log("error  in fetchening user details "+error)
        }
    },

    sendOtp:async(email)=>{
        try{
            const response =await axios.get(`http://localhost:8083/sendOtp/${email}`)
            return response.data;
        }catch(error)
        {
            console.log("error  in fetchening user details "+error)
        }
    },

    verifyOtp:async(otp)=>{
        try{
            const response =await axios.get(`http://localhost:8083/verifyOtp/${otp}`)
            return response.data;
        }catch(error)
        {
            console.log("error  in fetchening user details "+error)
        }
    },

    resetPassword:async(password)=>{
        try{
            const response =await axios.get(`http://localhost:8083/setNewPassword/${password}`)
            return response.data
        }catch(error)
        {
            console.log("error  in fetchening user details "+error)
        }

    },


    logout:async()=>{
        try{
            sessionStorage.removeItem('0')
            sessionStorage.removeItem('1')
        }catch(error)
        {
            console.log("error  in sign up "+error)
        }
        
    }
}

export default UserService;