<template>
<section>
    <div class="toolbar">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="订单编号">
                <el-input v-model="formInline.user" placeholder="201809909929"></el-input>
            </el-form-item>
            <el-form-item label="业务名称">
                <el-input v-model="formInline.user" placeholder=""></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" icon="el-icon-search">查询</el-button>
            </el-form-item>
        </el-form>
        <div class="hightsearch" @click="hasClick"><a>高级搜索</a></div>
    </div>
    <search-item v-if="isshow" :show-value='isshow' @isshowtools="hasClick" class="toolbarShowAnimate"></search-item>
</section>
</template>

<script>
import searchItem from "./searchitem"
export default {
    components: {
        "search-item": searchItem
    },
    data() {
        return {
            isshow: true,
            currentPage4: 4,
            formInline: {
                user: "",
                region: ""
            }
        }
    },
    methods: {
        // isShow(){
        //     this.isshow =!this.isshow
        // },
        hasClick(isshow){
            this.isshow =!this.isshow
        }
    }
};
</script>

<style lang="scss" scoped>
.toolbarShowAnimate{
    animation: toolBarShow 1s ease 0s 1 normal none running;
}
@keyframes toolBarShow {
  from {
    opacity: .2;
    top: -5px;
  }

  to {
    opacity: 1;
    top: 0px;
  }
}

@-webkit-keyframes toolBarShow {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
