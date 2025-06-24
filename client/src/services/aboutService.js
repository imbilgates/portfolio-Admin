import API from './api';

export const fetchAbout = () => API.get('/about');
export const updateAbout = (data) => API.post('/about', data);
