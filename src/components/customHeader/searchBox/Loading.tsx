import React from 'react'
import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'
import Grid from '@mui/material/Grid'

export const Loading = () => {
  return (
    <div>
      {new Array(4).fill(null).map((_, i) => (
        <Grid container wrap='nowrap'>
          <Box width='100%' marginRight={2} marginLeft={2} my={5}>
            <Box pt={0.5}>
              <Skeleton variant="rectangular" height={118} />
              <Skeleton />
              <Skeleton width='60%' />
            </Box>
          </Box>
        </Grid>
      ))}
    </div>
  );
}
