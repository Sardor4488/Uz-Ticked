import React from 'react'
import TransportWrapper from './transportWrapper'; 
import { Box, Stack, Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus, faCalendar, faCalendarAlt, faPlane, faTrain, faTruckPlane } from '@fortawesome/free-solid-svg-icons';


const Transport = () => {
    const [value, setValue] = React.useState('1');
     
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
                              <Tab className='' label={< FontAwesomeIcon icon={faTruckPlane} />} value="1" />
                              <Tab className=''  label={< FontAwesomeIcon icon={faPlane}/>} value="2" />
                              <Tab className=''  label={< FontAwesomeIcon icon={faTrain}/>} value="3" />
                              <Tab className=''  label={< FontAwesomeIcon icon={faBus}/>} value="4" />
                          </TabList>
                      </Box>
                      <TabPanel value="1">
                        <div className='date-transports'>
                        < FontAwesomeIcon className='text-dark' icon={faCalendarAlt}/>
                        </div>
                      </TabPanel>
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