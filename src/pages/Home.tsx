
import { Link } from "react-router-dom";
import { ArrowDown, Briefcase, GraduationCap, MapPin } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="relative mb-8">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-blue-500 p-1 shadow-xl">
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face" 
                  alt="Profile" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-4 py-2 shadow-lg">
              <span className="text-sm font-medium text-gray-600">Product Manager</span>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
            Your Name
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Passionate Product Manager crafting innovative solutions and driving impactful user experiences
          </p>

          {/* Credentials */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-4">
                <GraduationCap className="text-purple-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Education</h3>
              <p className="text-gray-600">MBA in Business Administration</p>
              <p className="text-sm text-gray-500">University Name • 2023</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4">
                <Briefcase className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Experience</h3>
              <p className="text-gray-600">Product Management Intern</p>
              <p className="text-sm text-gray-500">Company Name • Summer 2023</p>
            </div>
          </div>

          {/* CTA */}
          <Link
            to="/projects"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <span>View My Projects</span>
            <ArrowDown size={20} />
          </Link>
        </div>

        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
      </section>

      {/* Skills Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Core Competencies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Product Strategy", desc: "Market research, competitive analysis, roadmap planning" },
              { title: "User Experience", desc: "User research, persona development, journey mapping" },
              { title: "Data Analysis", desc: "KPI tracking, A/B testing, performance optimization" },
            ].map((skill, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{skill.title}</h3>
                <p className="text-gray-600 text-sm">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
