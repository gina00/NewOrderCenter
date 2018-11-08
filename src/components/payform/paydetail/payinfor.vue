<template>
<section class="title-infor">
    <div class="titleBox">
        <span class="title-text">{{titleText}}</span>
    </div>
    <div>
        <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
            
            <el-table-column prop="ID" label="订单编号" width="180">
            </el-table-column>
            <el-table-column prop="numbertype" label="号码类型" width="120">
            </el-table-column>
            <el-table-column prop="service" label="服务号码" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="date" label="受理时间" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="name" label="业务名称" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="pay" label="实付款(元)" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="paymethod " label="支付方式" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="status" label="状态" show-overflow-tooltip>
            </el-table-column>
        </el-table>
        
    </div>
</section>
</template>

<script>
export default {
    data() {
        return {
            titleText: "支付信息",
            currentPage4: 4,
            tableData3: [{
                ID: '20180900093301',
                numbertype: '个人',
                service: '588793220',
                date: '2018-10-09',
                name: '改号',
                pay: '10.00',
                paymethod: '现金支付',
                status: '待审核',
            }],
            multipleSelection: []
        }
    },

    methods: {
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    }
}
</script>

<style lang="scss">

</style>
