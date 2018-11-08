<template>
<section class="title-infor">
    <div class="titleBox">
        <span class="title-text">{{titleText}}</span>
    </div>
    <div class="rowBox">
        <el-row>
            <el-col :span="8">
                <div class="grid-content bg-purple">应付款总额：10.00</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-light">币种：人民币</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple">支付单号：10000008920</div>
            </el-col>
        </el-row>
    </div>
</section>
</template>

<script>
export default {
    data() {
        return {
            titleText: "交易信息"
        }
    }
}
</script>

<style lang="scss">

</style>
