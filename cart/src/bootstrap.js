import faker from "faker";

const mount = (el) => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart.</div>`;
  el.innerHTML = cartText;
}

if(process.env.NODE_ENV === 'development') {
  const element = document.querySelector('.dev-cart');
  if(element) {
    mount(element);
  }
}

export { mount };