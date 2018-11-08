<template>
<section class="title-infor">
    <el-card>
        <total-baseinfor></total-baseinfor>
        <message-infor></message-infor>
        <work-table></work-table>
    </el-card>
</section>
</template>

<script>
import totalBasenfor from './totalbaseinfor'
import messageInfor from './messageinfor'
import workTable from './worktable'
export default {
    components:{
        'total-baseinfor':totalBasenfor,
        'message-infor':messageInfor,
        'work-table':workTable,
    },
    data() {
        return {
            titleText: "基本信息"
        }
    }
}
</script> 

<style lang="scss">

</style>
