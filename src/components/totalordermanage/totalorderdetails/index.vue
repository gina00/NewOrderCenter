<template>
<section class="title-infor">
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
            <div class="titleBox message">
                <span class="title-text">{{messageText}}</span>
                <div class="tab-btn" @click="showTab()">
                    <a :class={active:active}>请求报文</a>
                    <a :class={active:replyactive}>应答报文</a>
                </div>
            </div>
            <div class="messageBox" v-if="active">
                <p>
                    {{value}}
                </p>
            </div>
            <div class="messageBox" v-if="replyactive">
                <p>
                    {{replyMessagevalue}}
                </p>
            </div>
        </section>
        <section class="title-infor">
            <div class="titleBox">
                <span class="title-text">{{workText}}</span>
            </div>
            <div class="tableBox">
                <el-table :data="tableData" stripe style="width: 100%">
                    <el-table-column prop="workid" label="工单号" width="280" class="color">
                    </el-table-column>
                    <el-table-column prop="type" label="工单类型" width="180">
                    </el-table-column>
                    <el-table-column prop="starttime" label="请求时间">
                    </el-table-column>
                    <el-table-column prop="endtime" label="完成时间">
                    </el-table-column>
                    <el-table-column prop="status" label="状态">
                    </el-table-column>
                </el-table>
            </div>
        </section>
    </el-card>
</section>
</template>

<script>
const jsonData =
  '[{"items1":[{"market_type":"forexdata","symbol":"XAUUSD"},{"market_type":"forexdata","symbol":"UKOIL"},{"market_type":"forexdata","symbol":"CORN"}],"name":""},{"items":[{"market_type":"forexdata","symbol":"XAUUSD"},{"market_type":"forexdata","symbol":"XAGUSD"},{"market_type":"forexdata","symbol":"AUTD"},{"market_type":"forexdata","symbol":"AGTD"}],"name":"贵金属"},{"items":[{"market_type":"forexdata","symbol":"CORN"},{"market_type":"forexdata","symbol":"WHEAT"},{"market_type":"forexdata","symbol":"SOYBEAN"},{"market_type":"forexdata","symbol":"SUGAR"}],"name":"农产品"},{"items":[{"market_type":"forexdata","symbol":"UKOIL"},{"market_type":"forexdata","symbol":"USOIL"},{"market_type":"forexdata","symbol":"NGAS"}],"name":"能源化工"},{"market_type":"forexdata","symbol":"NGAS"}],"name":"能源化工"}]';
const replyMessageData =
  '[{"items2":[{"market_type":"forexdata","symbol":"XAUUSD"},{"market_type":"forexdata","symbol":"UKOIL"},{"market_type":"forexdata","symbol":"CORN"}],"name":""},{"items":[{"market_type":"forexdata","symbol":"XAUUSD"},{"market_type":"forexdata","symbol":"XAGUSD"},{"market_type":"forexdata","symbol":"AUTD"},{"market_type":"forexdata","symbol":"AGTD"}],"name":"贵金属"},{"items":[{"market_type":"forexdata","symbol":"CORN"},{"market_type":"forexdata","symbol":"WHEAT"},{"market_type":"forexdata","symbol":"SOYBEAN"},{"market_type":"forexdata","symbol":"SUGAR"}],"name":"农产品"},{"items":[{"market_type":"forexdata","symbol":"UKOIL"},{"market_type":"forexdata","symbol":"USOIL"},{"market_type":"forexdata","symbol":"NGAS"}],"name":"能源化工"},{"market_type":"forexdata","symbol":"NGAS"}],"name":"能源化工"}]' +
  '[{"items2":[{"market_type":"forexdata","symbol":"XAUUSD"},{"market_type":"forexdata","symbol":"UKOIL"},{"market_type":"forexdata","symbol":"CORN"}],"name":""},{"items":[{"market_type":"forexdata","symbol":"XAUUSD"},{"market_type":"forexdata","symbol":"XAGUSD"},{"market_type":"forexdata","symbol":"AUTD"},{"market_type":"forexdata","symbol":"AGTD"}],"name":"贵金属"},{"items":[{"market_type":"forexdata","symbol":"CORN"},{"market_type":"forexdata","symbol":"WHEAT"},{"market_type":"forexdata","symbol":"SOYBEAN"},{"market_type":"forexdata","symbol":"SUGAR"}],"name":"农产品"},{"items":[{"market_type":"forexdata","symbol":"UKOIL"},{"market_type":"forexdata","symbol":"USOIL"},{"market_type":"forexdata","symbol":"NGAS"}],"name":"能源化工"},{"market_type":"forexdata","symbol":"NGAS"}],"name":"能源化工"}]';

export default {
  data() {
    return {
      titleText: "基本信息",
      messageText: "报文信息",
      workText: "工单列表",
      tableData: [
        {
          workid: "20180901880001",
          type: "客户改号",
          starttime: "2018-11-11",
          endtime: "手机用户",
          status: "已完成"
        },
        {
          workid: "20180901880001",
          type: "客户个人产品受理",
          starttime: "2018-11-11",
          endtime: "手机用户",
          status: "已完成"
        },
        {
          workid: "20180901880001",
          type: "客户改号",
          starttime: "2018-11-11",
          endtime: "手机用户",
          status: "已完成"
        }
      ],
      active: true,
      replyactive: false,
      value: jsonData,
      replyMessagevalue: replyMessageData
    };
  },
  methods: {
    showTab() {
      this.active = !this.active;
      this.replyactive = !this.replyactive;
    }
  }
};
</script> 

<style lang="scss">
.tab-btn {
  margin: 5px 15px;
  a {
    display: inline-block;
    padding: 8px 15px;
    border-radius: 3px;
    background: #f0f2f5;
    color: #666;
    font-size: 12px;

    &.active {
      background: #1989fa;
      color: #fff;
    }

    &:hover {
      background: #1989fa;
      color: #fff;
    }
  }
}

.messageBox {
  background: #f0f2f5;
  border: 1px solid #f6f7f9;
  margin: 10px 0px;
  padding: 20px;

  p {
    font-size: 12px;
    color: #666;
    line-height: 20px;
  }
}
</style>
