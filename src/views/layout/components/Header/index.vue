<template>
<section class="head-content">
    <div class="left-Box">
        <div class="logoBox">
        <img src="@/assets/images/logo.jpg" width="233">
    </div>
    <ul>
        <li><a>订单中心</a></li>
        <li><a>客戶中心</a></li>
        <li><a>业务中心</a></li>
        <li><a>产商品中心</a></li>
    </ul>
    </div>
    <div class="right-box">
        <div class="searchBox">
            <el-input
                placeholder="请输入内容"
                prefix-icon="el-icon-search"
                v-model="searchVal">
            </el-input>
        </div> 
        <div class="user">
            <span class="userText">welcome Admin!</span>
            <i class="fa fa-user-circle-o"></i>
        </div>
    </div>      
</section>
</template>

<script>
export default {
  data() {
    return {
      searchVal: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.head-content {
  .left-Box {
    float: left;
    .logoBox {
      width: 233px;
      height: 60px;
      float: left;
    }
    ul {
      float: left;
      li {
        float: left;
        line-height: 60px;
        a {
          font-size: 14px;
          color: #fff;
          padding: 20px;
        }
      }
    }
  }
  .right-box {
    float: right;
    line-height: 60px;
    margin: 0 20px;
    .searchBox {
      float: left;
      margin-right: 20px;
      .el-input {
        .el-input__inner {
          background-color: transparent !important;
        }
      }
    }
    .user {
      float: left;
      font-size: 30px;
      color: #fff;
      .userText {
        font-size: 14px;
        vertical-align: middle;
      }
    }
  }
}
</style>
