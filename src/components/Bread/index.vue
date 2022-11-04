<template>
  <div class="container">
    <div class="bread">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item
          v-for="(item,index) in 4"
          :key='item'
          :class="{hov:index!=3,last:index==3}"
        >首页</el-breadcrumb-item>

      </el-breadcrumb>
    </div>

  </div>

</template>

<script setup>
</script>

<style lang="less" scoped>
.bread {
  padding: 25px 10px;
}
::v-deep .hov {
  .el-breadcrumb__inner {
    color: #666;
    &:hover {
      cursor: pointer;
      color: #27ba9b !important;
    }
  }
}
::v-deep .last {
  .el-breadcrumb__inner {
    color: black;
  }
}
</style>