import {getElement} from '../utils.js';
import display from '../displayProducts.js';

const setupPrice = (store)=>{
const priceInput = getElement('.price-filter');
const priceValue = getElement('.price-value');
// set up filter
let maxPrice = store.map((product)=> product.price)
maxPrice = Math.max(...maxPrice);
// console.log(maxPrice);
maxPrice= Math.ceil(maxPrice / 100);
priceInput.value = maxPrice;
priceInput.max = maxPrice;
priceInput.min  = 0;
priceValue.textContent = ` value: $${maxPrice}`;

priceInput.addEventListener('input', function(){

    const value = parseInt(priceInput.value);
    // console.log(typeof value);
    priceValue.textContent = ` value:$ ${value}`

    let newStore = store.filter((product)=> product.price / 100 <= value)

    display(newStore,getElement('.products-container'));
    if(newStore.length <1){
        const products = getElement('.products-container');
        products.innerHTML = `<h3 class="filter-error">sorry, no products matched your search`
    }
})

}

export default setupPrice;