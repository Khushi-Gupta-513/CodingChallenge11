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

// Handle order submission
placeOrderButton.addEventListener('click', function() {
    const selectedProduct = productSelector.options[productSelector.selectedIndex].text; // Get selected product's name
    const quantity = parseInt(quantityInput.value); // Get the quantity input by the user
    const totalPrice = totalPriceElement.textContent; // Get the current total price displayed

    // Ensure quantity is a valid number (greater than 0)
    if (isNaN(quantity) || quantity < 1) {
        alert("Please enter a valid quantity greater than 0."); // Alert user if quantity is invalid
        return; // Stop function execution if invalid
    }
    
    // Display the order summary
    orderSummary.textContent = `You ordered ${quantity} of ${selectedProduct}. Total price: $${totalPrice}`;
});
