import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Stack,
  Paper,
  Typography,
} from '@mui/material';

const AboutForm = ({ about, onUpdate }) => {
  const [formData, setFormData] = useState({ ...about });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'linkedin' || name === 'github') {
      setFormData((prev) => ({
        ...prev,
        social: { ...prev.social, [name]: value }
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <Paper sx={{ p: 3, mb: 4 }} elevation={3}>
      <Typography variant="h6" gutterBottom>
        Edit About
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField label="Name" name="name" value={formData.name} onChange={handleChange} fullWidth />
          <TextField label="Role" name="role" value={formData.role} onChange={handleChange} fullWidth />
          <TextField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            multiline
            rows={3}
            fullWidth
          />
          <TextField label="Resume URL" name="resume" value={formData.resume} onChange={handleChange} fullWidth />
          <TextField label="LinkedIn URL" name="linkedin" value={formData.social.linkedin} onChange={handleChange} fullWidth />
          <TextField label="GitHub URL" name="github" value={formData.social.github} onChange={handleChange} fullWidth />
          <Button type="submit" variant="contained" color="primary">
            Update
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
};

export default AboutForm;
