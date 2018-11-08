<template>
    <el-card>
        <base-infor></base-infor>
        <pay-infor></pay-infor>
        <pay-detail-infor></pay-detail-infor>
    </el-card>
</template>

<script>
import baseInfor from "./baseinfor";
import payInfor from "./payinfor";
import payDetailInfor from "./paydetailinfor";
export default {
    components: {
        "base-infor": baseInfor,
        "pay-infor": payInfor,
        "pay-detail-infor": payDetailInfor
    }
}
</script>

<style lang="scss" scoped>

</style>