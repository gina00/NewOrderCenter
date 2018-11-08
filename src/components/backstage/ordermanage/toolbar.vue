<template>
<section>
    <div class="toolbar">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="审批人">
                <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
                <el-select v-model="formInline.region" placeholder="活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
        <div class="hightsearch" @click="isShow()"><a>高级查询</a></div>
    </div>
    <search-item v-if="isshow"></search-item>
</section>
</template>

<script>
import searchItem from "./searchitem";
export default {
    components: {
        "search-item": searchItem
    },

    data() {
        return {
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
        }
    }
}
</script>

<style>

</style>
