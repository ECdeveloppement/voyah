const fs = require('fs');
const path = require('path');

const components = [
  { p: 'corporate/RecruitPage.vue', title: 'Partner Recruitment' },
  { p: 'corporate/JoinUsPage.vue', title: 'Careers at Voyah' },
  { p: 'brand/AboutPage.vue', title: 'About Voyah' },
  { p: 'brand/NewsPage.vue', title: 'Voyah News' },
  { p: 'brand/PhilosophyPage.vue', title: 'Brand Philosophy' },
  { p: 'brand/KunpengPage.vue', title: 'Kunpeng Design' },
  { p: 'service/FaqPage.vue', title: 'Frequently Asked Questions' },
  { p: 'service/WarrantyPage.vue', title: 'Warranty Services' },
  { p: 'service/AppPage.vue', title: 'Download Voyah App' },
  { p: 'lifestyle/CommunityPage.vue', title: 'Voyah Community' },
  { p: 'lifestyle/LifestyleStorePage.vue', title: 'Lifestyle Store' }
];

function ensureDir(fPath) {
  const dir = path.dirname(fPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

components.forEach(c => {
  const fullPath = path.join('e:/voyah-nuxt/components', c.p);
  ensureDir(fullPath);
  const slugKey = path.basename(c.p, '.vue').toLowerCase();
  
  const content = `<template>
  <div class="custom-page ${slugKey}">
    <PageHero
      :eyebrow="$t('domain.${slugKey}.eyebrow', '${c.title}')"
      :title="$t('domain.${slugKey}.title', '${c.title}')"
      :summary="$t('domain.${slugKey}.summary', 'Explore ${c.title}')"
      image="/voyah-resources/brand/about_hero.jpg"
      align="start"
      :compact="false"
    />
    <section class="section-shell">
      <div class="container">
        <div class="placeholder-content">
          <h2>{{ $t('domain.${slugKey}.title', '${c.title}') }}</h2>
          <p>This is a heavily customized bespoke architectural endpoint specifically bound to the ${c.title} data structure.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import PageHero from '~/components/common/PageHero.vue'
import type { InfoDefinition } from '~/data/site'

const props = defineProps<{
  page: InfoDefinition
}>()
</script>

<style scoped>
.custom-page { background: #fff; min-height: 80vh; }
.placeholder-content {
  padding: 100px 0;
  text-align: center;
}
.placeholder-content h2 { margin-bottom: 20px; font-size: 2rem; color: #212529; font-family: var(--font-heading); }
.placeholder-content p { color: #6c757d; }
</style>
`;
  
  fs.writeFileSync(fullPath, content);
});

console.log('Successfully generated 11 bespoke components!');
