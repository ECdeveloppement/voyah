const carGallery = (folder: string, assets: string[]) =>
  assets.map((asset) => `/voyah-resources/images/car/${folder}/${asset}`)

const modelGalleryMap: Record<string, string[]> = {
  'passion-L.html': carGallery('passion-L', [
    '1920/sc_1.jpg',
    '1920/sc_2.jpg',
    '1920/sc_3.jpg',
    '1920/sc_4.jpg',
    '1920/sc_5.jpg',
    '1920/sc_7.jpg',
    '1920/sc_8.jpg',
    '1920/sc_9.jpg'
  ]),
  'passion.html': carGallery('passion', [
    '1920/fl01.jpg',
    '1920/fl02.jpg',
    '1920/fl03.jpg',
    '1920/fl04.jpg',
    '1920/fl05.jpg',
    '1920/fl06.jpg',
    '1920/fl10.jpg',
    '1920/fl14.jpg'
  ]),
  'titan.html': carGallery('titan', [
    '1920/sc_1.jpg',
    '1920/sc_2.jpg',
    '1920/sc_3.jpg',
    '1920/sc_4_1.jpg',
    '1920/sc_6_1.jpg',
    '1920/sc_8_1.jpg',
    '1920/sc_11.jpg',
    '1920/sc_20.jpg'
  ]),
  'titan_blackedition.html': carGallery('titan_blackedition', [
    '1920/sc_1.jpg',
    '1920/sc_2.jpg',
    '1920/sc_3_1.jpg',
    '1920/sc_8.jpg',
    '1920/sc_9_1.jpg',
    '1920/sc_15.jpg',
    '1920/sc_20.jpg',
    '1920/sc_23_1.jpg'
  ]),
  'titan_X8.html': carGallery('titan_X8', ['1920/sc_1.jpg']),
  'free+.html': carGallery('free+', [
    'img_01_1920.png',
    'img_02_01.png',
    'img_03_1920.png',
    'img_05_01.png',
    'img_06_01.png',
    'img_08.png',
    'img_11_01.png',
    'img_25_1920.png'
  ]),
  'free.html': carGallery('free', [
    'bg-free-h97D-1.jpg',
    'bg_free_pc4_0002_1920.jpg',
    'bg_free_pc15_0001_1920.jpg',
    'bg_free_pc20_0001_1920.jpg',
    'bg_free_pc21_0001.jpg',
    'bg_free_pc23_0001.jpg',
    'bg_free_pc28_0001_1920.jpg',
    'bg_free_pc29_0001.jpg'
  ]),
  'newCourage.html': carGallery('newCourage', [
    '1920/sc_1.jpg',
    '1920/sc_3.jpg',
    '1920/sc_4.jpg',
    '1920/sc_6.jpg',
    '1920/sc_8.jpg',
    '1920/sc_11.jpg',
    '1920/sc_14.jpg',
    '1920/sc_20.jpg'
  ]),
  'courage.html': carGallery('courage', [
    '1920/h37_pc01_0001.jpg',
    '1920/h37_pc02_0001.jpg',
    '1920/h37_pc03_0001.jpg',
    '1920/h37_pc04_0001.jpg',
    '1920/h37_pc06_0001.jpg',
    '1920/h37_pc10_0001.jpg',
    '1920/h37_pc14_0001.jpg',
    '1920/h37_pc17_0001.jpg'
  ]),
  'newDreamer26.html': carGallery('newDreamer26', [
    'kv_1920.jpg',
    'bg_02_1920.jpg',
    'sc_3.jpg',
    'bg_11_1920.jpg',
    'sc_5.jpg',
    'bg_16_1920.jpg',
    'bg_22_1920.jpg',
    'sc_5-2.jpg'
  ]),
  'newDreamer.html': carGallery('newDreamer', [
    'bg_2_n_1920.jpg',
    'h56c_pc03_0001.jpg',
    'h56c_pc03_0002.jpg',
    'h56c_pc08_banner01.jpg',
    'h56c_pc08_banner02.jpg',
    'bg_7_n_1920.jpg',
    'bg_swiper_3_1_n.jpg',
    'bg_4_n.jpg'
  ]),
  'dreamriver.html': carGallery('dreamriver', [
    'kv_1920.png',
    'sc_2.png',
    'sc_4.png',
    'sc_5.png',
    'sc_6.png',
    'sc_7.png',
    'sc_8.png'
  ]),
  'dreamer.html': carGallery('dreamer', [
    'bg_2_1920.jpg',
    'bg_6_1920.jpg',
    'bg_13_1920.jpg',
    'bg_17_1920.jpg',
    'bg_21_1920.jpg',
    'bg_24_1920.jpg',
    'bg_swiper_4_1.jpg',
    'bg_swiper_7_1.jpg'
  ])
}

export const getExpandedModelGallery = (slug: string, fallback: string[]) => modelGalleryMap[slug] ?? fallback
