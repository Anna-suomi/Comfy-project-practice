
const allProductsUrl =
    'https://course-api.netlify.app/api/javascript-store-products';
    // temp single product
    // https://course-api.netlify.app/api/javascript-store-single-product?id=recmg2a1ctaEJNZhu

const singleProductUrl =
    'https://course-api.netlify.app/api/javascript-store-single-product';


 const getElement =(selection)=>{
     const element = document.querySelector(selection);
     if(element) return element;
     throw new ErrorEvent(
         `please check "${selection}" selector, no such element exist`
     );
 };

const formatPrice = (price)=>{
let formattedPrice = new Intl.NumberFormat ('de-DE', {tyle:'currency',
currency:'EUR'
}).format((price / 100).toFixed(2));
return formattedPrice;
 }

 const getStorageItem =(item)=>{
     let storageItem = localStorage.getItem(item);
     if(storageItem){
         storageItem =JSON.parse(localStorage.getItem(item))
     }else{

         storageItem =[]
     }
 
return storageItem;
 };
 const setStorageItem = (name,item)=>{
     localStorage.setItem(name,JSON.stringify(item))
 };

 export{
     allProductsUrl,
     singleProductUrl,
     getElement,
     getStorageItem,
    setStorageItem,
    formatPrice
     
    
 };