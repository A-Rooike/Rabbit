<template>
  <div class="container">
    <div class="sub-filter">
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
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const list = computed(() => store.state.category.TwoCategoryList);
onMounted(() => {});
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
}
</style>