<template>
<section>
    <el-card class="baseinfor-card">
        <section class="title-infor">
        <div class="titleBox" >
            <span class="title-text">{{titleText}}</span>
        </div>
        <div class="rowBox">
            <el-row>
                <el-col :span="8">
                    <div class="grid-content bg-purple">子订单编号：201809018800</div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple-light">状态：待审核</div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple">服务号码：59110209372093</div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <div class="grid-content bg-purple">用户类型：手机用户</div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple-light">二次确认：不需要</div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple-light">确认时间：</div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <div class="grid-content bg-purple">资源预占：无</div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple-light">预占时间：</div>
                </el-col>
            </el-row>
        </div>
        </section>
        <section class="title-infor">
        <div class="titleBox">
            <span class="title-text">{{titleTexts}}</span>
        </div>
        <div class="tableBox">
            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="id" label="订单行编号" width="280">
                </el-table-column>
                <el-table-column prop="type" label="类型" width="180">
                </el-table-column>
                <el-table-column prop="usertype" label="用户类型">
                </el-table-column>
                <el-table-column prop="status" label="状态">
                </el-table-column>
                <el-table-column fixed="right" label="详情" width="200">
                    <template slot-scope="scope">
                        <el-button v-for="item in scope.row.operates" :key="item" 
                        @click="handleClick(scope.row,scope.row.operates)" type="primary" plain size="small">{{item}}</el-button>
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
            titleText: "订单信息",
            titleTexts: "订单行信息",
            tableData: [{
                id: '20180901880001',
                type: '改号',
                usertype: '手机用户',
                status: '已完成',
                 operates: ['订单行详情']
            },{
                id: '20180901880001',
                type: '个人产品受理',
                usertype: '手机用户',
                status: '已完成',
                 operates: ['订单行详情']
            },{
                id: '20180901880001',
                type: '改号',
                usertype: '手机用户',
                status: '已完成',
                 operates: ['订单行详情']
            }]
        }
    },
     methods:{
      handleClick: function (row,operate) {
          if (operate == '订单行详情') {
                this.$store.commit("setTabName", "4");
                // alert("激活流程Tab，订单ID:"+row.ID);
            }
      }
  }
}
</script>

<style lang="scss">

</style>
