import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', background: '#eee' }}>
      <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
      <Link to="/about" style={{ marginRight: '15px' }}>About</Link>
      <Link to="/skills" style={{ marginRight: '15px' }}>Skills</Link>
      <Link to="/projects">Projects</Link>
    </nav>
  );
};

export default Navbar;
