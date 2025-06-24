import { useState, useEffect } from 'react';
import { fetchAbout, updateAbout } from '../services/aboutService';
import AboutForm from './AboutForm';
import AboutPreview from './AboutPreview';
import { Box, Typography } from '@mui/material';

const About = () => {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAbout()
      .then((res) => {
        setAbout(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching about info:', err);
        setLoading(false);
      });
  }, []);

  const handleUpdate = async (updatedData) => {
    try {
      const res = await updateAbout(updatedData);
      setAbout(res.data);
      alert("About updated successfully!");
    } catch (err) {
      console.error('Update failed:', err);
      alert("Update failed.");
    }
  };

  if (loading) return <Typography>Loading about...</Typography>;
  if (!about) return <Typography>No about data.</Typography>;

  return (
    <Box p={3}>
      <Typography variant="h4" mb={3}>
        About
      </Typography>
      <AboutForm about={about} onUpdate={handleUpdate} />
      <AboutPreview about={about} />
    </Box>
  );
};

export default About;
