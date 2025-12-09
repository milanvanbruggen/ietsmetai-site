import Link from 'next/link';

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Hallo, ik ben Milan
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
            Developer & Creative Technologist
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-500 max-w-2xl mx-auto mb-12">
            Ik bouw moderne web applicaties en experimenteer met AI en technologie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#projects"
              className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              Bekijk mijn werk
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
            >
              Neem contact op
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Over mij
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Ik ben een gepassioneerde developer met interesse in moderne web technologieën,
              AI en creatieve toepassingen. Ik werk graag aan projecten die impact hebben en
              gebruikers helpen.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Mijn focus ligt op het bouwen van snelle, gebruiksvriendelijke applicaties met
              aandacht voor detail en performance.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Frontend
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  React, Next.js, TypeScript
                </p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Backend
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Node.js, API Development
                </p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Tools
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Git, Vercel, CI/CD
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Projecten
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Project 1
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Beschrijving van het project en de gebruikte technologieën.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                  TypeScript
                </span>
              </div>
              <Link
                href="#"
                className="text-gray-900 dark:text-white font-medium hover:underline"
              >
                Bekijk project →
              </Link>
            </div>

            {/* Project 2 */}
            <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Project 2
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Beschrijving van het project en de gebruikte technologieën.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                  Node.js
                </span>
              </div>
              <Link
                href="#"
                className="text-gray-900 dark:text-white font-medium hover:underline"
              >
                Bekijk project →
              </Link>
            </div>

            {/* Project 3 */}
            <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Project 3
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Beschrijving van het project en de gebruikte technologieën.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                  AI/ML
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                  Python
                </span>
              </div>
              <Link
                href="#"
                className="text-gray-900 dark:text-white font-medium hover:underline"
              >
                Bekijk project →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Neem contact op
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
            Heb je een vraag of wil je samenwerken? Laat het me weten!
          </p>
          <div className="space-y-6">
            <a
              href="mailto:contact@ietsmetai.com"
              className="block text-xl text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            >
              contact@ietsmetai.com
            </a>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/milanvanbruggen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/milanvanbruggen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} ietsmetai. Alle rechten voorbehouden.</p>
        </div>
      </footer>
    </div>
  );
}
