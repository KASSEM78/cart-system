let tbody = document.querySelector("tbody");

let phoneName = document.querySelector("#phoneName");
let phonePrice = document.querySelector("#phonePrice");
let phoneImg = document.querySelector("#phoneImg");
let phoneBrand = document.querySelector("#phoneBrand");

let showProducts = () => {
  tbody.innerHTML = "";
  products.forEach((el, index) => {
    tbody.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${el.name}</td>
            <td>${el.price}</td>
            <td>
                <img height="50" width="50" src="${el.img}"/>
            </td>
            <td>
                <button class="btn btn-danger">Edit</button>
                <button class="btn btn-primary" onclick="removeProduct(${index})">Remove</button>
            </td>
        </tr>
        `;
  });
};

let addNewProduct = () => {
  let newProduct = {
    name: phoneName.value,
    price: phonePrice.value,
    brand: phoneBrand.value,
    img: phoneImg.value,
  };
  orignalProducts.push(newProduct);
  let productJSON = JSON.stringify(orignalProducts);
  localStorage.setItem("products", productJSON);
  showProducts();
};

let removeProduct = (index) => {
  orignalProducts.splice(index,1)
  let proRemove = JSON.stringify(orignalProducts)
  localStorage.setItem('products',proRemove)
  showProducts();
};

showProducts();
