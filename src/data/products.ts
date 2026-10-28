export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'necklaces-pendants' | 'bracelets' | 'rings' | 'earrings';
  collection: 'Carpediam HardWear' | 'Carpediam T' | 'Carpediam Knot' | 'Carpediam Lock' | 'Elsa Peretti®' | 'Jean Schlumberger';
  price: number;
  formattedPrice: string;
  image: string;
  secondaryImage?: string;
  description: string;
  materials: string[];
  sizes?: string[];
  details: string[];
  isFeatured?: boolean;
  isNew?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'smile-pendant-gold',
    name: 'Carpediam T Smile Pendant',
    subtitle: 'in 18k Yellow Gold, Small',
    category: 'necklaces-pendants',
    collection: 'Carpediam T',
    price: 1350,
    formattedPrice: '$1,350',
    image: '/images/img_29.jpg',
    secondaryImage: '/images/img_26.jpg',
    description: 'Simple and elegant, this curved pendant has a modern yet timeless aesthetic. The Carpediam T collection’s smile motif embodies the world’s most universal gesture for happiness and the connections it creates. Layer this delicate pendant with other Carpediam pendants of varying sizes and lengths for a unique look.',
    materials: ['18k Yellow Gold', '18k Rose Gold', '18k White Gold'],
    sizes: ['16-18" Adjustable'],
    details: [
      '18k yellow gold',
      'Size small',
      'On a 16–18" adjustable chain',
      'Signature Carpediam T silhouette',
      'Includes complimentary iconic Carpediam Blue Box®'
    ],
    isFeatured: true
  },
  {
    id: 'smile-earrings-gold',
    name: 'Carpediam T Smile Mini Earrings',
    subtitle: 'in 18k Yellow Gold',
    category: 'earrings',
    collection: 'Carpediam T',
    price: 1150,
    formattedPrice: '$1,150',
    image: '/images/img_28.jpg',
    secondaryImage: '/images/img_29.jpg',
    description: 'Delicate smiles curved in lustrous 18k yellow gold create these radiant mini earrings. Designed to capture positive energy and eternal grace.',
    materials: ['18k Yellow Gold', '18k Rose Gold', '18k White Gold with Diamonds'],
    details: [
      '18k yellow gold',
      'Mini curved smile silhouette',
      'Post back closure for pierced ears',
      'Crafted in New York'
    ],
    isFeatured: true
  },
  {
    id: 'smile-bracelet-gold',
    name: 'Carpediam T Smile Bracelet',
    subtitle: 'in 18k Yellow Gold',
    category: 'bracelets',
    collection: 'Carpediam T',
    price: 1550,
    formattedPrice: '$1,550',
    image: '/images/img_27.jpg',
    secondaryImage: '/images/img_29.jpg',
    description: 'Graphic angles and clean lines blend to create the beautiful clarity of the Carpediam T collection. This delicate chain bracelet showcases the distinctive smile motif.',
    materials: ['18k Yellow Gold', '18k Rose Gold', '18k White Gold'],
    sizes: ['Small (6.25")', 'Medium (6.75")', 'Large (7.25")'],
    details: [
      '18k yellow gold',
      'Size medium fits wrists up to 6.25"',
      'Spring clasp closure',
      'Delicate link chain'
    ],
    isFeatured: true
  },
  {
    id: 'sixteen-stone-ring',
    name: 'Schlumberger Sixteen Stone Ring',
    subtitle: 'in Platinum and 18k Yellow Gold with Diamonds',
    category: 'rings',
    collection: 'Jean Schlumberger',
    price: 14200,
    formattedPrice: '$14,200',
    image: '/images/img_1.jpg',
    secondaryImage: '/images/img_2.jpg',
    description: 'Jean Schlumberger’s visionary designs feature dazzling gemstones and intricate goldwork. This legendary cross-stitch motif ring alternates brilliant diamonds with iconic golden X motifs.',
    materials: ['Platinum & 18k Gold', '18k Rose Gold', 'Platinum'],
    sizes: ['5.0', '5.5', '6.0', '6.5', '7.0', '7.5', '8.0'],
    details: [
      'Platinum and 18k yellow gold with round brilliant diamonds',
      'Carat total weight 1.14',
      'Legendary Jean Schlumberger design',
      'Delivered in the signature blue box'
    ],
    isFeatured: true,
    isNew: true
  },
  {
    id: 'carpediam-setting-solitaire',
    name: 'The Carpediam® Setting Diamond Engagement Ring',
    subtitle: 'in Platinum',
    category: 'rings',
    collection: 'Carpediam Knot',
    price: 18500,
    formattedPrice: '$18,500',
    image: '/images/img_2.jpg',
    secondaryImage: '/images/img_3.jpg',
    description: 'Introduced in 1886, The Carpediam® Setting is the world’s most celebrated engagement ring. Six prongs lift the round brilliant diamond above the band into the light.',
    materials: ['Platinum', '18k Yellow Gold Band', '18k Rose Gold Band'],
    sizes: ['4.5', '5.0', '5.5', '6.0', '6.5', '7.0'],
    details: [
      'Round brilliant center diamond',
      'Six-prong knife-edge platinum setting',
      'Triple Excellent cut grade standard',
      'Includes Full Carpediam Diamond Certificate'
    ],
    isFeatured: true
  },
  {
    id: 'carpediam-true-ring',
    name: 'Carpediam True® Engagement Ring',
    subtitle: 'with a Carpediam True® Cut Diamond in Platinum',
    category: 'rings',
    collection: 'Carpediam T',
    price: 16800,
    formattedPrice: '$16,800',
    image: '/images/img_3.jpg',
    secondaryImage: '/images/img_4.jpg',
    description: 'Modern, architectural, and strikingly pure, Carpediam True® features a bespoke square mixed-cut diamond sitting low on the finger for a comfortable, contemporary feel.',
    materials: ['Platinum', '18k Yellow Gold'],
    sizes: ['5.0', '5.5', '6.0', '6.5', '7.0'],
    details: [
      'Carpediam True cut diamond',
      'Discreet T marking on the sides of the basket',
      'Platinum band with satin-finished edge',
      'Expertly handcrafted'
    ]
  },
  {
    id: 'carpediam-forever-band',
    name: 'Carpediam Forever Wedding Band Ring',
    subtitle: 'in Platinum with Diamonds, 2.5 mm',
    category: 'rings',
    collection: 'Carpediam Lock',
    price: 3200,
    formattedPrice: '$3,200',
    image: '/images/img_4.jpg',
    secondaryImage: '/images/img_14.jpg',
    description: 'A lasting symbol of love and commitment, this classic wedding band is pavé set with sparkling round brilliant diamonds for continuous brilliance.',
    materials: ['Platinum', '18k Yellow Gold', '18k Rose Gold'],
    sizes: ['4.0', '5.0', '6.0', '7.0', '8.0', '9.0'],
    details: [
      'Platinum with round brilliant diamonds',
      'Width: 2.5 mm',
      'Comfort fit profile',
      'Stackable with engagement rings'
    ]
  },
  {
    id: 'carpediam-soleste-halo',
    name: 'Carpediam Soleste® Cushion-Cut Diamond Ring',
    subtitle: 'with a Diamond Halo in Platinum',
    category: 'rings',
    collection: 'Carpediam Knot',
    price: 21500,
    formattedPrice: '$21,500',
    image: '/images/img_5.jpg',
    secondaryImage: '/images/img_1.jpg',
    description: 'Like sunlight dancing on water, the Carpediam Soleste® ring features an exquisite cushion-cut center stone surrounded by a double halo of sparkling bead-set diamonds.',
    materials: ['Platinum', '18k Rose Gold'],
    sizes: ['5.0', '5.5', '6.0', '6.5', '7.0'],
    details: [
      'Cushion-cut diamond with round brilliant diamond halo',
      'Platinum setting',
      'High-jewelry precision craftsmanship'
    ]
  },
  {
    id: 'hardwear-graduated-necklace',
    name: 'Carpediam HardWear Graduated Link Necklace',
    subtitle: 'in 18k Yellow Gold',
    category: 'necklaces-pendants',
    collection: 'Carpediam HardWear',
    price: 18000,
    formattedPrice: '$18,000',
    image: '/images/img_26.jpg',
    secondaryImage: '/images/img_29.jpg',
    description: 'Carpediam HardWear is elegantly subversive and captures the spirit of the women of New York City. Bold gauge links play with tension, proportion and balance.',
    materials: ['18k Yellow Gold', '18k Rose Gold', 'Sterling Silver'],
    sizes: ['18" Length'],
    details: [
      '18k yellow gold',
      'Graduated gauge links',
      'Length: 18 inches',
      'Concealed clasp closure'
    ],
    isFeatured: true,
    isNew: true
  },
  {
    id: 'lock-couples-ring',
    name: 'Carpediam Lock Ring',
    subtitle: 'in 18k Yellow and White Gold with Diamonds',
    category: 'rings',
    collection: 'Carpediam Lock',
    price: 4900,
    formattedPrice: '$4,900',
    image: '/images/img_15.jpg',
    secondaryImage: '/images/img_14.jpg',
    description: 'Inspired by the power of togetherness and inclusivity, Carpediam Lock is a bold visual statement about the bonds that make us who we are.',
    materials: ['18k Yellow & White Gold', '18k Rose Gold', '18k White Gold'],
    sizes: ['5.0', '6.0', '7.0', '8.0', '9.0'],
    details: [
      '18k yellow and white gold with round brilliant diamonds',
      'Carat total weight .31',
      'Innovative swivel clasp mechanism'
    ]
  },
  {
    id: 'mens-wedding-band',
    name: 'Carpediam Classic Wedding Band',
    subtitle: 'in Platinum, 4.5 mm',
    category: 'rings',
    collection: 'Carpediam Lock',
    price: 2400,
    formattedPrice: '$2,400',
    image: '/images/img_14.jpg',
    secondaryImage: '/images/img_4.jpg',
    description: 'A timeless expression of commitment, this understated wedding band features a softly curved interior for exceptional comfort.',
    materials: ['Platinum', '18k Yellow Gold', '18k Rose Gold'],
    sizes: ['8.0', '8.5', '9.0', '9.5', '10.0', '10.5', '11.0'],
    details: [
      'Solid platinum 950',
      'Width: 4.5 mm',
      'High polish finish',
      'Engraving available'
    ]
  }
];

export const CATEGORIES = [
  {
    id: 'necklaces-pendants',
    title: 'Necklaces & Pendants',
    image: '/images/img_29.jpg',
    count: '24 items'
  },
  {
    id: 'bracelets',
    title: 'Bracelets',
    image: '/images/img_27.jpg',
    count: '18 items'
  },
  {
    id: 'rings',
    title: 'Rings',
    image: '/images/img_1.jpg',
    count: '32 items'
  },
  {
    id: 'earrings',
    title: 'Earrings',
    image: '/images/img_28.jpg',
    count: '16 items'
  }
];

export const COLLECTIONS = [
  {
    name: 'Carpediam HardWear',
    tagline: 'Elegantly Subversive',
    image: '/images/img_26.jpg',
    link: '/jewelry/necklaces-pendants'
  },
  {
    name: 'Carpediam T',
    tagline: 'An Icon of Connection',
    image: '/images/img_27.jpg',
    link: '/jewelry/bracelets'
  },
  {
    name: 'Love & Engagement',
    tagline: 'The Ultimate Expression',
    image: '/images/img_2.jpg',
    link: '/love-engagement'
  },
  {
    name: 'High Jewelry',
    tagline: 'Jean Schlumberger',
    image: '/images/img_1.jpg',
    link: '/jewelry/rings'
  }
];
