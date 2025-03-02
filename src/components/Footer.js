import React from "react";
import logo from "../img/kara_logo.png";
import instagram from "../img/instagram.png";
import youtube from "../img/youtube.png";
import telegram from "../img/telegram.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Логотип */}
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        {/* Навигация */}
        <nav>
          <ul className="nav-links">
            <li><a href="#main">Главная</a></li>
            <li><a href="#services">Услуги</a></li>
            <li><a href="#reviews">Отзыв</a></li>
            <li><a href="#contact">Контакт</a></li>
          </ul>
        </nav>

        {/* Контакты и соцсети */}
        <div className="contact">
          <p className="phone">+998(99)-868-80-80</p>
          <div className="social-icons">
            <a href="#"><img src={telegram} alt="Telegram" /></a>
            <a href="#"><img src={youtube} alt="YouTube" /></a>
            <a href="#"><img src={instagram} alt="Instagram" /></a>
          </div>
        </div>
      </div>

      {/* Копирайт */}
      <p className="copyright">© Copyright 2024. All rights reserved</p>
    </footer>
  );
};

export default Footer;
