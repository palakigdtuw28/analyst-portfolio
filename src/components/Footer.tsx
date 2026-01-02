export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left - Branding */}
          <div>
            <h3 className="text-white text-2xl mb-2">Palak Gupta</h3>
            <p className="text-gray-400 mb-4">
              Aspiring Data Analyst
            </p>
            <p className="text-gray-500 text-sm">
              B.Tech in Mechanical and Automation Engineering
            </p>
            <p className="text-gray-500 text-sm">
              Indira Gandhi Delhi Technical University for Women (IGDTUW)
            </p>
          </div>

          {/* Middle - Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('home');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('skills');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('projects');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Right - Contact */}
          <div>
            <h4 className="text-white mb-4">Get in Touch</h4>
            <p className="text-gray-400 text-sm mb-4">
              Open to internships, freelance projects, and collaborative opportunities in data analytics.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[rgb(10,20,50)] text-[rgb(255,255,255)] px-6 py-2 rounded-xl hover:bg-[rgb(10,20,50)] transition-all text-sm"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Palak Gupta. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Built with passion for data 📊
          </p>
        </div>
      </div>
    </footer>
  );
}
