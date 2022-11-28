import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'


const DisplayForm = ({ pm, province }) => {
  return (
    <div>
      <Card sx={{ width: 100, backgroundColor: 'green' }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Pm25
          </Typography>
          <Typography variant="body2">
            {pm}
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ width: 200, backgroundColor: 'red', marginTop: 5 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Covid Case
          </Typography>
          <Typography variant="body2">
            total case: {province.total_case} 
          </Typography>
          <Typography variant='body2'>
          new case: {province.new_case}
          </Typography>
        </CardContent>
      </Card>

    </div>


  )
}

export default DisplayForm