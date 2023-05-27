import React from 'react'
import { Crypto } from './Utils/Constants'
import { Box, Container, Grid, Stack, Typography } from '@mui/material'
const CryptoCompany = () => {
    return (
        <Stack paddingTop={'50px'} sx={{
            backgroundColor: '#212428'
        }}>
            <Container>
                <Grid container>
                    {
                        Crypto.map((item, i) => (
                            <Grid lg={2} md={4} sm={6} xs={12} key={i} data-aos = {item.aosdata} data-offset = {item.aosoffset} data-aos-duration={item.aosduration}>
                                <Box sx={{
                                    border: '1px solid hsla(0,0%,100%,.1)',
                                    boxShadow: '1px 1px 8px 1px rgba(0,0,0,.1)',
                                    margin: '10px',
                                    background: 'hsla(0,0%,100%,.03)',
                                    padding: '30px 20px',
                                    borderRadius: '20px',
                                    transition: 'all .4s ease',
                                    '&:hover':{
                                        backgroundColor: '#202226'
                                    }
                                }}>
                                    <img src= {item.image} style={{width: '60px' }}/>
                                    <Typography variant='h6' color={'#fff'} fontWeight={'600'} paddingTop={'20px'}>
                                        {item.companyName}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </Stack>
    )
}

export default CryptoCompany