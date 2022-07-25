import { Box, Link, Typography } from '@mui/material'
import React from 'react'

export const Footer = () => {
  return (
    <Box position='absolute' bottom='0' height='100px' sx={{ backgroundColor: 'primary.main', width: '100%' }} >
        <Typography textAlign='center' padding='20px' color='white'>
        © Desarrollado por
            <Link href="https://www.ezequiel-zapata.online/" target='_blank' color="inherit" variant="body2" underline="hover"> Ezequiel Zapata</Link>
        </Typography>
    </Box>
  )
}
