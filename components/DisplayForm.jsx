import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'


const DisplayForm = ({ pm, province }) => {
  return (
    <Box>
      <Card sx={{ width: 200, backgroundColor: 'green' }}>
        <CardContent>
          <Typography variant="h3" component="div">
            Pm25
          </Typography>
          <Typography variant="h5">
            {pm}
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ width: 250, backgroundColor: 'red', marginTop: 5 }}>
        <CardContent>
          <Typography variant="h3" component="div">
            Covid Case
          </Typography>
          <Typography variant="h5">
            total case: {province.total_case} 
          </Typography>
          <Typography variant='h5'>
          new case: {province.new_case}
          </Typography>
        </CardContent>
      </Card>

    </Box>


  )
}

export default DisplayForm