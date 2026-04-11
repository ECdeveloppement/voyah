<template>
  <div class="custom-page joinus-page">
    <PageHero
      :eyebrow="$t('domain.joinus.eyebrow', 'Careers')"
      :title="$t('domain.joinus.title', 'Shape the Future of Mobility')"
      :summary="$t('domain.joinus.summary', 'We are looking for visionary thinkers to join our global engineering and design hubs.')"
      image="/voyah-resources/brand/kunpeng_hero.jpg"
      align="start"
      :compact="true"
    />

    <section class="careers-section section-shell">
      <div class="container">
        <!-- Filter Bar -->
        <div class="job-filters">
           <input type="text" :placeholder="$t('domain.joinus.search', 'Search for positions...')" class="search-input" />
           <select class="filter-select">
              <option value="">{{ $t('domain.joinus.dept_all', 'All Departments') }}</option>
              <option value="engineering">{{ $t('domain.joinus.dept_eng', 'Engineering & R&D') }}</option>
              <option value="design">{{ $t('domain.joinus.dept_design', 'Design') }}</option>
              <option value="sales">{{ $t('domain.joinus.dept_sales', 'Sales & Marketing') }}</option>
           </select>
           <select class="filter-select">
              <option value="">{{ $t('domain.joinus.loc_all', 'All Locations') }}</option>
              <option value="oslo">{{ $t('domain.joinus.loc_oslo', 'Oslo, Norway') }}</option>
              <option value="wuhan">{{ $t('domain.joinus.loc_wuhan', 'Wuhan, China') }}</option>
              <option value="turin">{{ $t('domain.joinus.loc_turin', 'Turin, Italy') }}</option>
           </select>
        </div>

        <!-- Job Grid -->
        <div class="job-grid">
           <div class="job-card">
              <div class="job-meta">
                 <span class="dept">Engineering & R&D</span>
                 <span class="type">Full-time</span>
              </div>
              <h3>Senior NVH Engineer</h3>
              <p class="location">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                 Wuhan, China
              </p>
              <button class="btn-apply">{{ $t('domain.joinus.apply', 'Apply Now') }}</button>
           </div>
           
           <div class="job-card">
              <div class="job-meta">
                 <span class="dept">Design</span>
                 <span class="type">Full-time</span>
              </div>
              <h3>Automotive Exterior Designer</h3>
              <p class="location">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                 Turin, Italy
              </p>
              <button class="btn-apply">{{ $t('domain.joinus.apply', 'Apply Now') }}</button>
           </div>
           
           <div class="job-card">
              <div class="job-meta">
                 <span class="dept">Sales & Marketing</span>
                 <span class="type">Full-time</span>
              </div>
              <h3>European Market Director</h3>
              <p class="location">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                 Oslo, Norway
              </p>
              <button class="btn-apply">{{ $t('domain.joinus.apply', 'Apply Now') }}</button>
           </div>
           
           <div class="job-card">
              <div class="job-meta">
                 <span class="dept">Engineering & R&D</span>
                 <span class="type">Contract</span>
              </div>
              <h3>Battery Management Systems (BMS) Expert</h3>
              <p class="location">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                 Wuhan, China
              </p>
              <button class="btn-apply">{{ $t('domain.joinus.apply', 'Apply Now') }}</button>
           </div>
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
.careers-section { padding: 80px 0; }

.job-filters {
  display: flex;
  gap: 20px;
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 25px rgba(0,0,0,0.03);
  margin-bottom: 60px;
}
.search-input {
  flex: 2;
  padding: 15px 20px;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  font-size: 1rem;
}
.filter-select {
  flex: 1;
  padding: 15px 20px;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  font-size: 1rem;
  background: #fff;
}
.search-input:focus, .filter-select:focus {
  outline: none;
  border-color: #c59c62;
}

.job-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}
.job-card {
  background: #fff;
  border: 1px solid #e9ecef;
  padding: 40px;
  border-radius: 12px;
  transition: all 0.3s ease;
}
.job-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.06);
  border-color: #c59c62;
}
.job-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
}
.dept {
  color: #c59c62;
}
.type {
  background: #f8f9fa;
  padding: 4px 12px;
  border-radius: 20px;
  color: #495057;
}
.job-card h3 {
  font-family: var(--font-heading);
  font-size: 1.6rem;
  color: #212529;
  margin-bottom: 15px;
  line-height: 1.3;
}
.location {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #6c757d;
  margin-bottom: 30px;
}
.location svg {
  width: 18px;
  height: 18px;
}
.btn-apply {
  background: transparent;
  border: 2px solid #212529;
  color: #212529;
  padding: 12px 30px;
  border-radius: 30px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}
.btn-apply:hover {
  background: #212529;
  color: #fff;
}

@media (max-width: 900px) {
  .job-filters {
    flex-direction: column;
  }
  .job-grid {
    grid-template-columns: 1fr;
  }
}
</style>
