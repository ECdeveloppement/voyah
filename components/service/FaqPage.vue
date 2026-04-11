<template>
  <div class="custom-page faqpage">
    <PageHero
      :eyebrow="$t('domain.faqpage.eyebrow', 'Support Center')"
      :title="$t('domain.faqpage.title', 'Frequently Asked Questions')"
      :summary="$t('domain.faqpage.summary', 'Find quick answers to your questions about Voyah.')"
      image="/voyah-resources/service/faq_hero.jpg"
      align="center"
      :compact="true"
    />
    <section class="faq-section section-shell bg-light">
      <div class="container faq-container">
        <div class="faq-sidebar">
           <ul>
             <li :class="{ active: currentCategory === 'vehicle' }" @click="currentCategory = 'vehicle'">{{ $t('domain.faqpage.cat_vehicle', 'Vehicle Operation') }}</li>
             <li :class="{ active: currentCategory === 'charging' }" @click="currentCategory = 'charging'">{{ $t('domain.faqpage.cat_charging', 'Charging & Battery') }}</li>
             <li :class="{ active: currentCategory === 'software' }" @click="currentCategory = 'software'">{{ $t('domain.faqpage.cat_software', 'Software & OTA') }}</li>
             <li :class="{ active: currentCategory === 'service' }" @click="currentCategory = 'service'">{{ $t('domain.faqpage.cat_service', 'Service & Warranty') }}</li>
           </ul>
        </div>
        
        <div class="faq-content">
          <div class="faq-list">
             <div class="faq-item" v-for="(faq, idx) in activeFaqs" :key="idx" :class="{ open: openIdx === idx }">
                <div class="faq-question" @click="toggleFaq(idx)">
                   <h3>{{ faq.q }}</h3>
                   <div class="faq-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
                   </div>
                </div>
                <div class="faq-answer" v-show="openIdx === idx">
                   <p>{{ faq.a }}</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import PageHero from '~/components/common/PageHero.vue'
import type { InfoDefinition } from '~/data/site'

const props = defineProps<{
  page: InfoDefinition
}>()

const currentCategory = ref('vehicle')
const openIdx = ref<number | null>(0)

// Standard FAQ static injection for the scope of the bespoke layout
const faqs = {
  vehicle: [
    { q: 'How do I activate the Valet Mode?', a: 'Valet Mode can be activated directly from the Smart Cockpit central display under the Security tab. You will be prompted to enter a 4-digit PIN.' },
    { q: 'What is the maximum wading depth of the Voyah FREE?', a: 'The Voyah FREE features excellent airtight sealing, achieving a maximum wading depth of 600mm under standard conditions.' },
    { q: 'How does the Air Suspension automatically adjust?', a: 'The chassis utilizes active predictive mapping up to 10 meters ahead to dynamically lower or raise the suspension based on road quality and speed.' }
  ],
  charging: [
    { q: 'Is 800V Supercharging compatible everywhere?', a: 'Voyah models equipped with 800V architectures are backwards compatible with standard 400V chargers, though peak rates will be governed by the standard.' },
    { q: 'How long does a standard home charge take?', a: 'Using the Voyah 11kW home wallbox, charging from 10% to 100% takes approximately 8.5 hours.' }
  ],
  software: [
    { q: 'Are OTA updates free?', a: 'Yes, all foundational OTA updates affecting vehicle dynamics, intelligent driving matrices, and security are provided free for the lifetime of the vehicle.' },
    { q: 'How long does an OTA update typically take?', a: 'Updates usually range from 30 to 45 minutes. The vehicle must be parked and locked during the installation process.' }
  ],
  service: [
    { q: 'What is the standard warranty period?', a: 'Voyah offers an extensive 5-year or 100,000 km overall vehicle warranty, and an 8-year or 160,000 km warranty for the core battery architecture.' }
  ]
}

const activeFaqs = computed(() => {
  return faqs[currentCategory.value as keyof typeof faqs] || []
})

function toggleFaq(idx: number) {
  openIdx.value = openIdx.value === idx ? null : idx
}
</script>

<style scoped>
.custom-page { background: #fff; min-height: 80vh; }
.bg-light { background: #f8f9fa; }
.faq-section { padding: 80px 0; }
.faq-container {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 60px;
}

.faq-sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
  position: sticky;
  top: 100px;
}
.faq-sidebar li {
  padding: 18px 25px;
  background: #fff;
  border: 1px solid #e9ecef;
  margin-bottom: 10px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  color: #495057;
  transition: all 0.3s ease;
}
.faq-sidebar li:hover {
  border-color: #c59c62;
  color: #c59c62;
}
.faq-sidebar li.active {
  background: #212529;
  border-color: #212529;
  color: #fff;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.faq-item {
  background: #fff;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  overflow: hidden;
  transition: border-color 0.3s ease;
}
.faq-item.open {
  border-color: #c59c62;
}
.faq-question {
  padding: 25px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
.faq-question h3 {
  margin: 0;
  font-size: 1.15rem;
  font-weight: 500;
  color: #212529;
}
.faq-icon svg {
  width: 24px;
  height: 24px;
  stroke: #c59c62;
  transition: transform 0.3s ease;
}
.faq-item.open .faq-icon svg {
  transform: rotate(180deg);
}

.faq-answer {
  padding: 0 30px 30px;
}
.faq-answer p {
  margin: 0;
  color: #6c757d;
  line-height: 1.7;
}

@media (max-width: 900px) {
  .faq-container {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .faq-sidebar ul {
    display: flex;
    overflow-x: auto;
    gap: 10px;
  }
  .faq-sidebar li {
    margin-bottom: 0;
    white-space: nowrap;
  }
}
</style>
