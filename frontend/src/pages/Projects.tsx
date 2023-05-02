import { useState, useEffect } from "react";

function Projects() {

  interface Project {
    name: string,
    image: string,
    git: string,
    live: string
  }

  const [projects, setProjects] = useState<Project[]| null>(null);


  const getProjectsData = async () => {
    const response = await fetch("./projects.json");
    const data = await response.json();

    setProjects(data);
  };

 
  useEffect(() => {getProjectsData()}, []);


  if(!projects){
    return <h1>Loading...</h1>
  }

  const loaded = () => {
    return projects.map((project) => (
      <div>
        <h1>{project.name}</h1>
        <img src={project.image} />
        <a href={project.git}>
          <button>Github</button>
        </a>
        <a href={project.live}>
          <button>live site</button>
        </a>
      </div>
    ));
  };

  return loaded()
}

export default Projects;