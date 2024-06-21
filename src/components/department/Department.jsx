import { useState } from "react";
import DepartmentService from "../../services/department/DepartmentService";
import Button from "react-bootstrap/esm/Button";
import Table from "react-bootstrap/esm/Table";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";


function Department()
{
    const [departments,setDepartments]=useState([]);
  const [departmentResult,setDepartmentResult]=useState([]);
    const [va,setVa]=useState(false);
    const [va1,setVa1]=useState(false);
    const [id,setId]=useState(0);
   

    const  getAdllDepartments=async()=>{
        try{
            const res=await DepartmentService.getAllDepartments()
            setVa(true)
            console.log(res)
            setDepartments(res)
            
        }catch(error)
        {
            console.log("error in feteching all departments "+error)
        }
    }

    const getDepartmentResult=async()=>{
        try{
            const res=await DepartmentService.getDepartmentResult(id);
            setVa1(true)
            setDepartmentResult(res)
          
        }catch(error)
        {
            alert(error)
            //console.log("error in feteching department result : "+error)
        }
    }



    return (
    <div>
        <br/>
     <Button variant="outline-primary" onClick={getAdllDepartments}>Get All Departments</Button> <br/>
     { va && (
        <div>

            <h1>Department List</h1>
            <Table striped bordered hover>
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
            </tr>
            </thead>
            <tbody>
            {departments.map(department=>{
                return(
                <tr key={department.deptId}>
                    <td>{department.deptId}</td>
                    <td>{department.departmentName}</td>
                </tr>)
            })}
            
        </tbody>
      </Table>
      </div>
     )} &nbsp; <br/>

           
    Id: <input type="text" onChange={(e)=>setId(e.target.value)} placeholder="enter your department id"/> &nbsp;
     <Button variant="outline-primary" onClick={getDepartmentResult}>getDepartmentResult</Button>

     {va1 &&(
        <div>
                  <h1>Department Result</h1>
            <Table striped bordered hover>
            <thead>
            <tr>
                <th>Roll No</th>
                <th>Result</th>
            </tr>
            </thead>
            <tbody>
           
            {Object.entries(departmentResult).map(([studentRollNo, result]) => (
            <tr key={studentRollNo}>
              <td>{studentRollNo}</td>
              <td>{result}</td>
            </tr>
          ))}

        </tbody>
      </Table>
        </div>
    )}
   

  </div>
    );
};

export default Department;