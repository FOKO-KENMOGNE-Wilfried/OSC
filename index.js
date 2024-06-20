import restoDB from "./db/datas.js";

// To store the list of resto
const datas = restoDB;

// The logic to display all of the resto of the DB
const resto_grid = document.getElementById("resto_grid_container");
let dataToMap = null;
// console.log(datas)

dataToMap = datas.map((resto) => {
    return `
        <div class="restaurant-grid">
            <div class="restaurant-grid_top">
                <img src="${resto.image}" alt="restaurant_images">
                <div>
                    <p>${resto.category}</p>
                </div>
            </div>
            <div class="restaurant-grid_datas">
                <h2>${resto.name}</h2>
                <p>${resto.description}</p>
            </div>
        </div>
    `
}).join("");

resto_grid.innerHTML = dataToMap;


/**
 *  API usage
 * ... This API just containt the name the and location of the resto
 */

async function fetchDatas(){
    const datas2 =  await fetch("https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/restaurants-casvp/records?limit=20")
    const data2Json = await datas2.json()
    .then((response) => {
        console.log(response);

        let data2ToMap = null;
        data2ToMap = response.results.map((resto) => {
            return `
                <div class="restaurant-grid">
                    <div class="restaurant-grid_top">
                        <img src="./assets/images/home_images.jpg" alt="restaurant_images">
                        <div>
                            <p>location: ${resto.adresse}</p>
                        </div>
                    </div>
                    <div class="restaurant-grid_datas">
                        <h2>${resto.nom_restaurant}</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quasi dignissimos eius corporis perspiciatis, porro optio quia ullam neque cupiditate?</p>
                    </div>
                </div>
            `
        }).join("");

        resto_grid.innerHTML += data2ToMap;
    })
    .catch((err) => {
        console.log(err);
    })
}

fetchDatas();
