import axios from 'axios';

// Получить все товары
export const getAllProducts = async () => {
  const response = await axios.get('/api/products'); // работает с proxy
  return response.data;
};

// Создать товар
export const createProduct = async (productData) => {
  const response = await axios.post('/api/products', productData);
  return response.data;
};

// Обновить товар
export const updateProduct = async (id, productData) => {
  const response = await axios.put(`/api/products/${id}`, productData);
  return response.data;
};

// Удалить товар
export const deleteProduct = async (id) => {
  const response = await axios.delete(`/api/products/${id}`);
  return response.data;
};
