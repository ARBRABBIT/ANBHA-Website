// ANBHA Product Detail Page - Structured Data Architecture
// Follows section 30 data architecture specifications

import categoryBracelets from '../assets/category-bracelets.jpg'
import productCuff from '../assets/product-cuff.jpg'
import productEarrings from '../assets/product-earrings.jpg'
import productPendant from '../assets/product-pendant.jpg'
import productRing from '../assets/product-ring.jpg'
import customerCuff from '../assets/customer-review-cuff.jpg'
import customerNecklace from '../assets/customer-review-necklace.jpg'
import customerEarrings from '../assets/customer-review-earrings.jpg'

import infinityMain from '../assets/infinity-bracelet-main.jpg'
import infinityAngle from '../assets/infinity-bracelet-angle.jpg'
import infinityMacro from '../assets/infinity-bracelet-macro.jpg'
import infinityModel from '../assets/infinity-bracelet-model.jpg'
import infinityPackaging from '../assets/infinity-bracelet-packaging.jpg'
import infinityLifestyle from '../assets/infinity-bracelet-lifestyle.jpg'

export const productData = {
  id: 'anbha-infinity-bracelet',
  slug: 'silver-infinity-bracelet',
  name: 'ANBHA Silver Infinity Bracelet',
  collection: 'The Infinity Collection',
  category: 'Bracelets',
  categorySlug: 'bracelets',
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Bracelets', href: '#categories' },
    { label: 'Silver Infinity Bracelet', href: '#top' },
  ],
  rating: 4.8,
  reviewCount: 46,
  price: 1999,
  mrp: 3099,
  discountPercentage: 35,
  taxNote: 'MRP inclusive of all taxes',
  shortStory: 'A timeless expression of connection, crafted in pure 925 silver for stories that never end.',
  
  gallery: [
    {
      id: 'img-1',
      type: 'image',
      label: 'Main View',
      caption: 'ANBHA Silver Infinity Bracelet in pure 925 sterling silver with pavé zircon stones',
      src: infinityMain,
      alt: 'ANBHA Silver Infinity Bracelet resting on warm off-white stone'
    },
    {
      id: 'img-2',
      type: 'image',
      label: 'Angle View',
      caption: 'Detailed profile highlighting rhodium luster, 3D curved infinity motif, and delicate chain',
      src: infinityAngle,
      alt: 'Side angle view of the ANBHA Silver Infinity Bracelet'
    },
    {
      id: 'img-3',
      type: 'image',
      label: 'Macro Detail',
      caption: 'Artisan hand-set micro-pavé zircon centerpiece with authentic 925 hallmark',
      src: infinityMacro,
      alt: 'Close-up macro detail of the silver infinity motif and pavé zircon stones'
    },
    {
      id: 'img-4',
      type: 'image',
      label: 'Worn on Model',
      caption: 'Worn gracefully on the wrist, perfect for everyday quiet luxury',
      src: infinityModel,
      alt: 'Model wearing the ANBHA Silver Infinity Bracelet on wrist'
    },
    {
      id: 'img-5',
      type: 'image',
      label: 'Packaging',
      caption: 'Signature ANBHA luxury packaging with gift box, velvet cushion, and authenticity certificate',
      src: infinityPackaging,
      alt: 'ANBHA luxury signature gift packaging'
    },
    {
      id: 'img-6',
      type: 'image',
      label: 'Lifestyle',
      caption: 'Quiet luxury flatlay with open art book and soft morning shadows',
      src: infinityLifestyle,
      alt: 'Lifestyle flatlay of ANBHA silver infinity bracelet'
    },
  ],

  purity: '925 Sterling Silver',
  plating: 'Rhodium Plated',
  stones: 'Zircon',
  length: '6" + Adjustable',
  closure: 'Lobster Clasp',
  finish: 'High Polish',

  features: [
    { label: 'Silver Purity', value: '925 Sterling Silver' },
    { label: 'Plating', value: 'Rhodium Plated' },
    { label: 'Stone', value: 'Zircon' },
    { label: 'Length', value: '6" + Adjustable' },
    { label: 'Closure', value: 'Lobster Clasp' },
    { label: 'Finish', value: 'High Polish' },
  ],

  trustBenefits: [
    {
      id: 'purity',
      title: '925 Pure Silver',
      desc: 'Authentic sterling silver craftsmanship.'
    },
    {
      id: 'plating',
      title: 'Lifetime Plating',
      desc: 'Plating support to preserve its brilliance.'
    },
    {
      id: 'warranty',
      title: '6-Month Warranty',
      desc: 'Coverage against eligible manufacturing defects.'
    },
    {
      id: 'returns',
      title: '15-Day Easy Returns',
      desc: 'Simple and convenient returns.'
    },
    {
      id: 'certified',
      title: 'Authenticity Certified',
      desc: 'Every ANBHA silver piece is quality checked.'
    },
  ],

  offers: [
    {
      id: 'welcome',
      code: 'ANBHA15',
      title: 'Welcome Offer',
      description: '15% OFF on your first ANBHA order above ₹999.',
      minSpend: 999,
      discount: '15% OFF'
    },
    {
      id: 'silver',
      code: 'SILVER20',
      title: 'Silver Jewellery Offer',
      description: 'Get 20% OFF on selected jewellery above ₹1,999.',
      minSpend: 1999,
      discount: '20% OFF'
    },
    {
      id: 'prepaid',
      code: 'PREPAID5',
      title: 'Prepaid Offer',
      description: 'Additional savings on eligible prepaid purchases.',
      discount: 'Extra ₹100'
    },
  ],

  allOffersList: [
    {
      code: 'ANBHA15',
      title: 'Welcome to ANBHA',
      description: 'Get 15% off on your first handcrafted silver jewellery order above ₹999.',
      terms: 'Applicable once per user on first order. Cannot be combined with other promotional codes.'
    },
    {
      code: 'SILVER20',
      title: 'Silver Jewellery Special',
      description: 'Get 20% off on premium bracelet and necklace pieces above ₹1,999.',
      terms: 'Valid on select sterling silver collection pieces.'
    },
    {
      code: 'PREPAID100',
      title: 'Instant Prepaid Savings',
      description: 'Save ₹100 instantly on all UPI, Debit/Credit Card, and Net Banking orders.',
      terms: 'Applied automatically at final checkout.'
    },
    {
      code: 'GIFT500',
      title: 'Curated Gifting Offer',
      description: 'Flat ₹500 off on gifting bundles above ₹3,500.',
      terms: 'Includes complimentary gift box & hand-written calligraphy note.'
    }
  ],

  delivery: {
    standardEstimate: 'Get it by 8 October',
    shippingMethod: 'Free Express Shipping',
    codAvailable: true,
  },

  giftOptions: {
    price: 50,
    title: 'Add Premium Gift Wrap',
    subtitle: 'Turn your ANBHA piece into a beautifully wrapped memory.',
    features: [
      'Handcrafted sage-hued textured wrapping paper',
      'Silk satin ribbon and dried botanical sprig',
      'Personalised hand-written note on deckle-edge paper',
      'Option to discreetly hide price invoice'
    ]
  },

  story: {
    title: 'The Story',
    quote: 'Some bonds are meant to remain timeless.',
    paragraphs: [
      'Inspired by connections that continue through every chapter, the ANBHA Infinity Bracelet represents love, continuity and enduring relationships.',
      'Its delicate silhouette and subtle sparkle make it effortless enough for everyday moments while meaningful enough to become part of someone’s story.'
    ],
    motto: 'Pure Silver. Endless Stories.'
  },

  detailsAccordion: [
    {
      id: 'craft',
      title: 'Material & Craftsmanship',
      items: [
        '925 Sterling Silver base, rigorously hallmarked for purity',
        'Protective rhodium plating preventing oxidation and daily tarnish',
        'Pavé hand-set brilliant micro-zircon crystals with diamond-cut facets',
        'Hand-finished detailing by master generational silversmiths in Jaipur'
      ]
    },
    {
      id: 'dimensions',
      title: 'Dimensions',
      items: [
        'Bracelet length: 6" with 1.5" delicate extension links',
        'Infinity charm dimensions: 14mm width × 6mm height',
        'Weight: Lightweight 4.6 grams designed for featherlight everyday comfort',
        'Clasp: Signature reinforced lobster clasp for secure everyday wear'
      ]
    },
    {
      id: 'included',
      title: "What's Included",
      items: [
        'ANBHA Silver Infinity Bracelet',
        'ANBHA signature rigid jewellery keepsake box',
        'Pure cotton travel and polishing pouch',
        'Individually numbered Certificate of Authenticity',
        'Comprehensive jewellery care and warranty guide'
      ]
    }
  ],

  careInstructions: [
    'Store jewellery in its ANBHA pouch or box.',
    'Avoid perfumes and harsh chemicals.',
    'Remove before swimming or showering.',
    'Wipe gently with a soft cloth after use.',
    'Use an appropriate silver polishing cloth when required.'
  ],

  shippingInfoCards: [
    {
      title: 'Free Express Shipping',
      description: 'Carefully packed ANBHA jewellery delivered securely in tamper-proof boxes.',
      learnMore: 'All orders are dispatched within 24 hours via express air courier with live tracking.'
    },
    {
      title: '15-Day Easy Returns',
      description: 'Eligible products can be returned according to ANBHA’s return policy.',
      learnMore: 'Enjoy doorstep pickup for exchanges or full refunds if unworn and in original condition.'
    },
    {
      title: '6-Month Warranty',
      description: 'Eligible manufacturing issues are covered under warranty.',
      learnMore: 'Covers stone tightening, clasp repair, and plating re-polish within the first 6 months.'
    },
    {
      title: 'Lifetime Plating Support',
      description: 'Plating services are available according to ANBHA’s jewellery-care policy.',
      learnMore: 'Refresh your piece with our studio re-plating service at any point in its lifespan.'
    }
  ],

  reviewsData: {
    averageRating: 4.8,
    totalReviews: 46,
    distribution: [
      { stars: 5, count: 39, percentage: 85 },
      { stars: 4, count: 5, percentage: 11 },
      { stars: 3, count: 2, percentage: 4 },
      { stars: 2, count: 0, percentage: 0 },
      { stars: 1, count: 0, percentage: 0 },
    ],
    reviews: [
      {
        id: 'rev-1',
        name: 'Priya S.',
        city: 'Bengaluru',
        rating: 5,
        date: '28 September 2026',
        verified: true,
        quote: 'Beautiful finish and even better in person. The bracelet feels delicate, elegant and premium.',
        helpfulCount: 18,
        image: customerNecklace,
        wearing: 'Silver Infinity Bracelet'
      },
      {
        id: 'rev-2',
        name: 'Ananya D.',
        city: 'Mumbai',
        rating: 5,
        date: '19 September 2026',
        verified: true,
        quote: 'I wear this every single day without taking it off. It hasn’t tarnished at all and the zircon sparkle is understated yet mesmerizing.',
        helpfulCount: 12,
        image: customerEarrings,
        wearing: 'Silver Infinity Bracelet'
      },
      {
        id: 'rev-3',
        name: 'Kavya N.',
        city: 'Hyderabad',
        rating: 5,
        date: '12 September 2026',
        verified: true,
        quote: 'Received this in the most gorgeous packaging. The clasp is sturdy and the extension links make it fit my slender wrist perfectly.',
        helpfulCount: 9,
        image: customerCuff,
        wearing: 'Silver Infinity Bracelet'
      },
      {
        id: 'rev-4',
        name: 'Rhea M.',
        city: 'New Delhi',
        rating: 4,
        date: '02 September 2026',
        verified: true,
        quote: 'Super subtle and minimalist. Exactly what I look for in modern silver jewellery. Prompt delivery within 3 days.',
        helpfulCount: 7,
        image: null,
        wearing: 'Silver Infinity Bracelet'
      }
    ]
  },

  recommendations: [
    {
      id: 'rec-1',
      name: 'Silver Eternal Bond Bracelet',
      type: 'Bracelet',
      rating: 4.8,
      reviewsCount: 26,
      price: '₹2,299',
      priceNum: 2299,
      mrp: '₹3,999',
      discount: '42% OFF',
      image: categoryBracelets
    },
    {
      id: 'rec-2',
      name: 'Moon Disc Pendant',
      type: 'Necklace',
      rating: 4.9,
      reviewsCount: 38,
      price: '₹2,699',
      priceNum: 2699,
      mrp: '₹3,599',
      discount: '25% OFF',
      image: productPendant
    },
    {
      id: 'rec-3',
      name: 'Petal Drop Earrings',
      type: 'Earrings',
      rating: 4.8,
      reviewsCount: 32,
      price: '₹1,899',
      priceNum: 1899,
      mrp: '₹2,499',
      discount: '24% OFF',
      image: productEarrings
    },
    {
      id: 'rec-4',
      name: 'Solitary Wave Ring',
      type: 'Ring',
      rating: 4.7,
      reviewsCount: 19,
      price: '₹1,599',
      priceNum: 1599,
      mrp: '₹2,199',
      discount: '27% OFF',
      image: productRing
    }
  ],

  recentlyViewed: [
    {
      id: 'rv-1',
      name: 'Stillwater Hand-Hammered Cuff',
      type: 'Bracelet',
      rating: 4.9,
      price: '₹2,899',
      priceNum: 2899,
      mrp: '₹3,800',
      discount: '24% OFF',
      image: productCuff
    },
    {
      id: 'rv-2',
      name: 'Petal Drop Earrings',
      type: 'Earrings',
      rating: 4.8,
      price: '₹1,899',
      priceNum: 1899,
      mrp: '₹2,499',
      discount: '24% OFF',
      image: productEarrings
    },
    {
      id: 'rv-3',
      name: 'Moon Disc Pendant',
      type: 'Necklace',
      rating: 4.9,
      price: '₹2,699',
      priceNum: 2699,
      mrp: '₹3,599',
      discount: '25% OFF',
      image: productPendant
    }
  ],

  similarGroupings: [
    {
      id: 'more-bracelets',
      tabLabel: 'More Silver Bracelets',
      heading: 'Crafted for daily grace',
      items: [
        {
          id: 'sb-1',
          name: 'Silver Eternal Bond Bracelet',
          price: '₹2,299',
          mrp: '₹3,999',
          rating: 4.8,
          reviews: 26,
          image: categoryBracelets
        },
        {
          id: 'sb-2',
          name: 'Stillwater Hand-Hammered Cuff',
          price: '₹2,899',
          mrp: '₹3,800',
          rating: 4.9,
          reviews: 41,
          image: productCuff
        }
      ]
    },
    {
      id: 'infinity-collection',
      tabLabel: 'The Infinity Collection',
      heading: 'Endless connections',
      items: [
        {
          id: 'ic-1',
          name: 'Infinity Sparkle Pendant',
          price: '₹2,499',
          mrp: '₹3,299',
          rating: 4.9,
          reviews: 19,
          image: productPendant
        },
        {
          id: 'ic-2',
          name: 'Infinity Solitaire Ring',
          price: '₹1,699',
          mrp: '₹2,399',
          rating: 4.8,
          reviews: 15,
          image: productRing
        }
      ]
    },
    {
      id: 'under-2999',
      tabLabel: 'Under ₹2,999',
      heading: 'Everyday pure silver',
      items: [
        {
          id: 'u-1',
          name: 'Petal Drop Earrings',
          price: '₹1,899',
          mrp: '₹2,499',
          rating: 4.8,
          reviews: 32,
          image: productEarrings
        },
        {
          id: 'u-2',
          name: 'Moon Disc Pendant',
          price: '₹2,699',
          mrp: '₹3,599',
          rating: 4.9,
          reviews: 38,
          image: productPendant
        }
      ]
    }
  ],

  faqs: [
    {
      q: 'Is ANBHA jewellery made with 925 sterling silver?',
      a: 'Yes. ANBHA jewellery marked as 925 is made using sterling silver containing 92.5% pure silver.'
    },
    {
      q: 'Can ANBHA silver jewellery be worn every day?',
      a: 'Most ANBHA silver jewellery is designed for regular wear. Proper jewellery care helps preserve its appearance and finish.'
    },
    {
      q: 'Is 925 silver suitable for sensitive skin?',
      a: '925 sterling silver is generally suitable for jewellery use, although individual sensitivities may vary.'
    },
    {
      q: 'How should I clean my silver jewellery?',
      a: 'Gently wipe jewellery using a soft cloth after use and keep it away from excessive moisture, perfumes and harsh chemicals.'
    },
    {
      q: 'Can I wear ANBHA jewellery in water?',
      a: 'We recommend removing jewellery before bathing or swimming to preserve the plating and finish.'
    },
    {
      q: 'Does ANBHA offer warranty coverage?',
      a: 'Eligible ANBHA jewellery comes with warranty coverage according to the product warranty policy.'
    },
    {
      q: 'Can I return my jewellery?',
      a: 'Eligible products can be returned within the stated return period according to ANBHA’s return policy.'
    }
  ],

  finalBrandMoment: {
    eyebrow: 'ANBHA Studio',
    quote: 'Crafted in pure silver. Made to become part of your story.',
    brand: 'ANBHA',
    motto: 'Pure Silver. Endless Stories.'
  }
}
