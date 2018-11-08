<template>
<section class="title-infor">
    <div class="titleBox">
        <span class="title-text">{{titleText}}</span>
    </div>
    <div class="rowBox">
        <el-row>
            <el-col :span="8">
                <div class="grid-content bg-purple">两节USIM卡：无</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-light">本年可免费：0次</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple">本年已免费：0次</div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <div class="grid-content bg-purple">是否可免费更USIM卡：否</div>
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
            titleText: "免费补卡"
        }
    }
}
</script>

<style lang="scss">

</style>
