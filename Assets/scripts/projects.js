let laptop = [
  {
    card: 1,
    img: "https://i.postimg.cc/PfcsQsTP/01.webp",
    heading: "Asus ROG Zephyrus G14",
    price: "$1000.00",
    prev: "$1650.00",
    text: "CPU: AMD Ryzen 9 6900HS <br> RAM: 8GB <br> Storage: 1TB <br> Display 12,28 x 8,94 x 0.73",
  },
  {
    card: 2,
    img: "https://i.postimg.cc/K8P6b1LM/02.webp",
    heading: "Asus Chromebook Flip CX5",
    price: "$649.00",
    prev: "$700.00",
    text: "CPU: Intel Core i5-113G7 <br> Storage: 128GB <br> Display: 15.6-in IPS, 1920 x 1080, 60Hz 1280",
  },
  {
    card: 3,
    img: "https://i.postimg.cc/x1DwBvkQ/03.jpg",
    heading: "MacBook Pro 16 (2023)",
    price: "$2499.99",
    prev: "$2600.00",
    text: "CPU: M2 Pro > M2 Max <br> RAM: 16GB > 96GB <br> Storage: 512GB > 8TB <br> Display: 14.5-in OLED, 2880 x 1800, 120Hz",
  },
  {
    card: 4,
    img: "https://i.postimg.cc/0QB3nDgL/04.webp",
    heading: "Dell XPS 13",
    price: "$1349.99",
    prev: "$1500.00",
    text: "CPU: Intel Core i7-1250U <br> RAM: 8GB > 23GB <br> Storage: 512GB > 1TB <br> Display: 13.4-in 1920 x 1200, 60Hz, touch option",
  },
  {
    card: 5,
    img: "https://i.postimg.cc/J4Zry4Z1/05.webp",
    heading: "Mackbook Air with M2 (2022)",
    price: "$1049.99",
    prev: "$1199.99",
    text: "CPU: Intel Core i7-1355U <br> RAM: 32GB <br> Storage: 1TB <br> Display 11,66 x 8.52 x 0.43",
  },
  {
    card: 6,
    img: "https://i.postimg.cc/kMkMXtV1/06.webp",
    heading: "Lenovo Chromebook Duet 3",
    price: "$295.00",
    prev: "$430.00",
    text: "CPU: Snapdragon 7c Gen 2 <br> RAM: 4Gb > 8GB  <br> Storage: 128GB <br> Display: 10.95-in IPS, 2000 x 120, 60Hz touch option",
  },
  {
    card: 7,
    img: "https://i.postimg.cc/bY1KX6nv/07.jpg",
    heading: "Microsoft Surface Laptop 5",
    price: "$870.00",
    prev: "$999.99",
    text: "CPU: Intel Core i9-3900H <br> RAM: 32GB <br> Storage: 512GB > 2TB <br> Display: 13.5-in IPS, 2256 x 1504, 60Hz, touch option",
  },
  {
    card: 8,
    img: "https://i.postimg.cc/pV9XHBd5/08.jpg",
    heading: "Razer Blade 16",
    price: "$3600.00",
    prev: "$3900.00",
    text: "CPU:  Intel Core i9-13980HX > Core i9-13950HX <br> RAM: 16GB > 23GB <br> Storage: 1TB <br> Display: 16-in Mini-LED, Dual UHD/FHD+, 120Hz/240Hz",
  },
];

let myLaptops = document.querySelector(".laptops");
laptop.forEach((test) => {
  myLaptops.innerHTML += `
        <div class="col-12 col-md-3 col-sm-6 margin-t">
            <div class="card p-1 bg-color-1">
                <img src="${test.img}" class="card-img-top img-fluid" alt="" loading="lazy" style="height: 200px;">
                    <div class="card-img-overlay text-top text-center">
                        <h5 class="card-text text-h">${test.heading}</h>
                    </div>
                    <div class="text-top text-center">
                        <h5>${test.price}</h5> <span class="text-center prev-price-text">${test.prev}</span>
                        <p class="text-center">${test.text}</p>
                       <div><i class="fa fa-star text-primary"></i><i class="fa fa-star text-primary"></i><i class="fa fa-star text-primary"></i><i class="fa fa-star text-primary"></i><i class="fa fa-star text-muted"></i></div>
                    </div>
            </div>
        </div>    
    `;
});
