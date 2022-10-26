<template>
  <div class="news">
    <div class="container">
      <div class="header">
        <div class="header_left">
          <p class="fw">{{ title }}</p>
          <p class="fws">{{ tips }}</p>
        </div>
        <div class="header_right" v-if="showAll">
          查看全部
          <i class="iconfont icon-angle-right"></i>
        </div>
      </div>
      <div class="main" v-if="list.length != 0">
        <div class="item" v-for="item in list" :key="item.id">
          <img :src="item.picture" alt="" class="item_img" />
          <div class="item_bottom" v-if="listType == '1'">
            <div class="title">{{ item.name }}</div>
            <div class="title price">¥{{ item.price }}</div>
          </div>
          <div class="item_bottom" v-else>
            <div class="title">{{ item.title }}</div>
            <div class="title desc">{{ item.alt }}</div>
          </div>
        </div>
      </div>
      <div class="main" v-else>
        <div v-for="item in 4" :key="item">
          <Skeleton bg="#e4e4e4" width="306px" height="306px" animated />
          <Skeleton
            bg="#e4e4e4"
            width="160px"
            height="24px"
            animated
            class="sktest"
          />
          <Skeleton
            bg="#e4e4e4"
            width="120px"
            height="24px"
            class="sktest"
            animated
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps } from "vue";
import { onMounted, ref } from "vue";
import { useStore, mapState } from "vuex";
import Skeleton from "@/components/Skeleton/index";

const store = new useStore();

const props = defineProps({
  title: {
    type: String,
    default: "新鲜好物",
  },
  tips: {
    type: String,
    default: "新鲜出炉 品质靠谱",
  },
  showAll: {
    type: Boolean,
    default: true,
  },
  listType: {
    type: String,
    default: "1",
  },
});
const list = ref([]);
onMounted(() => {
  if (props.listType == "1") {
    store.dispatch("Getnews");
    list.value = store.state.home.NewList;
  } else if (props.listType == "2") {
    store.dispatch("GetHot");
    list.value = store.state.home.HotList;
  }
});
</script>

<style lang='less' scoped>
.sktest {
  display: block;
  margin-top: 12px;
  width: 306px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
.skdesc {
}
.news {
  width: 100%;
  height: 100%;
  background: #fff;
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
    }
  }

  .main {
    display: flex;
    justify-content: space-around;
    .item {
      .item_img {
        width: 306px;
        height: 306px;
      }
      .item_bottom {
        background: #f0f9f4;
        height: 100px;
        width: 306px;
        .title {
          font-size: 22px;
          padding: 12px 30px 0 30px;
          text-align: center;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .price {
          color: #cf4444;
        }
        .desc {
          color: #999;
          font-size: 18px;
        }
      }
      &:hover {
        position: relative;
        top: -1px;
        box-shadow: 10px 10px 15px #ccc;
        transition: all 0.5s 0.1s;
      }
    }
  }
}
</style>