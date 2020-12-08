import BaseService from './baseService';
import API from '../config/rest';

const product = (limit, searchKey) => {
  return BaseService.get(API.PRODUCT(limit, searchKey));
};

export default { product };
