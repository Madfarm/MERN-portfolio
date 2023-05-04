import { Link } from "react-router-dom";

export default function Home() {
    return (
        <section>
            <div className="h-80 mx-8 mt-16 rounded-sm  flex flex-col justify-evenly">
                <div className="flex flex-col items-start">
                    <h2 className="mt-4 ml-4 ">Web Developer | Software Engineer </h2>
                    <p className="text-xl mt-4 ml-4 p-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti incidunt dolores sed quia praesentium. Quia, saepe at unde adipisci dolorum qui quae quam! Eum necessitatibus, animi fuga nulla exercitationem itaque?</p>
                </div>
                <Link to="/projects" className="flex flex-start">
                <button className="rounded-full border-2 p-4 w-64 mb-4 ml-4 hover:bg-gray-400">Projects</button>
                </Link>
            </div>
        </section>

    )
}