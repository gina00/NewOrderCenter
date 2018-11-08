<template>
<section class="mainBox">
    <div class="left">
        <el-card class="box-card">
            <div class="header">
                <span>身份认证</span>
            </div>
            <div class="textbox item">
                <i class="fa fa-user-circle-o"></i>
                <div class="formBox">
                    <el-form ref="form" :model="form" label-width="80px">

                        <el-input v-model="form.name"></el-input>

                        <el-select v-model="form.region" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>

                        <div class="pw-box">
                            <el-input v-model="input" placeholder="请输入内容"></el-input>
                            <el-button type="primary" plain>主要按钮</el-button>
                        </div>
                        <div>
                            <el-button type="primary">认证</el-button>
                        </div>
                        
                    </el-form>
                </div>
            </div>
        </el-card>
    </div>
    <div>
        <img src="@/assets/images/user-bgimg.png">
    </div>
</section>
</template>

<script>
export default {
  data() {
    return {
      input: "",

      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.mainBox {
  display: flex;
  justify-content: space-between;

  .left {
    text-align: left;
    width: 30%;
    margin-top: 60px;

    .header {
      margin-bottom: 30px;
    }

    .textbox {
      display: flex;
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 20px;
      justify-content: space-between;
      .formBox {
        margin-left: 20px;
        .el-input,
        .el-select,
        .pw-box {
          margin-bottom: 10px;
        }
        .pw-box {
          .el-input {
            margin-bottom: 0;
            width: 60%;
          }
        }
      }
      i {
        font-size: 30px;
      }
      .pw-box {
        display: flex;
      }
    }

    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }

    .clearfix:after {
      clear: both;
    }
  }
}
</style>
