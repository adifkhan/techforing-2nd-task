import React from 'react';
import Header from '../../components/Header/Header';
import Breadcrumb from './Breadcrumb';
import { Box } from '@mui/material';
import JobPost from './JobPost';
import JobAccordion from './JobAccordion';



const Home = () => {
    return (
        <div>
            <Header/>
           <Breadcrumb/>
           <Box
          sx={{ mx:'auto', my:3, width: '50px', height: '5px', backgroundColor: '#16FF00' }}
        ></Box>
        <JobPost/>
        <JobAccordion/>
        </div>
    );
};

export default Home;