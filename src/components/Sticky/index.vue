<template>
  <header
    class="app-header-sticky"
    :class="{ show: y >= 78 }"
  >
    <div class="container">
      <h1 class="logo"></h1>
      <HeaderNav />
      <div
        class="right"
        data-v-df91b278=""
      >
        <a
          href="#/"
          class="router-link-active"
          data-v-df91b278=""
        >品牌</a><a
          href="#/"
          class="router-link-active"
          data-v-df91b278=""
        >专题</a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { onMounted, ref } from "vue";
import HeaderNav from "../Header/HeaderNav";
const y = ref("");
onMounted(() => {
  window.onscroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    y.value = scrollTop;
  };
});
</script>

<style lang='less' scoped>
@import "../../assets/style/variables";
.app-header-sticky {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  transform: translateY(-100%);
  opacity: 0;
  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }
  .container {
    display: flex;
    align-items: center;
  }
  .logo {
    width: 200px;
    height: 80px;
    background: url(../../assets/images/logo.png) no-repeat right 2px;
    background-size: 160px auto;
  }
  .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid @xtxColor;
    a {
      width: 38px;
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;
      &:hover {
        color: @xtxColor;
      }
    }
  }
}
// .app-header {
//   width: 100%;
//   height: 80px;
//   position: fixed;
//   left: 0;
//   top: 0;
//   z-index: 999;
//   background-color: #fff;
//   border-bottom: 1px solid #e4e4e4;
//   transform: translateY(-100%);
//   opacity: 0;
//   &.show {
//     transition: all 0.3s linear;
//     transform: none;
//     opacity: 1;
//   }
//   .container {
//     display: flex;
//     align-items: center;
//   }
//   .logo {
//     width: 200px;
//     a {
//       display: block;
//       height: 132px;
//       width: 100%;
//       text-indent: -9999px;
//       background: url(../../assets/images/logo.png) no-repeat center 18px /
//         contain;
//     }
//   }

//   .right {
//     width: 220px;
//     display: flex;
//     text-align: center;
//     padding-left: 40px;
//     border-left: 2px solid #27ba9b;
//     a {
//       width: 38px;
//       margin-right: 40px;
//       font-size: 16px;
//       line-height: 1;
//     }
//   }
// }
</style>