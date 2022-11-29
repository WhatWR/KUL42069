import { KeyboardArrowRight } from '@mui/icons-material'
import { Button, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import DisplayForm from './DisplayForm'
import provinceTran from '../mock/province'
import axios from 'axios'
import DisplayHospital from './DisplayHospital'
import { Chart } from './Chart'


const Form = ({ props }) => {
    const [province, setProvince] = useState('')
    const [err, setaErr] = useState(false)
    const [result, setResult] = useState([])
    const [hospital, setHospital] = useState([])
    const [people, setPeople] = useState([])

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
            axios.get('/api/people').then(response => (response.data)).then((data) => {
                setPeople(data)
                console.log(data)
            })
            people.filter(e => e.PROVINCE === province)

        }
    }


    const handleChange = (event) => {
        setProvince(event.target.value);
    };

    // const getPreple = () => {
    //     const temp = people.filter(e => e.PROVINCE === province)
    //     return temp[0]
    // }

    // console.log(getPreple(,)

    return (
        <Box sx={{ display: 'flex', margin: 10 }}>
            <Box>
                <Box sx={{margin:2}}>
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
                        sx={{ marginTop: 2 }}
                    >
                        Submit
                    </Button>
                </Box>
                {pm25 && <DisplayForm pm={pm25} province={result[0]} />}
            </Box>


            {hospital && <DisplayHospital hospital={hospital} />}
            {/* {people && <Chart people={people[0]} covid={result[0]} />} */}
        </Box>

    )
}

export default Form