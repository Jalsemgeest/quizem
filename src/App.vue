<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'
</script>

<template>
    <div class="navbar">
      <div class="container">
        <Navbar />
      </div>
    </div>
    <div class="content">
      <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

        <div class="wrapper">
          <HelloWorld msg="You did it!" />

          
        </div> -->

      <RouterView />
    </div>
</template>

<style>
@import '@/assets/base.css';

.navbar {
  width: 100%;
  height: 40px;
  background-color: orange;
  position: relative;
  margin-bottom: 5px;
}

.container {
  width: 80%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  position: relative;
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  margin: auto;
}

</style>
