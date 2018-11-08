<template>
<section class="title-infor">
    <div class="titleBox">
        <span class="title-text">{{titleText}}</span>
    </div>
    <div class="rowBox">
        <el-row>
            <el-col :span="8">
                <div class="grid-content bg-purple">归属地市：福州</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-light">IM-I号：460000304589776</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple">ICCID号：8986009513031146948</div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <div class="grid-content bg-purple">空白卡序列号：8986009513031146948</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-light">卡类型：-</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple">优号预存话费：-</div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <div class="grid-content bg-purple">脱机支付功能：未开通</div>
            </el-col>
        </el-row>
    </div>
</section>
</template>

<script>
// import titleVue from '@/components/title/index'
export default {
    data() {
        return {
            titleText: "用户信息"
        }
    }
}
</script>

<style lang="scss">

</style>
