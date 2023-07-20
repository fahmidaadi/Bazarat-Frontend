import { Box, Typography } from '@mui/material'
import React from 'react'

function StoreName() {
  var StoreNameColor = "green";
  return (
    <Box display="flex" justifyContent="center">
    <Typography fontSize={50} style={{ color : StoreNameColor}}>Store Name</Typography>
    </Box>
  )
}

export default StoreName