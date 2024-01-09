// used to generate fake data
import faker from "faker";



const mount = (elem) => {
    let products = '';

    for(let i = 0; i < 5; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div`;
    }

    elem.innerHTML = products;
};
/**
 * Situation #1
 * We are running in this file in development in isolation
 * We are using our local index.html file 
 * Which DEF has an element with an id of "dev-products"
 * We want to immediately render our app into that element
 */

if (process.env.NODE_ENV === "development") {
    const el = document.querySelector("#dev-products");

    // assuming our container doesn't have an element with
    // id 'dev-products'
    if (el) {
        // we are probably running in isolation
        mount(el);
    }
}

/**
 * Situation #2
 * We are running in this file in development or production
 * Through the container app
 * NO GUARANTEE that an element with id of "dev-products"
 * WE DO NOT WANT try to immediately render the app
 */
// container can import the mount function whenever it wants
export { mount };