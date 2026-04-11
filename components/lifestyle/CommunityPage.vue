<template>
  <div class="custom-page community-page">
    <PageHero
      :eyebrow="$t('domain.community.eyebrow', 'Voyah Club')"
      :title="$t('domain.community.title', 'The Voyah Community')"
      :summary="$t('domain.community.summary', 'Connect, share, and embark on journeys with like-minded pioneers.')"
      image="/voyah-resources/lifestyle/community_hero.jpg"
      align="start"
      :compact="true"
    />

    <!-- Community Feed Navigation -->
    <div class="community-nav-wrapper">
       <div class="container">
          <ul class="community-nav">
             <li class="active">{{ $t('domain.community.tab_all', 'Discovery Feed') }}</li>
             <li>{{ $t('domain.community.tab_roadtrips', 'Epic Roadtrips') }}</li>
             <li>{{ $t('domain.community.tab_events', 'Official Events') }}</li>
             <li>{{ $t('domain.community.tab_tips', 'Owner Tips') }}</li>
          </ul>
       </div>
    </div>

    <section class="feed-section section-shell bg-light">
      <div class="container">
         <!-- Asymmetric Masonry Layout -->
         <div class="masonry-feed">
            <!-- Feed Item Post 1 (Large) -->
            <div class="feed-post post-large">
               <div class="post-media" style="background-image: url('/voyah-resources/models/titan_ultra_hero.jpg')"></div>
               <div class="post-content">
                  <div class="user-meta">
                     <div class="avatar">
                       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                     </div>
                     <span class="username">Voyager_X</span>
                  </div>
                  <h3>{{ $t('domain.community.post1_title', 'Crossing the Alps in my Voyah FREE') }}</h3>
                  <p>{{ $t('domain.community.post1_desc', 'Tested the air suspension across 500km of unpaved mountain roads today. Zero anxiety, unparalleled comfort.') }}</p>
                  <div class="post-actions">
                     <span>&#10084; 245</span>
                     <span>&#128172; 42</span>
                  </div>
               </div>
            </div>

            <!-- Feed Item Post 2 (Small text only) -->
            <div class="feed-post post-text">
               <div class="post-content">
                  <div class="user-meta">
                     <div class="avatar"></div>
                     <span class="username">DreamerFamily</span>
                  </div>
                  <h3>{{ $t('domain.community.post2_title', 'OTA 3.0 is a game changer') }}</h3>
                  <p>{{ $t('domain.community.post2_desc', 'Just installed the latest over-the-air update. The new NOA (Navigate on Autopilot) behaves incredibly smoothly in heavy traffic.') }}</p>
                  <div class="post-actions">
                     <span>&#10084; 188</span>
                  </div>
               </div>
            </div>

            <!-- Feed Item Post 3 (Image focus) -->
            <div class="feed-post post-image">
               <div class="post-media" style="background-image: url('/voyah-resources/brand/philosophy_hero.jpg')"></div>
               <div class="post-content">
                  <div class="user-meta">
                     <div class="avatar"></div>
                     <span class="username">NeoDesign</span>
                  </div>
                  <p>{{ $t('domain.community.post3_desc', 'Took some shots of the ambient lighting reacting to the driving modes.') }}</p>
                  <div class="post-actions">
                     <span>&#10084; 512</span>
                  </div>
               </div>
            </div>

            <!-- Feed Item Post 4 (Event) -->
            <div class="feed-post post-event">
               <div class="event-badge">Official Event</div>
               <div class="post-content">
                  <h3>{{ $t('domain.community.event_title', 'Voyah Owners Meetup: Geneva') }}</h3>
                  <p class="event-date">August 15, 2024</p>
                  <button class="btn-rsvp">RSVP Now</button>
               </div>
            </div>
         </div>
         
         <div class="load-more-wrapper">
             <button class="btn-outline">{{ $t('domain.community.load_more', 'Load More Journeys') }}</button>
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
.custom-page { background: #fff; }
.bg-light { background: #fdfbf7; }

.community-nav-wrapper {
  background: #fff;
  border-bottom: 1px solid #e9ecef;
  position: sticky;
  top: 64px;
  z-index: 10;
}
.community-nav {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 40px;
  overflow-x: auto;
}
.community-nav::-webkit-scrollbar { display: none; }
.community-nav li {
  padding: 24px 0;
  color: #6c757d;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  white-space: nowrap;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.9rem;
}
.community-nav li.active {
  color: #212529;
}
.community-nav li.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background: #c59c62;
}

.feed-section { padding: 80px 0; }

.masonry-feed {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  grid-auto-flow: dense;
}

.feed-post {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.04);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}
.feed-post:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.08);
}

.post-media {
  background-size: cover;
  background-position: center;
  min-height: 250px;
}
.post-large {
  grid-column: span 2;
  grid-row: span 2;
}
.post-large .post-media {
  min-height: 400px;
}
.post-text {
  background: #212529;
  color: #fff;
}
.post-text .user-meta .username { color: #f8f9fa; }
.post-text h3 { color: #fff; }
.post-text p { color: #adb5bd; }

.post-content {
  padding: 30px;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.post-large .post-content {
  padding: 40px;
}

.user-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}
.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #e9ecef;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.avatar svg {
  width: 20px;
  height: 20px;
  stroke: #6c757d;
}
.username {
  font-weight: 500;
  color: #495057;
  font-size: 0.9rem;
}

.feed-post h3 {
  font-family: var(--font-heading);
  font-size: 1.4rem;
  color: #212529;
  margin-bottom: 15px;
  line-height: 1.4;
}
.post-large h3 {
  font-size: 2rem;
}
.feed-post p {
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 25px;
}

.post-actions {
  margin-top: auto;
  display: flex;
  gap: 20px;
  color: #adb5bd;
  font-size: 0.9rem;
  font-weight: 500;
}

.post-event {
  background: #c59c62;
  color: #fff;
  position: relative;
}
.event-badge {
  position: absolute;
  top: 15px; right: 15px;
  background: rgba(255,255,255,0.2);
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: bold;
}
.post-event h3 { color: #fff; font-size: 1.6rem; margin-top: 30px; }
.event-date { color: rgba(255,255,255,0.9); font-size: 1.2rem; margin-bottom: 30px;}
.btn-rsvp {
  background: #fff;
  color: #c59c62;
  border: none;
  padding: 12px 24px;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
  align-self: flex-start;
  transition: transform 0.3s ease;
}
.btn-rsvp:hover { transform: scale(1.05); }

.load-more-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 60px;
}
.btn-outline {
  background: transparent;
  border: 2px solid #212529;
  padding: 15px 40px;
  border-radius: 30px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #212529;
}
.btn-outline:hover {
  background: #212529;
  color: #fff;
}

@media (max-width: 991px) {
  .masonry-feed { grid-template-columns: repeat(2, 1fr); }
  .post-large { grid-column: span 2; }
}
@media (max-width: 600px) {
  .masonry-feed { grid-template-columns: 1fr; }
  .post-large { grid-column: span 1; }
}
</style>
