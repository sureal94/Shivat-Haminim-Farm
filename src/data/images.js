const wix = (id, w = 1400, h = 1000) =>
  `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_c,q_85,enc_avif,quality_auto/${id}`

export const farmImages = {
  hero: wix('5b5285_bb2c2eb7a829402e9031f7996ec62bee~mv2.jpg', 2000, 1200),
  welcome: wix('5b5285_1deeac369a884a4ba1eac2004130bc2d~mv2.jpeg', 1200, 1400),
  accessibility: wix('5b5285_20b3748e0d0444d0ac58fa90292e9c3a~mv2.jpeg', 1400, 1100),
  gardens: wix('5b5285_6761630dc82344cfa5d22fa5880b454d~mv2.jpg', 1200, 900),
  greenhouse: wix('5b5285_6ac82e8f6b3f41b898f8c6c45be43c42~mv2.jpeg', 1200, 900),
  vehicle: wix('5b5285_d0de552f288e4cca82048360dd1c3e24~mv2.jpeg', 1200, 900),
  healing: wix('5b5285_e2b3e1ddceea4ac7b86a3677378b3386~mv2.jpeg', 1200, 900),
  cta: wix('5b5285_9fa4ed31279b444096cfd6214855c880~mv2.jpeg', 2000, 1100),
  about: wix('5b5285_f6e8b8f6a58446fe8a5e4b6db257207d~mv2.jpeg', 1400, 1100),
  health: wix('5b5285_803e59b267c04a70a96ff10f6b9d0426~mv2.jpeg', 1400, 1100),
  community: wix('5b5285_2c81660971d445e68073f32702ebae81~mv2.jpg', 1400, 1100),
  planting: wix('5b5285_707168c7bdb04fb2978c339da0459ddd~mv2.jpeg', 1400, 1100),
  volunteer: wix('5b5285_b20faba2ce3641d7be70ad257c90d290~mv2.jpg', 1400, 1100),
}

export const ogImage = farmImages.hero
