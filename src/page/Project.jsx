import ProjectCard from '../component/ProjectCard.jsx';
import ProjectsData from '../data/projects.json';
import { useState } from 'react';

export default function Projects() {

  const categrories = ['All', 'Web', 'Scripts', 'Apps', 'Games', 'Other'];

  const [categrory, setCategory] = useState('All');
  const [proyects, setProyects] = useState(ProjectsData);
  const [page, setPage] = useState(1);

  const handleChangeCategory = (cat) => {
    setPage(1);
    setCategory(cat);
    setProyects(ProjectsData.filter(project => cat === 'All' || project.category === cat));
  }

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  const handleNext = () => {
    if (page < Math.ceil(proyects.length / 9)) {
      setPage(page + 1);
    }
  }

  return (
    <section className="max-w-5xl mx-auto p-4 mt-10 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-center">Mis proyectos</h2>
      <div >
        <div className="flex justify-center mb-6 flex-wrap gap-4">
          {categrories.map((cat) => (
            <button 
              className={`border rounded px-4 py-2 hover:scale-120 hover:bg-blue-500 hover:text-white transition ${categrory === cat ? 'bg-blue-500 text-white' : ''}`}  
              onClick={() => handleChangeCategory(cat)}>{cat}</button>
          ))}
        </div>
      </div>
      <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6" >
        {proyects.slice((page - 1) * 9, page * 9).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="flex justify-center mt-6 gap-4">
        <button 
          className="border rounded px-4 py-2 hover:bg-blue-500 hover:text-white transition disabled:opacity-50"
          onClick={handlePrevious}
          disabled={page === 1}
        >
          Previous
        </button>
        <button 
          className="border rounded px-4 py-2 hover:bg-blue-500 hover:text-white transition disabled:opacity-50"
          onClick={handleNext}
          disabled={page === Math.ceil(proyects.length / 9)}
        >
          Next
        </button>
      </div>
    </section>
  );
}
