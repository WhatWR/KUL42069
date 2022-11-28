import { KeyboardArrowRight } from '@mui/icons-material'
import { Button, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import DisplayForm from './DisplayForm'
import provinceTran from '../mock/province'
import axios from 'axios'
import DisplayHospital from './DisplayHospital'


const Form = ({ props }) => {
    const [province, setProvince] = useState('')
    const [err, setaErr] = useState(false)
    const [result, setResult] = useState([])
    const [hospital, setHospital] = useState([])

    const covids = props

    const [pm25, setPm25] = useState(null)

    const handleSubmit = () => {
        setaErr(false)
        if (province === '') {
            setaErr(true)
        }

        else {
            setResult(covids.filter(e => e.province === province))
            axios
                .get(`https://api.waqi.info/feed/${provinceTran[province]}/?token=d9d8b1d5d5d8e84d32dbbaedb51465b6293bdeb8`)
                .then((response) => response.data)
                .then((data) => {
                    setPm25(data.data.iaqi.pm25.v)
                })
            axios.get('/api/getData').then(response => response.data).then((data) => {
                setHospital(data)
            })

        }
    }

    const handleChange = (event) => {
        setProvince(event.target.value);
    };

    return (
        <Box sx={{ display: 'flex', margin: 10 }}>
            <Box>
                <Typography>Select Province </Typography>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={province[0]}
                    label="province"
                    onChange={handleChange}
                    sx={{ width: 200 }}
                >
                    {Object.keys(provinceTran).map((key) => <MenuItem key={key} value={key}>{key}</MenuItem>)}
                </Select>

                <Button
                    variant="contained"
                    endIcon={<KeyboardArrowRight />}
                    onClick={handleSubmit}
                    sx={{marginLeft:2}}
                >
                    Submit
                </Button>
            </Box>
            {pm25 && <DisplayForm pm={pm25} province={result[0]} />}
            {hospital && <DisplayHospital hospital={hospital}/> }
        </Box>

    )
}

export default Form