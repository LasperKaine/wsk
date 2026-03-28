import { baseUrl } from './variables.js';
import { fetchData } from './utils.js';
import { restaurantRow, restaurantModal } from './components.js';

const tableBody = document.getElementById('restaurant-table');
const modal = document.getElementById('modal');
const errorMsg = document.getElementById('error-msg');
const boxSodexo = document.getElementById('filter-sodexo');
const boxCompass = document.getElementById('filter-compass');
const resetBtn = document.getElementById('reset');

let allRestaurants = [];

const renderRestaurants = restaurants => {
  tableBody.innerHTML = '';
  if (!restaurants.length) {
    tableBody.innerHTML = '<tr><td colspan="2">No restaurants match filter.</td></tr>';
    return;
  }
  restaurants.map(r => {
    const row = restaurantRow(r);
    row.onclick = () => showModal(r);
    tableBody.appendChild(row);
  });
};

const getFiltered = () => allRestaurants.filter(r =>
  (boxSodexo.checked && r.company === 'Sodexo') ||
  (boxCompass.checked && r.company === 'Compass')
);

const showModal = async restaurant => {
  modal.innerHTML = 'Loading...';
  modal.classList.add('active');
  try {
    const menu = await fetchData(`${baseUrl}/menus/${restaurant._id}`);
    modal.innerHTML = restaurantModal(restaurant, menu);
  } catch (err) {
    modal.innerHTML = `<strong>Error loading menu:</strong> ${err.message}<br>
      <button id="close-modal">Close</button>`;
  }
};

modal.addEventListener('click', e => {
  if (e.target.id === 'close-modal') modal.classList.remove('active');
});

[boxSodexo, boxCompass].forEach(box =>
  box.addEventListener('change', () => renderRestaurants(getFiltered()))
);

resetBtn.onclick = () => {
  boxSodexo.checked = true;
  boxCompass.checked = true;
  renderRestaurants(allRestaurants);
};

const loadRestaurants = async () => {
  try {
    allRestaurants = await fetchData(`${baseUrl}/restaurants`);
    renderRestaurants(getFiltered());
  } catch (err) {
    errorMsg.textContent = `Failed to load restaurants: ${err.message}`;
  }
};

loadRestaurants();