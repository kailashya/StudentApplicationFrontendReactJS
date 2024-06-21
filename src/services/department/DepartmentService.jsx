import axios from 'axios'


const DepartmentService={

    getAllDepartments:async()=>{
        try{
            const response=await axios.get(`http://localhost:8082/departments`)
            return response.data;
        }catch(error)
        {
            console.log("error in feteching all departments "+error)
        }
    },

    getDepartmentResult:async(id)=>{
        try{
            const response=await axios.get(`http://localhost:8082/departmentResult/${id}`)
            console.log(response.data)
            return response.data
        }catch(error)
        {
            throw error.response.data
            //console.log("error in feteching department result "+error)
        }
    },

    addDepartment:async(department)=>{
        try{
            const response =await axios.post(`http://localhost:8082/addDepartment`,department,{headers:{"Content-Type":'application/json'}})
            return response.data
        }catch(error)
        {
            console.log("error in adding department "+error)
        }
    },

    updateDepartmentById:async(id,department)=>{
        try{
            const response =await axios.put(`http://localhost:8082/updateDepartmment`,department,id)
            return response.data
        }catch(error)
        {
            console.log("error in updating department "+error)
        }

    }

}

export default DepartmentService;