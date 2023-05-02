import { useState, useEffect } from "react";


export default function About(props: { URL: string }) {
    interface About {
        name: string,
        email: string,
        bio: string
    }

    // create state to hold about data
    const [about, setAbout] = useState<About | null>(null);

    // create function to make api call
    const getAboutData = async () => {
        const response = await fetch("./about.json");
        const data = await response.json();
        setAbout(data);
    };

 
    useEffect(() => {getAboutData()}, []);

    if (!about){
        return <h1>Loading...</h1>
    }
    
    const loaded = () => (
        <div>
            <h2>{about.name}</h2>
            <h3>{about.email}</h3>
            <p>{about.bio}</p>
        </div>
    );

    
    return loaded();
}