<template>
  <el-footer height="300px">
    <el-row type="flex" align="middle">
      <el-col :offset="3" :span="3">
        <img src="@/assets/pic/logo.png" class="logo" />
      </el-col>
      <el-col :span="3">
        <span class="brand">易知</span>
      </el-col>
      <el-col :offset="6" :span="6">
        <ul>
          <li>邮箱：785485080@yizhi.com</li>
          <li>固定电话：080-565236</li>
          <li>工作时间：周一至周五 09：00-17：00</li>
          <li>地址：合肥市蜀山区紫云路292号</li>
        </ul>
      </el-col>
    </el-row>
    <p class="copyright">©版权所有</p>
  </el-footer>
</template>

<style>
.logo {
  width: 70%;
}
.brand {
  font-size: 28px;
  font-weight: bold;
  letter-spacing: 5px;
}
.el-footer {
  background-color: #41337a;
  padding-top: 50px;
  color: #fff;
  margin-top: 100px;
}
.el-footer li {
  padding: 10px;
  border-bottom: 1px solid rgba(153, 155, 158, 0.42);
  letter-spacing: 1px;
  font-size: 15px;
}

.copyright {
  text-align: center;
  padding: 5px;
  border-top: 1px solid rgba(153, 155, 158, 0.42);
}

.up {
  position: fixed;
  left: 90%;
  top: 80%;
}
</style>

