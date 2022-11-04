<template>
  <div>
    <Sticky />
    <Header />
    <!--面包屑 -->
    <Bread />
    <!-- 轮播图 -->
    <div
      class="container"
      v-if="router.currentRoute.value.name=='分类'"
    >
      <Slideshow />
      <!-- 所有二级分类 -->
      <div class="sub-list">
        <h3>全部分类</h3>
        <ul>
          <li
            v-for="item in OneCategoryList.children"
            :key="item.id"
          >
            <a href="javascript:;">
              <img :src="item.picture">
              <p>{{item.name}}</p>
            </a>
          </li>
        </ul>
      </div>
      <GoodsDetail />
    </div>
    <router-view v-else></router-view>
  </div>
</template>

<script setup>
import { onMounted, computed, watch } from "vue";
import Header from "@/components/Header";
import Sticky from "@/components/Sticky";
import Bread from "@/components/Bread";
import Slideshow from "../home/slideshow";
import GoodsDetail from "./compoents/goodsDeatil";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();
const routerId = computed(() => router.currentRoute.value.query.id);
const OneCategoryList = computed(() => store.state.category.OneCategoryList);

watch(routerId, (newValue, oldValue) => {
  if (newValue && router.currentRoute.value.name == "分类") {
    store.dispatch("GetTopCategory", newValue);
  }
});
onMounted(async () => {
  if (router.currentRoute.value.name == "分类") {
    store.dispatch("GetTopCategory", routerId.value);
  }
});
</script>

<style lang='less' scoped>
@import url("../../assets/style/variables");
h3 {
  font-size: 28px;
  color: #666;
  font-weight: normal;
  text-align: center;
  line-height: 100px;
}
.sub-list {
  margin-top: 20px;
  background-color: #fff;
  ul {
    display: flex;
    padding: 0 32px;
    flex-wrap: wrap;
    li {
      width: 168px;
      height: 160px;
      a {
        text-align: center;
        display: block;
        font-size: 16px;
        img {
          width: 100px;
          height: 100px;
        }
        p {
          line-height: 40px;
        }
        &:hover {
          color: @xtxColor;
        }
      }
    }
  }
}
</style>