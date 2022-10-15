import { faBars, faRightToBracket, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HeaderWrapper from './headerWrapper'
import uzbFlag from './images/uz.svg'
import rusFlag from './images/ru.svg'
import usaFlag from './images/us.svg'
import iconBar from './images/bar.png'
import iconClose from './images/close.png'
const Header = () => {

    
    const [mdnav, setMdnav] = useState(true);
    function hidemd() {
        setMdnav(!mdnav)
    }

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

    return (
        <HeaderWrapper>
            {/* <div className='shadow-md-nav'></div> */}
            <header className={` ${scrollPosition > 70 ? "bg-white  " : ""}header py-2 px-3 d-flex justify-content-between  align-items-center`}>
                <Link to={'/'}>
                    <div className=' d-flex align-items-center  '>

                        <img className='logo' src="./Logo-UzTourist.png" alt="" />
                        <h5 className='logo-text'>UzTicket</h5>
                    </div></Link>
                <div className='d-flex align-items-center'>
                    <select class="form-select select-language  d-none-md" id="floatingSelectGrid">
                        <option selected> <img src={uzbFlag} alt="" /> O'zbek tili</option>
                        <option value="1"> <img src={rusFlag} alt="" /> русский язык</option>
                        <option value="2"> <img src={usaFlag} alt="" /> English language</option>
                    </select>
                    <Link className='px-1 px-3 links d-none-md '>Ma'lumot</Link>
                    <Link className='px-1 links'>Kirish</Link>
                    <Link className='px-1 links register-link'>Ro'yxatdan o'tish</Link>
                    <Link className='px-1 links'>/... <FontAwesomeIcon icon={faRightToBracket} /> </Link>
                    <img onClick={hidemd} className='bar-icon' src={mdnav ? iconBar : iconClose} alt="" />
                </div>
            </header>
            <div className={`${mdnav ? 'd-none-nav' : 'd-block-nav'} md-nav`}>
                <ul>
                    <li>
                        <Link className='text-decoration-none' to={""}>Bonuslar</Link>
                    </li>
                    <li><Link className='text-decoration-none' to={""}>Buyurtmalar</Link></li>
                    <li><Link className='text-decoration-none' to={""}>Qo'llanma</Link></li>
                    <li><Link className='text-decoration-none' to={""}>Aviabilet</Link></li>
                    <li><Link className='text-decoration-none' to={""}>Poyezd</Link></li>
                    <li><Link className='text-decoration-none' to={""}>Avtobus</Link></li>
                    <li><Link className='text-decoration-none' to={""}>Taxi</Link></li>
                    <li><Link className='text-decoration-none' to={""}>Mehmonxonalar</Link></li>
                    <li><Link className='text-decoration-none' to={""}>Oshxonalar</Link></li>
                    <li><Link className='text-decoration-none' to={""}>Mashhur joylar</Link></li>
                    <li><Link className='text-decoration-none' to={""}>Akaunt nomi <FontAwesomeIcon className='ms-2' icon={faRightToBracket} /></Link></li>
                    <li> <select class="form-select select-language   w-100" id="floatingSelectGrid">
                        <option selected> <img src={uzbFlag} alt="" /> O'zbek tili</option>
                        <option value="1"> <img src={rusFlag} alt="" /> русский язык</option>
                        <option value="2"> <img src={usaFlag} alt="" /> English language</option>
                    </select>
                    </li>
                </ul>
            </div>
            <div className={` ${mdnav ? 'd-none' : 'shadow-md-nav'} `} onClick={hidemd}></div>
        </HeaderWrapper>
    )
}

export default Header;