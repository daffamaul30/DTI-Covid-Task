import BaseService from './baseService';
import API from '../config/rest';

const product = () => {
  return BaseService.get(API.PRODUCT);
};

export default { product };
