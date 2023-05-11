/// get all add to cart buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
// get cart items list and total price element
const cartItemsList = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');


// add click event listener to each add to cart button
addToCartButtons.forEach((button) => {
  button.addEventListener('click', addToCartClicked);
});

// function to handle add to cart button click event
function addToCartClicked(event) {
  const button = event.target;
  const product = button.parentElement;
  const name = product.querySelector('.product-name').innerText;
  const price = product.querySelector('.product-price').innerText;
  const imageSrc = product.querySelector('img').src;
  const quantity = product.querySelector('.product-quantity').value;
  addItemToCart(name, price, imageSrc, quantity);
}

// function to add item to cart
function addItemToCart(name, price, imageSrc, quantity) {
  const item = {
    name: name,
    price: price,
    imageSrc: imageSrc,
    quantity: quantity
  };
  // add the item to the shopping cart
  shoppingCart.push(item);
  // update cart display
  displayCart();
}

// function to display items in the cart
function displayCart() {
  cartItemsList.innerHTML = '';
  let total = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    const item = shoppingCart[i];
    const itemPrice = parseFloat(item.price.replace('$', ''));
    const itemTotalPrice = itemPrice * item.quantity;
    total += itemTotalPrice;
    const li = document.createElement('li');
    li.innerHTML = `
      <img style="width: 40px;" src="${item.imageSrc}" alt="${item.name}">
      <span class="cart-item-name">${item.name}</span>
      <span class="cart-item-quantity">Quantity: ${item.quantity}</span>
      <span class="cart-item-price">Price: ${item.price}</span>
      <button class="remove-from-cart-btn" id="remove-from-cart" data-index="${i}">Remove</button>
    `;
    cartItemsList.appendChild(li);

    function toremoveitemfromcart(){
      document.getElementById('#remove-from-cart'+i )
.addEventListener('click', function(){
  console.log(this);
  let removeE1 = this.parentNode.parentNode;
  div.removeChild(removeE1)
  i--;
})


  }
  cartTotal.innerText = `total:${total.toFixed(2)}`;
}
    }


// example usage:
const shoppingCart = [];


/*for toggle button does not work yet
i dont know na hahahahahaahahahahah

const toogg = document.getElementsByClassName("toggle-button").ONclick;
const linkx = document.getElementsByClassName("navbar-links").ONclick;

function toggle(){
  if( click = true ){

    document.getElementById("navbar-links").display;


  }
}



*/

