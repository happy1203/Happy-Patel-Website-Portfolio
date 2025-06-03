
import { X, ExternalLink, ArrowUp } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  slideDeckUrl?: string;
  fullDescription?: string;
  images?: string[];
  challenges?: string[];
  outcomes?: string[];
}

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail = ({ project, onClose }: ProjectDetailProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
            <span className="text-purple-600 font-medium">{project.category}</span>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Main Image */}
          <div className="relative h-64 rounded-xl overflow-hidden mb-6">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Overview</h3>
            <p className="text-gray-700 leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Tags */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies & Skills</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-purple-100 text-purple-700 px-3 py-1 rounded-lg text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges */}
          {project.challenges && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Challenges</h3>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Outcomes */}
          {project.outcomes && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Outcomes</h3>
              <ul className="space-y-2">
                {project.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-gray-700">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Additional Images */}
          {project.images && project.images.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Gallery</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {project.images.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden">
                    <img 
                      src={image} 
                      alt={`${project.title} - ${index + 1}`}
                      className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex space-x-4 pt-6 border-t">
            {project.slideDeckUrl && (
              <a
                href={project.slideDeckUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                <ExternalLink size={18} />
                <span>View Slide Deck</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <ArrowUp size={18} />
              <span>Back to Projects</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
