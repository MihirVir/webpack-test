// import { mount as CartMount } from 'cart/CartShow';
import {mount as prodMount} from "products/ProductsIndex";
import {mount as CartMount} from "cart/CartShow"
console.log("Container! ");

prodMount(document.querySelector("#my-products"));
const cartElement = document.querySelector('.cart');
CartMount(cartElement);
