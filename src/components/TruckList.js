import React from 'react';

function TruckList() {
  const trucks = [
    { name: 'Forklift 2 tons', price: '150,000 UZS/hour', order: 'Minimum order of 4 hours' },
    { name: 'Forklift 3 tons', price: '200,000 UZS/hour', order: 'Minimum order of 4 hours' },
    { name: 'Forklift 5 tons', price: '250,000 UZS/hour', order: 'Minimum order of 4 hours' },
    { name: 'Forklift 7 tons', price: '300,000 UZS/hour', order: 'Minimum order of 4 hours' }
  ];

  return (
    <section className="truck-list">
      {trucks.map((truck, index) => (
        <div key={index} className="truck-card">
          <h3>{truck.name}</h3>
          <p>{truck.price}</p>
          <p>{truck.order}</p>
        </div>
      ))}
    </section>
  );
}

export default TruckList;