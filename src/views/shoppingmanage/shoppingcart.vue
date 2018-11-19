<template>
<section class="shoppingcart">
    <el-card shadow="never">
        <el-row :gutter="0" class="buttonBox">
            <el-col :xs="12" :sm="12" :lg="12">
                <ul class="button-ul">
                    <li><a>全选</a></li>
                    <li><a>取消全选</a></li>
                </ul>
                <ul class="button-ul">
                    <li><a>删除</a></li>
                </ul>
                <el-button type="text" icon="el-icon-refresh" class="textsty">刷新</el-button>
            </el-col>
        </el-row>
        <tree-table :data="data" :columns="columns" border></tree-table>
        <div class="bottomLayout">
                <div class="amountBox bettween">
                    <span class="chooseItem">已选择<em class="redColor">1</em>件</span>
                    <span>合计金额：30元</span>
                </div>
                <div class="reverseBox">
                    <div class="chooseBox">
                        <el-button type="primary" class="payBox">提交</el-button>
                    </div>
                </div>
            </div>
    </el-card>
</section>
</template>

<script>
import treeTable from "@/components/treeTable";
export default {
    components: {
        treeTable
    },
    data() {
        return {
            columns: [{
                    text: "商品信息",
                    value: "name",
                    width: 250
                },
                {
                    text: "数量",
                    value: "number"
                },
                {
                    text: "应付金额（元）",
                    value: "paymoney"
                },
                {
                    text: "检验结果",
                    value: "results",
                    width: 180
                }
            ],
            data: [{
                id: 1,
                name: "订单号：20302113313",
                number: "1",
                paymoney: '￥30',
                results: '检验中',
                operates: ["删除"]
            }]
        }
    }
}
</script>

<style>

</style>
