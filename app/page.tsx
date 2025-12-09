import Image from 'next/image';
import Link from 'next/link';
import { Search, Rocket, Users, BarChart, CheckCircle, ChevronRight, ListChecks, MessageCircle, Mail, Linkedin } from 'lucide-react';

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 bg-linear-to-br from-[#9AD9A0]/10 via-[#9BCBFF]/10 to-[#FFB88C]/10 dark:from-black dark:via-gray-900 dark:to-black">
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
                href="#services"
                className="inline-flex items-center gap-2 px-8 py-3 btn-gradient-animated text-gray-900 rounded-full font-medium shadow-lg hover:shadow-xl"
              >
                <ListChecks className="w-5 h-5" />
                Bekijk mijn bewezen aanpak
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-full font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
              >
                <MessageCircle className="w-5 h-5" />
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
      <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Blue base background with radial gradients - less intense */}
        <div className="absolute inset-0 bg-[#9BCBFF]/40">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,_rgba(155,203,255,0.4)_0%,_transparent_70%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,_rgba(154,217,160,0.4)_0%,_transparent_75%)]"></div>
        </div>
        {/* Subtle dark vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.15)_100%)] pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-left">
            Over mij
          </h2>
          <div className="prose prose-lg max-w-none text-left">
            <p className="text-gray-900 dark:text-gray-100 mb-4 text-base leading-relaxed max-w-2xl">
              Na bijna 12 jaar Pixelpillow te hebben opgebouwd, heb ik me gespecialiseerd in het 
              helpen van bedrijven met AI-implementatie. En eerlijk? Ik zie dagelijks hoe organisaties 
              worstelen met dezelfde vraag: waar begin je met AI? Welke kansen zijn er? En hoe zorg 
              je dat het niet bij een experiment blijft, maar echt impact maakt?
            </p>
            <p className="text-gray-900 dark:text-gray-100 mb-4 text-base leading-relaxed max-w-2xl">
              Mijn aanpak is nuchter en praktisch. Geen theoretische frameworks of dikke rapporten 
              die in een la verdwijnen. Ik onderzoek eerst waar de echte kansen liggen, valideer die 
              met data, en help je dan prioriteiten te stellen. In 3-4 weken heb je een concreet plan 
              dat je direct kunt oppakken.
            </p>
            <p className="text-gray-900 dark:text-gray-100 mb-8 text-base leading-relaxed max-w-2xl">
              Daarnaast schrijf ik over AI en business. Mijn boek "Van idee naar impact" gaat over 
              hoe AI het maken van software fundamenteel verandert, en wat dat betekent voor 
              ondernemers in 2025. Maar dat is vooral achtergrond - mijn focus ligt op het helpen 
              van bedrijven die nu, vandaag, iets met AI willen doen.
            </p>
            <div className="mt-8 flex justify-start">
              <Link
                href="/boek"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl"
              >
                Meer over Milan
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Methodology Section */}
      <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-[#FFB88C]/5 via-[#9AD9A0]/5 to-[#9BCBFF]/5 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Mijn aanpak
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-16 text-center max-w-2xl mx-auto">
            Twee sporen, één doel: marge verhogen én een toekomstbestendig businessmodel. Geen dikke rapporten, maar tastbare verbeteringen.
          </p>
          
          {/* Visual Timeline/Flow */}
          <div className="relative mb-16">
            {/* Connecting line - starts under first dot, ends under button */}
            <div className="hidden md:block absolute left-1/2 w-1 bg-linear-to-b from-[#9BCBFF] via-[#9AD9A0] via-[#FFB88C] via-[#9AD9A0] to-[#9BCBFF] transform -translate-x-1/2 z-0" style={{ top: '4.5rem', bottom: '-6rem' }}></div>
            
            <div className="space-y-12">
              {/* Maand 1-2: Kickstart & Analyse */}
              <div className="relative flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2 flex justify-end md:pr-12">
                  <div className="bg-white dark:bg-black p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg max-w-md">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#9BCBFF] flex items-center justify-center text-white shadow-lg flex-shrink-0">
                        <Search className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Kickstart & analysefase</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Maand 1-2</p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Analyse van interne verspilling en kansen. Plan van aanpak met impact/effort matrix. 
                      Eerste AI-toepassingen verkennen.
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#9BCBFF] border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>
                <div className="w-full md:w-1/2"></div>
              </div>

              {/* Maand 3-4: Implementatie & Validatie */}
              <div className="relative flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="w-full md:w-1/2 flex justify-start md:pl-12">
                  <div className="bg-white dark:bg-black p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg max-w-md">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#9AD9A0] flex items-center justify-center text-white shadow-lg flex-shrink-0">
                        <Rocket className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Implementatie & validatie</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Maand 3-4</p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Concrete AI-toepassingen ontwikkelen. Meewerken aan oplossingen samen met developer. 
                      Roadmap bijstellen op basis van voortgang.
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#9AD9A0] border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>
                <div className="w-full md:w-1/2"></div>
              </div>

              {/* Maand 4-5: Trainen & Kennis Borgen */}
              <div className="relative flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2 flex justify-end md:pr-12">
                  <div className="bg-white dark:bg-black p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg max-w-md">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#FFB88C] flex items-center justify-center text-white shadow-lg flex-shrink-0">
                        <Users className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Trainen & kennis borgen</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Maand 4-5</p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Team trainen en kennis borgen. Automatiseringen finetunen. 
                      Eerste evaluatiemoment met jou en het team.
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#FFB88C] border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>
                <div className="w-full md:w-1/2"></div>
              </div>

              {/* Maand 5: Monitoring & Doorontwikkeling */}
              <div className="relative flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="w-full md:w-1/2 flex justify-start md:pl-12">
                  <div className="bg-white dark:bg-black p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg max-w-md">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#9AD9A0] flex items-center justify-center text-white shadow-lg flex-shrink-0 overflow-hidden">
                        <BarChart className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Monitoring, eindmeting & doorontwikkeling</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Maand 5</p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Feedback verwerken. Tweede ronde automatisering en optimalisatie. 
                      Evaluatie richting afronding.
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#9AD9A0] border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>
                <div className="w-full md:w-1/2"></div>
              </div>

              {/* Maand 6: Afronding & Overdracht */}
              <div className="relative flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2 flex justify-end md:pr-12">
                  <div className="bg-white dark:bg-black p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg max-w-md">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#9BCBFF] flex items-center justify-center text-white shadow-lg flex-shrink-0">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Afronding & overdracht</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Maand 6</p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Eindpresentatie voor jou en het team. Advies voor borging en doorontwikkeling. 
                      Overdracht documentatie en kennis. KPI's meten en evalueren.
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#9BCBFF] border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>
                <div className="w-full md:w-1/2"></div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12 relative z-20">
            <Link
              href="/proces"
              className="inline-flex items-center gap-2 px-8 py-3 btn-gradient-animated text-gray-900 rounded-full font-medium shadow-lg hover:shadow-xl"
            >
              <ListChecks className="w-5 h-5" />
              Bekijk mijn bewezen aanpak
            </Link>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Laten we praten over AI in jouw organisatie
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
            Heb je vragen over hoe AI jouw organisatie kan helpen? Of wil je meer weten over mijn aanpak? 
            Neem gerust contact op. Geen verkooppraatje, gewoon een gesprek.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@milanvanbruggen.nl"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#9BCBFF] text-gray-900 rounded-full font-medium hover:brightness-105 transition-all shadow-lg hover:shadow-xl"
            >
              <Mail className="w-5 h-5" />
              Mail Milan
            </a>
            <a
              href="https://linkedin.com/in/milanvanbruggen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-full font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
            >
              <Linkedin className="w-5 h-5" />
              Connect op LinkedIn
            </a>
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
