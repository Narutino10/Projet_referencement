let carticon=document.querySelector('#id-cart');
let cartnav=document.querySelector('#id-cartnav');
let cart=document.querySelector('.cart');
let closecart=document.querySelector('#id-close');

carticon.onclick=()=>{
    cart.classList.add("active");
}

closecart.onclick=()=>{
    cart.classList.remove("active");
}

if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
}
else{
    ready();
}

function ready(){
    var removeCartButton = document.getElementsByClassName("cart-remove");
    console.log(removeCartButton);
    for (var i = 0; i<removeCartButton.length;i++){
        var button= removeCartButton[i];
        button.addEventListener('click',removeCartItem);
    }
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < quantityInputs.length;i++){
        var input = quantityInputs[i];
        button.addEventListener('change', quantityChanged);
    }
    var addCart = document.getElementsByClassName("add-cart");
    for (var i = 0; i < addCart.length;i++){
        var button = addCart[i];
        button.addEventListener('click', addCartClicked);
    }
}

function addCartClicked(event){
    var button = event.target;
    var shopProduct = button.parentElement;
    var title = shopProduct.getElementsByClassName('product-box-title')[0].innerText;
    var price = shopProduct.getElementsByClassName('product-price')[0].innerText;
    console.log(title,price);
    
}
function quantityChanged(event){
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0 ){
        input.value = 1;
    }
    updateTotal();
}

function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}

function updateTotal(){
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes= document.getElementsByClassName("cart-box");
    var total=0;
    for (var i = 0; i<cartBoxes.length;i++){
        var cartBox= cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("€",""));
        var quantity = quantityElement.value;
        total = total + price * quantity;
        total= Math.round(total * 100)/100;

        document.getElementsByClassName("total-price")[0].innerText = total + "€";
    }
}