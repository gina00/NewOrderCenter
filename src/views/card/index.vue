<template>
<section>
    <el-tabs v-model="activeName" @tab-click="handleClick" class="totalmenu">
    <el-tab-pane :label="userAuthentication" name="first">
        <user-a></user-a>
    </el-tab-pane>
    <el-tab-pane :label="marketingBusiness" name="second" >
        <free-c></free-c>
    </el-tab-pane>
    <el-tab-pane :label="myOccur" name="third">
        <print-f></print-f>
    </el-tab-pane>
</el-tabs>
</section>
</template>

<script>
import userAuthentication from '@/components/cardgroup/userAuthentication/index'
import freeCertification from '@/components/cardgroup/freeCertification/index'
import printForm from '@/components/cardgroup/printForm/index'
export default {
    components: {
        'user-a': userAuthentication,
        'free-c':freeCertification,
        'print-f':printForm,
    },
    data() {        
        return {
            activeName: 'first',
            userAuthentication: '用户认证',
            marketingBusiness: '免认证',
            myOccur: '打印受理单'
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
}
</script>
