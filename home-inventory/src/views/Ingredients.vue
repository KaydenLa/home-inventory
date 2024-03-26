<script setup>
import { ref } from 'vue';
const supplyList = ref([{ id: '1', item: "Sandwich Bread", status: "full" }, { id: '2', item: "Tortila", status: "Low" }, { id: '3', item: "Elbow noodles", status: "Half" }, { id: '4', item: "Rice", status: "Half" }])

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
                <div class="item" v-for="x in supplyList">
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
                Create form goes here
            </div>
        </div>

    </div>
</template>

<style>
.item {
    color: black;
    overflow: hidden;
    background-color: rgb(169, 169, 156);
    margin: 16px;
    text-align: center;
}

.item p {
    float: left;
    height: 40px;
    background-color: rgb(239, 238, 226);
    padding: 20px 16px;
    text-align: center;
    margin: 6px;
    border-radius: 5px 15px;
    box-shadow: 5px 10px rgb(102, 106, 93);
}
</style>
