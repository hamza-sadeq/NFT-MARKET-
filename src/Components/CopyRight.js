import { Container, Stack, Typography } from '@mui/material'
import React from 'react'

const CopyRight = () => {
    return (
        <Stack padding={'20px'} sx={{ backgroundColor: '#202020' }}>
            <Container>
                <div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <img src='https://gigaland.on3-step.com/img/logo-3.png' style={{
                        width: '30px'
                    }} />
                    <Typography margin={'0 30px'} color={'#777'} sx={{
                        fontSize: { md: '18px', xs: '13px' }
                    }}>
                        © Copyright 2021 - Gigaland by Designesia
                    </Typography>
                </div>
            </Container>
        </Stack>
    )
}

export default CopyRight