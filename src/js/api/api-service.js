import axios from 'axios';

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

export const getReviews = async () => {
  try {
    const response = await axios.get('/reviews/');
    return response.data;
  } catch (error) {
    console.log('Something went wrong with receiving feedback');
    throw error;
  }
};

export const sendContactForm = async data => {
  try {
    const response = await axios.post('/requests/', data);
    return response.data;
  } catch (error) {
    console.log('Something went wrong with posting data');
    throw error;
  }
};
