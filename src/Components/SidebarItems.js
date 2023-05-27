import React from 'react'
import { links } from './Utils/Constants'
import { Stack } from '@mui/material'

const SidebarItems = () => {
  return (
    <Stack padding={'100px 0'} textAlign={'center'}>
      {
        links.map((item, i) => (
          <div key={i} class="dropdown-link">
            <a href={item.toSection} className='navLink'>{item.LinkName}</a>
          </div>
        ))
      }
    </Stack>
  )
}

export default SidebarItems