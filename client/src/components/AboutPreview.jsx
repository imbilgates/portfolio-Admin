import {
  Paper,
  Typography,
  Link,
  Stack,
} from '@mui/material';

const AboutPreview = ({ about }) => {
  return (
    <Paper sx={{ p: 3 }} elevation={2}>
      <Typography variant="h6" gutterBottom>
        Preview
      </Typography>
      <Stack spacing={1}>
        <Typography variant="subtitle1">
          <strong>{about.name}</strong> - {about.role}
        </Typography>
        <Typography>{about.description}</Typography>
        <Link href={about.resume} target="_blank" rel="noreferrer">
          Resume
        </Link>
        <Stack direction="row" spacing={2}>
          <Link href={about.social.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </Link>
          <Link href={about.social.github} target="_blank" rel="noreferrer">
            GitHub
          </Link>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default AboutPreview;
