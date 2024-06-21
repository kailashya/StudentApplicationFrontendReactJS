// import { useRef, useState } from "react";
// import StudentService from "../../services/student/StudentService";
// import Table from "react-bootstrap/esm/Table";
// import Button from "react-bootstrap/esm/Button";
// import Alert from 'react-bootstrap/Alert';
// import {useReactToPrint} from 'react-to-print'

// function StudentReport()
// {

//         const componentPDF=useRef()

//         const[subjects,setSubjects]=useState([])
//         const [v,setV]=useState(false)
//         const [email,setEmail]=useState("")

//         const [student,setStudent]=useState()


//         // const getStudentByRollNo=async()=>{
//         //     try{
//         //         const response=await StudentService.getStudentByEmail(email)
//         //         setStudent(response)
//         //     }catch(error)
//         //     {
//         //         console.log("error while getting details",error)
//         //     }
           
//         // }

//         const getAllSubjects=async()=>{
//             try{
//                 const response=await StudentService.getSubjectsOfStudentByEmail(email);
//                  const res=await StudentService.getStudentByEmail(email)
//                 setStudent(res)
//                 setV(true)
//                 setSubjects(response)
                
                
//             }catch(error)
//             {
//                 console.log("error while getting details",error)
//             }
//         }

//         const generatePDF=useReactToPrint({
//             content:()=>componentPDF.current,
//             documentTitle:"StudentReport",
//             onAfterPrint:()=>
//             <Alert variant="success">
//               <Alert.Heading>Alert Heading</Alert.Heading>
//               <p>This is the content of the alert.</p>
              
//             </Alert>
//         })

//         return(
            
//             <div>
//                 <br/> 
//                &nbsp; <input type="text" onChange={(e)=>setEmail(e.target.value)}/> &nbsp;
               
//                 <Button varient="outline-primary" onClick={getAllSubjects} >GetSubjects</Button>

                
      
                

//                 {v && (
//                     <div>
                        
//                     <div ref={componentPDF} style={{width:"100%"}} >
                       
//                       <p>
//                             Name: {student.name} <br/>
//                             Roll No: {student.rollNo}
//                         </p>

//                         <Table striped bordered hover>
//                             <thead>
//                                 <tr>
//                                     <th>SLNO</th>
//                                     <th>NAME</th>
//                                     <th>GRADE</th>
//                                     <th>POINTS</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {subjects.map(subject=>{
//                                     return(
//                                     <tr key={subject.slno}>

//                                         <td>{subject.slno}</td>
//                                         <td>{subject.name}</td>
//                                         <td>{subject.grade}</td>
//                                         <td>{subject.points}</td>
//                                     </tr>)
//                                 })}
//                             </tbody>
//                         </Table>
//                             <br/>
                            
//                     </div>
                   
//                     <div>
                   
//                     <Button varient="outline-success" onClick={generatePDF}>PDF</Button>

//                     </div>
//                     </div>
//                 )}
                

               

              

//             </div>
//         )
        
// }

// export default StudentReport;

import { useRef, useState } from "react";
import StudentService from "../../services/student/StudentService";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Alert from 'react-bootstrap/Alert';
import ProgressBar from 'react-bootstrap/ProgressBar';
import {useReactToPrint} from 'react-to-print'

function StudentReport()
{

    const componentPDF = useRef();

    const [subjects, setSubjects] = useState([]);
    const [v, setV] = useState(false);
    const [email, setEmail] = useState("");
    const [student, setStudent] = useState();
    const [downloading, setDownloading] = useState(false);

    const getAllSubjects = async () => {
        try {
            const response = await StudentService.getSubjectsOfStudentByEmail(email);
            const res = await StudentService.getStudentByEmail(email);
            setStudent(res);
            setV(true);
            setSubjects(response);
        } catch(error) {
            console.log("error while getting details", error);
        }
    }

    const generatePDF = useReactToPrint({
        content: () => componentPDF.current,
        documentTitle: "StudentReport",
        onBeforeGetContent: () => setDownloading(true),
        onAfterPrint: () => setDownloading(false)
    });

    return(
        <div>
            <br/> 
            &nbsp; <input type="text" onChange={(e) => setEmail(e.target.value)} /> &nbsp;
            <Button variant="outline-primary" onClick={getAllSubjects}>Get Subjects</Button>
            
            {v && (
                <div>
                    <div ref={componentPDF} style={{ width: "100%" }}>
                        <div style={{ marginLeft: "2px" }}>
                            Name: {student.name} <br/>
                            Roll No: {student.rollNo}
                        </div>

                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>SLNO</th>
                                    <th>NAME</th>
                                    <th>GRADE</th>
                                    <th>POINTS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {subjects.map(subject => {
                                    return(
                                        <tr key={subject.slno}>
                                            <td>{subject.slno}</td>
                                            <td>{subject.name}</td>
                                            <td>{subject.grade}</td>
                                            <td>{subject.points}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                        <br/>
                    </div>
                   
                    <div >
                        {downloading && <ProgressBar animated now={100} label="Downloading..." />}
                        <Button variant="outline-success" onClick={generatePDF}>Download PDF</Button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default StudentReport;
