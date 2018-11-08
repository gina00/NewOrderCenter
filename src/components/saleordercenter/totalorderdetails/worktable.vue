<template>
<section class="title-infor">
    <div class="titleBox">
        <span class="title-text">{{titleText}}</span>
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
            titleText: "工单列表",
            tableData: [{
                id: '20180901880001',
                type: '改号',
                usertype: '手机用户',
                status: '已完成'
            },{
                id: '20180901880001',
                type: '改号',
                usertype: '手机用户',
                status: '已完成'
            },{
                id: '20180901880001',
                type: '改号',
                usertype: '手机用户',
                status: '已完成'
            }]
        }
    }
}
</script>

<style lang="scss">

</style>
