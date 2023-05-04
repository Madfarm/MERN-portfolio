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
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg shadow-gray-600 bg-gray-800 my-4 mx-8 flex flex-col items-center justify-center h-64">
            <h1 className="border-b-2 w-full text-center">{project.name}</h1>
            <img src={project.image} className="pb-12 h-32" />
            <div className="justify-self-end justify-between border-t-2 pt-4" >
                <a className="mx-12" href={project.git}>
                    <button>Github</button>
                </a>
                <a className="mx-12" href={project.live}>
                    <button>Live Site</button>
                </a>
            </div>
        </div>
    ));

    return (
        <div className="flex flex-col justify-center items-center">
        {mappedProjects}
        </div>
    )
}

export default Projects;