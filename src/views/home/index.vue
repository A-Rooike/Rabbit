<template>
  <Header />
  <div class="container flex">
    <Category />
    <Slideshow />
  </div>
  <News listType="1" />
  <News
    listType="2"
    title="人气推荐"
    tips="人气爆款 不容错过"
    :showAll="false"
  />
</template>

<script setup>
import Header from "./header";
import Category from "./category";
import Slideshow from "./slideshow";
import News from "./news";
import { onMounted } from "vue";
import { useStore } from "vuex";

onMounted(() => {});
</script>

<style lang='less' scoped>
.flex {
  overflow: hidden;
}
</style>