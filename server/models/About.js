import mongoose from 'mongoose';

const aboutSchema = new mongoose.Schema({
  name: String,
  role: String,
  description: String,
  resume: String,
  social: {
    linkedin: String,
    github: String
  }
});

const About = mongoose.model('About', aboutSchema);

export default About;
