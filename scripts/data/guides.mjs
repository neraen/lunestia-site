// Content data for the astrology guide pages.

const signCard = (slug, glyph, label, name) => ({ href: `/signes/${slug}`, glyph, label, name });

export const guides = [
  {
    slug: 'theme-natal', name: 'Le thème natal', glyph: '✦', hubMeta: 'Le concept fondateur',
    faqHeadingName: 'le thème natal',
    metaTitle: 'Thème natal : qu\'est-ce que c\'est et comment le lire | Lunestia',
    metaDesc: "Le thème natal est la photographie du ciel à votre naissance. Découvrez ce qu'il révèle, Soleil, Lune, Ascendant, planètes, maisons, et comment l'interpréter.",
    ogDesc: "La carte du ciel de votre naissance : ce qu'elle contient et comment la lire, bien au-delà du signe solaire.",
    articleHeadline: 'Thème natal : qu\'est-ce que c\'est et comment le lire',
    h1Html: "Le <em>thème natal</em>, votre carte du ciel personnelle",
    leadHtml: "Imaginez une photographie du ciel prise à l'instant exact de votre premier souffle, depuis le lieu précis de votre naissance. Cette image figée, la position de chaque astre à ce moment unique, c'est votre thème natal. La carte la plus personnelle qui soit.",
    sections: [
      { h2: null, paras: [
        "Le <strong>thème natal</strong> est le fondement de toute l'astrologie individuelle. Là où l'horoscope de magazine vous réduit à l'un des douze signes solaires, votre thème natal vous restitue dans toute votre complexité : non pas une case parmi douze, mais une combinaison unique de dizaines de facteurs qui ne se reproduira jamais à l'identique. Comprendre ce qu'est un thème, c'est cesser de croire que l'astrologie se résume à « être Bélier » ou « être Cancer ».",
      ] },
      { h2: 'Qu\'est-ce qu\'un thème natal, exactement ?', paras: [
        "Un thème natal est une représentation circulaire du ciel vu depuis votre lieu de naissance, à la date et à l'heure exactes où vous êtes venu au monde. On y trouve trois grandes familles d'informations qui se combinent : les <strong>planètes</strong> (Soleil, Lune, Mercure, Vénus, Mars, Jupiter, Saturne, et les lentes Uranus, Neptune, Pluton), les <strong>signes</strong> qu'elles occupent, et les <strong>maisons</strong>, ces douze secteurs qui découpent les domaines de votre vie.",
        "Chaque planète représente une fonction psychologique : le Soleil, votre identité profonde ; la Lune, vos besoins émotionnels ; Mercure, votre manière de penser et de communiquer ; Vénus, votre façon d'aimer ; Mars, votre énergie et votre désir. Le signe où se trouve chaque planète colore la manière dont cette fonction s'exprime. La maison indique le domaine de vie où elle se déploie. Enfin, les <strong>aspects</strong>, les angles que les planètes forment entre elles, décrivent les tensions et les harmonies internes de votre personnalité.",
        "C'est cette superposition qui rend chaque thème irremplaçable. Deux personnes nées le même jour mais à des heures ou des lieux différents auront le même Soleil, mais des Ascendants et des maisons distincts, donc des vies intérieures très différentes.",
      ] },
      { h2: 'Pourquoi votre signe solaire ne suffit pas', paras: [
        "Le Soleil reste central : il indique votre élan vital, ce vers quoi vous tendez pour devenir pleinement vous-même. Mais il n'agit jamais seul. Quelqu'un avec un <a href=\"/signes/belier\">Soleil en Bélier</a> et une Lune en Poissons vivra son énergie martienne tout autrement qu'un Bélier à la Lune en Capricorne : le premier sera un feu traversé de sensibilité et de doute, le second un feu maîtrisé, presque froid sous la flamme.",
        "C'est pourquoi tant de gens « ne se reconnaissent pas » dans leur signe : ils lisent leur Soleil sans connaître leur Lune, leur <a href=\"/guide/ascendant\">Ascendant</a> et le reste de leur ciel. Le thème natal répare cette injustice. Il ne vous enferme pas, il vous déplie.",
      ] },
      { h2: 'Comment se lit un thème natal dans la vie réelle', paras: [
        "Lire un thème, ce n'est pas additionner des fiches signe par signe. C'est faire dialoguer les éléments entre eux pour saisir une cohérence vivante. On commence souvent par le trio fondamental, Soleil, Lune, Ascendant, le squelette de la personnalité : qui vous êtes, ce dont vous avez besoin, comment vous vous présentez au monde.",
        "On observe ensuite la répartition par <a href=\"/guide/elements\">éléments</a> (feu, terre, air, eau) et par modes (cardinal, fixe, mutable) : un thème dominé par l'eau ne fonctionne pas comme un thème dominé par l'air. On regarde où se concentrent les planètes, la maison la plus peuplée révèle souvent un grand thème de vie. On lit enfin les aspects majeurs, qui racontent les nœuds et les talents : un carré entre Mars et Saturne parlera d'une énergie freinée qui apprend la patience ; un trigone entre Vénus et Jupiter, d'une grâce naturelle dans les relations.",
        "Cette lecture demande du métier, mais elle transforme une vague idée de soi en un portrait nuancé, où même les contradictions trouvent leur logique.",
      ] },
      { h2: 'L\'heure de naissance : pourquoi elle change tout', paras: [
        "Le Soleil, la Lune et la plupart des planètes peuvent se calculer sans heure précise. Mais l'<a href=\"/guide/ascendant\">Ascendant</a> et les maisons, eux, dépendent de l'heure exacte : la Terre tourne sur elle-même en vingt-quatre heures, faisant défiler un nouveau signe à l'horizon toutes les deux heures environ. Sans heure, ces deux dimensions majeures manquent à l'appel.",
        "Si vous ne connaissez pas votre heure de naissance, tout n'est pas perdu : votre acte de naissance la mentionne souvent, et il existe des techniques de rectification qui l'estiment à partir d'événements de vie. Mais pour une lecture complète, cette donnée vaut de l'or.",
      ] },
    ],
    faq: [
      { q: 'Faut-il connaître son heure de naissance pour un thème natal&nbsp;?', a: "Pour le Soleil, la Lune et les planètes, non : on peut les calculer avec la seule date. En revanche, l'Ascendant et les douze maisons dépendent de l'heure exacte, car l'horizon change de signe environ toutes les deux heures. Sans heure, vous obtenez déjà beaucoup, mais une partie essentielle du thème reste indéterminée. L'heure figure souvent sur l'acte de naissance intégral." },
      { q: 'Le thème natal change-t-il au cours de la vie&nbsp;?', a: "Non, le thème natal est figé à l'instant de votre naissance, c'est une photographie. Ce qui évolue, ce sont les transits : les positions actuelles des planètes qui viennent activer votre thème de naissance au fil du temps. Le thème natal est la partition ; les transits sont la musique qui se joue dessus à chaque période de votre vie." },
      { q: 'Quelle est la différence entre signe solaire et thème natal&nbsp;?', a: "Le signe solaire n'est qu'un élément du thème, la position du Soleil. Le thème natal, lui, intègre la Lune, l'Ascendant, toutes les planètes, les douze maisons et les aspects entre elles. C'est la différence entre connaître une seule note et lire toute la partition d'une personnalité." },
    ],
    ctaH2: "Découvrez votre thème natal complet",
    ctaP: "Lunestia calcule votre carte du ciel au degré près et vous l'explique dans un langage clair. Soleil, Lune, Ascendant, maisons, aspects, et Lyra pour répondre à toutes vos questions.",
    related: [
      { href: '/guide/ascendant', glyph: '✦', label: 'Guide', name: "L'ascendant" },
      { href: '/guide/elements', glyph: '✦', label: 'Guide', name: 'Les éléments' },
      signCard('belier', '♈', 'Signe', 'Bélier'),
      { href: '/signes', glyph: '✦', label: 'Explorer', name: 'Les 12 signes' },
    ],
  },

  {
    slug: 'ascendant', name: 'L\'ascendant', glyph: '✦', hubMeta: 'Le masque et la porte',
    faqHeadingName: "l'ascendant",
    metaTitle: 'Ascendant astrologique : ce qu\'il révèle et comment le calculer | Lunestia',
    metaDesc: "L'ascendant est le signe qui se levait à l'horizon à votre naissance. Découvrez ce qu'il dit de vous, votre style, votre masque, votre porte d'entrée dans la vie.",
    ogDesc: "Le signe qui se levait à l'est à votre naissance : votre style, votre première impression, votre porte d'entrée dans le monde.",
    articleHeadline: 'Ascendant astrologique : ce qu\'il révèle et comment le calculer',
    h1Html: "L'<em>ascendant</em>, le masque et la porte d'entrée",
    leadHtml: "Si votre Soleil est qui vous êtes au fond, votre ascendant est la manière dont vous franchissez le seuil du monde. C'est le signe qui se levait à l'est, à l'horizon, au moment précis de votre naissance, la première couleur que les autres perçoivent de vous.",
    sections: [
      { h2: null, paras: [
        "L'<strong>ascendant</strong> est sans doute l'élément le plus mal compris et le plus précieux du thème natal. Beaucoup le réduisent à une « apparence » ou un « masque social », comme s'il était superficiel. En réalité, l'ascendant est bien plus : c'est la porte par laquelle votre énergie entre dans la vie, le filtre à travers lequel vous abordez chaque nouvelle situation, le style spontané de votre rencontre avec le monde.",
      ] },
      { h2: 'Qu\'est-ce que l\'ascendant en astrologie ?', paras: [
        "L'ascendant, ou signe ascendant, est le signe du zodiaque qui se levait à l'horizon est à l'instant et au lieu de votre naissance. Comme la Terre tourne sur elle-même en vingt-quatre heures, ce point change de signe environ toutes les deux heures. C'est ce qui rend l'heure de naissance indispensable à son calcul, et ce qui explique que deux personnes nées le même jour puissent avoir des ascendants, donc des allures, totalement différents.",
        "L'ascendant marque le début de la première maison du thème, celle du « je » incarné : votre corps, votre tempérament immédiat, votre manière d'entrer en scène. Si le Soleil est le cœur de l'identité et la Lune son monde intérieur, l'ascendant en est la peau, l'interface entre le dedans et le dehors.",
      ] },
      { h2: 'Le masque qui devient peu à peu votre visage', paras: [
        "On dit souvent que l'ascendant est un « masque ». L'image est juste, à condition de comprendre qu'il ne s'agit pas d'un déguisement. C'est le rôle que nous prenons instinctivement pour affronter l'existence, surtout dans la première partie de la vie. Quelqu'un d'ascendant <a href=\"/signes/capricorne\">Capricorne</a> abordera le monde avec sérieux et réserve ; un ascendant <a href=\"/signes/lion\">Lion</a> entrera dans une pièce avec chaleur et présence ; un ascendant <a href=\"/signes/poissons\">Poissons</a> dégagera une douceur rêveuse et insaisissable.",
        "Avec le temps, ce masque tend à se fondre dans le visage : ce que nous jouions d'abord par défense devient une part authentique de nous. L'ascendant indique ainsi une direction de croissance, les qualités du signe ascendant sont celles que la vie nous invite à développer pour devenir pleinement nous-mêmes.",
      ] },
      { h2: 'Comment l\'ascendant se manifeste dans votre vie', paras: [
        "L'ascendant colore d'abord la première impression : votre allure, votre démarche, le style de votre présence. C'est souvent lui que les gens décrivent quand ils parlent de vous avant de vous connaître. Il influence aussi votre manière d'aborder la nouveauté, un défi, une rencontre, un lieu inconnu, et le genre d'expériences que vous attirez.",
        "Surtout, l'ascendant nuance profondément la lecture du signe solaire. Un <a href=\"/signes/cancer\">Soleil Cancer</a> ascendant Bélier ne ressemble guère à un Cancer ascendant Vierge : le premier cache sa sensibilité derrière une vivacité combative, le second derrière une réserve méthodique. C'est pourquoi tant de gens se reconnaissent davantage dans leur ascendant que dans leur Soleil. Pour saisir comment ces couches se combinent, le <a href=\"/guide/theme-natal\">guide du thème natal</a> montre la mécanique d'ensemble.",
      ] },
      { h2: 'Le maître d\'ascendant : un fil à suivre', paras: [
        "Chaque signe ascendant a une planète maîtresse, dite « maître d'ascendant », dont la position dans le thème prend une importance particulière. Si vous êtes ascendant <a href=\"/signes/balance\">Balance</a>, par exemple, Vénus devient un fil conducteur de votre thème ; ascendant <a href=\"/signes/scorpion\">Scorpion</a>, ce sera Pluton (et Mars). Suivre ce maître d'ascendant, le signe et la maison qu'il occupe, affine considérablement la compréhension de votre chemin de vie.",
      ] },
    ],
    faq: [
      { q: 'Comment calculer son ascendant&nbsp;?', a: "L'ascendant se calcule à partir de trois données : votre date, votre heure et votre lieu de naissance. L'heure est cruciale, car l'ascendant change de signe environ toutes les deux heures. Un calculateur de thème natal comme Lunestia détermine votre ascendant instantanément à partir de ces informations, impossible à estimer de tête, car il dépend de la rotation de la Terre et des coordonnées géographiques." },
      { q: 'Quelle différence entre le signe solaire et l\'ascendant&nbsp;?', a: "Le signe solaire (votre « signe ») décrit votre identité profonde, votre élan vital. L'ascendant décrit votre manière d'aborder le monde, votre style, la première impression que vous donnez. On peut être Taureau de Soleil et paraître très différent selon que l'on est ascendant Gémeaux, Scorpion ou Capricorne. Les deux se complètent : l'un est le fond, l'autre la forme." },
      { q: 'L\'ascendant est-il plus important que le signe solaire&nbsp;?', a: "Ni plus ni moins, ils décrivent des choses différentes. Le Soleil reste le centre de l'identité, mais l'ascendant est si visible dans le comportement quotidien que beaucoup s'y reconnaissent davantage. Dans une lecture sérieuse, on ne les oppose pas : on les fait dialoguer, avec la Lune, pour dessiner le portrait complet." },
    ],
    ctaH2: "Quel est votre ascendant ?",
    ctaP: "Entrez votre date, heure et lieu de naissance dans Lunestia et découvrez votre ascendant en quelques secondes, avec son interprétation détaillée et sa place dans votre thème complet.",
    related: [
      { href: '/guide/theme-natal', glyph: '✦', label: 'Guide', name: 'Le thème natal' },
      { href: '/guide/elements', glyph: '✦', label: 'Guide', name: 'Les éléments' },
      { href: '/signes', glyph: '✦', label: 'Explorer', name: 'Les 12 signes' },
      { href: '/compatibilite', glyph: '♥', label: 'Explorer', name: 'Compatibilités' },
    ],
  },

  {
    slug: 'elements', name: 'Les éléments', glyph: '✦', hubMeta: 'Feu, terre, air, eau',
    faqHeadingName: 'les éléments',
    metaTitle: 'Les 4 éléments en astrologie : feu, terre, air, eau | Lunestia',
    metaDesc: "Feu, terre, air, eau : les quatre éléments sont la grammaire énergétique du zodiaque. Découvrez ce que chacun révèle et comment ils colorent les douze signes.",
    ogDesc: "Feu, terre, air, eau : la grammaire énergétique du zodiaque et ce que chaque élément révèle de votre tempérament.",
    articleHeadline: 'Les 4 éléments en astrologie : feu, terre, air, eau',
    h1Html: "Les quatre <em>éléments</em>, la grammaire du zodiaque",
    leadHtml: "Avant les douze signes, il y a quatre couleurs fondamentales : le feu, la terre, l'air et l'eau. Ces éléments sont la grammaire première de l'astrologie, quatre manières d'être au monde, quatre façons dont l'énergie vitale circule en nous.",
    sections: [
      { h2: null, paras: [
        "Comprendre les <strong>quatre éléments</strong>, c'est posséder la clé qui rend tout le reste lisible. Chaque signe du zodiaque appartient à l'un d'eux, et cet élément détermine sa qualité énergétique fondamentale, bien plus que les clichés qu'on lui colle. Connaître l'élément dominant d'un thème en dit souvent plus long sur une personne que son seul signe solaire.",
      ] },
      { h2: 'Le feu : l\'élan, l\'intuition, la foi', paras: [
        "Les signes de feu, <a href=\"/signes/belier\">Bélier</a>, <a href=\"/signes/lion\">Lion</a>, <a href=\"/signes/sagittaire\">Sagittaire</a>, vivent dans l'enthousiasme et l'élan. Le feu, c'est l'énergie qui s'élève, l'intuition immédiate, la foi dans l'avenir, le besoin de s'exprimer et d'agir. Les tempéraments de feu sont spontanés, chaleureux, tournés vers l'action et le sens.",
        "Mais le feu varie selon le mode : le Bélier (cardinal) allume et initie, le Lion (fixe) rayonne et persévère, le Sagittaire (mutable) cherche l'horizon et le sens. Trois flammes, trois fonctions. Le risque commun du feu, c'est l'excès, l'impatience, l'oubli du corps et des autres.",
      ] },
      { h2: 'La terre : le concret, la patience, la matière', paras: [
        "Les signes de terre, <a href=\"/signes/taureau\">Taureau</a>, <a href=\"/signes/vierge\">Vierge</a>, <a href=\"/signes/capricorne\">Capricorne</a>, vivent dans le réel et le tangible. La terre, c'est la patience, le sens pratique, le rapport au corps, à la matière, au temps long. Les tempéraments de terre sont fiables, ancrés, attentifs aux résultats concrets plutôt qu'aux promesses.",
        "Là encore, le mode nuance : le Taureau (fixe) stabilise et savoure, la Vierge (mutable) affine et perfectionne, le Capricorne (cardinal) bâtit et structure. Le risque de la terre, c'est la rigidité, le matérialisme, la difficulté à lâcher prise et à rêver.",
      ] },
      { h2: 'L\'air : la pensée, le lien, les idées', paras: [
        "Les signes d'air, <a href=\"/signes/gemeaux\">Gémeaux</a>, <a href=\"/signes/balance\">Balance</a>, <a href=\"/signes/verseau\">Verseau</a>, vivent dans le monde mental et relationnel. L'air, c'est la pensée, le langage, le besoin de comprendre et de relier, la distance qui permet l'objectivité. Les tempéraments d'air sont communicants, sociables, curieux, attachés à la liberté et aux idées.",
        "Le mode distingue : les Gémeaux (mutable) explorent et connectent, la Balance (cardinal) relie et harmonise, le Verseau (fixe) défend des convictions. Le risque de l'air, c'est l'intellectualisation, la coupure d'avec les émotions, la dispersion.",
      ] },
      { h2: 'L\'eau : l\'émotion, l\'intuition, la profondeur', paras: [
        "Les signes d'eau, <a href=\"/signes/cancer\">Cancer</a>, <a href=\"/signes/scorpion\">Scorpion</a>, <a href=\"/signes/poissons\">Poissons</a>, vivent dans le ressenti et l'invisible. L'eau, c'est l'émotion, l'empathie, l'intuition, la mémoire, le besoin de fusion et de profondeur. Les tempéraments d'eau perçoivent les courants que les autres ne voient pas, ressentent avant de comprendre.",
        "Le mode éclaire : le Cancer (cardinal) protège et fonde, le Scorpion (fixe) plonge et transforme, les Poissons (mutable) se fondent dans le tout. Le risque de l'eau, c'est de se noyer dans les émotions, de manquer de limites, de fuir le réel.",
      ] },
      { h2: 'L\'équilibre des éléments dans votre thème', paras: [
        "Ce qui rend un thème vivant, c'est la manière dont les éléments s'y répartissent. Un thème très chargé en feu et en air sera vif, mental, tourné vers l'extérieur ; un thème dominé par la terre et l'eau sera plus intériorisé, sensible, prudent. Un élément manquant indique souvent un domaine à conquérir : peu de terre, et l'on doit apprendre l'ancrage ; peu d'eau, et l'on apprivoise lentement ses émotions.",
        "C'est tout l'intérêt du <a href=\"/guide/theme-natal\">thème natal</a> par rapport au seul signe solaire : il révèle votre équilibre élémentaire réel, fait de toutes vos planètes, et non d'une seule.",
      ] },
    ],
    faq: [
      { q: 'Quels sont les signes de chaque élément&nbsp;?', a: "Feu : Bélier, Lion, Sagittaire. Terre : Taureau, Vierge, Capricorne. Air : Gémeaux, Balance, Verseau. Eau : Cancer, Scorpion, Poissons. Chaque élément regroupe trois signes (on parle de triplicité), répartis sur les trois modes, cardinal, fixe, mutable, ce qui leur donne à chacun une expression distincte." },
      { q: 'Quels éléments sont les plus compatibles&nbsp;?', a: "Traditionnellement, le feu et l'air se stimulent mutuellement (l'air attise le feu), tout comme la terre et l'eau se nourrissent (l'eau féconde la terre). Mais en astrologie sérieuse, aucune combinaison n'est mauvaise : les éléments « opposés » créent souvent les attractions les plus riches. La compatibilité réelle dépend de l'ensemble des deux thèmes, pas seulement des éléments." },
      { q: 'Que signifie un élément manquant dans un thème&nbsp;?', a: "Un élément peu ou pas représenté dans un thème indique souvent une dimension de soi à développer consciemment. Manquer de feu peut rendre l'élan difficile à trouver ; manquer d'eau, l'accès aux émotions. Ce n'est pas un défaut mais un terrain d'apprentissage, et souvent, on finit par le cultiver avec une intensité particulière." },
    ],
    ctaH2: "Quel est votre équilibre élémentaire ?",
    ctaP: "Lunestia analyse la répartition des éléments dans votre thème natal complet et vous explique ce que votre dominante, ou votre manque, révèle de votre tempérament.",
    related: [
      { href: '/guide/theme-natal', glyph: '✦', label: 'Guide', name: 'Le thème natal' },
      { href: '/guide/ascendant', glyph: '✦', label: 'Guide', name: "L'ascendant" },
      { href: '/signes', glyph: '✦', label: 'Explorer', name: 'Les 12 signes' },
      { href: '/guide/mercure-retrograde', glyph: '☿', label: 'Guide', name: 'Mercure rétrograde' },
    ],
  },

  {
    slug: 'mercure-retrograde', name: 'Mercure rétrograde', glyph: '☿', hubMeta: 'Le transit le plus célèbre',
    faqHeadingName: 'Mercure rétrograde',
    metaTitle: 'Mercure rétrograde : ce que ça signifie vraiment | Lunestia',
    metaDesc: "Mercure rétrograde : ni catastrophe ni superstition. Découvrez ce que ce transit signifie réellement, ses effets et comment le traverser sereinement.",
    ogDesc: "Mercure rétrograde, sans le catastrophisme : ce que ce transit signifie vraiment et comment bien le vivre.",
    articleHeadline: 'Mercure rétrograde : ce que ça signifie vraiment',
    h1Html: "<em>Mercure rétrograde</em>, au-delà de la panique",
    leadHtml: "Trois ou quatre fois par an, une rumeur traverse les réseaux : « Attention, Mercure rétrograde ! » On l'accuse de tout, pannes, malentendus, rendez-vous ratés. Mais que se passe-t-il vraiment dans le ciel, et que dit ce phénomène une fois débarrassé du catastrophisme ?",
    sections: [
      { h2: null, paras: [
        "<strong>Mercure rétrograde</strong> est devenu le phénomène astrologique le plus célèbre du grand public, et le plus caricaturé. Avant d'en faire le bouc émissaire de nos contrariétés, il vaut la peine de comprendre ce que c'est réellement et ce que la tradition astrologique en dit, loin des prophéties anxiogènes que Lunestia refuse par principe.",
      ] },
      { h2: 'Qu\'est-ce que Mercure rétrograde, astronomiquement ?', paras: [
        "Mercure ne recule jamais vraiment dans l'espace : la rétrogradation est une illusion d'optique. Comme Mercure orbite plus vite que la Terre autour du Soleil, il arrive régulièrement qu'il nous « dépasse », donnant l'impression, vu depuis la Terre, qu'il recule dans le ciel, un peu comme un train plus lent qui semble reculer quand on le double. Ce phénomène se produit trois à quatre fois par an, pendant environ trois semaines à chaque fois.",
        "Astrologiquement, Mercure gouverne la communication, la pensée, les échanges, les transports, les contrats. Quand il rétrograde, la tradition considère que ces domaines passent en mode « révision » plutôt qu'en panne : c'est un temps tourné vers l'intérieur et le passé, propice à reconsidérer plutôt qu'à lancer.",
      ] },
      { h2: 'Ce que Mercure rétrograde change vraiment', paras: [
        "Oubliez l'idée que tout va casser. Dans une lecture sérieuse, Mercure rétrograde n'est pas une malédiction mais un changement de tonalité. C'est une période où l'énergie mentale se tourne vers le « re- » : revoir, réviser, reprendre, réfléchir, renouer, réparer. Les choses lancées dans la précipitation peuvent demander des ajustements ; les malentendus sont plus faciles quand on va trop vite.",
        "Concrètement, c'est un excellent moment pour terminer ce qui traînait, relire un projet, renouer avec quelqu'un, faire le point. C'est un moment moins idéal, sans être interdit, pour signer dans l'urgence ou prendre une décision majeure sans relire les détails. Le mot d'ordre n'est pas « ne rien faire », mais « ralentir et vérifier ».",
      ] },
      { h2: 'Comment bien traverser un Mercure rétrograde', paras: [
        "La meilleure manière de vivre ce transit est de l'épouser plutôt que de le craindre. Relisez vos messages avant de les envoyer, confirmez les rendez-vous, sauvegardez vos données, accordez-vous des marges. Profitez de cette parenthèse pour mener à bien les tâches de révision que vous repoussiez, c'est leur saison.",
        "Surtout, gardez la mesure. Tout ce qui va de travers pendant ces trois semaines n'est pas « la faute de Mercure » : le ciel n'est pas une excuse, mais une invitation à plus de présence. L'astrologie de Lunestia ne cherche jamais à vous faire peur, elle vous aide à comprendre l'ambiance d'une période pour mieux y naviguer. Pour situer ce transit dans une vision d'ensemble, voyez comment les planètes activent votre <a href=\"/guide/theme-natal\">thème natal</a>.",
      ] },
    ],
    faq: [
      { q: 'Combien de fois par an Mercure est-il rétrograde&nbsp;?', a: "Mercure rétrograde trois à quatre fois par an, pendant environ trois semaines à chaque période. C'est l'un des transits les plus fréquents, ce qui explique sa célébrité. Entre deux rétrogradations, il y a aussi des phases dites « d'ombre », où Mercure repasse sur les degrés concernés, la transition n'est jamais brutale." },
      { q: 'Faut-il éviter de signer un contrat pendant Mercure rétrograde&nbsp;?', a: "Rien n'est interdit. La tradition invite simplement à la vigilance : relire attentivement, clarifier les détails, éviter de signer dans la précipitation. Si une décision est mûre et que vous en comprenez tous les termes, vous pouvez avancer. Mercure rétrograde n'annule pas votre libre arbitre, il invite à la relecture, pas à la paralysie." },
      { q: 'Mercure rétrograde affecte-t-il tout le monde de la même façon&nbsp;?', a: "Non. L'effet dépend de l'endroit où Mercure rétrograde tombe dans votre thème natal et des planètes qu'il vient toucher. Pour quelqu'un dont Mercure natal est concerné, la période sera plus marquée ; pour d'autres, à peine perceptible. C'est tout l'intérêt d'une lecture personnalisée plutôt que d'un horoscope général." },
    ],
    ctaH2: "Quels transits vous concernent vraiment ?",
    ctaP: "Lunestia projette les transits, dont Mercure rétrograde, sur votre thème natal personnel et vous dit lesquels vous touchent réellement, et quand. Fini l'astrologie générique.",
    related: [
      { href: '/guide/theme-natal', glyph: '✦', label: 'Guide', name: 'Le thème natal' },
      { href: '/guide/elements', glyph: '✦', label: 'Guide', name: 'Les éléments' },
      { href: '/signes/gemeaux', glyph: '♊', label: 'Régi par Mercure', name: 'Gémeaux' },
      { href: '/signes/vierge', glyph: '♍', label: 'Régi par Mercure', name: 'Vierge' },
    ],
  },
];
