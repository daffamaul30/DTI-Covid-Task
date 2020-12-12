export default {
  LOGIN: '/login',
  PRODUCT: (limit, offset, searchKey) => {
    return `/product?limit=${limit}&offset=${offset}&search=${searchKey}`;
  },
  PRODUCTBYID: (id) => {
    return `product/${id}`;
  },
};
