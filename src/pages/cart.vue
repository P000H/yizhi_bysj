<template>
  <el-main class="shopping-cart">
    <h2>
      <i class="el-icon-shopping-cart-2"></i>我的购物车
    </h2>
    <table v-if="cartitem.length != 0" class="shopping-cart">
      <thead>
        <tr>
          <th></th>
          <th>序号</th>
          <th colspan="2">商品信息</th>
          <th>数量</th>
          <th>单价</th>
          <th>小结</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cartitem" :key="index">
          <td>
            <input type="checkbox" v-model="item.state">
          </td>
          <td>{{ item.id }}</td>
          <td>
            <img :src="item.pic">
          </td>
          <td class="other-line">{{ item.name }}</td>
          <td class="space-blk">
            <el-input-number v-model="item.quantity" :min="1" :max="10" label="描述文字"></el-input-number>
          </td>
          <td class="space-blk">{{ item.price }}</td>
          <td class="space-blk">{{ item.price * item.quantity }}</td>
          <td class="space-blk">
            <button type="button" @click="remove(index)" class="dlt">
              <i class="el-icon-delete-solid"></i>
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" @click="selectall" :checked="checkall">全选
          </td>
          <td colspan="5">
            <el-tooltip class="item" effect="dark" content="此操作将清空购物车！" placement="top">
              <el-button type="danger" @click="empty" class="el-icon-delete-solid" circle></el-button>
            </el-tooltip>
          </td>
          <td class="altogether">合计:</td>
          <td class="altogether">￥{{ totalprice }}</td>
        </tr>
      </tbody>
    </table>
    <div v-else class="nothing">
      <i class="el-icon-s-release"></i>
      <p>您的购物车为空……</p>
      <a href="goods.html">点击此处浏览商品</a>
    </div>
  </el-main>
</template>
<script>
import axios from "axios";
export default {
  name: "cart",
  data() {
    return {
      search: "",
      activeIndex: "4",
      cartitem: []
    };
  },
  computed: {
    //计算总金额
    totalprice: function() {
      var totalprice = 0;
      var _this = this;
      _this.cartitem.forEach(function(v, i) {
        v.state == true
          ? (totalprice +=
              Number(_this.cartitem[i].price) *
              Number(_this.cartitem[i].quantity))
          : "";
      });
      return totalprice.toFixed(2);
    },
    checkall: function() {
      var flag = true;
      this.cartitem.forEach(function(v, i) {
        if (v.state == false) {
          flag = false;
          return false;
        }
      });
      return flag;
    }
  },
  mounted: function() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      axios.get("/goods").then(result => {
        var res = result.data;
        this.cartitem = res.data.result;
        console.log(res);
        console.log(res.data);
        console.log(res.data.result);
        console.log(result);
      });
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    toTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    selectall: function() {
      var flag = true;
      this.cartitem.forEach(function(v, i) {
        if (v.state == false) {
          flag = false;
          return false;
        }
      });
      if (!flag) {
        //全选
        this.cartitem.forEach(function(v, i) {
          v.state = true;
        });
      } else {
        //全不选
        this.cartitem.forEach(function(v, i) {
          v.state = false;
        });
      }
    },
    remove: function(index) {
      this.cartitem.splice(index, 1);
    },
    empty: function() {
      this.cartitem.splice(0, this.cartitem.length);
    }
  }
};
</script>

<style>
.goods-sum {
  height: 66px;
}

.shopping-cart {
  margin: auto;
  border-collapse: collapse;
}

.shopping-cart h2 {
  font-weight: 100;
  margin: 0 auto 10px;
  width: 196px;
  padding: 12px;
  letter-spacing: 2px;
}

.shopping-cart h2 i {
  font-size: 60px;
  color: #f44336;
}

.shopping-cart tr {
  border-bottom: 1px solid #ccc;
}

.shopping-cart th {
  padding: 20px 0;
  background-color: #3f51b5;
  color: white;
  font-weight: 100;
  font-size: 15px;
  letter-spacing: 2px;
}

.shopping-cart tbody {
  font-size: 15px;
}

.shopping-cart img {
  width: 100px;
  border: 1px solid #ccc;
  margin: 15px;
}

.other-line {
  word-wrap: break-word;
  word-break: normal;
  width: 300px;
}

.space-blk {
  min-width: 150px;
  text-align: center;
  padding: 0 20px;
}

.dlt {
  padding: 0;
  border: 0;
  color: red;
  background-color: transparent;
  font-size: 19px;
}

.altogether {
  padding: 15px;
  font-size: 22px;
  font-weight: bold;
}

.el-tooltip.el-icon-delete-solid.is-circle {
  padding: 4px;
  margin: 15px;
  background-color: red;
}

.nothing p {
  display: inline-block;
}
</style>

