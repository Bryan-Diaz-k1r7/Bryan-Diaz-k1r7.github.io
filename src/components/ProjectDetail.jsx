import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) return <div>Proyecto no encontrado</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full max-w-3xl mx-auto rounded-xl mb-8 object-cover h-[400px]"
      />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-[#8b5cf6] mb-4">{project.title}</h1>
        <p className="text-[#a78bfa] mb-6">{project.longDescription}</p>
        
        <h2 className="text-xl font-bold text-[#8b5cf6] mb-3">Tecnologías utilizadas:</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="bg-[#2a2a2a] text-[#a78bfa] px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail; 