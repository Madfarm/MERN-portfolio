import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineMenu, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';
import { useState } from 'react';


export default function Header() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <header className=''>
            <h1 className='relative h-12 top-4 left-4'>Anthony Scott</h1>
            <nav>
                <AiOutlineMenu onClick={handleNav} className="absolute top-4 right-4 z-[99] md:hidden " />
                {
                    nav ? (
                        <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 text-black'>
                            <Link to="/" className="w-[75%] flex justify-center rounded-full shadow-lg bg-gray-200 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                                <AiOutlineHome size={20}  />
                                <span className='pl-4'>HOME</span>
                            </Link>
                            <Link to="/about" className="w-[75%] flex justify-center rounded-full shadow-lg bg-gray-200 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                                <GrProjects size={20}  />
                                <div className='pl-4'>ABOUT</div>
                            </Link>
                            <Link to="/projects" className="w-[75%] flex justify-center rounded-full shadow-lg bg-gray-200 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                                <AiOutlineProject size={20}  />
                                <div className='pl-4'>PROJECTS</div>
                            </Link>
                            <Link to="/projects" className="w-[75%] flex justify-center rounded-full shadow-lg bg-gray-200 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                                <BsPerson size={20}  />
                                <div className='pl-4'>RESUME</div>
                            </Link>
                            <Link to="/projects" className="w-[75%] flex justify-center rounded-full shadow-lg bg-gray-200 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                                <AiOutlineMail size={20}  />
                                <div className='pl-4'>CONTACT</div>
                            </Link>
                        </div>
                    ) : (
                        <div></div>
                    )
                }

            </nav>
        </header>
    )
}