const cartItems = [
    { id: image1, name: 'Plantain Chicken Burger meal', price: 0 },
    { id: image2, name: 'Fufu with Chicken stew meal', price: 0 },
    // Add more items as needed
];

const cartList = document.getElementById('cart-items');
const billingForm = document.getElementById('billing-form');

function updateCart() {
    cartList.innerHTML = '';
    let totalPrice = 0;

    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(li);
        totalPrice += item.price;
    });

    const totalLi = document.createElement('li');
    totalLi.textContent = `Total: $${totalPrice}`;
    cartList.appendChild(totalLi);
}

updateCart();

billingForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    // Perform further processing, validation, and potentially AJAX requests here

    alert('Order placed successfully!'); // Replace this with actual order processing logic
});
