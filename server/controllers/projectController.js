import Project from '../models/Project.js';

export const getProjects = async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
};

export const createProject = async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.status(201).json(project);
};

export const updateProject = async (req, res) => {
  const { id } = req.params;
  const updated = await Project.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updated);
};

export const deleteProject = async (req, res) => {
  const { id } = req.params;
  await Project.findByIdAndDelete(id);
  res.json({ message: 'Deleted successfully' });
};
