import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams,Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { StudentContext } from './StudentContext';

const Edit = () => {
    const Navigate = useNavigate()
    const { id } = useParams()
    const [student, setStudent] = useContext(StudentContext)
    const [addStu, setAddStu] = useState({ id: "", name: "", age: "", course: "", batch: "" })

    const handle = (e) => {
        setAddStu({ ...addStu, [e.target.name]: e.target.value })
        console.log(addStu);

    }

    useEffect(() => {
        student.forEach((previous) => {
            if (previous.id === id) {
                setAddStu({
                    name: previous.name,
                    age: previous.age,
                    course: previous.course,
                    batch: previous.batch
                })
            }
        })


    }, [student, id])

    const handleSubmit = () => {
        setStudent((pre) =>
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

    const cancel=()=>{
        Navigate('/student')
    }



    return (
        <div>
            <Box component="form" sx={{ '& > :not(style)': { m: 4, width: '60ch' }, }}
                noValidate
                autoComplete="off"
            >
                <TextField required id="name" label="Name" variant="outlined" name='name' value={addStu.name} onChange={handle} />
                <TextField required id="age" label="Age" variant="outlined" name='age' value={addStu.age} onChange={handle} />
                <TextField required id="course" label="Course" variant="outlined" name='course' value={addStu.course} onChange={handle} />
                <TextField required id="batch" label="Batch" variant="outlined" name='batch' value={addStu.batch} onChange={handle} />

            </Box>
            <button onClick={handleSubmit} className='update'> Update </button>
            <button className='cancel' onClick={cancel}> Cancel </button>

        </div>
    )
}

export default Edit