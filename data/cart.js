
export let cart = JSON.parse(localStorage.getItem('cart'))

// if cart is not ...then default cart array
if (!cart) {
    cart = [{
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2,
    }, {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1
    }];
}

calculateCartQuantity();

// to Save to localStorage
function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// const cart = [];


// function to Add to Cart 
export function addToCart(productId) {
    const quantitySelctor = document.querySelector(`.js-quantity-selector-${productId}`);
    let matchingItem;
    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });
    
    // updates the cart quantity and saves to cart array
    const quantity = Number(quantitySelctor.value)

    if (matchingItem) {
        matchingItem.quantity += quantity;
    } else {
        cart.push({
            productId: productId,
            quantity: quantity
        });
    }
    saveToStorage();
}


// to remove the product form cart
export function removeFromCart(productId) {
    const newCart = [];

    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });

    cart = newCart;
    saveToStorage();
}

// calculates the cartQuantity at home Page 
export function calculateCartQuantity() {
    let cartQuantity = 0;
    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });
    return cartQuantity;
}

// function to update the Quantity of each product at Checkout page
export function updateQuantity(productId, newQuantity) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });
    matchingItem.quantity = newQuantity;

    saveToStorage();
}