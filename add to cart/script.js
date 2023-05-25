var cartItems = [];
var total = 0;

function addToCart() {
  var product = {
    name: "Smart Watch",
    price: 19.99,
    name: "Iphone Watch",
    price: 29.99,
    name: "Running Shoe",
    price: 9.99
  };

  cartItems.push(product);
  total += product.price;

  updateCart();
}

function updateCart() {
  var cartItemsElement = document.getElementById("cart-items");
  var cartTotalElement = document.getElementById("cart-total");

  cartItemsElement.innerHTML = "";
  for (var i = 0; i < cartItems.length; i++) {
    var item = cartItems[i];
    var li = document.createElement("li");
    li.innerHTML = item.name + " - $" + item.price;
    cartItemsElement.appendChild(li);
  }

  cartTotalElement.innerHTML = "Total: $" + total.toFixed(2);
}
