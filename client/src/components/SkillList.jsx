import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import SkillForm from './SkillForm';
import SkillPreview from './SkillPreview';
import {
  fetchSkills,
  addSkill,
  updateSkill,
  deleteSkill,
} from '../services/skillService';

const SkillList = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingSkill, setEditingSkill] = useState(null);

  useEffect(() => {
    fetchSkills()
      .then((res) => {
        const data = res.data;
        if (Array.isArray(data)) {
          setSkills(data);
        } else if (Array.isArray(data.skills)) {
          setSkills(data.skills);
        } else {
          setSkills([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load skills:', err);
        setLoading(false);
      });
  }, []);

  const handleAddOrUpdate = async (data, id) => {
    try {
      if (id) {
        const res = await updateSkill(id, data);
        setSkills((prev) =>
          prev.map((s) => (s._id === id ? res.data : s))
        );
        setEditingSkill(null);
      } else {
        const res = await addSkill(data);
        setSkills((prev) => [...prev, res.data]);
      }
    } catch (err) {
      console.error('Save failed:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteSkill(id);
      setSkills((prev) => prev.filter((s) => s._id !== id));
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };

  const handleEdit = (skill) => setEditingSkill(skill);
  const handleCancel = () => setEditingSkill(null);

  if (loading) return <Typography>Loading skills...</Typography>;

  return (
    <Box p={3}>
      <Typography variant="h4" mb={3}>
        Skills
      </Typography>
      <SkillForm
        onSubmit={handleAddOrUpdate}
        editingSkill={editingSkill}
        onCancel={handleCancel}
      />
      <SkillPreview
        skills={skills}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </Box>
  );
};

export default SkillList;
