import { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Button,
  Stack,
  Paper,
  Typography,
} from '@mui/material';

const SkillForm = ({ onSubmit, editingSkill, onCancel }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    setName(editingSkill?.name || '');
  }, [editingSkill]);

const handleSubmit = (e) => {
  e.preventDefault();
  if (!name.trim()) return;

  const skillData = { name };
  const id = editingSkill?._id;

  onSubmit(skillData, id);  // Pass id separately
  setName('');
};


  return (
    <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" mb={2}>
        {editingSkill ? 'Edit Skill' : 'Add Skill'}
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="Skill Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />
        <Stack direction="row" spacing={2} mt={2}>
          <Button variant="contained" color="primary" type="submit">
            {editingSkill ? 'Update' : 'Add'}
          </Button>
          {editingSkill && (
            <Button variant="outlined" color="error" onClick={onCancel}>
              Cancel
            </Button>
          )}
        </Stack>
      </Box>
    </Paper>
  );
};

export default SkillForm;
