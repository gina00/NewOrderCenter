<template>
<el-table :data="tableData5" style="width: 100%">
    <el-table-column type="expand">
        <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="商品名称">
                    <span>{{ props.row.name }}</span>
                </el-form-item>
                <el-form-item label="所属店铺">
                    <span>{{ props.row.shop }}</span>
                </el-form-item>
                <el-form-item label="商品 ID">
                    <span>{{ props.row.id }}</span>
                </el-form-item>
                <el-form-item label="店铺 ID">
                    <span>{{ props.row.shopId }}</span>
                </el-form-item>
                <el-form-item label="商品分类">
                    <span>{{ props.row.category }}</span>
                </el-form-item>
                <el-form-item label="店铺地址">
                    <span>{{ props.row.address }}</span>
                </el-form-item>
                <el-form-item label="商品描述">
                    <span>{{ props.row.desc }}</span>
                </el-form-item>
            </el-form>
        </template>
    </el-table-column>
    <el-table-column label="订单号" prop="id">
    </el-table-column>
    <el-table-column label="时间" prop="time">
    </el-table-column>
    <el-table-column label="业务名称" prop="name">
    </el-table-column>
    <el-table-column label="数量" prop="number">
    </el-table-column>
    <el-table-column label="应付款(元)" prop="payfor">
    </el-table-column>
    <el-table-column label="订单状态" prop="desc">
    </el-table-column>
    <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">订单详情</el-button>
            <el-button type="text" size="small">打印</el-button>
        </template>
    </el-table-column>
</el-table>
</template>

<script>
import operaBtn from './operabtn'
export default {
    components: {
        'opera-btn': operaBtn
    },
    data() {
        return {
            tableData5: [{
                id: '201809018800',
                time: '2018/09/01 12:00:17',
                name: '补卡',
                number: '1',
                payfor: '￥10.00',
                desc: '已完成',
                opera: ''
            }, {
                id: '201809018800',
                time: '2018/09/01 12:00:17',
                name: '补卡',
                number: '1',
                payfor: '￥10.00',
                desc: '已完成',
                opera: '订单详情，打印'

            }, {
                id: '201809018800',
                time: '2018/09/01 12:00:17',
                name: '补卡',
                number: '1',
                payfor: '￥10.00',
                desc: '已完成',
                opera: '订单详情，打印'

            }, {
                id: '201809018800',
                time: '2018/09/01 12:00:17',
                name: '补卡',
                number: '1',
                payfor: '￥10.00',
                desc: '已完成',
                opera: '订单详情，打印'

            }, {
                id: '201809018800',
                time: '2018/09/01 12:00:17',
                name: '补卡',
                number: '1',
                payfor: '￥10.00',
                desc: '已完成',
                opera: '订单详情，打印'
            }]
        }
    },
    methods: {
        handleClick(row) {
            console.log(row);
        }
    },
}
</script>

<style lang="scss" scoped>
.demo-table-expand {
    font-size: 0;
}

.demo-table-expand label {
    width: 90px;
    color: #99a9bf;
}

.demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
}
</style>
