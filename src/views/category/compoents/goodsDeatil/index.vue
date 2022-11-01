<template>
  <div class="goodsdeatil">
    <div
      class="ref-goods"
      v-for="item in OneCategoryList.children"
      :key="item.id"
    >
      <div class="head">
        <h3>- {{item.name}} -</h3>
        <p class="tag">温暖柔软，品质之选</p><a class="xtx-more"><span>查看全部</span><i class="iconfont icon-angle-right"></i></a>
      </div>
      <div class="body">
        <a
          class="goods-item"
          v-for="goods in item.goods"
          :key='goods.id'
        >
          <img
            alt=""
            :src="goods.picture"
          >
          <p class="name ellipsis">{{goods.name}}</p>
          <p class="desc ellipsis">{{goods.desc}}</p>
          <p class="price">¥{{goods.price}}</p>
        </a>

      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();
const OneCategoryList = computed(() => store.state.category.OneCategoryList);
onMounted(() => {
  console.log(OneCategoryList);
});
</script>

<style lang='less' scoped>
@import url("../../../../assets/style/variables");
.goodsdeatil {
  margin-bottom: 20px;
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: 400;
    text-align: center;
    line-height: 100px;
  }
  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;
    .head {
      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
        span {
          font-size: 16px;
          vertical-align: middle;
          margin-right: 4px;
          color: #999;
        }
        i {
          font-size: 14px;
          vertical-align: middle;
          position: relative;
          top: 2px;
          color: #ccc;
        }
      }
    }
    .body {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      padding: 0 65px 30px;
      .goods-item {
        display: block;
        width: 220px;
        padding: 20px 30px;
        text-align: center;
        transition: all 0.5s;
        &:hover {
          cursor: pointer;
          transform: translate3d(0, -3px, 0);
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
        }
        img {
          width: 160px;
          height: 160px;
        }
        p {
          padding-top: 10px;
        }
        .name {
          font-size: 16px;
        }
        .desc {
          color: #999;
          height: 29px;
        }
        .price {
          color: @priceColor;
          font-size: 20px;
        }
      }
    }
  }
}
</style>