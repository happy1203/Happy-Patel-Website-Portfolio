
import { Link, useLocation } from "react-router-dom";
import { User, Briefcase } from "lucide-react";

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Portfolio
          </Link>
          
          <nav className="flex space-x-8">
            <Link
              to="/"
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                location.pathname === "/"
                  ? "bg-purple-100 text-purple-700"
                  : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
              }`}
            >
              <User size={18} />
              <span>About</span>
            </Link>
            <Link
              to="/projects"
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                location.pathname === "/projects"
                  ? "bg-purple-100 text-purple-700"
                  : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
              }`}
            >
              <Briefcase size={18} />
              <span>Projects</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
