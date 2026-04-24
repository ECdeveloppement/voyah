<template>
  <div class="autohall-card" :class="{ featured: featured }">
    <div class="autohall-card__header">
      <div class="autohall-card__type">
        <span class="type-badge" :class="autohall.type">
          {{ getTypeLabel(autohall.type) }}
        </span>
      </div>
      <div class="autohall-card__rating" v-if="autohall.rating">
        <span class="rating-stars">★★★★★</span>
        <span class="rating-value">{{ autohall.rating }}</span>
      </div>
    </div>

    <div class="autohall-card__content">
      <h3 class="autohall-card__name">{{ autohall.name }}</h3>
      
      <div class="autohall-card__info">
        <div class="info-item">
          <svg class="info-icon" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>{{ autohall.address }}</span>
        </div>
        
        <div class="info-item">
          <svg class="info-icon" viewBox="0 0 24 24" fill="none">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <a :href="`tel:${autohall.phone.replace(/\s/g, '')}`" class="phone-link">{{ autohall.phone }}</a>
        </div>
        
        <div class="info-item">
          <svg class="info-icon" viewBox="0 0 24 24" fill="none">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2"/>
            <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2"/>
          </svg>
          <a :href="`mailto:${autohall.email}`" class="email-link">{{ autohall.email }}</a>
        </div>
      </div>

      <div class="autohall-card__services">
        <h4>{{ t.services }}</h4>
        <div class="services-list">
          <span v-for="service in autohall.services" :key="service" class="service-tag">
            {{ service }}
          </span>
        </div>
      </div>

      <div class="autohall-card__hours">
        <h4>{{ t.openingHours }}</h4>
        <div class="hours-grid">
          <div v-for="(hours, day) in autohall.hours" :key="day" class="hours-item">
            <span class="day">{{ t.days[day] }}</span>
            <span class="hours">{{ hours }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="autohall-card__actions">
      <button @click="onDirections" class="action-btn directions-btn">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" stroke-width="2"/>
          <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2"/>
        </svg>
        {{ t.getDirections }}
      </button>
      
      <button @click="onCall" class="action-btn call-btn">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" stroke-width="2"/>
        </svg>
        {{ t.call }}
      </button>
      
      <button v-if="autohall.website" @click="onWebsite" class="action-btn website-btn">
        <svg viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
          <path d="M2 12h20" stroke="currentColor" stroke-width="2"/>
          <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="currentColor" stroke-width="2"/>
        </svg>
        {{ t.website }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Autohall } from '~/data/autohalls'

interface Props {
  autohall: Autohall
  featured?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  featured: false
})

const emit = defineEmits<{
  directions: [autohall: Autohall]
  call: [autohall: Autohall]
  website: [autohall: Autohall]
}>()

const { t } = useI18n()

const getTypeLabel = (type: string) => {
  const labels = {
    showroom: t.showroom,
    service: t.service,
    both: t.both
  }
  return labels[type as keyof typeof labels] || type
}

const onDirections = () => {
  emit('directions', props.autohall)
}

const onCall = () => {
  emit('call', props.autohall)
}

const onWebsite = () => {
  emit('website', props.autohall)
}
</script>

<style scoped>
.autohall-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
}

.autohall-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.autohall-card.featured {
  border: 2px solid #2563eb;
}

.autohall-card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
}

.type-badge {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

.type-badge.showroom {
  background: #dbeafe;
  color: #1e40af;
}

.type-badge.service {
  background: #dcfce7;
  color: #166534;
}

.type-badge.both {
  background: #fef3c7;
  color: #92400e;
}

.rating-stars {
  color: #fbbf24;
  font-size: 14px;
}

.rating-value {
  font-size: 12px;
  color: #64748b;
  margin-left: 4px;
}

.autohall-card__content {
  padding: 20px;
}

.autohall-card__name {
  font-size: 20px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 16px;
}

.autohall-card__info {
  margin-bottom: 20px;
}

.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  color: #475569;
}

.info-icon {
  width: 16px;
  height: 16px;
  margin-right: 8px;
  flex-shrink: 0;
}

.phone-link,
.email-link {
  color: #2563eb;
  text-decoration: none;
  transition: color 0.2s ease;
}

.phone-link:hover,
.email-link:hover {
  color: #1d4ed8;
  text-decoration: underline;
}

.autohall-card__services h4,
.autohall-card__hours h4 {
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
}

.services-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 20px;
}

.service-tag {
  background: #f1f5f9;
  color: #475569;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 12px;
}

.hours-grid {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 4px 12px;
  font-size: 13px;
}

.day {
  font-weight: 500;
  color: #374151;
}

.hours {
  color: #6b7280;
}

.autohall-card__actions {
  display: flex;
  gap: 8px;
  padding: 16px;
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
}

.action-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px 12px;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.action-btn svg {
  width: 14px;
  height: 14px;
}

.directions-btn {
  background: #2563eb;
  color: white;
}

.directions-btn:hover {
  background: #1d4ed8;
}

.call-btn {
  background: #10b981;
  color: white;
}

.call-btn:hover {
  background: #059669;
}

.website-btn {
  background: #6b7280;
  color: white;
}

.website-btn:hover {
  background: #4b5563;
}

@media (max-width: 768px) {
  .autohall-card__actions {
    flex-direction: column;
  }
  
  .action-btn {
    width: 100%;
  }
}
</style>
