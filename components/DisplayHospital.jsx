import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const DisplayHospital = ({ hospital }) => {
    return (
        <Box sx={{marginLeft:10}}>
            <Typography variant='h3'>Hospital</Typography>
            {hospital.map((e) => {
            return <><Paper variant="outlined" sx={{m:1}}>name: {e.หน่วยงาน} address: {e.ที่อยู่จุดบริการ}</Paper></>
        })}</Box>
    )
}

export default DisplayHospital