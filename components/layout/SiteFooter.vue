<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <section class="footer-block footer-block--contact">
        <h3>{{ textFor(labels.contactTitle) }}</h3>
        <p>{{ textFor(dealerContact.address) }}</p>
        <p class="footer-phones">
          <a :href="dealerContact.phoneHref || `tel:${dealerContact.phone}`">{{ dealerContact.phone }}</a>
          <template v-if="dealerContact.phoneSecondary">
            <span aria-hidden="true">/</span>
            <a :href="dealerContact.phoneSecondaryHref || `tel:${dealerContact.phoneSecondary}`">
              {{ dealerContact.phoneSecondary }}
            </a>
          </template>
        </p>
        <p v-if="dealerContact.email"><a :href="`mailto:${dealerContact.email}`">{{ dealerContact.email }}</a></p>
        <p>{{ textFor(dealerContact.workingHours) }}</p>
      </section>

      <section class="footer-block footer-block--policies">
        <h3>{{ textFor(labels.policiesTitle) }}</h3>
        <NuxtLink v-for="link in footerLegalLinks" :key="link.slug" :to="buildPath(link.slug)">
          {{ textFor(link.label) }}
        </NuxtLink>
      </section>

      <div class="footer-social">
        <SocialLinks />
      </div>
    </div>

    <div class="container footer-bottom">
      <span>© {{ currentYear }} {{ dealerContact.brandLabel }}. {{ textFor(labels.rights) }}</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { dealerContact, t as localizePair } from '~/data/dealer'
import { useSiteContent } from '~/composables/useSiteContent'
import SocialLinks from '~/components/common/SocialLinks.vue'

const { footerLegalLinks, buildPath, textFor } = useSiteContent()

const labels = {
  contactTitle: localizePair('Contact Info', 'Coordonnées', 'معلومات الاتصال'),
  policiesTitle: localizePair('Policies', 'Politiques', 'السياسات'),
  rights: localizePair('All Rights Reserved.', 'Tous droits réservés.', 'جميع الحقوق محفوظة.')
}

const currentYear = new Date().getFullYear()
</script>

<style scoped>
.site-footer {
  background: var(--band-bg);
  color: var(--band-text);
}

.footer-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  align-items: flex-start;
  width: min(1280px, 100%);
  margin: 0 auto;
  padding: 16px 32px;
}

.footer-block {
  flex: 1 1 320px;
  min-width: 0;
}

@media (min-width: 768px) {
  .footer-block--contact,
  .footer-block--policies {
    flex: 0 0 40%;
  }

  .footer-social {
    flex: 0 0 20%;
  }
}

.footer-block h3 {
  position: relative;
  width: fit-content;
  margin: 0 0 24px;
  padding-bottom: 12px;
  color: var(--band-text);
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
}

.footer-block h3::after {
  content: '';
  position: absolute;
  inset-inline-start: 0;
  bottom: 0;
  width: 64px;
  height: 2px;
  background: #85b4d9;
}

.footer-block p {
  margin: 0 0 8px;
  max-width: 480px;
  color: var(--band-text);
  font-size: 1rem;
  line-height: 1.5;
}

.footer-phones {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.footer-block a {
  display: block;
  padding: 0 0 8px;
  color: #d4d4d4;
  font-size: 1rem;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-block a:hover {
  color: var(--band-text);
}

.footer-block--contact a {
  color: var(--band-text);
}

.footer-social {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-inline-start: auto;
  padding-top: 34px;
}

.footer-bottom {
  width: min(1280px, 100%);
  margin: 0 auto;
  padding: 16px 32px;
  color: rgba(255, 255, 255, 0.4);
  font-size: 1rem;
}

@media (max-width: 768px) {
  .footer-social {
    padding-top: 0;
    margin-inline-start: 0;
  }
}
</style>
