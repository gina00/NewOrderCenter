<template>
<section>
    <panel-group></panel-group>
    <el-row :gutter="20" class="mb20">
        <el-col :xs="24" :sm="24" :lg="10">
            <el-card shadow="always" class="chart-wrapper">
                <div class="chart-title">{{status}}</div>
                <pie-chart></pie-chart>
            </el-card>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="14">
            <el-card shadow="always" class="chart-wrapper">
                <div class="chart-title">{{ordertotals}}</div>
                <bar-chart></bar-chart>
            </el-card>
        </el-col>
    </el-row>

    <el-card shadow="always" class="chart-wrapper mb20">
        <div class="chart-title">{{ordertotals}}</div>
        <line-chart :chart-data="lineChartData"></line-chart>
    </el-card>
    <el-row :gutter="20" class="mb20">
        <el-col :xs="24" :sm="24" :lg="10">
            <el-card shadow="always" class="chart-wrapper">
                <date-group></date-group>
            </el-card>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="14">
            <el-card shadow="always" class="chart-wrapper">
                <div class="chart-title monitortitle">{{monitortab}}</div>
                <monitor-tab></monitor-tab>
            </el-card>
        </el-col>
    </el-row>
</section>
</template>

<script>
import panelGroup from './components/panelGroup'
import pieChart from './components/pieChart'
import barChart from './components/barChart'
import lineChart from './components/lineChart'
import dateGroup from './components/dategroup'
import monitorTab from './components/monitorTab'
const lineChartData = {
  orderTotals: {
    expectedData: [211100, 231220, 425161, 321340, 131005, 561600, 331650,425161, 321340, 131005, 561600, 331650],
    actualData: [222120, 313382,255591, 651540, 1111620, 133140, 443145,313382,255591, 651540, 1111620, 133140]
  }
}
export default {
    components: {
        panelGroup,
        pieChart,
        barChart,
        lineChart,
        dateGroup,
        monitorTab
    },
    data(){
        return{
            status:'状态分布图',
            ordertotals:'本周订单里统计',
            monitortab:'订单执行监控表',
            lineChartData: lineChartData.orderTotals
        }
    },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    }
  }

}
</script>

<style>

.chart-wrapper{
    padding: 0px;
}
.chart-title{
    padding-bottom: 20px;

}
.monitortitle{
    border-bottom: 1px solid #ebeef5;
}
</style>
