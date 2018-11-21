<template>
<div>
    <router-link to="/">
        <el-menu-item index="1">
            <span slot="title">订单概览</span>
        </el-menu-item>
    </router-link>
    <router-link to="/totalordermanage">
        <el-menu-item index="2">
            <span slot="title">统一订单管理</span>
        </el-menu-item>
    </router-link>
    <router-link to="/shoppingmanage">
    <el-menu-item index="3">
        <span slot="title">购物车管理</span>
    </el-menu-item>
    </router-link>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
