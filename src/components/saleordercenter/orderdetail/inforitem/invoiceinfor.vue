<template>
<section class="title-infor">
    <div class="titleBox">
        <span class="title-text">{{titleText}}</span>
    </div>
    <div class="rowBox">
        <el-row>
            <el-col :span="8">
                <div class="grid-content bg-purple">抬头类型：普通纸质发票</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-light">抬头名称：</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple">税务识别号：</div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <div class="grid-content bg-purple">发票时间：2019/09/01 10:34:02</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-light">发票项目：明细</div>
            </el-col>
        </el-row>
    </div>
</section>
</template>

<script>
export default {
    data() {
        return {
            titleText: "发票信息"
        }
    }
}
</script>

<style lang="scss">

</style>
