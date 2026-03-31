<template>
  <section :id="section.id" :class="['model-media-section', { reverse: index % 2 === 1 }]">
    <div class="container model-media-grid">
      <div class="model-media-copy" data-reveal>
        <p class="model-media-kicker">{{ section.kicker }}</p>
        <h2 class="model-media-title">{{ section.title }}</h2>
        <p class="model-media-summary">{{ section.summary }}</p>
      </div>

      <div class="model-media-stack" data-reveal>
        <figure class="model-media-primary">
          <img :src="section.images[0]" :alt="section.title" />
        </figure>

        <div v-if="section.images.length > 1" class="model-media-secondary">
          <figure v-for="image in section.images.slice(1)" :key="image">
            <img :src="image" :alt="section.title" />
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  index: number
  section: {
    id: string
    kicker: string
    title: string
    summary: string
    images: string[]
  }
}>()
</script>

<style scoped>
.model-media-section {
  padding: 88px 0;
  background: #fff;
}

.model-media-section:nth-child(even) {
  background: #f7f3ee;
}

.model-media-grid {
  display: grid;
  grid-template-columns: minmax(280px, 0.9fr) minmax(0, 1.3fr);
  gap: 48px;
  align-items: center;
}

.model-media-section.reverse .model-media-copy {
  order: 2;
}

.model-media-section.reverse .model-media-stack {
  order: 1;
}

.model-media-kicker {
  margin: 0 0 12px;
  color: #8d6b43;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-size: 0.82rem;
}

.model-media-title {
  margin: 0;
  color: #0e141b;
  font-size: clamp(2rem, 3vw, 3.4rem);
  line-height: 1.02;
}

.model-media-summary {
  margin: 20px 0 0;
  color: #53606d;
  font-size: 1rem;
  line-height: 1.85;
  max-width: 520px;
}

.model-media-stack {
  display: grid;
  gap: 16px;
}

.model-media-primary,
.model-media-secondary figure {
  margin: 0;
  overflow: hidden;
  border-radius: 28px;
  box-shadow: 0 30px 80px rgba(16, 23, 32, 0.12);
}

.model-media-primary img,
.model-media-secondary img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.model-media-primary {
  min-height: 460px;
}

.model-media-secondary {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.model-media-secondary figure {
  min-height: 180px;
}

@media (max-width: 1024px) {
  .model-media-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .model-media-section.reverse .model-media-copy,
  .model-media-section.reverse .model-media-stack {
    order: initial;
  }
}

@media (max-width: 768px) {
  .model-media-section {
    padding: 56px 0;
  }

  .model-media-primary {
    min-height: 300px;
  }

  .model-media-secondary {
    grid-template-columns: minmax(0, 1fr);
  }

  .model-media-secondary figure {
    min-height: 220px;
  }
}
</style>
