import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import GitHubProjects from '@/components/GitHubProjects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Over mij – Iets met AI',
  description: 'Van 13-jarige met een Quake clan site naar AI-adviseur. Mijn verhaal over Pixelpillow, AI-ontdekkingen en waar ik nu sta.',
};

export default function OverMijPage() {
  return (
    <div className="pt-16 min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Over mij
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              Van 13-jarige met een Quake clan site naar AI-adviseur
            </p>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
                Ik was 13 of 14 jaar oud toen ik voor het eerst een website online zette. Niet omdat ik nou zo gefascineerd was door websites op zich, maar omdat ik een clan site wilde maken voor de groep vrienden waarmee ik Quake speelde.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-0">
                Toen die site voor het eerst online stond voelde ik iets wat ik eigenlijk heel moeilijk kan omschrijven. Trots, ja. Maar vooral een soort vervulling. Het gevoel van: ik had een idee, en nu bestaat het echt. Dat gevoel ben ik blijven zoeken.
              </p>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative w-3/4 aspect-square rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/imai-milan-avatar.png"
                alt="Milan van Bruggen"
                fill
                className="object-cover"
                style={{ objectPosition: 'center top' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 dark:border-gray-800"></div>
      </div>

      {/* Chapter 1: 2013 - Pixelpillow */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-8 lg:gap-16">
            <div className="flex flex-col">
              <span className="text-7xl lg:text-8xl font-bold text-blue-pastel/30 dark:text-blue-pastel/20 leading-none">2013</span>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-2xl">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 mt-0">
                De start van Pixelpillow
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Op 1 januari 2013 richtte ik samen met mijn compagnons Pixelpillow op. Bijna twaalf jaar lang bouwde ik dat bedrijf op. Van een klein bureau naar een organisatie met meerdere mensen, klanten, en verantwoordelijkheden.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Het was een periode van groeien, leren, en vooral veel maken. Websites, apps, merken. Voor klanten die ons vertrouwden om hun digitale visie waar te maken.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: 2021 - Jasper */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-pastel/5 via-transparent to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-8 lg:gap-16">
            <div className="flex flex-col">
              <span className="text-7xl lg:text-8xl font-bold text-blue-pastel/30 dark:text-blue-pastel/20 leading-none">2021</span>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-2xl">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 mt-0">
                Jasper en de kunst van het uitvragen
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Het eerste aha-moment kwam in januari 2021. Jasper.AI werd gelanceerd. Een tool waarmee je op basis van input hele blogs kon laten schrijven door AI. Ik was toen vooral bezig met content voor Pixelpillow.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Wat me vooral opviel was hoe Jasper me uitvroeg. Welke doelgroep? Welke tone? Welke hoofdpunten? En dat maakte het verschil. Want doordat Jasper de juiste vragen stelde, gaf ik betere input. En betere input leverde betere output op.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: 2022 - ChatGPT */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-8 lg:gap-16">
            <div className="flex flex-col">
              <span className="text-7xl lg:text-8xl font-bold text-green-pastel/30 dark:text-green-pastel/20 leading-none">2022</span>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-2xl">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 mt-0">
                ChatGPT en de wereld die openging
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Ik weet nog precies wat mijn eerste prompt was. Niet omdat het zo'n briljante vraag was, maar juist omdat het zo'n alledaagse vraag was: "Hoe kan ik het beste onderhandelen over het kopen van de garagebox van mijn buurman?"
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                ChatGPT gaf me een genuanceerd antwoord. Tips over hoe je zo'n gesprek aangaat. Hoe je inschat wat een redelijke prijs is. Dat was het moment dat ik doorhad: dit is niet zomaar een betere versie van Jasper. Dit is fundamenteel anders. Dit is een gesprek voeren. Dit is samen nadenken.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 4: 2023 - Vibe Coding */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-pastel/5 via-transparent to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-8 lg:gap-16">
            <div className="flex flex-col">
              <span className="text-7xl lg:text-8xl font-bold text-orange-pastel/30 dark:text-orange-pastel/20 leading-none">2023</span>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-2xl">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 mt-0">
                De eerste Chrome extensie in 3 uur
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Dat kwam toen vibe coding een ding werd. Ik weet nog goed wat mijn eerste project was: een Chrome extensie waarmee ik reacties op mijn LinkedIn posts kon labelen met kleurtjes.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Ik opende Cursor. Ik typte wat ik wilde. En een uur later had ik een werkende eerste versie. Nog twee of drie uur voor de fine tuning, en ik had een Chrome extensie die deed wat ik wilde. Drie tot vier uur totaal. Van niks naar werkend.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Die Chrome extensie was het moment dat ik doorhad: dit is geen evolutie, dit is een revolutie. Want als ik in drie uur iets kan maken dat ik anders in anderhalf dag zou doen, dan betekent dat niet dat ik vier keer zo snel ben. Het betekent dat ik vier keer zo veel dingen kan proberen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 5: 2024 - Overdracht */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-8 lg:gap-16">
            <div className="flex flex-col">
              <span className="text-7xl lg:text-8xl font-bold text-green-pastel/30 dark:text-green-pastel/20 leading-none">2024</span>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-2xl">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 mt-0">
                Afscheid van Pixelpillow
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Op 1 november 2024 zette ik mijn handtekening onder de overdracht. Het bedrijf was niet meer van mij. Eerlijk? Het kwam niet uit de lucht vallen. Ik zat al een tijdje te worstelen met een vraag: wat is ons bestaansrecht als bureau, nu AI alles verandert?
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Ik zag om me heen hoe snel dingen gingen. Hoe AI tools steeds beter werden. Hoe je met vibe coding in dagen kon bouwen wat vroeger weken kostte. En ik vroeg me af: als een freelancer met Cursor binnen een week iets kan bouwen, waarom zou een klant dan een bureau inhuren dat daar maanden over doet en tien keer zoveel rekent?
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Als ik nu nadenk over hoe we ons bureau hadden moeten veranderen om mee te kunnen met alle ontwikkelingen, dan had dat bijna een totale turnaround moeten zijn. Niet een beetje aanpassen, maar echt opnieuw uitvinden wie we zijn en wat we doen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 6: Nu - AI Advisory */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-pastel/5 via-green-pastel/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-8 lg:gap-16">
            <div className="flex flex-col">
              <span className="text-7xl lg:text-8xl font-bold text-blue-pastel/30 dark:text-blue-pastel/20 leading-none">Nu</span>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-2xl">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 mt-0">
                Waar ik nu sta
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Na de verkoop had ik bewust besloten om het eerste half jaar niks te doen. Geen commitments. Geen druk. Gewoon experimenteren met vibe coding. Als hobby. Voor mezelf. Zonder dat het ergens toe moest leiden.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Maar tijdens de zomer veranderde dat. Het risico om in deze dynamische periode meteen een nieuw product te willen neerzetten leek me opeens niet zo'n goed idee. Want de kans is groot dat een van de big tech bedrijven in Amerika datzelfde idee ook ontwikkelt. En dan ben je binnen een half jaar van de mat geveegd.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Dus mijn gedachte werd: ik zit de AI-storm even uit. Ik ga ondertussen advieswerk doen. Ik blijf scherp, ik verdien geld, ik help bedrijven met hun AI vraagstukken. En over een jaar of twee, als de ontwikkelingen een beetje zijn gesetteld, kijk ik wat ik voor bedrijf zou willen starten.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                En vooral: ik heb nu de mentale bandbreedte die ik niet had gehad als ik Pixelpillow nog had. Die vrijheid om echt te experimenteren. Om nieuwe dingen te proberen. Om vier verschillende ideeën per maand uit te werken gewoon omdat je het leuk vindt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Projects */}
      <GitHubProjects />

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-green-pastel/10 via-blue-pastel/10 to-orange-pastel/10 dark:from-green-pastel/20 dark:via-blue-pastel/20 dark:to-orange-pastel/20 p-12 rounded-2xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Waarom ik bedrijven help met AI
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 max-w-2xl mx-auto">
              Ik zie dagelijks hoe organisaties worstelen met dezelfde vraag: waar begin je met AI? Welke kansen zijn er? En hoe zorg je dat het niet bij een experiment blijft, maar echt impact maakt?
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Mijn aanpak is nuchter en praktisch. Geen theoretische frameworks of dikke rapporten die in een la verdwijnen. Dit proces heb ik jarenlang toegepast in mijn agency. Nu help ik andere organisaties ermee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/proces"
                className="inline-flex items-center gap-2 px-8 py-3 btn-gradient-animated text-gray-900 rounded-full font-semibold shadow-lg hover:shadow-xl"
              >
                Bekijk mijn aanpak
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                href="/#contact"
                className="px-8 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-full font-semibold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all text-center"
              >
                Laten we praten
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

