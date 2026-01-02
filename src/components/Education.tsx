import { GraduationCap, Calendar, Award } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: 'B.Tech in Mechanical and Automation Engineering',
      institution: 'Indira Gandhi Delhi Technical University for Women (IGDTUW)',
      duration: '2024 – 2028',
      grade: 'Pursuing',
      current: true,
    },
    {
      degree: 'CBSE Class 12th',
      institution: 'Senior Secondary Education',
      duration: '2024',
      grade: '87%',
      current: false,
    },
    {
      degree: 'CBSE Class 10th',
      institution: 'Secondary Education',
      duration: '2022',
      grade: '93.6%',
      current: false,
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-[rgb(10,20,50)] text-white">
      <div className="max-w-7xl mx-auto bg-[rgb(10,20,50)]">
        {/* Section Header */}
        <div className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-gray-900 mb-4 text-3xl font-bold">Education</h2>
          <div className="w-16 h-1 bg-blue-600"></div>
        </div>

        {/* Education List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-[rgb(10,20,50)] rounded-lg shadow-sm border border-gray-200 p-8 hover:shadow-lg hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 text-white"
            >
              <div className="flex items-start justify-between gap-6 flex-wrap">
                {/* Left Content */}
                <div className="flex-1 min-w-[250px]">
                  <h3 className="text-gray-900 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-600 flex items-center gap-2 mb-3">
                    <GraduationCap className="w-4 h-4" />
                    {edu.institution}
                  </p>
                </div>

                {/* Right Content */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex items-center gap-2 bg-[rgb(10,20,50)] px-4 py-2 rounded-md border border-gray-200 hover:border-blue-400 hover:shadow-sm transition-all duration-200 text-white">
                    <Calendar className="w-4 h-4 text-gray-600" />
                    <span className="text-gray-700 text-sm">{edu.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[rgb(10,20,50)] px-4 py-2 rounded-md border border-gray-200 hover:border-blue-400 hover:shadow-sm transition-all duration-200 text-white">
                    <Award className="w-4 h-4 text-gray-600" />
                    <span className="text-gray-700">{edu.grade}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}