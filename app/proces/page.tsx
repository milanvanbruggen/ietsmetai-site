import Link from 'next/link';

export default function ProcesPage() {
  return (
    <div className="pt-16 min-h-screen bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Mijn aanpak
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">
            Twee sporen, één doel: marge verhogen én een toekomstbestendig businessmodel
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-500">
            Een praktische aanpak | 6 maanden traject
          </p>
        </div>

        {/* Intro */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
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

        {/* Two Tracks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-[#9BCBFF]/20 to-[#9AD9A0]/20 dark:from-[#9BCBFF]/10 dark:to-[#9AD9A0]/10 p-8 rounded-2xl border border-[#9BCBFF]/30 dark:border-[#9BCBFF]/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#9BCBFF] flex items-center justify-center text-white font-bold text-xl">1</div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Korte termijn</h3>
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

          <div className="bg-gradient-to-br from-[#9AD9A0]/20 to-[#FFB88C]/20 dark:from-[#9AD9A0]/10 dark:to-[#FFB88C]/10 p-8 rounded-2xl border border-[#9AD9A0]/30 dark:border-[#9AD9A0]/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#9AD9A0] flex items-center justify-center text-white font-bold text-xl">2</div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Lange termijn</h3>
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
        </div>

        {/* 6-Month Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Het traject: 6 maanden
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-[#9BCBFF] via-[#9AD9A0] to-[#FFB88C] hidden md:block"></div>
            
            <div className="space-y-8">
              {/* Maand 1 */}
              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#9BCBFF] to-[#9AD9A0] flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                  1
                </div>
                <div className="flex-1 bg-white dark:bg-black p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Kickstart & analysefase</h3>
                    <span className="px-3 py-1 bg-[#9BCBFF]/20 text-[#9BCBFF] rounded-full text-sm font-medium">2 dagen/week</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Kick-off met jou en het team. Analyse van externe en interne processen. 
                    Spotten van quick wins. Eerste AI-toepassingen verkennen.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Output:</p>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Verbeterplan met impact/effort matrix</li>
                      <li>• Prioriteitenlijst</li>
                      <li>• KPI's en targets</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Maand 2 */}
              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#9AD9A0] to-[#9BCBFF] flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                  2
                </div>
                <div className="flex-1 bg-white dark:bg-black p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Implementatie & validatie</h3>
                    <span className="px-3 py-1 bg-[#9AD9A0]/20 text-[#9AD9A0] rounded-full text-sm font-medium">1,5 dag/week</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Plan van aanpak maken voor AI/automation-oplossingen. Meewerken aan oplossingen 
                    samen met developer. Roadmap bijstellen op basis van voortgang.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Output:</p>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Concrete AI-toepassingen in ontwikkeling</li>
                      <li>• Bijgestelde roadmap</li>
                      <li>• Eerste resultaten zichtbaar</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Maand 3 */}
              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#FFB88C] to-[#9AD9A0] flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                  3
                </div>
                <div className="flex-1 bg-white dark:bg-black p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Trainen & kennis borgen</h3>
                    <span className="px-3 py-1 bg-[#FFB88C]/20 text-[#FFB88C] rounded-full text-sm font-medium">1 dag/week</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Training en overdracht aan het team. Automatiseringen finetunen. 
                    Eerste evaluatiemoment met jou en het team.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Output:</p>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Team getraind en zelfstandig</li>
                      <li>• Geoptimaliseerde processen</li>
                      <li>• Eerste evaluatie en feedback</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Maand 4-6 */}
              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#9AD9A0] to-[#FFB88C] flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                  4-6
                </div>
                <div className="flex-1 bg-white dark:bg-black p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Coaching & doorontwikkeling</h3>
                    <span className="px-3 py-1 bg-[#9AD9A0]/20 text-[#9AD9A0] rounded-full text-sm font-medium">0,5 dag/week</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Check-ins met teamleden. Knelpunten oplossen. Tweede ronde automatisering 
                    en optimalisatie. Evaluatie richting afronding. Eindpresentatie en overdracht.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Output:</p>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Team zelfstandig aan de slag</li>
                      <li>• Tweede ronde verbeteringen doorgevoerd</li>
                      <li>• Eindpresentatie en advies voor borging</li>
                      <li>• KPI's gemeten en geëvalueerd</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What You Get */}
        <div className="bg-white dark:bg-black p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Wat ik oplever
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-center max-w-2xl mx-auto">
            Geen adviesrapporten die in een la belanden. Wél tastbare verbeteringen die impact hebben.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#9AD9A0]/20 flex items-center justify-center">
                <span className="text-[#9AD9A0] font-bold text-xl">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Analyse van interne verspilling</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">In afstemming met jou en het team: waar liggen de kansen?</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#9BCBFF]/20 flex items-center justify-center">
                <span className="text-[#9BCBFF] font-bold text-xl">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Plan van aanpak en planning</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">AI-toepassingen voor klantwerk en interne processen</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FFB88C]/20 flex items-center justify-center">
                <span className="text-[#FFB88C] font-bold text-xl">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Doorvoeren verbeteringen</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Taakverdeling team, externe developer en mijzelf</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#9AD9A0]/20 flex items-center justify-center">
                <span className="text-[#9AD9A0] font-bold text-xl">4</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Teamcoaching</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Slimmer werken, minder tijd kwijt. Resultaten zichtbaar binnen 4-6 weken</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Me */}
        <div className="bg-gradient-to-r from-[#9AD9A0]/10 via-[#9BCBFF]/10 to-[#FFB88C]/10 dark:from-[#9AD9A0]/20 dark:via-[#9BCBFF]/20 dark:to-[#FFB88C]/20 border-l-4 border-[#9AD9A0] p-8 rounded-2xl mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Waarom ik?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <span className="text-[#9AD9A0] text-2xl">✓</span>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Geen externe adviseur</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Wel een ondernemer die meedraait</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[#9BCBFF] text-2xl">✓</span>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Begrijpt het bureaumodel</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Van binnenuit, door jarenlange ervaring</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[#FFB88C] text-2xl">✓</span>
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
            <div className="flex items-start gap-4 md:col-span-2">
              <span className="text-[#9BCBFF] text-2xl">✓</span>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Doet wat nodig is</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Niet wat "mooi klinkt", maar wat impact heeft</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#contact"
            className="px-8 py-3 bg-linear-to-r from-[#9AD9A0] to-[#9BCBFF] text-gray-900 rounded-full font-medium hover:from-[#9AD9A0]/90 hover:to-[#9BCBFF]/90 transition-all shadow-lg hover:shadow-xl text-center"
          >
            Laten we praten over jouw organisatie
          </Link>
          <Link
            href="/"
            className="px-8 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-full font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all text-center"
          >
            Terug naar home
          </Link>
        </div>
      </div>
    </div>
  );
}
