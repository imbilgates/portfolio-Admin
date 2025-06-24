import API from './api';

// Fetch all projects
export const fetchProjects = () => API.get('/projects');

// Add a new project
export const addProject = (data) => API.post('/projects', data);

// Update an existing project
export const updateProject = (id, data) => API.put(`/projects/${id}`, data);

// Delete a project
export const deleteProject = (id) => API.delete(`/projects/${id}`);
