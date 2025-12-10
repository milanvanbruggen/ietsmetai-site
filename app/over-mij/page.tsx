import Link from 'next/link';
import Image from 'next/image';

export default function BoekPage() {
  return (
    <div className="pt-16 min-h-screen bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero-like intro aligned with Mijn aanpak */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Over mij
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              Van 13-jarige met een Quake clan site naar AI-adviseur
            </p>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
                Ik was 13 of 14 jaar oud toen ik voor het eerst een website online zette. Niet omdat ik nou zo gefascineerd was door websites op zich, maar omdat ik een clan site wilde maken voor de groep vrienden waarmee ik Quake speelde. We noemden onszelf [RM] - Ruthless Minds. En natuurlijk hadden we een website nodig. Dat hoorde er gewoon bij.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
                Ik had geen flauw idee wat ik aan het doen was. Ik googelde dingen als "hoe maak je een website" en "html voor beginners" en probeerde vooral veel uit. Trial and error. Copy-paste van voorbeeldcode die ik ergens vond. En dan even kijken of het werkte.
              </p>

              <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
                Toen die site voor het eerst online stond - met onze clan kleuren, een forum waar we over tactiek konden praten, en een overzicht van al onze leden - voelde ik iets wat ik eigenlijk heel moeilijk kan omschrijven. Trots, ja. Maar vooral een soort vervulling. Het gevoel van: ik had een idee, en nu bestaat het echt.
              </p>

              <p className="text-gray-700 dark:text-gray-300 text-lg mb-0">
                Dat gevoel ben ik blijven zoeken. In mijn carrière als designer, als ondernemer, als iemand die altijd te veel ideeën heeft en te weinig tijd. En vanaf ongeveer anderhalf jaar geleden voel ik dat gevoel bijna dagelijks weer. Omdat ik weer die 13-jarige ben die dingen online zet. Alleen gaat het nu niet om een Quake clan site, maar om tools die échte problemen oplossen.
              </p>
            </div>
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

        {/* Pixelpillow Section */}
        <div className="bg-gradient-to-br from-[#9AD9A0]/10 via-[#9BCBFF]/10 to-[#FFB88C]/10 dark:bg-gray-900 p-8 rounded-2xl mb-12 border border-gray-200/50 dark:border-gray-800/50">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Bijna 12 jaar Pixelpillow
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Op 1 januari 2013 richtte ik samen met mijn compagnons Pixelpillow op. Bijna twaalf jaar lang bouwde ik dat bedrijf op. Van een klein bureau naar een organisatie met meerdere mensen, klanten, en verantwoordelijkheden.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            En op 1 november 2024 zette ik mijn handtekening onder de overdracht. Het bedrijf was niet meer van mij. Eerlijk? Het kwam niet uit de lucht vallen. Ik zat al een tijdje te worstelen met een vraag: wat is ons bestaansrecht als bureau, nu AI alles verandert?
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Ik zag om me heen hoe snel dingen gingen. Hoe AI tools steeds beter werden. Hoe je met vibe coding in dagen kon bouwen wat vroeger weken kostte. En ik vroeg me af: als een freelancer met Cursor binnen een week iets kan bouwen, waarom zou een klant dan een bureau inhuren dat daar maanden over doet en tien keer zoveel rekent?
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Als ik nu nadenk over hoe we ons bureau hadden moeten veranderen om mee te kunnen met alle ontwikkelingen, dan had dat bijna een totale turnaround moeten zijn. Niet een beetje aanpassen, maar echt opnieuw uitvinden wie we zijn en wat we doen.
          </p>
        </div>

        {/* AI Journey Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Mijn drie aha-momenten met AI
          </h2>
          
          <div className="space-y-8">
            <div className="bg-[#9BCBFF]/10 dark:bg-[#9BCBFF]/20 border-l-4 border-[#9BCBFF] p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Januari 2021: Jasper en de kunst van het uitvragen
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Het eerste moment kwam in januari 2021. Jasper.AI werd gelanceerd. Een tool waarmee je op basis van input hele blogs kon laten schrijven door AI. Ik was toen vooral bezig met content voor Pixelpillow.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Wat me vooral opviel was hoe Jasper me uitvroeg. Welke doelgroep? Welke tone? Welke hoofdpunten? En dat maakte het verschil. Want doordat Jasper de juiste vragen stelde, gaf ik betere input. En betere input leverde betere output op.
              </p>
            </div>

            <div className="bg-[#9AD9A0]/10 dark:bg-[#9AD9A0]/20 border-l-4 border-[#9AD9A0] p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                November 2022: ChatGPT en de wereld die openging
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Ik weet nog precies wat mijn eerste prompt was. Niet omdat het zo'n briljante vraag was, maar juist omdat het zo'n alledaagse vraag was: "Hoe kan ik het beste onderhandelen over het kopen van de garagebox van mijn buurman?"
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                ChatGPT gaf me een genuanceerd antwoord. Tips over hoe je zo'n gesprek aangaat. Hoe je inschat wat een redelijke prijs is. Dat was het moment dat ik doorhad: dit is niet zomaar een betere versie van Jasper. Dit is fundamenteel anders. Dit is een gesprek voeren. Dit is samen nadenken.
              </p>
            </div>

            <div className="bg-[#FFB88C]/10 dark:bg-[#FFB88C]/20 border-l-4 border-[#FFB88C] p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Medio 2023: De eerste Chrome extensie in 3 uur
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Dat kwam pas anderhalf jaar geleden, toen vibe coding een ding werd. Ik weet nog goed wat mijn eerste project was: een Chrome extensie waarmee ik reacties op mijn LinkedIn posts kon labelen met kleurtjes.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Ik opende Cursor. Ik typte wat ik wilde. En een uur later had ik een werkende eerste versie. Nog twee of drie uur voor de fine tuning, en ik had een Chrome extensie die deed wat ik wilde. Drie tot vier uur totaal. Van niks naar werkend.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Die Chrome extensie was het moment dat ik doorhad: dit is geen evolutie, dit is een revolutie. Want als ik in drie uur iets kan maken dat ik anders in anderhalf dag zou doen, dan betekent dat niet dat ik vier keer zo snel ben. Het betekent dat ik vier keer zo veel dingen kan proberen. Vier keer zo veel ideeën kan uitwerken.
              </p>
            </div>
          </div>
        </div>

        {/* Current Focus */}
        <div className="bg-white dark:bg-black p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Waar ik nu sta
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Na de verkoop van Pixelpillow had ik bewust besloten om het eerste half jaar niks te doen. Geen commitments. Geen druk. Gewoon experimenteren met vibe coding. Als hobby. Voor mezelf. Zonder dat het ergens toe moest leiden.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Maar tijdens de zomer veranderde dat. Ik kwam tot een ander inzicht. Het risico om in deze dynamische periode, waarin AI nog volop in beweging en ontwikkeling is, meteen een nieuw product te willen neerzetten leek me opeens niet zo'n goed idee. Want de kans is groot dat een van de big tech bedrijven in Amerika datzelfde idee ook ontwikkelt. En dan ben je binnen een half jaar opeens van de mat geveegd.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Dus mijn gedachte werd: ik zit de AI-storm even uit. Ik ga ondertussen advieswerk doen. Ik blijf scherp, ik verdien geld, ik help bedrijven met hun AI vraagstukken. En over een jaar of twee, als de ontwikkelingen een beetje zijn gesetteld, kijk ik wat ik voor bedrijf zou willen starten.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Dat voelt nu als de slimme keuze. De makkelijke weg, misschien. Maar wel de juiste. En vooral: ik heb nu de mentale bandbreedte die ik niet had gehad als ik Pixelpillow nog had. Die vrijheid om echt te experimenteren. Om nieuwe dingen te proberen. Om vier verschillende ideeën per maand uit te werken gewoon omdat je het leuk vindt.
          </p>
        </div>

        {/* Why I Help */}
        <div className="bg-gradient-to-r from-[#9AD9A0]/10 via-[#9BCBFF]/10 to-[#FFB88C]/10 dark:from-[#9AD9A0]/20 dark:via-[#9BCBFF]/20 dark:to-[#FFB88C]/20 p-8 rounded-2xl border-l-4 border-[#9AD9A0] mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Waarom ik bedrijven help met AI
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Ik zie dagelijks hoe organisaties worstelen met dezelfde vraag: waar begin je met AI? Welke kansen zijn er? En hoe zorg je dat het niet bij een experiment blijft, maar echt impact maakt?
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Mijn aanpak is nuchter en praktisch. Geen theoretische frameworks of dikke rapporten die in een la verdwijnen. Ik combineer kwalitatief en kwantitatief onderzoek om van analyse naar concrete, prioritaire initiatieven te komen. In 3-4 weken heb je een actieplan dat je direct kunt oppakken.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Dit proces heb ik jarenlang toegepast in mijn agency. Nu help ik andere organisaties ermee. Omdat het werkt. Omdat het praktisch is. En omdat je er vol vertrouwen mee kunt beginnen.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/proces"
            className="px-8 py-3 bg-gradient-to-r from-[#9AD9A0] to-[#9BCBFF] text-gray-900 rounded-full font-medium hover:from-[#9AD9A0]/90 hover:to-[#9BCBFF]/90 transition-all shadow-lg hover:shadow-xl text-center"
          >
            Bekijk mijn aanpak
          </Link>
          <Link
            href="/#contact"
            className="px-8 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-full font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all text-center"
          >
            Laten we praten
          </Link>
        </div>
      </div>
    </div>
  );
}
