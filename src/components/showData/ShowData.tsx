import { useContext } from "react"
import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';


import { DataContext } from "../../context/data";




export const ShowData= () => {
  
  const  { data,removeData } = useContext( DataContext )
console.log(data)
  return (
    <>
   {/* 186.22.54.108 */}
        <Button variant="contained" onClick={ removeData }>Buscar otra ip</Button>
        <Box sx={{ mt: 2 , mb: 2}} textAlign='center' >ip = {data.ip} </Box>
        <Card >
          <CardContent  >
          <Grid container spacing={0}>
            <Grid item xs={12} sm={3}>
              <CardMedia 
                component='img'
                // className="fadeIn"
                image={ data.location?.country.flag.noto }
                alt={ data.location?.country.flag.emoji }
                sx={{ width: 100 }}
              />
            </Grid>
            <Grid item xs={12} sm={9}>
           
             <Typography>
              Continente: {data.location?.continent.name}
             </Typography>

             <Typography>
              Pais: {data.location?.country.name}
             </Typography>

             <Typography>
              Region: {data.location?.region.name}
             </Typography>

             <Typography>
              Ciudad: {data.location?.city}
             </Typography>

             <Typography>
              Lenguaje nativo: {data.location?.language.native}
             </Typography>

             <Typography>
              Latitud: {data.location?.latitude}
             </Typography>

             <Typography>
              Longitud: {data.location?.longitude}
             </Typography>

             <Typography>
              Postal: {data.location?.postal}
             </Typography>

             <Typography>
              Dominio: {data.connection?.domain}
             </Typography>

            </Grid>

          </Grid>
          </CardContent>

        </Card>


    </>
  )
}
