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
  height: 10vh;
  padding: 0px 20px;
  background-color: rgb(143, 163, 124);

}

.nav-right a {
  float: right;
  height: 10vh;
  padding: 0px 20px;
  background-color: rgb(143, 163, 124);

}

nav a {
  color: rgb(56, 45, 64);
  text-decoration: none;
  font-size: larger;
  align-content: center;
}

.nav-right a:hover {
  background-color: rgb(254, 255, 182);
  color: rgb(30, 30, 30);
  padding: 0px 24px;
  text-decoration: bold;

}

.nav-left a:hover {
  background-color: rgb(254, 255, 182);
  color: rgb(30, 30, 30);
  padding: 0px 24px;
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
  height: 6vh;
  background-color: rgb(239, 238, 226);
  padding: 20px 16px;
  text-align: center;
  margin: 6px;
  border-radius: 5px 15px;
  box-shadow: 5px 10px rgb(102, 106, 93);
}

.item input {
  width: 100%;
}

.item button {
  width: 100%;
  height: 80%;
}

@media only screen and (max-width: 450px) {
  nav {
    overflow: visible;
  }

  .nav-right a {
    float: none;
    width: 100vw;
    display: block;
    height: 8vh;
    padding: 0;
  }

  .nav-left a {
    float: none;
    width: 100vw;
    display: block;
    height: 8vh;
    padding: 0;
  }

  .nav-left a:hover {
    height: 9vh;
    padding: 0;
  }

  .nav-right a:hover {
    height: 9vh;
    padding: 0;
  }
}
</style>
