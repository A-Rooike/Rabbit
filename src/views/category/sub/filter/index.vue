<template>
  <div class="container">
    <div
      class="sub-filter"
      v-if="list.brands && !loaind"
    >
      <div
        class="item"
        v-for="item in list.brands"
        :key='item.id'
      >
        <div class="head">品牌：</div>
        <div class="body"><a
            class="ellipsis active"
            title="全部"
          >全部</a><a
            class="ellipsis"
            title="自有品牌"
          >{{item.name}}</a></div>
      </div>
      <div
        class="item"
        v-for="items in list.saleProperties"
        :key='items.id'
      >
        <div class="head">{{items.name}}：</div>
        <div class="body">
          <a
            class="ellipsis active"
            title="全部"
          >全部</a>
          <a
            class="ellipsis"
            :title="goods.name"
            v-for="goods in items.properties"
            :key="goods.id"
          >{{goods.name}}</a>
        </div>
      </div>

    </div>
    <div
      class="sub-filter"
      v-else
    >
      <Skeleton
        width='400px'
        height='24px'
        class="skele"
      />
      <Skeleton
        width='600px'
        height='24px'
        class="skele"
      />
      <Skeleton
        width='700px'
        height='24px'
        class="skele"
      />
      <Skeleton
        width='800px'
        height='24px'
        class="skele"
      />
    </div>

  </div>
</template>

<script setup>
import { onMounted, computed, watch, ref } from "vue";
import { useStore } from "vuex";
import Skeleton from "@/components/Skeleton/index";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();
const loaind = ref(false);
const list = computed(() => store.state.category.TwoCategoryList);
const TwoId = computed(() => router.currentRoute.value.query.id);
watch(TwoId, (newValue, oldValue) => {
  if (newValue && router.currentRoute.value.name == "二级分类") {
    loaind.value = true;
  }
});
watch(list, (newValue, oldValue) => {
  if (newValue && router.currentRoute.value.name == "二级分类") {
    loaind.value = false;
  }
});

onMounted(() => {
  console.log(1);
});
</script>

<style lang='less' scoped>
.sub-filter {
  background: #fff;
  padding: 25px;
  .item {
    display: flex;
    .head {
      width: 80px;
      color: #999;
      line-height: 40px;
    }
    .body {
      flex: 1;
      a {
        margin-right: 36px;
        transition: all 0.3s;
        display: inline-block;
        max-width: 112px;
        line-height: 40px;
        &:hover {
          color: #27ba9b;
          cursor: pointer;
        }
      }
      .active {
        color: #27ba9b;
      }
      .ellipsis,
      .ellipsis-2 {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }
  .skele {
    display: block;
    margin-bottom: 20px;
  }
}
</style>