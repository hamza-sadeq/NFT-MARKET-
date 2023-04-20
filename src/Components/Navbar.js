import { Box, Container, IconButton } from '@mui/material'
import React, { useState } from 'react'
import '../App.css'
import { links } from './Utils/Constants'
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './Sidebar';

const Navbar = () => {

  const [navbar, setNavbar] = useState(false)

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setNavbar(true)
    }
    else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeColor);

  return (
    <nav className={navbar ? 'nav active' : 'nav'}>
      <Container sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Box display={'flex'} alignItems={'center'}>
          <div>
            <img src='http://gigaland.on3-step.com/img/logo-3.png' />
          </div>
          <Box sx={{
            display: { md: 'block', xs: 'none' }
          }}>
            <input type='text' placeholder='Search item here...' className='searchInput' style={{
              backgroundColor: 'transparent',
              width: '250px',
              border: 'none',
              padding: '6px 15px',
              borderRadius: '50px',
              fontSize: '14px',
              color: 'White',
              background: 'rgba(255, 255, 255, 0.1)',
              marginLeft: '20px'
            }} />
          </Box>
        </Box>
        <div style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <Box sx={{
            display: { md: 'block', xs: 'none' }
          }}>
            {links.map((item, i) => (
              <div class="dropdown-link">
                <a href="#" className='navLink'>{item.LinkName}</a>
                <div class="dropdown-content">
                  <a href="#">Home Page 1</a>
                  <a href="#">Home Page 1</a>
                  <a href="#">Home Page 1</a>
                  <a href="#">Home Page 1</a>
                  <a href="#">Home Page 1</a>
                </div>
              </div>
            ))}
          </Box>
          <div className='ConnectWallet'>
            <a href='#'>Connect Wallet</a>
          </div>
          <Box sx={{
            display: { md: 'none', xs: 'block' }
          }}>
            <IconButton><Sidebar /></IconButton>
          </Box>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar