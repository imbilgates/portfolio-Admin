import {
  Paper,
  Typography,
  IconButton,
  Box,
  Stack,
  Link,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ProjectPreview = ({ projects, onEdit, onDelete }) => {
  return (
    <Stack spacing={2}>
      {projects.map((project) => (
        <Paper key={project._id} sx={{ p: 2 }} elevation={1}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box>
              <Typography variant="subtitle1" fontWeight="bold">
                {project.name}
              </Typography>
              <Typography variant="body2">{project.description}</Typography>
              <Typography variant="caption" color="text.secondary">
                Stack: {project.stack.join(', ')}
              </Typography>
              <br />
              <Link href={project.sourceCode} target="_blank" rel="noopener" underline="hover" mr={2}>
                Source
              </Link>
              <Link href={project.livePreview} target="_blank" rel="noopener" underline="hover">
                Live
              </Link>
            </Box>
            <Box>
              <IconButton color="primary" onClick={() => onEdit(project)}>
                <EditIcon />
              </IconButton>
              <IconButton color="error" onClick={() => onDelete(project._id)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          </Box>
        </Paper>
      ))}
    </Stack>
  );
};

export default ProjectPreview;
