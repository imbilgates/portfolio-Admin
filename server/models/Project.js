import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  stack: [String],
  sourceCode: String,
  livePreview: String
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
