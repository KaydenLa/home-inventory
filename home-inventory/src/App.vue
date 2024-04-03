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
@media only screen and (max-width: 450px) {

  nav {
    overflow:visible;
  }

  .nav-right a {
    float: none;
    width: 100vw;
    margin: 0;
    display: block;
    height: 2vh;
  }
  .nav-left a {
    float: none;
    width: 100vw;
    margin: 0;
    display: block;
    height: 2vh;
  }
  .nav-left a:hover {
    height: 3vh;
}
.nav-right a:hover {
  height: 3vh;
}
 
}
</style>
