<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useIngredientStore } from '@/stores/ingredient';

const ingredientStore = useIngredientStore()

//AXIOS call to back ennd
//localhost:3000/ingredients
async function fetch_remote_data() {
  const options = {
    method: 'GET',
    url: 'http://127.0.0.1:3000/ingredients',
  };

  try {
    await axios.request(options).then((resp) => {
      const w_data = resp
      //console.log(resp);
      //console.log(resp.data);
      ingredientStore.editIngredient(resp.data)
      console.log(ingredientStore.ingredient)
    })
  } catch (error) {
    console.error(error);
  }
}

</script>
<template>
  Supplies
  <form @submit.prevent="fetch_remote_data">
    <div>
      <button type="submit">View</button>
    </div>
  </form>

  <div class="item" v-for="x in ingredientStore.ingredient">
    <p>ID<br>{{ x.id }} </p>
    <p>Item<br>{{ x.item }} </p>
    <p>Status<br>{{ x.status }}</p>
  </div>
</template>