import React from 'react';
import kara_main from '../img/kara_main.png';

function Main() {
    return (
        <section id="main" className="main">
            <div className="div-main">
                <h2 className="main-title">Автосервисы в Ташкенте</h2>
                <p className="main-description">Предоставляем аренду погрузчика с водителем.</p>
                <ul className="description">
                    <li>Отправьте в <span className='bold'>день заказа</span></li>
                    <li>Мы работаем <span className='bold'>24 часа в сутки</span></li>
                    <li>Форма оплаты <span className='bold'>любая</span></li>
                </ul>
            </div> 
             <img src={kara_main} alt="kara main" className="main-img" />
        </section>
    );
}

export default Main;