import { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Button,
  Stack,
  Paper,
  Typography,
} from '@mui/material';

const ProjectForm = ({ onSubmit, editingProject, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    stack: '',
    sourceCode: '',
    livePreview: '',
  });

  useEffect(() => {
    if (editingProject) {
      setFormData({
        ...editingProject,
        stack: editingProject.stack.join(', ')
      });
    } else {
      setFormData({
        name: '',
        description: '',
        stack: '',
        sourceCode: '',
        livePreview: '',
      });
    }
  }, [editingProject]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSend = {
      ...formData,
      stack: formData.stack.split(',').map((s) => s.trim())
    };
    onSubmit(dataToSend, editingProject?._id);
  };

  return (
    <Paper sx={{ p: 3, mb: 4 }} elevation={3}>
      <Typography variant="h6" gutterBottom>
        {editingProject ? 'Edit Project' : 'Add Project'}
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField name="name" label="Project Name" value={formData.name} onChange={handleChange} fullWidth />
          <TextField name="description" label="Description" value={formData.description} onChange={handleChange} multiline rows={2} fullWidth />
          <TextField name="stack" label="Stack (comma-separated)" value={formData.stack} onChange={handleChange} fullWidth />
          <TextField name="sourceCode" label="Source Code URL" value={formData.sourceCode} onChange={handleChange} fullWidth />
          <TextField name="livePreview" label="Live Preview URL" value={formData.livePreview} onChange={handleChange} fullWidth />
          <Stack direction="row" spacing={2}>
            <Button variant="contained" color="primary" type="submit">
              {editingProject ? 'Update' : 'Add'}
            </Button>
            {editingProject && (
              <Button variant="outlined" color="error" onClick={onCancel}>
                Cancel
              </Button>
            )}
          </Stack>
        </Stack>
      </Box>
    </Paper>
  );
};

export default ProjectForm;
