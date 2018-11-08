<template>
<section>
    <el-card class="box-card">
    <div class="titleBox">
        <span class="title-text">{{titleText}}</span>
        <span class="date">2018年9月28日</span>
    </div>
    <print-content></print-content>
    <div class="printBox">
        <el-button type="primary">打印受理单</el-button>
    </div>
    
    </el-card>
</section>
</template>
<script>
import printcontent from './printcontent'
export default {
    components:{
        'print-content':printcontent
    }, 
    data() {
        return {
            titleText: "品牌：全球通"
        }
    }
}
</script>
<style lang="scss" scoped>
.printBox{
    display: flex;
    flex-direction: row-reverse;
    margin-top: 20px;
}
</style>

