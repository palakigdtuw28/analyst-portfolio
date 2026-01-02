import image_f14cd873504573c9950f5b82bd8e22997953f0a4 from 'figma:asset/f14cd873504573c9950f5b82bd8e22997953f0a4.png';
import { Download, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-white pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left - Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200 sticky top-24 hover:shadow-xl transition-all duration-300">
              {/* Profile Image */}
              <div className="mb-6">
                <div className="w-40 h-40 mx-auto rounded-lg overflow-hidden bg-gray-100 hover:scale-105 transition-transform duration-300">
                  <img
                    src={image_f14cd873504573c9950f5b82bd8e22997953f0a4}
                    alt="Palak Gupta"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3 text-sm">
                  <Mail className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-500 text-xs mb-1">Primary Email</p>
                    <a href="mailto:palak@igdtuw.ac.in" className="text-gray-900 hover:text-blue-600 break-all transition-colors duration-200">
                      palak052btmae24@igdtuw.ac.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm">
                  <Mail className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-500 text-xs mb-1">Alternate Email</p>
                    <a href="mailto:palak.gupta@example.com" className="text-gray-900 hover:text-blue-600 break-all transition-colors duration-200">
                      p07215071@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm">
                  <Phone className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-500 text-xs mb-1">Phone</p>
                    <a href="tel:+919876543210" className="text-gray-900 hover:text-blue-600 transition-colors duration-200">
                      +91 95823 06115
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-500 text-xs mb-1">Location</p>
                    <p className="text-gray-900">Delhi, India</p>
                  </div>
                </div>
              </div>

              {/* Download Resume Button */}
              <a
                href="/palak-resume.docx"
                download
                className="w-full bg-[rgb(0,0,0)] text-[rgb(255,255,255)] px-6 py-3 rounded-lg hover:bg-[rgb(0,0,0)] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Download className="w-4 h-4 group-hover:animate-bounce text-[rgb(255,255,255)]" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Right - Hero Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="inline-block">
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-md text-sm">
                Available for Opportunities
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-gray-900 leading-tight">
                Palak Gupta
              </h1>
              <h2 className="text-gray-700 text-3xl">
                Aspiring Data Analyst
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
                B.Tech student in Mechanical and Automation Engineering at IGDTUW with a strong focus on data analytics. 
                Proficient in transforming complex datasets into actionable insights using Python, SQL, Power BI, and advanced Excel. 
                Experienced in building analytical dashboards, statistical analysis, and developing data-driven solutions.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-[rgb(174,206,230)] p-6 rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default">
                <h3 className="text-gray-900 text-lg mb-2">Data Visualization</h3>
                <p className="text-gray-600 text-sm">Power BI, Tableau, Excel Dashboards</p>
              </div>
              <div className="bg-[rgb(174,206,230)] p-6 rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default">
                <h3 className="text-gray-900 text-lg mb-2">Machine Learning</h3>
                <p className="text-gray-600 text-sm">Python, Scikit-Learn, Predictive Models</p>
              </div>
              <div className="bg-[rgb(174,206,230)] p-6 rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default">
                <h3 className="text-gray-900 text-lg mb-2">Data Analysis</h3>
                <p className="text-gray-600 text-sm">SQL, Pandas, Statistical Analysis</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-[rgb(0,0,0)] text-[rgb(255,255,255)] px-8 py-3 rounded-lg hover:bg-[rgb(0,0,0)] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group"
              >
                View Projects
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 text-[rgb(255,255,255)] transition-transform duration-300" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-[rgb(0,0,0)] text-[rgb(255,255,255)] px-8 py-3 rounded-lg border border-gray-300 hover:bg-[rgb(0,0,0)] hover:border-gray-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 text-[rgb(255,255,255)] transition-transform duration-300" />
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}