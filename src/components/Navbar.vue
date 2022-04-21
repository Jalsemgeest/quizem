<script>
import { RouterLink, RouterView } from "vue-router";
</script>



<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/quiz">Create Quizem</RouterLink>
    <RouterLink to="/load">Load Quizem</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  align-content: space-between;
  position: relative;
  display: flex;
  width: 800px;
}

nav > a {
    padding: 10px;
    color: black;
    font-size: 16px;
    font-weight: 600;;
    text-decoration: none;
}

nav > a:hover {
    background-color: rgb(255, 188, 62);
}
</style>