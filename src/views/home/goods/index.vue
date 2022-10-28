<template>
  <div class="goods" ref="goods">
    <div class="container">
      <div class="list" v-for="item in list" :key="item.id">
        <div class="head" data-v-39dda62a="">
          <h3 data-v-39dda62a="">{{ item.name }}</h3>
          <div class="sub">
            <a v-for="child in item.children" :key="child.id">{{
              child.name
            }}</a>
          </div>
          <a class="xtx-more"
            ><span>查看全部</span><i class="iconfont icon-angle-right"></i
          ></a>
        </div>
        <div class="box">
          <a class="cover">
            <img alt="" v-lazy="item.picture" />
            <strong class="label">
              <span>{{ item.name }}馆</span>
              <span>{{ item.saleInfo }}</span>
            </strong>
          </a>

          <ul class="goods-list">
            <li v-for="goods in item.goods" :key="goods.id">
              <div class="goods-item">
                <a href="#/product/3844013" class="image"
                  ><img alt="" v-lazy="goods.picture"
                /></a>
                <p class="name ellipsis-2">{{ goods.name }}</p>
                <p class="desc ellipsis">{{ goods.desc }}</p>
                <p class="price">¥{{ goods.price }}</p>
                <div class="extra">
                  <a
                    aria-current="page"
                    href="#/"
                    class="router-link-active router-link-exact-active"
                    ><span>找相似</span><span>发现现多宝贝 &gt;</span></a
                  >
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import Skeleton from "@/components/Skeleton/index";
import { useLazyData } from "@/hooks/index";

const store = useStore();
const goods = ref(null);
const list = store.state.home.GoodsList;
onMounted(() => {
  useLazyData(goods, "GetGoods");
  // store.dispatch("GetGoods");
});
</script>

<style lang='less' scoped>
@import url("../../../assets/style/variables");

.goods {
  background: #fff;
  .container {
    .list {
      .head {
        padding: 40px 0;
        display: flex;
        align-items: flex-end;
        h3 {
          flex: 1;
          font-size: 32px;
          font-weight: 400;
          margin-left: 6px;
          height: 35px;
          line-height: 35px;
        }
        .sub {
          margin-bottom: 2px;
          a {
            padding: 2px 12px;
            font-size: 16px;
            border-radius: 4px;
          }
          a:hover {
            color: #fff;
            background: #27ba9b;
          }
        }
        .xtx-more {
          margin-left: 80px;
          text-decoration: none;
          color: #333;
          outline: none;
        }
      }

      .box {
        display: flex;
        .cover {
          width: 240px;
          height: 610px;
          margin-right: 10px;
          position: relative;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .label {
            width: 188px;
            height: 66px;
            display: flex;
            font-size: 18px;
            color: #fff;
            line-height: 66px;
            font-weight: 400;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translate3d(0, -50%, 0);
            span:first-child {
              width: 76px;
              background: rgba(0, 0, 0, 0.9);
            }
            span:last-child {
              flex: 1;
              background: rgba(0, 0, 0, 0.7);
            }
          }
        }

        .goods-list {
          width: 990px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          li {
            width: 240px;
            height: 300px;

            margin-bottom: 10px;

            .goods-item {
              width: 240px;
              height: 300px;
              padding: 10px 30px;
              position: relative;
              overflow: hidden;
              border: 1px solid transparent;
              transition: all 0.5s;
              &:hover {
                border-color: #27ba9b;
                .extra {
                  bottom: 86px;
                }
              }
              .image {
                display: block;
                width: 160px;
                height: 160px;
                margin: 0 auto;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .name {
                height: 44px;
              }
              p {
                margin-top: 6px;
                font-size: 16px;
              }
              .ellipsis-2 {
                word-break: break-all;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
              }
              .desc {
                color: #666;
                height: 22px;
              }
              .price {
                margin-top: 10px;
                font-size: 20px;
                color: #cf4444;
              }
              .ellipsis {
                text-overflow: ellipsis;
                overflow: hidden;
              }
              .extra {
                position: absolute;
                left: 0;
                bottom: 0;
                height: 86px;
                width: 100%;
                background: #27ba9b;
                text-align: center;
                transform: translate3d(0, 100%, 0);
                transition: all 0.5s;
                a {
                  text-decoration: none;
                  color: #333;
                  outline: none;
                  span {
                    display: block;
                    color: #fff;
                    width: 120px;
                    margin: 0 auto;
                    line-height: 30px;
                  }
                  span:first-child {
                    font-size: 18px;
                    border-bottom: 1px solid #fff;
                    line-height: 40px;
                    margin-top: 5px;
                  }
                  span:last-child {
                    display: block;
                    color: #fff;
                    width: 120px;
                    margin: 0 auto;
                    line-height: 30px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>   