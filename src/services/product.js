import { API } from './API';

export const getAllProducts = async () => {
  try {
    return API.get(`products`);
  } catch (error) {
    return error;
  }
};
