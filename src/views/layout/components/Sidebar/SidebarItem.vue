<template>
<div>
    <router-link to="/">
        <el-menu-item index="dashboard">
            <span slot="title">订单概览</span>
        </el-menu-item>
    </router-link>
    <router-link to="/totalordermanage">
        <el-menu-item index="totalordermanage/index">
            <span slot="title">统一订单管理</span>
        </el-menu-item>
    </router-link>
    <router-link to="/shoppingmanage">
    <el-menu-item index="shoppingmanage/index">
        <span slot="title">购物车管理</span>
    </el-menu-item>
    </router-link>
</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleClick(index) {
      this.$emit("showsubtab", index);
    },
    
  }
};
</script>

<style lang="scss" scoped>
</style>
