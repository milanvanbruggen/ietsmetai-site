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
            Van probleemanalyse naar concrete AI-initiatieven
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-500">
            Een bewezen methodologie | 3-4 weken traject
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
            Mijn methodologie is nuchter en praktisch. Geen theoretische frameworks of dikke 
            rapporten die in een la verdwijnen. Ik combineer kwalitatief en kwantitatief onderzoek 
            om van analyse naar concrete, prioritaire initiatieven te komen. In 3-4 weken heb je 
            een actieplan dat je direct kunt oppakken.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
            Dit proces heb ik jarenlang toegepast in mijn agency. Nu help ik andere organisaties 
            ermee. Omdat het werkt. Omdat het praktisch is. En omdat je er vol vertrouwen mee 
            kunt beginnen.
          </p>
        </div>

        {/* Visual Process Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Het proces in 5 fasen
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#9BCBFF] via-[#9AD9A0] to-[#FFB88C] hidden md:block"></div>
            
            <div className="space-y-12">
              {/* Fase 0 */}
              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#9BCBFF] to-[#9AD9A0] flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                  0
                </div>
                <div className="flex-1 bg-white dark:bg-black p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Voorgesprek</h3>
                    <span className="px-3 py-1 bg-[#9BCBFF]/20 text-[#9BCBFF] rounded-full text-sm font-medium">1-2 uur</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    We bespreken de context, verwachtingen en selecteren samen de juiste respondenten. 
                    Dit zorgt voor commitment en een goede start.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Output:</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Commitment & selectie respondenten</p>
                  </div>
                </div>
              </div>

              {/* Fase 1 */}
              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#9BCBFF] to-[#9AD9A0] flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                  1
                </div>
                <div className="flex-1 bg-white dark:bg-black p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Kwalitatieve Verkenning</h3>
                    <span className="px-3 py-1 bg-[#9BCBFF]/20 text-[#9BCBFF] rounded-full text-sm font-medium">3-6 uur</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Interviews bieden diepte, nuance en context die je niet uit een survey haalt. 
                    Ze helpen je begrijpen waarom dingen zijn zoals ze zijn, niet alleen wat de situatie is.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-[#9BCBFF]/10 dark:bg-[#9BCBFF]/20 p-3 rounded-lg">
                      <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">Aantal</p>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">3 personen (min)</p>
                    </div>
                    <div className="bg-[#9BCBFF]/10 dark:bg-[#9BCBFF]/20 p-3 rounded-lg">
                      <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">Duur</p>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">45-60 min</p>
                    </div>
                    <div className="bg-[#9BCBFF]/10 dark:bg-[#9BCBFF]/20 p-3 rounded-lg">
                      <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">Format</p>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">1-op-1 diepte</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Output:</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Kwalitatieve inzichten & context</p>
                  </div>
                </div>
              </div>

              {/* Fase 2 */}
              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#9AD9A0] to-[#9BCBFF] flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                  2
                </div>
                <div className="flex-1 bg-white dark:bg-black p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Kwantitatieve Validatie</h3>
                    <span className="px-3 py-1 bg-[#9AD9A0]/20 text-[#9AD9A0] rounded-full text-sm font-medium">2-3 uur</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    De survey geeft je breedte en validatie. Je test of wat je in interviews hoorde 
                    breed gedragen wordt, en je krijgt kwantitatieve data over waar de grootste kansen liggen.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-[#9AD9A0]/10 dark:bg-[#9AD9A0]/20 p-3 rounded-lg">
                      <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">Response rate</p>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">&gt;50% actionable</p>
                    </div>
                    <div className="bg-[#9AD9A0]/10 dark:bg-[#9AD9A0]/20 p-3 rounded-lg">
                      <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">Structuur</p>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">70% template, 30% maatwerk</p>
                    </div>
                    <div className="bg-[#9AD9A0]/10 dark:bg-[#9AD9A0]/20 p-3 rounded-lg">
                      <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">Lengte</p>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">Max 10 minuten</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Output:</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Kwantitatieve data & patronen</p>
                  </div>
                </div>
              </div>

              {/* Fase 3 */}
              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#FFB88C] to-[#9AD9A0] flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                  3
                </div>
                <div className="flex-1 bg-white dark:bg-black p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Co-creatie (Brainstorm)</h3>
                    <span className="px-3 py-1 bg-[#FFB88C]/20 text-[#FFB88C] rounded-full text-sm font-medium">2 uur</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Van inzichten naar concrete initiatieven. Je transformeert data uit interviews 
                    en survey naar acties die je kunt implementeren. We maken expliciet ruimte voor 
                    dromen - niet alleen problemen, ook mogelijkheden.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-[#FFB88C]/10 dark:bg-[#FFB88C]/20 p-3 rounded-lg">
                      <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">Timing</p>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">1-3 dagen na survey</p>
                    </div>
                    <div className="bg-[#FFB88C]/10 dark:bg-[#FFB88C]/20 p-3 rounded-lg">
                      <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">Output</p>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">10-20 concrete initiatieven</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Output:</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">10-20 concrete initiatieven</p>
                  </div>
                </div>
              </div>

              {/* Fase 4 */}
              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#9AD9A0] to-[#FFB88C] flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                  4
                </div>
                <div className="flex-1 bg-white dark:bg-black p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Prioritering</h3>
                    <span className="px-3 py-1 bg-[#9AD9A0]/20 text-[#9AD9A0] rounded-full text-sm font-medium">1-2 uur</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Selectie maken op basis van impact en effort. Focus op max 5 initiatieven 
                    om versnippering te voorkomen. We gebruiken een Impact/Effort matrix om 
                    de juiste keuzes te maken.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-[#9AD9A0]/10 dark:bg-[#9AD9A0]/20 p-3 rounded-lg">
                      <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">Methodiek</p>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">Impact/Effort matrix</p>
                    </div>
                    <div className="bg-[#9AD9A0]/10 dark:bg-[#9AD9A0]/20 p-3 rounded-lg">
                      <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">Focus</p>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">Quick Wins + 1 Strategic Bet</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Output:</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Top 3-5 prioritaire initiatieven</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Golden Rules */}
        <div className="bg-gradient-to-r from-[#9AD9A0]/10 via-[#9BCBFF]/10 to-[#FFB88C]/10 dark:from-[#9AD9A0]/20 dark:via-[#9BCBFF]/20 dark:to-[#FFB88C]/20 border-l-4 border-[#9AD9A0] p-8 rounded-2xl mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            De 5 Gouden Regels
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#9AD9A0] text-white flex items-center justify-center font-bold">1</div>
              <p className="text-gray-700 dark:text-gray-300">Mix kwalitatief en kwantitatief: Interviews = waarom, Survey = wat</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#9BCBFF] text-white flex items-center justify-center font-bold">2</div>
              <p className="text-gray-700 dark:text-gray-300">Maak expliciet ruimte voor dromen: Niet alleen problemen, ook mogelijkheden</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FFB88C] text-white flex items-center justify-center font-bold">3</div>
              <p className="text-gray-700 dark:text-gray-300">Balanceer snelheid en diepgang: 3-4 weken is de sweet spot</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#9AD9A0] text-white flex items-center justify-center font-bold">4</div>
              <p className="text-gray-700 dark:text-gray-300">Plan 2 uur voor brainstorm: 1 uur is te weinig</p>
            </div>
            <div className="flex items-start gap-4 md:col-span-2">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#9BCBFF] text-white flex items-center justify-center font-bold">5</div>
              <p className="text-gray-700 dark:text-gray-300">Selecteer max 5 initiatieven: Focus boven volledigheid</p>
            </div>
          </div>
        </div>

        {/* What You Get */}
        <div className="bg-white dark:bg-black p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Wat je krijgt
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#9AD9A0]/20 flex items-center justify-center">
                <span className="text-[#9AD9A0] font-bold text-xl">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Kwalitatieve inzichten</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Diepte-interviews die je helpen begrijpen waarom dingen zijn zoals ze zijn</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#9BCBFF]/20 flex items-center justify-center">
                <span className="text-[#9BCBFF] font-bold text-xl">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Kwantitatieve validatie</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Data over waar de grootste kansen liggen en wat breed gedragen wordt</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FFB88C]/20 flex items-center justify-center">
                <span className="text-[#FFB88C] font-bold text-xl">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Concrete initiatieven</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">10-20 concrete AI-initiatieven die je direct kunt oppakken</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#9AD9A0]/20 flex items-center justify-center">
                <span className="text-[#9AD9A0] font-bold text-xl">4</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Prioriteiten</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Top 3-5 initiatieven geselecteerd op basis van impact en effort</p>
              </div>
            </div>
          </div>
        </div>

        {/* Total Investment */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-[#9AD9A0] to-[#9BCBFF] p-6 rounded-2xl shadow-lg">
            <p className="text-gray-900 font-semibold text-lg mb-2">Totale tijdsinvestering</p>
            <p className="text-gray-900 text-2xl font-bold">9-15 uur over 3-4 weken</p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#contact"
            className="px-8 py-3 bg-gradient-to-r from-[#9AD9A0] to-[#9BCBFF] text-gray-900 rounded-full font-medium hover:from-[#9AD9A0]/90 hover:to-[#9BCBFF]/90 transition-all shadow-lg hover:shadow-xl text-center"
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
