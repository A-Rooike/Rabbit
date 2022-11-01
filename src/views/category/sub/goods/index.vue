<template>
  <div class="container">
    <div class="goods-list">
      <div class="sub-sort">
        <div class="sort"><a class="active">默认排序</a><a class="">最新商品</a><a class="">最高人气</a><a class="">评论最多</a><a> 价格排序 <i class="arrow up"></i><i class="arrow down"></i></a></div>
        <div class="check">
          <div class="xtx-checkbox"><i class="iconfont icon-unchecked"></i><span>仅显示有货商品</span></div>
          <div class="xtx-checkbox"><i class="iconfont icon-unchecked"></i><span>仅显示特惠商品</span></div>
        </div>
      </div>
      <ul>
        <li
          v-for="item in list.items"
          :key="item.id"
        >
          <a class="goods-item">
            <img
              alt=""
              :src="item.picture"
            >
            <p class="name ellipsis">{{item.name}}</p>
            <p class="desc ellipsis">{{item.desc}}</p>
            <p class="price">¥{{item.price}}</p>
          </a>
        </li>

      </ul>
      <div
        class="xtx-infinite-loading"
        ref="loaing"
      >
        <div
          class="loading"
          v-if="loading"
        ></div>
        <div
          class="none"
          v-if="nodata"
        ><span class="img"></span><span class="text">亲，没有更多了</span></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { onMounted, watch, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { getlist } from "@/hooks/index";
import { findGoodsDetail } from "@/api/category";

const store = useStore();
const router = useRouter();
const categoryId = computed(() => router.currentRoute.value.query.id);
const loaing = ref(null);
const params = ref({
  categoryId: categoryId.value,
  page: 1,
  pagsize: 10,
});
const loading = ref(false);
const nodata = ref(false);
const getmore = () => {
  console.log(6666);
  params.value.page = params.value.page + 1;
};
watch(
  params,
  async (newValue, oldValue) => {
    loading.value = true;

    let res = await findGoodsDetail(params.value);
    if (res.msg == "操作成功") {
      if (res.result.items.length != 0) {
        loading.value = false;
        list.value.items.push(...res.result.items);
        getlist(loaing, getmore);
      } else {
        nodata.value = true;
        loading.value = false;
      }
    }
  },
  { deep: true }
);
const list = ref({});
onMounted(async () => {
  if (router.currentRoute.value.name == "二级分类") {
    loading.value = true;
    let res = await findGoodsDetail(params.value);
    if (res.msg == "操作成功") {
      loading.value = false;
      list.value = res.result;
    }
    getlist(loaing, getmore);
  }
});
</script>

<style lang='less' scoped>
.goods-list {
  background: #fff;
  padding: 0 25px;
  margin-top: 25px;
  .sub-sort {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .sort {
      display: flex;
      a {
        height: 30px;
        line-height: 28px;
        border: 1px solid #e4e4e4;
        padding: 0 20px;
        margin-right: 20px;
        color: #999;
        border-radius: 2px;
        position: relative;
        transition: all 0.3s;
      }
      .active {
        background: #27ba9b;
        border-color: #27ba9b;
        color: #fff;
      }
    }

    .check {
      .xtx-checkbox {
        margin-left: 20px;
        color: #999;
        display: inline-block;
        margin-right: 2px;
        span {
          margin-left: 2px;
        }
      }
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 5px;
    justify-content: space-between;
    li {
      // margin-right: 20px;
      margin-bottom: 20px;
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
          max-width: 100%;
          max-height: 100%;
          vertical-align: middle;
        }
        .name {
          font-size: 16px;
        }
        p {
          padding-top: 10px;
        }
        .ellipsis,
        .ellipsis-2 {
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      }
    }
  }

  .loading {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 50px;
    background: url("../../../../assets/images/loading.gif") no-repeat center;
    background-size: cover;
  }
  .none {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    .img {
      width: 200px;
      height: 134px;
      background: url("../../../../assets/images/nodata.png") no-repeat center;
      background-size: cover;
    }
    .text {
      color: #999;
      font-size: 16px;
    }
  }
}
</style>