import { faCcMastercard, faCcVisa } from '@fortawesome/free-brands-svg-icons'
import { faArrowAltCircleDown, faBusinessTime, faCreditCard, faHotel, faRocket, faShieldAlt, faStar, faTreeCity, faTruckPlane, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// SWIPER
import React from "react";
import HomeWrapper from './homeWrapper'
import security from './imgs/security.svg'
import n1 from './imgs/n1.svg'
import playMarket from './imgs/google-play-badge-retina.png'
import { Link } from 'react-router-dom'
import img5 from "./imgs/image_2022-10-12_16-41-06.png"
import img6 from "./imgs/image_2022-10-12_16-41-30.png"
import uzcardIcon from "./../../images/uzcard-icon.png"
import homocardIcon from "./../../images/Humo-01.jpg"
const Home = () => {
    return (
        <HomeWrapper>
            <div className='home  py-3'>
                <div className="container">

                    <div className='w-100 row  d-flex align-items-center justify-content-center'>
                        <div className="col-3 col-md-4  my-1 mini-sections  mx-1">
                            <Link className='text-white' to={'/transport'}>
                                <div className='d-flex align-items-center justify-content-center flex-wrap'>
                                    <FontAwesomeIcon className='h1 mb-0' icon={faTruckPlane} />
                                    <span>Transportlar</span>
                                </div>
                            </Link>
                        </div>

                        <div className="   col-3 col-md-4 my-1 mini-sections  mx-1">
                            <Link className='text-white' to={'/hotels'}>
                                <div className='d-flex align-items-center justify-content-center flex-wrap'>
                                    <FontAwesomeIcon className='h1' icon={faHotel} />
                                    <span>Mehmonhona</span>
                                </div>
                            </Link>
                        </div>
                        <div className="  col-3 col-md-4 my-1 mini-sections mx-1 ">
                            <Link className='text-white' to={'/restuarants'}>
                                <div className='d-flex align-items-center justify-content-center flex-wrap'>
                                    <FontAwesomeIcon className='h1' icon={faUtensils} />
                                    <span>Restaran</span>
                                </div>
                            </Link>
                        </div>
                        <div className="  col-3 col-md-4 my-1  mini-sections mx-1 ">
                            <Link className='text-white' to={'/transport'}>
                                <div className='d-flex align-items-center justify-content-center flex-wrap'>
                                    <FontAwesomeIcon className='h1' icon={faTreeCity} />
                                    <span>Sayohat</span>
                                </div>
                            </Link>
                        </div>

                    </div>

                    <div className="row">
                        <div className="text-start d-flex justify-content-start col-12 col-md-12 col-lg-4">
                            <div className='text-white  d-flex justify-content-center align-items-center'>
                                < FontAwesomeIcon icon={faShieldAlt} className="icon  me-2" />
                                <div>
                                    <span className=' border-bottom'>Xavfsiz to'lov</span>
                                    <div>
                                        <img src={uzcardIcon} className="uzcard" alt="" />
                                        <img src={homocardIcon} className="humo ms-1" alt="" />
                                        <FontAwesomeIcon className='fs-5 mx-1' icon={faCcVisa} />
                                        <FontAwesomeIcon className='fs-5 ' icon={faCcMastercard} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-4 d-flex justify-content-center align-items-center text-white">
                            <img src={n1} alt="rasm topilmadi" />
                            <div>
                                <span>Uz-ticket.uz - O'zbekistonning sayyohlik <br /> chiptalar xizmatlari № 1</span>
                            </div>
                        </div>
                        <div className=" text-whitecol-12 col-md-12 col-lg-4 d-flex justify-content-end">
                            <Link to={'#'} className='text-white'>
                                <img className='playMarketImg' src={playMarket} alt="rasm topilmadi" />
                                <br /> <span>UzTicket mobil ilovasi</span>
                            </Link><div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* SUDJET PAGE */}
            <section id='sudjete' className='container_sudjete' >
                <div>
                    <h1 className='h1_text '>UzTicket syudjetlar</h1>
                    <div className='otzivi'>
                        <h1 className='h1_text'>Онлайн билеты для вашего путешествия с Туту.ру!</h1>
                        <p> Ежедневно Туту.ру посещают 1 млн человек. Вот за что любят наш сервис:</p>
                        <div className='row pt-5'>
                            <div className='col-12 col-sm-12 col-md-4 col-lg-2'>
                                <FontAwesomeIcon icon={faStar} className="icon star" />
                                <h6>Baholar reytingi</h6>
                                <p className='p_text'>Xarid qilishdan oldin siz yo'lovchilar reytingi asosida tashuvchi transport reytingini ko'rishingiz, batafsil sharhlarni o'qishingiz va shu orqali eng yaxshi reysni tanlashingiz mumkin.</p>
                            </div>
                            <div className='col-12 col-sm-12 col-md-4 col-lg-2'>
                                <FontAwesomeIcon icon={faCreditCard} className="icon credit-card" />
                                <h6>Tez va onlayn xarid</h6>
                                <p className='p_text'>Barcha turdagi xizmatlarni osongina buyurtma berish va bank kartalari orqali onlayn to'lash imkonini beradi.</p>
                            </div>
                            <div className='col-12 col-sm-12 col-md-4 col-lg-2'>
                                < FontAwesomeIcon icon={faShieldAlt} className="icon security" />
                                <h6>Xavfsiz to'lov</h6>
                                <p className='p_text'>Uz-ticket.uz orqali xizmatlardan foydalanish va chiptalarni xarid qilish xavfsizdir. Barcha ma'lumotlar, jumladan, passport va bank kartasi ma'lumotlari so'nggi xavfsizlik standartlariga muvofiq himoyalangan.</p>
                            </div>
                            <div className='col-12 col-sm-12 col-md-4 col-lg-2'>
                                < FontAwesomeIcon icon={faArrowAltCircleDown} />
                                <h6>Onlayn qaytib oling</h6>
                                <p className='p_text'>Перед покупкой можно посмотреть рейтинг перевозчика на основе оценок пассажиров, прочитать подробные отзывы и таким образом выбрать лучший рейс.</p>
                            </div>
                            <div className='col-12 col-sm-12 col-md-4 col-lg-2'>
                                <img src={img5} alt="" />
                                <h6>24/7 qo'llab-quvvatlash</h6>
                                <p className='p_text'>24 soatlik aloqa markazi xariddan oldin va keyin bepul maslahalar beradi. Qo'llab quvattalash markazi orqali xizmatlarni aloqa vaqtida shaxsingizni tasdiqlash orqali xodimlar tomonidan xizmat va chiptalarni onlayn band qilish imkonini beradi.</p>
                            </div>
                            <div className='col-12 col-sm-12 col-md-4 col-lg-2'>
                                <img src={img6} alt="" />
                                <h6>Mobil ilovalar</h6>
                                <p className='p_text'>Telfoningizdan Uz-ticket.uz xizmatlaridan foydalanish juda qulay. Ilovalarimizni yuklab oling. APP Store yoki Google play.</p>
                            </div>
                        </div>
                    </div>
                    <div className='ul_list row'>
                        <div className='col-6 col-sm-6 col-md-4 col-lg-2'>
                            <h6>Aviabiletlar</h6>
                            <ul>
                                <li><p className='text_little'>Популярные направления</p></li>
                                <li><Link><p className='links'>авиабилеты из Москвы</p></Link></li>
                                {/* <li><Link><p className='links'>авиабилеты из Санкт-Петербурга</p></Link></li> */}
                                <li><p className='text_little mt-4'>Популярные аэропорты</p></li>
                                <li><Link><p className='links'>Шереметьево</p></Link></li>
                                <li><Link><p className='links'>Домодедово</p></Link></li>
                                <li><Link><p className='links'>Внуково</p></Link></li>
                                <li><Link><p className='links'>Пулково</p></Link></li>
                                <li><Link><p className='links_1 mt-4'>Все аэропорты</p></Link></li>
                                <li><Link><p className='links_1'>Авиакомпании</p></Link></li>
                                <li><Link><p className='links_1'>Самолеты</p></Link></li>
                            </ul>
                        </div>
                        <div className='col-6 col-sm-6 col-md-4 col-lg-2'>
                            <h6>Poyezdlar</h6>
                            <ul>
                                <li><p className='text_little'>Популярные направления</p></li>
                                <li><Link><p className='links'>авиабилеты из Москвы</p></Link></li>
                                {/* <li><Link><p className='links'>авиабилеты из Санкт-Петербурга</p></Link></li> */}
                                <li><p className='text_little mt-4'>Популярные аэропорты</p></li>
                                <li><Link><p className='links'>Шереметьево</p></Link></li>
                                <li><Link><p className='links'>Домодедово</p></Link></li>
                                <li><Link><p className='links'>Внуково</p></Link></li>
                                <li><Link><p className='links'>Пулково</p></Link></li>
                                <li><Link><p className='links_1 mt-4'>Все аэропорты</p></Link></li>
                                <li><Link><p className='links_1'>Авиакомпании</p></Link></li>
                                <li><Link><p className='links_1'>Самолеты</p></Link></li>
                            </ul>
                        </div>
                        <div className='col-6 col-sm-6 col-md-4 col-lg-2'>
                            <h6>Avtobuslar</h6>
                            <ul>
                                <li><p className='text_little'>Популярные направления</p></li>
                                <li><Link><p className='links'>авиабилеты из Москвы</p></Link></li>
                                {/* <li><Link><p className='links'>авиабилеты из Санкт-Петербурга</p></Link></li> */}
                                <li><p className='text_little mt-4'>Популярные аэропорты</p></li>
                                <li><Link><p className='links'>Шереметьево</p></Link></li>
                                <li><Link><p className='links'>Домодедово</p></Link></li>
                                <li><Link><p className='links'>Внуково</p></Link></li>
                                <li><Link><p className='links'>Пулково</p></Link></li>
                                <li><Link><p className='links_1 mt-4'>Все аэропорты</p></Link></li>
                                <li><Link><p className='links_1'>Авиакомпании</p></Link></li>
                                <li><Link><p className='links_1'>Самолеты</p></Link></li>
                            </ul>
                        </div>
                        <div className='col-6 col-sm-6 col-md-4 col-lg-2'>
                            <h6>Elektrik-poyezd</h6>
                            <ul>
                                <li><p className='text_little'>Популярные направления</p></li>
                                <li><Link><p className='links'>авиабилеты из Москвы</p></Link></li>
                                {/* <li><Link><p className='links'>авиабилеты из Санкт-Петербурга</p></Link></li> */}
                                <li><p className='text_little mt-4'>Популярные аэропорты</p></li>
                                <li><Link><p className='links'>Шереметьево</p></Link></li>
                                <li><Link><p className='links'>Домодедово</p></Link></li>
                                <li><Link><p className='links'>Внуково</p></Link></li>
                                <li><Link><p className='links'>Пулково</p></Link></li>
                                <li><Link><p className='links_1 mt-4'>Все аэропорты</p></Link></li>
                                <li><Link><p className='links_1'>Авиакомпании</p></Link></li>
                                <li><Link><p className='links_1'>Самолеты</p></Link></li>
                            </ul>
                        </div>
                        <div className='col-6 col-sm-6 col-md-4 col-lg-2'>
                            <h6>Turlar</h6>
                            <ul>
                                <li><p className='text_little'>Популярные направления</p></li>
                                <li><Link><p className='links'>авиабилеты из Москвы</p></Link></li>
                                {/* <li><Link><p className='links'>авиабилеты из Санкт-Петербурга</p></Link></li> */}
                                <li><p className='text_little mt-4'>Популярные аэропорты</p></li>
                                <li><Link><p className='links'>Шереметьево</p></Link></li>
                                <li><Link><p className='links'>Домодедово</p></Link></li>
                                <li><Link><p className='links'>Внуково</p></Link></li>
                                <li><Link><p className='links'>Пулково</p></Link></li>
                                <li><Link><p className='links_1 mt-4'>Все аэропорты</p></Link></li>
                                <li><Link><p className='links_1'>Авиакомпании</p></Link></li>
                                <li><Link><p className='links_1'>Самолеты</p></Link></li>
                            </ul>
                        </div>
                        <div className='col-6 col-sm-6 col-md-4 col-lg-2'>
                            <h6>Mehmonhonalar</h6>
                            <ul>
                                <li><p className='text_little'>Популярные направления</p></li>
                                <li><Link><p className='links'>авиабилеты из Москвы</p></Link></li>
                                {/* <li><Link><p className='links'>авиабилеты из Санкт-Петербурга</p></Link></li> */}
                                <li><p className='text_little mt-4'>Популярные аэропорты</p></li>
                                <li><Link><p className='links'>Шереметьево</p></Link></li>
                                <li><Link><p className='links'>Домодедово</p></Link></li>
                                <li><Link><p className='links'>Внуково</p></Link></li>
                                <li><Link><p className='links'>Пулково</p></Link></li>
                                <li><Link><p className='links_1 mt-4'>Все аэропорты</p></Link></li>
                                <li><Link><p className='links_1'>Авиакомпании</p></Link></li>
                                <li><Link><p className='links_1'>Самолеты</p></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </HomeWrapper>
    )
}

export default Home;