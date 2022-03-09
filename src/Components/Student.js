import React, { useContext } from 'react'
import { StudentContext } from './StudentContext'
import { NavLink,Link, useNavigate } from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Student = () => {
  const Nav=useNavigate()
   const [rows,setRows] = useContext(StudentContext)
     
   const remove =(index)=>{
      const newList=rows;
    newList.splice(index,1);
    setRows([...newList]);

}
const addBtn=()=>{
  Nav('/addstudent')
}

  return (
    <>
            <div className='flex-students'>
                <span style={{ fontWeight: "bold" }}>Students Details</span>
                <span className='add-student' onClick={addBtn}> Add Students </span>

            </div>
        
            <Table sx={{ maxWidth: 900 }} className="table-main">
        <TableHead >
          <TableRow >
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Course</TableCell>
            <TableCell align="right">Batch</TableCell>
            <TableCell align="right">Change</TableCell>
            <TableCell align="right"></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.course}  </TableCell>
              <TableCell align="right">{row.batch}</TableCell>
              <TableCell align="right"> <Link to={'/student'} style={{textDecoration:"none"}}><i class="fa-solid fa-trash-can" onClick={()=>remove(index)}></i></Link>  </TableCell>
              <TableCell align="right"><NavLink to={`/edit/${row.id}`} style={{textDecoration:"none"}}> <i className="fa fa-pen-to-square"></i> </NavLink></TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>

      </>
  )
}

export default Student