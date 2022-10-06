import React from 'react'
import HeaderWrapper from './headerWrapper'

const Header = () => {
    return (
        <HeaderWrapper>
            <header id='header' className='header p-2'>
                <div className=' d-flex align-items-center  '>
                    <img className='logo' src="./Logo-UzTourist.png" alt="" />
                    <h5>Welcome Uzbekistan</h5>
                </div>
            </header>
        </HeaderWrapper>
    )
}

export default Header