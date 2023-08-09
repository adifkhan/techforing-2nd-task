import React from 'react';
import { Box, Stack, TextField, Typography } from '@mui/material';
import breadcrumb from '../../images/breadcrumb.jpg'
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Breadcrumb = () => {
    return (
            <Box sx={{
            height:'400px',
            backgroundImage:`url(${breadcrumb})`,
            backgroundSize:'cover'
           }}>
            <Box sx={{
                pt:20
            }}>
            <Typography variant='h4' sx={{
                color:'white',
                fontWeight:600
            }}>
            WORK AT TECHFORING LIMITED
            </Typography>
            <Typography variant='subtitle1' sx={{
                color:'white'
            }}>
            Turn your passion into a career
            </Typography>
            <Box sx={{
                position:'relative',
                width:'750px',
                mx:'auto',
            }}>
            <TextField id="outlined-basic"  variant="outlined" placeholder='Search by position/level/type/department' sx={{
                backgroundColor:'white',
                width:'100%',
                borderRadius:2
            }}/>
            <SearchIcon sx={{
            position:'absolute',
            top:15,
            right:15,
            fontSize:'25px'
            }}/>
            </Box>
            <Stack direction="row" justifyContent='center' spacing={2} sx={{ mt:2}}>
  <Item>Sales Manager</Item>
  <Item>General Manager</Item>
  <Item>Software Project Manager</Item>
</Stack>
            </Box >
           </Box>
    );
};

export default Breadcrumb;