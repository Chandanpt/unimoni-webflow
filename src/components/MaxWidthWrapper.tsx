import { Box } from '@mui/material'
import React, { ReactNode } from 'react'

interface MaxWidthWrapperProps {
    children: ReactNode;
}

const MaxWidthWrapper: React.FC<MaxWidthWrapperProps> = ({children}) => {
  return (
    <Box sx={{maxWidth: "1500px", padding: "100px"}}>
        {children}
    </Box>
  )
}

export default MaxWidthWrapper