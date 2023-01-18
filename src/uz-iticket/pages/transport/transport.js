import React from 'react'
import TransportWrapper from './transportWrapper';
import { Box, Button, Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus, faPlane, faTrain, faTruckPlane } from '@fortawesome/free-solid-svg-icons';

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
                    <Tab className='fw-bold' label={<FontAwesomeIcon icon={faTruckPlane} className='faTra' />} value="1" />
                    <Tab className='fw-bold' label={<FontAwesomeIcon icon={faPlane} className='faTra' />} value="2" />
                    <Tab className='fw-bold' label={<FontAwesomeIcon icon={faTrain} className='faTra' />} value="3" />
                    <Tab className='fw-bold' label={<FontAwesomeIcon icon={faBus} className='faTra' />} value="4" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <div className='context'>
                    <div className='btns'>
                      <Button className='activ'>item 1</Button>
                      <Button className='activ'>item 2</Button>
                      <Button className='activ'> item 3</Button>
                    </div>
                    <div>
                    </div>
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