// Content data for the compatibility pages.
// Each pair is analysed through its real zodiacal aspect (opposition, trigone…),
// never reduced to a score out of 10. Both signs are treated with equal depth.
import { GLYPH, NAME } from './signs.mjs';
import { SPARKLE_SVG, HEART_SVG } from '../lib/icons.mjs';

const ELEM = {
  belier: 'Feu', taureau: 'Terre', gemeaux: 'Air', cancer: 'Eau', lion: 'Feu', vierge: 'Terre',
  balance: 'Air', scorpion: 'Eau', sagittaire: 'Feu', capricorne: 'Terre', verseau: 'Air', poissons: 'Eau',
};
const sc = (slug, label) => ({ href: `/signes/${slug}`, glyph: GLYPH[slug], label, name: NAME[slug] });
const guideCard = { href: '/guide/theme-natal', glyph: SPARKLE_SVG, label: 'Guide', name: 'Le thème natal' };
const compatCard = (slug, name) => ({ href: `/compatibilite/${slug}`, glyph: HEART_SVG, label: 'Compatibilité', name });

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
    ctaP: spec.ctaP || `Deux signes solaires ne font pas un couple. La synastrie compare vos deux thèmes natals entiers, Lune, Vénus, Mars, maisons. Calculez votre vraie compatibilité dans Lunestia avec Lyra.`,
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
    leadHtml: "Bélier et Balance se font face dans le zodiaque, et c'est exactement ce qui les attire. Cette compatibilité Bélier Balance est celle d'une opposition, la polarité la plus magnétique qui soit, où chacun possède précisément ce qui manque à l'autre.",
    sections: [
      { h2: null, paras: [
        "Quand le <a href=\"/signes/belier\">Bélier</a> rencontre la <a href=\"/signes/balance\">Balance</a>, deux moitiés d'un même axe se reconnaissent. Le Bélier incarne le « je », l'affirmation, l'élan, l'instinct. La Balance incarne le « nous », la relation, l'harmonie, la considération de l'autre. Aucun n'est complet sans la leçon que détient son vis-à-vis, et c'est de cette incomplétude que naît l'attraction.",
      ] },
      { h2: 'Bélier et Balance : la dynamique profonde', paras: [
        "L'opposition n'est pas un conflit, c'est une polarité, comme les deux pôles d'un aimant. Le Bélier, gouverné par Mars, fonce et tranche ; la Balance, gouvernée par Vénus, pèse et harmonise. Chacun projette sur l'autre une part de lui-même qu'il a refoulée : le Bélier admire secrètement la grâce diplomatique de la Balance, qui de son côté est fascinée par l'audace désinhibée du Bélier.",
        "Le danger de toute opposition, c'est que la fascination initiale vire au reproche : le Bélier finit par trouver la Balance indécise et lui reproche de trop ménager les autres ; la Balance trouve le Bélier brutal et égoïste. La clé est de comprendre que l'autre ne fait pas exprès, il incarne simplement le pôle opposé d'une même réalité. Bien vécu, ce couple apprend l'équilibre : le Bélier gagne en tact, la Balance en courage.",
      ] },
      { h2: 'Comment Bélier et Balance communiquent', paras: [
        "Le Bélier dit ce qu'il pense sans détour, parfois avant même d'y avoir réfléchi. La Balance soupèse chaque mot pour préserver l'harmonie. Ce décalage est la première source de friction : le Bélier vit la diplomatie de la Balance comme de la fuite ou de la malhonnêteté, tandis que la franchise du Bélier blesse la sensibilité relationnelle de la Balance.",
        "La clé tient en un apprentissage mutuel : le Bélier doit comprendre que prendre le temps de formuler les choses n'est pas de la faiblesse, et la Balance doit accepter que le désaccord direct n'est pas une rupture. Quand ils y parviennent, leur dialogue devient remarquablement équilibré, l'énergie du Bélier empêche la Balance de tergiverser, et la nuance de la Balance affine la pensée du Bélier.",
      ] },
      { h2: 'L\'alchimie entre Bélier et Balance', paras: [
        "L'attirance physique entre ces deux-là est souvent immédiate et puissante. Mars (Bélier) et Vénus (Balance) sont le couple archétypal du désir : l'un est la pulsion, l'autre le charme. Le Bélier est galvanisé par l'élégance et la séduction raffinée de la Balance ; celle-ci est emportée par la franchise désirante et l'intensité du Bélier.",
        "Pour durer, cette alchimie demande des ajustements de rythme. Le Bélier va vite, droit au but ; la Balance aime le préambule, la cour, l'art du désir entretenu. Si chacun honore le tempo de l'autre, le Bélier en ralentissant, la Balance en osant l'élan, la complémentarité Mars-Vénus devient une source de passion durable.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi central est celui de l'équilibre entre soi et l'autre. Le Bélier tend à imposer son rythme et ses désirs ; la Balance tend à s'effacer pour préserver la paix, jusqu'à accumuler un ressentiment silencieux qui explose ensuite. Le risque est un couple où l'un décide et l'autre subit en souriant.",
        "La clé de résolution : le Bélier doit apprendre à demander l'avis de la Balance et à le respecter vraiment ; la Balance doit s'entraîner à affirmer ses besoins avant qu'ils ne se transforment en rancune. Chacun guérit l'excès de l'autre, c'est tout le sens de l'opposition comme chemin de croissance.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand il fonctionne, le couple Bélier-Balance réunit le meilleur des deux mondes : l'initiative et la diplomatie, le courage et la grâce, l'individu et la relation. Le Bélier apporte l'élan qui sort la Balance de l'hésitation ; la Balance apporte la considération qui empêche le Bélier de foncer dans le mur.",
        "Ensemble, ils forment une équipe redoutable face au monde, l'un ouvre la voie, l'autre tisse les liens. Leur complémentarité, une fois apprivoisée, fait d'eux un véritable partenariat où chacun grandit au contact de ce qu'il n'est pas.",
      ] },
    ],
    faq: [
      { q: "Bélier et Balance sont-ils compatibles&nbsp;?", a: "Bélier et Balance forment une opposition, l'un des aspects les plus magnétiques du zodiaque. L'attraction est forte car chacun incarne ce qui manque à l'autre : l'affirmation de soi face à l'art de la relation. La compatibilité est réelle mais demande un travail d'équilibre. Tout dépend ensuite de la synastrie complète des deux thèmes, pas seulement des signes solaires." },
      { q: "Pourquoi le Bélier est-il attiré par la Balance&nbsp;?", a: "Le Bélier, instinctif et direct, est fasciné par la grâce, le tact et l'élégance relationnelle de la Balance, des qualités qu'il possède peu et admire secrètement. C'est le propre des signes opposés : ils s'attirent parce que l'autre détient la part de soi qu'on a laissée dans l'ombre. Vénus (Balance) et Mars (Bélier) forment de surcroît le duo classique du désir." },
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
        "Le <a href=\"/signes/taureau\">Taureau</a> et le <a href=\"/signes/scorpion\">Scorpion</a> partagent un même axe : celui de la possession et de l'attachement profond. Le Taureau cherche à garder, à stabiliser, à savourer ce qui dure. Le Scorpion cherche à fusionner, à transformer, à plonger dans l'intensité. Tous deux aiment avec une loyauté féroce, c'est leur terrain commun et la racine de leur attirance.",
      ] },
      { h2: 'Taureau et Scorpion : la dynamique profonde', paras: [
        "Deux signes fixes se font face : aucun ne lâche facilement. Le Taureau (Vénus) incarne la sécurité, le plaisir tangible, la permanence ; le Scorpion (Pluton) incarne la profondeur, la crise féconde, la métamorphose. L'un veut que rien ne change, l'autre veut tout transformer, d'où une tension électrique qui ne laisse personne indifférent.",
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
        "La jalousie et la possessivité sont le terrain miné de ce couple. Tous deux s'attachent intensément, et la peur de perdre l'autre peut virer au contrôle, sourd chez le Taureau, sondeur chez le Scorpion. Deux signes fixes qui s'affrontent ne cèdent pas : les conflits peuvent s'enliser dans un bras de fer silencieux.",
        "La clé de résolution est la confiance. Le Scorpion doit apprendre à ne pas tout vérifier ni soupçonner ; le Taureau doit accepter d'exprimer ce qu'il ressent au lieu de se murer dans l'entêtement. Chacun détient le remède de l'autre : la stabilité du Taureau apaise les abîmes du Scorpion, la profondeur du Scorpion empêche le Taureau de s'endormir dans la routine.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand la confiance est là, Taureau et Scorpion forment l'un des couples les plus solides et passionnés du zodiaque. Leur loyauté commune est inébranlable ; une fois engagés, ils restent. Le Taureau offre un port sûr aux tempêtes du Scorpion ; le Scorpion offre au Taureau une profondeur et une transformation qu'aucun autre signe ne lui apporterait.",
        "Ensemble, ils peuvent bâtir quelque chose d'à la fois solide et profond, un amour qui ne craint ni la durée ni l'intensité. C'est la promesse de cet axe : transformer la peur de perdre en certitude d'avoir trouvé.",
      ] },
    ],
    faq: [
      { q: "Taureau et Scorpion sont-ils compatibles&nbsp;?", a: "Taureau et Scorpion forment une opposition à l'attraction magnétique exceptionnelle. Tous deux fixes et profondément loyaux, ils peuvent construire un lien intense et durable. Les défis, jalousie, entêtement, sont réels mais surmontables si la confiance s'installe. Comme toujours, la synastrie complète des deux thèmes affine grandement le portrait." },
      { q: "Pourquoi le Scorpion est-il attiré par le Taureau&nbsp;?", a: "Le Scorpion, traversé par une intensité parfois épuisante, trouve dans le calme stable du Taureau un ancrage rassurant, un roc qui ne s'effraie pas de sa profondeur. Le Taureau, de son côté, est fasciné par l'intensité émotionnelle du Scorpion. C'est l'attraction classique des signes opposés : chacun détient ce qui manque à l'autre." },
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
    leadHtml: "Gémeaux et Sagittaire se font face sur l'axe de la connaissance, l'un collectionne les faits proches, l'autre cherche le sens lointain. Cette compatibilité Gémeaux Sagittaire unit deux esprits mobiles, curieux et épris de liberté, dans une rencontre joyeuse et stimulante.",
    sections: [
      { h2: null, paras: [
        "Les <a href=\"/signes/gemeaux\">Gémeaux</a> et le <a href=\"/signes/sagittaire\">Sagittaire</a> partagent un même axe intellectuel : celui de l'apprentissage et de la communication. Les Gémeaux explorent le proche, le multiple, le détail, ils butinent l'information. Le Sagittaire cherche le lointain, l'unifié, le sens, il vise la grande vérité. Deux faims de comprendre qui se complètent à merveille.",
      ] },
      { h2: 'Gémeaux et Sagittaire : la dynamique profonde', paras: [
        "Deux signes mutables se font face : la souplesse et le mouvement sont leur terrain commun. Mercure (Gémeaux) recueille les pièces du puzzle ; Jupiter (Sagittaire) cherche l'image d'ensemble. Le Sagittaire trouve chez les Gémeaux une vivacité et une curiosité enchanteresses ; les Gémeaux admirent la vision large et l'optimisme contagieux du Sagittaire.",
        "Leur opposition se joue sur l'échelle : les Gémeaux peuvent trouver le Sagittaire sentencieux ou trop sûr de ses grandes vérités, tandis que le Sagittaire peut juger les Gémeaux dispersés ou superficiels. Bien vécue, cette polarité s'équilibre : les Gémeaux apprennent à donner du sens à ce qu'ils savent, le Sagittaire à vérifier les détails de ses convictions.",
      ] },
      { h2: 'Comment Gémeaux et Sagittaire communiquent', paras: [
        "C'est leur grand point fort. Ces deux-là parlent, débattent, rient et explorent les idées sans jamais s'ennuyer. La conversation est le cœur battant de leur relation : ils peuvent passer des heures à refaire le monde, des potins du quartier aux questions existentielles.",
        "Le seul écueil : les Gémeaux papillonnent d'un sujet à l'autre et adorent jouer avec les idées, tandis que le Sagittaire veut conclure, trancher, affirmer une vérité. Si chacun respecte le mode de l'autre, le Sagittaire en lâchant un peu ses certitudes, les Gémeaux en acceptant d'aller au fond d'un sujet, leur dialogue devient une fête perpétuelle de l'esprit.",
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
        "Cancer et Capricorne peuvent former le couple « fondateur » par excellence, celui qui bâtit un foyer solide, une famille, un projet de vie à long terme. Le Cancer apporte l'âme, le Capricorne la structure ; ensemble, ils créent un édifice à la fois chaleureux et durable.",
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
    leadHtml: "Lion et Verseau se font face sur l'axe de l'individu et du collectif, le besoin de briller personnellement contre le besoin d'appartenir à plus grand que soi. Cette compatibilité Lion Verseau unit deux signes fixes que leur opposition rend irrésistiblement magnétiques.",
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
        "Le terrain d'entente, c'est leur loyauté commune et leur force de conviction. S'ils acceptent leurs styles, le Lion en ne prenant pas la distance du Verseau pour de l'indifférence, le Verseau en offrant au Lion la reconnaissance dont il a besoin, leur échange devient stimulant : le Verseau ouvre l'esprit du Lion, le Lion réchauffe le cœur du Verseau.",
      ] },
      { h2: 'L\'alchimie entre Lion et Verseau', paras: [
        "L'attirance est souvent électrique : le Lion, solaire et passionné, est intrigué par le magnétisme cool et imprévisible du Verseau ; celui-ci est attiré par la vitalité généreuse et l'assurance du Lion. C'est la rencontre du feu et de l'éclair.",
        "Dans l'intimité, le Lion apporte la passion ardente et le besoin de fusion chaleureuse, le Verseau l'inventivité, la surprise, une certaine liberté. Le risque : le Lion veut de l'exclusivité brûlante, le Verseau veut de l'espace. La clé est de marier la chaleur et la liberté, un Lion qui n'étouffe pas, un Verseau qui se rend présent.",
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
      { q: "Pourquoi le Lion est-il attiré par le Verseau&nbsp;?", a: "Le Lion est fasciné par l'indépendance, l'originalité et le magnétisme détaché du Verseau, qui ne quémande pas son approbation, une attitude qui pique sa curiosité et son désir. Le Verseau, lui, est réchauffé par la générosité solaire du Lion. C'est l'attraction des signes opposés : le cœur et l'idéal." },
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
        "La <a href=\"/signes/vierge\">Vierge</a> et les <a href=\"/signes/poissons\">Poissons</a> ferment l'axe service/transcendance. La Vierge soigne le monde par l'attention au détail et l'action concrète ; les Poissons le soignent par la compassion et l'imagination. L'une range, les autres rêvent, et chacun a désespérément besoin de ce que l'autre possède.",
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
        "Le défi majeur est le déséquilibre entre donner et recevoir. Tous deux ont une tendance au sacrifice, la Vierge par devoir, les Poissons par compassion, ce qui peut créer un couple où chacun s'oublie ou, à l'inverse, où l'un porte l'autre à bout de bras. La Vierge peut se lasser de gérer le concret pendant que les Poissons rêvent.",
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
    leadHtml: "Bélier et Lion partagent l'élément feu et s'unissent par un trigone, l'aspect le plus harmonieux du zodiaque. Cette compatibilité Bélier Lion est celle d'une reconnaissance immédiate : deux tempéraments ardents qui parlent la même langue, celle de la passion et de l'élan.",
    sections: [
      { h2: null, paras: [
        "Quand le <a href=\"/signes/belier\">Bélier</a> rencontre le <a href=\"/signes/lion\">Lion</a>, le feu reconnaît le feu. Le trigone qui les relie crée une fluidité naturelle : pas besoin de tout expliquer, ils se comprennent d'instinct. Tous deux vivent intensément, aiment grandement, et refusent la tiédeur. Leur rencontre a souvent quelque chose d'évident, comme deux braises qui n'attendaient que de se rejoindre.",
      ] },
      { h2: 'Bélier et Lion : la dynamique profonde', paras: [
        "Mars (Bélier) et le Soleil (Lion) sont deux énergies de feu complémentaires : l'un est l'étincelle qui démarre, l'autre la flamme qui rayonne et dure. Le Bélier, cardinal, lance les projets ; le Lion, fixe, leur donne de la constance et de la grandeur. Cette répartition naturelle fait d'eux une équipe enthousiasmante, toujours en mouvement.",
        "L'admiration est mutuelle et sincère : le Lion adore l'audace spontanée du Bélier, le Bélier est conquis par la générosité chaleureuse et le charisme du Lion. Le risque, propre à deux ego puissants, est la rivalité pour le premier rôle. Mais tant que chacun reconnaît la lumière de l'autre, leur feu commun réchauffe au lieu de brûler.",
      ] },
      { h2: 'Comment Bélier et Lion communiquent', paras: [
        "La communication est directe, franche, pleine de vie. Ni l'un ni l'autre ne joue aux devinettes : le Bélier dit les choses crûment, le Lion avec panache, mais tous deux préfèrent l'honnêteté au calcul. Les disputes peuvent être spectaculaires, deux feux qui s'embrasent, mais elles retombent vite, sans rancune durable.",
        "Le seul point de vigilance : l'orgueil. Le Lion supporte mal la brusquerie du Bélier quand elle écorne sa fierté, et le Bélier s'impatiente du besoin de reconnaissance du Lion. Un peu de tact de part et d'autre suffit à transformer ces frictions en jeu plutôt qu'en blessure.",
      ] },
      { h2: 'L\'alchimie entre Bélier et Lion', paras: [
        "Sur le plan de l'attirance, ce couple est explosif au meilleur sens du terme. La passion est immédiate, physique, joyeuse. Le Bélier apporte l'ardeur et la spontanéité, le Lion la chaleur et le sens du grand jeu. Le désir entre eux ne s'éteint pas facilement, car tous deux savent entretenir la flamme par le jeu, la conquête renouvelée et l'admiration partagée.",
        "Leur intimité est d'autant plus vivante que ni l'un ni l'autre ne craint d'exprimer son désir. Le risque serait la lassitude si la routine s'installait, mais c'est précisément ce que ces deux signes de feu fuient instinctivement.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi principal est la gestion des ego et de la place du leader. Deux signes habitués à mener peuvent se disputer le volant. Le Bélier veut décider vite, le Lion veut être honoré dans ses choix ; sans souplesse, le couple devient un concours d'autorité.",
        "L'autre écueil est l'impulsivité partagée : sans personne pour tempérer, ils peuvent foncer ensemble sans réfléchir, accumuler les décisions hâtives. La clé de résolution : alterner les rôles, célébrer les victoires de l'autre sans jalousie, et cultiver un peu de patience pour équilibrer leur fougue commune.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Bélier et Lion forment l'un des couples les plus dynamiques et joyeux du zodiaque. Leur énergie commune les rend capables de grandes choses : ils s'encouragent, s'admirent, foncent ensemble vers la vie. Leur loyauté, une fois engagée, est ardente et généreuse.",
        "Ensemble, ils incarnent la vitalité à l'état pur, un couple qui ose, qui rit fort, qui aime sans tiédeur. Tant qu'ils laissent chacun briller à sa manière, leur feu partagé éclaire tout sur son passage.",
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
        "Le <a href=\"/signes/belier\">Bélier</a> et le <a href=\"/signes/sagittaire\">Sagittaire</a> se reconnaissent dans leur soif de vivre. Reliés par un trigone de feu, ils partagent l'enthousiasme, l'optimisme et l'amour de la liberté. Le Bélier fonce vers l'objectif, le Sagittaire vers l'horizon, deux élans qui se nourrissent au lieu de se gêner.",
      ] },
      { h2: 'Bélier et Sagittaire : la dynamique profonde', paras: [
        "Mars (Bélier) et Jupiter (Sagittaire) forment un duo de feu expansif : l'audace rencontre la vision. Le Bélier, cardinal, initie ; le Sagittaire, mutable, élargit et donne du sens. Leur énergie est tournée vers l'avant, jamais vers la rumination, ce sont des optimistes d'action.",
        "L'admiration est spontanée : le Sagittaire adore le courage et la spontanéité du Bélier, le Bélier est conquis par la sagesse joyeuse et l'esprit large du Sagittaire. Ensemble, ils se sentent libres et stimulés, rarement freinés. C'est un couple qui grandit en avançant.",
      ] },
      { h2: 'Comment Bélier et Sagittaire communiquent', paras: [
        "Leur communication est franche, énergique et pleine d'humour. Tous deux disent ce qu'ils pensent et n'aiment pas s'embarrasser de détours. Les débats sont vifs mais sans rancune : ils adorent se challenger, refaire le monde, rire de tout.",
        "Le seul écueil : le Bélier peut s'agacer des grandes théories du Sagittaire, et le Sagittaire de l'impatience du Bélier qui veut agir avant de comprendre. Mais leur bonne foi commune et leur absence de rancune font que ces frictions se règlent vite, souvent dans un éclat de rire.",
      ] },
      { h2: 'L\'alchimie entre Bélier et Sagittaire', paras: [
        "L'attirance est immédiate et pleine de vie. Ce sont des amants joueurs, spontanés, qui mêlent passion et complicité. Le Bélier apporte l'ardeur directe, le Sagittaire le sens de l'aventure et la fantaisie. Le désir se nourrit de nouveauté : voyages, projets, défis partagés relancent constamment la flamme.",
        "Leur liberté commune est un atout précieux : aucun ne cherche à enfermer l'autre, ce qui maintient le désir vivant. Le risque serait que la quête perpétuelle de stimulation empêche l'enracinement, mais tant qu'ils explorent ensemble, leur lien reste électrique.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi principal est l'ancrage et la constance. Deux feux épris de liberté peuvent négliger le quotidien, fuir les responsabilités ou repousser sans cesse l'engagement profond au nom de l'aventure. Le concret risque d'être le parent pauvre de cette relation flamboyante.",
        "L'autre écueil est l'impulsivité doublée d'excès : le Bélier fonce, le Sagittaire voit grand, et sans modération ils peuvent se lancer dans des paris hasardeux. La clé de résolution : canaliser leur énergie commune vers des projets durables et oser la profondeur de l'engagement sans la vivre comme une perte de liberté.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Bélier et Sagittaire forment un couple rayonnant d'optimisme et de vitalité. Ils s'encouragent dans leurs élans, partagent une foi commune dans l'avenir et ne s'ennuient jamais. Leur relation est une aventure perpétuelle, où chacun pousse l'autre à oser davantage.",
        "Leur force est de transformer la vie en terrain de jeu sans perdre la tendresse. Quand ils apprennent à conjuguer liberté et fidélité, ils deviennent des compagnons de route inséparables, deux flammes qui éclairent la même direction.",
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
    leadHtml: "Lion et Sagittaire partagent l'élément feu et un trigone harmonieux. Cette compatibilité Lion Sagittaire unit la chaleur rayonnante du Lion à l'optimisme aventurier du Sagittaire, un couple solaire, généreux et tourné vers la vie en grand.",
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
        "Ensemble, ils incarnent la chaleur et l'aventure réunies, un couple qui aime fort, rit beaucoup et regarde toujours vers l'avant. Tant que le Lion se sent honoré et le Sagittaire respire, leur feu commun ne faiblit pas.",
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
        "Le <a href=\"/signes/taureau\">Taureau</a> et la <a href=\"/signes/vierge\">Vierge</a> se comprennent sans bruit. Reliés par un trigone de terre, ils partagent le sens du concret, le goût du travail bien fait et une méfiance commune envers les grands discours. Leur amour se mesure en actes plutôt qu'en déclarations, et c'est exactement ce qui les rassure mutuellement.",
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
        "Taureau et Capricorne forment un couple d'une solidité exemplaire. Leur loyauté, leur réalisme et leur ténacité en font des partenaires capables de bâtir une vie entière, patrimoine, foyer, famille, avec une constance que peu de couples égalent.",
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
        "Le Capricorne admire l'intelligence pratique et le dévouement de la Vierge ; la Vierge se sent en sécurité auprès de l'ambition fiable du Capricorne. Leur relation est faite de respect autant que d'amour, ils se prennent au sérieux et s'estiment profondément.",
      ] },
      { h2: 'Comment Vierge et Capricorne communiquent', paras: [
        "La communication est claire, rationnelle et orientée vers les solutions. Tous deux préfèrent les faits aux effusions et apprécient l'honnêteté directe. Ils peuvent passer des heures à organiser, planifier, résoudre, et y trouver une véritable complicité.",
        "Le point de vigilance : deux esprits critiques et exigeants peuvent se montrer durs, l'un envers l'autre comme envers eux-mêmes. La Vierge pinaille, le Capricorne juge. La clé est d'adoucir le ton, de reconnaître les efforts de l'autre et de ne pas confondre exigence et reproche permanent.",
      ] },
      { h2: 'L\'alchimie entre Vierge et Capricorne', paras: [
        "L'intimité se déploie lentement, dans la confiance. Tous deux pudiques, ils ont besoin de temps pour baisser la garde, mais une fois la sécurité installée, leur connexion gagne en profondeur et en tendresse. Le Capricorne révèle une sensualité contenue, la Vierge un dévouement attentif.",
        "La complémentarité fonctionne car ils se rassurent mutuellement : ni l'un ni l'autre ne joue de jeux, ne trahit, ne déçoit. Leur désir repose sur le respect et la fiabilité plutôt que sur l'intensité dramatique, un feu discret mais constant.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi majeur est l'excès de travail et d'autocritique. Deux signes de terre exigeants peuvent se noyer dans les responsabilités, négliger le plaisir et la spontanéité, et entretenir une atmosphère trop sérieuse. Le risque est l'usure par l'austérité.",
        "L'autre écueil est la sévérité mutuelle : si chacun attend la perfection, le couple devient un tribunal. La clé de résolution : célébrer les réussites, cultiver la détente et l'humour, et remplacer la critique par l'encouragement. Apprendre, ensemble, à se reposer sans culpabilité.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Vierge et Capricorne forment un couple d'une fiabilité et d'une efficacité remarquables. Ils s'épaulent dans leurs ambitions, partagent les mêmes valeurs et construisent une vie ordonnée et prospère. Leur loyauté est sans faille et leur respect mutuel, profond.",
        "Ensemble, ils incarnent l'amour mûr et responsable, celui qui ne brille pas en surface mais qui tient sur la durée. Quand ils s'autorisent la douceur et la légèreté, leur solidité devient un véritable refuge.",
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
        "Les <a href=\"/signes/gemeaux\">Gémeaux</a> et la <a href=\"/signes/balance\">Balance</a> se rejoignent dans le royaume de l'esprit et du lien. Reliés par un trigone d'air, ils partagent l'amour de la conversation, des idées et de la vie sociale. Leur relation respire la légèreté et l'élégance, un échange constant où l'ennui n'a pas sa place.",
      ] },
      { h2: 'Gémeaux et Balance : la dynamique profonde', paras: [
        "Mercure (Gémeaux) et Vénus (Balance) s'accordent à merveille : la curiosité rencontre l'harmonie. Les Gémeaux, mutables, apportent la vivacité et la diversité ; la Balance, cardinale, apporte le sens du lien et l'art de la relation. Ensemble, ils forment un couple cultivé, mondain et complice.",
        "La Balance est charmée par l'esprit pétillant et l'humour des Gémeaux ; les Gémeaux sont séduits par la grâce, le tact et l'élégance de la Balance. Leur entente est fluide, presque évidente, ils se comprennent à demi-mot et partagent un même refus de la lourdeur.",
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
        "Ensemble, ils créent une relation légère, raffinée et stimulante, un dialogue permanent où chacun s'épanouit. Quand ils ajoutent à cette grâce un peu de profondeur, leur entente devient aussi solide qu'élégante.",
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
    leadHtml: "Balance et Verseau partagent l'élément air et un trigone harmonieux. Cette compatibilité Balance Verseau unit le sens du lien de la Balance à l'idéalisme du Verseau, un couple sociable, ouvert et tourné vers une vision commune du monde.",
    sections: [
      { h2: null, paras: [
        "La <a href=\"/signes/balance\">Balance</a> et le <a href=\"/signes/verseau\">Verseau</a> se rejoignent dans le monde des idées et des relations. Reliés par un trigone d'air, ils partagent un idéal de justice, un goût du social et une ouverture d'esprit naturelle. Leur relation est élégante, fraternelle et tournée vers les autres autant que vers eux-mêmes.",
      ] },
      { h2: 'Balance et Verseau : la dynamique profonde', paras: [
        "Vénus (Balance) et Uranus (Verseau) s'accordent dans une harmonie ouverte : le sens du lien rencontre l'idéal collectif. La Balance, cardinale, recherche l'équilibre et la relation ; le Verseau, fixe, défend ses convictions et sa liberté. Ensemble, ils forment un couple sociable, engagé, attaché à des valeurs communes.",
        "La Balance est séduite par l'originalité et les idéaux du Verseau ; le Verseau apprécie la grâce, le tact et le sens de la justice de la Balance. Leur entente repose sur un respect mutuel et un partage de visions, ils aiment réfléchir ensemble à un monde meilleur.",
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
        "Ensemble, ils incarnent l'amour à la fois tendre et libre, une relation où l'harmonie n'exclut pas l'indépendance, où l'on construit à deux tout en gardant son individualité. Quand ils ajoutent la profondeur émotionnelle à leur belle entente, leur lien devient remarquablement équilibré.",
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
        "Le Scorpion se sent enfin compris par la sensibilité du Cancer, qui ne le juge pas ; le Cancer se sent protégé par la force et la loyauté du Scorpion. Leur entente repose sur une confiance émotionnelle que peu de couples atteignent, ils se confient l'un à l'autre ce qu'ils cachent au reste du monde.",
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
        "Ensemble, ils créent un refuge émotionnel total, un amour intense, fusionnel et durable. Quand ils apprennent à gérer leur sensibilité sans se blesser, leur lien devient un sanctuaire inébranlable.",
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
        "Les Poissons sont touchés par la tendresse protectrice du Cancer, qui leur offre l'ancrage dont ils manquent ; le Cancer est ému par la compassion sans limites et l'imagination des Poissons. Leur entente est intuitive, presque télépathique, ils se comprennent par le cœur.",
      ] },
      { h2: 'Comment Cancer et Poissons communiquent', paras: [
        "La communication passe surtout par le ressenti, les gestes tendres, l'attention silencieuse. Tous deux captent les émotions de l'autre sans qu'un mot soit nécessaire. Cette intuition partagée crée une intimité douce et un sentiment d'être enfin compris.",
        "Le point de vigilance : tous deux fuient le conflit et peuvent se réfugier dans le non-dit ou l'évitement. Les rancœurs peuvent s'accumuler sous la surface paisible. La clé est d'oser nommer les blessures et de ne pas laisser la peur de heurter l'autre étouffer la vérité.",
      ] },
      { h2: 'L\'alchimie entre Cancer et Poissons', paras: [
        "L'intimité est tendre, romantique et profondément connectée. Le Cancer apporte la chaleur protectrice, les Poissons la sensualité fluide et l'abandon. Leur connexion physique est imprégnée d'émotion et de douceur, c'est un lien des âmes autant que des corps.",
        "Leur alchimie repose sur la confiance et la délicatesse. Le Cancer se sent libre d'aimer sans crainte d'être blessé, les Poissons trouvent enfin quelqu'un qui honore leur sensibilité. Le désir, doux et constant, se nourrit de tendresse plus que d'intensité dramatique.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi majeur est l'ancrage dans le réel. Deux signes d'eau émotifs et rêveurs peuvent manquer de sens pratique, fuir les responsabilités, se laisser submerger par les émotions ou se perdre dans l'idéalisation. Qui gère le concret quand tous deux ont la tête dans les nuages ?",
        "L'autre écueil est l'évitement des conflits, qui laisse les problèmes s'accumuler. La clé de résolution : développer ensemble plus de structure et de réalisme, oser aborder les sujets difficiles, et veiller à ce que la fusion n'efface pas les limites de chacun.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Cancer et Poissons forment l'un des couples les plus tendres et romantiques du zodiaque. Leur empathie mutuelle, leur intuition et leur douceur en font des partenaires qui se comprennent et se consolent comme nuls autres. Leur amour est un havre de paix.",
        "Ensemble, ils créent un monde de tendresse et de compassion, une relation où l'on se sent aimé dans sa vulnérabilité même. Quand ils ajoutent un peu d'ancrage à leur sensibilité partagée, leur lien devient aussi solide que doux.",
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
    leadHtml: "Scorpion et Poissons partagent l'élément eau et un trigone harmonieux. Cette compatibilité Scorpion Poissons unit la profondeur transformatrice du Scorpion à la compassion océanique des Poissons, un couple magnétique, intense et habité par le mystère.",
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
        "Leur alchimie repose sur l'abandon mutuel. Les Poissons s'offrent sans réserve, le Scorpion se livre comme à nul autre. C'est une intimité totale, où la frontière entre les deux êtres semble s'effacer, pour le meilleur, tant que chacun garde un minimum de soi.",
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
    leadHtml: "Bélier et Cancer forment un carré, l'aspect de la friction créative. Cette compatibilité Bélier Cancer confronte deux signes cardinaux que tout sépare, le feu impulsif et l'eau protectrice, dans une relation qui exige beaucoup mais peut transformer chacun en profondeur.",
    sections: [
      { h2: null, paras: [
        "Quand le <a href=\"/signes/belier\">Bélier</a> rencontre le <a href=\"/signes/cancer\">Cancer</a>, deux signes cardinaux s'affrontent, tous deux veulent initier, mais dans des directions opposées. Le Bélier fonce vers l'extérieur, le Cancer se replie vers l'intérieur. Le feu veut conquérir, l'eau veut protéger. C'est un carré : une tension qui peut user… ou forger, selon ce que chacun accepte d'apprendre de l'autre.",
      ] },
      { h2: 'Bélier et Cancer : la dynamique profonde', paras: [
        "Mars (Bélier) et la Lune (Cancer) sont deux forces archaïques presque opposées : l'instinct de conquête contre l'instinct de protection. Le Bélier agit sans réfléchir aux conséquences émotionnelles ; le Cancer ressent tout et a besoin de sécurité avant d'agir. Le Bélier peut percevoir le Cancer comme trop susceptible, le Cancer peut vivre le Bélier comme brutal et insensible.",
        "Mais cette friction cache une complémentarité possible. Le Cancer apprend du Bélier le courage d'affirmer ses besoins ; le Bélier apprend du Cancer à tenir compte des autres, à ralentir, à ressentir. Le carré ne se résout pas, il se travaille, et c'est précisément ce travail qui fait grandir.",
      ] },
      { h2: 'Comment Bélier et Cancer communiquent', paras: [
        "Le Bélier dit les choses crûment, sans filtre ; le Cancer, indirect, communique par allusions et états d'âme. Le Bélier blesse sans le vouloir, le Cancer se referme dans sa carapace ou la bouderie, ce qui exaspère le Bélier qui ne supporte pas le non-dit.",
        "La clé est le décodage mutuel : le Bélier doit apprendre que la sensibilité du Cancer n'est pas de la faiblesse mais une autre forme de force, et adoucir sa franchise ; le Cancer doit oser dire ce qu'il ressent directement plutôt que de l'attendre. Quand chacun fait ce pas, leur dialogue devient un pont entre deux mondes.",
      ] },
      { h2: "L'alchimie entre Bélier et Cancer", paras: [
        "L'attirance peut être vive : le Bélier est touché par la tendresse et la profondeur du Cancer, qui le change de sa propre dureté ; le Cancer est fasciné par l'énergie et l'audace du Bélier, qui le sort de sa prudence. Dans l'intimité, la fougue du Bélier rencontre le besoin de douceur du Cancer.",
        "L'écueil est le rythme et la sécurité. Le Bélier veut tout, tout de suite ; le Cancer a besoin de se sentir en confiance pour s'ouvrir. Si le Bélier accepte de patienter et le Cancer de lâcher prise, la rencontre du feu et de l'eau peut produire une vapeur intense, passionnée et tendre à la fois.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi central oppose le besoin d'indépendance du Bélier au besoin d'attachement du Cancer. Le Bélier se sent étouffé par la demande affective du Cancer ; le Cancer se sent abandonné par l'autonomie du Bélier. Deux cardinaux, de surcroît, veulent tous deux diriger.",
        "La clé de résolution : le Bélier apprend à rassurer sans se sentir enchaîné, le Cancer à donner de l'espace sans se sentir rejeté. Chacun guérit une blessure de l'autre, le Bélier offre au Cancer le courage, le Cancer offre au Bélier la profondeur émotionnelle qui lui manque.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand ils relèvent le défi, Bélier et Cancer forment un couple étonnamment complet : l'un protège le foyer, l'autre affronte le monde. Le Bélier devient le défenseur de ce que le Cancer chérit ; le Cancer devient le refuge où le Bélier peut enfin déposer ses armes.",
        "Leur force naît précisément de leur différence. Le carré qui les opposait devient un moteur : à condition de s'aimer assez pour traverser les frictions, ils s'apportent mutuellement ce qu'aucun signe semblable n'aurait pu leur offrir.",
      ] },
    ],
    faq: [
      { q: "Bélier et Cancer sont-ils compatibles&nbsp;?", a: "Bélier et Cancer forment un carré, aspect de tension créative entre le feu et l'eau. Leur compatibilité demande du travail : leurs besoins (indépendance contre attachement) s'opposent. Mais cette friction peut devenir un puissant moteur de croissance mutuelle. La synastrie complète des deux thèmes nuance fortement ce portrait." },
      { q: "Pourquoi le Bélier et le Cancer s'attirent-ils malgré leurs différences&nbsp;?", a: "Chacun possède ce qui manque à l'autre : le Bélier admire la profondeur émotionnelle du Cancer, qui est attiré par le courage et l'énergie du Bélier. Le carré crée une tension électrique, faite d'attirance et de friction à la fois, stimulante mais exigeante." },
      { q: "Quel est le plus grand défi du couple Bélier-Cancer&nbsp;?", a: "Concilier le besoin d'indépendance du Bélier avec le besoin de sécurité affective du Cancer. Le Bélier peut se sentir étouffé, le Cancer abandonné. Le défi est que le Bélier rassure sans se sentir enchaîné et que le Cancer accorde de l'espace sans se sentir rejeté." },
    ],
  }),

  pair({
    a: 'taureau', b: 'lion',
    metaDesc: "Compatibilité Taureau Lion : un carré entre deux signes fixes, la terre et le feu. Une tension entre stabilité et rayonnement, deux volontés solides. Dynamique, défis et forces.",
    ogDesc: "Carré terre/feu : la friction entre la stabilité du Taureau et le besoin de briller du Lion, deux têtus magnifiques.",
    h1Html: "Compatibilité Taureau & Lion, deux <em>volontés</em> qui ne plient pas",
    leadHtml: "Taureau et Lion forment un carré entre deux signes fixes. Cette compatibilité Taureau Lion confronte la terre patiente au feu rayonnant, deux tempéraments loyaux et obstinés, capables d'une grande solidité comme d'un bras de fer mémorable.",
    sections: [
      { h2: null, paras: [
        "Le <a href=\"/signes/taureau\">Taureau</a> et le <a href=\"/signes/lion\">Lion</a> partagent une qualité : la fixité. Tous deux sont fidèles, déterminés et… têtus. Mais l'un est terre, l'autre feu. Le Taureau veut la tranquillité et la sécurité ; le Lion veut l'éclat et la reconnaissance. C'est un carré : la rencontre de deux forces qui ne cèdent pas, pour le meilleur comme pour le bras de fer.",
      ] },
      { h2: 'Taureau et Lion : la dynamique profonde', paras: [
        "Vénus (Taureau) et le Soleil (Lion) ont en commun le goût du plaisir et de la beauté, mais l'expriment autrement : le Taureau dans l'intime et le sensoriel, le Lion dans le spectaculaire et le social. Le Lion admire la solidité rassurante du Taureau ; le Taureau est séduit par la chaleur généreuse du Lion.",
        "La friction naît de la fixité partagée : aucun ne lâche. Le Taureau trouve le Lion trop dépensier, trop avide d'attention ; le Lion trouve le Taureau trop terre-à-terre, peu démonstratif. Leur défi est d'apprendre à plier sans se renier, un art que leur nature fixe rend difficile mais profondément formateur.",
      ] },
      { h2: 'Comment Taureau et Lion communiquent', paras: [
        "Le Taureau parle peu et concret, le Lion avec chaleur et panache. Le Lion a besoin d'être admiré et célébré ; le Taureau exprime son amour par les actes plus que par les mots, ce qui peut laisser le Lion sur sa faim de reconnaissance.",
        "Les conflits, entre deux fixes, peuvent s'enliser : le Lion s'emporte puis pardonne vite, le Taureau rumine en silence et se braque. La clé est que le Lion valorise concrètement la fiabilité du Taureau, et que le Taureau offre au Lion les marques d'admiration dont il a besoin. Un peu de souplesse de chaque côté change tout.",
      ] },
      { h2: "L'alchimie entre Taureau et Lion", paras: [
        "L'attirance est sensuelle et chaleureuse : le Taureau apporte la sensualité lente et constante, le Lion la passion généreuse et le sens du romanesque. Tous deux aiment le plaisir, le confort, la beauté, un terrain d'entente charnel réel.",
        "L'écueil tient à leurs rythmes et leurs egos : le Lion veut de la grandeur et de la nouveauté, le Taureau de la régularité rassurante. Si le Lion accepte la tranquillité du Taureau et le Taureau l'exubérance du Lion, leur intimité conjugue chaleur et profondeur dans la durée.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi majeur est l'entêtement mutuel et la question de l'argent et du statut. Le Taureau veut épargner et sécuriser, le Lion veut profiter et briller ; deux volontés fixes peuvent transformer ce désaccord en guerre de tranchées.",
        "La clé de résolution : choisir ses batailles, reconnaître la légitimité du besoin de l'autre, et accepter de céder à tour de rôle. Le Taureau apprend du Lion à oser rayonner et se faire plaisir ; le Lion apprend du Taureau la valeur de la patience et de la constance.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand ils dépassent le bras de fer, Taureau et Lion forment un couple d'une loyauté à toute épreuve. Leur fixité commune, source de conflits, devient un atout : une fois engagés, ils ne lâchent pas. Ils bâtissent une relation solide, chaleureuse et durable.",
        "Le Taureau offre au Lion un socle inébranlable ; le Lion offre au Taureau l'éclat et la joie qui réchauffent sa vie. Ensemble, ils peuvent créer un foyer à la fois somptueux et sécurisant, la terre qui nourrit le feu, le feu qui illumine la terre.",
      ] },
    ],
    faq: [
      { q: "Taureau et Lion sont-ils compatibles&nbsp;?", a: "Taureau et Lion forment un carré entre deux signes fixes : leur compatibilité mêle forte attirance et entêtement réciproque. Loyaux tous les deux, ils peuvent construire du durable s'ils apprennent à céder à tour de rôle. La synastrie complète des deux thèmes affine grandement ce portrait." },
      { q: "Pourquoi le Taureau et le Lion s'opposent-ils parfois&nbsp;?", a: "Tous deux sont des signes fixes, donc déterminés et peu enclins à céder. Le Taureau cherche la sécurité et l'économie, le Lion l'éclat et le plaisir. Ce choc de priorités, entre deux volontés qui ne plient pas, peut tourner au bras de fer si aucun ne fait le premier pas." },
      { q: "Quel est le plus grand défi du couple Taureau-Lion&nbsp;?", a: "L'entêtement mutuel, souvent autour de l'argent et du statut. Le défi est de reconnaître la légitimité du besoin de l'autre, sécurité pour le Taureau, reconnaissance pour le Lion, et d'accepter de céder à tour de rôle plutôt que de camper sur ses positions." },
    ],
  }),

  pair({
    a: 'gemeaux', b: 'vierge',
    metaDesc: "Compatibilité Gémeaux Vierge : un carré entre deux signes de Mercure, l'air et la terre. Le jeu d'esprit contre la rigueur du détail. Dynamique, défis et forces du couple.",
    ogDesc: "Carré air/terre sous Mercure : la friction stimulante entre la curiosité des Gémeaux et la précision de la Vierge.",
    h1Html: "Compatibilité Gémeaux & Vierge, deux <em>Mercure</em> qui se cherchent",
    leadHtml: "Gémeaux et Vierge forment un carré, mais partagent la même planète : Mercure. Cette compatibilité Gémeaux Vierge confronte deux esprits vifs aux usages opposés, l'un disperse, l'autre ordonne, dans une relation où l'intelligence rencontre l'exigence.",
    sections: [
      { h2: null, paras: [
        "Les <a href=\"/signes/gemeaux\">Gémeaux</a> et la <a href=\"/signes/vierge\">Vierge</a> sont tous deux gouvernés par Mercure, mais l'expriment de façon opposée. Les Gémeaux (air) jouent avec les idées, papillonnent, improvisent ; la Vierge (terre) trie, perfectionne, ordonne. C'est un carré entre deux mutables : beaucoup de mouvement, beaucoup de mental, et un risque de friction permanente entre la légèreté de l'un et la rigueur de l'autre.",
      ] },
      { h2: 'Gémeaux et Vierge : la dynamique profonde', paras: [
        "Même planète, deux philosophies. Les Gémeaux veulent tout explorer sans s'attarder ; la Vierge veut tout maîtriser dans le détail. La Vierge admire la vivacité et l'aisance sociale des Gémeaux ; les Gémeaux sont impressionnés par la compétence et le sérieux de la Vierge.",
        "La friction est inévitable : la Vierge trouve les Gémeaux superficiels et brouillons, les Gémeaux trouvent la Vierge pointilleuse et anxieuse. Mais leur amour commun des mots et des idées offre un terrain d'entente, à condition que chacun respecte le mode mental de l'autre plutôt que de vouloir le corriger.",
      ] },
      { h2: 'Comment Gémeaux et Vierge communiquent', paras: [
        "C'est à la fois leur force et leur champ de bataille. Tous deux adorent parler, analyser, débattre, la conversation ne tarit jamais. Mais les Gémeaux improvisent et exagèrent, la Vierge corrige et nuance, ce qui peut virer à l'agacement réciproque.",
        "La clé est la bienveillance : la Vierge doit lâcher du lest sur les imprécisions des Gémeaux, et les Gémeaux prendre au sérieux le besoin de justesse de la Vierge. Quand ils s'écoutent au lieu de se reprendre, leur échange devient une stimulation intellectuelle rare.",
      ] },
      { h2: "L'alchimie entre Gémeaux et Vierge", paras: [
        "L'attirance est d'abord mentale : ils se séduisent par l'esprit, l'humour, la curiosité partagée. Dans l'intimité, les Gémeaux apportent le jeu et la légèreté, la Vierge l'attention et le soin du détail. Ni l'un ni l'autre n'est dans l'intensité dramatique, leur connexion est fine, cérébrale, complice.",
        "L'écueil est l'excès de mental : tous deux peuvent rester dans la tête et négliger le corps et l'émotion. La Vierge a besoin de confiance pour se détendre, les Gémeaux de nouveauté pour rester présents. S'ils sortent du mental ensemble, leur intimité gagne en chaleur.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi central est la critique et l'anxiété. La Vierge, perfectionniste, peut reprendre sans cesse les Gémeaux qui le vivent comme un jugement ; les Gémeaux, insaisissables, peuvent alimenter l'inquiétude de la Vierge qui a besoin de fiabilité. Deux mutables, de plus, peinent parfois à trancher et à s'ancrer.",
        "La clé de résolution : la Vierge transforme la critique en encouragement, les Gémeaux offrent à la Vierge la régularité qui la rassure. Chacun apprend de l'autre, la Vierge à se détendre, les Gémeaux à approfondir.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand ils s'ajustent, Gémeaux et Vierge forment un couple intellectuellement brillant et complémentaire. Les Gémeaux apportent les idées et l'ouverture, la Vierge la méthode et la mise en œuvre : ensemble, ils peuvent concrétiser ce que d'autres se contentent d'imaginer.",
        "Leur double Mercure, source de friction, devient une complicité d'esprit profonde : ils se comprennent vite, se font rire, s'enrichissent mutuellement. La tension du carré se mue en dialogue fécond entre la curiosité et la précision.",
      ] },
    ],
    faq: [
      { q: "Gémeaux et Vierge sont-ils compatibles&nbsp;?", a: "Gémeaux et Vierge forment un carré, mais partagent Mercure : leur compatibilité repose sur une forte complicité mentale doublée d'une friction entre légèreté et rigueur. Avec de la bienveillance, le couple devient brillant et complémentaire. La synastrie complète des deux thèmes précise ce portrait." },
      { q: "Pourquoi les Gémeaux et la Vierge se heurtent-ils&nbsp;?", a: "Tous deux gouvernés par Mercure, ils utilisent leur intelligence de façon opposée : les Gémeaux improvisent et dispersent, la Vierge ordonne et perfectionne. La Vierge trouve les Gémeaux brouillons, les Gémeaux trouvent la Vierge pointilleuse, d'où une friction mentale permanente." },
      { q: "Quel est le plus grand défi du couple Gémeaux-Vierge&nbsp;?", a: "La critique et l'anxiété. La Vierge peut sans cesse corriger les Gémeaux, qui peuvent nourrir son inquiétude par leur imprévisibilité. Le défi est que la Vierge transforme la critique en encouragement et que les Gémeaux offrent un peu de fiabilité rassurante." },
    ],
  }),

  pair({
    a: 'cancer', b: 'balance',
    metaDesc: "Compatibilité Cancer Balance : un carré entre l'eau et l'air, deux signes cardinaux en quête d'harmonie. L'émotion contre la diplomatie. Dynamique, défis et forces du couple.",
    ogDesc: "Carré eau/air : la friction délicate entre le besoin de foyer du Cancer et l'art relationnel de la Balance.",
    h1Html: "Compatibilité Cancer & Balance, le <em>cœur</em> et le <em>tact</em>",
    leadHtml: "Cancer et Balance forment un carré entre deux signes cardinaux épris d'harmonie. Cette compatibilité Cancer Balance confronte l'eau émotionnelle à l'air diplomate, deux manières d'aimer la paix qui, paradoxalement, peuvent se heurter.",
    sections: [
      { h2: null, paras: [
        "Le <a href=\"/signes/cancer\">Cancer</a> et la <a href=\"/signes/balance\">Balance</a> ont un point commun : ils détestent le conflit et recherchent l'harmonie. Mais le Cancer la cherche dans l'intimité du foyer, la Balance dans l'équilibre des relations sociales. C'est un carré entre deux cardinaux : deux volontés d'initier la paix… qui ne s'y prennent pas du tout de la même manière.",
      ] },
      { h2: 'Cancer et Balance : la dynamique profonde', paras: [
        "La Lune (Cancer) et Vénus (Balance) sont deux planètes du lien, mais l'une est émotionnelle et l'autre relationnelle. Le Cancer aime en protégeant, en nourrissant, en se liant viscéralement ; la Balance aime en charmant, en équilibrant, en gardant une certaine distance esthétique. La Balance est touchée par la tendresse du Cancer, le Cancer par l'élégance et la douceur de la Balance.",
        "La friction naît de leurs besoins : le Cancer veut de la profondeur émotionnelle et de l'exclusivité, la Balance de la légèreté et de la vie sociale. Le Cancer peut trouver la Balance superficielle ou trop tournée vers les autres ; la Balance peut trouver le Cancer envahissant ou lunatique.",
      ] },
      { h2: 'Comment Cancer et Balance communiquent', paras: [
        "Tous deux fuient l'affrontement, ce qui peut sembler idéal mais crée un piège : les non-dits s'accumulent. Le Cancer boude et se referme, la Balance lisse et évite, les vrais problèmes restent sous le tapis.",
        "La clé est d'oser la franchise affectueuse. Le Cancer doit exprimer ses besoins au lieu de les laisser deviner, la Balance doit cesser de tout arrondir pour préserver une fausse paix. Quand ils nomment les choses, leur commun amour de l'harmonie devient une vraie force de réconciliation.",
      ] },
      { h2: "L'alchimie entre Cancer et Balance", paras: [
        "L'attirance est tendre et romantique : le Cancer apporte la chaleur et l'attention, la Balance la séduction et le raffinement. Tous deux apprécient les attentions, les ambiances douces, les gestes délicats.",
        "L'écueil tient à la sécurité émotionnelle : le Cancer a besoin d'être rassuré et de sentir l'exclusivité du lien, la Balance a besoin d'air et de légèreté. Si la Balance offre au Cancer la réassurance qu'il réclame et le Cancer accorde à la Balance sa liberté sociale, leur intimité devient un cocon élégant.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi central oppose le besoin de fusion du Cancer à la sociabilité de la Balance. Le Cancer peut se sentir négligé quand la Balance brille en société ; la Balance peut se sentir oppressée par le besoin d'intimité du Cancer. Deux cardinaux, de plus, veulent chacun mener la danse relationnelle.",
        "La clé de résolution : la Balance rassure le Cancer par sa présence et sa fidélité, le Cancer respecte le besoin de monde de la Balance. Chacun apprend de l'autre, le Cancer à prendre du recul émotionnel, la Balance à plonger dans la profondeur du lien.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand ils dépassent les non-dits, Cancer et Balance créent une relation d'une grande douceur. Tous deux soignent le lien, l'esthétique, l'attention à l'autre : leur foyer peut être à la fois chaleureux et raffiné, un lieu où l'on prend soin.",
        "Leur amour commun de l'harmonie, source de fuite quand il est mal géré, devient leur plus grand atout dès qu'ils osent la vérité. Le Cancer apporte la profondeur, la Balance la grâce, ensemble, un équilibre tendre entre le cœur et le tact.",
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
    leadHtml: "Lion et Scorpion forment un carré entre deux signes fixes d'une intensité rare. Cette compatibilité Lion Scorpion mêle attraction magnétique et lutte de pouvoir, un couple passionné où deux volontés de fer s'affrontent autant qu'elles se désirent.",
    sections: [
      { h2: null, paras: [
        "Le <a href=\"/signes/lion\">Lion</a> et le <a href=\"/signes/scorpion\">Scorpion</a> sont deux des signes les plus puissants du zodiaque, tous deux fixes, tous deux intenses. Le Lion (feu) règne par la lumière, le Scorpion (eau) par la profondeur. C'est un carré explosif : une attraction immédiate doublée d'un combat sourd pour le contrôle. Rien de tiède entre ces deux-là.",
      ] },
      { h2: 'Lion et Scorpion : la dynamique profonde', paras: [
        "Le Soleil (Lion) et Pluton (Scorpion) incarnent deux formes de puissance : la souveraineté éclatante contre la maîtrise souterraine. Le Lion veut rayonner et être admiré ouvertement ; le Scorpion veut comprendre, posséder et transformer en profondeur. Ils se reconnaissent comme des égaux, et c'est ce qui crée à la fois la fascination et la rivalité.",
        "La friction est inévitable : le Lion vit le Scorpion comme trop secret et contrôlant, le Scorpion vit le Lion comme trop centré sur lui-même et avide d'attention. Deux fixes ne lâchent rien : leurs conflits peuvent devenir des bras de fer mémorables. Mais leur intensité commune les comprend.",
      ] },
      { h2: 'Comment Lion et Scorpion communiquent', paras: [
        "Le Lion communique ouvertement, avec chaleur et fierté ; le Scorpion par sous-entendus, regards et silences chargés. Le Lion étale, le Scorpion dissimule. Le Lion peut être blessé par le mystère du Scorpion, qui peut mépriser le besoin de validation du Lion.",
        "La clé est la confiance et le respect mutuel. Le Scorpion doit cesser de tester et de contrôler, le Lion d'exiger l'admiration. Quand ils s'accordent leur souveraineté respective, l'un sur la lumière, l'autre sur la profondeur, leur échange devient d'une rare intensité.",
      ] },
      { h2: "L'alchimie entre Lion et Scorpion", paras: [
        "C'est sur le plan de la passion que ce couple brûle le plus fort. Le Lion apporte l'ardeur généreuse et le romanesque, le Scorpion l'intensité fusionnelle et le magnétisme. Le désir entre eux est puissant, presque obsessionnel, l'un des couples les plus charnels du zodiaque.",
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
    leadHtml: "Vierge et Sagittaire forment un carré entre deux signes mutables. Cette compatibilité Vierge Sagittaire confronte la terre méticuleuse au feu aventurier, la prudence et l'expansion, le souci du détail et la soif d'horizon.",
    sections: [
      { h2: null, paras: [
        "La <a href=\"/signes/vierge\">Vierge</a> et le <a href=\"/signes/sagittaire\">Sagittaire</a> sont tous deux mutables, adaptables, mobiles, en mouvement, mais dans des directions opposées. La Vierge (terre) affine, vérifie, reste prudente ; le Sagittaire (feu) voit grand, prend des risques, embrasse l'horizon. C'est un carré : la rencontre du microscope et du télescope.",
      ] },
      { h2: 'Vierge et Sagittaire : la dynamique profonde', paras: [
        "Mercure (Vierge) et Jupiter (Sagittaire) s'opposent comme la contraction et l'expansion : l'un rétrécit le champ pour perfectionner, l'autre l'élargit pour explorer. La Vierge admire l'optimisme et la liberté du Sagittaire ; le Sagittaire est rassuré par la compétence et la fiabilité de la Vierge.",
        "La friction est nette : la Vierge trouve le Sagittaire imprudent, désordonné, trop sûr de ses grandes idées ; le Sagittaire trouve la Vierge tatillonne, anxieuse, enfermée dans les détails. Leur défi est de voir que l'un sans l'autre est incomplet, la vision sans la rigueur s'égare, la rigueur sans la vision s'étouffe.",
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
        "Quand ils s'ajustent, Vierge et Sagittaire forment une équipe étonnamment complète : la vision et l'exécution, l'audace et la rigueur. Le Sagittaire ouvre des horizons, la Vierge les rend réalisables, ensemble, ils accomplissent ce que ni l'un ni l'autre ne pourrait seul.",
        "Leur croissance mutuelle est le cœur de ce couple : la Vierge s'allège au contact du Sagittaire, le Sagittaire mûrit au contact de la Vierge. La tension du carré devient un moteur d'évolution réciproque.",
      ] },
    ],
    faq: [
      { q: "Vierge et Sagittaire sont-ils compatibles&nbsp;?", a: "Vierge et Sagittaire forment un carré entre deux signes mutables que tout oppose : prudence contre aventure, détail contre vision. Leur compatibilité demande des ajustements, mais leur complémentarité peut devenir une vraie force. La synastrie complète des deux thèmes nuance ce portrait." },
      { q: "Pourquoi la Vierge et le Sagittaire se heurtent-ils&nbsp;?", a: "La Vierge est prudente, méthodique et soucieuse du détail ; le Sagittaire est audacieux, optimiste et tourné vers l'horizon. La Vierge trouve le Sagittaire imprudent, le Sagittaire trouve la Vierge tatillonne. Leur rapport au risque et au détail s'oppose frontalement." },
      { q: "Quel est le plus grand défi du couple Vierge-Sagittaire&nbsp;?", a: "Concilier la prudence de la Vierge avec l'insouciance du Sagittaire. Le défi est que la Vierge apprenne à dédramatiser et à oser, et que le Sagittaire apprenne à structurer et à rassurer, chacun s'enrichissant du tempérament de l'autre." },
    ],
  }),

  pair({
    a: 'balance', b: 'capricorne',
    metaDesc: "Compatibilité Balance Capricorne : un carré entre l'air et la terre, deux signes cardinaux. La relation contre l'ambition, la douceur contre la rigueur. Dynamique, défis et forces.",
    ogDesc: "Carré air/terre entre deux cardinaux : la friction entre l'art relationnel de la Balance et l'ambition du Capricorne.",
    h1Html: "Compatibilité Balance & Capricorne, la <em>grâce</em> et la <em>structure</em>",
    leadHtml: "Balance et Capricorne forment un carré entre deux signes cardinaux. Cette compatibilité Balance Capricorne confronte l'air relationnel à la terre ambitieuse, le charme et le devoir, la légèreté et la gravité, dans un couple qui doit apprendre à conjuguer plaisir et sérieux.",
    sections: [
      { h2: null, paras: [
        "La <a href=\"/signes/balance\">Balance</a> et le <a href=\"/signes/capricorne\">Capricorne</a> sont deux cardinaux qui veulent construire, mais l'une construit des relations, l'autre des réussites. La Balance (air) cherche l'harmonie et la beauté ; le Capricorne (terre) cherche l'accomplissement et la sécurité. C'est un carré entre deux bâtisseurs aux matériaux opposés.",
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
        "La clé de résolution : le Capricorne consacre du temps réel à la relation, la Balance soutient l'ambition du Capricorne sans s'y sacrifier. Chacun équilibre l'autre, la Balance apporte la douceur de vivre, le Capricorne la structure qui sécurise.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand ils s'accordent, Balance et Capricorne forment un couple à la fois élégant et solide. Le Capricorne offre à la Balance la stabilité et la sécurité qui apaisent son indécision ; la Balance offre au Capricorne la chaleur, la beauté et le lien qui réchauffent sa rigueur.",
        "Leur complémentarité couvre l'extérieur et l'intérieur : le Capricorne bâtit le cadre matériel, la Balance en fait un lieu harmonieux. La tension du carré se transforme en partenariat équilibré entre l'ambition et l'art de vivre.",
      ] },
    ],
    faq: [
      { q: "Balance et Capricorne sont-ils compatibles&nbsp;?", a: "Balance et Capricorne forment un carré entre deux signes cardinaux aux priorités opposées : relation contre ambition. Leur compatibilité demande des ajustements, mais leur complémentarité, grâce et structure, peut donner un couple élégant et solide. La synastrie complète des deux thèmes nuance ce portrait." },
      { q: "Pourquoi la Balance et le Capricorne se heurtent-ils&nbsp;?", a: "La Balance privilégie la relation, la beauté et la vie sociale ; le Capricorne, le travail et les objectifs. La Balance peut trouver le Capricorne froid et rigide, le Capricorne peut trouver la Balance frivole ou indécise. Leurs priorités de vie divergent." },
      { q: "Quel est le plus grand défi du couple Balance-Capricorne&nbsp;?", a: "Concilier le besoin de relation de la Balance avec l'investissement du Capricorne dans le travail. Le défi est que le Capricorne consacre du temps réel au couple et que la Balance soutienne son ambition sans s'y sacrifier ni se sentir délaissée." },
    ],
  }),

  pair({
    a: 'scorpion', b: 'verseau',
    metaDesc: "Compatibilité Scorpion Verseau : un carré entre deux signes fixes, l'eau et l'air. L'intensité émotionnelle contre le détachement, deux volontés inflexibles. Dynamique et défis.",
    ogDesc: "Carré eau/air entre deux fixes : la friction entre l'intensité du Scorpion et l'indépendance du Verseau.",
    h1Html: "Compatibilité Scorpion & Verseau, la <em>passion</em> et la <em>distance</em>",
    leadHtml: "Scorpion et Verseau forment un carré entre deux signes fixes inflexibles. Cette compatibilité Scorpion Verseau confronte l'eau profonde à l'air détaché, la fusion émotionnelle contre la liberté, dans une relation aussi fascinante que tendue.",
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
        "La clé de résolution : le Scorpion travaille sa confiance et renonce au contrôle, le Verseau apprend à offrir de la présence émotionnelle. Chacun a beaucoup à apprendre de l'autre, le Verseau la profondeur, le Scorpion le détachement sain.",
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
    leadHtml: "Sagittaire et Poissons forment un carré entre deux signes mutables, autrefois tous deux régis par Jupiter. Cette compatibilité Sagittaire Poissons mêle la quête de sens du feu à la compassion de l'eau, deux idéalistes qui peinent parfois à atterrir ensemble.",
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
    leadHtml: "Bélier et Capricorne forment un carré entre deux signes cardinaux ambitieux. Cette compatibilité Bélier Capricorne confronte le feu impatient à la terre patiente, deux meneurs qui veulent réussir, mais à des vitesses radicalement différentes.",
    sections: [
      { h2: null, paras: [
        "Le <a href=\"/signes/belier\">Bélier</a> et le <a href=\"/signes/capricorne\">Capricorne</a> sont deux cardinaux, deux initiateurs, deux ambitieux, mais l'un fonce, l'autre planifie. Le Bélier (feu) veut tout, tout de suite ; le Capricorne (terre) construit pierre par pierre, sur le long terme. C'est un carré entre le sprinter et le stratège, l'élan et la discipline.",
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
        "La clé de résolution : répartir les rôles selon les forces, le Bélier lance, le Capricorne consolide. Le Bélier apprend la patience et la stratégie, le Capricorne apprend l'audace et la spontanéité. Leur ambition commune devient un projet partagé plutôt qu'une rivalité.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand ils unissent leurs forces, Bélier et Capricorne forment un couple redoutablement efficace. L'énergie du Bélier et la discipline du Capricorne se complètent : l'un ouvre les portes, l'autre bâtit ce qu'il y a derrière. Ensemble, ils peuvent accomplir de grandes choses.",
        "Leur ambition partagée, source de rivalité, devient un moteur commun dès qu'ils visent le même but. Le Bélier dynamise le Capricorne, le Capricorne structure le Bélier, le carré se transforme en une alliance de bâtisseurs déterminés.",
      ] },
    ],
    faq: [
      { q: "Bélier et Capricorne sont-ils compatibles&nbsp;?", a: "Bélier et Capricorne forment un carré entre deux signes cardinaux ambitieux : leur compatibilité oppose l'impulsion à la patience. Source de friction, cette différence peut devenir une force redoutable s'ils combinent énergie et discipline. La synastrie complète des deux thèmes nuance ce portrait." },
      { q: "Pourquoi le Bélier et le Capricorne se heurtent-ils&nbsp;?", a: "Le Bélier veut agir immédiatement, le Capricorne préfère planifier et attendre le bon moment. Le Bélier voit le Capricorne comme un frein, le Capricorne voit le Bélier comme un imprudent. Deux meneurs cardinaux se disputent en plus le contrôle." },
      { q: "Quel est le plus grand défi du couple Bélier-Capricorne&nbsp;?", a: "Le rapport au temps et au pouvoir. Le défi est de répartir les rôles, le Bélier lance, le Capricorne consolide, plutôt que de rivaliser, et d'apprendre l'un de l'autre : la patience pour le Bélier, l'audace pour le Capricorne." },
    ],
  }),

  pair({
    a: 'taureau', b: 'verseau',
    metaDesc: "Compatibilité Taureau Verseau : un carré entre deux signes fixes, la terre et l'air. La tradition contre l'innovation, la sécurité contre la liberté. Dynamique, défis et forces.",
    ogDesc: "Carré terre/air entre deux fixes : la friction entre l'attachement du Taureau et l'indépendance du Verseau.",
    h1Html: "Compatibilité Taureau & Verseau, la <em>tradition</em> et la <em>rupture</em>",
    leadHtml: "Taureau et Verseau forment un carré entre deux signes fixes obstinés. Cette compatibilité Taureau Verseau confronte la terre attachée à l'air libre, la sécurité contre l'innovation, l'enracinement contre le besoin de changement.",
    sections: [
      { h2: null, paras: [
        "Le <a href=\"/signes/taureau\">Taureau</a> et le <a href=\"/signes/verseau\">Verseau</a> sont tous deux fixes : déterminés, loyaux, têtus. Mais le Taureau (terre) chérit la stabilité, la routine, le concret ; le Verseau (air) chérit le changement, l'originalité, les idées. C'est un carré entre le conservateur et le révolutionnaire, qui se heurtent autant qu'ils se fascinent.",
      ] },
      { h2: 'Taureau et Verseau : la dynamique profonde', paras: [
        "Vénus (Taureau) et Uranus (Verseau) sont presque antinomiques : l'attachement sensoriel contre la liberté électrique, la permanence contre la rupture. Le Taureau est intrigué par l'originalité et l'indépendance du Verseau ; le Verseau est attiré par la solidité rassurante et la sensualité du Taureau.",
        "La friction est marquée : le Taureau vit l'imprévisibilité du Verseau comme une menace pour sa sécurité, le Verseau vit l'attachement du Taureau comme une cage routinière. Deux fixes ne lâchent rien, leur bras de fer oppose la lenteur immuable à la rébellion soudaine.",
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
        "La clé de résolution : le Taureau apprend du Verseau à accueillir le changement, le Verseau apprend du Taureau la valeur de l'ancrage. Le respect du rythme et des besoins de l'autre transforme l'opposition en complémentarité, rare, mais puissante.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand ils relèvent le défi, Taureau et Verseau forment un couple à la fois ancré et inventif. Le Taureau offre au Verseau un foyer stable d'où lancer ses idées ; le Verseau offre au Taureau l'ouverture qui l'empêche de se figer dans la routine.",
        "Leur fixité commune, une fois l'engagement pris, garantit la durée. La tension du carré devient un équilibre fécond entre tradition et innovation, chacun élargissant le monde de l'autre sans le trahir.",
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
    leadHtml: "Gémeaux et Poissons forment un carré entre deux signes mutables insaisissables. Cette compatibilité Gémeaux Poissons confronte l'air mental à l'eau émotionnelle, les mots contre les ressentis, dans une relation fluide mais difficile à fixer.",
    sections: [
      { h2: null, paras: [
        "Les <a href=\"/signes/gemeaux\">Gémeaux</a> et les <a href=\"/signes/poissons\">Poissons</a> sont tous deux mutables, adaptables, changeants, fuyants. Mais les Gémeaux (air) vivent dans la tête, les mots, la logique ; les Poissons (eau) dans le cœur, l'intuition, le rêve. C'est un carré entre deux êtres mobiles qui ne saisissent pas le monde par le même canal.",
      ] },
      { h2: 'Gémeaux et Poissons : la dynamique profonde', paras: [
        "Mercure (Gémeaux) et Neptune (Poissons) s'opposent comme la clarté et le flou, l'analyse et l'imagination. Les Gémeaux veulent comprendre, nommer, rationaliser ; les Poissons veulent ressentir, fusionner, rêver. Les Gémeaux sont charmés par la profondeur poétique des Poissons, qui sont fascinés par la vivacité et l'esprit des Gémeaux.",
        "La friction naît du registre : les Gémeaux trouvent les Poissons trop émotifs, flous, irrationnels ; les Poissons trouvent les Gémeaux froids, dispersés, incapables de profondeur émotionnelle. Deux mutables manquent en plus de stabilité pour traverser les malentendus.",
      ] },
      { h2: 'Comment Gémeaux et Poissons communiquent', paras: [
        "Les Gémeaux parlent, expliquent, argumentent ; les Poissons ressentent, suggèrent, devinent. Les Gémeaux intellectualisent les émotions que les Poissons vivent intensément, ce qui peut blesser ces derniers, tandis que le flou des Poissons frustre le besoin de clarté des Gémeaux.",
        "La clé est la traduction entre deux langues : les Gémeaux doivent honorer les émotions au lieu de les analyser, les Poissons exprimer leurs ressentis en mots que les Gémeaux peuvent saisir. Leur imagination commune, l'un mentale, l'autre intuitive, offre un pont possible.",
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

  // ===================== SEXTILES (60°) — harmonie active =====================
  pair({
    a: 'belier', b: 'gemeaux',
    metaDesc: "Compatibilité Bélier Gémeaux : un sextile entre le feu et l'air, une complicité vive et stimulante. L'action rencontre les idées. Dynamique, communication, défis et forces.",
    ogDesc: "Sextile feu/air : la complicité pétillante entre l'élan du Bélier et la vivacité d'esprit des Gémeaux.",
    h1Html: "Compatibilité Bélier & Gémeaux, l'<em>élan</em> et l'<em>étincelle</em>",
    leadHtml: "Bélier et Gémeaux forment un sextile, l'aspect de l'harmonie active. Cette compatibilité Bélier Gémeaux unit le feu et l'air dans une relation vive, légère et stimulante, un couple qui ne s'ennuie jamais.",
    sections: [
      { h2: null, paras: [
        "Quand le <a href=\"/signes/belier\">Bélier</a> rencontre les <a href=\"/signes/gemeaux\">Gémeaux</a>, le feu et l'air se stimulent. Le sextile crée une entente naturelle, faite de curiosité et de mouvement : le Bélier agit, les Gémeaux pensent, et ensemble ils transforment la vie en terrain de jeu. C'est une complicité énergique, plus amicale et joueuse que fusionnelle.",
      ] },
      { h2: 'Bélier et Gémeaux : la dynamique profonde', paras: [
        "Mars (Bélier) et Mercure (Gémeaux) forment un duo d'action et d'idées : l'un fonce, l'autre commente, conseille, relance. L'air des Gémeaux attise le feu du Bélier, qui adore avoir un complice vif et drôle. Les Gémeaux, eux, sont galvanisés par l'audace et la spontanéité du Bélier.",
        "Le sextile demande un minimum d'effort pour porter ses fruits, mais ici il coule de source : aucun des deux n'aime s'appesantir, tous deux fuient l'ennui et la lourdeur. Leur dynamique est légère, rapide, pleine d'humour, une jeunesse partagée.",
      ] },
      { h2: 'Comment Bélier et Gémeaux communiquent', paras: [
        "C'est l'un de leurs grands atouts. Direct et franc pour le Bélier, vif et nuancé pour les Gémeaux, leur échange fuse. Ils débattent, plaisantent, s'enflamment puis passent à autre chose sans rancune. Le Bélier apprécie que les Gémeaux ne dramatisent pas, les Gémeaux que le Bélier aille droit au but.",
        "Le petit écueil : le Bélier veut conclure et agir, les Gémeaux veulent encore explorer toutes les options. Un peu de patience du Bélier et de décision des Gémeaux suffisent à fluidifier le tout.",
      ] },
      { h2: "L'alchimie entre Bélier et Gémeaux", paras: [
        "L'attirance est joyeuse et ludique : ils se séduisent par l'esprit, le rire, l'énergie. Le désir naît du jeu, de la complicité, de la nouveauté constante. Ce sont des amants spontanés, curieux d'expérimenter, allergiques à la routine.",
        "Leur liberté commune entretient le désir : ni l'un ni l'autre n'étouffe l'autre. Le seul risque est de rester dans la légèreté sans approfondir le lien émotionnel, mais leur vitalité partagée fait des étincelles.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi est la profondeur et la constance. Tous deux vifs et tournés vers l'action ou les idées, ils peuvent négliger l'intimité émotionnelle et le quotidien. Le Bélier impulsif et les Gémeaux dispersés manquent parfois d'ancrage.",
        "La clé de résolution : se ménager des moments de vraie connexion au-delà du jeu, et s'appuyer sur d'autres énergies du thème pour la stabilité. Mais le sextile rend les ajustements faciles : ils règlent les choses en riant.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Bélier et Gémeaux forment un couple dynamique et joyeux, complices avant tout. Leur entente naturelle, leur humour et leur énergie en font des partenaires qui s'amusent ensemble et se stimulent mutuellement.",
        "Le Bélier apporte la direction et l'audace, les Gémeaux les idées et la souplesse : ensemble, ils sont une équipe vive et inventive. Le sextile leur offre une harmonie facile qu'ils n'ont qu'à entretenir.",
      ] },
    ],
    faq: [
      { q: "Bélier et Gémeaux sont-ils compatibles&nbsp;?", a: "Bélier et Gémeaux forment un sextile entre le feu et l'air : une compatibilité naturellement harmonieuse, vive et complice. Le principal défi est la profondeur émotionnelle. La synastrie complète des deux thèmes affine ce beau potentiel." },
      { q: "Pourquoi le Bélier et les Gémeaux s'entendent-ils si bien&nbsp;?", a: "Le feu et l'air se stimulent : l'air des Gémeaux attise le feu du Bélier. Tous deux vifs, joueurs et allergiques à l'ennui, ils partagent une énergie légère et complice. Le Bélier apporte l'action, les Gémeaux les idées." },
      { q: "Quel est le plus grand défi du couple Bélier-Gémeaux&nbsp;?", a: "Approfondir le lien émotionnel et gagner en constance. Vifs et tournés vers l'action ou les idées, ils peuvent rester dans la légèreté et négliger l'intimité. Le défi est de se ménager de vrais moments de connexion." },
    ],
  }),

  pair({
    a: 'taureau', b: 'cancer',
    metaDesc: "Compatibilité Taureau Cancer : un sextile entre la terre et l'eau, une tendresse nourricière. La sécurité rencontre l'émotion. Dynamique, communication, défis et forces du couple.",
    ogDesc: "Sextile terre/eau : la douceur nourricière entre la stabilité du Taureau et la tendresse du Cancer.",
    h1Html: "Compatibilité Taureau & Cancer, la <em>douceur</em> qui nourrit",
    leadHtml: "Taureau et Cancer forment un sextile, l'aspect de l'harmonie active. Cette compatibilité Taureau Cancer unit la terre et l'eau dans une relation tendre, stable et profondément nourricière, l'un des couples les plus doux du zodiaque.",
    sections: [
      { h2: null, paras: [
        "Quand le <a href=\"/signes/taureau\">Taureau</a> rencontre le <a href=\"/signes/cancer\">Cancer</a>, la terre et l'eau se fécondent. Le sextile crée une entente naturelle, faite de soin mutuel et de besoin commun de sécurité. Le Taureau offre la stabilité, le Cancer la tendresse : ensemble, ils construisent un foyer où l'on se sent en sûreté.",
      ] },
      { h2: 'Taureau et Cancer : la dynamique profonde', paras: [
        "Vénus (Taureau) et la Lune (Cancer) sont deux énergies du soin et de l'attachement. Le Taureau aime par le concret et la sensualité, le Cancer par l'émotion et la protection, deux langages qui se complètent à merveille. Le Cancer se sent rassuré par la solidité du Taureau, le Taureau touché par la tendresse du Cancer.",
        "L'eau du Cancer nourrit la terre du Taureau : leurs besoins s'accordent profondément. Tous deux valorisent la maison, la fidélité, la douceur de vivre. C'est une dynamique paisible, où la confiance s'installe naturellement.",
      ] },
      { h2: 'Comment Taureau et Cancer communiquent', paras: [
        "La communication est douce et bienveillante. Le Taureau, posé et concret, rassure le Cancer émotif ; le Cancer, intuitif, devine les besoins du Taureau. Ni l'un ni l'autre n'aime le conflit : ils privilégient la tendresse et les gestes attentionnés.",
        "Le petit écueil : tous deux peuvent bouder ou se renfermer plutôt que d'exprimer un grief, le Taureau par entêtement, le Cancer par susceptibilité. Mais leur affection mutuelle dissout vite les tensions.",
      ] },
      { h2: "L'alchimie entre Taureau et Cancer", paras: [
        "L'intimité est tendre, sensuelle et sécurisante. Le Taureau apporte la sensualité lente et constante, le Cancer la profondeur émotionnelle et l'attention. Leur connexion physique est nourrie par un sentiment de confiance et d'appartenance.",
        "Leur alchimie repose sur la sécurité : plus ils se sentent en confiance, plus ils s'ouvrent. C'est un désir qui s'approfondit avec le temps, fondé sur la tendresse plutôt que sur l'intensité dramatique.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi est la routine et la passivité. Tous deux aiment le confort et la sécurité au point de s'installer dans une zone si paisible qu'elle peut manquer de dynamisme et de nouveauté. La peur du changement est commune.",
        "La clé de résolution : entretenir volontairement la surprise, oser sortir de la zone de confort ensemble. Mais le sextile rend les ajustements doux : ils se comprennent sans heurts.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Taureau et Cancer forment un couple d'une grande douceur et d'une grande stabilité. Leur soin mutuel, leur fidélité et leur amour du foyer en font des partenaires de vie idéaux, capables de bâtir un nid chaleureux et durable.",
        "Le Taureau offre l'ancrage matériel, le Cancer l'âme émotionnelle : ensemble, un foyer où il fait bon vivre. Le sextile leur donne une harmonie naturelle qu'ils n'ont qu'à cultiver.",
      ] },
    ],
    faq: [
      { q: "Taureau et Cancer sont-ils compatibles&nbsp;?", a: "Taureau et Cancer forment un sextile entre la terre et l'eau : une compatibilité naturellement tendre, stable et nourricière. Le principal défi est d'éviter la routine. La synastrie complète des deux thèmes affine ce beau potentiel." },
      { q: "Pourquoi le Taureau et le Cancer s'entendent-ils si bien&nbsp;?", a: "La terre et l'eau se nourrissent : l'eau du Cancer féconde la terre du Taureau. Tous deux valorisent la sécurité, le foyer et la fidélité, et aiment par le soin. Le Taureau apporte la stabilité, le Cancer la tendresse." },
      { q: "Quel est le plus grand défi du couple Taureau-Cancer&nbsp;?", a: "Éviter que le confort ne devienne routine. Tous deux aiment la sécurité au point de craindre le changement. Le défi est d'entretenir la surprise et d'oser sortir ensemble de leur zone de confort." },
    ],
  }),

  pair({
    a: 'gemeaux', b: 'lion',
    metaDesc: "Compatibilité Gémeaux Lion : un sextile entre l'air et le feu, une complicité brillante et joyeuse. L'esprit rencontre le cœur. Dynamique, communication, défis et forces du couple.",
    ogDesc: "Sextile air/feu : la complicité éclatante entre la vivacité des Gémeaux et la chaleur du Lion.",
    h1Html: "Compatibilité Gémeaux & Lion, l'<em>esprit</em> et le <em>panache</em>",
    leadHtml: "Gémeaux et Lion forment un sextile, l'aspect de l'harmonie active. Cette compatibilité Gémeaux Lion unit l'air et le feu dans une relation brillante, joyeuse et créative, un couple qui aime jouer, séduire et briller ensemble.",
    sections: [
      { h2: null, paras: [
        "Quand les <a href=\"/signes/gemeaux\">Gémeaux</a> rencontrent le <a href=\"/signes/lion\">Lion</a>, l'air attise le feu. Le sextile crée une entente pétillante : les Gémeaux apportent l'esprit et la curiosité, le Lion la chaleur et le sens du spectacle. Ensemble, ils forment un duo charismatique, drôle et plein de vie.",
      ] },
      { h2: 'Gémeaux et Lion : la dynamique profonde', paras: [
        "Mercure (Gémeaux) et le Soleil (Lion) s'accordent joliment : l'intelligence vive au service du rayonnement. Le Lion adore avoir un partenaire spirituel et amusant qui le valorise ; les Gémeaux sont séduits par la générosité, l'assurance et la chaleur du Lion.",
        "Le feu du Lion donne de l'ampleur aux idées des Gémeaux, les Gémeaux donnent de la matière et de l'esprit à la créativité du Lion. Leur dynamique est joyeuse, sociable, tournée vers le jeu et la création.",
      ] },
      { h2: 'Comment Gémeaux et Lion communiquent', paras: [
        "La communication est brillante et chaleureuse. Les Gémeaux amusent et stimulent, le Lion entraîne et inspire. Ils adorent les conversations vivantes, l'humour, les histoires. Le Lion apprécie l'esprit des Gémeaux, qui admirent l'aisance du Lion.",
        "Le petit écueil : le Lion a besoin d'admiration et peut se vexer de la légèreté ou de l'ironie des Gémeaux ; les Gémeaux peuvent trouver le Lion susceptible. Un peu de tendresse explicite des Gémeaux suffit à rassurer le Lion.",
      ] },
      { h2: "L'alchimie entre Gémeaux et Lion", paras: [
        "L'attirance est joueuse et flamboyante : les Gémeaux séduisent par l'esprit, le Lion par le charme et la générosité. Le désir naît du jeu, de la séduction renouvelée, de l'admiration mutuelle.",
        "Leur intimité est vivante et créative. Le Lion apporte la passion et le romanesque, les Gémeaux la fantaisie et la variété. Tant que le Lion se sent admiré et les Gémeaux stimulés, le désir reste pétillant.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi tient au besoin de reconnaissance du Lion face à la légèreté des Gémeaux. Le Lion veut être au centre et pris au sérieux ; les Gémeaux papillonnent et plaisantent de tout. Le Lion peut se sentir négligé, les Gémeaux brimés dans leur liberté.",
        "La clé de résolution : les Gémeaux offrent au Lion l'admiration sincère dont il a besoin, le Lion accorde aux Gémeaux leur légèreté sans y voir un manque de respect. Le sextile rend ces ajustements faciles.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Gémeaux et Lion forment un couple charismatique et joyeux. Leur complicité, leur sociabilité et leur créativité en font des partenaires qui brillent ensemble et ne s'ennuient jamais.",
        "Les Gémeaux apportent l'esprit et la souplesse, le Lion la chaleur et la générosité : ensemble, ils rayonnent. Le sextile leur offre une entente naturelle, faite de rire et d'admiration mutuelle.",
      ] },
    ],
    faq: [
      { q: "Gémeaux et Lion sont-ils compatibles&nbsp;?", a: "Gémeaux et Lion forment un sextile entre l'air et le feu : une compatibilité naturellement joyeuse, brillante et complice. Le principal défi est le besoin de reconnaissance du Lion. La synastrie complète des deux thèmes affine ce beau potentiel." },
      { q: "Pourquoi les Gémeaux et le Lion s'entendent-ils si bien&nbsp;?", a: "L'air attise le feu : la vivacité des Gémeaux stimule le rayonnement du Lion. Tous deux sociables, créatifs et joueurs, ils partagent une énergie chaleureuse et amusante. Les Gémeaux apportent l'esprit, le Lion le panache." },
      { q: "Quel est le plus grand défi du couple Gémeaux-Lion&nbsp;?", a: "Concilier le besoin d'admiration du Lion avec la légèreté des Gémeaux. Le défi est que les Gémeaux offrent au Lion une reconnaissance sincère et que le Lion accorde aux Gémeaux leur liberté de ton." },
    ],
  }),

  pair({
    a: 'cancer', b: 'vierge',
    metaDesc: "Compatibilité Cancer Vierge : un sextile entre l'eau et la terre, un soin mutuel attentionné. L'émotion rencontre le dévouement. Dynamique, communication, défis et forces du couple.",
    ogDesc: "Sextile eau/terre : le soin attentionné entre la tendresse du Cancer et le dévouement de la Vierge.",
    h1Html: "Compatibilité Cancer & Vierge, le <em>soin</em> partagé",
    leadHtml: "Cancer et Vierge forment un sextile, l'aspect de l'harmonie active. Cette compatibilité Cancer Vierge unit l'eau et la terre dans une relation attentionnée et dévouée, deux signes qui expriment l'amour en prenant soin.",
    sections: [
      { h2: null, paras: [
        "Quand le <a href=\"/signes/cancer\">Cancer</a> rencontre la <a href=\"/signes/vierge\">Vierge</a>, l'eau et la terre s'accordent en douceur. Le sextile crée une entente fondée sur le soin : le Cancer prend soin du cœur, la Vierge du concret. Ensemble, ils tissent une relation attentive, fiable et profondément bienveillante.",
      ] },
      { h2: 'Cancer et Vierge : la dynamique profonde', paras: [
        "La Lune (Cancer) et Mercure (Vierge) associent l'intuition et le sens pratique. Le Cancer ressent les besoins, la Vierge y répond concrètement, un duo naturellement complémentaire dans l'attention à l'autre. La Vierge est apaisée par la tendresse du Cancer, le Cancer rassuré par la fiabilité de la Vierge.",
        "Tous deux discrets et dévoués, ils partagent un même goût du foyer bien tenu et de l'attention aux détails de la vie commune. Leur dynamique est paisible, sécurisante, faite de petits gestes plutôt que de grandes démonstrations.",
      ] },
      { h2: 'Comment Cancer et Vierge communiquent', paras: [
        "La communication est attentionnée et sincère. Le Cancer apporte la chaleur et l'intuition, la Vierge la clarté et le pragmatisme. La Vierge aide le Cancer à mettre de l'ordre dans ses émotions, le Cancer apprend à la Vierge la douceur du ressenti.",
        "Le petit écueil : la Vierge, critique par souci de bien faire, peut blesser le Cancer susceptible ; le Cancer peut prendre les remarques trop à cœur. Si la Vierge adoucit son ton et le Cancer relativise, l'échange reste serein.",
      ] },
      { h2: "L'alchimie entre Cancer et Vierge", paras: [
        "L'intimité se construit dans la tendresse et la confiance. Le Cancer apporte la profondeur émotionnelle, la Vierge l'attention dévouée. Tous deux pudiques, ils s'ouvrent lentement, mais leur connexion gagne en profondeur avec le temps.",
        "Leur alchimie repose sur le sentiment d'être pris en charge avec amour. La Vierge se détend au contact de la tendresse du Cancer, le Cancer se sent choyé par le dévouement de la Vierge.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi tient à l'anxiété et à la susceptibilité. La Vierge s'inquiète et critique, le Cancer s'émeut et se replie : un cercle de petites blessures peut s'installer si chacun ne fait pas attention.",
        "La clé de résolution : la Vierge transforme la critique en attention bienveillante, le Cancer exprime ses émotions au lieu de bouder. Le sextile facilite ces ajustements, ils veulent fondamentalement le bien de l'autre.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Cancer et Vierge forment un couple attentionné et stable. Leur soin mutuel, leur fiabilité et leur discrétion en font des partenaires dévoués qui construisent une vie commune douce et bien organisée.",
        "Le Cancer apporte l'âme et la chaleur, la Vierge la structure et le soin du quotidien : ensemble, un foyer où l'on se sent vraiment pris en charge. Le sextile leur offre une harmonie naturelle.",
      ] },
    ],
    faq: [
      { q: "Cancer et Vierge sont-ils compatibles&nbsp;?", a: "Cancer et Vierge forment un sextile entre l'eau et la terre : une compatibilité naturellement attentionnée, stable et dévouée. Le principal défi est l'anxiété de la Vierge et la susceptibilité du Cancer. La synastrie complète des deux thèmes affine ce beau potentiel." },
      { q: "Pourquoi le Cancer et la Vierge s'entendent-ils si bien&nbsp;?", a: "L'eau et la terre se nourrissent, et tous deux expriment l'amour par le soin : le Cancer prend soin du cœur, la Vierge du concret. Discrets et dévoués, ils partagent le goût du foyer et de l'attention à l'autre." },
      { q: "Quel est le plus grand défi du couple Cancer-Vierge&nbsp;?", a: "L'anxiété et la susceptibilité. La Vierge peut blesser le Cancer par ses critiques, le Cancer peut trop les prendre à cœur. Le défi est que la Vierge adoucisse son ton et que le Cancer exprime ses émotions sans bouder." },
    ],
  }),

  pair({
    a: 'lion', b: 'balance',
    metaDesc: "Compatibilité Lion Balance : un sextile entre le feu et l'air, une élégance rayonnante. La chaleur rencontre le charme. Dynamique, communication, défis et forces du couple.",
    ogDesc: "Sextile feu/air : l'élégance rayonnante entre la chaleur du Lion et la grâce de la Balance.",
    h1Html: "Compatibilité Lion & Balance, le <em>rayonnement</em> et la <em>grâce</em>",
    leadHtml: "Lion et Balance forment un sextile, l'aspect de l'harmonie active. Cette compatibilité Lion Balance unit le feu et l'air dans une relation élégante, chaleureuse et romantique, un couple fait pour briller et séduire.",
    sections: [
      { h2: null, paras: [
        "Quand le <a href=\"/signes/lion\">Lion</a> rencontre la <a href=\"/signes/balance\">Balance</a>, le feu et l'air s'accordent avec éclat. Le sextile crée une entente romantique : le Lion apporte la chaleur et la générosité, la Balance le charme et le raffinement. Ensemble, ils forment un couple esthète, sociable et plein d'allure.",
      ] },
      { h2: 'Lion et Balance : la dynamique profonde', paras: [
        "Le Soleil (Lion) et Vénus (Balance) sont deux astres tournés vers la beauté et le plaisir. Le Lion aime grandement et veut être admiré, la Balance aime harmonieusement et sait honorer l'autre. La Balance comble le besoin de reconnaissance du Lion par ses attentions, le Lion offre à la Balance la chaleur et la décision qui lui manquent.",
        "L'air de la Balance attise le feu du Lion sans le brusquer ; le Lion donne à la Balance l'assurance et l'élan. Leur dynamique est gracieuse, romantique, tournée vers la vie sociale et la beauté partagée.",
      ] },
      { h2: 'Comment Lion et Balance communiquent', paras: [
        "La communication est chaleureuse et diplomatique. La Balance désamorce les emportements du Lion par son tact, le Lion encourage la Balance à s'affirmer. Ils aiment les belles conversations, les sorties, la vie en couple comme une œuvre d'art.",
        "Le petit écueil : la Balance peut éviter le conflit au point de frustrer le Lion qui veut de la franchise, et le Lion peut blesser la Balance par son besoin d'être au centre. Un peu d'attention mutuelle suffit à fluidifier l'échange.",
      ] },
      { h2: "L'alchimie entre Lion et Balance", paras: [
        "L'attirance est romantique et flamboyante : le Lion par sa générosité ardente, la Balance par son charme raffiné. Le désir se nourrit de séduction, d'élégance et d'admiration mutuelle. C'est l'un des couples les plus glamour du zodiaque.",
        "Leur intimité allie passion et raffinement. Le Lion apporte l'intensité chaleureuse, la Balance la sensualité douce et l'art de la romance. Tant que le Lion se sent désiré et la Balance choyée, le désir reste vivant.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi tient à l'ego et à l'évitement. Le Lion veut être le centre, la Balance veut l'équilibre ; la Balance peut s'effacer pour préserver la paix, jusqu'à un ressentiment qui couve. Le Lion peut prendre l'indécision de la Balance pour de la tiédeur.",
        "La clé de résolution : la Balance affirme ses besoins au lieu de se sacrifier, le Lion partage la lumière. Le sextile rend ces ajustements naturels, ils aiment trop l'harmonie pour laisser les choses pourrir.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Lion et Balance forment un couple élégant, chaleureux et admiré. Leur goût commun de la beauté, leur sociabilité et leur romantisme en font des partenaires qui rendent la vie belle.",
        "Le Lion apporte la chaleur et l'assurance, la Balance la grâce et l'harmonie : ensemble, un couple rayonnant. Le sextile leur offre une entente romantique facile à cultiver.",
      ] },
    ],
    faq: [
      { q: "Lion et Balance sont-ils compatibles&nbsp;?", a: "Lion et Balance forment un sextile entre le feu et l'air : une compatibilité naturellement romantique, élégante et chaleureuse. Le principal défi est l'ego du Lion et l'évitement du conflit par la Balance. La synastrie complète des deux thèmes affine ce beau potentiel." },
      { q: "Pourquoi le Lion et la Balance s'entendent-ils si bien&nbsp;?", a: "L'air attise le feu, et tous deux aiment la beauté et le plaisir. La Balance comble le besoin de reconnaissance du Lion, qui lui offre chaleur et assurance. Leur entente est gracieuse, romantique et sociable." },
      { q: "Quel est le plus grand défi du couple Lion-Balance&nbsp;?", a: "Concilier le besoin du Lion d'être au centre avec la recherche d'équilibre de la Balance. Le défi est que la Balance affirme ses besoins au lieu de s'effacer, et que le Lion partage la lumière." },
    ],
  }),

  pair({
    a: 'vierge', b: 'scorpion',
    metaDesc: "Compatibilité Vierge Scorpion : un sextile entre la terre et l'eau, une profondeur discrète. L'analyse rencontre l'intensité. Dynamique, communication, défis et forces du couple.",
    ogDesc: "Sextile terre/eau : l'alliance profonde entre la rigueur de la Vierge et l'intensité du Scorpion.",
    h1Html: "Compatibilité Vierge & Scorpion, la <em>rigueur</em> et la <em>profondeur</em>",
    leadHtml: "Vierge et Scorpion forment un sextile, l'aspect de l'harmonie active. Cette compatibilité Vierge Scorpion unit la terre et l'eau dans une relation discrète mais profonde, deux esprits perçants qui se respectent et se complètent.",
    sections: [
      { h2: null, paras: [
        "Quand la <a href=\"/signes/vierge\">Vierge</a> rencontre le <a href=\"/signes/scorpion\">Scorpion</a>, la terre et l'eau s'allient avec force. Le sextile crée une entente fondée sur la lucidité : tous deux voient ce que les autres manquent. La Vierge analyse, le Scorpion sonde, ensemble, rien ne leur échappe.",
      ] },
      { h2: 'Vierge et Scorpion : la dynamique profonde', paras: [
        "Mercure (Vierge) et Pluton (Scorpion) associent l'analyse et l'intuition profonde. La Vierge décortique le concret, le Scorpion perce les profondeurs cachées : une complémentarité de regards perçants. Le Scorpion est rassuré par la fiabilité et l'intelligence de la Vierge, la Vierge fascinée par l'intensité et la profondeur du Scorpion.",
        "Tous deux discrets, exigeants et loyaux, ils partagent un goût de la vérité et du sérieux. La terre de la Vierge contient et canalise l'eau intense du Scorpion ; le Scorpion donne de la profondeur au pragmatisme de la Vierge.",
      ] },
      { h2: 'Comment Vierge et Scorpion communiquent', paras: [
        "La communication est sincère, profonde et sans bavardage inutile. La Vierge apporte la clarté, le Scorpion l'intensité ; ils vont au fond des choses et détestent la superficialité. Le Scorpion apprécie que la Vierge ne fuie pas les sujets difficiles.",
        "Le petit écueil : la Vierge critique, le Scorpion garde rancune ; les piques peuvent s'enkyster. La clé est que la Vierge adoucisse ses remarques et que le Scorpion exprime ses ressentiments au lieu de les ruminer.",
      ] },
      { h2: "L'alchimie entre Vierge et Scorpion", paras: [
        "L'intimité gagne en profondeur ce qu'elle met de temps à s'installer. La Vierge, souvent pudique, est éveillée par l'intensité magnétique du Scorpion ; le Scorpion est touché par le dévouement attentif de la Vierge. Leur connexion se densifie dans la confiance.",
        "Leur alchimie repose sur la sécurité et la profondeur. La Vierge offre un cadre fiable où le Scorpion peut s'abandonner, le Scorpion entraîne la Vierge vers une intensité qu'elle ne soupçonnait pas.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi tient à la critique et au contrôle. La Vierge perfectionniste peut juger, le Scorpion soupçonneux peut chercher à contrôler ; deux exigeants peuvent créer un climat tendu de méfiance et de reproches.",
        "La clé de résolution : la Vierge accepte l'imperfection, le Scorpion accorde sa confiance. Le sextile facilite ces ajustements, leur respect mutuel est un socle solide.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Vierge et Scorpion forment un couple profond et fiable. Leur lucidité commune, leur loyauté et leur sérieux en font des partenaires qui se comprennent en profondeur et construisent sur du solide.",
        "La Vierge apporte la structure et le soin, le Scorpion la profondeur et la transformation : ensemble, ils peuvent tout traverser. Le sextile leur offre une entente forte, faite de respect et d'intensité maîtrisée.",
      ] },
    ],
    faq: [
      { q: "Vierge et Scorpion sont-ils compatibles&nbsp;?", a: "Vierge et Scorpion forment un sextile entre la terre et l'eau : une compatibilité naturellement profonde, loyale et lucide. Le principal défi est la critique de la Vierge et le contrôle du Scorpion. La synastrie complète des deux thèmes affine ce beau potentiel." },
      { q: "Pourquoi la Vierge et le Scorpion s'entendent-ils si bien&nbsp;?", a: "La terre et l'eau se nourrissent, et tous deux sont lucides, discrets et exigeants. La Vierge analyse, le Scorpion sonde : rien ne leur échappe. La terre de la Vierge canalise l'intensité du Scorpion, qui approfondit son pragmatisme." },
      { q: "Quel est le plus grand défi du couple Vierge-Scorpion&nbsp;?", a: "La critique et le contrôle. La Vierge perfectionniste peut juger, le Scorpion soupçonneux peut vouloir contrôler. Le défi est que la Vierge accepte l'imperfection et que le Scorpion accorde sa confiance." },
    ],
  }),

  pair({
    a: 'balance', b: 'sagittaire',
    metaDesc: "Compatibilité Balance Sagittaire : un sextile entre l'air et le feu, une complicité ouverte et aventureuse. L'harmonie rencontre la quête. Dynamique, défis et forces du couple.",
    ogDesc: "Sextile air/feu : la complicité ouverte entre la grâce de la Balance et l'élan du Sagittaire.",
    h1Html: "Compatibilité Balance & Sagittaire, l'<em>harmonie</em> et l'<em>aventure</em>",
    leadHtml: "Balance et Sagittaire forment un sextile, l'aspect de l'harmonie active. Cette compatibilité Balance Sagittaire unit l'air et le feu dans une relation ouverte, joyeuse et stimulante, un couple curieux du monde et des autres.",
    sections: [
      { h2: null, paras: [
        "Quand la <a href=\"/signes/balance\">Balance</a> rencontre le <a href=\"/signes/sagittaire\">Sagittaire</a>, l'air attise le feu. Le sextile crée une entente légère et enthousiaste : la Balance apporte la grâce et le sens du lien, le Sagittaire l'optimisme et le goût de l'aventure. Ensemble, ils aiment explorer, recevoir, élargir leurs horizons.",
      ] },
      { h2: 'Balance et Sagittaire : la dynamique profonde', paras: [
        "Vénus (Balance) et Jupiter (Sagittaire) sont deux planètes généreuses et tournées vers l'expansion. La Balance cherche l'harmonie relationnelle, le Sagittaire le sens et la liberté, deux quêtes qui se nourrissent. Le Sagittaire admire le charme et l'équité de la Balance, qui est séduite par la joie de vivre et l'ouverture du Sagittaire.",
        "L'air de la Balance soutient le feu du Sagittaire ; le Sagittaire entraîne la Balance hors de son indécision. Leur dynamique est sociable, curieuse, tournée vers les autres et le monde.",
      ] },
      { h2: 'Comment Balance et Sagittaire communiquent', paras: [
        "La communication est ouverte et stimulante. La Balance apporte la nuance et le tact, le Sagittaire la franchise et la vision. Ils aiment débattre d'idées, de cultures, de philosophie, sans se prendre la tête.",
        "Le petit écueil : la franchise parfois brutale du Sagittaire peut heurter la sensibilité de la Balance, qui peut sembler trop attachée aux formes. Un peu de tact du Sagittaire et de souplesse de la Balance suffisent.",
      ] },
      { h2: "L'alchimie entre Balance et Sagittaire", paras: [
        "L'attirance est joyeuse et romantique : la Balance par son charme, le Sagittaire par son enthousiasme. Le désir se nourrit d'aventures partagées, de découvertes, de légèreté.",
        "Leur intimité est vivante et libre. La Balance apporte la sensualité raffinée, le Sagittaire la fantaisie et la spontanéité. Leur goût commun de la liberté maintient le désir, à condition de ne pas confondre légèreté et distance.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi tient au besoin de proximité de la Balance face à la liberté du Sagittaire. La Balance veut un partenaire présent et complice, le Sagittaire chérit son indépendance et ses escapades. La Balance peut se sentir négligée.",
        "La clé de résolution : le Sagittaire offre des marques de présence, la Balance accorde de l'espace sans angoisser. Le sextile facilite ces ajustements, leur entente est fondamentalement légère et bienveillante.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Balance et Sagittaire forment un couple ouvert, joyeux et stimulant. Leur sociabilité, leur curiosité et leur optimisme en font des partenaires qui agrandissent mutuellement leur monde.",
        "La Balance apporte la grâce et le lien, le Sagittaire l'aventure et le sens : ensemble, une vie pleine de découvertes. Le sextile leur offre une harmonie naturelle, faite de liberté et de complicité.",
      ] },
    ],
    faq: [
      { q: "Balance et Sagittaire sont-ils compatibles&nbsp;?", a: "Balance et Sagittaire forment un sextile entre l'air et le feu : une compatibilité naturellement ouverte, joyeuse et stimulante. Le principal défi est le besoin de proximité de la Balance face à la liberté du Sagittaire. La synastrie complète des deux thèmes affine ce beau potentiel." },
      { q: "Pourquoi la Balance et le Sagittaire s'entendent-ils si bien&nbsp;?", a: "L'air attise le feu, et tous deux sont généreux, sociables et curieux du monde. Le Sagittaire entraîne la Balance hors de son indécision, la Balance adoucit la franchise du Sagittaire. Leur entente est légère et enthousiaste." },
      { q: "Quel est le plus grand défi du couple Balance-Sagittaire&nbsp;?", a: "Concilier le besoin de proximité de la Balance avec la liberté du Sagittaire. Le défi est que le Sagittaire offre des marques de présence et que la Balance accorde de l'espace sans angoisser." },
    ],
  }),

  pair({
    a: 'scorpion', b: 'capricorne',
    metaDesc: "Compatibilité Scorpion Capricorne : un sextile entre l'eau et la terre, une alliance puissante et déterminée. L'intensité rencontre l'ambition. Dynamique, défis et forces du couple.",
    ogDesc: "Sextile eau/terre : l'alliance puissante entre l'intensité du Scorpion et l'ambition du Capricorne.",
    h1Html: "Compatibilité Scorpion & Capricorne, l'<em>intensité</em> et l'<em>ambition</em>",
    leadHtml: "Scorpion et Capricorne forment un sextile, l'aspect de l'harmonie active. Cette compatibilité Scorpion Capricorne unit l'eau et la terre dans une relation puissante, loyale et déterminée, un couple bâti pour durer et accomplir.",
    sections: [
      { h2: null, paras: [
        "Quand le <a href=\"/signes/scorpion\">Scorpion</a> rencontre le <a href=\"/signes/capricorne\">Capricorne</a>, l'eau et la terre s'allient avec force. Le sextile crée une entente fondée sur la profondeur et la détermination : le Scorpion apporte l'intensité émotionnelle, le Capricorne la structure et l'ambition. Ensemble, ils forment un couple redoutablement solide.",
      ] },
      { h2: 'Scorpion et Capricorne : la dynamique profonde', paras: [
        "Pluton (Scorpion) et Saturne (Capricorne) sont deux planètes de pouvoir et de transformation : l'une plonge dans les profondeurs, l'autre bâtit dans la durée. Le Capricorne est rassuré par l'intensité loyale du Scorpion, le Scorpion respecte la maîtrise et la fiabilité du Capricorne.",
        "Tous deux sérieux, déterminés et profonds, ils partagent une compréhension instinctive : ni l'un ni l'autre ne fait les choses à moitié. La terre du Capricorne contient l'eau intense du Scorpion ; le Scorpion donne de la profondeur émotionnelle au Capricorne.",
      ] },
      { h2: 'Comment Scorpion et Capricorne communiquent', paras: [
        "La communication est sobre, sincère et profonde. Peu bavards tous les deux, ils se comprennent par les actes et les regards autant que par les mots. Le Scorpion apprécie le réalisme du Capricorne, le Capricorne la lucidité du Scorpion.",
        "Le petit écueil : tous deux peuvent se fermer, le Scorpion par méfiance, le Capricorne par pudeur. La clé est d'oser exprimer les émotions et les besoins plutôt que de tout garder pour soi.",
      ] },
      { h2: "L'alchimie entre Scorpion et Capricorne", paras: [
        "L'intimité est profonde, intense et durable. Le Scorpion apporte la passion magnétique, le Capricorne une sensualité contenue qui se révèle dans la confiance. Leur connexion physique se densifie avec le temps et la sécurité.",
        "Leur alchimie repose sur la loyauté et la profondeur. Le Capricorne offre un cadre stable où le Scorpion peut s'abandonner, le Scorpion entraîne le Capricorne vers une intensité émotionnelle qu'il s'autorise rarement.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi tient au contrôle et à la rétention émotionnelle. Le Scorpion peut être possessif, le Capricorne distant ou absorbé par le travail ; deux êtres réservés peuvent laisser les non-dits et la méfiance s'installer.",
        "La clé de résolution : le Scorpion accorde sa confiance, le Capricorne se rend émotionnellement disponible. Le sextile facilite ces ajustements, leur respect et leur loyauté mutuels sont un socle puissant.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Scorpion et Capricorne forment un couple d'une force et d'une loyauté exceptionnelles. Leur détermination commune, leur profondeur et leur sérieux en font des partenaires capables de bâtir et de tout traverser ensemble.",
        "Le Scorpion apporte l'âme et l'intensité, le Capricorne la structure et l'ambition : ensemble, ils sont quasi inarrêtables. Le sextile leur offre une alliance profonde, faite de respect et de puissance partagée.",
      ] },
    ],
    faq: [
      { q: "Scorpion et Capricorne sont-ils compatibles&nbsp;?", a: "Scorpion et Capricorne forment un sextile entre l'eau et la terre : une compatibilité naturellement puissante, loyale et déterminée. Le principal défi est le contrôle du Scorpion et la rétention émotionnelle du Capricorne. La synastrie complète des deux thèmes affine ce beau potentiel." },
      { q: "Pourquoi le Scorpion et le Capricorne s'entendent-ils si bien&nbsp;?", a: "La terre et l'eau se nourrissent, et tous deux sont profonds, sérieux et déterminés. Le Capricorne offre la structure, le Scorpion l'intensité loyale. Ils se comprennent instinctivement : aucun ne fait les choses à moitié." },
      { q: "Quel est le plus grand défi du couple Scorpion-Capricorne&nbsp;?", a: "Le contrôle et la rétention émotionnelle. Le Scorpion peut être possessif, le Capricorne distant. Le défi est que le Scorpion accorde sa confiance et que le Capricorne se rende émotionnellement disponible." },
    ],
  }),

  pair({
    a: 'sagittaire', b: 'verseau',
    metaDesc: "Compatibilité Sagittaire Verseau : un sextile entre le feu et l'air, une complicité libre et visionnaire. L'aventure rencontre les idéaux. Dynamique, défis et forces du couple.",
    ogDesc: "Sextile feu/air : la complicité libre entre l'élan du Sagittaire et la vision du Verseau.",
    h1Html: "Compatibilité Sagittaire & Verseau, la <em>liberté</em> et la <em>vision</em>",
    leadHtml: "Sagittaire et Verseau forment un sextile, l'aspect de l'harmonie active. Cette compatibilité Sagittaire Verseau unit le feu et l'air dans une relation libre, idéaliste et stimulante, deux esprits indépendants qui rêvent grand ensemble.",
    sections: [
      { h2: null, paras: [
        "Quand le <a href=\"/signes/sagittaire\">Sagittaire</a> rencontre le <a href=\"/signes/verseau\">Verseau</a>, le feu et l'air s'enflamment d'idéal. Le sextile crée une entente naturelle entre deux amoureux de la liberté : le Sagittaire apporte l'enthousiasme et la quête de sens, le Verseau la vision et l'originalité. Ensemble, ils veulent changer et explorer le monde.",
      ] },
      { h2: 'Sagittaire et Verseau : la dynamique profonde', paras: [
        "Jupiter (Sagittaire) et Uranus (Verseau) associent l'expansion et l'innovation : l'un élargit les horizons, l'autre invente l'avenir. Tous deux épris de liberté, ils se respectent profondément et ne cherchent jamais à enfermer l'autre. Le Verseau admire l'optimisme du Sagittaire, qui est fasciné par la pensée visionnaire du Verseau.",
        "Le feu du Sagittaire est nourri par l'air du Verseau : leurs idées et leurs causes se rejoignent. Leur dynamique est libre, intellectuelle, tournée vers l'avenir et les grandes idées.",
      ] },
      { h2: 'Comment Sagittaire et Verseau communiquent', paras: [
        "La communication est riche, ouverte et passionnante. Tous deux aiment les idées, les débats, les visions du monde. Le Sagittaire apporte la philosophie et la foi, le Verseau la réflexion et l'avant-garde. Ils ne s'ennuient jamais.",
        "Le petit écueil : tous deux peuvent privilégier les idées sur les émotions et fuir l'intimité profonde. La clé est de ne pas tout intellectualiser et d'oser le terrain du cœur.",
      ] },
      { h2: "L'alchimie entre Sagittaire et Verseau", paras: [
        "L'attirance est intellectuelle et aventureuse : ils se séduisent par les idées, l'originalité, le goût de la liberté. Le désir se nourrit de la complicité d'esprit et de l'aventure partagée.",
        "Leur intimité est inventive et décontractée. Le Sagittaire apporte la chaleur et la spontanéité, le Verseau la surprise et l'expérimentation. Leur liberté mutuelle entretient le désir sans possessivité.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi tient à l'engagement émotionnel et à l'ancrage. Deux amoureux de la liberté peuvent fuir l'intimité profonde et le quotidien, préférant les idées et l'aventure. Le risque est une belle amitié amoureuse qui n'ose pas se fixer.",
        "La clé de résolution : oser la vulnérabilité, transformer la complicité d'esprit en intimité du cœur. Le sextile facilite ces ajustements, leur respect mutuel et leur liberté partagée sont un terrain solide.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Sagittaire et Verseau forment un couple libre, idéaliste et stimulant. Leur indépendance respectée, leur curiosité et leurs idéaux communs en font des partenaires qui grandissent ensemble sans s'étouffer.",
        "Le Sagittaire apporte la foi et l'aventure, le Verseau la vision et l'innovation : ensemble, ils peuvent rêver et bâtir grand. Le sextile leur offre une complicité naturelle, faite de liberté et d'enthousiasme.",
      ] },
    ],
    faq: [
      { q: "Sagittaire et Verseau sont-ils compatibles&nbsp;?", a: "Sagittaire et Verseau forment un sextile entre le feu et l'air : une compatibilité naturellement libre, idéaliste et stimulante. Le principal défi est l'engagement émotionnel. La synastrie complète des deux thèmes affine ce beau potentiel." },
      { q: "Pourquoi le Sagittaire et le Verseau s'entendent-ils si bien&nbsp;?", a: "Le feu et l'air se stimulent, et tous deux chérissent la liberté, les idées et l'avenir. Le Verseau admire l'optimisme du Sagittaire, qui est fasciné par sa vision. Ils ne cherchent jamais à enfermer l'autre." },
      { q: "Quel est le plus grand défi du couple Sagittaire-Verseau&nbsp;?", a: "L'engagement émotionnel et l'ancrage. Deux amoureux de la liberté peuvent rester dans l'amitié amoureuse sans oser se fixer. Le défi est de transformer la complicité d'esprit en véritable intimité du cœur." },
    ],
  }),

  pair({
    a: 'capricorne', b: 'poissons',
    metaDesc: "Compatibilité Capricorne Poissons : un sextile entre la terre et l'eau, une rencontre du concret et du rêve. La structure rencontre la compassion. Dynamique, défis et forces du couple.",
    ogDesc: "Sextile terre/eau : la rencontre féconde entre la structure du Capricorne et le rêve des Poissons.",
    h1Html: "Compatibilité Capricorne & Poissons, la <em>structure</em> et le <em>rêve</em>",
    leadHtml: "Capricorne et Poissons forment un sextile, l'aspect de l'harmonie active. Cette compatibilité Capricorne Poissons unit la terre et l'eau dans une relation complémentaire et tendre, le réalisme au service du rêve, le rêve qui adoucit le réalisme.",
    sections: [
      { h2: null, paras: [
        "Quand le <a href=\"/signes/capricorne\">Capricorne</a> rencontre les <a href=\"/signes/poissons\">Poissons</a>, la terre et l'eau se rencontrent avec douceur. Le sextile crée une complémentarité touchante : le Capricorne apporte la structure et la fiabilité, les Poissons la sensibilité et l'imagination. L'un ancre, l'autre inspire.",
      ] },
      { h2: 'Capricorne et Poissons : la dynamique profonde', paras: [
        "Saturne (Capricorne) et Neptune (Poissons) associent le réel et le rêve, la limite et l'infini. Le Capricorne donne aux Poissons un cadre rassurant, les Poissons offrent au Capricorne une douceur et une dimension spirituelle qui adoucissent sa rigueur. Le Capricorne est touché par la tendresse des Poissons, les Poissons rassurés par la solidité du Capricorne.",
        "La terre du Capricorne contient l'eau fluide des Poissons : il leur évite de se disperser, ils l'aident à se relier à ses émotions. Leur dynamique est tendre, complémentaire, faite d'un soutien mutuel discret.",
      ] },
      { h2: 'Comment Capricorne et Poissons communiquent', paras: [
        "La communication associe le pragmatisme et l'intuition. Le Capricorne apporte la clarté et les solutions, les Poissons l'écoute et la compassion. Le Capricorne aide les Poissons à structurer leurs émotions, les Poissons adoucissent la sévérité du Capricorne.",
        "Le petit écueil : le Capricorne peut sembler froid ou trop rationnel aux Poissons sensibles, qui peuvent sembler flous ou fuyants au Capricorne. Un peu de douceur de l'un et de clarté de l'autre suffisent.",
      ] },
      { h2: "L'alchimie entre Capricorne et Poissons", paras: [
        "L'intimité est tendre et profonde. Les Poissons ouvrent le Capricorne au lâcher-prise et à la tendresse sans calcul, le Capricorne offre aux Poissons une présence fiable et rassurante. Leur connexion mêle la sécurité et la douceur.",
        "Leur alchimie repose sur la complémentarité : le Capricorne se réchauffe au contact des Poissons, les Poissons s'ancrent au contact du Capricorne. Le désir, discret, se nourrit de confiance et de tendresse.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi tient au décalage entre réalisme et idéalisme. Le Capricorne, terre-à-terre et tourné vers le travail, peut négliger les besoins émotionnels des Poissons ; ceux-ci peuvent manquer de sens pratique et frustrer le Capricorne.",
        "La clé de résolution : le Capricorne fait de la place à la tendresse et au rêve, les Poissons assument leur part de concret. Le sextile facilite ces ajustements, leur complémentarité est une vraie richesse.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Capricorne et Poissons forment un couple tendre et complémentaire. Le réalisme de l'un et la sensibilité de l'autre se soutiennent : le Capricorne protège les Poissons, les Poissons humanisent le Capricorne.",
        "Le Capricorne apporte la structure, les Poissons l'âme : ensemble, ils relient le ciel et la terre. Le sextile leur offre une harmonie douce, faite de soutien mutuel et de tendresse.",
      ] },
    ],
    faq: [
      { q: "Capricorne et Poissons sont-ils compatibles&nbsp;?", a: "Capricorne et Poissons forment un sextile entre la terre et l'eau : une compatibilité naturellement tendre et complémentaire. Le principal défi est le décalage entre réalisme et idéalisme. La synastrie complète des deux thèmes affine ce beau potentiel." },
      { q: "Pourquoi le Capricorne et les Poissons s'entendent-ils si bien&nbsp;?", a: "La terre et l'eau se nourrissent : le Capricorne ancre les Poissons, qui adoucissent sa rigueur. L'un apporte la structure, l'autre la sensibilité et le rêve. Leur complémentarité crée un soutien mutuel touchant." },
      { q: "Quel est le plus grand défi du couple Capricorne-Poissons&nbsp;?", a: "Le décalage entre réalisme et idéalisme. Le Capricorne peut négliger les besoins émotionnels des Poissons, qui peuvent manquer de sens pratique. Le défi est que le Capricorne fasse place à la tendresse et que les Poissons assument leur part de concret." },
    ],
  }),

  pair({
    a: 'belier', b: 'verseau',
    metaDesc: "Compatibilité Bélier Verseau : un sextile entre le feu et l'air, une complicité libre et électrique. L'audace rencontre l'originalité. Dynamique, défis et forces du couple.",
    ogDesc: "Sextile feu/air : la complicité électrique entre l'audace du Bélier et l'originalité du Verseau.",
    h1Html: "Compatibilité Bélier & Verseau, l'<em>audace</em> et l'<em>originalité</em>",
    leadHtml: "Bélier et Verseau forment un sextile, l'aspect de l'harmonie active. Cette compatibilité Bélier Verseau unit le feu et l'air dans une relation libre, dynamique et originale, un couple d'aventuriers qui refuse les sentiers battus.",
    sections: [
      { h2: null, paras: [
        "Quand le <a href=\"/signes/belier\">Bélier</a> rencontre le <a href=\"/signes/verseau\">Verseau</a>, le feu et l'air s'électrisent. Le sextile crée une entente dynamique et indépendante : le Bélier apporte l'audace et l'action, le Verseau l'originalité et la vision. Ensemble, ils osent, innovent et avancent sans se retourner.",
      ] },
      { h2: 'Bélier et Verseau : la dynamique profonde', paras: [
        "Mars (Bélier) et Uranus (Verseau) forment un duo électrique : l'énergie brute rencontre l'éclair de l'innovation. Le Bélier admire l'indépendance et les idées d'avant-garde du Verseau, qui apprécie l'énergie et le courage du Bélier. Aucun ne cherche à enfermer l'autre.",
        "Le feu du Bélier est attisé par l'air du Verseau : leurs élans se renforcent. Leur dynamique est libre, audacieuse, tournée vers l'action et le changement. Ils se donnent mutuellement de l'espace, ce qui leur convient parfaitement.",
      ] },
      { h2: 'Comment Bélier et Verseau communiquent', paras: [
        "La communication est directe, vive et stimulante. Le Bélier dit les choses sans détour, le Verseau apporte des idées surprenantes. Ils adorent débattre, provoquer, repousser les limites, sans rancune.",
        "Le petit écueil : le Bélier veut une réaction immédiate et passionnée, le Verseau peut rester détaché et cérébral. Un peu de présence émotionnelle du Verseau et de patience du Bélier suffisent à fluidifier l'échange.",
      ] },
      { h2: "L'alchimie entre Bélier et Verseau", paras: [
        "L'attirance est électrique et aventureuse : le Bélier par son ardeur, le Verseau par son magnétisme original. Le désir se nourrit de surprise, d'expérimentation et de liberté.",
        "Leur intimité est inventive et énergique. Le Bélier apporte la passion directe, le Verseau l'audace et la nouveauté. Leur liberté mutuelle entretient le désir sans possessivité ni routine.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi tient à l'intimité émotionnelle. Le Bélier veut de l'intensité et de la réactivité, le Verseau peut se réfugier dans le détachement et les idées. Tous deux indépendants, ils peuvent privilégier l'action et la liberté au détriment du lien profond.",
        "La clé de résolution : le Verseau s'engage émotionnellement, le Bélier respecte le besoin d'espace du Verseau. Le sextile facilite ces ajustements, leur complicité dynamique est un socle solide.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Bélier et Verseau forment un couple libre, dynamique et original. Leur indépendance respectée, leur audace et leur goût du changement en font des partenaires qui avancent ensemble sans s'étouffer.",
        "Le Bélier apporte l'action et le courage, le Verseau la vision et l'innovation : ensemble, ils sont des pionniers. Le sextile leur offre une complicité électrique, faite de liberté et d'élan partagé.",
      ] },
    ],
    faq: [
      { q: "Bélier et Verseau sont-ils compatibles&nbsp;?", a: "Bélier et Verseau forment un sextile entre le feu et l'air : une compatibilité naturellement libre, dynamique et originale. Le principal défi est l'intimité émotionnelle. La synastrie complète des deux thèmes affine ce beau potentiel." },
      { q: "Pourquoi le Bélier et le Verseau s'entendent-ils si bien&nbsp;?", a: "Le feu et l'air se stimulent, et tous deux chérissent l'indépendance et l'action. Le Bélier admire l'originalité du Verseau, qui apprécie son énergie. Aucun ne cherche à enfermer l'autre, ce qui leur convient parfaitement." },
      { q: "Quel est le plus grand défi du couple Bélier-Verseau&nbsp;?", a: "L'intimité émotionnelle. Tous deux indépendants, ils peuvent privilégier l'action et la liberté au détriment du lien profond. Le défi est que le Verseau s'engage émotionnellement et que le Bélier respecte son besoin d'espace." },
    ],
  }),

  pair({
    a: 'taureau', b: 'poissons',
    metaDesc: "Compatibilité Taureau Poissons : un sextile entre la terre et l'eau, une tendresse sensuelle et rêveuse. Le concret rencontre l'imaginaire. Dynamique, défis et forces du couple.",
    ogDesc: "Sextile terre/eau : la tendresse sensuelle entre l'ancrage du Taureau et le rêve des Poissons.",
    h1Html: "Compatibilité Taureau & Poissons, la <em>sensualité</em> et le <em>rêve</em>",
    leadHtml: "Taureau et Poissons forment un sextile, l'aspect de l'harmonie active. Cette compatibilité Taureau Poissons unit la terre et l'eau dans une relation tendre, sensuelle et poétique, un couple où le concret et l'imaginaire s'enlacent.",
    sections: [
      { h2: null, paras: [
        "Quand le <a href=\"/signes/taureau\">Taureau</a> rencontre les <a href=\"/signes/poissons\">Poissons</a>, la terre et l'eau se fécondent avec douceur. Le sextile crée une entente tendre et sensuelle : le Taureau apporte l'ancrage et la sensualité, les Poissons la tendresse et l'imaginaire. Ensemble, ils créent un cocon doux, hors du temps.",
      ] },
      { h2: 'Taureau et Poissons : la dynamique profonde', paras: [
        "Vénus (Taureau) et Neptune (Poissons) associent le plaisir sensoriel et le rêve : un amour à la fois charnel et poétique. Le Taureau offre aux Poissons un ancrage rassurant, les Poissons offrent au Taureau une dimension spirituelle et romantique qui élève sa sensualité. Le Taureau est touché par la douceur des Poissons, les Poissons rassurés par la solidité du Taureau.",
        "La terre du Taureau contient l'eau fluide des Poissons : il leur évite de se perdre, ils l'ouvrent à l'imaginaire et à la tendresse. Leur dynamique est paisible, douce, profondément affectueuse.",
      ] },
      { h2: 'Comment Taureau et Poissons communiquent', paras: [
        "La communication est douce et bienveillante. Le Taureau apporte le concret et la stabilité, les Poissons l'écoute et la sensibilité. Ni l'un ni l'autre n'aime le conflit ; ils privilégient la tendresse et l'harmonie.",
        "Le petit écueil : le Taureau pragmatique peut ne pas comprendre le flou émotionnel des Poissons, qui peuvent trouver le Taureau trop terre-à-terre. Un peu d'imagination du Taureau et d'ancrage des Poissons suffisent.",
      ] },
      { h2: "L'alchimie entre Taureau et Poissons", paras: [
        "L'intimité est sensuelle, tendre et poétique. Le Taureau apporte la sensualité lente et charnelle, les Poissons la fusion émotionnelle et l'imaginaire. Leur connexion mêle le plaisir des sens et la magie du rêve.",
        "Leur alchimie repose sur la douceur et la confiance. Le Taureau ancre les Poissons dans le plaisir du corps, les Poissons élèvent la sensualité du Taureau vers une dimension romantique. Un désir doux et profond.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi tient au décalage entre concret et rêve. Le Taureau attaché au réel et à la sécurité peut s'agacer du flou des Poissons ; ceux-ci peuvent manquer de sens pratique et trouver le Taureau peu romantique.",
        "La clé de résolution : le Taureau s'ouvre à l'imaginaire et à la tendresse subtile des Poissons, les Poissons s'ancrent dans le concret du Taureau. Le sextile facilite ces ajustements, leur tendresse mutuelle dissout les tensions.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Taureau et Poissons forment un couple tendre, sensuel et poétique. La stabilité de l'un et la sensibilité de l'autre se soutiennent : le Taureau protège les Poissons, les Poissons enchantent le Taureau.",
        "Le Taureau apporte l'ancrage et la sensualité, les Poissons le rêve et la tendresse : ensemble, un cocon doux et romantique. Le sextile leur offre une harmonie naturelle, faite d'affection et de douceur.",
      ] },
    ],
    faq: [
      { q: "Taureau et Poissons sont-ils compatibles&nbsp;?", a: "Taureau et Poissons forment un sextile entre la terre et l'eau : une compatibilité naturellement tendre, sensuelle et poétique. Le principal défi est le décalage entre concret et rêve. La synastrie complète des deux thèmes affine ce beau potentiel." },
      { q: "Pourquoi le Taureau et les Poissons s'entendent-ils si bien&nbsp;?", a: "La terre et l'eau se nourrissent : le Taureau ancre les Poissons, qui élèvent sa sensualité vers le romantisme. L'un apporte le concret et le plaisir des sens, l'autre la tendresse et l'imaginaire. Une rencontre douce et affectueuse." },
      { q: "Quel est le plus grand défi du couple Taureau-Poissons&nbsp;?", a: "Le décalage entre concret et rêve. Le Taureau peut s'agacer du flou des Poissons, qui peuvent le trouver peu romantique. Le défi est que le Taureau s'ouvre à l'imaginaire et que les Poissons s'ancrent dans le réel." },
    ],
  }),

  // ===================== SEMI-SEXTILES (30°) — voisins, ajustement =====================
  pair({
    a: 'belier', b: 'taureau',
    metaDesc: "Compatibilité Bélier Taureau : un semi-sextile entre signes voisins, le feu et la terre. L'impulsion contre la patience, un ajustement de rythme. Dynamique, défis et forces.",
    ogDesc: "Semi-sextile feu/terre : l'apprentissage mutuel entre l'élan du Bélier et la patience du Taureau.",
    h1Html: "Compatibilité Bélier & Taureau, l'<em>élan</em> et l'<em>ancrage</em>",
    leadHtml: "Bélier et Taureau sont voisins dans le zodiaque : leur compatibilité prend la forme d'un semi-sextile, l'aspect du léger inconfort fécond. Le feu impatient côtoie la terre patiente, deux rythmes à accorder, mais beaucoup à s'apprendre.",
    sections: [
      { h2: null, paras: [
        "Le <a href=\"/signes/belier\">Bélier</a> précède immédiatement le <a href=\"/signes/taureau\">Taureau</a> dans la roue zodiacale. Ce voisinage crée un semi-sextile : ni opposition ni harmonie évidente, mais un décalage subtil. Le Bélier allume, le Taureau consolide ; le premier a l'énergie de l'élan, le second la sagesse de la durée. L'un détient ce qui manque à l'autre, d'où un ajustement à trouver.",
      ] },
      { h2: 'Bélier et Taureau : la dynamique profonde', paras: [
        "Mars (Bélier) et Vénus (Taureau) forment le couple archétypal du désir et du plaisir : l'impulsion rencontre la sensualité. Le Bélier veut conquérir vite, le Taureau veut savourer lentement. Le Taureau apprend du Bélier à oser, le Bélier apprend du Taureau à durer et à profiter.",
        "Le semi-sextile demande un effort conscient : leurs natures ne se comprennent pas d'emblée. Le Bélier peut trouver le Taureau lent et passif, le Taureau peut trouver le Bélier brusque et instable. Mais ce voisinage cache une complémentarité réelle, le Taureau ancre le feu du Bélier, le Bélier dynamise la terre du Taureau.",
      ] },
      { h2: 'Comment Bélier et Taureau communiquent', paras: [
        "Le Bélier va vite et fort, le Taureau prend son temps et pèse ses mots. Le Bélier s'impatiente, le Taureau se braque face à la pression. Leurs tempos de communication diffèrent nettement.",
        "La clé est le respect du rythme : le Bélier apprend à laisser le Taureau réfléchir sans le bousculer, le Taureau à ne pas prendre l'impulsivité du Bélier pour de l'agression. Quand chacun ralentit ou accélère un peu, le dialogue trouve son équilibre.",
      ] },
      { h2: "L'alchimie entre Bélier et Taureau", paras: [
        "L'attirance Mars-Vénus est puissante : le Bélier est séduit par la sensualité tranquille du Taureau, le Taureau par l'ardeur du Bélier. Dans l'intimité, la fougue rencontre la lenteur voluptueuse, un contraste qui peut être délicieux.",
        "L'écueil est le rythme, encore : le Bélier veut tout de suite, le Taureau veut faire durer. Si le Bélier apprend la patience sensuelle du Taureau et le Taureau accueille l'élan du Bélier, leur intimité devient riche et complémentaire.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi central oppose l'impulsivité du Bélier à l'inertie du Taureau. Le Bélier veut changer, bouger, foncer ; le Taureau veut stabiliser, garder, ne rien précipiter. Le besoin de sécurité du Taureau peut sembler une entrave au Bélier, l'agitation du Bélier une menace au Taureau.",
        "La clé de résolution : valoriser la complémentarité plutôt que la subir. Le Bélier offre au Taureau le courage du changement, le Taureau offre au Bélier la patience qui fait aboutir. C'est tout le sens du semi-sextile : un apprentissage de voisinage.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand ils accordent leurs rythmes, Bélier et Taureau forment un couple à la fois dynamique et solide. Le Bélier lance les projets, le Taureau les mène à terme et les fait durer, une combinaison efficace dans la vie comme en amour.",
        "Le Bélier empêche le Taureau de s'endormir dans la routine, le Taureau empêche le Bélier de s'épuiser dans la précipitation. Le léger inconfort du semi-sextile devient un équilibre fécond entre l'action et la patience.",
      ] },
    ],
    faq: [
      { q: "Bélier et Taureau sont-ils compatibles&nbsp;?", a: "Bélier et Taureau, signes voisins, forment un semi-sextile : une compatibilité d'ajustement, sans hostilité mais sans évidence. Leurs rythmes opposés demandent un effort, mais leur complémentarité Mars-Vénus est réelle. La synastrie complète des deux thèmes nuance fortement ce portrait." },
      { q: "Pourquoi le Bélier et le Taureau ont-ils des rythmes opposés&nbsp;?", a: "Le Bélier (feu cardinal) initie vite et fonce ; le Taureau (terre fixe) consolide lentement et fait durer. Comme signes voisins, ils ne partagent ni élément ni mode, d'où un décalage de tempo. Mais le Bélier dynamise le Taureau, qui ancre le Bélier." },
      { q: "Quel est le plus grand défi du couple Bélier-Taureau&nbsp;?", a: "Accorder l'impulsivité du Bélier et l'inertie du Taureau. Le Bélier veut bouger, le Taureau veut stabiliser. Le défi est de voir la complémentarité, courage contre patience, plutôt que de la subir comme une entrave." },
    ],
  }),

  pair({
    a: 'taureau', b: 'gemeaux',
    metaDesc: "Compatibilité Taureau Gémeaux : un semi-sextile entre signes voisins, la terre et l'air. La stabilité contre le mouvement, un ajustement de tempo. Dynamique, défis et forces.",
    ogDesc: "Semi-sextile terre/air : l'apprentissage entre l'ancrage du Taureau et la vivacité des Gémeaux.",
    h1Html: "Compatibilité Taureau & Gémeaux, l'<em>ancrage</em> et le <em>mouvement</em>",
    leadHtml: "Taureau et Gémeaux sont voisins dans le zodiaque : leur compatibilité est un semi-sextile, l'aspect de l'ajustement subtil. La terre stable côtoie l'air mobile, deux tempéraments très différents qui ont pourtant beaucoup à s'offrir.",
    sections: [
      { h2: null, paras: [
        "Le <a href=\"/signes/taureau\">Taureau</a> précède les <a href=\"/signes/gemeaux\">Gémeaux</a> dans le zodiaque. Ce voisinage crée un semi-sextile : le Taureau ancré et sensoriel côtoie les Gémeaux aériens et curieux. Le premier construit et savoure, les seconds explorent et virevoltent. Un décalage qui peut frustrer… ou enrichir.",
      ] },
      { h2: 'Taureau et Gémeaux : la dynamique profonde', paras: [
        "Vénus (Taureau) et Mercure (Gémeaux) associent le plaisir des sens et la vivacité de l'esprit. Le Taureau cherche la sécurité et la permanence, les Gémeaux la nouveauté et le changement. Le Taureau apprend des Gémeaux à s'ouvrir et à se renouveler, les Gémeaux apprennent du Taureau à s'ancrer et à approfondir.",
        "Le semi-sextile demande un effort d'adaptation : le Taureau trouve les Gémeaux instables et dispersés, les Gémeaux trouvent le Taureau routinier et lent. Mais leurs ressources se complètent, la terre offre un socle, l'air offre un souffle.",
      ] },
      { h2: 'Comment Taureau et Gémeaux communiquent', paras: [
        "Le Taureau parle peu et concret, les Gémeaux beaucoup et vite. Les Gémeaux peuvent étourdir le Taureau de mots et d'idées, le Taureau peut sembler fermé ou borné aux Gémeaux avides de débat.",
        "La clé est la patience mutuelle : le Taureau s'ouvre à la curiosité des Gémeaux, les Gémeaux respectent le besoin de stabilité et de concret du Taureau. Le Taureau gagne en légèreté, les Gémeaux en profondeur.",
      ] },
      { h2: "L'alchimie entre Taureau et Gémeaux", paras: [
        "L'attirance vient du contraste : le Taureau sensuel intrigue les Gémeaux cérébraux, dont la vivacité amuse et stimule le Taureau. L'un apporte la chaleur du corps, les autres le jeu de l'esprit.",
        "L'écueil tient au besoin : le Taureau veut de la régularité et de la présence, les Gémeaux de la variété et de la liberté. Si le Taureau accepte un peu de mouvement et les Gémeaux un peu d'ancrage, leur intimité conjugue sensualité et fantaisie.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi central oppose le besoin de stabilité du Taureau à la soif de changement des Gémeaux. Le Taureau veut une routine rassurante, les Gémeaux fuient l'ennui à tout prix. Le Taureau peut se sentir déstabilisé, les Gémeaux étouffés.",
        "La clé de résolution : voir le décalage comme une richesse. Le Taureau apprend des Gémeaux à se renouveler, les Gémeaux apprennent du Taureau à se poser. L'inconfort du semi-sextile devient un équilibre entre constance et nouveauté.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand ils s'ajustent, Taureau et Gémeaux forment un couple complémentaire : le Taureau apporte la sécurité et le concret, les Gémeaux l'ouverture et la légèreté. L'un empêche l'autre de se figer ou de se disperser.",
        "Le Taureau ancre les idées des Gémeaux dans le réel, les Gémeaux empêchent le Taureau de s'enfermer dans la routine. Le léger inconfort du voisinage devient un échange fécond entre la terre et l'air.",
      ] },
    ],
    faq: [
      { q: "Taureau et Gémeaux sont-ils compatibles&nbsp;?", a: "Taureau et Gémeaux, signes voisins, forment un semi-sextile : une compatibilité d'ajustement entre la stabilité et le mouvement. Sans hostilité mais sans évidence, elle demande un effort. La complémentarité terre/air peut être riche. La synastrie complète des deux thèmes nuance ce portrait." },
      { q: "Pourquoi le Taureau et les Gémeaux sont-ils si différents&nbsp;?", a: "Le Taureau (terre fixe) cherche la sécurité, la routine et le concret ; les Gémeaux (air mutable) cherchent la nouveauté, le changement et les idées. Comme signes voisins, ils ne partagent ni élément ni mode, d'où un décalage net de tempérament." },
      { q: "Quel est le plus grand défi du couple Taureau-Gémeaux&nbsp;?", a: "Concilier le besoin de stabilité du Taureau avec la soif de changement des Gémeaux. Le défi est de voir le décalage comme une richesse : le Taureau apprend à se renouveler, les Gémeaux à se poser." },
    ],
  }),

  pair({
    a: 'gemeaux', b: 'cancer',
    metaDesc: "Compatibilité Gémeaux Cancer : un semi-sextile entre signes voisins, l'air et l'eau. La raison contre l'émotion, un ajustement délicat. Dynamique, communication, défis et forces.",
    ogDesc: "Semi-sextile air/eau : l'apprentissage entre la légèreté des Gémeaux et la sensibilité du Cancer.",
    h1Html: "Compatibilité Gémeaux & Cancer, l'<em>esprit</em> et le <em>cœur</em>",
    leadHtml: "Gémeaux et Cancer sont voisins dans le zodiaque : leur compatibilité est un semi-sextile, l'aspect de l'ajustement subtil. L'air mental côtoie l'eau émotionnelle, deux mondes différents qui peuvent s'équilibrer.",
    sections: [
      { h2: null, paras: [
        "Les <a href=\"/signes/gemeaux\">Gémeaux</a> précèdent le <a href=\"/signes/cancer\">Cancer</a> dans le zodiaque. Ce voisinage crée un semi-sextile : les Gémeaux légers et cérébraux côtoient le Cancer sensible et protecteur. Les uns vivent dans la tête, l'autre dans le cœur. Un décalage qui demande du tact, mais ouvre un bel apprentissage.",
      ] },
      { h2: 'Gémeaux et Cancer : la dynamique profonde', paras: [
        "Mercure (Gémeaux) et la Lune (Cancer) associent la pensée et l'émotion. Les Gémeaux analysent et relativisent, le Cancer ressent et s'attache. Les Gémeaux apprennent du Cancer la profondeur du sentiment, le Cancer apprend des Gémeaux le recul et la légèreté.",
        "Le semi-sextile demande un effort : les Gémeaux peuvent trouver le Cancer trop émotif et susceptible, le Cancer peut trouver les Gémeaux froids et inconstants. Mais leurs ressources se complètent, l'esprit éclaire l'émotion, l'émotion réchauffe l'esprit.",
      ] },
      { h2: 'Comment Gémeaux et Cancer communiquent', paras: [
        "Les Gémeaux verbalisent et rationalisent, le Cancer ressent et sous-entend. Les Gémeaux peuvent blesser le Cancer en intellectualisant ses émotions, le Cancer peut dérouter les Gémeaux par ses humeurs et ses non-dits.",
        "La clé est la délicatesse : les Gémeaux apprennent à honorer les ressentis du Cancer plutôt qu'à les analyser, le Cancer apprend à exprimer ses besoins en mots clairs. L'esprit et le cœur trouvent alors un langage commun.",
      ] },
      { h2: "L'alchimie entre Gémeaux et Cancer", paras: [
        "L'attirance vient de la complémentarité : le Cancer est rassuré et amusé par la vivacité des Gémeaux, les Gémeaux touchés par la tendresse du Cancer. L'un apporte le jeu, l'autre la chaleur.",
        "L'écueil tient au besoin : le Cancer veut de la fusion et de la réassurance, les Gémeaux de la liberté et de la légèreté. Si les Gémeaux offrent de la présence et le Cancer de l'espace, leur intimité allie douceur et fantaisie.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi central oppose le détachement des Gémeaux à l'attachement du Cancer. Les Gémeaux ont besoin d'air et de variété, le Cancer de sécurité et de proximité. Le Cancer peut se sentir négligé, les Gémeaux étouffés par la demande affective.",
        "La clé de résolution : valoriser l'équilibre. Les Gémeaux apprennent du Cancer à s'investir émotionnellement, le Cancer apprend des Gémeaux à dédramatiser. Le léger inconfort du semi-sextile devient un équilibre entre tête et cœur.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand ils s'ajustent, Gémeaux et Cancer forment un couple où l'esprit et l'émotion se nourrissent. Les Gémeaux apportent la légèreté et l'ouverture, le Cancer la profondeur et la tendresse, un bel équilibre.",
        "Les Gémeaux aident le Cancer à prendre du recul sur ses émotions, le Cancer aide les Gémeaux à habiter leur cœur. Le décalage du voisinage devient une complémentarité douce entre l'air et l'eau.",
      ] },
    ],
    faq: [
      { q: "Gémeaux et Cancer sont-ils compatibles&nbsp;?", a: "Gémeaux et Cancer, signes voisins, forment un semi-sextile : une compatibilité d'ajustement entre la raison et l'émotion. Délicate mais riche, elle demande du tact. La complémentarité air/eau peut équilibrer le couple. La synastrie complète des deux thèmes nuance ce portrait." },
      { q: "Pourquoi les Gémeaux et le Cancer se comprennent-ils mal&nbsp;?", a: "Les Gémeaux (air) vivent dans la tête, les mots et le recul ; le Cancer (eau) vit dans le cœur, l'émotion et l'attachement. Les Gémeaux peuvent paraître froids au Cancer, qui peut sembler trop émotif aux Gémeaux. Leurs registres diffèrent." },
      { q: "Quel est le plus grand défi du couple Gémeaux-Cancer&nbsp;?", a: "Concilier le détachement des Gémeaux avec l'attachement du Cancer. Le défi est que les Gémeaux s'investissent émotionnellement et que le Cancer dédramatise, pour trouver un équilibre entre tête et cœur." },
    ],
  }),

  pair({
    a: 'cancer', b: 'lion',
    metaDesc: "Compatibilité Cancer Lion : un semi-sextile entre signes voisins, l'eau et le feu. La sensibilité contre le rayonnement, un ajustement tendre. Dynamique, défis et forces du couple.",
    ogDesc: "Semi-sextile eau/feu : l'apprentissage entre la tendresse du Cancer et la chaleur du Lion.",
    h1Html: "Compatibilité Cancer & Lion, la <em>tendresse</em> et l'<em>éclat</em>",
    leadHtml: "Cancer et Lion sont voisins dans le zodiaque : leur compatibilité est un semi-sextile, l'aspect de l'ajustement subtil. L'eau protectrice côtoie le feu rayonnant, deux cœurs généreux qui doivent accorder leurs besoins.",
    sections: [
      { h2: null, paras: [
        "Le <a href=\"/signes/cancer\">Cancer</a> précède le <a href=\"/signes/lion\">Lion</a> dans le zodiaque. Ce voisinage crée un semi-sextile : le Cancer intime et nourricier côtoie le Lion solaire et expressif. Le premier protège le foyer, le second illumine la scène. Deux générosités différentes qui s'apprivoisent.",
      ] },
      { h2: 'Cancer et Lion : la dynamique profonde', paras: [
        "La Lune (Cancer) et le Soleil (Lion) sont les deux luminaires : l'intimité et l'éclat, la nuit et le jour. Le Cancer aime en couvant, le Lion en rayonnant. Le Cancer apprend du Lion à oser s'exprimer et à briller, le Lion apprend du Cancer la tendresse et l'écoute.",
        "Le semi-sextile demande un effort : le Cancer peut trouver le Lion trop centré sur lui-même, le Lion peut trouver le Cancer trop sensible ou possessif. Mais Soleil et Lune se complètent profondément, l'un réchauffe, l'autre nourrit.",
      ] },
      { h2: 'Comment Cancer et Lion communiquent', paras: [
        "Le Cancer s'exprime par l'émotion et le soin, le Lion par la chaleur et l'affirmation. Le Lion a besoin d'être admiré, le Cancer d'être rassuré. Le Lion peut blesser le Cancer par son égocentrisme, le Cancer peut étouffer le Lion par sa susceptibilité.",
        "La clé est la reconnaissance mutuelle : le Lion valorise la sensibilité du Cancer et le rassure, le Cancer admire et soutient le Lion. Quand chacun nourrit le besoin de l'autre, le dialogue devient chaleureux.",
      ] },
      { h2: "L'alchimie entre Cancer et Lion", paras: [
        "L'attirance est tendre et chaleureuse : le Cancer est réchauffé par la générosité du Lion, le Lion attendri par la douceur du Cancer. L'un apporte la passion généreuse, l'autre la tendresse enveloppante.",
        "L'écueil tient au besoin : le Lion veut de l'admiration et de la grandeur, le Cancer de l'intimité et de la réassurance. Si le Lion offre de la tendresse et le Cancer de l'admiration, leur intimité devient à la fois ardente et douce.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi central oppose le besoin d'attention du Lion au besoin de sécurité du Cancer. Le Lion veut briller en société, le Cancer veut un cocon protégé. Le Cancer peut se sentir négligé, le Lion bridé par la sensibilité du Cancer.",
        "La clé de résolution : équilibrer le dedans et le dehors. Le Lion apprend du Cancer la profondeur émotionnelle, le Cancer apprend du Lion à s'affirmer et à rayonner. Le léger inconfort du semi-sextile devient une complémentarité chaleureuse.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand ils s'ajustent, Cancer et Lion forment un couple généreux et chaleureux. Le Cancer crée le foyer où le Lion peut se reposer de son éclat, le Lion apporte la lumière et la joie qui réchauffent le nid du Cancer.",
        "Le Cancer offre au Lion une base affective sûre, le Lion offre au Cancer confiance et rayonnement. Le décalage du voisinage devient un bel équilibre entre l'intimité et la lumière.",
      ] },
    ],
    faq: [
      { q: "Cancer et Lion sont-ils compatibles&nbsp;?", a: "Cancer et Lion, signes voisins, forment un semi-sextile : une compatibilité d'ajustement entre la tendresse et l'éclat. Deux cœurs généreux que tout sépare en surface, mais que Lune et Soleil rendent complémentaires. La synastrie complète des deux thèmes nuance ce portrait." },
      { q: "Pourquoi le Cancer et le Lion s'ajustent-ils difficilement&nbsp;?", a: "Le Cancer (eau) cherche l'intimité, la sécurité et le foyer ; le Lion (feu) cherche l'éclat, la reconnaissance et la scène. Le Cancer peut trouver le Lion égocentrique, le Lion peut trouver le Cancer trop sensible. Mais Lune et Soleil se complètent." },
      { q: "Quel est le plus grand défi du couple Cancer-Lion&nbsp;?", a: "Concilier le besoin d'attention du Lion avec le besoin de sécurité du Cancer. Le défi est que le Lion offre de la tendresse et que le Cancer offre de l'admiration, équilibrant le dedans intime et le dehors rayonnant." },
    ],
  }),

  pair({
    a: 'lion', b: 'vierge',
    metaDesc: "Compatibilité Lion Vierge : un semi-sextile entre signes voisins, le feu et la terre. L'éclat contre la discrétion, un ajustement subtil. Dynamique, communication, défis et forces.",
    ogDesc: "Semi-sextile feu/terre : l'apprentissage entre le rayonnement du Lion et la modestie de la Vierge.",
    h1Html: "Compatibilité Lion & Vierge, l'<em>éclat</em> et la <em>discrétion</em>",
    leadHtml: "Lion et Vierge sont voisins dans le zodiaque : leur compatibilité est un semi-sextile, l'aspect de l'ajustement subtil. Le feu flamboyant côtoie la terre modeste, deux tempéraments opposés qui peuvent former une belle équipe.",
    sections: [
      { h2: null, paras: [
        "Le <a href=\"/signes/lion\">Lion</a> précède la <a href=\"/signes/vierge\">Vierge</a> dans le zodiaque. Ce voisinage crée un semi-sextile : le Lion exubérant et créatif côtoie la Vierge discrète et méticuleuse. L'un veut briller, l'autre veut bien faire. Deux manières d'exister qui semblent s'ignorer mais peuvent se compléter.",
      ] },
      { h2: 'Lion et Vierge : la dynamique profonde', paras: [
        "Le Soleil (Lion) et Mercure (Vierge) associent le rayonnement et le discernement. Le Lion veut être reconnu et créer en grand, la Vierge veut servir et perfectionner dans l'ombre. Le Lion apprend de la Vierge l'humilité et le souci du détail, la Vierge apprend du Lion la confiance et l'audace.",
        "Le semi-sextile demande un effort : le Lion peut trouver la Vierge critique et terne, la Vierge peut trouver le Lion vaniteux et excessif. Mais leurs ressources se complètent, l'éclat a besoin de rigueur, la rigueur a besoin de lumière.",
      ] },
      { h2: 'Comment Lion et Vierge communiquent', paras: [
        "Le Lion parle avec chaleur et grandeur, la Vierge avec précision et réserve. Le Lion a besoin d'éloges, la Vierge a tendance à corriger : un mélange qui peut blesser la fierté du Lion et agacer la Vierge.",
        "La clé est la valorisation mutuelle : le Lion reconnaît la compétence discrète de la Vierge, la Vierge offre au Lion une admiration sincère et adoucit ses critiques. Le dialogue gagne alors en respect.",
      ] },
      { h2: "L'alchimie entre Lion et Vierge", paras: [
        "L'attirance vient du contraste : la Vierge est fascinée par l'assurance du Lion, le Lion touché par le dévouement attentif de la Vierge. L'un apporte la passion généreuse, l'autre le soin délicat.",
        "L'écueil tient au tempérament : le Lion veut de la démonstration et de la grandeur, la Vierge est pudique et réservée. Si le Lion respecte la pudeur de la Vierge et la Vierge ose se laisser aller, leur intimité allie chaleur et tendresse attentive.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi central oppose le besoin de reconnaissance du Lion à la modestie critique de la Vierge. Le Lion veut être admiré, la Vierge analyse et relève les failles. Le Lion peut se sentir rabaissé, la Vierge agacée par l'ego du Lion.",
        "La clé de résolution : transformer la différence en complémentarité. Le Lion apprend de la Vierge l'humilité, la Vierge apprend du Lion à s'affirmer et à se mettre en valeur. Le léger inconfort du semi-sextile devient un équilibre entre lumière et précision.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand ils s'ajustent, Lion et Vierge forment une équipe efficace : le Lion inspire et crée, la Vierge organise et perfectionne. L'éclat du Lion porte le travail de la Vierge, la rigueur de la Vierge solidifie les élans du Lion.",
        "La Vierge offre au Lion une base fiable et un regard juste, le Lion offre à la Vierge confiance et reconnaissance. Le décalage du voisinage devient une collaboration entre le feu et la terre.",
      ] },
    ],
    faq: [
      { q: "Lion et Vierge sont-ils compatibles&nbsp;?", a: "Lion et Vierge, signes voisins, forment un semi-sextile : une compatibilité d'ajustement entre l'éclat et la discrétion. Sans évidence, elle demande du respect mutuel, mais leur complémentarité feu/terre peut former une belle équipe. La synastrie complète des deux thèmes nuance ce portrait." },
      { q: "Pourquoi le Lion et la Vierge s'ajustent-ils difficilement&nbsp;?", a: "Le Lion (feu) veut briller, être admiré et créer en grand ; la Vierge (terre) veut servir, perfectionner et rester discrète. Le Lion peut trouver la Vierge critique, la Vierge peut trouver le Lion vaniteux. Leurs façons d'exister diffèrent." },
      { q: "Quel est le plus grand défi du couple Lion-Vierge&nbsp;?", a: "Concilier le besoin de reconnaissance du Lion avec la modestie critique de la Vierge. Le défi est que le Lion apprenne l'humilité et que la Vierge offre une admiration sincère en adoucissant ses critiques." },
    ],
  }),

  pair({
    a: 'vierge', b: 'balance',
    metaDesc: "Compatibilité Vierge Balance : un semi-sextile entre signes voisins, la terre et l'air. La rigueur contre l'harmonie, un ajustement raffiné. Dynamique, défis et forces du couple.",
    ogDesc: "Semi-sextile terre/air : l'apprentissage entre la rigueur de la Vierge et la grâce de la Balance.",
    h1Html: "Compatibilité Vierge & Balance, la <em>rigueur</em> et la <em>grâce</em>",
    leadHtml: "Vierge et Balance sont voisines dans le zodiaque : leur compatibilité est un semi-sextile, l'aspect de l'ajustement subtil. La terre méthodique côtoie l'air harmonieux, deux raffinements différents qui peuvent s'embellir mutuellement.",
    sections: [
      { h2: null, paras: [
        "La <a href=\"/signes/vierge\">Vierge</a> précède la <a href=\"/signes/balance\">Balance</a> dans le zodiaque. Ce voisinage crée un semi-sextile : la Vierge utile et exigeante côtoie la Balance esthète et diplomate. L'une perfectionne le concret, l'autre harmonise les relations. Deux quêtes de justesse qui se rencontrent.",
      ] },
      { h2: 'Vierge et Balance : la dynamique profonde', paras: [
        "Mercure (Vierge) et Vénus (Balance) associent le discernement et le sens de l'harmonie. La Vierge cherche l'efficacité et la perfection, la Balance la beauté et l'équilibre relationnel. La Vierge apprend de la Balance la douceur et le sens du lien, la Balance apprend de la Vierge la rigueur et le sens pratique.",
        "Le semi-sextile demande un effort : la Vierge peut trouver la Balance superficielle ou indécise, la Balance peut trouver la Vierge trop critique ou terre-à-terre. Mais leur commun raffinement offre un terrain d'entente.",
      ] },
      { h2: 'Comment Vierge et Balance communiquent', paras: [
        "La Vierge va au fait et relève les défauts, la Balance lisse et cherche l'accord. La franchise critique de la Vierge peut heurter le besoin d'harmonie de la Balance, dont l'évitement du conflit peut frustrer la Vierge.",
        "La clé est l'équilibre du ton : la Vierge adoucit ses remarques, la Balance ose nommer les vrais sujets. Leur dialogue gagne en justesse, précis sans être dur, harmonieux sans être évasif.",
      ] },
      { h2: "L'alchimie entre Vierge et Balance", paras: [
        "L'attirance vient d'un raffinement partagé : la Balance séduit la Vierge par sa grâce, la Vierge touche la Balance par son attention dévouée. L'une apporte la douceur esthétique, l'autre le soin précis.",
        "L'écueil tient au tempérament : la Balance veut romance et légèreté, la Vierge est pudique et pragmatique. Si la Vierge se laisse aller à la sensualité et la Balance valorise les attentions de la Vierge, leur intimité devient tendre et élégante.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi central oppose la critique de la Vierge à l'évitement de la Balance. La Vierge veut corriger ce qui cloche, la Balance veut préserver la paix à tout prix. La Vierge peut sembler dure, la Balance fuyante.",
        "La clé de résolution : conjuguer leurs forces. La Vierge apprend de la Balance la diplomatie, la Balance apprend de la Vierge à affronter les problèmes concrets. Le léger inconfort du semi-sextile devient un raffinement commun.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand elles s'ajustent, Vierge et Balance forment un couple raffiné et attentionné. La Vierge apporte la rigueur et le soin, la Balance la grâce et l'harmonie, ensemble, elles créent un cadre de vie à la fois beau et bien tenu.",
        "La Vierge offre à la Balance une assise concrète, la Balance offre à la Vierge douceur et légèreté. Le décalage du voisinage devient une élégance partagée entre la terre et l'air.",
      ] },
    ],
    faq: [
      { q: "Vierge et Balance sont-elles compatibles&nbsp;?", a: "Vierge et Balance, signes voisins, forment un semi-sextile : une compatibilité d'ajustement entre la rigueur et la grâce. Sans évidence, elle demande de l'équilibre, mais leur raffinement commun peut donner un couple élégant et attentionné. La synastrie complète des deux thèmes nuance ce portrait." },
      { q: "Pourquoi la Vierge et la Balance s'ajustent-elles difficilement&nbsp;?", a: "La Vierge (terre) cherche l'efficacité, la perfection et la franchise ; la Balance (air) cherche l'harmonie, la beauté et l'accord. La Vierge peut trouver la Balance superficielle, la Balance peut trouver la Vierge trop critique. Leurs priorités diffèrent." },
      { q: "Quel est le plus grand défi du couple Vierge-Balance&nbsp;?", a: "Concilier la critique de la Vierge avec l'évitement du conflit par la Balance. Le défi est que la Vierge adoucisse son ton et que la Balance ose nommer les vrais sujets." },
    ],
  }),

  pair({
    a: 'balance', b: 'scorpion',
    metaDesc: "Compatibilité Balance Scorpion : un semi-sextile entre signes voisins, l'air et l'eau. La légèreté contre l'intensité, un ajustement profond. Dynamique, défis et forces du couple.",
    ogDesc: "Semi-sextile air/eau : l'apprentissage entre la grâce de la Balance et l'intensité du Scorpion.",
    h1Html: "Compatibilité Balance & Scorpion, la <em>grâce</em> et l'<em>intensité</em>",
    leadHtml: "Balance et Scorpion sont voisins dans le zodiaque : leur compatibilité est un semi-sextile, l'aspect de l'ajustement subtil. L'air léger côtoie l'eau profonde, deux mondes qui se fascinent autant qu'ils se déconcertent.",
    sections: [
      { h2: null, paras: [
        "La <a href=\"/signes/balance\">Balance</a> précède le <a href=\"/signes/scorpion\">Scorpion</a> dans le zodiaque. Ce voisinage crée un semi-sextile : la Balance sociable et harmonieuse côtoie le Scorpion intense et secret. L'une recherche l'équilibre et la surface lisse, l'autre la profondeur et la vérité brute. Un décalage troublant et magnétique.",
      ] },
      { h2: 'Balance et Scorpion : la dynamique profonde', paras: [
        "Vénus (Balance) et Pluton (Scorpion) associent le charme et la puissance. La Balance veut plaire et harmoniser, le Scorpion veut connaître et transformer. La Balance apprend du Scorpion la profondeur et l'authenticité, le Scorpion apprend de la Balance la légèreté et le tact.",
        "Le semi-sextile demande un effort : la Balance peut trouver le Scorpion trop intense et sombre, le Scorpion peut trouver la Balance superficielle et fuyante. Mais leur attirance est réelle, la surface gracieuse cache une curiosité pour les profondeurs.",
      ] },
      { h2: 'Comment Balance et Scorpion communiquent', paras: [
        "La Balance communique avec diplomatie et évite le conflit, le Scorpion va au fond et ne craint pas l'affrontement. Le Scorpion peut trouver la Balance évasive, la Balance peut être déstabilisée par l'intensité du Scorpion.",
        "La clé est le courage et la douceur : la Balance ose la profondeur et la franchise, le Scorpion tempère son intensité et accorde sa confiance. Leur dialogue gagne alors en authenticité sans perdre en élégance.",
      ] },
      { h2: "L'alchimie entre Balance et Scorpion", paras: [
        "L'attirance est magnétique : la Balance est fascinée par l'intensité du Scorpion, le Scorpion séduit par le charme de la Balance. L'une apporte la sensualité raffinée, l'autre la passion profonde.",
        "L'écueil tient au registre : la Balance veut romance et harmonie, le Scorpion fusion et intensité. Si la Balance plonge dans la profondeur et le Scorpion adoucit son emprise, leur intimité allie raffinement et passion.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi central oppose la légèreté de la Balance à l'intensité du Scorpion. La Balance fuit le conflit et la lourdeur, le Scorpion exige profondeur et vérité. La jalousie possible du Scorpion se heurte au besoin de sociabilité de la Balance.",
        "La clé de résolution : la Balance apprend du Scorpion à ne pas fuir l'intensité, le Scorpion apprend de la Balance à lâcher le contrôle et la suspicion. Le léger inconfort du semi-sextile devient une rencontre entre surface et profondeur.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand ils s'ajustent, Balance et Scorpion forment un couple à la fois élégant et profond. La Balance apporte l'harmonie et la douceur, le Scorpion l'intensité et l'authenticité, un mélange rare de grâce et de puissance.",
        "La Balance allège le Scorpion, le Scorpion approfondit la Balance. Le décalage du voisinage devient une fascination durable entre l'air et l'eau, le charme et la profondeur.",
      ] },
    ],
    faq: [
      { q: "Balance et Scorpion sont-ils compatibles&nbsp;?", a: "Balance et Scorpion, signes voisins, forment un semi-sextile : une compatibilité d'ajustement entre la légèreté et l'intensité. Déconcertante mais magnétique, elle demande du courage. La rencontre air/eau peut être fascinante. La synastrie complète des deux thèmes nuance ce portrait." },
      { q: "Pourquoi la Balance et le Scorpion s'ajustent-ils difficilement&nbsp;?", a: "La Balance (air) recherche l'harmonie, la surface lisse et évite le conflit ; le Scorpion (eau) recherche la profondeur, la vérité brute et ne craint pas l'affrontement. La Balance peut trouver le Scorpion trop sombre, le Scorpion peut trouver la Balance superficielle." },
      { q: "Quel est le plus grand défi du couple Balance-Scorpion&nbsp;?", a: "Concilier la légèreté de la Balance avec l'intensité du Scorpion. Le défi est que la Balance ose la profondeur et que le Scorpion lâche le contrôle et la suspicion." },
    ],
  }),

  pair({
    a: 'scorpion', b: 'sagittaire',
    metaDesc: "Compatibilité Scorpion Sagittaire : un semi-sextile entre signes voisins, l'eau et le feu. La profondeur contre la liberté, un ajustement intense. Dynamique, défis et forces du couple.",
    ogDesc: "Semi-sextile eau/feu : l'apprentissage entre l'intensité du Scorpion et l'élan du Sagittaire.",
    h1Html: "Compatibilité Scorpion & Sagittaire, la <em>profondeur</em> et l'<em>élan</em>",
    leadHtml: "Scorpion et Sagittaire sont voisins dans le zodiaque : leur compatibilité est un semi-sextile, l'aspect de l'ajustement subtil. L'eau profonde côtoie le feu aventureux, l'intensité rencontre la liberté.",
    sections: [
      { h2: null, paras: [
        "Le <a href=\"/signes/scorpion\">Scorpion</a> précède le <a href=\"/signes/sagittaire\">Sagittaire</a> dans le zodiaque. Ce voisinage crée un semi-sextile : le Scorpion intense et fusionnel côtoie le Sagittaire libre et expansif. L'un plonge dans les profondeurs, l'autre court vers l'horizon. Un décalage entre l'enracinement émotionnel et l'envie d'ailleurs.",
      ] },
      { h2: 'Scorpion et Sagittaire : la dynamique profonde', paras: [
        "Pluton (Scorpion) et Jupiter (Sagittaire) associent la transformation et l'expansion. Le Scorpion veut tout connaître en profondeur, le Sagittaire veut tout explorer en largeur. Le Scorpion apprend du Sagittaire la légèreté et la foi, le Sagittaire apprend du Scorpion la profondeur et l'engagement.",
        "Le semi-sextile demande un effort : le Scorpion peut trouver le Sagittaire superficiel et fuyant, le Sagittaire peut trouver le Scorpion trop intense et possessif. Mais leur curiosité commune pour le sens crée un pont.",
      ] },
      { h2: 'Comment Scorpion et Sagittaire communiquent', paras: [
        "Le Scorpion sonde et garde ses secrets, le Sagittaire dit tout franchement et largement. La franchise désinvolte du Sagittaire peut heurter le Scorpion, dont le mystère peut agacer le Sagittaire.",
        "La clé est l'ouverture mutuelle : le Scorpion ose la confiance et la légèreté, le Sagittaire apprend la délicatesse et la constance. Leur échange peut devenir une exploration commune du sens, à la fois profonde et libre.",
      ] },
      { h2: "L'alchimie entre Scorpion et Sagittaire", paras: [
        "L'attirance est vive : le Scorpion est intrigué par la liberté du Sagittaire, le Sagittaire fasciné par l'intensité du Scorpion. L'un apporte la passion profonde, l'autre la fougue aventureuse.",
        "L'écueil tient au besoin : le Scorpion veut fusion et exclusivité, le Sagittaire liberté et espace. Si le Scorpion lâche un peu de contrôle et le Sagittaire offre de l'engagement, leur intimité allie intensité et aventure.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi central oppose le besoin de fusion du Scorpion à la soif de liberté du Sagittaire. Le Scorpion veut tout partager intensément, le Sagittaire a besoin d'air et d'indépendance. La jalousie du Scorpion se heurte à l'esprit libre du Sagittaire.",
        "La clé de résolution : le Scorpion accorde sa confiance, le Sagittaire rassure par sa fidélité. Le Scorpion apprend la légèreté, le Sagittaire la profondeur. Le léger inconfort du semi-sextile devient une quête de sens partagée.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand ils s'ajustent, Scorpion et Sagittaire forment un couple intense et stimulant. Le Scorpion apporte la profondeur et l'engagement, le Sagittaire l'optimisme et l'ouverture, ensemble, ils explorent la vie dans toutes ses dimensions.",
        "Le Sagittaire allège le Scorpion et lui ouvre des horizons, le Scorpion approfondit le Sagittaire et l'ancre. Le décalage du voisinage devient une aventure entre l'eau et le feu, la profondeur et la liberté.",
      ] },
    ],
    faq: [
      { q: "Scorpion et Sagittaire sont-ils compatibles&nbsp;?", a: "Scorpion et Sagittaire, signes voisins, forment un semi-sextile : une compatibilité d'ajustement entre l'intensité et la liberté. Sans évidence, elle demande de l'ouverture, mais leur curiosité commune pour le sens crée un beau pont. La synastrie complète des deux thèmes nuance ce portrait." },
      { q: "Pourquoi le Scorpion et le Sagittaire s'ajustent-ils difficilement&nbsp;?", a: "Le Scorpion (eau) cherche la fusion, la profondeur et l'exclusivité ; le Sagittaire (feu) cherche la liberté, l'aventure et l'espace. Le Scorpion peut trouver le Sagittaire fuyant, le Sagittaire peut trouver le Scorpion possessif. Leurs besoins s'opposent." },
      { q: "Quel est le plus grand défi du couple Scorpion-Sagittaire&nbsp;?", a: "Concilier le besoin de fusion du Scorpion avec la soif de liberté du Sagittaire. Le défi est que le Scorpion accorde sa confiance et que le Sagittaire rassure par sa fidélité." },
    ],
  }),

  pair({
    a: 'sagittaire', b: 'capricorne',
    metaDesc: "Compatibilité Sagittaire Capricorne : un semi-sextile entre signes voisins, le feu et la terre. La liberté contre la discipline, un ajustement constructif. Dynamique, défis et forces.",
    ogDesc: "Semi-sextile feu/terre : l'apprentissage entre l'élan du Sagittaire et la rigueur du Capricorne.",
    h1Html: "Compatibilité Sagittaire & Capricorne, l'<em>élan</em> et la <em>discipline</em>",
    leadHtml: "Sagittaire et Capricorne sont voisins dans le zodiaque : leur compatibilité est un semi-sextile, l'aspect de l'ajustement subtil. Le feu aventureux côtoie la terre ambitieuse, la liberté rencontre la structure.",
    sections: [
      { h2: null, paras: [
        "Le <a href=\"/signes/sagittaire\">Sagittaire</a> précède le <a href=\"/signes/capricorne\">Capricorne</a> dans le zodiaque. Ce voisinage crée un semi-sextile : le Sagittaire optimiste et libre côtoie le Capricorne sérieux et discipliné. L'un rêve grand et part à l'aventure, l'autre planifie et construit. Un décalage entre l'enthousiasme et la rigueur.",
      ] },
      { h2: 'Sagittaire et Capricorne : la dynamique profonde', paras: [
        "Jupiter (Sagittaire) et Saturne (Capricorne) sont les deux grands maîtres du temps long : l'expansion et la contraction, la foi et la prudence. Le Sagittaire voit grand, le Capricorne bâtit solide. Le Sagittaire apprend du Capricorne la discipline et la patience, le Capricorne apprend du Sagittaire l'optimisme et l'audace.",
        "Le semi-sextile demande un effort : le Sagittaire peut trouver le Capricorne rigide et pessimiste, le Capricorne peut trouver le Sagittaire imprudent et dispersé. Mais Jupiter et Saturne, combinés, donnent une force rare, la vision réalisée.",
      ] },
      { h2: 'Comment Sagittaire et Capricorne communiquent', paras: [
        "Le Sagittaire est franc, enthousiaste et large, le Capricorne mesuré, sobre et pragmatique. Le Capricorne peut doucher l'enthousiasme du Sagittaire, le Sagittaire peut agacer le Capricorne par sa désinvolture.",
        "La clé est la reconnaissance mutuelle : le Sagittaire respecte le réalisme du Capricorne, le Capricorne accueille la vision du Sagittaire. Quand l'élan rencontre la méthode, leur dialogue devient constructif.",
      ] },
      { h2: "L'alchimie entre Sagittaire et Capricorne", paras: [
        "L'attirance vient du contraste : le Capricorne est séduit par la joie de vivre du Sagittaire, le Sagittaire par la solidité du Capricorne. L'un apporte la fougue, l'autre la profondeur contenue.",
        "L'écueil tient au tempérament : le Sagittaire veut spontanéité et liberté, le Capricorne se livre lentement. Si le Sagittaire patiente et le Capricorne se détend, leur intimité allie chaleur et profondeur.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi central oppose la liberté du Sagittaire à la discipline du Capricorne. Le Sagittaire fuit les contraintes, le Capricorne structure tout. Le Sagittaire peut se sentir bridé, le Capricorne exaspéré par l'inconstance du Sagittaire.",
        "La clé de résolution : conjuguer vision et méthode. Le Sagittaire apprend du Capricorne à concrétiser ses rêves, le Capricorne apprend du Sagittaire à dédramatiser et à oser. Le léger inconfort du semi-sextile devient une alliance entre l'idéal et le réel.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand ils s'ajustent, Sagittaire et Capricorne forment un couple capable de grandes réalisations. Le Sagittaire apporte la vision et l'enthousiasme, le Capricorne la structure et la persévérance, ensemble, ils transforment les rêves en accomplissements.",
        "Le Sagittaire allège le Capricorne et lui donne foi, le Capricorne ancre le Sagittaire et le fait aboutir. Le décalage du voisinage devient une force entre le feu et la terre, l'élan et la discipline.",
      ] },
    ],
    faq: [
      { q: "Sagittaire et Capricorne sont-ils compatibles&nbsp;?", a: "Sagittaire et Capricorne, signes voisins, forment un semi-sextile : une compatibilité d'ajustement entre la liberté et la discipline. Sans évidence, elle demande un effort, mais l'alliance Jupiter-Saturne peut transformer les rêves en réalisations. La synastrie complète des deux thèmes nuance ce portrait." },
      { q: "Pourquoi le Sagittaire et le Capricorne s'ajustent-ils difficilement&nbsp;?", a: "Le Sagittaire (feu) est optimiste, libre et aventureux ; le Capricorne (terre) est sérieux, discipliné et prudent. Le Sagittaire peut trouver le Capricorne rigide, le Capricorne peut trouver le Sagittaire imprudent. Leurs tempéraments s'opposent." },
      { q: "Quel est le plus grand défi du couple Sagittaire-Capricorne&nbsp;?", a: "Concilier la liberté du Sagittaire avec la discipline du Capricorne. Le défi est que le Sagittaire apprenne à concrétiser et que le Capricorne apprenne à dédramatiser et à oser." },
    ],
  }),

  pair({
    a: 'capricorne', b: 'verseau',
    metaDesc: "Compatibilité Capricorne Verseau : un semi-sextile entre signes voisins, la terre et l'air. La tradition contre l'innovation, un ajustement fécond. Dynamique, défis et forces du couple.",
    ogDesc: "Semi-sextile terre/air : l'apprentissage entre la structure du Capricorne et l'innovation du Verseau.",
    h1Html: "Compatibilité Capricorne & Verseau, la <em>structure</em> et l'<em>innovation</em>",
    leadHtml: "Capricorne et Verseau sont voisins dans le zodiaque, autrefois tous deux régis par Saturne : leur compatibilité est un semi-sextile, l'aspect de l'ajustement subtil. La terre traditionnelle côtoie l'air visionnaire.",
    sections: [
      { h2: null, paras: [
        "Le <a href=\"/signes/capricorne\">Capricorne</a> précède le <a href=\"/signes/verseau\">Verseau</a> dans le zodiaque, et l'astrologie traditionnelle les rattachait tous deux à Saturne. Ce voisinage crée un semi-sextile : le Capricorne structuré et ambitieux côtoie le Verseau original et libre. L'un bâtit sur les fondations, l'autre invente l'avenir. Un décalage entre tradition et rupture.",
      ] },
      { h2: 'Capricorne et Verseau : la dynamique profonde', paras: [
        "Saturne (Capricorne) et Uranus (Verseau, avec Saturne en maître traditionnel) associent la structure et l'innovation. Le Capricorne respecte l'ordre établi, le Verseau veut le réinventer. Le Capricorne apprend du Verseau l'ouverture et l'audace, le Verseau apprend du Capricorne la patience et la concrétisation.",
        "Le semi-sextile demande un effort : le Capricorne peut trouver le Verseau imprévisible et utopiste, le Verseau peut trouver le Capricorne rigide et conservateur. Mais leur héritage saturnien commun crée une compréhension de fond.",
      ] },
      { h2: 'Comment Capricorne et Verseau communiquent', paras: [
        "Le Capricorne raisonne par le réalisme et l'expérience, le Verseau par les idées et l'avenir. Le Capricorne peut freiner les élans du Verseau, le Verseau peut bousculer les certitudes du Capricorne.",
        "La clé est la curiosité mutuelle : le Capricorne s'ouvre aux idées nouvelles du Verseau, le Verseau respecte le sens du concret du Capricorne. Leur échange peut devenir un dialogue fécond entre l'expérience et la vision.",
      ] },
      { h2: "L'alchimie entre Capricorne et Verseau", paras: [
        "L'attirance vient d'un respect intellectuel : le Capricorne est intrigué par l'originalité du Verseau, le Verseau par la maîtrise du Capricorne. Tous deux plutôt cérébraux, ils se séduisent par l'esprit.",
        "L'écueil tient à l'émotion : ni l'un ni l'autre n'est très démonstratif, et la chaleur peut manquer. Si le Capricorne se livre et le Verseau s'engage, leur intimité gagne en profondeur derrière la réserve.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi central oppose le conservatisme du Capricorne à la rébellion du Verseau. Le Capricorne veut bâtir dans la continuité, le Verseau veut rompre et innover. Le Capricorne peut être déstabilisé, le Verseau bridé.",
        "La clé de résolution : conjuguer structure et innovation. Le Capricorne apprend du Verseau à se réinventer, le Verseau apprend du Capricorne à construire durablement. Le léger inconfort du semi-sextile devient une force entre tradition et avenir.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand ils s'ajustent, Capricorne et Verseau forment un couple capable d'allier solidité et originalité. Le Capricorne donne corps aux visions du Verseau, le Verseau empêche le Capricorne de se figer dans le conformisme.",
        "Le Capricorne ancre les idées du Verseau, le Verseau ouvre les horizons du Capricorne. Le décalage du voisinage devient un équilibre entre la terre et l'air, la structure et l'innovation.",
      ] },
    ],
    faq: [
      { q: "Capricorne et Verseau sont-ils compatibles&nbsp;?", a: "Capricorne et Verseau, signes voisins liés par Saturne, forment un semi-sextile : une compatibilité d'ajustement entre tradition et innovation. Sans évidence, elle demande un effort, mais leur héritage commun crée une compréhension de fond. La synastrie complète des deux thèmes nuance ce portrait." },
      { q: "Pourquoi le Capricorne et le Verseau s'ajustent-ils difficilement&nbsp;?", a: "Le Capricorne (terre) respecte l'ordre établi, la structure et la tradition ; le Verseau (air) veut réinventer, innover et rompre. Le Capricorne peut trouver le Verseau utopiste, le Verseau peut trouver le Capricorne rigide. Leurs rapports au changement diffèrent." },
      { q: "Quel est le plus grand défi du couple Capricorne-Verseau&nbsp;?", a: "Concilier le conservatisme du Capricorne avec la rébellion du Verseau, et trouver de la chaleur émotionnelle. Le défi est que le Capricorne s'ouvre à l'innovation et que le Verseau apprenne à construire durablement." },
    ],
  }),

  pair({
    a: 'verseau', b: 'poissons',
    metaDesc: "Compatibilité Verseau Poissons : un semi-sextile entre signes voisins, l'air et l'eau. La raison contre l'intuition, un ajustement subtil. Dynamique, communication, défis et forces.",
    ogDesc: "Semi-sextile air/eau : l'apprentissage entre la vision du Verseau et la compassion des Poissons.",
    h1Html: "Compatibilité Verseau & Poissons, la <em>vision</em> et le <em>rêve</em>",
    leadHtml: "Verseau et Poissons sont voisins dans le zodiaque : leur compatibilité est un semi-sextile, l'aspect de l'ajustement subtil. L'air visionnaire côtoie l'eau rêveuse, deux idéalistes qui regardent le monde autrement.",
    sections: [
      { h2: null, paras: [
        "Le <a href=\"/signes/verseau\">Verseau</a> précède les <a href=\"/signes/poissons\">Poissons</a> dans le zodiaque, les deux derniers signes, tournés vers le collectif et l'universel. Ce voisinage crée un semi-sextile : le Verseau cérébral et détaché côtoie les Poissons sensibles et fusionnels. L'un pense l'humanité, les autres la ressentent.",
      ] },
      { h2: 'Verseau et Poissons : la dynamique profonde', paras: [
        "Uranus (Verseau) et Neptune (Poissons) sont deux planètes transpersonnelles : l'innovation et la transcendance, l'idéal et le rêve. Le Verseau veut réformer le monde par les idées, les Poissons l'embrasser par la compassion. Le Verseau apprend des Poissons la profondeur émotionnelle, les Poissons apprennent du Verseau le recul et la clarté.",
        "Le semi-sextile demande un effort : le Verseau peut trouver les Poissons trop flous et émotifs, les Poissons peuvent trouver le Verseau froid et distant. Mais leur idéalisme commun et leur regard tourné vers l'universel les rapprochent.",
      ] },
      { h2: 'Comment Verseau et Poissons communiquent', paras: [
        "Le Verseau raisonne et conceptualise, les Poissons ressentent et devinent. Le Verseau peut intellectualiser ce que les Poissons vivent intensément, les Poissons peuvent dérouter le Verseau par leur flou émotionnel.",
        "La clé est le pont entre tête et cœur : le Verseau honore les ressentis des Poissons, les Poissons mettent des mots sur leurs intuitions. Leur idéalisme partagé devient alors un terrain de dialogue riche.",
      ] },
      { h2: "L'alchimie entre Verseau et Poissons", paras: [
        "L'attirance est poétique et étrange : les Poissons sont fascinés par l'originalité du Verseau, le Verseau touché par la douceur des Poissons. L'un apporte la surprise et l'inventivité, les autres la tendresse et l'imaginaire.",
        "L'écueil tient au besoin : les Poissons veulent fusion et profondeur émotionnelle, le Verseau espace et liberté mentale. Si le Verseau s'engage émotionnellement et les Poissons respectent son besoin d'air, leur intimité devient tendre et inventive.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi central oppose le détachement du Verseau à la fusion des Poissons. Le Verseau a besoin d'indépendance et vit dans les idées, les Poissons ont besoin de fusion et vivent dans les émotions. Les Poissons peuvent se sentir incompris, le Verseau envahi.",
        "La clé de résolution : le Verseau descend dans le cœur, les Poissons s'ancrent et donnent de l'espace. Le Verseau apprend la profondeur, les Poissons la clarté. Le léger inconfort du semi-sextile devient une rencontre entre l'esprit et l'âme.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand ils s'ajustent, Verseau et Poissons forment un couple idéaliste et créatif. Le Verseau apporte la vision et la clarté, les Poissons la compassion et l'imaginaire, ensemble, ils rêvent un monde meilleur, l'un par les idées, les autres par le cœur.",
        "Le Verseau aide les Poissons à structurer leurs rêves, les Poissons aident le Verseau à habiter son cœur. Le décalage du voisinage devient une complémentarité entre l'air et l'eau, la vision et le rêve.",
      ] },
    ],
    faq: [
      { q: "Verseau et Poissons sont-ils compatibles&nbsp;?", a: "Verseau et Poissons, signes voisins, forment un semi-sextile : une compatibilité d'ajustement entre la raison et l'intuition. Deux idéalistes que tout sépare en surface mais qu'un regard commun vers l'universel rapproche. La synastrie complète des deux thèmes nuance ce portrait." },
      { q: "Pourquoi le Verseau et les Poissons s'ajustent-ils difficilement&nbsp;?", a: "Le Verseau (air) vit dans les idées, la clarté et l'indépendance ; les Poissons (eau) vivent dans les émotions, le rêve et la fusion. Le Verseau peut paraître froid aux Poissons, qui peuvent sembler trop flous au Verseau. Leurs registres diffèrent." },
      { q: "Quel est le plus grand défi du couple Verseau-Poissons&nbsp;?", a: "Concilier le détachement du Verseau avec la fusion des Poissons. Le défi est que le Verseau s'engage émotionnellement et que les Poissons s'ancrent en donnant de l'espace." },
    ],
  }),

  pair({
    a: 'belier', b: 'poissons',
    metaDesc: "Compatibilité Bélier Poissons : un semi-sextile entre signes voisins, le feu et l'eau. L'action contre le rêve, un ajustement entre la fin et le début du zodiaque. Dynamique et forces.",
    ogDesc: "Semi-sextile feu/eau : l'apprentissage entre l'élan du Bélier et la sensibilité des Poissons.",
    h1Html: "Compatibilité Bélier & Poissons, l'<em>élan</em> et le <em>rêve</em>",
    leadHtml: "Bélier et Poissons sont voisins dans le zodiaque, la fin et le recommencement de la roue. Leur compatibilité est un semi-sextile, l'aspect de l'ajustement subtil : le feu naissant côtoie l'eau infinie.",
    sections: [
      { h2: null, paras: [
        "Les <a href=\"/signes/poissons\">Poissons</a> ferment le zodiaque, le <a href=\"/signes/belier\">Bélier</a> le rouvre : ce sont des voisins qui se touchent à la jonction de la fin et du commencement. Ce semi-sextile unit le feu impulsif du Bélier à l'eau rêveuse des Poissons, l'action pure et la sensibilité océanique, le premier souffle et la dissolution finale.",
      ] },
      { h2: 'Bélier et Poissons : la dynamique profonde', paras: [
        "Mars (Bélier) et Neptune (Poissons) associent l'action et le rêve, la pulsion et la compassion. Le Bélier fonce et affirme, les Poissons ressentent et s'abandonnent. Le Bélier apprend des Poissons la sensibilité et l'imagination, les Poissons apprennent du Bélier le courage et l'affirmation.",
        "Le semi-sextile demande un effort : le Bélier peut trouver les Poissons flous et passifs, les Poissons peuvent trouver le Bélier brutal et insensible. Mais le Bélier peut protéger les Poissons, et les Poissons adoucir le Bélier, une complémentarité touchante.",
      ] },
      { h2: 'Comment Bélier et Poissons communiquent', paras: [
        "Le Bélier dit tout directement et fort, les Poissons s'expriment par allusions et ressentis. La franchise du Bélier peut blesser les Poissons, dont le flou peut désorienter le Bélier.",
        "La clé est la douceur : le Bélier adoucit sa franchise et tient compte de la sensibilité des Poissons, les Poissons osent exprimer leurs besoins en mots clairs. Le feu apprend la délicatesse, l'eau apprend l'affirmation.",
      ] },
      { h2: "L'alchimie entre Bélier et Poissons", paras: [
        "L'attirance est romantique et magnétique : les Poissons sont fascinés par l'énergie du Bélier, le Bélier attendri par la douceur des Poissons. L'un apporte l'ardeur, les autres la tendresse et l'imaginaire.",
        "L'écueil tient au rythme et au registre : le Bélier veut intensité et immédiateté, les Poissons douceur et fusion. Si le Bélier ralentit et les Poissons s'affirment, leur intimité allie passion et tendresse.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi central oppose l'affirmation du Bélier à la sensibilité fuyante des Poissons. Le Bélier fonce et impose, les Poissons absorbent et se dérobent. Le Bélier peut écraser les Poissons sans le vouloir, les Poissons peuvent frustrer le Bélier par leur passivité.",
        "La clé de résolution : le Bélier devient protecteur plutôt que dominateur, les Poissons s'ancrent et s'affirment. Le Bélier apprend la compassion, les Poissons le courage. Le léger inconfort du semi-sextile devient une rencontre entre force et douceur.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand ils s'ajustent, Bélier et Poissons forment un couple touchant où la force protège la douceur. Le Bélier défend et entraîne les Poissons, les Poissons adoucissent et inspirent le Bélier, la jonction du commencement et de l'infini.",
        "Le Bélier offre aux Poissons un ancrage et un élan, les Poissons offrent au Bélier une profondeur émotionnelle qui lui manque. Le décalage du voisinage devient une complémentarité entre le feu et l'eau, l'action et le rêve.",
      ] },
    ],
    faq: [
      { q: "Bélier et Poissons sont-ils compatibles&nbsp;?", a: "Bélier et Poissons, signes voisins à la jonction du zodiaque, forment un semi-sextile : une compatibilité d'ajustement entre l'action et le rêve. Sans évidence, elle demande de la douceur, mais le Bélier peut protéger les Poissons et les Poissons adoucir le Bélier. La synastrie complète des deux thèmes nuance ce portrait." },
      { q: "Pourquoi le Bélier et les Poissons s'ajustent-ils difficilement&nbsp;?", a: "Le Bélier (feu) est direct, impulsif et affirmé ; les Poissons (eau) sont sensibles, fluides et fusionnels. La franchise du Bélier peut blesser les Poissons, dont le flou peut désorienter le Bélier. Leurs natures s'opposent." },
      { q: "Quel est le plus grand défi du couple Bélier-Poissons&nbsp;?", a: "Concilier l'affirmation du Bélier avec la sensibilité fuyante des Poissons. Le défi est que le Bélier devienne protecteur plutôt que dominateur et que les Poissons s'ancrent et s'affirment." },
    ],
  }),

  // ===================== QUINCONCES (150°) — décalage, adaptation =====================
  pair({
    a: 'belier', b: 'vierge',
    metaDesc: "Compatibilité Bélier Vierge : un quinconce entre le feu et la terre, deux signes sans rien en commun. L'impulsion contre la méthode, un ajustement permanent. Dynamique et forces.",
    ogDesc: "Quinconce feu/terre : l'ajustement permanent entre l'élan du Bélier et la rigueur de la Vierge.",
    h1Html: "Compatibilité Bélier & Vierge, l'<em>impulsion</em> et la <em>méthode</em>",
    leadHtml: "Bélier et Vierge forment un quinconce, l'aspect du décalage et de l'adaptation. Cette compatibilité Bélier Vierge unit deux signes que rien ne relie naturellement, le feu pressé et la terre minutieuse, dans une relation qui exige des ajustements constants.",
    sections: [
      { h2: null, paras: [
        "Le <a href=\"/signes/belier\">Bélier</a> et la <a href=\"/signes/vierge\">Vierge</a> ne partagent ni élément, ni mode, ni planète : leur quinconce est l'aspect du décalage. Le Bélier fonce sans réfléchir, la Vierge analyse avant d'agir. Aucune affinité évidente, mais une relation où chacun, en s'ajustant à l'autre, comble ses propres angles morts.",
      ] },
      { h2: 'Bélier et Vierge : la dynamique profonde', paras: [
        "Mars (Bélier) et Mercure (Vierge) opposent l'action instinctive et la réflexion méthodique. Le Bélier veut le résultat tout de suite, la Vierge veut le faire bien. Le Bélier apprend de la Vierge la précision et la patience, la Vierge apprend du Bélier l'audace et la spontanéité.",
        "Le quinconce ne se résout jamais vraiment : il demande un effort d'adaptation continu. Le Bélier trouve la Vierge tatillonne et anxieuse, la Vierge trouve le Bélier brouillon et imprudent. C'est en acceptant l'inconfort que chacun grandit.",
      ] },
      { h2: 'Comment Bélier et Vierge communiquent', paras: [
        "Le Bélier tranche vite et fort, la Vierge nuance et corrige. Le Bélier s'agace des objections de la Vierge, la Vierge se crispe devant la précipitation du Bélier. Leurs modes de pensée se télescopent.",
        "La clé est la complémentarité assumée : le Bélier écoute les mises en garde de la Vierge, la Vierge soutient les élans du Bélier au lieu de les freiner. Ensemble, ils peuvent transformer une idée en action bien menée.",
      ] },
      { h2: "L'alchimie entre Bélier et Vierge", paras: [
        "L'attirance vient du contraste : la Vierge est fascinée par l'assurance du Bélier, le Bélier intrigué par la pudeur attentive de la Vierge. L'un apporte l'ardeur, l'autre le soin délicat.",
        "L'écueil tient au tempérament : le Bélier veut l'intensité immédiate, la Vierge a besoin de confiance et de lenteur pour s'ouvrir. Si le Bélier patiente et la Vierge se laisse aller, leur intimité conjugue fougue et tendresse attentive.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi central oppose l'impulsivité du Bélier au perfectionnisme de la Vierge. Le Bélier veut agir sans s'embarrasser des détails, la Vierge veut tout maîtriser avant de bouger. Le Bélier se sent freiné, la Vierge stressée par l'imprudence.",
        "La clé de résolution : chacun adopte un peu du tempérament de l'autre. Le Bélier apprend à préparer, la Vierge à oser sans tout contrôler. Le décalage du quinconce devient un apprentissage mutuel exigeant mais fécond.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand ils s'ajustent, Bélier et Vierge forment une équipe complémentaire : le Bélier lance et ose, la Vierge affine et fiabilise. L'énergie de l'un et la rigueur de l'autre peuvent accomplir de belles choses.",
        "La Vierge protège le Bélier de ses imprudences, le Bélier sort la Vierge de ses hésitations. Le décalage du quinconce, une fois apprivoisé, devient une vraie force entre le feu et la terre.",
      ] },
    ],
    faq: [
      { q: "Bélier et Vierge sont-ils compatibles&nbsp;?", a: "Bélier et Vierge forment un quinconce, aspect de décalage entre deux signes sans affinité naturelle : impulsion contre méthode. Leur compatibilité demande des ajustements constants, mais chacun comble les angles morts de l'autre. La synastrie complète des deux thèmes nuance fortement ce portrait." },
      { q: "Pourquoi le Bélier et la Vierge sont-ils si différents&nbsp;?", a: "Ils ne partagent ni élément, ni mode, ni planète. Le Bélier (feu) agit par instinct et veut le résultat immédiat ; la Vierge (terre) analyse et veut bien faire. Le Bélier trouve la Vierge tatillonne, la Vierge trouve le Bélier imprudent : c'est le propre du quinconce." },
      { q: "Quel est le plus grand défi du couple Bélier-Vierge&nbsp;?", a: "Concilier l'impulsivité du Bélier avec le perfectionnisme de la Vierge. Le défi est que le Bélier apprenne à préparer et que la Vierge apprenne à oser sans tout contrôler, chacun adoptant un peu du tempérament de l'autre." },
    ],
  }),

  pair({
    a: 'taureau', b: 'balance',
    metaDesc: "Compatibilité Taureau Balance : un quinconce entre la terre et l'air, deux signes de Vénus aux mondes différents. La sécurité contre l'harmonie sociale. Dynamique, défis et forces.",
    ogDesc: "Quinconce terre/air sous Vénus : l'ajustement entre l'ancrage du Taureau et la sociabilité de la Balance.",
    h1Html: "Compatibilité Taureau & Balance, deux <em>Vénus</em> aux antipodes",
    leadHtml: "Taureau et Balance forment un quinconce, l'aspect du décalage, tout en partageant la même planète : Vénus. Cette compatibilité Taureau Balance unit deux amoureux de la beauté qui ne l'habitent pas du tout de la même manière.",
    sections: [
      { h2: null, paras: [
        "Le <a href=\"/signes/taureau\">Taureau</a> et la <a href=\"/signes/balance\">Balance</a> sont tous deux gouvernés par Vénus, mais ne partagent ni élément ni mode : leur quinconce est l'aspect du décalage. Le Taureau aime par les sens et la sécurité, la Balance par l'harmonie et le lien social. Même planète, deux mondes, un ajustement permanent à trouver.",
      ] },
      { h2: 'Taureau et Balance : la dynamique profonde', paras: [
        "Vénus terrienne (Taureau) et Vénus aérienne (Balance) : la première veut posséder et savourer, la seconde plaire et harmoniser. Le Taureau cherche la stabilité et l'intimité, la Balance la vie sociale et l'esthétique du lien. Le Taureau apprend de la Balance le raffinement et le sens de l'autre, la Balance apprend du Taureau l'ancrage et la constance.",
        "Le quinconce demande un effort d'adaptation : le Taureau trouve la Balance trop tournée vers les autres et indécise, la Balance trouve le Taureau casanier et possessif. Mais leur amour commun de la beauté offre un terrain d'entente.",
      ] },
      { h2: 'Comment Taureau et Balance communiquent', paras: [
        "Le Taureau est direct et concret, la Balance diplomate et nuancée. Le Taureau peut sembler abrupt à la Balance, qui peut sembler évasive au Taureau. Leurs styles relationnels diffèrent nettement.",
        "La clé est la patience mutuelle : le Taureau accepte le besoin de dialogue et de vie sociale de la Balance, la Balance valorise la fiabilité du Taureau et ose trancher. Le concret rencontre alors l'élégance.",
      ] },
      { h2: "L'alchimie entre Taureau et Balance", paras: [
        "L'attirance Vénusienne est réelle : tous deux aiment le plaisir, la beauté, la douceur. Le Taureau apporte la sensualité charnelle, la Balance la séduction raffinée. Leur goût commun de l'esthétique crée une connexion sensuelle.",
        "L'écueil tient au besoin : le Taureau veut de la régularité et de la présence, la Balance de la romance et de la vie sociale. Si le Taureau s'ouvre et la Balance s'engage, leur intimité allie sensualité et raffinement.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi central oppose le besoin de sécurité du Taureau à la sociabilité de la Balance. Le Taureau veut un cocon stable, la Balance a besoin de monde et d'échanges. La possessivité du Taureau se heurte au besoin de liberté sociale de la Balance.",
        "La clé de résolution : le Taureau accorde de l'espace social à la Balance, la Balance rassure le Taureau par sa fidélité. Le décalage du quinconce devient un équilibre entre l'intimité et la vie sociale.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand ils s'ajustent, Taureau et Balance forment un couple esthète et harmonieux. Leur double Vénus en fait des amoureux de la beauté, du confort et des plaisirs partagés : leur foyer peut être à la fois douillet et élégant.",
        "Le Taureau ancre la Balance, la Balance affine et socialise le Taureau. Le décalage du quinconce, une fois apprivoisé, devient une complicité autour de tout ce qui rend la vie belle.",
      ] },
    ],
    faq: [
      { q: "Taureau et Balance sont-ils compatibles&nbsp;?", a: "Taureau et Balance forment un quinconce, aspect de décalage, mais partagent Vénus : leur compatibilité unit deux amoureux de la beauté aux mondes différents. Elle demande des ajustements, mais le goût commun de l'esthétique aide. La synastrie complète des deux thèmes nuance ce portrait." },
      { q: "Pourquoi le Taureau et la Balance sont-ils différents malgré Vénus&nbsp;?", a: "Tous deux gouvernés par Vénus, ils l'expriment autrement : le Taureau (terre) par les sens, la possession et la sécurité ; la Balance (air) par l'harmonie, le lien social et l'esthétique. Même amour de la beauté, deux manières opposées de la vivre." },
      { q: "Quel est le plus grand défi du couple Taureau-Balance&nbsp;?", a: "Concilier le besoin de sécurité et d'intimité du Taureau avec la sociabilité de la Balance. Le défi est que le Taureau accorde de l'espace social et que la Balance rassure le Taureau par sa fidélité." },
    ],
  }),

  pair({
    a: 'gemeaux', b: 'scorpion',
    metaDesc: "Compatibilité Gémeaux Scorpion : un quinconce entre l'air et l'eau, la légèreté contre l'intensité. Deux signes sans rien en commun qui se fascinent. Dynamique, défis et forces.",
    ogDesc: "Quinconce air/eau : l'ajustement déroutant entre la légèreté des Gémeaux et l'intensité du Scorpion.",
    h1Html: "Compatibilité Gémeaux & Scorpion, la <em>légèreté</em> et l'<em>abîme</em>",
    leadHtml: "Gémeaux et Scorpion forment un quinconce, l'aspect du décalage. Cette compatibilité Gémeaux Scorpion unit deux signes que tout sépare, l'air volatil et l'eau profonde, dans une fascination déroutante qui demande beaucoup d'adaptation.",
    sections: [
      { h2: null, paras: [
        "Les <a href=\"/signes/gemeaux\">Gémeaux</a> et le <a href=\"/signes/scorpion\">Scorpion</a> ne partagent ni élément, ni mode, ni planète : leur quinconce est l'aspect du décalage. Les Gémeaux survolent et papillonnent, le Scorpion plonge et fusionne. La légèreté de l'un déroute la profondeur de l'autre, et pourtant, ils se fascinent.",
      ] },
      { h2: 'Gémeaux et Scorpion : la dynamique profonde', paras: [
        "Mercure (Gémeaux) et Pluton (Scorpion) opposent la curiosité légère et l'obsession profonde. Les Gémeaux veulent tout savoir un peu, le Scorpion veut tout connaître à fond. Les Gémeaux apprennent du Scorpion l'intensité et l'engagement, le Scorpion apprend des Gémeaux la légèreté et le détachement.",
        "Le quinconce demande un effort constant : les Gémeaux trouvent le Scorpion trop intense et possessif, le Scorpion trouve les Gémeaux superficiels et insaisissables. Mais le mystère de l'un attire la curiosité de l'autre.",
      ] },
      { h2: 'Comment Gémeaux et Scorpion communiquent', paras: [
        "Les Gémeaux parlent de tout avec aisance, le Scorpion garde ses secrets et sonde. Les Gémeaux peuvent agacer le Scorpion par leur dispersion, le Scorpion peut inquiéter les Gémeaux par son intensité et sa méfiance.",
        "La clé est l'authenticité : les Gémeaux osent la profondeur et la constance, le Scorpion accorde sa confiance et lâche le contrôle. Leur échange peut alors mêler vivacité et profondeur.",
      ] },
      { h2: "L'alchimie entre Gémeaux et Scorpion", paras: [
        "L'attirance est magnétique et énigmatique : les Gémeaux sont fascinés par l'intensité du Scorpion, le Scorpion par l'insaisissabilité des Gémeaux. L'un apporte le jeu, l'autre la passion brûlante.",
        "L'écueil tient au besoin : le Scorpion veut fusion et exclusivité, les Gémeaux liberté et légèreté. Si les Gémeaux s'investissent et le Scorpion lâche prise, leur intimité allie curiosité et intensité, un mélange rare.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi central oppose la légèreté des Gémeaux à l'intensité du Scorpion. Les Gémeaux fuient la lourdeur émotionnelle, le Scorpion exige profondeur et exclusivité. La jalousie du Scorpion se heurte au besoin de liberté et de sociabilité des Gémeaux.",
        "La clé de résolution : les Gémeaux rassurent le Scorpion par leur sincérité, le Scorpion respecte le besoin d'air des Gémeaux. Le décalage du quinconce devient une rencontre entre surface lumineuse et profondeur.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand ils s'ajustent, Gémeaux et Scorpion forment un couple fascinant et complémentaire. Les Gémeaux allègent le Scorpion et l'ouvrent, le Scorpion approfondit les Gémeaux et les ancre dans le ressenti.",
        "Les Gémeaux apportent l'air et le mouvement, le Scorpion l'eau et la profondeur. Le décalage du quinconce, une fois apprivoisé, devient une attraction durable entre deux mondes opposés.",
      ] },
    ],
    faq: [
      { q: "Gémeaux et Scorpion sont-ils compatibles&nbsp;?", a: "Gémeaux et Scorpion forment un quinconce, aspect de décalage entre deux signes sans affinité : légèreté contre intensité. Leur compatibilité est déroutante et demande beaucoup d'adaptation, mais la fascination mutuelle est réelle. La synastrie complète des deux thèmes nuance ce portrait." },
      { q: "Pourquoi les Gémeaux et le Scorpion se déroutent-ils&nbsp;?", a: "Ils ne partagent ni élément, ni mode, ni planète. Les Gémeaux (air) survolent, papillonnent et restent légers ; le Scorpion (eau) plonge, fusionne et exige la profondeur. La légèreté de l'un déroute l'intensité de l'autre." },
      { q: "Quel est le plus grand défi du couple Gémeaux-Scorpion&nbsp;?", a: "Concilier la légèreté des Gémeaux avec l'intensité du Scorpion. Le défi est que les Gémeaux s'investissent émotionnellement et rassurent le Scorpion, et que le Scorpion lâche le contrôle et respecte leur besoin de liberté." },
    ],
  }),

  pair({
    a: 'cancer', b: 'sagittaire',
    metaDesc: "Compatibilité Cancer Sagittaire : un quinconce entre l'eau et le feu, le foyer contre l'aventure. Deux signes sans rien en commun à ajuster. Dynamique, défis et forces du couple.",
    ogDesc: "Quinconce eau/feu : l'ajustement entre le besoin de foyer du Cancer et la soif d'aventure du Sagittaire.",
    h1Html: "Compatibilité Cancer & Sagittaire, le <em>foyer</em> et l'<em>horizon</em>",
    leadHtml: "Cancer et Sagittaire forment un quinconce, l'aspect du décalage. Cette compatibilité Cancer Sagittaire unit deux signes que rien ne relie, l'eau qui veut un nid et le feu qui veut partir, dans une relation faite d'ajustements.",
    sections: [
      { h2: null, paras: [
        "Le <a href=\"/signes/cancer\">Cancer</a> et le <a href=\"/signes/sagittaire\">Sagittaire</a> ne partagent ni élément, ni mode, ni planète : leur quinconce est l'aspect du décalage. Le Cancer veut construire un foyer et se blottir, le Sagittaire veut courir le monde et s'envoler. Le besoin de racines de l'un défie le besoin d'ailes de l'autre.",
      ] },
      { h2: 'Cancer et Sagittaire : la dynamique profonde', paras: [
        "La Lune (Cancer) et Jupiter (Sagittaire) opposent l'intimité protectrice et l'expansion joyeuse. Le Cancer cherche la sécurité émotionnelle, le Sagittaire la liberté et le sens. Le Cancer apprend du Sagittaire l'optimisme et l'ouverture, le Sagittaire apprend du Cancer la tendresse et l'enracinement.",
        "Le quinconce demande un effort d'adaptation : le Cancer trouve le Sagittaire fuyant et insouciant, le Sagittaire trouve le Cancer trop émotif et casanier. Mais la chaleur du Sagittaire et la douceur du Cancer peuvent se rencontrer.",
      ] },
      { h2: 'Comment Cancer et Sagittaire communiquent', paras: [
        "Le Cancer s'exprime par l'émotion et les sous-entendus, le Sagittaire par la franchise large et directe. La franchise du Sagittaire peut blesser la sensibilité du Cancer, dont les humeurs peuvent dérouter le Sagittaire.",
        "La clé est la douceur et l'ouverture : le Sagittaire tient compte de la sensibilité du Cancer, le Cancer s'ouvre à la légèreté du Sagittaire sans tout prendre à cœur. Leur échange mêle alors chaleur et horizon.",
      ] },
      { h2: "L'alchimie entre Cancer et Sagittaire", paras: [
        "L'attirance vient du contraste : le Cancer est réchauffé par la joie de vivre du Sagittaire, le Sagittaire attendri par la tendresse du Cancer. L'un apporte la fougue aventureuse, l'autre la douceur enveloppante.",
        "L'écueil tient au besoin : le Cancer veut intimité et réassurance, le Sagittaire liberté et mouvement. Si le Sagittaire offre de la présence et le Cancer de l'espace, leur intimité allie tendresse et aventure.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi central oppose le besoin de foyer du Cancer à la soif de liberté du Sagittaire. Le Cancer veut un nid et de la proximité, le Sagittaire veut de l'air et de l'aventure. Le Cancer peut se sentir abandonné, le Sagittaire enfermé.",
        "La clé de résolution : le Sagittaire rassure le Cancer par sa fidélité et sa présence, le Cancer accorde au Sagittaire la liberté dont il a besoin. Le décalage du quinconce devient un équilibre entre racines et ailes.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand ils s'ajustent, Cancer et Sagittaire forment un couple où la chaleur du foyer rencontre la joie de l'aventure. Le Cancer offre au Sagittaire un port d'attache, le Sagittaire offre au Cancer des horizons et de l'optimisme.",
        "Le Cancer ancre le Sagittaire, le Sagittaire élargit le monde du Cancer. Le décalage du quinconce, une fois apprivoisé, devient une complémentarité entre l'eau et le feu, le nid et le voyage.",
      ] },
    ],
    faq: [
      { q: "Cancer et Sagittaire sont-ils compatibles&nbsp;?", a: "Cancer et Sagittaire forment un quinconce, aspect de décalage entre deux signes sans affinité : le foyer contre l'aventure. Leur compatibilité demande des ajustements, mais la chaleur du Sagittaire et la douceur du Cancer peuvent se rejoindre. La synastrie complète des deux thèmes nuance ce portrait." },
      { q: "Pourquoi le Cancer et le Sagittaire sont-ils si différents&nbsp;?", a: "Ils ne partagent ni élément, ni mode, ni planète. Le Cancer (eau) veut un foyer, de la sécurité et de la proximité ; le Sagittaire (feu) veut la liberté, l'aventure et les horizons. Le besoin de racines de l'un défie le besoin d'ailes de l'autre." },
      { q: "Quel est le plus grand défi du couple Cancer-Sagittaire&nbsp;?", a: "Concilier le besoin de foyer du Cancer avec la soif de liberté du Sagittaire. Le défi est que le Sagittaire rassure par sa présence et que le Cancer accorde de la liberté, équilibrant racines et ailes." },
    ],
  }),

  pair({
    a: 'lion', b: 'capricorne',
    metaDesc: "Compatibilité Lion Capricorne : un quinconce entre le feu et la terre, l'éclat contre l'ambition discrète. Deux signes de pouvoir à ajuster. Dynamique, défis et forces du couple.",
    ogDesc: "Quinconce feu/terre : l'ajustement entre le rayonnement du Lion et l'ambition réservée du Capricorne.",
    h1Html: "Compatibilité Lion & Capricorne, l'<em>éclat</em> et l'<em>ambition</em>",
    leadHtml: "Lion et Capricorne forment un quinconce, l'aspect du décalage. Cette compatibilité Lion Capricorne unit deux signes de pouvoir que tout sépare dans le style, le feu flamboyant et la terre réservée, dans une relation d'ajustement où le respect peut naître.",
    sections: [
      { h2: null, paras: [
        "Le <a href=\"/signes/lion\">Lion</a> et le <a href=\"/signes/capricorne\">Capricorne</a> ne partagent ni élément, ni mode, ni planète : leur quinconce est l'aspect du décalage. Tous deux veulent réussir et marquer, mais le Lion par l'éclat et la chaleur, le Capricorne par l'effort discret et la maîtrise. Deux ambitions, deux styles opposés.",
      ] },
      { h2: 'Lion et Capricorne : la dynamique profonde', paras: [
        "Le Soleil (Lion) et Saturne (Capricorne) opposent le rayonnement spontané et la construction patiente. Le Lion veut être reconnu maintenant, le Capricorne bâtit sur le long terme. Le Lion apprend du Capricorne la discipline et la persévérance, le Capricorne apprend du Lion la chaleur et la confiance.",
        "Le quinconce demande un effort d'adaptation : le Lion trouve le Capricorne froid et trop sérieux, le Capricorne trouve le Lion vaniteux et dépensier. Mais leur ambition commune et leur loyauté offrent un terrain de respect.",
      ] },
      { h2: 'Comment Lion et Capricorne communiquent', paras: [
        "Le Lion s'exprime avec chaleur et grandeur, le Capricorne avec sobriété et pragmatisme. Le Lion a besoin d'éloges, le Capricorne reste avare de compliments : le Lion peut se sentir mal aimé, le Capricorne agacé par le besoin d'attention du Lion.",
        "La clé est la reconnaissance mutuelle : le Lion respecte le sérieux du Capricorne, le Capricorne offre au Lion des marques de reconnaissance. Leur dialogue gagne alors en estime réciproque.",
      ] },
      { h2: "L'alchimie entre Lion et Capricorne", paras: [
        "L'attirance vient du respect : le Lion est intrigué par la maîtrise du Capricorne, le Capricorne séduit par la vitalité du Lion. L'un apporte la passion chaleureuse, l'autre une sensualité contenue qui se révèle avec la confiance.",
        "L'écueil tient au tempérament : le Lion veut démonstration et romance, le Capricorne est pudique et réservé. Si le Lion respecte la pudeur du Capricorne et le Capricorne se réchauffe, leur intimité allie chaleur et profondeur.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi central oppose le besoin de reconnaissance du Lion à la réserve du Capricorne. Le Lion veut briller et être admiré, le Capricorne reste discret et concentré sur ses objectifs. Le Lion peut se sentir négligé, le Capricorne exaspéré par l'ego du Lion.",
        "La clé de résolution : le Capricorne valorise le Lion, le Lion respecte le rythme et le sérieux du Capricorne. Le décalage du quinconce devient une alliance entre l'éclat et la persévérance.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand ils s'ajustent, Lion et Capricorne forment un couple ambitieux et solide. Le Lion apporte la lumière et la chaleur, le Capricorne la structure et la durée : ensemble, ils peuvent bâtir une réussite à la fois éclatante et pérenne.",
        "Le Capricorne ancre les élans du Lion, le Lion réchauffe la rigueur du Capricorne. Le décalage du quinconce, une fois apprivoisé, devient une force entre le feu et la terre, l'éclat et l'ambition.",
      ] },
    ],
    faq: [
      { q: "Lion et Capricorne sont-ils compatibles&nbsp;?", a: "Lion et Capricorne forment un quinconce, aspect de décalage entre deux signes de pouvoir aux styles opposés : éclat contre ambition discrète. Leur compatibilité demande des ajustements, mais leur loyauté et leur ambition communes nourrissent le respect. La synastrie complète des deux thèmes nuance ce portrait." },
      { q: "Pourquoi le Lion et le Capricorne s'ajustent-ils difficilement&nbsp;?", a: "Ils ne partagent ni élément, ni mode, ni planète. Le Lion (feu) veut briller, être admiré et créer en grand ; le Capricorne (terre) bâtit dans l'effort discret et la durée. Le Lion trouve le Capricorne froid, le Capricorne trouve le Lion vaniteux." },
      { q: "Quel est le plus grand défi du couple Lion-Capricorne&nbsp;?", a: "Concilier le besoin de reconnaissance du Lion avec la réserve du Capricorne. Le défi est que le Capricorne valorise le Lion et que le Lion respecte le sérieux et le rythme du Capricorne." },
    ],
  }),

  pair({
    a: 'vierge', b: 'verseau',
    metaDesc: "Compatibilité Vierge Verseau : un quinconce entre la terre et l'air, la méthode contre l'utopie. Deux esprits différents à ajuster. Dynamique, communication, défis et forces.",
    ogDesc: "Quinconce terre/air : l'ajustement entre la rigueur de la Vierge et la vision du Verseau.",
    h1Html: "Compatibilité Vierge & Verseau, la <em>méthode</em> et l'<em>utopie</em>",
    leadHtml: "Vierge et Verseau forment un quinconce, l'aspect du décalage. Cette compatibilité Vierge Verseau unit deux esprits brillants mais opposés, la terre minutieuse et l'air visionnaire, dans une relation d'ajustement intellectuel.",
    sections: [
      { h2: null, paras: [
        "La <a href=\"/signes/vierge\">Vierge</a> et le <a href=\"/signes/verseau\">Verseau</a> ne partagent ni élément, ni mode, ni planète : leur quinconce est l'aspect du décalage. La Vierge perfectionne le détail concret, le Verseau réinvente le grand système. L'une veut que tout fonctionne, l'autre que tout change, deux intelligences qui se cherchent.",
      ] },
      { h2: 'Vierge et Verseau : la dynamique profonde', paras: [
        "Mercure (Vierge) et Uranus (Verseau) opposent l'analyse précise et l'intuition fulgurante. La Vierge avance par petites améliorations, le Verseau par ruptures soudaines. La Vierge apprend du Verseau l'audace et la vision, le Verseau apprend de la Vierge la rigueur et la concrétisation.",
        "Le quinconce demande un effort d'adaptation : la Vierge trouve le Verseau imprévisible et utopiste, le Verseau trouve la Vierge tatillonne et conventionnelle. Mais leur intelligence commune et leur sens du service offrent un terrain d'entente.",
      ] },
      { h2: 'Comment Vierge et Verseau communiquent', paras: [
        "La Vierge raisonne par le concret et le détail, le Verseau par les concepts et l'avenir. La Vierge peut trouver le Verseau abstrait et brouillon, le Verseau peut trouver la Vierge enfermée dans les petites choses.",
        "La clé est la curiosité mutuelle : la Vierge s'ouvre aux grandes idées du Verseau, le Verseau respecte le souci du détail de la Vierge. Ensemble, ils peuvent transformer une vision en réalité bien construite.",
      ] },
      { h2: "L'alchimie entre Vierge et Verseau", paras: [
        "L'attirance est avant tout intellectuelle : tous deux cérébraux, ils se séduisent par l'esprit et les idées. La Vierge apporte l'attention dévouée, le Verseau l'originalité et la surprise.",
        "L'écueil tient à l'émotion : ni l'un ni l'autre n'est très démonstratif, et la chaleur peut manquer. Si la Vierge se détend et le Verseau s'engage, leur intimité gagne en tendresse derrière la réserve.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi central oppose le besoin d'ordre de la Vierge à l'esprit de rupture du Verseau. La Vierge veut maîtriser et perfectionner, le Verseau veut bousculer et innover. La Vierge peut être déstabilisée, le Verseau bridé par les exigences de la Vierge.",
        "La clé de résolution : la Vierge accueille l'imprévu du Verseau, le Verseau ancre ses idées dans le concret. Le décalage du quinconce devient une collaboration entre la méthode et la vision.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand ils s'ajustent, Vierge et Verseau forment un couple intellectuellement riche et utile. La Vierge donne corps aux visions du Verseau, le Verseau ouvre la Vierge à de nouveaux horizons. Tous deux animés par le désir d'améliorer le monde, ils peuvent œuvrer ensemble.",
        "La Vierge ancre les idées du Verseau, le Verseau élargit l'horizon de la Vierge. Le décalage du quinconce, une fois apprivoisé, devient une force entre la terre et l'air, la méthode et l'innovation.",
      ] },
    ],
    faq: [
      { q: "Vierge et Verseau sont-ils compatibles&nbsp;?", a: "Vierge et Verseau forment un quinconce, aspect de décalage entre deux esprits opposés : méthode contre utopie. Leur compatibilité demande des ajustements, mais leur intelligence et leur sens du service communs créent un terrain d'entente. La synastrie complète des deux thèmes nuance ce portrait." },
      { q: "Pourquoi la Vierge et le Verseau s'ajustent-ils difficilement&nbsp;?", a: "Ils ne partagent ni élément, ni mode, ni planète. La Vierge (terre) perfectionne le détail concret par petites améliorations ; le Verseau (air) réinvente les grands systèmes par ruptures. La Vierge trouve le Verseau utopiste, le Verseau trouve la Vierge tatillonne." },
      { q: "Quel est le plus grand défi du couple Vierge-Verseau&nbsp;?", a: "Concilier le besoin d'ordre de la Vierge avec l'esprit de rupture du Verseau, et trouver de la chaleur. Le défi est que la Vierge accueille l'imprévu et que le Verseau ancre ses idées dans le concret." },
    ],
  }),

  pair({
    a: 'balance', b: 'poissons',
    metaDesc: "Compatibilité Balance Poissons : un quinconce entre l'air et l'eau, deux signes Vénus-Neptune doux et idéalistes. La raison contre le rêve. Dynamique, défis et forces du couple.",
    ogDesc: "Quinconce air/eau : l'ajustement délicat entre la grâce de la Balance et le rêve des Poissons.",
    h1Html: "Compatibilité Balance & Poissons, la <em>grâce</em> et le <em>rêve</em>",
    leadHtml: "Balance et Poissons forment un quinconce, l'aspect du décalage. Cette compatibilité Balance Poissons unit deux âmes douces et romantiques, l'air harmonieux et l'eau rêveuse, dans une relation tendre mais qui manque parfois d'ancrage.",
    sections: [
      { h2: null, paras: [
        "La <a href=\"/signes/balance\">Balance</a> et les <a href=\"/signes/poissons\">Poissons</a> ne partagent ni élément, ni mode, ni planète : leur quinconce est l'aspect du décalage. Pourtant, tous deux sont sensibles, romantiques et épris d'harmonie. La Balance vit dans les relations et l'esthétique, les Poissons dans l'émotion et le rêve, un décalage doux à ajuster.",
      ] },
      { h2: 'Balance et Poissons : la dynamique profonde', paras: [
        "Vénus (Balance) et Neptune (Poissons) associent la beauté et le rêve, l'harmonie et la compassion. La Balance cherche l'équilibre relationnel, les Poissons la fusion spirituelle. La Balance apprend des Poissons la profondeur émotionnelle, les Poissons apprennent de la Balance le sens des limites et de l'équilibre.",
        "Le quinconce demande un effort d'adaptation : la Balance trouve les Poissons trop flous et émotifs, les Poissons trouvent la Balance trop mentale et sociale. Mais leur douceur commune et leur idéalisme les rapprochent.",
      ] },
      { h2: 'Comment Balance et Poissons communiquent', paras: [
        "La Balance communique par la nuance et la diplomatie, les Poissons par l'intuition et le ressenti. Tous deux fuient le conflit, ce qui peut créer des non-dits et un flou émotionnel difficile à dissiper.",
        "La clé est la clarté douce : la Balance ose nommer les choses sans rompre l'harmonie, les Poissons mettent des mots sur leurs ressentis. Leur sensibilité partagée devient alors un dialogue tendre et profond.",
      ] },
      { h2: "L'alchimie entre Balance et Poissons", paras: [
        "L'attirance est romantique et poétique : la Balance séduit par sa grâce, les Poissons par leur tendresse rêveuse. Tous deux aiment la beauté, la douceur, le romantisme, une connexion délicate.",
        "L'écueil tient au besoin : les Poissons veulent fusion et profondeur, la Balance harmonie et un peu de distance esthétique. Si la Balance plonge dans l'émotion et les Poissons respectent son besoin de lien social, leur intimité devient tendre et magique.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi central est le manque d'ancrage. Tous deux sensibles, indécis et fuyant le conflit, ils peuvent dériver sans direction, laisser les non-dits s'accumuler ou se perdre dans l'idéalisation de l'autre.",
        "La clé de résolution : développer ensemble plus de clarté et de structure, oser les vrais sujets. La Balance apporte un peu de raison, les Poissons un peu de profondeur. Le décalage du quinconce devient une tendresse mieux ancrée.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand ils s'ajustent, Balance et Poissons forment un couple d'une grande douceur. Leur sensibilité, leur romantisme et leur idéalisme communs en font des partenaires tendres et inspirants, attentifs à la beauté et aux autres.",
        "La Balance apporte l'équilibre et la grâce sociale, les Poissons la profondeur et l'imaginaire. Le décalage du quinconce, une fois apprivoisé, devient une rencontre poétique entre l'air et l'eau.",
      ] },
    ],
    faq: [
      { q: "Balance et Poissons sont-ils compatibles&nbsp;?", a: "Balance et Poissons forment un quinconce, aspect de décalage entre deux âmes douces et idéalistes. Sans affinité de fond, leur compatibilité est tendre mais manque d'ancrage. Avec de la clarté, le couple peut être très romantique. La synastrie complète des deux thèmes nuance ce portrait." },
      { q: "Pourquoi la Balance et les Poissons s'ajustent-ils difficilement&nbsp;?", a: "Ils ne partagent ni élément, ni mode, ni planète. La Balance (air) vit dans les relations, le mental et l'esthétique ; les Poissons (eau) vivent dans l'émotion, l'intuition et le rêve. La Balance trouve les Poissons flous, les Poissons trouvent la Balance trop mentale." },
      { q: "Quel est le plus grand défi du couple Balance-Poissons&nbsp;?", a: "Le manque d'ancrage. Deux signes sensibles qui fuient le conflit peuvent dériver et accumuler les non-dits. Le défi est de développer ensemble plus de clarté et de structure, et d'oser les vrais sujets." },
    ],
  }),

  pair({
    a: 'belier', b: 'scorpion',
    metaDesc: "Compatibilité Bélier Scorpion : un quinconce entre le feu et l'eau, deux signes martiens intenses. L'action contre la profondeur, une attraction puissante. Dynamique, défis et forces.",
    ogDesc: "Quinconce feu/eau sous Mars : l'attraction intense et l'ajustement entre le Bélier et le Scorpion.",
    h1Html: "Compatibilité Bélier & Scorpion, deux <em>guerriers</em> de Mars",
    leadHtml: "Bélier et Scorpion forment un quinconce, l'aspect du décalage, mais partagent un héritage martien. Cette compatibilité Bélier Scorpion unit deux intensités, le feu direct et l'eau profonde, dans une attraction puissante qui demande de l'ajustement.",
    sections: [
      { h2: null, paras: [
        "Le <a href=\"/signes/belier\">Bélier</a> et le <a href=\"/signes/scorpion\">Scorpion</a> ne partagent ni élément ni mode, mais l'astrologie traditionnelle les rattachait tous deux à Mars : leur quinconce mêle décalage et parenté secrète. Le Bélier agit au grand jour, le Scorpion œuvre dans les profondeurs. Deux puissances que tout oppose en surface et qu'une même intensité relie.",
      ] },
      { h2: 'Bélier et Scorpion : la dynamique profonde', paras: [
        "Mars guerrier (Bélier) et Pluton/Mars souterrain (Scorpion) : la pulsion directe rencontre le désir profond. Le Bélier veut conquérir vite, le Scorpion veut posséder totalement. Le Bélier apprend du Scorpion la profondeur et la stratégie, le Scorpion apprend du Bélier la franchise et la spontanéité.",
        "Le quinconce demande un effort d'adaptation : le Bélier trouve le Scorpion trop secret et contrôlant, le Scorpion trouve le Bélier trop impulsif et superficiel. Mais leur intensité commune crée une attraction magnétique.",
      ] },
      { h2: 'Comment Bélier et Scorpion communiquent', paras: [
        "Le Bélier dit tout immédiatement, le Scorpion garde ses cartes et sonde. Le Bélier peut s'agacer du mystère du Scorpion, le Scorpion peut mépriser l'impulsivité du Bélier. Leurs stratégies s'opposent.",
        "La clé est la confiance : le Bélier apprend la patience et la profondeur, le Scorpion la transparence et le lâcher-prise. Quand ils cessent de se méfier, leur intensité partagée devient une force.",
      ] },
      { h2: "L'alchimie entre Bélier et Scorpion", paras: [
        "L'attirance est brûlante : ces deux signes martiens dégagent une intensité physique rare. Le Bélier apporte l'ardeur directe, le Scorpion la passion profonde et magnétique. Le désir entre eux est puissant, presque dangereux.",
        "L'écueil tient au pouvoir : le Bélier veut dominer ouvertement, le Scorpion contrôler en profondeur. Si le Bélier respecte l'intensité du Scorpion et le Scorpion accorde sa confiance, leur intimité devient un feu rare.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi central est la lutte de pouvoir et la jalousie. Deux volontés intenses s'affrontent : le Bélier fonce et provoque, le Scorpion calcule et n'oublie rien. La possessivité du Scorpion se heurte à l'indépendance du Bélier.",
        "La clé de résolution : le Bélier apprend la nuance et la profondeur, le Scorpion la confiance et le pardon. Le décalage du quinconce, doublé de la parenté martienne, devient une intensité partagée plutôt qu'une guerre.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand ils s'ajustent, Bélier et Scorpion forment un couple d'une force redoutable. Leur intensité commune, leur passion et leur détermination en font des alliés puissants une fois la confiance établie.",
        "Le Bélier apporte la lumière et l'action, le Scorpion la profondeur et la stratégie. Le décalage du quinconce, une fois apprivoisé, devient une alliance brûlante entre le feu et l'eau, l'épée et l'ombre.",
      ] },
    ],
    faq: [
      { q: "Bélier et Scorpion sont-ils compatibles&nbsp;?", a: "Bélier et Scorpion forment un quinconce, aspect de décalage, mais partagent un héritage martien : leur compatibilité mêle attraction intense et lutte de pouvoir. Elle demande des ajustements et de la confiance. La synastrie complète des deux thèmes nuance fortement ce portrait." },
      { q: "Pourquoi le Bélier et le Scorpion s'attirent-ils autant&nbsp;?", a: "Tous deux liés traditionnellement à Mars, ils partagent une intensité rare et un fort magnétisme physique. Le Bélier agit au grand jour, le Scorpion dans les profondeurs : la franchise de l'un et le mystère de l'autre créent une attraction puissante." },
      { q: "Quel est le plus grand défi du couple Bélier-Scorpion&nbsp;?", a: "La lutte de pouvoir et la jalousie. Le Bélier fonce et provoque, le Scorpion contrôle et n'oublie rien. Le défi est que le Bélier apprenne la nuance et que le Scorpion accorde sa confiance, transformant l'affrontement en intensité partagée." },
    ],
  }),

  pair({
    a: 'taureau', b: 'sagittaire',
    metaDesc: "Compatibilité Taureau Sagittaire : un quinconce entre la terre et le feu, la sécurité contre la liberté. Deux signes sans rien en commun à ajuster. Dynamique, défis et forces.",
    ogDesc: "Quinconce terre/feu : l'ajustement entre le besoin de stabilité du Taureau et la soif d'aventure du Sagittaire.",
    h1Html: "Compatibilité Taureau & Sagittaire, la <em>sécurité</em> et l'<em>aventure</em>",
    leadHtml: "Taureau et Sagittaire forment un quinconce, l'aspect du décalage. Cette compatibilité Taureau Sagittaire unit deux signes que rien ne relie, la terre qui veut s'installer et le feu qui veut partir, dans une relation d'ajustement constant.",
    sections: [
      { h2: null, paras: [
        "Le <a href=\"/signes/taureau\">Taureau</a> et le <a href=\"/signes/sagittaire\">Sagittaire</a> ne partagent ni élément, ni mode, ni planète : leur quinconce est l'aspect du décalage. Le Taureau veut la sécurité, le confort, la routine ; le Sagittaire veut l'aventure, la liberté, l'horizon. L'enracinement de l'un défie le nomadisme de l'autre.",
      ] },
      { h2: 'Taureau et Sagittaire : la dynamique profonde', paras: [
        "Vénus (Taureau) et Jupiter (Sagittaire) associent le plaisir et l'expansion. Le Taureau savoure ce qu'il a, le Sagittaire cherche toujours plus loin. Le Taureau apprend du Sagittaire l'ouverture et l'optimisme, le Sagittaire apprend du Taureau l'ancrage et la patience.",
        "Le quinconce demande un effort d'adaptation : le Taureau trouve le Sagittaire instable et imprudent, le Sagittaire trouve le Taureau casanier et borné. Mais tous deux aiment la vie, les plaisirs et la générosité, un terrain commun.",
      ] },
      { h2: 'Comment Taureau et Sagittaire communiquent', paras: [
        "Le Taureau est concret et mesuré, le Sagittaire enthousiaste et large. Le Sagittaire peut trouver le Taureau étroit, le Taureau peut trouver le Sagittaire irréaliste. Leurs visions diffèrent.",
        "La clé est l'ouverture mutuelle : le Taureau s'intéresse aux horizons du Sagittaire, le Sagittaire respecte le besoin de stabilité du Taureau. Leur amour commun de la bonne vie crée un pont.",
      ] },
      { h2: "L'alchimie entre Taureau et Sagittaire", paras: [
        "L'attirance vient du contraste : le Taureau est séduit par la joie de vivre du Sagittaire, le Sagittaire par la sensualité du Taureau. L'un apporte le plaisir des sens, l'autre la fougue aventureuse.",
        "L'écueil tient au besoin : le Taureau veut régularité et présence, le Sagittaire liberté et mouvement. Si le Taureau accepte un peu d'imprévu et le Sagittaire offre de la fidélité, leur intimité allie sensualité et fantaisie.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi central oppose le besoin de sécurité du Taureau à la soif de liberté du Sagittaire. Le Taureau veut construire un nid stable, le Sagittaire refuse de se sentir enfermé. Le Taureau peut se sentir insécurisé, le Sagittaire bridé.",
        "La clé de résolution : le Taureau accorde de la liberté au Sagittaire, le Sagittaire rassure le Taureau par sa fidélité et sa présence. Le décalage du quinconce devient un équilibre entre racines et horizons.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand ils s'ajustent, Taureau et Sagittaire forment un couple où la stabilité accueille l'aventure. Le Taureau offre au Sagittaire un port d'attache, le Sagittaire offre au Taureau des horizons et de la légèreté.",
        "Le Taureau ancre le Sagittaire, le Sagittaire ouvre le monde du Taureau. Le décalage du quinconce, une fois apprivoisé, devient une complémentarité entre la terre et le feu, le foyer et le voyage.",
      ] },
    ],
    faq: [
      { q: "Taureau et Sagittaire sont-ils compatibles&nbsp;?", a: "Taureau et Sagittaire forment un quinconce, aspect de décalage entre deux signes sans affinité : la sécurité contre la liberté. Leur compatibilité demande des ajustements, mais leur amour commun de la vie et des plaisirs crée un terrain d'entente. La synastrie complète des deux thèmes nuance ce portrait." },
      { q: "Pourquoi le Taureau et le Sagittaire sont-ils si différents&nbsp;?", a: "Ils ne partagent ni élément, ni mode, ni planète. Le Taureau (terre) veut la sécurité, le confort et la routine ; le Sagittaire (feu) veut l'aventure, la liberté et l'horizon. L'enracinement de l'un défie le nomadisme de l'autre." },
      { q: "Quel est le plus grand défi du couple Taureau-Sagittaire&nbsp;?", a: "Concilier le besoin de sécurité du Taureau avec la soif de liberté du Sagittaire. Le défi est que le Taureau accorde de la liberté et que le Sagittaire rassure par sa fidélité, équilibrant racines et horizons." },
    ],
  }),

  pair({
    a: 'gemeaux', b: 'capricorne',
    metaDesc: "Compatibilité Gémeaux Capricorne : un quinconce entre l'air et la terre, la légèreté contre le sérieux. Deux signes opposés à ajuster. Dynamique, communication, défis et forces.",
    ogDesc: "Quinconce air/terre : l'ajustement entre la vivacité des Gémeaux et le sérieux du Capricorne.",
    h1Html: "Compatibilité Gémeaux & Capricorne, la <em>légèreté</em> et le <em>sérieux</em>",
    leadHtml: "Gémeaux et Capricorne forment un quinconce, l'aspect du décalage. Cette compatibilité Gémeaux Capricorne unit deux tempéraments opposés, l'air joueur et la terre grave, dans une relation où l'ajustement est de chaque instant.",
    sections: [
      { h2: null, paras: [
        "Les <a href=\"/signes/gemeaux\">Gémeaux</a> et le <a href=\"/signes/capricorne\">Capricorne</a> ne partagent ni élément, ni mode, ni planète : leur quinconce est l'aspect du décalage. Les Gémeaux papillonnent et plaisantent, le Capricorne planifie et persévère. La légèreté de l'un défie la gravité de l'autre.",
      ] },
      { h2: 'Gémeaux et Capricorne : la dynamique profonde', paras: [
        "Mercure (Gémeaux) et Saturne (Capricorne) opposent la curiosité mobile et la discipline patiente. Les Gémeaux explorent tous azimuts, le Capricorne avance vers un sommet précis. Les Gémeaux apprennent du Capricorne la constance et la profondeur, le Capricorne apprend des Gémeaux la souplesse et l'humour.",
        "Le quinconce demande un effort d'adaptation : les Gémeaux trouvent le Capricorne rigide et austère, le Capricorne trouve les Gémeaux dispersés et superficiels. Mais l'esprit vif des Gémeaux et le réalisme du Capricorne peuvent se compléter.",
      ] },
      { h2: 'Comment Gémeaux et Capricorne communiquent', paras: [
        "Les Gémeaux parlent vite et de tout, le Capricorne pèse ses mots et va à l'essentiel. Le Capricorne peut trouver les Gémeaux bavards et inconstants, les Gémeaux peuvent trouver le Capricorne fermé et sévère.",
        "La clé est le respect mutuel : les Gémeaux prennent le Capricorne au sérieux, le Capricorne accueille la légèreté des Gémeaux. L'esprit et la méthode trouvent alors un terrain commun.",
      ] },
      { h2: "L'alchimie entre Gémeaux et Capricorne", paras: [
        "L'attirance vient du contraste : les Gémeaux sont intrigués par la maîtrise du Capricorne, le Capricorne séduit par la vivacité des Gémeaux. L'un apporte le jeu, l'autre la profondeur contenue.",
        "L'écueil tient au tempérament : les Gémeaux veulent variété et légèreté, le Capricorne se livre lentement et privilégie le concret. Si les Gémeaux apportent de la fantaisie et le Capricorne se détend, leur intimité s'enrichit.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi central oppose la légèreté des Gémeaux au sérieux du Capricorne. Les Gémeaux fuient l'ennui et la lourdeur, le Capricorne valorise l'effort et la durée. Les Gémeaux peuvent sembler peu fiables au Capricorne, qui peut sembler rabat-joie aux Gémeaux.",
        "La clé de résolution : les Gémeaux apprennent du Capricorne à approfondir et à tenir, le Capricorne apprend des Gémeaux à s'alléger. Le décalage du quinconce devient une complémentarité entre l'esprit et la méthode.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand ils s'ajustent, Gémeaux et Capricorne forment un couple où l'idée rencontre la réalisation. Les Gémeaux apportent les idées et la souplesse, le Capricorne la structure et la persévérance : ensemble, ils peuvent concrétiser beaucoup.",
        "Les Gémeaux allègent le Capricorne, le Capricorne ancre les Gémeaux. Le décalage du quinconce, une fois apprivoisé, devient une force entre l'air et la terre, la curiosité et la discipline.",
      ] },
    ],
    faq: [
      { q: "Gémeaux et Capricorne sont-ils compatibles&nbsp;?", a: "Gémeaux et Capricorne forment un quinconce, aspect de décalage entre deux tempéraments opposés : légèreté contre sérieux. Leur compatibilité demande des ajustements, mais l'esprit des Gémeaux et le réalisme du Capricorne peuvent se compléter. La synastrie complète des deux thèmes nuance ce portrait." },
      { q: "Pourquoi les Gémeaux et le Capricorne s'ajustent-ils difficilement&nbsp;?", a: "Ils ne partagent ni élément, ni mode, ni planète. Les Gémeaux (air) papillonnent, plaisantent et explorent ; le Capricorne (terre) planifie, persévère et reste sérieux. La légèreté de l'un défie la gravité de l'autre." },
      { q: "Quel est le plus grand défi du couple Gémeaux-Capricorne&nbsp;?", a: "Concilier la légèreté des Gémeaux avec le sérieux du Capricorne. Le défi est que les Gémeaux apprennent à approfondir et à tenir, et que le Capricorne apprenne à s'alléger." },
    ],
  }),

  pair({
    a: 'cancer', b: 'verseau',
    metaDesc: "Compatibilité Cancer Verseau : un quinconce entre l'eau et l'air, le cœur contre la raison. Deux signes opposés à ajuster. Dynamique, communication, défis et forces du couple.",
    ogDesc: "Quinconce eau/air : l'ajustement entre la sensibilité du Cancer et le détachement du Verseau.",
    h1Html: "Compatibilité Cancer & Verseau, le <em>cœur</em> et la <em>raison</em>",
    leadHtml: "Cancer et Verseau forment un quinconce, l'aspect du décalage. Cette compatibilité Cancer Verseau unit deux mondes opposés, l'eau intime et l'air détaché, dans une relation qui demande beaucoup d'adaptation entre l'émotion et l'idée.",
    sections: [
      { h2: null, paras: [
        "Le <a href=\"/signes/cancer\">Cancer</a> et le <a href=\"/signes/verseau\">Verseau</a> ne partagent ni élément, ni mode, ni planète : leur quinconce est l'aspect du décalage. Le Cancer vit dans l'émotion, le foyer, l'attachement ; le Verseau dans les idées, la liberté, le collectif. Le besoin de fusion de l'un défie le besoin d'indépendance de l'autre.",
      ] },
      { h2: 'Cancer et Verseau : la dynamique profonde', paras: [
        "La Lune (Cancer) et Uranus (Verseau) opposent l'intimité protectrice et la liberté visionnaire. Le Cancer veut un cocon, le Verseau veut l'espace. Le Cancer apprend du Verseau le recul et l'ouverture, le Verseau apprend du Cancer la profondeur émotionnelle et la tendresse.",
        "Le quinconce demande un effort d'adaptation : le Cancer trouve le Verseau froid et distant, le Verseau trouve le Cancer envahissant et trop émotif. Mais leur attention aux autres, l'un par le cœur, l'autre par les idées, crée un pont.",
      ] },
      { h2: 'Comment Cancer et Verseau communiquent', paras: [
        "Le Cancer s'exprime par l'émotion et l'intuition, le Verseau par la raison et le concept. Le Cancer peut être blessé par le détachement du Verseau, le Verseau désarçonné par les humeurs du Cancer.",
        "La clé est le pont entre cœur et raison : le Verseau cultive la présence émotionnelle, le Cancer respecte le besoin d'indépendance du Verseau. Leur échange peut alors relier l'intime et l'universel.",
      ] },
      { h2: "L'alchimie entre Cancer et Verseau", paras: [
        "L'attirance vient du contraste : le Cancer est intrigué par l'originalité du Verseau, le Verseau touché par la tendresse du Cancer. L'un apporte la chaleur enveloppante, l'autre la surprise et la liberté.",
        "L'écueil tient au besoin : le Cancer veut fusion et réassurance, le Verseau espace et liberté mentale. Si le Verseau s'engage émotionnellement et le Cancer accorde de l'air, leur intimité allie tendresse et originalité.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi central oppose le besoin de fusion du Cancer au détachement du Verseau. Le Cancer veut de la proximité et de la sécurité, le Verseau de la distance et de l'indépendance. Le Cancer peut se sentir abandonné, le Verseau étouffé.",
        "La clé de résolution : le Verseau offre de la présence et de la chaleur, le Cancer respecte la liberté du Verseau sans la vivre comme un rejet. Le décalage du quinconce devient un équilibre entre le cœur et la raison.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand ils s'ajustent, Cancer et Verseau forment un couple où l'émotion et la vision se rencontrent. Le Cancer apporte la chaleur et le soin, le Verseau l'ouverture et les idées : ensemble, ils relient l'intime et le collectif.",
        "Le Cancer réchauffe le Verseau, le Verseau élargit le monde du Cancer. Le décalage du quinconce, une fois apprivoisé, devient une complémentarité entre l'eau et l'air, le cœur et l'esprit.",
      ] },
    ],
    faq: [
      { q: "Cancer et Verseau sont-ils compatibles&nbsp;?", a: "Cancer et Verseau forment un quinconce, aspect de décalage entre deux mondes opposés : le cœur contre la raison. Leur compatibilité demande beaucoup d'adaptation, mais leur attention commune aux autres crée un pont. La synastrie complète des deux thèmes nuance ce portrait." },
      { q: "Pourquoi le Cancer et le Verseau s'ajustent-ils difficilement&nbsp;?", a: "Ils ne partagent ni élément, ni mode, ni planète. Le Cancer (eau) vit dans l'émotion, le foyer et l'attachement ; le Verseau (air) vit dans les idées, la liberté et le collectif. Le besoin de fusion de l'un défie le besoin d'indépendance de l'autre." },
      { q: "Quel est le plus grand défi du couple Cancer-Verseau&nbsp;?", a: "Concilier le besoin de fusion du Cancer avec le détachement du Verseau. Le défi est que le Verseau offre de la présence émotionnelle et que le Cancer respecte la liberté du Verseau sans la vivre comme un rejet." },
    ],
  }),

  pair({
    a: 'lion', b: 'poissons',
    metaDesc: "Compatibilité Lion Poissons : un quinconce entre le feu et l'eau, l'éclat contre le rêve. Deux signes sans rien en commun à ajuster. Dynamique, communication, défis et forces.",
    ogDesc: "Quinconce feu/eau : l'ajustement entre le rayonnement du Lion et la sensibilité rêveuse des Poissons.",
    h1Html: "Compatibilité Lion & Poissons, l'<em>éclat</em> et le <em>rêve</em>",
    leadHtml: "Lion et Poissons forment un quinconce, l'aspect du décalage. Cette compatibilité Lion Poissons unit deux signes que tout sépare, le feu rayonnant et l'eau rêveuse, dans une relation tendre mais qui demande des ajustements.",
    sections: [
      { h2: null, paras: [
        "Le <a href=\"/signes/lion\">Lion</a> et les <a href=\"/signes/poissons\">Poissons</a> ne partagent ni élément, ni mode, ni planète : leur quinconce est l'aspect du décalage. Le Lion brille et s'affirme, les Poissons se fondent et rêvent. L'éclat solaire de l'un défie la sensibilité océanique de l'autre.",
      ] },
      { h2: 'Lion et Poissons : la dynamique profonde', paras: [
        "Le Soleil (Lion) et Neptune (Poissons) opposent le rayonnement individuel et la dissolution compatissante. Le Lion veut être reconnu, les Poissons veulent fusionner et aider. Le Lion apprend des Poissons l'humilité et la compassion, les Poissons apprennent du Lion la confiance et l'affirmation.",
        "Le quinconce demande un effort d'adaptation : le Lion trouve les Poissons trop flous et effacés, les Poissons trouvent le Lion trop centré sur lui-même. Mais la générosité du Lion et la douceur des Poissons peuvent se rencontrer.",
      ] },
      { h2: 'Comment Lion et Poissons communiquent', paras: [
        "Le Lion s'exprime avec chaleur et grandeur, les Poissons par l'intuition et le ressenti. Le Lion a besoin d'admiration, les Poissons d'être compris en douceur. Le Lion peut écraser les Poissons, qui peuvent dérouter le Lion par leur flou.",
        "La clé est la délicatesse : le Lion tient compte de la sensibilité des Poissons et les valorise, les Poissons offrent au Lion l'admiration tendre dont il a besoin. Le dialogue gagne en chaleur et en douceur.",
      ] },
      { h2: "L'alchimie entre Lion et Poissons", paras: [
        "L'attirance est romantique : les Poissons sont éblouis par la chaleur du Lion, le Lion attendri par la tendresse rêveuse des Poissons. L'un apporte la passion généreuse, les autres la douceur et l'imaginaire.",
        "L'écueil tient au tempérament : le Lion veut démonstration et grandeur, les Poissons douceur et fusion. Si le Lion se fait protecteur et tendre et les Poissons admirent le Lion, leur intimité allie chaleur et magie.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi central oppose le besoin de reconnaissance du Lion à la sensibilité effacée des Poissons. Le Lion veut briller et être au centre, les Poissons se sacrifient et se dérobent. Le Lion peut dominer, les Poissons se perdre.",
        "La clé de résolution : le Lion devient protecteur généreux plutôt que dominateur, les Poissons s'affirment et offrent au Lion une admiration sincère. Le décalage du quinconce devient une rencontre entre la lumière et la tendresse.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Quand ils s'ajustent, Lion et Poissons forment un couple où la force protège la douceur. Le Lion défend et inspire les Poissons, les Poissons adoucissent et enchantent le Lion. La générosité de l'un rencontre la compassion des autres.",
        "Le Lion offre aux Poissons confiance et rayonnement, les Poissons offrent au Lion profondeur et tendresse. Le décalage du quinconce, une fois apprivoisé, devient une complémentarité entre le feu et l'eau, l'éclat et le rêve.",
      ] },
    ],
    faq: [
      { q: "Lion et Poissons sont-ils compatibles&nbsp;?", a: "Lion et Poissons forment un quinconce, aspect de décalage entre deux signes sans affinité : l'éclat contre le rêve. Leur compatibilité demande des ajustements, mais la générosité du Lion et la douceur des Poissons peuvent se rejoindre. La synastrie complète des deux thèmes nuance ce portrait." },
      { q: "Pourquoi le Lion et les Poissons s'ajustent-ils difficilement&nbsp;?", a: "Ils ne partagent ni élément, ni mode, ni planète. Le Lion (feu) brille, s'affirme et veut être reconnu ; les Poissons (eau) se fondent, rêvent et se sacrifient. L'éclat solaire de l'un défie la sensibilité effacée de l'autre." },
      { q: "Quel est le plus grand défi du couple Lion-Poissons&nbsp;?", a: "Concilier le besoin de reconnaissance du Lion avec la sensibilité effacée des Poissons. Le défi est que le Lion devienne protecteur plutôt que dominateur et que les Poissons s'affirment en offrant une admiration sincère." },
    ],
  }),

  // ===================== CONJONCTIONS (0°) — effet miroir, intensification =====================
  pair({
    a: 'belier', b: 'belier',
    metaDesc: "Compatibilité Bélier Bélier : deux feux cardinaux en miroir, une passion explosive et une rivalité d'égos. Quand deux conquérants s'aiment. Dynamique, défis et forces.",
    ogDesc: "Conjonction : deux Béliers face à face, passion explosive et rivalité de deux fonceurs qui se ressemblent trop.",
    h1Html: "Compatibilité Bélier & Bélier, deux <em>flammes</em> en miroir",
    leadHtml: "Deux Béliers ensemble, c'est une conjonction : l'effet miroir absolu. Cette compatibilité Bélier–Bélier double l'énergie du feu cardinal, une passion explosive, une complicité immédiate, mais aussi le risque que deux conquérants se disputent le même trône.",
    sections: [
      { h2: null, paras: [
        "Quand deux <a href=\"/signes/belier\">Béliers</a> se rencontrent, ils se reconnaissent instantanément. Même fougue, même franchise, même besoin d'action : la conjonction crée une entente électrique où chacun comprend l'autre sans un mot. Mais ce miroir amplifie tout, le meilleur comme les excès.",
      ] },
      { h2: 'Bélier et Bélier : la dynamique profonde', paras: [
        "Deux Mars dans la même direction : une énergie redoublée, tournée vers l'action et la conquête. Tous deux veulent initier, mener, gagner, ce qui crée une stimulation formidable et une rivalité latente. Ils s'admirent comme on admire son propre reflet, mais peinent à céder le premier rôle.",
        "L'avantage de la conjonction est la compréhension immédiate ; son défi est le manque de complémentarité. Aucun des deux n'apporte la patience ou la nuance qui équilibrerait l'autre. Leur relation file à vive allure, pour le meilleur ou pour l'embrasement.",
      ] },
      { h2: 'Comment deux Béliers communiquent', paras: [
        "La communication est directe, franche, sans détour, parfois trop. Aucun ne joue de jeux, ce qui est rafraîchissant, mais les disputes peuvent être spectaculaires : deux tempéraments explosifs qui ne reculent pas. Heureusement, la colère du Bélier retombe aussi vite qu'elle monte, sans rancune.",
        "La clé est d'apprendre à s'écouter autant qu'à s'affirmer. Quand chacun laisse l'autre exister sans vouloir avoir le dernier mot, leur franchise commune devient une force de transparence rare.",
      ] },
      { h2: "L'alchimie entre deux Béliers", paras: [
        "La passion est immédiate et brûlante. Deux Béliers partagent une intensité physique et une spontanéité qui rendent leur intimité ardente et joueuse. La conquête mutuelle les électrise, et ils savent entretenir le désir par le défi.",
        "L'écueil est la lassitude si la flamme n'est plus alimentée par la nouveauté, ou l'épuisement si tout devient compétition. Tant qu'ils gardent le sens du jeu, leur désir reste vif.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi majeur est la rivalité et l'impulsivité redoublée. Deux meneurs se disputent le contrôle ; deux impulsifs foncent sans personne pour tempérer. Sans modération, le couple s'épuise en bras de fer ou en décisions hâtives.",
        "La clé de résolution : alterner les rôles, célébrer les victoires de l'autre, cultiver la patience qu'aucun ne possède naturellement. Apprendre à coopérer plutôt qu'à rivaliser transforme leur énergie commune en force.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Deux Béliers forment un couple d'une vitalité éclatante. Ils s'encouragent, foncent ensemble, vivent intensément et ne s'embarrassent jamais de faux-semblants. Leur franchise et leur courage partagés en font des partenaires d'aventure exaltants.",
        "Quand ils canalisent leur feu vers des buts communs plutôt que l'un contre l'autre, ils deviennent imparables, deux flammes qui éclairent la même direction.",
      ] },
    ],
    faq: [
      { q: "Deux Béliers sont-ils compatibles&nbsp;?", a: "Deux Béliers forment une conjonction : un effet miroir fait de passion immédiate et de complicité, mais aussi de rivalité entre deux meneurs. Leur compatibilité est intense ; le défi est de coopérer plutôt que de rivaliser. La synastrie complète des deux thèmes nuance fortement ce portrait." },
      { q: "Pourquoi deux Béliers se disputent-ils le pouvoir&nbsp;?", a: "Le Bélier est un signe cardinal régi par Mars : il initie et veut mener. Quand deux Béliers s'aiment, chacun veut diriger, d'où une rivalité naturelle. Apprendre à alterner les rôles et à célébrer l'autre désamorce ce bras de fer." },
      { q: "Quel est le plus grand défi de deux Béliers en couple&nbsp;?", a: "La rivalité et l'impulsivité redoublée, sans personne pour tempérer. Le défi est d'alterner les rôles, de cultiver une patience qu'aucun ne possède d'instinct, et de coopérer plutôt que de transformer la relation en compétition permanente." },
    ],
    related: [sc('belier', 'Le signe'), { href: '/compatibilite/belier', glyph: GLYPH.belier, label: 'Compatibilités', name: NAME.belier }, guideCard],
  }),

  pair({
    a: 'taureau', b: 'taureau',
    metaDesc: "Compatibilité Taureau Taureau : deux terres fixes en miroir, une stabilité sensuelle et un risque d'entêtement. Quand deux jouisseurs s'aiment. Dynamique, défis et forces.",
    ogDesc: "Conjonction : deux Taureaux, sécurité, sensualité et le risque d'un entêtement à deux têtes.",
    h1Html: "Compatibilité Taureau & Taureau, le <em>même</em> goût du durable",
    leadHtml: "Deux Taureaux ensemble, c'est une conjonction : l'effet miroir. Cette compatibilité Taureau–Taureau double la terre fixe, une stabilité profonde, une sensualité partagée, mais aussi le risque que deux têtus s'enracinent dans la même routine.",
    sections: [
      { h2: null, paras: [
        "Quand deux <a href=\"/signes/taureau\">Taureaux</a> se rencontrent, ils reconnaissent le même amour du concret, du plaisir et de la sécurité. La conjonction crée une entente paisible et sensuelle, fondée sur des valeurs identiques. Mais ce miroir amplifie aussi l'inertie et l'obstination.",
      ] },
      { h2: 'Taureau et Taureau : la dynamique profonde', paras: [
        "Deux Vénus terriennes : un amour du beau, du bon, du durable. Tous deux cherchent la stabilité et la jouissance tranquille, ils se comprennent dans leur besoin de sécurité et leur rythme lent. Leur relation se construit comme une maison solide, pierre après pierre.",
        "L'avantage de la conjonction est l'harmonie des valeurs ; son défi est l'absence de mouvement. Aucun des deux n'apporte l'élan ou la nouveauté qui les sortirait de la routine. Confortable, leur couple peut s'endormir.",
      ] },
      { h2: 'Comment deux Taureaux communiquent', paras: [
        "La communication est posée, concrète, sans drame. Tous deux préfèrent les actes aux grands discours, et un silence partagé leur suffit souvent. Mais quand un désaccord survient, deux entêtements se font face : aucun ne veut céder, et la bouderie peut durer.",
        "La clé est la souplesse volontaire : apprendre à lâcher du lest, à faire le premier pas, à ne pas confondre fermeté et rigidité. Quand ils renoncent au bras de fer, leur entente retrouve sa douceur.",
      ] },
      { h2: "L'alchimie entre deux Taureaux", paras: [
        "L'intimité est sensuelle, lente et profondément satisfaisante. Deux Taureaux, les plus sensoriels des signes, savent savourer le plaisir sans hâte. Leur connexion physique est riche, tendre et durable, nourrie par un fort sentiment de sécurité.",
        "L'écueil est la routine : à force de confort, le désir peut s'endormir. Tant qu'ils s'autorisent un peu de surprise et de renouveau, leur sensualité partagée reste un délice.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi majeur est l'entêtement et l'immobilisme. Deux signes fixes qui ne cèdent pas peuvent s'enliser dans les conflits ou la routine. La peur commune du changement les fige parfois dans une zone de confort sans relief.",
        "La clé de résolution : cultiver la nouveauté, faire des compromis, oser bousculer les habitudes ensemble. Apprendre à fléchir, qu'aucun ne fait naturellement, est leur grand travail.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Deux Taureaux forment un couple d'une stabilité et d'une loyauté exemplaires. Leur fiabilité, leur sens du plaisir et leurs valeurs communes en font des partenaires de vie solides, capables de bâtir un foyer doux et durable.",
        "Quand ils ajoutent un peu de mouvement à leur belle constance, ils créent un havre de paix sensuel et sûr, un amour qui ne fait pas de bruit mais ne s'effondre jamais.",
      ] },
    ],
    faq: [
      { q: "Deux Taureaux sont-ils compatibles&nbsp;?", a: "Deux Taureaux forment une conjonction : un effet miroir fait de stabilité, de sensualité et de valeurs communes. Très compatibles en surface, ils doivent surveiller l'entêtement et la routine. La synastrie complète des deux thèmes nuance ce portrait." },
      { q: "Pourquoi deux Taureaux s'entêtent-ils&nbsp;?", a: "Le Taureau est un signe de terre fixe : il tient ses positions et résiste au changement. Quand deux Taureaux s'opposent, aucun ne veut céder, et la bouderie peut s'éterniser. Apprendre à faire le premier pas est essentiel pour eux." },
      { q: "Quel est le plus grand défi de deux Taureaux en couple&nbsp;?", a: "L'entêtement et l'immobilisme. Deux signes fixes peuvent s'enliser dans la routine ou des conflits sans issue. Le défi est de cultiver la nouveauté, de faire des compromis et d'oser bousculer ensemble les habitudes." },
    ],
    related: [sc('taureau', 'Le signe'), { href: '/compatibilite/taureau', glyph: GLYPH.taureau, label: 'Compatibilités', name: NAME.taureau }, guideCard],
  }),

  pair({
    a: 'gemeaux', b: 'gemeaux',
    metaDesc: "Compatibilité Gémeaux Gémeaux : deux airs mutables en miroir, une complicité pétillante et un risque de superficialité. Quand deux esprits vifs s'aiment. Dynamique, défis et forces.",
    ogDesc: "Conjonction : deux Gémeaux, vivacité, jeu et le risque de rester en surface à deux.",
    h1Html: "Compatibilité Gémeaux & Gémeaux, deux <em>esprits</em> en écho",
    leadHtml: "Deux Gémeaux ensemble, c'est une conjonction : l'effet miroir. Cette compatibilité Gémeaux–Gémeaux double l'air mutable, une complicité intellectuelle étincelante, un duo qui ne s'ennuie jamais, mais qui risque de fuir ensemble la profondeur.",
    sections: [
      { h2: null, paras: [
        "Quand deux <a href=\"/signes/gemeaux\">Gémeaux</a> se rencontrent, c'est un feu d'artifice d'idées et de rires. La conjonction crée une complicité immédiate : même curiosité, même vivacité, même horreur de l'ennui. Mais ce miroir amplifie aussi la dispersion et l'évitement émotionnel.",
      ] },
      { h2: 'Gémeaux et Gémeaux : la dynamique profonde', paras: [
        "Deux Mercure en mouvement : un échange d'idées perpétuel, léger et stimulant. Tous deux aiment explorer, commenter, jouer avec les mots et les concepts, ils se comprennent à demi-mot et se renouvellent sans cesse. Leur relation est une conversation qui ne s'arrête jamais.",
        "L'avantage de la conjonction est cette entente d'esprit ; son défi est l'ancrage. Aucun des deux n'apporte la stabilité ou la profondeur émotionnelle qui équilibrerait l'autre. Leur couple peut voler haut sans jamais se poser.",
      ] },
      { h2: 'Comment deux Gémeaux communiquent', paras: [
        "La communication est leur paradis : vive, drôle, infatigable. Ils débattent, plaisantent, changent de sujet à la vitesse de l'éclair. Les conflits se règlent souvent par l'humour et la parole plutôt que par le drame.",
        "L'écueil est de tout intellectualiser et d'éviter les sujets qui fâchent ou qui touchent. La clé est d'oser la profondeur émotionnelle derrière le jeu, de ne pas fuir l'intime dans le bavardage.",
      ] },
      { h2: "L'alchimie entre deux Gémeaux", paras: [
        "L'attirance est joueuse et cérébrale : ils se séduisent par l'esprit, l'humour, la curiosité. Leur intimité est inventive, légère, jamais routinière, ils aiment expérimenter et se surprendre.",
        "L'écueil est le manque de profondeur émotionnelle : à rester dans la tête, le désir peut manquer d'enracinement charnel. S'ils plongent dans le ressenti, leur complicité devient une intimité riche.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi majeur est la dispersion et la fuite émotionnelle. Deux Gémeaux peuvent s'éparpiller dans mille projets, négliger le quotidien, éviter ensemble les conversations profondes. Le couple risque de rester une belle amitié pétillante sans racines.",
        "La clé de résolution : développer de la constance et de l'intimité, oser la vulnérabilité, ancrer la relation dans le concret. Ce que ni l'un ni l'autre n'apporte naturellement, ils doivent le cultiver volontairement.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Deux Gémeaux forment un couple vif, drôle et stimulant. Leur complicité intellectuelle, leur curiosité et leur souplesse en font des partenaires qui s'amusent et grandissent ensemble sans jamais se lasser.",
        "Quand ils ajoutent de la profondeur à leur légèreté, ils vivent une relation aussi joyeuse que riche, un dialogue infini entre deux esprits qui se comprennent parfaitement.",
      ] },
    ],
    faq: [
      { q: "Deux Gémeaux sont-ils compatibles&nbsp;?", a: "Deux Gémeaux forment une conjonction : un effet miroir fait de complicité intellectuelle et de légèreté. Très compatibles sur le plan de l'esprit, ils doivent surveiller la dispersion et l'évitement émotionnel. La synastrie complète des deux thèmes nuance ce portrait." },
      { q: "Pourquoi deux Gémeaux restent-ils en surface&nbsp;?", a: "Les Gémeaux (air mutable) privilégient le mental et fuient la lourdeur émotionnelle. Quand deux Gémeaux s'aiment, ils peuvent éviter ensemble la profondeur, restant dans le jeu et les idées. Oser la vulnérabilité est leur grand apprentissage." },
      { q: "Quel est le plus grand défi de deux Gémeaux en couple&nbsp;?", a: "La dispersion et le manque d'ancrage émotionnel. Deux esprits vifs peuvent s'éparpiller et éviter l'intime. Le défi est de cultiver la constance, la profondeur et l'enracinement dans le concret." },
    ],
    related: [sc('gemeaux', 'Le signe'), { href: '/compatibilite/gemeaux', glyph: GLYPH.gemeaux, label: 'Compatibilités', name: NAME.gemeaux }, guideCard],
  }),

  pair({
    a: 'cancer', b: 'cancer',
    metaDesc: "Compatibilité Cancer Cancer : deux eaux cardinales en miroir, une tendresse profonde et un risque de fusion émotionnelle. Quand deux cœurs sensibles s'aiment. Dynamique, défis et forces.",
    ogDesc: "Conjonction : deux Cancers, tendresse, foyer et le risque d'une fusion émotionnelle qui submerge.",
    h1Html: "Compatibilité Cancer & Cancer, deux <em>cœurs</em> en miroir",
    leadHtml: "Deux Cancers ensemble, c'est une conjonction : l'effet miroir. Cette compatibilité Cancer–Cancer double l'eau cardinale, une tendresse infinie, un foyer chaleureux, mais aussi le risque que deux hypersensibles se noient dans les marées de l'autre.",
    sections: [
      { h2: null, paras: [
        "Quand deux <a href=\"/signes/cancer\">Cancers</a> se rencontrent, ils se devinent par le cœur. La conjonction crée une intimité émotionnelle immédiate : même besoin de sécurité, même tendresse, même attachement au foyer. Mais ce miroir amplifie aussi la susceptibilité et les humeurs.",
      ] },
      { h2: 'Cancer et Cancer : la dynamique profonde', paras: [
        "Deux Lunes en résonance : une vie émotionnelle intense et partagée. Tous deux cherchent la sécurité, la fusion, le nid douillet, ils se comprennent dans leurs besoins profonds et créent ensemble un cocon protecteur. Leur amour est nourricier et profond.",
        "L'avantage de la conjonction est cette compréhension intuitive ; son défi est le manque de recul. Aucun des deux n'apporte la légèreté ou la distance qui équilibrerait l'autre. Leurs marées émotionnelles, sans contrepoids, peuvent les submerger ensemble.",
      ] },
      { h2: 'Comment deux Cancers communiquent', paras: [
        "La communication passe par l'intuition, les gestes tendres, les non-dits compris. Ils se devinent sans mots, ce qui crée une grande douceur. Mais tous deux susceptibles, ils peuvent se replier dans la bouderie plutôt que d'exprimer un grief.",
        "La clé est d'oser dire les choses directement plutôt que d'attendre que l'autre devine. Quand ils nomment leurs besoins, leur tendresse mutuelle dissout vite les blessures.",
      ] },
      { h2: "L'alchimie entre deux Cancers", paras: [
        "L'intimité est tendre, fusionnelle et profondément émotionnelle. Deux Cancers se donnent entièrement, dans une connexion où le corps et le cœur ne font qu'un. Leur sensualité est enveloppante, nourrie par un fort sentiment de sécurité.",
        "L'écueil est l'excès de fusion : à force de ne faire qu'un, ils peuvent perdre leurs limites. Préserver un espace individuel garde l'intimité vivante plutôt qu'envahissante.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi majeur est l'hypersensibilité et la fusion. Deux Cancers émotifs peuvent se blesser facilement, ressasser, créer un climat lourd ou s'enfermer dans un cocon coupé du monde. Les humeurs se contagent et s'amplifient.",
        "La clé de résolution : exprimer les ressentis à temps, préserver des limites saines, s'ouvrir à l'extérieur. La légèreté et le recul, qu'aucun ne possède d'instinct, sont à cultiver volontairement.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Deux Cancers forment un couple d'une tendresse et d'une loyauté rares. Leur empathie mutuelle, leur sens du foyer et leur profondeur émotionnelle en font des partenaires qui se consolent et se protègent comme nuls autres.",
        "Quand ils gardent un peu de recul et d'ouverture, ils créent un refuge d'amour inégalé, un foyer où chacun se sent profondément aimé et en sûreté.",
      ] },
    ],
    faq: [
      { q: "Deux Cancers sont-ils compatibles&nbsp;?", a: "Deux Cancers forment une conjonction : un effet miroir fait de tendresse, de profondeur émotionnelle et d'amour du foyer. Très compatibles, ils doivent surveiller l'hypersensibilité et l'excès de fusion. La synastrie complète des deux thèmes nuance ce portrait." },
      { q: "Pourquoi deux Cancers se blessent-ils facilement&nbsp;?", a: "Le Cancer (eau cardinale, régi par la Lune) ressent tout intensément et se protège par une carapace. Quand deux Cancers s'aiment, leurs susceptibilités se rencontrent et leurs humeurs s'amplifient. Exprimer ses besoins plutôt que bouder est essentiel." },
      { q: "Quel est le plus grand défi de deux Cancers en couple&nbsp;?", a: "L'hypersensibilité et la fusion excessive. Deux émotifs peuvent se submerger mutuellement et s'enfermer dans un cocon. Le défi est d'exprimer les ressentis à temps, de préserver des limites et de s'ouvrir à l'extérieur." },
    ],
    related: [sc('cancer', 'Le signe'), { href: '/compatibilite/cancer', glyph: GLYPH.cancer, label: 'Compatibilités', name: NAME.cancer }, guideCard],
  }),

  pair({
    a: 'lion', b: 'lion',
    metaDesc: "Compatibilité Lion Lion : deux feux fixes en miroir, une passion flamboyante et une rivalité pour la scène. Quand deux soleils s'aiment. Dynamique, défis et forces du couple.",
    ogDesc: "Conjonction : deux Lions, flamboyance, générosité et le risque que deux soleils se disputent la scène.",
    h1Html: "Compatibilité Lion & Lion, deux <em>soleils</em> dans le même ciel",
    leadHtml: "Deux Lions ensemble, c'est une conjonction : l'effet miroir. Cette compatibilité Lion–Lion double le feu fixe, une passion flamboyante, une générosité royale, mais aussi le risque que deux soleils se disputent le centre de la scène.",
    sections: [
      { h2: null, paras: [
        "Quand deux <a href=\"/signes/lion\">Lions</a> se rencontrent, c'est un face-à-face de rois. La conjonction crée une attraction magnétique et une admiration mutuelle : même chaleur, même générosité, même besoin de briller. Mais ce miroir amplifie aussi l'orgueil et la soif de reconnaissance.",
      ] },
      { h2: 'Lion et Lion : la dynamique profonde', paras: [
        "Deux Soleils dans le même ciel : une lumière redoublée, mais aussi deux egos qui veulent rayonner. Tous deux loyaux, chaleureux et créatifs, ils se comprennent dans leur besoin d'être aimés et reconnus. Leur amour est grandiose, romanesque, généreux.",
        "L'avantage de la conjonction est cette grandeur partagée ; son défi est la place. Aucun des deux n'apporte la modestie qui ferait de la place à l'autre. La scène est trop petite pour deux soleils qui veulent tous deux l'occuper.",
      ] },
      { h2: 'Comment deux Lions communiquent', paras: [
        "La communication est chaleureuse, théâtrale, généreuse. Ils s'expriment avec panache et savent se complimenter, mais leur fierté est sensible, et une blessure d'orgueil peut déclencher des drames spectaculaires.",
        "La clé est l'admiration réciproque : quand chacun met l'autre en valeur au lieu de réclamer toute la lumière, leur dialogue devient un échange royal. Reconnaître la grandeur de l'autre est leur grande leçon.",
      ] },
      { h2: "L'alchimie entre deux Lions", paras: [
        "La passion est ardente et romanesque. Deux Lions s'aiment en grand, avec générosité, théâtralité et chaleur. Leur intimité est intense, flamboyante, nourrie par l'admiration mutuelle et le sens du romanesque.",
        "L'écueil est la compétition jusque dans la séduction. Tant que chacun se sent désiré et honoré, leur désir reste éclatant ; s'il devient un concours, il s'épuise.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi majeur est la rivalité d'egos et la soif de reconnaissance. Deux Lions veulent tous deux être le héros, ce qui peut tourner à la lutte pour l'attention et l'admiration. L'orgueil blessé, doublé, peut provoquer des conflits dramatiques.",
        "La clé de résolution : partager la lumière, célébrer les succès de l'autre, soigner mutuellement leur fierté. Apprendre à régner à deux plutôt qu'à se disputer le trône transforme leur feu en alliance.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Deux Lions forment un couple rayonnant, généreux et loyal. Leur chaleur, leur créativité et leur sens de la fête en font des partenaires admirés, capables de s'aimer avec une intensité et une magnificence rares.",
        "Quand ils partagent la scène plutôt que de la disputer, ils deviennent un couple royal, deux soleils qui éclairent le même monde au lieu de se faire de l'ombre.",
      ] },
    ],
    faq: [
      { q: "Deux Lions sont-ils compatibles&nbsp;?", a: "Deux Lions forment une conjonction : un effet miroir fait de passion flamboyante, de générosité et de loyauté, mais aussi de rivalité d'egos. Leur compatibilité est intense ; le défi est de partager la lumière. La synastrie complète des deux thèmes nuance ce portrait." },
      { q: "Pourquoi deux Lions se disputent-ils l'attention&nbsp;?", a: "Le Lion (feu fixe, régi par le Soleil) a besoin de rayonner et d'être reconnu. Quand deux Lions s'aiment, chacun veut être le centre, d'où une rivalité pour la scène. Apprendre à célébrer l'autre et à partager la lumière apaise ce conflit." },
      { q: "Quel est le plus grand défi de deux Lions en couple&nbsp;?", a: "La rivalité d'egos et la soif de reconnaissance redoublée. Le défi est de partager la scène, de soigner mutuellement la fierté de l'autre et de régner à deux plutôt que de se disputer le trône." },
    ],
    related: [sc('lion', 'Le signe'), { href: '/compatibilite/lion', glyph: GLYPH.lion, label: 'Compatibilités', name: NAME.lion }, guideCard],
  }),

  pair({
    a: 'vierge', b: 'vierge',
    metaDesc: "Compatibilité Vierge Vierge : deux terres mutables en miroir, un dévouement attentif et un risque d'excès de critique. Quand deux perfectionnistes s'aiment. Dynamique, défis et forces.",
    ogDesc: "Conjonction : deux Vierges, dévouement, soin et le risque d'une critique et d'une anxiété redoublées.",
    h1Html: "Compatibilité Vierge & Vierge, le <em>même</em> souci du détail",
    leadHtml: "Deux Vierges ensemble, c'est une conjonction : l'effet miroir. Cette compatibilité Vierge–Vierge double la terre mutable, un dévouement mutuel, un quotidien impeccable, mais aussi le risque que deux perfectionnistes nourrissent ensemble la critique et l'anxiété.",
    sections: [
      { h2: null, paras: [
        "Quand deux <a href=\"/signes/vierge\">Vierges</a> se rencontrent, elles reconnaissent le même sérieux, la même intelligence pratique, le même désir de bien faire. La conjonction crée une entente fondée sur le dévouement et l'attention. Mais ce miroir amplifie aussi le perfectionnisme et l'inquiétude.",
      ] },
      { h2: 'Vierge et Vierge : la dynamique profonde', paras: [
        "Deux Mercure terriens : une intelligence méthodique au service du concret. Tous deux soucieux du détail, serviables et fiables, ils se comprennent dans leur exigence et leur besoin d'être utiles. Leur relation est attentionnée, ordonnée, profondément loyale.",
        "L'avantage de la conjonction est cette complicité du soin ; son défi est l'autocritique redoublée. Aucun des deux n'apporte la légèreté ou la confiance qui apaiserait l'autre. Leur perfectionnisme, sans contrepoids, peut tourner à l'anxiété partagée.",
      ] },
      { h2: 'Comment deux Vierges communiquent', paras: [
        "La communication est précise, sincère, tournée vers les solutions. Ils analysent, planifient, s'entraident avec efficacité. Mais deux esprits critiques peuvent se reprendre mutuellement, transformant l'attention en jugement.",
        "La clé est la bienveillance : remplacer la critique par l'encouragement, accepter l'imperfection de l'autre comme la sienne. Quand ils s'accueillent avec douceur, leur exigence devient un soin partagé précieux.",
      ] },
      { h2: "L'alchimie entre deux Vierges", paras: [
        "L'intimité se construit dans la confiance et la délicatesse. Tous deux pudiques, ils s'ouvrent lentement, mais leur connexion gagne en profondeur avec le temps. Leur attention mutuelle au bien-être de l'autre rend leur intimité tendre et dévouée.",
        "L'écueil est l'excès de mental et la retenue : à trop analyser, le lâcher-prise est difficile. S'ils osent la spontanéité, leur tendresse s'épanouit.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi majeur est la critique et l'anxiété redoublées. Deux Vierges peuvent se noyer dans les détails, s'inquiéter à l'unisson, viser une perfection épuisante et créer un climat tendu de petites remarques.",
        "La clé de résolution : célébrer les réussites, dédramatiser, cultiver la détente et l'humour. Apprendre à se reposer sans culpabilité, ce qu'aucune ne fait d'instinct, est leur grand travail commun.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Deux Vierges forment un couple attentionné, fiable et harmonieux. Leur dévouement mutuel, leur intelligence et leur sens du concret en font des partenaires qui construisent une vie commune soignée et bien organisée.",
        "Quand elles troquent la critique contre la bienveillance, elles vivent une relation d'un soin rare, un quotidien doux où chacune se sent vraiment prise en charge.",
      ] },
    ],
    faq: [
      { q: "Deux Vierges sont-elles compatibles&nbsp;?", a: "Deux Vierges forment une conjonction : un effet miroir fait de dévouement, de fiabilité et d'intelligence pratique. Très compatibles, elles doivent surveiller le perfectionnisme et l'anxiété redoublés. La synastrie complète des deux thèmes nuance ce portrait." },
      { q: "Pourquoi deux Vierges deviennent-elles trop critiques&nbsp;?", a: "La Vierge (terre mutable) voit ce qui peut être amélioré et tend à le signaler. Quand deux Vierges s'aiment, leurs regards critiques se rencontrent et peuvent transformer l'attention en jugement. Remplacer la critique par l'encouragement est essentiel." },
      { q: "Quel est le plus grand défi de deux Vierges en couple&nbsp;?", a: "La critique et l'anxiété redoublées. Deux perfectionnistes peuvent viser une perfection épuisante et créer un climat tendu. Le défi est de dédramatiser, de cultiver l'humour et d'apprendre à se reposer sans culpabilité." },
    ],
    related: [sc('vierge', 'Le signe'), { href: '/compatibilite/vierge', glyph: GLYPH.vierge, label: 'Compatibilités', name: NAME.vierge }, guideCard],
  }),

  pair({
    a: 'balance', b: 'balance',
    metaDesc: "Compatibilité Balance Balance : deux airs cardinaux en miroir, une harmonie raffinée et un risque d'indécision à deux. Quand deux esthètes s'aiment. Dynamique, défis et forces.",
    ogDesc: "Conjonction : deux Balances, harmonie, raffinement et le risque d'une indécision et d'un évitement partagés.",
    h1Html: "Compatibilité Balance & Balance, la <em>même</em> quête d'harmonie",
    leadHtml: "Deux Balances ensemble, c'est une conjonction : l'effet miroir. Cette compatibilité Balance–Balance double l'air cardinal, une relation gracieuse et équilibrée, mais aussi le risque que deux indécis évitent ensemble tout conflit et toute décision.",
    sections: [
      { h2: null, paras: [
        "Quand deux <a href=\"/signes/balance\">Balances</a> se rencontrent, c'est une rencontre de charme et d'élégance. La conjonction crée une harmonie immédiate : même amour de la beauté, du lien, de la paix. Mais ce miroir amplifie aussi l'indécision et la peur du conflit.",
      ] },
      { h2: 'Balance et Balance : la dynamique profonde', paras: [
        "Deux Vénus aériennes : un amour de l'harmonie, de la relation, de l'esthétique. Tous deux diplomates et attentifs à l'autre, ils créent une relation douce, équilibrée et raffinée. Ils se comprennent dans leur quête de paix et de beauté.",
        "L'avantage de la conjonction est cette grâce partagée ; son défi est l'absence de décision. Aucun des deux n'apporte la fermeté qui trancherait. À force de vouloir plaire et éviter le conflit, leur couple peut stagner dans le non-dit.",
      ] },
      { h2: 'Comment deux Balances communiquent', paras: [
        "La communication est courtoise, nuancée, diplomate. Ils s'écoutent, cherchent l'accord, soignent la forme. Mais tous deux fuient le conflit : les vrais désaccords sont lissés, et les frustrations s'accumulent sous une surface lisse.",
        "La clé est le courage d'aborder les sujets difficiles. Quand ils osent la franchise sans craindre de rompre l'harmonie, leur dialogue gagne en authenticité ce qu'il ne perd pas en élégance.",
      ] },
      { h2: "L'alchimie entre deux Balances", paras: [
        "L'intimité est romantique, sensuelle et raffinée. Deux Balances soignent la séduction, l'ambiance, la beauté du moment partagé. Leur connexion est tendre, élégante, nourrie par une admiration mutuelle.",
        "L'écueil est de privilégier la forme sur la profondeur. S'ils osent la vraie vulnérabilité émotionnelle, leur romantisme gagne en intensité.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi majeur est l'indécision et l'évitement du conflit. Deux Balances peuvent hésiter sans fin, se renvoyer les décisions, lisser les désaccords jusqu'à l'inertie. La peur partagée de déplaire peut paralyser le couple.",
        "La clé de résolution : oser trancher, nommer les frustrations, accepter que le désaccord ne menace pas le lien. La fermeté, qu'aucun ne possède d'instinct, est à cultiver ensemble.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Deux Balances forment un couple harmonieux, élégant et profondément attentif à l'autre. Leur diplomatie, leur goût de la beauté et leur sens du lien en font des partenaires qui rendent la vie douce et raffinée.",
        "Quand ils ajoutent un peu de franchise et de décision à leur grâce, ils vivent une relation aussi équilibrée que vivante, un véritable art de la relation à deux.",
      ] },
    ],
    faq: [
      { q: "Deux Balances sont-elles compatibles&nbsp;?", a: "Deux Balances forment une conjonction : un effet miroir fait d'harmonie, de raffinement et d'attention mutuelle. Très compatibles, elles doivent surveiller l'indécision et l'évitement du conflit. La synastrie complète des deux thèmes nuance ce portrait." },
      { q: "Pourquoi deux Balances ont-elles du mal à décider&nbsp;?", a: "La Balance (air cardinal) pèse le pour et le contre et redoute de déplaire. Quand deux Balances s'aiment, chacune attend que l'autre tranche, d'où une indécision redoublée. Oser décider et nommer les désaccords est leur grand apprentissage." },
      { q: "Quel est le plus grand défi de deux Balances en couple&nbsp;?", a: "L'indécision et l'évitement du conflit. Deux esthètes qui fuient les tensions peuvent stagner dans le non-dit. Le défi est d'oser trancher, de nommer les frustrations et d'accepter que le désaccord ne menace pas le lien." },
    ],
    related: [sc('balance', 'Le signe'), { href: '/compatibilite/balance', glyph: GLYPH.balance, label: 'Compatibilités', name: NAME.balance }, guideCard],
  }),

  pair({
    a: 'scorpion', b: 'scorpion',
    metaDesc: "Compatibilité Scorpion Scorpion : deux eaux fixes en miroir, une passion abyssale et un risque de lutte de pouvoir. Quand deux intensités s'aiment. Dynamique, défis et forces.",
    ogDesc: "Conjonction : deux Scorpions, passion abyssale, loyauté et le risque d'une lutte de pouvoir et de jalousie.",
    h1Html: "Compatibilité Scorpion & Scorpion, deux <em>abysses</em> qui se reconnaissent",
    leadHtml: "Deux Scorpions ensemble, c'est une conjonction : l'effet miroir. Cette compatibilité Scorpion–Scorpion double l'eau fixe, une passion abyssale, une loyauté totale, mais aussi le risque que deux volontés de fer s'enferment dans la jalousie et le contrôle.",
    sections: [
      { h2: null, paras: [
        "Quand deux <a href=\"/signes/scorpion\">Scorpions</a> se rencontrent, c'est une reconnaissance d'âme, intense, magnétique, presque dangereuse. La conjonction crée une fusion profonde : même intensité, même loyauté, même refus de la superficialité. Mais ce miroir amplifie aussi la jalousie et le besoin de contrôle.",
      ] },
      { h2: 'Scorpion et Scorpion : la dynamique profonde', paras: [
        "Deux Pluton en résonance : une puissance émotionnelle redoublée, une plongée commune dans les profondeurs. Tous deux passionnés, perçants et secrets, ils se comprennent là où personne d'autre ne les suit. Leur amour est total, transformateur, sans demi-mesure.",
        "L'avantage de la conjonction est cette intimité absolue ; son défi est l'intensité sans contrepoids. Aucun des deux n'apporte la légèreté qui apaiserait l'autre. Deux volontés de fer, deux jaloux, peuvent s'enfermer dans une spirale de pouvoir.",
      ] },
      { h2: 'Comment deux Scorpions communiquent', paras: [
        "La communication est profonde, intuitive, sans bavardage. Ils se devinent, vont au fond des choses, ne craignent pas les vérités difficiles. Mais deux êtres secrets et méfiants peuvent aussi se tester, se soupçonner, garder rancune.",
        "La clé est la confiance et la transparence : cesser de contrôler, oser se livrer sans armure. Quand ils s'accordent une confiance totale, leur lien atteint une profondeur que peu de couples connaissent.",
      ] },
      { h2: "L'alchimie entre deux Scorpions", paras: [
        "La passion est abyssale et fusionnelle. Deux Scorpions partagent une intensité physique et émotionnelle d'une puissance rare, leur intimité est totale, magnétique, transformatrice. Le désir entre eux est profond et durable.",
        "L'écueil est l'obsession et le contrôle. Tant que la confiance règne, leur fusion est sublime ; si la jalousie s'en mêle, elle peut devenir destructrice. Préserver un espace de confiance est vital.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi majeur est la lutte de pouvoir et la jalousie redoublées. Deux Scorpions possessifs et déterminés peuvent s'enfermer dans le soupçon, le contrôle, les bras de fer silencieux. L'intensité, sans soupape, peut tourner à la spirale destructrice.",
        "La clé de résolution : accorder une confiance totale, renoncer au contrôle, transformer leur puissance en régénération plutôt qu'en combat. Cultiver un peu de légèreté, qu'aucun ne possède, les sauve de l'excès.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Deux Scorpions forment un couple d'une profondeur et d'une loyauté absolues. Leur intensité partagée, leur compréhension mutuelle et leur fidélité féroce en font des partenaires liés corps et âme, capables de tout traverser ensemble.",
        "Quand ils choisissent la confiance plutôt que le contrôle, ils vivent une union transformatrice et inébranlable, deux abysses qui se révèlent et se régénèrent mutuellement.",
      ] },
    ],
    faq: [
      { q: "Deux Scorpions sont-ils compatibles&nbsp;?", a: "Deux Scorpions forment une conjonction : un effet miroir fait de passion abyssale, de profondeur et de loyauté totale, mais aussi de jalousie et de lutte de pouvoir. Leur compatibilité est intense ; le défi est la confiance. La synastrie complète des deux thèmes nuance ce portrait." },
      { q: "Pourquoi deux Scorpions se livrent-ils une lutte de pouvoir&nbsp;?", a: "Le Scorpion (eau fixe, régi par Pluton) est intense, possessif et déterminé. Quand deux Scorpions s'aiment, leurs volontés de fer et leurs jalousies se rencontrent, pouvant créer une spirale de contrôle. Accorder une confiance totale est essentiel." },
      { q: "Quel est le plus grand défi de deux Scorpions en couple&nbsp;?", a: "La jalousie et la lutte de pouvoir redoublées. Deux possessifs peuvent s'enfermer dans le soupçon et le contrôle. Le défi est d'accorder une confiance totale, de renoncer au contrôle et de cultiver un peu de légèreté." },
    ],
    related: [sc('scorpion', 'Le signe'), { href: '/compatibilite/scorpion', glyph: GLYPH.scorpion, label: 'Compatibilités', name: NAME.scorpion }, guideCard],
  }),

  pair({
    a: 'sagittaire', b: 'sagittaire',
    metaDesc: "Compatibilité Sagittaire Sagittaire : deux feux mutables en miroir, une aventure partagée et un risque d'instabilité. Quand deux explorateurs s'aiment. Dynamique, défis et forces.",
    ogDesc: "Conjonction : deux Sagittaires, aventure, optimisme et le risque d'une fuite de l'engagement à deux.",
    h1Html: "Compatibilité Sagittaire & Sagittaire, deux <em>flèches</em> vers l'horizon",
    leadHtml: "Deux Sagittaires ensemble, c'est une conjonction : l'effet miroir. Cette compatibilité Sagittaire–Sagittaire double le feu mutable, une aventure perpétuelle, un optimisme communicatif, mais aussi le risque que deux esprits libres fuient ensemble l'engagement et l'ancrage.",
    sections: [
      { h2: null, paras: [
        "Quand deux <a href=\"/signes/sagittaire\">Sagittaires</a> se rencontrent, c'est une explosion d'enthousiasme. La conjonction crée une complicité immédiate : même soif d'aventure, même optimisme, même amour de la liberté. Mais ce miroir amplifie aussi l'instabilité et la peur de s'attacher.",
      ] },
      { h2: 'Sagittaire et Sagittaire : la dynamique profonde', paras: [
        "Deux Jupiter en expansion : une foi en l'avenir et un goût de l'exploration redoublés. Tous deux francs, généreux et avides de sens, ils se comprennent dans leur besoin de liberté et de découverte. Leur relation est une grande aventure partagée.",
        "L'avantage de la conjonction est cette joie commune ; son défi est l'ancrage. Aucun des deux n'apporte la stabilité ou la constance qui enracinerait le couple. À deux, ils peuvent fuir indéfiniment l'engagement et le quotidien.",
      ] },
      { h2: 'Comment deux Sagittaires communiquent', paras: [
        "La communication est franche, enthousiaste, pleine d'humour et de grandes idées. Ils refont le monde, débattent de philosophie, rient de tout. Leur honnêteté commune évite les non-dits, même si leur franchise peut parfois manquer de tact.",
        "La clé est de ne pas tout esquiver par la légèreté : oser aborder les sujets sérieux et les émotions profondes. Quand ils ajoutent la profondeur à leur enthousiasme, leur dialogue devient aussi riche que joyeux.",
      ] },
      { h2: "L'alchimie entre deux Sagittaires", paras: [
        "L'attirance est joueuse et aventureuse. Deux Sagittaires s'aiment dans le mouvement, la nouveauté, l'exploration. Leur intimité est spontanée, libre, jamais routinière, ils savent transformer l'amour en aventure.",
        "L'écueil est le manque d'enracinement émotionnel : à toujours chercher l'ailleurs, le lien peut manquer de profondeur. S'ils s'engagent vraiment, leur complicité devient une intimité durable.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi majeur est l'instabilité et la fuite de l'engagement. Deux esprits libres peuvent négliger le quotidien, repousser les responsabilités, fuir ensemble l'intimité contraignante. Le couple risque de rester une belle aventure sans fondations.",
        "La clé de résolution : oser l'engagement et la profondeur, construire un ancrage commun. La constance, qu'aucun ne possède d'instinct, est à cultiver volontairement pour que l'aventure dure.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Deux Sagittaires forment un couple rayonnant d'optimisme et de liberté. Leur soif d'aventure, leur honnêteté et leur joie de vivre en font des partenaires de route exaltants, qui agrandissent mutuellement leur monde.",
        "Quand ils ajoutent l'engagement à leur liberté, ils vivent une histoire pleine de sens et de découvertes, deux flèches qui visent ensemble le même horizon.",
      ] },
    ],
    faq: [
      { q: "Deux Sagittaires sont-ils compatibles&nbsp;?", a: "Deux Sagittaires forment une conjonction : un effet miroir fait d'aventure, d'optimisme et de liberté. Très compatibles, ils doivent surveiller l'instabilité et la fuite de l'engagement. La synastrie complète des deux thèmes nuance ce portrait." },
      { q: "Pourquoi deux Sagittaires fuient-ils l'engagement&nbsp;?", a: "Le Sagittaire (feu mutable, régi par Jupiter) chérit la liberté et redoute l'enfermement. Quand deux Sagittaires s'aiment, leur besoin commun d'espace peut les pousser à fuir ensemble l'intimité contraignante. Oser l'engagement est leur grand apprentissage." },
      { q: "Quel est le plus grand défi de deux Sagittaires en couple&nbsp;?", a: "L'instabilité et le manque d'ancrage. Deux esprits libres peuvent négliger le quotidien et fuir la profondeur. Le défi est d'oser l'engagement et de construire des fondations pour que l'aventure dure." },
    ],
    related: [sc('sagittaire', 'Le signe'), { href: '/compatibilite/sagittaire', glyph: GLYPH.sagittaire, label: 'Compatibilités', name: NAME.sagittaire }, guideCard],
  }),

  pair({
    a: 'capricorne', b: 'capricorne',
    metaDesc: "Compatibilité Capricorne Capricorne : deux terres cardinales en miroir, une ambition solide et un risque d'austérité. Quand deux bâtisseurs s'aiment. Dynamique, défis et forces.",
    ogDesc: "Conjonction : deux Capricornes, ambition, loyauté et le risque d'un couple qui sacrifie la tendresse au devoir.",
    h1Html: "Compatibilité Capricorne & Capricorne, les <em>mêmes</em> sommets",
    leadHtml: "Deux Capricornes ensemble, c'est une conjonction : l'effet miroir. Cette compatibilité Capricorne–Capricorne double la terre cardinale, une solidité et une ambition partagées, mais aussi le risque que deux travailleurs acharnés sacrifient la tendresse au devoir.",
    sections: [
      { h2: null, paras: [
        "Quand deux <a href=\"/signes/capricorne\">Capricornes</a> se rencontrent, ils reconnaissent la même ambition, le même sérieux, la même loyauté. La conjonction crée une entente fondée sur le respect et les valeurs communes. Mais ce miroir amplifie aussi l'austérité et la difficulté à exprimer les émotions.",
      ] },
      { h2: 'Capricorne et Capricorne : la dynamique profonde', paras: [
        "Deux Saturne en résonance : une discipline et une persévérance redoublées. Tous deux ambitieux, fiables et tournés vers le long terme, ils se comprennent dans leur sens du devoir et leur quête de réussite. Leur relation se bâtit comme un édifice solide, fait pour durer.",
        "L'avantage de la conjonction est cette solidité ; son défi est le manque de légèreté. Aucun des deux n'apporte la chaleur ou l'insouciance qui réchaufferait l'autre. Deux Saturne, sans contrepoids, peuvent transformer leur couple en entreprise austère.",
      ] },
      { h2: 'Comment deux Capricornes communiquent', paras: [
        "La communication est sobre, honnête, tournée vers le concret et les objectifs. Ils se respectent, planifient, s'épaulent dans leurs ambitions. Mais tous deux pudiques, ils peuvent laisser les émotions implicites et se réfugier dans le travail.",
        "La clé est d'oser verbaliser l'affection et la vulnérabilité. Quand ils sortent de la pudeur pour se dire les choses, leur respect mutuel se double d'une vraie tendresse.",
      ] },
      { h2: "L'alchimie entre deux Capricornes", paras: [
        "L'intimité se construit lentement, dans la confiance et la pudeur. Deux Capricornes ont besoin de temps pour baisser la garde, mais leur sensualité contenue se révèle profonde et durable une fois la sécurité installée.",
        "L'écueil est de tout sacrifier au travail et au devoir, au détriment du plaisir. S'ils s'autorisent la détente et le jeu, leur intimité gagne en chaleur.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi majeur est l'austérité et la rétention émotionnelle. Deux Capricornes peuvent se noyer dans le travail, négliger la tendresse, transformer leur couple en partenariat sérieux mais froid. Le pessimisme, doublé, peut peser.",
        "La clé de résolution : se ménager du plaisir et de la légèreté, exprimer les émotions, célébrer les réussites. Apprendre à se reposer et à jouer, ce qu'aucun ne fait d'instinct, est leur grand travail commun.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Deux Capricornes forment un couple d'une solidité et d'une loyauté exemplaires. Leur ambition, leur fiabilité et leur persévérance en font des partenaires capables de bâtir une vie entière, patrimoine, foyer, réussite, avec une constance rare.",
        "Quand ils ajoutent la chaleur et le jeu à leur sérieux, ils deviennent un roc inébranlable l'un pour l'autre, un amour mûr qui se bonifie avec le temps.",
      ] },
    ],
    faq: [
      { q: "Deux Capricornes sont-ils compatibles&nbsp;?", a: "Deux Capricornes forment une conjonction : un effet miroir fait d'ambition, de loyauté et de valeurs communes. Très compatibles et solides, ils doivent surveiller l'austérité et la rétention émotionnelle. La synastrie complète des deux thèmes nuance ce portrait." },
      { q: "Pourquoi deux Capricornes manquent-ils de chaleur&nbsp;?", a: "Le Capricorne (terre cardinale, régi par Saturne) est pudique, sérieux et tourné vers le travail. Quand deux Capricornes s'aiment, leur réserve se double et les émotions restent implicites. Oser verbaliser l'affection est essentiel pour eux." },
      { q: "Quel est le plus grand défi de deux Capricornes en couple&nbsp;?", a: "L'austérité et le sacrifice de la tendresse au devoir. Deux travailleurs acharnés peuvent transformer leur couple en partenariat froid. Le défi est de se ménager du plaisir, d'exprimer les émotions et d'apprendre à jouer." },
    ],
    related: [sc('capricorne', 'Le signe'), { href: '/compatibilite/capricorne', glyph: GLYPH.capricorne, label: 'Compatibilités', name: NAME.capricorne }, guideCard],
  }),

  pair({
    a: 'verseau', b: 'verseau',
    metaDesc: "Compatibilité Verseau Verseau : deux airs fixes en miroir, une liberté et des idéaux partagés, un risque de froideur. Quand deux esprits libres s'aiment. Dynamique, défis et forces.",
    ogDesc: "Conjonction : deux Verseaux, liberté, idéaux et le risque d'une relation trop cérébrale et détachée.",
    h1Html: "Compatibilité Verseau & Verseau, les <em>mêmes</em> idéaux",
    leadHtml: "Deux Verseaux ensemble, c'est une conjonction : l'effet miroir. Cette compatibilité Verseau–Verseau double l'air fixe, une amitié amoureuse libre, des idéaux partagés, mais aussi le risque que deux esprits détachés peinent à plonger dans l'intimité du cœur.",
    sections: [
      { h2: null, paras: [
        "Quand deux <a href=\"/signes/verseau\">Verseaux</a> se rencontrent, ils reconnaissent la même originalité, la même soif de liberté, les mêmes idéaux. La conjonction crée une complicité intellectuelle et un respect mutuel total. Mais ce miroir amplifie aussi le détachement émotionnel.",
      ] },
      { h2: 'Verseau et Verseau : la dynamique profonde', paras: [
        "Deux Uranus en résonance : une indépendance et une inventivité redoublées. Tous deux libres, visionnaires et attachés au collectif, ils se comprennent dans leur refus des conventions et leur besoin d'espace. Leur relation est une amitié amoureuse fondée sur la liberté.",
        "L'avantage de la conjonction est ce respect de l'indépendance ; son défi est la chaleur. Aucun des deux n'apporte la profondeur émotionnelle qui réchaufferait l'autre. Deux Verseaux, sans contrepoids, peuvent vivre côte à côte sans vraiment plonger dans l'intime.",
      ] },
      { h2: 'Comment deux Verseaux communiquent', paras: [
        "La communication est brillante, originale, tournée vers les idées et les causes. Ils débattent, refont le monde, s'enthousiasment pour le futur. Leur entente intellectuelle est immédiate et leur respect total.",
        "L'écueil est de tout intellectualiser et d'éviter le terrain des émotions. La clé est d'oser la vulnérabilité, de descendre de la tête au cœur. Quand ils s'autorisent l'intime, leur complicité devient une vraie intimité.",
      ] },
      { h2: "L'alchimie entre deux Verseaux", paras: [
        "L'attirance est mentale et électrique : ils se séduisent par l'originalité, les idées, la liberté partagée. Leur intimité est inventive, décontractée, sans possessivité, deux êtres qui s'aiment sans s'enchaîner.",
        "L'écueil est le détachement : à rester dans les idées, la passion charnelle peut manquer de profondeur. S'ils osent l'engagement émotionnel, leur lien gagne en chaleur.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi majeur est le détachement émotionnel redoublé. Deux Verseaux peuvent fuir ensemble la vulnérabilité, rester dans l'amitié et les idées, ne jamais vraiment plonger dans l'intimité du cœur. Le couple risque de ressembler à une belle amitié qui n'ose pas l'intime.",
        "La clé de résolution : oser la profondeur émotionnelle, exprimer les sentiments sans les rationaliser. La chaleur et l'engagement, qu'aucun ne possède d'instinct, sont à cultiver volontairement.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Deux Verseaux forment un couple libre, original et inspirant. Leur indépendance mutuellement respectée, leur ouverture d'esprit et leurs idéaux communs en font des partenaires qui grandissent ensemble sans s'étouffer.",
        "Quand ils ajoutent la profondeur du cœur à leur complicité d'esprit, ils vivent une relation aussi rare que durable, une amitié amoureuse qui ose enfin l'intime.",
      ] },
    ],
    faq: [
      { q: "Deux Verseaux sont-ils compatibles&nbsp;?", a: "Deux Verseaux forment une conjonction : un effet miroir fait de liberté, d'originalité et d'idéaux partagés. Très compatibles intellectuellement, ils doivent surveiller le détachement émotionnel. La synastrie complète des deux thèmes nuance ce portrait." },
      { q: "Pourquoi deux Verseaux manquent-ils de chaleur&nbsp;?", a: "Le Verseau (air fixe, régi par Uranus) privilégie les idées et chérit son indépendance. Quand deux Verseaux s'aiment, leur détachement se double et l'intimité émotionnelle peut manquer. Oser la vulnérabilité est leur grand apprentissage." },
      { q: "Quel est le plus grand défi de deux Verseaux en couple&nbsp;?", a: "Le détachement émotionnel redoublé. Deux esprits indépendants peuvent rester dans l'amitié et les idées sans plonger dans l'intime. Le défi est d'oser la profondeur du cœur et d'exprimer les sentiments sans les rationaliser." },
    ],
    related: [sc('verseau', 'Le signe'), { href: '/compatibilite/verseau', glyph: GLYPH.verseau, label: 'Compatibilités', name: NAME.verseau }, guideCard],
  }),

  pair({
    a: 'poissons', b: 'poissons',
    metaDesc: "Compatibilité Poissons Poissons : deux eaux mutables en miroir, une fusion romantique et un risque de perte d'ancrage. Quand deux rêveurs s'aiment. Dynamique, défis et forces.",
    ogDesc: "Conjonction : deux Poissons, romantisme, compassion et le risque d'un couple qui se noie dans le rêve.",
    h1Html: "Compatibilité Poissons & Poissons, deux <em>océans</em> qui se mêlent",
    leadHtml: "Deux Poissons ensemble, c'est une conjonction : l'effet miroir. Cette compatibilité Poissons–Poissons double l'eau mutable, une fusion romantique et spirituelle, une tendresse infinie, mais aussi le risque que deux rêveurs perdent ensemble pied avec le réel.",
    sections: [
      { h2: null, paras: [
        "Quand deux <a href=\"/signes/poissons\">Poissons</a> se rencontrent, c'est une reconnaissance d'âme à âme. La conjonction crée une fusion immédiate : même sensibilité, même compassion, même imaginaire. Mais ce miroir amplifie aussi le manque d'ancrage et la tendance à fuir le réel.",
      ] },
      { h2: 'Poissons et Poissons : la dynamique profonde', paras: [
        "Deux Neptune en résonance : une compassion et une imagination redoublées. Tous deux sensibles, intuitifs et romantiques, ils se comprennent sans mots, dans une connexion presque télépathique. Leur amour est tendre, spirituel, fusionnel.",
        "L'avantage de la conjonction est cette communion d'âmes ; son défi est l'absence d'ancrage. Aucun des deux n'apporte le sens pratique ou les limites qui structureraient le couple. Deux Poissons, sans contrepoids, peuvent se perdre ensemble dans le rêve ou l'idéalisation.",
      ] },
      { h2: 'Comment deux Poissons communiquent', paras: [
        "La communication passe par l'intuition, les ressentis, les non-dits compris. Ils se devinent et se consolent avec une douceur infinie. Mais tous deux fuient le conflit, ce qui peut laisser les vrais sujets sous la surface, dans un flou émotionnel.",
        "La clé est d'oser la clarté et l'honnêteté, de mettre des mots sur les ressentis. Quand ils ajoutent un peu de concret à leur tendresse, leur connexion devient aussi solide que douce.",
      ] },
      { h2: "L'alchimie entre deux Poissons", paras: [
        "L'intimité est fusionnelle, romantique et profondément spirituelle. Deux Poissons se donnent entièrement, dans une connexion où les frontières s'effacent. Leur sensualité est tendre, imaginative, empreinte d'une dimension presque mystique.",
        "L'écueil est l'excès de fusion et l'idéalisation : à ne faire qu'un, ils peuvent perdre leurs limites ou aimer une image plutôt que la personne réelle. Préserver un soi distinct garde l'amour vivant.",
      ] },
      { h2: 'Les défis à surmonter', paras: [
        "Le défi majeur est le manque d'ancrage et la fuite du réel. Deux Poissons peuvent manquer de sens pratique, se laisser submerger par les émotions, fuir ensemble dans le rêve, l'idéalisation ou l'évitement. Le quotidien risque d'être le grand absent.",
        "La clé de résolution : développer ensemble plus de structure et de réalisme, oser les vrais sujets, préserver des limites. L'ancrage, qu'aucun ne possède d'instinct, est leur grand travail commun.",
      ] },
      { h2: 'Ce qui rend ce duo puissant', paras: [
        "Deux Poissons forment un couple d'une tendresse et d'une profondeur spirituelle rares. Leur empathie mutuelle, leur imaginaire et leur compassion en font des partenaires qui se comprennent et s'aiment au plus profond de l'âme.",
        "Quand ils ajoutent un peu d'ancrage à leur fusion, ils vivent une histoire d'amour d'une beauté presque irréelle, deux océans qui se mêlent sans se perdre.",
      ] },
    ],
    faq: [
      { q: "Deux Poissons sont-ils compatibles&nbsp;?", a: "Deux Poissons forment une conjonction : un effet miroir fait de tendresse, de compassion et de fusion romantique. Très compatibles sur le plan de l'âme, ils doivent surveiller le manque d'ancrage et la fuite du réel. La synastrie complète des deux thèmes nuance ce portrait." },
      { q: "Pourquoi deux Poissons perdent-ils pied avec le réel&nbsp;?", a: "Les Poissons (eau mutable, régis par Neptune) sont rêveurs, sensibles et fuient volontiers le réel. Quand deux Poissons s'aiment, leur manque d'ancrage se double et le quotidien peut être négligé. Développer du concret est leur grand apprentissage." },
      { q: "Quel est le plus grand défi de deux Poissons en couple&nbsp;?", a: "Le manque d'ancrage et la fuite du réel. Deux rêveurs peuvent se submerger d'émotions et négliger le quotidien. Le défi est de développer ensemble structure et réalisme, et de préserver des limites saines." },
    ],
    related: [sc('poissons', 'Le signe'), { href: '/compatibilite/poissons', glyph: GLYPH.poissons, label: 'Compatibilités', name: NAME.poissons }, guideCard],
  }),
];
