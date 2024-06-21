// studentService.js

import axios from 'axios';

const API_URL = 'http://localhost:8081'; 
const StudentService = {
    getAllStudents: async() => {
        try {
            const response = await axios.get(`${API_URL}/students`);
            return response.data;
        } catch (error) {
            console.error('Error fetching students:', error);
            throw error;
        }
    },

    getStudentById: async(id) => {
        try {
            const response = await axios.get(`${API_URL}/student/studentById/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching student with ID ${id}:`, error);
            throw error;
        }
    },

    getStudentByEmail: async(email) => {
        try {
            const response = await axios.get(`${API_URL}/studentByEmail/${email}`);
            console.log(response.data)
            return response.data;
        } catch (error) {
            console.error(`Error fetching student:`, error);
            throw error;
        }
    },

    getStudentByRollNo: async(rollNo) => {
        try {
            const response = await axios.get(`${API_URL}/studentByRollNo/${rollNo}`);
            console.log(response.data)
            return response.data;
        } catch (error) {
            console.error(`Error fetching student with ID ${rollNo}:`, error);
            throw error;
        }
    },


    createStudent: async(studentData) => {
        try {
            const response = await axios.post(`${API_URL}/addStudent`, studentData,{headers:{"Content-Type":'application/json'}});
            return response.data;
        } catch (error) {
            console.error('Error creating student:', error);
            throw error;
        }
    },

    updateStudent: async(id, studentData) => {
        try {
            const response = await axios.put(`${API_URL}/students/${id}`, studentData);
            return response.data;
        } catch (error) {
            console.error(`Error updating student with ID ${id}:`, error);
            throw error;
        }
    },

    deleteStudent: async(id) => {
        try {
            const response = await axios.delete(`${API_URL}/students/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error deleting student with ID ${id}:`, error);
            throw error;
        }
    },

    getStudentResult:async(rollNo)=>{
        try{
            const response=await axios.get(`${API_URL}/${rollNo}/result`)
            return response.data
        }catch (error) {
            if (error.response && error.response.data) {
                console.error('Error fetching the student result:', error.response.data.message);
              } else {
                console.error('Error fetching the student result:', error.message);
              }
              // You may choose to throw the error or handle it as needed
              throw error;
        }
    },

    getStudentResultByEmail:async(email)=>{
        try{
            const response=await axios.get(`${API_URL}/${email}/result`)
            return response.data
        }catch (error) {
            if (error.response && error.response.data) {
                console.error('Error fetching the student result:', error.response.data.message);
              } else {
                console.error('Error fetching the student result:', error.message);
              }
              // You may choose to throw the error or handle it as needed
              throw error;
        }
    },

    getSubjectsOfStudentByEmail:async(email)=>
    {
        try{
            const response=await axios.get(`http://localhost:8081/student/${email}/subjects`)
            return response.data
        }catch(error)
        {
            console.log("error while getting details",error)
        }

    }
};

export default StudentService;