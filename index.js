let product = [
  {
    card: 1,
    img: "https://i.postimg.cc/j2YjZ748/1.webp",
    heading: "Mackbook Air with M2 (2022)",
    price: "$1049.99",
    prev: "$1199.99",
    text: "CPU: M2 <br> RAM: 8GB > 24GB <br> Storage: 512GB > 2TB <br> Display 13,6-inch IPS display etc ",
  },
  {
    card: 2,
    img: "https://i.postimg.cc/vmWp0TL3/4.webp",
    heading: "HP Spectre x360 14",
    price: "$1550.00",
    prev: "$1699.99",
    text: "CPU: Intel Core i5 1235U > Core i7-1355U <br> Storage: 512GB > 1TB <br> Display: 13.5-inch IPS, 60Hz, 1920 x 1280 / OLED, 3000 x 2000, touch option",
  },
  {
    card: 3,
    img: "https://i.postimg.cc/9Mg1bHSL/3.webp",
    heading: "Asus Zenbook Pro Duo 14",
    price: "$2000.00",
    prev: "$2099.99",
    text: "CPU: Intel Core i9-3900H <br> RAM: 32GB <br> Storage: 512GB > 2TB <br> Display: 14.5-inch OLED, 2880 x 1800, 120Hz",
  },
];

let myProducts = document.querySelector("#testi");
product.forEach((test) => {
  myProducts.innerHTML += `
      <div class="col-12 col-md-4 col-sm-6 mt-3 mb-3">
          <div class="card p-1 bg-color-1">
              <img src="${test.img}" class="" alt="" loading="lazy">
                  <div class="card-img-overlay text-top text-center">
                      <h5 class="card-text">${test.heading}</h>
                  </div>
                  <div class="text-top text-center">
                      <h5>${test.price}</h5> <span class="text-center prev-price-text">${test.prev}</span>
                      <p class="text-center">${test.text}</p>
                  </div>
          </div>
      </div>    
  `;
});
