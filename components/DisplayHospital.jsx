import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const DisplayHospital = ({ hospital }) => {
    console.log(hospital)
    return (
        <Box sx={{marginLeft:10}}>
            <Typography variant='h1'>Hospital</Typography>
            {hospital.map((e) => {
            return <><Typography>name: {e.หน่วยงาน} address: {e.ที่อยู่จุดบริการ}</Typography></>
        })}</Box>
    )
}

export default DisplayHospital