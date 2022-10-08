import { faCcMastercard, faCcVisa, faGooglePay } from '@fortawesome/free-brands-svg-icons'
import { faBed, faBusinessTime, faCreditCard, faHotel, faPlaneDeparture, faRocket, faShieldHalved, faTrain, faTreeCity, faTruckPlane, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import HomeWrapper from './homeWrapper'
import security from './imgs/security.svg'
import n1 from './imgs/n1.svg'
import playMarket from './imgs/google-play-badge-retina.png'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <HomeWrapper>
            <div className='home  py-3'>
                <div className="container">
                    <div className='w-100 row  d-flex align-items-center justify-content-center'>
                        <div className="col-3 col-md-4  my-1 mini-sections  mx-1">
                            <div className='d-flex align-items-center justify-content-center flex-wrap'>
                                <FontAwesomeIcon className='h1 mb-0' icon={faTruckPlane} />
                                <span>Transportlar</span>
                            </div></div>
                        <div className="  col-3 col-md-4 my-1  mini-sections mx-1 ">
                            <div className='d-flex align-items-center justify-content-center flex-wrap'>
                                <FontAwesomeIcon className='h1' icon={faTreeCity} />
                                <span>Sayohat</span>
                            </div>
                        </div>
                        <div className="   col-3 col-md-4 my-1 mini-sections  mx-1">
                            <div className='d-flex align-items-center justify-content-center flex-wrap'>
                                <FontAwesomeIcon className='h1' icon={faHotel} />
                                <span>Mehmonhona</span>
                            </div>
                        </div>
                        <div className="  col-3 col-md-4 my-1 mini-sections mx-1 ">
                            <div className='d-flex align-items-center justify-content-center flex-wrap'>
                                <FontAwesomeIcon className='h1' icon={faUtensils} />
                                <span>Restaran</span>
                            </div>
                        </div>
                        <div className="  col-3 col-md-4 my-1 mini-sections mx-1 ">
                            <div className='d-flex align-items-center justify-content-center flex-wrap'>
                                <FontAwesomeIcon className='h1' icon={faRocket} />
                                <span>Sarguzasht</span>
                            </div>
                        </div>
                        <div className="  col-3 col-md-4 my-1 mini-sections mx-1 ">
                            <div className='d-flex align-items-center justify-content-center flex-wrap'>
                                <FontAwesomeIcon className='h1' icon={faBusinessTime} />
                                <span>Ish Safari</span>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="text-start d-flex justify-content-start col-12 col-md-12 col-lg-4">
                            <div className='text-white  d-flex justify-content-center align-items-center'>
                                <img src={security} className='me-2' alt="rasm topilmadi" />
                                <div>
                                    <span className=' border-bottom'>Xavfsiz to'lov</span>
                                    <div>
                                        <FontAwesomeIcon className='fs-5 mx-1' icon={faCreditCard} />
                                        <FontAwesomeIcon className='fs-5 mx-1' icon={faCcVisa} />
                                        <FontAwesomeIcon className='fs-5 mx-1' icon={faCcMastercard} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-12 col-lg-4 d-flex justify-content-center align-items-center text-white">
                            <img src={n1} alt="rasm topilmadi" />
                            <div>
                                <span>UzTicked.uz — O'zbekistondagi yagona <br /> online transport platformasi</span>
                            </div>
                        </div>
                        <div class=" text-whitecol-12 col-md-12 col-lg-4 d-flex justify-content-end">
                            <Link to={''} className='text-white'>
                                <img className='playMarketImg' src={playMarket} alt="rasm topilmadi" />
                                <br /> <span>UzTicket mobil ilovasi</span>
                            </Link><div> 
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </HomeWrapper>
    )
}

export default Home