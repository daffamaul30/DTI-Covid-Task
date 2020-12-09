import BaseService from './baseService';
import API from '../config/rest';

const product = (limit, offset, searchKey) => {
  return BaseService.get(API.PRODUCT(limit, offset, searchKey));
};

export default { product };
