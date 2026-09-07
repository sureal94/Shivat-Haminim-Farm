import { PAYPAL_DONATION_URL } from '../lib/paypal'

export const site = {
  name: 'Shivat Haminim Farm',
  hebrewName: 'חוות שבעת המינים',
  tagline: 'Rooted in the Land',
  shortMission:
    'Growing people, growing possibilities, through nature, inclusion and community.',
  location: {
    city: "Yavne'el",
    cityHebrew: 'יבניאל',
    region: 'Lower Galilee, Israel',
    mapEmbed:
      'https://www.openstreetmap.org/export/embed.html?bbox=35.47%2C32.69%2C35.54%2C32.72&layer=mapnik&marker=32.703%2C35.504',
    mapLink: 'https://www.openstreetmap.org/?mlat=32.703&mlon=35.504#map=14/32.703/35.504',
  },
  contact: {
    phoneDisplay: '052-532-1694',
    phoneTel: '+972525321694',
    whatsappDisplay: '+972-052-532-1694',
    whatsappUrl: 'https://wa.me/972525321694',
    email: 'shivat.haminim.farm@gmail.com',
    address: "Yavne'el, Israel",
  },
  social: [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/shivat.haminim.farm/',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=100070722451063',
    },
  ],
  donationUrl: PAYPAL_DONATION_URL,
  siteUrl: import.meta.env.VITE_SITE_URL || 'https://www.example.com',
}

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/what-we-do', label: 'What We Do' },
  { to: '/ways-to-help', label: 'Ways to Help' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/events', label: 'Events' },
  { to: '/donate', label: 'Donate' },
  { to: '/contact', label: 'Contact' },
]

export const home = {
  hero: {
    heading: 'Growing People. Growing Possibilities.',
    text: 'Shivat Haminim Farm is a welcoming, inclusive farm where people of all abilities can connect with nature, learn, grow, and discover the joy of meaningful activity and community.',
    primaryCta: { label: 'Discover the Farm', to: '/about' },
    secondaryCta: { label: 'Support Our Mission', to: '/donate' },
  },
  intro: {
    eyebrow: 'Welcome to Shivat Haminim Farm',
    heading: 'A Farm Where Everyone Belongs',
    paragraphs: [
      "Shivat Haminim Farm is an inclusive farm in Yavne'el, in the Lower Galilee near the Kinneret. It was created so people of all abilities can reconnect with health, community, and nature.",
      'We host activities shaped around the needs of each group and each person. Some experiences take place at the farm. When it is helpful, we also come to you.',
      'This is a place to slow down, work with the earth, enjoy healthy activity, and feel that you belong.',
    ],
  },
  whatWeDo: {
    heading: 'What Happens When People Connect With Nature?',
    cards: [
      {
        icon: 'sprout',
        title: 'Growing & Gardening',
        text: 'Hands-on activities with plants, vegetables, herbs and trees create opportunities to learn, participate and enjoy the simple satisfaction of growing something together.',
      },
      {
        icon: 'heart',
        title: 'Holistic Health',
        text: 'Nature, movement, healthy food and meaningful activity come together to support wellbeing and create positive experiences.',
      },
      {
        icon: 'accessibility',
        title: 'Inclusion & Accessibility',
        text: 'We believe everyone should have the opportunity to participate. The farm is being created as a wheelchair-accessible, safe space where people of different abilities can enjoy nature.',
      },
      {
        icon: 'users',
        title: 'Community',
        text: 'By bringing people together around meaningful activities, we create opportunities for connection, friendship, contribution and belonging.',
      },
    ],
  },
  accessibility: {
    heading: 'Nature Should Be Accessible to Everyone',
    paragraphs: [
      'Connection to nature has real benefits for mental and emotional wellbeing. In caring for people with special needs, attention is often placed on physical and cognitive support, yet emotional regulation, sensory connection, and a sense of belonging are just as essential.',
      'The farm offers meaningful, hands-on work in a living environment. We begin by connecting to the earth and gently becoming comfortable in nature.',
      'Your support helps create wheelchair-accessible gardens, an accessible farm vehicle, a greenhouse, and inclusive healing spaces, so more people can take part comfortably and with dignity.',
    ],
    points: [
      'Wheelchair-accessible gardens',
      'An accessible farm vehicle',
      'A greenhouse for growing through the year',
      'Inclusive healing spaces',
    ],
  },
  philosophy: {
    quote: 'Every soul has its own special purpose.',
    attribution: 'Rachelli Shabbat',
    text: 'Every person has abilities, strengths, and something meaningful to contribute. At the farm, we look for that purpose together, through nature, community, and work that matters.',
  },
  waysToHelp: {
    heading: 'You Can Help Us Grow',
    cards: [
      {
        title: 'Volunteer With Us',
        text: 'Bring your time, energy, creativity and heart to the farm. Whether you lend a hand in the gardens or help with community activities, your contribution can make a real difference.',
        button: 'Volunteer',
        to: '/ways-to-help#volunteer',
      },
      {
        title: 'Help Us Grow',
        text: 'Your support helps us create accessible spaces and meaningful opportunities for people of all abilities.',
        button: 'Donate',
        to: '/donate',
      },
      {
        title: 'Be Part of the Community',
        text: 'Visit the farm, connect with our community and discover how you can become part of what we are growing together.',
        button: 'Get Involved',
        to: '/ways-to-help',
      },
    ],
  },
  fundraising: {
    heading: 'Help Us Build What Comes Next',
    intro:
      'Your donation helps create wheelchair-accessible gardens, a greenhouse, an accessible farm vehicle, and inclusive healing spaces where people of all abilities can connect with nature and the Land of Israel.',
  },
  gallery: {
    heading: 'Life at the Farm',
  },
  cta: {
    heading: 'Help Us Grow a Place Where Everyone Belongs',
    text: 'Together, we can create a place where people can connect with nature, discover their abilities, contribute to their community and grow.',
  },
}

export const about = {
  hero: {
    heading: 'About Shivat Haminim Farm',
    text: 'A healing farm dedicated to meaningful work, nature-based wellbeing, and inclusive community for people of all abilities.',
  },
  who: {
    heading: 'Who we are',
    paragraphs: [
      'Shivat Haminim Farm was born from a desire to create beautiful, accessible spaces where people of all abilities can reconnect to health, community, and nature.',
      "The farm is in Yavne'el, in Israel's Lower Galilee. It is a welcoming place for people with special needs, their families and friends, volunteers, and visitors who want to experience the land together.",
    ],
  },
  why: {
    heading: 'Why the farm exists',
    paragraphs: [
      'In caring for people with special needs, attention is often placed on physical and cognitive support. Emotional regulation, sensory connection, and a sense of belonging are just as essential.',
      'The farm offers meaningful, embodied work and a living environment where we learn from nature how to slow down, regulate ourselves, and reconnect.',
    ],
  },
  vision: {
    heading: 'Our vision',
    paragraphs: [
      'Our vision is a world where every person, regardless of ability, has the opportunity to connect, heal, contribute, and belong through nature, community, and meaningful work.',
    ],
  },
  invitation:
    'We warmly invite people of all abilities to experience the land and share in its abundant beauty.',
  pillars: [
    {
      heading: 'Inclusion',
      text: 'Our vision is a world where every person, regardless of ability, has the opportunity to connect, heal, contribute, and belong. We welcome people of all abilities, their friends, families, and visitors.',
    },
    {
      heading: 'Nature',
      text: 'We always begin by connecting to the earth and gently becoming comfortable in nature. Planting, harvesting, exploring the seasons, and working directly with the land are part of life here.',
    },
    {
      heading: 'Community',
      text: 'The farm is a place to create memories, forge friendships, and celebrate the dignity of every person. We host activities for groups and families, and we also come to you.',
    },
    {
      heading: 'Healthy living',
      text: 'Workshops invite people to slow down, explore the healing power of herbs, learn practical nature-based skills, and enjoy meaningful time outdoors, including harvesting food and crafting herbal remedies.',
    },
    {
      heading: 'Accessibility',
      text: 'The farm is being created as a wheelchair-accessible, safe space. Support helps grow accessible gardens, an accessible farm vehicle, a greenhouse, and inclusive healing spaces.',
    },
  ],
}

export const whatWeDo = {
  hero: {
    heading: 'Growing Through Nature',
    text: 'Activities at the farm are custom-made to meet the needs of each group and individual. We always begin by connecting to the earth.',
  },
  sections: [
    {
      id: 'gardening',
      title: 'Gardening',
      text: 'Planting and harvesting are at the heart of life here. Working with plants, vegetables, herbs, and trees gives people a chance to learn, participate, and enjoy the satisfaction of growing something together.',
    },
    {
      id: 'farming',
      title: 'Farming',
      text: 'The farm is being created as a center where people of all abilities can enjoy nature and take part in healthy, meaningful activity and work in a safe environment. Some visitors come for a day. Others return as part of an ongoing community.',
    },
    {
      id: 'holistic-health',
      title: 'Holistic Health',
      text: 'Workshops invite people to slow down, ground themselves in the earth, explore the healing power of herbs, learn practical nature-based skills, and enjoy meaningful time outdoors. Experiences may include harvesting fresh food, crafting herbal remedies, or simply soaking up the sunshine.',
    },
    {
      id: 'accessibility',
      title: 'Accessibility',
      text: 'The farm is being created as a wheelchair-accessible, safe space. Support helps build accessible gardens, an accessible farm vehicle, a greenhouse, and inclusive healing spaces so more people can take part.',
    },
    {
      id: 'inclusion',
      title: 'Inclusion',
      text: 'We welcome people of all abilities, their friends, families, and visitors. This is a place to create memories, forge friendships, and celebrate the dignity of every person.',
    },
    {
      id: 'community',
      title: 'Community Activities',
      text: 'We host fun, immersive activities for groups and families. Come to the farm, or we can come to you. We also make art, explore the wisdom of the seasons, and work directly with the earth.',
    },
    {
      id: 'education',
      title: 'Education & Healthy Living',
      text: 'We teach sustainability and nature-based wellbeing in ways developed specifically for the needs of our community. The goal is not performance. It is connection, wellbeing, and joy.',
    },
  ],
}

export const waysToHelp = {
  hero: {
    heading: 'Ways to Help',
    text: 'You can make a difference, with your time, your support, or a partnership that brings this vision to more people.',
  },
  volunteer: {
    heading: 'Volunteer With Us',
    intro: 'We need your help. Come visit and bring your energy and creativity.',
    paragraphs: [
      'The farm is an inclusive center where people of all abilities can enjoy nature, take part in healthy activities, and find meaningful opportunities in a safe environment.',
      'Bring yourself, a friend, or visitors looking for a special experience of the land. There is no complicated process listed yet. The best next step is simply to get in touch and tell us how you would like to help.',
    ],
    cta: 'Contact Us to Volunteer',
  },
  donate: {
    heading: 'Donate',
    text: 'Your donation helps create wheelchair-accessible gardens, a greenhouse, an accessible farm vehicle, and inclusive healing spaces where people of all abilities can connect with nature and the Land of Israel. Together, we are building a place of dignity, joy, and belonging.',
  },
  visit: {
    heading: 'Visit',
    text: "Come experience the farm in Yavne'el. We host activities for groups and families, and we welcome people of all abilities. If coming to the farm is difficult, we can also bring experiences to you.",
  },
  partnerships: {
    heading: 'Community Partnerships',
    text: 'We collaborate with organizations, community centers, schools, municipalities, and businesses to create inclusive healing spaces, accessible gardens, therapeutic programs, and nature-based experiences. Contact us to explore how we can build something meaningful together.',
  },
  other: {
    heading: 'Other Ways to Help',
    text: 'Share the farm with people who may need it. Introduce us to a school, community center, or group. Or simply write to us with an idea. If you care about inclusion and the land, there is a place for you here.',
  },
}

export const donate = {
  hero: {
    heading: 'Help Us Grow a Place Where Everyone Belongs',
    text: 'Every contribution helps us create a more accessible, welcoming and meaningful environment where people of all abilities can connect with nature, learn, contribute and grow.',
  },
  why: {
    heading: 'Why your support matters',
    paragraphs: [
      'Shivat Haminim Farm is being built as a place of dignity, joy, and belonging, a farm where people of all abilities can connect with nature and the Land of Israel.',
      'Donations help the farm grow accessible spaces, meaningful activity, and community experiences that can last for generations.',
    ],
  },
  amounts: [25, 50, 100, 250],
}

export const contact = {
  hero: {
    heading: 'Come Visit Us',
    text: "We would love to hear from you, whether you want to visit, volunteer, partner, or simply learn more about the farm.",
  },
}

export const eventsPage = {
  hero: {
    heading: 'Come Be Part of the Farm',
    text: 'Gatherings, group visits, and community activities will appear here as they are scheduled.',
  },
  empty:
    "New events are coming soon. Check back to see what's happening at the farm, or contact us to plan a visit for your group or family.",
}

export const seo = {
  home: {
    title: 'Shivat Haminim Farm | Growing People, Growing Possibilities',
    description:
      "An inclusive farm in Yavne'el where people of all abilities can connect with nature, learn, grow, and belong.",
  },
  about: {
    title: 'About Shivat Haminim Farm',
    description:
      'Learn why Shivat Haminim Farm exists, a welcoming, accessible farm created so people of all abilities can reconnect with nature, community, and wellbeing.',
  },
  whatWeDo: {
    title: 'What We Do | Shivat Haminim Farm',
    description:
      'Gardening, holistic health, accessible nature experiences, and community activities for people of all abilities.',
  },
  waysToHelp: {
    title: 'Ways to Help | Shivat Haminim Farm',
    description:
      'Volunteer, donate, visit, or partner with Shivat Haminim Farm to help grow a place where everyone belongs.',
  },
  gallery: {
    title: 'Gallery | Shivat Haminim Farm',
    description: 'A look at life, growing, and community at Shivat Haminim Farm.',
  },
  events: {
    title: 'Events | Shivat Haminim Farm',
    description: 'Upcoming gatherings and visits at Shivat Haminim Farm in Yavne\'el.',
  },
  donate: {
    title: 'Support Shivat Haminim Farm',
    description:
      'Help create wheelchair-accessible gardens, a greenhouse, accessible transportation, and inclusive healing spaces.',
  },
  contact: {
    title: 'Visit Shivat Haminim Farm',
    description:
      "Contact Shivat Haminim Farm in Yavne'el by phone, WhatsApp, or email, or send a message.",
  },
  privacy: {
    title: 'Privacy Policy | Shivat Haminim Farm',
    description: 'How Shivat Haminim Farm handles information shared through this website.',
  },
  terms: {
    title: 'Terms | Shivat Haminim Farm',
    description: 'Website terms for Shivat Haminim Farm.',
  },
}
