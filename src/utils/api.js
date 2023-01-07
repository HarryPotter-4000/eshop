import { ref, set, push, get, child } from "firebase/database";
import { database as db} from './firebase';

const productsRef = ref(db, 'products');

const postProducts = async (product) => {
  return set(push(productsRef), product)
    .then(() => {return '201 Created'})
    .catch((error) => {return error});
}

const getProduct = async (id) => {
  get(child(productsRef, id)).then((snapshot) => {
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return '404 Not found';
    }
  }).catch((error) => {return error});
}

const getProducts = async () => {
  get(productsRef).then((snapshot) => {
    return snapshot.val();
  }).catch((error) => {return error});
}

const api = async (resource, options = {method: 'GET', body: {}}) => {
  if(resource.startsWith('products')){
    if(resource === 'products'){
      if(options.method === 'POST') {
        return postProducts(options.body);
      }
      return getProducts();
    }
    const id = resource.split('/')[1];
    return getProduct(id);
  }
  return "we don't have such resource";
}

export default api;

