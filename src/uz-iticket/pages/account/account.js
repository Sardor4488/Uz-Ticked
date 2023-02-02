import React from 'react'
import AccountWrapper from './accountWrapper'
import backImg from "./img/backimg.png";
import frontImg from "./img/frontImg.jpg";

const Account = () => {
    return (
        <AccountWrapper>
            <div>
                <div className='back-img'>
                    <div className="container">
                        <input type="checkbox" id="flip" />
                        <div className="cover">
                            <div className="front">
                                <img className='img' src={backImg} alt="" />
                                <div className="text">
                                    <span className="text-1">Every new friend is a <br /> new adventure</span>
                                    <span className="text-2">Let's get connected</span>
                                </div>
                            </div>
                            <div className="back">
                                <img className="backImg" src={backImg} alt="" />
                                <div className="text">
                                    <span className="text-1">Complete miles of journey <br /> with one step</span>
                                    <span className="text-2">Let's get started</span>
                                </div>
                            </div>
                        </div>
                        <div className="forms">
                            <div className="form-content">
                                <div className="login-form">
                                    <div className="title">Kirish</div>
                                    <form action="#">
                                        <div classNAme="input-boxes">
                                            <div className="input-box">
                                                <i className="fas fa-envelope"></i>
                                                <input type="text" placeholder="Emailingizni kiriting" required />
                                            </div>
                                            <div className="input-box">
                                                <i className="fas fa-lock"></i>
                                                <input type="password" placeholder="Parol kiriting" required />
                                            </div>
                                            <div className="text"><a href="#">Parol esdan chiqdimi?</a></div>
                                            <div className="button input-box">
                                                <input type="submit" value="Kirish" />
                                            </div>
                                            <div className="text sign-up-text">Akkauntingiz yo'qmi? <label for="flip">Ro'yxatdan o'tish</label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="signup-form">
                                    <div className="title">Ro'yxatdan o'tish</div>
                                    <form action="#">
                                        <div className="input-boxes">
                                            <div className="input-box">
                                                <i className="fas fa-user"></i>
                                                <input type="text" placeholder="Ismingizni kiriting" required />
                                            </div>
                                            <div className="input-box">
                                                <i className="fas fa-envelope"></i>
                                                <input type="text" placeholder="Emailingizni kiriting" required />
                                            </div>
                                            <div className="input-box">
                                                <i className="fas fa-lock"></i>
                                                <input type="password" placeholder="Parol kiriting" required />
                                            </div>
                                            <div className="button input-box">
                                                <input type="submit" value="Ro'yxatdan o'tish" />
                                            </div>
                                            <div className="text sign-up-text">Akkauntingiz bormi? <label for="flip">Kirish</label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
        </AccountWrapper>
    )
}

export default Account;