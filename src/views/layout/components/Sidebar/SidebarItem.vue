<template>
<div>
    <router-link to="/card">
        <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">补换卡</span>
        </el-menu-item>
    </router-link>
    <router-link to="/saleordercenter">
        <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">一线营业员订单管理</span>
        </el-menu-item>
    </router-link>
    <router-link to="/backstagesalesman">
    <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span slot="title">后台业务员订单管理</span>
    </el-menu-item>
    </router-link>
    <router-link to="/payform">
    <el-menu-item index="4">
        <i class="el-icon-menu"></i>
        <span slot="title">支付订单管理</span>
    </el-menu-item>
    </router-link>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
