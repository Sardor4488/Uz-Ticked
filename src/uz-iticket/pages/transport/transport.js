import React, { useState } from 'react'
import TransportWrapper from './transportWrapper';
import { Box, Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faBus, faCalendarAlt, faMinus, faPlane, faPlus, faRightLeft, faTrain, faTruckPlane } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';


const Transport = () => {
  const [countTicket, setCountTicket] = useState(1)

  const incrementTicket = () => {
    setCountTicket(countTicket + 1)
  }

  const dickrementTicket = () => {
    if (countTicket == 1) {
      setCountTicket(countTicket - 0)
    } else {
      setCountTicket(countTicket - 1)

    }
  }

  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TransportWrapper>
      <div className='transport-section'>
        <div className="container">
          <div className='search_card'>
            <input type="text" placeholder='Qayerdan' />
            <p className='search_card-icon c-pointer'><FontAwesomeIcon  icon={faRightLeft} /></p>
            <input type="text" className='search_card-input' placeholder='Qayerga' />
            <input type="date" className='search_card-input c-pointer' placeholder='Qayerdan' />
            <div className='pasajir'>
              <div className='minus' onClick={dickrementTicket}><FontAwesomeIcon icon={faMinus} /></div>
              <div className='count-ticket'>{countTicket}</div>
              <div className='plus' onClick={incrementTicket}><FontAwesomeIcon icon={faPlus} /></div>
            </div>
            <button className='btn btn-primary ms-3'>Chipta Qidirish</button>
          </div>
          <div className='cont-transports-search'>
            <Box sx={{ width: '100%', typography: 'body1' }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab className='' label={< FontAwesomeIcon icon={faTruckPlane} />} value="1" />
                    <Tab className='' label={< FontAwesomeIcon icon={faPlane} />} value="2" />
                    <Tab className='' label={< FontAwesomeIcon icon={faTrain} />} value="3" />
                    <Tab className='' label={< FontAwesomeIcon icon={faBus} />} value="4" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <div className='date-transports'>
                    < FontAwesomeIcon className='text-dark' icon={faCalendarAlt} /> 04.01.2023
                  </div>
                </TabPanel>
                <TabPanel value="2">Samalyotlar
                  <div className='date-transports'>
                    < FontAwesomeIcon className='text-dark' icon={faCalendarAlt} /> 04.01.2023
                  </div>
                </TabPanel>
                <TabPanel value="3">Poyezdlar
                  <div className='date-transports'>
                    < FontAwesomeIcon className='text-dark' icon={faCalendarAlt} /> 04.01.2023
                  </div>
                </TabPanel>
                <TabPanel value="4">Avtobuslar
                  <div className='date-transports'>
                    < FontAwesomeIcon className='text-dark' icon={faCalendarAlt} /> 04.01.2023
                  </div>
                </TabPanel>
              </TabContext>
            </Box>
          </div>
        </div>
      </div>
    </TransportWrapper>

  )
}

export default Transport;