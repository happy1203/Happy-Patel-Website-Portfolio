
import { ExternalLink, FileImage } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  slideDeckUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group transform hover:scale-105"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-gray-500 text-xs">+{project.tags.length - 3} more</span>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-purple-600 font-medium text-sm group-hover:text-purple-700">
            View Details →
          </span>
          {project.slideDeckUrl && (
            <div className="flex items-center space-x-1 text-gray-500">
              <ExternalLink size={14} />
              <span className="text-xs">Slides</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
