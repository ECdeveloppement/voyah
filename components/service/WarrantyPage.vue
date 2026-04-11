<template>
  <div class="custom-page warranty-page">
    <PageHero
      :eyebrow="$t('domain.warranty.eyebrow', 'Voyah Care')"
      :title="$t('domain.warranty.title', 'Warranty & Assurance')"
      :summary="$t('domain.warranty.summary', 'Drive with total peace of mind under Voyah\\'s comprehensive protection plans.')"
      image="/voyah-resources/service/warranty_hero.jpg"
      align="center"
      :compact="true"
    />

    <section class="warranty-tables section-shell">
      <div class="container">
         <div class="section-title-center">
            <h2>{{ $t('domain.warranty.coverage', 'Standard Coverage') }}</h2>
            <p>{{ $t('domain.warranty.coverage_sub', 'Exclusively available for the original owner, activated upon delivery.') }}</p>
         </div>

         <div class="table-wrapper">
           <table class="voyah-table">
              <thead>
                 <tr>
                    <th>{{ $t('domain.warranty.th_component', 'Vehicle Component') }}</th>
                    <th>{{ $t('domain.warranty.th_duration', 'Duration (Years)') }}</th>
                    <th>{{ $t('domain.warranty.th_mileage', 'Mileage Limit') }}</th>
                    <th>{{ $t('domain.warranty.th_notes', 'Conditions') }}</th>
                 </tr>
              </thead>
              <tbody>
                 <tr>
                    <td class="bold-cell">{{ $t('domain.warranty.general', 'New Vehicle General Warranty') }}</td>
                    <td>5 Years</td>
                    <td>100,000 km</td>
                    <td>Covers defects in materials and workmanship.</td>
                 </tr>
                 <tr class="highlight-row">
                    <td class="bold-cell">
                      <div class="battery-label">
                         {{ $t('domain.warranty.battery', 'Amber Battery Architecture') }}
                         <span class="badge">Core</span>
                      </div>
                    </td>
                    <td>8 Years</td>
                    <td>160,000 km</td>
                    <td>Guarantees capacity retention above 70%.</td>
                 </tr>
                 <tr>
                    <td class="bold-cell">{{ $t('domain.warranty.drivetrain', 'Electric Drivetrain (Motors & Inverters)') }}</td>
                    <td>8 Years</td>
                    <td>160,000 km</td>
                    <td>Excludes physical abuse or water damage exceeding 600mm depth.</td>
                 </tr>
                 <tr>
                    <td class="bold-cell">{{ $t('domain.warranty.corrosion', 'Body Corrosion Perforation') }}</td>
                    <td>10 Years</td>
                    <td>Unlimited</td>
                    <td>Must pass annual authorized dealer inspection.</td>
                 </tr>
                 <tr>
                    <td class="bold-cell">{{ $t('domain.warranty.wear', 'Wear & Tear Items (Brakes, Wipers)') }}</td>
                    <td>6 Months</td>
                    <td>10,000 km</td>
                    <td>Subject to driving conditions and driver behavior.</td>
                 </tr>
              </tbody>
           </table>
         </div>
      </div>
    </section>

    <!-- Extended Coverage Cards -->
    <section class="extended-coverage section-shell bg-light">
      <div class="container">
         <div class="section-title-center">
            <h2>{{ $t('domain.warranty.extended', 'Extended Voyah Care+') }}</h2>
            <p>{{ $t('domain.warranty.extended_sub', 'Upgrade your protection beyond the standard factory bounds.') }}</p>
         </div>

         <div class="care-grid">
            <div class="care-card">
               <div class="card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
               </div>
               <h3>{{ $t('domain.warranty.care_ultimate', 'Ultimate Shield') }}</h3>
               <p>{{ $t('domain.warranty.care_ultimate_desc', 'Extends the general vehicle warranty to 8 Years / 160,000 km. Full coverage bumper-to-bumper.') }}</p>
               <button class="btn-outline">View Details</button>
            </div>
            <div class="care-card">
               <div class="card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M16 12l-4-4-4 4M12 8v8"/></svg>
               </div>
               <h3>{{ $t('domain.warranty.care_battery', 'Battery Lifetime') }}</h3>
               <p>{{ $t('domain.warranty.care_battery_desc', 'Provides lifetime warranty on the original high-voltage battery for the first owner.') }}</p>
               <button class="btn-outline">View Details</button>
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
.custom-page { background: #fff; }
.bg-light { background: #fdfbf7; }
.warranty-tables { padding: 100px 0; }
.section-title-center {
  text-align: center;
  margin-bottom: 60px;
}
.section-title-center h2 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  color: #212529;
  margin-bottom: 15px;
}
.section-title-center p {
  color: #6c757d;
  font-size: 1.1rem;
}

.table-wrapper {
  overflow-x: auto;
  border-radius: 12px;
  box-shadow: 0 5px 25px rgba(0,0,0,0.05);
}
.voyah-table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  min-width: 800px;
}
.voyah-table th, .voyah-table td {
  padding: 20px 25px;
  text-align: left;
  border-bottom: 1px solid #e9ecef;
}
.voyah-table th {
  background: #212529;
  color: #fff;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.9rem;
}
.voyah-table td {
  color: #495057;
  font-size: 1rem;
}
.voyah-table tbody tr:last-child td {
  border-bottom: none;
}
.voyah-table tbody tr:hover {
  background: #f8f9fa;
}
.voyah-table .highlight-row td {
  background: rgba(197, 156, 98, 0.05);
}
.bold-cell {
  font-weight: 600;
  color: #212529 !important;
}

.battery-label {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}
.badge {
  background: #c59c62;
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 700;
}

.extended-coverage { padding: 100px 0; }
.care-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}
.care-card {
  background: #fff;
  padding: 50px;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.06);
  text-align: center;
  border-top: 4px solid #c59c62;
  transition: transform 0.3s ease;
}
.care-card:hover {
  transform: translateY(-5px);
}
.card-icon {
  width: 80px;
  height: 80px;
  background: #fdfbf7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
}
.card-icon svg {
  width: 36px;
  height: 36px;
  stroke: #c59c62;
}
.care-card h3 {
  font-size: 1.5rem;
  font-family: var(--font-heading);
  margin-bottom: 15px;
}
.care-card p {
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 30px;
  min-height: 50px;
}
.btn-outline {
  background: transparent;
  border: 2px solid #212529;
  padding: 12px 30px;
  border-radius: 30px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}
.btn-outline:hover {
  background: #212529;
  color: #fff;
}

@media (max-width: 768px) {
  .care-grid { grid-template-columns: 1fr; }
}
</style>
