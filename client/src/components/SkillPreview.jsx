import {
  Paper,
  Typography,
  Stack,
  IconButton,
  Box,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const SkillPreview = ({ skills, onDelete, onEdit }) => {
  return (
    <Stack spacing={2}>
      {skills.map((skill) => (
        <Paper
          key={skill._id}
          elevation={1}
          sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Typography>{skill.name}</Typography>
          <Box>
            <IconButton onClick={() => onEdit(skill)} color="primary">
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => onDelete(skill._id)} color="error">
              <DeleteIcon />
            </IconButton>
          </Box>
        </Paper>
      ))}
    </Stack>
  );
};

export default SkillPreview;
