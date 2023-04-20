import React from 'react'
import { links } from './Utils/Constants'
import { Stack } from '@mui/material'

const SidebarItems = () => {
  return (
    <Stack display={'flex'} flexDirection={'column'} alignItems={'center'} padding={'100px 0'}>
      {
        links.map((item, i) => (
          <div key={i} class="dropdown-link">
            <a href="#" className='navLink'>{item.LinkName}</a>
            <div class="dropdown-content">
              <a href="#">Home Page 1</a>
              <a href="#">Home Page 1</a>
              <a href="#">Home Page 1</a>
              <a href="#">Home Page 1</a>
              <a href="#">Home Page 1</a>
            </div>
          </div>
        ))
      }
    </Stack>
  )
}

export default SidebarItems