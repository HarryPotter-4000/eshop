import { ref, set, push, remove } from 'firebase/database';
import { database as db } from './firebase';

const productsRef = ref(db, 'products');
const usersRef = ref(db, 'users');

const postProducts = async (product) => {
  return set(push(productsRef), product)
    .then(() => {
      return '201 Created';
    })
    .catch((error) => {
      return error;
    });
};

const postUsers = async (user) => {
  return set(push(usersRef), user)
    .then(() => {
      return '201 Created';
    })
    .catch((error) => {
      return error;
    });
};

const getOne = async (resource, id) => {
  const product = await fetch(
    `https://eshop-9ddf6-default-rtdb.firebaseio.com/${resource}/${id}.json`
  );
  return await product.json();
};

const deleteProduct = async (id) => {
  const productRef = ref(db, `products/${id}`);
  return remove(productRef)
    .then(() => {
      return '200 Deleted';
    })
    .catch((error) => {
      return error;
    });
};

const getAll = async (resource) => {
  const response = await fetch(
    `https://eshop-9ddf6-default-rtdb.firebaseio.com/${resource}.json`
  );
  const items = await response.json();
  return Object.entries(items).map(([id, item]) => {
    return {
      id,
      ...item,
    };
  });
};

const api = async (resource, options = { method: 'GET', body: {} }) => {
  if (resource.startsWith('products')) {
    if (resource === 'products') {
      if (options.method === 'POST') {
        return postProducts(options.body);
      }
      return getAll('products');
    }
    const id = resource.split('/')[1];
    return getOne('products', id);
  }
  return "we don't have such resource";
};

// get all products : getAll('products')
// get one product : getOne('products', id)
// add product : postProducts(product)

export { getOne, getAll, postProducts, deleteProduct };
