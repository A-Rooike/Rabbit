<template>
  <Filter />
  <Goods />
</template>

<script setup>
import Filter from "./filter/index";
import Goods from "./goods/index";
import { onMounted, watch, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();
const TwoId = computed(() => router.currentRoute.value.query.id);
const TwoCategoryList = computed(() => store.state.category.TwoCategoryList);

watch(TwoId, (newValue, oldValue) => {
  if (newValue && router.currentRoute.value.name == "二级分类") {
    store.dispatch("GetTwoCategory", newValue);
  }
});
onMounted(() => {
  console.log(666);
  store.dispatch("GetTwoCategory", TwoId.value);
});
</script>

<style lang='less' scoped>
</style>