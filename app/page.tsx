import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#9AD9A0]/10 via-[#9BCBFF]/10 to-[#FFB88C]/10 dark:from-black dark:via-gray-900 dark:to-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center">
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Je weet dat je iets met AI moet, maar waar begin je?
            </h1>
            <div className="inline-flex items-center bg-white/90 dark:bg-gray-900/90 border border-gray-200/60 dark:border-gray-800/60 rounded-full px-4 py-2 shadow-lg mb-6">
              <span className="text-sm text-gray-700 dark:text-gray-300">Wat als je de boot mist?</span>
            </div>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6">
              Ik help je met een nuchtere, resultaatgerichte aanpak die ik zelf jarenlang in mijn agency toepaste.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl">
              Geen dikke rapporten, maar een praktisch plan waarmee je vol vertrouwen kunt beginnen om je doelen te verwezenlijken.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/proces"
                className="px-8 py-3 bg-gradient-to-r from-[#9AD9A0] to-[#9BCBFF] text-gray-900 rounded-full font-medium hover:from-[#9AD9A0]/90 hover:to-[#9BCBFF]/90 transition-all shadow-lg hover:shadow-xl"
              >
                Bekijk mijn aanpak
              </Link>
              <Link
                href="#contact"
                className="px-8 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-full font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
              >
                Laten we praten
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#9AD9A0]/30 blur-3xl rounded-full"></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#9BCBFF]/30 blur-3xl rounded-full"></div>
              <div className="relative">
                <Image
                  src="/images/imai-milan-avatar.png"
                  alt="Milan van Bruggen"
                  width={360}
                  height={360}
                  className="rounded-full object-cover border-4 border-white/80 dark:border-gray-900/80 shadow-xl"
                  priority
                />
              </div>
            </div>
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
              Na bijna 12 jaar Pixelpillow te hebben opgebouwd, heb ik me gespecialiseerd in het 
              helpen van bedrijven met AI-implementatie. En eerlijk? Ik zie dagelijks hoe organisaties 
              worstelen met dezelfde vraag: waar begin je met AI? Welke kansen zijn er? En hoe zorg 
              je dat het niet bij een experiment blijft, maar echt impact maakt?
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Mijn aanpak is nuchter en praktisch. Geen theoretische frameworks of dikke rapporten 
              die in een la verdwijnen. Ik onderzoek eerst waar de echte kansen liggen, valideer die 
              met data, en help je dan prioriteiten te stellen. In 3-4 weken heb je een concreet plan 
              dat je direct kunt oppakken.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Daarnaast schrijf ik over AI en business. Mijn boek "Van idee naar impact" gaat over 
              hoe AI het maken van software fundamenteel verandert, en wat dat betekent voor 
              ondernemers in 2025. Maar dat is vooral achtergrond - mijn focus ligt op het helpen 
              van bedrijven die nu, vandaag, iets met AI willen doen.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/boek"
                className="text-gray-900 dark:text-white font-medium hover:underline"
              >
                Lees meer over mijn achtergrond →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Methodology Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FFB88C]/5 via-[#9AD9A0]/5 to-[#9BCBFF]/5 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Mijn aanpak
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 text-center max-w-2xl mx-auto">
            Geen dikke rapporten, maar een praktisch plan. In 3-4 weken van probleemanalyse naar concrete initiatieven.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Process Overview Card */}
            <div className="bg-white dark:bg-black p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Het proces
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                In 3-4 weken doorloop ik samen met jouw organisatie een gestructureerd traject. 
                Geen theoretische sessies, maar praktisch onderzoek. Interviews om te begrijpen 
                waarom dingen zijn zoals ze zijn. Surveys om te valideren wat breed gedragen wordt. 
                En dan: concrete initiatieven die je direct kunt oppakken.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400 mb-6">
                <li className="flex items-start">
                  <span className="text-[#9AD9A0] dark:text-[#9AD9A0] mr-2 font-bold">✓</span>
                  <span><strong>Fase 1:</strong> Kwalitatieve verkenning (interviews)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9BCBFF] dark:text-[#9BCBFF] mr-2 font-bold">✓</span>
                  <span><strong>Fase 2:</strong> Kwantitatieve validatie (survey)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFB88C] dark:text-[#FFB88C] mr-2 font-bold">✓</span>
                  <span><strong>Fase 3:</strong> Co-creatie (brainstorm)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9AD9A0] dark:text-[#9AD9A0] mr-2 font-bold">✓</span>
                  <span><strong>Fase 4:</strong> Prioritering (top 3-5 initiatieven)</span>
                </li>
              </ul>
              <Link
                href="/proces"
                className="text-gray-900 dark:text-white font-medium hover:underline inline-flex items-center"
              >
                Bekijk volledige methodologie →
              </Link>
            </div>

            {/* What You Get Card */}
            <div className="bg-white dark:bg-black p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Wat je krijgt
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Geen 100-pagina rapport dat in een la verdwijnt. Je krijgt concrete, actionable 
                output die je direct kunt gebruiken.
              </p>
              <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="text-[#9AD9A0] dark:text-[#9AD9A0] mr-3 font-bold text-xl">1.</span>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Kwalitatieve inzichten</strong>
                    <p className="text-sm mt-1">Diepte-interviews die je helpen begrijpen waarom dingen zijn zoals ze zijn</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9BCBFF] dark:text-[#9BCBFF] mr-3 font-bold text-xl">2.</span>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Kwantitatieve validatie</strong>
                    <p className="text-sm mt-1">Data over waar de grootste kansen liggen en wat breed gedragen wordt</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFB88C] dark:text-[#FFB88C] mr-3 font-bold text-xl">3.</span>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Concrete initiatieven</strong>
                    <p className="text-sm mt-1">10-20 concrete AI-initiatieven die je direct kunt oppakken</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9AD9A0] dark:text-[#9AD9A0] mr-3 font-bold text-xl">4.</span>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Prioriteiten</strong>
                    <p className="text-sm mt-1">Top 3-5 initiatieven geselecteerd op basis van impact en effort</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="bg-white dark:bg-black p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Waarom deze aanpak werkt
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Data-gedreven</div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Niet alleen buikgevoel, maar concrete data over waar kansen liggen
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Breed draagvlak</div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Meerdere stakeholders betrokken, van analyse tot prioritering
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Praktisch</div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Concrete initiatieven die je direct kunt oppakken, geen abstract rapport
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Laten we praten over AI in jouw organisatie
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
            Heb je vragen over hoe AI jouw organisatie kan helpen? Of wil je meer weten over mijn aanpak? 
            Neem gerust contact op. Geen verkooppraatje, gewoon een gesprek.
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
