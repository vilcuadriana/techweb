import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <h2>About</h2>
      <p>Aceasta este pagina About.</p>

      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/tasks">Tasks</Link>
      </nav>
    </>
  );
};

export default About