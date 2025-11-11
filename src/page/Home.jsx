import Img1 from '../assets/perfil.webp';
import ProjectCard from '../component/ProjectCard';
import ProjectsData from '../data/projects.json';


export default function Home() {
  return (
    <section className="text-center flex flex-col items-center ">
      <div className="flex justify-center bg-blue-800 p-6 w-full mb-10 text-white">
        <div className="flex items-center gap-8 max-w-4xl">
          <div className='flex flex-col justify-center'>
            <h2 className="text-3xl font-semibold mb-4">Hola, soy Miguel Laiun</h2>
            <p className="text-xl">Un desarrollador de software que le gusta crear proyectos que sean funcionales, intuitivos y divertidos . </p>
          </div>
          <img src={Img1} alt="Foto de perfil" className="w-40 h-40 rounded-full mx-auto" />
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-4">Ve uno de mis ultimos proyectos</h1>
      <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-6 mb-6">
        {ProjectsData.slice(0, 3).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <a
        href="/projects"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Todos mis proyectos
      </a>
      <h1 className='text-2xl font-bold mt-10'>Mi siguiente idea en mente:</h1>
      <p className='max-w-xl mx-auto mt-4 text-2xl'>
        Estoy desarollando una web con sitios interesantes para visitar por buenos aires , que cuente con descripon , horarios y precios de entrada.
      </p>
    </section>
  );
}
