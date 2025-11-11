import { useParams } from "react-router-dom";
import ProjectsData from '../data/projects.json';

export default function ProjectDetail() {
    const { id } = useParams();
    const id_number = Number(id);
    const project = ProjectsData.find((proj) => proj.id === id_number);

    return (
    <div className="w-3/4 max-w-5xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8">
            {project.title}
        </h1>
        <img
            src={project.mainImage}
            alt={project.title}
            className="w-full h-80  object-cover rounded-lg shadow-md mb-8"
            />
        <section className="flex flex-row items-center mb-10  justify-between ">
            <h2 className="text-2xl font-semibold mb-3">Link del sitio:</h2>
            <a
            href={project.Hosting}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg px-6 py-2 transition"
            >
            Ver sitio
            </a>
        </section>
        <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Descripcion</h2>
            <p className="text-lg leading-relaxed">{project.description}</p>
        </section>

        <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Sobre el proyecto</h2>
            <p className="text-lg leading-relaxed">{project.MiExperiencia}</p>
        </section>

        <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Tecnologías usadas</h2>
            <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
                <span
                key={tech}
                className="bg-blue-100 text-black px-3 py-1 rounded text-sm"
                >
                {tech}
                </span>
            ))}
            </div>
        </section>

        <button
            onClick={() => window.history.back()}
            className="bg-gray-200 hover:bg-gray-300 text-black font-medium rounded-lg px-4 py-2 transition self-center"
        >
            Volver
        </button>
    </div>

    );
}


