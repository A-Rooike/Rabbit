<template>
  <Sticky />
  <Header />
  <div class="container flex">
    <Category />
    <Slideshow />
  </div>
  <News
    listType="1"
    title="新鲜好物"
    tips="新鲜出炉 品质靠谱"
    :showAll="true"
  />
  <News
    listType="2"
    title="人气推荐"
    tips="人气爆款 不容错过"
    :showAll="false"
  />
  <HotBrand />
  <Goods />
  <Special />
</template>

<script setup>
import Sticky from "@/components/Sticky/index";
import Header from "@/components/Header";
import Category from "./category";
import Slideshow from "./slideshow";
import News from "./news";
import HotBrand from "./hotbrand";
import Goods from "./goods";
import Special from "./special/index";

import { onMounted } from "vue";
import { useStore } from "vuex";

onMounted(() => {});
</script>

<style lang='less' scoped>
.flex {
  overflow: hidden;
}
</style>