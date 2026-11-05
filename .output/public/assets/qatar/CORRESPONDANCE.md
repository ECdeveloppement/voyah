# Correspondance des assets `public/assets/qatar/*`

Table reliant chaque asset local au site de référence (voyahqatar.com) et à son emplacement dans ce projet Nuxt.

## Images — page d'accueil (`data/site.ts` → `homePage`, `components/home/HomeVideoHero.vue`)

| Asset local | Usage sur le site de référence | Emplacement projet |
|---|---|---|
| videos/main-video2-compress.mp4 | Vidéo hero plein écran | `HomeVideoHero` (défaut) |
| images/main-vover2.webp | Poster de la vidéo hero | `HomeVideoHero` (défaut) |
| images/free-home-1.webp | Carte modèle Free | `homePage.slides[0].image` |
| images/logo-free.webp | Wordmark Free sur la carte | `homePage.slides[0].logo` |
| images/dream-5cfd69cd.webp | Carte modèle Dream | `homePage.slides[1].image` |
| images/logo_dream.webp | Wordmark Dream sur la carte | `homePage.slides[1].logo` |

## Images/vidéos — page Free (`data/modelPages.ts` → `freePageContent`)

| Asset local | Usage référence | Emplacement projet |
|---|---|---|
| videos/voyah-free-318-compress.mp4 | Vidéo hero | `heroVideo` |
| images/voyah-free-open.webp | Poster hero | `heroPoster` |
| images/logo_free-5145b289…​.png.webp | Wordmark hero | `logo` |
| images/ZHAO9366-scaled-1.webp | Parallax | `sections[0]` |
| images/Panoramic-sunroof.webp | Ligne confort 1 | `comfortRows[0]` |
| images/Pantheon-Danner-High-fidelity-HiFi-sound-quality.webp | Ligne confort 2 | `comfortRows[1]` |
| images/First-class-seat.webp | Ligne confort 3 | `comfortRows[2]` |
| images/Full-gamut-sound-control-ambient-lamp-Infinite.webp | Ligne confort 4 | `comfortRows[3]` |
| images/Z9-scaled-1.webp | Bandeau CTA | `band cta` |
| images/1-1-5f1b03b1.webp | Carte « stationnement automatique » | `cards` intelligence |
| images/1-3-decf2b13.webp | Carte « vues 360° » | `cards` intelligence |
| images/full-electric-battery-…​.webp | Parallax | avant `cards` sécurité |
| images/2-1-6a7d1e0f.webp | Carte « BMS » | `cards` sécurité |
| images/2-2-ae53cd31.webp | Carte « PACK 5 couches » | `cards` sécurité |
| images/2-3-b03d5e7d.webp | Carte « paroi thermique 3D » | `cards` sécurité |
| images/Environment-friendly-water-based-materials-2.webp | Tuile hoverGrid | `hoverGrid[0]` |
| images/IAQS-Effective-isolation-of-pollution-2.webp | Tuile hoverGrid | `hoverGrid[1]` |
| images/Before-last-photo.webp | Bandeau CTA avant specs | `band cta` |
| images/Last-Photo.webp | Bandeau CTA final | `band cta` |

## Images/vidéos — page Dream (`data/modelPages.ts` → `dreamPageContent`)

| Asset local | Usage référence | Emplacement projet |
|---|---|---|
| videos/voyah-dream-compressed.mp4 | Vidéo hero | `heroVideo` |
| images/dream-hero-b81c5587…​.webp | Poster hero | `heroPoster` |
| images/logo_dream-0d008dae…​.webp | Wordmark hero | `logo` |
| images/1024-59e0cb2a.webp | Fond « Comfortable and luxury… » après le hero | `band intro` |
| images/2-75c7d16e.webp | Carte 1 (isolation sonore) | `cards[0]` |
| images/3-327043cc.webp | Carte 2 (Dynaudio) | `cards[1]` |
| images/7-bc6d8dde.webp | Carte 3 (sièges rang 2) | `cards[2]` |
| images/6-8e58e786.webp | Carte 4 (coffre) | `cards[3]` |
| images/dream-exterior-2.webp | Parallax fixed bg après les cartes | `parallax` |
| images/1-1_1024-50b09e74.webp | « Warm technology shows graceful quality » | `comfortRows[0]` |
| images/dream-intelligence.webp | « Redefine [Intelligent MPV] » | `comfortRows[1]` |
| images/safety-dream.webp | « Redefine [Safe MPV] » | `comfortRows[2]` |
| images/3-2-c1e84452.webp | « Redefine [Performance MPV] » | `comfortRows[3]` |
| images/3-1_1024-a8441745.webp | Parallax fixed bg avant Dual Power | `parallax` |
| images/1-1-a7576587.webp | Carte Dual Power « Super power » | `cards` (heading Dual Power) [0] |
| images/1-2-55eca2e5.webp | Carte Dual Power « High-efficiency » | `cards` [1] |
| images/1-2-eb23fb69.webp | Carte Dual Power « Battery safety » | `cards` [2] |
| images/Voyah-dream-top.webp | Parallax fixed bg avant CONFIGURATION | `parallax` |
| images/voyah-dream-home_2.webp | Parallax fixed bg après CONFIGURATION | `parallax` |
| images/1024-5a8008ee.webp | Bandeau final « Book a test drive » | `band cta` |

## Autres pages

| Asset local | Usage référence | Emplacement projet |
|---|---|---|
| images/pexels-jplenio-2424505.webp | Hero page « Book a Test Drive » | `site.ts` → `book-drive.html` `heroImage` |
| images/cropped-cropped-Voyah-removebg-preview-270x270-1.png | Favicon | `nuxt.config.ts` → `app.head` |

## Icônes (`icons/`)

| Fichier | Emplacement projet |
|---|---|
| voyah_logo.svg | `SiteHeader.vue` — logo de marque |
| language.svg | `SiteHeader.vue` — sélecteur de langue |
| facebook.svg / instagram.svg / tiktok-2.svg / whatsapp_logo.svg | `SocialLinks.vue` — footer (affichées seulement si l'URL du réseau est renseignée dans `data/dealer.ts`) |
| ar.svg / en.svg | Drapeaux — non utilisés (le switcher affiche le nom de langue ; pas de drapeau fr) |
| alwaha_logo-w.svg | Non applicable : logo du partenaire qatari (Al Waha). Le partenaire tunisien (AUTO HALL) reste le bloc texte de `dealerContact` |
| voyah_logo_2.svg / voyah_logo_3.svg | Variantes du logo — non utilisées |

## Assets présents mais sans usage sur les pages actuelles de la référence

`car_01.*.webp`, `high_13.*.webp`, `pexels-xavier-mestdag-*.webp`, `free-b6d95b20.webp`, `free-details-8-*.webp`, `voyah-free-2024-color-slider-green.webp`, `voyah-free-hero-home-*.webp`, `voyah-free-home_1/5.webp`, `voyah-dream-home_1/4.webp`, `1-2-b0119487.webp`, `1-59979a50/1-66dd4862/2-c5fe45f5/3-616a75fa/4-6a1eb8a4.webp`, `cropped-Voyah-removebg-preview-270x270-1.png` (sans le double « cropped- »), vidéos `main-video-compress.mp4`, `voyah-free-compress.mp4`, `voyah-free-hero-home-compressed.mp4` → versions anciennes ou variantes non référencées par le HTML actuel.

## Sections du repo conservées avec les assets officiels existants

Aucun : la page Dream n'utilise plus les visuels `/voyah-resources/images/car/dreamer/*` — tous les slots sont calés sur les assets de la référence (`bg_swiper_18_1`, `bg_swiper_22_*`, `bg_swiper_23_1`, `bg_13_1920`, `bg_24_1920` remplacés).
