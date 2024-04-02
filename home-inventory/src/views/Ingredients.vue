<script setup>
import { ref, computed } from 'vue'
import axios from 'axios'
import { useIngredientStore } from '@/stores/ingredient';

const ingredientStore = useIngredientStore()

const form_input = ref(
    {
        itemName: "",
        itemStatus: "",    }
);


//AXIOS call to back end
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

//POST to backend
async function post_data() {
    const options = {
        method: 'POST',
        url: 'http://127.0.0.1:3000/ingredients',
        params: {
            itemName: form_input.value.itemName,
            itemStatus: form_input.value.itemStatus,
        },

    };


    try {
        await axios.request(options).then((resp) => {
            const w_data = resp
            //console.log(resp);
            //console.log(resp.data);
            ingredientStore.editIngredient(resp.data)
            console.log(ingredientStore.ingredient)
            //console.log(form_input);
            console.log(form_input.itemStatus);
            console.log(form_input.itemNothing);
        })
    } catch (error) {
        console.error(error);
    }
}

</script>
<template>
    <div class="center">
        <h1>Ingredients</h1>
    </div>
    <div>

        <div class="view-form">
            <div class="center">
                View
            </div>
            <div>
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
            </div>
        </div>

        <div class="create-form">
            <div class="center">
                Create
            </div>
            <div>
                <form @submit.prevent="post_data">
                    <div>
                        <label>Item</label>
                        <input type="text" v-model="form_input.itemName" required />
                    </div>
                    <div>
                        <label>Status</label>
                        <input type="text" v-model="form_input.itemStatus" required />
                    </div>
                    <div>
                        <button type="submit">Add</button>
                    </div>
                </form>
            </div>
        </div>

    </div>
</template>
