<template>
<section>
    <el-card class="baseinfor-card">
        <section class="title-infor">
            <div class="titleBox">
                <span class="title-text">{{titleText}}</span>
            </div>
            <div class="rowBox">
                <el-row>
                    <el-col :span="8">
                        <div class="grid-content bg-purple">订单编号：201809018800</div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple-light">受理渠道：营业厅前台</div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple">订单状态：已完成</div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <div class="grid-content bg-purple">受理时间：2019/09/01 10:34:02</div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple-light">完成时间：2018/09/01 12:00:17</div>
                    </el-col>
                </el-row>
            </div>
        </section>
        <section class="title-infor">
            <div class="titleBox">
                <span class="title-text">{{cusText}}</span>
            </div>
            <div class="rowBox">
                <el-row>
                    <el-col :span="8">
                        <div class="grid-content bg-purple">客户编号：201809018800</div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple-light">客户名称：张三</div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple">客户类型：个人</div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <div class="grid-content bg-purple">用户号码：13599837808</div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple-light">用户类型：手机用户</div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple-light">归属地：福州</div>
                    </el-col>
                </el-row>
            </div>
        </section>
        <section class="title-infor">
            <div class="titleBox">
                <span class="title-text">{{payText}}</span>
            </div>
            <div class="rowBox">
                <el-row>
                    <el-col :span="8">
                        <div class="grid-content bg-purple">应付款总额：10.00</div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple-light">币种：人民币</div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple">支付单号：10000008920</div>
                    </el-col>
                </el-row>
            </div>
        </section>
        <section class="title-infor">
            <div class="titleBox">
                <span class="title-text">{{shopText}}</span>
            </div>
            <div class="rowBox" >
                <el-table :data="tableData" stripe style="width: 100%">
                    <el-table-column prop="orderid" label="订单号" width="380">
                        <!-- <template slot-scope="scope">
                            <i v-for="item in scope.row.icon" :key="item" :class="{item}"></i>
                        </template> -->
                    </el-table-column>
                    <el-table-column prop="name" label="业务名称" width="180">
                    </el-table-column>
                    <el-table-column prop="status" label="订单状态">
                    </el-table-column>
                    <el-table-column fixed="right" label="操作" width="200">
                        <template slot-scope="scope">
                            <el-button v-for="item in scope.row.operates" :key="item" @click="handleClick(scope.row)" type="primary" plain 
                            size="small">
                            
                            {{item}}
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </section>
    </el-card>
</section>
</template>

<script>
export default {
  data() {
    return {
      titleText: "基本信息",
      cusText: "客户信息",
      payText: "交易金额",
      shopText: "订购明细",
      tableData: [
        {
          orderid: "子订单号:20180901880001",
          icon:[''],
          name: "",
          status: "已完成",
          operates: ['子订单详情']
        },
        {
          orderid: "集团专线开通",
          icon:['fa fa-user'],
          name: "语音专线开通",
          status: "已完成",
          operates: ['商品详情']
        },
        
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
$textcolor: #5cb87a;

.stepBox {
  font-size: 18px;
  display: flex;
  background: #fff;
  padding: 20px;
  justify-content: center;
  margin-bottom: 20px;

  .steporder {
    color: $textcolor;
    padding: 0 20px;

    .timeBox {
      font-size: 14px;
      color: #666;
    }
  }
}
</style>
