<template>
  <section class="studio-gallery" aria-labelledby="news-gallery-title">
    <div class="studio-gallery__inner">
      <header class="studio-gallery__heading">
        <p v-if="eyebrow">{{ textFor(eyebrow) }}</p>
        <h2 id="news-gallery-title">{{ textFor(title) }}</h2>
        <span v-if="description">{{ textFor(description) }}</span>
      </header>

      <section class="studio-gallery__carousel" aria-label="">
        <div
          ref="track"
          class="studio-gallery__track"
          dir="ltr"
          @scroll.passive="syncSlide"
          @keydown.left.prevent="move(-1)"
          @keydown.right.prevent="move(1)"
        >
          <button
            v-for="(image, index) in images"
            :key="image.src"
            type="button"
            class="studio-gallery__image"
            :aria-label="`${textFor(labels.enlarge)} — ${textFor(image.title)}`"
            @click="openImage(index)"
          >
            <img :src="image.src" :alt="textFor(image.title)" loading="lazy" decoding="async" draggable="false" />
            <span :dir="locale.dir">{{ textFor(image.title) }}<span aria-hidden="true">＋</span></span>
          </button>
        </div>
        <div class="studio-gallery__controls" dir="ltr">
          <button type="button" :aria-label="textFor(labels.previous)" :disabled="activeSlide === 0" @click="move(-1)">‹</button>
          <div class="studio-gallery__dots">
            <button
              v-for="(image, index) in images"
              :key="image.src"
              type="button"
              :class="{ 'is-active': activeSlide === index }"
              :aria-label="textFor(image.title)"
              :aria-current="activeSlide === index ? 'true' : undefined"
              @click="goTo(index)"
            ><span /></button>
          </div>
          <button type="button" :aria-label="textFor(labels.next)" :disabled="activeSlide === images.length - 1" @click="move(1)">›</button>
        </div>
      </section>
    </div>

    <dialog ref="dialog" class="studio-gallery__dialog" :aria-label="textFor(labels.enlarge)" @close="opened = null" @click="closeOnBackdrop" @keydown.left.prevent="moveLightbox(-1)" @keydown.right.prevent="moveLightbox(1)">
      <div v-if="lightboxImage" class="studio-gallery__lightbox">
        <button type="button" class="studio-gallery__close" :aria-label="textFor(labels.close)" autofocus @click="dialog?.close()">×</button>
        <img :src="lightboxImage.src" :alt="textFor(lightboxImage.title)" />
        <div class="studio-gallery__lightbox-nav" dir="ltr">
          <button type="button" :aria-label="textFor(labels.previous)" @click="moveLightbox(-1)">‹</button>
          <p :dir="locale.dir">{{ textFor(lightboxImage.title) }}</p>
          <button type="button" :aria-label="textFor(labels.next)" @click="moveLightbox(1)">›</button>
        </div>
      </div>
    </dialog>
  </section>
</template>

<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import { t, type Localized } from '~/data/dealer'
import { useSiteContent } from '~/composables/useSiteContent'

export type NewsGalleryImage = { src: string; title: Localized }

const props = defineProps<{
  eyebrow?: Localized
  title: Localized
  description?: Localized
  images: NewsGalleryImage[]
}>()

const { textFor, locale } = useSiteContent()
const track = ref<HTMLElement | null>(null)
const activeSlide = ref(0)
const dialog = ref<HTMLDialogElement>()
const opened = ref<number | null>(null)
const lightboxImage = computed(() => (opened.value !== null ? props.images[opened.value] : null))

const labels = {
  previous: t('Previous image', 'Image précédente', 'الصورة السابقة'),
  next: t('Next image', 'Image suivante', 'الصورة التالية'),
  enlarge: t('Enlarge image', 'Agrandir l’image', 'تكبير الصورة'),
  close: t('Close gallery', 'Fermer la galerie', 'إغلاق المعرض')
}

function goTo(index: number) {
  const el = track.value
  const card = el?.children[index] as HTMLElement | undefined
  if (!el || !card) return
  el.scrollTo({ left: card.offsetLeft, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
}

function move(offset: number) {
  goTo(Math.min(props.images.length - 1, Math.max(0, activeSlide.value + offset)))
}

function syncSlide() {
  const el = track.value
  if (!el) return
  const cards = [...el.children] as HTMLElement[]
  activeSlide.value = cards.reduce((nearest, card, index) =>
    Math.abs(card.offsetLeft - el.scrollLeft) < Math.abs(cards[nearest].offsetLeft - el.scrollLeft) ? index : nearest, 0)
}

async function openImage(index: number) {
  opened.value = index
  await nextTick()
  dialog.value?.showModal()
}

function moveLightbox(offset: number) {
  if (opened.value === null || !props.images.length) return
  opened.value = (opened.value + offset + props.images.length) % props.images.length
}

function closeOnBackdrop(event: MouseEvent) {
  if (event.target !== dialog.value) return
  const bounds = dialog.value.getBoundingClientRect()
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.value.close()
}
</script>

<style scoped>
.studio-gallery { padding: clamp(48px, 6vw, 88px) 24px; background: #fff; color: #172327; }
.studio-gallery__inner { max-width: 1320px; margin: auto; }
.studio-gallery__heading { margin-bottom: 28px; }
.studio-gallery__heading > p { margin: 0 0 12px; color: #527d82; font-size: 12px; letter-spacing: 0.22em; }
.studio-gallery__heading h2 { margin: 0 0 16px; font-size: clamp(32px, 4vw, 52px); font-weight: 500; }
.studio-gallery__heading > span { display: block; max-width: 720px; color: #657176; line-height: 1.7; }
.studio-gallery__carousel { margin-top: 32px; }
.studio-gallery__track { --card-width: 60%; position: relative; display: flex; gap: 16px; overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: none; }
.studio-gallery__track::-webkit-scrollbar { display: none; }
.studio-gallery__track::after { content: ''; flex: 0 0 calc(100% - var(--card-width) - 16px); }
.studio-gallery__image { position: relative; flex: 0 0 var(--card-width); padding: 0; border: 1px solid #e1e6e7; border-radius: 12px; overflow: hidden; background: #eef0f1; scroll-snap-align: start; cursor: zoom-in; }
.studio-gallery__image > img { display: block; width: 100%; height: clamp(256px, 29vw, 400px); object-fit: cover; }
.studio-gallery__image > span { position: absolute; inset: auto 0 0; display: flex; align-items: center; justify-content: space-between; padding: 40px 22px 20px; background: linear-gradient(transparent, #0009); color: #fff; text-align: start; font-size: 15px; }
.studio-gallery__image > span > span { font-size: 23px; }
.studio-gallery__controls { display: flex; align-items: center; justify-content: center; gap: 16px; margin-top: 18px; }
.studio-gallery__controls > button, .studio-gallery__lightbox-nav > button { flex: none; width: 44px; height: 44px; border: 1px solid #d5dfe0; border-radius: 50%; background: transparent; color: inherit; font-size: 30px; line-height: 1; cursor: pointer; }
.studio-gallery__controls > button:disabled { opacity: 0.3; cursor: default; }
.studio-gallery__dots { display: flex; }
.studio-gallery__dots button { display: grid; place-items: center; width: 28px; height: 44px; padding: 0; border: 0; background: transparent; cursor: pointer; }
.studio-gallery__dots span { width: 6px; height: 6px; border-radius: 50%; background: #ced6d7; }
.studio-gallery__dots .is-active span { width: 18px; border-radius: 5px; background: #406a70; }
.studio-gallery button:focus-visible { outline: 3px solid #527d82; outline-offset: -3px; }
.studio-gallery__dialog { max-width: min(1200px, 94vw); width: 94vw; max-height: 94dvh; padding: 0; border: 0; border-radius: 12px; overflow: auto; color: #fff; background: #101415; }
.studio-gallery__dialog::backdrop { background: #000d; }
.studio-gallery__lightbox { position: relative; }
.studio-gallery__lightbox > img { display: block; width: 100%; height: min(72dvh, 780px); object-fit: contain; }
.studio-gallery__close { position: absolute; z-index: 1; top: 12px; right: 12px; width: 44px; height: 44px; border: 1px solid #ffffff60; border-radius: 50%; color: #fff; background: #101415cc; font-size: 30px; cursor: pointer; }
.studio-gallery__lightbox-nav { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 16px 24px; }
.studio-gallery__lightbox-nav p { margin: 0; text-align: center; }
:global(body:has(.studio-gallery__dialog[open])) { overflow: hidden; }
@media (max-width: 1024px) {
  .studio-gallery__track { --card-width: 70%; }
}
@media (max-width: 640px) {
  .studio-gallery { padding-inline: 16px; }
  .studio-gallery__track { --card-width: 85%; }
  .studio-gallery__controls { gap: 4px; }
  .studio-gallery__dots button { width: clamp(18px, 5.8vw, 24px); }
}
</style>
