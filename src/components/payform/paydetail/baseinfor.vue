<template>
<section class="title-infor">
    <div class="titleBox">
        <span class="title-text">{{titleText}}</span>
    </div>
    <div class="rowBox">
        <el-row>
            <el-col :span="8">
                <div class="grid-content bg-purple">支付编号：201809018800</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-light">状态：已支付</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple">支付类型：支付类</div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <div class="grid-content bg-purple">应付金额：10.00元</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-light">已付金额：10.00元</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple">币种：人民币</div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <div class="grid-content bg-purple">受理时间：2019/09/01 10:34:02</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-light">完成时间：2018/09/01 12:00:17</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-light">关联交易单：1000099039</div>
            </el-col>
        </el-row>
    </div>
</section>
</template>

<script>
export default {
    data() {
        return {
            titleText: "基本信息"
        }
    }
}
</script>

<style lang="scss">

</style>
