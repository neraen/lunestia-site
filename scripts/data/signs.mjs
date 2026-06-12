// Content data for the 12 zodiac sign pages.
// Prose follows the Lunestia editorial voice: psychological depth, no clichés,
// no bullet-point trait lists, warmth without new-age mysticism.

export const GLYPH = {
  belier: '♈', taureau: '♉', gemeaux: '♊', cancer: '♋', lion: '♌', vierge: '♍',
  balance: '♎', scorpion: '♏', sagittaire: '♐', capricorne: '♑', verseau: '♒', poissons: '♓',
};
export const NAME = {
  belier: 'Bélier', taureau: 'Taureau', gemeaux: 'Gémeaux', cancer: 'Cancer', lion: 'Lion', vierge: 'Vierge',
  balance: 'Balance', scorpion: 'Scorpion', sagittaire: 'Sagittaire', capricorne: 'Capricorne', verseau: 'Verseau', poissons: 'Poissons',
};

const card = (slug, label) => ({ href: `/signes/${slug}`, glyph: GLYPH[slug], label, name: NAME[slug] });
const guideCard = { href: '/guide/theme-natal', glyph: '✦', label: 'Guide', name: 'Le thème natal' };

function related(opp, same) {
  return [card(opp, 'Signe opposé'), card(same[0], 'Même élément'), card(same[1], 'Même élément'), guideCard];
}

export const signs = [
  {
    slug: 'belier', name: 'Bélier', glyph: '♈', element: 'Feu', mode: 'Cardinal', planet: 'Mars', dates: '21 mars – 19 avril',
    metaTitle: 'Bélier : signe astrologique, traits et compatibilité | Lunestia',
    metaDesc: "Bélier en astrologie : l'archétype du feu cardinal, sa planète Mars, son amour, son ombre et son chemin d'évolution. Bien au-delà des clichés du fonceur.",
    ogDesc: "L'archétype du Bélier au-delà des clichés : feu cardinal, Mars, amour, ombre et évolution.",
    articleHeadline: 'Bélier : signe astrologique, traits et compatibilité',
    h1Html: "Bélier, <em>l'étincelle</em> qui met le monde en mouvement",
    leadHtml: "Imaginez la toute première heure du printemps : la sève qui force le bourgeon, l'air qui se réchauffe d'un coup, l'impatience du vivant qui ne demande qu'à jaillir. Voilà l'énergie du Bélier.",
    sections: [
      { h2: null, paras: [
        "En <strong>Bélier, l'astrologie</strong> place le tout premier signe du zodiaque, celui qui ouvre la roue au moment de l'équinoxe de printemps. Ce n'est pas un hasard de calendrier : tout, chez le Bélier, parle de commencement. Là où d'autres pèsent le pour et le contre, lui ressent une poussée, une certitude de corps avant même que la pensée n'arrive. Comprendre ce signe, c'est comprendre comment une intention devient un geste, comment le désir se transforme en mouvement sans passer par la salle d'attente du doute.",
      ] },
      { h2: 'Comprendre le Bélier : au-delà des clichés', paras: [
        "On résume trop souvent le Bélier à un fonceur impatient. C'est passer à côté de l'essentiel. Le moteur profond de ce signe n'est pas l'agressivité, c'est l'<strong>affirmation de l'existence</strong> : prouver, encore et encore, qu'il est vivant, séparé, capable d'agir par lui-même. Le Bélier est l'archétype du premier souffle, du « je suis » qui précède toute relation. Sa quête existentielle est celle de l'initiative pure : être la cause de quelque chose plutôt que la conséquence de ce que d'autres ont décidé.",
        "Derrière l'élan, il y a une vulnérabilité que peu de gens devinent. Le Bélier a besoin de se sentir <em>courageux</em> pour se sentir lui-même, et cette dépendance au défi peut devenir une fuite. Son ombre se loge précisément là : dans l'incapacité à tolérer l'attente, le vide, la lenteur d'un processus. Quand il ne sait pas quoi conquérir, il peut s'inventer des combats, projeter sur les autres une hostilité imaginaire pour avoir, enfin, quelque chose à affronter. La colère du Bélier n'est presque jamais de la méchanceté, c'est une énergie vitale qui n'a pas trouvé sa cible juste.",
        "Le travail intérieur du Bélier consiste à apprendre que le courage ne se prouve pas seulement en avançant, mais parfois en s'arrêtant. Qu'on peut exister sans gagner. Que la patience n'est pas une faiblesse mais une autre forme de feu, celle de la braise, qui dure.",
      ] },
      { h2: "Feu cardinal : l'énergie du Bélier", paras: [
        "Le Bélier est le seul signe à conjuguer le feu avec le mode cardinal, et cette combinaison définit toute sa signature. Le feu, c'est l'enthousiasme, l'intuition, la foi en l'avenir. Le cardinal, c'est l'impulsion qui démarre, l'énergie qui se concentre en un point et part. Le Bélier est donc un feu qui <em>initie</em> : il allume, mais ne tient pas forcément la flamme.",
        "La nuance saute aux yeux quand on le compare aux deux autres signes de feu. Le <a href=\"/signes/lion\">Lion</a>, feu fixe, rayonne et veut durer, être vu, régner sur ce qu'il a créé. Le <a href=\"/signes/sagittaire\">Sagittaire</a>, feu mutable, cherche le sens, l'horizon, la quête qui dépasse l'instant. Le Bélier, lui, n'a pas encore ces préoccupations : il est dans le pur surgissement. Pour saisir comment l'élément colore chaque tempérament, notre <a href=\"/guide/elements\">guide des quatre éléments</a> détaille cette grammaire énergétique.",
      ] },
      { h2: 'Mars : la planète qui guide le Bélier', paras: [
        "Mars donne au Bélier sa façon de désirer et d'agir. C'est la planète du guerrier, mais aussi celle de l'instinct sain, la capacité à dire non, à se défendre, à poursuivre ce qu'on veut sans s'excuser d'exister. Chez le Bélier, Mars n'est pas filtré par les conventions : il s'exprime à l'état brut, direct, parfois brûlant.",
        "Cette régence explique la franchise désarmante du signe. Le Bélier ne sait pas dissimuler longtemps ; ses émotions montent à la surface, se déchargent, puis retombent aussi vite. C'est ce qui le rend si vivant et, parfois, si déroutant pour les tempéraments qui mettent des jours à digérer un conflit. Avec un Mars bien intégré, le Bélier devient un protecteur loyal, capable de mettre son énergie au service des autres et pas seulement de lui-même.",
      ] },
      { h2: "Le Bélier en amour : ce qu'il cherche vraiment", paras: [
        "En amour, le Bélier aime comme il vit : vite, fort, sans masque. La séduction l'électrise, la conquête le galvanise. Mais ce qu'on prend pour de la légèreté cache souvent une attente plus profonde : il cherche un partenaire qui ne le freine pas, qui sache tenir tête sans chercher à le dompter. Le Bélier ne tombe pas amoureux de la facilité, il s'enflamme pour ce qui résiste un peu, ce qui lui renvoie une étincelle.",
        "Son défi relationnel tient en un mot : la durée. Une fois la conquête achevée, il doit réinventer le désir au quotidien, apprendre que l'autre n'est pas une montagne à gravir mais un être à découvrir lentement. Ce que le Bélier projette souvent sur son partenaire, c'est sa propre peur de la passivité : il peut confondre le calme de l'autre avec de l'indifférence.",
        "Les résonances les plus fluides se tissent avec ses frères de feu, la <a href=\"/compatibilite/belier-lion\">compatibilité Bélier–Lion</a> et la <a href=\"/compatibilite/belier-sagittaire\">compatibilité Bélier–Sagittaire</a> partagent un même goût de l'aventure. Mais c'est avec son signe opposé que l'alchimie devient la plus instructive : la <a href=\"/compatibilite/belier-balance\">compatibilité Bélier–Balance</a> met face à face l'affirmation de soi et l'art de la relation, dans une polarité aussi magnétique qu'exigeante.",
      ] },
      { h2: 'Le Bélier dans la vie quotidienne', paras: [
        "Au travail, le Bélier est le démarreur. Donnez-lui un projet à lancer, un terrain vierge, une urgence à résoudre, et il déploie une énergie que personne ne soupçonnait. En revanche, la maintenance l'ennuie, la paperasse l'épuise, et les réunions sans décision le rendent fou. Il excelle dans le sprint, moins dans le marathon administratif.",
        "Dans ses loisirs, il recherche l'intensité plus que la performance : le sport qui décharge, le jeu qui pique au vif, la nouveauté qui réveille. Le Bélier a besoin de se dépenser physiquement pour rester équilibré émotionnellement ; un Bélier qui ne bouge pas devient un Bélier irritable. Au fond, ce qui le caractérise au quotidien, c'est une honnêteté frontale : avec lui, on sait toujours où l'on en est.",
      ] },
      { h2: "L'évolution du Bélier : de l'ombre à la lumière", paras: [
        "Un Bélier « jeune », au sens astrologique, vit dans la réaction : il fonce, se cogne, recommence, prend chaque obstacle pour une attaque personnelle. Son énergie est réelle mais dispersée, brûlée dans des combats sans enjeu. Le monde lui semble fait de murs à enfoncer.",
        "Le Bélier qui a intégré son ombre découvre une vérité contre-intuitive : sa vraie force n'est pas dans la conquête mais dans le <strong>courage d'initier ce qui compte</strong>. Il met alors son feu au service d'une cause, d'un autre, d'un projet plus grand que son ego. Il apprend à canaliser plutôt qu'à exploser, à choisir ses batailles, à transformer l'impatience en présence. La maturité du Bélier ne consiste pas à éteindre sa flamme, ce serait le trahir, mais à la diriger. Cette trajectoire se lit pleinement dans un thème natal complet, où la position de la Lune et de l'<a href=\"/guide/ascendant\">Ascendant</a> nuance considérablement le portrait solaire.",
      ] },
    ],
    faq: [
      { q: 'Quelles sont les dates du signe Bélier&nbsp;?', a: "Le Soleil traverse le Bélier du 21 mars au 19 avril environ. Les dates varient d'un ou deux jours selon les années, car l'entrée du Soleil dans le signe dépend de l'équinoxe de printemps. Si vous êtes né autour de ces bornes, seul le calcul exact de votre thème natal confirme votre signe solaire." },
      { q: 'Avec quel signe le Bélier est-il le plus compatible&nbsp;?', a: "Les meilleures résonances naturelles du Bélier se trouvent avec les autres signes de feu, le <a href=\"/signes/lion\">Lion</a> et le <a href=\"/signes/sagittaire\">Sagittaire</a>, qui partagent son élan sans l'étouffer. La <a href=\"/signes/balance\">Balance</a>, son signe opposé, offre une attraction magnétique faite de complémentarité. Mais la vraie compatibilité se lit dans la synastrie complète des deux thèmes." },
      { q: 'Pourquoi dit-on que le Bélier est impulsif&nbsp;?', a: "Le Bélier est régi par Mars et par le mode cardinal : il initie, il agit, il avance avant de délibérer. Cette spontanéité n'est pas un défaut mais une fonction, celle de l'étincelle qui met le mouvement en route. L'impulsivité devient un problème seulement quand elle court-circuite l'écoute de soi et des autres." },
    ],
    ctaH2: "Votre Bélier n'est qu'un début",
    ctaP: "Votre signe solaire raconte une scène ; votre thème natal raconte toute la pièce. Découvrez votre Lune, votre Ascendant et vos maisons dans Lunestia, et laissez Lyra vous lire au degré près.",
    related: related('balance', ['lion', 'sagittaire']),
  },

  {
    slug: 'taureau', name: 'Taureau', glyph: '♉', element: 'Terre', mode: 'Fixe', planet: 'Vénus', dates: '20 avril – 20 mai',
    metaTitle: 'Taureau : signe astrologique, traits et compatibilité | Lunestia',
    metaDesc: "Taureau en astrologie : la terre fixe régie par Vénus, son rapport au plaisir et à la sécurité, son ombre possessive et son chemin d'évolution vers la confiance.",
    ogDesc: "La terre fixe de Vénus : plaisir, sécurité, ténacité et l'art de durer. Le Taureau au-delà des clichés.",
    articleHeadline: 'Taureau : signe astrologique, traits et compatibilité',
    h1Html: "Taureau, la <em>patience</em> de la terre qui porte ses fruits",
    leadHtml: "Un verger en fin de printemps, lourd de promesses. Le soleil qui chauffe la peau, l'odeur de l'herbe coupée, le temps qui s'étire sans urgence. Le Taureau habite ce monde-là : celui des sens, de la matière, de ce qui mûrit sans qu'on le presse.",
    sections: [
      { h2: null, paras: [
        "Dans le <strong>Taureau, l'astrologie</strong> dessine le premier signe de terre, celui qui suit l'étincelle du Bélier pour la rendre tangible. Après l'élan, la consolidation ; après le désir, la jouissance. Le Taureau ne demande pas « et après ? » mais « comment faire durer ? ». C'est le signe de l'incarnation : transformer une intention en réalité solide, donner un corps aux choses, ancrer ce qui sans lui resterait abstrait. Le comprendre, c'est comprendre notre rapport au plaisir, à la sécurité et à la valeur, ce que nous estimons digne d'être gardé.",
      ] },
      { h2: 'Comprendre le Taureau : au-delà des clichés', paras: [
        "On caricature volontiers le Taureau en jouisseur paresseux ou en têtu de service. La réalité psychologique est plus subtile. Le moteur profond du Taureau, c'est le besoin de <strong>se sentir en sécurité dans son propre corps et dans le réel</strong>. Tout ce qu'il construit, un confort, un patrimoine, une routine, une relation stable, sert à apaiser une question fondamentale : « Suis-je en sûreté ? Puis-je me reposer ici ? »",
        "Son ombre naît quand cette quête de sécurité se fige en possessivité. Le Taureau peut alors confondre l'avoir et l'être, s'accrocher à ce qu'il connaît par peur du vide, traiter les personnes qu'il aime comme des biens qu'on ne lâche pas. La jalousie du Taureau n'est pas dramatique comme celle du Scorpion : elle est sourde, têtue, faite de la terreur de perdre. Apprendre à distinguer la sécurité intérieure de l'accumulation extérieure est le grand chantier de ce signe.",
        "À l'inverse, un Taureau qui a fait ce travail devient un roc bienveillant : présent, fiable, capable d'offrir aux autres la stabilité qu'il a appris à porter en lui. Sa lenteur apparente est une forme de sagesse, il sait que les choses vraies prennent du temps.",
      ] },
      { h2: "Terre fixe : l'énergie du Taureau", paras: [
        "Le Taureau conjugue la terre, élément du concret et de la patience, avec le mode fixe, celui qui maintient et approfondit. Cela en fait le plus stable des signes de terre. Là où la <a href=\"/signes/vierge\">Vierge</a>, terre mutable, ajuste et perfectionne sans cesse, là où le <a href=\"/signes/capricorne\">Capricorne</a>, terre cardinale, construit en visant un sommet, le Taureau, lui, <em>enracine</em>. Il ne cherche pas à améliorer ni à gravir : il cherche à perdurer, à habiter pleinement ce qui est.",
        "Cette fixité explique sa résistance au changement. On ne déplace pas un Taureau par la pression, seulement par la confiance et le temps. Pour saisir comment l'élément terre façonne le tempérament, notre <a href=\"/guide/elements\">guide des éléments</a> éclaire les différences entre les trois signes de terre.",
      ] },
      { h2: 'Vénus : la planète qui guide le Taureau', paras: [
        "Vénus, maîtresse du Taureau, gouverne ici le plaisir, la beauté et la valeur. Mais c'est une Vénus terrienne, sensorielle, très différente de la Vénus aérienne de la <a href=\"/signes/balance\">Balance</a>. Chez le Taureau, Vénus s'exprime par les cinq sens : le goût d'un bon repas, la douceur d'un tissu, la justesse d'un son, le réconfort d'un corps aimé.",
        "Cette régence fait du Taureau un être profondément fidèle dans ses attachements, à ses goûts, ses lieux, ses gens. Vénus lui donne aussi un sens inné de la valeur : il sait, presque physiquement, ce qui mérite son temps et ce qui n'est qu'agitation. Bien intégrée, cette planète fait de lui un créateur de beauté durable ; mal vécue, elle le pousse vers la complaisance et l'inertie.",
      ] },
      { h2: "Le Taureau en amour : ce qu'il cherche vraiment", paras: [
        "En amour, le Taureau cherche la permanence. Il n'aime pas par à-coups mais par sédimentation : son attachement grandit lentement, puis devient une fondation. Ce qu'il offre est précieux et rare, une présence constante, une loyauté à toute épreuve, une tendresse qui s'exprime par les gestes du quotidien plutôt que par les grandes déclarations.",
        "Ce dont il a besoin, c'est de se sentir en sécurité affective : la stabilité, les rituels partagés, la certitude que l'autre ne disparaîtra pas. Ce qui le fait fuir, paradoxalement, c'est l'instabilité émotionnelle, les jeux, les ruptures-réconciliations, l'imprévisibilité. Son défi : ne pas étouffer la relation à force de vouloir la sécuriser.",
        "Les affinités les plus naturelles se tissent avec les signes de terre : la <a href=\"/compatibilite/taureau-vierge\">compatibilité Taureau–Vierge</a> et la <a href=\"/compatibilite/taureau-capricorne\">compatibilité Taureau–Capricorne</a> reposent sur une même fiabilité tranquille. Avec son opposé, la <a href=\"/compatibilite/taureau-scorpion\">compatibilité Taureau–Scorpion</a> oppose la sécurité à la transformation, dans une attraction aussi intense que déstabilisante.",
      ] },
      { h2: 'Le Taureau dans la vie quotidienne', paras: [
        "Au travail, le Taureau est l'artisan : il préfère bien faire que faire vite, déteste qu'on le bouscule et excelle dans les tâches qui demandent constance et savoir-faire. On peut compter sur lui, c'est souvent lui qui tient la structure pendant que d'autres s'agitent. Il a besoin de sécurité matérielle pour s'épanouir, et l'instabilité financière l'angoisse plus que la plupart.",
        "Dans ses loisirs, le Taureau cultive le plaisir tangible : la cuisine, le jardin, la musique, le contact avec la nature, le confort de chez soi. Il n'a pas besoin de courir le monde pour être heureux, un bon repas entre proches lui suffit amplement. Sa relation aux objets et aux lieux est forte : il s'attache, il garde, il transmet.",
      ] },
      { h2: "L'évolution du Taureau : de l'ombre à la lumière", paras: [
        "Un Taureau « jeune » mesure sa valeur à ce qu'il possède. Il s'accroche, accumule, résiste à tout ce qui menace son confort acquis. Son rapport au monde est défensif : protéger le territoire, ne rien lâcher, rester en terrain connu même quand celui-ci ne le nourrit plus.",
        "Le Taureau qui a intégré son ombre opère un retournement décisif : il découvre que la vraie sécurité n'est pas dans ce qu'on possède mais dans la <strong>confiance d'être assez</strong>. Il apprend à lâcher, à laisser circuler, à accueillir le changement comme une saison naturelle plutôt qu'une menace. Sa stabilité cesse d'être une forteresse pour devenir un don : il offre aux autres un ancrage sans les retenir. Pour mesurer à quel point votre Lune et votre <a href=\"/guide/ascendant\">Ascendant</a> nuancent cette stabilité solaire, rien ne vaut la lecture d'un thème complet.",
      ] },
    ],
    faq: [
      { q: 'Quelles sont les dates du signe Taureau&nbsp;?', a: "Le Soleil traverse le Taureau du 20 avril au 20 mai environ, avec une variation d'un jour selon les années. Né près de ces bornes, vous êtes peut-être à la frontière du <a href=\"/signes/belier\">Bélier</a> ou des <a href=\"/signes/gemeaux\">Gémeaux</a> : seul le calcul exact de votre thème lève le doute." },
      { q: 'Pourquoi le Taureau est-il considéré comme têtu&nbsp;?', a: "Le Taureau est un signe de terre fixe : sa fonction est de stabiliser, de faire durer, de tenir le cap. Ce qu'on prend pour de l'entêtement est en réalité une fidélité à ce qui a fait ses preuves. Le Taureau ne change pas d'avis sous la pression, mais il peut évoluer si l'on respecte son rythme." },
      { q: 'Avec quel signe le Taureau est-il le plus compatible&nbsp;?', a: "Le Taureau s'entend naturellement avec les autres signes de terre, la <a href=\"/signes/vierge\">Vierge</a> et le <a href=\"/signes/capricorne\">Capricorne</a>, qui partagent son besoin de concret. Le <a href=\"/signes/scorpion\">Scorpion</a>, son opposé, crée une tension magnétique intense. Mais la compatibilité réelle dépend de la synastrie complète des deux thèmes." },
    ],
    ctaH2: "Votre Taureau n'est qu'un début",
    ctaP: "Le signe solaire pose les fondations ; votre thème natal révèle l'édifice entier. Découvrez votre Lune, votre Ascendant et vos maisons dans Lunestia, et laissez Lyra vous lire au degré près.",
    related: related('scorpion', ['vierge', 'capricorne']),
  },

  {
    slug: 'gemeaux', name: 'Gémeaux', glyph: '♊', element: 'Air', mode: 'Mutable', planet: 'Mercure', dates: '21 mai – 20 juin',
    metaTitle: 'Gémeaux : signe astrologique, traits et compatibilité | Lunestia',
    metaDesc: "Gémeaux en astrologie : l'air mutable régi par Mercure, sa curiosité, sa dualité, son ombre dispersée et son chemin vers une parole reliée au cœur.",
    ogDesc: "L'air mutable de Mercure : curiosité, langage, dualité et le besoin de relier les mondes. Les Gémeaux au-delà des clichés.",
    articleHeadline: 'Gémeaux : signe astrologique, traits et compatibilité',
    h1Html: "Gémeaux, l'<em>esprit</em> qui relie tous les mondes",
    leadHtml: "Une fin de matinée venteuse, des feuilles qui tourbillonnent, mille conversations qui se croisent sur une place de marché. Tout bouge, tout s'appelle, tout se répond. Les Gémeaux vivent dans ce frémissement perpétuel de l'esprit en mouvement.",
    sections: [
      { h2: null, paras: [
        "Avec les <strong>Gémeaux, l'astrologie</strong> ouvre le premier signe d'air, celui où l'expérience brute se transforme en langage, en idées, en liens. Après le désir du Bélier et l'incarnation du Taureau vient le besoin de nommer, de comprendre, de relier. Les Gémeaux sont l'archétype du messager : ils circulent entre les mondes, traduisent, font passer l'information d'un point à un autre. Les comprendre, c'est comprendre comment l'esprit humain découpe le réel en mots et tisse du sens entre les choses.",
      ] },
      { h2: 'Comprendre les Gémeaux : au-delà des clichés', paras: [
        "On taxe facilement les Gémeaux de superficialité ou de double jeu. C'est confondre la mobilité avec le mensonge. Le moteur profond du signe, c'est une <strong>faim insatiable de connexions</strong>, entre les idées, entre les gens, entre les facettes contradictoires d'une même réalité. Les Gémeaux ne supportent pas la fermeture, le définitif, le « c'est comme ça ». Ils veulent toujours voir l'autre versant, la nuance que personne n'a remarquée.",
        "Leur ombre, c'est la dispersion. À force de tout vouloir explorer, ils peuvent ne se poser sur rien, papillonner d'un sujet à l'autre sans jamais descendre en profondeur. La fameuse « dualité » des Gémeaux n'est pas de la duplicité : c'est la difficulté à habiter une seule version d'eux-mêmes, à choisir une voix parmi les nombreuses qui les traversent. Ils peuvent aussi se réfugier dans le mental pour fuir l'émotion, intellectualiser ce qui devrait être ressenti.",
        "Le travail intérieur des Gémeaux consiste à relier la tête au cœur : faire descendre la parole jusqu'à l'expérience vécue, oser la profondeur sans craindre l'ennui, comprendre qu'on ne perd rien à approfondir une seule chose plutôt qu'à effleurer mille.",
      ] },
      { h2: "Air mutable : l'énergie des Gémeaux", paras: [
        "Les Gémeaux conjuguent l'air, élément de la pensée, du langage, de la mise en relation, avec le mode mutable, celui de l'adaptation et du mouvement constant. C'est l'air le plus volatil, le plus rapide, le plus changeant. Là où la <a href=\"/signes/balance\">Balance</a>, air cardinal, met l'esprit au service de l'harmonie et du lien à l'autre, là où le <a href=\"/signes/verseau\">Verseau</a>, air fixe, fige la pensée en convictions et en idéaux, les Gémeaux, eux, restent en circulation pure.",
        "Cette mutabilité explique leur génie de l'adaptation : ils épousent le langage de chaque interlocuteur, changent de registre sans effort, captent l'air du temps. Pour situer cette intelligence aérienne parmi les autres tempéraments, notre <a href=\"/guide/elements\">guide des éléments</a> éclaire ce qui distingue l'air de la terre, du feu et de l'eau.",
      ] },
      { h2: 'Mercure : la planète qui guide les Gémeaux', paras: [
        "Mercure, le messager des dieux, régit les Gémeaux et leur donne leur vivacité légendaire. C'est la planète de la perception, du langage, des échanges courts, de l'apprentissage. Chez les Gémeaux, Mercure est curieux, agile, ludique : il veut tout comprendre, tout commenter, tout connecter. La pensée file plus vite que les mots ne la suivent.",
        "Cette régence fait des Gémeaux d'extraordinaires communicants, drôles, vifs, capables de rendre intéressant n'importe quel sujet. Mercure leur donne aussi une jeunesse d'esprit durable : ils gardent toute leur vie l'émerveillement de l'enfant qui demande « pourquoi ? ». Le revers, c'est une tendance au survol et à l'éparpillement quand Mercure n'est pas ancré par d'autres énergies du thème.",
      ] },
      { h2: "Les Gémeaux en amour : ce qu'ils cherchent vraiment", paras: [
        "En amour, les Gémeaux cherchent d'abord un complice mental. Avant le désir, il y a la conversation : ils tombent amoureux d'un esprit, d'un rire partagé, d'une façon de voir le monde qui les surprend. L'ennui est leur poison ; la curiosité, leur carburant. Un partenaire qui les fait penser, rire et découvrir les retient bien plus sûrement qu'une grande intensité dramatique.",
        "Ce dont ils ont besoin, c'est de liberté et de stimulation, de l'espace pour respirer, des sujets neufs à explorer ensemble. Ce qui les fait fuir, c'est la lourdeur, la jalousie, la routine qui éteint la curiosité. Leur défi : apprendre que la profondeur émotionnelle n'est pas une cage, et que rester quand ça devient intime est aussi une forme d'aventure.",
        "Les meilleures résonances se tissent avec les signes d'air : la <a href=\"/compatibilite/gemeaux-balance\">compatibilité Gémeaux–Balance</a> et la <a href=\"/compatibilite/gemeaux-verseau\">compatibilité Gémeaux–Verseau</a> partagent leur amour des idées et du dialogue. Avec leur opposé, la <a href=\"/compatibilite/gemeaux-sagittaire\">compatibilité Gémeaux–Sagittaire</a> confronte le détail à la vision d'ensemble, dans un face-à-face aussi stimulant qu'instructif.",
      ] },
      { h2: 'Les Gémeaux dans la vie quotidienne', paras: [
        "Au travail, les Gémeaux brillent partout où il faut comprendre vite, expliquer clairement, faire le lien entre des univers différents. L'écriture, la vente, l'enseignement, les médias, tout ce qui touche à la communication leur va comme un gant. La monotonie, en revanche, les éteint : ils ont besoin de variété, de plusieurs projets en parallèle, d'un environnement qui change.",
        "Dans leurs loisirs, ils collectionnent les centres d'intérêt comme d'autres collectionnent les timbres : un mois la photo, le suivant la cuisine thaïe, puis l'histoire romaine. Cette boulimie n'est pas un manque de sérieux mais une manière d'habiter le monde. Les Gémeaux ont besoin de gens autour d'eux, de conversations, de mouvement, l'isolement prolongé les assèche.",
      ] },
      { h2: "L'évolution des Gémeaux : de l'ombre à la lumière", paras: [
        "Un Gémeaux « jeune » papillonne sans se poser : il sait un peu de tout, parle de tout, mais fuit la profondeur dès qu'elle menace de l'engager. Sa parole peut devenir un écran de fumée, un moyen de rester en surface pour ne pas ressentir.",
        "Le Gémeaux qui a intégré son ombre fait de sa diversité une richesse plutôt qu'une fuite. Il apprend à relier ce qu'il sait en une vision cohérente, à mettre sa parole au service de la vérité plutôt que de l'esquive. Sa curiosité devient sagesse quand elle s'enracine dans l'expérience. C'est alors un pont vivant entre les êtres : celui qui traduit, qui réconcilie les points de vue, qui aide chacun à se comprendre. Un thème natal complet, avec sa Lune et son <a href=\"/guide/ascendant\">Ascendant</a>, révèle où cette intelligence trouve son cœur.",
      ] },
    ],
    faq: [
      { q: 'Quelles sont les dates du signe Gémeaux&nbsp;?', a: "Le Soleil traverse les Gémeaux du 21 mai au 20 juin environ. Comme pour tous les signes, les bornes glissent d'un jour selon les années. Né autour du 21 mai ou du 20 juin, seul le calcul de votre thème confirme si vous êtes Gémeaux, <a href=\"/signes/taureau\">Taureau</a> ou <a href=\"/signes/cancer\">Cancer</a>." },
      { q: 'Les Gémeaux sont-ils vraiment à double personnalité&nbsp;?', a: "L'image des « deux visages » des Gémeaux trompe. Il ne s'agit pas de duplicité mais d'une richesse intérieure faite de facettes multiples. Le Gémeaux peut tenir deux idées contraires en même temps et passer d'une humeur à l'autre, parce que son esprit refuse de se réduire à une seule version du réel. Bien intégrée, cette pluralité devient une grande capacité d'empathie et de nuance." },
      { q: 'Avec quel signe les Gémeaux sont-ils les plus compatibles&nbsp;?', a: "Les Gémeaux résonnent naturellement avec les autres signes d'air, la <a href=\"/signes/balance\">Balance</a> et le <a href=\"/signes/verseau\">Verseau</a>, qui parlent leur langue. Le <a href=\"/signes/sagittaire\">Sagittaire</a>, leur opposé, leur apporte la vision d'ensemble qui leur manque parfois. Mais aucune généralité ne remplace l'étude de la synastrie complète." },
    ],
    ctaH2: "Vos Gémeaux ne sont qu'un début",
    ctaP: "Le signe solaire n'est qu'une voix parmi celles de votre ciel. Découvrez votre Lune, votre Ascendant et vos maisons dans Lunestia, et laissez Lyra relier tout cela pour vous.",
    related: related('sagittaire', ['balance', 'verseau']),
  },

  {
    slug: 'cancer', name: 'Cancer', glyph: '♋', element: 'Eau', mode: 'Cardinal', planet: 'Lune', dates: '21 juin – 22 juillet',
    metaTitle: 'Cancer : signe astrologique, traits et compatibilité | Lunestia',
    metaDesc: "Cancer en astrologie : l'eau cardinale régie par la Lune, sa sensibilité, son besoin d'appartenance, son ombre protectrice et son chemin vers la sécurité intérieure.",
    ogDesc: "L'eau cardinale de la Lune : mémoire, tendresse, protection et le besoin d'un foyer. Le Cancer au-delà des clichés.",
    articleHeadline: 'Cancer : signe astrologique, traits et compatibilité',
    h1Html: "Cancer, la <em>marée</em> qui protège ce qui est tendre",
    leadHtml: "Le clair de lune sur l'eau, la maison où l'on rentre après l'orage, l'odeur d'un plat qui rappelle l'enfance. Le Cancer vit dans cette intériorité-là : celle de la mémoire, du lien, de tout ce qui demande à être protégé pour pouvoir grandir.",
    sections: [
      { h2: null, paras: [
        "Avec le <strong>Cancer, l'astrologie</strong> ouvre le premier signe d'eau, celui où l'on quitte le monde des idées pour celui du ressenti et de l'appartenance. Après la circulation aérienne des Gémeaux vient le besoin de se relier par le cœur, de fonder un dedans, d'appartenir à quelque chose de plus grand que soi. Le Cancer est l'archétype de la matrice : il abrite, il nourrit, il garde mémoire. Le comprendre, c'est comprendre comment l'être humain construit un foyer intérieur d'où il peut, enfin, affronter le monde.",
      ] },
      { h2: 'Comprendre le Cancer : au-delà des clichés', paras: [
        "On réduit souvent le Cancer à sa susceptibilité ou à son côté « maman poule ». C'est ignorer la profondeur de son moteur. Le besoin fondamental du Cancer, c'est la <strong>sécurité émotionnelle</strong> : se sentir appartenir, savoir qu'il existe un lieu et des gens où il est chez lui, à l'abri. Toute sa vie affective tourne autour de cette quête d'un nid, qu'il le construise pour lui ou pour ceux qu'il aime.",
        "Son ombre est la carapace. Parce qu'il ressent tout intensément, le Cancer apprend tôt à se protéger : il se referme, il bat en retraite, il se replie dans le passé quand le présent fait mal. Cette protection peut tourner à l'emprise, étouffer au nom de l'amour, retenir au nom de la sécurité, instrumentaliser la culpabilité. Les humeurs du Cancer, comme les marées de la Lune, montent et descendent ; mal comprises, elles déconcertent l'entourage.",
        "Le travail intérieur du Cancer consiste à découvrir que le foyer dont il a besoin est d'abord en lui. Quand il cesse de quémander à l'extérieur la sécurité qu'il peut s'offrir lui-même, sa sensibilité cesse d'être une fragilité pour devenir une immense force d'accueil.",
      ] },
      { h2: "Eau cardinale : l'énergie du Cancer", paras: [
        "Le Cancer conjugue l'eau, élément de l'émotion, de l'empathie, de la mémoire, avec le mode cardinal, celui de l'initiative. C'est une combinaison singulière : une émotion qui agit, une sensibilité qui prend les devants. Contrairement à l'idée d'un Cancer purement passif, ce signe initie sur le plan affectif : il crée le lien, fonde le foyer, prend soin avant qu'on le lui demande.",
        "Là où le <a href=\"/signes/scorpion\">Scorpion</a>, eau fixe, plonge dans l'intensité et la transformation, là où les <a href=\"/signes/poissons\">Poissons</a>, eau mutable, se dissolvent dans le grand tout, le Cancer, lui, contient et protège. Son eau a des rives : elle abrite. Notre <a href=\"/guide/elements\">guide des éléments</a> détaille cette manière dont chaque signe d'eau navigue le monde du ressenti.",
      ] },
      { h2: 'La Lune : la planète qui guide le Cancer', paras: [
        "La Lune, maîtresse du Cancer, gouverne nos besoins les plus archaïques : se sentir nourri, en sécurité, relié. Elle est la part de nous qui réagit avant de penser, qui se souvient de tout, qui cherche le réconfort. Chez le Cancer, la Lune est partout : dans l'intuition fine des états d'âme d'autrui, dans la fidélité aux souvenirs, dans le besoin viscéral d'appartenance.",
        "Cette régence explique les fluctuations émotionnelles du signe, ses marées intérieures qui ne suivent aucune logique apparente. La Lune donne au Cancer une mémoire affective prodigieuse : il n'oublie ni les blessures ni les tendresses. Bien intégrée, elle fait de lui un être d'une rare capacité à prendre soin ; mal vécue, elle l'enferme dans la nostalgie et la dépendance au passé.",
      ] },
      { h2: "Le Cancer en amour : ce qu'il cherche vraiment", paras: [
        "En amour, le Cancer cherche à fonder quelque chose. Il ne s'engage pas à la légère : il sonde, il teste, il avance par cercles concentriques avant d'ouvrir vraiment sa carapace. Mais une fois qu'il aime, il aime totalement, avec une loyauté, une attention et une tendresse qui enveloppent. Ce qu'il offre, c'est un foyer : un endroit où l'autre peut déposer ses armes.",
        "Ce dont il a besoin, c'est de réassurance et de constance. Le Cancer veut sentir qu'il compte, qu'il ne sera pas abandonné, que le lien est solide. Ce qui le blesse, c'est la froideur, l'imprévisibilité, le sentiment d'être de trop. Son défi : ne pas confondre l'amour avec la fusion, ni la protection avec le contrôle.",
        "Les résonances les plus naturelles se tissent avec les autres signes d'eau : la <a href=\"/compatibilite/cancer-scorpion\">compatibilité Cancer–Scorpion</a> et la <a href=\"/compatibilite/cancer-poissons\">compatibilité Cancer–Poissons</a> partagent une même profondeur de ressenti. Avec son opposé, la <a href=\"/compatibilite/cancer-capricorne\">compatibilité Cancer–Capricorne</a> réunit le monde du cœur et celui de la structure, dans une complémentarité aussi exigeante que nourrissante.",
      ] },
      { h2: 'Le Cancer dans la vie quotidienne', paras: [
        "Au travail, le Cancer a besoin de se sentir en sécurité et utile aux autres. Il excelle dans tout ce qui touche au soin, à la transmission, à l'accueil, à la création d'ambiances. Loyal et tenace, c'est aussi un signe cardinal, il peut faire preuve d'une ténacité surprenante quand il défend ce qui lui tient à cœur. Les environnements froids ou agressifs, en revanche, l'épuisent.",
        "Chez lui, le Cancer déploie tout son art : le foyer est son royaume, qu'il habite avec un soin presque sacré. La cuisine, les souvenirs, les objets de famille, les rituels, tout ce qui tisse la mémoire et le sentiment d'appartenance le nourrit. Il a besoin d'un refuge où se ressourcer après s'être exposé au monde.",
      ] },
      { h2: "L'évolution du Cancer : de l'ombre à la lumière", paras: [
        "Un Cancer « jeune » dépend de l'extérieur pour se sentir en sécurité : il a besoin qu'on le rassure, qu'on le retienne, qu'on lui prouve sans cesse qu'il est aimé. Sa sensibilité le rend vulnérable au moindre signe de rejet, et il peut se replier dans la bouderie ou la nostalgie.",
        "Le Cancer qui a intégré son ombre découvre qu'il porte son foyer en lui. Il devient alors capable de donner sans se vider, de protéger sans étouffer, d'aimer sans s'agripper. Sa sensibilité, enfin assumée, se transforme en une intelligence émotionnelle rare : il sent ce que les autres taisent, console sans phrases, crée autour de lui des espaces où l'on se sent en sûreté. La position de votre Lune et de votre <a href=\"/guide/ascendant\">Ascendant</a> dans un thème complet précise où ce besoin de foyer cherche à s'incarner.",
      ] },
    ],
    faq: [
      { q: 'Quelles sont les dates du signe Cancer&nbsp;?', a: "Le Soleil traverse le Cancer du 21 juin au 22 juillet environ, à partir du solstice d'été. Les dates varient d'un jour selon les années. Si vous êtes né à la frontière, autour du 21 juin ou du 22 juillet, seul le calcul de votre thème natal tranche entre Cancer, <a href=\"/signes/gemeaux\">Gémeaux</a> et <a href=\"/signes/lion\">Lion</a>." },
      { q: 'Pourquoi le Cancer est-il si émotif&nbsp;?', a: "Le Cancer est un signe d'eau régi par la Lune, l'astre de nos besoins les plus profonds. Sa sensibilité n'est pas une faiblesse mais une fonction : il perçoit les courants émotionnels que d'autres ne captent pas. Ses humeurs fluctuent comme les marées parce qu'il est intimement accordé au monde du ressenti. Bien vécue, cette sensibilité devient une immense capacité d'empathie." },
      { q: 'Avec quel signe le Cancer est-il le plus compatible&nbsp;?', a: "Le Cancer s'accorde naturellement avec les autres signes d'eau, le <a href=\"/signes/scorpion\">Scorpion</a> et les <a href=\"/signes/poissons\">Poissons</a>, qui comprennent sa profondeur. Le <a href=\"/signes/capricorne\">Capricorne</a>, son opposé, lui offre la structure qui équilibre son émotivité. Mais la vraie compatibilité dépend de l'ensemble des deux thèmes." },
    ],
    ctaH2: "Votre Cancer n'est qu'un début",
    ctaP: "Sous votre Soleil en Cancer se cache tout un paysage intérieur. Découvrez votre Lune, votre Ascendant et vos maisons dans Lunestia, et laissez Lyra vous lire avec délicatesse.",
    related: related('capricorne', ['scorpion', 'poissons']),
  },

  {
    slug: 'lion', name: 'Lion', glyph: '♌', element: 'Feu', mode: 'Fixe', planet: 'Soleil', dates: '23 juillet – 22 août',
    metaTitle: 'Lion : signe astrologique, traits et compatibilité | Lunestia',
    metaDesc: "Lion en astrologie : le feu fixe régi par le Soleil, son besoin de rayonner, sa générosité, son ombre orgueilleuse et son chemin vers une royauté du cœur.",
    ogDesc: "Le feu fixe du Soleil : rayonnement, créativité, générosité et le besoin d'être vu. Le Lion au-delà des clichés.",
    articleHeadline: 'Lion : signe astrologique, traits et compatibilité',
    h1Html: "Lion, le <em>soleil</em> intérieur qui demande à briller",
    leadHtml: "Le plein été, midi, la lumière à son zénith qui ne projette aucune ombre. La chaleur généreuse, la vie à son apogée, l'éclat qui réchauffe tout ce qu'il touche. Le Lion porte en lui cette lumière-là : celle qui veut se donner, créer, rayonner.",
    sections: [
      { h2: null, paras: [
        "Avec le <strong>Lion, l'astrologie</strong> atteint le cœur de l'été et le cœur tout court. Après l'intériorité du Cancer vient le besoin de s'exprimer, de créer, d'affirmer une individualité unique et lumineuse. Le Lion est l'archétype du soleil personnel : ce centre vivant qui, en chacun de nous, veut exister pleinement, être reconnu pour ce qu'il est. Le comprendre, c'est comprendre notre rapport à la créativité, à la fierté, au désir profondément humain de compter aux yeux des autres.",
      ] },
      { h2: 'Comprendre le Lion : au-delà des clichés', paras: [
        "On caricature le Lion en égocentrique avide d'attention. C'est manquer la noblesse de son moteur. Le besoin fondamental du Lion, c'est de <strong>se savoir vivant et singulier</strong>, de sentir que son existence laisse une trace, qu'il a une lumière propre à offrir. Ce n'est pas de la vanité : c'est le besoin sain de tout être de se sentir précieux, porté ici à son expression la plus pure.",
        "Son ombre se loge dans la dépendance au regard. Quand le Lion ne croit pas en sa valeur intérieure, il quémande la reconnaissance extérieure, se met en scène, ne supporte ni la critique ni l'ombre. L'orgueil blessé peut le rendre dramatique, dominateur, incapable d'admettre une faille. Au fond de l'arrogance, il y a souvent un enfant qui doute d'être aimable pour lui-même et non pour ce qu'il accomplit.",
        "Le travail intérieur du Lion consiste à déplacer la source de sa lumière : du dehors vers le dedans. Quand il rayonne parce qu'il est vivant, et non pour être applaudi, sa générosité devient royale au vrai sens du terme, celle d'un cœur qui se donne sans rien attendre.",
      ] },
      { h2: "Feu fixe : l'énergie du Lion", paras: [
        "Le Lion conjugue le feu, enthousiasme, créativité, foi, avec le mode fixe, celui de la durée et de la constance. C'est un feu qui ne s'éteint pas : une flamme stable, chaude, royale. Là où le <a href=\"/signes/belier\">Bélier</a>, feu cardinal, allume et part, là où le <a href=\"/signes/sagittaire\">Sagittaire</a>, feu mutable, court vers l'horizon, le Lion, lui, <em>rayonne et demeure</em>. Il veut créer quelque chose qui dure, régner sur un domaine, être fidèle à ses passions.",
        "Cette fixité explique sa loyauté et sa ténacité, mais aussi son obstination. Le Lion ne lâche pas facilement, ni une idée, ni une fierté, ni une personne aimée. Pour situer ce feu parmi les autres tempéraments, notre <a href=\"/guide/elements\">guide des éléments</a> éclaire les trois visages de l'élément feu.",
      ] },
      { h2: 'Le Soleil : la planète qui guide le Lion', paras: [
        "Le Soleil, maître du Lion, n'est pas une planète comme les autres : c'est le centre, la source de vie, le cœur du thème de chacun. Régir le Soleil donne au Lion un rapport direct à l'identité, à la vitalité, à l'élan créateur. Là où il passe, le Lion veut mettre de la lumière, de la chaleur, du jeu.",
        "Cette régence explique le charisme naturel du signe et son besoin de s'exprimer. Le Soleil pousse le Lion à créer, un enfant, une œuvre, une fête, un projet, et à se reconnaître dans ce qu'il crée. Bien intégré, ce Soleil fait de lui un être généreux et inspirant, capable de réchauffer toute une assemblée ; mal vécu, il le rend avide de centre de la scène.",
      ] },
      { h2: "Le Lion en amour : ce qu'il cherche vraiment", paras: [
        "En amour, le Lion aime grandement, théâtralement, généreusement. Il se donne en spectacle et offre le meilleur : l'attention, les gestes flamboyants, la chaleur d'une présence qui illumine. Ce qu'il cherche, c'est un partenaire qui le voit vraiment, qui admire sans flatter, qui sache à la fois l'honorer et lui tenir tête.",
        "Ce dont il a besoin, c'est de loyauté et de reconnaissance. Le Lion veut être le héros de l'histoire de l'autre, non par tyrannie, mais parce qu'aimer, pour lui, c'est se sentir choisi sans réserve. Ce qui le blesse profondément, c'est l'indifférence, la comparaison, le sentiment d'être pris pour acquis. Son défi : aimer l'autre pour lui-même et non comme un miroir de sa propre grandeur.",
        "Les affinités les plus chaleureuses se tissent avec les signes de feu : la <a href=\"/compatibilite/belier-lion\">compatibilité Bélier–Lion</a> et la <a href=\"/compatibilite/lion-sagittaire\">compatibilité Lion–Sagittaire</a> partagent un même goût de la vie en grand. Avec son opposé, la <a href=\"/compatibilite/lion-verseau\">compatibilité Lion–Verseau</a> confronte le cœur individuel à l'idéal collectif, dans une polarité aussi fascinante que féconde.",
      ] },
      { h2: 'Le Lion dans la vie quotidienne', paras: [
        "Au travail, le Lion a besoin de reconnaissance et d'un terrain où exprimer sa créativité. Il fait un leader naturel, capable de fédérer par son enthousiasme et sa générosité, à condition qu'on respecte son besoin d'être au centre. Les rôles effacés, sans visibilité ni marge créative, l'étouffent. Donnez-lui une scène, il donnera le meilleur.",
        "Dans ses loisirs, le Lion aime ce qui célèbre la vie : les fêtes, les arts, le jeu, tout ce qui permet de créer et de partager de la joie. Il est souvent l'âme des rassemblements, celui qui réchauffe et entraîne. Sa générosité est légendaire : il donne sans compter, parfois plus qu'il ne peut, par pur plaisir de voir l'autre heureux.",
      ] },
      { h2: "L'évolution du Lion : de l'ombre à la lumière", paras: [
        "Un Lion « jeune » a besoin du regard des autres pour exister : il se met en scène, recherche les applaudissements, vit dans la peur sourde de passer inaperçu. Son ego, fragile sous l'éclat, exige sans cesse d'être nourri.",
        "Le Lion qui a intégré son ombre cesse de chercher la lumière à l'extérieur, car il l'a trouvée en lui. Il devient alors ce qu'il était appelé à être : un cœur royal qui rayonne pour le plaisir de donner, qui met les autres en valeur au lieu de leur voler la scène, qui crée par amour de la création. Sa fierté devient dignité, son besoin de briller devient art de réchauffer. La place de votre Soleil dans votre thème, éclairée par votre <a href=\"/guide/ascendant\">Ascendant</a>, indique le domaine où cette lumière demande à s'exprimer." ,
      ] },
    ],
    faq: [
      { q: 'Quelles sont les dates du signe Lion&nbsp;?', a: "Le Soleil traverse le Lion du 23 juillet au 22 août environ, au cœur de l'été. Les dates bougent d'un jour selon les années. Né à la limite, autour du 23 juillet ou du 22 août, vous êtes peut-être <a href=\"/signes/cancer\">Cancer</a> ou <a href=\"/signes/vierge\">Vierge</a> : seul votre thème natal le confirme." },
      { q: "Pourquoi le Lion aime-t-il être au centre de l'attention&nbsp;?", a: "Le Lion est régi par le Soleil, centre du système et symbole de l'identité. Son besoin d'être vu traduit un besoin plus profond : se sentir vivant, singulier, reconnu pour ce qu'il est. Ce n'est pas de la vanité quand le Lion a confiance en sa valeur intérieure, c'est alors une générosité rayonnante qui réchauffe son entourage." },
      { q: 'Avec quel signe le Lion est-il le plus compatible&nbsp;?', a: "Le Lion résonne avec les autres signes de feu, le <a href=\"/signes/belier\">Bélier</a> et le <a href=\"/signes/sagittaire\">Sagittaire</a>, qui partagent sa flamme. Le <a href=\"/signes/verseau\">Verseau</a>, son opposé, l'invite à dépasser l'ego vers le collectif. Mais aucune compatibilité ne se juge sur le seul signe solaire, la synastrie complète est indispensable." },
    ],
    ctaH2: "Votre Lion n'est qu'un début",
    ctaP: "Votre Soleil en Lion brille, mais il n'est pas seul dans votre ciel. Découvrez votre Lune, votre Ascendant et vos maisons dans Lunestia, et laissez Lyra révéler toute votre lumière.",
    related: related('verseau', ['belier', 'sagittaire']),
  },

  {
    slug: 'vierge', name: 'Vierge', glyph: '♍', element: 'Terre', mode: 'Mutable', planet: 'Mercure', dates: '23 août – 22 septembre',
    metaTitle: 'Vierge : signe astrologique, traits et compatibilité | Lunestia',
    metaDesc: "Vierge en astrologie : la terre mutable régie par Mercure, son sens du détail, son désir de servir, son ombre critique et son chemin vers l'acceptation.",
    ogDesc: "La terre mutable de Mercure : analyse, service, perfectionnement et le désir de rendre le monde meilleur. La Vierge au-delà des clichés.",
    articleHeadline: 'Vierge : signe astrologique, traits et compatibilité',
    h1Html: "Vierge, l'<em>art</em> de perfectionner ce qui peut l'être",
    leadHtml: "La fin de l'été, le temps des moissons et du tri. On sépare le grain de l'ivraie, on range, on prépare ce qui servira. La Vierge habite ce moment-là : celui du discernement patient, du soin apporté aux détails, du travail qui rend les choses utiles.",
    sections: [
      { h2: null, paras: [
        "Avec la <strong>Vierge, l'astrologie</strong> referme le cycle de l'été par le signe du discernement et du service. Après le rayonnement du Lion vient le besoin d'affiner, d'améliorer, de se rendre utile. La Vierge est l'archétype de l'artisan consciencieux : celui qui voit ce qui cloche, qui répare, qui perfectionne. Le comprendre, c'est comprendre notre rapport au travail bien fait, à l'humilité, et à ce désir si humain de contribuer concrètement plutôt que de simplement briller.",
      ] },
      { h2: 'Comprendre la Vierge : au-delà des clichés', paras: [
        "On caricature la Vierge en maniaque pointilleuse ou en éternelle inquiète. C'est ignorer la beauté de son moteur. Le besoin fondamental de la Vierge, c'est de <strong>se rendre utile et de bien faire</strong>, de transformer le chaos en ordre, l'imparfait en fonctionnel, le potentiel en réalité soignée. Derrière chaque critique se cache un idéal : la Vierge voit ce que les choses pourraient être, et cet écart la pousse à agir.",
        "Son ombre, c'est précisément cet idéal retourné contre elle-même. La Vierge peut devenir son propre juge le plus impitoyable, ne jamais s'estimer à la hauteur, transformer le perfectionnisme en anxiété chronique. Sa tendance à analyser peut l'éloigner du vécu : à force de disséquer, elle ne savoure plus. Et sa critique, quand elle déborde sur les autres, blesse là où elle voulait aider.",
        "Le travail intérieur de la Vierge consiste à apprendre que la perfection n'est pas le but, que le « assez bien » est souvent parfait, que l'on peut servir sans se sacrifier, s'améliorer sans se mépriser. Quand elle s'accueille avec la même bienveillance qu'elle offre aux autres, sa rigueur devient un don précieux plutôt qu'une prison.",
      ] },
      { h2: "Terre mutable : l'énergie de la Vierge", paras: [
        "La Vierge conjugue la terre, élément du concret et de l'efficacité, avec le mode mutable, celui de l'adaptation et de l'ajustement permanent. C'est une terre en mouvement, qui ne se contente jamais de l'état des choses : elle affine, corrige, optimise. Là où le <a href=\"/signes/taureau\">Taureau</a>, terre fixe, stabilise, là où le <a href=\"/signes/capricorne\">Capricorne</a>, terre cardinale, bâtit vers un sommet, la Vierge, elle, <em>perfectionne le détail</em>.",
        "Cette mutabilité lui donne une souplesse pratique et un sens du service que les autres signes de terre n'ont pas au même degré. Elle s'adapte aux besoins réels, ajuste ses méthodes, reste humble face à ce qui résiste. Notre <a href=\"/guide/elements\">guide des éléments</a> situe cette intelligence concrète parmi les autres tempéraments.",
      ] },
      { h2: 'Mercure : la planète qui guide la Vierge', paras: [
        "Mercure régit la Vierge comme il régit les Gémeaux, mais s'y exprime tout autrement. Chez les <a href=\"/signes/gemeaux\">Gémeaux</a>, Mercure papillonne et connecte ; chez la Vierge, il analyse, trie, organise. C'est un Mercure terrien, méthodique, orienté vers l'utile. La pensée de la Vierge ne se disperse pas : elle décompose un problème en éléments maîtrisables et cherche la solution la plus efficace.",
        "Cette régence explique son sens aigu du détail et sa capacité à repérer l'erreur que tout le monde a manquée. Mercure donne à la Vierge un esprit critique au sens noble, la faculté de discerner, de distinguer le vrai du faux, l'essentiel du superflu. Le revers, c'est une tendance à la rumination mentale et à l'inquiétude quand cet esprit tourne à vide.",
      ] },
      { h2: "La Vierge en amour : ce qu'elle cherche vraiment", paras: [
        "En amour, la Vierge se montre discrète mais profondément dévouée. Elle n'aime pas par grandes déclarations mais par attentions concrètes : elle se souvient, elle anticipe, elle prend soin des détails qui font qu'une vie à deux fonctionne. Aimer, pour elle, c'est servir le bien-être de l'autre, et c'est une forme d'amour qu'on sous-estime souvent.",
        "Ce dont elle a besoin, c'est de se sentir utile et appréciée dans ce qu'elle fait. La Vierge a parfois du mal à recevoir, à se laisser aimer sans contrepartie : elle doute de mériter qu'on prenne soin d'elle. Ce qui la fait fuir, c'est le désordre émotionnel, l'imprévisibilité, le manque de fiabilité. Son défi : laisser tomber le contrôle, accepter l'imperfection de l'autre comme la sienne.",
        "Les affinités les plus solides se tissent avec les signes de terre : la <a href=\"/compatibilite/taureau-vierge\">compatibilité Taureau–Vierge</a> et la <a href=\"/compatibilite/vierge-capricorne\">compatibilité Vierge–Capricorne</a> reposent sur le concret et la fiabilité. Avec son opposé, la <a href=\"/compatibilite/vierge-poissons\">compatibilité Vierge–Poissons</a> réunit l'analyse et le rêve, dans une complémentarité aussi délicate que guérisseuse.",
      ] },
      { h2: 'La Vierge dans la vie quotidienne', paras: [
        "Au travail, la Vierge est l'employée ou la collaboratrice dont on rêve : précise, fiable, attentive à ce que d'autres négligent. Elle excelle dans tout ce qui demande méthode, rigueur et amélioration continue, l'analyse, l'artisanat, la santé, l'édition, tout métier où le détail compte. Le flou et le bâclé la rendent malheureuse ; elle a besoin de sentir que son travail sert à quelque chose.",
        "Dans sa vie quotidienne, la Vierge soigne son corps et son environnement avec une attention particulière : l'hygiène de vie, l'alimentation, l'ordre des choses ne sont pas des manies mais des manières de prendre soin du réel. Ses loisirs ont souvent une dimension utile ou réparatrice, apprendre une compétence, cultiver un savoir-faire, aider concrètement quelqu'un.",
      ] },
      { h2: "L'évolution de la Vierge : de l'ombre à la lumière", paras: [
        "Une Vierge « jeune » se perd dans la critique et le perfectionnisme : rien n'est jamais assez bien, ni le monde, ni les autres, ni surtout elle-même. Elle s'épuise à corriger, s'inquiète sans fin, confond l'amour avec le service rendu jusqu'au sacrifice.",
        "La Vierge qui a intégré son ombre fait la paix avec l'imperfection. Elle comprend que sa rigueur est un cadeau quand elle s'exerce avec douceur, et un poison quand elle se mue en jugement. Elle apprend à servir sans s'effacer, à discerner sans condamner, à savourer le réel au lieu de toujours vouloir le corriger. Sa contribution devient alors une forme rare de générosité : celle, humble et précise, qui répare le monde un détail à la fois. La lecture de votre Lune et de votre <a href=\"/guide/ascendant\">Ascendant</a> révèle où ce désir de servir trouve son équilibre.",
      ] },
    ],
    faq: [
      { q: 'Quelles sont les dates du signe Vierge&nbsp;?', a: "Le Soleil traverse la Vierge du 23 août au 22 septembre environ, à la fin de l'été. Les dates glissent d'un jour selon les années. Né à la limite, autour du 23 août ou du 22 septembre, vous êtes peut-être <a href=\"/signes/lion\">Lion</a> ou <a href=\"/signes/balance\">Balance</a> : seul votre thème natal tranche." },
      { q: 'Pourquoi la Vierge est-elle si perfectionniste&nbsp;?', a: "La Vierge est une terre mutable régie par Mercure : sa fonction est d'affiner, d'améliorer, de discerner ce qui peut être mieux. Son perfectionnisme naît d'un idéal sincère du travail bien fait. Il devient pesant seulement quand il se retourne en anxiété ou en jugement. Apaisé, il se transforme en un sens du soin et de la qualité précieux pour son entourage." },
      { q: 'Avec quel signe la Vierge est-elle la plus compatible&nbsp;?', a: "La Vierge s'entend naturellement avec les autres signes de terre, le <a href=\"/signes/taureau\">Taureau</a> et le <a href=\"/signes/capricorne\">Capricorne</a>, qui partagent son sens du concret. Les <a href=\"/signes/poissons\">Poissons</a>, son opposé, lui apportent la dimension du rêve et du lâcher-prise. Mais seule la synastrie complète révèle la vraie dynamique d'un couple." },
    ],
    ctaH2: "Votre Vierge n'est qu'un début",
    ctaP: "Votre Soleil en Vierge analyse, mais votre ciel entier raconte bien davantage. Découvrez votre Lune, votre Ascendant et vos maisons dans Lunestia, et laissez Lyra vous lire sans jugement.",
    related: related('poissons', ['taureau', 'capricorne']),
  },

  {
    slug: 'balance', name: 'Balance', glyph: '♎', element: 'Air', mode: 'Cardinal', planet: 'Vénus', dates: '23 septembre – 22 octobre',
    metaTitle: 'Balance : signe astrologique, traits et compatibilité | Lunestia',
    metaDesc: "Balance en astrologie : l'air cardinal régi par Vénus, son sens de l'harmonie et de la relation, son ombre indécise et son chemin vers une paix qui ne se renie pas.",
    ogDesc: "L'air cardinal de Vénus : harmonie, relation, justice et l'art du lien. La Balance au-delà des clichés.",
    articleHeadline: 'Balance : signe astrologique, traits et compatibilité',
    h1Html: "Balance, l'<em>art</em> de tenir le monde en équilibre",
    leadHtml: "L'équinoxe d'automne, l'instant où le jour et la nuit se font exactement égaux. Une lumière dorée et apaisée, le besoin de mesure, le désir que les choses s'accordent. La Balance vit dans cette recherche d'équilibre : entre soi et l'autre, entre le désir et la paix.",
    sections: [
      { h2: null, paras: [
        "Avec la <strong>Balance, l'astrologie</strong> ouvre la seconde moitié du zodiaque, celle de la relation et du collectif. Jusqu'ici, les signes construisaient un « moi » ; à partir de la Balance, tout devient question de « nous ». Ce signe est l'archétype de la rencontre : il découvre l'autre comme un miroir, un partenaire, un égal. Le comprendre, c'est comprendre comment nous cherchons l'harmonie, comment nous négocions notre place auprès des autres, et pourquoi le lien peut devenir à la fois notre plus grand accomplissement et notre plus subtil piège.",
      ] },
      { h2: 'Comprendre la Balance : au-delà des clichés', paras: [
        "On réduit volontiers la Balance à son indécision ou à son obsession de l'esthétique. C'est manquer la noblesse de son moteur. Le besoin fondamental de la Balance, c'est l'<strong>harmonie relationnelle</strong>, sentir que les choses sont justes, équilibrées, que chacun a sa place. Elle perçoit les déséquilibres comme une dissonance physique et cherche instinctivement à les résoudre.",
        "Son ombre naît quand cette recherche d'harmonie devient fuite du conflit. La Balance peut s'oublier elle-même à force de vouloir plaire, dire oui pour éviter la tension, se diluer dans les attentes d'autrui jusqu'à ne plus savoir ce qu'elle veut. Son indécision célèbre n'est pas de la faiblesse : c'est la difficulté à trancher quand on voit avec autant d'acuité la valeur de chaque option et qu'on redoute de déplaire. Elle peut aussi projeter sa propre agressivité refoulée, attirant les conflits qu'elle évite tant.",
        "Le travail intérieur de la Balance consiste à découvrir que la vraie paix n'est pas l'absence de conflit mais la justesse, qu'affirmer ce qu'on veut ne brise pas le lien, et qu'on ne peut être un partenaire véritable que si l'on existe d'abord pour soi.",
      ] },
      { h2: "Air cardinal : l'énergie de la Balance", paras: [
        "La Balance conjugue l'air, élément de la pensée et de la relation, avec le mode cardinal, celui de l'initiative. C'est un air qui agit, qui crée du lien, qui prend les devants dans la rencontre. Là où les <a href=\"/signes/gemeaux\">Gémeaux</a>, air mutable, butinent les idées, là où le <a href=\"/signes/verseau\">Verseau</a>, air fixe, défend des convictions, la Balance, elle, <em>met l'esprit au service du lien à l'autre</em>.",
        "Cette combinaison explique son talent diplomatique et son besoin actif de relation : la Balance ne se contente pas d'observer, elle initie le rapprochement, recherche le dialogue, construit des ponts. Notre <a href=\"/guide/elements\">guide des éléments</a> détaille comment l'air façonne ces trois manières si différentes d'habiter la pensée et le lien.",
      ] },
      { h2: 'Vénus : la planète qui guide la Balance', paras: [
        "Vénus régit la Balance comme elle régit le Taureau, mais s'y exprime différemment. Chez le <a href=\"/signes/taureau\">Taureau</a>, Vénus est sensorielle, terrienne ; chez la Balance, elle est aérienne, sociale, esthétique. C'est la Vénus de l'harmonie des formes, de la grâce des rapports humains, du goût raffiné. La Balance cherche la beauté non comme possession mais comme équilibre, proportion, accord.",
        "Cette régence fait d'elle un être profondément relationnel, attentif à l'autre, doué pour créer des atmosphères de douceur et de civilité. Vénus lui donne aussi un sens inné de la justice et de l'équité. Le revers, c'est une dépendance au regard de l'autre et une difficulté à supporter la laideur, la brutalité, la discorde.",
      ] },
      { h2: "La Balance en amour : ce qu'elle cherche vraiment", paras: [
        "En amour, la Balance est dans son élément : la relation est sa raison d'être, le lieu où elle se réalise pleinement. Elle aime aimer, soigne la relation comme une œuvre d'art, cherche le partenaire avec qui former un véritable duo. Ce qu'elle offre, c'est une attention délicate à l'autre, un sens du compromis, une élégance dans la manière de relier deux vies.",
        "Ce dont elle a besoin, c'est de réciprocité et d'harmonie, un partenaire qui la rejoigne dans cet art de la relation. Son danger, c'est de se perdre dans l'autre, de faire passer la paix du couple avant sa propre vérité, de rester par peur de la solitude plutôt que par désir. Son défi : apprendre que le désaccord n'est pas une rupture et que s'affirmer renforce le lien au lieu de le menacer.",
        "Les affinités les plus fluides se tissent avec les signes d'air : la <a href=\"/compatibilite/gemeaux-balance\">compatibilité Gémeaux–Balance</a> et la <a href=\"/compatibilite/balance-verseau\">compatibilité Balance–Verseau</a> partagent son amour du dialogue. Avec son opposé, la <a href=\"/compatibilite/belier-balance\">compatibilité Bélier–Balance</a> confronte le « je » au « nous », dans une polarité aussi magnétique qu'éducative.",
      ] },
      { h2: 'La Balance dans la vie quotidienne', paras: [
        "Au travail, la Balance excelle partout où il faut négocier, harmoniser, créer du lien : la diplomatie, le droit, le conseil, le design, les ressources humaines. Elle a le don de désamorcer les tensions et de réunir des points de vue opposés. Les environnements conflictuels ou inéquitables l'épuisent ; elle a besoin de beauté et de civilité autour d'elle pour fonctionner.",
        "Dans sa vie quotidienne, la Balance soigne son cadre et ses relations avec une attention esthétique constante : l'élégance d'un intérieur, la qualité d'une conversation, le raffinement d'un moment partagé la nourrissent. Elle déteste la solitude prolongée et s'épanouit dans la compagnie, le partage, les plaisirs raffinés vécus à deux ou en groupe.",
      ] },
      { h2: "L'évolution de la Balance : de l'ombre à la lumière", paras: [
        "Une Balance « jeune » se définit par le regard des autres : elle cherche l'approbation, évite le conflit à tout prix, s'adapte tellement qu'elle finit par ne plus savoir qui elle est. Sa quête d'harmonie devient une perte de soi déguisée en générosité.",
        "La Balance qui a intégré son ombre découvre que l'équilibre véritable inclut sa propre voix. Elle apprend à affirmer sans agresser, à dire non sans rompre, à rechercher l'harmonie sans s'y sacrifier. Sa diplomatie cesse d'être une fuite pour devenir un art authentique du lien : elle relie les êtres parce qu'elle est d'abord reliée à elle-même. Elle devient alors une faiseuse de paix au sens fort, celle qui réconcilie sans rien trahir. La lecture de votre Lune et de votre <a href=\"/guide/ascendant\">Ascendant</a> révèle où votre quête d'équilibre s'enracine vraiment.",
      ] },
    ],
    faq: [
      { q: 'Quelles sont les dates du signe Balance&nbsp;?', a: "Le Soleil traverse la Balance du 23 septembre au 22 octobre environ, à partir de l'équinoxe d'automne. Les dates bougent d'un jour selon les années. Né à la limite, autour du 23 septembre ou du 22 octobre, vous êtes peut-être <a href=\"/signes/vierge\">Vierge</a> ou <a href=\"/signes/scorpion\">Scorpion</a> : seul votre thème natal le confirme." },
      { q: 'Pourquoi la Balance est-elle si indécise&nbsp;?', a: "La Balance pèse spontanément le pour et le contre de chaque option, parce qu'elle perçoit la valeur de chaque point de vue et redoute de déplaire ou de commettre une injustice. Son indécision n'est pas de la mollesse mais une grande conscience des nuances. Elle s'apaise dès que la Balance accepte qu'aucun choix n'est parfait et que trancher fait partie de l'équilibre." },
      { q: 'Avec quel signe la Balance est-elle la plus compatible&nbsp;?', a: "La Balance résonne avec les autres signes d'air, les <a href=\"/signes/gemeaux\">Gémeaux</a> et le <a href=\"/signes/verseau\">Verseau</a>, qui partagent son goût du dialogue. Le <a href=\"/signes/belier\">Bélier</a>, son opposé, lui apprend à s'affirmer. Mais la compatibilité réelle se lit dans la synastrie complète des deux thèmes, pas sur le seul signe solaire." },
    ],
    ctaH2: "Votre Balance n'est qu'un début",
    ctaP: "Votre Soleil en Balance cherche l'harmonie, mais votre ciel entier a sa propre musique. Découvrez votre Lune, votre Ascendant et vos maisons dans Lunestia, et laissez Lyra vous lire avec justesse.",
    related: related('belier', ['gemeaux', 'verseau']),
  },

  {
    slug: 'scorpion', name: 'Scorpion', glyph: '♏', element: 'Eau', mode: 'Fixe', planet: 'Pluton (Mars trad.)', dates: '23 octobre – 21 novembre',
    metaTitle: 'Scorpion : signe astrologique, traits et compatibilité | Lunestia',
    metaDesc: "Scorpion en astrologie : l'eau fixe régie par Pluton, son intensité, son rapport à la transformation, son ombre de contrôle et son chemin vers la régénération.",
    ogDesc: "L'eau fixe de Pluton : intensité, vérité, transformation et le pouvoir de renaître. Le Scorpion au-delà des clichés.",
    articleHeadline: 'Scorpion : signe astrologique, traits et compatibilité',
    h1Html: "Scorpion, la <em>profondeur</em> qui ne craint pas le feu",
    leadHtml: "L'automne qui s'enfonce, les feuilles qui pourrissent pour nourrir la terre, la nuit qui gagne. Sous la surface, une intensité souterraine, une vie qui se transforme dans l'obscurité. Le Scorpion habite ces profondeurs-là : celles où l'on meurt et renaît, où rien ne reste superficiel.",
    sections: [
      { h2: null, paras: [
        "Avec le <strong>Scorpion, l'astrologie</strong> plonge dans le signe le plus intense du zodiaque. Après la rencontre harmonieuse de la Balance vient l'épreuve de l'intimité véritable : la fusion, le pouvoir, la confrontation avec ce qui est caché. Le Scorpion est l'archétype de la transformation, celui qui descend dans l'ombre, traverse la crise et en revient changé. Le comprendre, c'est comprendre notre rapport au désir profond, à la mort symbolique, et à cette part de nous que nous préférerions ne pas regarder.",
      ] },
      { h2: 'Comprendre le Scorpion : au-delà des clichés', paras: [
        "On caricature le Scorpion en être vindicatif, jaloux, obsédé par le sexe. C'est confondre l'intensité avec la noirceur. Le moteur profond du Scorpion, c'est le besoin de <strong>vérité totale et de transformation</strong>, refuser le superficiel, aller au fond des choses, ne pas se contenter du masque social. Là où d'autres détournent le regard, le Scorpion fixe ce qui dérange : la mort, le désir, le pouvoir, tout ce qui est tabou.",
        "Son ombre est le contrôle. Parce qu'il ressent une vulnérabilité extrême, le Scorpion apprend à se protéger par la maîtrise : il sonde les autres sans se livrer, garde ses secrets, peut manipuler ou se venger quand il se sent trahi. Sa fameuse jalousie naît de la peur viscérale de perdre ce à quoi il s'est lié corps et âme. Le danger, c'est qu'il transforme cette intensité en obsession, en rancune, en lutte de pouvoir.",
        "Le travail intérieur du Scorpion consiste à faire confiance, à lâcher le contrôle, à transformer sa puissance destructrice en force de régénération. Quand il cesse de se défendre contre la vie, son intensité devient guérison : il accompagne les autres dans leurs crises avec une profondeur que nul autre signe n'égale.",
      ] },
      { h2: "Eau fixe : l'énergie du Scorpion", paras: [
        "Le Scorpion conjugue l'eau, émotion, intuition, profondeur, avec le mode fixe, celui de l'intensité concentrée. C'est l'eau la plus dense, la plus puissante : non pas la rivière qui coule mais l'océan profond, ou le geyser sous pression. Là où le <a href=\"/signes/cancer\">Cancer</a>, eau cardinale, protège et abrite, là où les <a href=\"/signes/poissons\">Poissons</a>, eau mutable, se dissolvent dans le tout, le Scorpion, lui, <em>plonge et concentre</em>.",
        "Cette fixité explique sa ténacité et son incapacité à faire les choses à moitié : le Scorpion s'engage totalement ou pas du tout. Son émotion ne se disperse pas, elle s'intensifie. Notre <a href=\"/guide/elements\">guide des éléments</a> situe cette eau profonde parmi les autres manières d'habiter le monde du ressenti.",
      ] },
      { h2: 'Pluton : la planète qui guide le Scorpion', paras: [
        "Le Scorpion est régi par Pluton, planète de la transformation, de la mort et de la renaissance, l'astrologie traditionnelle lui attribuait Mars, le guerrier, et les deux dimensions cohabitent : la pulsion et la métamorphose. Pluton gouverne tout ce qui est enfoui, tabou, puissant : le désir profond, le pouvoir, les crises qui détruisent pour reconstruire.",
        "Cette régence donne au Scorpion son magnétisme et sa capacité à régénérer ce qu'il touche. Pluton le pousse à descendre dans ses propres abîmes et dans ceux des autres, sans peur. Bien intégrée, cette énergie fait de lui un alchimiste de l'âme, celui qui transforme la douleur en sagesse ; mal vécue, elle l'enferme dans la destruction, la rancune et le besoin de tout maîtriser.",
      ] },
      { h2: "Le Scorpion en amour : ce qu'il cherche vraiment", paras: [
        "En amour, le Scorpion ne connaît pas la demi-mesure. Il cherche la fusion totale, l'intimité absolue, un lien qui engage corps et âme. La superficialité l'ennuie mortellement ; il veut connaître l'autre dans ses profondeurs, et être connu en retour sans masque. Ce qu'il offre, c'est une loyauté féroce et une présence d'une intensité rare.",
        "Ce dont il a besoin, c'est de confiance absolue. Le Scorpion ne se livre qu'à celui qui ne le trahira pas, et la trahison est l'unique chose qu'il ne pardonne pas. Sa difficulté, c'est la jalousie et le besoin de contrôle, qui peuvent étouffer ce qu'il aime le plus. Son défi : apprendre que l'amour vrai exige de lâcher prise, de faire confiance sans tout vérifier.",
        "Les résonances les plus profondes se tissent avec les autres signes d'eau : la <a href=\"/compatibilite/cancer-scorpion\">compatibilité Cancer–Scorpion</a> et la <a href=\"/compatibilite/scorpion-poissons\">compatibilité Scorpion–Poissons</a> partagent son intensité émotionnelle. Avec son opposé, la <a href=\"/compatibilite/taureau-scorpion\">compatibilité Taureau–Scorpion</a> oppose la stabilité à la transformation, dans une attraction d'une puissance magnétique." ,
      ] },
      { h2: 'Le Scorpion dans la vie quotidienne', paras: [
        "Au travail, le Scorpion est un investigateur né : il excelle là où il faut percer les mystères, gérer les crises, transformer les situations, la recherche, la psychologie, la finance, la médecine, l'enquête. Il déteste la surface et le bavardage ; il veut de l'enjeu, de la profondeur, du réel. Sa capacité de concentration et sa résistance sous pression sont exceptionnelles.",
        "Dans sa vie quotidienne, le Scorpion garde une part de mystère : il ne dévoile pas tout, observe avant de se livrer, protège son intimité. Ses passions sont intenses et exclusives. Il a besoin de moments de solitude pour se régénérer et n'accorde sa confiance qu'à un cercle restreint d'êtres triés sur le volet, à qui il restera fidèle pour la vie.",
      ] },
      { h2: "L'évolution du Scorpion : de l'ombre à la lumière", paras: [
        "Un Scorpion « jeune » utilise son intensité pour se protéger et dominer : il contrôle, soupçonne, garde rancune, transforme sa peur de la trahison en lutte de pouvoir permanente. Sa puissance se retourne en autodestruction ou en emprise sur les autres.",
        "Le Scorpion qui a intégré son ombre opère la transformation à laquelle son signe l'appelle : il fait de sa puissance une force de régénération. Il apprend à faire confiance, à lâcher le contrôle, à mourir à ses vieilles peaux sans s'accrocher. Son intensité devient alors un don de guérison, il accompagne les crises, révèle les vérités cachées, aide les autres à renaître. C'est l'aigle qui s'élève là où le scorpion mordait. La place de votre Lune et de votre <a href=\"/guide/ascendant\">Ascendant</a> précise où cette puissance cherche à se transformer.",
      ] },
    ],
    faq: [
      { q: 'Quelles sont les dates du signe Scorpion&nbsp;?', a: "Le Soleil traverse le Scorpion du 23 octobre au 21 novembre environ. Les dates varient d'un jour selon les années. Né à la frontière, autour du 23 octobre ou du 21 novembre, vous êtes peut-être <a href=\"/signes/balance\">Balance</a> ou <a href=\"/signes/sagittaire\">Sagittaire</a> : seul le calcul de votre thème tranche." },
      { q: 'Pourquoi le Scorpion est-il considéré comme intense&nbsp;?', a: "Le Scorpion est une eau fixe régie par Pluton : il ne fait rien à moitié et refuse la superficialité. Là où d'autres restent en surface, il plonge, dans les émotions, les relations, les vérités cachées. Cette intensité, mal comprise, paraît inquiétante ; bien vécue, elle se révèle être une profondeur et une loyauté hors du commun." },
      { q: 'Avec quel signe le Scorpion est-il le plus compatible&nbsp;?', a: "Le Scorpion s'accorde avec les autres signes d'eau, le <a href=\"/signes/cancer\">Cancer</a> et les <a href=\"/signes/poissons\">Poissons</a>, qui comprennent sa profondeur. Le <a href=\"/signes/taureau\">Taureau</a>, son opposé, crée une tension magnétique entre stabilité et transformation. Mais seule la synastrie complète révèle la vraie dynamique." },
    ],
    ctaH2: "Votre Scorpion n'est qu'un début",
    ctaP: "Votre Soleil en Scorpion plonge au fond des choses ; votre thème natal en révèle toutes les strates. Découvrez votre Lune, votre Ascendant et vos maisons dans Lunestia, et laissez Lyra vous lire en profondeur.",
    related: related('taureau', ['cancer', 'poissons']),
  },

  {
    slug: 'sagittaire', name: 'Sagittaire', glyph: '♐', element: 'Feu', mode: 'Mutable', planet: 'Jupiter', dates: '22 novembre – 21 décembre',
    metaTitle: 'Sagittaire : signe astrologique, traits et compatibilité | Lunestia',
    metaDesc: "Sagittaire en astrologie : le feu mutable régi par Jupiter, sa quête de sens et de liberté, son ombre fuyante et son chemin vers une sagesse incarnée.",
    ogDesc: "Le feu mutable de Jupiter : quête de sens, liberté, foi et horizon. Le Sagittaire au-delà des clichés.",
    articleHeadline: 'Sagittaire : signe astrologique, traits et compatibilité',
    h1Html: "Sagittaire, la <em>flèche</em> tendue vers l'horizon",
    leadHtml: "Un grand ciel d'hiver clair, l'envie de partir, la route qui appelle au-delà de la colline. Le besoin de comprendre le sens de tout cela, de croire en quelque chose de plus vaste. Le Sagittaire porte cette flamme-là : celle qui cherche, qui voyage, qui veut donner un sens à l'existence.",
    sections: [
      { h2: null, paras: [
        "Avec le <strong>Sagittaire, l'astrologie</strong> élargit l'horizon. Après la plongée intense du Scorpion vient le besoin de prendre de la hauteur, de chercher du sens, d'embrasser le monde dans sa totalité. Le Sagittaire est l'archétype de l'explorateur et du philosophe : celui qui voyage, au sens propre comme spirituel, pour comprendre ce que tout cela veut dire. Le comprendre, c'est comprendre notre soif de sens, notre besoin de liberté et notre rapport à la foi, la conviction qu'il existe quelque chose de plus grand vers quoi tendre.",
      ] },
      { h2: 'Comprendre le Sagittaire : au-delà des clichés', paras: [
        "On caricature le Sagittaire en éternel adolescent fuyant l'engagement, ou en donneur de leçons. C'est manquer la grandeur de son moteur. Le besoin fondamental du Sagittaire, c'est le <strong>sens et la liberté</strong>, comprendre le pourquoi des choses, élargir ses horizons, ne jamais se sentir enfermé dans une vision étroite. Son optimisme n'est pas de la naïveté : c'est une foi active dans les possibles.",
        "Son ombre, c'est la fuite et l'excès. À force de chercher l'ailleurs, le Sagittaire peut fuir le présent, esquiver l'intimité qui engage, courir vers le prochain horizon dès que le quotidien devient contraignant. Sa générosité de vues peut se muer en dogmatisme : convaincu de détenir la vérité, il prêche au lieu d'écouter. Jupiter le pousse aussi à la démesure, promettre trop, embrasser trop large, manquer de mesure.",
        "Le travail intérieur du Sagittaire consiste à ancrer sa quête dans le concret, à comprendre que la liberté vraie n'est pas l'absence de liens mais le choix de ceux qui nous grandissent, et que la sagesse se vit autant qu'elle se proclame.",
      ] },
      { h2: "Feu mutable : l'énergie du Sagittaire", paras: [
        "Le Sagittaire conjugue le feu, enthousiasme, foi, élan, avec le mode mutable, celui du mouvement et de l'adaptation. C'est un feu nomade, qui court vers l'horizon, qui se nourrit de découvertes. Là où le <a href=\"/signes/belier\">Bélier</a>, feu cardinal, allume l'action, là où le <a href=\"/signes/lion\">Lion</a>, feu fixe, rayonne et demeure, le Sagittaire, lui, <em>cherche le sens au-delà</em>.",
        "Cette mutabilité explique son besoin viscéral de mouvement et de variété : voyager, apprendre, rencontrer, explorer. Le Sagittaire ne supporte pas l'enfermement, qu'il soit physique, intellectuel ou relationnel. Notre <a href=\"/guide/elements\">guide des éléments</a> éclaire ces trois manières si différentes d'incarner le feu.",
      ] },
      { h2: 'Jupiter : la planète qui guide le Sagittaire', paras: [
        "Jupiter, maître du Sagittaire, est la planète de l'expansion, de la chance, du sens et de la foi. Elle agrandit tout ce qu'elle touche : les horizons, les espoirs, les convictions. Chez le Sagittaire, Jupiter donne cet optimisme contagieux, cette générosité, cette capacité à voir grand et à entraîner les autres dans son enthousiasme.",
        "Cette régence explique sa soif d'apprendre et de transmettre, son goût des voyages et des cultures, sa quête philosophique ou spirituelle. Jupiter lui offre aussi une chance insolente, le Sagittaire rebondit, retombe sur ses pieds, garde la foi. Le revers, c'est la démesure : Jupiter peut le pousser à l'excès, à l'exagération, à promettre plus qu'il ne tient.",
      ] },
      { h2: "Le Sagittaire en amour : ce qu'il cherche vraiment", paras: [
        "En amour, le Sagittaire cherche un compagnon d'aventure plus qu'un point d'ancrage. Il a besoin de partager une quête, des découvertes, une vision de la vie, l'amour, pour lui, doit agrandir l'existence, pas la rétrécir. Ce qu'il offre, c'est l'enthousiasme, l'honnêteté, une joie de vivre communicative et une liberté généreusement accordée à l'autre.",
        "Ce dont il a besoin, c'est d'espace et de stimulation intellectuelle. Rien ne le fait fuir plus vite que le sentiment d'être enfermé, possédé, réduit à un quotidien sans horizon. Son défi : comprendre que l'intimité profonde n'est pas une cage, et que rester quand l'aventure devient celle d'une vie partagée demande un autre courage que celui de partir.",
        "Les affinités les plus chaleureuses se tissent avec les signes de feu : la <a href=\"/compatibilite/belier-sagittaire\">compatibilité Bélier–Sagittaire</a> et la <a href=\"/compatibilite/lion-sagittaire\">compatibilité Lion–Sagittaire</a> partagent son goût de la vie en grand. Avec son opposé, la <a href=\"/compatibilite/gemeaux-sagittaire\">compatibilité Gémeaux–Sagittaire</a> confronte le détail à la vision d'ensemble, dans un échange aussi stimulant qu'enrichissant." ,
      ] },
      { h2: 'Le Sagittaire dans la vie quotidienne', paras: [
        "Au travail, le Sagittaire a besoin de sens et de liberté. Il s'épanouit dans tout ce qui ouvre des horizons : l'enseignement, le voyage, l'édition, le droit, la spiritualité, l'entrepreneuriat visionnaire. Les cadres rigides et les tâches répétitives l'étouffent ; il lui faut de l'autonomie, du mouvement, un but plus grand que lui-même. Sa vision d'ensemble en fait un excellent stratège, moins un gestionnaire du détail.",
        "Dans ses loisirs, le Sagittaire cultive l'aventure et l'apprentissage : voyages lointains, sports de plein air, lectures, débats d'idées, rencontres avec d'autres cultures. Il a besoin de découvrir, de s'étonner, d'élargir sa carte du monde. Sa bonne humeur et sa générosité en font un compagnon recherché, capable de transformer une simple sortie en épopée.",
      ] },
      { h2: "L'évolution du Sagittaire : de l'ombre à la lumière", paras: [
        "Un Sagittaire « jeune » fuit en avant : il collectionne les expériences sans les digérer, prêche des vérités qu'il n'a pas vécues, esquive l'engagement par peur de l'enfermement. Sa quête de liberté n'est qu'une autre forme d'évitement.",
        "Le Sagittaire qui a intégré son ombre transforme sa quête en sagesse incarnée. Il comprend que le sens ne se trouve pas seulement au bout du voyage mais dans la profondeur d'un engagement, que la liberté véritable inclut la fidélité choisie. Sa foi cesse d'être un dogme pour devenir une lumière qu'il partage avec humilité. Il devient alors un guide authentique, celui qui a vraiment cheminé et qui éclaire la route des autres. La position de votre Lune et de votre <a href=\"/guide/ascendant\">Ascendant</a> indique où votre quête de sens cherche à s'ancrer.",
      ] },
    ],
    faq: [
      { q: 'Quelles sont les dates du signe Sagittaire&nbsp;?', a: "Le Soleil traverse le Sagittaire du 22 novembre au 21 décembre environ, jusqu'au solstice d'hiver. Les dates glissent d'un jour selon les années. Né à la limite, autour du 22 novembre ou du 21 décembre, vous êtes peut-être <a href=\"/signes/scorpion\">Scorpion</a> ou <a href=\"/signes/capricorne\">Capricorne</a> : seul votre thème natal le confirme." },
      { q: 'Pourquoi le Sagittaire aime-t-il autant la liberté&nbsp;?', a: "Le Sagittaire est un feu mutable régi par Jupiter, la planète de l'expansion. Son besoin de liberté traduit une quête plus profonde : trouver du sens, élargir ses horizons, ne jamais se laisser enfermer dans une vision étroite. Cette soif d'espace devient sagesse quand le Sagittaire comprend que la liberté véritable se choisit autant qu'elle se conquiert." },
      { q: 'Avec quel signe le Sagittaire est-il le plus compatible&nbsp;?', a: "Le Sagittaire résonne avec les autres signes de feu, le <a href=\"/signes/belier\">Bélier</a> et le <a href=\"/signes/lion\">Lion</a>, qui partagent son élan. Les <a href=\"/signes/gemeaux\">Gémeaux</a>, son opposé, lui apportent le goût du détail et de la curiosité. Mais aucune généralité ne remplace l'étude des deux thèmes complets." },
    ],
    ctaH2: "Votre Sagittaire n'est qu'un début",
    ctaP: "Votre Soleil en Sagittaire vise l'horizon, mais votre ciel entier dessine la carte. Découvrez votre Lune, votre Ascendant et vos maisons dans Lunestia, et laissez Lyra donner du sens à l'ensemble.",
    related: related('gemeaux', ['belier', 'lion']),
  },

  {
    slug: 'capricorne', name: 'Capricorne', glyph: '♑', element: 'Terre', mode: 'Cardinal', planet: 'Saturne', dates: '22 décembre – 19 janvier',
    metaTitle: 'Capricorne : signe astrologique, traits et compatibilité | Lunestia',
    metaDesc: "Capricorne en astrologie : la terre cardinale régie par Saturne, son ambition, son sens des responsabilités, son ombre austère et son chemin vers une autorité juste.",
    ogDesc: "La terre cardinale de Saturne : ambition, structure, maturité et l'art de bâtir dans la durée. Le Capricorne au-delà des clichés.",
    articleHeadline: 'Capricorne : signe astrologique, traits et compatibilité',
    h1Html: "Capricorne, la <em>montagne</em> qui se gravit pas à pas",
    leadHtml: "Le cœur de l'hiver, le sommet enneigé qui se découpe sur le ciel froid. Le silence, la patience, l'effort qui finit par payer. Le Capricorne habite cette altitude-là : celle de la maturité, de la responsabilité, de ce qui se construit lentement pour durer toute une vie.",
    sections: [
      { h2: null, paras: [
        "Avec le <strong>Capricorne, l'astrologie</strong> atteint le signe de la maîtrise et de l'accomplissement. Après l'élan visionnaire du Sagittaire vient le besoin de bâtir du concret, d'assumer ses responsabilités, de laisser une trace durable. Le Capricorne est l'archétype du bâtisseur et du sage : celui qui sait que rien de grand ne se fait sans patience ni discipline. Le comprendre, c'est comprendre notre rapport à l'ambition, au temps, à l'autorité, et cette part de nous qui veut accomplir quelque chose qui lui survive.",
      ] },
      { h2: 'Comprendre le Capricorne : au-delà des clichés', paras: [
        "On caricature le Capricorne en carriériste froid ou en rabat-joie austère. C'est ignorer la profondeur de son moteur. Le besoin fondamental du Capricorne, c'est de <strong>se rendre maître de sa vie et d'accomplir quelque chose de réel</strong>, bâtir, structurer, atteindre un sommet par ses propres moyens. Derrière son sérieux se cache souvent une grande exigence envers lui-même et un sens aigu du devoir.",
        "Son ombre, c'est la dureté et le contrôle. Parce qu'il a souvent dû mûrir trop tôt, le Capricorne peut se couper de ses émotions, confondre sa valeur avec sa réussite, sacrifier le présent à un futur jamais assez sûr. Il peut devenir pessimiste, rigide, incapable de se reposer ou de demander de l'aide. Saturne, son maître, lui fait porter un poids invisible : la peur de ne jamais être à la hauteur.",
        "Le travail intérieur du Capricorne consiste à découvrir qu'il a le droit de se reposer, d'échouer, de recevoir, que sa valeur ne dépend pas de ses accomplissements. Quand il intègre cela, son autorité cesse d'être une armure pour devenir une sagesse bienveillante : il devient le pilier sur qui tout le monde peut compter.",
      ] },
      { h2: "Terre cardinale : l'énergie du Capricorne", paras: [
        "Le Capricorne conjugue la terre, le concret, l'efficacité, la patience, avec le mode cardinal, celui de l'initiative. C'est la terre qui entreprend, qui se fixe un sommet et grimpe. Là où le <a href=\"/signes/taureau\">Taureau</a>, terre fixe, stabilise et savoure, là où la <a href=\"/signes/vierge\">Vierge</a>, terre mutable, perfectionne le détail, le Capricorne, lui, <em>bâtit vers un objectif</em>.",
        "Cette combinaison explique son ambition structurante : le Capricorne ne rêve pas dans le vide, il planifie, persévère, construit pierre après pierre. Son rapport au temps est unique, il pense en décennies, accepte les sacrifices présents pour des fruits lointains. Notre <a href=\"/guide/elements\">guide des éléments</a> situe cette terre ambitieuse parmi les autres tempéraments.",
      ] },
      { h2: 'Saturne : la planète qui guide le Capricorne', paras: [
        "Saturne, maître du Capricorne, est la planète du temps, de la structure, des limites et de la maturité. On la dit sévère, mais elle est surtout exigeante et juste : Saturne enseigne par l'effort, récompense la persévérance, construit ce qui dure. Chez le Capricorne, Saturne donne ce sens des responsabilités, cette discipline, cette capacité à différer la gratification.",
        "Cette régence explique le sérieux précoce du signe et son rapport difficile à la légèreté. Saturne fait du Capricorne un être profondément fiable, capable de porter des charges que d'autres fuiraient. Bien intégrée, cette planète offre une autorité naturelle et une sagesse qui s'approfondit avec l'âge, le Capricorne rajeunit en vieillissant. Mal vécue, elle l'enferme dans la peur, la rigidité et le sentiment de ne jamais en faire assez.",
      ] },
      { h2: "Le Capricorne en amour : ce qu'il cherche vraiment", paras: [
        "En amour, le Capricorne avance avec prudence et sérieux. Il ne s'engage pas à la légère : il observe, évalue, se protège, car aimer signifie pour lui s'investir durablement. Sous sa réserve se cache une grande profondeur de sentiment et une loyauté indéfectible. Ce qu'il offre, c'est la fiabilité, la constance, la sécurité d'un partenaire qui tient ses engagements quoi qu'il arrive.",
        "Ce dont il a besoin, c'est de confiance et de patience, qu'on respecte sa pudeur émotionnelle et qu'on ne le bouscule pas. Sa difficulté, c'est d'exprimer ses émotions et de lâcher le contrôle ; il peut sembler distant alors qu'il aime intensément. Son défi : apprendre que la vulnérabilité n'est pas une faiblesse et que se reposer dans l'autre ne menace pas son autonomie.",
        "Les affinités les plus solides se tissent avec les signes de terre : la <a href=\"/compatibilite/taureau-capricorne\">compatibilité Taureau–Capricorne</a> et la <a href=\"/compatibilite/vierge-capricorne\">compatibilité Vierge–Capricorne</a> reposent sur des valeurs communes de fiabilité. Avec son opposé, la <a href=\"/compatibilite/cancer-capricorne\">compatibilité Cancer–Capricorne</a> réunit la structure et le cœur, dans une complémentarité aussi exigeante que profondément équilibrante." ,
      ] },
      { h2: 'Le Capricorne dans la vie quotidienne', paras: [
        "Au travail, le Capricorne est dans son élément : ambitieux, organisé, infatigable, il gravit les échelons par la compétence et la persévérance plus que par l'esbroufe. Il fait un leader respecté, capable de porter une vision sur le long terme et de tenir le cap dans l'adversité. On lui confie les responsabilités lourdes parce qu'il ne flanche pas. Son risque : le surmenage, l'identification totale à la réussite professionnelle.",
        "Dans sa vie quotidienne, le Capricorne valorise l'effort, la qualité, les choses qui durent. Il n'aime pas le gaspillage ni la frivolité, mais développe souvent, avec l'âge, un humour pince-sans-rire savoureux et un goût pour les plaisirs simples mérités. Il a besoin de structure et d'objectifs, même dans ses loisirs, et trouve un grand réconfort dans le sentiment du devoir accompli.",
      ] },
      { h2: "L'évolution du Capricorne : de l'ombre à la lumière", paras: [
        "Un Capricorne « jeune » se confond avec sa réussite : il s'épuise à prouver sa valeur, refoule ses émotions, prend tout sur ses épaules sans jamais s'autoriser le repos ni l'aide. Son ambition, coupée du cœur, peut tourner à l'aridité et au pessimisme.",
        "Le Capricorne qui a intégré son ombre découvre que la vraie réussite inclut la joie, le lien, le droit à l'imperfection. Il met alors sa solidité au service des autres sans s'oublier, devient un mentor, un pilier, une autorité bienveillante qui élève au lieu d'écraser. Sa discipline cesse d'être une punition pour devenir le socle d'une vie pleinement maîtrisée et, enfin, savourée. La position de votre Lune et de votre <a href=\"/guide/ascendant\">Ascendant</a> révèle où votre ambition cherche à se réconcilier avec votre sensibilité.",
      ] },
    ],
    faq: [
      { q: 'Quelles sont les dates du signe Capricorne&nbsp;?', a: "Le Soleil traverse le Capricorne du 22 décembre au 19 janvier environ, à partir du solstice d'hiver. Les dates varient d'un jour selon les années. Né à la limite, autour du 22 décembre ou du 19 janvier, vous êtes peut-être <a href=\"/signes/sagittaire\">Sagittaire</a> ou <a href=\"/signes/verseau\">Verseau</a> : seul votre thème natal tranche." },
      { q: 'Pourquoi le Capricorne est-il si sérieux&nbsp;?', a: "Le Capricorne est régi par Saturne, la planète du temps, des responsabilités et de la maturité. Son sérieux traduit un sens aigu du devoir et une volonté d'accomplir des choses durables. Ce n'est pas de la froideur : sous la réserve se cachent une grande profondeur de sentiment et, souvent, un humour subtil qui se révèle avec le temps." },
      { q: 'Avec quel signe le Capricorne est-il le plus compatible&nbsp;?', a: "Le Capricorne s'entend avec les autres signes de terre, le <a href=\"/signes/taureau\">Taureau</a> et la <a href=\"/signes/vierge\">Vierge</a>, qui partagent son réalisme. Le <a href=\"/signes/cancer\">Cancer</a>, son opposé, lui apporte la chaleur émotionnelle qui équilibre sa rigueur. Mais la compatibilité réelle dépend de l'ensemble des deux thèmes." },
    ],
    ctaH2: "Votre Capricorne n'est qu'un début",
    ctaP: "Votre Soleil en Capricorne bâtit, mais votre ciel entier raconte aussi vos profondeurs cachées. Découvrez votre Lune, votre Ascendant et vos maisons dans Lunestia, et laissez Lyra vous lire au-delà de l'armure.",
    related: related('cancer', ['taureau', 'vierge']),
  },

  {
    slug: 'verseau', name: 'Verseau', glyph: '♒', element: 'Air', mode: 'Fixe', planet: 'Uranus (Saturne trad.)', dates: '20 janvier – 18 février',
    metaTitle: 'Verseau : signe astrologique, traits et compatibilité | Lunestia',
    metaDesc: "Verseau en astrologie : l'air fixe régi par Uranus, son originalité, son idéal collectif, son ombre détachée et son chemin vers une humanité incarnée.",
    ogDesc: "L'air fixe d'Uranus : liberté, originalité, idéal et le sens du collectif. Le Verseau au-delà des clichés.",
    articleHeadline: 'Verseau : signe astrologique, traits et compatibilité',
    h1Html: "Verseau, l'<em>éclair</em> qui invente demain",
    leadHtml: "Une nuit d'hiver étoilée, le regard tourné vers l'avenir, l'idée soudaine qui change tout. Le sentiment d'appartenir à une humanité plus vaste, le refus des chemins tout tracés. Le Verseau porte cette lumière-là : celle de l'esprit libre qui imagine le monde autrement.",
    sections: [
      { h2: null, paras: [
        "Avec le <strong>Verseau, l'astrologie</strong> ouvre la conscience au collectif et à l'avenir. Après la maîtrise individuelle du Capricorne vient le besoin de dépasser l'ego pour servir un idéal plus grand : l'amitié, le groupe, l'humanité, le progrès. Le Verseau est l'archétype du visionnaire et du rebelle : celui qui voit plus loin, qui refuse les conventions, qui invente. Le comprendre, c'est comprendre notre rapport à la liberté, à l'originalité et à ce besoin d'appartenir à quelque chose qui nous dépasse sans nous diluer.",
      ] },
      { h2: 'Comprendre le Verseau : au-delà des clichés', paras: [
        "On caricature le Verseau en original froid et imprévisible, ou en utopiste déconnecté. C'est manquer la cohérence de son moteur. Le besoin fondamental du Verseau, c'est la <strong>liberté d'être soi et de penser autrement</strong>, au service d'un idéal collectif. Il refuse de se conformer non par caprice mais par fidélité à sa vision : il sent que les choses pourraient être plus justes, plus libres, plus intelligentes.",
        "Son ombre, c'est le détachement. À force de vivre dans les idées et l'avenir, le Verseau peut se couper de ses émotions et de l'intimité présente, préférer l'humanité en général à la personne en particulier. Sa quête de liberté peut devenir une peur de l'attachement déguisée en idéal. Il peut aussi se figer dans ses convictions, l'air fixe rend les idées aussi tenaces que des dogmes, et confondre rébellion et provocation gratuite.",
        "Le travail intérieur du Verseau consiste à relier sa tête à son cœur, à descendre de l'idéal abstrait vers le lien concret, à comprendre qu'on peut être profondément singulier tout en s'attachant vraiment. Sa liberté devient alors féconde plutôt que défensive.",
      ] },
      { h2: "Air fixe : l'énergie du Verseau", paras: [
        "Le Verseau conjugue l'air, pensée, idées, relation, avec le mode fixe, celui de la constance et de la conviction. C'est l'air le plus stable, celui qui cristallise la pensée en idéaux et en principes. Là où les <a href=\"/signes/gemeaux\">Gémeaux</a>, air mutable, explorent toutes les idées sans s'attacher, là où la <a href=\"/signes/balance\">Balance</a>, air cardinal, met l'esprit au service du lien, le Verseau, lui, <em>défend une vision</em>.",
        "Cette fixité explique sa loyauté à ses convictions et son indépendance d'esprit inébranlable. Le Verseau ne change pas d'avis sous la pression sociale, au contraire, l'opposition le renforce. Notre <a href=\"/guide/elements\">guide des éléments</a> éclaire ces trois visages si distincts de l'élément air.",
      ] },
      { h2: 'Uranus : la planète qui guide le Verseau', paras: [
        "Le Verseau est régi par Uranus, planète de la rupture, de l'innovation et de la liberté, l'astrologie traditionnelle lui attribuait Saturne, et les deux dimensions coexistent : la structure et la révolution. Uranus gouverne l'éclair de génie, le saut hors des sentiers battus, le progrès qui bouscule l'ordre établi.",
        "Cette régence donne au Verseau son originalité, sa pensée en avance, son don pour voir ce que les autres ne voient pas encore. Uranus le rend imprévisible, indépendant, allergique à toute forme d'autorité illégitime. Bien intégrée, cette énergie fait de lui un réformateur, un inventeur, un éveilleur de consciences ; mal vécue, elle le rend instable, provocateur ou déconnecté du réel et des autres.",
      ] },
      { h2: "Le Verseau en amour : ce qu'il cherche vraiment", paras: [
        "En amour, le Verseau cherche d'abord un ami, un complice, un égal. La relation idéale, pour lui, est une amitié amoureuse fondée sur la liberté mutuelle, le respect de l'indépendance de chacun et le partage d'une vision du monde. Ce qu'il offre, c'est une loyauté singulière, une absence de jalousie possessive et une acceptation profonde de l'autre tel qu'il est.",
        "Ce dont il a besoin, c'est d'espace et de stimulation intellectuelle, qu'on ne cherche pas à le posséder ni à l'enfermer dans les conventions. Sa difficulté, c'est l'intimité émotionnelle : le Verseau peut fuir dans les idées dès que les sentiments deviennent trop intenses. Son défi : apprendre que l'attachement profond n'est pas une perte de liberté mais une autre manière de la vivre.",
        "Les affinités les plus naturelles se tissent avec les signes d'air : la <a href=\"/compatibilite/gemeaux-verseau\">compatibilité Gémeaux–Verseau</a> et la <a href=\"/compatibilite/balance-verseau\">compatibilité Balance–Verseau</a> partagent son amour des idées. Avec son opposé, la <a href=\"/compatibilite/lion-verseau\">compatibilité Lion–Verseau</a> réunit le cœur individuel et l'idéal collectif, dans une polarité aussi fascinante que féconde." ,
      ] },
      { h2: 'Le Verseau dans la vie quotidienne', paras: [
        "Au travail, le Verseau s'épanouit dans l'innovation, la technologie, les causes humanitaires, tout ce qui sert le progrès et le collectif. Il a besoin d'autonomie et d'un environnement qui valorise l'originalité ; les hiérarchies rigides et le conformisme l'étouffent. Sa pensée en avance et sa capacité à anticiper les tendances en font un précieux visionnaire, moins un exécutant du quotidien.",
        "Dans sa vie quotidienne, le Verseau cultive l'amitié comme une valeur cardinale : il a souvent un large réseau, des liens fondés sur les idées et les projets partagés plus que sur la proximité émotionnelle. Ses centres d'intérêt sont souvent atypiques, tournés vers le futur, la science, l'art d'avant-garde ou l'engagement. Il aime surprendre et revendique son droit à la différence.",
      ] },
      { h2: "L'évolution du Verseau : de l'ombre à la lumière", paras: [
        "Un Verseau « jeune » se rebelle pour se rebeller : il provoque, se distingue à tout prix, fuit l'intimité dans l'abstraction et confond la froideur avec l'indépendance. Son idéal humaniste reste théorique, déconnecté des êtres réels qui l'entourent.",
        "Le Verseau qui a intégré son ombre relie enfin sa vision à son cœur. Il comprend qu'on change le monde une relation à la fois, que la vraie liberté inclut l'engagement, que l'amour de l'humanité commence par l'amour des personnes concrètes. Son originalité devient alors un don au service du collectif, et son indépendance, la base d'une présence généreuse et fiable. Il incarne le futur au lieu d'en rêver. La position de votre Lune et de votre <a href=\"/guide/ascendant\">Ascendant</a> révèle où votre singularité cherche à s'incarner." ,
      ] },
    ],
    faq: [
      { q: 'Quelles sont les dates du signe Verseau&nbsp;?', a: "Le Soleil traverse le Verseau du 20 janvier au 18 février environ. Les dates glissent d'un jour selon les années. Né à la frontière, autour du 20 janvier ou du 18 février, vous êtes peut-être <a href=\"/signes/capricorne\">Capricorne</a> ou <a href=\"/signes/poissons\">Poissons</a> : seul le calcul de votre thème le confirme." },
      { q: 'Pourquoi le Verseau est-il considéré comme original&nbsp;?', a: "Le Verseau est régi par Uranus, planète de l'innovation et de la rupture. Son originalité naît d'un refus sincère du conformisme et d'une capacité à penser plus loin que les conventions. Ce n'est pas de l'excentricité gratuite : c'est la fidélité à une vision personnelle du monde, souvent en avance sur son temps." },
      { q: 'Avec quel signe le Verseau est-il le plus compatible&nbsp;?', a: "Le Verseau résonne avec les autres signes d'air, les <a href=\"/signes/gemeaux\">Gémeaux</a> et la <a href=\"/signes/balance\">Balance</a>, qui partagent son amour des idées et de la liberté. Le <a href=\"/signes/lion\">Lion</a>, son opposé, l'invite à habiter son cœur autant que ses idéaux. Mais seule la synastrie complète révèle la vraie dynamique d'un couple." },
    ],
    ctaH2: "Votre Verseau n'est qu'un début",
    ctaP: "Votre Soleil en Verseau imagine l'avenir, mais votre ciel entier a sa propre logique. Découvrez votre Lune, votre Ascendant et vos maisons dans Lunestia, et laissez Lyra relier votre vision à votre cœur.",
    related: related('lion', ['gemeaux', 'balance']),
  },

  {
    slug: 'poissons', name: 'Poissons', glyph: '♓', element: 'Eau', mode: 'Mutable', planet: 'Neptune (Jupiter trad.)', dates: '19 février – 20 mars',
    metaTitle: 'Poissons : signe astrologique, traits et compatibilité | Lunestia',
    metaDesc: "Poissons en astrologie : l'eau mutable régie par Neptune, sa sensibilité océanique, sa compassion, son ombre fuyante et son chemin vers une spiritualité incarnée.",
    ogDesc: "L'eau mutable de Neptune : compassion, imagination, spiritualité et dissolution des frontières. Les Poissons au-delà des clichés.",
    articleHeadline: 'Poissons : signe astrologique, traits et compatibilité',
    h1Html: "Poissons, l'<em>océan</em> où tout se rejoint",
    leadHtml: "La fin de l'hiver, la brume qui efface les contours, l'eau qui retourne à la mer. Les frontières se dissolvent, le rêve et le réel se mêlent, une compassion infinie affleure. Les Poissons habitent cet entre-deux-là : celui où l'âme individuelle se souvient qu'elle fait partie de tout.",
    sections: [
      { h2: null, paras: [
        "Avec les <strong>Poissons, l'astrologie</strong> referme la roue du zodiaque. Douzième et dernier signe, il contient la mémoire de tous les autres et les dissout dans une compassion universelle. Après la vision collective du Verseau vient l'expérience de l'unité : la frontière entre soi et le monde devient poreuse. Les Poissons sont l'archétype du mystique et de l'artiste : celui qui ressent l'invisible, qui rêve, qui se sacrifie, qui devine ce qui relie tous les êtres. Les comprendre, c'est comprendre notre besoin de transcendance et notre rapport au mystère.",
      ] },
      { h2: 'Comprendre les Poissons : au-delà des clichés', paras: [
        "On caricature les Poissons en êtres faibles, rêveurs, victimes nées. C'est ignorer la grandeur de leur moteur. Le besoin fondamental des Poissons, c'est la <strong>fusion avec quelque chose de plus grand</strong>, l'amour inconditionnel, l'art, le divin, l'unité. Ils ressentent les frontières comme illusoires et perçoivent les courants émotionnels invisibles avec une acuité que nul autre signe ne possède.",
        "Leur ombre, c'est l'évitement et la dissolution. Parce qu'ils ressentent tout, sans filtre, les Poissons peuvent fuir un réel trop dur, dans le rêve, l'illusion, les addictions, le sacrifice excessif ou le rôle de victime. Leur porosité les expose à se perdre dans les autres, à ne plus distinguer leurs émotions de celles d'autrui, à dire oui jusqu'à se vider. Leur empathie sans limites peut devenir une absence de soi.",
        "Le travail intérieur des Poissons consiste à se donner des contours sans renier leur sensibilité, apprendre à dire non, à s'ancrer, à canaliser leur immense réceptivité dans une création, un soin, une spiritualité incarnée plutôt que dans la fuite. Leur compassion devient alors une force de guérison plutôt qu'un effacement.",
      ] },
      { h2: "Eau mutable : l'énergie des Poissons", paras: [
        "Les Poissons conjuguent l'eau, émotion, intuition, empathie, avec le mode mutable, celui de l'adaptation et de la dissolution. C'est l'eau la plus fluide, sans forme propre, qui épouse tout ce qu'elle rencontre : l'océan où tout se mêle. Là où le <a href=\"/signes/cancer\">Cancer</a>, eau cardinale, protège dans un foyer, là où le <a href=\"/signes/scorpion\">Scorpion</a>, eau fixe, plonge et transforme, les Poissons, eux, <em>se fondent dans le tout</em>.",
        "Cette mutabilité explique leur extraordinaire adaptabilité émotionnelle et leur difficulté à maintenir des limites. Ils absorbent les ambiances, devinent les non-dits, ressentent ce que les autres taisent. Notre <a href=\"/guide/elements\">guide des éléments</a> situe cette eau océanique parmi les autres manières d'habiter le ressenti.",
      ] },
      { h2: 'Neptune : la planète qui guide les Poissons', paras: [
        "Les Poissons sont régis par Neptune, planète du rêve, de l'imaginaire, du spirituel et de la dissolution des frontières, l'astrologie traditionnelle leur attribuait Jupiter, et les deux dimensions coexistent : l'expansion et la transcendance. Neptune gouverne tout ce qui dépasse le rationnel : l'inspiration artistique, la compassion, la mystique, mais aussi l'illusion et la confusion.",
        "Cette régence donne aux Poissons leur imagination débordante, leur sensibilité artistique et leur capacité à percevoir l'invisible. Neptune les relie à une source d'inspiration et de compassion quasi illimitée. Bien intégrée, cette énergie fait d'eux des artistes, des guérisseurs, des âmes profondément aimantes ; mal vécue, elle les égare dans l'illusion, l'évitement et la perte de soi.",
      ] },
      { h2: "Les Poissons en amour : ce qu'ils cherchent vraiment", paras: [
        "En amour, les Poissons cherchent la fusion des âmes, un lien qui transcende le quotidien. Ils aiment de manière inconditionnelle, presque dévouée, prêts à tout donner pour celui qu'ils chérissent. Ce qu'ils offrent, c'est une tendresse infinie, une compréhension intuitive des besoins de l'autre, une capacité rare à aimer les êtres dans leurs failles mêmes.",
        "Ce dont ils ont besoin, c'est de douceur, de poésie et de profondeur, un partenaire qui honore leur sensibilité sans en abuser. Leur danger, c'est l'idéalisation et le sacrifice : ils peuvent aimer une image plutôt qu'une personne réelle, ou se perdre entièrement dans l'autre. Leur défi : aimer sans se dissoudre, garder un soi à offrir plutôt que de disparaître dans la relation.",
        "Les résonances les plus tendres se tissent avec les autres signes d'eau : la <a href=\"/compatibilite/cancer-poissons\">compatibilité Cancer–Poissons</a> et la <a href=\"/compatibilite/scorpion-poissons\">compatibilité Scorpion–Poissons</a> partagent leur profondeur de ressenti. Avec leur opposé, la <a href=\"/compatibilite/vierge-poissons\">compatibilité Vierge–Poissons</a> réunit le rêve et le concret, dans une complémentarité aussi délicate que guérisseuse." ,
      ] },
      { h2: 'Les Poissons dans la vie quotidienne', paras: [
        "Au travail, les Poissons s'épanouissent dans tout ce qui touche à la création, au soin, à la spiritualité, à l'aide aux autres, l'art, la musique, la santé, l'accompagnement, le travail social. Ils ont besoin de sens et de douceur ; les environnements compétitifs, bruyants ou cyniques les épuisent. Leur intuition et leur empathie sont des atouts précieux, à condition qu'ils apprennent à se protéger de l'absorption émotionnelle.",
        "Dans leur vie quotidienne, les Poissons ont besoin de moments de retrait, de rêverie, de connexion à plus grand qu'eux : la nature, l'art, la méditation, l'eau. Sans ces respirations, ils se sentent submergés par le monde. Leur générosité est immense, parfois jusqu'à l'oubli d'eux-mêmes ; ils gagnent à s'entourer de personnes qui les aident à garder les pieds sur terre.",
      ] },
      { h2: "L'évolution des Poissons : de l'ombre à la lumière", paras: [
        "Un Poissons « jeune » se laisse submerger : il fuit le réel dans le rêve ou les paradis artificiels, se pose en victime, se sacrifie sans limites, se perd dans les émotions des autres faute de contours. Sa sensibilité, non canalisée, devient une vulnérabilité chronique.",
        "Le Poissons qui a intégré son ombre transforme sa porosité en don. Il apprend à s'ancrer sans s'endurcir, à donner sans se vider, à mettre son immense réceptivité au service de l'art, du soin ou de la spiritualité. Sa compassion devient alors une force de guérison : il console, inspire, relie les êtres à ce qui les dépasse. Il incarne enfin sur terre la lumière qu'il percevait dans le rêve. La position de votre Lune et de votre <a href=\"/guide/ascendant\">Ascendant</a> révèle où cette sensibilité océanique cherche à prendre forme." ,
      ] },
    ],
    faq: [
      { q: 'Quelles sont les dates du signe Poissons&nbsp;?', a: "Le Soleil traverse les Poissons du 19 février au 20 mars environ, jusqu'à l'équinoxe de printemps. Les dates bougent d'un jour selon les années. Né à la frontière, autour du 19 février ou du 20 mars, vous êtes peut-être <a href=\"/signes/verseau\">Verseau</a> ou <a href=\"/signes/belier\">Bélier</a> : seul votre thème natal tranche." },
      { q: 'Pourquoi les Poissons sont-ils si sensibles&nbsp;?', a: "Les Poissons sont une eau mutable régie par Neptune : ils ressentent les frontières comme poreuses et absorbent les émotions de leur entourage avec une acuité unique. Cette hypersensibilité n'est pas une faiblesse mais un don de perception. Elle devient une force quand les Poissons apprennent à se donner des limites et à canaliser leur réceptivité dans la création ou le soin." },
      { q: 'Avec quel signe les Poissons sont-ils les plus compatibles&nbsp;?', a: "Les Poissons s'accordent avec les autres signes d'eau, le <a href=\"/signes/cancer\">Cancer</a> et le <a href=\"/signes/scorpion\">Scorpion</a>, qui partagent leur profondeur. La <a href=\"/signes/vierge\">Vierge</a>, leur opposé, leur apporte l'ancrage concret qui leur manque. Mais aucune généralité ne remplace l'étude de la synastrie complète." },
    ],
    ctaH2: "Vos Poissons ne sont qu'un début",
    ctaP: "Votre Soleil en Poissons rêve l'infini ; votre thème natal lui donne une forme. Découvrez votre Lune, votre Ascendant et vos maisons dans Lunestia, et laissez Lyra vous lire avec toute la délicatesse que vous méritez.",
    related: related('vierge', ['cancer', 'scorpion']),
  },
];
