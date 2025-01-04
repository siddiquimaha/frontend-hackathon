// script for contact form for firebase connection
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
// import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";


// const firebaseConfig = {
//     apiKey: "AIzaSyB-QkJ4x4HrJlmV2xoQZ-3YPI7f0kW8-eM",
//     authDomain: "firsthackathon-6fb25.firebaseapp.com",
//     projectId: "firsthackathon-6fb25",
//     storageBucket: "firsthackathon-6fb25.firebasestorage.app",
//     messagingSenderId: "761124516534",
//     appId: "1:761124516534:web:e6d7db90c0cd770b662c17"
//   };


// const app = initializeApp(firebaseConfig);        
// const database = getDatabase(app);

// let form = document.getElementById("contact-form");
// let modal = document.getElementById("success-modal");
// let closeModalButton = document.getElementById("close-modal");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value; 
//     let message = document.getElementById("message").value; 

//     console.log("Name:", name);
    // modal.style.display = "block";
      // Push data to Firebase
    // push(ref(database, 'contacts'), {
    //   name: name,
    //   email: email,
    //   message: message,
    // }).then(() => {
    //   alert('Message submitted successfully!');
        // modal.style.display = "block";
//       contactForm.reset();
//     }).catch((error) => {
//       console.error("Error writing to Firebase:", error);
//     });

// });

closeModalButton.addEventListener("click", function () {
    modal.style.display = "none";
});

// end for contact pop up
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

