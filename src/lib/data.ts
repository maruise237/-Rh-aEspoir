export const donationUrl = "https://notchpay.me/opCw9dq0H";

export const phones = [
  { label: "Accueil", value: "+237 693 308 269", wa: "237693308269" },
  { label: "Ecoute", value: "+237 696 773 606", wa: "237696773606" },
  { label: "Orientation", value: "+237 696 615 091", wa: "237696615091" },
];

export const contact = {
  city: "Yaoundé, Cameroun",
  email: "contact@rhéaespoir.com",
  whatsappMessage:
    "Bonjour RhéaEspoir, je souhaite avoir des informations sur votre accompagnement.",
};

export const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
  { href: "/actualites", label: "Actualités" },
  { href: "/evenements", label: "Événements" },
  { href: "/forum", label: "Forum" },
  { href: "/contact", label: "Contact" },
];

export const visuals = {
  logo: "/images/rhea/logo-rheaespoir.png",
  hero: "/images/rhea/hero-grossesse.jpg",
  couple: "/images/rhea/association-community.png",
  care: "/images/rhea/association-care.jpg",
  calm: "/images/rhea/hero-contact.jpg",
  support: "/images/rhea/association-support.png",
  portrait: "/images/rhea/portrait-emotion.jpg",
};

export const services = [
  {
    title: "Écoute et soutien émotionnel",
    text: "Consultations avec des psychologues spécialisés, suivi personnalisé et astuces concrètes pour mieux traverser l'attente.",
  },
  {
    title: "Groupes de soutien",
    text: "Rencontres mensuelles pour partager son expérience, recevoir des conseils et entendre des personnes qui comprennent le parcours.",
  },
  {
    title: "Ressources et orientation",
    text: "Informations sur l'infertilité, la PMA, l'adoption, la santé mentale et les options de soutien financier ou matériel.",
  },
];

export const values = [
  "Confidentialité",
  "Bienveillance",
  "Espoir réaliste",
  "Solidarité",
  "Information fiable",
  "Respect du rythme de chacun",
];

export const impactStats = [
  { value: "2025", label: "lancement public de la plateforme" },
  { value: "3", label: "portes d'entrée : écoute, information, orientation" },
  { value: "24h", label: "premier contact simplifié par WhatsApp" },
];

export const journeySteps = [
  {
    title: "Comprendre",
    text: "Mettre des mots sur l'infertilité, les examens, les traitements possibles et les émotions qui accompagnent le parcours.",
  },
  {
    title: "Être entouré",
    text: "Rejoindre une communauté qui écoute sans juger, avec des groupes de soutien et des temps d'échange guidés.",
  },
  {
    title: "S'orienter",
    text: "Préparer ses questions, identifier les ressources utiles et avancer vers la PMA, l'adoption ou un accompagnement psychologique.",
  },
  {
    title: "Soutenir",
    text: "Permettre aux bienfaiteurs d'aider l'association par des dons financiers, matériels ou des partenariats de terrain.",
  },
];

export const architectNotes = [
  {
    title: "Clarté médicale sans jargon",
    text: "Chaque page doit rassurer sans promettre l'impossible : expliquer, orienter, et rappeler que l'avis médical reste essentiel.",
  },
  {
    title: "Design doux, pas fragile",
    text: "Palette chaude, vert profond, rose maîtrisé, grandes respirations et images réelles pour éviter l'effet template médical froid.",
  },
  {
    title: "Action rapide",
    text: "WhatsApp, don et articles restent accessibles sans parcours compliqué, surtout sur mobile où la majorité des visiteurs arrivera.",
  },
];

export const seoTopics = [
  {
    title: "Infertilité au Cameroun",
    text: "Comprendre les causes possibles, les premiers examens, les facteurs féminins et masculins, et l'importance d'un bilan médical pour le couple.",
    href: "/actualites/infertilite-origines-et-solutions",
  },
  {
    title: "PMA, FIV et traitements de fertilité",
    text: "Découvrir les options modernes comme la FIV, l'insémination, la vitrification des ovules, la culture embryonnaire et les traitements personnalisés.",
    href: "/actualites/nouvelles-avancees-en-fertilite",
  },
  {
    title: "Soutien psychologique infertilité",
    text: "Identifier la tristesse, la culpabilité, l'isolement, le stress du parcours et les ressources pour préserver la santé mentale.",
    href: "/actualites/soutien-emotionnel-infertilite",
  },
  {
    title: "Adoption et projet parental",
    text: "Ouvrir la réflexion sur les chemins de parentalité, les démarches à préparer et le besoin d'accompagnement humain.",
    href: "/qui-sommes-nous",
  },
];

export const faqs = [
  {
    question: "RhéaEspoir est-elle une clinique de fertilité ?",
    answer:
      "Non. RhéaEspoir est une association d'information, d'écoute, de sensibilisation et d'orientation. Les décisions médicales doivent être prises avec un gynécologue, un spécialiste de fertilité ou une équipe de PMA.",
  },
  {
    question: "Quand faut-il consulter pour infertilité ?",
    answer:
      "Un repère courant est de consulter après un an de rapports réguliers sans grossesse. Une consultation plus précoce peut être indiquée en cas d'âge maternel avancé, cycles très irréguliers, douleurs importantes, antécédents médicaux ou suspicion de facteur masculin.",
  },
  {
    question: "RhéaEspoir accompagne-t-elle les hommes ?",
    answer:
      "Oui. La fertilité concerne le couple. RhéaEspoir parle aussi de fertilité masculine, de spermogramme, de stress, de communication dans le couple et de soutien émotionnel pour les hommes.",
  },
  {
    question: "Le contact WhatsApp est-il confidentiel ?",
    answer:
      "Le site ne stocke pas les messages dans une base de données. Le contact se fait directement via WhatsApp pour permettre un premier échange plus simple avec l'association.",
  },
];

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  imageAlt: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "infertilite-origines-et-solutions",
    title: "Infertilité : origines et solutions",
    excerpt:
      "Comprendre les causes fréquentes de l'infertilité et les premières pistes pour avancer avec un professionnel de santé.",
    date: "21 janvier 2025",
    category: "Fertilité",
    image: "/images/rhea/article-infertilite.jpg",
    imageAlt: "Couple accompagné pour comprendre les causes possibles de l'infertilité",
    body: [
      "L'infertilité est une condition médicale qui touche de nombreux couples à travers le monde. Elle est souvent définie comme l'incapacité à concevoir après un an de rapports sexuels réguliers non protégés. Cette définition donne un repère, mais elle ne remplace pas une consultation : selon l'âge, les antécédents ou les symptômes, il peut être nécessaire de consulter plus tôt.",
      "Les causes peuvent être variées et complexes. Elles peuvent concerner la femme, l'homme, les deux partenaires ou rester inexpliquées malgré les examens. Chez RhéaEspoir, nous insistons sur un point essentiel : l'infertilité n'est pas une faute personnelle. C'est une situation médicale et humaine qui mérite écoute, bilan et accompagnement.",
      "## Causes fréquentes chez la femme",
      "Les troubles ovulatoires font partie des causes les plus courantes. Ils peuvent être liés au syndrome des ovaires polykystiques (SOPK), à une insuffisance ovarienne prématurée, à des déséquilibres hormonaux ou à des cycles très irréguliers. Quand l'ovulation n'a pas lieu régulièrement, la rencontre entre l'ovule et les spermatozoïdes devient plus difficile.",
      "Les trompes de Fallope peuvent aussi être abîmées ou bloquées. Des infections anciennes, des maladies inflammatoires pelviennes, certaines chirurgies ou des adhérences peuvent empêcher les spermatozoïdes de rencontrer l'ovule. Un bilan médical permet d'évaluer ces éléments avec des examens adaptés.",
      "L'endométriose est une autre cause importante. Elle correspond à la présence de tissu semblable à l'endomètre en dehors de l'utérus, souvent au niveau des ovaires, des trompes ou d'autres organes pelviens. Elle peut provoquer des douleurs, perturber la qualité ovocytaire, gêner les trompes et affecter les chances de grossesse.",
      "Les anomalies de l'utérus, comme certains fibromes, polypes, synéchies ou malformations congénitales, peuvent également jouer un rôle. Elles peuvent gêner l'implantation de l'embryon ou favoriser des fausses couches répétées.",
      "## Facteurs masculins",
      "La fertilité masculine doit toujours être explorée dans le bilan du couple. Une faible numération de spermatozoïdes, une mobilité réduite, des anomalies de forme, des infections, des varicocèles ou certains facteurs de mode de vie peuvent diminuer les chances de conception.",
      "Le spermogramme est souvent l'un des premiers examens demandés. Il est simple, mais il doit être interprété par un professionnel, car un résultat isolé ne raconte pas toujours toute l'histoire.",
      "## Options de traitement",
      "Les médicaments de fertilité peuvent aider à stimuler ou réguler l'ovulation. Ils sont prescrits selon le diagnostic et nécessitent un suivi pour réduire les risques et adapter les doses.",
      "L'insémination intra-utérine (IIU) consiste à déposer les spermatozoïdes préparés directement dans l'utérus au moment de l'ovulation. Elle peut être proposée dans certaines situations, notamment quand les trompes sont perméables et que les paramètres spermatiques le permettent.",
      "La fécondation in vitro (FIV) est une technique de procréation assistée où les ovules sont fécondés en laboratoire, puis un embryon est transféré dans l'utérus. Elle peut être indiquée en cas de trompes abîmées, d'endométriose, de facteur masculin important ou après échec d'autres traitements.",
      "Dans certains cas, une chirurgie peut être nécessaire pour corriger des anomalies structurelles, traiter certains fibromes, retirer des polypes ou prendre en charge une endométriose. Le don d'ovules ou de spermatozoïdes peut aussi être envisagé lorsque l'un des partenaires présente une difficulté majeure.",
      "## Le rôle de RhéaEspoir",
      "Face à ces options, beaucoup de couples se sentent perdus. RhéaEspoir aide à poser les bonnes questions, à comprendre les mots médicaux, à préserver la santé mentale et à ne pas rester isolé pendant l'attente. Le meilleur premier pas reste de consulter un spécialiste de la fertilité pour identifier les solutions adaptées à votre situation.",
    ],
  },
  {
    slug: "nouvelles-avancees-en-fertilite",
    title: "Nouvelles avancées en fertilité : l'espoir renouvelé pour les couples",
    excerpt:
      "Les progrès médicaux offrent plus d'options, mais chaque décision doit rester personnalisée et accompagnée.",
    date: "11 février 2025",
    category: "PMA",
    image: "/images/rhea/article-avancees.jpg",
    imageAlt: "Illustration des avancées médicales en fertilité et en procréation assistée",
    body: [
      "Les avancées médicales et technologiques ont considérablement transformé le domaine de la procréation assistée. Elles offrent de nouveaux espoirs aux couples confrontés à l'infertilité, mais elles demandent aussi une bonne information pour comprendre les bénéfices, les limites et les décisions à prendre.",
      "Chez RhéaEspoir, nous voulons rendre ces notions accessibles sans créer de faux espoirs. La médecine progresse, mais chaque parcours reste personnel : l'âge, le diagnostic, les antécédents, le budget, le contexte émotionnel et l'avis du spécialiste comptent tous.",
      "## La vitrification des ovules",
      "La vitrification est une technique de congélation rapide des ovules. Elle utilise des cryoprotecteurs et un refroidissement ultra-rapide pour éviter la formation de cristaux de glace, qui pourraient endommager les cellules.",
      "Cette méthode permet de préserver les ovules dans un état proche de leur état frais. Elle peut être proposée dans plusieurs situations : désir de reporter une grossesse, traitement médical pouvant altérer la fertilité, ou stratégie discutée dans certains parcours de PMA.",
      "Son intérêt principal est la flexibilité. Les ovules vitrifiés peuvent être conservés pendant plusieurs années, ce qui donne du temps à certaines femmes ou certains couples. Mais cette option doit être expliquée clairement, car elle ne garantit pas automatiquement une grossesse.",
      "## Le diagnostic génétique préimplantatoire",
      "Le diagnostic génétique préimplantatoire, souvent appelé DPI, permet de tester des embryons avant leur implantation afin de rechercher certaines anomalies génétiques. Cette méthode est particulièrement utile pour les couples porteurs de maladies génétiques ou ayant des antécédents de fausses couches répétées.",
      "Le DPI peut aider à sélectionner des embryons plus viables et à réduire certains risques. Il peut améliorer les chances de grossesse dans des indications précises, mais il reste encadré et doit être discuté avec une équipe spécialisée.",
      "## La culture prolongée des embryons",
      "La culture prolongée consiste à observer les embryons jusqu'au stade de blastocyste, généralement cinq à six jours après la fécondation. Cette observation donne plus d'éléments sur le développement embryonnaire avant le transfert.",
      "En sélectionnant les embryons qui évoluent le mieux jusqu'à ce stade, les équipes médicales peuvent parfois augmenter les chances d'implantation. Cela ne veut pas dire que tous les couples auront la même stratégie : le nombre d'embryons, l'âge et les antécédents influencent la décision.",
      "## Les traitements personnalisés",
      "Les progrès en génomique, biologie moléculaire et analyse hormonale permettent d'adapter davantage les protocoles. Les traitements personnalisés cherchent à choisir les doses, le calendrier et les techniques selon les besoins précis de chaque patient.",
      "Cette approche peut optimiser les chances de réussite et réduire certains effets secondaires. Elle rappelle aussi une vérité importante : il n'existe pas un seul parcours de fertilité, mais plusieurs chemins possibles selon la situation médicale et humaine du couple.",
      "## Les techniques de transfert d'embryons",
      "Les techniques de transfert ont aussi évolué. L'utilisation de cathéters plus doux, l'imagerie et une meilleure préparation du geste peuvent réduire le stress mécanique et améliorer les conditions d'implantation.",
      "Ces améliorations techniques sont précieuses, mais elles doivent s'accompagner d'un soutien émotionnel. L'attente après un transfert peut être très éprouvante. Être informé et entouré aide à traverser cette période avec plus de calme.",
      "## Ce qu'il faut retenir",
      "Les innovations comme la vitrification, le DPI, la culture prolongée, les traitements personnalisés et les transferts améliorés ont changé la fertilité moderne. Si vous envisagez une PMA, discutez de ces options avec un spécialiste afin d'identifier ce qui correspond réellement à votre situation.",
    ],
  },
  {
    slug: "soutien-emotionnel-infertilite",
    title: "Le rôle clé du soutien émotionnel face à l'infertilité",
    excerpt:
      "L'infertilité ne touche pas seulement le corps ; elle bouscule aussi l'identité, le couple, la famille et la foi en l'avenir.",
    date: "28 février 2025",
    category: "Bien-être",
    image: "/images/rhea/article-soutien.jpg",
    imageAlt: "Personne recevant un soutien émotionnel pendant un parcours d'infertilité",
    body: [
      "L'infertilité est une expérience émotionnellement et physiquement éprouvante pour de nombreux couples. Au-delà des défis médicaux, elle peut provoquer une gamme d'émotions complexes : tristesse, frustration, culpabilité, colère, espoir, peur de l'échec et parfois sentiment d'isolement.",
      "Le soutien émotionnel n'est pas un détail ajouté au parcours médical. Il fait partie de la manière dont une personne ou un couple tient debout pendant l'attente, les examens, les traitements, les annonces difficiles et les décisions importantes.",
      "## Comprendre les émotions liées à l'infertilité",
      "La tristesse et la déception sont fréquentes lorsqu'un couple apprend qu'il rencontre des difficultés à concevoir. La nouvelle peut être vécue comme un choc, surtout quand l'entourage semble avancer facilement vers la parentalité.",
      "La colère et la frustration peuvent aussi apparaître. Ne pas réussir à concevoir malgré les efforts donne parfois l'impression de perdre le contrôle. Certaines personnes ressentent de la colère contre leur corps, leur partenaire, les proches ou même le monde entier.",
      "La culpabilité est également très présente. Beaucoup se demandent s'ils ont fait quelque chose de mal ou s'ils auraient pu agir autrement. Ce poids intérieur est souvent renforcé par les tabous et les commentaires maladroits.",
      "L'isolement est l'un des aspects les plus douloureux. Même entouré d'amis ou de famille, on peut se sentir seul quand personne ne comprend vraiment l'attente, les traitements, les pertes ou les annonces de grossesse autour de soi.",
      "## Pourquoi le soutien émotionnel est crucial",
      "Un réseau de soutien peut réduire le stress et l'anxiété associés à l'infertilité. Il offre un espace où les émotions peuvent être exprimées sans jugement et sans obligation de paraître fort.",
      "Le soutien améliore aussi le bien-être général. Entendre que ses réactions sont normales, recevoir des encouragements et être accompagné dans les moments difficiles peut aider à retrouver un peu de stabilité.",
      "Partager son expérience avec d'autres personnes traversant une situation similaire crée un sentiment de communauté. Cela ne supprime pas la douleur, mais cela diminue la solitude.",
      "## Où trouver du soutien",
      "Les groupes locaux permettent de parler avec des personnes qui comprennent le vécu de l'infertilité. Ils peuvent offrir des conseils pratiques, mais surtout une présence humaine.",
      "Les groupes en ligne, forums et communautés peuvent aussi aider, en particulier lorsque les groupes physiques sont rares ou difficiles d'accès. Ils doivent toutefois rester des espaces d'entraide et ne pas remplacer un avis médical.",
      "La thérapie et le conseil sont précieux. Un thérapeute spécialisé dans les questions de fertilité peut aider à gérer l'anxiété, la culpabilité, les tensions de couple ou les décisions difficiles. Certains centres de fertilité proposent aussi un accompagnement psychologique.",
      "Les amis et la famille peuvent devenir des soutiens importants lorsqu'ils sont informés. Leur expliquer ce qu'est l'infertilité, ce qui aide et ce qui blesse peut améliorer la qualité de leur présence.",
      "## Techniques de gestion du stress",
      "La méditation, la respiration et les exercices de relaxation peuvent apaiser le système nerveux. Ils ne résolvent pas l'infertilité, mais ils aident à traverser les périodes d'attente et d'incertitude.",
      "Le yoga, la marche ou les exercices doux peuvent soutenir le bien-être général. L'objectif n'est pas la performance, mais le retour au corps avec douceur.",
      "Tenir un journal intime peut aider à déposer ce qui est trop lourd à dire. L'art, la musique, le dessin ou d'autres activités créatives offrent aussi une forme de respiration émotionnelle.",
      "## Le message de RhéaEspoir",
      "Le parcours de l'infertilité est complexe, mais vous n'êtes pas seul. Trouver et maintenir un soutien émotionnel est essentiel pour avancer avec résilience et espoir. Prendre soin de votre santé mentale est une partie réelle du chemin.",
    ],
  },
  {
    slug: "bilan-fertilite-couple-cameroun",
    title: "Bilan de fertilité du couple : examens, étapes et questions à poser",
    excerpt:
      "Quand consulter, quels examens demander et comment préparer un premier bilan de fertilité pour le couple au Cameroun.",
    date: "12 mars 2025",
    category: "Diagnostic",
    image: "/images/rhea/articles/bilan-fertilite-couple.png",
    imageAlt: "Illustration d'un bilan de fertilité du couple avec dossier médical et accompagnement",
    body: [
      "Le bilan de fertilité est souvent le premier vrai moment de clarté après des mois ou des années d'attente. Il ne sert pas à désigner un coupable, mais à comprendre ce qui bloque ou ralentit le projet de grossesse. L'infertilité peut venir de la femme, de l'homme, des deux partenaires ou rester inexpliquée malgré les examens.",
      "Les repères médicaux recommandent généralement de consulter après douze mois de rapports réguliers sans grossesse. Une consultation plus tôt peut être utile si la femme a plus de 35 ans, si les cycles sont très irréguliers, s'il existe des douleurs pelviennes, des antécédents d'infections, de chirurgie, de fausses couches répétées ou un problème masculin connu.",
      "## Pourquoi le bilan doit concerner les deux partenaires",
      "La fertilité est un sujet de couple. Explorer seulement la femme peut faire perdre du temps, augmenter la pression émotionnelle et retarder un diagnostic masculin simple à rechercher. Un spermogramme, réalisé tôt dans le parcours, peut orienter rapidement la suite.",
      "Du côté féminin, le médecin cherche souvent à savoir si l'ovulation est régulière, si la réserve ovarienne est cohérente avec l'âge, si l'utérus peut accueillir une grossesse et si les trompes permettent la rencontre entre ovule et spermatozoïdes.",
      "## Examens fréquents chez la femme",
      "Le bilan peut inclure une échographie pelvienne, un dosage hormonal, une évaluation de la réserve ovarienne, une recherche d'infections ou d'anomalies utérines, et parfois un examen des trompes. Le choix dépend des symptômes, de l'âge, des antécédents et du contexte médical.",
      "Un cycle irrégulier, des règles très douloureuses, des douleurs pendant les rapports ou des saignements inhabituels sont des informations importantes. Les noter avant la consultation aide le professionnel à mieux orienter les examens.",
      "## Examens fréquents chez l'homme",
      "Le spermogramme observe notamment le nombre, la mobilité et la forme des spermatozoïdes. Un résultat anormal ne doit pas être interprété seul : il peut être répété et complété par un examen clinique, des dosages hormonaux ou une orientation vers un spécialiste.",
      "Certains facteurs peuvent influencer la fertilité masculine : varicocèle, infections, chaleur répétée, tabac, alcool, certains médicaments, traitements hormonaux, antécédents de chirurgie ou exposition professionnelle à des produits toxiques.",
      "## Questions à poser au rendez-vous",
      "Avant la consultation, préparez une liste simple : depuis combien de temps essayez-vous, à quelle fréquence, comment sont les cycles, quels examens ont déjà été faits, quels traitements ont été pris, quels sont les antécédents médicaux et chirurgicaux des deux partenaires.",
      "Demandez aussi quels examens sont prioritaires, quel délai attendre avant la prochaine étape, quels signes doivent faire consulter rapidement, et quelles options existent localement : suivi médical, stimulation, insémination, FIV, soutien psychologique ou orientation sociale.",
      "## Le rôle de RhéaEspoir",
      "RhéaEspoir peut aider à préparer les questions, expliquer les mots médicaux et soutenir le couple dans l'attente des résultats. L'association ne remplace pas un spécialiste, mais elle peut rendre le parcours moins solitaire et plus lisible.",
    ],
  },
  {
    slug: "infertilite-masculine-spermogramme-causes-solutions",
    title: "Infertilité masculine : comprendre le spermogramme, les causes et les solutions",
    excerpt:
      "La fertilité masculine compte autant que la fertilité féminine : spermogramme, facteurs de risque, hygiène de vie et prise en charge.",
    date: "27 mars 2025",
    category: "Fertilité masculine",
    image: "/images/rhea/articles/infertilite-masculine-spermogramme.png",
    imageAlt: "Illustration d'un spermogramme et d'une analyse de fertilité masculine",
    body: [
      "L'infertilité masculine reste entourée de beaucoup de silence. Pourtant, elle peut contribuer à une difficulté de conception et doit être explorée dès le début du bilan. En parler ne diminue pas la valeur d'un homme : cela permet au couple de gagner du temps et de choisir une prise en charge adaptée.",
      "Un homme peut se sentir en bonne santé et avoir malgré tout des paramètres spermatiques diminués. C'est pour cette raison que le spermogramme est un examen central. Il apporte des informations objectives et évite de fonder tout le parcours sur des suppositions.",
      "## Ce que mesure le spermogramme",
      "Le spermogramme évalue généralement le volume de sperme, la concentration en spermatozoïdes, leur mobilité, leur forme et parfois la présence de cellules ou signes d'infection. Ces éléments aident à comprendre si les spermatozoïdes ont de bonnes chances d'atteindre et féconder l'ovule.",
      "Un résultat isolé ne suffit pas toujours. La production de spermatozoïdes varie avec le temps, la fièvre, le stress, certains médicaments, les infections ou les habitudes de vie. Le médecin peut demander un contrôle avant de conclure.",
      "## Causes possibles",
      "Les causes peuvent être hormonales, génétiques, infectieuses, anatomiques ou liées au mode de vie. Une varicocèle, c'est-à-dire une dilatation de veines autour du testicule, peut influencer la qualité du sperme et mérite une évaluation médicale.",
      "Des antécédents d'infections sexuellement transmissibles, d'oreillons après la puberté, de traumatisme testiculaire, de chirurgie, de chimiothérapie ou d'exposition à la chaleur peuvent également compter. Certains traitements hormonaux ou stéroïdes peuvent diminuer la production de spermatozoïdes.",
      "## Habitudes qui peuvent aider",
      "Une bonne hygiène de vie ne corrige pas toutes les causes, mais elle soutient la santé reproductive : arrêter le tabac, limiter l'alcool, éviter les anabolisants, dormir suffisamment, traiter les infections, maintenir un poids stable et éviter l'exposition répétée à une chaleur excessive au niveau des testicules.",
      "L'alimentation équilibrée, l'activité physique modérée et la réduction du stress peuvent accompagner la démarche médicale. Il faut cependant se méfier des promesses rapides : aucun complément ne doit remplacer un bilan sérieux.",
      "## Solutions médicales possibles",
      "Selon le diagnostic, le médecin peut proposer un traitement d'infection, une correction d'une varicocèle, une adaptation de médicaments, un suivi hormonal, une insémination, une FIV ou une technique avec micro-injection selon la qualité spermatique.",
      "L'objectif n'est pas de choisir seul une technique, mais de comprendre le problème pour avancer avec une équipe compétente. Dans certains cas, un avis d'urologue ou d'andrologue est utile.",
      "## Briser le tabou",
      "RhéaEspoir encourage les couples à parler de fertilité masculine sans honte. Quand l'homme accepte de faire le bilan, il protège aussi sa partenaire d'une charge émotionnelle injuste et participe pleinement au projet parental.",
    ],
  },
  {
    slug: "endometriose-infertilite-douleurs-regles",
    title: "Endométriose et infertilité : quand les douleurs de règles doivent alerter",
    excerpt:
      "Douleurs pelviennes, règles très douloureuses, rapports douloureux : comprendre le lien possible entre endométriose et fertilité.",
    date: "8 avril 2025",
    category: "Santé féminine",
    image: "/images/rhea/articles/endometriose-infertilite.png",
    imageAlt: "Illustration de l'endométriose et de son impact possible sur la fertilité",
    body: [
      "L'endométriose est une maladie qui peut provoquer des douleurs importantes et affecter la fertilité. Beaucoup de femmes entendent pendant des années que les règles douloureuses sont normales. Pourtant, une douleur qui empêche de travailler, d'étudier, de dormir ou d'avoir une vie intime sereine mérite une consultation.",
      "Cette maladie correspond à la présence de tissu semblable à l'endomètre en dehors de l'utérus. Elle peut toucher les ovaires, les trompes, le péritoine et parfois d'autres organes. Son impact varie beaucoup d'une femme à l'autre.",
      "## Signes qui doivent faire consulter",
      "Des règles très douloureuses, des douleurs pelviennes chroniques, des douleurs pendant les rapports, des douleurs à la selle ou à la miction pendant les règles, une fatigue importante ou des difficultés à concevoir peuvent orienter vers une endométriose.",
      "Il ne faut pas attendre que la douleur devienne insupportable. Plus tôt le dialogue médical commence, plus tôt il est possible de soulager, d'explorer et de protéger le projet de fertilité.",
      "## Pourquoi l'endométriose peut gêner la fertilité",
      "L'endométriose peut provoquer une inflammation, des adhérences, des kystes ovariens ou une atteinte des trompes. Elle peut aussi influencer la qualité ovocytaire, la rencontre entre ovule et spermatozoïdes ou l'implantation embryonnaire.",
      "Toutes les femmes atteintes d'endométriose ne sont pas infertiles. Certaines conçoivent naturellement, d'autres ont besoin d'un accompagnement spécialisé. Le degré de douleur ne reflète pas toujours la gravité des lésions.",
      "## Diagnostic et suivi",
      "Le diagnostic commence par l'écoute des symptômes, l'examen clinique et l'imagerie quand elle est indiquée. Une échographie spécialisée ou une IRM peuvent être proposées selon les situations. Le parcours doit être individualisé.",
      "Les traitements peuvent viser la douleur, la qualité de vie, la fertilité ou les trois. Selon le projet de grossesse, les options ne seront pas les mêmes. C'est pourquoi il est important de dire clairement au médecin si une grossesse est souhaitée maintenant, plus tard ou si le couple est déjà en essai.",
      "## PMA, chirurgie et décisions",
      "Dans certains cas, une prise en charge chirurgicale peut être discutée. Dans d'autres, l'équipe peut orienter vers une PMA. La bonne décision dépend de l'âge, de la réserve ovarienne, de l'état des trompes, de la durée d'infertilité, des douleurs et des antécédents.",
      "Le plus important est d'éviter les décisions prises dans la panique. Un deuxième avis peut être utile lorsque les choix sont lourds ou que le couple ne comprend pas bien les avantages et les risques.",
      "## Soutien émotionnel",
      "Vivre avec des douleurs et une attente de grossesse peut épuiser. RhéaEspoir peut offrir un espace d'écoute, aider à préparer les rendez-vous et rappeler que demander de l'aide n'est pas un signe de faiblesse.",
    ],
  },
  {
    slug: "infertilite-inexpliquee-que-faire",
    title: "Infertilité inexpliquée : que faire quand les examens semblent normaux ?",
    excerpt:
      "Comprendre l'infertilité inexpliquée, éviter la culpabilité et organiser les prochaines étapes avec un spécialiste.",
    date: "23 avril 2025",
    category: "Parcours",
    image: "/images/rhea/articles/infertilite-inexpliquee.png",
    imageAlt: "Illustration d'un parcours d'infertilité inexpliquée avec point d'interrogation et chemins médicaux",
    body: [
      "L'infertilité inexpliquée est l'une des situations les plus frustrantes pour un couple. Les examens semblent rassurants, mais la grossesse n'arrive pas. Cette absence de réponse claire peut donner l'impression d'être bloqué entre espoir et incompréhension.",
      "Inexpliquée ne veut pas dire imaginaire. Cela signifie simplement que les examens disponibles n'ont pas identifié de cause évidente. Certaines difficultés peuvent être fines, intermittentes ou difficiles à mesurer avec les tests de première intention.",
      "## Ce que signifie le diagnostic",
      "Le diagnostic d'infertilité inexpliquée est généralement posé après un bilan de base : ovulation, trompes, utérus, réserve ovarienne et spermogramme. Si ces éléments ne montrent pas d'anomalie majeure, le couple peut recevoir cette conclusion provisoire.",
      "Ce diagnostic doit rester dynamique. Avec le temps, l'âge, l'évolution des symptômes ou de nouveaux examens, la stratégie peut changer. Il ne faut pas le vivre comme une fin de parcours.",
      "## Les erreurs à éviter",
      "La première erreur est de penser que tout est dans la tête. Le stress peut rendre le parcours plus difficile, mais il ne doit pas servir à culpabiliser la femme ou le couple. La deuxième erreur est de multiplier sans fin les remèdes non vérifiés au lieu de construire une stratégie médicale.",
      "La troisième erreur est l'attente passive. Quand le temps passe, surtout après 35 ans, il est utile de rediscuter rapidement des options avec un spécialiste de fertilité.",
      "## Options possibles",
      "Selon l'âge, la durée d'essai et les résultats, le médecin peut proposer une surveillance de l'ovulation, une stimulation, une insémination intra-utérine, une FIV ou des examens complémentaires. Chaque option a ses indications, ses coûts, ses contraintes et ses limites.",
      "Le couple peut demander un plan clair : combien de cycles essayer, quel critère fera changer de stratégie, quel budget anticiper, quels effets secondaires surveiller et quand demander un nouvel avis.",
      "## Préserver le couple",
      "Quand aucun résultat n'explique la difficulté, les tensions peuvent augmenter. Chacun cherche une cause, parfois en silence. Prendre un temps de discussion hors des rendez-vous médicaux aide à protéger le lien.",
      "Il peut être utile de décider ensemble comment annoncer ou ne pas annoncer le parcours à la famille, comment gérer les questions intrusives et comment garder des moments de vie qui ne tournent pas uniquement autour de la fertilité.",
      "## Avancer avec RhéaEspoir",
      "RhéaEspoir peut accompagner cette zone d'incertitude avec de l'écoute, des ressources et une orientation vers les bons interlocuteurs. L'objectif est de transformer le flou en prochaines étapes concrètes.",
    ],
  },
  {
    slug: "preparer-consultation-pma-fiv-cameroun",
    title: "Préparer une consultation PMA ou FIV : documents, budget et questions essentielles",
    excerpt:
      "Une checklist claire pour préparer un rendez-vous de PMA ou de FIV : examens, coûts, délais, risques et accompagnement émotionnel.",
    date: "7 mai 2025",
    category: "PMA",
    image: "/images/rhea/articles/preparer-consultation-pma-fiv.png",
    imageAlt: "Illustration d'une checklist de consultation PMA ou FIV avec embryon stylisé",
    body: [
      "Une consultation de PMA peut impressionner. Les mots sont techniques, les décisions importantes et le budget parfois lourd. Bien se préparer permet d'arriver avec plus de calme et de repartir avec des réponses utiles.",
      "La PMA regroupe plusieurs techniques, dont la stimulation ovarienne, l'insémination intra-utérine et la fécondation in vitro. La FIV n'est pas toujours la première étape, mais elle peut être indiquée selon le diagnostic, l'âge, les trompes, le spermogramme ou les échecs précédents.",
      "## Documents à rassembler",
      "Avant le rendez-vous, rassemblez les anciens examens : échographies, bilans hormonaux, spermogrammes, hystérosalpingographie ou autres examens des trompes, comptes rendus de chirurgie, traitements déjà essayés, antécédents de grossesse ou de fausse couche.",
      "Notez aussi les dates importantes : durée des essais, régularité des cycles, traitements pris, infections connues, douleurs, opérations, résultats anormaux et questions qui reviennent souvent dans le couple.",
      "## Questions médicales à poser",
      "Demandez quel est le diagnostic le plus probable, quelle technique est recommandée, pourquoi cette technique est choisie, quelles sont les alternatives et combien de tentatives sont raisonnables avant de changer de stratégie.",
      "Il est aussi utile de demander quels examens manquent, quels risques existent, quels effets secondaires peuvent apparaître, combien de visites sont nécessaires et à quel moment appeler l'équipe médicale.",
      "## Budget et organisation",
      "Le coût de la PMA peut devenir une source majeure de stress. Demandez un devis détaillé : consultations, médicaments, examens, ponction, laboratoire, transfert, congélation éventuelle et frais supplémentaires possibles.",
      "Au-delà de l'argent, préparez l'organisation : disponibilité au travail, déplacements, soutien d'un proche, conservation des documents, calendrier du cycle et temps de repos après certains gestes.",
      "## Soutien psychologique",
      "La PMA n'est pas seulement un protocole médical. Elle demande de l'endurance émotionnelle : attentes, injections, résultats, espoir, peur, annonces difficiles. Prévoir un soutien avant d'être épuisé est une vraie stratégie.",
      "Le couple peut décider à l'avance comment gérer les résultats, qui informer, quelles limites poser à l'entourage et comment garder un espace de tendresse hors du protocole.",
      "## Le rôle de RhéaEspoir",
      "RhéaEspoir aide les couples à préparer leurs questions, comprendre les étapes et trouver un espace d'écoute. L'association ne promet pas une grossesse, mais elle peut aider à traverser le parcours avec plus de repères et moins d'isolement.",
    ],
  },
];

export type Event = {
  slug: string;
  title: string;
  date: string;
  isoDate?: string;
  place: string;
  image: string;
  excerpt: string;
  body: string[];
};

export const events: Event[] = [
  {
    slug: "atelier-bien-etre-gestion-stress-couples-infertiles",
    title: "Atelier Bien-être et Gestion du Stress pour les Couples Infertiles",
    date: "15 juillet 2025",
    isoDate: "2025-07-15",
    place: "Yaoundé",
    image: "/images/rhea/event-stress.jpg",
    excerpt:
      "Un atelier pour apprendre à mieux traverser l'attente, protéger le couple et retrouver des outils simples de calme.",
    body: [
      "L'atelier met l'accent sur la respiration, l'écoute du corps, la communication dans le couple et les gestes qui aident à diminuer la tension quotidienne.",
      "Il s'adresse aux couples en attente de grossesse, en démarche PMA ou en réflexion sur d'autres chemins de parentalité.",
    ],
  },
  {
    slug: "conference-nouvelles-avancees-traitement-fertilite",
    title: "Conférence sur les Nouvelles Avancées en Traitement de Fertilité",
    date: "À confirmer",
    place: "Yaoundé",
    image: "/images/rhea/event-conference.jpg",
    excerpt:
      "Une rencontre pour rendre les options de traitement plus compréhensibles et préparer les bonnes questions médicales.",
    body: [
      "La conférence présente les notions essentielles autour des bilans, protocoles de fertilité, indications de PMA et limites des traitements.",
      "L'objectif est d'aider les participants à dialoguer plus sereinement avec les spécialistes et à prendre des décisions éclairées.",
    ],
  },
];

export const forumTopics = [
  {
    slug: "stucs-pour-renforcer-la-fertilite",
    title: "stucs pour renforcer la fertilité",
    author: "Membre RhéaEspoir",
    date: "2025",
    replies: 1,
    views: 21,
    body:
      "Astuces naturelles, hygiène de vie, alimentation, suivi médical : quelles habitudes peuvent soutenir la fertilité sans remplacer l'avis d'un spécialiste ?",
    sections: [
      {
        title: "Pour les femmes",
        items: [
          "Adopter une alimentation équilibrée : privilégier les aliments riches en antioxydants, vitamines, vitamine D, acide folique, fer et zinc.",
          "Consommer des fruits et légumes frais, des céréales complètes, des légumineuses, des noix et des graines.",
          "Limiter les aliments transformés, les sucres raffinés et les graisses saturées.",
          "Maintenir un poids santé : un poids insuffisant ou excessif peut perturber l'ovulation.",
          "Gérer le stress avec le yoga, la méditation, la respiration profonde ou des temps de repos réguliers.",
          "Surveiller son cycle menstruel pour mieux identifier les périodes d'ovulation.",
          "Éviter les toxiques : arrêter de fumer, limiter l'alcool et éviter l'exposition aux produits chimiques toxiques.",
          "Consulter un gynécologue ou un spécialiste de la fertilité en cas de difficultés à concevoir.",
        ],
      },
    ],
    answer: "merci",
  },
];

export const forumStats = [
  { label: "Sujets archivés", value: "1" },
  { label: "Réponses", value: "1" },
  { label: "Mode V1", value: "Lecture seule" },
];

export function whatsappUrl(phone = phones[0].wa, message = contact.whatsappMessage) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
