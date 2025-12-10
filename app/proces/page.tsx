import Link from 'next/link';
import Image from 'next/image';
import { Search, Rocket, Users, BarChart, CheckCircle, ChevronRight, Zap, Target, ClipboardList, Map, TrendingUp } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mijn aanpak – Iets met AI',
  description: 'Een nuchtere, resultaatgerichte aanpak om je organisatie verder te brengen met AI. 6 maanden traject in 5 fases.',
};

export default function ProcesPage() {
  return (
    <div className="pt-16 min-h-screen bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="mb-8 text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Mijn aanpak
          </h1>
        </div>

        {/* Intro with Photo */}
        <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="prose prose-lg dark:prose-invert max-w-none text-left">
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
              Je weet dat je iets met AI moet, maar waar begin je? Die vraag hoor ik constant. 
              En eerlijk? Het is een terechte vraag. Want waar liggen de echte kansen? Waar maak 
              je de grootste impact? En hoe zorg je dat het niet bij een experiment blijft, maar 
              echt iets oplevert?
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
              Mijn aanpak is nuchter en praktisch. Geen theoretische frameworks of dikke 
              rapporten die in een la verdwijnen. Ik werk vanuit rendement, niet vanuit uren. 
              En ik doe wat nodig is, niet wat "mooi klinkt".
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
              Ik ben geen externe adviseur. Ik ben een ondernemer die meedraait. Die het 
              bureaumodel van binnenuit begrijpt. Die strategie combineert met directe uitvoer. 
              En die altijd op zoek is naar verspilling en optimalisatie.
            </p>
          </div>
          <div className="hidden lg:block">
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
        <div className="border-t border-gray-200 dark:border-gray-800 my-16"></div>

        {/* Visual Timeline with 5 Phases - Extended */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Het traject: 6 maanden in 5 fases
          </h2>
          <div className="prose prose-lg max-w-2xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Een gestructureerde aanpak die quick wins combineert met strategische langetermijnvisie.
            </p>
          </div>
          
          <div className="relative">
            {/* Connecting line - starts under first dot, fades out at end */}
            <div className="hidden md:block absolute left-1/2 w-1 transform -translate-x-1/2 z-0" style={{ top: '12.5rem', bottom: '-12rem' }}>
              <div className="h-full relative">
                <div className="h-full bg-gradient-to-b from-[#9BCBFF] via-[#9AD9A0] via-[#FFB88C] via-[#9AD9A0] to-[#9BCBFF]"></div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-black dark:via-black/80 pointer-events-none"></div>
              </div>
            </div>
            
            <div className="space-y-16">
              {/* Fase 1: Maand 1-2 - Kickstart & Analyse */}
              <div className="relative flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2 flex justify-end md:pr-20 relative z-10">
                  <div className="bg-white dark:bg-black p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg max-w-lg">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full bg-[#9BCBFF] flex items-center justify-center text-white shadow-lg flex-shrink-0">
                        <Search className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Kickstart & analysefase</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Maand 1-2</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Wat gebeurt er?</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        Kick-off met jou en het team. Analyse van externe en interne processen. 
                        Spotten van verspilling en kansen. Eerste AI-toepassingen verkennen en valideren.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <li className="flex items-start">
                          <span className="text-[#9BCBFF] mr-2 font-bold">•</span>
                          <span>Interview en analyse van huidige processen</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#9BCBFF] mr-2 font-bold">•</span>
                          <span>Identificeren van verspilling en inefficiënties</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#9BCBFF] mr-2 font-bold">•</span>
                          <span>Eerste AI-toepassingen verkennen en testen</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#9BCBFF] mr-2 font-bold">•</span>
                          <span>Impact/effort analyse voor alle kansen</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Connector lines - dashed, extending to cards */}
                <div className="hidden md:block absolute right-1/2 w-[calc(50%-8rem)] border-t-2 border-dashed border-[#9BCBFF]" style={{ top: '50%' }}></div>
                <div className="hidden md:block absolute left-1/2 w-[calc(50%-8rem)] border-t-2 border-dashed border-[#9BCBFF]" style={{ top: '50%' }}></div>
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#9BCBFF] border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>
                <div className="w-full md:w-1/2 flex justify-start md:pl-20 relative z-10">
                  <div className="bg-[#EDF5FF] dark:bg-[#1E3A5F] p-8 rounded-2xl border border-[#9BCBFF]/30 max-w-lg">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Output:</p>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                      <li className="flex items-start">
                        <span className="text-[#9BCBFF] mr-2 font-bold">•</span>
                        <span>Verbeterplan met impact/effort matrix</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#9BCBFF] mr-2 font-bold">•</span>
                        <span>Prioriteitenlijst met quick wins en strategische projecten</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#9BCBFF] mr-2 font-bold">•</span>
                        <span>KPI's en targets voor meetbare resultaten</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#9BCBFF] mr-2 font-bold">•</span>
                        <span>Plan van aanpak voor de komende maanden</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Fase 2: Maand 3-4 - Implementatie & Validatie */}
              <div className="relative flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2 flex justify-end md:pr-20 relative z-10">
                  <div className="bg-[#EEF7EF] dark:bg-[#1E3F2E] p-8 rounded-2xl border border-[#9AD9A0]/30 max-w-lg">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Output:</p>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                      <li className="flex items-start">
                        <span className="text-[#9AD9A0] mr-2 font-bold">•</span>
                        <span>Concrete AI-toepassingen in ontwikkeling</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#9AD9A0] mr-2 font-bold">•</span>
                        <span>Bijgestelde roadmap gebaseerd op leerpunten</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#9AD9A0] mr-2 font-bold">•</span>
                        <span>Eerste resultaten zichtbaar en meetbaar</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#9AD9A0] mr-2 font-bold">•</span>
                        <span>Technische documentatie en handleidingen</span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Connector lines - dashed, extending to cards */}
                <div className="hidden md:block absolute right-1/2 w-[calc(50%-8rem)] border-t-2 border-dashed border-[#9AD9A0]" style={{ top: '50%' }}></div>
                <div className="hidden md:block absolute left-1/2 w-[calc(50%-8rem)] border-t-2 border-dashed border-[#9AD9A0]" style={{ top: '50%' }}></div>
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#9AD9A0] border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>
                <div className="w-full md:w-1/2 flex justify-start md:pl-20 relative z-10">
                  <div className="bg-white dark:bg-black p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg max-w-lg">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full bg-[#9AD9A0] flex items-center justify-center text-white shadow-lg flex-shrink-0">
                        <Rocket className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Implementatie & validatie</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Maand 3-4</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Wat gebeurt er?</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        Plan van aanpak maken voor AI/automation-oplossingen. Meewerken aan oplossingen 
                        samen met developer. Roadmap bijstellen op basis van voortgang en leerpunten.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <li className="flex items-start">
                          <span className="text-[#9AD9A0] mr-2 font-bold">•</span>
                          <span>Concrete AI-toepassingen ontwikkelen en implementeren</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#9AD9A0] mr-2 font-bold">•</span>
                          <span>Meewerken aan oplossingen samen met developer</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#9AD9A0] mr-2 font-bold">•</span>
                          <span>Testen en valideren van eerste resultaten</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#9AD9A0] mr-2 font-bold">•</span>
                          <span>Roadmap bijstellen op basis van voortgang</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fase 3: Maand 4-5 - Trainen & Kennis Borgen */}
              <div className="relative flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2 flex justify-end md:pr-20 relative z-10">
                  <div className="bg-white dark:bg-black p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg max-w-lg">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full bg-[#FFB88C] flex items-center justify-center text-white shadow-lg flex-shrink-0">
                        <Users className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Trainen & kennis borgen</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Maand 4-5</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Wat gebeurt er?</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        Training en overdracht aan het team. Automatiseringen finetunen en optimaliseren. 
                        Eerste evaluatiemoment met jou en het team om feedback te verwerken.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <li className="flex items-start">
                          <span className="text-[#FFB88C] mr-2 font-bold">•</span>
                          <span>Praktische training van het team op nieuwe tools en processen</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#FFB88C] mr-2 font-bold">•</span>
                          <span>Automatiseringen finetunen op basis van gebruik</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#FFB88C] mr-2 font-bold">•</span>
                          <span>Kennis overdragen en documenteren</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#FFB88C] mr-2 font-bold">•</span>
                          <span>Eerste evaluatiemoment met feedback</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Connector lines - dashed, extending to cards */}
                <div className="hidden md:block absolute right-1/2 w-[calc(50%-8rem)] border-t-2 border-dashed border-[#FFB88C]" style={{ top: '50%' }}></div>
                <div className="hidden md:block absolute left-1/2 w-[calc(50%-8rem)] border-t-2 border-dashed border-[#FFB88C]" style={{ top: '50%' }}></div>
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#FFB88C] border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>
                <div className="w-full md:w-1/2 flex justify-start md:pl-20 relative z-10">
                  <div className="bg-[#FFF4ED] dark:bg-[#3F2E1E] p-8 rounded-2xl border border-[#FFB88C]/30 max-w-lg">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Output:</p>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                      <li className="flex items-start">
                        <span className="text-[#FFB88C] mr-2 font-bold">•</span>
                        <span>Team getraind en zelfstandig aan de slag</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FFB88C] mr-2 font-bold">•</span>
                        <span>Geoptimaliseerde processen en automatiseringen</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FFB88C] mr-2 font-bold">•</span>
                        <span>Eerste evaluatie met feedback en verbeterpunten</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FFB88C] mr-2 font-bold">•</span>
                        <span>Training materiaal en documentatie beschikbaar</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Fase 4: Maand 5 - Monitoring & Doorontwikkeling */}
              <div className="relative flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2 flex justify-end md:pr-20 relative z-10">
                  <div className="bg-[#EEF7EF] dark:bg-[#1E3F2E] p-8 rounded-2xl border border-[#9AD9A0]/30 max-w-lg">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Output:</p>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                      <li className="flex items-start">
                        <span className="text-[#9AD9A0] mr-2 font-bold">•</span>
                        <span>Verbeterde en geoptimaliseerde processen</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#9AD9A0] mr-2 font-bold">•</span>
                        <span>Meetbare resultaten en KPI-rapportage</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#9AD9A0] mr-2 font-bold">•</span>
                        <span>Evaluatie van impact en resultaten</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#9AD9A0] mr-2 font-bold">•</span>
                        <span>Voorbereiding op overdracht</span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Connector lines - dashed, extending to cards */}
                <div className="hidden md:block absolute right-1/2 w-[calc(50%-8rem)] border-t-2 border-dashed border-[#9AD9A0]" style={{ top: '50%' }}></div>
                <div className="hidden md:block absolute left-1/2 w-[calc(50%-8rem)] border-t-2 border-dashed border-[#9AD9A0]" style={{ top: '50%' }}></div>
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#9AD9A0] border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>
                <div className="w-full md:w-1/2 flex justify-start md:pl-20 relative z-10">
                  <div className="bg-white dark:bg-black p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg max-w-lg">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full bg-[#9AD9A0] flex items-center justify-center text-white shadow-lg flex-shrink-0">
                        <BarChart className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Monitoring, eindmeting & doorontwikkeling</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Maand 5</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Wat gebeurt er?</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        Feedback verwerken uit de evaluatie. Tweede ronde automatisering en optimalisatie. 
                        Monitoring van resultaten en impact. Evaluatie richting afronding.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <li className="flex items-start">
                          <span className="text-[#9AD9A0] mr-2 font-bold">•</span>
                          <span>Feedback verwerken en implementeren</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#9AD9A0] mr-2 font-bold">•</span>
                          <span>Tweede ronde automatisering en optimalisatie</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#9AD9A0] mr-2 font-bold">•</span>
                          <span>Monitoring van KPI's en resultaten</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#9AD9A0] mr-2 font-bold">•</span>
                          <span>Evaluatie richting afronding van het traject</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fase 5: Maand 6 - Afronding & Overdracht */}
              <div className="relative flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2 flex justify-end md:pr-20 relative z-10">
                  <div className="bg-white dark:bg-black p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg max-w-lg">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full bg-[#9BCBFF] flex items-center justify-center text-white shadow-lg flex-shrink-0">
                        <CheckCircle className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Afronding & overdracht</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Maand 6</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Wat gebeurt er?</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        Eindpresentatie voor jou en het team. Advies voor borging en doorontwikkeling. 
                        Overdracht van documentatie en kennis. KPI's meten en evalueren.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <li className="flex items-start">
                          <span className="text-[#9BCBFF] mr-2 font-bold">•</span>
                          <span>Eindpresentatie met resultaten en impact</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#9BCBFF] mr-2 font-bold">•</span>
                          <span>Advies voor borging en doorontwikkeling</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#9BCBFF] mr-2 font-bold">•</span>
                          <span>Overdracht documentatie en kennis</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#9BCBFF] mr-2 font-bold">•</span>
                          <span>KPI's meten en finale evaluatie</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Connector lines - dashed, extending to cards */}
                <div className="hidden md:block absolute right-1/2 w-[calc(50%-8rem)] border-t-2 border-dashed border-[#9BCBFF]" style={{ top: '50%' }}></div>
                <div className="hidden md:block absolute left-1/2 w-[calc(50%-8rem)] border-t-2 border-dashed border-[#9BCBFF]" style={{ top: '50%' }}></div>
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#9BCBFF] border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>
                <div className="w-full md:w-1/2 flex justify-start md:pl-20 relative z-10">
                  <div className="bg-[#EDF5FF] dark:bg-[#1E3A5F] p-8 rounded-2xl border border-[#9BCBFF]/30 max-w-lg">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Output:</p>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                      <li className="flex items-start">
                        <span className="text-[#9BCBFF] mr-2 font-bold">•</span>
                        <span>Eindpresentatie voor jou en het team</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#9BCBFF] mr-2 font-bold">•</span>
                        <span>Advies voor borging en doorontwikkeling</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#9BCBFF] mr-2 font-bold">•</span>
                        <span>Overdracht documentatie en kennis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#9BCBFF] mr-2 font-bold">•</span>
                        <span>KPI's gemeten en geëvalueerd</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#9BCBFF] mr-2 font-bold">•</span>
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-32 flex justify-center text-center relative z-20">
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 px-8 py-3 btn-gradient-animated text-gray-900 rounded-full font-semibold shadow-lg hover:shadow-xl"
        >
          Morgen aan de slag?
          <ChevronRight className="w-5 h-5" />
        </Link>
      </div>

      {/* Two Tracks Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#9AD9A0]/10 via-[#9BCBFF]/10 to-[#FFB88C]/10 dark:from-black dark:via-gray-900 dark:to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-left">
            Twee sporen, één doel
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] items-stretch gap-6">
            {/* Spoor 1 */}
            <div className="bg-white dark:bg-black p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 min-w-[3rem] min-h-[3rem] rounded-full bg-[#9BCBFF] flex items-center justify-center text-white flex-shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Quick wins & Standaardisatie</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Huidige processen optimaliseren met AI. Quick wins die direct impact hebben op je 
                marge en efficiëntie. Resultaten zichtbaar binnen 4-6 weken.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="text-[#9BCBFF] mr-2 font-bold">•</span>
                  <span>Handmatig werk automatiseren</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9BCBFF] mr-2 font-bold">•</span>
                  <span>Interne processen en communicatie versnellen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9BCBFF] mr-2 font-bold">•</span>
                  <span>Meer standaardisatie voor schaalbaarheid</span>
                </li>
              </ul>
            </div>

            {/* Plus */}
            <div className="hidden lg:flex items-center justify-center text-4xl font-bold text-gray-400 dark:text-gray-500">
              +
            </div>

            {/* Spoor 2 */}
            <div className="bg-white dark:bg-black p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 min-w-[3rem] min-h-[3rem] rounded-full bg-[#9AD9A0] flex items-center justify-center text-white flex-shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Strategische groei</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Nadenken over nieuwe proposities en verdienmodellen. Strategische keuzes die je 
                organisatie toekomstbestendig maken. Meebewegen met AI in plaats van erdoor 
                ingehaald worden.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="text-[#9AD9A0] mr-2 font-bold">•</span>
                  <span>Nieuwe proposities ontwikkelen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9AD9A0] mr-2 font-bold">•</span>
                  <span>Verdienmodellen herzien</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9AD9A0] mr-2 font-bold">•</span>
                  <span>Toekomstbestendig businessmodel</span>
                </li>
              </ul>
            </div>

            {/* Equals */}
            <div className="hidden lg:flex items-center justify-center text-4xl font-bold text-gray-400 dark:text-gray-500">
              =
            </div>

            {/* Uitkomst */}
            <div className="bg-white dark:bg-black p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 min-w-[3rem] min-h-[3rem] rounded-full bg-[#FFB88C] flex items-center justify-center text-white flex-shrink-0">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Je mist de boot niet</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Je weet precies waar je moet beginnen. Je groeit mee met AI in plaats van erdoor 
                ingehaald te worden. Vol vertrouwen aan de slag.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="text-[#FFB88C] mr-2 font-bold">•</span>
                  <span>Groei in je business</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFB88C] mr-2 font-bold">•</span>
                  <span>Meer werkplezier</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFB88C] mr-2 font-bold">•</span>
                  <span>Hogere kwaliteit</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1a3d2e] via-[#1f4a38] to-[#163528]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 text-left">
            Wat ik oplever
          </h2>
          <p className="text-lg text-[#9AD9A0]/80 mb-12 text-left max-w-2xl">
            Geen adviesrapporten die in een la belanden. Wél tastbare verbeteringen die impact hebben.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/15 transition-all">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-[#9AD9A0] flex items-center justify-center text-[#1a3d2e]">
                  <ClipboardList className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Interviews & adoptiemeting</h4>
                  <p className="text-sm text-gray-300">Interviews + medewerkerssurvey: processen in kaart, knelpunten, en AI-adoptiefase per team.</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/15 transition-all">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-[#9AD9A0] flex items-center justify-center text-[#1a3d2e]">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Top 5 initiatieven & Impact/Effort</h4>
                  <p className="text-sm text-gray-300">Brainstorm op input uit interviews & survey → geprioriteerde top 5 + Impact/Effort-matrix (Quick Wins, Strategisch, etc.).</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/15 transition-all">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-[#9AD9A0] flex items-center justify-center text-[#1a3d2e]">
                  <Map className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Gameplans & masterplan</h4>
                  <p className="text-sm text-gray-300">Per initiatief een gameplan met tijdlijn; één masterplan dat alles samenbrengt.</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/15 transition-all">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-[#9AD9A0] flex items-center justify-center text-[#1a3d2e]">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Implementatie & metingen</h4>
                  <p className="text-sm text-gray-300">Start- en eindmeting, advies per initiatief, welke doorpakken, plus sessies voor draagvlak en training.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Me Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#9AD9A0]/10 via-[#9BCBFF]/10 to-[#FFB88C]/10 dark:from-black dark:via-gray-900 dark:to-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-left">
                Waarom ik?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-[#9AD9A0] text-2xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Niet zomaar een adviseur</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Wel een ondernemer die meedraait</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#9AD9A0] text-2xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Begrijpt het bureaumodel</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Van binnenuit, door jarenlange ervaring</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#9AD9A0] text-2xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Combineert strategie met uitvoer</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Niet alleen praten, ook doen</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#9AD9A0] text-2xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Werkt vanuit rendement</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Niet vanuit uren, maar vanuit resultaat</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#9AD9A0] text-2xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Doet wat nodig is</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Niet wat "mooi klinkt", maar wat impact heeft</p>
                  </div>
                </div>
                <div className="pt-10">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 px-8 py-3 btn-gradient-animated text-gray-900 rounded-full font-semibold shadow-lg hover:shadow-xl"
                  >
                    Keer kennismaken?
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/milan-ai-funki-pops.webp"
                  alt="Milan van Bruggen"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center top' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
