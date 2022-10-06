import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import HeaderWrapper from './headerWrapper'

const Header = () => {
    return (
        <HeaderWrapper>
            <header id='header' className='header py-2 px-3 d-flex justify-content-between  align-items-center'>
                <div className=' d-flex align-items-center  '>
                    <img className='logo' src="./Logo-UzTourist.png" alt="" />
                    <h5>Welcome <br/> Uzbekistan</h5>
                </div>
                <div className='d-flex align-items-center'>
                <select class="form-select select-language" id="floatingSelectGrid">
                    <option selected>O'zbek tili</option>
                    <option value="1">русский язык</option>
                    <option value="2">English language</option> 
                </select>
                <Link className='px-1 pe-3 links'>Ma'lumot</Link>
                <Link className='px-1 links'>Kirish</Link>
                <Link className='px-1 links register-link'>Ro'yxatdan o'tish</Link>
                <Link className='px-1 links'>/... <FontAwesomeIcon icon={faRightToBracket} /> </Link>
                </div>
            </header>
        </HeaderWrapper>
    )
}

export default Header