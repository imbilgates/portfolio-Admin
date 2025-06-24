import API from './api';

export const fetchSkills = () => API.get('/skills');
export const addSkill = (data) => API.post('/skills', data);
export const updateSkill = (id, data) => API.put(`/skills/${id}`, data);
export const deleteSkill = (id) => API.delete(`/skills/${id}`);
