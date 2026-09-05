import { farmImages } from './images'

const wix = (id, w = 1200, h = 900) =>
  `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_c,q_85,enc_avif,quality_auto/${id}`

export const galleryItems = [
  {
    id: 'g1',
    src: farmImages.hero,
    alt: 'Life at Shivat Haminim Farm',
    category: 'Farm Life',
  },
  {
    id: 'g2',
    src: farmImages.welcome,
    alt: 'Hands-on growing at the farm',
    category: 'Gardening',
  },
  {
    id: 'g3',
    src: farmImages.accessibility,
    alt: 'Time outdoors at Shivat Haminim Farm',
    category: 'Nature',
  },
  {
    id: 'g4',
    src: farmImages.community,
    alt: 'Community and togetherness at the farm',
    category: 'People',
  },
  {
    id: 'g5',
    src: farmImages.planting,
    alt: 'Planting and harvesting activities',
    category: 'Gardening',
  },
  {
    id: 'g6',
    src: farmImages.health,
    alt: 'Nature-based wellbeing at the farm',
    category: 'People',
  },
  {
    id: 'g7',
    src: farmImages.gardens,
    alt: 'Gardens and growing spaces',
    category: 'Farm Life',
  },
  {
    id: 'g8',
    src: farmImages.about,
    alt: 'The land around Shivat Haminim Farm',
    category: 'Nature',
  },
  {
    id: 'g9',
    src: farmImages.volunteer,
    alt: 'Helping and taking part at the farm',
    category: 'Volunteers',
  },
  {
    id: 'g10',
    src: wix('5b5285_07508006180c482c9c5267bb81e37561~mv2.jpg', 900, 1200),
    alt: 'A moment from farm life',
    category: 'Farm Life',
  },
  {
    id: 'g11',
    src: farmImages.cta,
    alt: 'Community gathering in nature',
    category: 'People',
  },
  {
    id: 'g12',
    src: farmImages.greenhouse,
    alt: 'Growing spaces at the farm',
    category: 'Gardening',
  },
]

export const galleryFilters = ['All', 'Farm Life', 'Gardening', 'People', 'Nature', 'Volunteers']
