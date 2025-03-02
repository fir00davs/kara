import React from 'react';
import clock from '../img/clock.png'; 
import not_expensive from '../img/not_expensiv.png';
import price from '../img/price-tag.png';
import sing from '../img/sign.png';

function WhyUs() {
  const services = [
    {
      img: clock,
      title: 'Быстрое обслуживание',
      description: 'Наши погрузчики всегда рядом. Среднее время доставки 2 часа, рекордные 30 минут!'
    },
    {
      img: not_expensive,
      title: 'Недорого',
      description: 'Благодаря нашему автопарку эвакуаторов в разных частях города, мы обеспечиваем привлекательные цены.'
    },
    {
      img: price,
      title: 'Фиксированная цена',
      description: 'Фиксированная стоимость вызова эвакуатора по всему Ташкенту, никаких «сюрпризов» по ​​приезду.'
    },
    {
      img: sing,
      title: 'Комфорт',
      description: 'Любая форма оплаты. Мы работаем круглосуточно. Никаких выходных. Бережная транспортировка.'
    }
  ];

  return (
    <section className="why-us">
      {services.map((service, index) => (
        <div key={index} className="card">
          <img src={service.img} alt={service.title} className="card-img" />
          <h3 className="card-title">{service.title}</h3>
          <p className="card-description">{service.description}</p>
        </div>
      ))}
    </section>
  );
}

export default WhyUs;