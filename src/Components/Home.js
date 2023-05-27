import React from 'react'
import Navbar from './Navbar'
import { Container, Grid, Typography, Button } from '@mui/material'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {

  const Analysis = [
    {
      name: 'Collectibles',
      num: '94215'
    },
    {
      name: 'Auctions',
      num: '27K'
    },
    {
      name: 'NFT Artist',
      num: '4K'
    },
  ]

  return (
    <div className='HomePage'>
      <Navbar />
      <Container>
        <Grid container>
          <Grid item md={6} xs={12} data-aos = 'fade-right' data-offset = '500' data-aos-duration="1000" padding={'100px 0'} sx={{
            textAlign: {md: 'start' , xs: 'center'}
          }}>
            <Typography variant='h6' color={'#ff343f'} fontSize={'18px'}>
              GIGALAND MARKET
            </Typography>
            <Typography variant='h3' color={'#fff'} fontWeight={'700'} margin={'10px 0'} sx={{
              fontSize: {md: '50px' , xs:'35px'}
            }}>
              Create, sell or collect digital items.
            </Typography>
            <Typography variant='h6' color={'#fff'} fontSize={'18px'}>
              Unit of data stored on a digital ledger, called a blockchain, that certifies a digital asset to be unique and therefore not interchangeable
            </Typography>
            <Button variant='contained' sx={{
              backgroundColor: '#ff343f',
              margin: '30px 0',
              borderRadius: '50px',
              fontSize: '13px',
              fontWeight: '600',
              padding: '7px 30px',
              '&:hover': {
                backgroundColor: '#ff343f',
                boxShadow: '0px 2px 30px 0px rgb(255, 52, 63)'
              }
            }}>
              Explore
            </Button>
            <Grid container>
              {
                Analysis.map((item, i) => (
                  <Grid item sm={4} xs={12} sx={{
                    marginBottom: {sm: '0' , xs: '15px'} 
                  }}>
                    <Typography variant='h5' color={'#fff'} marginBottom={'15px'} fontWeight={'600'}>
                      {item.num}
                    </Typography>
                    <Typography variant='h6' fontSize={'16px'} color={'#fff'} fontWeight={'600'}>
                      {item.name}
                    </Typography>
                  </Grid>
                ))
              }
            </Grid>
          </Grid>
          <Grid item md={6} xs={12} data-aos = 'fade-left' data-offset = '500' data-aos-duration="1000" sx={{
            display: {md: 'block' , xs: 'none'}
          }}>
            <div>
              <img src='http://gigaland.on3-step.com/img/misc/women-with-vr.png' style={{
                width: '100%'
              }}/>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Home