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
    { label: 'Bracelets', categorySlug: 'bracelets', href: '#categories' },
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
      title: 'Hallmarked 925 Silver',
      desc: 'Crafted with verified 92.5% pure silver hallmark.'
    },
    {
      id: 'returns',
      title: '15-Day Doorstep Returns',
      desc: 'Complimentary doorstep pickup & easy exchanges.'
    },
    {
      id: 'warranty',
      title: '6-Month Studio Warranty',
      desc: 'Coverage for clasps, stones & studio re-polish.'
    },
    {
      id: 'shipping',
      title: 'Complimentary Shipping',
      desc: 'Insured air delivery in tamper-evident packaging.'
    },
  ],

  offers: [
    {
      id: 'welcome',
      code: 'ANBHA15',
      title: 'First Order Privilege',
      description: 'Enjoy 15% off your first ANBHA order above ₹999.',
      minSpend: 999,
      discount: '15% OFF'
    },
    {
      id: 'silver',
      code: 'SILVER20',
      title: 'Fine Silver Special',
      description: 'Get 20% off on hand-crafted jewellery above ₹1,999.',
      minSpend: 1999,
      discount: '20% OFF'
    },
    {
      id: 'prepaid',
      code: 'PREPAID100',
      title: 'Instant UPI / Card Savings',
      description: 'Instant ₹100 reduction on all prepaid checkout orders.',
      discount: 'Save ₹100'
    },
  ],

  allOffersList: [
    {
      code: 'ANBHA15',
      title: 'Welcome to ANBHA',
      description: 'Enjoy 15% off your first hand-crafted silver jewellery order above ₹999.',
      terms: 'Applicable once per customer. Valid on all non-discounted fine jewellery.'
    },
    {
      code: 'SILVER20',
      title: 'Fine Silver Studio Special',
      description: 'Get 20% off on premium bracelet and necklace designs above ₹1,999.',
      terms: 'Valid on select sterling silver collection pieces.'
    },
    {
      code: 'PREPAID100',
      title: 'Instant Prepaid Savings',
      description: 'Save ₹100 instantly on all UPI, Debit/Credit Card, and Net Banking checkouts.',
      terms: 'Applied automatically when choosing online payment at final checkout.'
    },
    {
      code: 'GIFT500',
      title: 'Celebration Gifting Bundle',
      description: 'Flat ₹500 off on gifting bundles above ₹3,500.',
      terms: 'Includes complimentary signature gift box & hand-written calligraphy note card.'
    }
  ],

  delivery: {
    standardEstimate: 'Get it by 8 October',
    shippingMethod: 'Complimentary Express Air Shipping',
    codAvailable: true,
  },

  productDescription: {
    hook: 'We think you would deserve to shine bright like this piece. Make this bestseller piece a beautiful gift.',
    theDesign: 'This silver bracelet with a link chain has circular zircon stones set in a curved infinity motif.',
    specifications: [
      '925 Silver',
      'Perfect for sensitive skin',
      'Length of chain: 15 cm + 3.8 cm Adjustable',
      'Motif Height: 0.6 cm, Width: 1.4 cm',
      'Comes with the ANBHA Jewellery kit and authenticity certificate',
      'Content: Bracelet With Link Chain',
      'Net Qty- 1 unit'
    ],
    stylingTip: 'Style this with a white dress or minimal everyday essentials.'
  },

  giftOptions: {
    price: 50,
    title: 'Artisanal Keepsake Packaging',
    subtitle: 'Arrives thoughtfully wrapped with a personal calligraphy note.',
    features: [
      'Handcrafted sage-textured keepsake wrapping paper',
      'Soft double-faced silk satin ribbon and botanical sprig',
      'Personalised hand-written note on deckle-edge cotton card',
      'Discreet invoice removal upon request'
    ]
  },

  story: {
    title: 'Touched by hand in Jaipur',
    quote: 'Jewellery isn’t meant for occasional vaults—it is shaped to live with you through everyday mornings.',
    paragraphs: [
      'Every ANBHA Infinity Bracelet begins as ethically sourced 925 sterling silver, hand-shaped and polished by generational silversmiths in our Jaipur studio. The delicate infinity motif is pavé-set with hand-selected brilliant zircon stones that catch the light with quiet, enduring grace.',
      'Finished with a protective rhodium bath to preserve its silver brilliance through everyday wear, this piece feels weightless on the wrist—ready to become an intimate part of your daily rhythm.'
    ],
    motto: 'Pure Silver · Jaipur Craft · Worn Always'
  },

  detailsAccordion: [
    {
      id: 'craft',
      title: 'Material & Jaipur Silversmithing',
      items: [
        'Pure 925 Sterling Silver base, officially stamped with the authenticity hallmark',
        'Protective rhodium plating bath preventing oxidation, tarnish and daily wear dullness',
        'Hand-set micro-pavé brilliant zircon stones with diamond-cut light reflection',
        'Individually hand-polished by generational artisan silversmiths in Jaipur'
      ]
    },
    {
      id: 'dimensions',
      title: 'Dimensions & Fit Guide',
      items: [
        'Base bracelet length: 6" with 1.5" delicate extension chain links',
        'Comfortably fits wrist circumferences from 5.5" to 7.2" with flexible adjustment',
        'Infinity charm dimensions: 14mm width × 6mm height with smooth contoured curves',
        'Total weight: 4.6 grams—designed to feel weightless during all-day wear',
        'Closure: Custom reinforced lobster clasp engineered for secure, effortless single-handed clasping'
      ]
    },
    {
      id: 'care',
      title: 'Care & Daily Wear Guidelines',
      items: [
        'Silver loves being worn—natural skin oils help maintain its luster and prevent tarnish',
        'Store in the provided airtight ANBHA cotton pouch when not on your wrist',
        'Wipe clean after use with the complimentary microfiber polishing cloth included in your box',
        'Keep away from harsh chlorine pools, chemical bleach, and direct perfume sprays',
        '100% nickel-free, lead-free and hypoallergenic—gentle on sensitive skin'
      ]
    },
    {
      id: 'included',
      title: "Keepsake Unboxing & What's Included",
      items: [
        'ANBHA Silver Infinity Bracelet resting on soft velvet cushion',
        'Signature rigid ANBHA sage jewellery keepsake box with pull ribbon',
        'Pure unbleached cotton travel and storage pouch',
        'Individually numbered Certificate of Authenticity card',
        'Microfiber polishing cloth & 6-month studio warranty documentation'
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
      q: 'Is this authentic 925 sterling silver?',
      a: 'Yes, without exception. Every ANBHA piece is crafted in authentic 925 sterling silver (92.5% pure silver alloyed for strength and longevity) and carries the official 925 hallmark stamp. Your order arrives with an individually numbered physical Certificate of Authenticity.'
    },
    {
      q: 'Will it tarnish, and can I wear it every single day?',
      a: 'Pure silver naturally responds to air over time, but every ANBHA bracelet is treated with a protective rhodium bath that shields it from daily oxidation. In fact, wearing your jewellery regularly actually prevents tarnish—your skin’s natural oils keep the silver polished and conditioned. When needed, a gentle pass with the complimentary polishing cloth included in your box restores its original glow in seconds.'
    },
    {
      q: 'Is this bracelet safe for sensitive or allergy-prone skin?',
      a: 'Absolutely. We formulate all our silver without nickel, lead, or cheap base metal fillers. It is completely hypoallergenic and designed to sit softly against the most sensitive skin all day long.'
    },
    {
      q: 'Can I wear my bracelet in the shower or while swimming?',
      a: 'While pure silver is not harmed by fresh tap water, we warmly recommend taking your bracelet off before showering, hot tubs, or chlorinated pools. Soaps and pool chemicals can leave residue on the micro-pavé zircon stones and gradually dull the rhodium luster.'
    },
    {
      q: 'How does the sizing work? Will it comfortably fit my wrist?',
      a: 'The bracelet measures 6 inches with an additional 1.5-inch delicate extension chain, giving you a full adjustable range from 5.5 to 7.2 inches. The reinforced custom lobster clasp is engineered for effortless one-handed fastening.'
    },
    {
      q: 'What is your return and exchange policy?',
      a: 'We want you to feel complete quiet joy when you open your parcel. If the piece doesn’t feel entirely right, you can request a complimentary doorstep return or exchange within 15 days of delivery. All we ask is that the piece remains unworn and in its original keepsake box.'
    },
    {
      q: 'What is covered under the 6-Month Studio Warranty?',
      a: 'Every piece is protected by our 6-month studio guarantee covering clasp adjustments, stone resetting, and complimentary professional re-polishing. Should your piece ever need care, our studio concierge takes care of everything.'
    }
  ],

  finalBrandMoment: {
    eyebrow: 'ANBHA Studio',
    quote: 'Crafted in pure silver. Made to become part of your story.',
    brand: 'ANBHA',
    motto: 'Pure Silver. Endless Stories.'
  }
}
