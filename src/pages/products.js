// global imports

import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';
//  specific imports

import {store} from '../store.js';
import display from '../displayProducts.js';
import {getElement} from '../utils.js';
// filter imports

import setupSearch from '../filter/search.js';
import setupCompanies from '../filter/companies.js';
import setupPrice from'../filter/price.js';

const loading = getElement ('.page-loading');

display(store,getElement('.products-container'));

setupSearch(store);
setupCompanies(store);
setupPrice(store)
loading.style.display = 'none';

