<script setup>
import { ref, computed } from 'vue'
import axios from 'axios'
import { useIngredientStore } from '@/stores/ingredient';

const ingredientStore = useIngredientStore()

const form_input = ref(
    {
        itemId: "",
        itemName: "",
        itemStatus: "",
        addItemId: "",
        addItemName: "",
        addItemStatus: "",
    }
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
async function post_data_update_item() {
    const options = {
        method: 'POST',
        url: 'http://127.0.0.1:3000/ingredients',
        params: {
            itemId: form_input.value.itemId,
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

async function post_data_add_item() {
    const options = {
        method: 'POST',
        url: 'http://127.0.0.1:3000/ingredients',
        params: {
            itemId: form_input.value.addItemId,
            itemName: form_input.value.addItemName,
            itemStatus: form_input.value.addItemStatus,
        },

    };

    try {
        await axios.request(options).then((resp) => {
            ingredientStore.editIngredient(resp.data)
            console.log(ingredientStore.ingredient)
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
    <div class="form-container">
        <div class="form">
            <form @submit.prevent="fetch_remote_data">
                <div class="buttonDiv">
                    <button type="submit">View All</button>
                </div>
            </form>
        </div>
    </div>
    <div class="query-results">
        <div class="item">
            <form @submit.prevent="post_data_add_item">
                <p>
                    <label>Item ID</label>
                    <input type="number" v-model="form_input.itemId"  placeholder="Optional" />
                </p>
                <p>
                    <label>Item Name</label>
                    <input type="text" v-model="form_input.itemName" placeholder="Required" required />
                </p>
                <p>
                    <label>Item Status</label>
                    <input type="text" v-model="form_input.itemStatus" placeholder="Required" required />
                </p>
                <p>
                    <button type="submit">Add Item</button>
                </p>
            </form>
        </div>
        <div class="item">
            <form @submit.prevent="post_data_add_item">
                <p>
                    <label>Item ID</label>
                    <input type="number" v-model="form_input.addItemId"  placeholder="Required" />
                </p>
                <p>
                    <label>Item Name</label>
                    <input type="text" v-model="form_input.addItemName" placeholder="Optional" required />
                </p>
                <p>
                    <label>Item Status</label>
                    <input type="text" v-model="form_input.addItemStatus" placeholder="Optional" required />
                </p>
                <p>
                    <button type="submit">Update Existing</button>
                </p>
            </form>
        </div>

    </div>
    <div class="query-results">
        <div class="item" v-for="x in ingredientStore.ingredient">
            <p>ID<br>{{ x.id }} </p>
            <p>Item<br>{{ x.item }} </p>
            <p>Status<br>{{ x.status }}</p>
        </div>
    </div>
</template>

<style>
p{
    width: 15vw;
}
.form-container {
    display: flex;
}

.form {
    padding-left: 3%;
}

.query-results {
    float: none;
    display: block;
}


@media only screen and (max-width: 450px) {
    p {
        width: 80%;
    }

    .form-container {
        flex: none;
        display: block;
    }

    .form {
        width: 100vw;
    }

    button {
        width: 100%;
    }

    .buttonDiv button {
        width: 85vw;
        height: 4vh;
        align-self: center;
    }

    .buttonDiv {
        text-align: center;
        padding-bottom: 7vh;
    }
}
</style>