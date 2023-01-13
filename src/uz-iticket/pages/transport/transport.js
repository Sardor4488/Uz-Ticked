import React, { useEffect, useState } from 'react'
import TransportWrapper from './transportWrapper';
import { Box, Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faBus, faCalendarAlt, faPlane, faRightLeft, faTrain, faTruckPlane, faX } from '@fortawesome/free-solid-svg-icons';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TransportTrain from './components/transportTrain';
import TransportBus from './components/transportBus';


const Transport = () => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // boolean back to away 
  const [showdate, setShowdate] = useState(true)
  console.log(showdate);
  function showdata() {
    setShowdate(!showdate)

  }
  // boolean back to away 

  // const [countTicket, setCountTicket] = useState(1)

  // const incrementTicket = () => {
  //   setCountTicket(countTicket + 1)
  // }

  // const dickrementTicket = () => {
  //   if (countTicket == 1) {
  //     setCountTicket(countTicket - 0)
  //   } else {
  //     setCountTicket(countTicket - 1)

  //   }
  // }
  // <div className='pasajir'>
  //   <div className='minus' onClick={dickrementTicket}><FontAwesomeIcon icon={faMinus} /></div>
  //   <div className='count-ticket'>{countTicket}</div>
  //   <div className='plus' onClick={incrementTicket}><FontAwesomeIcon icon={faPlus} /></div>
  // </div>

  return (
    <TransportWrapper>
      <div className='transport-section'>
        <div className="container">
          <div className='search_card'>
            <div className="row">
              <div className="col-12 col-lg-6  ">


                <div className="row my-2 pe-1 ">
                  <div className="col-12 col-md-5 px-0 py-0"><input type="text" className='w-100' placeholder='Qayerdan' /></div>
                  <div className="col-12 col-md-2 px-0 py-0  d-flex align-items-center justify-content-center"><FontAwesomeIcon className='search-card-icon c-pointer' icon={faRightLeft} /></div>
                  <div className="col-12 col-md-5 px-0 py-0"><input type="text" className='w-100' placeholder='Qayerga' /></div>
                </div>
              </div>
              <div className="col-12 col-lg-6  ">
                <div className="row my-2">
                  <div className="col-12 col-md-4 px-0 py-0">
                    <input type="date" className='w-100 c-pointer' placeholder='Qayerdan' />
                  </div>
                  <div className="hidden-back-input col-12 col-md-4 px-0 text-center " >
                    <button onClick={showdata} className={`${showdate ? 'd-block c-pointer' : 'd-none'} m-auto btn btn-back mx-1   `}>Qaytish sanasi</button>
                    <div className='w-100 text-center'>
                      <input type="date" className={` ${showdate ? 'd-none' : 'd-block'} choos-back-date ms-1 w-100 c-pointer`} placeholder='Sanani tanlang' />
                      <span onClick={showdata} className={`${showdate ? 'd-none' : 'd-block  c-pointer'} `}> <FontAwesomeIcon icon={faX} /> yopish</span>
                    </div>
                  </div>
                  <div className="col-12 col-md-4 text-center  px-0 py-0">
                    <button className='btn btn-primary '>Chiptalarni qidirish</button>

                  </div>
                </div>
              </div>
            </div>
            <div className='d-flex abab align-items-center'>
              {/* <input type="text" placeholder='Qayerdan' />
              <span className='search_card-icon c-pointer'><FontAwesomeIcon icon={faRightLeft} /></span>
              <input type="text" className='search-card-input' placeholder='Qayerga' /> */}
              {/* <input type="date" className='search-card-input c-pointer' placeholder='Qayerdan' />
              <span onClick={showdata} className={`${showdate ? 'd-block' : 'd-none'}`}>Qaytish sanasi</span>
              <input type="date" className={` ${showdate ? 'd-none' : 'd-block'} search_card-input c-pointer`} placeholder='Qayerdan' />
              <span onClick={showdata} className={`${showdate ? 'd-none' : 'd-block ms-2'}`}> <FontAwesomeIcon icon={faX} /> yopish</span>
              <button className='btn btn-primary ms-3'>Chiptalarni qidirish</button> */}
            </div>
            <div className='countrys m-auto'>
              <span>Toshkent</span>
              <span>Samarqand</span>
              <span>Buxoro</span>
              <span>Xiva</span>
              <span>Urganch</span>
              <span>Nukus</span>
              <span>Navoiy</span>
              <span>Andijon</span>
              <span>Qarshi</span>
              <span>Jizzax</span>
              <span>Termiz</span>
              <span>Guliston</span>  <br className='guliston-br' />
              <span>Qo'qon</span>
              <span>Marg'ilon</span>
              <span>Pop</span>
              <span>Namangan</span>
            </div>
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
                <TabPanel className='TabPanel' value="1">

                  <div className='date-transports my-1'>
                    Poyezdlar
                  </div>
                  <TransportTrain />
                  {/* FOR BUS  START*/}
                  <div className='date-transports my-1'>
                    Avtobuslar
                  </div>
                  <TransportBus />

                </TabPanel>
                <TabPanel value="2">Samalyotlar
                  <div className='date-transports'>
                    < FontAwesomeIcon className='text-dark' icon={faCalendarAlt} /> 04.01.2023
                  </div>
                </TabPanel>
                <TabPanel value="3">
                  <TransportTrain />
                </TabPanel>
                <TabPanel value="4">
                  <TransportBus />
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