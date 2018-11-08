<template>
<section class="title-infor">
    <div class="titleBox">
        <span class="title-text">{{titleText}}</span>
    </div>
    <div class="rowBox">
        <el-row>
            <el-col :span="8">
                <div class="grid-content bg-purple">订单编号：201809018800</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-light">受理渠道：营业厅前台</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple">订单状态：已完成</div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <div class="grid-content bg-purple">受理时间：2019/09/01 10:34:02</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-light">完成时间：2018/09/01 12:00:17</div>
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
