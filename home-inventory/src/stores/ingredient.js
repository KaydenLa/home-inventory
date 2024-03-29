import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useIngredientStore = defineStore('ingredient', () => {
  const ingredient = ref("Blank ingredient")

  function editIngredient(val){
    ingredient.value = val;
  }

  return { ingredient, editIngredient }
})
