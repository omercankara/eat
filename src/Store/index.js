import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      favorites: [] // Favorilere eklenen yemekleri tutacak
    };
  },
  mutations: {
    // Favori ekleme
    ADD_TO_FAVORITES(state, meal) {
      if (!state.favorites.some(fav => fav.idMeal === meal.idMeal)) {
        state.favorites.push(meal);
      }
    },
    // Favoriden çıkarma
    REMOVE_FROM_FAVORITES(state, mealId) {
      state.favorites = state.favorites.filter(fav => fav.idMeal !== mealId);
    }
  },
  actions: {
    // Favori ekleme işlemi
    addToFavorites({ commit }, meal) {
      commit('ADD_TO_FAVORITES', meal);
    },
    // Favoriden çıkarma işlemi
    removeFromFavorites({ commit }, mealId) {
      commit('REMOVE_FROM_FAVORITES', mealId);
    }
  },
  getters: {
    // Favori olup olmadığını kontrol etme
    isFavorite: (state) => (mealId) => {
      return state.favorites.some(fav => fav.idMeal === mealId);
    }
  }
});

export default store;