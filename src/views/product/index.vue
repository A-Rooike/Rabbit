<template>
  <Sticky />
  <Header />
  <Bread />

  <div class="container">

    <div
      class="good_info"
      v-if="list.brand"
    >
      <div class="media">
        <div class="goods_image">
          <div class="middle">
            <img
              :src="mainImg"
              alt=""
            >
          </div>
          <ul class="small">
            <li
              class=""
              v-for="item in list.mainPictures"
              :key="item"
              @mouseenter="hover(item)"
            >
              <img
                :src="item"
                alt=""
              >
            </li>

          </ul>
        </div>
        <ul class="goods-sales">
          <li>
            <p>销量人气</p>
            <p>200+</p>
            <p><i class="iconfont icon-task-filling"></i>销量人气</p>
          </li>
          <li>
            <p>商品评价</p>
            <p>400+</p>
            <p><i class="iconfont icon-comment-filling"></i>查看评价</p>
          </li>
          <li>
            <p>收藏人气</p>
            <p>600+</p>
            <p><i class="iconfont icon-favorite-filling"></i>收藏商品</p>
          </li>
          <li>
            <p>品牌信息</p>
            <p>苏宁电器</p>
            <p><i class="iconfont icon-dynamic-filling"></i>品牌主页</p>
          </li>
        </ul>
      </div>
      <div class="spec">
        <p class="g-name">{{list.name}}</p>
        <p class="g-desc">{{list.desc}}</p>
        <p class="g-price"><span>{{list.price}}</span><span>{{list.oldPrice}}</span></p>
        <div class="g-service">
          <dl>
            <dt>促销</dt>
            <dd>12月好物放送，App领券购买直降120元</dd>
          </dl>
          <dl>
            <dt>配送</dt>
            <dd><b style="vertical-align: middle; padding-right: 5px; font-weight: normal;">至</b>
              <div class="xtx-city">
                <div class="select">
                  <el-cascader
                    size="large"
                    :options="regionData "
                    v-model="selectedOptions"
                    placeholder='请选择地址'
                  >
                  </el-cascader>
                </div>
                <!---->
              </div>
            </dd>
          </dl>
          <dl>
            <dt>服务</dt>
            <dd><span>无忧退货</span><span>快速退款</span><span>免费包邮</span><a>了解详情</a></dd>
          </dl>
        </div>
        <div class="goods-sku">
          <dl>
            <dt>{{list.specs[0].name}}</dt>
            <dd>
              <img
                v-for="item in list.specs[0].values"
                :key='item.name'
                :src="item.picture"
                :title="item.name"
              >
            </dd>
          </dl>
        </div>
        <div class="xtx-numbox">
          <div class="label">数量</div>
          <div class="numbox"><a>-</a><input
              type="text"
              readonly=""
              v-model="number"
            ><a>+</a></div>
        </div>
        <button
          class="xtx-button ellipsis middle primary"
          style="margin-top: 20px;"
        >加入购物车</button>
      </div>
    </div>
    <div
      class="good_info loading"
      v-else
    >
      <img
        src="../../assets/images/loading.gif"
        alt=""
      >
    </div>
    <div
      class="goods-relevant"
      ref='recommend'
    >
      <div class="header"><i class="icon"></i><span class="title">同类商品推荐</span></div>
      <div
        class="xtx-carousel"
        ref='carousel'
      >
        <ul class="carousel-body">
          <li
            class="carousel-item "
            v-for="(item,index) in recommendList"
            :class="{'fade':index==currentIndex}"
            :key='index'
          >
            <div class="slider">
              <a
                class=""
                v-for="items in item"
                :key='items.id'
              >
                <img
                  :src="items.picture"
                  alt=""
                >
                <p class="name ellipsis">{{items.name}}</p>
                <p class="price">¥{{items.price}}</p>
              </a>
            </div>
          </li>

        </ul><a
          class="carousel-btn prev"
          @click="changeCurrent(1)"
        ><i class="iconfont icon-angle-left"></i></a><a
          class="carousel-btn next"
          @click="changeCurrent(2)"
        ><i class="iconfont icon-angle-right"></i></a>
        <div class="carousel-indicator"><span class="active"></span><span class=""></span><span class=""></span><span class=""></span></div>
      </div>
    </div>

    <div
      class="goods-footer"
      v-if="list.brand"
    >
      <div class="goods-article">
        <div class="goods-tabs">
          <nav>
            <a
              :class="{active:isdetail}"
              @click="isdetail = true"
            >商品详情</a>
            <a
              :class="{active:!isdetail}"
              @click="Tocomments"
            >商品评价<span>(0)</span></a>
          </nav>
          <div
            class="goods-detail"
            v-if="isdetail"
          >
            <ul class="attrs">
              <li
                v-for="item in list.details.properties"
                :key="item.name"
              ><span class="dt">{{item.name}}</span><span class="dd">{{item.value}}</span></li>
            </ul>
            <img
              v-for="item in list.details.pictures"
              :key="item"
              v-lazy="item"
              alt=""
            >
          </div>
          <div
            class="goods-comment"
            v-else
          >
            <div class="head">
              <div class="data">
                <p><span>{{tags.salesCount}}</span><span>人购买</span></p>
                <p><span>{{tags.praisePercent}}</span><span>好评率</span></p>
              </div>
              <div class="tags">
                <div class="dt">大家都在说：</div>
                <div class="dd">
                  <a class="active">全部评价（{{tags.evaluateCount}}）</a>
                  <a
                    class=""
                    v-for="item in tags.tags"
                    :key="item.title"
                  >{{item.title}}（{{item.tagCount}}）</a>
                </div>
              </div>
            </div>
            <div class="sort"><span>排序：</span><a class="active">默认</a><a class="">最新</a><a class="">最热</a></div>
            <div class="list">

              <div
                class="item"
                v-for="item in CommentsList.items"
                :key='item.id'
              >
                <div class="user"><img
                    :src="item.member.avatar"
                    alt=""
                  ><span>{{item.member.nickname}}</span></div>
                <div class="body">
                  <div class="score"><i class="iconfont icon-wjx01"></i><i class="iconfont icon-wjx01"></i><i class="iconfont icon-wjx01"></i><i class="iconfont icon-wjx01"></i><i class="iconfont icon-wjx01"></i>
                    <span
                      class="attr"
                      v-for="spans in item.orderInfo.specs"
                      :key="spans.name"
                    >{{spans.name}}: {{spans.nameValue}}</span>

                  </div>
                  <div class="text">{{item.content}}</div>
                  <div class="goods-comment-image">
                    <div class="list">
                      <a
                        class=""
                        v-for="imgs in item.pictures"
                        :key="imgs"
                      >
                        <img
                          :src="imgs"
                          alt=""
                        ></a>
                    </div>
                    <!---->
                  </div>
                  <div class="time"><span>{{item.createTime}}</span><span class="zan"><i class="iconfont icon-dianzan"></i>{{item.praiseCount}}</span></div>
                </div>
              </div>

            </div>
            <div class="xtx-pagination">
              <el-pagination
                page-size=5
                background
                layout="prev, pager, next"
                :total="CommentsList.counts"
                @current-change='test'
              >
              </el-pagination>
            </div>
          </div>
        </div>
        <div class="goods-warn">
          <h3>注意事项</h3>
          <p class="tit">• 购买运费如何收取？</p>
          <p> 单笔订单金额(不含运费)满88元免邮费；不满88元，每单收取10元运费。（港澳台地区需满500元免邮费；不满500元，每单收取30元运费) </p><br>
          <p class="tit">• 使用什么快递发货?</p>
          <p>默认使用顺丰快递发货(个别商品使用其他快递）</p>
          <p>配送范围覆盖全国大部分地区(港澳台地区除外）</p><br>
          <p class="tit">• 如何申请退货?</p>
          <p> 1.自收到商品之日起30日内，顾客可申请无忧退货，退款将原路返还，不同的银行处理时间不同，预计1-5个工作日到账； </p>
          <p>2.内裤和食品等特殊商品无质量问题不支持退货；</p>
          <p> 3.退货流程： 确认收货-申请退货-客服审核通过-用户寄回商品-仓库签收验货-退款审核-退款完成； </p>
          <p> 4.因小兔鲜儿产生的退货，如质量问题，退货邮费由小兔鲜儿承担，退款完成后会以现金券的形式报销。因客户个人原因产生的退货，购买和寄回运费由客户个人承担。 </p>
        </div>
      </div>
      <div class="goods-aside">
        <div
          class="goods-hot"
          ref="hour"
        >
          <h3>24小时热销榜</h3>
          <div><a
              class="goods-item"
              v-for="item in hourRecommend"
              :key="item.id"
            ><img
                alt=""
                :src="item.picture"
              >
              <p class="name ellipsis">{{item.name}}</p>
              <p class="desc ellipsis">{{item.desc}}</p>
              <p class="price">¥{{item.price}}</p>
            </a>
          </div>
        </div>
        <div
          class="goods-hot"
          ref="week"
        >
          <h3>周热销榜</h3>
          <div>
            <a
              class="goods-item"
              v-for="item in weekRecommend"
              :key="item.id"
            >
              <img
                alt=""
                :src="item.picture"
              >
              <p class="name ellipsis">{{item.name}}</p>
              <p class="desc ellipsis">{{item.desc}}</p>
              <p class="price">¥{{item.price}}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sticky from "@/components/Sticky/index";
import Header from "@/components/Header/index";
import Bread from "@/components/Bread/index";
import { regionData } from "element-china-area-data";

import { onMounted, ref } from "vue";
import {
  findGoods,
  fingHots,
  fingRelevant,
  fingEvaluate,
  findComments,
} from "@/api/product";
import { useRouter } from "vue-router";
import { getlist } from "@/hooks/index.js";
const router = useRouter();
const goodsID = router.currentRoute.value.query.id;
const list = ref({});
const recommendList = ref([]); //推荐列表
const number = ref(1);
const currentIndex = ref(0);
const carousel = ref(null);
const hourRecommend = ref([]);
const weekRecommend = ref([]);
const mainImg = ref();
const hour = ref(null);
const week = ref(null);
const tags = ref({});
const CommentsList = ref({});
const isdetail = ref(true);
const selectedOptions = ref([]);

// 同类推荐
const getAllrecommend = async () => {
  const params = {
    id: goodsID,
    limit: 16,
  };
  let res = await fingRelevant(params);
  if (res.msg == "操作成功") {
    const size = 4;
    const total = Math.ceil(res.result.length / size);
    for (let i = 0; i < total; i++) {
      recommendList.value.push(res.result.slice(i * size, (i + 1) * size));
    }
  }
};
//热门推荐
const fingHotsrecomend = async (type) => {
  const params = {
    id: goodsID,
    limit: 4,
    type,
  };
  let res = await fingHots(params);
  if (res.msg == "操作成功") {
    switch (type) {
      case 1:
        hourRecommend.value = res.result;
        break;
      case 2:
        weekRecommend.value = res.result;
        break;
    }
  }
};
const changeCurrent = (index) => {
  if (index == 1) {
    if (currentIndex.value != 0) {
      currentIndex.value -= 1;
    } else {
      currentIndex.value = 3;
    }
  } else {
    if (currentIndex.value != 3) {
      currentIndex.value += 1;
    } else {
      currentIndex.value = 0;
    }
  }
};
const Tocomments = () => {
  if (isdetail.value) {
    getEva();
    getComments();
    isdetail.value = false;
  }
};

// 获取评论tag
const getEva = async () => {
  let res = await fingEvaluate(goodsID);

  if (res.msg == "查询成功") {
    console.log(res);
    tags.value = res.result;
  }
};
// 获取评论
const getComments = async () => {
  let params = {
    id: goodsID,
    page: 1,
    pageSize: 10,
  };
  let res = await findComments(params);
  console.log(res);
  CommentsList.value = res.result;
};

const test = async (e) => {
  let params = {
    id: goodsID,
    page: e,
    pageSize: 10,
  };
  let res = await findComments(params);

  CommentsList.value = res.result;
};
const hover = (item) => {
  mainImg.value = item;
};
onMounted(async () => {
  getlist(carousel, getAllrecommend);
  getlist(hour, fingHotsrecomend, 1);
  getlist(week, fingHotsrecomend, 2);
  let res = await findGoods(goodsID);
  if (res.msg == "操作成功") {
    list.value = res.result;
    mainImg.value = res.result.mainPictures[0];
  }
  // getEva();
  // getComments();
});
</script>

<style lang='less' scoped>
@import url("../../assets/style/variables");

.good_info {
  min-height: 600px;
  background: #fff;
  display: flex;
  .media {
    width: 580px;
    height: 600px;
    padding: 30px 50px;
    .goods_image {
      width: 480px;
      height: 400px;
      position: relative;
      display: flex;
      z-index: 500;
      .middle {
        width: 400px;
        height: 400px;
        background: #f5f5f5;
        position: relative;
        cursor: move;
        img {
          max-width: 100%;
          max-height: 100%;
          vertical-align: middle;
        }
      }

      .small {
        width: 80px;
        li {
          width: 68px;
          height: 68px;
          margin-left: 12px;
          margin-bottom: 15px;
          cursor: pointer;
          img {
            max-width: 100%;
            max-height: 100%;
            vertical-align: middle;
          }
        }
      }
    }

    .goods-sales {
      display: flex;
      width: 400px;
      align-items: center;
      text-align: center;
      height: 140px;
      li {
        flex: 1;
        position: relative;
        p:first-child {
          color: #999;
        }
        p:nth-child(2) {
          color: #cf4444;
          margin-top: 10px;
        }
        p:last-child {
          color: #666;
          margin-top: 10px;
          i {
            color: #27ba9b !important;
            font-size: 14px;
            margin-right: 2px;
          }
        }
      }
    }
  }

  .spec {
    flex: 1;
    padding: 30px 30px 30px 0;
    .g-name {
      font-size: 22px;
    }
    .g-desc {
      color: #999;
      margin-top: 10px;
    }
    .g-price {
      margin-top: 10px;
      span::before {
        content: "¥";
        font-size: 14px;
      }

      span:first-child {
        color: #cf4444;
        margin-right: 10px;
        font-size: 22px;
      }
      span:last-child {
        color: #999;
        text-decoration: line-through;
        font-size: 16px;
      }
    }

    .g-service {
      background: #f5f5f5;
      width: 500px;
      padding: 20px 10px 0 10px;
      margin-top: 10px;
      dl {
        padding-bottom: 20px;
        display: flex;
        align-items: center;
        dt {
          width: 50px;
          color: #999;
        }
        dd {
          color: #666;
        }
        dd:last-child span {
          margin-right: 10px;
        }
        dd:last-child a {
          color: #27ba9b;
        }
        dd:last-child span::before {
          content: "•";
          color: rgb(39, 186, 155);
          margin-right: 2px;
        }
        .xtx-city {
          vertical-align: middle;
          display: inline-block;
          position: relative;
          z-index: 400;
          .select {
            // border: 1px solid #e4e4e4;
            // height: 30px;
            padding: 0 5px;
            line-height: 28px;
            cursor: pointer;
            overflow: hidden;
            ::v-deep .el-cascader--large {
              width: 245px;
            }
            .value {
              color: #666;
              font-size: 12px;
            }
            i {
              font-size: 12px;
              margin-left: 5px;
            }
          }
        }
      }
    }

    .goods-sku {
      padding-left: 10px;
      padding-top: 20px;
      dl {
        display: flex;
        padding-bottom: 10px;
        align-items: center;
        dt {
          width: 50px;
          color: #999;
        }
        dd {
          flex: 1;
          color: #666;
          line-height: 40px;
          img {
            width: 50px;
            height: 50px;
            margin-bottom: 5px;
            border: 1px solid #e4e4e4;
            margin-right: 10px;
            cursor: pointer;
          }
          .selected {
            border-color: #27ba9b;
          }
        }
      }
    }

    .xtx-numbox {
      display: flex;
      align-items: center;
      .label {
        width: 60px;
        color: #999;
        padding-left: 10px;
      }
      .numbox {
        width: 120px;
        height: 30px;
        border: 1px solid #e4e4e4;
        display: flex;
        input {
          width: 60px;
          padding: 0 5px;
          text-align: center;
          color: #666;
        }
        a {
          width: 29px;
          line-height: 28px;
          text-align: center;
          background: #f8f8f8;
          font-size: 16px;
          color: #666;
        }
        a:first-of-type {
          border-right: 1px solid #e4e4e4;
        }
        a:last-of-type {
          border-left: 1px solid #e4e4e4;
        }
      }
    }

    .primary {
      border-color: #27ba9b;
      background: #27ba9b;
      color: #fff;
    }
    .middle {
      width: 180px;
      height: 50px;
      font-size: 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  }
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 44px;
    height: 44px;
  }
}

.goods-relevant {
  background: #fff;
  min-height: 460px;
  margin-top: 20px;
  .header {
    height: 80px;
    line-height: 80px;
    padding: 0 20px;
    .icon {
      width: 16px;
      height: 16px;
      display: inline-block;
      border-top: 4px solid #27ba9b;
      border-right: 4px solid #27ba9b;
      box-sizing: border-box;
      position: relative;
      transform: rotate(45deg);
    }
    .icon::before {
      content: "";
      width: 10px;
      height: 10px;
      position: absolute;
      left: 0;
      top: 2px;
      background: #bcf1e6;
    }
    .title {
      font-size: 20px;
      padding-left: 10px;
    }
  }

  .xtx-carousel {
    height: 380px;
    min-width: 300px;
    min-height: 150px;
    position: relative;
    .carousel-body {
      width: 100%;
      height: 100%;

      .carousel-item {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
        transition: opacity 0.5s linear;
        .slider {
          display: flex;
          justify-content: space-around;
          padding: 0 40px;
          a {
            width: 240px;
            text-align: center;
            img {
              padding: 20px;
              width: 230px !important;
              height: 230px !important;
            }
            .name {
              font-size: 16px;
              color: #666;
              padding: 0 40px;
            }
            .ellipsis {
              text-overflow: ellipsis;
              overflow: hidden;
            }
            .price {
              font-size: 16px;
              color: #cf4444;
              margin-top: 15px;
            }
          }
        }
      }
      .fade {
        opacity: 1;
        z-index: 1;
      }
    }

    .carousel-btn {
      position: absolute;
      z-index: 5;
      top: 110px;
      opacity: 1;
      background: transparent;
      color: #ddd;
      i {
        font-size: 30px;
      }
    }
    .prev {
      left: 20px;
    }
    .next {
      right: 20px;
    }

    .carousel-indicator {
      position: absolute;
      left: 0;
      bottom: 30px;
      z-index: 2;
      width: 100%;
      text-align: center;
      span {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        cursor: pointer;
        margin-left: 12px;
      }
      .active {
        background: #27ba9b;
      }
    }
  }
}

.goods-footer {
  display: flex;
  margin-top: 20px;
  .goods-article {
    width: 940px;
    margin-right: 20px;
    .goods-tabs {
      min-height: 600px;
      background: #fff;
      nav {
        height: 70px;
        line-height: 70px;
        display: flex;
        border-bottom: 1px solid #f5f5f5;
        a {
          padding: 0 40px;
          font-size: 18px;
          position: relative;
          &:hover {
            cursor: pointer;
          }
          span {
            color: #cf4444;
            font-size: 16px;
            margin-left: 10px;
          }
        }
        a:first-child {
          border-right: 1px solid #f5f5f5;
        }
        .active::before {
          content: "";
          position: absolute;
          left: 40px;
          bottom: -1px;
          width: 72px;
          height: 2px;
          background: #27ba9b;
        }
      }

      .goods-detail {
        padding: 40px;
        .attrs {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 30px;
          li {
            display: flex;
            margin-bottom: 10px;
            width: 50%;
            .dt {
              width: 100px;
              color: #999;
            }
            .dd {
              flex: 1;
              color: #666;
            }
          }
          img {
            width: 100%;
          }
        }
      }

      .goods-comment {
        .head {
          display: flex;
          padding: 30px 0;
          .data {
            width: 340px;
            display: flex;
            padding: 20px;
            p {
              flex: 1;
              text-align: center;
              span {
                display: block;
              }
              span:first-child {
                font-size: 32px;
                color: #cf4444;
              }
              span:last-child {
                color: #999;
              }
            }
          }
          .tags {
            flex: 1;
            display: flex;
            border-left: 1px solid #f5f5f5;
            .dt {
              font-weight: 700;
              width: 100px;
              text-align: right;
              line-height: 42px;
            }
            .dd {
              flex: 1;
              display: flex;
              flex-wrap: wrap;
              .active {
                border-color: #27ba9b;
                background: #27ba9b;
                color: #fff;
              }
              a {
                width: 132px;
                height: 42px;
                margin-left: 20px;
                margin-bottom: 20px;
                border-radius: 4px;
                border: 1px solid #e4e4e4;
                background: #f5f5f5;
                color: #999;
                text-align: center;
                line-height: 40px;
                &:hover {
                  border-color: @xtxColor;
                  background: lighten(@xtxColor, 50%);
                  color: @xtxColor;
                  cursor: pointer;
                }
              }
            }
          }
        }
        .sort {
          height: 60px;
          line-height: 60px;
          border-top: 1px solid #f5f5f5;
          border-bottom: 1px solid #f5f5f5;
          margin: 0 20px;
          color: #666;
          > span {
            margin-left: 20px;
          }
          > a {
            margin-left: 30px;
            &.active,
            &:hover {
              color: @xtxColor;
            }
          }
        }
        .list {
          padding: 0 20px;
          .item {
            display: flex;
            padding: 25px 10px;
            border-bottom: 1px solid #f5f5f5;
            .user {
              width: 160px;
              img {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                overflow: hidden;
              }
              span {
                padding-left: 10px;
                color: #666;
              }
            }
            .body {
              flex: 1;
              .score {
                line-height: 40px;
                .iconfont {
                  color: #ff9240;
                  padding-right: 3px;
                }
                .attr {
                  padding-left: 10px;
                  color: #666;
                }
              }
            }
            .text {
              color: #666;
              line-height: 24px;
            }
            .goods-comment-image {
              .list {
                display: flex;
                flex-wrap: wrap;
                margin-top: 10px;
                padding: 0 !important;
                a {
                  width: 120px;
                  height: 120px;
                  border: 1px solid #e4e4e4;
                  margin-right: 20px;
                  margin-bottom: 10px;
                  img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                  }
                }
              }
            }
            .time {
              color: #999;
              display: flex;
              justify-content: space-between;
              margin-top: 5px;
            }
          }
        }

        .xtx-pagination {
          ::v-deep .is-active {
            background: #27ba9b;
          }
          display: flex;
          justify-content: center;
          padding: 30px;
          > a {
            display: inline-block;
            padding: 5px 10px;
            border: 1px solid #e4e4e4;
            border-radius: 4px;
            margin-right: 10px;
            &:hover {
              color: @xtxColor;
              cursor: pointer;
            }
            &.active {
              background: @xtxColor;
              color: #fff;
              border-color: @xtxColor;
            }
            &.disabled {
              cursor: not-allowed;
              opacity: 0.4;
              &:hover {
                color: #333;
              }
            }
          }
          > span {
            margin-right: 10px;
          }
        }
      }
    }
    .goods-warn {
      margin-top: 20px;
      background: #fff;
      padding-bottom: 40px;
      h3 {
        height: 70px;
        line-height: 70px;
        border-bottom: 1px solid #f5f5f5;
        padding-left: 50px;
        font-size: 18px;
        font-weight: 400;
        margin-bottom: 10px;
      }
      p {
        line-height: 40px;
        padding: 0 25px;
        color: #666;
      }
      .tit {
        color: #333;
      }
    }
  }
  .goods-aside {
    width: 280px;
    min-height: 1000px;
    .goods-hot {
      h3 {
        height: 70px;
        background: #e26237;
        color: #fff;
        font-size: 18px;
        line-height: 70px;
        padding-left: 25px;
        margin-bottom: 10px;
        font-weight: 400;
      }
      .goods-item {
        background: #fff;
        width: 100%;
        margin-bottom: 10px;
        img {
          width: 200px;
          height: 200px;
        }
        p {
          margin: 0 10px;
          padding-top: 10px;
        }
        .name {
          font-size: 16px;
        }
        .ellipsis {
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        .price {
          color: #cf4444;
          font-size: 20px;
        }
      }
    }
    .goods-item {
      display: block;
      width: 220px;
      padding: 20px 30px;
      text-align: center;
      transition: all 0.5s;
    }
  }
}
</style>