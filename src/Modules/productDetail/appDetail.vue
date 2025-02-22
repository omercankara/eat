<template>
  <div class="meal-detail">
    <h2>{{ meal.strMeal }}</h2>
    <img v-if="meal.strMealThumb" :src="meal.strMealThumb" alt="Meal Image" class="meal-image" />
    <p>{{ meal.strInstructions }}</p>
  </div>
</template>

<script>
import { getProductDetailById } from '@/Services/Products/productsApi';
export default {
  props: ['id'],  // Router'dan gelen id parametresi
  data() {
    return {
      meal: {}
    };
  },
  mounted() {
    this.fetchMealDetail();
  },
  methods: {
    async fetchMealDetail() {
      try {
        const response = await getProductDetailById(this.id);  // ID'yi API çağrısına dahil ediyoruz
        this.meal = response[0]
        console.log(response)
      } catch (err) {
        console.error('Detayları alırken hata oluştu:', err);
      }
    }
  }
};
</script>

<style scoped>
.meal-detail {
  text-align: center;
  padding: 20px;
}

.meal-image {
  width: 100%;
  max-width: 500px;
  margin-bottom: 20px;
}

.meal-detail h2 {
  font-size: 2em;
  color: #333;
  margin-bottom: 10px;
}

.meal-detail p {
  font-size: 1.2em;
  color: #555;
  line-height: 1.5;
  margin-top: 20px;
}
</style>