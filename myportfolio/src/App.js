import React from 'react';
import './App.css';
import ProjectCard from './components/ProjectCard/ProjectCard';
import ContactForm from './components/ContactForm/ContactForm';
import SocialLinks from './components/SocialLinks/SocialLinks';
import logo from './images/linkedIn_photo.jpg';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Jen Martinez</h1>
        <img src={logo} className="linkedIn_photo" />
        <h2>Software Developer | Tech Enthusiast</h2>
        <SocialLinks />
      </header>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>Welcome to my portfolio website. I am a passionate software developer with expertise in full-stack development, with proficiency in HTML, CSS, JavaScript, Java, Python and various frameworks and libraries..</p>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <div className="project-list">
            <ProjectCard
              title="Project 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada tortor non massa sagittis, a consectetur lacus lacinia."
              technologies={['React', 'Node.js', 'MongoDB']}
              liveLink="https://example.com/project1"
              githubLink="https://github.com/example/project1"
            />
            <ProjectCard
              title="Project 2"
              description="Curabitur pretium ex vitae lacus pulvinar, sed venenatis justo faucibus. Quisque a risus ultrices, condimentum neque nec, malesuada lacus."
              technologies={['HTML', 'CSS', 'JavaScript']}
              liveLink="https://example.com/project2"
              githubLink="https://github.com/example/project2"
            />
          </div>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <ContactForm />
        </section>
      </main>
      <footer>
        <p>© 2023 Jen Martinez. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
