import { Database, BarChart3, Brain, Code } from 'lucide-react';

export function About() {
  const tools = [
    { name: 'Python', category: 'Programming' },
    { name: 'SQL', category: 'Database' },
    { name: 'Power BI', category: 'Visualization' },
    { name: 'Excel', category: 'Analysis' },
    { name: 'Tableau', category: 'Visualization' },
    { name: 'Pandas', category: 'Data Processing' },
    { name: 'NumPy', category: 'Data Processing' },
    { name: 'Matplotlib', category: 'Visualization' },
    { name: 'Scikit-Learn', category: 'Machine Learning' },
    { name: 'Gen-AI', category: 'AI/ML' },
  ];

  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-[rgb(10,20,50)] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-gray-900 mb-4">About Me</h2>
            <div className="w-16 h-1 bg-blue-600"></div>
          </div>

          {/* About Content */}
          <div className="bg-[rgb(10,20,50)] p-8 lg:p-12 rounded-lg border border-gray-200 space-y-6 mb-12 text-white">
            <p className="text-gray-700 text-lg leading-relaxed">
              I am currently pursuing my B.Tech in Mechanical and Automation Engineering at 
              Indira Gandhi Delhi Technical University for Women (IGDTUW), graduating in 2028. 
              My academic journey has sparked a deep interest in data analytics and its applications in solving real-world problems.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              I specialize in transforming raw data into meaningful insights through statistical analysis, 
              data visualization, and predictive modeling. My technical expertise spans across multiple analytics tools 
              including Power BI for creating interactive dashboards, Python for data manipulation and machine learning, 
              SQL for database management, and advanced Excel for complex data analysis.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              My approach to data analytics combines technical proficiency with business acumen. I focus on not just 
              analyzing data, but presenting it in ways that drive strategic decision-making. Whether it's building 
              automated dashboards, conducting exploratory data analysis, or developing machine learning models, 
              I am committed to delivering solutions that create measurable value.
            </p>
          </div>

          {/* Core Competencies */}
          <div className="mb-12">
            <h3 className="text-gray-900 mb-6">Core Competencies</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[rgb(10,20,50)] p-6 rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default group text-white">
                <Database className="w-8 h-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-gray-900 mb-2">Data Management</h4>
                <p className="text-gray-600 text-sm">SQL, Database Design, ETL Processes</p>
              </div>
              <div className="bg-[rgb(10,20,50)] p-6 rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default group text-white">
                <BarChart3 className="w-8 h-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-gray-900 mb-2">Visualization</h4>
                <p className="text-gray-600 text-sm">Power BI, Tableau, Dashboard Design</p>
              </div>
              <div className="bg-[rgb(10,20,50)] p-6 rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default group text-white">
                <Code className="w-8 h-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-gray-900 mb-2">Programming</h4>
                <p className="text-gray-600 text-sm">Python, Pandas, NumPy, Data Processing</p>
              </div>
              <div className="bg-[rgb(10,20,50)] p-6 rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default group text-white">
                <Brain className="w-8 h-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-gray-900 mb-2">Machine Learning</h4>
                <p className="text-gray-600 text-sm">Scikit-Learn, Predictive Models, Gen-AI</p>
              </div>
            </div>
          </div>

          {/* Tools Section */}
          <div>
            <h3 className="text-gray-900 mb-6">Technical Skills</h3>
            <div className="bg-[rgb(10,20,50)] p-8 rounded-lg border border-gray-200 text-white">
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <span
                    key={index}
                    className="bg-gray-50 text-gray-700 px-4 py-2 rounded-md text-sm border border-gray-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                  >
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}