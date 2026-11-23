import { defineEventHandler, setHeader } from 'file://E:/voyah/node_modules/h3/dist/index.mjs';
import { a as useRuntimeConfig } from '../_/nitro.mjs';
import { p as publicModelSlugs, a as modelDisplayName } from '../_/dealer.mjs';
import { n as normalizeSiteUrl, a as noindexSlugs } from '../_/seo.mjs';
import 'file://E:/voyah/node_modules/destr/dist/index.mjs';
import 'file://E:/voyah/node_modules/hookable/dist/index.mjs';
import 'file://E:/voyah/node_modules/ofetch/dist/node.mjs';
import 'file://E:/voyah/node_modules/node-mock-http/dist/index.mjs';
import 'file://E:/voyah/node_modules/unstorage/dist/index.mjs';
import 'file://E:/voyah/node_modules/unstorage/drivers/fs.mjs';
import 'file:///E:/voyah/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.js';
import 'file://E:/voyah/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://E:/voyah/node_modules/ohash/dist/index.mjs';
import 'file://E:/voyah/node_modules/klona/dist/index.mjs';
import 'file://E:/voyah/node_modules/defu/dist/defu.mjs';
import 'file://E:/voyah/node_modules/scule/dist/index.mjs';
import 'file://E:/voyah/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://E:/voyah/node_modules/pathe/dist/index.mjs';

const locales = [
  { code: "en", name: "English", dir: "ltr" },
  { code: "fr", name: "Fran\xE7ais", dir: "ltr" },
  { code: "ar", name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629", dir: "rtl" }
];
const isPublicModel = (slug) => !!slug && publicModelSlugs.includes(slug);
const t = (en, fr, ar) => ({ en, fr, ar });
const metric = (value, en, fr, ar) => ({
  value,
  label: t(en, fr, ar)
});
const block = (image, enTitle, frTitle, arTitle, enBody, frBody, arBody) => ({
  image,
  title: t(enTitle, frTitle, arTitle),
  body: t(enBody, frBody, arBody)
});
const modelFeatureTitles = [
  t("Exterior expression", "Expression ext\xE9rieure", "\u0627\u0644\u0647\u0648\u064A\u0629 \u0627\u0644\u062E\u0627\u0631\u062C\u064A\u0629"),
  t("Immersive cabin", "Habitacle immersif", "\u0645\u0642\u0635\u0648\u0631\u0629 \u063A\u0627\u0645\u0631\u0629"),
  t("Intelligent travel", "Voyage intelligent", "\u062A\u0646\u0642\u0644 \u0630\u0643\u064A")
];
const modelFeatureOverrides = {
  "titan.html": [
    t("Winged welcome", "Accueil \xE0 ailes", "\u062A\u0631\u062D\u064A\u0628 \u062C\u0646\u0627\u062D\u064A"),
    t("Smart entry lighting", "\xC9clairage d\u2019entr\xE9e intelligent", "\u0625\u0636\u0627\u0621\u0629 \u062F\u062E\u0648\u0644 \u0630\u0643\u064A\u0629"),
    t("Quiet cabin luxury", "Luxe d\u2019habitacle silencieux", "\u0641\u062E\u0627\u0645\u0629 \u0645\u0642\u0635\u0648\u0631\u0629 \u0647\u0627\u062F\u0626\u0629")
  ],
  "Dream": [
    t("Ceremonial MPV presence", "Pr\xE9sence MPV c\xE9r\xE9monielle", "\u062D\u0636\u0648\u0631 MPV \u0627\u062D\u062A\u0641\u0627\u0644\u064A"),
    t("AI cloud-seat comfort", "Confort des si\xE8ges cloud IA", "\u0631\u0627\u062D\u0629 \u0627\u0644\u0645\u0642\u0627\u0639\u062F \u0627\u0644\u0633\u062D\u0627\u0628\u064A\u0629 \u0627\u0644\u0630\u0643\u064A\u0629"),
    t("Executive hospitality", "Hospitalit\xE9 ex\xE9cutive", "\u0636\u064A\u0627\u0641\u0629 \u062A\u0646\u0641\u064A\u0630\u064A\u0629")
  ],
  "passion-L.html": [
    t("Oriental flagship aesthetics", "Esth\xE9tique phare orientale", "\u062C\u0645\u0627\u0644\u064A\u0627\u062A \u0634\u0631\u0642\u064A\u0629 \u0631\u0627\u0626\u062F\u0629"),
    t("All-dimensional comfort cabin", "Habitacle confort int\xE9gral", "\u0645\u0642\u0635\u0648\u0631\u0629 \u0631\u0627\u062D\u0629 \u0634\u0627\u0645\u0644\u0629"),
    t("HarmonySpace cockpit", "Cockpit HarmonySpace", "\u0645\u0642\u0635\u0648\u0631\u0629 HarmonySpace")
  ],
  "Passion": [
    t("Streamlined sedan stance", "Posture berline \xE9lanc\xE9e", "\u0647\u064A\u0626\u0629 \u0633\u064A\u062F\u0627\u0646 \u0627\u0646\u0633\u064A\u0627\u0628\u064A\u0629"),
    t("Executive digital cabin", "Habitacle num\xE9rique ex\xE9cutif", "\u0645\u0642\u0635\u0648\u0631\u0629 \u0631\u0642\u0645\u064A\u0629 \u062A\u0646\u0641\u064A\u0630\u064A\u0629"),
    t("Composed touring comfort", "Confort grand tourisme", "\u0631\u0627\u062D\u0629 \u0631\u062D\u0644\u0627\u062A \u0637\u0648\u064A\u0644\u0629")
  ],
  "titan_blackedition.html": [
    t("Black flagship styling", "Style phare noir", "\u062A\u0635\u0645\u064A\u0645 \u0631\u0627\u0626\u062F \u0623\u0633\u0648\u062F"),
    t("Dark premium cabin", "Habitacle premium sombre", "\u0645\u0642\u0635\u0648\u0631\u0629 \u0641\u0627\u062E\u0631\u0629 \u062F\u0627\u0643\u0646\u0629"),
    t("Stealth confidence", "Confiance furtive", "\u062B\u0642\u0629 \u0647\u0627\u062F\u0626\u0629")
  ],
  "titan_X8.html": [
    t("Expanded family SUV", "SUV familial \xE9tendu", "SUV \u0639\u0627\u0626\u0644\u064A\u0629 \u0645\u0648\u0633\u0639\u0629"),
    t("Three-row usability", "Polyvalence trois rangs", "\u0639\u0645\u0644\u064A\u0629 \u0628\u062B\u0644\u0627\u062B\u0629 \u0635\u0641\u0648\u0641"),
    t("Long-trip confidence", "Confiance longue distance", "\u062B\u0642\u0629 \u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0637\u0648\u064A\u0644\u0629")
  ],
  "free+.html": [
    t("Urban light-and-shadow aesthetics", "Esth\xE9tique urbaine d\u2019ombres et de lumi\xE8re", "\u062C\u0645\u0627\u0644\u064A\u0627\u062A \u0627\u0644\u0636\u0648\u0621 \u0648\u0627\u0644\u0638\u0644 \u0627\u0644\u062D\u0636\u0631\u064A\u0629"),
    t("Free Cabin 2.0", "Habitacle Free 2.0", "\u0645\u0642\u0635\u0648\u0631\u0629 Free 2.0"),
    t("HarmonySpace 5 cockpit", "Cockpit HarmonySpace 5", "\u0645\u0642\u0635\u0648\u0631\u0629 HarmonySpace 5")
  ],
  "Free": [
    t("Long-range crossover stance", "Posture crossover longue autonomie", "\u062D\u0636\u0648\u0631 \u0643\u0631\u0648\u0633 \u0623\u0648\u0641\u0631 \u0628\u0639\u064A\u062F \u0627\u0644\u0645\u062F\u0649"),
    t("Touring cabin comfort", "Confort de voyage", "\u0631\u0627\u062D\u0629 \u0627\u0644\u0633\u0641\u0631"),
    t("Daily versatility", "Polyvalence quotidienne", "\u062A\u0646\u0648\u0639 \u064A\u0648\u0645\u064A")
  ],
  "newCourage.html": [
    t("Original aesthetics design", "Design esth\xE9tique original", "\u062A\u0635\u0645\u064A\u0645 \u062C\u0645\u0627\u0644\u064A \u0623\u0635\u0644\u064A"),
    t("Electric power at full scale", "Puissance \xE9lectrique \xE0 pleine \xE9chelle", "\u0637\u0627\u0642\u0629 \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0643\u0627\u0645\u0644\u0629"),
    t("Smart family cockpit", "Cockpit familial intelligent", "\u0645\u0642\u0635\u0648\u0631\u0629 \u0639\u0627\u0626\u0644\u064A\u0629 \u0630\u0643\u064A\u0629")
  ],
  "newDreamer.html": [
    t("Panoramic luxury exterior", "Ext\xE9rieur luxe panoramique", "\u062E\u0627\u0631\u062C\u064A\u0629 \u0641\u0627\u062E\u0631\u0629 \u0628\u0627\u0646\u0648\u0631\u0627\u0645\u064A\u0629"),
    t("Executive lounge cabin", "Habitacle salon ex\xE9cutif", "\u0645\u0642\u0635\u0648\u0631\u0629 \u0635\u0627\u0644\u0648\u0646 \u062A\u0646\u0641\u064A\u0630\u064A"),
    t("Harmony intelligent travel", "Voyage intelligent Harmony", "\u0633\u0641\u0631 \u0630\u0643\u064A Harmony")
  ],
  "dreamer-champion.html": [
    t("Champion edition presence", "Pr\xE9sence d\u2019\xE9dition Champion", "\u062D\u0636\u0648\u0631 \u0625\u0635\u062F\u0627\u0631 Champion"),
    t("Executive lounge comfort", "Confort lounge ex\xE9cutif", "\u0631\u0627\u062D\u0629 \u0635\u0627\u0644\u0648\u0646 \u062A\u0646\u0641\u064A\u0630\u064A"),
    t("Curated premium hospitality", "Hospitalit\xE9 premium soign\xE9e", "\u0636\u064A\u0627\u0641\u0629 \u0641\u0627\u062E\u0631\u0629 \u0645\u0646\u062A\u0642\u0627\u0629")
  ],
  "dreamriver.html": [
    t("Scenic edition presence", "Pr\xE9sence d\u2019\xE9dition panoramique", "\u062D\u0636\u0648\u0631 \u0625\u0635\u062F\u0627\u0631 \u0645\u0634\u0647\u062F\u064A"),
    t("Warm lounge cabin", "Cabine salon chaleureuse", "\u0645\u0642\u0635\u0648\u0631\u0629 \u0635\u0627\u0644\u0648\u0646 \u062F\u0627\u0641\u0626\u0629"),
    t("Shared journey calm", "S\xE9r\xE9nit\xE9 de voyage", "\u0647\u062F\u0648\u0621 \u0627\u0644\u0633\u0641\u0631")
  ],
  "dreamer.html": [
    t("Luxury MPV presence", "Pr\xE9sence MPV de luxe", "\u062D\u0636\u0648\u0631 MPV \u0641\u0627\u062E\u0631\u0629"),
    t("Rear cabin comfort", "Confort arri\xE8re", "\u0631\u0627\u062D\u0629 \u0627\u0644\u0635\u0641 \u0627\u0644\u062E\u0644\u0641\u064A"),
    t("Smart family cockpit", "Cockpit familial intelligent", "\u0645\u0642\u0635\u0648\u0631\u0629 \u0639\u0627\u0626\u0644\u064A\u0629 \u0630\u0643\u064A\u0629")
  ],
  "Courage": [
    t("Original aesthetics design", "Design esth\xE9tique original", "\u062A\u0635\u0645\u064A\u0645 \u062C\u0645\u0627\u0644\u064A \u0623\u0635\u0644\u064A"),
    t("Electric range and efficiency", "Autonomie et efficience \xE9lectriques", "\u0645\u062F\u0649 \u0648\u0643\u0641\u0627\u0621\u0629 \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629"),
    t("Family comfort cockpit", "Cockpit confort familial", "\u0645\u0642\u0635\u0648\u0631\u0629 \u0631\u0627\u062D\u0629 \u0639\u0627\u0626\u0644\u064A\u0629")
  ]
};
const modelFeatureBodyOverrides = {
  "titan.html": [
    t(
      "Titan starts with a ceremonial welcome and winged hardware details that make the flagship feel instantly special.",
      "Titan s\u2019ouvre par un accueil c\xE9r\xE9moniel et des d\xE9tails mat\xE9riels \xE0 ailes d\xE9ploy\xE9es qui rendent ce flagship imm\xE9diatement distinctif.",
      "\u062A\u0628\u062F\u0623 Titan \u0628\u062A\u0631\u062D\u064A\u0628 \u0627\u062D\u062A\u0641\u0627\u0644\u064A \u0648\u062A\u0641\u0627\u0635\u064A\u0644 \u062C\u0646\u0627\u062D\u064A\u0629 \u062A\u062C\u0639\u0644 \u0627\u0644\u0625\u062D\u0633\u0627\u0633 \u0627\u0644\u0631\u0627\u0626\u062F \u0645\u0645\u064A\u0632\u064B\u0627 \u0645\u0646\u0630 \u0627\u0644\u0644\u062D\u0638\u0629 \u0627\u0644\u0623\u0648\u0644\u0649."
    ),
    t(
      "Projection lighting, smart entry scenes, and electric steering memory lift the interaction flow into a more executive tone.",
      "L\u2019\xE9clairage de projection, les sc\xE8nes d\u2019entr\xE9e intelligentes et la m\xE9moire de direction \xE9lectrique \xE9l\xE8vent l\u2019exp\xE9rience vers un ton plus ex\xE9cutif.",
      "\u062A\u0631\u0641\u0639 \u0625\u0636\u0627\u0621\u0629 \u0627\u0644\u0639\u0631\u0636 \u0648\u0645\u0634\u0627\u0647\u062F \u0627\u0644\u062F\u062E\u0648\u0644 \u0627\u0644\u0630\u0643\u064A\u0629 \u0648\u0630\u0627\u0643\u0631\u0629 \u0627\u0644\u062A\u0648\u062C\u064A\u0647 \u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0627\u0644\u062A\u062C\u0631\u0628\u0629 \u0625\u0644\u0649 \u0637\u0627\u0628\u0639 \u062A\u0646\u0641\u064A\u0630\u064A \u0623\u0643\u062B\u0631."
    ),
    t(
      "Quiet-cabin tuning, immersive sound, and privacy features complete the Titan story with calm luxury.",
      "Le r\xE9glage de l\u2019habitacle silencieux, le son immersif et les fonctions d\u2019intimit\xE9 compl\xE8tent l\u2019histoire Titan avec une luxe apais\xE9.",
      "\u062A\u064F\u0643\u0645\u0644 \u0645\u0639\u0627\u064A\u0631\u0629 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0644\u0647\u0627\u062F\u0626\u0629 \u0648\u0627\u0644\u0635\u0648\u062A \u0627\u0644\u063A\u0627\u0645\u0631 \u0648\u0645\u064A\u0632\u0627\u062A \u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629 \u0642\u0635\u0629 Titan \u0628\u0641\u062E\u0627\u0645\u0629 \u0647\u0627\u062F\u0626\u0629."
    )
  ],
  "Dream": [
    t(
      "Dreamer 26 presents a ceremonial MPV presence with lounge-like proportions and a premium family-first identity.",
      "Dreamer 26 pr\xE9sente une pr\xE9sence MPV c\xE9r\xE9monielle, des proportions fa\xE7on salon et une identit\xE9 premium centr\xE9e sur la famille.",
      "\u062A\u0642\u062F\u0645 Dreamer 26 \u062D\u0636\u0648\u0631 MPV \u0627\u062D\u062A\u0641\u0627\u0644\u064A\u064B\u0627 \u0648\u062A\u0646\u0627\u0633\u0628\u0627\u062A \u0628\u0637\u0627\u0628\u0639 \u0627\u0644\u0635\u0627\u0644\u0648\u0646 \u0648\u0647\u0648\u064A\u0629 \u0641\u0627\u062E\u0631\u0629 \u062A\u0631\u0643\u0632 \u0639\u0644\u0649 \u0627\u0644\u0639\u0627\u0626\u0644\u0629."
    ),
    t(
      "Fast charging and long-range composure keep large-cabin travel calm and effortless.",
      "La charge rapide et la s\xE9r\xE9nit\xE9 longue distance rendent le voyage dans le grand habitacle calme et sans effort.",
      "\u064A\u062C\u0639\u0644 \u0627\u0644\u0634\u062D\u0646 \u0627\u0644\u0633\u0631\u064A\u0639 \u0648\u0627\u0644\u0627\u062A\u0632\u0627\u0646 \u0641\u064A \u0627\u0644\u0645\u062F\u0649 \u0627\u0644\u0637\u0648\u064A\u0644 \u0627\u0644\u0633\u0641\u0631 \u062F\u0627\u062E\u0644 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0644\u0643\u0628\u064A\u0631\u0629 \u0647\u0627\u062F\u0626\u064B\u0627 \u0648\u0633\u0647\u0644\u064B\u0627."
    ),
    t(
      "Huawei Qiankun driving, Harmony cockpit integration, and AI interaction turn the cabin into an executive lounge.",
      "La conduite Huawei Qiankun, l\u2019int\xE9gration du cockpit Harmony et l\u2019interaction IA transforment l\u2019habitacle en salon ex\xE9cutif.",
      "\u062A\u062D\u0648\u0644 \u0642\u064A\u0627\u062F\u0629 Huawei Qiankun \u0648\u062A\u0643\u0627\u0645\u0644 \u0645\u0642\u0635\u0648\u0631\u0629 Harmony \u0648\u062A\u0641\u0627\u0639\u0644 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0625\u0644\u0649 \u0635\u0627\u0644\u0648\u0646 \u062A\u0646\u0641\u064A\u0630\u064A."
    )
  ],
  "passion-L.html": [
    t(
      "Passion L brings ceremonial front graphics and an elongated sedan stance into a composed executive look.",
      "Passion L associe une face avant c\xE9r\xE9monielle et une posture de berline allong\xE9e pour cr\xE9er une allure ex\xE9cutive pos\xE9e.",
      "\u062A\u062C\u0645\u0639 Passion L \u0628\u064A\u0646 \u0627\u0644\u0648\u0627\u062C\u0647\u0629 \u0627\u0644\u0627\u062D\u062A\u0641\u0627\u0644\u064A\u0629 \u0648\u0647\u064A\u0626\u0629 \u0627\u0644\u0633\u064A\u062F\u0627\u0646 \u0627\u0644\u0637\u0648\u064A\u0644\u0629 \u0644\u0625\u0638\u0647\u0627\u0631 \u062D\u0636\u0648\u0631 \u062A\u0646\u0641\u064A\u0630\u064A \u0645\u062A\u0632\u0646."
    ),
    t(
      "The long-wheelbase cabin emphasizes rear comfort, calm seating, and premium space for both driver and passengers.",
      "L\u2019habitacle \xE0 empattement long met l\u2019accent sur le confort arri\xE8re, la s\xE9r\xE9nit\xE9 des si\xE8ges et l\u2019espace premium pour le conducteur comme pour les passagers.",
      "\u062A\u0631\u0643\u0632 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0630\u0627\u062A \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0639\u062C\u0644\u0627\u062A \u0627\u0644\u0637\u0648\u064A\u0644\u0629 \u0639\u0644\u0649 \u0631\u0627\u062D\u0629 \u0627\u0644\u062E\u0644\u0641\u060C \u0648\u0647\u062F\u0648\u0621 \u0627\u0644\u0645\u0642\u0627\u0639\u062F\u060C \u0648\u0627\u0644\u0645\u0633\u0627\u062D\u0629 \u0627\u0644\u0641\u0627\u062E\u0631\u0629 \u0644\u0644\u0633\u0627\u0626\u0642 \u0648\u0627\u0644\u0631\u0643\u0627\u0628."
    ),
    t(
      "HarmonySpace centers the digital cockpit with a clear display, seamless ecosystem flow, and calmer interaction.",
      "HarmonySpace place le cockpit num\xE9rique au centre avec un affichage clair, un \xE9cosyst\xE8me fluide et une interaction plus apais\xE9e.",
      "\u062A\u0636\u0639 HarmonySpace \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0644\u0631\u0642\u0645\u064A\u0629 \u0641\u064A \u0627\u0644\u0645\u0631\u0643\u0632 \u0639\u0628\u0631 \u0634\u0627\u0634\u0629 \u0648\u0627\u0636\u062D\u0629 \u0648\u062A\u062F\u0641\u0642 \u0628\u064A\u0626\u064A \u0633\u0644\u0633 \u0648\u062A\u0641\u0627\u0639\u0644 \u0623\u0643\u062B\u0631 \u0647\u062F\u0648\u0621\u064B\u0627."
    )
  ],
  "Passion": [
    t(
      "Passion brings a cleaner sedan silhouette and a more restrained premium tone into the model page rhythm.",
      "Passion apporte une silhouette de berline plus pure et un ton premium plus retenu dans le rythme de la page mod\xE8le.",
      "\u062A\u062C\u0644\u0628 Passion \u0647\u064A\u0626\u0629 \u0633\u064A\u062F\u0627\u0646 \u0623\u0646\u0642\u0649 \u0648\u0646\u0628\u0631\u0629 \u0641\u0627\u062E\u0631\u0629 \u0623\u0643\u062B\u0631 \u0647\u062F\u0648\u0621\u064B\u0627 \u0625\u0644\u0649 \u0625\u064A\u0642\u0627\u0639 \u0635\u0641\u062D\u0629 \u0627\u0644\u0637\u0631\u0627\u0632."
    ),
    t(
      "The digital cabin keeps the route focused on a calm executive feel with everyday comfort and connected control.",
      "L\u2019habitacle num\xE9rique maintient le parcours sur une sensation ex\xE9cutive calme avec confort quotidien et contr\xF4le connect\xE9.",
      "\u062A\u062D\u0627\u0641\u0638 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0644\u0631\u0642\u0645\u064A\u0629 \u0639\u0644\u0649 \u0645\u0633\u0627\u0631 \u0647\u0627\u062F\u0626 \u0628\u0637\u0627\u0628\u0639 \u062A\u0646\u0641\u064A\u0630\u064A \u0645\u0639 \u0631\u0627\u062D\u0629 \u064A\u0648\u0645\u064A\u0629 \u0648\u062A\u062D\u0643\u0645 \u0645\u062A\u0635\u0644."
    ),
    t(
      "Touring composure, chassis tuning, and long-distance confidence complete the sedan with a quieter luxury message.",
      "La s\xE9r\xE9nit\xE9 de grand tourisme, le r\xE9glage ch\xE2ssis et la confiance longue distance compl\xE8tent la berline avec un message de luxe plus discret.",
      "\u062A\u064F\u0643\u0645\u0644 \u0627\u0644\u062B\u0642\u0629 \u0641\u064A \u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0637\u0648\u064A\u0644\u0629 \u0648\u0645\u0639\u0627\u064A\u0631\u0629 \u0627\u0644\u0647\u064A\u0643\u0644 \u0648\u0647\u062F\u0648\u0621 \u0627\u0644\u0633\u0641\u0631 \u0647\u0630\u0647 \u0627\u0644\u0633\u064A\u062F\u0627\u0646 \u0628\u0631\u0633\u0627\u0644\u0629 \u0641\u062E\u0627\u0645\u0629 \u0623\u0643\u062B\u0631 \u0647\u062F\u0648\u0621\u064B\u0627."
    )
  ],
  "titan_blackedition.html": [
    t(
      "The Black Edition route begins with darker exterior graphics and a more dramatic flagship posture.",
      "Le parcours Black Edition commence avec des graphismes ext\xE9rieurs plus sombres et une posture phare plus dramatique.",
      "\u064A\u0628\u062F\u0623 \u0645\u0633\u0627\u0631 Black Edition \u0628\u0631\u0633\u0648\u0645\u0627\u062A \u062E\u0627\u0631\u062C\u064A\u0629 \u0623\u0643\u062B\u0631 \u0642\u062A\u0627\u0645\u0629 \u0648\u062D\u0636\u0648\u0631 \u0631\u0627\u0626\u062F \u0623\u0643\u062B\u0631 \u062F\u0631\u0627\u0645\u064A\u0629."
    ),
    t(
      "Premium dark materials and a restrained cabin mood keep the edition aligned with a stealth-luxury identity.",
      "Des mat\xE9riaux sombres premium et une ambiance cabine retenue maintiennent l\u2019\xE9dition dans une identit\xE9 de luxe furtif.",
      "\u062A\u062D\u0627\u0641\u0638 \u0627\u0644\u062E\u0627\u0645\u0627\u062A \u0627\u0644\u062F\u0627\u0643\u0646\u0629 \u0627\u0644\u0641\u0627\u062E\u0631\u0629 \u0648\u0623\u062C\u0648\u0627\u0621 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0644\u0647\u0627\u062F\u0626\u0629 \u0639\u0644\u0649 \u0647\u0648\u064A\u0629 \u0627\u0644\u0641\u062E\u0627\u0645\u0629 \u0627\u0644\u0647\u0627\u062F\u0626\u0629 \u0644\u0647\u0630\u0647 \u0627\u0644\u0646\u0633\u062E\u0629."
    ),
    t(
      "Assisted driving and safety structure finish the page as a complete Titan-family flagship, not a style package.",
      "La conduite assist\xE9e et la structure de s\xE9curit\xE9 concluent la page comme un vrai flagship de la famille Titan, pas comme un simple pack stylistique.",
      "\u062A\u062E\u062A\u062A\u0645 \u0627\u0644\u0642\u064A\u0627\u062F\u0629 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0648\u0628\u0646\u064A\u0629 \u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u0627\u0644\u0635\u0641\u062D\u0629 \u0628\u0648\u0635\u0641\u0647\u0627 \u0637\u0631\u0627\u0632\u064B\u0627 \u0631\u0627\u0626\u062F\u064B\u0627 \u0643\u0627\u0645\u0644\u064B\u0627 \u0644\u0639\u0627\u0626\u0644\u0629 Titan \u0644\u0627 \u0645\u062C\u0631\u062F \u062D\u0632\u0645\u0629 \u0645\u0638\u0647\u0631."
    )
  ],
  "titan_X8.html": [
    t(
      "Titan X8 starts with a larger family SUV statement and a practical three-row presence.",
      "Titan X8 commence par une d\xE9claration de grand SUV familial et une pr\xE9sence pratique \xE0 trois rangs.",
      "\u064A\u0628\u062F\u0623 Titan X8 \u0628\u062D\u0636\u0648\u0631 SUV \u0639\u0627\u0626\u0644\u064A\u0629 \u0623\u0643\u0628\u0631 \u0648\u062A\u0648\u0632\u064A\u0639 \u0639\u0645\u0644\u064A \u0628\u062B\u0644\u0627\u062B\u0629 \u0635\u0641\u0648\u0641."
    ),
    t(
      "The cabin chapter emphasizes access, space, and comfort for real multi-person travel.",
      "Le chapitre habitacle met l\u2019accent sur l\u2019acc\xE8s, l\u2019espace et le confort pour les vrais trajets \xE0 plusieurs.",
      "\u064A\u0631\u0643\u0632 \u0641\u0635\u0644 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0639\u0644\u0649 \u0633\u0647\u0648\u0644\u0629 \u0627\u0644\u062F\u062E\u0648\u0644 \u0648\u0627\u0644\u0645\u0633\u0627\u062D\u0629 \u0648\u0627\u0644\u0631\u0627\u062D\u0629 \u0644\u0631\u062D\u0644\u0627\u062A \u0645\u062A\u0639\u062F\u062F\u0629 \u0627\u0644\u0631\u0643\u0627\u0628."
    ),
    t(
      "Road-trip composure and safety close the route with the same flagship confidence as the wider Titan family.",
      "La s\xE9r\xE9nit\xE9 sur route et la s\xE9curit\xE9 referment le parcours avec la m\xEAme assurance phare que la famille Titan \xE9largie.",
      "\u062A\u063A\u0644\u0642 \u0627\u0644\u062B\u0642\u0629 \u0641\u064A \u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0637\u0648\u064A\u0644\u0629 \u0648\u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u0627\u0644\u0645\u0633\u0627\u0631 \u0628\u0646\u0641\u0633 \u0627\u0644\u062B\u0642\u0629 \u0627\u0644\u0631\u0627\u0626\u062F\u0629 \u0644\u0639\u0627\u0626\u0644\u0629 Titan \u0627\u0644\u0623\u0648\u0633\u0639."
    )
  ],
  "free+.html": [
    t(
      "FREE+ frames its identity through urban light-and-shadow aesthetics, athletic SUV proportions, and a sharper premium presence for city life.",
      "FREE+ affirme son identit\xE9 par une esth\xE9tique urbaine d\u2019ombres et de lumi\xE8re, des proportions de SUV athl\xE9tiques et une pr\xE9sence premium plus aff\xFBt\xE9e pour la ville.",
      "\u062A\u0631\u0633\u0645 FREE+ \u0647\u0648\u064A\u062A\u0647\u0627 \u0639\u0628\u0631 \u062C\u0645\u0627\u0644\u064A\u0627\u062A \u0627\u0644\u0636\u0648\u0621 \u0648\u0627\u0644\u0638\u0644 \u0627\u0644\u062D\u0636\u0631\u064A\u0629 \u0648\u062A\u0646\u0627\u0633\u0628\u0627\u062A SUV \u0627\u0644\u0631\u064A\u0627\u0636\u064A\u0629 \u0648\u062D\u0636\u0648\u0631 \u0641\u0627\u062E\u0631 \u0623\u0648\u0636\u062D \u0644\u0644\u062D\u064A\u0627\u0629 \u0627\u0644\u0645\u062F\u0646\u064A\u0629."
    ),
    t(
      "Free Cabin 2.0 focuses on openness, seating comfort, and practical room for daily use while preserving a premium digital character.",
      "Free Cabin 2.0 met l\u2019accent sur l\u2019ouverture, le confort d\u2019assise et l\u2019espace pratique au quotidien tout en conservant un caract\xE8re num\xE9rique premium.",
      "\u062A\u0631\u0643\u0632 Free Cabin 2.0 \u0639\u0644\u0649 \u0627\u0644\u0627\u0646\u0641\u062A\u0627\u062D \u0648\u0631\u0627\u062D\u0629 \u0627\u0644\u0645\u0642\u0627\u0639\u062F \u0648\u0627\u0644\u0645\u0633\u0627\u062D\u0629 \u0627\u0644\u0639\u0645\u0644\u064A\u0629 \u0644\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u064A\u0648\u0645\u064A \u0645\u0639 \u0627\u0644\u062D\u0641\u0627\u0638 \u0639\u0644\u0649 \u0637\u0627\u0628\u0639 \u0631\u0642\u0645\u064A \u0641\u0627\u062E\u0631."
    ),
    t(
      "HarmonySpace 5 extends the intelligent cockpit experience with a clearer interface, connected assistance, and a more natural urban rhythm.",
      "HarmonySpace 5 prolonge l\u2019exp\xE9rience du cockpit intelligent gr\xE2ce \xE0 une interface plus claire, une assistance connect\xE9e et un rythme urbain plus naturel.",
      "\u062A\u0648\u0633\u0639 HarmonySpace 5 \u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0644\u0630\u0643\u064A\u0629 \u0639\u0628\u0631 \u0648\u0627\u062C\u0647\u0629 \u0623\u0648\u0636\u062D \u0648\u0645\u0633\u0627\u0639\u062F\u0629 \u0645\u062A\u0635\u0644\u0629 \u0648\u0625\u064A\u0642\u0627\u0639 \u062D\u0636\u0631\u064A \u0623\u0643\u062B\u0631 \u0637\u0628\u064A\u0639\u064A\u0629."
    )
  ],
  "Free": [
    t(
      "FREE 318 opens with long-range crossover character and a calmer touring stance.",
      "FREE 318 s\u2019ouvre sur un caract\xE8re de crossover longue autonomie et une posture de voyage plus calme.",
      "\u062A\u0628\u062F\u0623 FREE 318 \u0628\u0637\u0627\u0628\u0639 \u0643\u0631\u0648\u0633 \u0623\u0648\u0641\u0631 \u0628\u0639\u064A\u062F \u0627\u0644\u0645\u062F\u0649 \u0648\u062D\u0636\u0648\u0631 \u0633\u0641\u0631 \u0623\u0643\u062B\u0631 \u0647\u062F\u0648\u0621\u064B\u0627."
    ),
    t(
      "The comfort chapter leans into relaxed seating, elevated visibility, and everyday usability.",
      "Le chapitre confort met l\u2019accent sur des si\xE8ges d\xE9tendus, une visibilit\xE9 sur\xE9lev\xE9e et une vraie praticit\xE9 au quotidien.",
      "\u064A\u0631\u0643\u0632 \u0641\u0635\u0644 \u0627\u0644\u0631\u0627\u062D\u0629 \u0639\u0644\u0649 \u0627\u0644\u062C\u0644\u0633\u0629 \u0627\u0644\u0645\u0631\u064A\u062D\u0629 \u0648\u0627\u0644\u0631\u0624\u064A\u0629 \u0627\u0644\u0645\u0631\u062A\u0641\u0639\u0629 \u0648\u0627\u0644\u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u064A\u0648\u0645\u064A\u0629."
    ),
    t(
      "The model closes with practical premium confidence that keeps the page feeling like a real touring crossover.",
      "Le mod\xE8le se conclut par une confiance premium pragmatique qui conserve \xE0 la page l\u2019allure d\u2019un vrai crossover de voyage.",
      "\u064A\u064F\u062E\u062A\u062A\u0645 \u0627\u0644\u0637\u0631\u0627\u0632 \u0628\u062B\u0642\u0629 \u0639\u0645\u0644\u064A\u0629 \u0641\u0627\u062E\u0631\u0629 \u062A\u062C\u0639\u0644 \u0627\u0644\u0635\u0641\u062D\u0629 \u062A\u0628\u062F\u0648 \u0643\u0623\u0646\u0647\u0627 \u0635\u0641\u062D\u0629 \u0643\u0631\u0648\u0633 \u0623\u0648\u0641\u0631 \u0644\u0644\u0631\u062D\u0644\u0627\u062A \u0641\u0639\u0644\u064B\u0627."
    )
  ],
  "newCourage.html": [
    t(
      "The new Courage starts with original aesthetics and a cleaner urban SUV language built around family warmth.",
      "Le nouveau Courage commence par une esth\xE9tique originale et un langage de SUV urbain plus pur, pens\xE9 autour de la chaleur familiale.",
      "\u062A\u0628\u062F\u0623 Courage \u0627\u0644\u062C\u062F\u064A\u062F\u0629 \u0628\u062C\u0645\u0627\u0644\u064A\u0627\u062A \u0623\u0635\u0644\u064A\u0629 \u0648\u0644\u063A\u0629 SUV \u062D\u0636\u0631\u064A\u0629 \u0623\u0646\u0642\u0649 \u0645\u0628\u0646\u064A\u0629 \u062D\u0648\u0644 \u062F\u0641\u0621 \u0627\u0644\u0639\u0627\u0626\u0644\u0629."
    ),
    t(
      "It becomes an efficient electric home through long range, a large battery pack, and 800V architecture.",
      "Elle devient un foyer \xE9lectrique efficient gr\xE2ce \xE0 une grande autonomie, une batterie de forte capacit\xE9 et une architecture 800V.",
      "\u0648\u062A\u0635\u0628\u062D \u0645\u0646\u0632\u0644\u064B\u0627 \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u064B\u0627 \u0641\u0639\u0651\u0627\u0644\u064B\u0627 \u0628\u0641\u0636\u0644 \u0627\u0644\u0645\u062F\u0649 \u0627\u0644\u0637\u0648\u064A\u0644 \u0648\u062D\u0632\u0645\u0629 \u0627\u0644\u0628\u0637\u0627\u0631\u064A\u0629 \u0627\u0644\u0643\u0628\u064A\u0631\u0629 \u0648\u0628\u0646\u064A\u0629 800V."
    ),
    t(
      "A smart family cockpit comes from digital screens, Harmony audio, and expressive in-cabin lighting.",
      "Un cockpit familial intelligent na\xEEt des \xE9crans num\xE9riques, de l\u2019audio Harmony et d\u2019un \xE9clairage expressif dans l\u2019habitacle.",
      "\u062A\u0646\u0628\u0639 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0644\u0639\u0627\u0626\u0644\u064A\u0629 \u0627\u0644\u0630\u0643\u064A\u0629 \u0645\u0646 \u0627\u0644\u0634\u0627\u0634\u0627\u062A \u0627\u0644\u0631\u0642\u0645\u064A\u0629 \u0648\u0635\u0648\u062A Harmony \u0648\u0627\u0644\u0625\u0636\u0627\u0621\u0629 \u0627\u0644\u0645\u0639\u0628\u0631\u0629 \u062F\u0627\u062E\u0644 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629."
    )
  ],
  "newDreamer.html": [
    t(
      "Panoramic luxury design frames Dreamer with a flagship MPV presence and an executive-scale body.",
      "Le design de luxe panoramique encadre Dreamer avec une pr\xE9sence MPV phare et une carrosserie \xE0 l\u2019\xE9chelle ex\xE9cutive.",
      "\u064A\u0624\u0637\u0631 \u0627\u0644\u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u0641\u0627\u062E\u0631 \u0627\u0644\u0628\u0627\u0646\u0648\u0631\u0627\u0645\u064A Dreamer \u0628\u062D\u0636\u0648\u0631 MPV \u0631\u0627\u0626\u062F \u0648\u0647\u064A\u0643\u0644 \u0628\u062D\u062C\u0645 \u062A\u0646\u0641\u064A\u0630\u064A."
    ),
    t(
      "The executive lounge cabin focuses on rear comfort, seat engineering, and calm long-distance travel.",
      "L\u2019habitacle salon ex\xE9cutif met l\u2019accent sur le confort arri\xE8re, l\u2019ing\xE9nierie des si\xE8ges et la s\xE9r\xE9nit\xE9 longue distance.",
      "\u062A\u0631\u0643\u0632 \u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0644\u0635\u0627\u0644\u0648\u0646 \u0627\u0644\u062A\u0646\u0641\u064A\u0630\u064A \u0639\u0644\u0649 \u0631\u0627\u062D\u0629 \u0627\u0644\u062E\u0644\u0641 \u0648\u0647\u0646\u062F\u0633\u0629 \u0627\u0644\u0645\u0642\u0627\u0639\u062F \u0648\u0647\u062F\u0648\u0621 \u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0637\u0648\u064A\u0644\u0629."
    ),
    t(
      "Harmony intelligent travel connects the smart cockpit, family convenience, and premium hospitality into one flow.",
      "Le voyage intelligent Harmony relie le cockpit intelligent, la praticit\xE9 familiale et l\u2019hospitalit\xE9 premium dans un m\xEAme ensemble.",
      "\u064A\u0631\u0628\u0637 \u0627\u0644\u0633\u0641\u0631 \u0627\u0644\u0630\u0643\u064A Harmony \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0644\u0630\u0643\u064A\u0629 \u0648\u0627\u0644\u0631\u0627\u062D\u0629 \u0627\u0644\u0639\u0627\u0626\u0644\u064A\u0629 \u0648\u0627\u0644\u0636\u064A\u0627\u0641\u0629 \u0627\u0644\u0641\u0627\u062E\u0631\u0629 \u0641\u064A \u062A\u062F\u0641\u0642 \u0648\u0627\u062D\u062F."
    )
  ],
  "dreamer-champion.html": [
    t(
      "Dreamer Champion opens with a more ceremonial MPV identity and stronger special-edition presence than the standard Dreamer range.",
      "Dreamer Champion s\u2019ouvre sur une identit\xE9 de MPV plus c\xE9r\xE9monielle et une pr\xE9sence d\u2019\xE9dition sp\xE9ciale plus affirm\xE9e que la gamme Dreamer standard.",
      "\u062A\u0628\u062F\u0623 Dreamer Champion \u0628\u0647\u0648\u064A\u0629 MPV \u0623\u0643\u062B\u0631 \u0627\u062D\u062A\u0641\u0627\u0644\u064A\u0629 \u0648\u062D\u0636\u0648\u0631 \u0625\u0635\u062F\u0627\u0631 \u062E\u0627\u0635 \u0623\u0642\u0648\u0649 \u0645\u0646 \u0645\u062C\u0645\u0648\u0639\u0629 Dreamer \u0627\u0644\u0642\u064A\u0627\u0633\u064A\u0629."
    ),
    t(
      "Its second-row hospitality, quieter lounge atmosphere, and curated trim details make the cabin feel more executive and more exclusive.",
      "Son hospitalit\xE9 au deuxi\xE8me rang, son ambiance lounge plus silencieuse et ses d\xE9tails de finition choisis rendent l\u2019habitacle plus ex\xE9cutif et plus exclusif.",
      "\u062A\u062C\u0639\u0644 \u0636\u064A\u0627\u0641\u0629 \u0627\u0644\u0635\u0641 \u0627\u0644\u062B\u0627\u0646\u064A \u0648\u0623\u062C\u0648\u0627\u0621 \u0627\u0644\u0635\u0627\u0644\u0648\u0646 \u0627\u0644\u0623\u0643\u062B\u0631 \u0647\u062F\u0648\u0621\u064B\u0627 \u0648\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u062E\u0627\u0645\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u0642\u0627\u0629 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0623\u0643\u062B\u0631 \u062A\u0646\u0641\u064A\u0630\u064A\u0629 \u0648\u0623\u0643\u062B\u0631 \u062E\u0635\u0648\u0635\u064A\u0629."
    ),
    t(
      "The route closes with a more curated premium-hospitality tone, keeping Dreamer Champion distinct from the regular Dreamer family pages.",
      "Le parcours se conclut sur une tonalit\xE9 d\u2019hospitalit\xE9 premium plus soign\xE9e, afin de distinguer Dreamer Champion des pages Dreamer classiques.",
      "\u064A\u062E\u062A\u062A\u0645 \u0627\u0644\u0645\u0633\u0627\u0631 \u0628\u0646\u0628\u0631\u0629 \u0636\u064A\u0627\u0641\u0629 \u0641\u0627\u062E\u0631\u0629 \u0623\u0643\u062B\u0631 \u0639\u0646\u0627\u064A\u0629 \u0628\u0645\u0627 \u064A\u0628\u0642\u064A Dreamer Champion \u0645\u062E\u062A\u0644\u0641\u0629 \u0639\u0646 \u0635\u0641\u062D\u0627\u062A Dreamer \u0627\u0644\u0639\u0627\u062F\u064A\u0629."
    )
  ],
  "dreamriver.html": [
    t(
      "Dreamer Mountain River presents a scenic MPV expression with hospitality-first styling.",
      "Dreamer Mountain River pr\xE9sente une expression MPV panoramique au style centr\xE9 sur l\u2019hospitalit\xE9.",
      "\u062A\u0642\u062F\u0645 Dreamer Mountain River \u062A\u0639\u0628\u064A\u0631 MPV \u0645\u0634\u0647\u062F\u064A\u064B\u0627 \u0628\u0637\u0627\u0628\u0639 \u064A\u0631\u0643\u0632 \u0639\u0644\u0649 \u0627\u0644\u0636\u064A\u0627\u0641\u0629."
    ),
    t(
      "The lounge-like cabin keeps the route warm and family-friendly without losing premium calm.",
      "L\u2019habitacle fa\xE7on salon garde le parcours chaleureux et familial sans perdre le calme premium.",
      "\u062A\u062D\u0627\u0641\u0638 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0628\u0637\u0627\u0628\u0639 \u0627\u0644\u0635\u0627\u0644\u0648\u0646 \u0639\u0644\u0649 \u062F\u0641\u0621 \u0627\u0644\u0645\u0633\u0627\u0631 \u0648\u0631\u0648\u062D\u0647 \u0627\u0644\u0639\u0627\u0626\u0644\u064A\u0629 \u0645\u0646 \u062F\u0648\u0646 \u0641\u0642\u062F\u0627\u0646 \u0627\u0644\u0647\u062F\u0648\u0621 \u0627\u0644\u0641\u0627\u062E\u0631."
    ),
    t(
      "Shared travel comfort and safety complete the special-edition story with a polished, scenic tone.",
      "Le confort de voyage partag\xE9 et la s\xE9curit\xE9 concluent l\u2019histoire de l\u2019\xE9dition sp\xE9ciale avec un ton soign\xE9 et panoramique.",
      "\u064A\u0643\u0645\u0644 \u0627\u0644\u0633\u0641\u0631 \u0627\u0644\u0645\u0634\u062A\u0631\u0643 \u0627\u0644\u0645\u0631\u064A\u062D \u0648\u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u0642\u0635\u0629 \u0627\u0644\u0646\u0633\u062E\u0629 \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0646\u0628\u0631\u0629 \u0645\u0635\u0642\u0648\u0644\u0629 \u0648\u0645\u0634\u0647\u062F\u064A\u0629."
    )
  ],
  "dreamer.html": [
    t(
      "Dreamer opens with a luxury MPV presence and a family-first silhouette.",
      "Dreamer s\u2019ouvre sur une pr\xE9sence MPV de luxe et une silhouette centr\xE9e sur la famille.",
      "\u062A\u0628\u062F\u0623 Dreamer \u0628\u062D\u0636\u0648\u0631 MPV \u0641\u0627\u062E\u0631 \u0648\u0647\u064A\u0626\u0629 \u0645\u0648\u062C\u0647\u0629 \u0644\u0644\u0639\u0627\u0626\u0644\u0629."
    ),
    t(
      "Rear cabin comfort and lounge seating drive the middle of the route with a calmer executive rhythm.",
      "Le confort arri\xE8re et les si\xE8ges fa\xE7on salon portent le milieu du parcours avec un rythme ex\xE9cutif plus calme.",
      "\u062A\u0642\u0648\u062F \u0631\u0627\u062D\u0629 \u0627\u0644\u0635\u0641 \u0627\u0644\u062E\u0644\u0641\u064A \u0648\u0645\u0642\u0627\u0639\u062F \u0627\u0644\u0635\u0627\u0644\u0648\u0646 \u0645\u0646\u062A\u0635\u0641 \u0627\u0644\u0645\u0633\u0627\u0631 \u0628\u0625\u064A\u0642\u0627\u0639 \u062A\u0646\u0641\u064A\u0630\u064A \u0623\u0643\u062B\u0631 \u0647\u062F\u0648\u0621\u064B\u0627."
    ),
    t(
      "The page closes on smart-family convenience and reassuring safety to keep the MPV story complete.",
      "La page se conclut sur la praticit\xE9 familiale intelligente et une s\xE9curit\xE9 rassurante pour garder l\u2019histoire MPV compl\xE8te.",
      "\u062A\u062E\u062A\u062A\u0645 \u0627\u0644\u0635\u0641\u062D\u0629 \u0628\u0627\u0644\u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u0639\u0627\u0626\u0644\u064A\u0629 \u0627\u0644\u0630\u0643\u064A\u0629 \u0648\u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u0627\u0644\u0645\u0637\u0645\u0626\u0646\u0629 \u0644\u0625\u0628\u0642\u0627\u0621 \u0642\u0635\u0629 MPV \u0645\u062A\u0643\u0627\u0645\u0644\u0629."
    )
  ],
  "Courage": [
    t(
      "Original aesthetics design frames Courage with a cleaner electric-SUV silhouette and a warmer family tone.",
      "Le design esth\xE9tique original cadre Courage avec une silhouette de SUV \xE9lectrique plus pure et un ton familial plus chaleureux.",
      "\u064A\u0624\u0637\u0631 \u0627\u0644\u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0623\u0635\u0644\u064A Courage \u0628\u0647\u064A\u0626\u0629 SUV \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0623\u0646\u0642\u0649 \u0648\u0637\u0627\u0628\u0639 \u0639\u0627\u0626\u0644\u064A \u0623\u0643\u062B\u0631 \u062F\u0641\u0626\u064B\u0627."
    ),
    t(
      "Electric range and efficiency keep the route calm, practical, and ready for everyday travel.",
      "L\u2019autonomie et l\u2019efficience \xE9lectriques rendent le trajet calme, pratique et pr\xEAt pour un usage quotidien.",
      "\u064A\u062D\u0627\u0641\u0638 \u0627\u0644\u0645\u062F\u0649 \u0648\u0627\u0644\u0643\u0641\u0627\u0621\u0629 \u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0639\u0644\u0649 \u062A\u0646\u0642\u0644 \u0647\u0627\u062F\u0626 \u0648\u0639\u0645\u0644\u064A \u0648\u062C\u0627\u0647\u0632 \u0644\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u064A\u0648\u0645\u064A."
    ),
    t(
      "The family comfort cockpit adds digital screens, Harmony audio, and expressive in-cabin lighting for a more lively mood.",
      "Le cockpit confort familial ajoute des \xE9crans num\xE9riques, l\u2019audio Harmony et un \xE9clairage expressif pour une ambiance plus vivante.",
      "\u062A\u0636\u064A\u0641 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0644\u0639\u0627\u0626\u0644\u064A\u0629 \u0627\u0644\u0645\u0631\u064A\u062D\u0629 \u0634\u0627\u0634\u0627\u062A \u0631\u0642\u0645\u064A\u0629 \u0648\u0635\u0648\u062A Harmony \u0648\u0625\u0636\u0627\u0621\u0629 \u0645\u0639\u0628\u0631\u0629 \u0644\u062C\u0648 \u0623\u0643\u062B\u0631 \u062D\u064A\u0648\u064A\u0629."
    )
  ]
};
const makeModel = (options) => ({
  kind: "model",
  ...options,
  features: options.gallery.slice(0, 3).map((image, index) => {
    var _a, _b, _c, _d;
    const subtitle = options.subtitle.en.toLowerCase();
    const isMpv = subtitle.includes("mpv");
    const isSedan = subtitle.includes("sedan");
    const titles = (_a = modelFeatureOverrides[options.slug]) != null ? _a : isMpv ? [
      t("Ceremonial exterior", "Ext\xE9rieur c\xE9r\xE9moniel", "\u062E\u0627\u0631\u062C\u064A\u0629 \u0628\u0637\u0627\u0628\u0639 \u0627\u062D\u062A\u0641\u0627\u0644\u064A"),
      t("Lounge-like cabin", "Habitacle esprit salon", "\u0645\u0642\u0635\u0648\u0631\u0629 \u0628\u0637\u0627\u0628\u0639 \u0627\u0644\u0635\u0627\u0644\u0648\u0646"),
      t("Long-distance hospitality", "Hospitalit\xE9 grand trajet", "\u0636\u064A\u0627\u0641\u0629 \u0645\u062B\u0627\u0644\u064A\u0629 \u0644\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0637\u0648\u064A\u0644\u0629")
    ] : isSedan ? [
      t("Flagship exterior proportion", "Proportions ext\xE9rieures de prestige", "\u062A\u0646\u0627\u0633\u0628\u0627\u062A \u062E\u0627\u0631\u062C\u064A\u0629 \u0631\u0627\u0626\u062F\u0629"),
      t("Executive digital cabin", "Habitacle num\xE9rique ex\xE9cutif", "\u0645\u0642\u0635\u0648\u0631\u0629 \u0631\u0642\u0645\u064A\u0629 \u062A\u0646\u0641\u064A\u0630\u064A\u0629"),
      t("Composed intelligent travel", "Voyage intelligent et serein", "\u0633\u0641\u0631 \u0630\u0643\u064A \u0648\u0648\u0627\u062B\u0642")
    ] : [
      t("Commanding exterior stance", "Prestance ext\xE9rieure affirm\xE9e", "\u062D\u0636\u0648\u0631 \u062E\u0627\u0631\u062C\u064A \u0642\u0648\u064A"),
      t("Spacious intelligent cabin", "Habitacle intelligent et spacieux", "\u0645\u0642\u0635\u0648\u0631\u0629 \u0630\u0643\u064A\u0629 \u0648\u0631\u062D\u0628\u0629"),
      t("All-scenario confidence", "S\xE9r\xE9nit\xE9 tous usages", "\u062B\u0642\u0629 \u0641\u064A \u0643\u0644 \u0627\u0644\u0633\u064A\u0646\u0627\u0631\u064A\u0648\u0647\u0627\u062A")
    ];
    const bodies = (_b = modelFeatureBodyOverrides[options.slug]) != null ? _b : [
      options.description,
      options.subtitle,
      t(
        `${options.title.en} combines premium design, an immersive digital experience, and composed road manners for refined daily and long-distance travel.`,
        `${options.title.fr} associe un design premium, une exp\xE9rience num\xE9rique immersive et un comportement routier ma\xEEtris\xE9 pour les trajets quotidiens comme longue distance.`,
        `\u064A\u062C\u0645\u0639 ${options.title.ar} \u0628\u064A\u0646 \u0627\u0644\u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u0641\u0627\u062E\u0631 \u0648\u0627\u0644\u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u0631\u0642\u0645\u064A\u0629 \u0627\u0644\u063A\u0627\u0645\u0631\u0629 \u0648\u0627\u0644\u0623\u062F\u0627\u0621 \u0627\u0644\u0645\u062A\u0632\u0646 \u0639\u0644\u0649 \u0627\u0644\u0637\u0631\u064A\u0642 \u0644\u064A\u0645\u0646\u062D \u062A\u062C\u0631\u0628\u0629 \u0631\u0627\u0642\u064A\u0629 \u0641\u064A \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u064A\u0648\u0645\u064A \u0648\u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0637\u0648\u064A\u0644\u0629.`
      )
    ];
    return {
      image,
      title: (_c = titles[index]) != null ? _c : modelFeatureTitles[2],
      body: (_d = bodies[index]) != null ? _d : bodies[2]
    };
  }),
  ctaPrimary: t("Order now", "Commander maintenant", "\u0627\u0637\u0644\u0628 \u0627\u0644\u0622\u0646"),
  ctaSecondary: t("Configuration list", "Liste des configurations", "\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062A\u062C\u0647\u064A\u0632\u0627\u062A"),
  secondarySlug: "store.html"
});
const models = [
  makeModel({
    slug: "passion-L.html",
    title: t("Voyah Passion L", "Voyah Passion L", "Voyah Passion L"),
    subtitle: t("New-era flagship sedan", "Berline phare de nouvelle g\xE9n\xE9ration", "\u0633\u064A\u062F\u0627\u0646 \u0631\u0627\u0626\u062F\u0629 \u0645\u0646 \u0627\u0644\u062C\u064A\u0644 \u0627\u0644\u062C\u062F\u064A\u062F"),
    description: t("Starting from RMB 279,900.", "\xC0 partir de 279 900 RMB.", "\u0627\u0644\u0633\u0639\u0631 \u064A\u0628\u062F\u0623 \u0645\u0646 279,900 \u064A\u0648\u0627\u0646"),
    price: t("Starting from RMB 279,900", "\xC0 partir de 279 900 RMB", "\u0627\u0644\u0633\u0639\u0631 \u064A\u0628\u062F\u0623 \u0645\u0646 279,900 \u064A\u0648\u0627\u0646"),
    heroImage: "/voyah-resources/images/car/passion-L/1920/sc_1.jpg",
    logo: "/voyah-resources/images/car/car_logo/passion-L.png",
    gallery: [
      "/voyah-resources/images/car/passion-L/1920/sc_10.jpg",
      "/voyah-resources/images/car/passion-L/1920/sc_24.jpg",
      "/voyah-resources/images/car/passion-L/1920/sc_39.jpg"
    ],
    metrics: [
      metric("Sedan", "Body type", "Carrosserie", "\u0646\u0648\u0639 \u0627\u0644\u0647\u064A\u0643\u0644"),
      metric("Flagship", "Positioning", "Positionnement", "\u0627\u0644\u0641\u0626\u0629"),
      metric("Executive luxury", "Experience", "Exp\xE9rience", "\u0627\u0644\u062A\u062C\u0631\u0628\u0629")
    ]
  }),
  makeModel({
    slug: "Passion",
    title: t("Voyah Passion", "Voyah Passion", "Voyah Passion"),
    subtitle: t("The New Executive Electric Flagship Sedan", "La nouvelle berline \xE9lectrique phare ex\xE9cutive", "\u0633\u064A\u062F\u0627\u0646 \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u062A\u0646\u0641\u064A\u0630\u064A\u0629 \u0631\u0627\u0626\u062F\u0629 \u062C\u062F\u064A\u062F\u0629"),
    description: t("Length x Width x Height (mm): 5088x1970x1505. Wheelbase (mm): 3000. Power Mode: REV/PHEV.", "Longueur x Largeur x Hauteur (mm) : 5088x1970x1505. Empattement (mm) : 3000. Motorisation : REV/PHEV.", "\u0627\u0644\u0623\u0628\u0639\u0627\u062F \u0627\u0644\u0637\u0648\u0644 x \u0627\u0644\u0639\u0631\u0636 x \u0627\u0644\u0627\u0631\u062A\u0641\u0627\u0639 (\u0645\u0645): 5088x1970x1505. \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0639\u062C\u0644\u0627\u062A (\u0645\u0645): 3000. \u0646\u0648\u0639 \u0627\u0644\u062D\u0631\u0643\u0629: REV/PHEV."),
    price: t("The New Executive Electric Flagship", "La nouvelle berline \xE9lectrique phare ex\xE9cutive", "\u0633\u064A\u062F\u0627\u0646 \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u062A\u0646\u0641\u064A\u0630\u064A\u0629 \u0631\u0627\u0626\u062F\u0629 \u062C\u062F\u064A\u062F\u0629"),
    heroImage: "/voyah-resources/images/global/passion-front.jpg",
    logo: "/voyah-resources/images/global/passion-wordmark.png",
    gallery: [
      "/voyah-resources/images/global/passion-hero.jpg",
      "/voyah-resources/images/global/passion-roof.jpg",
      "/voyah-resources/images/global/passion-cockpit.jpg"
    ],
    metrics: [
      metric("5088x1970x1505", "Length x Width x Height (mm)", "Longueur x Largeur x Hauteur (mm)", "\u0627\u0644\u0623\u0628\u0639\u0627\u062F (\u0645\u0645)"),
      metric("3000", "Wheelbase (mm)", "Empattement (mm)", "\u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0639\u062C\u0644\u0627\u062A (\u0645\u0645)"),
      metric("REV/PHEV", "Power Mode", "Motorisation", "\u0646\u0648\u0639 \u0627\u0644\u062D\u0631\u0643\u0629")
    ]
  }),
  makeModel({
    slug: "titan.html",
    title: t("Voyah Titan", "Voyah Titan", "Voyah Titan"),
    subtitle: t("New-era flagship six-seat SUV", "SUV phare \xE0 six places de nouvelle g\xE9n\xE9ration", "\u0633\u064A\u0627\u0631\u0629 SUV \u0631\u0627\u0626\u062F\u0629 \u0628\u0633\u062A\u0629 \u0645\u0642\u0627\u0639\u062F \u0645\u0646 \u0627\u0644\u062C\u064A\u0644 \u0627\u0644\u062C\u062F\u064A\u062F"),
    description: t("Starting from RMB 379,900.", "\xC0 partir de 379 900 RMB.", "\u0627\u0644\u0633\u0639\u0631 \u064A\u0628\u062F\u0623 \u0645\u0646 379,900 \u064A\u0648\u0627\u0646"),
    price: t("Starting from RMB 379,900", "\xC0 partir de 379 900 RMB", "\u0627\u0644\u0633\u0639\u0631 \u064A\u0628\u062F\u0623 \u0645\u0646 379,900 \u064A\u0648\u0627\u0646"),
    heroImage: "/voyah-resources/images/car/titan/1920/sc_1.jpg",
    logo: "/voyah-resources/images/car/car_logo/titan.png",
    gallery: [
      "/voyah-resources/images/car/titan/1920/sc_18.jpg",
      "/voyah-resources/images/car/titan/1920/sc_22.jpg",
      "/voyah-resources/images/car/titan/1920/sc_30.jpg"
    ],
    metrics: [
      metric("2.87X", "Length-height ratio", "Rapport longueur/hauteur", "\u0646\u0633\u0628\u0629 \u0627\u0644\u0637\u0648\u0644 \u0625\u0644\u0649 \u0627\u0644\u0627\u0631\u062A\u0641\u0627\u0639"),
      metric("2.25X", "Wheel-height ratio", "Rapport roue/hauteur", "\u0646\u0633\u0628\u0629 \u0627\u0644\u0639\u062C\u0644\u0629 \u0625\u0644\u0649 \u0627\u0644\u0627\u0631\u062A\u0641\u0627\u0639"),
      metric("59.68%", "Front nose ratio", "Rapport du nez avant", "\u0646\u0633\u0628\u0629 \u0627\u0644\u0645\u0642\u062F\u0645\u0629 \u0627\u0644\u0623\u0645\u0627\u0645\u064A\u0629")
    ]
  }),
  makeModel({
    slug: "titan_blackedition.html",
    title: t("Voyah Titan Black Edition", "Voyah Titan Black Edition", "Voyah Titan Black Edition"),
    subtitle: t("Stealth-focused luxury SUV", "SUV de luxe au style noir", "SUV \u0641\u0627\u062E\u0631\u0629 \u0628\u0637\u0627\u0628\u0639 \u0623\u0633\u0648\u062F"),
    description: t("A darker, sharper interpretation of the Titan formula with bold finishes and a more dramatic visual tone.", "Une interpr\xE9tation plus sombre et plus tranchante de la Titan, avec des finitions audacieuses et un langage visuel plus dramatique.", "\u0646\u0633\u062E\u0629 \u0623\u0643\u062B\u0631 \u062C\u0631\u0623\u0629 \u0645\u0646 Titan \u0628\u062A\u0634\u0637\u064A\u0628\u0627\u062A \u062F\u0627\u0643\u0646\u0629 \u0648\u062D\u0636\u0648\u0631 \u0628\u0635\u0631\u064A \u0623\u0643\u062B\u0631 \u062D\u062F\u0629."),
    price: t("Black Edition", "Black Edition", "Black Edition"),
    heroImage: "/voyah-resources/images/car/titan_blackedition/1920/sc_1.jpg",
    logo: "/voyah-resources/images/car/car_logo/titan_blackedition.png",
    gallery: [
      "/voyah-resources/images/car/titan_blackedition/1920/sc_10_1.jpg",
      "/voyah-resources/images/car/titan_blackedition/1920/sc_21_1.jpg",
      "/voyah-resources/images/car/titan_blackedition/1920/sc_23_1.jpg"
    ],
    metrics: [
      metric("Dark styling", "Design theme", "Th\xE8me design", "\u0646\u0633\u0642 \u0627\u0644\u062A\u0635\u0645\u064A\u0645"),
      metric("Premium trim", "Material tone", "Finition premium", "\u0627\u0644\u062E\u0627\u0645\u0627\u062A \u0627\u0644\u0641\u0627\u062E\u0631\u0629"),
      metric("SUV command", "Presence", "Prestance", "\u0627\u0644\u062D\u0636\u0648\u0631")
    ]
  }),
  makeModel({
    slug: "titan_X8.html",
    title: t("Voyah Titan X8", "Voyah Titan X8", "Voyah Titan X8"),
    subtitle: t("Expanded flagship family SUV", "SUV familial phare \xE9tendu", "SUV \u0639\u0627\u0626\u0644\u064A\u0629 \u0631\u0627\u0626\u062F\u0629 \u0645\u0648\u0633\u0639\u0629"),
    description: t("A Titan derivative tuned for more generous multi-row practicality, calmer family comfort, and long-range travel confidence.", "Une d\xE9clinaison de Titan pens\xE9e pour une praticit\xE9 multirang plus g\xE9n\xE9reuse, un confort familial plus serein et une meilleure assurance sur longue distance.", "\u0646\u0633\u062E\u0629 \u0645\u0646 Titan \u0645\u0647\u064A\u0623\u0629 \u0644\u0639\u0645\u0644\u064A\u0629 \u0623\u0643\u0628\u0631 \u0639\u0628\u0631 \u0627\u0644\u0635\u0641\u0648\u0641 \u0627\u0644\u0645\u062A\u0639\u062F\u062F\u0629 \u0648\u0631\u0627\u062D\u0629 \u0639\u0627\u0626\u0644\u064A\u0629 \u0623\u0643\u062B\u0631 \u0647\u062F\u0648\u0621\u064B\u0627 \u0648\u062B\u0642\u0629 \u0623\u0643\u0628\u0631 \u0641\u064A \u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0637\u0648\u064A\u0644\u0629."),
    price: t("Expanded family flagship", "Flagship familial \xE9tendu", "\u0631\u0627\u0626\u062F\u0629 \u0639\u0627\u0626\u0644\u064A\u0629 \u0645\u0648\u0633\u0639\u0629"),
    heroImage: "/voyah-resources/images/car/titan_X8/1920/sc_1.jpg",
    logo: "/voyah-resources/images/car/car_logo/titan_X8.png",
    gallery: ["/voyah-resources/images/car/titan_X8/1920/sc_1.jpg"],
    metrics: [
      metric("Expanded seating", "Space plan", "Plan d\u2019espace", "\u062A\u062E\u0637\u064A\u0637 \u0627\u0644\u0645\u0633\u0627\u062D\u0629"),
      metric("Travel ready", "Use case", "Usage", "\u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645"),
      metric("SUV comfort", "Comfort focus", "Confort", "\u0627\u0644\u0631\u0627\u062D\u0629")
    ]
  }),
  makeModel({
    slug: "free+.html",
    title: t("Voyah FREE+", "Voyah FREE+", "Voyah FREE+"),
    subtitle: t("Premium intelligent SUV", "SUV premium intelligente", "\u0633\u064A\u0627\u0631\u0629 SUV \u0630\u0643\u064A\u0629 \u0641\u0627\u062E\u0631\u0629"),
    description: t("A premium urban SUV with expressive light-and-shadow design, a more refined cabin, and Huawei intelligent driving.", "Un SUV urbain premium au design d\u2019ombres et de lumi\xE8re, \xE0 l\u2019habitacle plus raffin\xE9 et \xE0 la conduite intelligente Huawei.", "\u0633\u064A\u0627\u0631\u0629 SUV \u062D\u0636\u0631\u064A\u0629 \u0641\u0627\u062E\u0631\u0629 \u0628\u062A\u0635\u0645\u064A\u0645 \u0636\u0648\u0621 \u0648\u0638\u0644 \u0645\u0639 \u0645\u0642\u0635\u0648\u0631\u0629 \u0623\u0643\u062B\u0631 \u062A\u0646\u0642\u064A\u062D\u064B\u0627 \u0648\u0642\u064A\u0627\u062F\u0629 \u0630\u0643\u064A\u0629 \u0645\u0646 Huawei."),
    price: t("Premium intelligent SUV", "SUV premium intelligente", "\u0633\u064A\u0627\u0631\u0629 SUV \u0630\u0643\u064A\u0629 \u0641\u0627\u062E\u0631\u0629"),
    heroImage: "/voyah-resources/images/car/free+/kv_1920.png",
    heroVideo: "/voyah-resources/images/car/free+/video_01_20250712.mp4",
    logo: "/voyah-resources/images/car/car_logo/free+.png",
    gallery: [
      "/voyah-resources/images/car/free+/img_03_1920.png",
      "/voyah-resources/images/car/free+/img_25_1920.png",
      "/voyah-resources/images/car/free+/img_42_1920.png"
    ],
    metrics: [
      metric("Urban design", "Design", "Design", "\u0627\u0644\u062A\u0635\u0645\u064A\u0645"),
      metric("Harmony cockpit", "Cabin", "Habitacle", "\u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629"),
      metric("ADS 4", "Driving tech", "Conduite intelligente", "\u062A\u0642\u0646\u064A\u0629 \u0627\u0644\u0642\u064A\u0627\u062F\u0629")
    ]
  }),
  makeModel({
    slug: "Free",
    title: t("Voyah FREE 318", "Voyah FREE 318", "Voyah FREE 318"),
    subtitle: t("Long-range premium crossover", "Crossover premium longue autonomie", "\u0643\u0631\u0648\u0633 \u0623\u0648\u0641\u0631 \u0641\u0627\u062E\u0631 \u0628\u0639\u064A\u062F \u0627\u0644\u0645\u062F\u0649"),
    description: t("A long-range crossover with relaxed touring comfort, a calmer smart cockpit, and premium everyday versatility.", "Un crossover longue autonomie avec confort de voyage apais\xE9, cockpit intelligent plus serein et polyvalence premium au quotidien.", "\u0643\u0631\u0648\u0633 \u0623\u0648\u0641\u0631 \u0628\u0639\u064A\u062F \u0627\u0644\u0645\u062F\u0649 \u064A\u062C\u0645\u0639 \u0628\u064A\u0646 \u0631\u0627\u062D\u0629 \u0627\u0644\u0633\u0641\u0631 \u0627\u0644\u0647\u0627\u062F\u0626\u0629 \u0648\u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0644\u0630\u0643\u064A\u0629 \u0627\u0644\u0623\u0643\u062B\u0631 \u0633\u0643\u064A\u0646\u0629 \u0648\u0627\u0644\u062A\u0646\u0648\u0639 \u0627\u0644\u0641\u0627\u062E\u0631 \u0627\u0644\u064A\u0648\u0645\u064A."),
    price: t("Long-range premium crossover", "Crossover premium longue autonomie", "\u0643\u0631\u0648\u0633 \u0623\u0648\u0641\u0631 \u0641\u0627\u062E\u0631 \u0628\u0639\u064A\u062F \u0627\u0644\u0645\u062F\u0649"),
    heroImage: "/voyah-resources/images/car/free/kv_1920.png",
    logo: "/voyah-resources/images/car/car_logo/free.png",
    gallery: [
      "/voyah-resources/images/car/free/bg-free-h97D-5.jpg",
      "/voyah-resources/images/car/free/bg-free-h97D-9.jpg",
      "/voyah-resources/images/car/free/bg-free-h97D-12.jpg"
    ],
    metrics: [
      metric("Touring comfort", "Long-route feel", "Confort longue route", "\u0631\u0627\u062D\u0629 \u0627\u0644\u0633\u0641\u0631"),
      metric("High seating", "Driving position", "Position de conduite", "\u0648\u0636\u0639\u064A\u0629 \u0627\u0644\u0642\u064A\u0627\u062F\u0629"),
      metric("Practical luxury", "Daily use", "Usage quotidien", "\u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u064A\u0648\u0645\u064A")
    ]
  }),
  makeModel({
    slug: "newCourage.html",
    title: t("New Voyah Courage", "Nouveau Voyah Courage", "Voyah Courage \u0627\u0644\u062C\u062F\u064A\u062F"),
    subtitle: t("New luxury pure-electric SUV", "Nouveau SUV de luxe 100 % \xE9lectrique", "\u0633\u064A\u0627\u0631\u0629 SUV \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0641\u0627\u062E\u0631\u0629 \u062C\u062F\u064A\u062F\u0629"),
    description: t("A new-generation pure-electric SUV with a warm family cabin, long range, and Huawei intelligent driving.", "Un SUV 100 % \xE9lectrique de nouvelle g\xE9n\xE9ration avec habitacle familial chaleureux, grande autonomie et conduite intelligente Huawei.", "\u0633\u064A\u0627\u0631\u0629 SUV \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u0645\u0646 \u0627\u0644\u062C\u064A\u0644 \u0627\u0644\u062C\u062F\u064A\u062F \u0628\u0645\u0642\u0635\u0648\u0631\u0629 \u0639\u0627\u0626\u0644\u064A\u0629 \u062F\u0627\u0641\u0626\u0629 \u0648\u0645\u062F\u0649 \u0637\u0648\u064A\u0644 \u0648\u0642\u064A\u0627\u062F\u0629 \u0630\u0643\u064A\u0629 \u0645\u0646 Huawei."),
    price: t("New luxury pure-electric SUV", "Nouveau SUV de luxe 100 % \xE9lectrique", "\u0633\u064A\u0627\u0631\u0629 SUV \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0641\u0627\u062E\u0631\u0629 \u062C\u062F\u064A\u062F\u0629"),
    heroImage: "/voyah-resources/images/car/newCourage/1920/sc_1.jpg",
    logo: "/voyah-resources/images/car/car_logo/newCourage.png",
    gallery: [
      "/voyah-resources/images/car/newCourage/1920/sc_10.jpg",
      "/voyah-resources/images/car/newCourage/1920/sc_12.jpg",
      "/voyah-resources/images/car/newCourage/1920/sc_18.jpg"
    ],
    metrics: [
      metric("Pure electric", "Powertrain", "Motorisation", "\u0645\u0646\u0638\u0648\u0645\u0629 \u0627\u0644\u062D\u0631\u0643\u0629"),
      metric("Huawei ADS", "Driving tech", "Conduite intelligente", "\u062A\u0642\u0646\u064A\u0629 \u0627\u0644\u0642\u064A\u0627\u062F\u0629"),
      metric("Harmony cockpit", "Cabin", "Cockpit", "\u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629")
    ]
  }),
  makeModel({
    slug: "Courage",
    title: t("Voyah Courage", "Voyah Courage", "Voyah Courage"),
    subtitle: t("Premium Electric SUV", "SUV \xE9lectrique premium", "\u0633\u064A\u0627\u0631\u0629 SUV \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0641\u0627\u062E\u0631\u0629"),
    description: t("Length x Width x Height (mm): 4725x1900x1650. Wheelbase (mm): 2900. Power Mode: BEV.", "Longueur x Largeur x Hauteur (mm) : 4725x1900x1650. Empattement (mm) : 2900. Motorisation : BEV.", "\u0627\u0644\u0623\u0628\u0639\u0627\u062F \u0627\u0644\u0637\u0648\u0644 x \u0627\u0644\u0639\u0631\u0636 x \u0627\u0644\u0627\u0631\u062A\u0641\u0627\u0639 (\u0645\u0645): 4725x1900x1650. \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0639\u062C\u0644\u0627\u062A (\u0645\u0645): 2900. \u0646\u0648\u0639 \u0627\u0644\u062D\u0631\u0643\u0629: BEV."),
    price: t("Premium Electric SUV", "SUV \xE9lectrique premium", "\u0633\u064A\u0627\u0631\u0629 SUV \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0641\u0627\u062E\u0631\u0629"),
    heroImage: "/voyah-resources/images/global/courage-hero.jpg",
    logo: "/voyah-resources/images/global/courage-wordmark.png",
    gallery: [
      "/voyah-resources/images/global/courage-charge.jpg",
      "/voyah-resources/images/global/courage-screen.jpg",
      "/voyah-resources/images/global/courage-seats.jpg"
    ],
    metrics: [
      metric("4725x1900x1650", "Length x Width x Height (mm)", "Longueur x Largeur x Hauteur (mm)", "\u0627\u0644\u0623\u0628\u0639\u0627\u062F (\u0645\u0645)"),
      metric("2900", "Wheelbase (mm)", "Empattement (mm)", "\u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0639\u062C\u0644\u0627\u062A (\u0645\u0645)"),
      metric("BEV", "Power Mode", "Motorisation", "\u0646\u0648\u0639 \u0627\u0644\u062D\u0631\u0643\u0629")
    ]
  }),
  makeModel({
    slug: "Dream",
    title: t("26 Voyah Dreamer", "Voyah Dreamer 26", "Voyah Dreamer 26"),
    subtitle: t("A new-era flagship MPV", "Monospace phare de nouvelle g\xE9n\xE9ration", "\u0633\u064A\u0627\u0631\u0629 MPV \u0631\u0627\u0626\u062F\u0629 \u0645\u0646 \u0627\u0644\u062C\u064A\u0644 \u0627\u0644\u062C\u062F\u064A\u062F"),
    description: t("A new-generation Dreamer with lounge-like comfort, refined long-distance composure, and premium family focus.", "Une nouvelle g\xE9n\xE9ration Dreamer avec un confort de salon, une grande s\xE9r\xE9nit\xE9 sur longue distance et une vocation familiale premium.", "\u0627\u0644\u062C\u064A\u0644 \u0627\u0644\u062C\u062F\u064A\u062F \u0645\u0646 Dreamer \u064A\u0648\u0641\u0631 \u0631\u0627\u062D\u0629 \u0634\u0628\u064A\u0647\u0629 \u0628\u0627\u0644\u0635\u0627\u0644\u0648\u0646 \u0648\u062B\u0628\u0627\u062A\u0627\u064B \u0631\u0627\u0642\u064A\u0627\u064B \u0641\u064A \u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0637\u0648\u064A\u0644\u0629 \u0648\u062A\u0631\u0643\u064A\u0632\u0627\u064B \u0639\u0627\u0626\u0644\u064A\u0627\u064B \u0641\u0627\u062E\u0631\u0627\u064B."),
    price: t("A new-era flagship MPV", "Monospace phare de nouvelle g\xE9n\xE9ration", "\u0633\u064A\u0627\u0631\u0629 MPV \u0631\u0627\u0626\u062F\u0629 \u0645\u0646 \u0627\u0644\u062C\u064A\u0644 \u0627\u0644\u062C\u062F\u064A\u062F"),
    heroImage: "/voyah-resources/images/car/newDreamer26/kv_1920.jpg",
    logo: "/voyah-resources/images/car/car_logo/newDreamer26.png",
    gallery: [
      "/voyah-resources/images/car/newDreamer26/sc_10.jpg",
      "/voyah-resources/images/car/newDreamer26/sc_20.jpg",
      "/voyah-resources/images/car/newDreamer26/sc_24.jpg"
    ],
    metrics: [
      metric("MPV", "Body type", "Carrosserie", "\u0646\u0648\u0639 \u0627\u0644\u0647\u064A\u0643\u0644"),
      metric("Flagship", "Positioning", "Positionnement", "\u0627\u0644\u0641\u0626\u0629"),
      metric("Six / seven seats", "Seating", "Places", "\u0639\u062F\u062F \u0627\u0644\u0645\u0642\u0627\u0639\u062F")
    ]
  }),
  makeModel({
    slug: "dreamer-champion.html",
    title: t("Voyah Dreamer Champion", "Voyah Dreamer Champion", "Voyah Dreamer Champion"),
    subtitle: t("Special-edition flagship MPV", "MPV phare en \xE9dition sp\xE9ciale", "\u0633\u064A\u0627\u0631\u0629 MPV \u0631\u0627\u0626\u062F\u0629 \u0628\u0625\u0635\u062F\u0627\u0631 \u062E\u0627\u0635"),
    description: t("A special Dreamer expression with ceremonial presence, executive lounge comfort, and a more curated premium hospitality tone.", "Une expression sp\xE9ciale de Dreamer avec pr\xE9sence c\xE9r\xE9monielle, confort de salon ex\xE9cutif et tonalit\xE9 d\u2019hospitalit\xE9 premium plus soign\xE9e.", "\u0646\u0633\u062E\u0629 \u062E\u0627\u0635\u0629 \u0645\u0646 Dreamer \u0628\u062D\u0636\u0648\u0631 \u0627\u062D\u062A\u0641\u0627\u0644\u064A \u0648\u0631\u0627\u062D\u0629 \u0635\u0627\u0644\u0648\u0646 \u062A\u0646\u0641\u064A\u0630\u064A \u0648\u0646\u0628\u0631\u0629 \u0636\u064A\u0627\u0641\u0629 \u0641\u0627\u062E\u0631\u0629 \u0623\u0643\u062B\u0631 \u0639\u0646\u0627\u064A\u0629."),
    price: t("Champion special edition", "\xC9dition sp\xE9ciale Champion", "\u0625\u0635\u062F\u0627\u0631 Champion \u0627\u0644\u062E\u0627\u0635"),
    heroImage: "/voyah-resources/images/car/dreamer-champion/kv_0408_1920.jpg",
    logo: "/voyah-resources/images/car/car_logo/dreamer-champion.png",
    gallery: [
      "/voyah-resources/images/car/dreamer-champion/bg_12_n_banner01.jpg",
      "/voyah-resources/images/car/dreamer-champion/bg_16_n_banner01.jpg",
      "/voyah-resources/images/car/dreamer-champion/bg_24_n_banner01.jpg"
    ],
    metrics: [
      metric("Special edition", "Series", "S\xE9rie", "\u0627\u0644\u0633\u0644\u0633\u0644\u0629"),
      metric("Executive MPV", "Positioning", "Positionnement", "\u0627\u0644\u0641\u0626\u0629"),
      metric("Ceremonial comfort", "Cabin mood", "Ambiance int\xE9rieure", "\u0623\u062C\u0648\u0627\u0621 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629")
    ]
  }),
  makeModel({
    slug: "newDreamer.html",
    title: t("25 Voyah Dreamer", "Voyah Dreamer 25", "Voyah Dreamer 25"),
    subtitle: t("Panoramic luxury technology flagship MPV", "Monospace phare technologique de luxe panoramique", "MPV \u0631\u0627\u0626\u062F\u0629 \u062A\u062C\u0645\u0639 \u0628\u064A\u0646 \u0627\u0644\u0641\u062E\u0627\u0645\u0629 \u0648\u0627\u0644\u062A\u0642\u0646\u064A\u0629 \u0627\u0644\u0628\u0627\u0646\u0648\u0631\u0627\u0645\u064A\u0629"),
    description: t("A panoramic luxury flagship MPV with premium comfort, intelligent cabin tech, and long-distance composure.", "Un MPV phare de luxe panoramique avec confort premium, technologie d\u2019habitacle intelligente et s\xE9r\xE9nit\xE9 longue distance.", "\u0633\u064A\u0627\u0631\u0629 MPV \u0631\u0627\u0626\u062F\u0629 \u0641\u0627\u062E\u0631\u0629 \u0628\u0627\u0646\u0648\u0631\u0627\u0645\u064A\u0629 \u0645\u0639 \u0631\u0627\u062D\u0629 \u0641\u0627\u062E\u0631\u0629 \u0648\u062A\u0642\u0646\u064A\u0629 \u0645\u0642\u0635\u0648\u0631\u0629 \u0630\u0643\u064A\u0629 \u0648\u062B\u0628\u0627\u062A \u0641\u064A \u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0637\u0648\u064A\u0644\u0629."),
    price: t("Starting from RMB 329,900", "\xC0 partir de 329 900 RMB", "\u0627\u0644\u0633\u0639\u0631 \u064A\u0628\u062F\u0623 \u0645\u0646 329,900 \u064A\u0648\u0627\u0646"),
    heroImage: "/voyah-resources/images/car/newDreamer/h56c_pc08_banner01.jpg",
    logo: "/voyah-resources/images/car/car_logo/newDreamer.png",
    gallery: [
      "/voyah-resources/images/car/newDreamer/h56c_pc08_banner01.jpg",
      "/voyah-resources/images/car/newDreamer/bg_7_n_1920.jpg",
      "/voyah-resources/images/car/newDreamer/h56c_pc20_bg.jpg"
    ],
    metrics: [
      metric("MPV", "Body type", "Carrosserie", "\u0646\u0648\u0639 \u0627\u0644\u0647\u064A\u0643\u0644"),
      metric("Flagship", "Positioning", "Positionnement", "\u0627\u0644\u0641\u0626\u0629"),
      metric("Seven seats", "Seating", "Places", "\u0639\u062F\u062F \u0627\u0644\u0645\u0642\u0627\u0639\u062F")
    ]
  }),
  makeModel({
    slug: "dreamriver.html",
    title: t("Voyah Dreamer Mountain River", "Voyah Dreamer Montagne-Rivi\xE8re", "Voyah Dreamer Mountain River"),
    subtitle: t("Scenic travel expression", "Expression du voyage panoramique", "\u0637\u0627\u0628\u0639 \u0627\u0644\u0633\u0641\u0631 \u0627\u0644\u0645\u0634\u0647\u062F\u064A"),
    description: t("A special Dreamer expression emphasizing serene scenery, warm hospitality, and elegant multi-person travel.", "Une interpr\xE9tation sp\xE9ciale de Dreamer ax\xE9e sur le paysage, l\u2019accueil chaleureux et l?\xE9l\xE9gance des voyages \xE0 plusieurs.", "\u0646\u0633\u062E\u0629 \u062E\u0627\u0635\u0629 \u0645\u0646 Dreamer \u062A\u0631\u0643\u0632 \u0639\u0644\u0649 \u0627\u0644\u0645\u0634\u0647\u062F \u0627\u0644\u0647\u0627\u062F\u0626 \u0648\u0627\u0644\u0636\u064A\u0627\u0641\u0629 \u0627\u0644\u062F\u0627\u0641\u0626\u0629 \u0648\u0623\u0646\u0627\u0642\u0629 \u0627\u0644\u0633\u0641\u0631 \u0627\u0644\u062C\u0645\u0627\u0639\u064A."),
    price: t("Special edition MPV", "\xC9dition sp\xE9ciale MPV", "MPV \u0625\u0635\u062F\u0627\u0631 \u062E\u0627\u0635"),
    heroImage: "/voyah-resources/images/car/dreamriver/kv_1920.png",
    logo: "/voyah-resources/images/car/car_logo/dreamriver.png",
    gallery: [
      "/voyah-resources/images/car/dreamriver/sc_2.png",
      "/voyah-resources/images/car/dreamriver/sc_6-2.png",
      "/voyah-resources/images/car/dreamriver/sc_10.png"
    ],
    metrics: [
      metric("Scenic theme", "Edition theme", "Th\xE8me de l?\xE9dition", "\u0637\u0627\u0628\u0639 \u0627\u0644\u0625\u0635\u062F\u0627\u0631"),
      metric("Warm cabin", "Interior mood", "Ambiance int\xE9rieure", "\u0623\u062C\u0648\u0627\u0621 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629"),
      metric("Shared journeys", "Travel mode", "Mode de voyage", "\u0646\u0645\u0637 \u0627\u0644\u0633\u0641\u0631")
    ]
  }),
  makeModel({
    slug: "dreamer.html",
    title: t("24 Voyah Dreamer", "Voyah Dreamer 24", "Voyah Dreamer 24"),
    subtitle: t("Luxury electric MPV", "Monospace \xE9lectrique de luxe", "MPV \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0641\u0627\u062E\u0631\u0629"),
    description: t("A spacious electric MPV created for premium family mobility with broad comfort and reassuring calm.", "Un monospace \xE9lectrique spacieux pens\xE9 pour une mobilit\xE9 familiale premium avec beaucoup de confort et une s\xE9r\xE9nit\xE9 rassurante.", "\u0633\u064A\u0627\u0631\u0629 MPV \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0648\u0627\u0633\u0639\u0629 \u0635\u0645\u0645\u062A \u0644\u0644\u062D\u0631\u0643\u0629 \u0627\u0644\u0639\u0627\u0626\u0644\u064A\u0629 \u0627\u0644\u0641\u0627\u062E\u0631\u0629 \u0645\u0639 \u0631\u0627\u062D\u0629 \u0643\u0628\u064A\u0631\u0629 \u0648\u0647\u062F\u0648\u0621 \u0645\u0637\u0645\u0626\u0646."),
    price: t("Electric luxury MPV", "Monospace \xE9lectrique de luxe", "MPV \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0641\u0627\u062E\u0631\u0629"),
    heroImage: "/voyah-resources/images/car/dreamer/bg_2_1920.jpg",
    logo: "/voyah-resources/images/car/car_logo/dreamer.png",
    gallery: [
      "/voyah-resources/images/car/dreamer/bg_swiper_10_1.jpg",
      "/voyah-resources/images/car/dreamer/bg_swiper_22_1.jpg",
      "/voyah-resources/images/car/dreamer/bg_swiper_27_1.jpg"
    ],
    metrics: [
      metric("Three-row comfort", "Space", "Espace", "\u0627\u0644\u0645\u0633\u0627\u062D\u0629"),
      metric("Family calm", "Travel atmosphere", "Ambiance de voyage", "\u0623\u062C\u0648\u0627\u0621 \u0627\u0644\u0631\u062D\u0644\u0629"),
      metric("Electric luxury", "Power theme", "Motorisation", "\u0627\u0644\u0645\u0646\u0638\u0648\u0645\u0629")
    ]
  }),
  makeModel({
    slug: "titan_ultra.html",
    title: t("Titan Ultra (2026)", "Titan Ultra (2026)", "\u062A\u064A\u062A\u0627\u0646 \u0623\u0644\u062A\u0631\u0627 (2026)"),
    subtitle: t("L3 Autonomous Roadmap", "Feuille de route L3 Autonome", "\u0645\u062E\u0637\u0637 \u0627\u0644\u0642\u064A\u0627\u062F\u0629 \u0627\u0644\u0630\u0627\u062A\u064A\u0629 L3"),
    description: t("Future L3 autonomous driving flagship.", "Le futur vaisseau amiral de la conduite autonome L3.", "\u0631\u0627\u0626\u062F\u0629 \u0627\u0644\u0642\u064A\u0627\u062F\u0629 \u0627\u0644\u0630\u0627\u062A\u064A\u0629 L3 \u0627\u0644\u0645\u0633\u062A\u0642\u0628\u0644\u064A\u0629."),
    price: t("Coming 2026", "Pr\xE9vu pour 2026", "\u0642\u0627\u062F\u0645 \u0641\u064A 2026"),
    heroImage: "/voyah-resources/models/titan_ultra_hero.jpg",
    logo: "/voyah-resources/models/titan_ultra_logo.png",
    gallery: [],
    metrics: []
  }),
  makeModel({
    slug: "everest.html",
    title: t("Everest (2026)", "Everest (2026)", "\u0625\u064A\u0641\u0631\u0633\u062A (2026)"),
    subtitle: t("Next-gen flagship", "Vaisseau amiral de nouvelle g\xE9n\xE9ration", "\u0631\u0627\u0626\u062F\u0629 \u0627\u0644\u062C\u064A\u0644 \u0627\u0644\u0642\u0627\u062F\u0645"),
    description: t("The pinnacle of Voyah innovation.", "Le sommet de l'innovation Voyah.", "\u0642\u0645\u0629 \u0627\u0628\u062A\u0643\u0627\u0631 \u0641\u0648\u064A\u064A\u0627."),
    price: t("Coming 2026", "Pr\xE9vu pour 2026", "\u0642\u0627\u062F\u0645 \u0641\u064A 2026"),
    heroImage: "/voyah-resources/models/everest_hero.jpg",
    logo: "/voyah-resources/models/everest_logo.png",
    gallery: [],
    metrics: []
  })
];
for (const model of models) {
  const displayName = modelDisplayName[model.slug];
  if (isPublicModel(model.slug) && displayName) {
    model.title = displayName;
    model.price = displayName;
  }
}
const infoPages = [
  {
    kind: "info",
    slug: "brand.html",
    eyebrow: t("Brand story", "Histoire de la marque", "\u0642\u0635\u0629 \u0627\u0644\u0639\u0644\u0627\u0645\u0629"),
    title: t("Hello world, I am Voyah!", "Bonjour le monde, je suis Voyah !", "\u0645\u0631\u062D\u0628\u0627\u064B \u0623\u064A\u0647\u0627 \u0627\u0644\u0639\u0627\u0644\u0645\u060C \u0623\u0646\u0627 Voyah!"),
    summary: t(
      'As a premium brand rooted in Chinese culture, Voyah blends Chinese elegance with modern technology. Under the promise of "Intelligent Voyah, Creating Happiness," Voyah works with the new-generation backbone of society to pursue a better life.',
      'En tant que marque premium enracin\xE9e dans la culture chinoise, Voyah associe l\u2019\xE9l\xE9gance chinoise \xE0 la technologie moderne. Sous la promesse de "Voyah intelligente, cr\xE9er le bonheur", Voyah avance avec la nouvelle g\xE9n\xE9ration de forces vives de la soci\xE9t\xE9 pour poursuivre une vie meilleure.',
      '\u0628\u0635\u0641\u062A\u0647\u0627 \u0639\u0644\u0627\u0645\u0629 \u0631\u0627\u0642\u064A\u0629 \u0645\u062A\u062C\u0630\u0631\u0629 \u0641\u064A \u0627\u0644\u062B\u0642\u0627\u0641\u0629 \u0627\u0644\u0635\u064A\u0646\u064A\u0629\u060C \u062A\u0645\u0632\u062C Voyah \u0628\u064A\u0646 \u0627\u0644\u0623\u0646\u0627\u0642\u0629 \u0627\u0644\u0635\u064A\u0646\u064A\u0629 \u0648\u0627\u0644\u062A\u0643\u0646\u0648\u0644\u0648\u062C\u064A\u0627 \u0627\u0644\u062D\u062F\u064A\u062B\u0629. \u0648\u0636\u0645\u0646 \u0648\u0639\u062F "Voyah \u0627\u0644\u0630\u0643\u064A\u0629\u060C \u062A\u0635\u0646\u0639 \u0627\u0644\u0633\u0639\u0627\u062F\u0629"\u060C \u062A\u0633\u064A\u0631 \u0645\u0639 \u0627\u0644\u062C\u064A\u0644 \u0627\u0644\u062C\u062F\u064A\u062F \u0645\u0646 \u0627\u0644\u0642\u0648\u0649 \u0627\u0644\u0641\u0627\u0639\u0644\u0629 \u0641\u064A \u0627\u0644\u0645\u062C\u062A\u0645\u0639 \u0646\u062D\u0648 \u062D\u064A\u0627\u0629 \u0623\u0641\u0636\u0644.'
    ),
    heroImage: "/assets/voyah/home-image-1.jpg",
    blocks: [
      block("/assets/voyah/home-image-2.jpg", "Brand story", "Histoire de la marque", "\u0642\u0635\u0629 \u0627\u0644\u0639\u0644\u0627\u0645\u0629", "Voyah is a premium brand rooted in Chinese culture and defined by Chinese elegance and modern technology.", "Voyah est une marque premium enracin\xE9e dans la culture chinoise et d\xE9finie par l\u2019\xE9l\xE9gance chinoise et la technologie moderne.", "Voyah \u0639\u0644\u0627\u0645\u0629 \u0631\u0627\u0642\u064A\u0629 \u0645\u062A\u062C\u0630\u0631\u0629 \u0641\u064A \u0627\u0644\u062B\u0642\u0627\u0641\u0629 \u0627\u0644\u0635\u064A\u0646\u064A\u0629 \u0648\u062A\u0642\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0623\u0646\u0627\u0642\u0629 \u0627\u0644\u0635\u064A\u0646\u064A\u0629 \u0648\u0627\u0644\u062A\u0643\u0646\u0648\u0644\u0648\u062C\u064A\u0627 \u0627\u0644\u062D\u062F\u064A\u062B\u0629."),
      block("/assets/voyah/home-image-3.png", "Design philosophy", "Philosophie de design", "\u0641\u0644\u0633\u0641\u0629 \u0627\u0644\u062A\u0635\u0645\u064A\u0645", "A calm, flowing form language that balances warmth, confidence, and forward motion.", "Un langage formel fluide et apais\xE9 qui \xE9quilibre chaleur, assurance et \xE9lan vers l\u2019avant.", "\u0644\u063A\u0629 \u062A\u0635\u0645\u064A\u0645 \u0647\u0627\u062F\u0626\u0629 \u0648\u0627\u0646\u0633\u064A\u0627\u0628\u064A\u0629 \u062A\u0648\u0627\u0632\u0646 \u0628\u064A\u0646 \u0627\u0644\u062F\u0641\u0621 \u0648\u0627\u0644\u062B\u0642\u0629 \u0648\u0627\u0644\u062D\u0631\u0643\u0629 \u0625\u0644\u0649 \u0627\u0644\u0623\u0645\u0627\u0645."),
      block("/assets/voyah/home-image-4.png", "Technology philosophy", "Philosophie technologique", "\u0641\u0644\u0633\u0641\u0629 \u0627\u0644\u062A\u0643\u0646\u0648\u0644\u0648\u062C\u064A\u0627", "Warm technology, human-centered interaction, and intelligent systems work together for a premium experience.", "La technologie chaleureuse, l\u2019interaction centr\xE9e sur l\u2019humain et les syst\xE8mes intelligents travaillent ensemble pour une exp\xE9rience premium.", "\u062A\u0639\u0645\u0644 \u0627\u0644\u062A\u0643\u0646\u0648\u0644\u0648\u062C\u064A\u0627 \u0627\u0644\u0648\u062F\u064A\u0629 \u0648\u0627\u0644\u062A\u0641\u0627\u0639\u0644 \u0627\u0644\u0645\u062A\u0645\u062D\u0648\u0631 \u062D\u0648\u0644 \u0627\u0644\u0625\u0646\u0633\u0627\u0646 \u0648\u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0630\u0643\u064A\u0629 \u0645\u0639\u0627\u064B \u0644\u062A\u0642\u062F\u064A\u0645 \u062A\u062C\u0631\u0628\u0629 \u0631\u0627\u0642\u064A\u0629."),
      block("/assets/voyah/home-image-5.png", "ESSA architecture", "Architecture ESSA", "\u0645\u0646\u0635\u0629 ESSA", "The native intelligent electric architecture brings extreme safety, intuitive control, and all-round comfort.", "L\u2019architecture \xE9lectrique intelligente native apporte une s\xE9curit\xE9 extr\xEAme, une ma\xEEtrise intuitive et un confort global.", "\u062A\u0648\u0641\u0631 \u0627\u0644\u0645\u0646\u0635\u0629 \u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0627\u0644\u0630\u0643\u064A\u0629 \u0627\u0644\u0623\u0635\u0644\u064A\u0629 \u0633\u0644\u0627\u0645\u0629 \u0642\u0635\u0648\u0649 \u0648\u062A\u062D\u0643\u0645\u0627\u064B \u0628\u062F\u064A\u0647\u064A\u0627\u064B \u0648\u0631\u0627\u062D\u0629 \u0634\u0627\u0645\u0644\u0629."),
      block("/assets/voyah/home-image-1.jpg", "Voyah Power", "Voyah Power", "Voyah Power", "A native multi-power technology platform built for power, efficiency, battery safety, and smoothness.", "Une plateforme technologique multi-\xE9nergie native con\xE7ue pour la puissance, l\u2019efficacit\xE9, la s\xE9curit\xE9 batterie et la douceur.", "\u0645\u0646\u0635\u0629 \u062A\u0642\u0646\u064A\u0629 \u0645\u062A\u0639\u062F\u062F\u0629 \u0627\u0644\u0637\u0627\u0642\u0629 \u0623\u0635\u0644\u064A\u0629 \u062A\u062C\u0645\u0639 \u0628\u064A\u0646 \u0627\u0644\u0642\u0648\u0629 \u0648\u0627\u0644\u0643\u0641\u0627\u0621\u0629 \u0648\u0633\u0644\u0627\u0645\u0629 \u0627\u0644\u0628\u0637\u0627\u0631\u064A\u0629 \u0648\u0627\u0644\u0646\u0639\u0648\u0645\u0629.")
    ]
  },
  {
    kind: "info",
    slug: "store.html",
    eyebrow: t("Store center", "Centre de magasins", "\u0645\u0631\u0643\u0632 \u0627\u0644\u0645\u0639\u0627\u0631\u0636"),
    title: t("Store Center", "Centre de magasins", "\u0645\u0631\u0643\u0632 \u0627\u0644\u0645\u0639\u0627\u0631\u0636"),
    summary: t("Find Voyah spaces, full-function user centers, delivery centers, and service centers near you.", "Trouvez les espaces Voyah, centres utilisateurs \xE0 service complet, centres de livraison et centres de service pr\xE8s de chez vous.", "\u0627\u0639\u062B\u0631 \u0639\u0644\u0649 \u0645\u0633\u0627\u062D\u0627\u062A Voyah \u0648\u0645\u0631\u0627\u0643\u0632 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646 \u0645\u062A\u0643\u0627\u0645\u0644\u0629 \u0627\u0644\u0648\u0638\u0627\u0626\u0641 \u0648\u0645\u0631\u0627\u0643\u0632 \u0627\u0644\u062A\u0633\u0644\u064A\u0645 \u0648\u0645\u0631\u0627\u0643\u0632 \u0627\u0644\u062E\u062F\u0645\u0629 \u0627\u0644\u0642\u0631\u064A\u0628\u0629 \u0645\u0646\u0643."),
    heroImage: "/assets/voyah/home-image-6.png",
    metrics: [
      metric("Retail", "Experience type", "Type d\u2019exp\xE9rience", "\u0646\u0648\u0639 \u0627\u0644\u062A\u062C\u0631\u0628\u0629"),
      metric("1 journey", "Service flow", "Parcours de service", "\u0645\u0633\u0627\u0631 \u0627\u0644\u062E\u062F\u0645\u0629"),
      metric("User center", "Ownership touchpoint", "Point de contact", "\u0646\u0642\u0637\u0629 \u0627\u0644\u062A\u0648\u0627\u0635\u0644")
    ],
    blocks: [
      block("/assets/voyah/home-image-7.jpg", "Voyah Space and full-function user center", "Espace Voyah et centre utilisateur \xE0 service complet", "\u0645\u0633\u0627\u062D\u0629 Voyah \u0648\u0645\u0631\u0643\u0632 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0645\u062A\u0643\u0627\u0645\u0644 \u0627\u0644\u0648\u0638\u0627\u0626\u0641", "Voyah retail spaces combine consultation, experience, booking, and delivery support in one premium environment.", "Les espaces de vente Voyah r\xE9unissent conseil, exp\xE9rience, r\xE9servation et accompagnement \xE0 la livraison dans un m\xEAme environnement premium.", "\u062A\u062C\u0645\u0639 \u0645\u0633\u0627\u062D\u0627\u062A Voyah \u0628\u064A\u0646 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0648\u0627\u0644\u062A\u062C\u0631\u0628\u0629 \u0648\u0627\u0644\u062D\u062C\u0632 \u0648\u062F\u0639\u0645 \u0627\u0644\u062A\u0633\u0644\u064A\u0645 \u0641\u064A \u0628\u064A\u0626\u0629 \u0641\u0627\u062E\u0631\u0629 \u0648\u0627\u062D\u062F\u0629."),
      block("/assets/voyah/home-image-8.png", "Model discovery and test-drive coordination", "D\xE9couverte des mod\xE8les et coordination des essais", "\u0627\u0643\u062A\u0634\u0627\u0641 \u0627\u0644\u0637\u0631\u0627\u0632\u0627\u062A \u0648\u062A\u0646\u0633\u064A\u0642 \u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u0642\u064A\u0627\u062F\u0629", "The store route helps users move from first contact to test-drive confidence through a calm, guided experience.", "Le parcours en magasin aide l\u2019utilisateur \xE0 passer du premier contact \xE0 la confiance de l\u2019essai gr\xE2ce \xE0 une exp\xE9rience calme et guid\xE9e.", "\u064A\u0633\u0627\u0639\u062F \u0627\u0644\u0645\u0633\u0627\u0631 \u062F\u0627\u062E\u0644 \u0627\u0644\u0645\u0639\u0631\u0636 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0639\u0644\u0649 \u0627\u0644\u0627\u0646\u062A\u0642\u0627\u0644 \u0645\u0646 \u0623\u0648\u0644 \u062A\u0648\u0627\u0635\u0644 \u0625\u0644\u0649 \u0627\u0644\u062B\u0642\u0629 \u0641\u064A \u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u0642\u064A\u0627\u062F\u0629 \u0639\u0628\u0631 \u062A\u062C\u0631\u0628\u0629 \u0647\u0627\u062F\u0626\u0629 \u0648\u0645\u0648\u062C\u0647\u0629."),
      block("/assets/voyah/home-image-9.png", "Ordering, delivery, and ownership onboarding", "Commande, livraison et prise en main de la possession", "\u0627\u0644\u0637\u0644\u0628 \u0648\u0627\u0644\u062A\u0633\u0644\u064A\u0645 \u0648\u0627\u0644\u062A\u0647\u064A\u0626\u0629 \u0644\u0644\u0645\u0644\u0643\u064A\u0629", "Ordering support, delivery preparation, and digital onboarding extend the premium experience beyond the visit.", "L\u2019accompagnement \xE0 la commande, la pr\xE9paration \xE0 la livraison et l\u2019int\xE9gration num\xE9rique prolongent l\u2019exp\xE9rience premium au-del\xE0 de la visite.", "\u064A\u0645\u062F \u062F\u0639\u0645 \u0627\u0644\u0637\u0644\u0628 \u0648\u062A\u062C\u0647\u064A\u0632 \u0627\u0644\u062A\u0633\u0644\u064A\u0645 \u0648\u0627\u0644\u062A\u0647\u064A\u0626\u0629 \u0627\u0644\u0631\u0642\u0645\u064A\u0629 \u0627\u0644\u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u0641\u0627\u062E\u0631\u0629 \u0625\u0644\u0649 \u0645\u0627 \u0628\u0639\u062F \u0627\u0644\u0632\u064A\u0627\u0631\u0629."),
      block("/assets/voyah/home-image-10.png", "Service reception and aftersales coordination", "Accueil service et coordination apr\xE8s-vente", "\u0627\u0644\u0627\u0633\u062A\u0642\u0628\u0627\u0644 \u0627\u0644\u062E\u062F\u0645\u064A \u0648\u062A\u0646\u0633\u064A\u0642 \u0645\u0627 \u0628\u0639\u062F \u0627\u0644\u0628\u064A\u0639", "Service appointments, handoffs, and follow-up are coordinated so that support feels consistent at every touchpoint.", "Les rendez-vous service, la remise du v\xE9hicule et le suivi sont coordonn\xE9s afin que l\u2019assistance reste coh\xE9rente \xE0 chaque point de contact.", "\u062A\u064F\u0646\u0633\u0651\u064E\u0642 \u0645\u0648\u0627\u0639\u064A\u062F \u0627\u0644\u062E\u062F\u0645\u0629 \u0648\u062A\u0633\u0644\u064A\u0645 \u0627\u0644\u0633\u064A\u0627\u0631\u0629 \u0648\u0627\u0644\u0645\u062A\u0627\u0628\u0639\u0629 \u0628\u062D\u064A\u062B \u062A\u0628\u062F\u0648 \u0627\u0644\u0645\u0633\u0627\u0646\u062F\u0629 \u0645\u062A\u0633\u0642\u0629 \u0639\u0628\u0631 \u0643\u0644 \u0646\u0642\u0637\u0629 \u062A\u0648\u0627\u0635\u0644.")
    ],
    ctaLabel: t("Book a visit", "R\xE9server une visite", "\u0627\u062D\u062C\u0632 \u0632\u064A\u0627\u0631\u0629"),
    ctaSlug: "book-drive.html"
  },
  {
    kind: "info",
    slug: "service.html",
    eyebrow: t("Service", "Service", "\u0627\u0644\u062E\u062F\u0645\u0629"),
    title: t("Voyah Service", "Service Voyah", "\u062E\u062F\u0645\u0627\u062A Voyah"),
    summary: t("You are responsible for free pursuit of dreams; Voyah is responsible for attentive protection.", "Vous \xEAtes responsable de la poursuite libre des r\xEAves; Voyah est responsable d\u2019une protection attentive.", "\u0623\u0646\u062A \u0645\u0633\u0624\u0648\u0644 \u0639\u0646 \u0627\u0644\u0633\u0639\u064A \u0627\u0644\u062D\u0631 \u0648\u0631\u0627\u0621 \u0627\u0644\u0623\u062D\u0644\u0627\u0645\u060C \u0648Voyah \u0645\u0633\u0624\u0648\u0644\u0629 \u0639\u0646 \u0627\u0644\u062D\u0645\u0627\u064A\u0629 \u0627\u0644\u062F\u0642\u064A\u0642\u0629."),
    heroImage: "/assets/voyah/home-image-7.jpg",
    blocks: [
      block("/assets/voyah/home-image-11.jpg", "Sincere reception", "Accueil sinc\xE8re", "\u0627\u0633\u062A\u0642\u0628\u0627\u0644 \u0635\u0627\u062F\u0642", "Every detail is treated with sincerity.", "Chaque d\xE9tail est trait\xE9 avec sinc\xE9rit\xE9.", "\u064A\u064F\u0639\u0627\u0645\u0644 \u0643\u0644 \u062A\u0641\u0635\u064A\u0644 \u0628\u0625\u062E\u0644\u0627\u0635."),
      block("/assets/voyah/home-image-12.jpg", "Ceremonial delivery", "Livraison c\xE9r\xE9monielle", "\u062A\u0633\u0644\u064A\u0645 \u0627\u062D\u062A\u0641\u0627\u0644\u064A", "Every promise is honored with ceremony.", "Chaque promesse est honor\xE9e avec c\xE9r\xE9monie.", "\u064A\u064F\u0648\u0641\u0649 \u0628\u0643\u0644 \u0648\u0639\u062F \u0628\u0637\u0627\u0628\u0639 \u0627\u062D\u062A\u0641\u0627\u0644\u064A."),
      block("/assets/voyah/home-image-13.jpg", "7\xD724-hour protection", "Protection 7\xD724 h", "\u062D\u0645\u0627\u064A\u0629 \u0639\u0644\u0649 \u0645\u062F\u0627\u0631 7\xD724 \u0633\u0627\u0639\u0629", "Voyah stands guard for every journey around the clock.", "Voyah veille sur chaque trajet jour et nuit.", "\u062A\u0638\u0644 Voyah \u0641\u064A \u062E\u062F\u0645\u0629 \u0643\u0644 \u0631\u062D\u0644\u0629 \u0639\u0644\u0649 \u0645\u062F\u0627\u0631 \u0627\u0644\u0633\u0627\u0639\u0629."),
      block("/assets/voyah/home-image-14.jpg", "Professional team", "\xC9quipe professionnelle", "\u0641\u0631\u064A\u0642 \u0645\u062D\u062A\u0631\u0641", "A trustworthy full-journey service experience.", "Une exp\xE9rience de service compl\xE8te et digne de confiance.", "\u062A\u062C\u0631\u0628\u0629 \u062E\u062F\u0645\u0629 \u0645\u0648\u062B\u0648\u0642\u0629 \u0639\u0644\u0649 \u0627\u0645\u062A\u062F\u0627\u062F \u0627\u0644\u0631\u062D\u0644\u0629.")
    ]
  },
  {
    kind: "info",
    slug: "energy.html",
    eyebrow: t("Energy", "\xC9nergie", "\u0627\u0644\u0637\u0627\u0642\u0629"),
    title: t("Voyah Energy", "\xC9nergie Voyah", "\u0637\u0627\u0642\u0629 Voyah"),
    summary: t(
      "A connected energy ecosystem combining charging access, route intelligence, and long-distance confidence.",
      "Un \xE9cosyst\xE8me \xE9nergie connect\xE9 qui combine l\u2019acc\xE8s \xE0 la recharge, l\u2019intelligence d\u2019itin\xE9raire et la confiance sur longue distance.",
      "\u0645\u0646\u0638\u0648\u0645\u0629 \u0637\u0627\u0642\u0629 \u0645\u062A\u0631\u0627\u0628\u0637\u0629 \u062A\u062C\u0645\u0639 \u0628\u064A\u0646 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0627\u0644\u0634\u062D\u0646 \u0648\u0630\u0643\u0627\u0621 \u0627\u0644\u0645\u0633\u0627\u0631 \u0648\u0627\u0644\u062B\u0642\u0629 \u0641\u064A \u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0637\u0648\u064A\u0644\u0629."
    ),
    heroImage: "/assets/voyah/home-image-15.jpg",
    metrics: [
      metric("1,540,000+", "Integrated charging resources", "Ressources de recharge int\xE9gr\xE9es", "\u0645\u0648\u0627\u0631\u062F \u0627\u0644\u0634\u062D\u0646 \u0627\u0644\u0645\u062F\u0645\u062C\u0629"),
      metric("16,000+", "Ultra-fast charging resources", "Ressources de recharge ultra-rapide", "\u0645\u0648\u0627\u0631\u062F \u0627\u0644\u0634\u062D\u0646 \u0641\u0627\u0626\u0642 \u0627\u0644\u0633\u0631\u0639\u0629"),
      metric("530,000,000+ kWh", "Cumulative charging delivered", "Recharge cumul\xE9e fournie", "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0637\u0627\u0642\u0629 \u0627\u0644\u0645\u0634\u062D\u0648\u0646\u0629"),
      metric("170,000+ tons", "Cumulative carbon reduction", "R\xE9duction carbone cumul\xE9e", "\u0625\u062C\u0645\u0627\u0644\u064A \u062E\u0641\u0636 \u0627\u0646\u0628\u0639\u0627\u062B\u0627\u062A \u0627\u0644\u0643\u0631\u0628\u0648\u0646")
    ],
    blocks: [
      block("/assets/voyah/home-image-15.jpg", "Network collaboration", "Collaboration r\xE9seau", "\u062A\u0643\u0627\u0645\u0644 \u0627\u0644\u0634\u0628\u0643\u0629", "Voyah Energy links brand, partner, and public charging infrastructure into one coordinated user-facing network.", "Voyah Energy relie les infrastructures de recharge de la marque, des partenaires et du r\xE9seau public dans un m\xEAme syst\xE8me coordonn\xE9.", "\u062A\u0631\u0628\u0637 \u0637\u0627\u0642\u0629 Voyah \u0628\u064A\u0646 \u0628\u0646\u064A\u0629 \u0627\u0644\u0634\u062D\u0646 \u0627\u0644\u062A\u0627\u0628\u0639\u0629 \u0644\u0644\u0639\u0644\u0627\u0645\u0629 \u0648\u0627\u0644\u0634\u0631\u0643\u0627\u0621 \u0648\u0627\u0644\u0634\u0628\u0643\u0629 \u0627\u0644\u0639\u0627\u0645\u0629 \u0636\u0645\u0646 \u0646\u0638\u0627\u0645 \u0645\u0648\u062D\u062F \u0648\u0645\u0646\u0633\u0642."),
      block("/assets/voyah/home-image-16.png", "Fast replenishment", "Recharge rapide", "\u0625\u0639\u0627\u062F\u0629 \u0634\u062D\u0646 \u0633\u0631\u064A\u0639\u0629", "High-power charging scenarios are optimized for both daily commutes and long-distance travel rhythms.", "Les sc\xE9narios de recharge haute puissance sont optimis\xE9s pour les trajets quotidiens comme pour les longues distances.", "\u062A\u0645 \u062A\u062D\u0633\u064A\u0646 \u0633\u064A\u0646\u0627\u0631\u064A\u0648\u0647\u0627\u062A \u0627\u0644\u0634\u062D\u0646 \u0639\u0627\u0644\u064A \u0627\u0644\u0642\u062F\u0631\u0629 \u0644\u062A\u0646\u0627\u0633\u0628 \u0627\u0644\u062A\u0646\u0642\u0644 \u0627\u0644\u064A\u0648\u0645\u064A \u0648\u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0637\u0648\u064A\u0644\u0629."),
      block("/assets/voyah/home-image-17.png", "Smart route planning", "Planification intelligente", "\u062A\u062E\u0637\u064A\u0637 \u0630\u0643\u064A \u0644\u0644\u0645\u0633\u0627\u0631", "Digital guidance helps users plan charging stops based on route length, station availability, and vehicle status.", "Le guidage num\xE9rique aide \xE0 planifier les arr\xEAts de recharge selon la distance, la disponibilit\xE9 des stations et l\u2019\xE9tat du v\xE9hicule.", "\u064A\u0633\u0627\u0639\u062F \u0627\u0644\u0625\u0631\u0634\u0627\u062F \u0627\u0644\u0631\u0642\u0645\u064A \u0639\u0644\u0649 \u062A\u062E\u0637\u064A\u0637 \u0645\u062D\u0637\u0627\u062A \u0627\u0644\u0634\u062D\u0646 \u0648\u0641\u0642 \u0637\u0648\u0644 \u0627\u0644\u0645\u0633\u0627\u0631 \u0648\u062A\u0648\u0641\u0631 \u0627\u0644\u0645\u062D\u0637\u0627\u062A \u0648\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u0631\u0643\u0628\u0629."),
      block("/assets/voyah/home-image-18.png", "Long-term sustainability", "Durabilit\xE9 long terme", "\u0627\u0633\u062A\u062F\u0627\u0645\u0629 \u0637\u0648\u064A\u0644\u0629 \u0627\u0644\u0645\u062F\u0649", "The energy platform supports efficient operation and contributes to measurable long-term carbon reduction outcomes.", "La plateforme \xE9nerg\xE9tique soutient une exploitation efficace et contribue \xE0 des r\xE9sultats mesurables de r\xE9duction carbone.", "\u062A\u062F\u0639\u0645 \u0645\u0646\u0635\u0629 \u0627\u0644\u0637\u0627\u0642\u0629 \u0627\u0644\u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u0641\u0639\u0627\u0644 \u0648\u062A\u0633\u0647\u0645 \u0641\u064A \u0646\u062A\u0627\u0626\u062C \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u0642\u064A\u0627\u0633 \u0644\u062E\u0641\u0636 \u0627\u0644\u0627\u0646\u0628\u0639\u0627\u062B\u0627\u062A \u0639\u0644\u0649 \u0627\u0644\u0645\u062F\u0649 \u0627\u0644\u0637\u0648\u064A\u0644.")
    ]
  },
  {
    kind: "info",
    slug: "corporate.html",
    eyebrow: t("About Voyah", "\xC0 propos de Voyah", "\u0639\u0646 Voyah"),
    title: t("Corporate Culture", "Culture d\u2019entreprise", "\u0627\u0644\u062B\u0642\u0627\u0641\u0629 \u0627\u0644\u0645\u0624\u0633\u0633\u064A\u0629"),
    summary: t("Voyah is committed to becoming a user-oriented technology company and a trusted Chinese premium intelligent new-energy vehicle brand.", "Voyah s\u2019engage \xE0 devenir une entreprise technologique orient\xE9e utilisateur et une marque chinoise premium de v\xE9hicules intelligents \xE0 \xE9nergie nouvelle digne de confiance.", "\u062A\u0644\u062A\u0632\u0645 Voyah \u0628\u0623\u0646 \u062A\u0635\u0628\u062D \u0634\u0631\u0643\u0629 \u062A\u0642\u0646\u064A\u0629 \u0645\u0648\u062C\u0647\u0629 \u0644\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0648\u0639\u0644\u0627\u0645\u0629 \u0635\u064A\u0646\u064A\u0629 \u0631\u0627\u0642\u064A\u0629 \u0645\u0648\u062B\u0648\u0642\u0629 \u0641\u064A \u0627\u0644\u0645\u0631\u0643\u0628\u0627\u062A \u0627\u0644\u0630\u0643\u064A\u0629 \u0627\u0644\u0639\u0627\u0645\u0644\u0629 \u0628\u0627\u0644\u0637\u0627\u0642\u0629 \u0627\u0644\u062C\u062F\u064A\u062F\u0629."),
    heroImage: "/assets/voyah/home-image-19.png",
    blocks: [
      block("/assets/voyah/home-image-20.jpg", "Mission", "Mission", "\u0627\u0644\u0645\u0647\u0645\u0629", "Voyah is committed to becoming a user-oriented technology company.", "Voyah s\u2019engage \xE0 devenir une entreprise technologique orient\xE9e utilisateur.", "\u062A\u0644\u062A\u0632\u0645 Voyah \u0628\u0623\u0646 \u062A\u0635\u0628\u062D \u0634\u0631\u0643\u0629 \u062A\u0642\u0646\u064A\u0629 \u0645\u0648\u062C\u0647\u0629 \u0644\u0644\u0645\u0633\u062A\u062E\u062F\u0645."),
      block("/assets/voyah/home-image-21.png", "Vision", "Vision", "\u0627\u0644\u0631\u0624\u064A\u0629", "A trusted Chinese premium intelligent new-energy vehicle brand.", "Une marque chinoise premium de v\xE9hicules intelligents \xE0 \xE9nergie nouvelle digne de confiance.", "\u0639\u0644\u0627\u0645\u0629 \u0635\u064A\u0646\u064A\u0629 \u0631\u0627\u0642\u064A\u0629 \u0645\u0648\u062B\u0648\u0642\u0629 \u0641\u064A \u0627\u0644\u0645\u0631\u0643\u0628\u0627\u062A \u0627\u0644\u0630\u0643\u064A\u0629 \u0627\u0644\u0639\u0627\u0645\u0644\u0629 \u0628\u0627\u0644\u0637\u0627\u0642\u0629 \u0627\u0644\u062C\u062F\u064A\u062F\u0629."),
      block("/assets/voyah/home-image-22.png", "Core values", "Valeurs fondamentales", "\u0627\u0644\u0642\u064A\u0645 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629", "Responsibility, sincerity, quality, and continuous refinement.", "Responsabilit\xE9, sinc\xE9rit\xE9, qualit\xE9 et am\xE9lioration continue.", "\u0627\u0644\u0645\u0633\u0624\u0648\u0644\u064A\u0629 \u0648\u0627\u0644\u0635\u062F\u0642 \u0648\u0627\u0644\u062C\u0648\u062F\u0629 \u0648\u0627\u0644\u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u0645\u0633\u062A\u0645\u0631."),
      block("/assets/voyah/home-image-23.png", "Technology philosophy", "Philosophie technologique", "\u0641\u0644\u0633\u0641\u0629 \u0627\u0644\u062A\u0643\u0646\u0648\u0644\u0648\u062C\u064A\u0627", "Architecture, intelligence, safety, and efficiency as one connected system.", "Architecture, intelligence, s\xE9curit\xE9 et efficacit\xE9 dans un seul syst\xE8me connect\xE9.", "\u0627\u0644\u0628\u0646\u064A\u0629 \u0648\u0627\u0644\u0630\u0643\u0627\u0621 \u0648\u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u0648\u0627\u0644\u0643\u0641\u0627\u0621\u0629 \u0636\u0645\u0646 \u0645\u0646\u0638\u0648\u0645\u0629 \u0645\u062A\u0631\u0627\u0628\u0637\u0629 \u0648\u0627\u062D\u062F\u0629."),
      block("/assets/voyah/home-image-24.png", "User value orientation", "Orientation vers la valeur utilisateur", "\u062A\u0648\u062C\u0647 \u0627\u0644\u0642\u064A\u0645\u0629 \u0644\u0644\u0645\u0633\u062A\u062E\u062F\u0645", "Decisions guided by long-term user value.", "Des d\xE9cisions guid\xE9es par la valeur utilisateur \xE0 long terme.", "\u0642\u0631\u0627\u0631\u0627\u062A \u062A\u0633\u062A\u0631\u0634\u062F \u0628\u0627\u0644\u0642\u064A\u0645\u0629 \u0637\u0648\u064A\u0644\u0629 \u0627\u0644\u0623\u0645\u062F \u0644\u0644\u0645\u0633\u062A\u062E\u062F\u0645."),
      block("/assets/voyah/home-image-25.png", "China-rooted, globally aware", "Ancr\xE9e en Chine, ouverte au monde", "\u0645\u062A\u062C\u0630\u0631\u0629 \u0641\u064A \u0627\u0644\u0635\u064A\u0646 \u0648\u0645\u0646\u0641\u062A\u062D\u0629 \u0639\u0627\u0644\u0645\u064A\u0627\u064B", "A clear global outlook in product, technology, and service standards.", "Une ouverture internationale nette dans les standards produit, technologiques et de service.", "\u0631\u0624\u064A\u0629 \u0639\u0627\u0644\u0645\u064A\u0629 \u0648\u0627\u0636\u062D\u0629 \u0641\u064A \u0645\u0639\u0627\u064A\u064A\u0631 \u0627\u0644\u0645\u0646\u062A\u062C \u0648\u0627\u0644\u062A\u0642\u0646\u064A\u0629 \u0648\u0627\u0644\u062E\u062F\u0645\u0629.")
    ]
  },
  {
    kind: "info",
    slug: "joinus.html",
    eyebrow: t("Careers", "Carri\xE8res", "\u0627\u0644\u0648\u0638\u0627\u0626\u0641"),
    title: t("Join Us", "Rejoignez-nous", "\u0627\u0646\u0636\u0645 \u0625\u0644\u064A\u0646\u0627"),
    summary: t(
      "We look forward to your joining so that we can build the blueprint together.",
      "Nous attendons votre arriv\xE9e pour construire ensemble le plan d\u2019avenir.",
      "\u0646\u062A\u0637\u0644\u0639 \u0625\u0644\u0649 \u0627\u0646\u0636\u0645\u0627\u0645\u0643 \u062D\u062A\u0649 \u0646\u0628\u0646\u064A \u0645\u0639\u0627\u064B \u0627\u0644\u0645\u062E\u0637\u0637 \u0627\u0644\u0645\u0633\u062A\u0642\u0628\u0644\u064A."
    ),
    heroImage: "/assets/voyah/home-image-26.png",
    blocks: [
      block(
        "/assets/voyah/home-image-27.png",
        "Campus recruitment",
        "Recrutement campus",
        "\u0627\u0644\u062A\u0648\u0638\u064A\u0641 \u0627\u0644\u062C\u0627\u0645\u0639\u064A",
        "Campus recruitment paths for young talent in engineering, design, digital systems, and user-facing roles.",
        "Des parcours de recrutement campus pour les jeunes talents en ing\xE9nierie, design, syst\xE8mes num\xE9riques et m\xE9tiers orient\xE9s utilisateur.",
        "\u0645\u0633\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u0648\u0638\u064A\u0641 \u0627\u0644\u062C\u0627\u0645\u0639\u064A \u062A\u0633\u062A\u0647\u062F\u0641 \u0627\u0644\u0645\u0648\u0627\u0647\u0628 \u0627\u0644\u0634\u0627\u0628\u0629 \u0641\u064A \u0627\u0644\u0647\u0646\u062F\u0633\u0629 \u0648\u0627\u0644\u062A\u0635\u0645\u064A\u0645 \u0648\u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0631\u0642\u0645\u064A\u0629 \u0648\u0627\u0644\u0623\u062F\u0648\u0627\u0631 \u0627\u0644\u0645\u0648\u0627\u062C\u0647\u0629 \u0644\u0644\u0645\u0633\u062A\u062E\u062F\u0645."
      ),
      block(
        "/assets/voyah/home-image-28.png",
        "Social recruitment",
        "Recrutement externe",
        "\u0627\u0644\u062A\u0648\u0638\u064A\u0641 \u0645\u0646 \u0627\u0644\u0633\u0648\u0642",
        "Experienced talent for product, manufacturing, digital, and service roles.",
        "Des talents exp\xE9riment\xE9s pour les m\xE9tiers du produit, de l\u2019industrie, du num\xE9rique et du service.",
        "\u0645\u0648\u0627\u0647\u0628 \u0630\u0627\u062A \u062E\u0628\u0631\u0629 \u0641\u064A \u0623\u062F\u0648\u0627\u0631 \u0627\u0644\u0645\u0646\u062A\u062C \u0648\u0627\u0644\u062A\u0635\u0646\u064A\u0639 \u0648\u0627\u0644\u0631\u0642\u0645\u0646\u0629 \u0648\u0627\u0644\u062E\u062F\u0645\u0629."
      ),
      block(
        "/assets/voyah/home-image-29.jpg",
        "Scan to join the Voyah family",
        "Scanner pour rejoindre la famille Voyah",
        "\u0627\u0645\u0633\u062D \u0644\u0644\u0627\u0646\u0636\u0645\u0627\u0645 \u0625\u0644\u0649 \u0639\u0627\u0626\u0644\u0629 Voyah",
        "Recruitment information and role matching are organized for prospective candidates.",
        "L\u2019information de recrutement et l\u2019ad\xE9quation des postes sont organis\xE9es pour les candidats.",
        "\u062A\u064F\u0646\u0638\u0645 \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u062A\u0648\u0638\u064A\u0641 \u0648\u0645\u0648\u0627\u0621\u0645\u0629 \u0627\u0644\u0623\u062F\u0648\u0627\u0631 \u0644\u0644\u0645\u0631\u0634\u062D\u064A\u0646 \u0627\u0644\u0645\u062D\u062A\u0645\u0644\u064A\u0646."
      )
    ]
  },
  {
    kind: "info",
    slug: "recruit-partners.html",
    eyebrow: t("Partners", "Partenaires", "\u0627\u0644\u0634\u0631\u0643\u0627\u0621"),
    title: t("Partner Recruitment", "Recrutement de partenaires", "\u0627\u0633\u062A\u0642\u0637\u0627\u0628 \u0627\u0644\u0634\u0631\u0643\u0627\u0621"),
    summary: t("Build broader user reach through retail, delivery, and service collaboration.", "D\xE9veloppez une port\xE9e utilisateur plus large gr\xE2ce \xE0 la collaboration retail, livraison et service.", "\u0627\u0628\u0646\u0648\u0627 \u0646\u0637\u0627\u0642 \u0648\u0635\u0648\u0644 \u0623\u0648\u0633\u0639 \u0625\u0644\u0649 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646 \u0639\u0628\u0631 \u0627\u0644\u062A\u0639\u0627\u0648\u0646 \u0641\u064A \u0627\u0644\u0628\u064A\u0639 \u0648\u0627\u0644\u062A\u0633\u0644\u064A\u0645 \u0648\u0627\u0644\u062E\u062F\u0645\u0629."),
    heroImage: "/assets/voyah/home-image-30.png",
    blocks: [
      block("/assets/voyah/home-image-31.jpg", "Network development", "D\xE9veloppement du r\xE9seau", "\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0634\u0628\u0643\u0629", "Partner recruitment is positioned around long-term market development, regional coverage, and a consistent user experience across retail and service touchpoints.", "Le recrutement de partenaires est pens\xE9 autour du d\xE9veloppement de march\xE9 \xE0 long terme, de la couverture r\xE9gionale et d\u2019une exp\xE9rience utilisateur coh\xE9rente \xE0 travers les points de vente et de service.", "\u064A\u062A\u0645\u062D\u0648\u0631 \u0627\u0633\u062A\u0642\u0637\u0627\u0628 \u0627\u0644\u0634\u0631\u0643\u0627\u0621 \u062D\u0648\u0644 \u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0633\u0648\u0642 \u0639\u0644\u0649 \u0627\u0644\u0645\u062F\u0649 \u0627\u0644\u0637\u0648\u064A\u0644 \u0648\u0627\u0644\u062A\u063A\u0637\u064A\u0629 \u0627\u0644\u0625\u0642\u0644\u064A\u0645\u064A\u0629 \u0648\u062A\u0642\u062F\u064A\u0645 \u062A\u062C\u0631\u0628\u0629 \u0645\u0633\u062A\u062E\u062F\u0645 \u0645\u062A\u0633\u0642\u0629 \u0639\u0628\u0631 \u0646\u0642\u0627\u0637 \u0627\u0644\u0628\u064A\u0639 \u0648\u0627\u0644\u062E\u062F\u0645\u0629."),
      block("/assets/voyah/home-image-32.png", "Capability requirements", "Exigences de capacit\xE9", "\u0645\u062A\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0642\u062F\u0631\u0627\u062A", "Operational readiness, service capability, and premium brand presentation are the core standards in partner evaluation and onboarding.", "La pr\xE9paration op\xE9rationnelle, la capacit\xE9 de service et la pr\xE9sentation premium de la marque constituent les principaux standards de l\u2019\xE9valuation et de l\u2019int\xE9gration des partenaires.", "\u062A\u0645\u062B\u0644 \u0627\u0644\u062C\u0627\u0647\u0632\u064A\u0629 \u0627\u0644\u062A\u0634\u063A\u064A\u0644\u064A\u0629 \u0648\u0627\u0644\u0642\u062F\u0631\u0629 \u0627\u0644\u062E\u062F\u0645\u064A\u0629 \u0648\u062A\u0642\u062F\u064A\u0645 \u0627\u0644\u0639\u0644\u0627\u0645\u0629 \u0628\u0635\u0648\u0631\u0629 \u0641\u0627\u062E\u0631\u0629 \u0627\u0644\u0645\u0639\u0627\u064A\u064A\u0631 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 \u0641\u064A \u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u0634\u0631\u0643\u0627\u0621 \u0648\u0636\u0645\u0647\u0645."),
      block("/assets/voyah/home-image-33.jpg", "Shared growth", "Croissance partag\xE9e", "\u0627\u0644\u0646\u0645\u0648 \u0627\u0644\u0645\u0634\u062A\u0631\u0643", "The cooperation model emphasizes durable capability building and shared growth rather than short-term channel expansion alone.", "Le mod\xE8le de coop\xE9ration privil\xE9gie la construction durable des capacit\xE9s et la croissance partag\xE9e plut\xF4t qu\u2019une expansion de canal \xE0 court terme.", "\u064A\u0631\u0643\u0632 \u0646\u0645\u0648\u0630\u062C \u0627\u0644\u062A\u0639\u0627\u0648\u0646 \u0639\u0644\u0649 \u0628\u0646\u0627\u0621 \u0627\u0644\u0642\u062F\u0631\u0627\u062A \u0628\u0635\u0648\u0631\u0629 \u0645\u0633\u062A\u062F\u0627\u0645\u0629 \u0648\u062A\u062D\u0642\u064A\u0642 \u0646\u0645\u0648 \u0645\u0634\u062A\u0631\u0643 \u0628\u062F\u0644\u0627\u064B \u0645\u0646 \u0627\u0644\u0627\u0643\u062A\u0641\u0627\u0621 \u0628\u062A\u0648\u0633\u064A\u0639 \u0627\u0644\u0642\u0646\u0648\u0627\u062A \u0639\u0644\u0649 \u0627\u0644\u0645\u062F\u0649 \u0627\u0644\u0642\u0635\u064A\u0631.")
    ]
  },
  {
    kind: "info",
    slug: "ir.html",
    eyebrow: t("Investor relations", "Relations investisseurs", "\u0639\u0644\u0627\u0642\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062B\u0645\u0631\u064A\u0646"),
    title: t("Investor Relations", "Relations investisseurs", "\u0639\u0644\u0627\u0642\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062B\u0645\u0631\u064A\u0646"),
    summary: t("Access company information, governance materials, and investor-facing reference documents.", "Acc\xE9dez aux informations de l\u2019entreprise, aux documents de gouvernance et aux supports de r\xE9f\xE9rence destin\xE9s aux investisseurs.", "\u0627\u0637\u0644\u0639 \u0639\u0644\u0649 \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0634\u0631\u0643\u0629 \u0648\u0645\u0648\u0627\u062F \u0627\u0644\u062D\u0648\u0643\u0645\u0629 \u0648\u0627\u0644\u0645\u0633\u062A\u0646\u062F\u0627\u062A \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629 \u0627\u0644\u0645\u0648\u062C\u0647\u0629 \u0625\u0644\u0649 \u0627\u0644\u0645\u0633\u062A\u062B\u0645\u0631\u064A\u0646."),
    heroImage: "/assets/voyah/home-image-34.png",
    blocks: [
      block("/assets/voyah/home-image-35.png", "Company profile", "Profil de l\u2019entreprise", "\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u062A\u0639\u0631\u064A\u0641\u064A \u0644\u0644\u0634\u0631\u0643\u0629", "Core company profile materials are organized for structured review so that investors can quickly understand the company, its positioning, and its strategic direction.", "Les principaux documents de pr\xE9sentation de l\u2019entreprise sont organis\xE9s pour une lecture structur\xE9e afin que les investisseurs comprennent rapidement la soci\xE9t\xE9, son positionnement et sa direction strat\xE9gique.", "\u0646\u064F\u0638\u0645\u062A \u0645\u0648\u0627\u062F \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u062A\u0639\u0631\u064A\u0641\u064A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 \u0628\u0635\u0648\u0631\u0629 \u0645\u0646\u0638\u0645\u0629 \u0643\u064A \u064A\u062A\u0645\u0643\u0646 \u0627\u0644\u0645\u0633\u062A\u062B\u0645\u0631\u0648\u0646 \u0645\u0646 \u0641\u0647\u0645 \u0627\u0644\u0634\u0631\u0643\u0629 \u0648\u062A\u0645\u0648\u0636\u0639\u0647\u0627 \u0648\u0627\u062A\u062C\u0627\u0647\u0647\u0627 \u0627\u0644\u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A \u0628\u0633\u0631\u0639\u0629."),
      block("/assets/voyah/home-image-36.png", "Governance structure", "Structure de gouvernance", "\u0647\u064A\u0643\u0644 \u0627\u0644\u062D\u0648\u0643\u0645\u0629", "Governance information clarifies the company\u2019s institutional structure, oversight framework, and operating principles for long-term development.", "Les informations de gouvernance clarifient la structure institutionnelle de l\u2019entreprise, son cadre de supervision et ses principes de fonctionnement au service du d\xE9veloppement de long terme.", "\u062A\u0648\u0636\u062D \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u062D\u0648\u0643\u0645\u0629 \u0627\u0644\u0647\u064A\u0643\u0644 \u0627\u0644\u0645\u0624\u0633\u0633\u064A \u0644\u0644\u0634\u0631\u0643\u0629 \u0648\u0625\u0637\u0627\u0631 \u0627\u0644\u0631\u0642\u0627\u0628\u0629 \u0648\u0645\u0628\u0627\u062F\u0626 \u0627\u0644\u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u062F\u0627\u0639\u0645\u0629 \u0644\u0644\u062A\u0637\u0648\u0631 \u0637\u0648\u064A\u0644 \u0627\u0644\u0645\u062F\u0649."),
      block("/assets/voyah/home-image-37.png", "Reference materials", "Documents de r\xE9f\xE9rence", "\u0645\u0648\u0627\u062F \u0645\u0631\u062C\u0639\u064A\u0629", "Supporting materials provide additional context for financial review, governance understanding, and strategic reference.", "Les documents compl\xE9mentaires apportent un contexte additionnel pour l\u2019analyse financi\xE8re, la compr\xE9hension de la gouvernance et la r\xE9f\xE9rence strat\xE9gique.", "\u062A\u0648\u0641\u0631 \u0627\u0644\u0645\u0648\u0627\u062F \u0627\u0644\u062F\u0627\u0639\u0645\u0629 \u0633\u064A\u0627\u0642\u0627\u064B \u0625\u0636\u0627\u0641\u064A\u0627\u064B \u0644\u0644\u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0648\u0641\u0647\u0645 \u0627\u0644\u062D\u0648\u0643\u0645\u0629 \u0648\u0627\u0644\u0631\u062C\u0648\u0639 \u0625\u0644\u0649 \u0627\u0644\u062A\u0648\u062C\u0647\u0627\u062A \u0627\u0644\u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629.")
    ]
  },
  {
    kind: "info",
    slug: "environmental.html",
    eyebrow: t("Environmental disclosure", "Informations environnementales", "\u0627\u0644\u0625\u0641\u0635\u0627\u062D \u0627\u0644\u0628\u064A\u0626\u064A"),
    title: t("Environmental Disclosure", "Informations environnementales", "\u0627\u0644\u0625\u0641\u0635\u0627\u062D \u0627\u0644\u0628\u064A\u0626\u064A"),
    summary: t("View official environmental disclosure information released by Voyah for public review.", "Consultez les informations environnementales officielles publi\xE9es par Voyah \xE0 destination du public.", "\u0627\u0637\u0644\u0639 \u0639\u0644\u0649 \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0625\u0641\u0635\u0627\u062D \u0627\u0644\u0628\u064A\u0626\u064A \u0627\u0644\u0631\u0633\u0645\u064A\u0629 \u0627\u0644\u062A\u064A \u062A\u0646\u0634\u0631\u0647\u0627 Voyah \u0644\u0644\u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u0639\u0627\u0645\u0629."),
    heroImage: "/assets/voyah/home-image-1.jpg",
    blocks: [
      block("/assets/voyah/home-image-38.jpg", "Environmental disclosure information", "Informations d\u2019ordre environnemental", "\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0625\u0641\u0635\u0627\u062D \u0627\u0644\u0628\u064A\u0626\u064A", "This section centralizes the official environmental disclosure information released by Voyah for public reference and review.", "Cette section centralise les informations officielles d\u2019ordre environnemental publi\xE9es par Voyah pour la consultation publique.", "\u064A\u0639\u0645\u0644 \u0647\u0630\u0627 \u0627\u0644\u0642\u0633\u0645 \u0639\u0644\u0649 \u062A\u062C\u0645\u064A\u0639 \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0625\u0641\u0635\u0627\u062D \u0627\u0644\u0628\u064A\u0626\u064A \u0627\u0644\u0631\u0633\u0645\u064A\u0629 \u0627\u0644\u0635\u0627\u062F\u0631\u0629 \u0639\u0646 Voyah \u0644\u063A\u0627\u064A\u0627\u062A \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629 \u0648\u0627\u0644\u0627\u0637\u0644\u0627\u0639 \u0627\u0644\u0639\u0627\u0645."),
      block("/assets/voyah/home-image-17.png", "Operational responsibility", "Responsabilit\xE9 op\xE9rationnelle", "\u0627\u0644\u0645\u0633\u0624\u0648\u0644\u064A\u0629 \u0627\u0644\u062A\u0634\u063A\u064A\u0644\u064A\u0629", "Environmental disclosure reflects the company\u2019s operational responsibility and its commitment to compliant, transparent, and sustainable development.", "Les informations environnementales refl\xE8tent la responsabilit\xE9 op\xE9rationnelle de l\u2019entreprise et son engagement en faveur d\u2019un d\xE9veloppement conforme, transparent et durable.", "\u064A\u0639\u0643\u0633 \u0627\u0644\u0625\u0641\u0635\u0627\u062D \u0627\u0644\u0628\u064A\u0626\u064A \u0627\u0644\u0645\u0633\u0624\u0648\u0644\u064A\u0629 \u0627\u0644\u062A\u0634\u063A\u064A\u0644\u064A\u0629 \u0644\u0644\u0634\u0631\u0643\u0629 \u0648\u0627\u0644\u062A\u0632\u0627\u0645\u0647\u0627 \u0628\u0627\u0644\u062A\u0637\u0648\u0631 \u0627\u0644\u0645\u062A\u0648\u0627\u0641\u0642 \u0648\u0627\u0644\u0634\u0641\u0627\u0641 \u0648\u0627\u0644\u0645\u0633\u062A\u062F\u0627\u0645."),
      block("/assets/voyah/home-image-4.png", "Long-term orientation", "Orientation de long terme", "\u0627\u0644\u062A\u0648\u062C\u0647 \u0637\u0648\u064A\u0644 \u0627\u0644\u0645\u062F\u0649", "The disclosure framework emphasizes sustainable operation, ongoing management, and long-term environmental accountability.", "Le cadre de divulgation met l\u2019accent sur une exploitation durable, une gestion continue et une responsabilit\xE9 environnementale de long terme.", "\u064A\u0631\u0643\u0632 \u0625\u0637\u0627\u0631 \u0627\u0644\u0625\u0641\u0635\u0627\u062D \u0639\u0644\u0649 \u0627\u0644\u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u0645\u0633\u062A\u062F\u0627\u0645 \u0648\u0627\u0644\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0633\u062A\u0645\u0631\u0629 \u0648\u0627\u0644\u0645\u0633\u0627\u0621\u0644\u0629 \u0627\u0644\u0628\u064A\u0626\u064A\u0629 \u0637\u0648\u064A\u0644\u0629 \u0627\u0644\u0623\u062C\u0644.")
    ]
  },
  {
    kind: "info",
    slug: "document.html",
    eyebrow: t("Downloads", "T\xE9l\xE9chargements", "\u0627\u0644\u062A\u0646\u0632\u064A\u0644\u0627\u062A"),
    title: t("Document Download", "T\xE9l\xE9chargement de documents", "\u062A\u0646\u0632\u064A\u0644 \u0627\u0644\u0645\u0633\u062A\u0646\u062F\u0627\u062A"),
    summary: t("Download official manuals, reference documents, and related materials released by Voyah.", "T\xE9l\xE9chargez les manuels officiels, documents de r\xE9f\xE9rence et mat\xE9riaux associ\xE9s publi\xE9s par Voyah.", "\u0642\u0645 \u0628\u062A\u0646\u0632\u064A\u0644 \u0627\u0644\u0623\u062F\u0644\u0629 \u0627\u0644\u0631\u0633\u0645\u064A\u0629 \u0648\u0627\u0644\u0645\u0633\u062A\u0646\u062F\u0627\u062A \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629 \u0648\u0627\u0644\u0645\u0648\u0627\u062F \u0627\u0644\u0645\u0631\u062A\u0628\u0637\u0629 \u0627\u0644\u062A\u064A \u062A\u0646\u0634\u0631\u0647\u0627 Voyah."),
    heroImage: "/assets/voyah/home-image-39.png",
    blocks: [
      block("/assets/voyah/home-image-39.png", "User manuals", "Manuels utilisateur", "\u0623\u062F\u0644\u0629 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645", "Vehicle user manuals and owner documents are organized to support onboarding, daily use, and continued ownership reference.", "Les manuels utilisateur et documents propri\xE9taires des v\xE9hicules sont organis\xE9s pour accompagner la prise en main, l\u2019usage quotidien et la consultation continue pendant la possession.", "\u062A\u0645 \u062A\u0646\u0638\u064A\u0645 \u0623\u062F\u0644\u0629 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0648\u0648\u062B\u0627\u0626\u0642 \u0627\u0644\u0645\u0627\u0644\u0643 \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0627\u0644\u0645\u0631\u0643\u0628\u0627\u062A \u0644\u062F\u0639\u0645 \u0627\u0644\u0628\u062F\u0621 \u0641\u064A \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0648\u0627\u0644\u0627\u0633\u062A\u0639\u0645\u0627\u0644 \u0627\u0644\u064A\u0648\u0645\u064A \u0648\u0627\u0644\u0631\u062C\u0648\u0639 \u0625\u0644\u064A\u0647\u0627 \u0623\u062B\u0646\u0627\u0621 \u0641\u062A\u0631\u0629 \u0627\u0644\u0645\u0644\u0643\u064A\u0629."),
      block("/assets/voyah/home-image-40.png", "Reference documents", "Documents de r\xE9f\xE9rence", "\u0645\u0633\u062A\u0646\u062F\u0627\u062A \u0645\u0631\u062C\u0639\u064A\u0629", "Supplementary reference documents are grouped to make searching, downloading, and comparison clearer and more efficient.", "Les documents de r\xE9f\xE9rence compl\xE9mentaires sont regroup\xE9s afin de rendre la recherche, le t\xE9l\xE9chargement et la comparaison plus clairs et plus efficaces.", "\u062C\u064F\u0645\u0639\u062A \u0627\u0644\u0645\u0633\u062A\u0646\u062F\u0627\u062A \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629 \u0627\u0644\u0625\u0636\u0627\u0641\u064A\u0629 \u0644\u062C\u0639\u0644 \u0627\u0644\u0628\u062D\u062B \u0648\u0627\u0644\u062A\u0646\u0632\u064A\u0644 \u0648\u0627\u0644\u0645\u0642\u0627\u0631\u0646\u0629 \u0623\u0648\u0636\u062D \u0648\u0623\u0643\u062B\u0631 \u0643\u0641\u0627\u0621\u0629."),
      block("/assets/voyah/home-image-41.png", "Digital retrieval", "Acc\xE8s num\xE9rique", "\u0627\u0644\u0648\u0635\u0648\u0644 \u0627\u0644\u0631\u0642\u0645\u064A", "Document retrieval is connected to digital touchpoints so that official materials can be found conveniently and consistently.", "La r\xE9cup\xE9ration des documents est reli\xE9e aux points de contact num\xE9riques afin que les supports officiels puissent \xEAtre trouv\xE9s de mani\xE8re pratique et coh\xE9rente.", "\u064A\u0631\u062A\u0628\u0637 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0627\u0644\u0645\u0633\u062A\u0646\u062F\u0627\u062A \u0628\u0646\u0642\u0627\u0637 \u0627\u0644\u0648\u0635\u0648\u0644 \u0627\u0644\u0631\u0642\u0645\u064A\u0629 \u0628\u062D\u064A\u062B \u064A\u0645\u0643\u0646 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0627\u0644\u0645\u0648\u0627\u062F \u0627\u0644\u0631\u0633\u0645\u064A\u0629 \u0628\u0633\u0647\u0648\u0644\u0629 \u0648\u0628\u0635\u0648\u0631\u0629 \u0645\u062A\u0633\u0642\u0629.")
    ]
  },
  {
    kind: "info",
    slug: "purchasing.html",
    eyebrow: t("Procurement", "Achats", "\u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A"),
    title: t("Procurement Information Disclosure", "Informations achats", "\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A"),
    summary: t("View official procurement information, historical procurement data, and supplier-related disclosures from Voyah.", "Consultez les informations achats officielles, les donn\xE9es historiques d\u2019achats et les \xE9l\xE9ments de divulgation li\xE9s aux fournisseurs publi\xE9s par Voyah.", "\u0627\u0637\u0644\u0639 \u0639\u0644\u0649 \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A \u0627\u0644\u0631\u0633\u0645\u064A\u0629 \u0648\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A \u0627\u0644\u062A\u0627\u0631\u064A\u062E\u064A\u0629 \u0648\u0627\u0644\u0625\u0641\u0635\u0627\u062D\u0627\u062A \u0627\u0644\u0645\u0631\u062A\u0628\u0637\u0629 \u0628\u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646 \u0627\u0644\u0645\u0646\u0634\u0648\u0631\u0629 \u0645\u0646 Voyah."),
    heroImage: "/assets/voyah/home-image-42.png",
    blocks: [
      block("/assets/voyah/home-image-42.png", "Procurement information", "Informations achats", "\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A", "Procurement information is disclosed for public reference around supplier cooperation, sourcing transparency, and long-term industrial coordination.", "Les informations achats sont publi\xE9es \xE0 titre de r\xE9f\xE9rence publique autour de la coop\xE9ration fournisseurs, de la transparence du sourcing et de la coordination industrielle de long terme.", "\u064A\u062A\u0645 \u0627\u0644\u0625\u0641\u0635\u0627\u062D \u0639\u0646 \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A \u0644\u0644\u0631\u062C\u0648\u0639 \u0627\u0644\u0639\u0627\u0645 \u062D\u0648\u0644 \u062A\u0639\u0627\u0648\u0646 \u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646 \u0648\u0634\u0641\u0627\u0641\u064A\u0629 \u0627\u0644\u062A\u0648\u0631\u064A\u062F \u0648\u0627\u0644\u062A\u0646\u0633\u064A\u0642 \u0627\u0644\u0635\u0646\u0627\u0639\u064A \u0637\u0648\u064A\u0644 \u0627\u0644\u0623\u0645\u062F."),
      block("/assets/voyah/home-image-16.png", "Historical procurement data", "Donn\xE9es historiques d\u2019achats", "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A \u0627\u0644\u062A\u0627\u0631\u064A\u062E\u064A\u0629", "Historical procurement data supports document review and gives partners a clearer view of the structure and continuity of purchasing activity.", "Les donn\xE9es historiques d\u2019achats soutiennent la consultation documentaire et donnent aux partenaires une vision plus claire de la structure et de la continuit\xE9 de l\u2019activit\xE9 d\u2019achat.", "\u062A\u062F\u0639\u0645 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A \u0627\u0644\u062A\u0627\u0631\u064A\u062E\u064A\u0629 \u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u0645\u0633\u062A\u0646\u062F\u0627\u062A \u0648\u062A\u0645\u0646\u062D \u0627\u0644\u0634\u0631\u0643\u0627\u0621 \u062A\u0635\u0648\u0631\u0627\u064B \u0623\u0648\u0636\u062D \u0639\u0646 \u0647\u064A\u0643\u0644 \u0646\u0634\u0627\u0637 \u0627\u0644\u0634\u0631\u0627\u0621 \u0648\u0627\u0633\u062A\u0645\u0631\u0627\u0631\u064A\u062A\u0647."),
      block("/assets/voyah/home-image-18.png", "Supplier collaboration", "Coop\xE9ration fournisseurs", "\u062A\u0639\u0627\u0648\u0646 \u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646", "Supplier collaboration emphasizes quality standards, delivery reliability, process clarity, and structured long-term cooperation.", "La coop\xE9ration avec les fournisseurs met l\u2019accent sur les standards qualit\xE9, la fiabilit\xE9 d\u2019ex\xE9cution, la clart\xE9 des processus et une coop\xE9ration structur\xE9e sur le long terme.", "\u064A\u0631\u0643\u0632 \u0627\u0644\u062A\u0639\u0627\u0648\u0646 \u0645\u0639 \u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646 \u0639\u0644\u0649 \u0645\u0639\u0627\u064A\u064A\u0631 \u0627\u0644\u062C\u0648\u062F\u0629 \u0648\u0645\u0648\u062B\u0648\u0642\u064A\u0629 \u0627\u0644\u062A\u0646\u0641\u064A\u0630 \u0648\u0648\u0636\u0648\u062D \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0648\u0627\u0644\u062A\u0639\u0627\u0648\u0646 \u0627\u0644\u0645\u0646\u0638\u0645 \u0637\u0648\u064A\u0644 \u0627\u0644\u0623\u0645\u062F.")
    ]
  },
  {
    kind: "info",
    slug: "devis",
    eyebrow: t("Purchase", "Achat", "\u0627\u0644\u0634\u0631\u0627\u0621"),
    title: t("Request a Quote", "Demander un devis", "\u0627\u0637\u0644\u0628 \u0639\u0631\u0636 \u0633\u0639\u0631"),
    summary: t(
      "Tell us which Voyah model interests you and receive a tailored proposal.",
      "Indiquez le mod\xE8le Voyah qui vous int\xE9resse et recevez une proposition adapt\xE9e.",
      "\u0627\u062E\u062A\u0631 \u0637\u0631\u0627\u0632 Voyah \u0627\u0644\u0630\u064A \u064A\u0647\u0645\u0643 \u0648\u0633\u062A\u062A\u0644\u0642\u0649 \u0639\u0631\u0636\u0627\u064B \u0645\u062E\u0635\u0635\u0627\u064B."
    ),
    heroImage: "/voyah-resources/lifestyle/store_hero.jpg",
    blocks: [],
    ctaSlug: "store.html"
  },
  {
    kind: "info",
    slug: "book-drive.html",
    eyebrow: t("Experience", "Exp\xE9rience", "\u0627\u0644\u062A\u062C\u0631\u0628\u0629"),
    title: t("Book a Test Drive", "R\xE9server un essai", "\u0627\u062D\u062C\u0632 \u062A\u062C\u0631\u0628\u0629 \u0642\u064A\u0627\u062F\u0629"),
    summary: t("Book a guided test drive with the Voyah lineup.", "R\xE9servez un essai guid\xE9 avec la gamme Voyah.", "\u0627\u062D\u062C\u0632 \u062A\u062C\u0631\u0628\u0629 \u0642\u064A\u0627\u062F\u0629 \u0645\u0648\u062C\u0651\u0647\u0629 \u0645\u0639 \u0645\u062C\u0645\u0648\u0639\u0629 Voyah."),
    heroImage: "",
    blocks: [
      block("/assets/voyah/home-image-44.png", "Guided selection", "Choix guid\xE9", "\u0627\u062E\u062A\u064A\u0627\u0631 \u0645\u0648\u062C\u0651\u0647", "Prospective owners can narrow the lineup according to usage needs, size preference, and product character before scheduling an in-person drive.", "Les futurs clients peuvent affiner la gamme selon les besoins d\u2019usage, les pr\xE9f\xE9rences d\u2019espace et le caract\xE8re du produit avant de programmer un essai en magasin.", "\u064A\u0645\u0643\u0646 \u0644\u0644\u0639\u0645\u0644\u0627\u0621 \u0627\u0644\u0645\u062D\u062A\u0645\u0644\u064A\u0646 \u062A\u0636\u064A\u064A\u0642 \u0627\u0644\u0627\u062E\u062A\u064A\u0627\u0631 \u0628\u062D\u0633\u0628 \u0627\u062D\u062A\u064A\u0627\u062C\u0627\u062A \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0648\u062A\u0641\u0636\u064A\u0644\u0627\u062A \u0627\u0644\u062D\u062C\u0645 \u0648\u0637\u0627\u0628\u0639 \u0627\u0644\u0645\u0646\u062A\u062C \u0642\u0628\u0644 \u062A\u062D\u062F\u064A\u062F \u0645\u0648\u0639\u062F \u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u0642\u064A\u0627\u062F\u0629 \u0641\u064A \u0627\u0644\u0645\u0639\u0631\u0636."),
      block("/assets/voyah/home-image-45.jpg", "Store coordination", "Coordination en magasin", "\u062A\u0646\u0633\u064A\u0642 \u0627\u0644\u0645\u0639\u0631\u0636", "The booking flow connects directly to the physical store network so that consultation, arrival planning, and drive preparation stay within one smooth process.", "Le parcours de r\xE9servation se connecte directement au r\xE9seau de magasins afin que le conseil, la pr\xE9paration de la visite et l\u2019organisation de l\u2019essai restent dans un processus fluide unique.", "\u064A\u0631\u062A\u0628\u0637 \u0645\u0633\u0627\u0631 \u0627\u0644\u062D\u062C\u0632 \u0645\u0628\u0627\u0634\u0631\u0629 \u0628\u0634\u0628\u0643\u0629 \u0627\u0644\u0645\u0639\u0627\u0631\u0636 \u0627\u0644\u0641\u0639\u0644\u064A\u0629 \u062D\u062A\u0649 \u062A\u0638\u0644 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0648\u0627\u0644\u062A\u062E\u0637\u064A\u0637 \u0644\u0644\u0632\u064A\u0627\u0631\u0629 \u0648\u062A\u062C\u0647\u064A\u0632 \u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u0642\u064A\u0627\u062F\u0629 \u0636\u0645\u0646 \u0639\u0645\u0644\u064A\u0629 \u0633\u0644\u0633\u0629 \u0648\u0627\u062D\u062F\u0629."),
      block("/assets/voyah/home-image-46.png", "Ownership onboarding", "D\xE9couverte de la possession", "\u062A\u0647\u064A\u0626\u0629 \u0627\u0644\u0645\u0644\u0643\u064A\u0629", "A test drive supports not only product discovery but also a clearer understanding of the full ownership journey and service experience.", "L\u2019essai sert non seulement \xE0 d\xE9couvrir le produit, mais aussi \xE0 mieux comprendre le parcours de possession complet et l\u2019exp\xE9rience de service.", "\u0644\u0627 \u062A\u062E\u062F\u0645 \u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u0642\u064A\u0627\u062F\u0629 \u0627\u0643\u062A\u0634\u0627\u0641 \u0627\u0644\u0645\u0646\u062A\u062C \u0641\u0642\u0637\u060C \u0628\u0644 \u062A\u0633\u0627\u0639\u062F \u0623\u064A\u0636\u0627\u064B \u0639\u0644\u0649 \u0641\u0647\u0645 \u0623\u0648\u0636\u062D \u0644\u0631\u062D\u0644\u0629 \u0627\u0644\u0645\u0644\u0643\u064A\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629 \u0648\u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u062E\u062F\u0645\u0629.")
    ],
    ctaSlug: "store.html"
  },
  {
    kind: "info",
    slug: "book-service.html",
    eyebrow: t("After-sales", "Apr\xE8s-vente", "\u0645\u0627 \u0628\u0639\u062F \u0627\u0644\u0628\u064A\u0639"),
    title: t("Book a Service", "Prendre un rendez-vous", "\u062D\u062C\u0632 \u0645\u0648\u0639\u062F \u0635\u064A\u0627\u0646\u0629"),
    summary: t(
      "Schedule an intervention with the Auto Hall after-sales workshop in Tunis.",
      "Planifiez une intervention avec l\u2019atelier apr\xE8s-vente Auto Hall \xE0 Tunis.",
      "\u062D\u062F\u062F \u0645\u0648\u0639\u062F\u0627\u064B \u0645\u0639 \u0648\u0631\u0634\u0629 \u0645\u0627 \u0628\u0639\u062F \u0627\u0644\u0628\u064A\u0639 \u0644\u062F\u0649 \u0623\u0648\u062A\u0648 \u0647\u0648\u0644 \u0641\u064A \u062A\u0648\u0646\u0633."
    ),
    heroImage: "/voyah-resources/service/warranty_hero.jpg",
    blocks: []
  },
  {
    kind: "info",
    slug: "contact.html",
    eyebrow: t("Contact", "Contact", "\u0627\u062A\u0635\u0644 \u0628\u0646\u0627"),
    title: t("Contact Us", "Nous contacter", "\u0627\u062A\u0635\u0644 \u0628\u0646\u0627"),
    summary: t(
      "Any questions? Feel free to contact us.",
      "Une question ? N\u2019h\xE9sitez pas \xE0 nous contacter.",
      "\u0644\u062F\u064A\u0643 \u0633\u0624\u0627\u0644\u061F \u0644\u0627 \u062A\u062A\u0631\u062F\u062F \u0641\u064A \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627."
    ),
    heroImage: "",
    blocks: []
  },
  {
    kind: "info",
    slug: "architecture.html",
    eyebrow: t("Architecture", "Architecture", "\u0627\u0644\u0628\u0646\u064A\u0629 \u0627\u0644\u062A\u0642\u0646\u064A\u0629"),
    title: t("ESSA Architecture", "Architecture ESSA", "\u0645\u0646\u0635\u0629 ESSA"),
    summary: t("The native smart electric architecture.", "L\u2019architecture \xE9lectrique intelligente native.", "\u0627\u0644\u0645\u0646\u0635\u0629 \u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0627\u0644\u0630\u0643\u064A\u0629 \u0627\u0644\u0623\u0635\u0644\u064A\u0629."),
    heroImage: "/voyah-resources/tech/essa_diagram.png",
    blocks: []
  },
  {
    kind: "info",
    slug: "safety.html",
    eyebrow: t("Safety", "S\xE9curit\xE9", "\u0627\u0644\u0633\u0644\u0627\u0645\u0629"),
    title: t("Voyah Safety", "S\xE9curit\xE9 Voyah", "\u0633\u0644\u0627\u0645\u0629 Voyah"),
    summary: t("Battery and structural safety.", "S\xE9curit\xE9 structurelle et de la batterie.", "\u0633\u0644\u0627\u0645\u0629 \u0627\u0644\u0628\u0637\u0627\u0631\u064A\u0629 \u0648\u0627\u0644\u0647\u064A\u0643\u0644."),
    heroImage: "/voyah-resources/tech/battery_shield.png",
    blocks: []
  },
  {
    kind: "info",
    slug: "smart-cockpit.html",
    eyebrow: t("Cockpit", "Cockpit", "\u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629"),
    title: t("Cockpit", "Cockpit", "\u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629"),
    summary: t("Smart cockpit", "Smart cockpit", "\u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629 \u0627\u0644\u0630\u0643\u064A\u0629"),
    heroImage: "",
    blocks: []
  },
  {
    kind: "info",
    slug: "battery.html",
    eyebrow: t("Battery", "Batterie", "\u0627\u0644\u0628\u0637\u0627\u0631\u064A\u0629"),
    title: t("Battery", "Batterie", "\u0627\u0644\u0628\u0637\u0627\u0631\u064A\u0629"),
    summary: t("Battery tech", "Battery tech", "\u0627\u0644\u0628\u0637\u0627\u0631\u064A\u0629"),
    heroImage: "",
    blocks: []
  },
  {
    kind: "info",
    slug: "about.html",
    eyebrow: t("About", "\xC0 propos", "\u062D\u0648\u0644"),
    title: t("About Voyah", "\xC0 propos de Voyah", "\u0639\u0646 Voyah"),
    summary: t("The premium EV brand of Dongfeng.", "La marque EV premium de Dongfeng.", "\u0627\u0644\u0639\u0644\u0627\u0645\u0629 \u0627\u0644\u0641\u0627\u062E\u0631\u0629 \u0644\u0644\u0633\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0645\u0646 \u062F\u0648\u0646\u063A\u0641\u064A\u0646\u063A."),
    heroImage: "/voyah-resources/brand/about_hero.jpg",
    blocks: []
  },
  {
    kind: "info",
    slug: "news.html",
    eyebrow: t("News", "Actualit\xE9s", "\u0627\u0644\u0623\u062E\u0628\u0627\u0631"),
    title: t("Voyah News", "Actualit\xE9s Voyah", "\u0623\u062E\u0628\u0627\u0631 Voyah"),
    summary: t("Latest updates and press releases.", "Derni\xE8res mises \xE0 jour et communiqu\xE9s.", "\u0623\u062D\u062F\u062B \u0627\u0644\u062A\u062D\u062F\u064A\u062B\u0627\u062A \u0648\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0635\u062D\u0641\u064A\u0629."),
    heroImage: "/voyah-resources/brand/news_hero.jpg",
    blocks: []
  },
  {
    kind: "info",
    slug: "actualite-voyah-courage.html",
    eyebrow: t("News", "Actualit\xE9s", "\u0627\u0644\u0623\u062E\u0628\u0627\u0631"),
    title: t(
      "VOYAH Courage: first deliveries begin in Tunisia",
      "Voyah Courage : les premi\xE8res livraisons ont commenc\xE9 en Tunisie",
      "\u0641\u0648\u064A\u0627\u0647 \u0643\u0648\u0631\u064A\u062C: \u0628\u062F\u0623\u062A \u0623\u0648\u0644 \u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u062A\u0633\u0644\u064A\u0645 \u0641\u064A \u062A\u0648\u0646\u0633"
    ),
    summary: t(
      "Auto Hall has delivered the first VOYAH Courage units in Tunisia. Available immediately, with a 10-year warranty and unlimited mileage.",
      "Auto Hall a livr\xE9 les premiers exemplaires du VOYAH Courage en Tunisie. Disponible imm\xE9diatement, garantie 10 ans et kilom\xE9trage illimit\xE9.",
      "\u0633\u0644\u0651\u0645\u062A \u0623\u0648\u062A\u0648 \u0647\u0648\u0644 \u0623\u0648\u0644\u0649 \u0648\u062D\u062F\u0627\u062A \u0641\u0648\u064A\u0627\u0647 \u0643\u0648\u0631\u064A\u062C \u0641\u064A \u062A\u0648\u0646\u0633. \u0645\u062A\u0648\u0641\u0631\u0629 \u0641\u0648\u0631\u0627\u064B \u0645\u0639 \u0636\u0645\u0627\u0646 10 \u0633\u0646\u0648\u0627\u062A \u0628\u062F\u0648\u0646 \u062D\u062F \u0644\u0644\u0645\u0633\u0627\u0641\u0629."
    ),
    heroImage: "/assets/news/voyah-courage-livraisons/hero.jpg",
    blocks: []
  },
  {
    kind: "info",
    slug: "actualite-voyah-mhero.html",
    eyebrow: t("News", "Actualit\xE9s", "\u0627\u0644\u0623\u062E\u0628\u0627\u0631"),
    title: t(
      "VOYAH and MHERO arrive in Tunisia",
      "VOYAH et MHERO d\xE9barquent en Tunisie",
      "\u0641\u0648\u064A\u0627\u0647 \u0648\u0645\u064A\u0631\u0648 \u062A\u0635\u0644\u0627\u0646 \u0625\u0644\u0649 \u062A\u0648\u0646\u0633"
    ),
    summary: t(
      "Auto Hall officially launches VOYAH and MHERO in Tunisia, opening a new era of electrified premium mobility.",
      "Auto Hall lance officiellement VOYAH et MHERO en Tunisie et ouvre une nouvelle \xE8re de mobilit\xE9 premium \xE9lectrifi\xE9e.",
      "\u0623\u0648\u062A\u0648 \u0647\u0648\u0644 \u062A\u0637\u0644\u0642 \u0631\u0633\u0645\u064A\u0627\u064B \u0641\u0648\u064A\u0627\u0647 \u0648\u0645\u064A\u0631\u0648 \u0641\u064A \u062A\u0648\u0646\u0633\u060C \u0644\u0627\u0641\u062A\u062A\u0627\u062D \u062D\u0642\u0628\u0629 \u062C\u062F\u064A\u062F\u0629 \u0645\u0646 \u0627\u0644\u062A\u0646\u0642\u0644 \u0627\u0644\u0641\u0627\u062E\u0631 \u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0626\u064A."
    ),
    heroImage: "/assets/news/voyah-mhero-tunisie/hero.jpg",
    blocks: []
  },
  {
    kind: "info",
    slug: "brand-philosophy.html",
    eyebrow: t("Philosophy", "Philosophie", "\u0627\u0644\u0641\u0644\u0633\u0641\u0629"),
    title: t("Brand Philosophy", "Philosophie de marque", "\u0641\u0644\u0633\u0641\u0629 \u0627\u0644\u0639\u0644\u0627\u0645\u0629"),
    summary: t("Intelligent Voyah, Creating Happiness.", "Voyah Intelligente, Cr\xE9er le Bonheur.", "\u0641\u0648\u064A\u064A\u0627 \u0627\u0644\u0630\u0643\u064A\u0629\u060C \u062A\u0635\u0646\u0639 \u0627\u0644\u0633\u0639\u0627\u062F\u0629."),
    heroImage: "/voyah-resources/brand/philosophy_hero.jpg",
    blocks: []
  },
  {
    kind: "info",
    slug: "kunpeng-design.html",
    eyebrow: t("Design", "Design", "\u0627\u0644\u062A\u0635\u0645\u064A\u0645"),
    title: t("Kunpeng Design", "Design Kunpeng", "\u062A\u0635\u0645\u064A\u0645 \u0643\u0648\u0646\u0628\u064A\u0646\u062C"),
    summary: t("Chinese elegance meets modern technology.", "L'\xE9l\xE9gance chinoise rencontre la technologie.", "\u0627\u0644\u0623\u0646\u0627\u0642\u0629 \u0627\u0644\u0635\u064A\u0646\u064A\u0629 \u062A\u0644\u062A\u0642\u064A \u0628\u0627\u0644\u062A\u0643\u0646\u0648\u0644\u0648\u062C\u064A\u0627."),
    heroImage: "/voyah-resources/brand/kunpeng_hero.jpg",
    blocks: []
  },
  {
    kind: "info",
    slug: "warranty.html",
    eyebrow: t("Warranty", "Garantie", "\u0627\u0644\u0636\u0645\u0627\u0646"),
    title: t("Warranty Service", "Service de Garantie", "\u062E\u062F\u0645\u0629 \u0627\u0644\u0636\u0645\u0627\u0646"),
    summary: t("Comprehensive protection for your journey.", "Protection compl\xE8te pour votre voyage.", "\u062D\u0645\u0627\u064A\u0629 \u0634\u0627\u0645\u0644\u0629 \u0644\u0631\u062D\u0644\u062A\u0643."),
    heroImage: "/voyah-resources/service/warranty_hero.jpg",
    blocks: []
  },
  {
    kind: "info",
    slug: "app-download.html",
    eyebrow: t("App", "App", "\u0627\u0644\u062A\u0637\u0628\u064A\u0642"),
    title: t("Download App", "T\xE9l\xE9charger l'Application", "\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u062A\u0637\u0628\u064A\u0642"),
    summary: t("Control your Voyah from your fingertips.", "Contr\xF4lez votre Voyah du bout des doigts.", "\u062A\u062D\u0643\u0645 \u0641\u064A \u0633\u064A\u0627\u0631\u0629 \u0641\u0648\u064A\u064A\u0627 \u0645\u0646 \u0623\u0637\u0631\u0627\u0641 \u0623\u0635\u0627\u0628\u0639\u0643."),
    heroImage: "/voyah-resources/service/app_hero.jpg",
    blocks: []
  },
  {
    kind: "info",
    slug: "faq.html",
    eyebrow: t("FAQ", "FAQ", "\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629"),
    title: t("Frequently Asked Questions", "Questions Fr\xE9quemment Pos\xE9es", "\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629"),
    summary: t("Find answers to common questions.", "Trouvez des r\xE9ponses aux questions courantes.", "\u0627\u0628\u062D\u062B \u0639\u0646 \u0625\u062C\u0627\u0628\u0627\u062A \u0644\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629."),
    heroImage: "/voyah-resources/service/faq_hero.jpg",
    blocks: []
  },
  {
    kind: "info",
    slug: "community.html",
    eyebrow: t("Community", "Communaut\xE9", "\u0627\u0644\u0645\u062C\u062A\u0645\u0639"),
    title: t("Voyah Community", "Communaut\xE9 Voyah", "\u0645\u062C\u062A\u0645\u0639 Voyah"),
    summary: t("Join the Voyah owners network.", "Rejoignez le r\xE9seau des propri\xE9taires Voyah.", "\u0627\u0646\u0636\u0645 \u0625\u0644\u0649 \u0634\u0628\u0643\u0629 \u0645\u0627\u0644\u0643\u064A \u0641\u0648\u064A\u064A\u0627."),
    heroImage: "/voyah-resources/lifestyle/community_hero.jpg",
    blocks: []
  },
  {
    kind: "info",
    slug: "lifestyle-store.html",
    eyebrow: t("Store", "Boutique", "\u0627\u0644\u0645\u062A\u062C\u0631"),
    title: t("Lifestyle Store", "Boutique Lifestyle", "\u0645\u062A\u062C\u0631 \u0623\u0633\u0644\u0648\u0628 \u0627\u0644\u062D\u064A\u0627\u0629"),
    summary: t("Exclusive accessories and apparel.", "Accessoires et v\xEAtements exclusifs.", "\u0625\u0643\u0633\u0633\u0648\u0627\u0631\u0627\u062A \u0648\u0645\u0644\u0627\u0628\u0633 \u062D\u0635\u0631\u064A\u0629."),
    heroImage: "/voyah-resources/lifestyle/store_hero.jpg",
    blocks: []
  }
];
const legalPages = [
  {
    kind: "legal",
    slug: "legal.html",
    eyebrow: t("Legal", "Mentions l\xE9gales", "\u0627\u0644\u0634\u0624\u0648\u0646 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A\u0629"),
    title: t("Legal statement", "D\xE9claration l\xE9gale", "\u0627\u0644\u0628\u064A\u0627\u0646 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A"),
    summary: t("This website is operated by Voyah Automotive Technology Co., Ltd. The content, trademarks, visual materials, and related rights displayed on this website are protected by applicable laws and regulations.", "Ce site web est exploit\xE9 par Voyah Automotive Technology Co., Ltd. Les contenus, marques, \xE9l\xE9ments visuels et droits associ\xE9s pr\xE9sent\xE9s sur ce site sont prot\xE9g\xE9s par les lois et r\xE8glements applicables.", "\u064A\u062A\u0645 \u062A\u0634\u063A\u064A\u0644 \u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0642\u0639 \u0628\u0648\u0627\u0633\u0637\u0629 Voyah Automotive Technology Co., Ltd. \u0648\u062A\u062E\u0636\u0639 \u0627\u0644\u0645\u062D\u062A\u0648\u064A\u0627\u062A \u0648\u0627\u0644\u0639\u0644\u0627\u0645\u0627\u062A \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629 \u0648\u0627\u0644\u0645\u0648\u0627\u062F \u0627\u0644\u0628\u0635\u0631\u064A\u0629 \u0648\u0627\u0644\u062D\u0642\u0648\u0642 \u0627\u0644\u0645\u0631\u062A\u0628\u0637\u0629 \u0627\u0644\u0645\u0639\u0631\u0648\u0636\u0629 \u0639\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0642\u0639 \u0644\u0644\u062D\u0645\u0627\u064A\u0629 \u0628\u0645\u0648\u062C\u0628 \u0627\u0644\u0642\u0648\u0627\u0646\u064A\u0646 \u0648\u0627\u0644\u0644\u0648\u0627\u0626\u062D \u0627\u0644\u0645\u0639\u0645\u0648\u0644 \u0628\u0647\u0627."),
    sections: [
      {
        title: t("Intellectual property", "Propri\xE9t\xE9 intellectuelle", "\u0627\u0644\u0645\u0644\u0643\u064A\u0629 \u0627\u0644\u0641\u0643\u0631\u064A\u0629"),
        paragraphs: [
          t("Without prior written consent from Voyah, no organization or individual may copy, reproduce, modify, republish, transmit, display, mirror, or otherwise use the contents of this website in any form.", "Sans l\u2019accord \xE9crit pr\xE9alable de Voyah, aucune organisation ni aucun individu ne peut copier, reproduire, modifier, republier, transmettre, afficher, reproduire en miroir ou utiliser de toute autre mani\xE8re les contenus de ce site sous quelque forme que ce soit.", "\u0645\u0646 \u062F\u0648\u0646 \u0645\u0648\u0627\u0641\u0642\u0629 \u0643\u062A\u0627\u0628\u064A\u0629 \u0645\u0633\u0628\u0642\u0629 \u0645\u0646 Voyah\u060C \u0644\u0627 \u064A\u062C\u0648\u0632 \u0644\u0623\u064A \u062C\u0647\u0629 \u0623\u0648 \u0641\u0631\u062F \u0646\u0633\u062E \u0623\u0648 \u0625\u0639\u0627\u062F\u0629 \u0625\u0646\u062A\u0627\u062C \u0623\u0648 \u062A\u0639\u062F\u064A\u0644 \u0623\u0648 \u0625\u0639\u0627\u062F\u0629 \u0646\u0634\u0631 \u0623\u0648 \u0646\u0642\u0644 \u0623\u0648 \u0639\u0631\u0636 \u0623\u0648 \u0625\u0646\u0634\u0627\u0621 \u0646\u0633\u062E \u0645\u0639\u0643\u0648\u0633\u0629 \u0623\u0648 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0645\u062D\u062A\u0648\u064A\u0627\u062A \u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0642\u0639 \u0628\u0623\u064A \u0634\u0643\u0644 \u0645\u0646 \u0627\u0644\u0623\u0634\u0643\u0627\u0644."),
          t("The brand name Voyah, product names, logos, images, videos, and related design materials are owned by Voyah or the relevant rights holders.", "Le nom de marque Voyah, les noms de produits, les logos, les images, les vid\xE9os et les \xE9l\xE9ments de design associ\xE9s appartiennent \xE0 Voyah ou aux titulaires de droits concern\xE9s.", "\u0625\u0646 \u0627\u0633\u0645 \u0627\u0644\u0639\u0644\u0627\u0645\u0629 Voyah \u0648\u0623\u0633\u0645\u0627\u0621 \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A \u0648\u0627\u0644\u0634\u0639\u0627\u0631\u0627\u062A \u0648\u0627\u0644\u0635\u0648\u0631 \u0648\u0645\u0642\u0627\u0637\u0639 \u0627\u0644\u0641\u064A\u062F\u064A\u0648 \u0648\u0627\u0644\u0645\u0648\u0627\u062F \u0627\u0644\u062A\u0635\u0645\u064A\u0645\u064A\u0629 \u0627\u0644\u0645\u0631\u062A\u0628\u0637\u0629 \u0628\u0647\u0627 \u0645\u0645\u0644\u0648\u0643\u0629 \u0644\u0640 Voyah \u0623\u0648 \u0644\u0623\u0635\u062D\u0627\u0628 \u0627\u0644\u062D\u0642\u0648\u0642 \u0627\u0644\u0645\u0639\u0646\u064A\u064A\u0646.")
        ]
      },
      {
        title: t("Disclaimer", "Clause de non-responsabilit\xE9", "\u0625\u062E\u0644\u0627\u0621 \u0627\u0644\u0645\u0633\u0624\u0648\u0644\u064A\u0629"),
        paragraphs: [
          t("The information published on this website is provided for reference. Vehicle configurations, colors, functions, services, and availability may vary by model, market, and time of release. Please refer to the latest official product information and local retail channels.", "Les informations publi\xE9es sur ce site sont fournies \xE0 titre indicatif. Les configurations, couleurs, fonctions, services et disponibilit\xE9s des v\xE9hicules peuvent varier selon les mod\xE8les, les march\xE9s et les p\xE9riodes de lancement. Veuillez vous r\xE9f\xE9rer aux derni\xE8res informations produits officielles et aux canaux commerciaux locaux.", "\u062A\u064F\u0642\u062F\u064E\u0651\u0645 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0645\u0646\u0634\u0648\u0631\u0629 \u0639\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0642\u0639 \u0644\u0623\u063A\u0631\u0627\u0636 \u0645\u0631\u062C\u0639\u064A\u0629. \u0648\u0642\u062F \u062A\u062E\u062A\u0644\u0641 \u062A\u062C\u0647\u064A\u0632\u0627\u062A \u0627\u0644\u0645\u0631\u0643\u0628\u0627\u062A \u0648\u0627\u0644\u0623\u0644\u0648\u0627\u0646 \u0648\u0627\u0644\u0648\u0638\u0627\u0626\u0641 \u0648\u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0648\u0645\u062F\u0649 \u0627\u0644\u062A\u0648\u0627\u0641\u0631 \u0628\u062D\u0633\u0628 \u0627\u0644\u0637\u0631\u0627\u0632 \u0648\u0627\u0644\u0633\u0648\u0642 \u0648\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0625\u0637\u0644\u0627\u0642. \u064A\u064F\u0631\u062C\u0649 \u0627\u0644\u0631\u062C\u0648\u0639 \u0625\u0644\u0649 \u0623\u062D\u062F\u062B \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0631\u0633\u0645\u064A\u0629 \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0627\u0644\u0645\u0646\u062A\u062C \u0648\u0625\u0644\u0649 \u0642\u0646\u0648\u0627\u062A \u0627\u0644\u0628\u064A\u0639 \u0627\u0644\u0645\u062D\u0644\u064A\u0629.")
        ]
      },
      {
        title: t("External links", "Liens externes", "\u0631\u0648\u0627\u0628\u0637 \u062E\u0627\u0631\u062C\u064A\u0629"),
        paragraphs: [
          t("This website may contain links to third-party websites for convenience. Voyah does not control those websites and is not responsible for their content, privacy practices, or availability.", "Ce site peut contenir des liens vers des sites tiers \xE0 titre pratique. Voyah ne contr\xF4le pas ces sites et n\u2019est pas responsable de leur contenu, de leurs pratiques de confidentialit\xE9 ou de leur disponibilit\xE9.", "\u0642\u062F \u064A\u062D\u062A\u0648\u064A \u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0642\u0639 \u0639\u0644\u0649 \u0631\u0648\u0627\u0628\u0637 \u0625\u0644\u0649 \u0645\u0648\u0627\u0642\u0639 \u062A\u0627\u0628\u0639\u0629 \u0644\u062C\u0647\u0627\u062A \u062E\u0627\u0631\u062C\u064A\u0629 \u0644\u063A\u0627\u064A\u0627\u062A \u0627\u0644\u062A\u0633\u0647\u064A\u0644. \u0644\u0627 \u062A\u062A\u062D\u0643\u0645 Voyah \u0641\u064A \u0647\u0630\u0647 \u0627\u0644\u0645\u0648\u0627\u0642\u0639 \u0648\u0644\u0627 \u062A\u062A\u062D\u0645\u0644 \u0645\u0633\u0624\u0648\u0644\u064A\u0629 \u0645\u062D\u062A\u0648\u0627\u0647\u0627 \u0623\u0648 \u0645\u0645\u0627\u0631\u0633\u0627\u062A \u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629 \u0641\u064A\u0647\u0627 \u0623\u0648 \u0645\u062F\u0649 \u062A\u0648\u0627\u0641\u0631\u0647\u0627.")
        ]
      },
      {
        title: t("Governing law", "Droit applicable", "\u0627\u0644\u0642\u0627\u0646\u0648\u0646 \u0627\u0644\u0648\u0627\u062C\u0628 \u0627\u0644\u062A\u0637\u0628\u064A\u0642"),
        paragraphs: [
          t("Unless otherwise required by mandatory law, these terms are governed by the laws applicable to the operator of this website. Any disputes should be handled through lawful procedures in the competent jurisdiction.", "Sauf disposition contraire impos\xE9e par une loi imp\xE9rative, les pr\xE9sentes conditions sont r\xE9gies par les lois applicables \xE0 l\u2019exploitant de ce site. Tout litige doit \xEAtre trait\xE9 selon les proc\xE9dures l\xE9gales devant la juridiction comp\xE9tente.", "\u0645\u0627 \u0644\u0645 \u062A\u0642\u062A\u0636\u0650 \u0627\u0644\u0642\u0648\u0627\u0646\u064A\u0646 \u0627\u0644\u0625\u0644\u0632\u0627\u0645\u064A\u0629 \u062E\u0644\u0627\u0641 \u0630\u0644\u0643\u060C \u062A\u062E\u0636\u0639 \u0647\u0630\u0647 \u0627\u0644\u0634\u0631\u0648\u0637 \u0644\u0644\u0642\u0648\u0627\u0646\u064A\u0646 \u0627\u0644\u0633\u0627\u0631\u064A\u0629 \u0639\u0644\u0649 \u0627\u0644\u062C\u0647\u0629 \u0627\u0644\u0645\u0634\u063A\u0644\u0629 \u0644\u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0642\u0639. \u0648\u064A\u062C\u0628 \u0645\u0639\u0627\u0644\u062C\u0629 \u0623\u064A \u0646\u0632\u0627\u0639 \u0648\u0641\u0642 \u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0623\u0645\u0627\u0645 \u0627\u0644\u062C\u0647\u0629 \u0627\u0644\u0642\u0636\u0627\u0626\u064A\u0629 \u0627\u0644\u0645\u062E\u062A\u0635\u0629.")
        ]
      }
    ]
  },
  {
    kind: "legal",
    slug: "privacy.html",
    eyebrow: t("Privacy", "Confidentialit\xE9", "\u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629"),
    title: t("Privacy policy", "Politique de confidentialit\xE9", "\u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629"),
    summary: t("Voyah values and protects the personal information of users. This policy explains how personal information may be collected, used, stored, protected, and managed when using Voyah websites, applications, mini programs, products, and services.", "Voyah attache une grande importance \xE0 la protection des informations personnelles des utilisateurs. Cette politique explique comment les informations personnelles peuvent \xEAtre collect\xE9es, utilis\xE9es, stock\xE9es, prot\xE9g\xE9es et g\xE9r\xE9es lors de l\u2019utilisation des sites web, applications, mini-programmes, produits et services Voyah.", "\u062A\u0648\u0644\u064A Voyah \u0623\u0647\u0645\u064A\u0629 \u0643\u0628\u064A\u0631\u0629 \u0644\u062D\u0645\u0627\u064A\u0629 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0644\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646. \u0648\u062A\u0648\u0636\u062D \u0647\u0630\u0647 \u0627\u0644\u0633\u064A\u0627\u0633\u0629 \u0643\u064A\u0641\u064A\u0629 \u062C\u0645\u0639 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0648\u0627\u0633\u062A\u062E\u062F\u0627\u0645\u0647\u0627 \u0648\u062A\u062E\u0632\u064A\u0646\u0647\u0627 \u0648\u062D\u0645\u0627\u064A\u062A\u0647\u0627 \u0648\u0625\u062F\u0627\u0631\u062A\u0647\u0627 \u0639\u0646\u062F \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0645\u0648\u0627\u0642\u0639 Voyah \u0648\u062A\u0637\u0628\u064A\u0642\u0627\u062A\u0647\u0627 \u0648\u0628\u0631\u0627\u0645\u062C\u0647\u0627 \u0627\u0644\u0645\u0635\u063A\u0631\u0629 \u0648\u0645\u0646\u062A\u062C\u0627\u062A\u0647\u0627 \u0648\u062E\u062F\u0645\u0627\u062A\u0647\u0627."),
    sections: [
      {
        title: t("Information collection and use", "Collecte et utilisation des informations", "\u062C\u0645\u0639 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0648\u0627\u0633\u062A\u062E\u062F\u0627\u0645\u0647\u0627"),
        paragraphs: [
          t("Depending on the services you use, Voyah may collect information necessary to provide account login, test-drive booking, vehicle purchase, after-sales service, charging, customer support, and community functions.", "Selon les services que vous utilisez, Voyah peut collecter les informations n\xE9cessaires \xE0 la connexion au compte, \xE0 la r\xE9servation d\u2019essai, \xE0 l\u2019achat du v\xE9hicule, au service apr\xE8s-vente, \xE0 la recharge, au support client et aux fonctions communautaires.", "\u0648\u0641\u0642\u0627\u064B \u0644\u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u062A\u064A \u062A\u0633\u062A\u062E\u062F\u0645\u0647\u0627\u060C \u0642\u062F \u062A\u062C\u0645\u0639 Voyah \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0644\u0627\u0632\u0645\u0629 \u0644\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0625\u0644\u0649 \u0627\u0644\u062D\u0633\u0627\u0628 \u0648\u062D\u062C\u0632 \u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u0642\u064A\u0627\u062F\u0629 \u0648\u0634\u0631\u0627\u0621 \u0627\u0644\u0633\u064A\u0627\u0631\u0629 \u0648\u062E\u062F\u0645\u0629 \u0645\u0627 \u0628\u0639\u062F \u0627\u0644\u0628\u064A\u0639 \u0648\u0627\u0644\u0634\u062D\u0646 \u0648\u062F\u0639\u0645 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0648\u0648\u0638\u0627\u0626\u0641 \u0627\u0644\u0645\u062C\u062A\u0645\u0639."),
          t("Voyah uses personal information to deliver services, verify identity, maintain operational security, improve products and services, and meet legal and regulatory obligations.", "Voyah utilise les informations personnelles pour fournir les services, v\xE9rifier l\u2019identit\xE9, assurer la s\xE9curit\xE9 op\xE9rationnelle, am\xE9liorer les produits et services et satisfaire aux obligations l\xE9gales et r\xE9glementaires.", "\u062A\u0633\u062A\u062E\u062F\u0645 Voyah \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0644\u062A\u0642\u062F\u064A\u0645 \u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0648\u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0647\u0648\u064A\u0629 \u0648\u0627\u0644\u062D\u0641\u0627\u0638 \u0639\u0644\u0649 \u0623\u0645\u0646 \u0627\u0644\u062A\u0634\u063A\u064A\u0644 \u0648\u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A \u0648\u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0648\u0627\u0644\u0627\u0645\u062A\u062B\u0627\u0644 \u0644\u0644\u0627\u0644\u062A\u0632\u0627\u0645\u0627\u062A \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0648\u0627\u0644\u062A\u0646\u0638\u064A\u0645\u064A\u0629.")
        ]
      },
      {
        title: t("Storage and protection", "Conservation et protection", "\u0627\u0644\u062A\u062E\u0632\u064A\u0646 \u0648\u0627\u0644\u062D\u0645\u0627\u064A\u0629"),
        paragraphs: [
          t("Voyah adopts management, technical, and organizational measures to protect personal information from unauthorized access, disclosure, alteration, damage, or loss.", "Voyah adopte des mesures de gestion, techniques et organisationnelles pour prot\xE9ger les informations personnelles contre tout acc\xE8s, divulgation, modification, dommage ou perte non autoris\xE9s.", "\u062A\u0639\u062A\u0645\u062F Voyah \u062A\u062F\u0627\u0628\u064A\u0631 \u0625\u062F\u0627\u0631\u064A\u0629 \u0648\u062A\u0642\u0646\u064A\u0629 \u0648\u062A\u0646\u0638\u064A\u0645\u064A\u0629 \u0644\u062D\u0645\u0627\u064A\u0629 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0645\u0646 \u0627\u0644\u0648\u0635\u0648\u0644 \u063A\u064A\u0631 \u0627\u0644\u0645\u0635\u0631\u062D \u0628\u0647 \u0623\u0648 \u0627\u0644\u0643\u0634\u0641 \u0623\u0648 \u0627\u0644\u062A\u0639\u062F\u064A\u0644 \u0623\u0648 \u0627\u0644\u062A\u0644\u0641 \u0623\u0648 \u0627\u0644\u0641\u0642\u062F\u0627\u0646."),
          t("Where required by law or regulation, you may exercise rights such as access, correction, deletion, withdrawal of consent, and account cancellation through the official channels provided by Voyah.", "Lorsque la loi ou la r\xE9glementation l\u2019exige, vous pouvez exercer des droits tels que l\u2019acc\xE8s, la rectification, la suppression, le retrait du consentement et la suppression du compte via les canaux officiels fournis par Voyah.", "\u0639\u0646\u062F \u0627\u0644\u0627\u0642\u062A\u0636\u0627\u0621 \u0628\u0645\u0648\u062C\u0628 \u0627\u0644\u0642\u0648\u0627\u0646\u064A\u0646 \u0623\u0648 \u0627\u0644\u0644\u0648\u0627\u0626\u062D\u060C \u064A\u0645\u0643\u0646\u0643 \u0645\u0645\u0627\u0631\u0633\u0629 \u062D\u0642\u0648\u0642 \u0645\u062B\u0644 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0648\u062A\u0635\u062D\u064A\u062D\u0647\u0627 \u0648\u062D\u0630\u0641\u0647\u0627 \u0648\u0633\u062D\u0628 \u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629 \u0648\u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u062D\u0633\u0627\u0628 \u0639\u0628\u0631 \u0627\u0644\u0642\u0646\u0648\u0627\u062A \u0627\u0644\u0631\u0633\u0645\u064A\u0629 \u0627\u0644\u062A\u064A \u062A\u0648\u0641\u0631\u0647\u0627 Voyah.")
        ]
      },
      {
        title: t("Sharing and transfer", "Partage et transfert", "\u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0648\u0627\u0644\u0646\u0642\u0644"),
        paragraphs: [
          t("Voyah may share personal information with service providers when necessary to deliver services (for example, appointment scheduling, delivery, connectivity, or customer support). Voyah requires such parties to follow applicable laws and security standards.", "Voyah peut partager des informations personnelles avec des prestataires lorsque cela est n\xE9cessaire pour fournir les services (par exemple, prise de rendez-vous, livraison, connectivit\xE9 ou support client). Voyah exige de ces parties qu\u2019elles respectent les lois applicables et des standards de s\xE9curit\xE9.", "\u0642\u062F \u062A\u0634\u0627\u0631\u0643 Voyah \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0645\u0639 \u0645\u0632\u0648\u062F\u064A \u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0639\u0646\u062F \u0627\u0644\u0636\u0631\u0648\u0631\u0629 \u0644\u062A\u0642\u062F\u064A\u0645 \u0627\u0644\u062E\u062F\u0645\u0627\u062A (\u0645\u062B\u0644 \u062C\u062F\u0648\u0644\u0629 \u0627\u0644\u0645\u0648\u0627\u0639\u064A\u062F \u0623\u0648 \u0627\u0644\u062A\u0633\u0644\u064A\u0645 \u0623\u0648 \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0623\u0648 \u062F\u0639\u0645 \u0627\u0644\u0639\u0645\u0644\u0627\u0621). \u0648\u062A\u064F\u0644\u0632\u0645 Voyah \u0647\u0630\u0647 \u0627\u0644\u062C\u0647\u0627\u062A \u0628\u0627\u0644\u0627\u0645\u062A\u062B\u0627\u0644 \u0644\u0644\u0642\u0648\u0627\u0646\u064A\u0646 \u0627\u0644\u0645\u0639\u0645\u0648\u0644 \u0628\u0647\u0627 \u0648\u0645\u0639\u0627\u064A\u064A\u0631 \u0627\u0644\u0623\u0645\u0627\u0646.")
        ]
      },
      {
        title: t("Contact", "Contact", "\u0627\u0644\u062A\u0648\u0627\u0635\u0644"),
        paragraphs: [
          t("If you have questions about this policy or wish to exercise privacy-related rights, please use the official Voyah service channels provided on this website.", "Si vous avez des questions concernant cette politique ou souhaitez exercer des droits li\xE9s \xE0 la confidentialit\xE9, veuillez utiliser les canaux officiels de service Voyah indiqu\xE9s sur ce site.", "\u0625\u0630\u0627 \u0643\u0627\u0646\u062A \u0644\u062F\u064A\u0643 \u0623\u0633\u0626\u0644\u0629 \u062D\u0648\u0644 \u0647\u0630\u0647 \u0627\u0644\u0633\u064A\u0627\u0633\u0629 \u0623\u0648 \u0631\u063A\u0628\u062A \u0641\u064A \u0645\u0645\u0627\u0631\u0633\u0629 \u062D\u0642\u0648\u0642 \u062A\u062A\u0639\u0644\u0642 \u0628\u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629\u060C \u064A\u064F\u0631\u062C\u0649 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0642\u0646\u0648\u0627\u062A \u062E\u062F\u0645\u0629 Voyah \u0627\u0644\u0631\u0633\u0645\u064A\u0629 \u0627\u0644\u0645\u062A\u0627\u062D\u0629 \u0639\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0642\u0639.")
        ]
      }
    ]
  },
  {
    kind: "legal",
    slug: "cookie.html",
    eyebrow: t("Cookies", "Cookies", "\u0645\u0644\u0641\u0627\u062A \u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u0627\u0631\u062A\u0628\u0627\u0637"),
    title: t("Cookie policy", "Politique relative aux cookies", "\u0633\u064A\u0627\u0633\u0629 \u0645\u0644\u0641\u0627\u062A \u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u0627\u0631\u062A\u0628\u0627\u0637"),
    summary: t("To ensure the proper operation of the website and improve your browsing experience, Voyah may use cookies and similar technologies. This policy explains the categories, purposes, and management methods of such technologies.", "Afin d\u2019assurer le bon fonctionnement du site et d\u2019am\xE9liorer votre exp\xE9rience de navigation, Voyah peut utiliser des cookies et des technologies similaires. Cette politique explique les cat\xE9gories, les finalit\xE9s et les modalit\xE9s de gestion de ces technologies.", "\u0644\u0636\u0645\u0627\u0646 \u0627\u0644\u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u0633\u0644\u064A\u0645 \u0644\u0644\u0645\u0648\u0642\u0639 \u0648\u062A\u062D\u0633\u064A\u0646 \u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u062A\u0635\u0641\u062D\u060C \u0642\u062F \u062A\u0633\u062A\u062E\u062F\u0645 Voyah \u0645\u0644\u0641\u0627\u062A \u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u0627\u0631\u062A\u0628\u0627\u0637 \u0648\u0627\u0644\u062A\u0642\u0646\u064A\u0627\u062A \u0627\u0644\u0645\u0634\u0627\u0628\u0647\u0629. \u0648\u062A\u0648\u0636\u062D \u0647\u0630\u0647 \u0627\u0644\u0633\u064A\u0627\u0633\u0629 \u0641\u0626\u0627\u062A \u0647\u0630\u0647 \u0627\u0644\u062A\u0642\u0646\u064A\u0627\u062A \u0648\u0623\u063A\u0631\u0627\u0636\u0647\u0627 \u0648\u0637\u0631\u0642 \u0625\u062F\u0627\u0631\u062A\u0647\u0627."),
    sections: [
      {
        title: t("Use of cookies", "Utilisation des cookies", "\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0645\u0644\u0641\u0627\u062A \u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u0627\u0631\u062A\u0628\u0627\u0637"),
        paragraphs: [
          t("Cookies may be used to remember language preferences, maintain login status, optimize performance, analyze traffic, and support service security and service quality improvement.", "Les cookies peuvent \xEAtre utilis\xE9s pour m\xE9moriser les pr\xE9f\xE9rences linguistiques, maintenir la connexion, optimiser les performances, analyser le trafic et soutenir la s\xE9curit\xE9 ainsi que l\u2019am\xE9lioration de la qualit\xE9 de service.", "\u0642\u062F \u062A\u064F\u0633\u062A\u062E\u062F\u0645 \u0645\u0644\u0641\u0627\u062A \u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u0627\u0631\u062A\u0628\u0627\u0637 \u0644\u062A\u0630\u0643\u0631 \u062A\u0641\u0636\u064A\u0644\u0627\u062A \u0627\u0644\u0644\u063A\u0629 \u0648\u0627\u0644\u062D\u0641\u0627\u0638 \u0639\u0644\u0649 \u062D\u0627\u0644\u0629 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0648\u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u0623\u062F\u0627\u0621 \u0648\u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0632\u064A\u0627\u0631\u0627\u062A \u0648\u062F\u0639\u0645 \u0623\u0645\u0646 \u0627\u0644\u062E\u062F\u0645\u0629 \u0648\u062A\u062D\u0633\u064A\u0646 \u062C\u0648\u062F\u062A\u0647\u0627.")
        ]
      },
      {
        title: t("Cookie categories", "Cat\xE9gories de cookies", "\u0641\u0626\u0627\u062A \u0645\u0644\u0641\u0627\u062A \u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u0627\u0631\u062A\u0628\u0627\u0637"),
        paragraphs: [
          t("Cookies can be categorized as strictly necessary (site operation), functional (preferences), analytics (measurement), and marketing (relevance). Some categories may not be used in all markets or on all pages.", "Les cookies peuvent \xEAtre class\xE9s en cookies strictement n\xE9cessaires (fonctionnement du site), fonctionnels (pr\xE9f\xE9rences), analytiques (mesure) et marketing (pertinence). Certaines cat\xE9gories peuvent ne pas \xEAtre utilis\xE9es sur tous les march\xE9s ou sur toutes les pages.", "\u064A\u0645\u0643\u0646 \u062A\u0635\u0646\u064A\u0641 \u0645\u0644\u0641\u0627\u062A \u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u0627\u0631\u062A\u0628\u0627\u0637 \u0625\u0644\u0649 \u0636\u0631\u0648\u0631\u064A\u0629 \u0644\u0644\u063A\u0627\u064A\u0629 (\u0644\u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u0645\u0648\u0642\u0639) \u0648\u0648\u0638\u064A\u0641\u064A\u0629 (\u0644\u0644\u062A\u0641\u0636\u064A\u0644\u0627\u062A) \u0648\u062A\u062D\u0644\u064A\u0644\u064A\u0629 (\u0644\u0644\u0642\u064A\u0627\u0633) \u0648\u062A\u0633\u0648\u064A\u0642\u064A\u0629 (\u0644\u0644\u0645\u0644\u0627\u0621\u0645\u0629). \u0648\u0642\u062F \u0644\u0627 \u062A\u064F\u0633\u062A\u062E\u062F\u0645 \u0628\u0639\u0636 \u0627\u0644\u0641\u0626\u0627\u062A \u0641\u064A \u062C\u0645\u064A\u0639 \u0627\u0644\u0623\u0633\u0648\u0627\u0642 \u0623\u0648 \u0639\u0644\u0649 \u062C\u0645\u064A\u0639 \u0627\u0644\u0635\u0641\u062D\u0627\u062A.")
        ]
      },
      {
        title: t("Management and control", "Gestion et contr\xF4le", "\u0627\u0644\u0625\u062F\u0627\u0631\u0629 \u0648\u0627\u0644\u062A\u062D\u0643\u0645"),
        paragraphs: [
          t("Most browsers allow you to manage or disable cookies through their settings. Please note that disabling certain cookies may affect the availability or user experience of some functions.", "La plupart des navigateurs permettent de g\xE9rer ou de d\xE9sactiver les cookies via leurs param\xE8tres. Veuillez noter que la d\xE9sactivation de certains cookies peut affecter la disponibilit\xE9 ou l\u2019exp\xE9rience utilisateur de certaines fonctions.", "\u062A\u062A\u064A\u062D \u0645\u0639\u0638\u0645 \u0627\u0644\u0645\u062A\u0635\u0641\u062D\u0627\u062A \u0625\u062F\u0627\u0631\u0629 \u0645\u0644\u0641\u0627\u062A \u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u0627\u0631\u062A\u0628\u0627\u0637 \u0623\u0648 \u062A\u0639\u0637\u064A\u0644\u0647\u0627 \u0639\u0628\u0631 \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A. \u0648\u064A\u064F\u0631\u062C\u0649 \u0645\u0644\u0627\u062D\u0638\u0629 \u0623\u0646 \u062A\u0639\u0637\u064A\u0644 \u0628\u0639\u0636 \u0627\u0644\u0645\u0644\u0641\u0627\u062A \u0642\u062F \u064A\u0624\u062B\u0631 \u0641\u064A \u062A\u0648\u0641\u0631 \u0628\u0639\u0636 \u0627\u0644\u0648\u0638\u0627\u0626\u0641 \u0623\u0648 \u0641\u064A \u062A\u062C\u0631\u0628\u0629 \u0627\u0633\u062A\u062E\u062F\u0627\u0645\u0647\u0627.")
        ]
      },
      {
        title: t("Third-party technologies", "Technologies tierces", "\u062A\u0642\u0646\u064A\u0627\u062A \u0627\u0644\u062C\u0647\u0627\u062A \u0627\u0644\u062E\u0627\u0631\u062C\u064A\u0629"),
        paragraphs: [
          t("Some services may rely on third-party measurement or media technologies. Where used, these providers may set or read cookies according to their own policies.", "Certaines fonctionnalit\xE9s peuvent s\u2019appuyer sur des technologies de mesure ou de m\xE9dia de tiers. Le cas \xE9ch\xE9ant, ces fournisseurs peuvent d\xE9poser ou lire des cookies selon leurs propres politiques.", "\u0642\u062F \u062A\u0639\u062A\u0645\u062F \u0628\u0639\u0636 \u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0639\u0644\u0649 \u062A\u0642\u0646\u064A\u0627\u062A \u0642\u064A\u0627\u0633 \u0623\u0648 \u0648\u0633\u0627\u0626\u0637 \u062A\u0627\u0628\u0639\u0629 \u0644\u062C\u0647\u0627\u062A \u062E\u0627\u0631\u062C\u064A\u0629. \u0648\u0639\u0646\u062F \u0627\u0633\u062A\u062E\u062F\u0627\u0645\u0647\u0627\u060C \u0642\u062F \u062A\u0642\u0648\u0645 \u0647\u0630\u0647 \u0627\u0644\u062C\u0647\u0627\u062A \u0628\u0648\u0636\u0639 \u0645\u0644\u0641\u0627\u062A \u062A\u0639\u0631\u064A\u0641 \u0627\u0631\u062A\u0628\u0627\u0637 \u0623\u0648 \u0642\u0631\u0627\u0621\u062A\u0647\u0627 \u0648\u0641\u0642 \u0633\u064A\u0627\u0633\u0627\u062A\u0647\u0627 \u0627\u0644\u062E\u0627\u0635\u0629.")
        ]
      }
    ]
  },
  {
    kind: "legal",
    slug: "authorization.html",
    eyebrow: t("Permissions", "Autorisations", "\u0627\u0644\u0623\u0630\u0648\u0646\u0627\u062A"),
    title: t("Permissions statement", "D\xE9claration relative aux autorisations", "\u0628\u064A\u0627\u0646 \u0627\u0644\u0623\u0630\u0648\u0646\u0627\u062A"),
    summary: t("When using Voyah applications, mini programs, website functions, and connected services, certain device permissions may be requested in order to deliver the corresponding features and service experience.", "Lors de l\u2019utilisation des applications Voyah, des mini-programmes, des fonctions du site et des services connect\xE9s, certaines autorisations de l\u2019appareil peuvent \xEAtre demand\xE9es afin de fournir les fonctionnalit\xE9s correspondantes et l\u2019exp\xE9rience de service.", "\u0639\u0646\u062F \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u062A\u0637\u0628\u064A\u0642\u0627\u062A Voyah \u0648\u0628\u0631\u0627\u0645\u062C\u0647\u0627 \u0627\u0644\u0645\u0635\u063A\u0631\u0629 \u0648\u0648\u0638\u0627\u0626\u0641 \u0627\u0644\u0645\u0648\u0642\u0639 \u0648\u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0645\u062A\u0635\u0644\u0629\u060C \u0642\u062F \u064A\u062A\u0645 \u0637\u0644\u0628 \u0628\u0639\u0636 \u0623\u0630\u0648\u0646\u0627\u062A \u0627\u0644\u062C\u0647\u0627\u0632 \u0644\u062A\u0642\u062F\u064A\u0645 \u0627\u0644\u0648\u0638\u0627\u0626\u0641 \u0627\u0644\u0645\u0642\u0627\u0628\u0644\u0629 \u0648\u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u062E\u062F\u0645\u0629 \u0627\u0644\u0645\u0631\u062A\u0628\u0637\u0629 \u0628\u0647\u0627."),
    sections: [
      {
        title: t("Typical permissions", "Autorisations courantes", "\u0627\u0644\u0623\u0630\u0648\u0646\u0627\u062A \u0627\u0644\u0645\u0639\u062A\u0627\u062F\u0629"),
        paragraphs: [
          t("Depending on the feature in use, Voyah may request permissions such as location, camera, photo album, microphone, Bluetooth, notifications, and storage access.", "Selon la fonctionnalit\xE9 utilis\xE9e, Voyah peut demander des autorisations telles que la localisation, l\u2019appareil photo, l\u2019album photo, le microphone, le Bluetooth, les notifications et l\u2019acc\xE8s au stockage.", "\u0628\u062D\u0633\u0628 \u0627\u0644\u0648\u0638\u064A\u0641\u0629 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u0629\u060C \u0642\u062F \u062A\u0637\u0644\u0628 Voyah \u0623\u0630\u0648\u0646\u0627\u062A \u0645\u062B\u0644 \u0627\u0644\u0645\u0648\u0642\u0639 \u0648\u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627 \u0648\u0623\u0644\u0628\u0648\u0645 \u0627\u0644\u0635\u0648\u0631 \u0648\u0627\u0644\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646 \u0648\u0627\u0644\u0628\u0644\u0648\u062A\u0648\u062B \u0648\u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A \u0648\u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0627\u0644\u062A\u062E\u0632\u064A\u0646.")
        ]
      },
      {
        title: t("Purpose and management", "Finalit\xE9 et gestion", "\u0627\u0644\u063A\u0631\u0636 \u0648\u0627\u0644\u0625\u062F\u0627\u0631\u0629"),
        paragraphs: [
          t("Permissions are only used for the functions described above. You may manage or revoke permissions through your system settings, but doing so may affect the availability of related services.", "Les autorisations sont utilis\xE9es uniquement pour les fonctions d\xE9crites ci-dessus. Vous pouvez les g\xE9rer ou les r\xE9voquer via les param\xE8tres du syst\xE8me, mais cela peut affecter la disponibilit\xE9 des services associ\xE9s.", "\u062A\u064F\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0623\u0630\u0648\u0646\u0627\u062A \u0641\u0642\u0637 \u0644\u0644\u0648\u0638\u0627\u0626\u0641 \u0627\u0644\u0645\u0630\u0643\u0648\u0631\u0629 \u0623\u0639\u0644\u0627\u0647. \u0648\u064A\u0645\u0643\u0646\u0643 \u0625\u062F\u0627\u0631\u062A\u0647\u0627 \u0623\u0648 \u0633\u062D\u0628\u0647\u0627 \u0645\u0646 \u062E\u0644\u0627\u0644 \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0646\u0638\u0627\u0645\u060C \u0625\u0644\u0627 \u0623\u0646 \u0630\u0644\u0643 \u0642\u062F \u064A\u0624\u062B\u0631 \u0641\u064A \u062A\u0648\u0641\u0631 \u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0645\u0631\u062A\u0628\u0637\u0629 \u0628\u0647\u0627.")
        ]
      },
      {
        title: t("When permissions are requested", "Quand les autorisations sont demand\xE9es", "\u0645\u062A\u0649 \u064A\u062A\u0645 \u0637\u0644\u0628 \u0627\u0644\u0623\u0630\u0648\u0646\u0627\u062A"),
        paragraphs: [
          t("Permissions are requested only when a feature requires them. For example, location may be requested for store discovery, Bluetooth for vehicle connectivity, and camera/photo access for uploading materials.", "Les autorisations ne sont demand\xE9es que lorsqu\u2019une fonctionnalit\xE9 en a besoin. Par exemple, la localisation peut \xEAtre requise pour trouver un magasin, le Bluetooth pour la connectivit\xE9 du v\xE9hicule et l\u2019acc\xE8s cam\xE9ra/photo pour le t\xE9l\xE9chargement de contenus.", "\u0644\u0627 \u064A\u062A\u0645 \u0637\u0644\u0628 \u0627\u0644\u0623\u0630\u0648\u0646\u0627\u062A \u0625\u0644\u0627 \u0639\u0646\u062F\u0645\u0627 \u062A\u062A\u0637\u0644\u0628\u0647\u0627 \u0627\u0644\u0648\u0638\u064A\u0641\u0629. \u0641\u0639\u0644\u0649 \u0633\u0628\u064A\u0644 \u0627\u0644\u0645\u062B\u0627\u0644\u060C \u0642\u062F \u064A\u064F\u0637\u0644\u0628 \u0627\u0644\u0645\u0648\u0642\u0639 \u0644\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0627\u0644\u0645\u0639\u0631\u0636\u060C \u0648\u0627\u0644\u0628\u0644\u0648\u062A\u0648\u062B \u0644\u0627\u062A\u0635\u0627\u0644 \u0627\u0644\u0633\u064A\u0627\u0631\u0629\u060C \u0648\u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627 \u0623\u0648 \u0627\u0644\u0635\u0648\u0631 \u0644\u0631\u0641\u0639 \u0627\u0644\u0645\u062D\u062A\u0648\u0649.")
        ]
      },
      {
        title: t("Notifications", "Notifications", "\u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A"),
        paragraphs: [
          t("If you enable notifications, Voyah may send service-related reminders such as booking updates, delivery status, or safety notices. You can disable notifications at any time through system settings.", "Si vous activez les notifications, Voyah peut envoyer des rappels li\xE9s au service tels que les mises \xE0 jour de r\xE9servation, l\u2019\xE9tat de livraison ou des avis de s\xE9curit\xE9. Vous pouvez les d\xE9sactiver \xE0 tout moment via les param\xE8tres du syst\xE8me.", "\u0625\u0630\u0627 \u0642\u0645\u062A \u0628\u062A\u0641\u0639\u064A\u0644 \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A\u060C \u0641\u0642\u062F \u062A\u0631\u0633\u0644 Voyah \u062A\u0630\u0643\u064A\u0631\u0627\u062A \u0645\u0631\u062A\u0628\u0637\u0629 \u0628\u0627\u0644\u062E\u062F\u0645\u0629 \u0645\u062B\u0644 \u062A\u062D\u062F\u064A\u062B\u0627\u062A \u0627\u0644\u062D\u062C\u0632 \u0623\u0648 \u062D\u0627\u0644\u0629 \u0627\u0644\u062A\u0633\u0644\u064A\u0645 \u0623\u0648 \u0625\u0634\u0639\u0627\u0631\u0627\u062A \u0627\u0644\u0633\u0644\u0627\u0645\u0629. \u0648\u064A\u0645\u0643\u0646\u0643 \u062A\u0639\u0637\u064A\u0644 \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A \u0641\u064A \u0623\u064A \u0648\u0642\u062A \u0645\u0646 \u062E\u0644\u0627\u0644 \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0646\u0638\u0627\u0645.")
        ]
      }
    ]
  }
];
const sitePages = [
  ...models.filter((model) => isPublicModel(model.slug)),
  ...infoPages,
  ...legalPages
];
sitePages.map((page) => page.slug);
new Map(sitePages.map((page) => [page.slug, page]));

const escapeXml = (value) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const sitemap_xml = defineEventHandler((event) => {
  var _a;
  const siteUrl = normalizeSiteUrl(useRuntimeConfig(event).public.siteUrl);
  const pageBySlug = new Map(sitePages.map((page) => [page.slug, page]));
  const entries = [];
  for (const locale of locales) {
    const paths = [
      `/${locale.code}`,
      ...sitePages.filter((page) => !noindexSlugs.has(page.slug)).map((page) => `/${locale.code}/${page.slug}`)
    ];
    for (const path of paths) {
      const slug = path.split("/")[2];
      const priority = !slug ? "1.0" : ((_a = pageBySlug.get(slug)) == null ? void 0 : _a.kind) === "model" ? "0.8" : "0.6";
      const suffix = slug ? `/${slug}` : "";
      const alternates = locales.map(
        (alternate) => `    <xhtml:link rel="alternate" hreflang="${alternate.code}" href="${escapeXml(`${siteUrl}/${alternate.code}${suffix}`)}"/>`
      ).concat(
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(`${siteUrl}/fr${suffix}`)}"/>`
      ).join("\n");
      entries.push(
        [
          "  <url>",
          `    <loc>${escapeXml(`${siteUrl}${path}`)}</loc>`,
          alternates,
          `    <priority>${priority}</priority>`,
          "  </url>"
        ].join("\n")
      );
    }
  }
  setHeader(event, "Content-Type", "application/xml; charset=utf-8");
  setHeader(event, "Cache-Control", "public, max-age=3600");
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...entries,
    "</urlset>",
    ""
  ].join("\n");
});

export { sitemap_xml as default };
//# sourceMappingURL=sitemap.xml.mjs.map
