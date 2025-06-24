import { Box, Typography } from '@mui/material';
import ProjectForm from './ProjectForm';
import ProjectPreview from './ProjectPreview';
import {
  fetchProjects,
  addProject,
  updateProject,
  deleteProject,
} from '../services/projectService';
import { useEffect, useState } from 'react';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingProject, setEditingProject] = useState(null);

  useEffect(() => {
    fetchProjects()
      .then((res) => {
        const data = res.data;
        setProjects(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load projects:', err);
        setLoading(false);
      });
  }, []);

  const handleAddOrUpdate = async (data, id) => {
    try {
      if (id) {
        const res = await updateProject(id, data);
        setProjects((prev) =>
          prev.map((p) => (p._id === id ? res.data : p))
        );
        setEditingProject(null);
      } else {
        const res = await addProject(data);
        setProjects((prev) => [...prev, res.data]);
      }
    } catch (err) {
      console.error('Save failed:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProject(id);
      setProjects((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };

  const handleEdit = (project) => setEditingProject(project);
  const handleCancel = () => setEditingProject(null);

  if (loading) return <Typography>Loading projects...</Typography>;

  return (
    <Box p={3}>
      <Typography variant="h4" mb={3}>Projects</Typography>
      <ProjectForm
        onSubmit={handleAddOrUpdate}
        editingProject={editingProject}
        onCancel={handleCancel}
      />
      <ProjectPreview
        projects={projects}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </Box>
  );
};

export default ProjectList;
