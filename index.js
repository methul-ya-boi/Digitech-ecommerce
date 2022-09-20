let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

cartIcon.onclick = () => { 
    cart.classList.toggle("cartActive");
    console.log('cart active')
}

closeCart.onclick = () => {
    cart.classList.remove('cartActive');
    console.log('cart has closed');
}

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready();
}

function ready() {
    var removeCartButtons = document.getElementsByClassName('bx-checkbox-minus');
    console.log(removeCartButtons);
    for (var i = 0;  i <removeCartButtons.length; i++){
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }
    var addCart = document.getElementsByClassName('trade-button')
    for (var i = 0; i < addCart.length; i++) {
        var button = addCart[i];
        button.addEventListener('click', addCartClicked);
    }
    document.getElementsByClassName('btn-trade')[0].addEventListener('click', tradeButtonClicked);
}

function tradeButtonClicked(){
    alert('The book owners have been notified of your interest');
    var cartContent = document.getElementsByClassName('cart-content')[0]
    while (cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild)
    }
}

function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}

function updatetotal() {
    var cartContent = document.getElementsByClassName("cart-content")[0]
    var cartBox = cartContent.getElementsByClassName("cart-box")
    var total = 0
    for (var i = 0; i < cartBox.length; i++){
        var cartBoxes = cartBox[i]
        var priceElement = cartBox.getElementsByClassName("cart-price")[0]
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0]
        var quantity = quantityElement.value

    }
}

function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, productImg);

}

function addProductToCart(title, productImg) {
    var cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-box')
    var cartItems = document.getElementsByClassName('cart-content')[0]
    var cartItemsNames = cartItems.getElementsByClassName('cart-product-title')
    for (var i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText == title) {
            alert('You have already added this item to cart');
            return;
        }
    }

    var cartBoxContent = `
        <img src="${productImg}" alt="" class="img-cart">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
        </div>
        <i class='bx bx-checkbox-minus' id="minus"></i>`;

    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox.getElementsByClassName("bx-checkbox-minus")[0].addEventListener("click", removeCartItem);
}
