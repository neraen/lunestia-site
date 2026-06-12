// Content data for the compatibility pages.
// Each pair is analysed through its real zodiacal aspect (opposition, trigone…),
// never reduced to a score out of 10. Both signs are treated with equal depth.
import { GLYPH, NAME } from './signs.mjs';

const ELEM = {
  belier: 'Feu', taureau: 'Terre', gemeaux: 'Air', cancer: 'Eau', lion: 'Feu', vierge: 'Terre',
  balance: 'Air', scorpion: 'Eau', sagittaire: 'Feu', capricorne: 'Terre', verseau: 'Air', poissons: 'Eau',
};
const sc = (slug, label) => ({ href: `/signes/${slug}`, glyph: GLYPH[slug], label, name: NAME[slug] });
const guideCard = { href: '/guide/theme-natal', glyph: '✦', label: 'Guide', name: 'Le thème natal' };
const compatCard = (slug, name) => ({ href: `/compatibilite/${slug}`, glyph: '♥', label: 'Compatibilité', name });

// Zodiac order — drives the canonical slug direction and the aspect between signs.
export const SIGN_ORDER = [
  'belier', 'taureau', 'gemeaux', 'cancer', 'lion', 'vierge',
  'balance', 'scorpion', 'sagittaire', 'capricorne', 'verseau', 'poissons',
];
const idx = (s) => SIGN_ORDER.indexOf(s);

const ASPECT_BY_DISTANCE = {
  0: 'Conjonction (0°)',
  1: 'Semi-sextile (30°)',
  2: 'Sextile (60°)',
  3: 'Carré (90°)',
  4: 'Trigone (120°)',
  5: 'Quinconce (150°)',
  6: 'Opposition (180°)',
};

/** Zodiacal distance between two signs, folded to 0..6. */
export function signDistance(a, b) {
  const d = Math.abs(idx(a) - idx(b));
  return Math.min(d, 12 - d);
}
/** Human aspect label between two signs. */
export function aspectInfo(a, b) {
  return ASPECT_BY_DISTANCE[signDistance(a, b)];
}
/** Canonical one-direction slug: earlier sign in zodiac order first. */
export function canonicalSlug(a, b) {
  return idx(a) <= idx(b) ? `${a}-${b}` : `${b}-${a}`;
}

// Helper to fill repetitive metadata fields from a small spec.
function pair(spec) {
  const { a, b } = spec; // slugs
  return {
    slug: `${a}-${b}`,
    sign1: NAME[a], sign2: NAME[b],
    glyphs: `${GLYPH[a]}${GLYPH[b]}`,
    pairName: `${NAME[a]} & ${NAME[b]}`,
    aspect: spec.aspect || aspectInfo(a, b),
    el1: ELEM[a], el2: ELEM[b],
    metaDesc: spec.metaDesc,
    ogDesc: spec.ogDesc,
    metaTitle: spec.metaTitle || `Compatibilité ${NAME[a]} ${NAME[b]} en amour | Lunestia`,
    articleHeadline: `Compatibilité ${NAME[a]} et ${NAME[b]} en amour`,
    h1Html: spec.h1Html,
    leadHtml: spec.leadHtml,
    sections: spec.sections,
    faq: spec.faq,
    ctaH2: spec.ctaH2 || `${NAME[a]} et ${NAME[b]} : et vos thèmes complets ?`,
    ctaP: spec.ctaP || `Deux signes solaires ne font pas un couple. La synastrie compare vos deux thèmes natals entiers — Lune, Vénus, Mars, maisons. Calculez votre vraie compatibilité dans Lunestia avec Lyra.`,
    related: spec.related || [sc(a, NAME[a]), sc(b, NAME[b]), guideCard],
  };
}

export const compat = [
  // ===================== OPPOSITIONS (180°) =====================
  pair({
    a: 'belier', b: 'balance', aspect: 'Opposition (180°)',
    metaTitle: 'Compatibilité Bélier Balance en amour | Lunestia',
    metaDesc: "Compatibilité Bélier Balance : l'axe du moi et du nous, une polarité magnétique entre l'affirmation de soi et l'art de la relation. Dynamique, défis et forces du couple.",
    ogDesc: "L'axe je/nous : l'attraction magnétique entre l'affirmation de soi du Bélier et l'art relationnel de la Balance.",
    h1Html: "Compatibilité Bélier & Balance, l'axe du <em>moi</em> et du <em>nous</em>",
    leadHtml: "Bélier et Balance se font face dans le zodiaque, et c'est exactement ce qui les attire. Cette compatibilité Bélier Balance est celle d'une opposition — la polarité la plus magnétique qui soit, où chacun possède précisément ce qui manque à l'autre.",
    sections: [
      { h2: null, paras: [
        "Quand le <a href=\"/signes/belier\">Bélier</a> rencontre la <a href=\"/signes/balance\">Balance</a>, deux moitiés d'un même axe se reconnaissent. Le Bélier incarne le « je » — l'affirmation, l'élan, l'instinct. La Balance incarne le « nous » — la relation, l'harmonie, la considération de l'autre. Aucun n'est complet sans la leçon que détient son vis-à-vis, et c'est de cette incomplétude que naît l'attraction.",
      ] },
      { h2: 'Bélier et Balance : la dynamique profonde', paras: [
        "L'opposition n'est pas un conflit, c'est une polarité — comme les deux pôles d'un aimant. Le Bélier, gouverné par Mars, fonce et tranche ; la Balance, gouvernée par Vénus, pèse et harmonise. Chacun projette sur l'autre une part de lui-même qu'il a refoulée : le Bélier admire secrètement la grâce diplomatique de la Balance, qui de son côté est fascinée par l'audace désinhibée du Bélier.",
        "Le danger de toute opposition, c'est que la fascination initiale vire au reproche : le Bélier finit par trouver la Balance indécise et lui reproche de trop ménager les autres ; la Balance trouve le Bélier brutal et égoïste. La clé est de comprendre que l'autre ne fait pas exprès — il incarne simplement le pôle opposé d'une même réalité. Bien vécu, ce couple apprend l'équilibre : le Bélier gagne en tact, la Balance en courage.",
      ] },
      { h2: 'Comment Bélier et Balance communiquent', paras: [
        "Le Bélier dit ce qu'il pense sans détour, parfois avant même d'y avoir réfléchi. La Balance soupèse chaque mot pour préserver l'harmonie. Ce décalage est la première source de friction : le Bélier vit la diplomatie de la Balance comme de la fuite ou de la malhonnêteté, tandis que la franchise du Bélier blesse la sensibilité relationnelle de la Balance.",
        "La clé tient en un apprentissage mutuel : le Bélier doit comprendre que prendre le temps de formuler les choses n'est pas de la faiblesse, et la Balance doit accepter que le désaccord direct n'est pas une rupture. Quand ils y parviennent, leur dialogue devient remarquablement équilibré — l'énergie du Bélier empêche la Balance de tergiverser, et la nuance de la Balance affine la pensée du Bélier.",
      ] },
      { h2: 'L\'alchimie entre Bélier et Balance', paras: [
        "L'attirance physique entre ces deux-là est souvent immédiate et puissante. Mars (Bélier) et Vénus (Balance) sont le couple archétypal du désir : l'un est la pulsion, l'autre le charme. Le Bélier est galvanisé par l'élégance et la séduction raffinée de la Balance ; celle-ci est emportée par la franchise désirante et l'intensité du Bélier.",
        "Pour durer, cette alchimie demande des ajustements de rythme. Le Bélier va vite, droit au but ; la Balance aime le préambule, la cour, l'art du désir entretenu. Si chacun honore le tempo de l'autre — le Bélier en ralentissant, la Balance en osant l'élan —, la complémentarité Mars-Vénus devient une source de passion durable.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi central est celui de l'équilibre entre soi et l'autre. Le Bélier tend à imposer son rythme et ses désirs ; la Balance tend à s'effacer pour préserver la paix, jusqu'à accumuler un ressentiment silencieux qui explose ensuite. Le risque est un couple où l'un décide et l'autre subit en souriant.",
        "La clé de résolution : le Bélier doit apprendre à demander l'avis de la Balance et à le respecter vraiment ; la Balance doit s'entraîner à affirmer ses besoins avant qu'ils ne se transforment en rancune. Chacun guérit l'excès de l'autre — c'est tout le sens de l'opposition comme chemin de croissance.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand il fonctionne, le couple Bélier-Balance réunit le meilleur des deux mondes : l'initiative et la diplomatie, le courage et la grâce, l'individu et la relation. Le Bélier apporte l'élan qui sort la Balance de l'hésitation ; la Balance apporte la considération qui empêche le Bélier de foncer dans le mur.",
        "Ensemble, ils forment une équipe redoutable face au monde — l'un ouvre la voie, l'autre tisse les liens. Leur complémentarité, une fois apprivoisée, fait d'eux un véritable partenariat où chacun grandit au contact de ce qu'il n'est pas.",
      ] },
    ],
    faq: [
      { q: "Bélier et Balance sont-ils compatibles&nbsp;?", a: "Bélier et Balance forment une opposition, l'un des aspects les plus magnétiques du zodiaque. L'attraction est forte car chacun incarne ce qui manque à l'autre : l'affirmation de soi face à l'art de la relation. La compatibilité est réelle mais demande un travail d'équilibre. Tout dépend ensuite de la synastrie complète des deux thèmes, pas seulement des signes solaires." },
      { q: "Pourquoi le Bélier est-il attiré par la Balance&nbsp;?", a: "Le Bélier, instinctif et direct, est fasciné par la grâce, le tact et l'élégance relationnelle de la Balance — des qualités qu'il possède peu et admire secrètement. C'est le propre des signes opposés : ils s'attirent parce que l'autre détient la part de soi qu'on a laissée dans l'ombre. Vénus (Balance) et Mars (Bélier) forment de surcroît le duo classique du désir." },
      { q: "Quel est le plus grand défi du couple Bélier-Balance&nbsp;?", a: "L'équilibre entre les besoins individuels et ceux de la relation. Le Bélier tend à imposer, la Balance à s'effacer. Si ce déséquilibre s'installe, le couple devient inégal et la Balance accumule un ressentiment silencieux. Le défi est d'apprendre à se rejoindre au centre de l'axe : un Bélier plus à l'écoute, une Balance plus affirmée." },
    ],
    related: [sc('belier', 'Bélier'), sc('balance', 'Balance'), guideCard, compatCard('belier-lion', 'Bélier & Lion')],
  }),

  pair({
    a: 'taureau', b: 'scorpion', aspect: 'Opposition (180°)',
    metaTitle: 'Compatibilité Taureau Scorpion en amour | Lunestia',
    metaDesc: "Compatibilité Taureau Scorpion : l'axe de la sécurité et de la transformation, une attraction intense et magnétique entre stabilité et profondeur. Dynamique et défis du couple.",
    ogDesc: "L'axe avoir/être : l'attraction magnétique entre la stabilité du Taureau et l'intensité transformatrice du Scorpion.",
    h1Html: "Compatibilité Taureau & Scorpion, la <em>stabilité</em> face à la <em>transformation</em>",
    leadHtml: "Taureau et Scorpion se dressent l'un en face de l'autre sur l'axe le plus sensuel et le plus intense du zodiaque. Cette compatibilité Taureau Scorpion est une opposition d'une rare puissance magnétique, où la sécurité rencontre le désir de tout transformer.",
    sections: [
      { h2: null, paras: [
        "Le <a href=\"/signes/taureau\">Taureau</a> et le <a href=\"/signes/scorpion\">Scorpion</a> partagent un même axe : celui de la possession et de l'attachement profond. Le Taureau cherche à garder, à stabiliser, à savourer ce qui dure. Le Scorpion cherche à fusionner, à transformer, à plonger dans l'intensité. Tous deux aiment avec une loyauté féroce — c'est leur terrain commun et la racine de leur attirance.",
      ] },
      { h2: 'Taureau et Scorpion : la dynamique profonde', paras: [
        "Deux signes fixes se font face : aucun ne lâche facilement. Le Taureau (Vénus) incarne la sécurité, le plaisir tangible, la permanence ; le Scorpion (Pluton) incarne la profondeur, la crise féconde, la métamorphose. L'un veut que rien ne change, l'autre veut tout transformer — d'où une tension électrique qui ne laisse personne indifférent.",
        "Le Scorpion est attiré par le calme rassurant du Taureau, ce roc qui ne vacille pas devant son intensité. Le Taureau est fasciné, et parfois effrayé, par la profondeur émotionnelle du Scorpion qui l'invite à descendre dans des eaux qu'il évite d'ordinaire. Bien vécue, cette opposition fait du Taureau un être plus profond et du Scorpion un être plus apaisé.",
      ] },
      { h2: 'Comment Taureau et Scorpion communiquent', paras: [
        "Le Taureau communique par le concret et le sensoriel ; il dit peu, mais ses gestes sont fiables. Le Scorpion communique par sous-entendus, regards et silences chargés ; il sonde sans se livrer. Le Taureau peut trouver le Scorpion énigmatique et inutilement compliqué, tandis que le Scorpion peut juger le Taureau trop simple ou émotionnellement paresseux.",
        "La clé est la confiance patiemment construite. Le Scorpion teste, le Taureau rassure par sa constance. Quand le Scorpion comprend que la simplicité du Taureau est une force et non une superficialité, et que le Taureau accepte de descendre dans les profondeurs que le Scorpion lui ouvre, leur communication gagne une rare densité.",
      ] },
      { h2: 'L\'alchimie entre Taureau et Scorpion', paras: [
        "C'est sur le plan de l'intimité que ce couple atteint des sommets. Le Taureau, signe le plus sensoriel du zodiaque, et le Scorpion, signe le plus intense, forment une combinaison physiquement magnétique. Le premier apporte la sensualité lente et savoureuse, le second la profondeur fusionnelle et le mystère. Le désir entre eux est rarement tiède.",
        "Cette alchimie repose sur un équilibre subtil entre le besoin de sécurité du Taureau et le besoin de fusion du Scorpion. Si le Taureau accepte l'intensité sans s'en effrayer, et si le Scorpion ne cherche pas à contrôler ce qu'il aime, leur lien physique devient le ciment d'une relation profonde et durable.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "La jalousie et la possessivité sont le terrain miné de ce couple. Tous deux s'attachent intensément, et la peur de perdre l'autre peut virer au contrôle — sourd chez le Taureau, sondeur chez le Scorpion. Deux signes fixes qui s'affrontent ne cèdent pas : les conflits peuvent s'enliser dans un bras de fer silencieux.",
        "La clé de résolution est la confiance. Le Scorpion doit apprendre à ne pas tout vérifier ni soupçonner ; le Taureau doit accepter d'exprimer ce qu'il ressent au lieu de se murer dans l'entêtement. Chacun détient le remède de l'autre : la stabilité du Taureau apaise les abîmes du Scorpion, la profondeur du Scorpion empêche le Taureau de s'endormir dans la routine.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand la confiance est là, Taureau et Scorpion forment l'un des couples les plus solides et passionnés du zodiaque. Leur loyauté commune est inébranlable ; une fois engagés, ils restent. Le Taureau offre un port sûr aux tempêtes du Scorpion ; le Scorpion offre au Taureau une profondeur et une transformation qu'aucun autre signe ne lui apporterait.",
        "Ensemble, ils peuvent bâtir quelque chose d'à la fois solide et profond — un amour qui ne craint ni la durée ni l'intensité. C'est la promesse de cet axe : transformer la peur de perdre en certitude d'avoir trouvé.",
      ] },
    ],
    faq: [
      { q: "Taureau et Scorpion sont-ils compatibles&nbsp;?", a: "Taureau et Scorpion forment une opposition à l'attraction magnétique exceptionnelle. Tous deux fixes et profondément loyaux, ils peuvent construire un lien intense et durable. Les défis — jalousie, entêtement — sont réels mais surmontables si la confiance s'installe. Comme toujours, la synastrie complète des deux thèmes affine grandement le portrait." },
      { q: "Pourquoi le Scorpion est-il attiré par le Taureau&nbsp;?", a: "Le Scorpion, traversé par une intensité parfois épuisante, trouve dans le calme stable du Taureau un ancrage rassurant — un roc qui ne s'effraie pas de sa profondeur. Le Taureau, de son côté, est fasciné par l'intensité émotionnelle du Scorpion. C'est l'attraction classique des signes opposés : chacun détient ce qui manque à l'autre." },
      { q: "Quel est le plus grand défi du couple Taureau-Scorpion&nbsp;?", a: "La possessivité et la lutte de pouvoir entre deux signes fixes qui ne lâchent rien. La jalousie peut empoisonner le lien, et les conflits s'enliser. Le défi est de transformer l'attachement intense en confiance : moins de contrôle, plus de parole. Quand ils y parviennent, leur loyauté commune devient une force rare." },
    ],
    related: [sc('taureau', 'Taureau'), sc('scorpion', 'Scorpion'), guideCard, compatCard('cancer-scorpion', 'Cancer & Scorpion')],
  }),

  pair({
    a: 'gemeaux', b: 'sagittaire', aspect: 'Opposition (180°)',
    metaTitle: 'Compatibilité Gémeaux Sagittaire en amour | Lunestia',
    metaDesc: "Compatibilité Gémeaux Sagittaire : l'axe du détail et de la vision, deux esprits curieux qui s'attirent entre proximité et grands horizons. Dynamique, défis et forces du couple.",
    ogDesc: "L'axe savoir/croire : l'attraction entre la curiosité des Gémeaux et la quête de sens du Sagittaire.",
    h1Html: "Compatibilité Gémeaux & Sagittaire, le <em>détail</em> et la <em>vision</em>",
    leadHtml: "Gémeaux et Sagittaire se font face sur l'axe de la connaissance — l'un collectionne les faits proches, l'autre cherche le sens lointain. Cette compatibilité Gémeaux Sagittaire unit deux esprits mobiles, curieux et épris de liberté, dans une rencontre joyeuse et stimulante.",
    sections: [
      { h2: null, paras: [
        "Les <a href=\"/signes/gemeaux\">Gémeaux</a> et le <a href=\"/signes/sagittaire\">Sagittaire</a> partagent un même axe intellectuel : celui de l'apprentissage et de la communication. Les Gémeaux explorent le proche, le multiple, le détail — ils butinent l'information. Le Sagittaire cherche le lointain, l'unifié, le sens — il vise la grande vérité. Deux faims de comprendre qui se complètent à merveille.",
      ] },
      { h2: 'Gémeaux et Sagittaire : la dynamique profonde', paras: [
        "Deux signes mutables se font face : la souplesse et le mouvement sont leur terrain commun. Mercure (Gémeaux) recueille les pièces du puzzle ; Jupiter (Sagittaire) cherche l'image d'ensemble. Le Sagittaire trouve chez les Gémeaux une vivacité et une curiosité enchanteresses ; les Gémeaux admirent la vision large et l'optimisme contagieux du Sagittaire.",
        "Leur opposition se joue sur l'échelle : les Gémeaux peuvent trouver le Sagittaire sentencieux ou trop sûr de ses grandes vérités, tandis que le Sagittaire peut juger les Gémeaux dispersés ou superficiels. Bien vécue, cette polarité s'équilibre : les Gémeaux apprennent à donner du sens à ce qu'ils savent, le Sagittaire à vérifier les détails de ses convictions.",
      ] },
      { h2: 'Comment Gémeaux et Sagittaire communiquent', paras: [
        "C'est leur grand point fort. Ces deux-là parlent, débattent, rient et explorent les idées sans jamais s'ennuyer. La conversation est le cœur battant de leur relation : ils peuvent passer des heures à refaire le monde, des potins du quartier aux questions existentielles.",
        "Le seul écueil : les Gémeaux papillonnent d'un sujet à l'autre et adorent jouer avec les idées, tandis que le Sagittaire veut conclure, trancher, affirmer une vérité. Si chacun respecte le mode de l'autre — le Sagittaire en lâchant un peu ses certitudes, les Gémeaux en acceptant d'aller au fond d'un sujet — leur dialogue devient une fête perpétuelle de l'esprit.",
      ] },
      { h2: 'L\'alchimie entre Gémeaux et Sagittaire', paras: [
        "L'attirance entre Gémeaux et Sagittaire passe d'abord par l'esprit : ils se séduisent par le rire, le jeu, la stimulation intellectuelle. Le désir naît de la complicité et de l'aventure partagée plus que de l'intensité dramatique. Ce sont des amants joueurs, curieux d'explorer, allergiques à la routine sous les draps comme ailleurs.",
        "Leur liberté commune est un atout : aucun des deux n'étouffe l'autre, tous deux ont besoin d'air. Le risque serait que la légèreté empêche la profondeur émotionnelle de s'installer. La clé : transformer la complicité d'esprit en intimité du cœur, sans craindre que la profondeur tue la joie.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le grand défi est l'ancrage. Deux signes mutables, tous deux épris de liberté et de mouvement, peuvent peiner à construire la stabilité du quotidien : qui paie les factures, qui range, qui reste ? Le concret peut être le grand absent de cette relation aérienne.",
        "L'autre écueil est l'évitement émotionnel : les Gémeaux intellectualisent, le Sagittaire fuit vers le prochain horizon dès que ça devient intime. La clé de résolution est d'oser la profondeur et l'engagement choisi, de comprendre que rester n'est pas perdre sa liberté mais l'approfondir. Un peu de terre dans leurs thèmes respectifs aide grandement." ,
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand il trouve son équilibre, le couple Gémeaux-Sagittaire est l'un des plus joyeux et vivants du zodiaque. Ils ne s'ennuient jamais, grandissent ensemble intellectuellement, et s'accordent une liberté mutuelle qui prévient l'étouffement. Leur complicité d'esprit peut durer toute une vie.",
        "Ensemble, ils forment une équipe d'explorateurs : les Gémeaux remarquent tout, le Sagittaire donne la direction. L'un sans l'autre voit la moitié du tableau ; réunis, ils embrassent à la fois le détail et l'horizon.",
      ] },
    ],
    faq: [
      { q: "Gémeaux et Sagittaire sont-ils compatibles&nbsp;?", a: "Gémeaux et Sagittaire forment une opposition particulièrement harmonieuse, car tous deux sont des signes mutables curieux et épris de liberté. Leur complicité intellectuelle est immédiate. Le principal défi est l'ancrage dans le concret et l'engagement émotionnel. La synastrie complète des deux thèmes précise grandement cette belle base." },
      { q: "Pourquoi le Sagittaire est-il attiré par les Gémeaux&nbsp;?", a: "Le Sagittaire, en quête de sens et d'horizons, est séduit par la vivacité d'esprit, l'humour et la curiosité insatiable des Gémeaux. Ces derniers admirent en retour la vision large et l'optimisme du Sagittaire. Comme signes opposés, ils détiennent chacun la moitié de l'axe de la connaissance : le détail et la vision." },
      { q: "Quel est le plus grand défi du couple Gémeaux-Sagittaire&nbsp;?", a: "Construire du concret et de l'intimité durable. Deux signes mutables et libres peinent parfois à gérer le quotidien et à plonger dans la profondeur émotionnelle, préférant l'idée et le mouvement. Le défi est d'oser l'engagement sans le vivre comme une perte de liberté." },
    ],
    related: [sc('gemeaux', 'Gémeaux'), sc('sagittaire', 'Sagittaire'), guideCard, compatCard('gemeaux-verseau', 'Gémeaux & Verseau')],
  }),

  pair({
    a: 'cancer', b: 'capricorne', aspect: 'Opposition (180°)',
    metaTitle: 'Compatibilité Cancer Capricorne en amour | Lunestia',
    metaDesc: "Compatibilité Cancer Capricorne : l'axe du cœur et de la structure, du foyer et du monde. Une complémentarité profonde entre tendresse et solidité. Dynamique et défis du couple.",
    ogDesc: "L'axe foyer/monde : la complémentarité entre la tendresse du Cancer et la solidité du Capricorne.",
    h1Html: "Compatibilité Cancer & Capricorne, le <em>cœur</em> et la <em>structure</em>",
    leadHtml: "Cancer et Capricorne occupent l'axe du foyer et du monde, de l'intime et du social. Cette compatibilité Cancer Capricorne réunit deux signes cardinaux que tout semble opposer et qui, pourtant, se complètent avec une justesse rare.",
    sections: [
      { h2: null, paras: [
        "Le <a href=\"/signes/cancer\">Cancer</a> et le <a href=\"/signes/capricorne\">Capricorne</a> forment l'axe vertical du zodiaque : la maison et la carrière, le besoin de sécurité émotionnelle et le besoin de réussite sociale. Le Cancer veille sur le dedans ; le Capricorne affronte le dehors. Ensemble, ils couvrent les deux piliers d'une vie accomplie.",
      ] },
      { h2: 'Cancer et Capricorne : la dynamique profonde', paras: [
        "La Lune (Cancer) et Saturne (Capricorne) sont les deux luminaires du soin : l'un nourrit par la tendresse, l'autre protège par la structure. Le Cancer crée le nid émotionnel ; le Capricorne en assure les fondations matérielles. Cette répartition naturelle des rôles peut faire d'eux un couple d'une grande solidité.",
        "Le Cancer est attiré par la fiabilité rassurante du Capricorne, ce partenaire sur qui l'on peut bâtir. Le Capricorne, souvent coupé de ses émotions, est touché par la chaleur et l'intuition du Cancer qui réchauffe son monde austère. Bien vécue, cette opposition guérit : le Cancer apprend la solidité, le Capricorne réapprend à ressentir.",
      ] },
      { h2: 'Comment Cancer et Capricorne communiquent', paras: [
        "Le Cancer parle le langage des émotions et des besoins ; le Capricorne celui des faits, des objectifs et des responsabilités. Le Cancer peut vivre la réserve du Capricorne comme de la froideur, voire un rejet ; le Capricorne peut trouver le Cancer trop susceptible ou envahissant émotionnellement.",
        "La clé est la traduction mutuelle. Le Capricorne doit comprendre qu'un geste de tendresse vaut tous les discours pour le Cancer, et le Cancer doit apprendre à lire l'amour du Capricorne dans ses actes concrets plutôt que dans des mots qu'il peine à dire. Quand ils décodent le langage de l'autre, leur communication devient profondément complémentaire.",
      ] },
      { h2: 'L\'alchimie entre Cancer et Capricorne', paras: [
        "L'attirance repose sur le sentiment de trouver enfin un complément. Le Cancer, sensible et accueillant, fait fondre la carapace du Capricorne ; celui-ci offre au Cancer un cadre sûr où sa vulnérabilité peut se déposer. Dans l'intimité, la tendresse du Cancer rencontre la sensualité contenue mais profonde du Capricorne.",
        "Cette alchimie a besoin de temps : le Capricorne se livre lentement, le Cancer se protège par cercles. Mais une fois la confiance installée, leur intimité gagne en profondeur ce qu'elle n'avait pas en spontanéité. Le Cancer ouvre le Capricorne au plaisir d'être vulnérable ; le Capricorne offre au Cancer une sécurité qui libère sa sensualité.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le risque majeur est l'incompréhension émotionnelle. Le Cancer a besoin de réassurance verbale et de tendresse ; le Capricorne, pudique et tourné vers l'action, peut sembler distant ou absorbé par le travail. Le Cancer se sent négligé, le Capricorne se sent jugé sur un terrain où il est mal à l'aise.",
        "La clé de résolution : le Capricorne s'engage à exprimer son affection, même maladroitement, et à ne pas sacrifier le couple à la carrière ; le Cancer apprend à reconnaître l'amour dans le concret et à ne pas exiger une démonstrativité qui n'est pas dans la nature du Capricorne. Chacun apprivoise la langue de l'autre.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Cancer et Capricorne peuvent former le couple « fondateur » par excellence — celui qui bâtit un foyer solide, une famille, un projet de vie à long terme. Le Cancer apporte l'âme, le Capricorne la structure ; ensemble, ils créent un édifice à la fois chaleureux et durable.",
        "Leur complémentarité couvre tout le spectre de l'existence : l'intérieur et l'extérieur, le cœur et la raison, le présent affectif et l'avenir construit. C'est la promesse de cet axe : un amour qui sait à la fois aimer et durer.",
      ] },
    ],
    faq: [
      { q: "Cancer et Capricorne sont-ils compatibles&nbsp;?", a: "Cancer et Capricorne forment une opposition très complémentaire : l'axe du foyer et du monde. Le Cancer apporte la tendresse, le Capricorne la solidité, et ensemble ils peuvent bâtir une vie durable. Le défi est l'expression émotionnelle. La synastrie complète des deux thèmes affine ce portrait prometteur." },
      { q: "Pourquoi le Cancer et le Capricorne s'attirent-ils&nbsp;?", a: "Chacun incarne ce qui manque à l'autre. Le Cancer est attiré par la stabilité et la fiabilité du Capricorne ; le Capricorne, souvent coupé de ses émotions, est touché par la chaleur du Cancer. C'est l'attraction des signes opposés : la réunion de deux moitiés d'un même axe, le cœur et la structure." },
      { q: "Quel est le plus grand défi du couple Cancer-Capricorne&nbsp;?", a: "L'expression des émotions. Le Cancer a besoin de tendresse et de mots rassurants ; le Capricorne, pudique et tourné vers l'action, peut sembler froid ou trop pris par le travail. Le défi est que le Capricorne ose montrer son affection et que le Cancer apprenne à la reconnaître dans les actes concrets." },
    ],
    related: [sc('cancer', 'Cancer'), sc('capricorne', 'Capricorne'), guideCard, compatCard('taureau-capricorne', 'Taureau & Capricorne')],
  }),

  pair({
    a: 'lion', b: 'verseau', aspect: 'Opposition (180°)',
    metaTitle: 'Compatibilité Lion Verseau en amour | Lunestia',
    metaDesc: "Compatibilité Lion Verseau : l'axe du cœur individuel et de l'idéal collectif. Une polarité magnétique entre chaleur personnelle et liberté visionnaire. Dynamique et défis du couple.",
    ogDesc: "L'axe je/nous collectif : l'attraction entre la chaleur du Lion et l'idéal libre du Verseau.",
    h1Html: "Compatibilité Lion & Verseau, le <em>cœur</em> et l'<em>idéal</em>",
    leadHtml: "Lion et Verseau se font face sur l'axe de l'individu et du collectif — le besoin de briller personnellement contre le besoin d'appartenir à plus grand que soi. Cette compatibilité Lion Verseau unit deux signes fixes que leur opposition rend irrésistiblement magnétiques.",
    sections: [
      { h2: null, paras: [
        "Le <a href=\"/signes/lion\">Lion</a> et le <a href=\"/signes/verseau\">Verseau</a> incarnent deux versants du cœur : l'amour personnel, intense et rayonnant du Lion, et l'amour universel, libre et fraternel du Verseau. L'un veut être un soleil pour quelques-uns ; l'autre veut éclairer l'humanité entière. De cette différence d'échelle naît une attraction fascinante.",
      ] },
      { h2: 'Lion et Verseau : la dynamique profonde', paras: [
        "Deux signes fixes, donc deux volontés solides, se font face. Le Soleil (Lion) cherche la reconnaissance personnelle, la chaleur, le rayonnement ; Uranus (Verseau) cherche la liberté, l'originalité, le progrès collectif. Le Lion est fasciné par l'indépendance et la singularité du Verseau, qui ne court pas après son approbation ; le Verseau est réchauffé par la générosité flamboyante du Lion.",
        "Leur opposition se joue sur l'attention : le Lion veut être le centre du monde de l'autre, le Verseau distribue son attention à un large cercle et chérit sa liberté. Bien vécue, cette polarité équilibre : le Lion apprend à aimer sans posséder, le Verseau à honorer la personne concrète autant que l'idéal abstrait.",
      ] },
      { h2: 'Comment Lion et Verseau communiquent', paras: [
        "Le Lion s'exprime avec chaleur, théâtralité, depuis le cœur ; le Verseau avec une distance amusée, depuis les idées. Le Lion peut trouver le Verseau froid ou détaché émotionnellement ; le Verseau peut trouver le Lion trop centré sur lui-même ou avide de compliments.",
        "Le terrain d'entente, c'est leur loyauté commune et leur force de conviction. S'ils acceptent leurs styles — le Lion en ne prenant pas la distance du Verseau pour de l'indifférence, le Verseau en offrant au Lion la reconnaissance dont il a besoin — leur échange devient stimulant : le Verseau ouvre l'esprit du Lion, le Lion réchauffe le cœur du Verseau.",
      ] },
      { h2: 'L\'alchimie entre Lion et Verseau', paras: [
        "L'attirance est souvent électrique : le Lion, solaire et passionné, est intrigué par le magnétisme cool et imprévisible du Verseau ; celui-ci est attiré par la vitalité généreuse et l'assurance du Lion. C'est la rencontre du feu et de l'éclair.",
        "Dans l'intimité, le Lion apporte la passion ardente et le besoin de fusion chaleureuse, le Verseau l'inventivité, la surprise, une certaine liberté. Le risque : le Lion veut de l'exclusivité brûlante, le Verseau veut de l'espace. La clé est de marier la chaleur et la liberté — un Lion qui n'étouffe pas, un Verseau qui se rend présent.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi central oppose le besoin de reconnaissance du Lion au besoin d'indépendance du Verseau. Le Lion peut se sentir négligé quand le Verseau privilégie ses amis, ses causes, ses projets ; le Verseau peut se sentir étouffé par la demande d'attention exclusive du Lion. Deux signes fixes, de surcroît, cèdent difficilement.",
        "La clé de résolution : le Lion apprend que l'amour du Verseau ne se mesure pas à la quantité d'attention mais à la fidélité de son choix ; le Verseau apprend à offrir au Lion des marques de reconnaissance qui le nourrissent vraiment. Chacun assouplit sa fixité au contact de l'autre.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand il trouve son équilibre, le couple Lion-Verseau est lumineux et inspirant. Le Lion donne un cœur et une chaleur aux idéaux du Verseau ; le Verseau ouvre le Lion à une générosité qui dépasse son ego, vers le collectif. Ensemble, ils peuvent rayonner bien au-delà d'eux-mêmes.",
        "Leur loyauté de signes fixes, une fois l'engagement pris, est remarquable. Ils forment souvent un couple admiré, à la fois chaleureux et libre, qui prouve que l'amour personnel et l'idéal universel ne s'excluent pas mais se nourrissent.",
      ] },
    ],
    faq: [
      { q: "Lion et Verseau sont-ils compatibles&nbsp;?", a: "Lion et Verseau forment une opposition très magnétique entre deux signes fixes. L'attraction est forte, la loyauté solide une fois engagés. Le principal défi oppose le besoin de reconnaissance du Lion à l'indépendance du Verseau. Comme toujours, la synastrie complète des deux thèmes précise cette dynamique." },
      { q: "Pourquoi le Lion est-il attiré par le Verseau&nbsp;?", a: "Le Lion est fasciné par l'indépendance, l'originalité et le magnétisme détaché du Verseau, qui ne quémande pas son approbation — une attitude qui pique sa curiosité et son désir. Le Verseau, lui, est réchauffé par la générosité solaire du Lion. C'est l'attraction des signes opposés : le cœur et l'idéal." },
      { q: "Quel est le plus grand défi du couple Lion-Verseau&nbsp;?", a: "Concilier le besoin d'attention exclusive du Lion avec le besoin d'espace et de liberté du Verseau. Le Lion peut se sentir négligé, le Verseau étouffé. Deux signes fixes cèdent difficilement : le défi est d'assouplir, le Lion en faisant confiance, le Verseau en offrant des marques d'amour concrètes." },
    ],
    related: [sc('lion', 'Lion'), sc('verseau', 'Verseau'), guideCard, compatCard('belier-lion', 'Bélier & Lion')],
  }),

  pair({
    a: 'vierge', b: 'poissons', aspect: 'Opposition (180°)',
    metaTitle: 'Compatibilité Vierge Poissons en amour | Lunestia',
    metaDesc: "Compatibilité Vierge Poissons : l'axe de l'analyse et du rêve, du concret et de l'infini. Une complémentarité guérisseuse entre rigueur et compassion. Dynamique et défis du couple.",
    ogDesc: "L'axe concret/infini : la complémentarité guérisseuse entre l'analyse de la Vierge et le rêve des Poissons.",
    h1Html: "Compatibilité Vierge & Poissons, l'<em>analyse</em> et le <em>rêve</em>",
    leadHtml: "Vierge et Poissons se font face sur l'axe du concret et du spirituel, du détail terrestre et de l'océan infini. Cette compatibilité Vierge Poissons unit deux signes mutables dont l'opposition cache une complémentarité étonnamment guérisseuse.",
    sections: [
      { h2: null, paras: [
        "La <a href=\"/signes/vierge\">Vierge</a> et les <a href=\"/signes/poissons\">Poissons</a> ferment l'axe service/transcendance. La Vierge soigne le monde par l'attention au détail et l'action concrète ; les Poissons le soignent par la compassion et l'imagination. L'une range, les autres rêvent — et chacun a désespérément besoin de ce que l'autre possède.",
      ] },
      { h2: 'Vierge et Poissons : la dynamique profonde', paras: [
        "Mercure (Vierge) et Neptune (Poissons) s'opposent comme la précision et le flou, le mental et l'intuition. La Vierge analyse, distingue, perfectionne ; les Poissons ressentent, fusionnent, lâchent prise. La Vierge est attirée par la douceur rêveuse et la profondeur émotionnelle des Poissons, qui l'invitent à sortir de son mental ; les Poissons sont rassurés par la fiabilité et le sens pratique de la Vierge, qui leur offre un ancrage.",
        "Leur opposition peut se transformer en reproche : la Vierge trouve les Poissons brouillons et fuyants ; les Poissons trouvent la Vierge froide et critique. Mais bien vécue, cette polarité guérit : la Vierge apprend à lâcher le contrôle, les Poissons à s'incarner dans le réel.",
      ] },
      { h2: 'Comment Vierge et Poissons communiquent', paras: [
        "La Vierge communique par les faits, les solutions, l'amélioration ; les Poissons par les ressentis, les images, les non-dits. La Vierge, voulant aider, donne des conseils que les Poissons reçoivent parfois comme des critiques ; les Poissons, voulant être compris, expriment des émotions floues qui déconcertent la Vierge en quête de clarté.",
        "La clé est la bienveillance. La Vierge doit comprendre que les Poissons ont besoin d'être entendus avant d'être conseillés ; les Poissons doivent reconnaître que la rigueur de la Vierge est une forme d'amour. Quand ils s'ajustent, la Vierge apporte la clarté qui apaise le chaos des Poissons, et les Poissons apportent la douceur qui adoucit l'autocritique de la Vierge.",
      ] },
      { h2: 'L\'alchimie entre Vierge et Poissons', paras: [
        "L'attirance naît d'un sentiment de complétude : chacun reconnaît dans l'autre la moitié manquante. La Vierge, souvent pudique et dans le mental, est emportée par la sensualité fluide et l'abandon des Poissons ; ceux-ci sont touchés par l'attention dévouée et le soin précis de la Vierge.",
        "Dans l'intimité, les Poissons ouvrent la Vierge au lâcher-prise, à la tendresse sans calcul ; la Vierge offre aux Poissons une présence attentive et fiable. La complémentarité fonctionne si la Vierge ose se laisser aller et si les Poissons ne se perdent pas dans l'idéalisation. Ensemble, ils peuvent vivre une intimité à la fois tendre et profonde.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi majeur est le déséquilibre entre donner et recevoir. Tous deux ont une tendance au sacrifice — la Vierge par devoir, les Poissons par compassion —, ce qui peut créer un couple où chacun s'oublie ou, à l'inverse, où l'un porte l'autre à bout de bras. La Vierge peut se lasser de gérer le concret pendant que les Poissons rêvent.",
        "La clé de résolution : la Vierge apprend à exprimer ses besoins au lieu de seulement servir, et à formuler ses remarques avec douceur ; les Poissons apprennent à s'ancrer, à assumer leur part du réel, à ne pas fuir dans l'idéalisation ou l'évitement. Chacun guérit l'excès de l'autre.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand il trouve son équilibre, le couple Vierge-Poissons est profondément guérisseur. La Vierge donne aux Poissons une structure qui protège leur sensibilité ; les Poissons donnent à la Vierge une dimension spirituelle et compatissante qui apaise son perfectionnisme. Ensemble, ils relient le ciel et la terre.",
        "Leur complémentarité couvre tout l'axe du soin : le concret et l'invisible, le geste précis et la présence aimante. C'est la promesse de cet axe : un amour où la rigueur et la tendresse, enfin réconciliées, prennent soin du monde et l'un de l'autre.",
      ] },
    ],
    faq: [
      { q: "Vierge et Poissons sont-ils compatibles&nbsp;?", a: "Vierge et Poissons forment une opposition très complémentaire entre deux signes mutables. L'une apporte le concret, les autres le rêve et la compassion ; ensemble, ils se complètent et se guérissent. Le défi est la communication et l'équilibre du don. La synastrie complète des deux thèmes affine ce portrait." },
      { q: "Pourquoi la Vierge et les Poissons s'attirent-ils&nbsp;?", a: "Chacun possède ce qui manque à l'autre. La Vierge, dans son mental et son sens du détail, est attirée par la douceur rêveuse et l'abandon des Poissons ; ceux-ci trouvent dans la fiabilité de la Vierge un ancrage rassurant. C'est l'attraction classique des signes opposés : l'analyse et le rêve réunis." },
      { q: "Quel est le plus grand défi du couple Vierge-Poissons&nbsp;?", a: "Éviter que la Vierge ne devienne critique et que les Poissons ne fuient dans le flou. La Vierge doit adoucir ses remarques et exprimer ses besoins ; les Poissons doivent s'ancrer dans le concret et assumer leur part. L'équilibre entre donner et recevoir est la clé de leur harmonie." },
    ],
    related: [sc('vierge', 'Vierge'), sc('poissons', 'Poissons'), guideCard, compatCard('scorpion-poissons', 'Scorpion & Poissons')],
  }),

  // ===================== TRIGONES DE FEU (120°) =====================
  pair({
    a: 'belier', b: 'lion', aspect: 'Trigone (120°)',
    metaTitle: 'Compatibilité Bélier Lion en amour | Lunestia',
    metaDesc: "Compatibilité Bélier Lion : deux feux en résonance, une passion flamboyante et naturelle. Dynamique, communication, défis et forces de ce couple ardent.",
    ogDesc: "Deux signes de feu en trigone : la passion flamboyante et naturelle entre le Bélier et le Lion.",
    h1Html: "Compatibilité Bélier & Lion, deux <em>flammes</em> qui s'attisent",
    leadHtml: "Bélier et Lion partagent l'élément feu et s'unissent par un trigone — l'aspect le plus harmonieux du zodiaque. Cette compatibilité Bélier Lion est celle d'une reconnaissance immédiate : deux tempéraments ardents qui parlent la même langue, celle de la passion et de l'élan.",
    sections: [
      { h2: null, paras: [
        "Quand le <a href=\"/signes/belier\">Bélier</a> rencontre le <a href=\"/signes/lion\">Lion</a>, le feu reconnaît le feu. Le trigone qui les relie crée une fluidité naturelle : pas besoin de tout expliquer, ils se comprennent d'instinct. Tous deux vivent intensément, aiment grandement, et refusent la tiédeur. Leur rencontre a souvent quelque chose d'évident, comme deux braises qui n'attendaient que de se rejoindre.",
      ] },
      { h2: 'Bélier et Lion : la dynamique profonde', paras: [
        "Mars (Bélier) et le Soleil (Lion) sont deux énergies de feu complémentaires : l'un est l'étincelle qui démarre, l'autre la flamme qui rayonne et dure. Le Bélier, cardinal, lance les projets ; le Lion, fixe, leur donne de la constance et de la grandeur. Cette répartition naturelle fait d'eux une équipe enthousiasmante, toujours en mouvement.",
        "L'admiration est mutuelle et sincère : le Lion adore l'audace spontanée du Bélier, le Bélier est conquis par la générosité chaleureuse et le charisme du Lion. Le risque, propre à deux ego puissants, est la rivalité pour le premier rôle. Mais tant que chacun reconnaît la lumière de l'autre, leur feu commun réchauffe au lieu de brûler.",
      ] },
      { h2: 'Comment Bélier et Lion communiquent', paras: [
        "La communication est directe, franche, pleine de vie. Ni l'un ni l'autre ne joue aux devinettes : le Bélier dit les choses crûment, le Lion avec panache, mais tous deux préfèrent l'honnêteté au calcul. Les disputes peuvent être spectaculaires — deux feux qui s'embrasent — mais elles retombent vite, sans rancune durable.",
        "Le seul point de vigilance : l'orgueil. Le Lion supporte mal la brusquerie du Bélier quand elle écorne sa fierté, et le Bélier s'impatiente du besoin de reconnaissance du Lion. Un peu de tact de part et d'autre suffit à transformer ces frictions en jeu plutôt qu'en blessure.",
      ] },
      { h2: 'L\'alchimie entre Bélier et Lion', paras: [
        "Sur le plan de l'attirance, ce couple est explosif au meilleur sens du terme. La passion est immédiate, physique, joyeuse. Le Bélier apporte l'ardeur et la spontanéité, le Lion la chaleur et le sens du grand jeu. Le désir entre eux ne s'éteint pas facilement, car tous deux savent entretenir la flamme par le jeu, la conquête renouvelée et l'admiration partagée.",
        "Leur intimité est d'autant plus vivante que ni l'un ni l'autre ne craint d'exprimer son désir. Le risque serait la lassitude si la routine s'installait — mais c'est précisément ce que ces deux signes de feu fuient instinctivement.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi principal est la gestion des ego et de la place du leader. Deux signes habitués à mener peuvent se disputer le volant. Le Bélier veut décider vite, le Lion veut être honoré dans ses choix ; sans souplesse, le couple devient un concours d'autorité.",
        "L'autre écueil est l'impulsivité partagée : sans personne pour tempérer, ils peuvent foncer ensemble sans réfléchir, accumuler les décisions hâtives. La clé de résolution : alterner les rôles, célébrer les victoires de l'autre sans jalousie, et cultiver un peu de patience pour équilibrer leur fougue commune.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Bélier et Lion forment l'un des couples les plus dynamiques et joyeux du zodiaque. Leur énergie commune les rend capables de grandes choses : ils s'encouragent, s'admirent, foncent ensemble vers la vie. Leur loyauté, une fois engagée, est ardente et généreuse.",
        "Ensemble, ils incarnent la vitalité à l'état pur — un couple qui ose, qui rit fort, qui aime sans tiédeur. Tant qu'ils laissent chacun briller à sa manière, leur feu partagé éclaire tout sur son passage.",
      ] },
    ],
    faq: [
      { q: "Bélier et Lion sont-ils compatibles&nbsp;?", a: "Bélier et Lion sont reliés par un trigone de feu, l'un des aspects les plus harmonieux. Leur compatibilité est naturellement forte : passion, enthousiasme et franchise partagés. Le principal défi est la rivalité entre deux ego de meneurs. La synastrie complète des deux thèmes précise cette belle base." },
      { q: "Pourquoi le Bélier et le Lion s'entendent-ils si bien&nbsp;?", a: "Parce qu'ils partagent l'élément feu et se comprennent d'instinct : même goût de l'action, de la passion, de l'honnêteté directe. Le Bélier admire la générosité du Lion, le Lion l'audace du Bélier. Leur énergie se renforce mutuellement au lieu de s'opposer." },
      { q: "Quel est le plus grand défi du couple Bélier-Lion&nbsp;?", a: "La compétition pour le leadership. Deux signes habitués à mener doivent apprendre à partager le volant et à célébrer les succès de l'autre sans jalousie. Leur impulsivité commune demande aussi un peu de patience pour éviter les décisions trop hâtives." },
    ],
    related: [sc('belier', 'Bélier'), sc('lion', 'Lion'), guideCard, compatCard('lion-sagittaire', 'Lion & Sagittaire')],
  }),

  pair({
    a: 'belier', b: 'sagittaire', aspect: 'Trigone (120°)',
    metaTitle: 'Compatibilité Bélier Sagittaire en amour | Lunestia',
    metaDesc: "Compatibilité Bélier Sagittaire : deux feux aventuriers en parfaite résonance, un couple d'explorateurs épris de liberté. Dynamique, défis et forces de ce duo.",
    ogDesc: "Deux signes de feu en trigone : l'aventure partagée et la liberté entre le Bélier et le Sagittaire.",
    h1Html: "Compatibilité Bélier & Sagittaire, deux <em>aventuriers</em> du feu",
    leadHtml: "Bélier et Sagittaire partagent l'élément feu et un trigone harmonieux. Cette compatibilité Bélier Sagittaire est celle de deux explorateurs nés : un couple en mouvement, avide de découvertes, qui transforme la vie en aventure permanente.",
    sections: [
      { h2: null, paras: [
        "Le <a href=\"/signes/belier\">Bélier</a> et le <a href=\"/signes/sagittaire\">Sagittaire</a> se reconnaissent dans leur soif de vivre. Reliés par un trigone de feu, ils partagent l'enthousiasme, l'optimisme et l'amour de la liberté. Le Bélier fonce vers l'objectif, le Sagittaire vers l'horizon — deux élans qui se nourrissent au lieu de se gêner.",
      ] },
      { h2: 'Bélier et Sagittaire : la dynamique profonde', paras: [
        "Mars (Bélier) et Jupiter (Sagittaire) forment un duo de feu expansif : l'audace rencontre la vision. Le Bélier, cardinal, initie ; le Sagittaire, mutable, élargit et donne du sens. Leur énergie est tournée vers l'avant, jamais vers la rumination — ce sont des optimistes d'action.",
        "L'admiration est spontanée : le Sagittaire adore le courage et la spontanéité du Bélier, le Bélier est conquis par la sagesse joyeuse et l'esprit large du Sagittaire. Ensemble, ils se sentent libres et stimulés, rarement freinés. C'est un couple qui grandit en avançant.",
      ] },
      { h2: 'Comment Bélier et Sagittaire communiquent', paras: [
        "Leur communication est franche, énergique et pleine d'humour. Tous deux disent ce qu'ils pensent et n'aiment pas s'embarrasser de détours. Les débats sont vifs mais sans rancune : ils adorent se challenger, refaire le monde, rire de tout.",
        "Le seul écueil : le Bélier peut s'agacer des grandes théories du Sagittaire, et le Sagittaire de l'impatience du Bélier qui veut agir avant de comprendre. Mais leur bonne foi commune et leur absence de rancune font que ces frictions se règlent vite, souvent dans un éclat de rire.",
      ] },
      { h2: 'L\'alchimie entre Bélier et Sagittaire', paras: [
        "L'attirance est immédiate et pleine de vie. Ce sont des amants joueurs, spontanés, qui mêlent passion et complicité. Le Bélier apporte l'ardeur directe, le Sagittaire le sens de l'aventure et la fantaisie. Le désir se nourrit de nouveauté : voyages, projets, défis partagés relancent constamment la flamme.",
        "Leur liberté commune est un atout précieux : aucun ne cherche à enfermer l'autre, ce qui maintient le désir vivant. Le risque serait que la quête perpétuelle de stimulation empêche l'enracinement — mais tant qu'ils explorent ensemble, leur lien reste électrique.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi principal est l'ancrage et la constance. Deux feux épris de liberté peuvent négliger le quotidien, fuir les responsabilités ou repousser sans cesse l'engagement profond au nom de l'aventure. Le concret risque d'être le parent pauvre de cette relation flamboyante.",
        "L'autre écueil est l'impulsivité doublée d'excès : le Bélier fonce, le Sagittaire voit grand, et sans modération ils peuvent se lancer dans des paris hasardeux. La clé de résolution : canaliser leur énergie commune vers des projets durables et oser la profondeur de l'engagement sans la vivre comme une perte de liberté.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Bélier et Sagittaire forment un couple rayonnant d'optimisme et de vitalité. Ils s'encouragent dans leurs élans, partagent une foi commune dans l'avenir et ne s'ennuient jamais. Leur relation est une aventure perpétuelle, où chacun pousse l'autre à oser davantage.",
        "Leur force est de transformer la vie en terrain de jeu sans perdre la tendresse. Quand ils apprennent à conjuguer liberté et fidélité, ils deviennent des compagnons de route inséparables — deux flammes qui éclairent la même direction.",
      ] },
    ],
    faq: [
      { q: "Bélier et Sagittaire sont-ils compatibles&nbsp;?", a: "Bélier et Sagittaire sont unis par un trigone de feu très harmonieux : enthousiasme, liberté et goût de l'aventure en commun. Leur compatibilité est naturellement élevée. Le principal défi est l'ancrage dans le concret et l'engagement durable. La synastrie complète des deux thèmes affine ce beau potentiel." },
      { q: "Pourquoi le Bélier et le Sagittaire s'entendent-ils si bien&nbsp;?", a: "Ils partagent l'élément feu et une même soif de vivre : optimisme, franchise, amour de la liberté et de la découverte. Le Bélier apporte l'audace, le Sagittaire la vision et l'humour. Leur énergie se renforce mutuellement, ce qui rend leur relation stimulante et joyeuse." },
      { q: "Quel est le plus grand défi du couple Bélier-Sagittaire&nbsp;?", a: "Construire de la stabilité et s'engager en profondeur. Deux signes de feu libres peuvent négliger le quotidien et fuir les responsabilités au nom de l'aventure. Le défi est de canaliser leur fougue vers des projets durables sans renoncer à leur liberté." },
    ],
    related: [sc('belier', 'Bélier'), sc('sagittaire', 'Sagittaire'), guideCard, compatCard('lion-sagittaire', 'Lion & Sagittaire')],
  }),

  pair({
    a: 'lion', b: 'sagittaire', aspect: 'Trigone (120°)',
    metaTitle: 'Compatibilité Lion Sagittaire en amour | Lunestia',
    metaDesc: "Compatibilité Lion Sagittaire : deux feux généreux et flamboyants en parfaite résonance. Un couple chaleureux, optimiste et aventurier. Dynamique, défis et forces.",
    ogDesc: "Deux signes de feu en trigone : la générosité flamboyante et l'optimisme partagés du Lion et du Sagittaire.",
    h1Html: "Compatibilité Lion & Sagittaire, le <em>panache</em> et l'<em>horizon</em>",
    leadHtml: "Lion et Sagittaire partagent l'élément feu et un trigone harmonieux. Cette compatibilité Lion Sagittaire unit la chaleur rayonnante du Lion à l'optimisme aventurier du Sagittaire — un couple solaire, généreux et tourné vers la vie en grand.",
    sections: [
      { h2: null, paras: [
        "Le <a href=\"/signes/lion\">Lion</a> et le <a href=\"/signes/sagittaire\">Sagittaire</a> se rejoignent dans la générosité et l'enthousiasme. Reliés par un trigone de feu, ils partagent une foi joyeuse dans l'existence et un goût pour les grandes choses. Le Lion rayonne, le Sagittaire explore : deux manières d'embrasser la vie à pleins bras.",
      ] },
      { h2: 'Lion et Sagittaire : la dynamique profonde', paras: [
        "Le Soleil (Lion) et Jupiter (Sagittaire) sont deux astres d'abondance : la chaleur du cœur rencontre l'expansion de l'esprit. Le Lion, fixe, apporte la constance et la loyauté ; le Sagittaire, mutable, apporte le mouvement et la largeur de vues. Leur énergie commune est généreuse, festive, tournée vers l'avenir.",
        "L'admiration est réciproque : le Sagittaire est inspiré par la noblesse et la chaleur du Lion, le Lion est séduit par la liberté d'esprit et l'optimisme contagieux du Sagittaire. Ensemble, ils se tirent vers le haut et célèbrent la vie sans retenue.",
      ] },
      { h2: 'Comment Lion et Sagittaire communiquent', paras: [
        "La communication est chaleureuse, enthousiaste et honnête. Tous deux aiment les grandes idées, les projets ambitieux, les conversations qui élèvent. Le Sagittaire stimule le Lion par sa philosophie de vie ; le Lion encourage le Sagittaire par sa foi en lui.",
        "Le point de vigilance : le Sagittaire, franc jusqu'à la maladresse, peut blesser la fierté du Lion sans le vouloir, et le Lion peut trouver le Sagittaire trop indépendant ou peu attentif à son besoin de reconnaissance. Un peu de délicatesse de la part du Sagittaire et de souplesse de la part du Lion suffisent à fluidifier l'échange.",
      ] },
      { h2: 'L\'alchimie entre Lion et Sagittaire', paras: [
        "L'attirance est ardente et joyeuse. Le Lion apporte la passion généreuse et le sens du romanesque, le Sagittaire la fantaisie et l'aventure. Leur intimité est vivante, ludique, jamais routinière : ils savent entretenir la flamme par le jeu, les voyages, les grandes déclarations.",
        "Leur complémentarité fonctionne car le Sagittaire offre au Lion l'aventure qui l'empêche de s'ennuyer, et le Lion offre au Sagittaire la chaleur et l'engagement qui ancrent ses envies de fuite. Le désir entre eux brûle longtemps, nourri par l'admiration mutuelle.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi principal touche au besoin de reconnaissance du Lion face au besoin de liberté du Sagittaire. Le Lion veut être le centre de l'attention de son partenaire ; le Sagittaire, épris d'indépendance, distribue volontiers son énergie à mille projets et amitiés. Le Lion peut alors se sentir négligé.",
        "L'autre écueil est la démesure partagée : deux feux généreux peuvent vivre au-dessus de leurs moyens, promettre trop, manquer de mesure. La clé de résolution : le Sagittaire offre au Lion des marques d'attention sincères, le Lion accorde au Sagittaire l'espace dont il a besoin, et tous deux cultivent un peu de réalisme.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Lion et Sagittaire forment un couple lumineux, généreux et inspirant. Leur optimisme commun les rend résilients face aux épreuves, et leur goût de la vie en fait des compagnons joyeux et loyaux. Ils s'encouragent à viser haut et à rester fidèles à leurs idéaux.",
        "Ensemble, ils incarnent la chaleur et l'aventure réunies — un couple qui aime fort, rit beaucoup et regarde toujours vers l'avant. Tant que le Lion se sent honoré et le Sagittaire respire, leur feu commun ne faiblit pas.",
      ] },
    ],
    faq: [
      { q: "Lion et Sagittaire sont-ils compatibles&nbsp;?", a: "Lion et Sagittaire sont reliés par un trigone de feu très harmonieux : chaleur, optimisme et générosité partagés. Leur compatibilité est naturellement élevée. Les défis tiennent au besoin de reconnaissance du Lion et à l'indépendance du Sagittaire. La synastrie complète des deux thèmes précise ce beau potentiel." },
      { q: "Pourquoi le Lion et le Sagittaire s'entendent-ils si bien&nbsp;?", a: "Ils partagent l'élément feu et une même façon d'embrasser la vie : générosité, enthousiasme, foi dans l'avenir. Le Lion admire la liberté d'esprit du Sagittaire, qui s'inspire de la noblesse du Lion. Leur énergie commune les tire vers le haut." },
      { q: "Quel est le plus grand défi du couple Lion-Sagittaire&nbsp;?", a: "Concilier le besoin d'attention du Lion avec le besoin de liberté du Sagittaire. Le Lion peut se sentir négligé quand le Sagittaire se disperse. Le défi est que le Sagittaire offre des marques d'amour sincères et que le Lion accorde de l'espace, tout en gardant un peu de mesure dans leurs élans communs." },
    ],
    related: [sc('lion', 'Lion'), sc('sagittaire', 'Sagittaire'), guideCard, compatCard('belier-lion', 'Bélier & Lion')],
  }),

  // ===================== TRIGONES DE TERRE (120°) =====================
  pair({
    a: 'taureau', b: 'vierge', aspect: 'Trigone (120°)',
    metaTitle: 'Compatibilité Taureau Vierge en amour | Lunestia',
    metaDesc: "Compatibilité Taureau Vierge : deux signes de terre en résonance, un couple fiable, sensuel et profondément complice. Dynamique, défis et forces de ce duo solide.",
    ogDesc: "Deux signes de terre en trigone : la fiabilité tranquille et la complicité concrète du Taureau et de la Vierge.",
    h1Html: "Compatibilité Taureau & Vierge, la <em>solidité</em> tranquille",
    leadHtml: "Taureau et Vierge partagent l'élément terre et un trigone harmonieux. Cette compatibilité Taureau Vierge est celle d'un accord profond et discret : deux tempéraments concrets qui construisent, à leur rythme, un amour fiable et tendre.",
    sections: [
      { h2: null, paras: [
        "Le <a href=\"/signes/taureau\">Taureau</a> et la <a href=\"/signes/vierge\">Vierge</a> se comprennent sans bruit. Reliés par un trigone de terre, ils partagent le sens du concret, le goût du travail bien fait et une méfiance commune envers les grands discours. Leur amour se mesure en actes plutôt qu'en déclarations — et c'est exactement ce qui les rassure mutuellement.",
      ] },
      { h2: 'Taureau et Vierge : la dynamique profonde', paras: [
        "Vénus (Taureau) et Mercure (Vierge) s'accordent en douceur : la sensualité tranquille rencontre l'attention méticuleuse. Le Taureau, fixe, apporte la stabilité et le plaisir d'être ; la Vierge, mutable, apporte le soin du détail et l'amélioration constante. Ensemble, ils forment un foyer ordonné et chaleureux.",
        "Le Taureau apprécie la prévenance et la fiabilité de la Vierge, qui pense à tout ; la Vierge se sent apaisée par la solidité rassurante du Taureau, ce roc qui ne s'affole jamais. Leur relation avance lentement mais sûrement, sur des fondations que rien ne fait vaciller.",
      ] },
      { h2: 'Comment Taureau et Vierge communiquent', paras: [
        "La communication est posée, concrète et sincère. Aucun des deux n'aime le drame ou les jeux émotionnels : ils préfèrent les conversations utiles, les projets partagés, les marques d'attention au quotidien. La Vierge analyse et propose, le Taureau tempère et ancre.",
        "Le seul écueil : la Vierge, dans son désir d'améliorer, peut critiquer ou pinailler, ce qui heurte le besoin de tranquillité du Taureau. Si la Vierge adoucit ses remarques et le Taureau accepte un peu de mouvement, leur dialogue reste serein et constructif.",
      ] },
      { h2: 'L\'alchimie entre Taureau et Vierge', paras: [
        "L'intimité de ce couple se construit dans la confiance et la lenteur. Le Taureau, le plus sensuel des signes, éveille la Vierge souvent pudique au plaisir des sens ; la Vierge offre une attention délicate et une présence dévouée. Ce n'est pas une passion explosive mais une tendresse profonde qui s'approfondit avec le temps.",
        "La complémentarité fonctionne car le Taureau apprend à la Vierge à savourer sans tout analyser, et la Vierge apporte au Taureau une attention raffinée. Leur désir, discret mais durable, repose sur un sentiment de sécurité que peu de couples atteignent.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi principal est la routine et l'excès de prudence. Deux signes de terre stables peuvent s'installer dans un confort si paisible qu'il devient morne, oubliant la spontanéité et la nouveauté. Le risque est de privilégier la sécurité au point d'éteindre l'étincelle.",
        "L'autre écueil est la critique de la Vierge face à l'entêtement du Taureau : si la Vierge corrige trop et le Taureau se braque, des tensions sourdes s'installent. La clé de résolution : entretenir volontairement la surprise et la légèreté, et veiller à ce que l'amélioration ne vire jamais au reproche.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Taureau et Vierge forment l'un des couples les plus fiables et durables du zodiaque. Leur complicité concrète, leur loyauté et leur sens commun du réel en font des partenaires de vie idéaux, capables de bâtir patiemment un quotidien doux et solide.",
        "Ensemble, ils créent un havre de paix : un foyer soigné, une relation sans faux-semblants, une tendresse qui dure. C'est l'amour discret mais profond, celui qui ne fait pas de bruit mais ne s'effondre jamais.",
      ] },
    ],
    faq: [
      { q: "Taureau et Vierge sont-ils compatibles&nbsp;?", a: "Taureau et Vierge sont unis par un trigone de terre très harmonieux : fiabilité, sens du concret et loyauté partagés. Leur compatibilité est naturellement solide. Le principal défi est d'éviter la routine et l'excès de critique. La synastrie complète des deux thèmes affine ce beau potentiel." },
      { q: "Pourquoi le Taureau et la Vierge s'entendent-ils si bien&nbsp;?", a: "Ils partagent l'élément terre et une même approche concrète de la vie : ils aiment par les actes, valorisent la fiabilité et fuient le drame. Le Taureau apporte la stabilité, la Vierge l'attention au détail. Leur complicité se construit sans bruit, sur des bases solides." },
      { q: "Quel est le plus grand défi du couple Taureau-Vierge&nbsp;?", a: "Éviter que le confort ne devienne routine et que la Vierge ne devienne trop critique. Deux signes de terre stables doivent entretenir la surprise et la légèreté. La clé : cultiver la nouveauté et veiller à ce que le désir d'améliorer ne vire jamais au reproche." },
    ],
    related: [sc('taureau', 'Taureau'), sc('vierge', 'Vierge'), guideCard, compatCard('vierge-capricorne', 'Vierge & Capricorne')],
  }),

  pair({
    a: 'taureau', b: 'capricorne', aspect: 'Trigone (120°)',
    metaTitle: 'Compatibilité Taureau Capricorne en amour | Lunestia',
    metaDesc: "Compatibilité Taureau Capricorne : deux signes de terre en résonance, un couple ambitieux, loyal et bâtisseur. Dynamique, défis et forces de ce duo durable.",
    ogDesc: "Deux signes de terre en trigone : la loyauté et l'ambition partagées du Taureau et du Capricorne.",
    h1Html: "Compatibilité Taureau & Capricorne, les <em>bâtisseurs</em>",
    leadHtml: "Taureau et Capricorne partagent l'élément terre et un trigone harmonieux. Cette compatibilité Taureau Capricorne unit deux tempéraments sérieux et loyaux qui construisent, pierre après pierre, une relation faite pour durer toute une vie.",
    sections: [
      { h2: null, paras: [
        "Le <a href=\"/signes/taureau\">Taureau</a> et le <a href=\"/signes/capricorne\">Capricorne</a> parlent le même langage : celui de l'effort, de la fidélité et des choses qui durent. Reliés par un trigone de terre, ils partagent un réalisme tranquille et une même répugnance pour l'instabilité. Leur amour se bâtit comme une maison solide, faite pour traverser les saisons.",
      ] },
      { h2: 'Taureau et Capricorne : la dynamique profonde', paras: [
        "Vénus (Taureau) et Saturne (Capricorne) s'accordent dans la durée : le plaisir et le sens du devoir s'équilibrent. Le Taureau, fixe, apporte la stabilité et la jouissance du présent ; le Capricorne, cardinal, apporte l'ambition et la projection vers l'avenir. Ensemble, ils savent à la fois savourer et construire.",
        "Le Capricorne admire la solidité sereine du Taureau, qui n'a rien à prouver ; le Taureau est rassuré par la fiabilité et l'ambition structurante du Capricorne. Leur relation avance avec patience, sur des bases que ni l'un ni l'autre ne remet jamais en question à la légère.",
      ] },
      { h2: 'Comment Taureau et Capricorne communiquent', paras: [
        "La communication est sobre, honnête et tournée vers le concret. Ni l'un ni l'autre n'est très démonstratif : ils expriment l'amour par les actes, les engagements tenus, la construction commune. Les paroles sont mesurées mais fiables.",
        "Le point de vigilance : tous deux peuvent manquer de spontanéité émotionnelle et se réfugier dans le travail ou la routine, laissant les sentiments implicites. La clé est de verbaliser de temps en temps l'affection, et de ne pas laisser les responsabilités étouffer la tendresse.",
      ] },
      { h2: 'L\'alchimie entre Taureau et Capricorne', paras: [
        "L'intimité se construit dans la confiance et la pudeur. Le Taureau, sensuel et patient, réchauffe la réserve du Capricorne et l'ouvre au plaisir sans culpabilité ; le Capricorne offre une profondeur contenue qui se révèle avec le temps. Ce n'est pas la passion explosive, mais une sensualité durable qui gagne en intensité au fil des années.",
        "La complémentarité fonctionne car le Taureau enseigne au Capricorne à savourer le présent, tandis que le Capricorne donne au Taureau un horizon et un sens. Leur désir, discret, repose sur une sécurité affective profonde.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi principal est l'excès de sérieux et la place du travail. Deux signes de terre ambitieux et responsables peuvent sacrifier la légèreté, la spontanéité et le jeu sur l'autel du devoir et de la sécurité matérielle. Le couple risque de devenir une entreprise plutôt qu'une histoire d'amour.",
        "L'autre écueil est l'entêtement du Taureau face à la rigidité du Capricorne : deux volontés solides qui ne plient pas. La clé de résolution : se ménager du plaisir et de l'insouciance, exprimer ses émotions, et veiller à ce que la construction commune n'efface pas la tendresse quotidienne.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Taureau et Capricorne forment un couple d'une solidité exemplaire. Leur loyauté, leur réalisme et leur ténacité en font des partenaires capables de bâtir une vie entière — patrimoine, foyer, famille — avec une constance que peu de couples égalent.",
        "Ensemble, ils incarnent l'amour qui dure : une relation où la confiance se gagne par les actes et ne se trahit pas. Quand ils n'oublient pas de cultiver la douceur, ils deviennent un roc inébranlable l'un pour l'autre.",
      ] },
    ],
    faq: [
      { q: "Taureau et Capricorne sont-ils compatibles&nbsp;?", a: "Taureau et Capricorne sont reliés par un trigone de terre très harmonieux : loyauté, réalisme et ambition partagés. Leur compatibilité est naturellement solide et durable. Le principal défi est d'éviter l'excès de sérieux. La synastrie complète des deux thèmes précise ce beau potentiel." },
      { q: "Pourquoi le Taureau et le Capricorne s'entendent-ils si bien&nbsp;?", a: "Ils partagent l'élément terre et des valeurs communes : fidélité, effort, goût des choses qui durent. Le Taureau apporte la stabilité et le plaisir, le Capricorne l'ambition et la structure. Leur relation se bâtit patiemment, sur des bases que rien ne fait vaciller." },
      { q: "Quel est le plus grand défi du couple Taureau-Capricorne&nbsp;?", a: "Ne pas sacrifier la légèreté et la tendresse au travail et à la sécurité. Deux signes de terre responsables risquent de transformer leur couple en entreprise. Le défi est de se ménager du plaisir, d'exprimer leurs émotions et d'assouplir leurs volontés respectives." },
    ],
    related: [sc('taureau', 'Taureau'), sc('capricorne', 'Capricorne'), guideCard, compatCard('taureau-vierge', 'Taureau & Vierge')],
  }),

  pair({
    a: 'vierge', b: 'capricorne', aspect: 'Trigone (120°)',
    metaTitle: 'Compatibilité Vierge Capricorne en amour | Lunestia',
    metaDesc: "Compatibilité Vierge Capricorne : deux signes de terre en résonance, un couple rigoureux, dévoué et profondément complice. Dynamique, défis et forces de ce duo.",
    ogDesc: "Deux signes de terre en trigone : la rigueur partagée et le dévouement du couple Vierge–Capricorne.",
    h1Html: "Compatibilité Vierge & Capricorne, la <em>rigueur</em> partagée",
    leadHtml: "Vierge et Capricorne partagent l'élément terre et un trigone harmonieux. Cette compatibilité Vierge Capricorne unit deux tempéraments exigeants et dévoués, dont l'entente repose sur le respect mutuel du travail bien fait et de l'engagement tenu.",
    sections: [
      { h2: null, paras: [
        "La <a href=\"/signes/vierge\">Vierge</a> et le <a href=\"/signes/capricorne\">Capricorne</a> se reconnaissent dans leur sérieux et leur sens du devoir. Reliés par un trigone de terre, ils partagent une éthique de l'effort et une méfiance envers la facilité. Leur amour se construit dans la fiabilité, le respect et une admiration mutuelle pour la compétence de l'autre.",
      ] },
      { h2: 'Vierge et Capricorne : la dynamique profonde', paras: [
        "Mercure (Vierge) et Saturne (Capricorne) forment un duo d'efficacité : l'analyse rencontre la structure. La Vierge, mutable, perfectionne les détails ; le Capricorne, cardinal, fixe le cap et bâtit. Ensemble, ils forment une équipe redoutable, capable d'accomplir de grandes choses avec méthode.",
        "Le Capricorne admire l'intelligence pratique et le dévouement de la Vierge ; la Vierge se sent en sécurité auprès de l'ambition fiable du Capricorne. Leur relation est faite de respect autant que d'amour — ils se prennent au sérieux et s'estiment profondément.",
      ] },
      { h2: 'Comment Vierge et Capricorne communiquent', paras: [
        "La communication est claire, rationnelle et orientée vers les solutions. Tous deux préfèrent les faits aux effusions et apprécient l'honnêteté directe. Ils peuvent passer des heures à organiser, planifier, résoudre — et y trouver une véritable complicité.",
        "Le point de vigilance : deux esprits critiques et exigeants peuvent se montrer durs, l'un envers l'autre comme envers eux-mêmes. La Vierge pinaille, le Capricorne juge. La clé est d'adoucir le ton, de reconnaître les efforts de l'autre et de ne pas confondre exigence et reproche permanent.",
      ] },
      { h2: 'L\'alchimie entre Vierge et Capricorne', paras: [
        "L'intimité se déploie lentement, dans la confiance. Tous deux pudiques, ils ont besoin de temps pour baisser la garde — mais une fois la sécurité installée, leur connexion gagne en profondeur et en tendresse. Le Capricorne révèle une sensualité contenue, la Vierge un dévouement attentif.",
        "La complémentarité fonctionne car ils se rassurent mutuellement : ni l'un ni l'autre ne joue de jeux, ne trahit, ne déçoit. Leur désir repose sur le respect et la fiabilité plutôt que sur l'intensité dramatique — un feu discret mais constant.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi majeur est l'excès de travail et d'autocritique. Deux signes de terre exigeants peuvent se noyer dans les responsabilités, négliger le plaisir et la spontanéité, et entretenir une atmosphère trop sérieuse. Le risque est l'usure par l'austérité.",
        "L'autre écueil est la sévérité mutuelle : si chacun attend la perfection, le couple devient un tribunal. La clé de résolution : célébrer les réussites, cultiver la détente et l'humour, et remplacer la critique par l'encouragement. Apprendre, ensemble, à se reposer sans culpabilité.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Vierge et Capricorne forment un couple d'une fiabilité et d'une efficacité remarquables. Ils s'épaulent dans leurs ambitions, partagent les mêmes valeurs et construisent une vie ordonnée et prospère. Leur loyauté est sans faille et leur respect mutuel, profond.",
        "Ensemble, ils incarnent l'amour mûr et responsable — celui qui ne brille pas en surface mais qui tient sur la durée. Quand ils s'autorisent la douceur et la légèreté, leur solidité devient un véritable refuge.",
      ] },
    ],
    faq: [
      { q: "Vierge et Capricorne sont-ils compatibles&nbsp;?", a: "Vierge et Capricorne sont unis par un trigone de terre très harmonieux : rigueur, dévouement et valeurs communes. Leur compatibilité est naturellement solide. Le principal défi est l'excès de sérieux et d'autocritique. La synastrie complète des deux thèmes affine ce beau potentiel." },
      { q: "Pourquoi la Vierge et le Capricorne s'entendent-ils si bien&nbsp;?", a: "Ils partagent l'élément terre et une éthique commune de l'effort et de l'engagement. La Vierge apporte l'analyse et le dévouement, le Capricorne la structure et l'ambition. Ils s'admirent et se respectent autant qu'ils s'aiment, sur des bases d'une grande fiabilité." },
      { q: "Quel est le plus grand défi du couple Vierge-Capricorne&nbsp;?", a: "Ne pas se noyer dans le travail et la critique. Deux signes exigeants risquent de créer une atmosphère trop austère et de viser une perfection épuisante. Le défi est de cultiver la détente, l'humour et l'encouragement, et d'apprendre à se reposer sans culpabilité." },
    ],
    related: [sc('vierge', 'Vierge'), sc('capricorne', 'Capricorne'), guideCard, compatCard('taureau-capricorne', 'Taureau & Capricorne')],
  }),

  // ===================== TRIGONES D'AIR (120°) =====================
  pair({
    a: 'gemeaux', b: 'balance', aspect: 'Trigone (120°)',
    metaTitle: 'Compatibilité Gémeaux Balance en amour | Lunestia',
    metaDesc: "Compatibilité Gémeaux Balance : deux signes d'air en résonance, un couple léger, complice et raffiné. Dynamique, communication, défis et forces de ce duo aérien.",
    ogDesc: "Deux signes d'air en trigone : la complicité intellectuelle et le raffinement du couple Gémeaux–Balance.",
    h1Html: "Compatibilité Gémeaux & Balance, la <em>légèreté</em> complice",
    leadHtml: "Gémeaux et Balance partagent l'élément air et un trigone harmonieux. Cette compatibilité Gémeaux Balance est celle d'une entente immédiate de l'esprit : deux tempéraments sociables, curieux et raffinés qui font de la relation un art.",
    sections: [
      { h2: null, paras: [
        "Les <a href=\"/signes/gemeaux\">Gémeaux</a> et la <a href=\"/signes/balance\">Balance</a> se rejoignent dans le royaume de l'esprit et du lien. Reliés par un trigone d'air, ils partagent l'amour de la conversation, des idées et de la vie sociale. Leur relation respire la légèreté et l'élégance — un échange constant où l'ennui n'a pas sa place.",
      ] },
      { h2: 'Gémeaux et Balance : la dynamique profonde', paras: [
        "Mercure (Gémeaux) et Vénus (Balance) s'accordent à merveille : la curiosité rencontre l'harmonie. Les Gémeaux, mutables, apportent la vivacité et la diversité ; la Balance, cardinale, apporte le sens du lien et l'art de la relation. Ensemble, ils forment un couple cultivé, mondain et complice.",
        "La Balance est charmée par l'esprit pétillant et l'humour des Gémeaux ; les Gémeaux sont séduits par la grâce, le tact et l'élégance de la Balance. Leur entente est fluide, presque évidente — ils se comprennent à demi-mot et partagent un même refus de la lourdeur.",
      ] },
      { h2: 'Comment Gémeaux et Balance communiquent', paras: [
        "C'est leur domaine de prédilection. La conversation entre eux est un plaisir constant : ils débattent, plaisantent, explorent les idées, refont le monde avec une aisance rare. La Balance apporte la nuance et l'équilibre, les Gémeaux la vivacité et la curiosité.",
        "Le seul écueil : tous deux fuient le conflit et les sujets lourds. Ils peuvent rester en surface, éviter les vraies confrontations émotionnelles, lisser les désaccords par peur de troubler l'harmonie. La clé est d'oser aborder les sujets profonds sans craindre que la gravité tue la légèreté.",
      ] },
      { h2: 'L\'alchimie entre Gémeaux et Balance', paras: [
        "L'attirance passe d'abord par la séduction de l'esprit : ils se charment par les mots, l'humour, le raffinement. Le désir naît de la complicité et du jeu plus que de l'intensité. Ce sont des amants élégants, joueurs, attentifs à la beauté du moment partagé.",
        "Leur intimité est tendre et ludique, nourrie par une admiration mutuelle. Le risque serait que la légèreté empêche l'ancrage émotionnel profond. Mais tant qu'ils cultivent la complicité et la surprise, leur lien reste vivant et plein de charme.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi principal est l'ancrage et la profondeur émotionnelle. Deux signes d'air peuvent vivre dans les idées et le social au détriment du concret et de l'intime : qui gère le quotidien, qui ose la vraie vulnérabilité ? L'évitement des conflits peut laisser des non-dits s'accumuler.",
        "L'autre écueil est l'indécision conjuguée : les Gémeaux papillonnent, la Balance hésite, et le couple peine parfois à trancher ou à s'engager fermement. La clé de résolution : oser la profondeur, prendre des décisions claires et s'occuper ensemble du concret pour que la légèreté ne devienne pas fuite.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Gémeaux et Balance forment un couple parmi les plus harmonieux et agréables du zodiaque. Leur complicité intellectuelle, leur sociabilité et leur goût commun pour la beauté en font des partenaires qui ne se lassent jamais l'un de l'autre.",
        "Ensemble, ils créent une relation légère, raffinée et stimulante — un dialogue permanent où chacun s'épanouit. Quand ils ajoutent à cette grâce un peu de profondeur, leur entente devient aussi solide qu'élégante.",
      ] },
    ],
    faq: [
      { q: "Gémeaux et Balance sont-ils compatibles&nbsp;?", a: "Gémeaux et Balance sont reliés par un trigone d'air très harmonieux : complicité intellectuelle, sociabilité et raffinement partagés. Leur compatibilité est naturellement élevée. Le principal défi est la profondeur émotionnelle et l'ancrage dans le concret. La synastrie complète des deux thèmes précise ce beau potentiel." },
      { q: "Pourquoi les Gémeaux et la Balance s'entendent-ils si bien&nbsp;?", a: "Ils partagent l'élément air et l'amour des idées, de la conversation et de la vie sociale. La Balance est charmée par l'esprit des Gémeaux, qui adorent la grâce de la Balance. Leur entente est fluide, légère et complice, presque sans effort." },
      { q: "Quel est le plus grand défi du couple Gémeaux-Balance&nbsp;?", a: "Oser la profondeur émotionnelle et gérer le concret. Deux signes d'air peuvent rester en surface, éviter les conflits et hésiter à s'engager. Le défi est d'aborder les vrais sujets, de trancher les décisions et de ne pas laisser la légèreté devenir évitement." },
    ],
    related: [sc('gemeaux', 'Gémeaux'), sc('balance', 'Balance'), guideCard, compatCard('balance-verseau', 'Balance & Verseau')],
  }),

  pair({
    a: 'gemeaux', b: 'verseau', aspect: 'Trigone (120°)',
    metaTitle: 'Compatibilité Gémeaux Verseau en amour | Lunestia',
    metaDesc: "Compatibilité Gémeaux Verseau : deux signes d'air en résonance, un couple libre, original et intellectuellement complice. Dynamique, défis et forces de ce duo.",
    ogDesc: "Deux signes d'air en trigone : la liberté et la complicité intellectuelle du couple Gémeaux–Verseau.",
    h1Html: "Compatibilité Gémeaux & Verseau, deux <em>esprits</em> libres",
    leadHtml: "Gémeaux et Verseau partagent l'élément air et un trigone harmonieux. Cette compatibilité Gémeaux Verseau unit deux esprits indépendants et originaux, dont la relation ressemble à une amitié amoureuse électrisée par les idées.",
    sections: [
      { h2: null, paras: [
        "Les <a href=\"/signes/gemeaux\">Gémeaux</a> et le <a href=\"/signes/verseau\">Verseau</a> se reconnaissent dans leur amour de la liberté et des idées. Reliés par un trigone d'air, ils partagent une curiosité insatiable et un refus des conventions. Leur relation est légère et stimulante, faite de découvertes partagées et d'un respect total de l'indépendance de chacun.",
      ] },
      { h2: 'Gémeaux et Verseau : la dynamique profonde', paras: [
        "Mercure (Gémeaux) et Uranus (Verseau) forment un duo d'avant-garde : la curiosité rencontre l'originalité. Les Gémeaux, mutables, explorent toutes les idées ; le Verseau, fixe, les transforme en visions et en convictions. Ensemble, ils repoussent les limites, inventent, s'enthousiasment pour le nouveau.",
        "Le Verseau admire la vivacité et l'adaptabilité des Gémeaux ; les Gémeaux sont fascinés par la pensée visionnaire et l'indépendance du Verseau. Leur complicité intellectuelle est immédiate, et leur besoin commun de liberté évite l'étouffement que d'autres couples redoutent.",
      ] },
      { h2: 'Comment Gémeaux et Verseau communiquent', paras: [
        "La communication est brillante, originale et infatigable. Ils peuvent parler de tout, de la science aux utopies, sans jamais s'ennuyer. Le Verseau apporte la profondeur des idées et la conviction, les Gémeaux la vivacité et l'ouverture à tous les sujets.",
        "Le point de vigilance : tous deux privilégient le mental sur l'émotionnel. Ils peuvent intellectualiser leurs sentiments, éviter l'intimité profonde, rester dans la tête au détriment du cœur. La clé est d'oser exprimer les émotions et de ne pas tout transformer en débat d'idées.",
      ] },
      { h2: 'L\'alchimie entre Gémeaux et Verseau', paras: [
        "L'attirance est avant tout mentale et électrique : ils se séduisent par l'esprit, l'originalité, l'humour décalé. Le désir naît de la stimulation intellectuelle et de la surprise. Ce sont des amants inventifs, curieux d'expérimenter, allergiques à la routine et à la possessivité.",
        "Leur liberté mutuelle entretient le désir : aucun ne cherche à enfermer l'autre, ce qui maintient une tension vivante. Le risque serait que le détachement empêche l'attachement profond. La clé : transformer la complicité d'esprit en véritable intimité du cœur.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi central est l'intimité émotionnelle. Deux signes d'air épris d'indépendance peuvent fuir la vulnérabilité, rester dans le mental et l'amitié sans plonger dans la profondeur affective. Le couple risque de ressembler à une belle amitié qui n'ose pas s'engager pleinement.",
        "L'autre écueil est l'ancrage : qui gère le concret, le quotidien, la durée ? Deux esprits libres et changeants peuvent négliger la construction. La clé de résolution : oser la profondeur émotionnelle, exprimer les sentiments sans les rationaliser, et accepter qu'un engagement choisi ne menace pas la liberté.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Gémeaux et Verseau forment un couple original, libre et stimulant. Leur complicité intellectuelle, leur ouverture d'esprit et leur respect mutuel de l'indépendance en font des partenaires qui s'épanouissent sans s'étouffer. Ils grandissent ensemble en restant pleinement eux-mêmes.",
        "Ensemble, ils incarnent l'amitié amoureuse à son meilleur : une relation fondée sur l'admiration, la curiosité et la liberté. Quand ils y ajoutent la profondeur du cœur, leur lien devient aussi rare que durable.",
      ] },
    ],
    faq: [
      { q: "Gémeaux et Verseau sont-ils compatibles&nbsp;?", a: "Gémeaux et Verseau sont unis par un trigone d'air très harmonieux : liberté, originalité et complicité intellectuelle partagées. Leur compatibilité est naturellement élevée. Le principal défi est l'intimité émotionnelle et l'ancrage. La synastrie complète des deux thèmes affine ce beau potentiel." },
      { q: "Pourquoi les Gémeaux et le Verseau s'entendent-ils si bien&nbsp;?", a: "Ils partagent l'élément air et un amour commun des idées et de la liberté. Le Verseau admire la vivacité des Gémeaux, qui sont fascinés par sa pensée visionnaire. Leur besoin mutuel d'indépendance évite l'étouffement et entretient une complicité stimulante." },
      { q: "Quel est le plus grand défi du couple Gémeaux-Verseau&nbsp;?", a: "Plonger dans l'intimité émotionnelle. Deux signes d'air indépendants peuvent rester dans le mental et l'amitié sans oser la vulnérabilité profonde. Le défi est d'exprimer les sentiments sans les rationaliser et d'accepter qu'un engagement ne menace pas leur liberté." },
    ],
    related: [sc('gemeaux', 'Gémeaux'), sc('verseau', 'Verseau'), guideCard, compatCard('gemeaux-balance', 'Gémeaux & Balance')],
  }),

  pair({
    a: 'balance', b: 'verseau', aspect: 'Trigone (120°)',
    metaTitle: 'Compatibilité Balance Verseau en amour | Lunestia',
    metaDesc: "Compatibilité Balance Verseau : deux signes d'air en résonance, un couple harmonieux, social et idéaliste. Dynamique, communication, défis et forces de ce duo.",
    ogDesc: "Deux signes d'air en trigone : l'harmonie sociale et les idéaux partagés du couple Balance–Verseau.",
    h1Html: "Compatibilité Balance & Verseau, l'<em>harmonie</em> et l'<em>idéal</em>",
    leadHtml: "Balance et Verseau partagent l'élément air et un trigone harmonieux. Cette compatibilité Balance Verseau unit le sens du lien de la Balance à l'idéalisme du Verseau — un couple sociable, ouvert et tourné vers une vision commune du monde.",
    sections: [
      { h2: null, paras: [
        "La <a href=\"/signes/balance\">Balance</a> et le <a href=\"/signes/verseau\">Verseau</a> se rejoignent dans le monde des idées et des relations. Reliés par un trigone d'air, ils partagent un idéal de justice, un goût du social et une ouverture d'esprit naturelle. Leur relation est élégante, fraternelle et tournée vers les autres autant que vers eux-mêmes.",
      ] },
      { h2: 'Balance et Verseau : la dynamique profonde', paras: [
        "Vénus (Balance) et Uranus (Verseau) s'accordent dans une harmonie ouverte : le sens du lien rencontre l'idéal collectif. La Balance, cardinale, recherche l'équilibre et la relation ; le Verseau, fixe, défend ses convictions et sa liberté. Ensemble, ils forment un couple sociable, engagé, attaché à des valeurs communes.",
        "La Balance est séduite par l'originalité et les idéaux du Verseau ; le Verseau apprécie la grâce, le tact et le sens de la justice de la Balance. Leur entente repose sur un respect mutuel et un partage de visions — ils aiment réfléchir ensemble à un monde meilleur.",
      ] },
      { h2: 'Comment Balance et Verseau communiquent', paras: [
        "La communication est fluide, riche et bienveillante. Tous deux aiment les idées, les débats sur la société, les projets collectifs. La Balance apporte la diplomatie et la nuance, le Verseau la vision et la conviction. Leur dialogue est stimulant et rarement conflictuel.",
        "Le point de vigilance : la Balance recherche l'harmonie et la proximité, tandis que le Verseau peut se montrer détaché ou trop tourné vers ses causes. La Balance peut alors se sentir négligée. La clé est que le Verseau cultive la présence affective et que la Balance respecte le besoin d'indépendance de son partenaire.",
      ] },
      { h2: 'L\'alchimie entre Balance et Verseau', paras: [
        "L'attirance naît de l'esprit et des affinités : ils se séduisent par les valeurs partagées, l'élégance, l'ouverture. La Balance apporte la sensualité raffinée et le romantisme, le Verseau la surprise et l'originalité. Leur intimité est douce, complice et empreinte de respect.",
        "La complémentarité fonctionne car la Balance réchauffe le détachement du Verseau, et le Verseau libère la Balance de sa dépendance au regard de l'autre. Leur désir, élégant et tendre, repose sur une admiration mutuelle et une liberté bien dosée.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi principal oppose le besoin de fusion relationnelle de la Balance au besoin d'indépendance du Verseau. La Balance veut un partenaire présent et complice ; le Verseau chérit sa liberté et ses engagements extérieurs. Sans ajustement, la Balance se sent seule et le Verseau étouffé.",
        "L'autre écueil est l'évitement émotionnel : deux signes d'air peuvent intellectualiser, fuir les conflits et rester dans les idées au détriment de l'intime. La clé de résolution : équilibrer présence et liberté, oser la vulnérabilité, et transformer leurs idéaux communs en projets concrets vécus ensemble.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Balance et Verseau forment un couple harmonieux, ouvert et inspirant. Leur complicité intellectuelle, leur sociabilité et leurs valeurs communes en font des partenaires qui partagent une même vision de la vie et du monde. Ils se respectent et s'admirent profondément.",
        "Ensemble, ils incarnent l'amour à la fois tendre et libre — une relation où l'harmonie n'exclut pas l'indépendance, où l'on construit à deux tout en gardant son individualité. Quand ils ajoutent la profondeur émotionnelle à leur belle entente, leur lien devient remarquablement équilibré.",
      ] },
    ],
    faq: [
      { q: "Balance et Verseau sont-ils compatibles&nbsp;?", a: "Balance et Verseau sont reliés par un trigone d'air très harmonieux : sociabilité, idéaux et complicité intellectuelle partagés. Leur compatibilité est naturellement élevée. Le principal défi oppose le besoin de proximité de la Balance à l'indépendance du Verseau. La synastrie complète des deux thèmes précise ce potentiel." },
      { q: "Pourquoi la Balance et le Verseau s'entendent-ils si bien&nbsp;?", a: "Ils partagent l'élément air et un même goût des idées, du social et de la justice. La Balance est séduite par les idéaux du Verseau, qui apprécie sa grâce et son sens de l'équité. Leur entente repose sur des valeurs communes et un respect mutuel." },
      { q: "Quel est le plus grand défi du couple Balance-Verseau&nbsp;?", a: "Concilier le besoin de proximité de la Balance avec l'indépendance du Verseau. La Balance veut un partenaire présent, le Verseau chérit sa liberté. Le défi est d'équilibrer présence et autonomie, et d'oser la profondeur émotionnelle au-delà des idées partagées." },
    ],
    related: [sc('balance', 'Balance'), sc('verseau', 'Verseau'), guideCard, compatCard('gemeaux-balance', 'Gémeaux & Balance')],
  }),

  // ===================== TRIGONES D'EAU (120°) =====================
  pair({
    a: 'cancer', b: 'scorpion', aspect: 'Trigone (120°)',
    metaTitle: 'Compatibilité Cancer Scorpion en amour | Lunestia',
    metaDesc: "Compatibilité Cancer Scorpion : deux signes d'eau en profonde résonance, un couple intense, fusionnel et loyal. Dynamique, communication, défis et forces.",
    ogDesc: "Deux signes d'eau en trigone : la profondeur émotionnelle et la loyauté fusionnelle du couple Cancer–Scorpion.",
    h1Html: "Compatibilité Cancer & Scorpion, la <em>profondeur</em> partagée",
    leadHtml: "Cancer et Scorpion partagent l'élément eau et un trigone harmonieux. Cette compatibilité Cancer Scorpion est celle d'une fusion émotionnelle profonde : deux âmes intenses qui se reconnaissent et s'offrent une intimité d'une rare densité.",
    sections: [
      { h2: null, paras: [
        "Le <a href=\"/signes/cancer\">Cancer</a> et le <a href=\"/signes/scorpion\">Scorpion</a> plongent dans les mêmes eaux profondes. Reliés par un trigone d'eau, ils partagent une vie émotionnelle intense, une loyauté absolue et un besoin de lien total. Leur rencontre a souvent quelque chose de magnétique : ils se comprennent sans mots, par le ressenti.",
      ] },
      { h2: 'Cancer et Scorpion : la dynamique profonde', paras: [
        "La Lune (Cancer) et Pluton (Scorpion) tissent une connexion émotionnelle d'une grande puissance : le besoin de sécurité rencontre le désir de fusion. Le Cancer, cardinal, crée le nid et la tendresse ; le Scorpion, fixe, apporte l'intensité et la transformation. Ensemble, ils forment un cocon affectif d'une profondeur rare.",
        "Le Scorpion se sent enfin compris par la sensibilité du Cancer, qui ne le juge pas ; le Cancer se sent protégé par la force et la loyauté du Scorpion. Leur entente repose sur une confiance émotionnelle que peu de couples atteignent — ils se confient l'un à l'autre ce qu'ils cachent au reste du monde.",
      ] },
      { h2: 'Comment Cancer et Scorpion communiquent', paras: [
        "La communication passe autant par les mots que par l'intuition. Tous deux captent les non-dits, devinent les humeurs, ressentent l'autre avant qu'il ne parle. Cette compréhension tacite crée une intimité profonde et un sentiment de sécurité mutuelle.",
        "Le point de vigilance : tous deux sont susceptibles et rancuniers. Le Cancer se replie dans la bouderie, le Scorpion garde les blessures longtemps. Les conflits peuvent s'envenimer dans le silence. La clé est d'exprimer les ressentiments avant qu'ils ne s'enkystent, et de se rassurer mutuellement après les tempêtes.",
      ] },
      { h2: 'L\'alchimie entre Cancer et Scorpion', paras: [
        "L'intimité est l'un des points forts absolus de ce couple. Le Cancer, tendre et dévoué, et le Scorpion, passionné et profond, créent une connexion physique et émotionnelle fusionnelle. Le désir se nourrit de l'intensité du lien et du sentiment d'appartenance totale.",
        "Leur alchimie repose sur la confiance et l'abandon. Le Cancer offre la douceur qui apaise le Scorpion, le Scorpion offre l'intensité qui comble le besoin de fusion du Cancer. C'est une intimité où l'on se donne entièrement, sans masque ni réserve.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi majeur est la gestion des émotions intenses et de la susceptibilité partagée. Deux signes d'eau hypersensibles peuvent se blesser facilement, ressasser, créer un climat émotionnel chargé. La jalousie et la possessivité, présentes chez les deux, peuvent étouffer le lien.",
        "L'autre écueil est le repli sur soi du couple, au risque de l'isolement ou de la fusion excessive où chacun perd ses limites. La clé de résolution : exprimer les ressentiments à temps, cultiver la confiance plutôt que le contrôle, et préserver un espace individuel au sein de la fusion.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Cancer et Scorpion forment l'un des couples les plus profonds et loyaux du zodiaque. Leur connexion émotionnelle, leur intuition partagée et leur fidélité indéfectible en font des partenaires d'une rare intimité. Une fois liés, ils se protègent et se soutiennent contre vents et marées.",
        "Ensemble, ils créent un refuge émotionnel total — un amour intense, fusionnel et durable. Quand ils apprennent à gérer leur sensibilité sans se blesser, leur lien devient un sanctuaire inébranlable.",
      ] },
    ],
    faq: [
      { q: "Cancer et Scorpion sont-ils compatibles&nbsp;?", a: "Cancer et Scorpion sont unis par un trigone d'eau très harmonieux : profondeur émotionnelle, intuition et loyauté partagées. Leur compatibilité est naturellement très forte. Le principal défi est la gestion de leur sensibilité et de leur possessivité communes. La synastrie complète des deux thèmes affine ce beau potentiel." },
      { q: "Pourquoi le Cancer et le Scorpion s'entendent-ils si bien&nbsp;?", a: "Ils partagent l'élément eau et un même besoin de profondeur et de loyauté. Le Scorpion se sent compris par la sensibilité du Cancer, qui se sent protégé par sa force. Leur connexion émotionnelle est intuitive et fusionnelle, fondée sur une confiance rare." },
      { q: "Quel est le plus grand défi du couple Cancer-Scorpion&nbsp;?", a: "Gérer leur sensibilité et leur possessivité communes. Deux signes d'eau susceptibles peuvent se blesser, ressasser et laisser la jalousie étouffer le lien. Le défi est d'exprimer les ressentiments à temps, de cultiver la confiance et de préserver un espace individuel dans la fusion." },
    ],
    related: [sc('cancer', 'Cancer'), sc('scorpion', 'Scorpion'), guideCard, compatCard('scorpion-poissons', 'Scorpion & Poissons')],
  }),

  pair({
    a: 'cancer', b: 'poissons', aspect: 'Trigone (120°)',
    metaTitle: 'Compatibilité Cancer Poissons en amour | Lunestia',
    metaDesc: "Compatibilité Cancer Poissons : deux signes d'eau en tendre résonance, un couple romantique, intuitif et profondément empathique. Dynamique, défis et forces.",
    ogDesc: "Deux signes d'eau en trigone : le romantisme et l'empathie partagés du couple Cancer–Poissons.",
    h1Html: "Compatibilité Cancer & Poissons, le <em>romantisme</em> de l'eau",
    leadHtml: "Cancer et Poissons partagent l'élément eau et un trigone harmonieux. Cette compatibilité Cancer Poissons est celle d'un amour tendre et rêveur : deux âmes sensibles qui se devinent, se consolent et créent ensemble un monde de douceur.",
    sections: [
      { h2: null, paras: [
        "Le <a href=\"/signes/cancer\">Cancer</a> et les <a href=\"/signes/poissons\">Poissons</a> baignent dans une même eau tendre. Reliés par un trigone, ils partagent une sensibilité à fleur de peau, une grande empathie et un romantisme profond. Leur rencontre ressemble souvent à une reconnaissance d'âme : ils se sentent en sécurité l'un avec l'autre dès les premiers instants.",
      ] },
      { h2: 'Cancer et Poissons : la dynamique profonde', paras: [
        "La Lune (Cancer) et Neptune (Poissons) tissent un lien d'une douceur infinie : le besoin de foyer rencontre le désir de fusion spirituelle. Le Cancer, cardinal, protège et fonde ; les Poissons, mutables, dissolvent les frontières dans la compassion. Ensemble, ils créent un cocon où l'on s'aime sans armure.",
        "Les Poissons sont touchés par la tendresse protectrice du Cancer, qui leur offre l'ancrage dont ils manquent ; le Cancer est ému par la compassion sans limites et l'imagination des Poissons. Leur entente est intuitive, presque télépathique — ils se comprennent par le cœur.",
      ] },
      { h2: 'Comment Cancer et Poissons communiquent', paras: [
        "La communication passe surtout par le ressenti, les gestes tendres, l'attention silencieuse. Tous deux captent les émotions de l'autre sans qu'un mot soit nécessaire. Cette intuition partagée crée une intimité douce et un sentiment d'être enfin compris.",
        "Le point de vigilance : tous deux fuient le conflit et peuvent se réfugier dans le non-dit ou l'évitement. Les rancœurs peuvent s'accumuler sous la surface paisible. La clé est d'oser nommer les blessures et de ne pas laisser la peur de heurter l'autre étouffer la vérité.",
      ] },
      { h2: 'L\'alchimie entre Cancer et Poissons', paras: [
        "L'intimité est tendre, romantique et profondément connectée. Le Cancer apporte la chaleur protectrice, les Poissons la sensualité fluide et l'abandon. Leur connexion physique est imprégnée d'émotion et de douceur — c'est un lien des âmes autant que des corps.",
        "Leur alchimie repose sur la confiance et la délicatesse. Le Cancer se sent libre d'aimer sans crainte d'être blessé, les Poissons trouvent enfin quelqu'un qui honore leur sensibilité. Le désir, doux et constant, se nourrit de tendresse plus que d'intensité dramatique.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi majeur est l'ancrage dans le réel. Deux signes d'eau émotifs et rêveurs peuvent manquer de sens pratique, fuir les responsabilités, se laisser submerger par les émotions ou se perdre dans l'idéalisation. Qui gère le concret quand tous deux ont la tête dans les nuages ?",
        "L'autre écueil est l'évitement des conflits, qui laisse les problèmes s'accumuler. La clé de résolution : développer ensemble plus de structure et de réalisme, oser aborder les sujets difficiles, et veiller à ce que la fusion n'efface pas les limites de chacun.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Cancer et Poissons forment l'un des couples les plus tendres et romantiques du zodiaque. Leur empathie mutuelle, leur intuition et leur douceur en font des partenaires qui se comprennent et se consolent comme nuls autres. Leur amour est un havre de paix.",
        "Ensemble, ils créent un monde de tendresse et de compassion — une relation où l'on se sent aimé dans sa vulnérabilité même. Quand ils ajoutent un peu d'ancrage à leur sensibilité partagée, leur lien devient aussi solide que doux.",
      ] },
    ],
    faq: [
      { q: "Cancer et Poissons sont-ils compatibles&nbsp;?", a: "Cancer et Poissons sont reliés par un trigone d'eau très harmonieux : tendresse, empathie et romantisme partagés. Leur compatibilité est naturellement très forte. Le principal défi est l'ancrage dans le concret. La synastrie complète des deux thèmes précise ce beau potentiel." },
      { q: "Pourquoi le Cancer et les Poissons s'entendent-ils si bien&nbsp;?", a: "Ils partagent l'élément eau et une grande sensibilité émotionnelle. Le Cancer offre aux Poissons l'ancrage protecteur dont ils manquent, et les Poissons touchent le Cancer par leur compassion. Leur connexion est intuitive, presque télépathique, fondée sur le cœur." },
      { q: "Quel est le plus grand défi du couple Cancer-Poissons&nbsp;?", a: "S'ancrer dans le réel et gérer le concret. Deux signes d'eau rêveurs peuvent manquer de sens pratique et fuir les responsabilités comme les conflits. Le défi est de développer ensemble plus de structure et d'oser aborder les sujets difficiles." },
    ],
    related: [sc('cancer', 'Cancer'), sc('poissons', 'Poissons'), guideCard, compatCard('cancer-scorpion', 'Cancer & Scorpion')],
  }),

  pair({
    a: 'scorpion', b: 'poissons', aspect: 'Trigone (120°)',
    metaTitle: 'Compatibilité Scorpion Poissons en amour | Lunestia',
    metaDesc: "Compatibilité Scorpion Poissons : deux signes d'eau en intense résonance, un couple magnétique, profond et spirituel. Dynamique, communication, défis et forces.",
    ogDesc: "Deux signes d'eau en trigone : l'intensité et la profondeur spirituelle du couple Scorpion–Poissons.",
    h1Html: "Compatibilité Scorpion & Poissons, l'<em>intensité</em> et le <em>mystère</em>",
    leadHtml: "Scorpion et Poissons partagent l'élément eau et un trigone harmonieux. Cette compatibilité Scorpion Poissons unit la profondeur transformatrice du Scorpion à la compassion océanique des Poissons — un couple magnétique, intense et habité par le mystère.",
    sections: [
      { h2: null, paras: [
        "Le <a href=\"/signes/scorpion\">Scorpion</a> et les <a href=\"/signes/poissons\">Poissons</a> partagent une même profondeur d'âme. Reliés par un trigone d'eau, ils vivent dans l'intensité émotionnelle, l'intuition et le besoin de fusion. Leur rencontre a souvent quelque chose de magique, presque karmique : ils se reconnaissent au-delà des mots.",
      ] },
      { h2: 'Scorpion et Poissons : la dynamique profonde', paras: [
        "Pluton (Scorpion) et Neptune (Poissons) tissent un lien d'une rare profondeur : la transformation rencontre la transcendance. Le Scorpion, fixe, plonge et intensifie ; les Poissons, mutables, dissolvent et embrassent le tout. Ensemble, ils forment un couple émotionnellement et spirituellement connecté, capable d'une intimité quasi mystique.",
        "Le Scorpion est apaisé par la douceur sans jugement des Poissons, qui acceptent ses abîmes ; les Poissons se sentent protégés par la force et la loyauté du Scorpion. Le Scorpion donne aux Poissons une direction et un ancrage, les Poissons adoucissent l'intensité parfois âpre du Scorpion.",
      ] },
      { h2: 'Comment Scorpion et Poissons communiquent', paras: [
        "La communication est profonde et largement intuitive. Tous deux captent les courants émotionnels invisibles et se devinent sans explication. Le Scorpion apporte la lucidité perçante, les Poissons la compassion enveloppante : un échange qui touche les profondeurs de l'être.",
        "Le point de vigilance : le Scorpion peut être contrôlant ou soupçonneux, et les Poissons, fuyants ou évasifs face à la confrontation. Le Scorpion risque de submerger les Poissons par son intensité. La clé est que le Scorpion cultive la confiance plutôt que le contrôle, et que les Poissons osent la clarté plutôt que la fuite.",
      ] },
      { h2: 'L\'alchimie entre Scorpion et Poissons', paras: [
        "L'intimité atteint des sommets de fusion et de profondeur. Le Scorpion, le plus intense des signes, et les Poissons, les plus abandonnés, créent une connexion physique et spirituelle d'une puissance rare. Le désir se nourrit du mystère, de la fusion émotionnelle et d'un sentiment d'union des âmes.",
        "Leur alchimie repose sur l'abandon mutuel. Les Poissons s'offrent sans réserve, le Scorpion se livre comme à nul autre. C'est une intimité totale, où la frontière entre les deux êtres semble s'effacer — pour le meilleur, tant que chacun garde un minimum de soi.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi majeur est l'équilibre entre intensité et stabilité. Le Scorpion peut chercher à contrôler, les Poissons à fuir dans le rêve ou l'évitement ; ensemble, ils peuvent se perdre dans une fusion sans limites ou des drames émotionnels. Le manque d'ancrage commun fragilise le concret.",
        "L'autre écueil est la possible toxicité d'une relation trop fusionnelle : le Scorpion étouffe, les Poissons se sacrifient. La clé de résolution : préserver des limites saines, ancrer la relation dans le réel, et transformer leur intensité commune en croissance plutôt qu'en spirale émotionnelle.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Scorpion et Poissons forment l'un des couples les plus profonds et spirituellement connectés du zodiaque. Leur intuition partagée, leur intensité émotionnelle et leur capacité à se comprendre au plus profond en font des partenaires d'une intimité exceptionnelle.",
        "Ensemble, ils peuvent vivre une transformation mutuelle : le Scorpion guide les Poissons vers la profondeur consciente, les Poissons ouvrent le Scorpion à la compassion et au pardon. Quand ils s'ancrent et se respectent, leur lien devient un voyage d'âme rare et puissant.",
      ] },
    ],
    faq: [
      { q: "Scorpion et Poissons sont-ils compatibles&nbsp;?", a: "Scorpion et Poissons sont unis par un trigone d'eau très harmonieux : profondeur émotionnelle, intuition et intensité partagées. Leur compatibilité est naturellement très forte, presque magnétique. Le principal défi est l'équilibre entre intensité et stabilité. La synastrie complète des deux thèmes affine ce potentiel." },
      { q: "Pourquoi le Scorpion et les Poissons s'entendent-ils si bien&nbsp;?", a: "Ils partagent l'élément eau et une même profondeur d'âme. Le Scorpion est apaisé par la douceur des Poissons, qui se sentent protégés par sa force. Leur connexion est intuitive et spirituelle : le Scorpion ancre les Poissons, les Poissons adoucissent le Scorpion." },
      { q: "Quel est le plus grand défi du couple Scorpion-Poissons&nbsp;?", a: "Équilibrer l'intensité et préserver des limites saines. Le Scorpion peut chercher à contrôler, les Poissons à fuir ; ensemble, ils risquent une fusion excessive ou des drames émotionnels. Le défi est d'ancrer la relation dans le réel et de transformer leur intensité en croissance mutuelle." },
    ],
    related: [sc('scorpion', 'Scorpion'), sc('poissons', 'Poissons'), guideCard, compatCard('cancer-poissons', 'Cancer & Poissons')],
  }),

  // ===================== CARRÉS (90°) — tension créative =====================
  pair({
    a: 'belier', b: 'cancer',
    metaDesc: "Compatibilité Bélier Cancer : un carré entre le feu et l'eau, l'action et l'émotion. Une tension créative entre conquête et besoin de sécurité. Dynamique, défis et forces.",
    ogDesc: "Carré feu/eau : la friction féconde entre l'élan du Bélier et la sensibilité protectrice du Cancer.",
    h1Html: "Compatibilité Bélier & Cancer, le <em>feu</em> contre la <em>marée</em>",
    leadHtml: "Bélier et Cancer forment un carré, l'aspect de la friction créative. Cette compatibilité Bélier Cancer confronte deux signes cardinaux que tout sépare — le feu impulsif et l'eau protectrice — dans une relation qui exige beaucoup mais peut transformer chacun en profondeur.",
    sections: [
      { h2: null, paras: [
        "Quand le <a href=\"/signes/belier\">Bélier</a> rencontre le <a href=\"/signes/cancer\">Cancer</a>, deux signes cardinaux s'affrontent — tous deux veulent initier, mais dans des directions opposées. Le Bélier fonce vers l'extérieur, le Cancer se replie vers l'intérieur. Le feu veut conquérir, l'eau veut protéger. C'est un carré : une tension qui peut user… ou forger, selon ce que chacun accepte d'apprendre de l'autre.",
      ] },
      { h2: 'Bélier et Cancer : la dynamique profonde', paras: [
        "Mars (Bélier) et la Lune (Cancer) sont deux forces archaïques presque opposées : l'instinct de conquête contre l'instinct de protection. Le Bélier agit sans réfléchir aux conséquences émotionnelles ; le Cancer ressent tout et a besoin de sécurité avant d'agir. Le Bélier peut percevoir le Cancer comme trop susceptible, le Cancer peut vivre le Bélier comme brutal et insensible.",
        "Mais cette friction cache une complémentarité possible. Le Cancer apprend du Bélier le courage d'affirmer ses besoins ; le Bélier apprend du Cancer à tenir compte des autres, à ralentir, à ressentir. Le carré ne se résout pas, il se travaille — et c'est précisément ce travail qui fait grandir.",
      ] },
      { h2: 'Comment Bélier et Cancer communiquent', paras: [
        "Le Bélier dit les choses crûment, sans filtre ; le Cancer, indirect, communique par allusions et états d'âme. Le Bélier blesse sans le vouloir, le Cancer se referme dans sa carapace ou la bouderie, ce qui exaspère le Bélier qui ne supporte pas le non-dit.",
        "La clé est le décodage mutuel : le Bélier doit apprendre que la sensibilité du Cancer n'est pas de la faiblesse mais une autre forme de force, et adoucir sa franchise ; le Cancer doit oser dire ce qu'il ressent directement plutôt que de l'attendre. Quand chacun fait ce pas, leur dialogue devient un pont entre deux mondes.",
      ] },
      { h2: "L'alchimie entre Bélier et Cancer", paras: [
        "L'attirance peut être vive : le Bélier est touché par la tendresse et la profondeur du Cancer, qui le change de sa propre dureté ; le Cancer est fasciné par l'énergie et l'audace du Bélier, qui le sort de sa prudence. Dans l'intimité, la fougue du Bélier rencontre le besoin de douceur du Cancer.",
        "L'écueil est le rythme et la sécurité. Le Bélier veut tout, tout de suite ; le Cancer a besoin de se sentir en confiance pour s'ouvrir. Si le Bélier accepte de patienter et le Cancer de lâcher prise, la rencontre du feu et de l'eau peut produire une vapeur intense — passionnée et tendre à la fois.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi central oppose le besoin d'indépendance du Bélier au besoin d'attachement du Cancer. Le Bélier se sent étouffé par la demande affective du Cancer ; le Cancer se sent abandonné par l'autonomie du Bélier. Deux cardinaux, de surcroît, veulent tous deux diriger.",
        "La clé de résolution : le Bélier apprend à rassurer sans se sentir enchaîné, le Cancer à donner de l'espace sans se sentir rejeté. Chacun guérit une blessure de l'autre — le Bélier offre au Cancer le courage, le Cancer offre au Bélier la profondeur émotionnelle qui lui manque.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand ils relèvent le défi, Bélier et Cancer forment un couple étonnamment complet : l'un protège le foyer, l'autre affronte le monde. Le Bélier devient le défenseur de ce que le Cancer chérit ; le Cancer devient le refuge où le Bélier peut enfin déposer ses armes.",
        "Leur force naît précisément de leur différence. Le carré qui les opposait devient un moteur : à condition de s'aimer assez pour traverser les frictions, ils s'apportent mutuellement ce qu'aucun signe semblable n'aurait pu leur offrir.",
      ] },
    ],
    faq: [
      { q: "Bélier et Cancer sont-ils compatibles&nbsp;?", a: "Bélier et Cancer forment un carré, aspect de tension créative entre le feu et l'eau. Leur compatibilité demande du travail : leurs besoins (indépendance contre attachement) s'opposent. Mais cette friction peut devenir un puissant moteur de croissance mutuelle. La synastrie complète des deux thèmes nuance fortement ce portrait." },
      { q: "Pourquoi le Bélier et le Cancer s'attirent-ils malgré leurs différences&nbsp;?", a: "Chacun possède ce qui manque à l'autre : le Bélier admire la profondeur émotionnelle du Cancer, qui est attiré par le courage et l'énergie du Bélier. Le carré crée une tension électrique, faite d'attirance et de friction à la fois — stimulante mais exigeante." },
      { q: "Quel est le plus grand défi du couple Bélier-Cancer&nbsp;?", a: "Concilier le besoin d'indépendance du Bélier avec le besoin de sécurité affective du Cancer. Le Bélier peut se sentir étouffé, le Cancer abandonné. Le défi est que le Bélier rassure sans se sentir enchaîné et que le Cancer accorde de l'espace sans se sentir rejeté." },
    ],
  }),

  pair({
    a: 'taureau', b: 'lion',
    metaDesc: "Compatibilité Taureau Lion : un carré entre deux signes fixes, la terre et le feu. Une tension entre stabilité et rayonnement, deux volontés solides. Dynamique, défis et forces.",
    ogDesc: "Carré terre/feu : la friction entre la stabilité du Taureau et le besoin de briller du Lion, deux têtus magnifiques.",
    h1Html: "Compatibilité Taureau & Lion, deux <em>volontés</em> qui ne plient pas",
    leadHtml: "Taureau et Lion forment un carré entre deux signes fixes. Cette compatibilité Taureau Lion confronte la terre patiente au feu rayonnant — deux tempéraments loyaux et obstinés, capables d'une grande solidité comme d'un bras de fer mémorable.",
    sections: [
      { h2: null, paras: [
        "Le <a href=\"/signes/taureau\">Taureau</a> et le <a href=\"/signes/lion\">Lion</a> partagent une qualité : la fixité. Tous deux sont fidèles, déterminés et… têtus. Mais l'un est terre, l'autre feu. Le Taureau veut la tranquillité et la sécurité ; le Lion veut l'éclat et la reconnaissance. C'est un carré : la rencontre de deux forces qui ne cèdent pas, pour le meilleur comme pour le bras de fer.",
      ] },
      { h2: 'Taureau et Lion : la dynamique profonde', paras: [
        "Vénus (Taureau) et le Soleil (Lion) ont en commun le goût du plaisir et de la beauté, mais l'expriment autrement : le Taureau dans l'intime et le sensoriel, le Lion dans le spectaculaire et le social. Le Lion admire la solidité rassurante du Taureau ; le Taureau est séduit par la chaleur généreuse du Lion.",
        "La friction naît de la fixité partagée : aucun ne lâche. Le Taureau trouve le Lion trop dépensier, trop avide d'attention ; le Lion trouve le Taureau trop terre-à-terre, peu démonstratif. Leur défi est d'apprendre à plier sans se renier — un art que leur nature fixe rend difficile mais profondément formateur.",
      ] },
      { h2: 'Comment Taureau et Lion communiquent', paras: [
        "Le Taureau parle peu et concret, le Lion avec chaleur et panache. Le Lion a besoin d'être admiré et célébré ; le Taureau exprime son amour par les actes plus que par les mots, ce qui peut laisser le Lion sur sa faim de reconnaissance.",
        "Les conflits, entre deux fixes, peuvent s'enliser : le Lion s'emporte puis pardonne vite, le Taureau rumine en silence et se braque. La clé est que le Lion valorise concrètement la fiabilité du Taureau, et que le Taureau offre au Lion les marques d'admiration dont il a besoin. Un peu de souplesse de chaque côté change tout.",
      ] },
      { h2: "L'alchimie entre Taureau et Lion", paras: [
        "L'attirance est sensuelle et chaleureuse : le Taureau apporte la sensualité lente et constante, le Lion la passion généreuse et le sens du romanesque. Tous deux aiment le plaisir, le confort, la beauté — un terrain d'entente charnel réel.",
        "L'écueil tient à leurs rythmes et leurs egos : le Lion veut de la grandeur et de la nouveauté, le Taureau de la régularité rassurante. Si le Lion accepte la tranquillité du Taureau et le Taureau l'exubérance du Lion, leur intimité conjugue chaleur et profondeur dans la durée.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi majeur est l'entêtement mutuel et la question de l'argent et du statut. Le Taureau veut épargner et sécuriser, le Lion veut profiter et briller ; deux volontés fixes peuvent transformer ce désaccord en guerre de tranchées.",
        "La clé de résolution : choisir ses batailles, reconnaître la légitimité du besoin de l'autre, et accepter de céder à tour de rôle. Le Taureau apprend du Lion à oser rayonner et se faire plaisir ; le Lion apprend du Taureau la valeur de la patience et de la constance.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand ils dépassent le bras de fer, Taureau et Lion forment un couple d'une loyauté à toute épreuve. Leur fixité commune, source de conflits, devient un atout : une fois engagés, ils ne lâchent pas. Ils bâtissent une relation solide, chaleureuse et durable.",
        "Le Taureau offre au Lion un socle inébranlable ; le Lion offre au Taureau l'éclat et la joie qui réchauffent sa vie. Ensemble, ils peuvent créer un foyer à la fois somptueux et sécurisant — la terre qui nourrit le feu, le feu qui illumine la terre.",
      ] },
    ],
    faq: [
      { q: "Taureau et Lion sont-ils compatibles&nbsp;?", a: "Taureau et Lion forment un carré entre deux signes fixes : leur compatibilité mêle forte attirance et entêtement réciproque. Loyaux tous les deux, ils peuvent construire du durable s'ils apprennent à céder à tour de rôle. La synastrie complète des deux thèmes affine grandement ce portrait." },
      { q: "Pourquoi le Taureau et le Lion s'opposent-ils parfois&nbsp;?", a: "Tous deux sont des signes fixes, donc déterminés et peu enclins à céder. Le Taureau cherche la sécurité et l'économie, le Lion l'éclat et le plaisir. Ce choc de priorités, entre deux volontés qui ne plient pas, peut tourner au bras de fer si aucun ne fait le premier pas." },
      { q: "Quel est le plus grand défi du couple Taureau-Lion&nbsp;?", a: "L'entêtement mutuel, souvent autour de l'argent et du statut. Le défi est de reconnaître la légitimité du besoin de l'autre — sécurité pour le Taureau, reconnaissance pour le Lion — et d'accepter de céder à tour de rôle plutôt que de camper sur ses positions." },
    ],
  }),

  pair({
    a: 'gemeaux', b: 'vierge',
    metaDesc: "Compatibilité Gémeaux Vierge : un carré entre deux signes de Mercure, l'air et la terre. Le jeu d'esprit contre la rigueur du détail. Dynamique, défis et forces du couple.",
    ogDesc: "Carré air/terre sous Mercure : la friction stimulante entre la curiosité des Gémeaux et la précision de la Vierge.",
    h1Html: "Compatibilité Gémeaux & Vierge, deux <em>Mercure</em> qui se cherchent",
    leadHtml: "Gémeaux et Vierge forment un carré, mais partagent la même planète : Mercure. Cette compatibilité Gémeaux Vierge confronte deux esprits vifs aux usages opposés — l'un disperse, l'autre ordonne — dans une relation où l'intelligence rencontre l'exigence.",
    sections: [
      { h2: null, paras: [
        "Les <a href=\"/signes/gemeaux\">Gémeaux</a> et la <a href=\"/signes/vierge\">Vierge</a> sont tous deux gouvernés par Mercure, mais l'expriment de façon opposée. Les Gémeaux (air) jouent avec les idées, papillonnent, improvisent ; la Vierge (terre) trie, perfectionne, ordonne. C'est un carré entre deux mutables : beaucoup de mouvement, beaucoup de mental — et un risque de friction permanente entre la légèreté de l'un et la rigueur de l'autre.",
      ] },
      { h2: 'Gémeaux et Vierge : la dynamique profonde', paras: [
        "Même planète, deux philosophies. Les Gémeaux veulent tout explorer sans s'attarder ; la Vierge veut tout maîtriser dans le détail. La Vierge admire la vivacité et l'aisance sociale des Gémeaux ; les Gémeaux sont impressionnés par la compétence et le sérieux de la Vierge.",
        "La friction est inévitable : la Vierge trouve les Gémeaux superficiels et brouillons, les Gémeaux trouvent la Vierge pointilleuse et anxieuse. Mais leur amour commun des mots et des idées offre un terrain d'entente, à condition que chacun respecte le mode mental de l'autre plutôt que de vouloir le corriger.",
      ] },
      { h2: 'Comment Gémeaux et Vierge communiquent', paras: [
        "C'est à la fois leur force et leur champ de bataille. Tous deux adorent parler, analyser, débattre — la conversation ne tarit jamais. Mais les Gémeaux improvisent et exagèrent, la Vierge corrige et nuance, ce qui peut virer à l'agacement réciproque.",
        "La clé est la bienveillance : la Vierge doit lâcher du lest sur les imprécisions des Gémeaux, et les Gémeaux prendre au sérieux le besoin de justesse de la Vierge. Quand ils s'écoutent au lieu de se reprendre, leur échange devient une stimulation intellectuelle rare.",
      ] },
      { h2: "L'alchimie entre Gémeaux et Vierge", paras: [
        "L'attirance est d'abord mentale : ils se séduisent par l'esprit, l'humour, la curiosité partagée. Dans l'intimité, les Gémeaux apportent le jeu et la légèreté, la Vierge l'attention et le soin du détail. Ni l'un ni l'autre n'est dans l'intensité dramatique — leur connexion est fine, cérébrale, complice.",
        "L'écueil est l'excès de mental : tous deux peuvent rester dans la tête et négliger le corps et l'émotion. La Vierge a besoin de confiance pour se détendre, les Gémeaux de nouveauté pour rester présents. S'ils sortent du mental ensemble, leur intimité gagne en chaleur.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi central est la critique et l'anxiété. La Vierge, perfectionniste, peut reprendre sans cesse les Gémeaux qui le vivent comme un jugement ; les Gémeaux, insaisissables, peuvent alimenter l'inquiétude de la Vierge qui a besoin de fiabilité. Deux mutables, de plus, peinent parfois à trancher et à s'ancrer.",
        "La clé de résolution : la Vierge transforme la critique en encouragement, les Gémeaux offrent à la Vierge la régularité qui la rassure. Chacun apprend de l'autre — la Vierge à se détendre, les Gémeaux à approfondir.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand ils s'ajustent, Gémeaux et Vierge forment un couple intellectuellement brillant et complémentaire. Les Gémeaux apportent les idées et l'ouverture, la Vierge la méthode et la mise en œuvre : ensemble, ils peuvent concrétiser ce que d'autres se contentent d'imaginer.",
        "Leur double Mercure, source de friction, devient une complicité d'esprit profonde : ils se comprennent vite, se font rire, s'enrichissent mutuellement. La tension du carré se mue en dialogue fécond entre la curiosité et la précision.",
      ] },
    ],
    faq: [
      { q: "Gémeaux et Vierge sont-ils compatibles&nbsp;?", a: "Gémeaux et Vierge forment un carré, mais partagent Mercure : leur compatibilité repose sur une forte complicité mentale doublée d'une friction entre légèreté et rigueur. Avec de la bienveillance, le couple devient brillant et complémentaire. La synastrie complète des deux thèmes précise ce portrait." },
      { q: "Pourquoi les Gémeaux et la Vierge se heurtent-ils&nbsp;?", a: "Tous deux gouvernés par Mercure, ils utilisent leur intelligence de façon opposée : les Gémeaux improvisent et dispersent, la Vierge ordonne et perfectionne. La Vierge trouve les Gémeaux brouillons, les Gémeaux trouvent la Vierge pointilleuse — d'où une friction mentale permanente." },
      { q: "Quel est le plus grand défi du couple Gémeaux-Vierge&nbsp;?", a: "La critique et l'anxiété. La Vierge peut sans cesse corriger les Gémeaux, qui peuvent nourrir son inquiétude par leur imprévisibilité. Le défi est que la Vierge transforme la critique en encouragement et que les Gémeaux offrent un peu de fiabilité rassurante." },
    ],
  }),

  pair({
    a: 'cancer', b: 'balance',
    metaDesc: "Compatibilité Cancer Balance : un carré entre l'eau et l'air, deux signes cardinaux en quête d'harmonie. L'émotion contre la diplomatie. Dynamique, défis et forces du couple.",
    ogDesc: "Carré eau/air : la friction délicate entre le besoin de foyer du Cancer et l'art relationnel de la Balance.",
    h1Html: "Compatibilité Cancer & Balance, le <em>cœur</em> et le <em>tact</em>",
    leadHtml: "Cancer et Balance forment un carré entre deux signes cardinaux épris d'harmonie. Cette compatibilité Cancer Balance confronte l'eau émotionnelle à l'air diplomate — deux manières d'aimer la paix qui, paradoxalement, peuvent se heurter.",
    sections: [
      { h2: null, paras: [
        "Le <a href=\"/signes/cancer\">Cancer</a> et la <a href=\"/signes/balance\">Balance</a> ont un point commun : ils détestent le conflit et recherchent l'harmonie. Mais le Cancer la cherche dans l'intimité du foyer, la Balance dans l'équilibre des relations sociales. C'est un carré entre deux cardinaux : deux volontés d'initier la paix… qui ne s'y prennent pas du tout de la même manière.",
      ] },
      { h2: 'Cancer et Balance : la dynamique profonde', paras: [
        "La Lune (Cancer) et Vénus (Balance) sont deux planètes du lien, mais l'une est émotionnelle et l'autre relationnelle. Le Cancer aime en protégeant, en nourrissant, en se liant viscéralement ; la Balance aime en charmant, en équilibrant, en gardant une certaine distance esthétique. La Balance est touchée par la tendresse du Cancer, le Cancer par l'élégance et la douceur de la Balance.",
        "La friction naît de leurs besoins : le Cancer veut de la profondeur émotionnelle et de l'exclusivité, la Balance de la légèreté et de la vie sociale. Le Cancer peut trouver la Balance superficielle ou trop tournée vers les autres ; la Balance peut trouver le Cancer envahissant ou lunatique.",
      ] },
      { h2: 'Comment Cancer et Balance communiquent', paras: [
        "Tous deux fuient l'affrontement, ce qui peut sembler idéal mais crée un piège : les non-dits s'accumulent. Le Cancer boude et se referme, la Balance lisse et évite — les vrais problèmes restent sous le tapis.",
        "La clé est d'oser la franchise affectueuse. Le Cancer doit exprimer ses besoins au lieu de les laisser deviner, la Balance doit cesser de tout arrondir pour préserver une fausse paix. Quand ils nomment les choses, leur commun amour de l'harmonie devient une vraie force de réconciliation.",
      ] },
      { h2: "L'alchimie entre Cancer et Balance", paras: [
        "L'attirance est tendre et romantique : le Cancer apporte la chaleur et l'attention, la Balance la séduction et le raffinement. Tous deux apprécient les attentions, les ambiances douces, les gestes délicats.",
        "L'écueil tient à la sécurité émotionnelle : le Cancer a besoin d'être rassuré et de sentir l'exclusivité du lien, la Balance a besoin d'air et de légèreté. Si la Balance offre au Cancer la réassurance qu'il réclame et le Cancer accorde à la Balance sa liberté sociale, leur intimité devient un cocon élégant.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi central oppose le besoin de fusion du Cancer à la sociabilité de la Balance. Le Cancer peut se sentir négligé quand la Balance brille en société ; la Balance peut se sentir oppressée par le besoin d'intimité du Cancer. Deux cardinaux, de plus, veulent chacun mener la danse relationnelle.",
        "La clé de résolution : la Balance rassure le Cancer par sa présence et sa fidélité, le Cancer respecte le besoin de monde de la Balance. Chacun apprend de l'autre — le Cancer à prendre du recul émotionnel, la Balance à plonger dans la profondeur du lien.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand ils dépassent les non-dits, Cancer et Balance créent une relation d'une grande douceur. Tous deux soignent le lien, l'esthétique, l'attention à l'autre : leur foyer peut être à la fois chaleureux et raffiné, un lieu où l'on prend soin.",
        "Leur amour commun de l'harmonie, source de fuite quand il est mal géré, devient leur plus grand atout dès qu'ils osent la vérité. Le Cancer apporte la profondeur, la Balance la grâce — ensemble, un équilibre tendre entre le cœur et le tact.",
      ] },
    ],
    faq: [
      { q: "Cancer et Balance sont-ils compatibles&nbsp;?", a: "Cancer et Balance forment un carré entre deux signes cardinaux qui aiment l'harmonie mais la cherchent différemment. Leur compatibilité est tendre mais sujette aux non-dits. Si chacun ose la franchise, le couple devient doux et raffiné. La synastrie complète des deux thèmes nuance ce portrait." },
      { q: "Pourquoi le Cancer et la Balance se heurtent-ils&nbsp;?", a: "Le Cancer cherche l'harmonie dans l'intimité et l'exclusivité, la Balance dans la vie sociale et l'équilibre relationnel. Le Cancer peut trouver la Balance trop tournée vers les autres, la Balance peut trouver le Cancer envahissant. Fuyant tous deux le conflit, ils laissent les non-dits s'accumuler." },
      { q: "Quel est le plus grand défi du couple Cancer-Balance&nbsp;?", a: "Concilier le besoin de fusion du Cancer avec la sociabilité de la Balance, et oser la franchise. Le défi est que la Balance rassure le Cancer par sa fidélité et que le Cancer accorde à la Balance la liberté sociale dont elle a besoin." },
    ],
  }),

  pair({
    a: 'lion', b: 'scorpion',
    metaDesc: "Compatibilité Lion Scorpion : un carré entre deux signes fixes, le feu et l'eau. Une attraction magnétique et un combat de pouvoir intense. Dynamique, défis et forces du couple.",
    ogDesc: "Carré feu/eau entre deux fixes : l'attraction brûlante et la lutte de pouvoir entre le Lion et le Scorpion.",
    h1Html: "Compatibilité Lion & Scorpion, le <em>feu</em> et les <em>abysses</em>",
    leadHtml: "Lion et Scorpion forment un carré entre deux signes fixes d'une intensité rare. Cette compatibilité Lion Scorpion mêle attraction magnétique et lutte de pouvoir — un couple passionné où deux volontés de fer s'affrontent autant qu'elles se désirent.",
    sections: [
      { h2: null, paras: [
        "Le <a href=\"/signes/lion\">Lion</a> et le <a href=\"/signes/scorpion\">Scorpion</a> sont deux des signes les plus puissants du zodiaque, tous deux fixes, tous deux intenses. Le Lion (feu) règne par la lumière, le Scorpion (eau) par la profondeur. C'est un carré explosif : une attraction immédiate doublée d'un combat sourd pour le contrôle. Rien de tiède entre ces deux-là.",
      ] },
      { h2: 'Lion et Scorpion : la dynamique profonde', paras: [
        "Le Soleil (Lion) et Pluton (Scorpion) incarnent deux formes de puissance : la souveraineté éclatante contre la maîtrise souterraine. Le Lion veut rayonner et être admiré ouvertement ; le Scorpion veut comprendre, posséder et transformer en profondeur. Ils se reconnaissent comme des égaux — et c'est ce qui crée à la fois la fascination et la rivalité.",
        "La friction est inévitable : le Lion vit le Scorpion comme trop secret et contrôlant, le Scorpion vit le Lion comme trop centré sur lui-même et avide d'attention. Deux fixes ne lâchent rien : leurs conflits peuvent devenir des bras de fer mémorables. Mais leur intensité commune les comprend.",
      ] },
      { h2: 'Comment Lion et Scorpion communiquent', paras: [
        "Le Lion communique ouvertement, avec chaleur et fierté ; le Scorpion par sous-entendus, regards et silences chargés. Le Lion étale, le Scorpion dissimule. Le Lion peut être blessé par le mystère du Scorpion, qui peut mépriser le besoin de validation du Lion.",
        "La clé est la confiance et le respect mutuel. Le Scorpion doit cesser de tester et de contrôler, le Lion d'exiger l'admiration. Quand ils s'accordent leur souveraineté respective — l'un sur la lumière, l'autre sur la profondeur — leur échange devient d'une rare intensité.",
      ] },
      { h2: "L'alchimie entre Lion et Scorpion", paras: [
        "C'est sur le plan de la passion que ce couple brûle le plus fort. Le Lion apporte l'ardeur généreuse et le romanesque, le Scorpion l'intensité fusionnelle et le magnétisme. Le désir entre eux est puissant, presque obsessionnel — l'un des couples les plus charnels du zodiaque.",
        "L'écueil est la jalousie et le pouvoir : le Scorpion possessif face au Lion qui aime séduire et briller. Si le Lion rassure la loyauté du Scorpion et le Scorpion accorde au Lion sa lumière sans la jalouser, leur intimité devient un feu profond, à la fois éclatant et abyssal.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi majeur est la lutte de pouvoir. Deux signes fixes habitués à dominer s'affrontent : le Lion veut régner ouvertement, le Scorpion veut contrôler en coulisses. La jalousie et l'orgueil peuvent transformer l'amour en guerre.",
        "La clé de résolution : reconnaître que chacun règne sur un territoire différent, abandonner le besoin de vaincre l'autre. Le Lion apprend du Scorpion la profondeur et l'introspection, le Scorpion apprend du Lion la générosité et la lumière. Le pouvoir partagé remplace le pouvoir disputé.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand ils cessent de se combattre, Lion et Scorpion forment un couple d'une force redoutable. Leur loyauté de fixes est totale, leur passion durable, leur intensité commune un lien que peu de couples connaissent. Une fois alliés plutôt qu'adversaires, ils sont quasi invincibles.",
        "Le Lion offre au Scorpion la chaleur et la confiance qui apaisent ses abîmes ; le Scorpion offre au Lion une profondeur et une intimité qui dépassent l'éclat de surface. Le carré qui les opposait devient une alliance de deux souverains.",
      ] },
    ],
    faq: [
      { q: "Lion et Scorpion sont-ils compatibles&nbsp;?", a: "Lion et Scorpion forment un carré entre deux signes fixes très puissants : leur compatibilité mêle attraction magnétique et lutte de pouvoir. Passionnés et loyaux, ils peuvent former un couple redoutable s'ils renoncent à vouloir se dominer. La synastrie complète des deux thèmes nuance fortement ce portrait." },
      { q: "Pourquoi le Lion et le Scorpion s'attirent-ils autant&nbsp;?", a: "Ils se reconnaissent comme des égaux en puissance et en intensité. Le Lion est intrigué par le magnétisme mystérieux du Scorpion, qui est attiré par la vitalité éclatante du Lion. Cette fascination mutuelle, doublée d'une tension de carré, crée une alchimie brûlante." },
      { q: "Quel est le plus grand défi du couple Lion-Scorpion&nbsp;?", a: "La lutte de pouvoir et la jalousie. Deux signes fixes habitués à dominer peuvent transformer l'amour en bras de fer. Le défi est de reconnaître que chacun règne sur un territoire distinct et de renoncer au besoin de vaincre l'autre." },
    ],
  }),

  pair({
    a: 'vierge', b: 'sagittaire',
    metaDesc: "Compatibilité Vierge Sagittaire : un carré entre la terre et le feu, deux signes mutables. Le détail contre la vision, la prudence contre l'aventure. Dynamique, défis et forces.",
    ogDesc: "Carré terre/feu entre deux mutables : la friction entre la prudence de la Vierge et l'élan du Sagittaire.",
    h1Html: "Compatibilité Vierge & Sagittaire, le <em>détail</em> et l'<em>horizon</em>",
    leadHtml: "Vierge et Sagittaire forment un carré entre deux signes mutables. Cette compatibilité Vierge Sagittaire confronte la terre méticuleuse au feu aventurier — la prudence et l'expansion, le souci du détail et la soif d'horizon.",
    sections: [
      { h2: null, paras: [
        "La <a href=\"/signes/vierge\">Vierge</a> et le <a href=\"/signes/sagittaire\">Sagittaire</a> sont tous deux mutables — adaptables, mobiles, en mouvement — mais dans des directions opposées. La Vierge (terre) affine, vérifie, reste prudente ; le Sagittaire (feu) voit grand, prend des risques, embrasse l'horizon. C'est un carré : la rencontre du microscope et du télescope.",
      ] },
      { h2: 'Vierge et Sagittaire : la dynamique profonde', paras: [
        "Mercure (Vierge) et Jupiter (Sagittaire) s'opposent comme la contraction et l'expansion : l'un rétrécit le champ pour perfectionner, l'autre l'élargit pour explorer. La Vierge admire l'optimisme et la liberté du Sagittaire ; le Sagittaire est rassuré par la compétence et la fiabilité de la Vierge.",
        "La friction est nette : la Vierge trouve le Sagittaire imprudent, désordonné, trop sûr de ses grandes idées ; le Sagittaire trouve la Vierge tatillonne, anxieuse, enfermée dans les détails. Leur défi est de voir que l'un sans l'autre est incomplet — la vision sans la rigueur s'égare, la rigueur sans la vision s'étouffe.",
      ] },
      { h2: 'Comment Vierge et Sagittaire communiquent', paras: [
        "La Vierge nuance, précise, relève les failles ; le Sagittaire affirme, généralise, voit l'ensemble. Le Sagittaire peut blesser la Vierge par sa franchise désinvolte ; la Vierge peut éteindre l'enthousiasme du Sagittaire par ses objections.",
        "La clé est la complémentarité assumée : la Vierge apporte les faits qui solidifient les visions du Sagittaire, le Sagittaire apporte le sens qui donne une direction au travail de la Vierge. Quand ils cessent de se corriger pour s'enrichir, leur dialogue devient remarquablement constructif.",
      ] },
      { h2: "L'alchimie entre Vierge et Sagittaire", paras: [
        "L'attirance naît de la curiosité : la Vierge est séduite par l'audace joyeuse du Sagittaire, qui la sort de sa réserve ; le Sagittaire est touché par l'attention dévouée de la Vierge. Dans l'intimité, le Sagittaire apporte la fantaisie, la Vierge le soin.",
        "L'écueil tient aux rythmes et aux besoins : le Sagittaire veut spontanéité et liberté, la Vierge confiance et régularité. Si le Sagittaire ralentit pour rassurer la Vierge et la Vierge ose lâcher prise, leur intimité conjugue tendresse et aventure.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi central oppose la prudence de la Vierge à l'insouciance du Sagittaire. La Vierge planifie, économise, anticipe ; le Sagittaire improvise, dépense, fonce. Deux mutables, de plus, peuvent manquer d'ancrage et de constance pour traverser les tensions.",
        "La clé de résolution : la Vierge apprend du Sagittaire à dédramatiser et à oser, le Sagittaire apprend de la Vierge à structurer et à finir ce qu'il commence. Le respect du tempérament de l'autre transforme la friction en équilibre.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand ils s'ajustent, Vierge et Sagittaire forment une équipe étonnamment complète : la vision et l'exécution, l'audace et la rigueur. Le Sagittaire ouvre des horizons, la Vierge les rend réalisables — ensemble, ils accomplissent ce que ni l'un ni l'autre ne pourrait seul.",
        "Leur croissance mutuelle est le cœur de ce couple : la Vierge s'allège au contact du Sagittaire, le Sagittaire mûrit au contact de la Vierge. La tension du carré devient un moteur d'évolution réciproque.",
      ] },
    ],
    faq: [
      { q: "Vierge et Sagittaire sont-ils compatibles&nbsp;?", a: "Vierge et Sagittaire forment un carré entre deux signes mutables que tout oppose : prudence contre aventure, détail contre vision. Leur compatibilité demande des ajustements, mais leur complémentarité peut devenir une vraie force. La synastrie complète des deux thèmes nuance ce portrait." },
      { q: "Pourquoi la Vierge et le Sagittaire se heurtent-ils&nbsp;?", a: "La Vierge est prudente, méthodique et soucieuse du détail ; le Sagittaire est audacieux, optimiste et tourné vers l'horizon. La Vierge trouve le Sagittaire imprudent, le Sagittaire trouve la Vierge tatillonne. Leur rapport au risque et au détail s'oppose frontalement." },
      { q: "Quel est le plus grand défi du couple Vierge-Sagittaire&nbsp;?", a: "Concilier la prudence de la Vierge avec l'insouciance du Sagittaire. Le défi est que la Vierge apprenne à dédramatiser et à oser, et que le Sagittaire apprenne à structurer et à rassurer — chacun s'enrichissant du tempérament de l'autre." },
    ],
  }),

  pair({
    a: 'balance', b: 'capricorne',
    metaDesc: "Compatibilité Balance Capricorne : un carré entre l'air et la terre, deux signes cardinaux. La relation contre l'ambition, la douceur contre la rigueur. Dynamique, défis et forces.",
    ogDesc: "Carré air/terre entre deux cardinaux : la friction entre l'art relationnel de la Balance et l'ambition du Capricorne.",
    h1Html: "Compatibilité Balance & Capricorne, la <em>grâce</em> et la <em>structure</em>",
    leadHtml: "Balance et Capricorne forment un carré entre deux signes cardinaux. Cette compatibilité Balance Capricorne confronte l'air relationnel à la terre ambitieuse — le charme et le devoir, la légèreté et la gravité — dans un couple qui doit apprendre à conjuguer plaisir et sérieux.",
    sections: [
      { h2: null, paras: [
        "La <a href=\"/signes/balance\">Balance</a> et le <a href=\"/signes/capricorne\">Capricorne</a> sont deux cardinaux qui veulent construire — mais l'une construit des relations, l'autre des réussites. La Balance (air) cherche l'harmonie et la beauté ; le Capricorne (terre) cherche l'accomplissement et la sécurité. C'est un carré entre deux bâtisseurs aux matériaux opposés.",
      ] },
      { h2: 'Balance et Capricorne : la dynamique profonde', paras: [
        "Vénus (Balance) et Saturne (Capricorne) sont presque des contraires : le plaisir et la contrainte, le charme et l'austérité. La Balance admire la solidité et l'ambition du Capricorne, qui inspire confiance ; le Capricorne est séduit par la grâce et l'aisance sociale de la Balance, qui adoucit son monde.",
        "La friction naît de leurs priorités : la Balance veut du temps pour la relation, la vie sociale, la beauté ; le Capricorne se consacre au travail et aux objectifs. La Balance peut trouver le Capricorne froid et rigide ; le Capricorne peut trouver la Balance frivole ou indécise.",
      ] },
      { h2: 'Comment Balance et Capricorne communiquent', paras: [
        "La Balance communique avec tact, diplomatie et nuance ; le Capricorne avec sobriété, franchise et pragmatisme. Le Capricorne peut sembler sec à la Balance, qui peut sembler évasive au Capricorne. Leurs registres émotionnels diffèrent.",
        "La clé est la traduction : la Balance doit comprendre que le Capricorne exprime son engagement par les actes plus que par les mots doux, et le Capricorne doit reconnaître le besoin de la Balance d'attentions et de dialogue. Leur entente repose sur le respect des langages de l'autre.",
      ] },
      { h2: "L'alchimie entre Balance et Capricorne", paras: [
        "L'attirance peut naître d'une fascination pour l'opposé : la Balance, légère, est intriguée par la maîtrise du Capricorne ; le Capricorne, sérieux, est attiré par le charme et la chaleur sociale de la Balance. Dans l'intimité, la Balance apporte la sensualité raffinée, le Capricorne une profondeur contenue qui se révèle avec le temps.",
        "L'écueil est le rythme : la Balance veut de la romance et de la légèreté, le Capricorne se livre lentement et privilégie le concret. Si le Capricorne se rend disponible et la Balance accepte la pudeur du Capricorne, leur intimité gagne en profondeur durable.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi central oppose le besoin de relation de la Balance à l'absorption du Capricorne dans le travail. La Balance peut se sentir délaissée, le Capricorne peut juger la Balance peu sérieuse. Deux cardinaux, de plus, veulent chacun diriger à leur façon.",
        "La clé de résolution : le Capricorne consacre du temps réel à la relation, la Balance soutient l'ambition du Capricorne sans s'y sacrifier. Chacun équilibre l'autre — la Balance apporte la douceur de vivre, le Capricorne la structure qui sécurise.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand ils s'accordent, Balance et Capricorne forment un couple à la fois élégant et solide. Le Capricorne offre à la Balance la stabilité et la sécurité qui apaisent son indécision ; la Balance offre au Capricorne la chaleur, la beauté et le lien qui réchauffent sa rigueur.",
        "Leur complémentarité couvre l'extérieur et l'intérieur : le Capricorne bâtit le cadre matériel, la Balance en fait un lieu harmonieux. La tension du carré se transforme en partenariat équilibré entre l'ambition et l'art de vivre.",
      ] },
    ],
    faq: [
      { q: "Balance et Capricorne sont-ils compatibles&nbsp;?", a: "Balance et Capricorne forment un carré entre deux signes cardinaux aux priorités opposées : relation contre ambition. Leur compatibilité demande des ajustements, mais leur complémentarité — grâce et structure — peut donner un couple élégant et solide. La synastrie complète des deux thèmes nuance ce portrait." },
      { q: "Pourquoi la Balance et le Capricorne se heurtent-ils&nbsp;?", a: "La Balance privilégie la relation, la beauté et la vie sociale ; le Capricorne, le travail et les objectifs. La Balance peut trouver le Capricorne froid et rigide, le Capricorne peut trouver la Balance frivole ou indécise. Leurs priorités de vie divergent." },
      { q: "Quel est le plus grand défi du couple Balance-Capricorne&nbsp;?", a: "Concilier le besoin de relation de la Balance avec l'investissement du Capricorne dans le travail. Le défi est que le Capricorne consacre du temps réel au couple et que la Balance soutienne son ambition sans s'y sacrifier ni se sentir délaissée." },
    ],
  }),

  pair({
    a: 'scorpion', b: 'verseau',
    metaDesc: "Compatibilité Scorpion Verseau : un carré entre deux signes fixes, l'eau et l'air. L'intensité émotionnelle contre le détachement, deux volontés inflexibles. Dynamique et défis.",
    ogDesc: "Carré eau/air entre deux fixes : la friction entre l'intensité du Scorpion et l'indépendance du Verseau.",
    h1Html: "Compatibilité Scorpion & Verseau, la <em>passion</em> et la <em>distance</em>",
    leadHtml: "Scorpion et Verseau forment un carré entre deux signes fixes inflexibles. Cette compatibilité Scorpion Verseau confronte l'eau profonde à l'air détaché — la fusion émotionnelle contre la liberté — dans une relation aussi fascinante que tendue.",
    sections: [
      { h2: null, paras: [
        "Le <a href=\"/signes/scorpion\">Scorpion</a> et le <a href=\"/signes/verseau\">Verseau</a> partagent la fixité : déterminés, fidèles à leurs convictions, peu enclins à céder. Mais le Scorpion (eau) vit dans l'intensité émotionnelle et la fusion, le Verseau (air) dans les idées et l'indépendance. C'est un carré entre la chaleur des abysses et la fraîcheur des cimes.",
      ] },
      { h2: 'Scorpion et Verseau : la dynamique profonde', paras: [
        "Pluton (Scorpion) et Uranus (Verseau) sont deux planètes de transformation, mais l'une opère dans l'intime et l'autre dans le collectif. Le Scorpion veut tout connaître de l'autre, fusionner, posséder ; le Verseau veut garder sa liberté, sa distance, son espace mental. Le Verseau est intrigué par la profondeur du Scorpion, le Scorpion par l'originalité insaisissable du Verseau.",
        "La friction est forte : le Scorpion vit le détachement du Verseau comme une froideur insupportable, le Verseau vit l'intensité du Scorpion comme un envahissement. Deux fixes ne plient pas : leurs conflits peuvent devenir des impasses glaciales d'un côté, brûlantes de l'autre.",
      ] },
      { h2: 'Comment Scorpion et Verseau communiquent', paras: [
        "Le Scorpion communique par l'émotion, l'intuition, les profondeurs ; le Verseau par la raison, les idées, le recul. Le Scorpion cherche à sonder, le Verseau à comprendre objectivement. Le Scorpion peut trouver le Verseau désincarné, le Verseau peut trouver le Scorpion trop intense et possessif.",
        "La clé est le respect de l'altérité : le Scorpion doit accepter que le Verseau aime sans fusionner, le Verseau reconnaître que le Scorpion a besoin de profondeur émotionnelle. Quand ils cessent de vouloir convertir l'autre à leur mode, leur échange peut devenir étonnamment riche.",
      ] },
      { h2: "L'alchimie entre Scorpion et Verseau", paras: [
        "L'attirance est magnétique et étrange : deux êtres puissants que tout sépare et qui se fascinent. Le Scorpion apporte l'intensité brûlante, le Verseau l'inventivité et la surprise. Le désir naît du mystère et du défi que chacun représente pour l'autre.",
        "L'écueil est central : le Scorpion veut la fusion, le Verseau l'espace. La jalousie du Scorpion se heurte au besoin de liberté du Verseau. Si le Scorpion apprend à faire confiance sans contrôler et le Verseau à s'engager émotionnellement, leur intimité devient un lien hors norme.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi majeur oppose la possessivité du Scorpion à l'indépendance du Verseau. Le Scorpion a besoin d'exclusivité et de profondeur ; le Verseau a besoin de liberté et de distance. Deux fixes campent sur leurs positions, et l'incompréhension peut s'installer durablement.",
        "La clé de résolution : le Scorpion travaille sa confiance et renonce au contrôle, le Verseau apprend à offrir de la présence émotionnelle. Chacun a beaucoup à apprendre de l'autre — le Verseau la profondeur, le Scorpion le détachement sain.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand ils franchissent le fossé, Scorpion et Verseau forment un couple intense et profondément transformateur. Tous deux sont loyaux et déterminés ; une fois engagés, ils tiennent. Leur différence devient une fascination durable plutôt qu'une source de conflit.",
        "Le Verseau apprend au Scorpion à respirer, à prendre du recul, à ne pas tout vivre dans l'absolu ; le Scorpion apprend au Verseau à ressentir, à s'attacher, à plonger. Le carré qui les opposait devient un voyage de transformation mutuelle.",
      ] },
    ],
    faq: [
      { q: "Scorpion et Verseau sont-ils compatibles&nbsp;?", a: "Scorpion et Verseau forment un carré entre deux signes fixes inflexibles : leur compatibilité oppose l'intensité émotionnelle du Scorpion à l'indépendance du Verseau. Fascinés l'un par l'autre, ils peuvent former un couple transformateur s'ils respectent leurs différences. La synastrie complète des deux thèmes nuance ce portrait." },
      { q: "Pourquoi le Scorpion et le Verseau se heurtent-ils&nbsp;?", a: "Le Scorpion veut la fusion, l'exclusivité et la profondeur émotionnelle ; le Verseau veut la liberté, la distance et l'espace mental. Le Scorpion vit le détachement du Verseau comme une froideur, le Verseau vit l'intensité du Scorpion comme un envahissement." },
      { q: "Quel est le plus grand défi du couple Scorpion-Verseau&nbsp;?", a: "Concilier la possessivité du Scorpion avec l'indépendance du Verseau. Le défi est que le Scorpion renonce au contrôle et travaille sa confiance, et que le Verseau offre une vraie présence émotionnelle plutôt que de se réfugier dans la distance." },
    ],
  }),

  pair({
    a: 'sagittaire', b: 'poissons',
    metaDesc: "Compatibilité Sagittaire Poissons : un carré entre le feu et l'eau, deux signes mutables. La quête de sens contre le rêve, l'aventure contre la compassion. Dynamique, défis et forces.",
    ogDesc: "Carré feu/eau entre deux mutables : la friction rêveuse entre la foi du Sagittaire et la compassion des Poissons.",
    h1Html: "Compatibilité Sagittaire & Poissons, la <em>quête</em> et le <em>rêve</em>",
    leadHtml: "Sagittaire et Poissons forment un carré entre deux signes mutables, autrefois tous deux régis par Jupiter. Cette compatibilité Sagittaire Poissons mêle la quête de sens du feu à la compassion de l'eau — deux idéalistes qui peinent parfois à atterrir ensemble.",
    sections: [
      { h2: null, paras: [
        "Le <a href=\"/signes/sagittaire\">Sagittaire</a> et les <a href=\"/signes/poissons\">Poissons</a> partagent une dimension spirituelle et un héritage commun : l'astrologie traditionnelle les rattachait tous deux à Jupiter. Mais le Sagittaire (feu) cherche le sens dans l'aventure et la vérité, les Poissons (eau) dans la fusion et la compassion. C'est un carré entre deux quêtes d'absolu qui ne prennent pas le même chemin.",
      ] },
      { h2: 'Sagittaire et Poissons : la dynamique profonde', paras: [
        "Jupiter (Sagittaire) et Neptune (Poissons) sont deux planètes d'expansion et d'idéal : l'une élargit vers l'extérieur et le savoir, l'autre dissout vers l'intérieur et l'unité. Le Sagittaire est touché par la sensibilité et l'imagination des Poissons ; les Poissons sont inspirés par l'optimisme et la foi du Sagittaire.",
        "La friction naît de leurs tempéraments : le Sagittaire est direct, franc, parfois brusque ; les Poissons sont fluides, fuyants, hypersensibles. Le Sagittaire peut blesser les Poissons par sa franchise, les Poissons peuvent dérouter le Sagittaire par leur flou et leur émotivité. Deux mutables, de plus, manquent parfois d'ancrage commun.",
      ] },
      { h2: 'Comment Sagittaire et Poissons communiquent', paras: [
        "Le Sagittaire dit les choses haut et clair, les Poissons par allusions et ressentis. La franchise du Sagittaire peut heurter la délicatesse des Poissons, qui se replient alors dans le silence ou l'évitement, ce qui désoriente le Sagittaire.",
        "La clé est la douceur et l'écoute : le Sagittaire doit adoucir sa franchise et tenir compte de la sensibilité des Poissons, les Poissons doivent oser exprimer ce qu'ils ressentent plutôt que de fuir. Leur commune ouverture spirituelle leur offre un terrain de dialogue profond.",
      ] },
      { h2: "L'alchimie entre Sagittaire et Poissons", paras: [
        "L'attirance est romantique et imaginative : le Sagittaire apporte l'enthousiasme et l'aventure, les Poissons la tendresse et la magie. Tous deux sont rêveurs, ce qui crée une connexion poétique et inspirante.",
        "L'écueil tient au besoin : le Sagittaire veut liberté et mouvement, les Poissons douceur et fusion. Le Sagittaire peut paraître insaisissable aux Poissons qui se sentent négligés, les Poissons trop dépendants au Sagittaire. S'ils accordent leurs rêves, leur intimité devient tendre et inspirée.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi central oppose le besoin de liberté du Sagittaire à la sensibilité fusionnelle des Poissons. Le Sagittaire fuit l'engagement contraignant, les Poissons craignent l'abandon. Deux mutables réunis peuvent aussi manquer de structure et se perdre dans les idéaux sans rien concrétiser.",
        "La clé de résolution : le Sagittaire apprend à rassurer et à se rendre présent, les Poissons à s'ancrer et à ne pas tout vivre comme un rejet. Ensemble, ils gagnent à développer un minimum de cadre concret pour soutenir leurs aspirations communes.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand ils s'accordent, Sagittaire et Poissons forment un couple spirituel et inspirant. Le Sagittaire donne aux Poissons une direction et une foi joyeuse ; les Poissons offrent au Sagittaire une profondeur émotionnelle et une compassion qui élargissent son cœur autant que ses horizons.",
        "Leur idéalisme partagé, source de flou, devient une richesse dès qu'ils l'ancrent un peu : ils peuvent vivre une histoire pleine de sens, de poésie et de croissance. Le carré qui les opposait se mue en quête commune d'absolu.",
      ] },
    ],
    faq: [
      { q: "Sagittaire et Poissons sont-ils compatibles&nbsp;?", a: "Sagittaire et Poissons forment un carré entre deux signes mutables idéalistes, liés par leur héritage jupitérien. Leur compatibilité est romantique mais manque parfois d'ancrage et heurte la sensibilité des Poissons. Avec douceur et structure, le couple peut être très inspirant. La synastrie complète des deux thèmes nuance ce portrait." },
      { q: "Pourquoi le Sagittaire et les Poissons se heurtent-ils&nbsp;?", a: "Le Sagittaire est direct, franc et épris de liberté ; les Poissons sont sensibles, fluides et fusionnels. La franchise du Sagittaire blesse les Poissons, dont le flou déroute le Sagittaire. Leur quête de sens commune emprunte des chemins opposés." },
      { q: "Quel est le plus grand défi du couple Sagittaire-Poissons&nbsp;?", a: "Concilier le besoin de liberté du Sagittaire avec la sensibilité fusionnelle des Poissons, et s'ancrer dans le concret. Le défi est que le Sagittaire rassure et se rende présent, et que les Poissons s'ancrent sans tout vivre comme un abandon." },
    ],
  }),

  pair({
    a: 'belier', b: 'capricorne',
    metaDesc: "Compatibilité Bélier Capricorne : un carré entre le feu et la terre, deux signes cardinaux ambitieux. L'impulsion contre la patience, deux meneurs. Dynamique, défis et forces du couple.",
    ogDesc: "Carré feu/terre entre deux cardinaux : la friction entre l'impulsion du Bélier et la stratégie patiente du Capricorne.",
    h1Html: "Compatibilité Bélier & Capricorne, l'<em>impulsion</em> et la <em>stratégie</em>",
    leadHtml: "Bélier et Capricorne forment un carré entre deux signes cardinaux ambitieux. Cette compatibilité Bélier Capricorne confronte le feu impatient à la terre patiente — deux meneurs qui veulent réussir, mais à des vitesses radicalement différentes.",
    sections: [
      { h2: null, paras: [
        "Le <a href=\"/signes/belier\">Bélier</a> et le <a href=\"/signes/capricorne\">Capricorne</a> sont deux cardinaux, deux initiateurs, deux ambitieux — mais l'un fonce, l'autre planifie. Le Bélier (feu) veut tout, tout de suite ; le Capricorne (terre) construit pierre par pierre, sur le long terme. C'est un carré entre le sprinter et le stratège, l'élan et la discipline.",
      ] },
      { h2: 'Bélier et Capricorne : la dynamique profonde', paras: [
        "Mars (Bélier) et Saturne (Capricorne) sont une combinaison classique de tension : l'énergie brute contre la contrainte, l'accélérateur contre le frein. Le Capricorne admire le courage et l'audace du Bélier ; le Bélier respecte, parfois à contrecœur, la maîtrise et la persévérance du Capricorne.",
        "La friction est forte : le Bélier vit le Capricorne comme un rabat-joie qui freine tout, le Capricorne vit le Bélier comme un impulsif imprudent. Deux cardinaux veulent chacun diriger. Pourtant, Mars et Saturne, bien combinés, donnent une force redoutable : l'énergie disciplinée.",
      ] },
      { h2: 'Comment Bélier et Capricorne communiquent', paras: [
        "Le Bélier est direct, vif, parfois explosif ; le Capricorne mesuré, réservé, stratégique. Le Bélier s'impatiente du flegme du Capricorne, le Capricorne se méfie de la précipitation du Bélier. Leurs tempos s'opposent.",
        "La clé est la reconnaissance mutuelle : le Bélier doit voir que la prudence du Capricorne évite des erreurs, le Capricorne que l'audace du Bélier débloque des situations. Quand ils combinent élan et méthode au lieu de s'opposer, leur dialogue devient stratégiquement puissant.",
      ] },
      { h2: "L'alchimie entre Bélier et Capricorne", paras: [
        "L'attirance naît du respect : le Bélier est intrigué par la maîtrise du Capricorne, le Capricorne par la vitalité du Bélier. Dans l'intimité, le Bélier apporte la fougue, le Capricorne une sensualité contenue mais profonde qui se révèle dans la confiance.",
        "L'écueil tient au rythme : le Bélier veut l'immédiateté, le Capricorne prend son temps. Si le Bélier patiente et le Capricorne ose se laisser aller, la rencontre du feu et de la terre peut produire une intimité à la fois ardente et durable.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi majeur est le rapport au temps et au pouvoir. Le Bélier veut agir maintenant, le Capricorne veut attendre le bon moment ; deux meneurs cardinaux se disputent le contrôle. L'impatience de l'un face à la rigidité de l'autre peut créer des conflits récurrents.",
        "La clé de résolution : répartir les rôles selon les forces — le Bélier lance, le Capricorne consolide. Le Bélier apprend la patience et la stratégie, le Capricorne apprend l'audace et la spontanéité. Leur ambition commune devient un projet partagé plutôt qu'une rivalité.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand ils unissent leurs forces, Bélier et Capricorne forment un couple redoutablement efficace. L'énergie du Bélier et la discipline du Capricorne se complètent : l'un ouvre les portes, l'autre bâtit ce qu'il y a derrière. Ensemble, ils peuvent accomplir de grandes choses.",
        "Leur ambition partagée, source de rivalité, devient un moteur commun dès qu'ils visent le même but. Le Bélier dynamise le Capricorne, le Capricorne structure le Bélier — le carré se transforme en une alliance de bâtisseurs déterminés.",
      ] },
    ],
    faq: [
      { q: "Bélier et Capricorne sont-ils compatibles&nbsp;?", a: "Bélier et Capricorne forment un carré entre deux signes cardinaux ambitieux : leur compatibilité oppose l'impulsion à la patience. Source de friction, cette différence peut devenir une force redoutable s'ils combinent énergie et discipline. La synastrie complète des deux thèmes nuance ce portrait." },
      { q: "Pourquoi le Bélier et le Capricorne se heurtent-ils&nbsp;?", a: "Le Bélier veut agir immédiatement, le Capricorne préfère planifier et attendre le bon moment. Le Bélier voit le Capricorne comme un frein, le Capricorne voit le Bélier comme un imprudent. Deux meneurs cardinaux se disputent en plus le contrôle." },
      { q: "Quel est le plus grand défi du couple Bélier-Capricorne&nbsp;?", a: "Le rapport au temps et au pouvoir. Le défi est de répartir les rôles — le Bélier lance, le Capricorne consolide — plutôt que de rivaliser, et d'apprendre l'un de l'autre : la patience pour le Bélier, l'audace pour le Capricorne." },
    ],
  }),

  pair({
    a: 'taureau', b: 'verseau',
    metaDesc: "Compatibilité Taureau Verseau : un carré entre deux signes fixes, la terre et l'air. La tradition contre l'innovation, la sécurité contre la liberté. Dynamique, défis et forces.",
    ogDesc: "Carré terre/air entre deux fixes : la friction entre l'attachement du Taureau et l'indépendance du Verseau.",
    h1Html: "Compatibilité Taureau & Verseau, la <em>tradition</em> et la <em>rupture</em>",
    leadHtml: "Taureau et Verseau forment un carré entre deux signes fixes obstinés. Cette compatibilité Taureau Verseau confronte la terre attachée à l'air libre — la sécurité contre l'innovation, l'enracinement contre le besoin de changement.",
    sections: [
      { h2: null, paras: [
        "Le <a href=\"/signes/taureau\">Taureau</a> et le <a href=\"/signes/verseau\">Verseau</a> sont tous deux fixes : déterminés, loyaux, têtus. Mais le Taureau (terre) chérit la stabilité, la routine, le concret ; le Verseau (air) chérit le changement, l'originalité, les idées. C'est un carré entre le conservateur et le révolutionnaire, qui se heurtent autant qu'ils se fascinent.",
      ] },
      { h2: 'Taureau et Verseau : la dynamique profonde', paras: [
        "Vénus (Taureau) et Uranus (Verseau) sont presque antinomiques : l'attachement sensoriel contre la liberté électrique, la permanence contre la rupture. Le Taureau est intrigué par l'originalité et l'indépendance du Verseau ; le Verseau est attiré par la solidité rassurante et la sensualité du Taureau.",
        "La friction est marquée : le Taureau vit l'imprévisibilité du Verseau comme une menace pour sa sécurité, le Verseau vit l'attachement du Taureau comme une cage routinière. Deux fixes ne lâchent rien — leur bras de fer oppose la lenteur immuable à la rébellion soudaine.",
      ] },
      { h2: 'Comment Taureau et Verseau communiquent', paras: [
        "Le Taureau raisonne par le concret, le bon sens, l'expérience ; le Verseau par les idées, les concepts, l'avenir. Le Taureau peut trouver le Verseau abstrait et instable, le Verseau peut trouver le Taureau borné et matérialiste.",
        "La clé est la curiosité mutuelle : le Taureau s'ouvre aux idées nouvelles du Verseau, le Verseau respecte le besoin de concret et de stabilité du Taureau. Quand ils voient leurs différences comme un enrichissement plutôt qu'une menace, le dialogue devient stimulant.",
      ] },
      { h2: "L'alchimie entre Taureau et Verseau", paras: [
        "L'attirance vient du contraste : le Taureau sensuel et le Verseau cérébral se découvrent mutuellement étrangers et fascinants. Le Taureau apporte la chaleur charnelle, le Verseau la surprise et l'inventivité.",
        "L'écueil est profond : le Taureau veut de la régularité et de la proximité physique, le Verseau de l'espace et de la nouveauté. Si le Verseau s'ancre un peu et le Taureau accepte d'être bousculé, leur intimité peut conjuguer sécurité et étincelle. Sinon, l'incompréhension s'installe.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi majeur oppose le besoin de sécurité du Taureau à la soif de liberté du Verseau. Le Taureau veut construire un nid stable, le Verseau refuse de se sentir enfermé. Deux fixes campent sur leurs positions, rendant le compromis ardu.",
        "La clé de résolution : le Taureau apprend du Verseau à accueillir le changement, le Verseau apprend du Taureau la valeur de l'ancrage. Le respect du rythme et des besoins de l'autre transforme l'opposition en complémentarité — rare, mais puissante.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand ils relèvent le défi, Taureau et Verseau forment un couple à la fois ancré et inventif. Le Taureau offre au Verseau un foyer stable d'où lancer ses idées ; le Verseau offre au Taureau l'ouverture qui l'empêche de se figer dans la routine.",
        "Leur fixité commune, une fois l'engagement pris, garantit la durée. La tension du carré devient un équilibre fécond entre tradition et innovation — chacun élargissant le monde de l'autre sans le trahir.",
      ] },
    ],
    faq: [
      { q: "Taureau et Verseau sont-ils compatibles&nbsp;?", a: "Taureau et Verseau forment un carré entre deux signes fixes opposés : sécurité contre liberté, tradition contre innovation. Leur compatibilité demande un vrai effort, mais leur fixité garantit la durée une fois l'engagement pris. La synastrie complète des deux thèmes nuance fortement ce portrait." },
      { q: "Pourquoi le Taureau et le Verseau se heurtent-ils&nbsp;?", a: "Le Taureau chérit la stabilité, la routine et le concret ; le Verseau, le changement, l'originalité et la liberté. Le Taureau vit l'imprévisibilité du Verseau comme une menace, le Verseau vit l'attachement du Taureau comme une cage. Deux fixes peinent à céder." },
      { q: "Quel est le plus grand défi du couple Taureau-Verseau&nbsp;?", a: "Concilier le besoin de sécurité du Taureau avec la soif de liberté du Verseau. Le défi est que le Taureau accueille le changement et que le Verseau accepte un peu d'ancrage, chacun respectant le rythme de l'autre." },
    ],
  }),

  pair({
    a: 'gemeaux', b: 'poissons',
    metaDesc: "Compatibilité Gémeaux Poissons : un carré entre l'air et l'eau, deux signes mutables. La raison contre l'intuition, les mots contre les émotions. Dynamique, défis et forces du couple.",
    ogDesc: "Carré air/eau entre deux mutables : la friction entre la légèreté mentale des Gémeaux et la sensibilité des Poissons.",
    h1Html: "Compatibilité Gémeaux & Poissons, l'<em>esprit</em> et le <em>ressenti</em>",
    leadHtml: "Gémeaux et Poissons forment un carré entre deux signes mutables insaisissables. Cette compatibilité Gémeaux Poissons confronte l'air mental à l'eau émotionnelle — les mots contre les ressentis — dans une relation fluide mais difficile à fixer.",
    sections: [
      { h2: null, paras: [
        "Les <a href=\"/signes/gemeaux\">Gémeaux</a> et les <a href=\"/signes/poissons\">Poissons</a> sont tous deux mutables — adaptables, changeants, fuyants. Mais les Gémeaux (air) vivent dans la tête, les mots, la logique ; les Poissons (eau) dans le cœur, l'intuition, le rêve. C'est un carré entre deux êtres mobiles qui ne saisissent pas le monde par le même canal.",
      ] },
      { h2: 'Gémeaux et Poissons : la dynamique profonde', paras: [
        "Mercure (Gémeaux) et Neptune (Poissons) s'opposent comme la clarté et le flou, l'analyse et l'imagination. Les Gémeaux veulent comprendre, nommer, rationaliser ; les Poissons veulent ressentir, fusionner, rêver. Les Gémeaux sont charmés par la profondeur poétique des Poissons, qui sont fascinés par la vivacité et l'esprit des Gémeaux.",
        "La friction naît du registre : les Gémeaux trouvent les Poissons trop émotifs, flous, irrationnels ; les Poissons trouvent les Gémeaux froids, dispersés, incapables de profondeur émotionnelle. Deux mutables manquent en plus de stabilité pour traverser les malentendus.",
      ] },
      { h2: 'Comment Gémeaux et Poissons communiquent', paras: [
        "Les Gémeaux parlent, expliquent, argumentent ; les Poissons ressentent, suggèrent, devinent. Les Gémeaux intellectualisent les émotions que les Poissons vivent intensément, ce qui peut blesser ces derniers, tandis que le flou des Poissons frustre le besoin de clarté des Gémeaux.",
        "La clé est la traduction entre deux langues : les Gémeaux doivent honorer les émotions au lieu de les analyser, les Poissons exprimer leurs ressentis en mots que les Gémeaux peuvent saisir. Leur imagination commune — l'un mentale, l'autre intuitive — offre un pont possible.",
      ] },
      { h2: "L'alchimie entre Gémeaux et Poissons", paras: [
        "L'attirance est poétique et curieuse : les Gémeaux apportent le jeu et la fantaisie, les Poissons la tendresse et la magie. Tous deux ont une imagination fertile qui peut créer une connexion onirique et inventive.",
        "L'écueil tient aux besoins : les Poissons veulent fusion et profondeur émotionnelle, les Gémeaux légèreté et liberté mentale. Les Poissons peuvent se sentir incompris, les Gémeaux étouffés par l'intensité. S'ils accordent tête et cœur, leur intimité devient tendre et imaginative.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi central oppose la légèreté mentale des Gémeaux à la profondeur émotionnelle des Poissons. Les Gémeaux fuient l'intensité dans les idées, les Poissons se noient dans les émotions ; deux mutables réunis manquent d'ancrage et peuvent dériver sans direction.",
        "La clé de résolution : les Gémeaux apprennent à plonger dans le ressenti et à rassurer, les Poissons à mettre des mots et à ne pas tout dramatiser. Développer un minimum de structure les aide à ne pas se perdre l'un l'autre.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand ils construisent ce pont, Gémeaux et Poissons forment un couple créatif et tendre. Les Gémeaux donnent des mots et de la légèreté aux mondes intérieurs des Poissons ; les Poissons offrent aux Gémeaux une profondeur émotionnelle et une poésie qui enrichissent leur esprit.",
        "Leur imagination partagée, source de flou, devient une force créatrice dès qu'ils s'ancrent un peu. La tension du carré se transforme en une danse entre la raison et l'intuition, les mots et le rêve.",
      ] },
    ],
    faq: [
      { q: "Gémeaux et Poissons sont-ils compatibles&nbsp;?", a: "Gémeaux et Poissons forment un carré entre deux signes mutables qui perçoivent le monde différemment : la raison contre l'intuition. Leur compatibilité est créative mais manque d'ancrage et de compréhension émotionnelle. Avec des efforts mutuels, le couple peut être tendre et inventif. La synastrie complète des deux thèmes nuance ce portrait." },
      { q: "Pourquoi les Gémeaux et les Poissons se heurtent-ils&nbsp;?", a: "Les Gémeaux vivent dans la tête, les mots et la logique ; les Poissons dans le cœur, l'intuition et le rêve. Les Gémeaux trouvent les Poissons trop émotifs et flous, les Poissons trouvent les Gémeaux froids et dispersés. Leurs canaux de perception s'opposent." },
      { q: "Quel est le plus grand défi du couple Gémeaux-Poissons&nbsp;?", a: "Concilier la légèreté mentale des Gémeaux avec la profondeur émotionnelle des Poissons, et s'ancrer. Le défi est que les Gémeaux honorent le ressenti et rassurent, et que les Poissons mettent des mots sur leurs émotions sans tout dramatiser." },
    ],
  }),
];
