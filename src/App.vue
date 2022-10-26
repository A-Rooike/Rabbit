<template>
  <NavBar />
  <router-view></router-view>
  <Footer />
</template>

<script setup>
import { onMounted } from "vue";
import NavBar from "@/components/NavBar/index";
import Footer from "@/components/Footer/index";
</script>

<style lang='less' >
</style>