// Imports
import { GET_ALL_CARS_URI } from '../modules/endpoints/endpoints.js';

// Variables
// -- DOM elements
const latestCarsElement = document.querySelector('#latest-cars');

// Funtions
const showCars = async () => {
  let cars = await fetch(GET_ALL_CARS_URI);
  let data = await cars.json();

  console.log(data);

  latestCarsElement.innerHTML = data.reduce((total, item) => {
    total += item.cars.reduce((carsTotal, carsItem) => {
      carsTotal += `
      <div class="car card-shadow" id="${carsItem._id}">
        <h4>${carsItem.make} ${carsItem.model}</h4>
        <p>Year: ${carsItem.year}</p>
        <p>Price: $${carsItem.price.toFixed(2)}</p>
        <p>Seller: ${item.name} ${item.surname}</p>
        <p>Email: ${item.email}</p>
      </div>
      `;

      return carsTotal;
    }, '');
    return total;
  }, '');
};

// Events
document.addEventListener('DOMContentLoaded', showCars);
