import Image from 'next/image';
import Link from 'next/link';
import { Search, Rocket, Users, BarChart, CheckCircle, ChevronRight, ListChecks, MessageCircle, Mail } from 'lucide-react';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-green-pastel/10 via-blue-pastel/10 to-orange-pastel/10 dark:from-black dark:via-gray-900 dark:to-black overflow-hidden">
        {/* Pattern background - right top, hidden on mobile */}
        <div className="hidden sm:block absolute top-0 right-0 w-full h-[120vh] sm:min-w-[600px] md:min-w-[800px] lg:min-w-[1000px] sm:min-h-[600px] md:min-h-[800px] lg:min-h-[1000px] opacity-20 sm:opacity-25 lg:opacity-30 dark:opacity-30 pointer-events-none">
          <div className="relative w-full h-full">
            <div 
              className="absolute inset-0 bg-blue-pastel"
              style={{
                maskImage: 'url(/images/patterns/imai-pattern-1-outline.svg)',
                WebkitMaskImage: 'url(/images/patterns/imai-pattern-1-outline.svg)',
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskPosition: 'top right',
                WebkitMaskPosition: 'top right',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat'
              }}
            ></div>
          </div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 items-center w-full py-8 md:py-0">
          {/* Mobile: Photo first, then text */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-none">
              Iets met AI – Breng je organisatie verder met AI
            </h1>
            <div className="inline-flex items-center bg-white dark:bg-gray-900 px-4 py-2.5 rounded-lg shadow-lg mb-6 transform -rotate-1 hover:rotate-0 transition-transform duration-200">
              <span className="text-sm font-semibold text-orange-pastel">Wat als je de boot mist?</span>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
              Ik help je met een nuchtere, resultaatgerichte aanpak die ik zelf jarenlang in mijn agency toepaste.
            </p>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto md:mx-0">
              Geen dikke rapporten, maar een praktisch plan waarmee je vol vertrouwen kunt beginnen om je doelen te verwezenlijken.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 btn-gradient-animated text-gray-900 rounded-full font-medium shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                <ListChecks className="w-5 h-5" />
                Mijn aanpak in vogelvlucht
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-full font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all text-sm sm:text-base"
              >
                <MessageCircle className="w-5 h-5" />
                Laten we praten
              </Link>
            </div>
          </div>

          {/* Photo - visible on all screen sizes */}
          <div className="order-1 md:order-2 relative flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-16 h-16 md:w-20 md:h-20 bg-green-pastel/30 blur-3xl rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 w-20 h-20 md:w-24 md:h-24 bg-blue-pastel/30 blur-3xl rounded-full"></div>
              <div className="relative">
                <Image
                  src="/images/imai-milan-avatar.png"
                  alt="Milan van Bruggen"
                  width={360}
                  height={360}
                  className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-[360px] lg:h-[360px] rounded-full object-cover border-4 border-white/80 dark:border-gray-900/80 shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative overflow-hidden">
        {/* Blue base background with radial gradients - less intense */}
        <div className="absolute inset-0 bg-blue-pastel/40">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,_var(--blue-pastel) / 0.4_0%,_transparent_70%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,_var(--green-pastel) / 0.4_0%,_transparent_75%)]"></div>
        </div>
        {/* Subtle dark vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.15)_100%)] pointer-events-none"></div>
        
        {/* Image on the left - full height of section (tablet and up) */}
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1/2 z-10">
          <Image
            src="/images/milan-samenwerken-ai-adoptie.webp"
            alt="Milan werkt samen met teams aan AI adoptie"
            fill
            className="object-cover"
            style={{ objectPosition: 'center top' }}
            priority
          />
        </div>

        {/* Content container */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-32">
            {/* Mobile image - only on small screens */}
            <div className="md:hidden relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
        <Image
                src="/images/milan-samenwerken-ai-adoptie.webp"
                alt="Milan werkt samen met teams aan AI adoptie"
                fill
                className="object-cover"
                style={{ objectPosition: 'center top' }}
          priority
        />
            </div>
            {/* Empty space for left column on tablet/desktop */}
            <div className="hidden md:block"></div>
            {/* Text content on the right */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-left">
                Over mij
              </h2>
              <div className="prose prose-lg max-w-none text-left">
                <p className="text-gray-900 dark:text-gray-100 mb-4 text-sm sm:text-base leading-relaxed">
                  Na bijna 12 jaar Pixelpillow te hebben opgebouwd, heb ik me gespecialiseerd in het 
                  helpen van bedrijven met AI-implementatie. En eerlijk? Ik zie dagelijks hoe organisaties 
                  worstelen met dezelfde vraag: waar begin je met AI? Welke kansen zijn er? En hoe zorg 
                  je dat het niet bij een experiment blijft, maar echt impact maakt?
                </p>
                <p className="text-gray-900 dark:text-gray-100 mb-4 text-sm sm:text-base leading-relaxed">
                  Mijn aanpak is nuchter en praktisch. Geen theoretische frameworks of dikke rapporten 
                  die in een la verdwijnen. Ik onderzoek eerst waar de echte kansen liggen, valideer die 
                  met data, en help je dan prioriteiten te stellen. In 3-4 weken heb je een concreet plan 
                  dat je direct kunt oppakken.
                </p>
                <p className="text-gray-900 dark:text-gray-100 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                  Daarnaast schrijf ik over AI en business. Mijn boek &ldquo;Van idee naar impact&rdquo; gaat over 
                  hoe AI het maken van software fundamenteel verandert, en wat dat betekent voor 
                  ondernemers in 2025. Maar dat is vooral achtergrond - mijn focus ligt op het helpen 
                  van bedrijven die nu, vandaag, iets met AI willen doen.
                </p>
                <div className="mt-6 sm:mt-8 flex justify-start">
                  <Link
                    href="/over-mij"
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
                  >
                    Meer over Milan
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Methodology Section */}
      <section id="services" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-pastel/5 via-green-pastel/5 to-blue-pastel/5 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">
            Mijn aanpak in vogelvlucht
          </h2>
          <div className="prose prose-lg max-w-none text-center mb-10 sm:mb-16">
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              Twee sporen, één doel: marge verhogen én een toekomstbestendig businessmodel. Geen dikke rapporten, maar tastbare verbeteringen.
            </p>
          </div>
          
          {/* Visual Timeline/Flow */}
          <div className="relative mb-6 sm:mb-8">
            {/* Mobile connecting line - center with fade out */}
            <div className="md:hidden absolute left-1/2 w-0.5 transform -translate-x-1/2 z-0" style={{ top: '1.5rem', bottom: '0' }}>
              <div className="h-full bg-gradient-to-b from-blue-pastel via-green-pastel via-orange-pastel via-green-pastel to-transparent"></div>
            </div>
            {/* Desktop connecting line - center */}
            <div className="hidden md:block absolute left-1/2 w-1 transform -translate-x-1/2 z-0" style={{ top: '4.5rem', bottom: '-12rem' }}>
              <div className="h-full bg-gradient-to-b from-blue-pastel via-green-pastel via-orange-pastel via-green-pastel via-blue-pastel to-transparent"></div>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              {/* Maand 1-2: Kickstart & Analyse */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
                {/* Mobile dot */}
                <div className="md:hidden absolute left-1/2 top-4 -translate-x-1/2 w-5 h-5 rounded-full bg-blue-pastel border-2 border-white dark:border-gray-900 shadow-lg z-10"></div>
                <div className="w-full md:w-1/2 flex justify-start md:justify-end pl-0 md:pl-0 md:pr-20 relative z-10">
                  <div className="bg-white dark:bg-black p-4 sm:p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg max-w-md w-full">
                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-pastel flex items-center justify-center text-white shadow-lg flex-shrink-0">
                        <Search className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Kickstart & analysefase</h3>
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Maand 1-2</p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                      Analyse van interne verspilling en kansen. Plan van aanpak met impact/effort matrix. 
                      Eerste AI-toepassingen verkennen.
                    </p>
                  </div>
                </div>
                {/* Desktop connector line left - dashed */}
                <div className="hidden md:block absolute right-1/2 w-[calc(50%-8rem)] border-t-2 border-dashed border-blue-pastel" style={{ top: '50%' }}></div>
                {/* Desktop dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-pastel border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>
                <div className="hidden md:block w-full md:w-1/2"></div>
              </div>

              {/* Maand 3-4: Implementatie & Validatie */}
              <div className="relative flex flex-col md:flex-row-reverse items-start md:items-center gap-2 md:gap-4">
                {/* Mobile dot */}
                <div className="md:hidden absolute left-1/2 top-4 -translate-x-1/2 w-5 h-5 rounded-full bg-green-pastel border-2 border-white dark:border-gray-900 shadow-lg z-10"></div>
                <div className="w-full md:w-1/2 flex justify-start md:justify-start pl-0 md:pl-20 relative z-10">
                  <div className="bg-white dark:bg-black p-4 sm:p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg max-w-md w-full">
                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-pastel flex items-center justify-center text-white shadow-lg flex-shrink-0">
                        <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Implementatie & validatie</h3>
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Maand 3-4</p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                      Concrete AI-toepassingen ontwikkelen. Meewerken aan oplossingen samen met developer. 
                      Roadmap bijstellen op basis van voortgang.
                    </p>
                  </div>
                </div>
                {/* Desktop connector line right - dashed */}
                <div className="hidden md:block absolute left-1/2 w-[calc(50%-8rem)] border-t-2 border-dashed border-green-pastel" style={{ top: '50%' }}></div>
                {/* Desktop dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-green-pastel border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>
                <div className="hidden md:block w-full md:w-1/2"></div>
              </div>

              {/* Maand 4-5: Trainen & Kennis Borgen */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
                {/* Mobile dot */}
                <div className="md:hidden absolute left-1/2 top-4 -translate-x-1/2 w-5 h-5 rounded-full bg-orange-pastel border-2 border-white dark:border-gray-900 shadow-lg z-10"></div>
                <div className="w-full md:w-1/2 flex justify-start md:justify-end pl-0 md:pl-0 md:pr-20 relative z-10">
                  <div className="bg-white dark:bg-black p-4 sm:p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg max-w-md w-full">
                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-pastel flex items-center justify-center text-white shadow-lg flex-shrink-0">
                        <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Trainen & kennis borgen</h3>
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Maand 4-5</p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                      Team trainen en kennis borgen. Automatiseringen finetunen. 
                      Eerste evaluatiemoment met jou en het team.
                    </p>
                  </div>
                </div>
                {/* Desktop connector line left - dashed */}
                <div className="hidden md:block absolute right-1/2 w-[calc(50%-8rem)] border-t-2 border-dashed border-orange-pastel" style={{ top: '50%' }}></div>
                {/* Desktop dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-orange-pastel border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>
                <div className="hidden md:block w-full md:w-1/2"></div>
        </div>

              {/* Maand 5: Monitoring & Doorontwikkeling */}
              <div className="relative flex flex-col md:flex-row-reverse items-start md:items-center gap-2 md:gap-4">
                {/* Mobile dot */}
                <div className="md:hidden absolute left-1/2 top-4 -translate-x-1/2 w-5 h-5 rounded-full bg-green-pastel border-2 border-white dark:border-gray-900 shadow-lg z-10"></div>
                <div className="w-full md:w-1/2 flex justify-start md:justify-start pl-0 md:pl-20 relative z-10">
                  <div className="bg-white dark:bg-black p-4 sm:p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg max-w-md w-full">
                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-pastel flex items-center justify-center text-white shadow-lg flex-shrink-0 overflow-hidden">
                        <BarChart className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Monitoring & doorontwikkeling</h3>
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Maand 5</p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                      Feedback verwerken. Tweede ronde automatisering en optimalisatie. 
                      Evaluatie richting afronding.
                    </p>
                  </div>
                </div>
                {/* Desktop connector line right - dashed */}
                <div className="hidden md:block absolute left-1/2 w-[calc(50%-8rem)] border-t-2 border-dashed border-green-pastel" style={{ top: '50%' }}></div>
                {/* Desktop dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-green-pastel border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>
                <div className="hidden md:block w-full md:w-1/2"></div>
              </div>

              {/* Maand 6: Afronding & Overdracht */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
                {/* Mobile dot */}
                <div className="md:hidden absolute left-1/2 top-4 -translate-x-1/2 w-5 h-5 rounded-full bg-blue-pastel border-2 border-white dark:border-gray-900 shadow-lg z-10"></div>
                <div className="w-full md:w-1/2 flex justify-start md:justify-end pl-0 md:pl-0 md:pr-20 relative z-10">
                  <div className="bg-white dark:bg-black p-4 sm:p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg max-w-md w-full">
                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-pastel flex items-center justify-center text-white shadow-lg flex-shrink-0">
                        <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Afronding & overdracht</h3>
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Maand 6</p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                      Eindpresentatie voor jou en het team. Advies voor borging en doorontwikkeling. 
                      Overdracht documentatie en kennis. KPI&apos;s meten en evalueren.
                    </p>
                  </div>
                </div>
                {/* Desktop connector line left - dashed */}
                <div className="hidden md:block absolute right-1/2 w-[calc(50%-8rem)] border-t-2 border-dashed border-blue-pastel" style={{ top: '50%' }}></div>
                {/* Desktop dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-pastel border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>
                <div className="hidden md:block w-full md:w-1/2"></div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-8 sm:mt-12 relative z-20">
            <Link
              href="/proces"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 btn-gradient-animated text-gray-900 rounded-full font-medium shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              <ListChecks className="w-5 h-5" />
              Bekijk mijn bewezen aanpak
            </Link>
          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
            Laten we praten over AI in jouw organisatie
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 sm:mb-12">
            Heb je vragen over hoe AI jouw organisatie kan helpen? Of wil je meer weten over mijn aanpak? 
            Neem gerust contact op. Geen verkooppraatje, gewoon een gesprek.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-blue-pastel text-gray-900 rounded-full font-medium hover:brightness-105 transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              <Mail className="w-5 h-5" />
              Neem contact op
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-full font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all text-sm sm:text-base"
            >
              <MessageCircle className="w-5 h-5" />
              Stuur een bericht
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
