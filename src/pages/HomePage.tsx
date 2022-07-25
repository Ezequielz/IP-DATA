import { useContext, useState } from "react";
import { Box, Button, CircularProgress, Grid, Popover, TextField, Typography } from "@mui/material"
import { useForm } from 'react-hook-form';

import { DataContext } from "../context/data";
import { ShowData } from "../components/showData";
import { getIpLocal } from "../helper/fetch";
import { IPLocalResponse } from '../interfaces/iplocal';
import { LoadingButton } from "@mui/lab";
import { Footer } from "../components/layout";




type FormData = {
    ip : string
}

const HomePage = () => {
  
  const  { data, getData } = useContext( DataContext )
// console.log(data.ip)
const [buttonDisabled, setButtonDisabled] = useState<boolean>(false)
const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
const [ipLocal, setIpLocal] = useState<IPLocalResponse | undefined>(undefined)

const handleClick = async(event: React.MouseEvent<HTMLButtonElement>) => {
  setAnchorEl(event.currentTarget);
  const ip = await getIpLocal()
  setIpLocal( ip )
  
};
const handleClose = () => {
  setAnchorEl(null);
};
const open = Boolean(anchorEl);
const id = open ? 'simple-popover' : undefined;
// const [data, setData] = useState<IPResponse | null>(null)

const { register, handleSubmit, formState: { errors } } = useForm<FormData>();


const onSendIp = async( {ip} : FormData ) => {

  setButtonDisabled(true)


  await getData( ip )
  
  // setData( ipDataSearch ) 

  setButtonDisabled(false)
}

// console.log(data)
  return (
    <> 
        <Box sx={{ padding: '50px' }} >
  
      { !data.ip 
        ? (
          <>
            <Box sx={{ textAlign: 'center' }} >Buscar información de una IP</Box>

            <Box>
              <form onSubmit={ handleSubmit( onSendIp ) } >
                  <TextField
                      sx={{ marginTop: 2 , marginBottom: 1 }}
                      type="text"
                      fullWidth
                      // placeholder="Ingrese IP"
                      autoFocus
                      multiline
                      label="Ingrese IP"
                      // helperText='Por ej: 54.85.132.205' 
                      { ...register('ip', {
                          required: 'Debe introducir un IP válido, Por ej: 54.85.132.205',
                          // pattern: { value: /^[0-9]*(\.?)[0-9]+$/, message: 'Debe introducir solo números y puntos'},
                          
                      })}
                      error={ !!errors.ip }
                      helperText = { errors.ip?.message }
                  />

               { !buttonDisabled
                 ? (
                    <Box  >
                      <Grid container spacing={2} display="flex" justifyContent='space-between'>
                        <Grid item xs={12} sm={4} lg={3}>
                          <Button 
                              variant="contained" 
                              type="submit"
                              disabled={ buttonDisabled }
                              fullWidth
                              size="large"
                          >
                              Buscar
                          </Button>
                        </Grid>

                        <Grid item xs={12} sm={5} lg={3}>
                          <Button 
                            aria-describedby={id} 
                            variant="outlined" 
                            onClick={handleClick}
                            fullWidth
                            size="large"
                          >
                            Cual es mi ip?
                          </Button>
                          <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                              vertical: 'bottom',
                              horizontal: 'left',
                            }}
                          >
                            <Typography sx={{ p: 2 }}> {ipLocal?.ip ?ipLocal?.ip : <LoadingButton /> } </Typography>
                          </Popover>
                        </Grid>

                      </Grid>

                     
                    </Box>
                  
                 )
                 : <CircularProgress />
               }  

              </form>

            </Box>
          </>
        ) 
        : (
          <ShowData  />

        )
      }
      
      

        </Box>
                   
        <Footer />
    </>

  )
}

export default HomePage