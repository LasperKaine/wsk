// Row for a restaurant table
export const restaurantRow = ({ name, company }) => {
  const tr = document.createElement('tr');
  tr.innerHTML = `<td>${name}</td><td>${company ?? 'Unknown'}</td>`;
  return tr;
};

// Modal content for restaurant & menu
export const restaurantModal = (restaurant, menu) => {
  const {
    name,
    address,
    postalCode,
    city,
    phone,
    company
  } = restaurant;
  const courses = menu?.courses ?? [];
  const menuHtml =
    courses.length
      ? `<ul>${courses.map(
          ({ name, price, diets }) =>
            `<li>${name}, ${price ?? '?€'}. ${diets ?? ''}</li>`
        ).join('')}</ul>`
      : '<p>No menu today.</p>';

  return `
    <h1>${name}</h1>
    <p>${address ?? ''}</p>
    <p>${postalCode ?? ''}, ${city ?? ''}</p>
    <p>${phone ?? ''}</p>
    <p>${company ?? ''}</p>
    ${menuHtml}
    <button id="close-modal">Close</button>
  `;
};