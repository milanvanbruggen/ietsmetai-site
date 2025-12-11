import Link from 'next/link';
import Image from 'next/image';
import { Search, Rocket, Users, BarChart, CheckCircle, ChevronRight, Zap, Target, ClipboardList, Map, TrendingUp } from 'lucide-react';
import Testimonials from '@/components/Testimonials';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mijn aanpak – Iets met AI',
  description: 'Een nuchtere, resultaatgerichte aanpak om je organisatie verder te brengen met AI. 6 maanden traject in 5 fases.',
};

export default function ProcesPage() {
  return (
    <div className="pt-16 min-h-screen bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="mb-6 sm:mb-8 text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Mijn aanpak
          </h1>
        </div>

        {/* Intro with Photo */}
        <div className="mb-10 sm:mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="prose prose-lg dark:prose-invert max-w-none text-left order-2 md:order-1">
            <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg mb-4 sm:mb-6">
              Je weet dat je iets met AI moet, maar waar begin je? Die vraag hoor ik constant. 
              En eerlijk? Het is een terechte vraag. Want waar liggen de echte kansen? Waar maak 
              je de grootste impact? En hoe zorg je dat het niet bij een experiment blijft, maar 
              echt iets oplevert?
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg mb-4 sm:mb-6">
              Mijn aanpak is nuchter en praktisch. Geen theoretische frameworks of dikke 
              rapporten die in een la verdwijnen. Ik werk vanuit rendement, niet vanuit uren. 
              En ik doe wat nodig is, niet wat &ldquo;mooi klinkt&rdquo;.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg mb-0">
              Ik ben geen externe adviseur. Ik ben een ondernemer die meedraait. Die het 
              bureaumodel van binnenuit begrijpt. Die strategie combineert met directe uitvoer. 
              En die altijd op zoek is naar verspilling en optimalisatie.
            </p>
          </div>
          {/* Photo - visible on tablet and up */}
          <div className="order-1 md:order-2">
            <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/milan-ai-fun.webp"
                alt="Milan van Bruggen"
                fill
                className="object-cover"
                style={{ objectPosition: 'right top' }}
              />
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-gray-200 dark:border-gray-800 my-10 sm:my-16"></div>

        {/* Visual Timeline with 5 Phases - Extended */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-8 text-center">
            Het traject: 6 maanden in 5 fases
          </h2>
          <div className="prose prose-lg max-w-2xl mx-auto text-center mb-10 sm:mb-16">
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
              Een gestructureerde aanpak die quick wins combineert met strategische langetermijnvisie.
            </p>
          </div>
          
          <div className="relative">
            {/* Mobile connecting line - center with fade out, extends under CTA (aligned with homepage) */}
            <div className="md:hidden absolute left-1/2 w-0.5 transform -translate-x-1/2 z-0" style={{ top: '1.5rem', bottom: '-4rem' }}>
              <div className="h-full bg-gradient-to-b from-blue-pastel via-green-pastel via-orange-pastel via-green-pastel to-transparent"></div>
            </div>
            {/* Desktop connecting line - starts under first dot, fades out at end */}
            <div className="hidden md:block absolute left-1/2 w-1 transform -translate-x-1/2 z-0" style={{ top: '12.5rem', bottom: '-12rem' }}>
              <div className="h-full relative">
                <div className="h-full bg-gradient-to-b from-blue-pastel via-green-pastel via-orange-pastel via-green-pastel to-blue-pastel"></div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-black dark:via-black/80 pointer-events-none"></div>
              </div>
            </div>
            
            <div className="space-y-8 md:space-y-16">
              {/* Fase 1: Maand 1-2 - Kickstart & Analyse */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-0 md:gap-8">
                {/* Mobile dot */}
                <div className="md:hidden absolute left-1/2 top-4 -translate-x-1/2 w-5 h-5 rounded-full bg-blue-pastel border-2 border-white dark:border-gray-900 shadow-lg z-10"></div>
                <div className="w-full md:w-1/2 flex justify-start md:justify-end pl-0 md:pl-0 md:pr-20 relative z-10 -mt-0 md:mt-0">
                  <div className="bg-white dark:bg-black p-4 sm:p-6 md:p-8 rounded-t-2xl rounded-b-none md:rounded-2xl border border-gray-200 dark:border-gray-800 border-b-0 md:border-b shadow-lg max-w-lg w-full">
                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-blue-pastel flex items-center justify-center text-white shadow-lg flex-shrink-0">
                        <Search className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">Kickstart & analysefase</h3>
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Maand 1-2</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">Wat gebeurt er?</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-3 text-xs sm:text-sm">
                        Kick-off met jou en het team. Analyse van externe en interne processen. 
                        Spotten van verspilling en kansen. Eerste AI-toepassingen verkennen en valideren.
                      </p>
                      <ul className="space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        <li className="flex items-start">
                          <span className="text-blue-pastel mr-2 font-bold">•</span>
                          <span>Interview en analyse van huidige processen</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-pastel mr-2 font-bold">•</span>
                          <span>Identificeren van verspilling en inefficiënties</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-pastel mr-2 font-bold">•</span>
                          <span>Eerste AI-toepassingen verkennen en testen</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-pastel mr-2 font-bold">•</span>
                          <span>Impact/effort analyse voor alle kansen</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Desktop connector lines - dashed, extending to cards */}
                <div className="hidden md:block absolute right-1/2 w-[calc(50%-8rem)] border-t-2 border-dashed border-blue-pastel" style={{ top: '50%' }}></div>
                <div className="hidden md:block absolute left-1/2 w-[calc(50%-8rem)] border-t-2 border-dashed border-blue-pastel" style={{ top: '50%' }}></div>
                {/* Desktop dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-blue-pastel border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>
                <div className="w-full md:w-1/2 flex justify-start pl-0 md:pl-20 relative z-10 -mt-0 md:-mt-8">
                  <div className="bg-[#EDF5FF] dark:bg-[#1E3A5F] p-4 sm:p-6 md:p-8 rounded-b-2xl rounded-t-none md:rounded-2xl border border-blue-pastel/30 border-t-0 md:border-t max-w-lg w-full shadow-lg">
                    <p className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Output:</p>
                    <ul className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-pastel mr-2 font-bold">•</span>
                        <span>Verbeterplan met impact/effort matrix</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-pastel mr-2 font-bold">•</span>
                        <span>Prioriteitenlijst met quick wins en strategische projecten</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-pastel mr-2 font-bold">•</span>
                        <span>KPI&apos;s en targets voor meetbare resultaten</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-pastel mr-2 font-bold">•</span>
                        <span>Plan van aanpak voor de komende maanden</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Fase 2: Maand 3-4 - Implementatie & Validatie */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-0 md:gap-8">
                {/* Mobile dot */}
                <div className="md:hidden absolute left-1/2 top-4 -translate-x-1/2 w-5 h-5 rounded-full bg-green-pastel border-2 border-white dark:border-gray-900 shadow-lg z-10"></div>
                {/* Phase block - order-1 on mobile, order-2 on desktop (right side) */}
                <div className="order-1 md:order-2 w-full md:w-1/2 flex justify-start pl-0 md:pl-20 relative z-10 -mt-0 md:mt-0">
                  <div className="bg-white dark:bg-black p-4 sm:p-6 md:p-8 rounded-t-2xl rounded-b-none md:rounded-2xl border border-gray-200 dark:border-gray-800 border-b-0 md:border-b shadow-lg max-w-lg w-full">
                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-green-pastel flex items-center justify-center text-white shadow-lg flex-shrink-0">
                        <Rocket className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">Implementatie & validatie</h3>
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Maand 3-4</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">Wat gebeurt er?</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-3 text-xs sm:text-sm">
                        Plan van aanpak maken voor AI/automation-oplossingen. Meewerken aan oplossingen 
                        samen met developer. Roadmap bijstellen op basis van voortgang en leerpunten.
                      </p>
                      <ul className="space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        <li className="flex items-start">
                          <span className="text-green-pastel mr-2 font-bold">•</span>
                          <span>Concrete AI-toepassingen ontwikkelen en implementeren</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-pastel mr-2 font-bold">•</span>
                          <span>Meewerken aan oplossingen samen met developer</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-pastel mr-2 font-bold">•</span>
                          <span>Testen en valideren van eerste resultaten</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-pastel mr-2 font-bold">•</span>
                          <span>Roadmap bijstellen op basis van voortgang</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Desktop connector lines */}
                <div className="hidden md:block absolute right-1/2 w-[calc(50%-8rem)] border-t-2 border-dashed border-green-pastel" style={{ top: '50%' }}></div>
                <div className="hidden md:block absolute left-1/2 w-[calc(50%-8rem)] border-t-2 border-dashed border-green-pastel" style={{ top: '50%' }}></div>
                {/* Desktop dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-green-pastel border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>
                {/* Output block - order-2 on mobile, order-1 on desktop (left side) */}
                <div className="order-2 md:order-1 w-full md:w-1/2 flex justify-start md:justify-end pl-0 md:pl-0 md:pr-20 relative z-10 -mt-0 md:-mt-8">
                  <div className="bg-[#EEF7EF] dark:bg-[#1E3F2E] p-4 sm:p-6 md:p-8 rounded-b-2xl rounded-t-none md:rounded-2xl border border-green-pastel/30 border-t-0 md:border-t max-w-lg w-full shadow-lg">
                    <p className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Output:</p>
                    <ul className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 space-y-2">
                      <li className="flex items-start">
                        <span className="text-green-pastel mr-2 font-bold">•</span>
                        <span>Concrete AI-toepassingen in ontwikkeling</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-pastel mr-2 font-bold">•</span>
                        <span>Bijgestelde roadmap gebaseerd op leerpunten</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-pastel mr-2 font-bold">•</span>
                        <span>Eerste resultaten zichtbaar en meetbaar</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-pastel mr-2 font-bold">•</span>
                        <span>Technische documentatie en handleidingen</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Fase 3: Maand 4-5 - Trainen & Kennis Borgen */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-0 md:gap-8">
                {/* Mobile dot */}
                <div className="md:hidden absolute left-1/2 top-4 -translate-x-1/2 w-5 h-5 rounded-full bg-orange-pastel border-2 border-white dark:border-gray-900 shadow-lg z-10"></div>
                <div className="w-full md:w-1/2 flex justify-start md:justify-end pl-0 md:pl-0 md:pr-20 relative z-10 -mt-0 md:mt-0">
                  <div className="bg-white dark:bg-black p-4 sm:p-6 md:p-8 rounded-t-2xl rounded-b-none md:rounded-2xl border border-gray-200 dark:border-gray-800 border-b-0 md:border-b shadow-lg max-w-lg w-full">
                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-orange-pastel flex items-center justify-center text-white shadow-lg flex-shrink-0">
                        <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">Trainen & kennis borgen</h3>
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Maand 4-5</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">Wat gebeurt er?</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-3 text-xs sm:text-sm">
                        Training en overdracht aan het team. Automatiseringen finetunen en optimaliseren. 
                        Eerste evaluatiemoment met jou en het team om feedback te verwerken.
                      </p>
                      <ul className="space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        <li className="flex items-start">
                          <span className="text-orange-pastel mr-2 font-bold">•</span>
                          <span>Praktische training van het team op nieuwe tools en processen</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-orange-pastel mr-2 font-bold">•</span>
                          <span>Automatiseringen finetunen op basis van gebruik</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-orange-pastel mr-2 font-bold">•</span>
                          <span>Kennis overdragen en documenteren</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-orange-pastel mr-2 font-bold">•</span>
                          <span>Eerste evaluatiemoment met feedback</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Desktop connector lines */}
                <div className="hidden md:block absolute right-1/2 w-[calc(50%-8rem)] border-t-2 border-dashed border-orange-pastel" style={{ top: '50%' }}></div>
                <div className="hidden md:block absolute left-1/2 w-[calc(50%-8rem)] border-t-2 border-dashed border-orange-pastel" style={{ top: '50%' }}></div>
                {/* Desktop dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-orange-pastel border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>
                <div className="w-full md:w-1/2 flex justify-start pl-0 md:pl-20 relative z-10 -mt-0 md:-mt-8">
                  <div className="bg-[#FFF4ED] dark:bg-[#3F2E1E] p-4 sm:p-6 md:p-8 rounded-b-2xl rounded-t-none md:rounded-2xl border border-orange-pastel/30 border-t-0 md:border-t max-w-lg w-full shadow-lg">
                    <p className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Output:</p>
                    <ul className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 space-y-2">
                      <li className="flex items-start">
                        <span className="text-orange-pastel mr-2 font-bold">•</span>
                        <span>Team getraind en zelfstandig aan de slag</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-pastel mr-2 font-bold">•</span>
                        <span>Geoptimaliseerde processen en automatiseringen</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-pastel mr-2 font-bold">•</span>
                        <span>Eerste evaluatie met feedback en verbeterpunten</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-pastel mr-2 font-bold">•</span>
                        <span>Training materiaal en documentatie beschikbaar</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Fase 4: Maand 5 - Monitoring & Doorontwikkeling */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-0 md:gap-8">
                {/* Mobile dot */}
                <div className="md:hidden absolute left-1/2 top-4 -translate-x-1/2 w-5 h-5 rounded-full bg-green-pastel border-2 border-white dark:border-gray-900 shadow-lg z-10"></div>
                {/* Phase block - order-1 on mobile, order-2 on desktop (right side) */}
                <div className="order-1 md:order-2 w-full md:w-1/2 flex justify-start pl-0 md:pl-20 relative z-10">
                  <div className="bg-white dark:bg-black p-4 sm:p-6 md:p-8 rounded-t-2xl rounded-b-none border border-gray-200 dark:border-gray-800 shadow-lg max-w-lg w-full">
                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-green-pastel flex items-center justify-center text-white shadow-lg flex-shrink-0">
                        <BarChart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">Monitoring & doorontwikkeling</h3>
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Maand 5</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">Wat gebeurt er?</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-3 text-xs sm:text-sm">
                        Feedback verwerken uit de evaluatie. Tweede ronde automatisering en optimalisatie. 
                        Monitoring van resultaten en impact. Evaluatie richting afronding.
                      </p>
                      <ul className="space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        <li className="flex items-start">
                          <span className="text-green-pastel mr-2 font-bold">•</span>
                          <span>Feedback verwerken en implementeren</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-pastel mr-2 font-bold">•</span>
                          <span>Tweede ronde automatisering en optimalisatie</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-pastel mr-2 font-bold">•</span>
                          <span>Monitoring van KPI&apos;s en resultaten</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-pastel mr-2 font-bold">•</span>
                          <span>Evaluatie richting afronding van het traject</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Desktop connector lines */}
                <div className="hidden md:block absolute right-1/2 w-[calc(50%-8rem)] border-t-2 border-dashed border-green-pastel" style={{ top: '50%' }}></div>
                <div className="hidden md:block absolute left-1/2 w-[calc(50%-8rem)] border-t-2 border-dashed border-green-pastel" style={{ top: '50%' }}></div>
                {/* Desktop dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-green-pastel border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>
                {/* Output block - order-2 on mobile, order-1 on desktop (left side) */}
                <div className="order-2 md:order-1 w-full md:w-1/2 flex justify-start md:justify-end pl-0 md:pl-0 md:pr-20 relative z-10 -mt-0 md:-mt-8">
                  <div className="bg-[#EEF7EF] dark:bg-[#1E3F2E] p-4 sm:p-6 md:p-8 rounded-b-2xl rounded-t-none md:rounded-2xl border border-green-pastel/30 border-t-0 md:border-t max-w-lg w-full shadow-lg">
                    <p className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Output:</p>
                    <ul className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 space-y-2">
                      <li className="flex items-start">
                        <span className="text-green-pastel mr-2 font-bold">•</span>
                        <span>Verbeterde en geoptimaliseerde processen</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-pastel mr-2 font-bold">•</span>
                        <span>Meetbare resultaten en KPI-rapportage</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-pastel mr-2 font-bold">•</span>
                        <span>Evaluatie van impact en resultaten</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-pastel mr-2 font-bold">•</span>
                        <span>Voorbereiding op overdracht</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Fase 5: Maand 6 - Afronding & Overdracht */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-0 md:gap-8">
                {/* Mobile dot */}
                <div className="md:hidden absolute left-1/2 top-4 -translate-x-1/2 w-5 h-5 rounded-full bg-blue-pastel border-2 border-white dark:border-gray-900 shadow-lg z-10"></div>
                <div className="w-full md:w-1/2 flex justify-start md:justify-end pl-0 md:pl-0 md:pr-20 relative z-10 -mt-0 md:mt-0">
                  <div className="bg-white dark:bg-black p-4 sm:p-6 md:p-8 rounded-t-2xl rounded-b-none md:rounded-2xl border border-gray-200 dark:border-gray-800 border-b-0 md:border-b shadow-lg max-w-lg w-full">
                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-blue-pastel flex items-center justify-center text-white shadow-lg flex-shrink-0">
                        <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">Afronding & overdracht</h3>
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Maand 6</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">Wat gebeurt er?</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-3 text-xs sm:text-sm">
                        Eindpresentatie voor jou en het team. Advies voor borging en doorontwikkeling. 
                        Overdracht van documentatie en kennis. KPI&apos;s meten en evalueren.
                      </p>
                      <ul className="space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        <li className="flex items-start">
                          <span className="text-blue-pastel mr-2 font-bold">•</span>
                          <span>Eindpresentatie met resultaten en impact</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-pastel mr-2 font-bold">•</span>
                          <span>Advies voor borging en doorontwikkeling</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-pastel mr-2 font-bold">•</span>
                          <span>Overdracht documentatie en kennis</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-pastel mr-2 font-bold">•</span>
                          <span>KPI&apos;s meten en finale evaluatie</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Desktop connector lines */}
                <div className="hidden md:block absolute right-1/2 w-[calc(50%-8rem)] border-t-2 border-dashed border-blue-pastel" style={{ top: '50%' }}></div>
                <div className="hidden md:block absolute left-1/2 w-[calc(50%-8rem)] border-t-2 border-dashed border-blue-pastel" style={{ top: '50%' }}></div>
                {/* Desktop dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-blue-pastel border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>
                <div className="w-full md:w-1/2 flex justify-start pl-0 md:pl-20 relative z-10 -mt-0 md:-mt-8">
                  <div className="bg-[#EDF5FF] dark:bg-[#1E3A5F] p-4 sm:p-6 md:p-8 rounded-b-2xl rounded-t-none md:rounded-2xl border border-blue-pastel/30 border-t-0 md:border-t max-w-lg w-full shadow-lg">
                    <p className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Output:</p>
                    <ul className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-pastel mr-2 font-bold">•</span>
                        <span>Eindpresentatie voor jou en het team</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-pastel mr-2 font-bold">•</span>
                        <span>Advies voor borging en doorontwikkeling</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-pastel mr-2 font-bold">•</span>
                        <span>Overdracht documentatie en kennis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-pastel mr-2 font-bold">•</span>
                        <span>KPI&apos;s gemeten en geëvalueerd</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-pastel mr-2 font-bold">•</span>
                        <span>Plan voor zelfstandige voortzetting</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline CTA */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 mb-16 sm:mb-24 lg:mb-32 flex justify-center text-center relative z-20">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 btn-gradient-animated text-gray-900 rounded-full font-semibold shadow-lg hover:shadow-xl text-sm sm:text-base"
        >
          Morgen aan de slag?
          <ChevronRight className="w-5 h-5" />
        </Link>
      </div>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Two Tracks Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-pastel/10 via-blue-pastel/10 to-orange-pastel/10 dark:from-black dark:via-gray-900 dark:to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12 text-center">
            Twee sporen, één doel
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] items-stretch gap-4 sm:gap-6">
            {/* Spoor 1 */}
            <div className="bg-white dark:bg-black p-4 sm:p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg flex flex-col">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 min-w-[2.5rem] min-h-[2.5rem] sm:min-w-[3rem] sm:min-h-[3rem] rounded-full bg-blue-pastel flex items-center justify-center text-white flex-shrink-0">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Quick wins & Standaardisatie</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                Huidige processen optimaliseren met AI. Quick wins die direct impact hebben op je 
                marge en efficiëntie. Resultaten zichtbaar binnen 4-6 weken.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                <li className="flex items-start">
                  <span className="text-blue-pastel mr-2 font-bold">•</span>
                  <span>Handmatig werk automatiseren</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-pastel mr-2 font-bold">•</span>
                  <span>Interne processen en communicatie versnellen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-pastel mr-2 font-bold">•</span>
                  <span>Meer standaardisatie voor schaalbaarheid</span>
                </li>
              </ul>
            </div>

            {/* Plus */}
            <div className="flex items-center justify-center text-3xl sm:text-4xl font-bold text-gray-400 dark:text-gray-500 py-2 lg:py-0">
              +
            </div>

            {/* Spoor 2 */}
            <div className="bg-white dark:bg-black p-4 sm:p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg flex flex-col">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 min-w-[2.5rem] min-h-[2.5rem] sm:min-w-[3rem] sm:min-h-[3rem] rounded-full bg-green-pastel flex items-center justify-center text-white flex-shrink-0">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Strategische groei</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                Nadenken over nieuwe proposities en verdienmodellen. Strategische keuzes die je 
                organisatie toekomstbestendig maken. Meebewegen met AI in plaats van erdoor 
                ingehaald worden.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                <li className="flex items-start">
                  <span className="text-green-pastel mr-2 font-bold">•</span>
                  <span>Nieuwe proposities ontwikkelen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-pastel mr-2 font-bold">•</span>
                  <span>Verdienmodellen herzien</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-pastel mr-2 font-bold">•</span>
                  <span>Toekomstbestendig businessmodel</span>
                </li>
              </ul>
            </div>

            {/* Equals */}
            <div className="flex items-center justify-center text-3xl sm:text-4xl font-bold text-gray-400 dark:text-gray-500 py-2 lg:py-0">
              =
            </div>

            {/* Uitkomst */}
            <div className="bg-white dark:bg-black p-4 sm:p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg flex flex-col">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 min-w-[2.5rem] min-h-[2.5rem] sm:min-w-[3rem] sm:min-h-[3rem] rounded-full bg-orange-pastel flex items-center justify-center text-white flex-shrink-0">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Je mist de boot niet</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                Je weet precies waar je moet beginnen. Je groeit mee met AI in plaats van erdoor 
                ingehaald te worden. Vol vertrouwen aan de slag.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                <li className="flex items-start">
                  <span className="text-orange-pastel mr-2 font-bold">•</span>
                  <span>Groei in je business</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-pastel mr-2 font-bold">•</span>
                  <span>Meer werkplezier</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-pastel mr-2 font-bold">•</span>
                  <span>Hogere kwaliteit</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1a3d2e] via-[#1f4a38] to-[#163528]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 text-center">
            Wat ik oplever
          </h2>
          <p className="text-base sm:text-lg text-green-pastel/80 mb-8 sm:mb-12 text-center max-w-2xl mx-auto">
            Geen adviesrapporten die in een la belanden. Wél tastbare verbeteringen die impact hebben.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-2xl hover:bg-white/15 transition-all">
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-pastel flex items-center justify-center text-[#1a3d2e]">
                  <ClipboardList className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Interviews & adoptiemeting</h4>
                  <p className="text-xs sm:text-sm text-gray-300">Interviews + medewerkerssurvey: processen in kaart, knelpunten, en AI-adoptiefase per team.</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-2xl hover:bg-white/15 transition-all">
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-pastel flex items-center justify-center text-[#1a3d2e]">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Top 5 initiatieven & Impact/Effort</h4>
                  <p className="text-xs sm:text-sm text-gray-300">Brainstorm op input uit interviews & survey → geprioriteerde top 5 + Impact/Effort-matrix.</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-2xl hover:bg-white/15 transition-all">
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-pastel flex items-center justify-center text-[#1a3d2e]">
                  <Map className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Gameplans & masterplan</h4>
                  <p className="text-xs sm:text-sm text-gray-300">Per initiatief een gameplan met tijdlijn; één masterplan dat alles samenbrengt.</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-2xl hover:bg-white/15 transition-all">
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-pastel flex items-center justify-center text-[#1a3d2e]">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Implementatie & metingen</h4>
                  <p className="text-xs sm:text-sm text-gray-300">Start- en eindmeting, advies per initiatief, welke doorpakken, plus sessies voor draagvlak en training.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Me Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-pastel/10 via-blue-pastel/10 to-orange-pastel/10 dark:from-black dark:via-gray-900 dark:to-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Photo - visible on tablet and up, order first on mobile */}
            <div className="order-1 md:order-2">
              <div className="relative w-full aspect-square max-w-sm mx-auto md:max-w-none rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/milan-ai-funki-pops.webp"
                  alt="Milan van Bruggen"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center top' }}
                />
              </div>
            </div>
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-10 text-left">
                Waarom ik?
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="text-green-pastel text-xl sm:text-2xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm sm:text-base">Niet zomaar een adviseur</h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Wel een ondernemer die meedraait</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="text-green-pastel text-xl sm:text-2xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm sm:text-base">Begrijpt het bureaumodel</h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Van binnenuit, door jarenlange ervaring</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="text-green-pastel text-xl sm:text-2xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm sm:text-base">Combineert strategie met uitvoer</h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Niet alleen praten, ook doen</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="text-green-pastel text-xl sm:text-2xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm sm:text-base">Werkt vanuit rendement</h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Niet vanuit uren, maar vanuit resultaat</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="text-green-pastel text-xl sm:text-2xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm sm:text-base">Doet wat nodig is</h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Niet wat &ldquo;mooi klinkt&rdquo;, maar wat impact heeft</p>
                  </div>
                </div>
                <div className="pt-6 sm:pt-10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 btn-gradient-animated text-gray-900 rounded-full font-semibold shadow-lg hover:shadow-xl text-sm sm:text-base"
                  >
                    Keer kennismaken?
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
