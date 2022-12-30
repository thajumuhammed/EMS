import React,{ useState,useEffect } from 'react'
import Employee from './Employee';
import { Col, Row } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


function Edit() {

  const [id,setId]=useState('')
  const [uname,setUname]=useState('')
  const [age,setAge]=useState('')
  const [desg,setDesg]=useState('')
  const [salary,setSalary]=useState(0)

  useEffect(()=>{
    setId(localStorage.getItem('id'))
    setUname(localStorage.getItem('uname'))
    setAge(localStorage.getItem('age'))
    setDesg(localStorage.getItem('desg'))
    setSalary(JSON.parse(localStorage.getItem('salary')))
  },[])

  console.log(uname);
  console.log(id);
  console.log(salary);

  var index =Employee.map(item=>item.id).indexOf(id)
  console.log(index);

  let history=useNavigate()

    const handleUpdate=(e)=>{
      e.preventDefault(); //remove refresh
      console.log(e);
      let emp=Employee[index]
      emp.uname=uname;
      emp.age=age;
      emp.desg=desg;
      emp.salary=salary;


      console.log(emp);
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
                <Form.Control type="text" value={uname} onChange={(e)=>setUname(e.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>age</Form.Label>
                <Form.Control type="text" value={age} onChange={(e)=>setAge(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Desg</Form.Label>
                <Form.Control type="text" value={desg} onChange={(e)=>setDesg(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Salary</Form.Label>
                <Form.Control type="text" value={salary} onChange={(e)=>setSalary(e.target.value)} />
              </Form.Group>
              <Button onClick={(e)=>handleUpdate(e)} variant="primary" type="submit">
                Update
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Edit