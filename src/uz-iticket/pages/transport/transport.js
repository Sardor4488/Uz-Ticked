import React from 'react'
import TransportWrapper from './transportWrapper'; 
import { Box, Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const Transport = () => {
    const [value, setValue] = React.useState('2');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
  return (
    <TransportWrapper>
      <div className='transport-section'>
        <div class="container">
          <div className='cont-transports-search'>
              <Box sx={{ width: '100%', typography: 'body1' }}>
                  <TabContext value={value}>
                      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                          <TabList onChange={handleChange} aria-label="lab API tabs example">
                              <Tab className='fw-bold' label="Barcha reyslar" value="1" />
                              <Tab className='fw-bold'  label="Samalyotlar" value="2" />
                              <Tab className='fw-bold'  label="Poyezdlar" value="3" />
                              <Tab className='fw-bold'  label="Avtobuslar" value="4" />
                          </TabList>
                      </Box>
                      <TabPanel value="1">Barcha reyslar</TabPanel>
                      <TabPanel value="2">Samalyotlar</TabPanel>
                      <TabPanel value="3">Poyezdlar</TabPanel>
                      <TabPanel value="4">Avtobuslar</TabPanel>
                  </TabContext>
              </Box>
          </div>
        </div>
      </div>
    </TransportWrapper>

  )
}

export default Transport;