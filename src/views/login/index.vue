<template>
  <div>
    <Header>欢迎登录</Header>
    <section class="login-section">
      <div class="wrapper">
        <nav>
          <a href="javascript:;">账户登录</a>
          <a href="javascript:;">扫码登录</a>
        </nav>
        <Form />
      </div>
    </section>
    <Footer />
  </div>
</template>

<script setup>
import {} from "vue";
import Header from "./header/index";
import Footer from "./footer";
import Form from "./form";
</script>

<style lang='less' scoped>
@import url("../../assets/style/variables");
.login-section {
  background: url(http://erabbit.itheima.net/img/login-bg.696efec3.png)
    no-repeat center / cover;
  height: 488px;
  position: relative;
  .wrapper {
    width: 380px;
    background: #fff;
    min-height: 400px;
    position: absolute;
    left: 50%;
    top: 54px;
    transform: translate3d(100px, 0, 0);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    nav {
      height: 55px;
      border-bottom: 1px solid #f5f5f5;
      display: flex;
      padding: 0 40px;
      text-align: right;
      align-items: center;
      a {
        flex: 1;
        line-height: 1;
        display: inline-block;
        font-size: 18px;
        position: relative;
        &:first-child {
          border-right: 1px solid #f5f5f5;
          text-align: left;
        }
        &.active {
          color: @xtxColor;
          font-weight: bold;
        }
      }
    }
  }
}
</style>