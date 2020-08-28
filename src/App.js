import React, { useState } from "react";

import "./App.css";

import Header from "./components/Header";

//

function App() {

  const [projects, setProjects] = useState([
    "Front-end com React",
    "Back-end com Node"
  ]);


  function handleAddProject() {
    //  projects.push(`Novo Projeto ${Date.now()}`);

    setProjects([...projects, `Novo Projeto ${Date.now()}`]);

  }

    return (
      //fragment
      <>
        <Header title="Projects" />
        <img
          src="https://d26lpennugtm8s.cloudfront.net/stores/363/165/products/cv1137981-08e8c8af36719e903a15394480360976-1024-1024.jpg"
          alt=""
        />

        <ul>
          {projects.map((project) => (
            <li key={project}>{project}</li>
          ))}
        </ul>

        <button type="button" onClick={handleAddProject}>
          Adicionar
        </button>
      </>
    );      
}

export default App;