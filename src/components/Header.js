import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons';
import logo from '../img/kara_logo.png'; 
import ru from '../img/russia.png';
import eng from '../img/eng.png';
import uzb from '../img/uzb.png';


const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="header">
            <img src={logo} alt="logo" className="header-logo" />
            <nav className="nav">
                <ul className="nav-list">
                    <li><a href="#main" className="nav-link">Главная</a></li>
                    <li><a href="#services" className="nav-link">Услуги</a></li>
                    <li><a href="#reviews" className="nav-link">Отзывы</a></li>
                    <li><a href="#contact" className="nav-link">Контакты</a></li>
                </ul>
            </nav>
            <div className="header-right">
                <div className="phone">
                    <div>
                        <FontAwesomeIcon icon={faPhone} className="text-success" />
                    </div>
                    <a href="tel:+998998688080" className="number">+998(99)-868-80-80</a>
                </div>

                {/* Language Dropdown */}
                <div id="language" className="language dropdown">
                    <button className="language-selector" type="button" id="languageDropdown" onClick={toggleDropdown} aria-expanded={isDropdownOpen} style={{ width: '130px', height: '50px' }}>
                        <FontAwesomeIcon icon={faGlobe} />
                        Язык
                    </button>
                    {isDropdownOpen && (
                        <ul className="dropdown-menu" aria-labelledby="languageDropdown">
                            <li>
                                <a className="dropdown-item" href="/index-eng">
                                    <img src={eng} width="30" height="30" alt="ENG" />
                                    ENG
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="/">
                                    <img src={ru} width="30" height="30" alt="RU" />
                                    RU
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="/index-uzb">
                                    <img src={uzb} width="30" height="30" alt="UZB" />
                                    UZB
                                </a>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;