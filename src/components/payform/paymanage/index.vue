<template>
<section>
    <div class="toolbar">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="支付编号">
                <el-input v-model="formInline.user" placeholder="支付编号"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
        <div class="hightsearch" @click="isShow()"><a>高级查询</a></div>
    </div>
    <search-item v-if="isshow"></search-item>
    <div class="ordertable">
        <el-card>
            <table-item></table-item>
            <div class="paginBox">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
                </el-pagination>
            </div>
        </el-card>
    </div>
</section>
</template>

<script>
import searchItem from "./searchitem";
import tableItem from "./tableitem";
export default {
    components: {
        "search-item": searchItem,
        "table-item": tableItem
    },
    data() {
        return {
            currentPage4: 4,
            isshow: true,
            formInline: {
                user: "",
                region: ""
            }
        }
    },
    methods: {
        onSubmit() {
            console.log("submit!");
        },
        isShow() {
            this.isshow = !this.isshow;
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
