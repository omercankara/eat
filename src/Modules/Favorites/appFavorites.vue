<template>
    <div class="favorites-page">
      <h1>Favori Ürünlerim</h1>
      <div v-if="favorites.length > 0" class="favorites-container">
        <div v-for="meal in favorites" :key="meal.idMeal" class="favorite-card">
          <img :src="meal.strMealThumb" :alt="meal.strMeal" class="favorite-image" />
          <div class="favorite-content">
            <h3>{{ meal.strMeal }}</h3>
            <p>{{ meal.strInstructions.slice(0, 50) }}...</p>
            <button @click="removeFromFavorites(meal.idMeal)" class="remove-btn">
              ❌ Favoriden Çıkar
            </button>
          </div>
        </div>
      </div>
      <div v-else class="no-favorites">
        <p>Henüz favori ürün eklemediniz.</p>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['favorites']) // Vuex store'daki favorites state'ini çek
    },
    methods: {
      ...mapActions(['removeFromFavorites']) // Favoriden çıkarma işlemi
    }
  };
  </script>
  
  <style scoped>
  .favorites-page {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .favorites-container {
    display: flex;
    flex-wrap: wrap; /* Kartların satırlara sığmasını sağlar */
    gap: 20px; /* Kartlar arası boşluk */
  }
  
  .favorite-card {
    border: 1px solid #ddd;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    background-color: white;
    transition: transform 0.3s ease-in-out;
    width: 200px; /* Kart genişliği */
    display: flex;
    flex-direction: column; /* İçeriği dikey olarak hizala */
  }
  
  .favorite-card:hover {
    transform: translateY(-5px);
  }
  
  .favorite-image {
    width: 100%;
    height: 120px; /* Görsel boyutunu küçült */
    object-fit: cover;
  }
  
  .favorite-content {
    padding: 15px;
    flex: 1; /* İçeriği esnek yap, kartın geri kalanını doldur */
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* İçerik arasında boşluk bırak */
  }
  
  .favorite-content h3 {
    font-size: 16px; /* Başlık boyutunu küçült */
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
  }
  
  .favorite-content p {
    font-size: 12px; /* Metin boyutunu küçült */
    color: #555;
    margin-bottom: 15px;
  }
  
  .remove-btn {
    padding: 8px 12px; /* Buton boyutunu küçült */
    background-color: #ff6347;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 12px; /* Buton metin boyutunu küçült */
    transition: background-color 0.3s;
    align-self: flex-start; /* Butonu sola hizala */
  }
  
  .remove-btn:hover {
    background-color: #e5533d;
  }
  
  .no-favorites {
    text-align: center;
    font-size: 18px;
    color: #777;
    margin-top: 50px;
  }
  </style>