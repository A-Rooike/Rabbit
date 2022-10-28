<template>
  <NavBar v-if="router.currentRoute.value.name != '登录'" />
  <router-view></router-view>
  <Footer v-if="router.currentRoute.value.name != '登录'" />
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import NavBar from "@/components/NavBar/index";
import Footer from "@/components/Footer/index";
const router = useRouter();
onMounted(() => {
  console.log(router);
});
</script>

<style lang='less' >
</style>