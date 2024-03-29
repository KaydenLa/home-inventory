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
      <label for="">Start Date</label>
      <input type="date"  />
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
  <div>

    hey
    {{ ingredientStore.ingredient }}
  </div>

</template>