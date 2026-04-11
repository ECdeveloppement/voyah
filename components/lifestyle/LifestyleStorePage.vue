<template>
  <div class="custom-page lifestylestore-page">
    <PageHero
      :eyebrow="$t('domain.store.eyebrow', 'Boutique Collection')"
      :title="$t('domain.store.title', 'Voyah Lifestyle Store')"
      :summary="$t('domain.store.summary', 'Curated accessories and lifestyle products embodying our design DNA.')"
      image="/voyah-resources/lifestyle/store_hero.jpg"
      align="center"
      :compact="true"
    />

    <!-- Store Navigation & Filter -->
    <div class="store-nav-wrapper">
       <div class="container">
          <ul class="store-nav">
             <li class="active">{{ $t('domain.store.cat_all', 'All Products') }}</li>
             <li>{{ $t('domain.store.cat_apparel', 'Apparel') }}</li>
             <li>{{ $t('domain.store.cat_model', 'Vehicle Models') }}</li>
             <li>{{ $t('domain.store.cat_access', 'Car Accessories') }}</li>
          </ul>
       </div>
    </div>

    <section class="store-grid-section section-shell">
      <div class="container">
         <div class="products-grid">
            <!-- Product Item 1 -->
            <div class="product-card">
               <div class="product-media">
                  <!-- Fallback to our existing downloaded community assets for mock store items -->
                  <img src="/voyah-resources/utilities/1x1_placeholder.png" alt="Voyah Thermos" class="placeholder-img" style="background: #f1f2f6;" />
                  <div class="badge-new">New</div>
               </div>
               <div class="product-info">
                  <h3>{{ $t('domain.store.p1_title', 'Titanium Smart Multi-Thermos') }}</h3>
                  <p class="price">¥299</p>
               </div>
            </div>

            <!-- Product Item 2 -->
            <div class="product-card">
               <div class="product-media">
                  <img src="/voyah-resources/utilities/1x1_placeholder.png" alt="1:18 Model" class="placeholder-img" style="background: #e8eaed;" />
               </div>
               <div class="product-info">
                  <h3>{{ $t('domain.store.p2_title', 'Voyah FREE 1:18 Diecast Model') }}</h3>
                  <p class="price">¥899</p>
               </div>
            </div>

            <!-- Product Item 3 -->
            <div class="product-card">
               <div class="product-media">
                  <img src="/voyah-resources/utilities/1x1_placeholder.png" alt="Apparel" class="placeholder-img" style="background: #f8f9fa;" />
                  <div class="badge-sale">-20%</div>
               </div>
               <div class="product-info">
                  <h3>{{ $t('domain.store.p3_title', 'Signature Kunpeng Edition Jacket') }}</h3>
                  <p class="price"><span class="old-price">¥1299</span> ¥999</p>
               </div>
            </div>

            <!-- Product Item 4 -->
            <div class="product-card">
               <div class="product-media">
                  <img src="/voyah-resources/utilities/1x1_placeholder.png" alt="Accessories" class="placeholder-img" style="background: #edf2f7;" />
               </div>
               <div class="product-info">
                  <h3>{{ $t('domain.store.p4_title', 'Premium Nappa Leather Key Fob Cover') }}</h3>
                  <p class="price">¥150</p>
               </div>
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
.custom-page { background: #fff; min-height: 80vh; }

.store-nav-wrapper {
  background: #fdfbf7;
  border-bottom: 1px solid #e9ecef;
  position: sticky;
  top: 64px;
  z-index: 10;
}
.store-nav {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 40px;
  overflow-x: auto;
}
.store-nav::-webkit-scrollbar { display: none; }
.store-nav li {
  padding: 24px 0;
  color: #495057;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;
  white-space: nowrap;
}
.store-nav li:hover {
  color: #c59c62;
}
.store-nav li.active {
  color: #212529;
}
.store-nav li.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background: #c59c62;
}

.store-grid-section { padding: 80px 0; }
.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}
.product-card {
  cursor: pointer;
  transition: transform 0.3s ease;
}
.product-card:hover {
  transform: translateY(-5px);
}
.product-media {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 1;
  margin-bottom: 20px;
}
.placeholder-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
}
.product-card:hover .placeholder-img {
  opacity: 0.9;
}
.badge-new {
  position: absolute;
  top: 15px; left: 15px;
  background: #212529;
  color: #fff;
  padding: 4px 10px;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 4px;
}
.badge-sale {
  position: absolute;
  top: 15px; left: 15px;
  background: #dc3545;
  color: #fff;
  padding: 4px 10px;
  font-size: 0.75rem;
  font-weight: bold;
  border-radius: 4px;
}
.product-info h3 {
  font-size: 1.1rem;
  color: #212529;
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 8px;
}
.price {
  font-weight: bold;
  color: #c59c62;
  font-size: 1.2rem;
}
.old-price {
  color: #adb5bd;
  text-decoration: line-through;
  font-size: 0.9rem;
  margin-right: 8px;
  font-weight: normal;
}

@media (max-width: 1200px) {
  .products-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 991px) {
  .products-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 576px) {
  .products-grid { grid-template-columns: 1fr; }
}
</style>
