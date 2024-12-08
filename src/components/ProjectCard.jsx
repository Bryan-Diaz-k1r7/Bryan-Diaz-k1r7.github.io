import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.open(`http://${project.route}`, '_blank');
  };

  return (
    <div 
      onClick={handleClick}
      className="cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
    >
      <div 
        className="bg-[#222222] rounded-xl overflow-hidden border border-[#6d28d9]/20 transform hover:scale-[1.02] transition-transform duration-300 will-change-transform"
      >
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-48 object-cover loading='lazy'" 
          loading="lazy"
        />
        <div className="p-6 transition-all duration-500 hover:bg-[#2a2a2a]">
          <h3 className="text-xl font-bold mb-2 text-[#8b5cf6] transition-all duration-500 hover:text-[#9f75ff]">
            {project.title}
          </h3>
          <p className="text-[#a78bfa] transition-all duration-500 hover:text-[#bda5fc]">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 