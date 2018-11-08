<template>
<section>
    <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="name" label="业务名称" width="180">
        </el-table-column>
        <el-table-column prop="describe" label="简述" width="180">
        </el-table-column>
        <el-table-column prop="integral" label="应收金额/积分">
        </el-table-column>
        <el-table-column prop="shoptime" label="选购时间">
        </el-table-column>
        <el-table-column prop="handleState" label="办理状态">
        </el-table-column>
        <el-table-column prop="methods" label="选购渠道">
        </el-table-column>
        <el-table-column prop="operat" label="操作">
        </el-table-column>
    </el-table>
    <div class="bottomLayout">
        <div class="amountBox">
            <span>合计金额：10元</span>
        </div>
        <div class="reverseBox">
            <div class="chooseBox">
                <el-radio-group v-model="radio2">
                    <el-radio :label="3">现金支付</el-radio>
                    <el-radio :label="6">支票支付</el-radio>
                    <el-radio :label="9">POS凭证</el-radio>
                </el-radio-group>
                <el-button type="primary" class="payBox" @click="open">支付</el-button>
                <el-button type="primary" class="payBox">取消</el-button>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    data() {
        return {
            tableData: [{
                name: "补换卡",
                describe: "优惠类型：正常",
                integral: "￥10.00",
                shoptime: "2019-09-27",
                handleState: "未受理",
                methods: "营业厅",
                operat: "修改"
            }],
            radio2: 3
        };
    },
    methods: {
        open() {
            this.$alert('支付成功', '提示', {
                confirmButtonText: '确定',
                callback: action => {
                    this.$message({
                        type: 'info',
                        message: `action: ${ action }`
                    });
                }
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.amountBox {
    display: flex;
    flex-direction: row-reverse;
    padding: 20px;
    padding-right: 0;
    font-size: 20px;
    color: red;
    border-bottom: 1px solid #e4e7ed;
}

.chooseBox {
    margin-top: 10px;
}
.reverseBox{
    display: flex;
    flex-direction: row-reverse;
}
.payBox {
    margin-left: 20px;
}
</style>
