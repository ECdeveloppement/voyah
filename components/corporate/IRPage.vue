<template>
  <div class="custom-page ir-page">
    <PageHero
      :eyebrow="$t('domain.corporate.ir.eyebrow', 'Investor Relations')"
      :title="$t('domain.corporate.ir.title', 'Financial Transparency & Governance')"
      :summary="$t('domain.corporate.ir.summary', 'Commitment to long-term value creation.')"
      image="/voyah-resources/brand/philosophy_hero.jpg"
      align="center"
      :compact="true"
    />

    <section class="ir-nav-wrapper">
      <div class="container">
        <ul class="ir-nav">
          <li :class="{ active: activeTab === 'reports' }" @click="activeTab = 'reports'">{{ $t('domain.corporate.ir.tab_reports', 'Financial Reports') }}</li>
          <li :class="{ active: activeTab === 'governance' }" @click="activeTab = 'governance'">{{ $t('domain.corporate.ir.tab_gov', 'Corporate Governance') }}</li>
          <li :class="{ active: activeTab === 'stock' }" @click="activeTab = 'stock'">{{ $t('domain.corporate.ir.tab_stock', 'Stock Info') }}</li>
        </ul>
      </div>
    </section>

    <!-- Financial Reports Tab -->
    <section v-if="activeTab === 'reports'" class="ir-content-section section-shell">
      <div class="container">
        <div class="ir-header">
          <h2>{{ $t('domain.corporate.ir.tab_reports', 'Financial Reports') }}</h2>
          <p>{{ $t('domain.corporate.ir.reports_sub', 'Download quarterly and annual earnings distributions.') }}</p>
        </div>
        
        <div class="report-list">
          <div class="report-item" v-for="year in [2024, 2023, 2022]" :key="year">
            <div class="report-year">{{ year }}</div>
            <div class="report-downloads">
              <a href="#" class="download-link">
                <span>{{ $t('domain.corporate.ir.q1', 'Q1 Interim Report') }}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              </a>
              <a href="#" class="download-link">
                <span>{{ $t('domain.corporate.ir.annual', 'Annual Financial Report') }}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Governance Tab -->
    <section v-else-if="activeTab === 'governance'" class="ir-content-section section-shell bg-light">
      <div class="container">
        <div class="ir-header">
          <h2>{{ $t('domain.corporate.ir.tab_gov', 'Corporate Governance') }}</h2>
          <p>{{ $t('domain.corporate.ir.gov_sub', 'Maintaining high standards of business ethics.') }}</p>
        </div>
        
        <div class="gov-grid">
           <div class="gov-card">
              <h3>{{ $t('domain.corporate.ir.board', 'Board of Directors') }}</h3>
              <p>{{ $t('domain.corporate.ir.board_desc', 'Overseeing strategic development and risk management.') }}</p>
           </div>
           <div class="gov-card">
              <h3>{{ $t('domain.corporate.ir.committees', 'Committees') }}</h3>
              <p>{{ $t('domain.corporate.ir.comm_desc', 'Audit, Remuneration, and Nomination committees.') }}</p>
           </div>
        </div>
      </div>
    </section>
    
    <!-- Stock Tab -->
    <section v-else-if="activeTab === 'stock'" class="ir-content-section section-shell">
      <div class="container">
         <div class="ir-header">
          <h2>{{ $t('domain.corporate.ir.tab_stock', 'Stock Information') }}</h2>
        </div>
        <div class="stock-ticker">
           <div class="ticker-symbol">HKG: 0489</div>
           <div class="ticker-price">4.21 <small>HKD</small></div>
           <div class="ticker-change positive">+0.12 (2.93%)</div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PageHero from '~/components/common/PageHero.vue'
import type { InfoDefinition } from '~/data/site'

const props = defineProps<{
  page: InfoDefinition
}>()

const activeTab = ref('reports')
</script>

<style scoped>
.custom-page {
  background: #fff;
  min-height: 100vh;
}
.ir-nav-wrapper {
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
  position: sticky;
  top: 64px;
  z-index: 10;
}
.ir-nav {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 40px;
}
.ir-nav li {
  padding: 20px 0;
  color: #495057;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;
}
.ir-nav li:hover {
  color: #c59c62;
}
.ir-nav li.active {
  color: #212529;
}
.ir-nav li.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 3px;
  background: #c59c62;
}

.ir-content-section {
  padding: 80px 0;
}
.bg-light {
  background: #f8f9fa;
}
.ir-header {
  margin-bottom: 50px;
}
.ir-header h2 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  color: #212529;
  margin-bottom: 15px;
}
.ir-header p {
  color: #6c757d;
  font-size: 1.1rem;
}

.report-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.report-item {
  display: flex;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  overflow: hidden;
}
.report-year {
  background: #212529;
  color: #c59c62;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
}
.report-downloads {
  padding: 20px 30px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
}
.download-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: #495057;
  padding-bottom: 10px;
  border-bottom: 1px solid #dee2e6;
  transition: color 0.3s ease;
}
.download-link:hover {
  color: #c59c62;
}
.download-link svg {
  width: 20px;
  height: 20px;
}

.gov-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}
.gov-card {
  background: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
}
.gov-card h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
}
.gov-card p {
  color: #6c757d;
  line-height: 1.6;
}

.stock-ticker {
  background: #fff;
  padding: 50px;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.08);
  display: inline-block;
}
.ticker-symbol {
  font-size: 1.2rem;
  color: #6c757d;
}
.ticker-price {
  font-size: 4rem;
  font-weight: bold;
  color: #212529;
  line-height: 1;
  margin: 10px 0;
}
.ticker-price small {
  font-size: 1.5rem;
  font-weight: normal;
}
.ticker-change.positive {
  color: #28a745;
  font-size: 1.2rem;
  font-weight: 500;
}
</style>
