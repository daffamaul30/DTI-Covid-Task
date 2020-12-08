export default {
  LOGIN: '/login',
  PRODUCT: (limit, searchKey) => {
    return `/product?limit=${limit}&offset=0&search=${searchKey}`;
  },
};
