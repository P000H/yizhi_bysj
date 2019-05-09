<template>
  <el-menu :default-active="activeIndex" class="ctr" mode="horizontal" @select="handleSelect" active-text-color="#41337A">
    <el-submenu index="1">
      <template slot="title">产品
          </template>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
      <el-menu-item index="1-3">选项3</el-menu-item>
      <el-submenu index="1-4">
        <template slot="title">选项4</template>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
        <el-menu-item index="1-4-2">选项2</el-menu-item>
        <el-menu-item index="1-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="2">资讯</el-menu-item>
    <el-menu-item index="3">关于</el-menu-item>
    <el-menu-item index="4" class="ctr-main">易知</el-menu-item>
    <el-menu-item index="5">
        <router-link to="cart">
        <i class="el-icon-goods"></i>购物车
        </router-link>
    </el-menu-item>
    <el-submenu index="6" class="right-menu">
      <template slot="title">
        <i class="el-icon-menu"></i>
      </template>
      <el-menu-item index="6-1"><i class="el-icon-user"></i>用户中心</el-menu-item>
      <el-menu-item index="6-2"><i class="el-icon-service"></i>联系客服</el-menu-item>
    </el-submenu>
  </el-menu>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "4"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
.right-menu {
  float: right !important;
}

.ctr {
  display: flex;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.ctr-main {
  margin: auto !important;
  font-size: 22px;
  letter-spacing: 5px;
  font-weight: bold;
}
</style>
