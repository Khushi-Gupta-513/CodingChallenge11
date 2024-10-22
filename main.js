// Get references to all the HTML elements present 
const productSelector = document.getElementById('product-selector'); // Dropdown menu for the products
const quantityInput = document.getElementById('quantity'); // Input for quantity of items
const totalPriceElement = document.getElementById('total-price'); // Element to display total price of the product
const placeOrderButton = document.getElementById('place-order'); // Button to place the order
const orderSummary = document.getElementById('order-summary'); // Element to display order summary and all related details


// Add event listener for product selection which will call the updateTotalPrice when the product will change
productSelector.addEventListener('change', updateTotalPrice); 

// Add event listener for quantity input to dynamically update total price when the quantity changes
quantityInput.addEventListener('input', updateTotalPrice);
