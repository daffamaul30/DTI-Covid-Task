import BaseService from './baseService';
import API from '../config/rest';

const productById = (id) => {
  return BaseService.get(API.PRODUCTBYID(id));
};

export default { productById };
