<template>
  <section class="studio-gallery" aria-labelledby="studio-gallery-title">
    <div class="studio-gallery__inner">
      <header class="studio-gallery__heading">
        <p>VOYAH FREE</p>
        <h2 id="studio-gallery-title">{{ textFor(freeGallery[0].title) }}</h2>
        <span>{{ textFor(labels.description) }}</span>
      </header>

      <section v-for="(group, groupIndex) in freeGallery" :key="group.id" class="studio-gallery__carousel" :aria-label="textFor(group.title)">
        <h3 v-if="groupIndex">{{ textFor(group.title) }}</h3>
        <div
          :ref="el => { if (el) tracks[groupIndex] = el as HTMLElement }"
          class="studio-gallery__track"
          dir="ltr"
          @scroll.passive="syncSlide(groupIndex)"
          @keydown.left.prevent="move(groupIndex, -1)"
          @keydown.right.prevent="move(groupIndex, 1)"
        >
          <button
            v-for="(image, index) in group.images"
            :key="image.file"
            type="button"
            class="studio-gallery__image"
            :aria-label="`${textFor(labels.enlarge)} — ${textFor(image.title)}`"
            @click="openImage(groupIndex, index)"
          >
            <img :src="mediaUrl(image.file)" :alt="textFor(image.title)" loading="lazy" decoding="async" draggable="false" />
            <span :dir="locale.dir">{{ textFor(image.title) }}<span aria-hidden="true">＋</span></span>
          </button>
        </div>
        <div class="studio-gallery__controls" dir="ltr">
          <button type="button" :aria-label="textFor(labels.previous)" :disabled="activeSlides[groupIndex] === 0" @click="move(groupIndex, -1)">‹</button>
          <div class="studio-gallery__dots">
            <button
              v-for="(image, index) in group.images"
              :key="image.file"
              type="button"
              :class="{ 'is-active': activeSlides[groupIndex] === index }"
              :aria-label="textFor(image.title)"
              :aria-current="activeSlides[groupIndex] === index ? 'true' : undefined"
              @click="goTo(groupIndex, index)"
            ><span /></button>
          </div>
          <button type="button" :aria-label="textFor(labels.next)" :disabled="activeSlides[groupIndex] === group.images.length - 1" @click="move(groupIndex, 1)">›</button>
        </div>
      </section>

      <section v-for="group in freeGalleryFeatures" :key="group.id" class="studio-gallery__features" :data-gallery-section="group.id" :aria-labelledby="`gallery-${group.id}`">
        <header class="studio-gallery__heading">
          <h3 :id="`gallery-${group.id}`">{{ textFor(group.title) }}</h3>
          <span>{{ textFor(group.description) }}</span>
        </header>
        <div class="studio-gallery__grid" :class="{ 'studio-gallery__grid--two': group.items.length === 2 }">
          <article v-for="item in group.items" :key="item.file" class="studio-gallery__feature">
            <video
              v-if="item.file.endsWith('.mp4')"
              :src="`${mediaUrl(item.file)}#t=0.1`"
              :aria-label="textFor(item.title)"
              autoplay
              muted
              loop
              playsinline
              preload="metadata"
            />
            <img v-else :src="mediaUrl(item.file)" :alt="textFor(item.title)" loading="lazy" decoding="async" />
            <div>
              <h4>{{ textFor(item.title) }}</h4>
              <p v-if="item.body">{{ textFor(item.body) }}</p>
            </div>
          </article>
        </div>
      </section>
    </div>

    <dialog ref="dialog" class="studio-gallery__dialog" :aria-label="textFor(labels.enlarge)" @close="opened = null" @click="closeOnBackdrop" @keydown.left.prevent="moveLightbox(-1)" @keydown.right.prevent="moveLightbox(1)">
      <div v-if="lightboxImage" class="studio-gallery__lightbox">
        <button type="button" class="studio-gallery__close" :aria-label="textFor(labels.close)" autofocus @click="dialog?.close()">×</button>
        <img :src="mediaUrl(lightboxImage.file)" :alt="textFor(lightboxImage.title)" />
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
import { t } from '~/data/dealer'
import { freeGallery, freeGalleryFeatures } from '~/data/modelGallery'
import { useSiteContent } from '~/composables/useSiteContent'

const { textFor, locale } = useSiteContent()
const tracks: HTMLElement[] = []
const activeSlides = ref([0, 0])
const dialog = ref<HTMLDialogElement>()
const opened = ref<{ group: number; index: number } | null>(null)
const lightboxImage = computed(() => opened.value ? freeGallery[opened.value.group].images[opened.value.index] : null)
const mediaUrl = (file: string) => `/assets/egypt/free/${file}`
const labels = {
  description: t('Explore the VOYAH FREE from every angle, from the studio to the open road.', 'Découvrez le VOYAH FREE sous tous les angles, du studio aux grands espaces.', 'اكتشف VOYAH FREE من كل زاوية، من الاستوديو إلى الطرق المفتوحة.'),
  previous: t('Previous image', 'Image précédente', 'الصورة السابقة'),
  next: t('Next image', 'Image suivante', 'الصورة التالية'),
  enlarge: t('Enlarge image', 'Agrandir l’image', 'تكبير الصورة'),
  close: t('Close gallery', 'Fermer la galerie', 'إغلاق المعرض')
}

function goTo(group: number, index: number) {
  const track = tracks[group]
  const card = track.children[index] as HTMLElement
  track.scrollTo({ left: card.offsetLeft, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
}

function move(group: number, offset: number) {
  goTo(group, Math.min(freeGallery[group].images.length - 1, Math.max(0, activeSlides.value[group] + offset)))
}

function syncSlide(group: number) {
  const track = tracks[group]
  const cards = [...track.children] as HTMLElement[]
  activeSlides.value[group] = cards.reduce((nearest, card, index) =>
    Math.abs(card.offsetLeft - track.scrollLeft) < Math.abs(cards[nearest].offsetLeft - track.scrollLeft) ? index : nearest, 0)
}

async function openImage(group: number, index: number) {
  opened.value = { group, index }
  await nextTick()
  dialog.value?.showModal()
}

function moveLightbox(offset: number) {
  if (!opened.value) return
  const count = freeGallery[opened.value.group].images.length
  opened.value.index = (opened.value.index + offset + count) % count
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
.studio-gallery__heading h3 { margin: 0 0 16px; font-size: clamp(26px, 3vw, 36px); font-weight: 500; }
.studio-gallery__heading > span { display: block; max-width: 720px; color: #657176; line-height: 1.7; }
.studio-gallery__carousel { margin-top: 32px; }
.studio-gallery__carousel > h3 { margin: 0 0 20px; color: #657176; font-size: 14px; text-transform: uppercase; letter-spacing: 0.16em; }
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
.studio-gallery__features { margin-top: 64px; padding-top: 48px; border-top: 1px solid #e5e9ea; }
.studio-gallery__grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }
.studio-gallery__grid--two { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.studio-gallery__feature { min-width: 0; border: 1px solid #e1e6e7; border-radius: 12px; overflow: hidden; }
.studio-gallery__feature > img, .studio-gallery__feature > video { display: block; width: 100%; height: 224px; object-fit: cover; background: #edf0f1; }
.studio-gallery__feature > video { object-fit: contain; background: #101415; }
.studio-gallery__feature > div { padding: 22px; }
.studio-gallery__feature h4 { margin: 0; font-size: 18px; font-weight: 500; }
.studio-gallery__feature p { margin: 10px 0 0; color: #657176; line-height: 1.6; }
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
  .studio-gallery__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 640px) {
  .studio-gallery { padding-inline: 16px; }
  .studio-gallery__track { --card-width: 85%; }
  .studio-gallery__controls { gap: 4px; }
  .studio-gallery__dots button { width: clamp(18px, 5.8vw, 24px); }
  .studio-gallery__grid { grid-template-columns: 1fr; gap: 20px; }
  .studio-gallery__features { margin-top: 40px; padding-top: 32px; }
  .studio-gallery__feature > img, .studio-gallery__feature > video { height: auto; aspect-ratio: 16 / 10; }
}
</style>
