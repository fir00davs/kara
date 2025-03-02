import React from 'react';
import image from '../img/logo_ligin.png'; 

function Login() {
  return (
    <div className="contact_container">
      <img className="col-12 col-lg-6 image-container" src={image} alt="Forklift Rental" />
      <div className="row">
          
        <div className="col-12 col-lg-6 form-container">
          <div className="contact-form">
            <div className="text">Контакт</div>
            <form id="contactForm" className="mt-5">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Имя</label>
                <input placeholder="Сапаев Валибек" type="text" className="form-control" id="name" name="name" />
              </div>
              <div className="form-group mt-5">
                <label htmlFor="phone" className="form-label">Телефон номер</label>
                <input placeholder="+998 (99) 123 45 67" type="tel" className="form-control" id="phone" name="phone" />
              </div>
              <button type="submit" className="btn btn-dark">Отправьть</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;