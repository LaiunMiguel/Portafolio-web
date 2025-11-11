import { useNavigate } from "react-router-dom";

export default function ProjectCard({ project }) {
    const navigate = useNavigate(); 

    const handleClick = () => {
        navigate(`/projects/${project.id}`);
    }

    return (
        <div className="w-80 h-[420px] flex flex-col cursor-pointer hover:scale-105 hover:shadow-lg transition border-2 rounded  hover:animate-tilt bg-card-background"  onClick={handleClick}>
            <img   className="w-full h-48 object-cover rounded-t" src={project.mainImage} alt={project.title} />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-center">{project.title}</h3>
                <a href={project.id} className="text-blue-500 hover:underline"></a>
                <p className="mb-2">{project.cardDescription}</p>
                <ul className="flex flex-wrap gap-2">
                    <h3>Tecnologias Usadas:</h3>
                    {project.technologies.map((tech) => (
                        <li key={tech}>
                            <span className="bg-blue-500 text-black-600 px-2 py-1 rounded text-text">{tech}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

