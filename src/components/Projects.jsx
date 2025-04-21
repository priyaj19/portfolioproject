// components/Projects.jsx
import React from 'react';

const Projects = () => (
  <section id="projects" className="container p-10 bg-gray-100">
    <div className='box'>
    <h2 className="text-2xl font-bold mb-4">Projects</h2>
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="p-4 bg-white shadow rounded">
        <h3 className="font-semibold">Project 1</h3>
        <p>A cool project that does something amazing.</p>
      </div>
      <div className="p-4 bg-white shadow rounded">
        <h3 className="font-semibold">Project 2</h3>
        <p>Another great project showing off my skills.</p>
      </div>
    </div>
    </div>
  </section>
);

export default Projects;
