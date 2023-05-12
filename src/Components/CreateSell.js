import { Container, Box, Typography, Grid, Icon } from '@mui/material'
import React from 'react'
import { SellItems } from './Utils/Constants'
import '../App.css'

const CreateSell = () => {

    return (
        <div style={{
            backgroundColor: '#212428'
        }}>
            <Container>
                <Box>
                    <Typography variant='h4' color={'#fff'} marginBottom={'40px'}>
                        Create and Sell Now
                    </Typography>
                </Box>
                <Grid container gap={'20px'}>
                    {
                        SellItems.map((item, i) => (
                            <Grid lg={3.8} md={6} xs={12} key={i} className='gridBox' sx={{
                                transition: 'all .4s ease',
                                boxShadow: '0 0 8px 0 rgba(0,0,0,.3)',
                                padding: '30px',
                                position: 'relative',
                                overflow: 'hidden',
                            }}>
                                <Typography color={'#fff'} padding={'10px'} borderRadius={'7px'} sx={{ backgroundColor: 'rgb(255, 52, 63)' }} display={'inline-block'}>
                                    {item.icon}
                                </Typography>
                                <Typography variant='h6' color={'#fff'} padding={'10px 0'} fontWeight={'600'}>
                                    {item.name}
                                </Typography>
                                <Typography color={'#777'} fontSize={'16px'} className='textEffect' sx={{
                                    cursor: 'default',
                                    transition: 'all .4s ease',
                                }}>
                                    {item.description}
                                </Typography>
                                <Typography position={'absolute'} right={'-60px'} bottom={'-60px'} color={'rgba(255, 52, 63 , 0.2)'} className='iconEffect' sx={{
                                    transition: 'all 1.3s ease',
                                }}>
                                    {item.decoration}
                                </Typography>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </div>
    )
}

export default CreateSell