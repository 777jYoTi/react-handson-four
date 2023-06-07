import React from 'react'
import Navbar from '../Navbar'
const Student = () => {
  return (
    <>
     <Navbar/>
     <div className='SubHeading'>
     <h1>Student</h1>
     <button className='AddStudentButton'>Add New Student</button>
     </div>
     <div className='StudentTable'>
       <h1 className=''>Students Details</h1>
       <table table width='80%'  cellpadding='1' cellspacing='1px' border='2px'  >
        <tr>
          <th>NAME</th>
          <th>AGE</th>
          <th>COURSE</th>
          <th>BATCH</th>
          <th>CHANGE</th>
        </tr>
        <tr>
          <td>Jhon</td>
          <td>24</td>
          <td>Mern</td>
          <td>October</td>
          <td>Edit</td>
        </tr>
        <tr>
          <td>Do2</td>
          <td>24</td>
          <td>Mern</td>
          <td>November</td>
          <td>Edit</td>
        </tr>
        <tr>
          <td>Biden</td>
          <td>25</td>
          <td>Mern</td>
          <td>September</td>
          <td>Edit</td>
        </tr>
        <tr>
          <td>Bara</td>
          <td>24</td>
          <td>Mern</td>
          <td>October</td>
          <td>Edit</td>
        </tr>
        <tr>
          <td>Elent</td>
          <td>24</td>
          <td>Mern</td>
          <td>November</td>
          <td>Edit</td>
        </tr>
       </table>
     </div>
     
    </>
  )
}

export default Student