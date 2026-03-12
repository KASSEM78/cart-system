// let orignalProducts = [
//   { name: 'iPhone x', price: 450, brand: 'Apple', img: 'https://m.media-amazon.com/images/I/61PSKJ9k8HL._AC_SY879_.jpg' },
//   { name: 'iPhone 12', price: 550, brand: 'Apple', img: 'https://m.media-amazon.com/images/I/61Xp1Bk4nIL._AC_SX679_.jpg' },
//   { name: 'iPhone 14', price: 650, brand: 'Apple', img: 'https://i.ebayimg.com/images/g/pKkAAeSwMDlpHIzB/s-l1600.webp' },
//   { name: 'iPhone 17 Pro Max', price: 1200, brand: 'Apple', img: 'https://m.media-amazon.com/images/I/61yXZ6sG6GL._AC_SX679_.jpg' },
//   { name: 'Samsung S24', price: 800, brand: 'Samsung', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd80n8jwER_jb5HQnkbOuIROOkyEBOWRlCRA&s' },
//   { name: 'Samsung S25', price: 900, brand: 'Samsung', img: 'https://images.samsung.com/nz/smartphones/galaxy-s25-ultra/buy/product_color_silverBlue_PC.png' },
//   { name: 'Samsung S26', price: 1200, brand: 'Samsung', img: 'https://pimcdn.sharafdg.com/cdn-cgi/image/width=600,height=600,fit=pad,format=webp,quality=70/images/samsung_galaxys26ultra_cobaltviolet_1?1772615768?g=0' },
// ];


// let originalProductsJSON = JSON.stringify(orignalProducts);
// localStorage.setItem('products', originalProductsJSON);

let orignalProductsJSON = localStorage.getItem('products');
let orignalProducts = JSON.parse(orignalProductsJSON);

let products = orignalProducts;
let cart = [];