import { useState, useEffect } from "react";

function Projects(props:{URL: string}) {

    interface ProjectType {
        name: string,
        image: string,
        git: string,
        live: string
    }

    const [projectList, setProjectList] = useState<ProjectType[] | null>(null);


    const getProjectsData = async () => {
        const response = await fetch("./projects.json");
        const data = await response.json();

        setProjectList(data);
    };


    useEffect(() => { getProjectsData() }, []);


    if (!projectList) {
        return <h1>Loading...</h1>
    }

    

    let mappedProjects = projectList.map((project) => (
        <div className="max-w-sm rounded overflow=hidden shadow-lg bg-gray-400 pt-12 my-4 mx-8  flex flex-col items-center justify-center">
            <h1>{project.name}</h1>
            <img src={project.image} />
            <div className="justify-self-end justify-between pt-12">
                <a className="mx-12 border-2" href={project.git}>
                    <button>Github</button>
                </a>
                <a className="mx-12" href={project.live}>
                    <button>live site</button>
                </a>
            </div>
        </div>
    ));

    return (
        <>
        {mappedProjects}
        </>
    )
}

export default Projects;