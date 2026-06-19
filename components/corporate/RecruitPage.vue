<template>
  <div class="custom-page recruit-page">
    <PageHero
      :eyebrow="textFor(t('Business Opportunities', 'Opportunités d\'affaires', 'فرص تجارية'))"
      :title="textFor(t('Partner with Voyah', 'Partenariat avec Voyah', 'كن شريكًا مع Voyah'))"
      :summary="textFor(t('Join our expanding global network to deliver premium zero-emission mobility.', 'Rejoignez notre réseau mondial en expansion pour offrir une mobilité premium zéro émission.', 'انضم إلى شبكتنا العالمية المتوسعة لتقديم حلول تنقل فاخرة خالية من الانبعاثات.'))"
      image="/voyah-resources/brand/philosophy_hero.jpg"
      align="center"
      :compact="true"
    />

    <section class="partner-form-section section-shell">
      <div class="container">
        <div class="recruit-grid">
           <!-- Left Column: Value Proposition -->
           <div class="recruit-info">
              <h2>{{ textFor(t('Why Partner with Us?', 'Pourquoi devenir partenaire ?', 'لماذا تكون شريكًا معنا؟')) }}</h2>
              <p class="lead">{{ textFor(t('We offer a highly competitive dealership model with comprehensive backing.', 'Nous proposons un modèle de concession hautement compétitif avec un soutien complet.', 'نقدم نموذج وكالة تنافسي للغاية مع دعم شامل.')) }}</p>
             
             <ul class="benefit-list">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#c59c62" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  <div>
                    <h4>{{ textFor(t('Premium Product Lineup', 'Gamme de produits premium', 'تشكيلة منتجات فاخرة')) }}</h4>
                    <p>{{ textFor(t('Exclusive access to our flagship ESSA 800V luxury EV portfolio.', 'Accès exclusif à notre portefeuille phare de VE de luxe ESSA 800V.', 'وصول حصري إلى مجموعتنا الرائدة من السيارات الكهربائية الفاخرة ESSA 800V.')) }}</p>
                  </div>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#c59c62" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  <div>
                    <h4>{{ textFor(t('Comprehensive Training', 'Formation complète', 'تدريب شامل')) }}</h4>
                    <p>{{ textFor(t('Technical and sales onboarding directly orchestrated by Voyah Global HQ.', 'Intégration technique et commerciale directement orchestrée par le siège mondial de Voyah.', 'التدريب التقني والتجاري مباشرة من المقر العالمي لـ Voyah.')) }}</p>
                  </div>
                </li>
             </ul>
           </div>

           <!-- Right Column: Application Form Mock -->
           <div class="recruit-form-card">
               <h3>{{ textFor(t('Dealership Application', 'Demande de concession', 'طلب الوكالة')) }}</h3>
              <form @submit.prevent>
                 <div class="form-group">
                    <label>{{ textFor(t('Company Name', 'Nom de l\'entreprise', 'اسم الشركة')) }}</label>
                    <input type="text" placeholder="Enter full legal name" class="v-input" />
                 </div>
                 <div class="form-row">
                    <div class="form-group half">
                        <label>{{ textFor(t('Contact Name', 'Nom du contact', 'اسم جهة الاتصال')) }}</label>
                       <input type="text" placeholder="Your name" class="v-input" />
                    </div>
                    <div class="form-group half">
                        <label>{{ textFor(t('Email Address', 'Adresse e-mail', 'البريد الإلكتروني')) }}</label>
                       <input type="email" placeholder="official@company.com" class="v-input" />
                    </div>
                 </div>
                 <div class="form-group">
                    <label>{{ textFor(t('Target Territory', 'Territoire cible', 'المنطقة المستهدفة')) }}</label>
                    <select class="v-select">
                      <option value="" disabled selected>Select a region...</option>
                      <option value="eu">Europe</option>
                      <option value="me">Middle East</option>
                      <option value="ap">Asia Pacific</option>
                    </select>
                 </div>
                  <button type="submit" class="btn-submit">{{ textFor(t('Submit Inquiry', 'Soumettre la demande', 'إرسال الاستفسار')) }}</button>
              </form>
           </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import PageHero from '~/components/common/PageHero.vue'
import type { InfoDefinition, LocalizedText } from '~/data/site'
import { useSiteContent } from '~/composables/useSiteContent'

const t = (en: string, fr: string, ar: string): LocalizedText => ({ en, fr, ar })

const props = defineProps<{
  page: InfoDefinition
}>()

const { textFor } = useSiteContent()
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
