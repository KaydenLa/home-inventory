<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <div class="nav-left">
      <RouterLink to="/">Home</RouterLink>
    </div>
    <div class="nav-right">
      <RouterLink to="/ingredients">Ingredients</RouterLink>
    </div>
    <div class="nav-right">
      <RouterLink to="/seasoning">Seasoning</RouterLink>
    </div>
    <div class="nav-right">
      <RouterLink to="/supplies">Supplies</RouterLink>
    </div>
  </nav>
  <RouterView />
</template>


<style>
body {
  margin: 0;
  background-color: rgb(50, 45, 58);
  color: rgb(214, 206, 196);
}

nav {
  background-color: rgb(29, 25, 31);
  overflow: hidden;
  text-align: center;
}

.nav-left a {
  float: left;
  padding: 24px 16px;
  background-color: rgb(143, 163, 124);

}

.nav-right a {
  float: right;
  padding: 24px 16px;
  background-color: rgb(143, 163, 124);

}

nav a {
  color: rgb(56, 45, 64);
  text-decoration: none;
  font-size: larger;
}

.nav-right a:hover {
  background-color: rgb(254, 255, 182);
  color: rgb(30, 30, 30);
  padding: 24px 20px;
  text-decoration: bold;

}

.nav-left a:hover {
  background-color: rgb(254, 255, 182);
  color: rgb(30, 30, 30);
  padding: 24px 20px;
  text-decoration: bold;


}

a.router-link-exact-active {
  color: rgb(66, 45, 138);
  background-color: rgb(217, 182, 101);
}

.center {
  text-align: center;
}
</style>
