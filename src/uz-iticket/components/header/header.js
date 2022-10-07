import { faBars, faRightToBracket, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeaderWrapper from './headerWrapper'
import uzbFlag from './images/uz.svg'
import rusFlag from './images/ru.svg'
import usaFlag from './images/us.svg'
const Header = () => {
    const [mdnav, setMdnav] = useState(true);
    function hidemd() {
        setMdnav(!mdnav)
    }

    return (
        <HeaderWrapper>
            {/* <div className='shadow-md-nav'></div> */}
            <header id='header' className='header py-2 px-3 d-flex justify-content-between  align-items-center'>
                <div className=' d-flex align-items-center  '>
                    
                    <img className='logo' src="./Logo-UzTourist.png" alt="" />
                    <h5 className='logo-text'>Welcome <br /> Uzbekistan</h5>
                </div>
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
                    <FontAwesomeIcon className='bar-icon d-none' onClick={hidemd} icon={mdnav ? faBars : faXmark} />
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
                </ul>
            </div>
            <div className={` ${mdnav ? 'd-none' : 'shadow-md-nav' } `} onClick={hidemd}></div>
        </HeaderWrapper>
    )
}

export default Header;