import React from 'react'
 import TransportWrapper from '../transportWrapper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faBus, faCalendarAlt, faPlane, faRightLeft, faTrain, faTruckPlane, faX } from '@fortawesome/free-solid-svg-icons';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const TransportBus = () => {
    return (
        <TransportWrapper>
            <Table striped className='direction-pc'>
                <thead>
                    <tr className=''>
                        <th>Avtobuslar</th>
                        <th>Ketish</th>
                        <th>Yetib kelish</th>
                        <th>Sayohat vaqti</th>
                        <th>Joylar turi</th>
                        <th>Joylar soni</th>
                        <th>Narxi</th>
                        <th>Tanlash</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='name-transport' scope="row">
                            <span className='train'>Zhong Tong 51</span><br />
                            <span className='place'>Toshkent</span>
                            <FontAwesomeIcon className='mx-1 from-to' icon={faArrowRightLong} />
                            <span className='place'>Buxoro</span>
                        </td>
                        <td className='transport-away-time'><span className='fw-bold'>07:28</span> <br />
                            <span className='from-to'>Qashqadaryoga</span>
                        </td>
                        <td className='transport-away-time'><span className='fw-bold'>07:28</span>
                            <br />
                            <span className='from-to'>Qashqadaryoga</span></td>
                        <td><span>_____</span></td>
                        <td>
                            <span>O'rindiqli</span>
                        </td>
                        <td>
                            <span>8</span>
                        </td>
                        <td><span className='fw-bold'>75000</span> so'm</td>
                        <td>
                            <Link to={'/choos-train'} >
                                <button className='btn btn-primary py-1'>Yo'nalishni <br /> tanlash</button>
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </Table>
            {/* FOR PHONE VERSION BUS START*/}
            <div className="card direction-phone p-2 py-3 my-2 m-auto">

                <div className='d-flex justify-content-between align-items-center'>
                    <span>Avtobus</span>
                    <div>
                        <span className='train'>Zhong Tong 51</span><br />
                        <span className='place-direction'>Toshkent</span>
                        <FontAwesomeIcon className='mx-1 from-to' icon={faArrowRightLong} />
                        <span className='place-direction'>Buxoro</span>
                    </div>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <span>Ketish</span>
                    <span className='transport-away-time'>
                        <span className='fw-bold'>7:44</span> <br />
                        <span className='from-to'>Qashqadaryoga</span>
                    </span>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <span>Yetib kelish</span>
                    <span className='transport-away-time'>
                        <span className='fw-bold'>8:55</span>
                        <br />
                        <span className='from-to'>Qashqadaryoga</span>
                    </span>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <span>Sayohat vaqti</span>
                    <span>___</span>
                </div>
                <div className='d-flex justify-content-between align-items-center '>
                    <span>Плацкартный</span>
                    <span>100</span>
                    <span>110000 so'm</span>
                </div>
                <Link to={'/choos-train'} className="text-end"><button className='btn btn-primary py-1 mt-2'>Yo'nalishni tanlash</button></Link>
            </div>
            {/* FOR PHONE VERSION BUS END*/}
            {/* FOR BUS  END*/}


        </TransportWrapper>
    )
}

export default TransportBus