const output = document.getElementById('output');


function fetchData() {
  return fetch('data.json')
    .then(response => response.json())
    .catch(() => {
      output.textContent = 'Error fetching data.';
    });
}

function fetchMessage() {
  fetchData().then(data => {
    output.textContent = data.message;
  });
}
function fetchUserName() {
  fetchData().then(data => {
    output.textContent = `User Name: ${data.user.name}`;
  });
}
function fetchUserEmail() {
  fetchData().then(data => {
    output.textContent = `Email: ${data.user.email}`;
  });
}
function fetchProductName() {
  fetchData().then(data => {
    output.textContent = `Product Name: ${data.product.name}`;
  });
}
function checkStock() {
  fetchData().then(data => {
    const status = data.product.inStock
      ? "Product is in stock"
      : "Product is out of stock";
    output.textContent = status;
  });
}
