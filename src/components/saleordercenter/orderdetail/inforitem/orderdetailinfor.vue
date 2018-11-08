<template>
<section class="title-infor">
    <div class="titleBox">
        <span class="title-text">{{titleText}}</span>
    </div>
    <div class="rowBox">
        <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="id" label="订单号" width="280">
            </el-table-column>
            <el-table-column prop="name" label="业务名称" width="180">
            </el-table-column>
            <el-table-column prop="number" label="数量" width="120">
            </el-table-column>
            <el-table-column prop="payfor" label="应付款(元)">
            </el-table-column>
            <el-table-column prop="status" label="订单状态">
            </el-table-column>
            <el-table-column fixed="right" label="详情" width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">子订单详情</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</section>
</template>

<script>
export default {
    data() {
        return {
            titleText: "订购明细",
            tableData: [{
                id: '子订单号:20180901880001',
                name: '改号',
                number: '1',
                payfor: '',
                status: '已完成',
                detail: '上海市普陀区金沙江路 1518 弄'
            }]
        }
    }
}
</script>

<style lang="scss">

</style>
