<template>
  <ul class="navs">
    <li class="home">
      <RouterLink to="/">首页</RouterLink>
    </li>

    <li
      v-for="item in CategoryList"
      :key="item.id"
    >
      <a href="#">{{ item.name }}</a>
      <div class="layer">
        <ul>
          <li
            v-for="items in item.children"
            :key="items.id"
          >
            <a href="#">
              <img
                :src="items.picture"
                alt=""
              />
              <p>{{ items.name }}</p>
            </a>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { useStore, mapState } from "vuex";
const store = useStore();

const CategoryList = computed(() => store.state.category.CategoryList);
onMounted(() => {
  store.dispatch("GetAllCategory");
});
</script>

<style lang='less' scoped>
@import "../../../assets/style/variables";
.navs {
  width: 820px;
  display: flex;
  justify-content: space-around;
  padding-left: 40px;
  position: relative;
  z-index: 998;

  > li {
    margin-right: 40px;
    width: 38px;
    text-align: center;
    > a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
    }
    &:hover {
      > a {
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
      }
      > .layer {
        height: 132px;
        opacity: 1;
      }
    }
  }
}
.layer {
  width: 1240px;
  background-color: #fff;
  position: absolute;
  left: -200px;
  top: 56px;
  height: 0;
  overflow: hidden;
  opacity: 0;
  box-shadow: 0 0 5px #ccc;
  transition: all 0.2s 0.1s;
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 70px;
    align-items: center;
    height: 132px;
    li {
      width: 110px;
      text-align: center;
      img {
        width: 60px;
        height: 60px;
      }
      p {
        padding-top: 10px;
      }
      &:hover {
        p {
          color: @xtxColor;
        }
      }
    }
  }
}
</style>