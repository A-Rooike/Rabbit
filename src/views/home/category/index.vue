<template>
  <div class="home-category">
    <ul class="menu">
      <li
        v-for="(item, index) in store.getters.CategoryLeft"
        :key="index"
      >
        <div v-if="item.carName[1] != ''">
          <a
            v-for="item1 in item.carName"
            :key="item1"
          >{{ item1 }}</a>
        </div>
        <div v-else>
          <Skeleton
            width="40px"
            height="18px"
            style="margin-right: 5px"
            bg="rgba(255,255,255,0.2)"
          />
          <Skeleton
            width="60px"
            height="18px"
            style="margin-right: 5px"
            bg="rgba(255,255,255,0.2)"
          />
          <Skeleton
            width="60px"
            height="18px"
            bg="rgba(255,255,255,0.2)"
          />
        </div>
        <div class="layer">
          <h4>分类推荐 <small>根据您的购买或浏览记录推荐</small></h4>
          <ul>
            <li
              v-for="item2 in item.goods"
              :key="item2.id"
            >
              <RouterLink to="/">
                <img
                  :src="item2.picture"
                  alt=""
                />
                <div class="info">
                  <p class="name ellipsis-2">
                    {{ item2.name }}
                  </p>
                  <p class="desc ellipsis">{{ item2.desc }}</p>
                  <p class="price"><i>¥</i>{{ item2.price }}</p>
                </div>
              </RouterLink>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <a>品牌</a>
        <a>品牌推荐</a>
        <div class="layer">
          <h4>分类推荐 <small>根据您的购买或浏览记录推荐</small></h4>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import Skeleton from "@/components/Skeleton/index";
const store = useStore();
</script>

<style scoped lang='less'>
@import "../../../assets/style/variables";
.home-category {
  width: 250px;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  z-index: 99;

  .menu {
    li {
      padding-left: 40px;
      height: 50px;
      line-height: 50px;
      &:hover {
        background: @xtxColor;
      }
      a {
        margin-right: 4px;
        color: #fff;
        &:first-child {
          font-size: 16px;
        }
      }
      .layer {
        width: 990px;
        height: 500px;
        background: rgba(255, 255, 255, 0.8);
        position: absolute;
        left: 250px;
        top: 0;
        display: none;
        padding: 0 15px;
        h4 {
          font-size: 20px;
          font-weight: normal;
          line-height: 80px;
          small {
            font-size: 16px;
            color: #666;
          }
        }
        ul {
          display: flex;
          flex-wrap: wrap;
          li {
            width: 310px;
            height: 120px;
            margin-right: 15px;
            margin-bottom: 15px;
            padding-left: 0;
            border: 1px solid #eee;
            border-radius: 4px;
            background: #fff;
            &:nth-child(3n) {
              margin-right: 0;
            }
            a {
              display: flex;
              width: 100%;
              height: 100%;
              align-items: center;
              padding: 10px;
              &:hover {
                background: #e3f9f4;
              }
              img {
                width: 95px;
                height: 95px;
              }
              .info {
                padding-left: 10px;
                line-height: 24px;
                width: 190px;
                .name {
                  font-size: 16px;
                  color: #666;
                }
                .desc {
                  color: #999;
                }
                .price {
                  font-size: 22px;
                  color: @priceColor;
                  i {
                    font-size: 16px;
                  }
                }
              }
            }
          }
        }
      }
      &:hover {
        .layer {
          display: block;
        }
      }
    }
  }
}
</style>