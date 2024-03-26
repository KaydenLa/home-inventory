<script setup>
import { ref } from 'vue';
const supplyList = ref([{ id: '1', item:"Parsley", status:"full" }, { id: '2', item:"black pepper", status:"Low" }, { id: '3', item:"Garlic salt", status:"Half" },{ id: '4', item:"Season Salt", status:"Half" }])

</script>
<template>
    <div class="center">
        <h1>Seasonings</h1>
    </div>

    <div>

        <div class="view-form">
            <div class="center">
                View
            </div>
            <div>
                <li v-for="x in supplyList">
                    ID: {{ x.id }} | 
                    {{ x.item }} | 
                    Status: {{ x.status }}
                </li>
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