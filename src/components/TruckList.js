import React from "react";
import img1 from '../img/kara_img1.png';
import img3 from '../img/kara_img3.png';
import img4 from '../img/kara_img4.png';
import img5 from '../img/kara_img5.png';
import img6 from '../img/kara_img6.png';
import img7 from '../img/kara_img7.png';
import img8 from '../img/kara_img8.png';

const trucks = [
  { id: 1, name: "Погрузчик 2 тонн", price: "150,000 UZS/час", details: "Минимальный заказ 4 часа", image: img1 },
  { id: 2, name: "Погрузчик 3 тонн", price: "250,000 UZS/час", details: "Минимальный заказ 4 часа", image: img1 },
  { id: 3, name: "Погрузчик 3.5 тонн", price: "300,000 UZS/час", details: "Минимальный заказ 4 часа", image: img3 },
  { id: 4, name: "Погрузчик 5 тонн", price: "350,000 UZS/час", details: "Минимальный заказ 4 часа", image: img4 },
  { id: 5, name: "Погрузчик 7 тонн", price: "400,000 UZS/час", details: "Минимальный заказ 4 часа", image: img5 },
  { id: 6, name: "Погрузчик 10 тонн", price: "550,000 UZS/час", details: "Минимальный заказ 4 часа", image: img6 },
  { id: 7, name: "Услуги эвакуатора", price: "400,000 UZS/час", details: "Минимальный заказ 4 часа", image: img7 },
  { id: 8, name: "Эвакуатор с подъемом", price: "400,000 UZS/час", details: "Минимальный заказ 4 часа", image: img8 }
];

const TruckCard = ({ truck }) => {
  return (
    <div className="card-karaList">
      <img src={truck.image} alt={truck.name} className="truck-image" />
      <h3 className="kara_title">{truck.name}</h3>
      <p className="kara_price">{truck.price}</p>
      <p className="kara_details">{truck.details}</p>
      <button className="kara_button">Подробнее</button>
    </div>
  );
};

export default function TruckList() {
  return (
    <div id="services" className="container">
      <h2 className="heading">Наши машины</h2>
      <div className="grid-scroll">
        {trucks.map(truck => (
          <TruckCard key={truck.id} truck={truck} />
        ))}
      </div>
    </div>
  );
}