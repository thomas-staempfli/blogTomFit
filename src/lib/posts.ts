import type { Lang } from '@/lib/i18n'
import { normalizeLang } from '@/lib/i18n'

type PostTranslation = { title: string; excerpt: string; content: string }

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  coverImage: string
  introImage?: string
  coverImageI18n?: { de?: string; pl?: string }
  introImageI18n?: { de?: string; pl?: string }
  i18n?: { de?: PostTranslation; pl?: PostTranslation }
  date: string
  author: { name: string; avatar: string }
  readTime: string
}

// Blog posts data - add new articles here
export const blogPosts: BlogPost[] = [
  {
    slug: 'why-you-should-not-sweat-resistance-training',
    title: 'Your Blood is Needed in the Muscle You Train, Not in Your Periphery to Dissipate Heat!',
    excerpt:
      "Sweating can look like proof of a great workout, but in strength training it often signals heat stress that diverts blood away from working muscles and limits performance and growth.",
    content: `For decades, sweat has been celebrated as proof of a good workout. The more you sweat, the harder you worked — or so we thought.

Modern exercise physiology shows the opposite: sweating is a sign of inefficiency, not effectiveness, especially in resistance training.

When you sweat, your body is trying to cool itself. To achieve this, blood is redirected away from your muscles to your skin to release heat. In fact, up to 50% of your blood flow can shift to the periphery before you even begin to sweat. This diversion means your working muscles receive less oxygen, fewer nutrients, and fewer building blocks for protein synthesis — all of which are essential for muscle growth.

As the muscle's internal temperature rises, enzymatic activity linked to energy metabolism and protein repair becomes impaired. The result? Faster fatigue, lower power output, and slower muscle recovery. Over time, this heat stress can limit progress, even if you train consistently.

Stanford Professor H. Craig Heller and his research team demonstrated that cooling muscles during or between strength sessions can dramatically enhance performance. By extracting heat from the body's natural "radiator zones" — the palms, soles, and face — they found athletes could perform more work, recover faster, and gain strength more efficiently than through traditional high-sweat training.

In practical terms, that means you build more muscle by staying cool. Efficient strength training happens when your nervous system, muscles, and energy metabolism are all focused on lifting — not cooling.

At TomFit, we put this science into practice. Our training environment and equipment are designed to maintain ideal muscle temperature for maximum activation, faster recovery, and real growth — without the sweat.

## Scientific References

- H. Craig Heller (Stanford University) — Performance enhancement with controlled cooling (2012): https://pubmed.ncbi.nlm.nih.gov/22076097/
- Work volume and strength training responses to thermal extraction (NSCA JSCR, 2012): https://journals.lww.com/nsca-jscr/Fulltext/2012/09000/Work_Volume_and_Strength_Training_Responses_to.33.aspx
- Périard, Eijsvogels & Daanen (2021) — Exercise under heat stress: thermoregulation, hydration, performance implications, mitigation strategies. Physiological Reviews 101(4):1873-1979. https://pubmed.ncbi.nlm.nih.gov/33829868/
- Grahn, Cao, Heller (2012) — Work volume and strength training responses with thermal extraction. Journal of Applied Physiology 112(11):1797-1804. https://pubmed.ncbi.nlm.nih.gov/22076097/
- Kenny et al. (2022) — Heat stress and exercise performance: physiological mechanisms and implications for human health. Physiological Reviews 102(4):1627-1680. https://pubmed.ncbi.nlm.nih.gov/35020830/`,
    coverImage: '/Sweat.png',
    introImage: '/SweatText_Picture.png',
    date: '2025-12-14',
    author: { name: 'Thomas Stämpfli', avatar: '/thomas-stampfli_inSuit.jpg' },
    readTime: '3 min read',
    i18n: {
      de: {
        title: 'Dein Blut gehört in den trainierten Muskel – nicht in die Peripherie zur Wärmeabgabe!',
        excerpt:
          'Schwitzen wirkt wie ein Beweis für ein gutes Training – im Krafttraining ist es jedoch oft ein Zeichen von Hitzestress, der Blut aus den Muskeln abzieht und Leistung sowie Wachstum begrenzt.',
        content: `Jahrzehntelang galt Schweiß als Beweis für ein gutes Training. Je mehr du schwitzt, desto härter hast du gearbeitet – so dachten wir.

Die moderne Trainingsphysiologie zeigt jedoch oft das Gegenteil: Schwitzen ist ein Zeichen von Ineffizienz, nicht von Effektivität – besonders im Krafttraining.

Wenn du schwitzt, versucht dein Körper zu kühlen. Dafür wird Blut aus der arbeitenden Muskulatur zur Haut umgeleitet, um Wärme abzugeben. Tatsächlich kann sich bis zu 50% deines Blutflusses in Richtung Peripherie verschieben, bevor du überhaupt sichtbar schwitzt. Das bedeutet: Deine Muskeln erhalten weniger Sauerstoff, weniger Nährstoffe und weniger Bausteine für die Proteinsynthese – alles entscheidend für Muskelaufbau.

Steigt die Muskeltemperatur, wird zudem die Enzymaktivität beeinträchtigt, die für Energiestoffwechsel und Reparaturprozesse wichtig ist. Das Ergebnis: schnellere Ermüdung, geringere Leistungsabgabe und langsamere Regeneration. Auf Dauer kann dieser Hitzestress Fortschritte begrenzen – selbst bei konsequentem Training.

Der Stanford-Professor H. Craig Heller und sein Forschungsteam zeigten, dass das Kühlen der Muskulatur während oder zwischen Kraft-Einheiten die Leistung deutlich steigern kann. Indem Wärme aus den natürlichen "Radiator-Zonen" des Körpers – Handflächen, Fußsohlen und Gesicht – entzogen wird, konnten Athletinnen und Athleten mehr Arbeit verrichten, schneller regenerieren und effizienter Kraft aufbauen als bei klassischem "Schwitz-Training".

Praktisch heißt das: Du baust mehr Muskel auf, wenn du kühl bleibst. Effizientes Krafttraining passiert dann, wenn Nervensystem, Muskulatur und Energiestoffwechsel auf das Heben fokussiert sind – nicht auf das Kühlen.

Bei TomFit setzen wir diese Wissenschaft in die Praxis um. Trainingsumgebung und Equipment sind darauf ausgelegt, eine ideale Muskeltemperatur zu halten – für maximale Aktivierung, schnellere Erholung und echtes Wachstum – ohne unnötiges Schwitzen.

## Wissenschaftliche Quellen

- H. Craig Heller (Stanford University) — Performance enhancement with controlled cooling (2012): https://pubmed.ncbi.nlm.nih.gov/22076097/
- Work volume and strength training responses to thermal extraction (NSCA JSCR, 2012): https://journals.lww.com/nsca-jscr/Fulltext/2012/09000/Work_Volume_and_Strength_Training_Responses_to.33.aspx
- Périard, Eijsvogels & Daanen (2021) — Exercise under heat stress… Physiological Reviews 101(4):1873-1979. https://pubmed.ncbi.nlm.nih.gov/33829868/
- Grahn, Cao, Heller (2012) — Work volume and strength training responses with thermal extraction… https://pubmed.ncbi.nlm.nih.gov/22076097/
- Kenny et al. (2022) — Heat stress and exercise performance… https://pubmed.ncbi.nlm.nih.gov/35020830/`,
      },
      pl: {
        title: 'Krew powinna trafiać do trenowanego mięśnia — nie na obwód, aby oddawać ciepło!',
        excerpt:
          'Pot może wyglądać jak dowód dobrego treningu, ale w treningu siłowym często oznacza stres cieplny, który odciąga krew od mięśni i ogranicza wydajność oraz wzrost.',
        content: `Przez dekady pot był uznawany za dowód dobrego treningu. Im więcej się pocisz, tym ciężej pracowałeś — tak sądziliśmy.

Współczesna fizjologia wysiłku często pokazuje coś odwrotnego: pocenie jest oznaką nieefektywności, a nie skuteczności — szczególnie w treningu siłowym.

Gdy się pocisz, organizm próbuje się schłodzić. W tym celu krew jest przekierowywana z pracujących mięśni do skóry, aby oddać ciepło. W praktyce nawet do 50% przepływu krwi może przesunąć się na obwód, zanim jeszcze zauważysz pot. To oznacza, że mięśnie dostają mniej tlenu, mniej składników odżywczych i mniej „cegiełek” do syntezy białek — a to kluczowe dla budowy mięśni.

Wraz ze wzrostem temperatury wewnątrz mięśnia pogarsza się aktywność enzymów odpowiedzialnych za metabolizm energii i procesy naprawcze. Efekt? Szybsze zmęczenie, mniejsza moc i wolniejsza regeneracja. Z czasem taki stres cieplny może hamować postępy, nawet jeśli trenujesz regularnie.

Profesor Stanfordu H. Craig Heller i jego zespół pokazali, że chłodzenie mięśni w trakcie lub pomiędzy seriami może znacząco poprawiać wyniki. Usuwając ciepło z naturalnych „stref chłodzenia” — dłoni, stóp i twarzy — sportowcy mogli wykonać większą pracę, szybciej się regenerować i efektywniej zwiększać siłę niż przy tradycyjnym, „spoconym” podejściu.

W praktyce oznacza to: więcej mięśni zbudujesz, gdy pozostajesz chłodniejszy. Efektywny trening siłowy zachodzi wtedy, gdy układ nerwowy, mięśnie i metabolizm energii są skupione na podnoszeniu, a nie na chłodzeniu.

W TomFit wdrażamy tę wiedzę w praktyce. Nasze środowisko treningowe i sprzęt pomagają utrzymać optymalną temperaturę mięśni — dla maksymalnej aktywacji, szybszej regeneracji i realnego wzrostu — bez zbędnego pocenia.

## Źródła naukowe

- H. Craig Heller (Stanford University) — Performance enhancement with controlled cooling (2012): https://pubmed.ncbi.nlm.nih.gov/22076097/
- Work volume and strength training responses to thermal extraction (NSCA JSCR, 2012): https://journals.lww.com/nsca-jscr/Fulltext/2012/09000/Work_Volume_and_Strength_Training_Responses_to.33.aspx
- Périard, Eijsvogels & Daanen (2021) — Exercise under heat stress… Physiological Reviews 101(4):1873-1979. https://pubmed.ncbi.nlm.nih.gov/33829868/
- Grahn, Cao, Heller (2012) — Work volume and strength training responses with thermal extraction… https://pubmed.ncbi.nlm.nih.gov/22076097/
- Kenny et al. (2022) — Heat stress and exercise performance… https://pubmed.ncbi.nlm.nih.gov/35020830/`,
      },
    },
  },
  {
    slug: 'why-momentum-causes-exercise-injury',
    title: 'Why Momentum Is the Main Source of Exercise Injury – and How Electromechanical Resistance Solves It',
    excerpt:
      'Discover how momentum in traditional weightlifting causes injuries, and how electromechanical resistance systems eliminate this risk while maximizing strength gains.',
    content: `When we lift weights, swing kettlebells, or even perform machine-based repetitions, we are not just fighting gravity — we are fighting momentum.

Momentum is the tendency of a moving mass (in this case, your limb and the weight) to keep moving once it’s in motion. The faster and heavier you move, the greater the momentum — and the less control you have over the load.

At first glance, momentum feels helpful: it allows you to complete repetitions more easily by “throwing” the weight. But in biomechanics, this comes with a steep price. The energy stored in a moving load must eventually dissipate, and it does so through your joints, tendons, and connective tissues — precisely the structures most prone to injury.

## The Physics of Injury

The physics is simple but unforgiving:

**F = m × a** (Force equals mass times acceleration)

When you accelerate a load, its effective force increases. When you decelerate it (as in lowering a barbell or stopping a swing), the same force is suddenly reversed, often doubling or tripling joint stress.

This “inertial overshoot” causes micro-tears, tendon overload, and in chronic cases, degenerative joint changes. Studies on resistance training injuries consistently show that most occur not at maximum exertion, but when momentum and fatigue intersect — for example, in the last few uncontrolled repetitions.

## How Electromechanical Resistance Eliminates Momentum

Electromechanical resistance systems, such as TomFit’s TomBot, replace metal weights and gravity with precisely controlled motors and sensors. The system creates resistance that adapts in real time to your movement, keeping it smooth, measured, and momentum-free.

Here’s how:

- **No Free Acceleration**: The motor adjusts instantly to your speed. You cannot “throw” the weight — every centimeter of movement requires muscular control.
- **Constant Force Curve**: Resistance follows your ideal muscle strength curve. Unlike traditional weights (easiest mid-lift), electromechanical resistance keeps force constant and optimal throughout the entire range of motion.
- **Dynamic Feedback**: Sensors measure velocity and position thousands of times per second, ensuring that if your motion becomes jerky or unbalanced, the system compensates or stops automatically.
- **Eccentric Safety**: The most injury-prone phase of exercise — lowering the weight — is precisely regulated. The machine can reduce eccentric force instantly when fatigue appears.

## The Result: Maximum Strength, Minimum Risk

By removing momentum from the equation, electromechanical systems decouple intensity from danger. You still train your muscles to their full capacity — even higher, thanks to perfectly controlled eccentric loading — but without uncontrolled force spikes.

This is why studies comparing traditional and motor-controlled resistance show:

- Up to 90% reduction in joint load variability
- Fewer acute muscle tears and shoulder/elbow injuries
- Improved long-term adherence, especially among older or rehabilitating users

In short: momentum makes training risky. Electromechanical resistance makes it precise.

## A Smarter Way to Get Strong

The safest way to build strength is not to move more weight, but to move with more control. TomFit’s fully digital resistance eliminates the invisible forces that cause most injuries — allowing your body to grow stronger, not just tougher.

## References

- Escamilla et al., “Effects of technique variations on knee biomechanics during the squat and leg press” — Med Sci Sports Exerc: https://pubmed.ncbi.nlm.nih.gov/11528346/
- Wang et al., “Effect of isokinetic muscle strength training on knee muscle strength, proprioception, and balance ability” — Front Physiol 2023: https://pubmed.ncbi.nlm.nih.gov/37795267/
- Crowell et al., “Gait retraining to reduce lower extremity loading in runners” — JOSPT: https://pubmed.ncbi.nlm.nih.gov/20888675/
- Edwards et al., “Effects of stride length on stress fracture probability” — Med Sci Sports Exerc: https://pubmed.ncbi.nlm.nih.gov/19915501/
- Harper et al., “Using accelerometry to quantify deceleration during high-intensity turning” — Sports Med: https://pubmed.ncbi.nlm.nih.gov/25394197/`,
    coverImage: '/momentum-cover.png',
    coverImageI18n: { de: '/momentum-cover.de.png', pl: '/momentum-cover.pl.png' },
    date: '2024-12-13',
    author: { name: 'Thomas Stämpfli', avatar: '/thomas-stampfli.png' },
    readTime: '3 min read',
    i18n: {
      de: {
        title: 'Warum Schwung (Momentum) die Hauptquelle für Trainingsverletzungen ist – und wie elektromechanischer Widerstand das löst',
        excerpt:
          'Erfahre, wie Schwung bei klassischen Gewichten Verletzungsrisiken erhöht und wie elektromechanischer Widerstand Training kontrollierter und sicherer macht.',
        content: `Wenn wir Gewichte heben, Kettlebells schwingen oder Wiederholungen an Maschinen ausführen, kämpfen wir nicht nur gegen die Schwerkraft – wir kämpfen gegen den Schwung.

Schwung ist die Tendenz einer bewegten Masse (in diesem Fall dein Arm/Bein und das Gewicht), sich weiter zu bewegen, sobald sie in Bewegung ist. Je schneller und je schwerer du bewegst, desto größer der Schwung – und desto weniger Kontrolle hast du über die Last.

Auf den ersten Blick fühlt sich Schwung hilfreich an: Er erlaubt dir, Wiederholungen leichter zu „schaffen“, indem du das Gewicht „wirfst“. Biomechanisch hat das jedoch einen Preis. Die in der bewegten Last gespeicherte Energie muss irgendwann abgebaut werden – und das passiert über Gelenke, Sehnen und Bindegewebe, also genau über die Strukturen, die am anfälligsten für Verletzungen sind.

## Die Physik der Verletzung

Die Physik ist einfach, aber unerbittlich:

**F = m × a** (Kraft = Masse × Beschleunigung)

Wenn du eine Last beschleunigst, steigt die wirkende Kraft. Wenn du sie abbremst (z.B. beim Absenken einer Hantel oder beim Stoppen eines Schwungs), kehrt sich dieselbe Kraft abrupt um und kann Gelenkbelastungen verdoppeln oder verdreifachen.

Dieses „inertiale Überschwingen“ führt zu Mikro-Rissen, Sehnenüberlastungen und langfristig zu degenerativen Veränderungen. Viele Verletzungen im Krafttraining passieren nicht bei maximaler Anstrengung, sondern dann, wenn Schwung und Ermüdung zusammenkommen – etwa in den letzten, unkontrollierten Wiederholungen.

## Wie elektromechanischer Widerstand Schwung eliminiert

Elektromechanische Widerstandssysteme, wie TomFits TomBot, ersetzen Metallgewichte und Schwerkraft durch präzise gesteuerte Motoren und Sensoren. Der Widerstand passt sich in Echtzeit an deine Bewegung an – gleichmäßig, kontrolliert und schwungfrei.

So funktioniert’s:

- **Keine freie Beschleunigung**: Der Motor reagiert sofort auf deine Geschwindigkeit. Du kannst das Gewicht nicht „werfen“ – jeder Zentimeter erfordert Kontrolle.
- **Konstante Kraftkurve**: Der Widerstand folgt der idealen Kraftkurve deiner Muskulatur. Anders als bei freien Gewichten bleibt die Belastung über den gesamten Bewegungsradius optimal.
- **Dynamisches Feedback**: Sensoren messen Geschwindigkeit und Position tausende Male pro Sekunde. Wird die Bewegung ruckartig oder instabil, kompensiert das System oder stoppt.
- **Sichere Exzentrik**: Die verletzungsanfällige Abwärtsphase wird präzise geregelt. Bei Ermüdung kann die exzentrische Kraft sofort reduziert werden.

## Ergebnis: Maximale Kraft, minimales Risiko

Wenn Schwung entfernt wird, entkoppeln elektromechanische Systeme Intensität von Gefahr. Du trainierst die Muskulatur bis zur Leistungsgrenze – sogar darüber hinaus durch kontrollierte exzentrische Belastung – ohne unkontrollierte Kraftspitzen.

Studien zu motor-gesteuertem Widerstand zeigen u.a.:

- bis zu 90% geringere Variabilität der Gelenkbelastung
- weniger akute Muskelrisse sowie Schulter-/Ellbogenverletzungen
- bessere Langzeit-Adhärenz, besonders bei älteren oder rehabilitierenden Personen

Kurz: Schwung macht Training riskant. Elektromechanischer Widerstand macht es präzise.

## Der smartere Weg, stark zu werden

Der sicherste Weg zu mehr Kraft ist nicht, mehr Gewicht zu bewegen – sondern mehr Kontrolle. TomFits digitaler Widerstand eliminiert die unsichtbaren Kräfte, die die meisten Verletzungen verursachen – damit dein Körper stärker wird, nicht nur „härter“.

## Quellen

- Escamilla et al. — https://pubmed.ncbi.nlm.nih.gov/11528346/
- Wang et al. — https://pubmed.ncbi.nlm.nih.gov/37795267/
- Crowell et al. — https://pubmed.ncbi.nlm.nih.gov/20888675/
- Edwards et al. — https://pubmed.ncbi.nlm.nih.gov/19915501/
- Harper et al. — https://pubmed.ncbi.nlm.nih.gov/25394197/`,
      },
      pl: {
        title: 'Dlaczego pęd (momentum) jest główną przyczyną kontuzji na treningu – i jak rozwiązuje to opór elektromechaniczny',
        excerpt:
          'Zobacz, jak „bujanie” ciężarem zwiększa ryzyko urazu i jak opór elektromechaniczny pozwala trenować intensywnie, ale precyzyjnie i bezpiecznie.',
        content: `Gdy podnosimy ciężary, wymachujemy kettlebellem czy wykonujemy powtórzenia na maszynach, nie walczymy tylko z grawitacją — walczymy z pędem.

Pęd to tendencja poruszającej się masy (w tym przypadku kończyny i ciężaru) do dalszego ruchu, gdy już się rozpędzi. Im szybciej i im ciężej poruszasz, tym większy pęd — i tym mniejsza kontrola nad obciążeniem.

Na pierwszy rzut oka pęd „pomaga”: łatwiej dokończyć powtórzenie, gdy ciężar jest „wyrzucany”. W biomechanice ma to jednak wysoką cenę. Energia zgromadzona w poruszającym się ciężarze musi zostać gdzieś rozproszona — a dzieje się to w stawach, ścięgnach i tkankach łącznych, czyli tam, gdzie najczęściej dochodzi do urazów.

## Fizyka urazu

Fizyka jest prosta:

**F = m × a** (Siła = masa × przyspieszenie)

Gdy przyspieszasz ciężar, rośnie działająca siła. Gdy go wyhamowujesz (np. opuszczając sztangę lub zatrzymując zamach), ta sama siła gwałtownie się odwraca i potrafi podwoić lub potroić obciążenie stawów.

Takie „bezwładnościowe przesterowanie” sprzyja mikrouszkodzeniom, przeciążeniom ścięgien i w dłuższym czasie zmianom zwyrodnieniowym. Wiele kontuzji w treningu oporowym nie dzieje się przy maksymalnym wysiłku, tylko wtedy, gdy pęd spotyka się ze zmęczeniem — np. w ostatnich, niekontrolowanych powtórzeniach.

## Jak opór elektromechaniczny eliminuje pęd

Systemy oporu elektromechanicznego, takie jak TomFit TomBot, zastępują wolne ciężary i grawitację precyzyjnie sterowanymi silnikami oraz czujnikami. Opór dopasowuje się w czasie rzeczywistym — ruch jest płynny, kontrolowany i bez „rzucania” ciężarem.

Jak to działa:

- **Brak swobodnego przyspieszenia**: silnik natychmiast reaguje na prędkość. Nie da się „wyrzucić” ciężaru — każdy centymetr wymaga kontroli.
- **Stała krzywa oporu**: opór podąża za idealną krzywą siły mięśni. W przeciwieństwie do klasycznych ciężarów, obciążenie jest optymalne w całym zakresie ruchu.
- **Dynamiczny feedback**: czujniki mierzą prędkość i pozycję tysiące razy na sekundę; gdy ruch staje się szarpany lub niestabilny, system kompensuje lub zatrzymuje.
- **Bezpieczna faza ekscentryczna**: najbardziej urazowa faza opuszczania jest precyzyjnie kontrolowana; przy oznakach zmęczenia opór ekscentryczny może być natychmiast zmniejszony.

## Efekt: maksimum siły, minimum ryzyka

Usunięcie pędu oddziela intensywność od niebezpieczeństwa. Nadal trenujesz mięśnie do granic możliwości — a nawet skuteczniej dzięki kontrolowanemu obciążeniu ekscentrycznemu — bez niekontrolowanych skoków siły.

Badania nad oporem sterowanym silnikiem pokazują m.in.:

- do 90% mniejszą zmienność obciążenia stawów
- mniej ostrych naderwań mięśni i urazów barku/łokcia
- lepszą długoterminową regularność, szczególnie u osób starszych lub w rehabilitacji

Krótko: pęd czyni trening ryzykownym. Opór elektromechaniczny czyni go precyzyjnym.

## Mądrzejszy sposób na siłę

Najbezpieczniej buduje się siłę nie przez dokładanie kilogramów, lecz przez dokładanie kontroli. Cyfrowy opór TomFit eliminuje „niewidzialne” siły stojące za większością urazów — dzięki czemu ciało staje się silniejsze, a nie tylko „twardsze”.

## Źródła

- Escamilla et al. — https://pubmed.ncbi.nlm.nih.gov/11528346/
- Wang et al. — https://pubmed.ncbi.nlm.nih.gov/37795267/
- Crowell et al. — https://pubmed.ncbi.nlm.nih.gov/20888675/
- Edwards et al. — https://pubmed.ncbi.nlm.nih.gov/19915501/
- Harper et al. — https://pubmed.ncbi.nlm.nih.gov/25394197/`,
      },
    },
  },
]

function localizePost(post: BlogPost, lang: Lang): BlogPost {
  if (lang === 'en') return post

  const tr = post.i18n?.[lang]
  const cover = post.coverImageI18n?.[lang] ?? post.coverImage
  const intro = post.introImageI18n?.[lang] ?? post.introImage

  if (!tr) return { ...post, coverImage: cover, introImage: intro }

  return {
    ...post,
    title: tr.title,
    excerpt: tr.excerpt,
    content: tr.content,
    coverImage: cover,
    introImage: intro,
  }
}

export function getAllPosts(lang?: Lang): BlogPost[] {
  const l = normalizeLang(lang)
  return blogPosts
    .map((p) => localizePost(p, l))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string, lang?: Lang): BlogPost | undefined {
  const l = normalizeLang(lang)
  const post = blogPosts.find((p) => p.slug === slug)
  return post ? localizePost(post, l) : undefined
}

export function formatDate(dateString: string, lang?: Lang): string {
  const l = normalizeLang(lang)
  const locale = l === 'de' ? 'de-DE' : l === 'pl' ? 'pl-PL' : 'en-US'
  return new Date(dateString).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })
}
