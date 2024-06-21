// import React, { useEffect, useState } from 'react';


// function Student()
// {
//     const [students, setStudents] = useState([]);
//     useEffect(() => {
//         // Fetch students when the component mounts
//         const fetchStudents = async () => {
//           try {
//             const data = await StudentService.getAllStudents();
//             setStudents(data);
//           } catch (error) {
//             console.error('Error fetching students:', error);
//           }
//         };
    
        
//       }, []);
    
//       return (
//         <div>
//             <button onClick={fetchStudents}>getAllStudents</button>
//           <h1>Student List</h1>
//           <ul>
//             {students.map(student => (
//               <li key={student.id}>{student.name}</li>
//             ))}
//           </ul>
//         </div>
//       );
// };

// export default Student;

import React, { useState ,useRef} from 'react';
import StudentService from '../../services/student/StudentService';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table'

//import {useReactToPrint} from 'react-to-print'


 // Import the student service

function Student() {

 // const componentPDF=useRef();
  const [students, setStudents] = useState([]);
  const [rollNo,setRollNo]=useState("")

  const [result,setResult]=useState()
  const[va,setVa]=useState(false)
  const[va1,setVa1]=useState(false)


  const fetchStudents = async () => {
    try {
      const data = await StudentService.getAllStudents();
      console.log(data)
      setVa(true)
      setStudents(data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };



  const getStudentResult=async()=>{
    try{
      const data=await StudentService.getStudentResult(rollNo)
      //const res= await StudentService.getStudentByRollNo(rollNo)
      //setEmail(res.email)
      setVa1(true)
      setResult(data)
    }catch(error){
      console.log("error fecthing the student result",error.response.data)
      alert(error.response.data)

    }
  }

//  const generatePDF = useReactToPrint({
//       content: ()=>componentPDF.current,

//  });

  return (
    <div>
      <br/>
      <Button variant='outline-primary' onClick={fetchStudents}>Fetch Students</Button> <br/>
      {va  &&(
        <div>
             <h1>Student List</h1>
      
      <Table striped bordered hover> 
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Roll No</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student=>{
            return(
            <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.rollNo}</td>
            </tr>)
          })}
          
        </tbody>
      </Table>
        </div>
      )} &nbsp;<br/>
     
      RollNO:<input type='text' onChange={(e)=>{setRollNo(e.target.value)}}/> &nbsp;
      <Button variant='outline-primary' onClick={getStudentResult}>result</Button>
      
      {va1 &&(
        <div>
           {/* <Button variant='outline-primary' onClick={getStudentResult}>result</Button> */}
           <h1>{result}</h1>
           {result && (
               <Button variant='outline-primary' href='/studentReport'>Get Report</Button>
           )}
          
           {/* <Button variant='outline-primary' onClick={generatePDF}>PDF</Button> */}
        </div>
      )}
     
    </div>
  );
}

export default Student;
