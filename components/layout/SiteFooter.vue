<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-brand panel">
        <p class="eyebrow">{{ textFor(footerContact.title) }}</p>
        <p class="footer-copy">{{ textFor(footerContact.body) }}</p>
        <div class="footer-qr">
          <figure>
            <img :src="footerContact.appCode" alt="Voyah app code" />
            <figcaption>App</figcaption>
          </figure>
          <figure>
            <img :src="footerContact.miniProgramCode" alt="Voyah mini program code" />
            <figcaption>Mini</figcaption>
          </figure>
        </div>
      </div>

      <div class="footer-columns">
        <section v-for="column in footerColumns" :key="column.title.en">
          <h3>{{ textFor(column.title) }}</h3>
          <NuxtLink v-for="link in column.links" :key="link.slug" :to="buildPath(link.slug)">
            {{ textFor(link.label) }}
          </NuxtLink>
        </section>
      </div>
    </div>

    <div class="container footer-bottom">
      <span>Voyah</span>
      <div class="footer-legal">
        <NuxtLink v-for="link in footerLegalLinks" :key="link.slug" :to="buildPath(link.slug)">
          {{ textFor(link.label) }}
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useSiteContent } from '~/composables/useSiteContent'

const { footerColumns, footerContact, footerLegalLinks, buildPath, textFor } = useSiteContent()
</script>

<style scoped>
.site-footer {
  padding: 36px 0 28px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  background:
    radial-gradient(circle at bottom left, rgba(197, 156, 98, 0.12), transparent 30%),
    rgba(6, 9, 13, 0.94);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 24px;
}

.footer-brand {
  padding: 26px;
}

.footer-copy {
  margin: 0;
  max-width: 520px;
  color: rgba(237, 242, 247, 0.72);
  line-height: 1.7;
}

.footer-qr {
  margin-top: 24px;
  display: flex;
  gap: 18px;
}

.footer-qr figure {
  margin: 0;
  display: grid;
  gap: 10px;
  justify-items: center;
  color: rgba(237, 242, 247, 0.68);
}

.footer-qr img {
  width: 112px;
  height: 112px;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: #fff;
  padding: 10px;
}

.footer-columns {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.footer-columns section {
  display: grid;
  align-content: start;
  gap: 12px;
}

.footer-columns h3 {
  margin: 0 0 8px;
  font-size: 0.98rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: rgba(237, 242, 247, 0.74);
}

.footer-columns a,
.footer-legal a {
  color: rgba(237, 242, 247, 0.72);
}

.footer-columns a:hover,
.footer-legal a:hover {
  color: #fff;
}

.footer-bottom {
  margin-top: 26px;
  padding-top: 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  justify-content: space-between;
  gap: 20px;
  color: rgba(237, 242, 247, 0.56);
}

.footer-legal {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

@media (max-width: 900px) {
  .footer-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .footer-columns {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .footer-bottom {
    flex-direction: column;
  }
}

@media (max-width: 640px) {
  .footer-columns {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
