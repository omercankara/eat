<template>
    <div class="container">
      <input 
        type="text" 
        v-model="searchQuery" 
        placeholder="Yemek arayın..." 
        class="search-input" 
      />
      <div class="product-list">
        <ProductCard 
          v-for="meal in filteredMeals" 
          :key="meal.idMeal" 
          :meal="meal" 
        />
      </div>
      <appFavorites />
    </div>
  </template>
  
  <script>
  import { getProduct } from '@/Services/Products/productsApi'; // ✅ Named Import
  import ProductCard from './Component/productCard.vue';
  import appFavorites from '../Favorites/appFavorites.vue';
  
  export default {
    components: {
      ProductCard,
      appFavorites
    },
    data() {
      return {
        product: [],
        searchQuery: ''  // Kullanıcının arama terimi
      };
    },
    computed: {
      // meals listesini searchQuery'ye göre filtreleme
      filteredMeals() {
        if (!this.searchQuery) {
          return this.product;  // Eğer arama yapılmamışsa, tüm yemekleri göster
        }
        return this.product.filter(meal =>
          meal.strMeal.toLowerCase().includes(this.searchQuery.toLowerCase())
        );  // meal'in adı searchQuery'yi içeriyorsa, o öğeyi döndür
      }
    },
    mounted() {
      getProduct().then(res => {
        this.product = res.data.meals;  // API'den gelen veriyi product'a atıyoruz
        console.log(res.data.meals);
      });
    }
  };
  </script>
  
  <style scoped>
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  .search-input {
    width: 100%;
    max-width: 500px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 20px;
    transition: border-color 0.3s ease;
  }
  
  .search-input:focus {
    border-color: #ff6347;
  }
  
  .product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  </style>
  