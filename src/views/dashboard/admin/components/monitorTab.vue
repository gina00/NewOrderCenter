<template>
<el-table :data="tableData" style="width: 100%">
    <el-table-column type="index" :index="indexMethod" label="订单流水" width="100">
    </el-table-column>
    <el-table-column prop="name" label="业务名称" width="180" >
    </el-table-column>
    <el-table-column prop="order" label="订单类型" width="130">
    </el-table-column>
    <el-table-column prop="repairorder" label="工单类型" width="140">
    </el-table-column>
    <el-table-column prop="status" label="状态" width="110" :filters="[{ text: '完成', value: '完成' }, { text: '失败', value: '失败' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end">        
        <template slot-scope="scope">
            <el-tag :type="scope.row.status === '完成' ? 'success' : 'danger'" disable-transitions>{{scope.row.status}}</el-tag>
        </template>
    </el-table-column>
</el-table>
</template>

<script>
export default {
    data() {
        return {
            tableData: [{
                name: '2016-05-02',
                order: '王小虎',
                repairorder: '上海市普陀区金沙江路 1518 弄',
                status: '完成'
            }, {
                name: '2016-05-02',
                order: '王小虎',
                repairorder: '上海市普陀区金沙江路 1518 弄',
                status: '失败'
            }, {
                index:'0',
                name: '2016-05-02',
                order: '王小虎',
                repairorder: '上海市普陀区金沙江路 1518 弄',
                status: '失败'
            }, {
                index:'0',
                name: '2016-05-02',
                order: '王小虎',
                repairorder: '上海市普陀区金沙江路 1518 弄',
                status: '完成'
            }]
        }
    },
    methods: {
        formatter(row, column) {
            return row.repairorder;
        },
        filterTag(value, row) {
            return row.status === value;
        },
        filterHandler(value, row, column) {
            const property = column['property'];
            return row[property] === value;
        },
        indexMethod(index) {
        return (index+1) * 1;
      }
    }
}
</script>

<style>

</style>
