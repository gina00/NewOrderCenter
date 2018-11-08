<template>
<div class="titleBox">
    <span class="title-text">{{titleText}}</span>
</div>
</template>

<script>
export default {
    props:{
        titleText:"用户信息"
    }
}
</script>

<style lang="scss" scoped>
.titleBox {
    border-bottom: 1px solid #ccc;
    .title-text{
        font-size: 14px;
        color: #0af;
    }
}
</style>
