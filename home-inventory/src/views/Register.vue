<script setup>
import { ref } from 'vue';
//Following: https://www.youtube.com/watch?v=uqpM7WVTKI4&t=832s

function handleSubmit(){
    console.log('Submitted')    
};
</script>

<template>
    <h3>Sign up</h3>
    <form @submit="handleSubmit">
        <div>
            <label> First Name</label>
            <input type="text" />
        </div>
        <div>
            <label> Password</label>
            <input type="password" />
        </div>
        <div>
            <button>sign up</button>
        </div>
    </form>
    <button @click="handleSubmit">butttonnn</button>
</template>

