<template>
  <div
    class="hotbrand"
    ref="brand"
  >
    <div class="container">
      <div class="header">
        <div class="header_left">
          <p class="fw">热门品牌</p>
          <p class="fws">国际经典 品质保证</p>
        </div>
        <div class="header_right">
          <a
            href="javascript:;"
            class="iconfont icon-angle-left prev"
            :class="{ disabled: index === 0 }"
            @click="index = 0"
          ></a>
          <a
            href="javascript:;"
            class="iconfont icon-angle-right next"
            :class="{ disabled: index === 1 }"
            @click="index = 1"
          ></a>
        </div>
      </div>
      <div class="box">
        <ul class="list">
          <li
            v-for="i in list"
            :key="i"
            :class="{ remove: index == 1, num: index == 0 }"
          >
            <img
              :src="i.picture"
              alt=""
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useLazyData } from "@/hooks/index";

const store = useStore();
const brand = ref(null);
const index = ref(0);
const list = computed(() => store.state.home.BrandList);
onMounted(() => {
  useLazyData(brand, "GetBrand");
});
</script>

<style lang='less' scoped>
@import url("../../../assets/style/variables");
.hotbrand {
  .header {
    padding: 40px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header_left {
      display: flex;
      align-items: center;

      .fw {
        margin-right: 20px;
        font-size: 32px;
        font-weight: 400;
        margin-left: 6px;
        // height: 35px;
        // line-height: 35px;
      }
      .fws {
        font-size: 16px;
        color: #999;
      }
    }
    .header_right {
      font-size: 16px;
      color: #999;
      .disable {
        background: rgb(204, 204, 204);
        cursor: not-allowed;
      }
      .iconfont {
        width: 20px;
        height: 20px;
        background: #ccc;
        color: #fff;
        display: inline-block;
        text-align: center;
        margin-left: 5px;
        background: @xtxColor;
        &::before {
          font-size: 12px;
          position: relative;
          top: -2px;
        }
        &.disabled {
          background: #ccc;
          cursor: not-allowed;
        }
      }
    }
  }

  .box {
    display: flex;
    width: 100%;
    height: 345px;
    overflow: hidden;
    padding-bottom: 40px;
    .list {
      width: 200%;
      display: flex;
      transition: all 1s;
      li {
        margin-right: 10px;
        width: 240px;
        &:nth-child(5n) {
          margin-right: 0;
        }
        img {
          width: 240px;
          height: 305px;
        }
      }
      .remove {
        transform: translateX(-1240px);
        transition: all 1s ease;
      }
      .num {
        transition: all 1s ease;
      }
    }
  }
}
</style>