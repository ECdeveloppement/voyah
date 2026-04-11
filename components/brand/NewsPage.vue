<template>
  <div class="custom-page newspage">
    <PageHero
      :eyebrow="$t('domain.newspage.eyebrow', 'Latest Updates')"
      :title="$t('domain.newspage.title', 'Voyah Newsroom')"
      :summary="$t('domain.newspage.summary', 'Press releases, technological developments, and global expansion news.')"
      image="/voyah-resources/brand/news_hero.jpg"
      align="start"
      :compact="true"
    />
    
    <!-- Filter Tabs -->
    <div class="news-filters">
       <div class="container">
          <ul>
             <li class="active">{{ $t('domain.newspage.filter_all', 'All News') }}</li>
             <li>{{ $t('domain.newspage.filter_corp', 'Corporate') }}</li>
             <li>{{ $t('domain.newspage.filter_prod', 'Product') }}</li>
             <li>{{ $t('domain.newspage.filter_tech', 'Technology') }}</li>
          </ul>
       </div>
    </div>
    
    <!-- Masonry/Grid of Articles -->
    <section class="news-list-section section-shell">
      <div class="container">
        <div class="news-grid">
           <!-- Featured Article -->
           <article class="news-card featured">
              <div class="news-card-media" style="background-image: url('/voyah-resources/brand/kunpeng_hero.jpg')"></div>
              <div class="news-card-content">
                 <div class="news-meta">
                    <span class="category">{{ $t('domain.newspage.filter_tech', 'Technology') }}</span>
                    <span class="date">Oct 14, 2024</span>
                 </div>
                 <h3>{{ $t('domain.newspage.news1_title', 'Voyah Unveils Next-Gen AI Cockpit at Global Tech Summit') }}</h3>
                 <p>{{ $t('domain.newspage.news1_desc', 'Integrating the Snapdragon 8295 architecture with a localized large language model for unprecedented cabin intelligence.') }}</p>
                 <a href="#" class="read-more">{{ $t('domain.newspage.read_more', 'Read Full Release') }} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
              </div>
           </article>
           
           <article class="news-card">
              <div class="news-card-media small" style="background-image: url('/voyah-resources/lifestyle/community_hero.jpg')"></div>
              <div class="news-card-content">
                 <div class="news-meta">
                    <span class="category">{{ $t('domain.newspage.filter_corp', 'Corporate') }}</span>
                    <span class="date">Sep 22, 2024</span>
                 </div>
                 <h3>{{ $t('domain.newspage.news2_title', 'European Expansion Accelerates: Voyah Enters Spain') }}</h3>
                 <a href="#" class="read-more">{{ $t('domain.newspage.read_more', 'Read Full Release') }}</a>
              </div>
           </article>

           <article class="news-card">
              <div class="news-card-media small" style="background-image: url('/voyah-resources/models/titan_ultra_hero.jpg')"></div>
              <div class="news-card-content">
                 <div class="news-meta">
                    <span class="category">{{ $t('domain.newspage.filter_prod', 'Product') }}</span>
                    <span class="date">Jul 10, 2024</span>
                 </div>
                 <h3>{{ $t('domain.newspage.news3_title', 'Titan Ultra 2026 Concepts Teased') }}</h3>
                 <a href="#" class="read-more">{{ $t('domain.newspage.read_more', 'Read Full Release') }}</a>
              </div>
           </article>

           <article class="news-card">
              <div class="news-card-media small" style="background-image: url('/voyah-resources/tech/safety_battery_shield.png')"></div>
              <div class="news-card-content">
                 <div class="news-meta">
                    <span class="category">{{ $t('domain.newspage.filter_tech', 'Technology') }}</span>
                    <span class="date">Jun 05, 2024</span>
                 </div>
                 <h3>{{ $t('domain.newspage.news4_title', 'Amber Battery Shield Achieves New Thermal Records') }}</h3>
                 <a href="#" class="read-more">{{ $t('domain.newspage.read_more', 'Read Full Release') }}</a>
              </div>
           </article>
        </div>
        
        <div class="load-more-container">
           <button class="btn-load-more">{{ $t('domain.newspage.load_more', 'Load More Content') }}</button>
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
.custom-page { background: #fdfbf7; min-height: 80vh; }
.news-filters {
  background: #fff;
  border-bottom: 1px solid #e9ecef;
  padding: 0;
}
.news-filters ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 40px;
}
.news-filters li {
  padding: 24px 0;
  color: #6c757d;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.9rem;
}
.news-filters li:hover {
  color: #212529;
}
.news-filters li.active {
  color: #c59c62;
}
.news-filters li.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background: #c59c62;
}

.news-list-section {
  padding: 80px 0;
}
.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}
.news-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.03);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  display: flex;
  flex-direction: column;
}
.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
}
.news-card.featured {
  grid-column: span 3;
  flex-direction: row;
}
.news-card-media {
  background-size: cover;
  background-position: center;
  flex: 1;
  min-height: 240px;
}
.news-card.featured .news-card-media {
  flex: 2;
  min-height: 400px;
}
.news-card-content {
  padding: 40px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.news-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.news-meta .category {
  color: #c59c62;
  font-weight: bold;
}
.news-meta .date {
  color: #adb5bd;
}
.news-card h3 {
  font-family: var(--font-heading);
  font-size: 1.6rem;
  color: #212529;
  margin-bottom: 15px;
  line-height: 1.3;
}
.news-card.featured h3 {
  font-size: 2.2rem;
}
.news-card p {
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 30px;
}
.read-more {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #212529;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  margin-top: auto;
}
.read-more svg {
  width: 18px;
  height: 18px;
  transition: transform 0.3s ease;
}
.read-more:hover {
  color: #c59c62;
}
.read-more:hover svg {
  transform: translateX(5px);
}

.load-more-container {
  display: flex;
  justify-content: center;
  margin-top: 60px;
}
.btn-load-more {
  background: transparent;
  border: 2px solid #212529;
  color: #212529;
  padding: 15px 40px;
  border-radius: 30px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}
.btn-load-more:hover {
  background: #212529;
  color: #fff;
}

@media (max-width: 991px) {
  .news-grid {
    grid-template-columns: 1fr;
  }
  .news-card.featured {
    grid-column: span 1;
    flex-direction: column;
  }
  .news-card.featured .news-card-media {
    min-height: 300px;
  }
}
</style>
