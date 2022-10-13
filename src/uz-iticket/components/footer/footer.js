import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FooterWrapper from './footerWrapper'

const Footer = () => {
    return (
        <FooterWrapper>

            {/* Start on Footer */}

            <footer>
                <div className='container'>
                    <Link to={"#"} className='link_one'>UzTicket</Link>
                    <div className='row mt-3'>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-3'>
                            <ul>
                                <li className='my-2'><Link className='links link_footer' to={"#"}>Qayta aloqa</Link></li>
                                <li className='my-2'><Link className='links link_footer' to={"#"}>Ma'lumot</Link></li>
                                <li className='my-2'><Link className='links link_footer' to={"#"}>So'rov natijalari</Link></li>
                            </ul>
                        </div>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-3'>
                            <ul>
                                <li className='my-2'><Link className='links footer_link' to={"#"}>Sheriklik dasturi</Link></li>
                                <li className='my-2'><Link className='links footer_link' to={"#"}>Sodiqlik dasturi</Link></li>
                                <li className='my-2'><Link className='links footer_link' to={"#"}>Sovg'a sertifikatlari</Link></li>
                                <li className='my-2'><Link className='links footer_link' to={"#"}>Huquqiy ma'lumotlar</Link></li>
                            </ul>
                        </div>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-3'>
                            <ul>
                                <li className='my-2'><Link className='links link_footer' to={"#"}>Kompaniya haqida</Link></li>
                                <li className='my-2'><Link className='links link_footer' to={"#"}>Bizning bo'sh ish o'rinlarimiz</Link></li>
                                <li className='my-2'><Link className='links link_footer' to={"#"}>Mamlakat yo'riqnomasi</Link></li>
                            </ul>
                        </div>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-3 d-flex'>
                            <ul>
                                <li className='my-2'><Link className='links link_footer' to={"#"}>UzTicket saytida reklama</Link></li>
                                <li className='my-2'><Link className='links link_footer' to={"#"}>Ish safari chiptalari</Link></li>
                                <li className='my-2'><Link className='links link_footer' to={"#"}>Kontaktlar</Link></li>
                            </ul>
                            <div className='d-grid footer_card ms-5'>
                                <p>Qo'shilish:</p>
                                <div className='mt-3'>
                                    <img className='footer_img-2' src="https://cdn1.tu-tu.ru/images2/avia/app_badges/app-store-badge-retina.png" alt="" />
                                    <img className='footer_img-2' src="https://cdn1.tu-tu.ru/images2/avia/app_badges/google-play-badge-retina.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>

            {/* End on Footer */}

        </FooterWrapper>
    )
}

export default Footer;