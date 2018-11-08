<template>
<section class="free-c">
    <div v-if="!isSubmit">
        <el-card class="box-card">
            <user-infor></user-infor>
            <change-card></change-card>
            <add-card></add-card>
            <div class="submitBox">
                <el-button type="primary" @click="submit()">确认提交</el-button>
            </div>
        </el-card>
    </div>
    <div v-if="isSubmit">
        <el-card class="box-card">
            <submit></submit>
        </el-card>
    </div>
</section>
</template>

<script>
import userInfor from "./components/userInfor";
import changeCard from "./components/changeCard";
import addCard from "./components/addCard";
import subMit from "./components/submit";
export default {
    components: {
        "user-infor": userInfor,
        "change-card": changeCard,
        "add-card": addCard,
        'submit': subMit
    },
    data() {
        return {
            titleText: "用户信息",
            isSubmit: false
        };
    },
    methods: {
        submit() {
            this.isSubmit = !this.isSubmit
        }
    }
};
</script>

<style lang="scss" scoped>

.submitBox {
    margin: 20px;
    margin-bottom: 0;
    margin-right: 0;
    display: flex;
    flex-direction: row-reverse;
}
</style>
