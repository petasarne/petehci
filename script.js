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
      <img style="width: 40px; display:flex; " src="${item.imageSrc}" alt="${item.name}">
      <span class="cart-item-name">${item.name}</span>
      <span class="cart-item-quantity">Quantity: ${item.quantity}</span>
      <span class="cart-item-price">${item.price}</span>
         `;

    cartItemsList.appendChild(li);

    function toremoveitemfromcart(){
      document.getElementById('remove-from-cart')
.addEventListener('click', function(){
  console.log(this);
  let removeE1 = this.parentNode.parentNode;
  div.removeChild(removeE1)
  i -= 1;
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

var attemp = 2;
function validate(){
  const username = document.getElementById("username").value;
  const password =document.getElementById("password").value;
  if ( username == "paulamarie"&& password =="cute09" || username == "Peter"&& password =="101"  ){
      location="/home/peter/Documents/final projs/home.html"
      return false;
  }
  else{
      attemp --;
      alert("Seerr you have left only "+attemp+" attemp;");
      if( attemp == 0){
          document.getElementById("username").disable = true;
          document.getElementById("password").disable = true;
          document.getElementById("submit").disable = true;
      }
  }
}

function logout(){
  const logout = document.getElementById("logout").Onclick;
          
  if ( click =true){
      location="./login.html"
      return false;
  }
}
