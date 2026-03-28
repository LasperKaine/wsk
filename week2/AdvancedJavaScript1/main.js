import { baseUrl } from './variables.js';
import { fetchData } from './utils.js';
import { restaurantRow, restaurantModal } from './components.js';

const tableBody = document.getElementById('restaurant-table');
const modal = document.getElementById('modal');
modal.addEventListener('click', e => {
  if (e.target.id === 'close-modal') modal.classList.remove('active');
});

const showModal = async (restaurant) => {
  modal.innerHTML = 'Loading...';
  modal.classList.add('active');
  try {
    const menu = await fetchData(
      `${baseUrl}/menus/${restaurant._id}`
    );
    modal.innerHTML = restaurantModal(restaurant, menu);
  } catch (e) {
    modal.innerHTML = `<strong>Error loading menu:</strong> ${e.message}<br/>
      <button id="close-modal">Close</button>`;
  }
};

const renderRestaurants = restaurants => {
  tableBody.innerHTML = '';
  restaurants.forEach(r => {
    const row = restaurantRow(r);
    row.onclick = () => showModal(r);
    tableBody.appendChild(row);
  });
};

const loadRestaurants = async () => {
  try {
    const restaurants = await fetchData(`${baseUrl}/restaurants`);
    renderRestaurants(restaurants);
  } catch (err) {
    tableBody.innerHTML = `<tr><td colspan="2" style="color:red;">${err.message}</td></tr>`;
  }
};

loadRestaurants();