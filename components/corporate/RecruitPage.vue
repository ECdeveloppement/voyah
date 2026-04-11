<template>
  <div class="custom-page recruit-page">
    <PageHero
      :eyebrow="$t('domain.recruit.eyebrow', 'Business Opportunities')"
      :title="$t('domain.recruit.title', 'Partner with Voyah')"
      :summary="$t('domain.recruit.summary', 'Join our expanding global network to deliver premium zero-emission mobility.')"
      image="/voyah-resources/brand/philosophy_hero.jpg"
      align="center"
      :compact="true"
    />

    <section class="partner-form-section section-shell">
      <div class="container">
        <div class="recruit-grid">
           <!-- Left Column: Value Proposition -->
           <div class="recruit-info">
             <h2>{{ $t('domain.recruit.info_title', 'Why Partner with Us?') }}</h2>
             <p class="lead">{{ $t('domain.recruit.info_lead', 'We offer a highly competitive dealership model with comprehensive backing.') }}</p>
             
             <ul class="benefit-list">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#c59c62" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  <div>
                    <h4>{{ $t('domain.recruit.b1_title', 'Premium Product Lineup') }}</h4>
                    <p>{{ $t('domain.recruit.b1_desc', 'Exclusive access to our flagship ESSA 800V luxury EV portfolio.') }}</p>
                  </div>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#c59c62" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  <div>
                    <h4>{{ $t('domain.recruit.b2_title', 'Comprehensive Training') }}</h4>
                    <p>{{ $t('domain.recruit.b2_desc', 'Technical and sales onboarding directly orchestrated by Voyah Global HQ.') }}</p>
                  </div>
                </li>
             </ul>
           </div>

           <!-- Right Column: Application Form Mock -->
           <div class="recruit-form-card">
              <h3>{{ $t('domain.recruit.form_title', 'Dealership Application') }}</h3>
              <form @submit.prevent>
                 <div class="form-group">
                    <label>{{ $t('domain.recruit.f_company', 'Company Name') }}</label>
                    <input type="text" placeholder="Enter full legal name" class="v-input" />
                 </div>
                 <div class="form-row">
                    <div class="form-group half">
                       <label>{{ $t('domain.recruit.f_name', 'Contact Name') }}</label>
                       <input type="text" placeholder="Your name" class="v-input" />
                    </div>
                    <div class="form-group half">
                       <label>{{ $t('domain.recruit.f_email', 'Email Address') }}</label>
                       <input type="email" placeholder="official@company.com" class="v-input" />
                    </div>
                 </div>
                 <div class="form-group">
                    <label>{{ $t('domain.recruit.f_region', 'Target Territory') }}</label>
                    <select class="v-select">
                      <option value="" disabled selected>Select a region...</option>
                      <option value="eu">Europe</option>
                      <option value="me">Middle East</option>
                      <option value="ap">Asia Pacific</option>
                    </select>
                 </div>
                 <button type="submit" class="btn-submit">{{ $t('domain.recruit.f_submit', 'Submit Inquiry') }}</button>
              </form>
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
.custom-page { background: #fdfbf7; }
.partner-form-section { padding: 100px 0; }
.recruit-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}
.recruit-info h2 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #212529;
}
.recruit-info .lead {
  font-size: 1.2rem;
  color: #6c757d;
  margin-bottom: 40px;
}
.benefit-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.benefit-list li {
  display: flex;
  gap: 20px;
}
.benefit-list svg {
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  margin-top: 2px;
}
.benefit-list h4 {
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: #212529;
}
.benefit-list p {
  color: #6c757d;
  line-height: 1.5;
}

.recruit-form-card {
  background: #fff;
  padding: 50px;
  border-radius: 12px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.06);
}
.recruit-form-card h3 {
  font-family: var(--font-heading);
  font-size: 1.8rem;
  margin-bottom: 30px;
  color: #212529;
}
.form-group {
  margin-bottom: 25px;
}
.form-row {
  display: flex;
  gap: 20px;
}
.form-group.half {
  flex: 1;
}
label {
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  color: #495057;
  margin-bottom: 10px;
}
.v-input, .v-select {
  width: 100%;
  padding: 15px 20px;
  border: 1px solid #ced4da;
  border-radius: 6px;
  font-size: 1rem;
  color: #212529;
  background: #f8f9fa;
  transition: border-color 0.3s ease;
}
.v-input:focus, .v-select:focus {
  outline: none;
  border-color: #c59c62;
  background: #fff;
}
.btn-submit {
  width: 100%;
  background: #212529;
  color: #fff;
  border: none;
  padding: 18px;
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.3s ease;
}
.btn-submit:hover {
  background: #c59c62;
}

@media (max-width: 900px) {
  .recruit-grid {
    grid-template-columns: 1fr;
    gap: 50px;
  }
  .form-row {
    flex-direction: column;
    gap: 0;
  }
}
</style>
