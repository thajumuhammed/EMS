import React,{ useState,useEffect } from 'react'
import Employee from './Employee';
import { Col, Row } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';


function Add() {

  const [id,setId]=useState('')
  const [uname,setUname]=useState('')
  const [age,setAge]=useState('')
  const [desg,setDesg]=useState('')
  const [salary,setSalary]=useState(0)

  let history =useNavigate()
  
  const handleAdd=(e)=>{
    e.preventDefault(); // remove refresh
    let ids=uuid()
    console.log(ids);
    let uniqueId=ids.slice(0,8)
    console.log(uniqueId);
    Employee.push({
      id:uniqueId,
      uname:uname,
      age:age,
      desg:desg,
      salary:salary
    })
    
    history('/')

  }


  return (
    <>
    <div className="container">
      <h1 className="text-center">Employee Management Systam</h1>
      <p className="text-center">Employee management is a practice that helps a manager improve employee productivity and satisfaction to help an organisation reach its goals. Human resources (HR) professionals often use an employee management system (EMS), including recruitment, offboarding and performance management. Using a dedicated EMS can help an HR manager streamline the hiring process and improve workplace efficiency. In this article, we discuss what an employee management systems is,
        outline its benefits and types and list some examples of employee management software tools.</p>
      <Row>
        <Col>
          <img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" alt="" />
        </Col>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text"
               onChange={(e)=>setUname(e.target.value)}
               />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>age</Form.Label>
              <Form.Control type="text" 
              onChange={(e)=>setAge(e.target.value)}
               />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Desg</Form.Label>
              <Form.Control type="text"
               onChange={(e)=>setDesg(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Salary</Form.Label>
              <Form.Control type="text" 
              onChange={(e)=>setSalary(e.target.value)}
               />
            </Form.Group>
            <Button
              onClick={(e)=>handleAdd(e)}
              variant="primary" type="submit">
              Add
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  </>
  )
}

export default Add