import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Portfolio Dashboard',
      subtitle: 'Investment Analytics System',
      description: 'Comprehensive Excel dashboard leveraging pivot tables, slicers, and dynamic charts to analyze investment portfolio performance, track asset allocation, and visualize ROI trends across multiple investment vehicles.',
      image: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBkYXRhfGVufDF8fHx8MTc2NzI4NzQyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Excel', 'Pivot Tables', 'Data Visualization', 'Financial Analysis'],
      category: 'Data Analytics',
    },
    {
      id: 2,
      title: 'Pathfinder: Career Counselor',
      subtitle: 'AI-Powered Student Guidance Platform',
      description: 'Intelligent career counseling application powered by Gemini API that provides personalized career recommendations based on student profiles, interests, and market trends. Integrated with job search APIs to deliver real-time opportunity insights.',
      image: 'https://images.unsplash.com/photo-1646583288948-24548aedffd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwY2FyZWVyfGVufDF8fHx8MTc2NzM2MzU1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Gen-AI', 'Python', 'API Integration', 'Machine Learning'],
      category: 'AI & ML',
    },
    {
      id: 3,
      title: 'AQI Trend Intelligence System',
      subtitle: 'Environmental Data Analytics',
      description: 'Advanced analytics solution combining Power BI and Excel to analyze Delhi Air Quality Index (AQI) trends. Features interactive dashboards, time-series analysis, pollutant breakdown, and predictive insights for air quality management.',
      image: 'https://images.unsplash.com/photo-1650692752287-a4211008644f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXIlMjBxdWFsaXR5JTIwZGF0YSUyMHZpc3VhbGl6YXRpb258ZW58MXx8fHwxNzY3MzYzNTUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Power BI', 'Excel', 'Time Series', 'Environmental Data'],
      category: 'Data Visualization',
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-blue-600 mb-4"></div>
          <p className="text-gray-600 text-lg">
            Data analytics projects demonstrating proficiency in visualization, machine learning, and business intelligence
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl hover:border-blue-400 hover:-translate-y-2 transition-all duration-300 flex flex-col group"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[16/10] bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-blue-600 text-sm mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-50 text-gray-700 px-3 py-1 rounded-md text-xs border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-gray-200">
                  <button className="flex-1 bg-[rgb(0,0,0)] text-white px-4 py-2.5 rounded-lg hover:bg-[rgb(0,0,0)] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 text-sm group/btn">
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                    View Project
                  </button>
                  <button className="bg-gray-50 text-gray-700 px-4 py-2.5 rounded-lg hover:bg-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center border border-gray-200 hover:border-gray-300 group/btn">
                    <Github className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}