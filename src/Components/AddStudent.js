import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { StudentContext } from './StudentContext'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const AddStudent = () => {
  const Navigate = useNavigate()
  const { id } = useParams()
  const [addStu, setAddStu] = useState({ name: "", age: "", course: "", batch: "" })
  const [rows, setRows] = useContext(StudentContext)
  var newid = (rows.length + 1).toString()
  const [buttonCond,setbuttoncond]=useState(true)
  


  const handle = (e) => {
    setAddStu({ ...addStu, [e.target.name]: e.target.value, id: newid })
  }


  useEffect(() => {
    rows.forEach((previous) => {
      if (previous.id === id) {
        setAddStu({
          name: previous.name,
          age: previous.age,
          course: previous.course,
          batch: previous.batch
        })
      setbuttoncond(!buttonCond)

        
      }
      
    })


  }, [rows, id ])

  

  const Handlesubmit = () => {

    if (!((addStu.name) && (addStu.age) && (addStu.course) && (addStu.batch))) {
      alert("All fields are mandatory")
      return
    }

    setRows([...rows, addStu])
    Navigate(`/student`)





  }

  const Edit = () => {
    setRows((pre) =>
      pre.map((student) =>
        (student.id === id) ?
          {
            id: id,
            name: addStu.name,
            course: addStu.course,
            age: addStu.age,
            batch: addStu.batch
          } : student

      )
    )
    
    Navigate('/student')

  }


  const cancel = () => {
    Navigate('/student')
  }


  return (
    <div>
      <Box component="form" sx={{ '& > :not(style)': { m: 4, width: '60ch' }, }}
        noValidate
        autoComplete="off">

        <TextField required id="outlined-basic" label="Name" variant="outlined" name='name' value={addStu.name} onChange={handle} />
        <TextField required id="outlined-basic" label="Age" variant="outlined" name='age' value={addStu.age} onChange={handle} />
        <TextField required id="outlined-basic" label="Course" variant="outlined" name='course' value={addStu.course} onChange={handle} />
        <TextField required id="outlined-basic" label="Batch" variant="outlined" name='batch' value={addStu.batch} onChange={handle} />

      </Box>
      {
        buttonCond ?
        <button onClick={Handlesubmit} className='add-btn'> Add Student </button>
        :
        <button onClick={Edit} className='update'> Update </button>
        

      }

      <button className='cancel' onClick={cancel}> Cancel </button> 
    </div>
  )
}

export default AddStudent