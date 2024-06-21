import Form from "react-bootstrap/Form";
import {useForm} from 'react-hook-form'
import { useNavigate } from "react-router-dom";
import DepartmentService from '../../services/department/DepartmentService'
import Button from 'react-bootstrap/esm/Button'

function AddDepartment(){

    const { register,handleSubmit, formState: { errors } } = useForm();
    const navigate=useNavigate()

        const onSubmit=async(data)=>{
            try{
                console.log(data)
                const response=await DepartmentService.addDepartment(data)
                alert(response)
                navigate("/home")
            }catch(error)
            {
                console.log("error in adding department "+error)
            }
        }

        return(

            <div>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group controlId="id">
                        <Form.Label>Id</Form.Label>
                        <Form.Control
                            type="number" 
                            //value={id} onChange={(e)=>setId(e.target.value)}
                            placeholder="Enter id"
                            {...register("id", { required: true })}
                        />
                        {errors.Id && <Form.Text className="text-danger">Id is required</Form.Text>}
                    </Form.Group>

                    <Form.Group controlId="id">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text" 
                            //value={id} onChange={(e)=>setId(e.target.value)}
                            placeholder="Enter department name"
                            {...register("departmentName", { required: true })}
                        />
                        {errors.Id && <Form.Text className="text-danger">Id is required</Form.Text>}
                    </Form.Group>

                    <Button variant='outline-primary' type="submit">Add Department</Button>
                </Form>
            </div>
        )

}

export default AddDepartment