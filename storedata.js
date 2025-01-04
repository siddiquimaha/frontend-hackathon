
document.addEventListener("DOMContentLoaded", () => {
    const cartBadge = document.getElementById("cart-badge");
    const shopNowButtons = document.querySelectorAll(".shop-now");

    let cartCount = 0;

    shopNowButtons.forEach(button => {
        button.addEventListener("click", () => {
            cartCount++;
            cartBadge.innerText = cartCount;
        });
    });
});

let cart = [];
let totalPrice = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    totalPrice += price;
    alert(`${item} added to the cart!`);
}
function showModal() {
    const cartModal = document.getElementById("cart-modal");
    const cartItems = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");

    cartItems.innerHTML = "";

    cart.forEach((cartItem) => {
        const itemDiv = document.createElement("div");
        itemDiv.innerText = `${cartItem.item}: $${cartItem.price}`;
        cartItems.appendChild(itemDiv);
    });

    totalPriceElement.innerText = `Total Price: $${totalPrice}`;

    cartModal.style.display = "block";
}

function closeModal() {
    const cartModal = document.getElementById("cart-modal");
    cartModal.style.display = "none";
}

