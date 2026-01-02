export function Skills() {
  const skillCategories = [
    {
      category: 'Data Analysis & Visualization',
      skills: [
        'Advanced Excel',
        'Power BI',
        'Tableau',
        'Data Cleaning',
        'Statistical Analysis',
        'Dashboard Design',
      ],
    },
    {
      category: 'Programming & Tools',
      skills: [
        'Python',
        'SQL',
        'Pandas',
        'NumPy',
        'Matplotlib',
        'Jupyter Notebook',
      ],
    },
    {
      category: 'Machine Learning & AI',
      skills: [
        'Scikit-Learn',
        'Machine Learning',
        'Gen-AI',
        'Predictive Modeling',
        'Data Mining',
      ],
    },
    {
      category: 'Professional Skills',
      skills: [
        'Analytical Thinking',
        'Problem Solving',
        'Data Storytelling',
        'Critical Thinking',
        'Communication',
        'Collaboration',
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-gray-900 mb-4 text-3xl font-bold">Skills & Competencies</h2>
          <div className="w-16 h-1 bg-blue-600 mb-4"></div>
          <p className="text-gray-600 text-lg">
            Technical expertise and professional competencies in data analytics and business intelligence
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[rgb(10,20,50)] p-8 rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-white"
            >
              <h3 className="text-gray-900 mb-6">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-gray-50 text-gray-700 px-4 py-2 rounded-md text-sm border border-gray-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}