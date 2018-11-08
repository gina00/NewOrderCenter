<template>
<section class="title-infor">
    <div class="titleBox">
        <span class="title-text">{{titleText}}</span>
    </div>
    <div class="rowBox">
        <el-row>
            <el-col :span="8">
                <div class="grid-content bg-purple">客户编号：201809018800</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-light">客户名称：张三</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple">客户类型：个人</div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <div class="grid-content bg-purple">用户号码：13599837808</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-light">用户类型：手机用户</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-light">归属地：福州</div>
            </el-col>
        </el-row>
    </div>
</section>
</template>

<script>
export default {
    data() {
        return {
            titleText: "客户信息"
        }
    }
}
</script>

<style lang="scss">

</style>
