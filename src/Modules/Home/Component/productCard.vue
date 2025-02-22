<template>
  <div class="product-card">
    <img :src="meal.strMealThumb" alt="Yemek Görseli" class="meal-image" />
    <div class="product-info">
      <h3 class="meal-title">{{ meal.strMeal }}</h3>
      <p class="meal-description">{{ meal.strInstructions.slice(0, 100) }}...</p>
      <router-link :to="'/meal/' + meal.idMeal" class="details-btn">Detaylar</router-link>
      <!-- Favori Butonu -->
      <button 
        @click="toggleFavorite" 
        :class="{'favorited': isFavorite}"
        class="favorite-btn"
      >
        {{ isFavorite ? '❤️ Favori' : '🤍 Favoriye Ekle' }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    meal: {
      type: Object,
      required: true
    }
  },
  computed: {
    // Favori olup olmadığını kontrol et
    isFavorite() {
      return this.$store.getters.isFavorite(this.meal.idMeal);
    }
  },
  methods: {
    ...mapActions(['addToFavorites', 'removeFromFavorites']),
    // Favori ekleme/çıkarma işlemi
    toggleFavorite() {
      if (this.isFavorite) {
        this.removeFromFavorites(this.meal.idMeal); // Favoriden çıkar
      } else {
        this.addToFavorites(this.meal); // Favoriye ekle
      }
    }
  }
};
</script>

<style scoped>
.product-card {
  width: 250px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: white;
  margin: 20px;
  position: relative;
  transition: transform 0.3s ease-in-out;
}

.product-card:hover {
  transform: translateY(-10px);
}

.meal-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-bottom: 2px solid #f1f1f1;
}

.product-info {
  padding: 15px;
  text-align: center;
}

.meal-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.meal-description {
  font-size: 14px;
  color: #555;
  margin-bottom: 15px;
}

.details-btn {
  padding: 10px 20px;
  background-color: #ff6347;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
  text-decoration: none;
}

.details-btn:hover {
  background-color: #e5533d;
}

.favorite-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(255, 255, 255, 0.8); /* Yarı saydam beyaz arkaplan */
  border: 1px solid #ddd; /* Hafif bir border */
  border-radius: 20px; /* Yuvarlak köşeler */
  padding: 8px 16px; /* Buton iç boşluğu */
  font-size: 14px;
  cursor: pointer;
  color: #555; /* Varsayılan metin rengi */
  transition: all 0.3s ease-in-out; /* Renk ve arkaplan geçişi */
  display: flex;
  align-items: center;
  gap: 8px; /* Emoji ve metin arası boşluk */
}

.favorite-btn:hover {
  background: rgb(255, 38, 0); /* Hover durumunda hafif kırmızı arkaplan */
  border-color: #ff6347; /* Hover durumunda border rengi */
  color: white; /* Hover durumunda metin rengi */
}

.favorite-btn.favorited {
  background: rgba(255, 99, 71, 0.1); /* Favori olduğunda hafif kırmızı arkaplan */
  border-color: #ff6347; /* Favori olduğunda border rengi */
  color: #ff6347; /* Favori olduğunda metin rengi */
}
</style>