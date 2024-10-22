// Get references to all the HTML elements present 
const productSelector = document.getElementById('product-selector'); // Dropdown menu for the products
const quantityInput = document.getElementById('quantity'); // Input for quantity of items
const totalPriceElement = document.getElementById('total-price'); // Element to display total price of the product
const placeOrderButton = document.getElementById('place-order'); // Button to place the order
const orderSummary = document.getElementById('order-summary'); // Element to display order summary and all related details

// Function to calculate and update the total price of the purchase
function updateTotalPrice() {
    const productPrice = parseFloat(productSelector.value); // Get the price of the selected product and choose the quantity
    const quantity = parseInt(quantityInput.value); 
    
    // Validate quantity and ensure it is greater than 0 
    if (isNaN(quantity) || quantity < 1) {
        totalPriceElement.textContent = '0.00'; // Display $0.00 if quantity is invalid
        return; // Exit the function if quantity is invalid and return
    }
    
    const totalPrice = productPrice * quantity; // Calculate the total price by multiplying the price and quantity
    totalPriceElement.textContent = totalPrice.toFixed(2); // This will update the displayed total price to match the calculated
}

// Add event listener for product selection which will call the updateTotalPrice when the product will change
productSelector.addEventListener('change', updateTotalPrice); 

// Add event listener for quantity input to dynamically update total price when the quantity changes
quantityInput.addEventListener('input', updateTotalPrice);
