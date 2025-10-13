const output = document.getElementById('output');

function fetchData(callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'data.json', true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      callback(data);
    } else {
      output.textContent = 'Error fetching data.';
    }
  };

  xhr.onerror = function() {
    output.textContent = 'Network error.';
  };

  xhr.send();
}

function fetchMessage() {
  fetchData(data => {
    output.textContent = data.message;
  });
}

function fetchUserName() {
  fetchData(data => {
    output.textContent = `User Name: ${data.user.name}`;
  });
}

function fetchUserEmail() {
  fetchData(data => {
    output.textContent = `Email: ${data.user.email}`;
  });
}

function fetchProductName() {
  fetchData(data => {
    output.textContent = `Product Name: ${data.product.name}`;
  });
}

function checkStock() {
  fetchData(data => {
    const status = data.product.inStock
      ? "Product is in stock"
      : "Product is out of stock";
    output.textContent = status;
  });
}
