import React from 'react'
import Employee from './Employee'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FaUserPlus,FaUserMinus } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import { Link,useNavigate } from 'react-router-dom';


function Home() {
  const history=useNavigate();
  const handleDelete=(id)=>{
    alert('Deleted')
    let index=Employee.map(item=>item.id).indexOf(id);
    Employee.splice(index, 1)
    console.log(Employee);
    history('/')
  }

  const handleEdit=(id,uname,age,desg,salary)=>{
    localStorage.setItem("id",id)
    localStorage.setItem("uname",uname)
    localStorage.setItem("age",age)
    localStorage.setItem("desg",desg)
    localStorage.setItem("salary",JSON.stringify(salary));
    

  }


  return (
    <div>
        <h1 className='text-primary text-center mt-5'>Employee Management</h1>
        <p className='text-center'>Employee management is the effort to help employees do their best work each day in order to achieve the larger goals of the organization. There are many tasks and duties that fall under employee management, but almost all of them can fit into one of five categories: Selection. Monitoring.</p>
        
       <Link to={'./add'}>
       <Button  className='btn btn-success'>Add <FaUserPlus/></Button>
       </Link>
        
        
        <h3 className='text-center mt-5'>List of Employee</h3>
        <Table varient='light' className='mt-5' striped bordered hover>
      <thead>
        <tr>
          
          <th>uname</th>
          <th>age</th>
          <th>desg</th>
          <th>salary</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
            Employee && Employee.length > 0 ?
            Employee.map((item)=>(
                <tr>
                    <td>{item.uname}</td>
                    <td>{item.age}</td>
                    <td>{item.desg}</td>
                    <td>{item.salary}</td>

                    <td>
                      <Link to={'./edit'}>
                          <Button onClick={()=>handleEdit(item.id,item.uname,item.age,item.desg,item.salary)} className='btn btn-info'><GrEdit/></Button>
                      </Link>
                       
                        <Button onClick={()=>handleDelete(item.id)} className='btn btn-danger'> <FaUserMinus/></Button>
                    </td>
                </tr>
            )):'Error'
        }
       
      </tbody>
    </Table>
    </div>
  )
}

export default Home