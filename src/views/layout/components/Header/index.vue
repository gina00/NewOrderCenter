<template>
<section class="head-content">
    <div class="left-Box">
        <div class="logoBox">
            <img src="@/assets/images/logo.jpg" width="233">
        </div>
            <ul>
                <li><a class="navtext">业务导航</a></li>
            </ul>
        </div>
        <div class="right-box">
            <div class="shoppingIconBox">
                <i class="fa fa-cart-plus shoppingCartCircle" aria-hidden="true"></i>
                <span class="redMessageCircle"></span>
            </div>
            <div class="searchBox">
                <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="searchVal">
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
  display: flex;
  justify-content: space-between;

  .left-Box {
    display: flex;

    .logoBox {
      width: 233px;
      height: 60px;
      float: left;
    }

    ul {
      display: flex;

      li {
        float: left;
        line-height: 60px;

        a {
          font-size: 14px;
          color: #fff;
          padding: 20px;

          &.navtext {
            &::after {
              content: "";
              width: 10px;
              height: 10px;
              border-top: 3px solid #fff;
              border-bottom: 3px solid transparent;
              border-left: 3px solid transparent;
              border-right: 3px solid transparent;
              position: relative;
              top: 13px;
              left: 6px;
            }
          }
        }
      }
    }
  }

  .right-box {
    display: flex;
    line-height: 60px;
    margin: 0 20px;
    .shoppingIconBox {
      position: relative;
      .shoppingCartCircle {
        border-radius: 50px;
        border: 2px solid #fff;
        background: #22c67f;
        /* padding: 15px; */
        width: 40px;
        height: 40px;
        line-height: 40px;
        margin-right: 20px;
        color: #fff;
        font-size: 20px;
      }
      .redMessageCircle{
        position: absolute;
        display: inline-block;
        width: 10px;
        height: 10px;
        background: red;
        top: 10px;
        right: 20px;
        border-radius: 50px;
      }
    }
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
